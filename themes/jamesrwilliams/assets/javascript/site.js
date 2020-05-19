/* Add clickable # links next to headers. */
var postContent = document.querySelector('.post-content');
if(postContent) {
    postContent.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]').forEach((element) => {

        const linkElement = document.createElement('a');
        linkElement.href = '#' + element.id;
        linkElement.text = '#';
        linkElement.title = 'Link to "' + element.lastChild.data + '"';
        linkElement.classList.add('hlink');
        element.prepend(linkElement);
    });
}

var menuToggle = document.getElementById('toggle');
if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        var navigation = document.getElementById('navigation');
        navigation.classList.toggle('active');
    });
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log(`Service Worker registered! Scope: ${registration.scope}`);
            })
            .catch(err => {
                console.log(`Service Worker registration failed: ${err}`);
            });
    });
}

var homepage = document.querySelector('.homepage');
if(homepage) {

  const navigation = document.querySelector('nav#navigation');
  const navigationOffset = navigation.clientHeight;

  window.onresize = () => {
    drawTriangle1(navigationOffset);
    drawTriangle2(navigationOffset);
  };

  drawTriangle1(navigationOffset);
  drawTriangle2(navigationOffset);
}

function drawTriangle1(navigationOffset) {

  const triangle1 = document.querySelector('.triangle-1');

  // Right Triangle (top corner to width 500px)
  const height = window.innerHeight;
  const width = 500;
  const angleX = (Math.atan(width/height) * (180/Math.PI));

  // This is the hypotenuse.
  const boxHeight = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));

  triangle1.setAttribute("style", `transform: rotate(${(angleX).toFixed(2)}deg); height: ${(boxHeight - navigationOffset).toFixed(2)}px;`);

}

function drawTriangle2(navigationOffset) {
  const triangle2 = document.querySelector('.triangle-2');
  const navigation = document.querySelector('nav#navigation');

  const height = window.innerHeight;
  const width = window.innerWidth;

  const angleX = (Math.atan(height/width) * (180/Math.PI));
  triangle2.setAttribute("style", `transform: rotate(${(angleX).toFixed(2)}deg);`);

}
