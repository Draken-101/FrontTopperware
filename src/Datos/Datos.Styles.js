import axios from "axios";

export const getStyles = async () => {
    try {
        let res = await axios.get('http://localhost:3000/api/estilos');
        return res.data;
    } catch (error) {
        return error;
    }
}