const html = {
    page404: "./404/index.html",
    Cloudy: "./Cloudy/index.html",
    Cloudyn: "./Cloudy night /index.html",
    Fog: "./Fog4/index.html",
    Hi: "./Hi!/index.html",
    Lightning: "./Lightning/index.html",
    Night: "./Night/index.html",
    Rainy: "./Rainy/index.html",
    Snow: "./Snowy/index.html",
    Sunny: "./Sunnyy/index.html",
    Wetsnow: "./Wet snow/index.html",
    Windy: "./Windy/index.html",
}

const siteEl = {
    btnGo: document.querySelector('#btnGo'),
    inpCity: document.querySelector('#inpCity'),
    block2: document.querySelector('#block2'),
}

const apiKey = "440f7425b1154fcdb51171503241301"
const callApi = "http://api.weatherapi.com/v1/current.json"
let input = ""

siteEl.btnGo.addEventListener('click', () => {
    siteEl.block2.innerHTML = ''
    axios.get(`${callApi}?key=${apiKey}&q=${input}`)
        .then(res => {
            console.log(res.data)
            
        })
})

siteEl.inpCity.addEventListener('input', (e) => {
    input = e.target.value
})