import { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center p-5">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white">

        <h1 className="text-4xl font-bold text-center text-gray-800">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Join us today
        </p>

        <form className="space-y-5">

          {/* Name */}

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <div className="relative mt-2">
              <User
                size={20}
                className="absolute left-4 top-3.5 text-gray-400"
              />

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Email
            </label>

            <div className="relative mt-2">
              <Mail
                size={20}
                className="absolute left-4 top-3.5 text-gray-400"
              />

              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>

            <div className="relative mt-2">
              <Lock
                size={20}
                className="absolute left-4 top-3.5 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition">
            Create Account
          </button>

        </form>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-semibold">
            Login
          </a>
        </p>

      </div>

    </div>
  );
}