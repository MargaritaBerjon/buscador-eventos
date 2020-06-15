const eventbrite = new EventBrite();
const ui = new Interface();

document.getElementById('buscarBtn').addEventListener('click', search);

function search(ev) {
  ev.preventDefault()

  const userSearch = document.getElementById('evento').value;
  const categories = document.getElementById('listado-categorias');
  const categorySelected = categories.options[categories.selectedIndex].value;


  if (userSearch !== '') {
    console.log('buscando');

  } else {
    ui.showMessage('Introduce un nombre o ciudad en el buscador', 'alert alert-danger mt-4')

  }

}
