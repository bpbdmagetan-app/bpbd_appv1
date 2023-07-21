import axios from 'axios';

const delArsip = async (token, id) => {
    try {
        const res = await axios.delete(`http://${process.env.REACT_APP_HOST}:5000/api/v1/archive-inactive/del-data`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { id: id }
        })
        console.log(res.message)
        return res
    }
    catch (error) {
        return error
    }
}

export default delArsip