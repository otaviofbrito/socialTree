//MODAL
const Modal = {
  open() {
    document.querySelector('.modal_overlay').classList.add('active')
  },
  close() {
    document.querySelector('.modal_overlay').classList.remove('active')
  }
}
const Storage = {
  get() {
    return JSON.parse(localStorage.getItem('link-tree:cards')) || []
  },
  set(cards) {
    localStorage.setItem('link-tree:cards', JSON.stringify(cards))
  }
}

//USER-PROFILE-SETUP
const userPicture = {
  getPicture(){
    document.querySelector('#userPictureInput').addEventListener("change", function(){
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        localStorage.setItem("social-tree:userPicture", reader.result )
      })

      reader.readAsDataURL(this.files[0]);
      location.reload()
    })
    document.addEventListener("DOMContentLoaded", () => {
      const recentImageDataUrl = localStorage.getItem("social-tree:userPicture");

      if (recentImageDataUrl) {
        document.querySelector('#imgPreview').setAttribute("src", recentImageDataUrl)
        
      }
    })
    
  }
}
const CardSetUp = {
  all: Storage.get(),

  add(card) {
    CardSetUp.all.push(card)
    App.reload()
  },
  remove(index) {
    CardSetUp.all.splice(index, 1)
    App.reload()
  }
}

const DOM = {
  cardContainer: document.querySelector('.cards'),

  addNewCard(card, index) {
    const div = document.createElement('div')
    div.innerHTML = DOM.innerHTMLCard(card, index)
    div.dataset.index = index

    DOM.cardContainer.appendChild(div)
  },
  innerHTMLCard(card, index) {
    const html = `<div class="card_set">
                  <a href="https://${card.cardLink}" class="card_button" target="_blank">${card.cardLabel}</a>
                  <a onclick="CardSetUp.remove(${index})"><i class="icon-x-circle"></i></a>
                  
                </div>`
    return html
  },
  clearCards() {
    DOM.cardContainer.innerHTML = ''
  }
}

const Form = {
  cardLabel: document.querySelector('input#card_label'),
  cardLink: document.querySelector('input#card_link'),

  getValues() {
    return {
      cardLabel: Form.cardLabel.value,
      cardLink: Form.cardLink.value
    }
  },
  clearFields() {
    ;(Form.cardLabel.value = ''), (Form.cardLink.value = '')
  },
  formatValues() {
    let { cardLabel, cardLink } = Form.getValues()
    return { cardLabel, cardLink }
  },
  submit(event) {
    event.preventDefault()

    try {
      const newCard = Form.formatValues()
      CardSetUp.add(newCard)
      Form.clearFields()
      Modal.close()
    } catch (error) {
      alert(error.message)
    }
  }
}

const App = {
  init() {
    CardSetUp.all.forEach(DOM.addNewCard)
    
    Storage.set(CardSetUp.all)

    userPicture.getPicture()
    
  },
  reload() {
    DOM.clearCards()
    App.init()
  }
}

App.init()
