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
            url = "http://www.quotzzy.co/api/quote";

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

            console.log(JSON.parse(this.responseText).author.wiki);
            const quoteText = document.getElementById("quoteText"),
                authorText = document.getElementById("authorText"),
                twitterLink = document.getElementById("twitterLink"),
                twitterURL = 'https://twitter.com/intent/tweet?text=';

            let text = '"' + JSON.parse(this.responseText).text + '"',
                partOfQuote = text.slice(0, 56),
                author = JSON.parse(this.responseText).author.name,
                link = JSON.parse(this.responseText).author.wiki,
                twitterString = partOfQuote + '" --' + author + ' ' + link + ' @jesushilarioh';

            quoteText.innerHTML = text;
            authorText.textContent = author;
            twitterLink.href = twitterURL + twitterString;

        }
    }

})();
