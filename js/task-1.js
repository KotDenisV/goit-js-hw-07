// Вибір списку категорій за його id
const categoriesList = document.querySelector('#categories');

// Отримання всіх елементів li.item у списку категорій
const categoriesItems = categoriesList.querySelectorAll('li.item');

// Виведення кількості категорій у списку
console.log('Number of categories:', categoriesItems.length);

// Ітерація по кожному елементу категорії
categoriesItems.forEach(function(item) {
  // Вибір заголовка категорії (h2) та всіх елементів у цій категорії (ul li)
  const title = item.querySelector('h2').textContent;
  const itemsCount = item.querySelectorAll('ul li').length;
  
  // Виведення тексту заголовка та кількості елементів у категорії
  console.log('Category:', title);
  console.log('Elements:', itemsCount);
});