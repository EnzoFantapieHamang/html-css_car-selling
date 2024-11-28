const burger_menu = document.querySelector("#burger-menu");
const close_x = document.querySelector("#close");
const liste = document.querySelector(".navigation");
const items = document.querySelectorAll("li");

burger_menu.addEventListener("click", (e) => {
    burger_menu.style.display = "none";
    close_x.style.display = "flex";
    close_x.style.float = "right";
    liste.classList.toggle('active');
});

close_x.addEventListener("click", (e) => {
    liste.classList.remove('active');
    close_x.style.display = "none";
    burger_menu.style.display = "flex";
    burger_menu.style.float = "right";
});
