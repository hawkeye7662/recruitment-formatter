const inputTextArea = document.getElementById('inputTextArea'),
  outputTextArea = document.getElementById('outputTextArea'),
  submit = document.querySelector('#submit'),
  missingParameters = document.querySelector('#missingParams');

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  outputTextArea.value = '';
  missingParameters.innerText = '';
  let input = inputTextArea.value.trim();
  let logMessageRegex = /^.*\):\n/;
  input = input.replace(logMessageRegex, '');
  let arrayOfErrors = [];
  clanNameRegex = /Clan Name/gi;
  languageRegex = /Language/gi;
  leagueRegex = /League/gi;
  requiredStarsRegex = /Required Stars/gi;
  typeRegex = /Type?/gi;
  if (!input.match(clanNameRegex)) {
    arrayOfErrors.push('Clan Name');
  }
  if (!input.match(languageRegex)) {
    arrayOfErrors.push('Language');
  }
  if (!input.match(leagueRegex)) {
    arrayOfErrors.push('League');
  }
  if (!input.match(requiredStarsRegex)) {
    arrayOfErrors.push('Required Stars');
  }
  if (!input.match(typeRegex)) {
    arrayOfErrors.push('Type');
  }

  if (arrayOfErrors.length != 0) {
    missingParameters.parentElement.removeAttribute('hidden');
    missingParameters.innerText += arrayOfErrors.join(',');
    multipleSpacesRegex = /\s{4,}/g;
    outputTextArea.value = (
      input.replaceAll(multipleSpacesRegex, '\n') +
      '\n' +
      arrayOfErrors.join(':\n') +
      ':'
    ).trim();
  } else {
    missingParameters.parentElement.setAttribute('hidden', '');
    outputTextArea.value = 'Post matches format!';
  }
});
