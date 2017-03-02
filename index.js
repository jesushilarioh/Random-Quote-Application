(function() {

    //Global variables
    var httpRequest;

    // Add api request as an event listener
    document.getElementById("newQuote").addEventListener("click", handleApi);

    //***********************************************
    // handleApi Function handles the api request   *
    // for forismatic to send us a random quote     *
    //***********************************************
    function handleApi() {
        httpRequest = new XMLHttpRequest();

        // Local Variables
        let method = "GET",
            url = "http://quotes.stormconsultancy.co.uk/random.json";
        //http://quotes.stormconsultancy.co.uk/random.json

        //call (open, readystate, and send) methods
        httpRequest.open(method, url, true);
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                console.log(httpRequest.responseText);
            }
        };
        httpRequest.send();
    }


    //**************************************************************
    //* requestStatus function handles the actions to be perfomed  *
    //* when the document is read                                  *
    //**************************************************************





})();
