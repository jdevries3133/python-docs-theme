document.addEventListener("DOMContentLoaded", function () {
  const pickerForm = document.querySelector("#colorscheme-picker");
  const themeSelector = pickerForm.querySelector("select");

  const defaultTheme = localStorage.getItem("theme");
  if (defaultTheme) {
    setTheme(defaultTheme);
  }

  function setTheme(theme) {
    themeSelector.value = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
  }

  function submitHandler(e) {
    e.preventDefault();
    setTheme(e.target.querySelector('select').value)
  }

  pickerForm.addEventListener("submit", submitHandler);
});
