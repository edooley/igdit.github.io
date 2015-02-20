$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        filter: function() {
            return $(this).is(":visible");
        }
    });
    
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this);
        $form.hide();
        $('#contactFormSuccess').html('<div class="alert alert-info"><i class="fa fa-cog fa-spin"></i>Sending your inquiry...</div>');
        setTimeout(function() { 
          $.ajax({
            type: "POST",
            url: "https://formkeep.com/f/83fe71fb1ec5",
            data: $form.serialize(),
            success: function() {
                $('#contactFormSuccess').html("<div class='alert alert-success'><i class='fa fa-smile-o'></i>Thanks! We'll be in touch with you shortly.");
            },
            error: function() {
                $('#contactFormSuccess').html("<div class='alert alert-danger'><i class='fa fa-frown-o'></i>Something went wrong. Please try again later!</div>");
                $form.show();
            }
          })
        }, 1200);
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
