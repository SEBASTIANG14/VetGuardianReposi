const getUserProfile = async (id) => {
 const requestOptions = {
  method: "GET",
  redirect: "follow"
 };
 const response = await fetch(`http://api.sebasolivas.com/perfil/${id}`, requestOptions)

 return response.json()
}

export default getUserProfile;
