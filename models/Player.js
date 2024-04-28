const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fans: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  isInGame: { type: Boolean, default: false },
  // You might want to add more fields depending on your game's requirements
});

module.exports = mongoose.model('Player', playerSchema);
