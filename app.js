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
  clanNameRegex = /Clan Name/gi;
  totalTrophiesRegex = /Total Trophies/gi;
  typeRegex = /Type/gi;
  requiredTrophiesRegex = /Required Trophies/gi;
  memberRegex = /Members?/gi;
  locationRegex = /location/gi;
  if (!input.match(clanNameRegex)) {
    arrayOfErrors.push('Clan Name');
  }
  if (!input.match(totalTrophiesRegex)) {
    arrayOfErrors.push('Total Trophies');
  }
  if (!input.match(typeRegex)) {
    arrayOfErrors.push('Type');
  }
  if (!input.match(requiredTrophiesRegex)) {
    arrayOfErrors.push('Required Trophies');
  }
  if (!input.match(memberRegex)) {
    arrayOfErrors.push('Members');
  }
  if (!input.match(locationRegex)) {
    arrayOfErrors.push('Location');
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
