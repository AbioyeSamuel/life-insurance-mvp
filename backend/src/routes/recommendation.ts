import express from 'express';
import { pool } from '../db';

export const recommendationRouter = express.Router();

recommendationRouter.post('/', async (req, res) => {
  const { age, income, dependents, riskTolerance } = req.body;

  if (!age || !income || dependents === undefined || !riskTolerance) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  let recommendation = '';
  let explanation = '';

  if (age < 40 && riskTolerance === 'High') {
    recommendation = 'Term Life – $500,000 for 20 years';
    explanation = 'You are young with high risk tolerance. Term life is best.';
  } else if (riskTolerance === 'Low') {
    recommendation = 'Whole Life – $250,000';
    explanation = 'Whole life insurance offers security and investment value.';
  } else {
    recommendation = 'Term Life – $250,000 for 15 years';
    explanation = 'Balanced option for your profile.';
  }

  try {
    await pool.query(
      'INSERT INTO submissions (age, income, dependents, risk_tolerance, recommendation) VALUES ($1, $2, $3, $4, $5)',
      [age, income, dependents, riskTolerance, recommendation]
    );

    res.json({ recommendation, explanation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
