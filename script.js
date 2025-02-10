function validateForm() {
    var isValid = true;
    
    // Get form values
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var query = document.querySelector('input[name="choice"]:checked');
    var terms = document.getElementById("terms").checked;
    
    // Clear previous error messages
    document.getElementById("firstnameError").textContent = "";
    document.getElementById("lastnameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("queryError").textContent = "";
    document.getElementById("boxError").textContent = "";


    // Name validation
    if (firstname === "") {
      document.getElementById("firstnameError").textContent = "This field is required.";
      isValid = false;
    }
    if (lastname === "") {
        document.getElementById("lastnameError").textContent = "This field is required.";
        isValid = false;
      }
    if (!query) {
        document.getElementById("queryError").textContent = "Please select a query type"
       isValid = false
      }

      if (!terms) {
        document.getElementById("boxError").textContent = "To submit this form,please consent to being contacted.";
        isValid = false;
      }

      // Email validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
      }
       else if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
      }
      
      if (message === "") {
        document.getElementById("messageError").textContent = "This field is required.";
        isValid = false;
      }


    console.log("isValid:", isValid);

    if (isValid){
      document.getElementById("successMessage").style.display = 'block';
      document.querySelector("form").reset();
    }
  
  
  
    function validateEmail(email) {
      // Basic email format validation
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  }
  
  document.getElementById("submitButton").addEventListener("click", validateForm);
  
  