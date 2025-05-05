"use client";

import { useState, useEffect } from "react";
import { UserLogin } from "@/services/auth";
import { setJwtToken, getJwtToken, deleteJwtToken } from "@/util/token";
import { checkToken } from "@/middleware/auth";

export default function LoginPage() {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await UserLogin(email, password);

    console.log(response);
    setJwtToken(response.data.token, response.data.user.email);
  };

  // Example fix: Ensure any effects are only run on the client
  useEffect(() => {
    async function checkTokenValid() {
      const token = getJwtToken();
      if (token?.token) {
        try {
          const res = await checkToken(token.token);

          if (res) {
            setIsAuth(true);
          }
        } catch (e) {
          deleteJwtToken();
          console.error("Error checking token:", e);
        }
      } else {
        setIsAuth(false);
      }
    }
    checkTokenValid();
    console.log("mounted");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <div>isAuth - {isAuth.toString()}</div>
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </form>
      </div>
    </main>
  );
}
