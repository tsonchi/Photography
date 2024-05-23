function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "chichkotrevichko70@gmail.com",
        Password : "Chichkotrevichkoparola10",
        To : 'chichkotrevichko70@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New content",
        Body : "Name: " + document.getElementById("name").value
    }).then(
      message => alert("message sent sucessfully")
    );
}