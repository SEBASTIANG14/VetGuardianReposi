const getUserProfile = async (id) => {
 const requestOptions = {
  method: "GET",
  redirect: "follow"
 };
 const response = await fetch(`http://localhost:4000/perfil/${id}`, requestOptions)

 return response.json()
}

export default getUserProfile;
