var clipboard = new ClipboardJS('.btn-copy');

copyButton = document.querySelector('#copybtn');
clipboard.on('error', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});
clipboard.on('success', function (e) {
  copyButton.innerText = 'Copied';
  setTimeout(function () {
    copyButton.innerText = 'Copy';
  }, 500);
});
