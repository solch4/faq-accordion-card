const showAnswer = (id) => {
  const question = document.querySelector(`.q${id}`)
  const answer = document.getElementById(id)
  const visibility = answer.getAttribute("data-visible");
  
  if (visibility === 'false') {
    answer.setAttribute('data-visible', true)
    question.setAttribute('bold', true)
  } else {
    answer.setAttribute('data-visible', false)
    question.setAttribute('bold', false)
  }
}