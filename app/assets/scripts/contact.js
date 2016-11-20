module.exports = {
  submitForm: function(event) {

    event.preventDefault();
    var form = event.target;

    //fill formdata
    var data = "";
    data += "name=" + document.getElementById("name").value;
    data += "&email=" + document.getElementById("email").value;
    data += "&phone=" + document.getElementById("phone").value;
    data += "&message=" + document.getElementById("message").value;

    //create request
    var request = new XMLHttpRequest();
    request.open('POST', "http://localhost/zee/app/ajax/mail.php", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(encodeURI(data));
    request.onload = function() {
      if (request.status === 200 && request.responseText) {
        form.innerHTML = request.responseText;
      }
    };
  }
};