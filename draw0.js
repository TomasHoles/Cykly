// Získání reference k HTML canvas elementu s id 'myCanvas'
let canvas = document.getElementById('myCanvas');

// Získání 2D vykreslovacího kontextu pro canvas
let ctx = canvas.getContext('2d');

// Nastavení barvy výplně na šedou
ctx.fillStyle = '#DCDCDC';

// Vykreslení obdélníka, který pokryje celý canvas touto šedou barvou
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Přidání posluchače událostí k celému dokumentu pro detekci stisku klávesy
document.addEventListener('keydown', function(event) {
    // Kontroluje, zda byla stisknuta klávesa Escape
    if (event.code === 'Escape') {
        // Pokud ano, znovu vykreslí celý canvas šedou barvou
        ctx.fillStyle = '#DCDCDC';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return; // Ukončení funkce
    }

    switch(event.code){
        case 'KeyS':
    
    // Generuje náhodné souřadnice x a y uvnitř plátna
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    // Generuje náhodnou velikost obdélníka mezi 50 a 150
    let size = Math.random() * 100 + 50;

    // Generuje náhodnou barvu
    let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    // Vykreslí obdélník s náhodnými parametry
    drawRectangle(x, y, size,size, col);
    break;
    case 'KeyE':
    randomEllipse();
    break;
    case 'KeyT':
    drawTarget();    
    break;
    case 'KeyZ':
    drawObjekt();
    break;
    case 'KeyP':
        drawCtverecekX();
        break;
    case 'KeyU':
        drawTriaangle();
}
});
function randomEllipse(){
    let w = Math.random() * 100 + 50;
    let h = Math.random() * 100 + 50;
    let x = Math.random() * (canvas.height - w) + w/2 ;
    let y = Math.random() * (canvas.height - h) + h/2 ;
    let c = 'rgb(${Math.random()* 255},${Math.random()* 255},${Math.random()* 255})';
    drawEllipse(x,y,w,h, c);
}

function drawTarget(circles=10,gap=20){
    for(i =1;i<=circles;i++){
        drawCircle(canvas.width/2, canvas.height/2,i*gap,"yellow");
    }
}

function drawObjekt(ctverec=10,gap=35){
    for(i =1;i<=ctverec;i++){
        drawRectangle(50, 0,i*gap,i*gap,"red");
        drawRectangle(50, 350,i*gap,i*gap,"blue");
        drawRectangle(400, 0,i*gap,i*gap,"yellow");
        drawRectangle(400, 350,i*gap,i*gap,"green");
    }
}



function drawCtverecekX(Squares = 26 ,Size = 20,padding = 15){
    for (i = 0; i < Squares; i++) {
        const x = padding + i * (Size + padding);
        const y = 100 +padding;
        drawSquare(x, y, Size, 'red'); 
    }
    for (i = 0; i < Squares; i++) {
        const x =  padding + i * (Size + padding);
        const y = 300 +padding;
        drawSquare(x, y, Size, 'red'); 
    }
    for (i = 0; i < Squares; i++) {
        const x =  padding + i * (Size + padding);
        const y = 500 +padding;
        drawSquare(x, y, Size, 'red'); 
    }
   
}

function drawTriaangle(rectangles = 30 ,Size = 20,padding = 15){
    for (i = 0; i < rectangles; i++) {
        const x = padding + i * (Size + padding);
        const y = 100 +padding;
        const w = 10;
        const h = 10+i*15;
        drawRectangle(x, y,w,h, 'blue'); 
    }
}

// Funkce pro vykreslení obdélníka na plátno s danými parametry
function drawRectangle(x, y, w, h, col) {
    // Nastavení barvy výplně pro obdélník
    ctx.fillStyle = col;
    ctx.strokeStyle = col;
    // Vykreslení obdélníka na plátno s danými souřadnicemi (x, y),
    // šířkou (w) a výškou (h)
    ctx.strokeRect(x, y, w, h);
}


// Funkce pro vykreslení elipsy na plátno s danými parametry
function drawEllipse(x, y, w, h, col) {
    // Nastavení barvy výplně pro elipsu
    ctx.fillStyle = col;
    // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
    ctx.beginPath();
    // Vykreslení elipsy s centrem v bodě (x, y), s horizontálním poloměrem (w / 2),
    // vertikálním poloměrem (h / 2) a úhlem od 0 do 2π (což je celý kruh)
    ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
    // Vyplnění elipsy nastavenou barvou
    ctx.fill();
}

// Funkce pro vykreslení kruhu na plátno s danými parametry
function drawCircle(x, y, r, col) {
    // Nastavení barvy výplně pro kruh
    ctx.strokeStyle = col;
    // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
    ctx.beginPath();
    // Vykreslení kruhu s centrem v bodě (x, y), poloměrem (r) a úhlem od 0 do 2π
    // (což je celý kruh)
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    // Vyplnění kruhu nastavenou barvou
    ctx.stroke();
}

// Funkce pro vykreslení čtverce na plátno s danými parametry
function drawSquare(x, y, s, col) {
    // Nastavení barvy výplně pro čtverec
    ctx.fillStyle = col;
    // Vykreslení čtverce na plátno s danými souřadnicemi (x, y) a rozměry (s x s)
    ctx.fillRect(x, y, s, s);
}

