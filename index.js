(function() {

    //Global variables
    var httpRequest;

    // Add api request as an event listener
    document.getElementById("newQuote").addEventListener("click", handleApi);
    window.addEventListener("load", handleApi);


    //***********************************************
    // handleApi Function handles the api request   *
    // for forismatic to send us a random quote     *
    //***********************************************
    function handleApi() {
        httpRequest = new XMLHttpRequest();

        // Local Variables
        let method = "GET",
            url = "http://quotes.stormconsultancy.co.uk/random.json";

        //call (open, readystate, and send) methods
        httpRequest.open(method, url, true);
        httpRequest.onreadystatechange = requestStatus;
        httpRequest.send();
    }


    //**************************************************************
    //* requestStatus function handles the actions to be perfomed  *
    //* when the document is read                                  *
    //**************************************************************

    function requestStatus() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            console.log(JSON.parse(this.responseText).permalink);
            const quoteText = document.getElementById("quoteText"),
                authorText = document.getElementById("authorText"),
                twitterLink = document.getElementById("twitterLink"),
                twitterURL = 'https://twitter.com/intent/tweet?text=';

            let quote = '"' + JSON.parse(this.responseText).quote + '"',
                partOfQuote = quote.slice(0, 68),
                author = JSON.parse(this.responseText).author,
                link = JSON.parse(this.responseText).permalink,
                twitterString = partOfQuote + '" --' + author + ' ' + link + ' @jesushilarioh';

            quoteText.textContent = quote;
            authorText.textContent = author;
            twitterLink.href = twitterURL + twitterString;

            changeBackground();
        }
    }

    function changeBackground() {
        const bodyTag = document.body;
        bodyTag.style.backgroundColor = "#99B898";
    }





})();
