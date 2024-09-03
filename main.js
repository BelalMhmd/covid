$(document).ready(function () {
    $('#mode').click(function () {
        $('body').toggleClass('dark-mode');

        $('#mode').toggleClass('btn-outline-secondary btn-outline-light');

        if ($('#mode').text() === 'dark mode') {
            $('#mode').text('light mode');
            $('#navbar').attr({ 'data-bs-theme': 'dark' });
        } else if ($('#mode').text('light mode')) {
            $('#mode').text('dark mode');
            $('#navbar').removeAttr('data-bs-theme');
        };
    });


    $('#scroll-button').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});