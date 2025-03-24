import axios from "axios";

const Perdida = async (perdida) =>
  await axios.post("http://localhost:4000/reportePerdida", perdida);

export default Perdida;