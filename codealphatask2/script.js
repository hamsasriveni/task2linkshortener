function shortenUrl() {
    var input = document.getElementById("urlInput").value;

    // Replace this with your own URL shortening logic
    var shortUrl = "https://shortened-url.com/abcd123";

    document.getElementById("shortUrl").innerHTML = "Shortened URL: <a href='" + shortUrl + "' target='_blank'>" + shortUrl + "</a>";
}