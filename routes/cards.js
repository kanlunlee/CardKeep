import express from 'express';
import { getCards, addCard, removeCard } from '../controllers/cardsController.js';

const router = express.Router();

router.get('/cards', getCards);
router.post('/cards', addCard);
router.delete('/cards/:id', removeCard);

export default router;
