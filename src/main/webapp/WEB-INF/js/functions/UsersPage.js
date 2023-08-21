var modal = document.getElementById("profileModal");
var btnProfile = document.querySelectorAll(".avatar__button").forEach(btnProfile =>
  btnProfile.addEventListener("click", function () {
    var value = btnProfile.value;
    console.log(value);
    var info = document.getElementById(value).querySelectorAll(".users");
    console.log(info[0].innerHTML);
    document.getElementById("fullNameProfile").innerHTML = info[0].innerHTML + " " + info[1].innerHTML;
    document.getElementById("emailProfile").innerHTML = info[2].innerHTML;
    document.getElementById("birthDateProfile").innerHTML = info[3].innerHTML;
    document.getElementById("numberProfile").innerHTML = info[4].innerHTML;
    document.getElementById("positionProfile").innerHTML = info[5].innerHTML;
    document.getElementById("seniorityProfile").innerHTML = info[6].innerHTML;
    document.getElementById("officeProfile").innerHTML = info[7].innerHTML;
    modal.style.display = "block";
  }));
var span = document.getElementsByClassName("close")[0];

if (span != undefined) {
  span.onclick = function () {
    modal.style.display = "none";
  }
}

let usersearch = document.getElementById('users-search');

// Filter Items

(function () {
  console.log(document.cookie);
  var id = document.cookie.slice(7);
  if (window.location.href.indexOf("login") === -1) {

    fetch(`http://localhost:8080/users/${id}`).then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      document.getElementById("headerName").innerText = data.firstName + " " + data.lastName;
      document.getElementById("headerNameSmall").innerText = data.firstName;
      document.getElementById("userImage").src = data.photo;
      document.getElementById("userImageSmall").src = data.photo;
    })

  }
})();
if (usersearch != null) {


  usersearch.addEventListener('keyup', (e) => {
    let usersList = document.getElementById('users');
    const text = e.target.value.toLowerCase();
    const users = usersList.getElementsByClassName('user');
    Array.from(users).forEach((user) => {
      let userName = user.firstElementChild.firstElementChild.nextElementSibling.textContent;


      if (userName.toLowerCase().indexOf(text) != -1) {
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

}