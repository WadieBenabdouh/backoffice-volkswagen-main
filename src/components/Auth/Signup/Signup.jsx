import classes from "./Signup.module.scss";
import { useState } from "react";
import { auth } from "../../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// LOGIN
const Signup = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("success signing up");
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
      <form onSubmit={handleSignup} className={`${classes.signupForm}`}>
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
        <button type="submit">Creer un compte</button>
        {error && <span>Votre mail ou mot de passe est incorrect!</span>}
      </form>
    </>
  );
};

export default Signup;
