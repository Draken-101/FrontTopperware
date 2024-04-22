import createPdf from './createPdf.js';

// Llamar a la función para convertir el archivo a Base64
const generateTicket = async ({ output, ticket }) => {
  console.log(logoImage);
  const content = [
    // `public/assets/Img/Logo.jpg`
    //DATOS EMPRESA
    {
      image: img, //Logo
      fit: [141.73, 56.692],
      alignment: 'center',
    },
    { text: 'Tupperware', style: 'header', margin: [0, 10, 0, 0] },
    { text: 'Unidad Virgo', style: 'header' },
    { text: 'Ocosingo, Chiapas', style: 'header' },
    { text: '1ra Oriente sur num 303 Barrio Nuevo', style: 'header' },

    { text: 'FACTURA ELECTRÓNICA', style: 'header', margin: [0, 10, 0, 2.25] },
    { text: 'F001-000001', style: 'header', margin: [0, 2.25, 0, 0] },

    //DATOS CEBECERA FACTURAR
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ['25%', '35%', '15%', '25%'],
        body: [
          [
            { text: 'FECHA:', style: 'tHeaderLabel' },
            { text: '', style: 'tHeaderValue' },
            { text: 'HORA:', style: 'tHeaderLabel' },
            { text: '00:45:10', style: 'tHeaderValue' },
          ],
          [
            { text: 'PEDIDO:', style: 'tHeaderLabel' },
            { text: 'V001-000001', style: 'tHeaderValue', colSpan: 3 },
            {},
            {},
          ],
          [
            { text: 'PROYECTO:', style: 'tHeaderLabel' },
            { text: 'P001-000001', style: 'tHeaderValue', colSpan: 3 },
            {},
            {},
          ],
          [
            { text: 'CAJERO:', style: 'tHeaderLabel' },
            { text: 'RUTH JOIN', style: 'tHeaderValue', colSpan: 3 },
            {},
            {},
          ],
          [
            { text: 'VENDEDOR:', style: 'tHeaderLabel' },
            { text: 'MARK SAM', style: 'tHeaderValue', colSpan: 3 },
            {},
            {},
          ],
        ],
      },
      layout: 'noBorders',
    },
    //TABLA PRODUCTOS
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ['20%', '20%', '30%', '30%'],
        headerRows: 2,
        body: [
          [
            { text: 'CANT.', style: 'tProductsHeader' },
            { text: 'PRECIO', style: 'tProductsHeader', alignment: 'right' },
            { text: 'TOTAL', style: 'tProductsHeader', alignment: 'right' },
          ],
          [
            {
              text: 'PLK180024 - Pelikano Mel Bellota 18mm (2150x2440)',
              style: 'tProductsBody',
              colSpan: 3,
            },
            {},
            {},
          ],
          [
            { text: '0.50', style: 'tProductsBody', alignment: 'center' },
            { text: '295.00', style: 'tProductsBody', alignment: 'right' },
            { text: '147.50', style: 'tProductsBody', alignment: 'right' },
          ],
          [
            {
              text: 'CANTOBELLOT01 - Canto Bellota 0.45x22mm',
              style: 'tProductsBody',
              colSpan: 3,
            },
            {},
            {},
          ],
          [
            { text: '40', style: 'tProductsBody', alignment: 'center' },
            { text: '0.90', style: 'tProductsBody', alignment: 'right' },
            { text: '36.00', style: 'tProductsBody', alignment: 'right' },
          ],
          [
            {
              text: 'CANTOBELLOT01 - Canto Bellota 0.45x22mm',
              style: 'tProductsBody',
              colSpan: 3,
            },
            {},
            {},
          ],
          [
            { text: '40', style: 'tProductsBody', alignment: 'center' },
            { text: '0.90', style: 'tProductsBody', alignment: 'right' },
            { text: '36.00', style: 'tProductsBody', alignment: 'right' },
          ],
          [
            {
              text: 'CANTOBELLOT01 - Canto Bellota 0.45x22mm',
              style: 'tProductsBody',
              colSpan: 3,
            },
            {},
            {},
          ],
          [
            { text: '40', style: 'tProductsBody', alignment: 'center' },
            { text: '0.90', style: 'tProductsBody', alignment: 'right' },
            { text: '36.00', style: 'tProductsBody', alignment: 'right' },
          ],
          [
            {
              text: 'CANTOBELLOT01 - Canto Bellota 0.45x22mm',
              style: 'tProductsBody',
              colSpan: 3,
            },
            {},
            {},
          ],
          [
            { text: '40', style: 'tProductsBody', alignment: 'center' },
            { text: '0.90', style: 'tProductsBody', alignment: 'right' },
            { text: '36.00', style: 'tProductsBody', alignment: 'right' },
          ],
        ],
      },
      layout: {
        hLineWidth: function (i, node) {
          return i === 2 ? 0.5 : 0;
        },
        vLineWidth: function (i, node) {
          return 0;
        },
        hLineColor: function () {
          return '#f2f0f0';
        },
        paddingTop: function (i, node) {
          return i % 2 === 0 ? 10 : 1;
        },
      },
    },
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ['25%', '35%', '15%', '25%'],
        body: [
          [
            { text: 'TOTAL: S/', style: 'tTotals', colSpan: 2 },
            {},
            { text: '635.00', style: 'tTotals', colSpan: 2 },
            {},
          ],
          //FORMAS PAGO
          [
            {
              text: 'FORMA DE PAGO:',
              style: 'tTotals',
              alignment: 'left',
              colSpan: 4,
              margin: [0, 4, 0, 0],
            },
            {},
            {},
            {},
          ],
          [{ text: 'CONTADO', style: 'tProductsBody', colSpan: 4 }, {}, {}, {}],
          [
            { text: 'EFECTIVO: S/', style: 'tTotals', colSpan: 2 },
            {},
            { text: '635.00', style: 'tTotals', colSpan: 2 },
            {},
          ],
          //DATOS CLIENTE
          [
            {
              text: 'CLIENTE: ',
              style: 'tTotals',
              alignment: 'left',
              colSpan: 4,
              margin: [0, 6, 0, 0],
            },
            {},
            {},
            {},
          ],
          [
            { text: 'NOMBRES: ', style: 'tClientLabel' },
            { text: 'MADERAS CASTOREO S.A.', style: 'tClientValue', colSpan: 3 },
            {},
            {},
          ],
          [
            { text: 'TELEFONO: ', style: 'tClientLabel' },
            { text: '9613214782', style: 'tClientValue', colSpan: 3 },
            {},
            {},
          ],
          [
            { text: 'DIRECC.: ', style: 'tClientLabel' },
            {
              text: '15Z INT. 7X6 URB. JARDIN - SAN ISIDRO - LIMA',
              style: 'tClientValue',
              colSpan: 3,
            },
            {},
            {},
          ],
        ],
      },
      layout: 'noBorders',
    },
    //NOTA DE PIE
    {
      text: 'MUCHAS GRACIAS POR SU COMPRA!!!',
      style: 'tTotals',
      alignment: 'justify',
      margin: [0, 5],
    }
  ];

  const response = await createPdf({ content }, output);
  return response;
};

export default generateTicket;