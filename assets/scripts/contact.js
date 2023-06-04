const form = document.getElementById("contactForm");

function sendMail() {
    emailjs.send("service_zm8fwun", "template_1b3ozjh",
    {"from_name": contactForm.name.value,
     "from_email": contactForm.email.value,
     "suggestion": contactForm.idea.value
    },
    "Iw8TFysbugKKsDqz7")
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
     return false
}