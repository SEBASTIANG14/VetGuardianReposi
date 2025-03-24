import axios from 'axios'

const loginUser = async (user) =>
    await axios.post('http://localhost:4000/login', user);

export default loginUser;