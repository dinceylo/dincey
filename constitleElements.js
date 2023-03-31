const titleElements = document.querySelectorAll('.product-list-item__title');

titleElements.forEach(function(titleElement) {
  let titleText = titleElement.innerText;
  if (titleText.length > 20) {
    titleText = titleText.substring(0, 20) + '...';
    titleElement.innerText = titleText;
  }
});