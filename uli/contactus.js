function sendEmail() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  Email.send({
      Host: "smtp.gmail.com",
      Username: "juliantsonchev1@abv.bg",
      Password: "1AB2C0297343CD1DC5BFA9DFB65EC3063C74",
      To: "juliantsonchev1@abv.bg",
      From: email,
      Subject: "New content",
      Body: `Name: ${name}\nEmail: ${email}\nMessage: ${document.querySelector("textarea").value}`
  }).then(
      message => alert("Message sent succesfully"),
      error => console.error("Failed to send message:", error)
  );
}