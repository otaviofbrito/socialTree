let data = [
  {
    label: 'AAAAAAAAAAA',
    link: 'instagram.com'
  }
]

module.exports = {
  get() {
    return data
  },
  create(newCard) {
    return data.push({
      label: newCard.label,
      link: newCard.link
    })
  }
}
