let number;


function getValues(){
    number = Number(document.getElementById("number").value);
}

function checkNumber(){
    number = Number(document.getElementById("number").value);

    let num = parseFloat(number); 
            

           
            let isInteger = Number.isInteger(num);
            let isFiniteNum = Number.isFinite(num);
            let isSafeInteger = Number.isSafeInteger(num);

            
            document.getElementById("result").innerHTML = 
              `Entered Number: ${num}<br>
               Is Integer? ${isInteger}<br>
               Is Finite? ${isFiniteNum}<br>
               Is Safe Integer? ${isSafeInteger}<br>
               Max Safe Integer: ${Number.MAX_SAFE_INTEGER}<br>
               Min Safe Integer: ${Number.MIN_SAFE_INTEGER}<br>`;
}

function clearField(){
    document.getElementById("number").value="";
    document.getElementById("result").value="";
}