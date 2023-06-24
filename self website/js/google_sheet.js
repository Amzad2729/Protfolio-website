
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzOc4xpyhgvpxkYY6AAO_egZNUL-xOHZzNEa4lT97JQj3Fn3X3Q8n6UHuQ2eDMF4j_Nuw/exec'
  
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully, Thank You."
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
