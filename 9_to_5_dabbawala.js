$(document).ready(function(){
  var valFirstname , valLastname;
    var phoneNumber = /[0-9-()+]{3,20}/;
    var emailRegex = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$';
  var valid = false;
  validation = function(){
    $('#firstName').on('blur', function() {

      valFirstname = $("#firstName").val();
      if ($.trim(valFirstname).length > 5 ) {
        $("#errFirstname").hide();
        valid = true;
        
      }
      else{
          $("#errFirstname").text("Name should be more than 5 chracter");
      }
      if ($.trim(valFirstname).match('/^[a-zA-z]$/')) {
        $("#errFirstname").hide();
        }
      else{
          $("#errFirstname").text("Enter a vaild name");
          valid = true;
      }
      
    });

    $('#lastName').on('blur', function() {
      valLastname = $("#lastName").val();
      if (valLastname.length == 0) {
        $("#errLastname").text("Last name cannot be left blank");
        }
      else{
          $("#errLastname").hide();
      }
    });
      
    $('#emailId').on('blur', function() {
      
      if ($(this).val().match(emailRegex) ) {
        $("#errEmail").hide();
        
      }
      else{
          $("#errEmail").text("Enter proper email");
      }
    });

    $('#phoneId').on('blur', function() {
      
      if ($(this).val().match(phoneNumber) ) {
        $("#errPhone").hide();
        
      }
      else{
          $("#errPhone").text("Enter valid phone no.");
      }
    });
  }
  $("#button").click(function(e){

    
    
    if (!valid) {
        $("#notSubmitted").text("FORM NOT SUBMITTED");
        //alert("not submitted");
        e.preventDefault();
    };
  });
  validation();
});

  

