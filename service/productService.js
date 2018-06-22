// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy
const model = require('../configdb/sequelize')

exports.index = function (req, res) {
  model.product.findAll().then(result => {
    res.json(result);
  })
};

exports.new = function (req, res) {
  res.send('new forum');
};

exports.create = async function (req, res) {
  await model.product.create({
    id: '',
    name: req.body.name,
    image: req.body.image,
    type: req.body.type,
    des: req.body.des,
    price: req.body.price,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(result => {
    res.send("sucess");
})
};

exports.show =  function (req, res) {
  model.product.findAll({
      where: {
        id: req.params.product
      }
    })
    .then(result => {
      res.json(result);
    })
};

exports.edit = function (req, res) {
  res.send('edit forum ' + req.params.forum);
};

exports.update = async function (req, res) {
  await model.product.update({
    id: '',
    name: req.body.name,
    image: req.body.image,
    type: req.body.type,
    des: req.body.des,
    price: req.body.price,
    updatedAt: new Date()
  }, {
    where: {
      id: req.params.product
    }
  }).then(result => {
    res.send("sucess");
})
};

exports.destroy = async function (req, res) {
  await model.product.destroy({
    where: {
      id: req.params.product
    }
  }).then(result => {
    res.send("sucess");
})

};