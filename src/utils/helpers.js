// Change any number to dollar format
export const toDollar = num =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(num);

export const noSlider = checkFor => {
  checkFor
    ? document.body.classList.add('no-slider')
    : document.body.classList.remove('no-slider');
};

export const delItemFromArr = (arr, itemIndex) =>
  arr.filter((item, index) => itemIndex !== index);
