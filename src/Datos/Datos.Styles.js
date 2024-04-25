import axios from "axios";

export const getStyles = async () => {
    try {
        let res = await axios.get('http://3.135.157.51:27017/api/estilos');
        return res.data;
    } catch (error) {
        return error;
    }
}