/* 2.1 */

/* Ссылаюсь на DOM */
const block_title = document.querySelector('div.block-0');
const button1 = document.querySelector('button.button-1');
/* Добавля ивент нажатия вызывающий функцию, которая меняет пораметр дисплея переданному обьекту */
button1.addEventListener('click', () => {toggleDisplayElem(block_title)});
/* Вызываемая вункция */
function toggleDisplayElem(elem) {
  elem.style.display = (elem.style.display == "none") ? "" : "none";
};


/* Ссылаюсь на DOM */
const block_1 = document.querySelector('div.block-1');
const block_2 = document.querySelector('div.block-2');
const button2 = document.querySelector('button.button-2');
/* Добавля ивент нажатия вызывающий функцию, которая меняет порядок дум эллементов и применяет его */
button2.addEventListener('click', () => {swapDomElem(block_1, block_2)});
/* Вызываемая вункция (считаю, что функция недостаточно большая для сложного именования переменных) */
function swapDomElem(elem1, elem2) {
  elem1.before(elem2);
};


/* 2.3 */

/* Содаю переменную */
const block_modal = document.querySelector('div.modal');
block_modal.addEventListener('click', () => {toggleDisplayElem(block_modal)});
window.onload = block_modal.style.display = "block";
