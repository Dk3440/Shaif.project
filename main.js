
   function validation() {

    event.preventDefault()

       var firstname = document.getElementById('firstname').value;
       var lastname = document.getElementById('lastname').value;
        var Email = document.getElementById('Email').value;
        var number = document.getElementById('number').value;
        var note = document.getElementById('note').value;
        var dat= document.getElementById('dat').value;
        var time= document.getElementById('time').value;

       var firstcheck = /^[A-za-z]{5,30}$/;
       var lastcheck = /^[A-za-z]{5,30}$/;
        var mobilecheck = /^[1-9]\d{9}$/;
        var EmailAddcheck = /^\S+@\S+\.\S+$/;
        var notecheck = /^[A-za-z]{5,30}$/;

        if (firstcheck.test(firstname)) {
            document.getElementById('usererror').innerHTML = "";
        } else {
            document.getElementById('usererror').innerHTML = "**first name is invlaid";

        }

        if (lastcheck.test(lastname)) {
            document.getElementById('lasterror').innerHTML = "";
        } else {
            document.getElementById('lasterror').innerHTML = "** last name is invlaid";

        }


        if (EmailAddcheck.test(Email)) {
            document.getElementById('emailerror').innerHTML = "";
        } else {
            document.getElementById('emailerror').innerHTML = "** Email is not wailed";


        }

        if (mobilecheck.test(number)) {
            document.getElementById('phoneerror').innerHTML = "";
        } else {
            document.getElementById('phoneerror').innerHTML = "** Number is not vailed";

        }

        if (notecheck.test(note)) {
            document.getElementById('noteerror').innerHTML = "";
        } else {
            document.getElementById('noteerror').innerHTML = "** note is not vailed";

        }

        if ((dat)) {
            document.getElementById('dateerror').innerHTML = "";
        } else {
            document.getElementById('dateerror').innerHTML = "** date is not vailed";

        }

        if ((time)) {
            document.getElementById('timeerror').innerHTML = "";
        } else {
            document.getElementById('timeerror').innerHTML = "** time is not vailed";

        }

        return false;


}