function SendMail(){
var templateParams = {
    from_name :document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
};
 
emailjs.send('service_izl9p2n', 'template_6t94o0h', templateParams)
    .then(function(response) {
     alert("Success! " + response.status);
    })
}