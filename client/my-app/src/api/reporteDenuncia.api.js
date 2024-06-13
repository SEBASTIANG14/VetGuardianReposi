import axios from "axios";

const Denuncia = async (denuncia) =>
  await axios.post("http://api.sebasolivas.com/reporteDenuncia", denuncia);

export default Denuncia;

