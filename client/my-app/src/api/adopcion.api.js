import axios from "axios";

const verAdopciones = async () =>
  await axios.get("http://localhost:4000/mascotas");

export default verAdopciones;
