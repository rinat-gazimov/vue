import Common from '../common.js';

export default {
    getAnswers: function (intitle, successCallback) {
        var result;
        $.ajax({
            url: 'http://localhost:8090/test/task?intitle=' + intitle,
            type: 'GET',
            dataType: "json",
            async: true,
            success: function (data, textStatus) {
                if (successCallback != null) {
                    successCallback(data);
                }
            },
            error: function (jqXHR, data, textStatus) {
                console.log('catched!');
                try {
                }
                catch (e) {
                }
            }
        });

        return result;
    },

};