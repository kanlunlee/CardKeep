import Card from '../models/cardSchema.js';

export const getCards = async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
}

export const addCard = async (req, res) => {
    console.log("req.body:", req.body);
    try {
        const card = new Card(req.body);
        console.log("Created card from server:", card);
        await card.save();
        res.status(201).json(card);
    } catch (err) {
        console.error("Error saving card:", err);
        return res.status(400).json({ error: err.message });
    }

}

export const removeCard = async (req, res) => {
    try {
        const deleted = await Card.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.json({ message: 'Card deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
