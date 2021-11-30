$("select").change(function () {
    // hide all optional elements
    $('.optional').css('display','none');

    $("select option:selected").each(function () {
        if($(this).val() == "Referral") {
            $('.referral').css('display','block');
        } else if($(this).val() == "Other") {
            $('.other').css('display','block');
        }
    });
});