let randNum = Math.floor(Math.random()*101);
var titel = 1 ;
function GN(){
    const Guess_Number = document.getElementById("G_N").value;
    if(Guess_Number == randNum){
        alert ("ถูกต้อง ค่าที่ถูกคือ :"+randNum+"คุณทายไปทั้งหมด:"+titel);
    }
    if(Guess_Number<randNum){
        alert ("น้อยกว่า");   
    }
    else{
        alert ("มากกว่า");
    }
    if (Guess_Number != randNum){ 
        titel = titel + 1
        
    }

    
    
    
    
    
}