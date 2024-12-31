'use client'; // If you're using client-side hooks (like useState)

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use `useRouter` from `next/navigation` in Next.js 13

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (email === '' || password === '') {
      setError('Please fill in both fields');
    } else {
      // Mock login check (replace with actual logic)
      if (email === 'test@example.com' && password === 'password') {
        router.push('/'); // Redirect to main page
      } else {
        setError('Invalid email or password');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 to-pink-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">🐾 SMALLS Login</h2>
          <p className="text-xl text-gray-600 mt-2">Welcome back, kitty lover! 🐱</p>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4 font-semibold">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-lg font-semibold rounded-lg hover:from-yellow-500 hover:to-pink-600 transition duration-300">
            Login 🐾
          </button>
        </form>

        {/* Footer Section */}
        <div className="text-center mt-6">
          <p className="text-gray-600">Dont have an account? <a href="/signup" className="text-yellow-500 font-semibold hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}
