const toggleDarkness = () => {
  if (document.getElementById("pagestyle").getAttribute("href") === "css/dark.css") {
    document.getElementById("pagestyle").setAttribute("href", "css/styles.css");
    if (document.getElementById("logo-img-sm")){
      document.getElementById("logo-img-sm").setAttribute("src", "images/logo.png");
    }
    if (document.getElementById("logo-img-lg")){
      document.getElementById("logo-img-lg").setAttribute("src", "images/logo.png");
    }
    document.getElementById("theme").textContent = "Dark Theme";
    document.getElementById("profile-menu-sm").classList.add("hide");
    document.getElementById("profile-menu-lg").classList.add("hide");
  } else {
    document.getElementById("pagestyle").setAttribute("href", "css/dark.css");
    if (document.getElementById("logo-img-sm")) {
      document.getElementById("logo-img-sm").setAttribute("src", "images/logo2.png");
    }
    if (document.getElementById("logo-img-lg")) {
      document.getElementById("logo-img-lg").setAttribute("src", "images/logo2.png");
    }
    document.getElementById("theme").textContent = "Light Theme";
    document.getElementById("profile-menu-sm").classList.add("hide");
    document.getElementById("profile-menu-lg").classList.add("hide");
  }
};

const toggleProfileMenuLg = () => {
  document.getElementById("profile-menu-lg").classList.toggle("hide");
};

const toggleProfileMenuSm = () => {
  document.getElementById("profile-menu-sm").classList.toggle("hide");
};

document.getElementById("pp-sm").addEventListener("click", (e) => {
  toggleProfileMenuSm();
});

document.getElementById("pp-lg").addEventListener("click", (e) => {
  toggleProfileMenuLg();
});

document.querySelector("main").addEventListener("click", (e) => {
  document.getElementById("profile-menu-sm").classList.add("hide");
  document.getElementById("profile-menu-lg").classList.add("hide");
});

document.getElementById("p-link").addEventListener("click", (e) => {
  window.location.href = "profile.html";
});