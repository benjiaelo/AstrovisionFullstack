import React, { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useSignIn } from "react-auth-kit";

const Login = () => {
  const signIn = useSignIn;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setIsLoading(false);
      toast.success("Login Successful...");
      // Signed in
      const user = userCredential.user;
      navigate("/");
      // ...
    });

    signIn({
      token: auth.currentUser.getIdToken(),
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: { email },
    }).catch((error) => {
      toast.error(error.message);
      setIsLoading(false);
    });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <ToastContainer />
      {isLoading}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>

            <form action="" onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>

              <div className={styles.links}>
                <Link to="/reset"> Reset Password</Link>
              </div>
              <p>-- or --</p>
              <button
                className="--btn --btn-danger --btn-block"
                onClick={signInWithGoogle}>
                <FaGoogle color="#fff" />
                &nbsp; Login with Google
              </button>
              <span className={styles.register}>
                <p>Don't have an account?</p>
                <Link to="/register">Register</Link>
              </span>
            </form>
          </div>
        </Card>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
