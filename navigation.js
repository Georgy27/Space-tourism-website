const navigationBurger = document.querySelector(".navigation--burger");
const navigation = document.querySelector(".navigation");
const closeBtn = document.querySelector(".navigation__close--btn");

// window.addEventListener("click", function (e) {
//   if (
//     e.target.classList !== "show-sidebar" &&
//     navigation.classList.contains("show-sidebar")
//   ) {
//     console.log(123);
//     navigation.classList.remove("show-sidebar");
//   }
// });
navigationBurger.addEventListener("click", function () {
  navigation.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  navigation.classList.remove("show-sidebar");
});
