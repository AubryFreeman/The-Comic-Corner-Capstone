// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { getUserByEmail } from "../Services/UserService.js"

// export const Register = () => {
//     const [user, setUser] = useState({
//         name: "",
//         email: ""
//     })
//     let navigate = useNavigate()

//     const registerNewUser = () => {
//     return createUser(user).then((createdUser) => {
//         if(createdUser.hasOwnProperty("id")){
//             localStorage.setItem(
//                 "comic_user",
//                 JSON.stringify({
//                     id: createdUser.id
//                 })
//             )

//             navigate("/")
//         }
//     })

//     }

//     const handleRegister = (event) => {
//         event.preventDefault()
//         return getUserByEmail(user.email).then((response) => {
//             if(response.length > 0){
//                 window.alert("This email is already in use")
//             } else {
//                 registerNewUser()
//             }
//         })
//     }
// }
