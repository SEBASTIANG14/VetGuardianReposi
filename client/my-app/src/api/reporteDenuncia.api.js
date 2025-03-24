import axios from "axios";

const Denuncia = async (denuncia) =>
  await axios.post("http://localhost:4000/reporteDenuncia", denuncia);

export default Denuncia;

