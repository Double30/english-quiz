// This is where it all goes :)

function hideAnswers () {
  var $answers = $('code')

  $answers.each(function () {
    var content = $(this).text()

    var $input = $('<span>')
      .addClass('field')
      .attr('data-field', true)
      .append($('<input>'))
      .data('answer', content)

    $(this).replaceWith($input)
  })   
}

function checkAnswers() {
  var $fields = $('[data-field]')

  $fields.each(function () {
    var answer = $(this).data('answer')
    var fillContent = $(this).find('input').val()
    var isCorrect = answer === fillContent

    if (isCorrect) {
      $(this).addClass('is-correct')
    } else {
      $(this).addClass('is-incorrect')
      $(this).append($('<span class="hint">'+ answer +'</span>'))
    }
  })
}