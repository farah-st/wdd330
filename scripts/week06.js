const list = document.querySelector('#book-list ul');
const forms = document.forms;

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

//FormData Onject
document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('form1')
    .addEventListener('submit', handleForm);
});

function handleForm(ev) {
  ev.preventDefault(); //stop the page reloading
  //console.dir(ev.target);
  let form1 = ev.target;
  let data = new FormData(form1);

  //add more things that were not in the form
  data.append('api-key', 'myApiKey');

  //look at all the contents
  for (let key of data.keys()) {
    console.log(key, data.get(key));
  }
  let json = convertdata2JSON(data);

  //send the request with the formdata
  let url = 'http://localhost:3000/'; //or some URL 
  let h = new Headers();
  h.append('Content-type', 'application/json');

  let req = new Request(url, {
    headers: h,
    body: json,
    method: 'POST',
  });
  //console.log(req);
  fetch(req)
    .then((res) => res.json())
    .then((data) => {
      console.log('Response from server');
      console.log(data);
    })
    .catch(console.warn);
}

function convertdata2JSON(formData) {
  let obj = {};
  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return JSON.stringify(obj);
}