var email = document.getElementById("email").value;
var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var r = 0;
function validate() {
    var user = document.getElementById("clientname").value;
    var spa1  = document.getElementById('sp1')
    var user1 = document.getElementById("clientname");
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email");
    var entry = document.getElementById("cpsw").value;
    var entry1 = document.getElementById("cpsw");
    var passwor = document.getElementById('psw');
    var passwo = document.getElementById('psw').value;
    var phone = document.getElementById('clientPhone').value
    var phone1 = document.getElementById('clientPhone')
    var rege = /^[0-9]{10}/
    var re = /^[a-zA-Z]/;
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var password =/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
 if (re.test(user) ) {
    //  alert("done");
         user1.style.border = "green solid 3px"
         document.getElementById('sp').style.display = 'none' ;     }
     else if(user == " "){
          user1.style.border = "red solid 3px"
          document.getElementById('sp').style.display = 'block' ;
          r++;
           }
    else{
        user1.style.border = "red solid 3px"
        document.getElementById('sp').style.display = 'block' ;
        r++;
    }
 if (reg.test(email) ) {
    //  alert("done");
         email2.style.border = "green solid 3px"
         spa1.style.display = 'none' ;
     }
     else {
         email2.style.border = "red solid 3px"
          spa1.style.display = 'block' ;
          r++ ;
           }
 if (rege.test(phone) ) {
    //  alert("done");
         phone1.style.border = "green solid 3px"

         document.getElementById('sp2').style.display = 'none' ;
     }
     else {
         phone1.style.border = "red solid 3px"
          document.getElementById('sp2').style.display = 'block' ;
          r++;
           }
    
    if(password.test(passwo))
    {
       // passwor.style.border = "green solid 3px"
        document.getElementById('sp2').style.display = 'none' ;
        if(entry != passwo)
        {
            entry1.style.border = "red solid 3px"
            r++
        }
        else
           { entry1.style.border = "green solid 3px"
               }
    }
    else {
        passwor.style.border = "red solid 3px"
         r++;
    }
    
           return checkbox();
        };
        function checkbox()
        {
           if(r>=1)
           {
            document.getElementById("alert").style.display = "block"
         //   alert("done")
           }
           else
           {
            document.getElementById("alert1").style.display = "block"
           }
        };
    
function reset()
{
    document.getElementById("alert1").style.display ="none"

};
function reset1()
{document.getElementById("alert").style.display ="none"};
