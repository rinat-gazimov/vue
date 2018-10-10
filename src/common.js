export default {
    showMessage: function (messageValue) {
        alert(messageValue);
    },
    showToast: function (type, title, msg) {
        toastr.options = {
            closeButton: false,
            debug: false,
            positionClass: 'toast-top-left',
            onclick: null,
            showDuration: 1000,
            hideDuration: 1000,
            timeOut: 5000,
            extendedTimeOut: 1000,
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
            tapToDismiss : true
        };

        var $toast = toastr[type](msg, title); // Wire up an event handler to a button in the toast, if it exists
    },

};