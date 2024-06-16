let round = prompt("Set Game Round ? :")

let sum = 0

for(var i = 0 ; i < round ; i++){
    var answer = prompt("Head or Tail?")
    var random_answer = ""

    if(Math.floor(Math.random() * 10) <= 4){
        // head
        random_answer = "head"

    }
    else{
        // taill
        random_answer = "taill"
        
    }

    if(answer == random_answer){
            alert("You Win!")
        }
        else{
            alert("You Lose!")
        }

        console.log(random_answer + ":" + answer)
}