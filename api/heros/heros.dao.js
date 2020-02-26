/**
 * DAO Data Access Object layer - functions directly connected to the database are defined, fetch data, save data from and to the database
 *
 */

const { model } = require("mongoose");
const heroSchema = require("./heros.model");

heroSchema.statics = {

  create: async function(data, cb) {
    const hero = new this(data);
    await hero.save(cb);
  },
  get: async function(query, cb) {
    await this.find(query, cb);
  },
  getByName: async function(query, cb) {
    console.log("We are here for you");
    await this.find(query, cb);
  },
  update: async function(query, updateData, cb) {
    await this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },
  delete: async function(query, cb) {
    await this.findOneAndDelete(query, cb);
  }
};

const herosModel = model("Heros", heroSchema);
module.exports = herosModel;
