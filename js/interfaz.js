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
}