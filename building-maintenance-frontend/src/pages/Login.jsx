import React from "react";

const Login = () => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background:"#f1f5f9"
    }}>
      <div style={{
        padding:"40px",
        background:"white",
        borderRadius:"10px"
      }}>
        <h2>Login</h2>

        <input placeholder="Email" /><br/><br/>
        <input placeholder="Password" type="password"/><br/><br/>

        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
