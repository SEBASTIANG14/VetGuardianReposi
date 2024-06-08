import axios from "axios";

const verAdopciones = async () => await axios.get("http://localhost:4000/mascotas");

const adoptarMascota = async (id_usuario, id_mascota) => {
  await axios.post("http://localhost:4000/adoptar", { id_usuario, id_mascota });
};

export { verAdopciones, adoptarMascota };
