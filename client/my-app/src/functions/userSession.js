export const getUserSession= () => {
 const user = sessionStorage.getItem("id_usuario")
 if (user === null) return null
 return JSON.parse(user)
}
