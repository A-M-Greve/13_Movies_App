


$("searchform").submit(function(e) {
    e.preventDefault();
    const newMovie = document.createElement('li');
    const newRating = document.createElement('li');
    const removeBtn = document.createElement('button');
    const input = document.getElementById('movies');
    const mList = document.getElementById('#title-list');


    newMovie.innerText = input.value + '';
    input.value = '';

    
    mList.appendChild(newMovie);
});


//form.addEventListener('submit', function(e) {
  //  e.preventDefault();
   // console.log(input.value);
    //const newItem = document.createElement('li');
    //const removeBtn = document.createElement('button');
    //removeBtn.innerText = 'Remove';
    //newItem.innerText = input.value + "";
    //input.value = '';

    //const savedTodos = JSON.parse(localStorage.getItem("newItem")) || [];
    //savedTodos.push({ list: newItem.innerText });
    //localStorage.setItem("newItem", JSON.stringify(savedTodos));

    //newItem.appendChild(removeBtn);
    //itemList.appendChild(newItem);
    
//});