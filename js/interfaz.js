class Interface {
  constructor() {
    this.init();

    this.list = document.querySelector('#resultado-eventos');
  }

  init() {
    this.printCategories();
  }

  printCategories() {
    const categoriesList = eventbrite.obtainCategories()
      .then(categories => {
        const categoriesClean = categories.categories.categories;

        const selectCategories = document.getElementById('listado-categorias');
        categoriesClean.map(category => {
          const option = document.createElement('option')
          option.value = category.id;

          option.appendChild(document.createTextNode(category.name_localized));
          selectCategories.appendChild(option)
        });

      })
  }
  showMessage(message, CSSclass) {
    const div = document.createElement('div');
    div.classList = (CSSclass);

    div.appendChild(document.createTextNode(message));

    const searchDiv = document.querySelector('#buscador');
    searchDiv.appendChild(div);
    setTimeout(() => {
      this.removeMessage()
    }, 3000);
  }

  removeMessage() {
    const alert = document.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  }

}