const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// img Element 생성
const bgImage = document.createElement("img");

// img 주소를 설정  <img src="img/0.jpg">

bgImage.src = `img/${chosenImage}`;

// body에 html 추가 : appendChild()

document.body.appendChild(bgImage);



