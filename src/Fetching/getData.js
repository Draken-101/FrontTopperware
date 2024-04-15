export async function getData(url) {
    try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
            console.log(response.message);
        }
        const data = [...await response.json()]
        return data;
      } catch (error) {
        console.error('Error en la solicitud GET:', error);
      }
}