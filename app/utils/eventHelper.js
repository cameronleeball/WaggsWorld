const personalOauthToken = "LFNPFUM45EHXK6JWWIPM";

const helpers = {

    runQuery: () => {
        $.ajax({
            url: "https://www.eventbriteapi.com/v3/events/search/",
            data: {
                q: "dog events",
                token: personalOauthToken
            },
            success: function(response) {
                console.log(response.events[1]);
            },
            error: function(xhr) {
                console.log("you done fucked up");
            }
        });
    }
};

export default helpers;