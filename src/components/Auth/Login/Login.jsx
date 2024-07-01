import classes from "./Login.module.scss";
import { auth } from "../../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; // Import prop-types

// LOGIN
const Login = ({onLoginSuccess}) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Get ID token
        user
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            console.log("Firebase ID Token:", idToken); // Use this token in Postman
            onLoginSuccess();
            navigate('/dashboard');
          })
          .catch(function (error) {
            console.error("Error getting ID token:", error);
          });

        //added these myself
        console.log("success logging in");
        console.log(user);
      })
      .catch((error) => {
        setError(true);
        console.error("Login failed:", error);
      });
  };
  // LOGIN

  return (
    <>
      <form onSubmit={handleLogin} className={`${classes.loginForm}`}>
        <input
          placeholder="Votre email"
          type="email"
          name="loginEmail"
          id="loginEmail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Votre mot de passe"
          type="password"
          name="passwordLogin"
          id="passwordLogin"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se Connecter</button>
        {error && <span>Votre mail ou mot de passe est incorrect!</span>}
      </form>
    </>
  );
};



Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired // Validate the onLoginSuccess prop
};
export default Login;
