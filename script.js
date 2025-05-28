let progress = document.querySelectorAll('.progress');
let progress_text = document.querySelectorAll('.data-progress');

progress.forEach((pro) => {
  let percentage = pro.getAttribute('data-value');
  let color = pro.getAttribute('data-stroke');
  let animateTime = pro.getAttribute('data-time');
  let radius = pro.r.baseVal.value;
  let circumference = radius * 2 * Math.PI;
  let stroke = circumference - (circumference * percentage) / 100;
  pro.style.setProperty('--stroke-dashoffset', stroke);
  pro.style.setProperty('--stroke-dasharray', circumference);
  pro.style.setProperty('--stroke', color);
  pro.style.setProperty('--animation-time', `${animateTime * 100}ms`);
})

progress_text.forEach((text) => {
  let data = text.getAttribute('data-value');
  let progress_value = 0;
  let progress_bar = setInterval(() => {
    progress_value++;
    text.innerText = `${progress_value}%`;
    if (progress_value == data) {
      clearInterval(progress_bar);
    }
  }, 100);
})





let btn_open = document.querySelector('.btn-open-modal');
let btn_close = document.querySelector('.btn-close');
let modal_container = document.querySelector('.modal-container');

btn_open.addEventListener('click', () => {
  modal_container.classList.add('active');
});
btn_close.addEventListener('click', () => {
  modal_container.classList.remove('active');
});
modal_container.addEventListener('click', (e) => {
  if (e.target.closest("modal-inner")) {
    modal_container.classList.add('active');
  } else {
    e.target.classList.remove('active')
  }
})











