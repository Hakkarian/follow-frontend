import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const fetchUsere = async () => {
    const { data: result } = await axios.get('/users');
    return result;
}

// export const updateFollowinge = async (data) => {
//   console.log("here", data);
//   const { data: result } = await axios.patch("/users", data);
//   console.log("user api follow", result);
//   return result;
// };