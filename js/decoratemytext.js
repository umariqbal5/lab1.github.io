var timer = null;

function biggerDecorations(){
        if(timer==null){
            timer = setInterval(biggerFont, 500);
        }else{
            clearInterval(timer);
            timer = null;
        }

}

function biggerFont(){
    var textArea = document.getElementById("text-decorations");
    let size = parseInt(textArea.style.fontSize) ? parseInt(textArea.style.fontSize) : 12;
    size = size+2;
    textArea.style.fontSize = size+"pt";
}
function changeFontWeight() {
    var textArea = document.getElementById("text-decorations");
    var body = document.body;

    if(document.getElementById("bling").checked){
        textArea.style.fontWeight = "bold"
        textArea.style.color= "green"
        textArea.style.textDecoration = "underline"
        body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }else{
        textArea.style.fontWeight = "normal"
        textArea.style.color= "black"
        textArea.style.textDecoration = "none"
        body.style.background = "none";
    }

}

function malkovich(){
    var textArea = document.getElementById("text-decorations");
    var words = textArea.value.match(/\S+/g);
    console.log(words)
    for(let i=0;i<words.length;i++){
        if(words[i].length>=5){
            textArea.value = textArea.value.replace(words[i],"Malkovich");
        }
    }
}

window.onload = function(){
    document.getElementById("bigger-decoration").onclick = biggerDecorations;
    document.getElementById("bling").onchange = changeFontWeight;
    document.getElementById("malkovich").onclick = malkovich;
}