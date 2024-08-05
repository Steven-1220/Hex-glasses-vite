import './assets/scss/all.scss';

const categoryBtn = [...document.querySelectorAll('.btn-category')];
const opticalArea = [...document.querySelectorAll('.OPTICAL')];
const sunglassesArea = [...document.querySelectorAll('.SUNGLASSES')];

categoryBtn.forEach((btn) => {
  btn.addEventListener('click', switchProductContent);
});

function addShow(arr) {
  arr.forEach((dom) => {
    dom.classList.add('show');
  });
}

function addHide(arr) {
  arr.forEach((dom) => {
    dom.classList.add('hide');
  });
}

function removeHide(arr) {
  arr.forEach((dom) => {
    dom.classList.remove('hide');
  });
}

function removeShow(arr) {
  arr.forEach((dom) => {
    dom.classList.remove('show');
  });
}

function switchProductContent(e) {
  let product = e.target.dataset.product;

  if (product === 'OPTICAL') {
    addShow(opticalArea);
    removeHide(opticalArea);

    addHide(sunglassesArea);
    removeShow(sunglassesArea);
  } else if (product === 'SUNGLASSES') {
    addShow(sunglassesArea);
    removeHide(sunglassesArea);

    addHide(opticalArea);
    removeShow(opticalArea);
  } else {
    return;
  }
}
