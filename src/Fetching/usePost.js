
export async function usePost(url, body) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                'token':  localStorage.getItem('token')
            },
            body: body
        });
        let data = await response.json();
        if (!response.ok) {
            console.log(`HTTP error! Status: ${response.status}`);
            console.log(response)
            return false;
        }
        return data;
    } catch (error) {
        console.log('Error en la solicitud POST:', error);
    }
}
