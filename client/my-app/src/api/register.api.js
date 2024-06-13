import axios from 'axios';

const registerUser = async (user) =>
    await axios.post('http://api.sebasolivas.com/signup', user);

export default registerUser;

