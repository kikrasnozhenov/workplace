var open = document.getElementById('btn_open'),
    menu = document.getElementById('menu_visibility'),
    close = document.getElementById('menu_hide');

open.addEventListener("click", function() {
    console.log("chpok!");
    menu.style.display = "block";
  });
close.addEventListener("click", function() {
    menu.style.display = "none";
})
