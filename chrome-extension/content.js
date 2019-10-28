var decision = function (price) {
    if (confirm("Instead of supporting a trash company that's trying to buy out our local elections, pay Adrienne to buy this for you used instead.")) {
        window.location.href = "http://thegethighrecord.club?price=" + price;
    } else {
        alert("Please fucking vote by November 5th while considering where candidates are getting their money.");
    }
}

const addToCartButton = document.getElementById("addToCart_feature_div");

addToCartButton.onclick = function() {
    var price = document.getElementById("price_inside_buybox").innerText;
    decision(price)
};

