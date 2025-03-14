document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const image = document.getElementById("image");

  const sizeChange = _.debounce(() => {
    image.style.width = `${slider.value}%`;
    if (slider.value > 40 && slider.value < 60) {
      image.src = "cat.jpg";
    } else if (slider.value < 40) {
      image.src = "sadCat.jpg";
    } else {
      image.src = "happyCat.jpg";
    }
  }, 300); // Функція зміни розміру картинки та зміна самої картинки з Debounce

  slider.addEventListener("input", () => {
    sizeChange();
    console.log(slider.value);
  }); // Виклик функції зміни розміру картинки при зміні значення слайдера

  const box = document.getElementById("box");
  const area = document.getElementById("boxArea");

  const moveBox = _.debounce((X, Y) => {
    if (document.elementFromPoint(X, Y) == area) {
      box.style.left = X - 40 + "px";
      box.style.top = Y - 550 + "px";
    }
  }, 100); // Функція руху квадрату ( -40 та -550 для того щоб він був на рівні з курсором)

  document.addEventListener("mousemove", (event) => {
    moveBox(event.clientX, event.clientY);
  }) // Викликаєимо функцію та даємо їй значення X та Y (координати курсора) 
});