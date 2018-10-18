window.onload = function() {
  var div = document.getElementById("root");
  console.log("Demo Dashboard Player");

  var inUsername = document.getElementById("username");
  var inPassword = document.getElementById("password");
  var inlogin = document.getElementById("login");
  var inButton = document.getElementById("button");
  var userName = "";
  var password = "";

  inUsername.addEventListener("change", handleNameChange);
  function handleNameChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    userName = value;
  }
  inPassword.addEventListener("change", handlePasswordChange);
  function handlePasswordChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    password = value;
  }
  inButton.addEventListener("click", handleSubmit);
  function handleSubmit(event) {
    if (userName === "io@mio.tio" && password === "sicurezza") {
      console.log("submit");
      location.href = "seconda.html";
    } else {
      alert("None! Ritenta,sarai più fortunato.");
      window.location.reload(true);
    }
  }
};
