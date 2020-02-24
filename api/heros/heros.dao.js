/**
 * DAO Data Access Object layer - functions directly connected to the database are defined, fetch data, save data from and to the database
 *
 */

const { model } = require("mongoose");
const heroSchema = require("./heros.model");

heroSchema.statics = {
  create: function(data, cb) {
    const hero = new this(data);
    hero.save(cb);
  },
  get: function(query, cb) {
    this.find(query, cb);
  },
  getByName: function(query, cb) {
    this.find(query, cb);
  },
  update: function(query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },
  delete: function(query, cb) {
    this.findOneAndDelete(query, cb);
  }
};

const herosModel = model("Heros", heroSchema);
module.exports = herosModel;
