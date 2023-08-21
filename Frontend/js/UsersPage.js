let search= document.getElementById('search');
let usersList = document.getElementById('users');
// Filter Items



search.addEventListener('keyup', (e) => {
  const text = e.target.value.toLowerCase();
  const users = usersList.getElementsByClassName('user');
  Array.from(users).forEach((user) => {
    let userName = user.firstElementChild.firstElementChild.nextElementSibling.textContent;
    

    if(userName.toLowerCase().indexOf(text) != -1){
      user.firstElementChild.style.display = 'flex';
      user.style.display = 'block';
      user.classList.add('col-12');
      user.classList.add('col-lg-3');
      user.classList.add('px-3');
    } else {
      user.firstElementChild.style.display = 'none';
      user.classList.remove('col-12');
      user.classList.remove('col-lg-3');
      user.classList.remove('px-3');
      
    }
  });
});