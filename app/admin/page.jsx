"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false)

  const [sLogin, setSLogin] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    setSLogin(true)
  };

  useEffect(() => {

    const submitLogin = () => {
      setLoading(true)

      try {
        const loginCredentials = {
          username: "raloc_travels_admin",
          password: "raloc_travels_admin@123",
        };

        if (username === loginCredentials.username && password === loginCredentials.password) {
          const expiryTime = new Date().getTime() + 30 * 60 * 1000; // 30 minutes
          localStorage.setItem(
            "auth",
            JSON.stringify({ username, expiryTime })
          );
          toast.success("Login successful!");
          setTimeout(() => {

            router.push("/admin/dashboard"); // Redirect after showing the success message
          }, 2000);
        } else {
          toast.error("Invalid username or password.");
          setLoading(false)
        }
      } catch (e) {
        console.log(e)
        setLoading(false)
      } finally {
        // setLoading(false)
      }
    }

    if (sLogin) {
      submitLogin()
      setSLogin(false)
    }

  }, [sLogin])

  return (
    <section className="bg-[#0d4785]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6">
            <Image
              className="w-12 h-auto mx-auto block"
              src="/logo.png"
              alt="logo"
              width={1000}
              height={1000}
            />
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 text-sm"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center gap-2 ${loading && 'bg-blue-300'}`}
              >
                {loading ? <><FontAwesomeIcon icon={faSpinner} spin width={20} height={20} /> <span>Signing in...</span></> : <span>
                  Sign in</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
