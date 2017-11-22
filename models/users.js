
 const User = conn.sequelize.define('user', {
  username: conn.Sequelize.STRING,
  birthday: conn.Sequelize.DATE
});

module.exports = User;
//conn.sequelize.sync();
 // .then(() => User.create({
   // username: 'janedoe',
   // birthday: new Date(1981, 6, 20)
 // }))
 // .then(jane => {
 //   console.log(jane.toJSON());
//  });

