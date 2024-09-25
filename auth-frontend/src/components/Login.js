import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../assets/1.jpg";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                { username, password }
            );
            alert("Login successful!");
            window.open("https://hertz-portfolio.vercel.app/", "_blank");

            setUsername("");
            setPassword("");
        } catch (error) {
            alert("Error: " + error.response.data.message);
        }
    };

    return (
        <div className="w-full h-screen flex items-start ">
            <div className="relative w-full h-full flex flex-col">
                <img
                    src={Image}
                    className="h-full w-full object-cover"
                    alt="side-effect"
                ></img>
            </div>
            <div className="w-full h-full bg-white flex flex-col p-20 justify-between">
                <h1 className="flex text-base text-gray-900 font-semibold gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                    Hertz Authentication
                </h1>

                <div className="w-full flex flex-col max-w-[550px]">
                    <div className="w-full flex flex-col mb-2">
                        <h3 className="text-3xl font-semibold mb-4">Login</h3>
                        <p className="text-sm mb-2">Welcome back</p>
                    </div>
                    <form
                        className="w-auto p-0 bg-transparent rounded-none shadow-none"
                        onSubmit={handleSubmit}
                    >
                        <div className="w-full flex flex-col">
                            <input
                                className="w-full text-black border-b border-black outline-none focus:outline-none py-2 bg-transparent my-4"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input
                                className="w-full text-black border-b border-black outline-none focus:outline-none py-2 bg-transparent my-4"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <div className="w-full flex flex-col my-4">
                                <button
                                    className="w-full text-white my-2 bg-black font-semibold rounded-md p-4 text-center flex items-center justify-center"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full flex items-center justify-between">
                        <div className="w-full flex flex-col my-4">
                            <Link
                                to="/register"
                                className="w-full text-black my-2 bg-white border-2 font-semibold border-black rounded-md p-4 text-center flex items-center justify-center"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="items-center flex justify-center max-w-[550px]">
                    <p className="text-sm font-normal text-black">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="font-semibold underline underline-offset-2 cursor-pointer"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
