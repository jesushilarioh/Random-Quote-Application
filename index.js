(function() {

    function listenerFunc() {
        console.log(JSON.parse(this.responseText).quoteText);
        const para = document.getElementById("para");

        para.textContent = JSON.parse(this.responseText).quoteText;
    }


    var request = new XMLHttpRequest();
    request.addEventListener("load", listenerFunc);
    request.open("GET", "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en");
    request.send();

})();
