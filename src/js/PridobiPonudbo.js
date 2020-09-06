function pridobiPonudbo() {
    var startPoint = document.forms["OfferForm"]["startPoint"].value;
    var endPoint = document.forms["OfferForm"]["endPoint"].value;

    if(startPoint != "" && endPoint != ""){
        console.log("Od: " + startPoint + " Do: " + endPoint);
    }
}