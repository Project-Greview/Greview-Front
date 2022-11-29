import axios from "axios";
import { loginState } from "../states/memberState";

import { instance } from "../instance";
import { useNavigation } from "react-router-dom";


const RegistPost = ({email, password, phone, name, nickname}) => {
  axios.post("members/join", 
    {headers: 
      {
        accept: "*/*",
        "Content-Type": "application/json",
      },
        email: email,
        password: password,
        phone: phone,
        name: name,
        nickname: nickname
    },
    ).then ((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// function LoginPost ({email, password}){
//     axios.post("members/login",
//       {headers:
//         {
//           accept: "*/*",
//           "Content-Type": "application/json",
//         },
//           email: email,
//           password: password,
//       },
//       ).then ((res) => {
//         console.log(res.data);
//         console.log(res.status);
//         console.log(res.statusText);
//         console.log(res.headers);
//         console.log(res.config);
//         if (res.status === 200) {
//           sessionStorage.setItem("session_token",res.data);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     };
  export { RegistPost };