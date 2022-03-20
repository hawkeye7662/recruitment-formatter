const inputTextArea = document.getElementById('inputTextArea'),
  outputTextArea = document.getElementById('outputTextArea'),
  submit = document.querySelector('#submit'),
  missingParameters = document.querySelector('#missingParams');

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  outputTextArea.value = '';
  missingParameters.innerText = '';
  let input = inputTextArea.value;
  let logMessageRegex = /^.*\):\n/;
  input = input.replace(logMessageRegex, '');
  let arrayOfErrors = [];
  valleyNameRegex = /Valley Name/gi;
  memberRegex = /Members?/gi;
  codeRegex = /Codes?/gi;
  levelRegex = /Level/gi;
  if (!input.match(valleyNameRegex)) {
    arrayOfErrors.push('Valley Name');
  }
  if (!input.match(memberRegex)) {
    arrayOfErrors.push('Members');
  }
  if (!input.match(codeRegex)) {
    arrayOfErrors.push('Codes');
  }
  if (!input.match(levelRegex)) {
    arrayOfErrors.push('Level');
  }

  if (arrayOfErrors.length != 0) {
    missingParameters.parentElement.removeAttribute('hidden');
    missingParameters.innerText += arrayOfErrors.join(',');
    multipleSpacesRegex = /\s{4,}/g;
    outputTextArea.value =
      input.replaceAll(multipleSpacesRegex, '\n') +
      '\n' +
      arrayOfErrors.join(':\n') +
      ':';
  } else {
    outputTextArea.value = 'Post matches format!';
  }
});
