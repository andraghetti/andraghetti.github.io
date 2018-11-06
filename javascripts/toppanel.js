$(document).ready(function() {
    $('.trigger-toppanel').click(function() {
        $('.toppanel-wrapper').css("height", "auto").slideToggle('fast');
    });
});