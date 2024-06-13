import axios from "axios";

const Perdida = async (perdida) =>
  await axios.post("http://api.sebasolivas.com/reportePerdida", perdida);

export default Perdida;