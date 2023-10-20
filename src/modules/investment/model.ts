var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const investmentSchema = new Schema(
  {
    name: { type: String },
    type: { type: String },
    amount: { type: Number },
  },
  { timestamps: true }
);

const investmentCollection = "investment";

// module.exports = mongoose.model('bookmarks', articleSchema);
export { investmentSchema, investmentCollection };
