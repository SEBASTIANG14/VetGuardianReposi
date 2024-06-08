import axios from "axios";

const darAdopcion = async (mascota) =>
  await axios.post("http://localhost:4000/darAdopcion", mascota);

export default darAdopcion;
