import axios from "axios";

const darAdopcion = async (form) => {
  await axios.post("http://api.sebasolivas.com/darAdopcion", form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
}

export default darAdopcion;
