let count = 0;
function cc(card) {
let answer = "";
  
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;  
    }

    if(count <= 0) {
        answer = " Hold";
    }
    else if(count > 0) {
        answer = " Bet";
    }   
    return count + answer;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
