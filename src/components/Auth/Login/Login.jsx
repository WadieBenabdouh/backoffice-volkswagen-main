import classes from "./Login.module.scss";
import { useState } from "react";
import { auth } from "../../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
  };

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

export default Login;
