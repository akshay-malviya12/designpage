// const boxCheckboxes = document.querySelectorAll('.box-checkbox');

// for (let i = 0; i < boxCheckboxes.length; i++) {
//   const checkbox = boxCheckboxes[i];
//   const box = checkbox.closest('.box');
//   const selectedInput = box.querySelector('.selected-input');

//   box.addEventListener('mouseenter', () => {
//     box.classList.add('highlighted')
//     selectedInput.style.display = 'block';

//   });

//   box.addEventListener('mouseleave', () => {
//     if (!checkbox.checked) {
//       box.classList.remove('highlighted');
//       selectedInput.style.display = 'none';
//     }
//   });

//   checkbox.addEventListener('change', () => {
//     if (checkbox.checked) {
//       selectedInput.style.display = 'none';
//     } else {
//       selectedInput.style.display = 'block';
//     }
//   });
// }






const boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  const checkbox = box.querySelector('.box-checkbox');
  const selectedInput = box.querySelector('.selected-input');

  box.addEventListener('mouseenter', () => {
    box.classList.add('highlighted');
    selectedInput.style.display = 'block';
    box.querySelector('input[type="radio"]').checked = true;
  });

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
