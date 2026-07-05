// No Button Run Away
const noBtn = document.getElementById("no");

function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});

// Floating Hearts
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.animationDuration=(3+Math.random()*3)+"s";

    heart.style.fontSize=(18+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,250);

// Canvas Confetti
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

document.getElementById("yes").onclick=function(){

for(let i=0;i<250;i++){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height;

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fillRect(x,y,6,6);

}

setTimeout(()=>{

document.body.innerHTML=`

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#ff4d88,#ff99c8);
font-family:Poppins;
color:white;
text-align:center;
padding:25px;">

<div>

<img src="parvi.jpg"
style="
width:220px;
height:220px;
border-radius:50%;
border:6px solid white;
object-fit:cover;
box-shadow:0 0 40px white;">

<h1 style="margin-top:25px;font-size:55px;">
❤️ Thank You ❤️
</h1>

<h2>
Dear Parvi
</h2>

<h2>
January without <span style="color:yellow;">ary</span>
is just <b>Jan</b> ❤️
</h2>

<p style="
font-size:22px;
margin-top:25px;
line-height:1.8;">

I don't know what tomorrow brings...

But I know that

meeting you

was one of the most beautiful things

that happened to me.

🌹❤️

</p>

<h2 style="margin-top:30px;">
Will you make my life more beautiful? 💍
</h2>

</div>

</div>

`;

},800);

};
