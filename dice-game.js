function rollDice() {
    let goldCoins = 0;

    for(let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() *6) + 1;

        alert('So far you have ' + goldCoins + ' ducats.\n\nYou rolled a ' + roll + '!');
        if (roll === 1) {
            alert('You lose, bucko. A 1 ends the game.');
            break;
        }
        if (roll === 2 || roll === 3) {
            alert('Nothing this time, wrangler. Try again!');
            continue;
        }
        
        if (roll === 4 && goldCoins > 0) {
            alert('You are going to have to put one in the spitoon, hoss.');
            goldCoins = goldCoins - 1;
            continue;
        } 
        alert('Look at you, cowboy! You win ' + roll + ' gold ducats!');
        goldCoins += roll;
        }
        alert('You won a total of ' + goldCoins + '. You might want to put them in your satchel before the necromancer snatches them.');
        document.body.style.backgroundImage = "url('necromancer.png')";
    }
