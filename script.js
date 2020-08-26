const themeDots = document.querySelectorAll('.theme-dot');

let theme = localStorage.getItem('theme') || 'light';
setTheme(theme);

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    // console.log(mode);
    setTheme(mode.toString());
  });
}

function setTheme(name) {
  document.getElementById('theme-style').href = `./styles/${name}.css`;
  localStorage.setItem('theme', name);
}
