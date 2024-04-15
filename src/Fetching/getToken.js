export async function getToken(email, password) {
  try {
    const response = await fetch('http://localhost:3000/api/auth/singin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    let data = await response.json();
    if (data.error) {
      console.log('Error 400:', data.message);
      return data;
    } else {
      console.log('Token recibido:', data.token);
      return data;
    }

  } catch (error) {
    console.error('Error en la solicitud POST:', error);
    throw error;
  }
}
