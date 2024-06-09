
const getUser = async (id) => {
 const requestOptions = {
  method: "GET",
  redirect: "follow"
 };
 const response = await fetch(`http://localhost:4000/seguimiento/${id}`, requestOptions)

 return response.json()
}

export default getUser;
