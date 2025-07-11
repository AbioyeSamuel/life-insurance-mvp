"use client";

import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [form, setForm] = useState({
    age: '',
    income: '',
    dependents: '',
    riskTolerance: '',
  });

  const [result, setResult] = useState<{ recommendation: string; explanation: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendation`, form);
    setResult(res.data);

    // Reset form fields
    setForm({
      age: '',
      income: '',
      dependents: '',
      riskTolerance: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Life Insurance Recommendation</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="age"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            name="income"
            type="number"
            placeholder="Income"
            value={form.income}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            name="dependents"
            type="number"
            placeholder="Dependents"
            value={form.dependents}
            onChange={handleChange}
            className="input"
            required
          />
          <select
            name="riskTolerance"
            value={form.riskTolerance}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="" disabled>
              Select Risk Tolerance
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
            Get Recommendation
          </button>
        </form>
        {result && (
          <div className="mt-4 bg-green-50 p-3 rounded">
            <p className="font-bold">{result.recommendation}</p>
            <p>{result.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
