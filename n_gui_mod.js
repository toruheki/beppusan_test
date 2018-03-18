var x_mapped,y_mapped;
var i=0;//debug
var canvas = document.getElementById('canvas1');
function paintInit(canvas){
    var context = canvas.getContext('2d');
    var contrastColor = "#c0a0a0"
    context.fillStyle = "#f0f0f0";//"rgba(255,0,0,1)";
    context.strokeStyle = "#101010";
    //context.strokeStyle = "#f0f0f0";

    //FIGURE RENDERING ROUTINE
    for (i=0;i<7;i++){
        for (var j=0;j<7;j++){
            for (var k=0;k<3;k++){
                context.beginPath();
                //context.strokeStyle = "rgba(0,0,0,0)"
                //context.fillStyle = "rgba(239,239,239,0)";
                context.arc(95+100*j-k*15-(k-1)*12,600-100*i+k*15+(k-1)*18,23,0,Math.PI*2);   //FOR AREA JUDGEMENT

                //JUDGEMENT FOR INTERACTIVE COLOR CHANGE
                if(context.isPointInPath(x_mapped,y_mapped)){
                    context.closePath();
                    context.beginPath();    //FOR NONACTIVES
                    context.fillStyle = "rgba(239,239,239,0.8)";    //TOBEFIXED
                    context.arc(95+100*j-k*15,600-100*i+k*15,50,0,Math.PI*2);
                    context.stroke();
                    context.fill();
                    context.beginPath();    //FOR INTERACTIVE MARKING
                    context.fillStyle = contrastColor;
                    context.arc(95+100*j-k*15,600-100*i+k*15,50,0,Math.PI*2);
                    context.stroke();
                    context.fill();
                } else {             //DEFAULTE COLOR PAINTING FOR NONACTIVE STONES
                    context.closePath();
                    context.beginPath();
                    context.fillStyle = "rgba(239,239,239,0.8)";    //TOBEFIXED
                    context.strokeStyle = "#101010";
                    context.arc(95+100*j-k*15,600-100*i+k*15,50,0,Math.PI*2);
                    //context.globalCompositeOperation = "destination-over";
                    //context.arc(50+j*10,50+j*10,100,Math.PI());
                    context.stroke();
                    context.fill();
                }
            }
        }
    }
}
/*
function markTheStone(canvas){
    var context = canvas.getContext('2d');
    context.strokeStyle = "#f0f0f0";
    context.fillStyle = "#d02020";
    for (i=0;i<5;i++){
        for (var j=0;j<3;j++){
            for (var k=0;k<3;k++){
                context.beginPath();
                context.arc(250-100*j+k*15,100+100*i-k*15,50,0,Math.PI*2);
                //context.arc(50+j*10,50+j*10,100,Math.PI());
                context.globalCompositeOperation = "source-over";
                if(context.isPointInPath(x,y)){
                    context.stroke();
                    //context.fill();
                } 
                context.closePath();

            }
        }
    }

}*/

function onDraw(){
    if(canvas!=null) paintInit(canvas);
}

function onMove(event){
    x_mapped = event.offsetX;
    y_mapped = event.offsetY;
    //markTheStone(canvas);
    //paintInit(canvas);
    onDraw();
}
window.onload = onDraw();
