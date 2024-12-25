const countElm = Array.from(document.querySelectorAll(".counter"));
countElm.map((item) => {
  let count = 0;
  const text = item.textContent;
  const oldCount = item.dataset.value;
  const plus = item.dataset.plus;
  item.textContent = count + text;

  const countInterval = setInterval(() => {
    if (count == oldCount) {
      clearInterval(countInterval);
    }
    item.textContent = count + text;
    count += Number(plus);
  }, 1000);
});
