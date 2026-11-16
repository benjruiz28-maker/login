window.addEventListener("auth", function(){
   // alert("Hello");
    let json = JSON.parse(session_details);
    $("#titleTag").html("Hello " + json.first_name +" "+ json.last_name);
});