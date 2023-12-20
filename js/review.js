const requestURL = 'https://maxozarko.github.io/whitepace/reviews.json'
const request = new XMLHttpRequest();
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function() {
    const reviews = request.response;
    let i = 0;
    document.querySelectorAll(".review__item").forEach(element => {
        element.children[0].children[1].innerHTML = reviews[i].text
        element.children[1].children[0].children[0].setAttribute('src', reviews[i].avatar)
        let label = element.children[1].children[1]
        label.children[0].innerHTML = reviews[i].name
        label.children[1].innerHTML = reviews[i].des
        i++;
    })
}