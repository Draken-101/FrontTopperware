export async function useDelete(url) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'token':  localStorage.getItem('token')
            }
        });
        let data = await response.json();
        if (!response.ok) {
            console.log(`HTTP error! Status: ${response.status}`);
            return false;
        }
        return data;
    } catch (error) {
        console.error('Error en la solicitud DELETE:', error);
    }
}
