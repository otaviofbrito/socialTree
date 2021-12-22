
const Profile = require('../model/Profile')

module.exports = {
  async index(req, res){
    return res.render('profile', { profile: await Profile.get() })
  },
  async update(req, res){

    const profile = await Profile.get()

   await Profile.update({
      ...profile,
      ...req.body
    })
    return res.redirect('/profile')
  }
}