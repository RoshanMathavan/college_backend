const express = require('express');
const Application = require('../models/Application');

const router = express.Router();

// Get all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new application
router.post('/', async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    const savedApplication = await newApplication.save();
    res.status(201).json(savedApplication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update an application
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedApplication = await Application.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedApplication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an application
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Application.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
