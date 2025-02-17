import React from "react";
import '../styles/Auth.css'
import * as Components from '../js/mainAuthen.js';
import {useContext, useState} from "react";
import axios from "axios"; 
import { TokenContext } from "../utils/TokenContext";
function Auth() {
  /*  const [signIn, toggle] = useState(true)
    const [signupData, setsignupData] = useState([])
    const [loginData, setloginData] = useState([])
    const {loginResponse, setloginResponse} = useContext(TokenContext)
    const api_signup = "http://localhost/backend/controllers/Signup.php"; 
    const api_login = "http://localhost/backend/controllers/Login.php";
    const handleSubmitSignup = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post(api_signup, JSON.stringify(signupData))
            setloginResponse(response.data)
        } catch (err) {
            throw new Error(err)
        }
    }
    const handleSubmitLogin = async(e) => {
        e.preventDefault()
        try {
            await axios.post(api_login, JSON.stringify(loginData))
        } catch (err) {
            throw new Error(err)
        }
    }
    const handleChangeSignup = (e) => {
        const {name,value} = e.target; 
        setsignupData(prev=>({...prev, [name] : value}))
    } 
    const handleChangeLogin = (e) => {
        const {name,value} = e.target; 
        setloginData(prev=>({...prev, [name] : value}))
    }*/
    const [data,setData]=useState({
        identifiant:'',
        email:'',
        password:''
    })
    const handelChangeRegister=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }
    const submitForm=(e)=>{
        e.preventDefault();
       const sendData={
            identifiant:data.identifiant,
            email:data.email,
            password:data.password
        }
    }
     return(
      <div className="Auth">
         <div className="overlayblk"></div>
        <h2> Bienvenue dans L'application De Gestion Des Projets AGPFE </h2>
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form onSubmit={submitForm}>
                     <Components.Title>Créer un Compte</Components.Title>
                     <Components.Input type='text' placeholder='Identifiant' name="identifiant" value={data.identifiant} onChange={handelChangeRegister} required/>
                     <Components.Input type='email' placeholder='Email' name="email" value={data.email} onChange={handelChangeRegister} required/>
                     <Components.Input type='password' placeholder='Mot de Pass' value={data.password} name="password" onChange={handelChangeRegister} required/>
                     <Components.alert loginResponse={loginResponse}>{(() => {switch(loginResponse){case "auth_failure": return "Vérifier votre Identifiant"; case "auth_success": toggle(true); case "duplicate_email": "Ce Couriel existe déja"}})()}</Components.alert>
                     <Components.Button>S'inscrire</Components.Button>  
                 </Components.Form>
             </Components.SignUpContainer>
             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={handleSubmitLogin}>
                      <Components.Title>Connexion</Components.Title>
                      <Components.Input type='email' placeholder='Email' name="email" onChange={handleChangeLogin} required/>
                      <Components.Input type='password' placeholder='Mot de Pass' name="mdp" onChange={handleChangeLogin} required/>
                      <Components.Anchor href='forgetPass'>Mot de Passe Oublié?</Components.Anchor>
                      <Components.Button>Se Connecter</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Content de te Revoir!</Components.Title>
                     <Components.Paragraph>
                     Pour Rester en Contact avec Nous, Veuillez vous Connecter avec vos Informations Personnelles
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>Se Connecter</Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Salut!</Components.Title>
                       <Components.Paragraph>
                       Entrez vos Données Personnelles et Commencez votre Parcours avec Notre Application de Gestion de Projects de Fin D'étude
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                           S'inscrire
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         
         </div>
     )
}
export default Auth;