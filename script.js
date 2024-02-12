
//get box by id
const boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  const checkbox = box.querySelector('.box-checkbox');
  const selectedInput = box.querySelector('.selected-input');

  //mouse enter box is highlighted and radio button checked.
  box.addEventListener('mouseenter', () => {
    box.classList.add('highlighted');
    selectedInput.style.display = 'block';
    box.querySelector('input[type="radio"]').checked = true;
  });

  //mouse leave highlighted class remove and redio button off.
  box.addEventListener('mouseleave', () => {
    if (!checkbox.checked) {
      box.classList.remove('highlighted');
      selectedInput.style.display = 'none';
    } else {
      box.classList.remove('highlighted');
      box.querySelector('input[type="radio"]').checked = false;
      selectedInput.style.display = 'none';

    }
  });

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      selectedInput.style.display = 'none';

    } else {
      selectedInput.style.display = 'block';
      box.querySelector('input[type="radio"]').checked = false;
    }
  });
}
