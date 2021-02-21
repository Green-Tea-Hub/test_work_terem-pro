const form = document.body.querySelector('form.form');
const submit = form.querySelector('input[type="button"]');

submit.addEventListener('click', ()=>{sendForm()})

function sendForm() {
  const jsonUserData = getJSON_UserData();
  
  showAnswer_onPage(jsonUserData);

  /* К сожалению, не имею опыта в этом, а возможности протестировать сейчас нет */
  /* Примерно так (по моему) выглядит отправка на сервер */
  // fetch('https://localhost', {
  //   method: 'post',
  //   headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //   },
  //   body: 'json=' + jsonUserData
  // })

}

function getJSON_UserData() {
  const userData = {};
  /* Самое удобное название (на мой взгляд) */
  const inputs = form.querySelectorAll('label>*');

  /* Добалвение в userData значение (ключ=id, значение=value) */
  inputs.forEach((input)=>{userData[input.id]=input.value})

  return JSON.stringify(userData);
}

function showAnswer_onPage(text){
  document.body.insertAdjacentHTML('beforeend', `<div><p>${text}</p></div>`)
}