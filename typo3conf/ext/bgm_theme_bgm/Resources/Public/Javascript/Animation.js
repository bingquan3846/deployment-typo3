jQuery(document).ready(function() {
    if (jQuery('.anim').length) {
        jQuery('.anim').each(function () {
            $(this).addClass('hidden');
            animationType = $(this).data('anim');
            $(this).viewportChecker({
                classToAdd: 'visible animated '+animationType+'',
            });
        });
    }
});