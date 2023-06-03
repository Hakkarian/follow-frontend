import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const fetchUsere = async () => {
    console.log('here')
    const { data: result } = await axios.get('/users');
    console.log('user api', result)
    return result;
}