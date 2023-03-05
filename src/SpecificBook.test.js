test('clicking the plus button increases the quantity', () => {
  document.body.innerHTML = `
    <div>
      <input id="num_count" type="text" value="1">
      <button id="button_plus">+</button>
    </div>
  `;

  const numCount = document.getElementById('num_count');
  const plusBtn = document.getElementById('button_plus');

  plusBtn.click();
  expect(numCount.value).toBe('2');
});

test('clicking the minus button decreases the quantity', () => {
  document.body.innerHTML = `
    <div>
      <input id="num_count" type="text" value="2">
      <button id="button_minus">-</button>
    </div>
  `;

  const numCount = document.getElementById('num_count');
  const minusBtn = document.getElementById('button_minus');

  minusBtn.click();
  expect(numCount.value).toBe('1');
});