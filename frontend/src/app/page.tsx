"use client";

import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [form, setForm] = useState({
    age: '',
    income: '',
    dependents: '',
    riskTolerance: 'Medium',
  });

  const [result, setResult] = useState<{ recommendation: string; explanation: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/recommendation', form);
    setResult(res.data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Life Insurance Recommendation</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="age" type="number" placeholder="Age" onChange={handleChange} className="input" required />
          <input name="income" type="number" placeholder="Income" onChange={handleChange} className="input" required />
          <input name="dependents" type="number" placeholder="Dependents" onChange={handleChange} className="input" required />
          <select name="riskTolerance" onChange={handleChange} className="input">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Recommendation</button>
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
