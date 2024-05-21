const form = document.querySelector("form");
const fullname= document.getElementById("name");
const email= document.getElementById("email");
const phone= document.getElementById("phone");
const message= document.getElementById("message");

function sendEmail(){
  const bodymessage='Full Name: ${fullname.value} <br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}0';

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "horshi60@gmail.com",
    Password : "9FFC9CB0300760FB2C8FD8D0946DDE85118F",
    To : 'horshi60@gmail.com',
    From : 'horshi60@gmail.com',
    Subject : "New contact form enquiry",
    Body : bodymessage,
}).then(
  message => alert("Message Sent Succesfully")
);
}

form.addEventListener("submit",(e)=> {
  e.preventDefault();

  sendEmail();
})
