
const Profile = require('../model/Profile')

module.exports = {
  index(req, res){
    return res.render('profile', { profile: Profile.get() })
  },
  update(req, res){

    const profile = Profile.get()

    Profile.update({
      ...profile,
      ...req.body
    })
    return res.redirect('/profile')
  }
}