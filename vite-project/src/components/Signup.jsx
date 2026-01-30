import { useState } from "react";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const signupHandler = () => {
        fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
            .then(res => res.json())
            .then(data => {
                setMessage(data.message || "Signup successful");
            })
            .catch(() => {
                setMessage("Something went wrong");
            });
    };

    return (
        <div>
            <h2>Signup</h2>

            <input
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />

            <input
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br />

            <button onClick={signupHandler}>Signup</button>

            <p>{message}</p>
        </div>
    );
}

export default Signup;
