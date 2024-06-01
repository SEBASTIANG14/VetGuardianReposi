import axios from 'axios';

const registerUser = async (user) =>
    await axios.post('http://localhost:4000/signup', user);

export default registerUser;

