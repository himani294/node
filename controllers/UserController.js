exports.FetchAllData = function(req, res) {
    model.User.findAll().then(users => {
        res.send(users)
    })
};

exports.addData = function(req, res) {
    username = req.body.username;
    birthday = req.body.birthday;
   
    model.User.create({ username , birthday })
    .then(users => {
        res.send(users)
    })
};

exports.editData = function(req, res) {
    id = req.body.id;
    username = req.body.username;
    birthday = req.body.birthday;
   
    model.User.update({
        username,birthday
      }, {
        where: {
            id: id
        }
        
      }).then(users => {
          res.send(users)
      });
};

exports.deleteData = function(req, res) {
    id = req.body.id;
   
    model.User.destroy({
        where: {
          id
        }
      }).then(res.send("Deleted successfully"));
};