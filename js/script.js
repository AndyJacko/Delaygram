const toggleDarkness = () => {
  if (
    document.getElementById("pagestyle").getAttribute("href") ===
    "css/dark-styles.css"
  ) {
    document.getElementById("pagestyle").setAttribute("href", "css/styles.css");
    document.getElementById("logo-img").setAttribute("src", "images/logo.png");
    document.getElementById("theme").textContent = "Dark Theme";
    document.getElementById("profile-menu").classList.add("hide");
  } else {
    document
      .getElementById("pagestyle")
      .setAttribute("href", "css/dark-styles.css");
    document.getElementById("logo-img").setAttribute("src", "images/logo2.png");
    document.getElementById("theme").textContent = "Light Theme";
    document.getElementById("profile-menu").classList.add("hide");
  }
};

const toggleProfileMenu = () => {
  document.getElementById("profile-menu").classList.toggle("hide");
};

document.getElementById("pp").addEventListener("click", (e) => {
  toggleProfileMenu();
});

document.querySelector("main").addEventListener("click", (e) => {
  document.getElementById("profile-menu").classList.add("hide");
});

document.getElementById("p-link").addEventListener("click", (e) => {
  window.location.href = "profile.html";
});
