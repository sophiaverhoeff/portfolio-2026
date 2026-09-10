const canvas = document.getElementById('orbit');
const ctx = canvas.getContext('2d');
canvas.width = 1260; canvas.height = 696;
let seed = 42;
function random(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
// A grain-textured geometric loop, drawn at a fixed resolution.
for(let i=0;i<230000;i++){
 const t=random()*Math.PI*2;
 const grain=Math.sqrt(-2*Math.log(Math.max(random(),0.00001)))*Math.cos(2*Math.PI*random());
 const radius=1+grain*(.036+.11*(Math.sin(t)+1)/2);
 const x=630+495*Math.cos(t)*radius;
 const y=440+262*Math.sin(t)*radius;
 ctx.fillStyle=`rgba(16,16,16,${.28+random()*.55})`;
 ctx.fillRect(x,y,.65+random()*.85,.65+random()*.85);
}
const button = document.getElementById('opinion-button');
let clicks=0;
button.addEventListener('click',()=>{
 clicks++;
 document.getElementById('button-feedback').textContent= clicks===1 ? 'See? A button should feel like a button.' : ['Still satisfying.','The details make the difference.','Yes, I have opinions about this.'][(clicks-2)%3];
});
