class Interface {
  constructor() {
    this.init();

    this.list = document.querySelector('#resultado-eventos');
  }

  init() {

  }

  printCategories(){
    const categoriesList = eventbrite.obtainCategories();
  }
}