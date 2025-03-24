import axios from "axios";

const verAdopciones = async () => await axios.get("http://localhost:4000/mascotas");

const adoptarMascota = async (id_usuario, id_mascota) => {
  await axios.post("http://localhost:4000/adoptar", { id_usuario, id_mascota });
};

const getUserInfo= async (id_usuario) => {
  await axios.get("http://localhost:4000/adoptar", {
  params: {
    id_usuario: id_usuario,
  }
});
};

const getUserProfile= async (id_usuario) => {
  await axios.get("http://localhost:4000/adoptar", {
  params: {
    id_usuario: id_usuario,
  }
});
};


export { verAdopciones, adoptarMascota };
