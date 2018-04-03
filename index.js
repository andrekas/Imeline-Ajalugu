$(function() {
    $('#valik').click(function() {
        $('html,body').animate({
                scrollTop: $("#body").offset().top},'slow');
    });
    $('.accordion').on('click', function() {
        var panel = $(this).next()[0];
        $('.panel').not(panel).removeClass('show');
        $(panel).toggleClass("show");
    });
    $('#next').click(function () {
        $('.panel').not(this).removeClass('show');
        $('#panel2').toggleClass("show");
    });
    $('#next1').click(function () {
        $('.panel').not(this).removeClass('show');
        $('#panel3').toggleClass("show");

    });
    $('#next2').click(function () {
        $('.panel').not(this).removeClass('show');
        $('#panel4').toggleClass("show");

    });
});

function checkboxCountAndLimit(checkGroup, limit) {
    for ( var i = 0; i < checkGroup.length; i++) {
        checkGroup[i].onclick = function () {
            var checkedCount = 0;
            for (var i = 0; i < checkGroup.length; i++) {
                checkedCount += (checkGroup[i].checked) ? 1 : 0;
                if (checkedCount > limit) {
                    this.checked = false
                }
                if (checkGroup[i].type === "checkbox" && checkGroup[i].checked === true) {
                    document.getElementById('count').innerHTML = checkedCount;
                }
            }
        }
    }
}
checkboxCountAndLimit(document.querySelectorAll('.form-check-input'), 3);
