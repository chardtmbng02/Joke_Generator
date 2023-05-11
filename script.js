const button = document.querySelector('#joke-btn');
const joke_content = document.querySelector('#joke');

button.addEventListener('click', generateJoke);

function generateJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('Get', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data.value);
      joke_content.innerHTML = data.value;
    } else {
      joke_content.innerHTML = 'We cannot load any joke at the moment. Be right back!';
    }
  };

  xhr.send();
}

document.addEventListener('DOMContentLoaded', generateJoke);