//console.log('js');
$(document).ready(onReady);

function onReady() {
  //console.log('jq');
}

function postCalculate(calcObject) {
  $.ajax({
    type: 'POST',
    url: 'calculation',
    data: calcObject,
  })
    .then((response) => {
      console.log('butthole');
    })
    .catch((err) => {
      console.log(err);
      alert('big mistake');
    });
}

function getCalcHistory() {
  $.ajax({
    type: 'GET',
    url: '/calculation',
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
      alert('yikes');
    });
}
