var clipboard = new ClipboardJS('.btn-copy', {
  text: function () {
    if (missingParameters.innerText == '') {
      return outputTextArea.value;
    }
    return (
      'Your post was missing the following parameters: ' +
      missingParameters.innerText +
      '\n' +
      'Your post with missing parameters added:\n' +
      outputTextArea.value  
    );
  },
});

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
