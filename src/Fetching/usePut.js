export async function usePut(url, token, body) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(body)
        });
        let data = await response.json();
        if (!response.ok) {
            console.log(`HTTP error! Status: ${response.status}`);
            return false;
        }
        return data;
    } catch (error) {
        console.error('Error en la solicitud PUT:', error);
    }
}
