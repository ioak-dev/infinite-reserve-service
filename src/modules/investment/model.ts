var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const investmentSchema = new Schema(
  {
    name: { type: String },
    kakeibo: { type: String },
    transactionId: { type: String },
  },
  { timestamps: true }
);

const investmentCollection = "investment";

// module.exports = mongoose.model('bookmarks', articleSchema);
export { investmentSchema, investmentCollection };
