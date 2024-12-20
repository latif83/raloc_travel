"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const Auth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const loginCredentials = {
    username: "raloc_travels_admin",
    password: "raloc_travels_admin@123",
  };

  // Login function
  const login = (username, password) => {
    if (
      username === loginCredentials.username &&
      password === loginCredentials.password
    ) {
      const expiryTime = new Date().getTime() + 30 * 60 * 1000; // 30 minutes
      localStorage.setItem("auth", JSON.stringify({ username, expiryTime }));
      setIsAuthenticated(true);
    } else {
      toast.error("Invalid username or password!");
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    router.push("/admin");
  };

  // Check authentication on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const { username, expiryTime } = JSON.parse(storedAuth);
      const currentTime = new Date().getTime();

      if (
        username === loginCredentials.username &&
        currentTime < expiryTime
      ) {
        setIsAuthenticated(true);

        // Schedule automatic logout when the session expires
        const timeout = setTimeout(logout, expiryTime - currentTime);
        return () => clearTimeout(timeout);
      }
    }

    setIsAuthenticated(false);
    router.push("/admin");
  }, []);

  // Render children if authenticated
  return isAuthenticated ? (
    children
  ) : (
    <div className="flex h-svh bg-black items-center justify-center text-white">
      <p>Checking Login Access...</p>
    </div>
  );
};
