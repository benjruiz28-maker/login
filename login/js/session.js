//VARIABLE USED TO PERSIST SESSION DATA
var session_details;


$(document).ready(function() {
    checkSession();
}); 

function checkSession() {
    //Checks the sesh
    $.get("php/data/get_user_session.php", {}, 
          function(response) {
        
        let rsp = JSON.parse(response);
        if(rsp.success) {
            //You twin, i know u
            session_details = response;
            let ev = new CustomEvent("auth", {});
            window.dispatchEvent(ev);
        }else {
            //nigga who are you
            location.replace("index.html")
        }
        
    });
}