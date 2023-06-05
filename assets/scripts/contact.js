const form = document.getElementById("contactForm");

function sendMail(contactForm) {
    emailjs.send("service_zm8fwun", "template_1b3ozjh",
    {"from_name": contactForm.name.value,
     "from_email": contactForm.email.value,
     "suggestion": contactForm.idea.value
    },
    "Iw8TFysbugKKsDqz7")
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message has been sent");
     }, function(error) {
        console.log('FAILED...', error);
     });
     setTimeout(function() {
      form.reset();
    }, 3000);
     return false;
}
