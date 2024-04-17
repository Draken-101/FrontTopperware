export async function usePost(url, body) {
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token':  localStorage.getItem('token')
            },
            body: body
        });
        let data = await response.json();
        if (!response.ok) {
            console.log(`HTTP error! Status: ${response.status}`);
            return false;
        }
        return data;
    } catch (error) {
        console.error('Error en la solicitud POST:', error);
    }
}
