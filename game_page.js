player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;


document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - "+ player1Name;
document.getElementById("playerAnswer").innerHTML = "Turno de resposta - " + player2Name;

function send(){
  Number1 = document.getElementById("Number1").value;
  Number2 = document.getElementById("Number2").value;
  actual_answer = parseInt(Number1) * parseInt(Number2);

  question_number = "<h4>" + Number1 + "X" + Number2 + "</h4>";
input_box = "<br>Resposta : <input type= 'text' id='input_check_box'> ";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
row = question_number + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("Number1").value = "";
document.getElementById("Number2").value = "";

    
}


