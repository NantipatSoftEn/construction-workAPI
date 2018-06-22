// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy
const model = require('../configdb/sequelize')

exports.index = function (req, res) {
    model.users.findAll().then(result => {
        res.json(result);
    })
};

exports.new = function (req, res) {
    res.send('new forum');
};

exports.create = async function (req, res) {
    await model.users.create({
        id: '',
        name: req.body.name,
        lastname: req.body.lastname,
        telephone: req.body.telephone,
        gender: req.body.gender,
        age: req.body.age,
    }).then(result => {
        res.send("sucess");
    })
};

exports.show = function (req, res) {
    model.users.findAll({
            where: {
                id: req.params.user
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
    await model.users.update({
        name: req.body.name,
        lastname: req.body.lastname,
        telephone: req.body.telephone,
        gender: req.body.gender,
        age: req.body.age,
        updatedAt: new Date()
    }, {
        where: {
            id: req.params.user
        }
    }).then(result => {
        res.send("sucess");
    })
};

exports.destroy = async function (req, res) {
    await model.users.destroy({
        where: {
            id: req.params.user
        }
    }).then(result => {
        res.send("sucess");
    })

};