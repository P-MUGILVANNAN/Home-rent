const registerClick = () => {
    let animation = document.getElementById("animation-box");
    animation.style.marginLeft = "-20rem";
    let login = document.getElementById("login");
    let register = document.getElementById("register");
    register.style.opacity = "1";
    login.style.opacity = "0";
  };
  const loginClick = () => {
    let animation = document.getElementById("animation-box");
    animation.style.marginLeft = "30rem";
    let login = document.getElementById("login");
    let register = document.getElementById("register");
    login.style.opacity = "1";
    register.style.opacity = "0";
  };