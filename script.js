const container = document.querySelector("#container");
const love = document.querySelector("i");

container.addEventListener("dblclick", () => {
  // console.log("Clicked")
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = 0.8;

  setTimeout(() => {
    love.style.opacity = 0;
  }, 500);

  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});
