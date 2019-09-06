require(['jquery', 'domReady!'], function ($) {
    $(document).ready(function()
    {
        $('.showcart').click(function () {
            $('.mage-dropdown-dialog').css("right", "0px");
        });

        $(document).on('click','.btn-minicart-cls', function(){
            $('.mage-dropdown-dialog').css("right", "-500px");
        });

        $(document).mouseup(function (e) {
            var container = $('.mage-dropdown-dialog');
            if (container.has(e.target).length === 0) {
                $('.mage-dropdown-dialog').css("right", "-500px");
            }
        });

    });
});
