import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema( {
    name: { type: String, required: true },
    image_uris: {normal: String },
    mana_cost: { type: String },
    type_line: { type: String, required: true },
    oracle_text: { type: String, required: true },
    
    power: String,
    toughness: String
});

const Card = mongoose.model('Card', cardSchema);

export default Card;
