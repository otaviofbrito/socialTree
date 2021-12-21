

let data = {
  label: 'AAAAAAAAAAA',
  link: 'https://instagram.com'
}

module.exports = {
  get() {
    return data
  },
  create(newCard){
    return data = {
      label: newCard.label,
      link: newCard.link
    }
  }
}
