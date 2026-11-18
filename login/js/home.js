window.addEventListener("auth", function() {
    let json = JSON.parse(session_details);
    $("#titleTag").text("Hello " + json.first_name + " " + json.last_name);
    $("#f_name").val(json.first_name);
    $("#l_name").val(json.last_name);
});

$(document).ready(function() {
    $("#name_form").submit(function(e) {
        e.preventDefault();

        $.post("php/ac/update_user.php", $(this).serialize(), function(response) {
            let rsp;
            try {
                rsp = JSON.parse(response);
            } catch (err) {
                $("#statusMsg").text("Server error: " + response);
                return;
            }

            if (rsp.success == 1) {
                $("#titleTag").text("Hello " + $("#f_name").val() + " " + $("#l_name").val());
                $("#statusMsg").text("Name updated");
            } else {
                $("#statusMsg").text("Update failed: " + (rsp.message || "Please try again."));
            }
        }, "text").fail(function(xhr) {
            $("#statusMsg").text("Request failed: " + xhr.status);
        });
    });
});