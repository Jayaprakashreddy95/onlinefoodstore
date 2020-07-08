
$("nav div").click(function() {
            $("ul").slideToggle();
            $("ul ul").css("display", "none");
      });

      $("ul li").click(function() {
            $("ul ul").slideUp();
            $(this).find('ul').slideToggle();
      });


/* The following function in javascript is called when clicked on join our list button */

function validation_form(){

/* assigning all the fields in the form to javascript variables */
	
  var email = document.forms['val_form']['Email'];
  var re_email = document.forms['val_form']['Re-entered Email'];
  var fname = document.forms['val_form']['First Name'];
  var lname = document.forms['val_form']['Last Name'];
  var state = document.forms['val_form']['State Code'];
  
  var zip = document.forms['val_form']['Zip Code'];
  
  /* assigning all the error messages for each field from the form to javascript variables */
  
  var error_email = document.getElementById('error_email');
  var error_re_email = document.getElementById('error_re_email');
  var error_fname = document.getElementById('error_fname');
  var error_lname = document.getElementById('error_lname');
  var error_state = document.getElementById('error_state');
  var error_zip = document.getElementById('error_zip');
  
  /* assigning character pattern, Numbers and Characters pattern and email pattern to javascript variables to check the pattern of the fields in the latter part of this function */
  
  var only_char = /^[a-zA-Z]+$/;
  var num_and_char = /^[a-zA-Z0-9]+$/;
  var email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  var zip_pattern =  /^[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]$/;
  
  /* Required field error messages for all the fields in the form */
  
  error_email.innerText = 'This field is required';
  error_re_email.innerText = 'This field is required';
  error_fname.innerText = 'This field is required';
  error_lname.innerText = 'This field is required';
  error_state.innerText = 'This field is required';
  error_zip.innerText = 'This field is required';
  
  /* The error message is present till the email field is not empty. Once the email field is filled. The error message for the email field will be empty */
  if(email.value == ''){
    return false;
  }  
  error_email.innerText = '';
  
  /* The following if statement checks if the email in the email field is in valid email form if not, error message is displayed  */
  if(!email.value.match(email_pattern)){
    error_email.innerText = 'Email is not in email pattern';
    return false;
  }
  error_email.innerText = '';
  
  /* The required field error message is present till the re-entered email field is not empty. Once the re-emtered email field is filled. The error message for the re-entered email field will be empty */
  if(re_email.value == ''){
    return false;
  }  
  error_re_email.innerText = '';
  
  /* The following if statement checks if the email field and re-entered fields are some if not it gives the error message */
  if(email.value != re_email.value){
    error_re_email.innerText = "Must equal first email entry";
    return false;
  }
  
  /* The required field error message is present till the first name field is not empty. Once the first name field is filled. The error message for the first name field will be empty */
  if(fname.value == ''){
    return false;
  }  
  error_fname.innerText = '';
  
  /* The following if statement checks if the first name has only characters */
  if(!fname.value.match(only_char)){
    error_fname.innerText = "First Name can only accept characters";
    return false;
  }
  
  /* The required field error message is present till the last name field is not empty. Once the last name field is filled. The error message for the last name field will be empty */
  if(lname.value == ''){
    return false;
  }  
  error_lname.innerText = '';
  
  /* The following if statement checks if the last name has only characters */
  if(!lname.value.match(only_char)){
    error_lname.innerText = "Last Name can only accept characters";
    return false;
  }
  
  /* The required field error message is present till the state code field is not empty. Once the state code field is filled. The error message for the state code field will be empty */
  if(state.value == ''){
    return false;
  }  
  error_state.innerText = '';
  
  /* The following if statement checks if the state code length is 2 */
  if(state.value.length != 2){
    error_state.innerText = "State Code can only contain two characters";
    return false;
  }
  
  /* The required field error message is present till the zip code field is not empty. Once the zip field is filled. The error message for the zip field will be empty */
  if(zip.value == ''){
    return false;
  }  
  error_zip.innerText = '';
  
  /* The following if statement checks if the zip code length is 5 */
  if(zip.value.length != 5){
    error_zip.innerText = "Zip Code length should be 5";
    return false;
  }
  
  /* The following if statement checks if the zip code has only characters and numbers */
  if(!zip.value.match(num_and_char)){
    error_zip.innerText = "Zip Code can only contain numbers and characters";

    return false;
  }
  
/* If all the validation passes then the function returns the following */  
return document.write("Joined Successfully");
}


