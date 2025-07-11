"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState({
    age: "",
    income: "",
    dependents: "",
    riskTolerance: "",
  });

  const [result, setResult] = useState<{ recommendation: string; explanation: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendation`, form);
    setResult(res.data);
    setForm({ age: "", income: "", dependents: "", riskTolerance: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 py-12">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg border border-blue-100">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Life Insurance Recommendation
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Age</label>
            <input
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Income</label>
            <input
              name="income"
              type="number"
              value={form.income}
              onChange={handleChange}
              placeholder="Enter your income"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Dependents</label>
            <input
              name="dependents"
              type="number"
              value={form.dependents}
              onChange={handleChange}
              placeholder="Number of dependents"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Risk Tolerance</label>
            <select
              name="riskTolerance"
              value={form.riskTolerance}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="" disabled>
                Select Risk Tolerance
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Get Recommendation
          </button>
        </form>

        {result && (
          <div className="mt-6 bg-green-50 p-4 rounded-md border border-green-300 text-green-800">
            <p className="font-bold text-lg">{result.recommendation}</p>
            <p className="text-sm mt-1">{result.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
