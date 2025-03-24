import axios from "axios";

const darAdopcion = async (form) => {
  await axios.post("http://localhost:4000/darAdopcion", form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
}

export default darAdopcion;
