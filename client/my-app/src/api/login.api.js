import axios from 'axios'

const loginUser = async (user) =>
    await axios.post('http://api.sebasolivas.com/login', user);

export default loginUser;