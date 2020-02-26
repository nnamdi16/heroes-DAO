const {
  create,
  getByName,
  get,
  update,
  delete: deleteHero
} = require("./heros.dao");

exports.createHero = async function(req, res, next) {
  const { name, description } = req.body;
  const hero = {
    name,
    description
  };
  await create(hero, function(err, hero) {
    if (err) {
      res.json({
        error: err
      });
    }
    res.json({
      message: "Hero created successfully"
    });
  });
};

exports.getHero = async function(req, res, next) {
  const { name } = req.params.name;
  await getByName({ name }, function(err, heros) {
    if (err) {
      res.json({
        error: err
      });
    }
    res.json({
      heros
    });
  });
};

exports.getHeros = async function(req, res, next) {
  await get({}, function(err, heros) {
    if (err) {
      res.json({
        error: err
      });
    }
    res.json({
      heros
    });
  });
};

exports.updateHero = function(req, res, next) {
  const { name, description } = req.body;
  update({ _id: req.params.id }, { name, description }, function(err, hero) {
    if (err) {
      res.json({
        error: err
      });
    }
    res.json({
      message: "Hero updated successfully"
    });
  });
};

exports.removeHero = function(req, res, next) {
  deleteHero({ _id: req.params.id }, function(err, hero) {
    if (err) {
      res.json({
        error: err
      });
    }

    res.json({
      message: "Hero deleted successfully"
    });
  });
};
