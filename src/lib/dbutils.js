var mongoose = require("mongoose");

const getCollection = (space, collection, schema) => {
  const db = mongoose.connection.useDb(`infinitereserve_${space}`);
  return db.model(collection, schema);
};

const getGlobalCollection = (collection, schema) => {
  const db = mongoose.connection.useDb(`infinitereserve`);
  return db.model(collection, schema);
};

module.exports = { getCollection, getGlobalCollection };
