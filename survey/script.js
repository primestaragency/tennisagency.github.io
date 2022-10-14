function setCookie(name, value, daysToLive) {
    // Encode value in order to escape semicolons, commas, and whitespace
    var cookie = name + "=" + encodeURIComponent(value);
    
    if(typeof daysToLive === "number") {
        /* Sets the max-age attribute so that the cookie expires
        after the specified number of days */
        cookie += "; max-age=" + (daysToLive*24*60*60);
        
        document.cookie = cookie;
    }
}
$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  allowIncorrect: true,
  counterFormat: 'Question %current of %total',
  resultsFormat:'You got 4 out of %total correct!',
  nextCallback:function(){
    //console.log($(".incorrect").data('index'));
  },
  finishCallback:function(){
    alert(quizresponses);
  },
  questions: [
    {
      'q': 'What do you most need a tennis agent for', 
      'options': [
        'You need help negotiating and strategizing on contracts',
        'You want someone else to search for sponsors on your behalf',
        'You have offers but need someone to handle the negotiations',
        'You want help with scheduling and strategizing your season'
      ],
      //'correctIndex': 0, 
      //'correctResponse': 'Correct! Spare ribs salami sirloin short ribs capicola.',
      //'incorrectResponse': 'Incorrect! Spicy jalapeno venison cupim shankle picanha.'
    },
    {
      'q': 'Bacon ham tenderloin pork belly pork chop bresaola pancetta?',
      'options': [
        'Steak',
        'Ribs',
        'Sirloin',
        'Ribeye'
      ],
      //'correctIndex': 2,
      //'correctResponse': 'Correct! Bresaola venison picanha, brisket t-bone tenderloin salami jowl chicken landjaeger.',
      //'incorrectResponse': 'Incorrect! Kevin bresaola meatball ball tip ground round.'
    },
    {
      'q': 'Corned beef hamburger alcatra biltong, beef ribs flank brisket?',
      'options': [
        'True',
        'False'
      ],
      //'correctIndex': 0,
      //'correctResponse': 'Correct! Bacon meatloaf beef porchetta jerky t-bone pastrami.',
      //'incorrectResponse': 'Incorrect! Pork loin fatback shankle.'
    },
    {
      'q': 'Picanha meatball tenderloin burgdoggen cow jowl?',
      'options': [
        'Sausage',
        'Tenderloin',
        'Picanha'
      ],
      //'correctIndex': 2,
      //'correctResponse': 'Correct! Jowl frankfurter burgdoggen turkey, porchetta strip steak landjaeger jerky.',
      //'incorrectResponse': 'Incorrect! Swine andouille ground round, short ribs short loin.'
    }
  ]
  
});
