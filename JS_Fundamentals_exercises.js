//#1 
function canIVote(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}
console.log(canIVote(19))

//#2 
function agreeOrDisagree(str1, str2) {
    if (str1 === str2) {
      return "You agree!"
    } else {
      return "You disagree!"
    }
  }
  console.log(agreeOrDisagree("yep", "yep")) 
  
  //#3
  function lifePhase(age) {
    if (age >= 0 && age <= 3) {
      return 'baby'
    } else if (age >= 4 && age <= 12) {
      return 'child'
    } else if (age >= 13 && age <= 19) {
      return 'teen'
    } else if (age >= 20 && age <= 64) {
      return 'adult'
    } else if (age >= 65 && age <= 140) {
     return 'senior citizen'
    } else {
      return 'This is not a valid age'
    }
  }
  console.log(lifePhase(5)) //should print 'child'

  //#4.1
  const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

//#4.2 as a function declaration:
function finalGrade(midterm, final, homework) {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

//#5.1
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`

//#5.2 Using string concatenation:
const reportingForDuty = (rank, lastName) => rank + " " + lastName + " " + "reporting for duty!"

//#5.3 As a function declaration:
function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`
}

//#6
const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
} 

//#7
const calculateWeight = (earthWeight, planet) => {
	switch (planet) {
    case 'Mercury':
    	return earthWeight * .378;
    case 'Venus':
    	return earthWeight * .907;
    case 'Mars':
    	return earthWeight * .377;
    case 'Jupiter':
    	return earthWeight * 2.36;
    case 'Saturn':
    	return earthWeight * .916;
    default:
    	return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }};
  console.log(calculateWeight(100, 'Jupiter'))


  //#8.1
  const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false
}


//#8.2 As a function declaration:
function truthyOrFalsy(value) {
    if (value) {
        return true
    } else {
        return false
    }
}

//#8.3 Using a ternary: 
const truthyOrFalsy = value => value ? true : false 

//#9 counts number of imaginary friends
//always 33%
const numImaginaryFriends = (total) => {
    return Math.round(total * 0.33)
  }

//#10
const sillySentence = (adj, verb, noun) => {
    return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`
  }
console.log(sillySentence('excited', 'love', 'functions')) 

//#11
function howOld(age, year) {
    let future = year - 2020 + age;
    let birth = 2020 - age
    let past = 2020 - age - year;
    let pastAge = year - birth;
    if (year > 2020) {
      return `You will be ${future} in the year ${year}`
    } else if (year < birth) {
      return `The year ${year} was ${past} years before you were born`
    } else if (year > birth) {
      return `You were ${pastAge} in the year ${year}`
    } else {
      return `Provide correst age and year values.`
    }
  }
  console.log(howOld(26, 2040))

  //#12
  const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
   else if (percentSharedDNA >= 35 && percentSharedDNA <= 99 ) {
        return 'You are likely parent and child or full siblings.'
    }
    else if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    else if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.'
    }
    else if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.'
    }
    else if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
        return 'You are likely 3rd cousins'
    } else {
    return 'You are likely not related.'
}}
console.log(whatRelation(34))

//#13
const tipCalculator = (quality, total) => {
    switch (quality) {
      case 'bad': return total * .05;
      case 'ok': return total * .15;
      case 'good': return total * .2;
      case 'excellent': return total * .3;
      default: return total * .18;
    }
  };
console.log(tipCalculator('good', 100))

//#14
function toEmoticon(emoji) {
    switch(emoji) {
      case 'shrug': return '|_{"}_|';
      case 'smiley face': return ':)';
      case 'frowny face': return ':(';
      case 'winky face': return ';)';
      case 'heart': return '<3'
      default: return '|_(* ~ *)_|';
    }
  };
  console.log(toEmoticon("whatever")) 
