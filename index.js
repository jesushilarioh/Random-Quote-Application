(function() {

    //Global variables
    var httpRequest;
    document.getElementById("newQuote").addEventListener("click", newQuote);

    // New Quote Function handles the api request
    function newQuote() {
        httpRequest = new XMLHttpRequest();
        // Local Variables
        let method = "GET",
            url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";

        httpRequest.open(method, url, true);
        httpRequest.onreadystatechange = requestStatus;
        httpRequest.send();
    }

    function requestStatus() {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            console.log(httpRequest.responseText);
        }
    }

})();
