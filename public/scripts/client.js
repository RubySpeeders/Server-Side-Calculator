//console.log('js');
$(document).ready(onReady);

function onReady() {
  //console.log('jq');
  //event listener
  $('.js-equals').on('click', clickSubmit);
  $('.js-add').on('click', chooseOperator);
  $('.js-subtract').on('click', chooseOperator);
  $('.js-multiply').on('click', chooseOperator);
  $('.js-divide').on('click', chooseOperator);
  $('.js-clear').on('click', clearFields);
  getCalcHistory();
  //$('.js-answerArea').on('click', '.js-answerList', renderAnswer);
}

function clearFields() {
  $('.js-numOne').val('');
  $('.js-numTwo').val('');
  $('.js-add').removeClass('addColour');
  $('.js-subtract').removeClass('addColour');
  $('.js-multiply').removeClass('addColour');
  $('.js-divide').removeClass('addColour');
}
let operator = '';
function chooseOperator() {
  operator = $(this).prop('name');
  $(this).toggleClass('addColour');
  return operator;
}

function clickSubmit() {
  if ($('.js-numOne').val() === '' || $('.js-numTwo').val() === '') {
    alert('you need to fill in both fields');
  } else {
    const calcObject = {
      numOne: $('.js-numOne').val(),
      operation: operator,
      numTwo: $('.js-numTwo').val(),
    };
    postCalculate(calcObject);
    console.log(calcObject);
    $('.js-add').removeClass('addColour');
    $('.js-subtract').removeClass('addColour');
    $('.js-multiply').removeClass('addColour');
    $('.js-divide').removeClass('addColour');
  }
}

function postCalculate(calcObject) {
  $.ajax({
    type: 'POST',
    url: 'calculation',
    data: calcObject,
  })
    .then((response) => {
      getCalcHistory();
      console.log(response);
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
      render(response);
    })
    .catch((err) => {
      console.log(err);
      alert('yikes');
    });
}

function render(response) {
  //console.log(response);
  $('.js-answerList').empty();
  for (let i = 0; i < response.length; i++) {
    const field = response[i];
    $('.js-answerList').append(
      `<li>${field.numOne} ${field.operation} ${field.numTwo} = ${field.answer}</li>`
    );
    $('.js-answer').text(`${field.answer}`);
  }
}

//function renderAnswer() {
// $(this).parent().text(render(response));
//$('.js-answer').text(`${field.answer}`);
//}
