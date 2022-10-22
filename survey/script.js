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
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
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
    //alert(getCookie('quizres'));
  },
  questions: [
    {
      'q': 'What do you most need help with in your career?', 
      'options': [
        'Managing / Negotiating sponsorships and endorsements.',
        'Season strategy, Scheduling of day to day activities.',
        'Boosting your celebrity appeal and gaining endorsements.'      ],
      //'correctIndex': 0, 
      //'correctResponse': 'Correct! Spare ribs salami sirloin short ribs capicola.',
      //'incorrectResponse': 'Incorrect! Spicy jalapeno venison cupim shankle picanha.'
    },
    {
      'q': 'Would you like to have multiple remote agents',
        'options': [
        'Yes, I would be open to having remote agents',
        'No, I am only looking for in person agents',
        'Possibly, I am open to having remote agents',
        'Maybe, I would be consider it as an option'
      ],
      //'correctIndex': 2,
      //'correctResponse': 'Correct! Bresaola venison picanha, brisket t-bone tenderloin salami jowl chicken landjaeger.',
      //'incorrectResponse': 'Incorrect! Kevin bresaola meatball ball tip ground round.'
    },
    {
      'q': 'Are you willing to do sponsored posts on social media?',
      'options': [
        'Yes, I will do #ad posts on my social media accounts.',
        'No, I don\'t want to do any advertising related posts.'
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
