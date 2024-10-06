// Create the custom cursor element

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        btc.innerHTML = data.bitcoin.usd;
        eth.innerHTML = data.ethereum.usd;
        doge.innerHTML = data.dogecoin.usd;
    })
    .catch(error => console.error('Error:', error));
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Track mouse movement and update custom cursor position
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
});

