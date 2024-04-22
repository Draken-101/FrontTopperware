import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { NavAdmin } from "./Components/Molecules/NavAdmin";
import { ContentProducts } from "./Components/Organims/ContentProducts";
import styled from 'styled-components';
import { ProductForm } from "./Components/Organims/ProductForm";
import { ControlsVentas } from "./Components/Organims/ControlsVentas";
import { useEffect, useState } from "react";
import { getStyles } from "../../Datos/Datos.Styles";
import { getProducts } from "../../Datos/Datos.Products";
import { buscarStyle } from "./Datos/Datos.Functions";
import { Alert } from "./Components/Organims/Alert";
import { ConfirmDelete } from "./Components/Molecules/ConfirmDelete";
import { ConfirmVenta } from "./Components/Molecules/ConfirmVenta";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    justify-items: flex-start;
`;
export function Vender() {
    const [open, setOpen] = useState(false);
    const [openConfirmVenta, setOpenConfirmVenta] = useState(true);
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [products, setProducts] = useState([]);
    const [styles, setStyles] = useState([]);
    const [styleSelected, setStyleSelected] = useState({});
    const [stylesBuscar, setStylesBuscar] = useState([]);
    const [fetchTrigger, setFetchTrigger] = useState(true);
    const [ticket, setTicket] = useState([]);
    const [alert, setAlert] = useState(null);
    const [carga, setCarga] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let fetchedProducts = await getProducts();
                let fetchedStyles = await getStyles();
                setProducts(fetchedProducts)
                setStyleSelected({ ...fetchedStyles[0], nombreProducto: fetchedProducts.find((product) => product.clave === fetchedStyles[0].clave.split('-')[0]).nombre })
                setStylesBuscar(fetchedStyles);
                setStyles(fetchedStyles)
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, [fetchTrigger]);
    return (
        <Container>
            <Alert open={openConfirmVenta} 
            Content={<ConfirmVenta
                close={(value) => setOpenConfirmVenta(value)}
                ventaTotal={() => {
                    if (ticket[0]) {
                        return ticket.reduce((total, product) => {
                            return total += product.cantidad * product.precio;
                        }, 0)
                    } else {
                        return 0
                    }
                }}
            />}/>
            <Alert open={openConfirmDelete}
                Content={<ConfirmDelete DeleteAll={(value) => {
                    if (value) {
                        setOpenConfirmDelete(false);
                        setTicket([]);
                    } else
                        setOpenConfirmDelete(false);
                }} />}
            />
            <HeaderAdmin Title={'Vender'} icon={'public/assets/Icons/icons8-ventas-96.png'} Nav={<NavAdmin />} />
            <ContentProducts
                Edit={(style) => {
                    let newStyle = styles.find((s) => s.clave === style.clave);
                    setStyleSelected({ ...newStyle, nombreProducto: style.nombreProducto })
                }}
                Delete={(clave) => {
                    let newTicket = [...ticket.filter((product) => product.clave !== clave)];
                    setTicket([...newTicket]);
                }}
                Styles={ticket}
                Buscar={(value, type) => {
                    let styleFound = buscarStyle(value, type, styles);
                    if (styleFound.clave !== undefined) {
                        setStyleSelected({ ...styleFound, nombreProducto: products.find((product) => product.clave === styleFound.clave.split('-')[0]).nombre })
                    } else {
                        setStyleSelected({});
                    }
                }
                } />
            <ProductForm Style={styleSelected}
                Add={(style) => {
                    if (ticket.find((product) => product.clave === style.clave)) {
                        let newTicket = [...ticket.map((product) => {
                            if (product.clave === style.clave) return style;
                            return product;
                        })]
                        setTicket([...newTicket])
                    } else {
                        let newTicket = [...ticket]
                        newTicket.push({ ...style })
                        setTicket([...newTicket]);
                    }
                }
                } />
            <ControlsVentas
                cantidadTotal={() => {
                    if (ticket[0]) {
                        return ticket.reduce((total, product) => {
                            return total += product.cantidad;
                        }, 0)
                    } else {
                        return 0
                    }
                }}
                ventaTotal={() => {
                    if (ticket[0]) {
                        return ticket.reduce((total, product) => {
                            return total += product.cantidad * product.precio;
                        }, 0)
                    } else {
                        return 0
                    }
                }}
                DeleteAll={() => {
                    if (ticket[0]) {
                        setOpenConfirmDelete(true)
                    }
                }} />
        </Container>
    )
}