let input = document.getElementById('user-guess');
let movie = document.getElementById('movie-descriptor');
let output = document.getElementById('output');
let hint = document.getElementById('hint');
let button = document.getElementById('button');

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

let currMovie = 0;
let guesses = 3;

function checkGuess(event) {
    event.preventDefault();
    if (button.innerHTML == 'Submit') {
        if (input.value === movies[currMovie].title) {
            output.innerHTML = 'Correct!';
            button.innerHTML = 'Next Question';
            input.value = '';
            hint.innerHTML = '';
            currMovie++;
            guesses = 3;
        } else {
            if (guesses == 0) {
                output.innerHTML = 'You lost!';
            } else {
                guesses--;
                output.innerHTML = `Wrong, you have ${guesses} guesses left.`;
            }
        }
    }
    else {
        button.innerHTML = 'Submit';
        output.innerHTML = '';
        movie.innerHTML = movies[currMovie].explanation;
    }
}

function checkHint(event) {
    event.preventDefault();
    hint.innerHTML = movies[currMovie].hint;
}

