const listEl = document.querySelector('#categories');
console.log('Number of categories:', listEl.childElementCount);

const items = [...listEl.children];
items.forEach((item) => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.childElementCount);
});