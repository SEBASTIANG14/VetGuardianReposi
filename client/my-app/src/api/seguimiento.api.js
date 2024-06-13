
const getUser = async (id) => {
 const requestOptions = {
  method: "GET",
  redirect: "follow"
 };
 const response = await fetch(`http://api.sebasolivas.com/seguimiento/${id}`, requestOptions)

 return response.json()
}

export default getUser;
