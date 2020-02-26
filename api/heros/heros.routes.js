const {
  createHero,
  getHeros,
  getHero,
  updateHero,
  removeHero
} = require("./heros.controller");

module.exports = function(router) {
  router.post("/create", createHero);
  router.get("/get", getHeros);
  router.get("/get/:name", getHero);
  // router.put("/update/:id", updateHero);
  router.delete("/remove/:id", removeHero);
};
