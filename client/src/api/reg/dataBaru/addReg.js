import axios from 'axios';

const addRegBencana = async (token, data) => {
    try {
        const res = await axios.post(`http://${process.env.REACT_APP_HOST}:5000/api/v1/reg-bencana-main/add-reg-bencana`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res
    }
    catch (error) {
        return error
    }
}

export default addRegBencana