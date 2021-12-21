let data = {
  name: 'OTAVIO',
  avatar: 'https://github.com/otaviofbrito.png'
}

module.exports = {
  get() {
    return data
  },
  update(newData){
    data = newData
    return data
  }
}
