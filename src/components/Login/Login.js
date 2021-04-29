import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useHistory, useLocation } from 'react-router';
import logo from '../icons/Group 573.png'
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;

            var token = credential.accessToken;
            
            history.replace(from)
            console.log(result.user)

            const {displayName, photoURL, email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };

            setLoggedInUser(result.user);
            setUserToken();
            
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });

        const setUserToken = () =>{
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function(idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
              }).catch(function(error) {
                // Handle error
              });
        }
    }
    return (
        <div style={{textAlign:'center', margin:'50px auto'}}>
            <h3>Please Login with Google</h3>
            <button style={{padding:'10px', borderRadius:'5px', boxShadow:'7px 7px 7px gray'}} onClick={handleSignIn}><img style={{width:'20px'}} src={logo} alt=""/>  Google Sign in</button>
            
        </div>
    );
};

export default Login;