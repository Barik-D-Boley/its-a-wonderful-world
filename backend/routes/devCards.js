// Express Router Setup
const express = require('express');
const router = express.Router();

// Import Controllers
const { getAllDevCards, deleteAllDevCards, updateDevCard, deleteDevCard, createDevCard, getDevCard } = require('../controllers/devCards');

router.route('/').get(getAllDevCards).delete(deleteAllDevCards).post(createDevCard);
router.route('/:id').get(getDevCard).patch(updateDevCard).delete(deleteDevCard);

module.exports = router;