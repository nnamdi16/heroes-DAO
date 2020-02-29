/**
 * DAO Data Access Object layer - functions directly connected to the database are defined, fetch data, save data from and to the database
 *
 */

const { model } = require("mongoose");
const heroSchema = require("./heros.model");

heroSchema.statics = {
  createHero: function(data, cb) {
    const hero = new HerosModel(data);
    hero.save(cb);
  },
  get: async function(query, cb) {
    await HerosModel.find(query, cb);
  },
  getByName: async function(query, cb) {
    await HerosModel.findOne(query, cb);
  },
  update: async function(query, updateData, cb) {
    await HerosModel.findOneAndUpdate(
      query,
      { $set: updateData },
      { new: true },
      cb
    );
  },
  delete: async function(query, cb) {
    await HerosModel.findOneAndDelete(query, cb);
  }
};

const HerosModel = model("Heros", heroSchema);
module.exports = HerosModel;
