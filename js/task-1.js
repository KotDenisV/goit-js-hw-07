const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(function(item) {
  const title = item.querySelector('h2').textContent;
  const itemsCount = item.querySelectorAll('ul li').length;
  console.log('Category:', title);
  console.log('Elements:', itemsCount);
});