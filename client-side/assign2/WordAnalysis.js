// Arrays
let common_words = [
  "the",
  "be",
  "to",
  "of",
  "and",
  "a",
  "in",
  "that",
  "have",
  "I",
  "it",
  "for",
  "not",
  "on",
  "with",
  "he",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "his",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she",
  "or",
  "will",
  "an",
  "my",
  "one",
  "all",
  "would",
  "there",
  "their",
  "what",
  "so",
  "up",
  "out",
  "if",
  "about",
  "who",
  "get",
  "which",
  "go",
  "when"
];

let common_words_objects = [
  { word: "the", rank: 1 },
  { word: "be", rank: 2 },
  { word: "to", rank: 3 },
  { word: "of", rank: 4 },
  { word: "and", rank: 5 },
  { word: "a", rank: 6 },
  { word: "in", rank: 7 },
  { word: "that", rank: 8 },
  { word: "have", rank: 9 },
  { word: "I", rank: 10 },
  { word: "it", rank: 11 },
  { word: "for", rank: 12 },
  { word: "not", rank: 13 },
  { word: "on", rank: 14 },
  { word: "with", rank: 15 },
  { word: "he", rank: 16 },
  { word: "as", rank: 17 },
  { word: "you", rank: 18 },
  { word: "do", rank: 19 },
  { word: "at", rank: 20 },
  { word: "this", rank: 21 },
  { word: "but", rank: 22 },
  { word: "his", rank: 23 },
  { word: "by", rank: 24 },
  { word: "from", rank: 25 },
  { word: "they", rank: 26 },
  { word: "we", rank: 27 },
  { word: "say", rank: 28 },
  { word: "her", rank: 29 },
  { word: "she", rank: 30 },
  { word: "or", rank: 31 },
  { word: "will", rank: 32 },
  { word: "an", rank: 33 },
  { word: "my", rank: 34 },
  { word: "one", rank: 35 },
  { word: "all", rank: 36 },
  { word: "would", rank: 37 },
  { word: "there", rank: 38 },
  { word: "their", rank: 39 },
  { word: "what", rank: 40 },
  { word: "so", rank: 41 },
  { word: "up", rank: 42 },
  { word: "out", rank: 43 },
  { word: "if", rank: 44 },
  { word: "about", rank: 45 },
  { word: "who", rank: 46 },
  { word: "get", rank: 47 },
  { word: "which", rank: 48 },
  { word: "go", rank: 49 },
  { word: "when", rank: 50 }
];

let nba_teams = [
  { name: "Atlanta Hawks", mascot: "Harry the Hawk", coach: "Lloyd Pierce" },
  {
    name: "Boston Celtics",
    mascot: "Lucky the Leprechaun",
    coach: "Brad Stevens"
  },
  { name: "Brooklyn Nets", mascot: "none", coach: "Kenny Atkinson" },
  {
    name: "Charlotte Hornets",
    mascot: "Hugo the Hornet",
    coach: "James Borrego"
  },
  { name: "Chicago Bulls", mascot: "Benny the Bull", coach: "Jim Boylen" },
  {
    name: "Cleveland Cavaliers",
    mascot: "Moon Dog-Sir CC",
    coach: "John Beilein"
  },
  {
    name: "Dallas Mavericks",
    mascot: "Champ-Mavs Man",
    coach: "Rick Carlisle"
  },
  {
    name: "Denver Nuggets",
    mascot: "Rocky the Mountain Lion",
    coach: "Michael Malone"
  },
  { name: "Detroit Pistons", mascot: "Hooper", coach: "Dwane Casey" },
  { name: "Golden State Warriors", mascot: "none", coach: "Steve Kerr" },
  {
    name: "Houston Rockets",
    mascot: "Clutch the Bear",
    coach: "Mike D'Antoni"
  },
  { name: "Indiana Pacers", mascot: "Boomer", coach: "Nate McMillan" },
  { name: "LA Clippers", mascot: "Chuck the Condor", coach: "Doc Rivers" },
  { name: "Los Angeles Lakers", mascot: "none", coach: "Frank Vogel" },
  { name: "Memphis Grizzlies", mascot: "Grizz", coach: "Taylor Jenkins" },
  { name: "Miami Heat", mascot: "Burnie", coach: "Erik Spoelstra" },
  {
    name: "Milwaukee Bucks",
    mascot: "Bango the Buck",
    coach: "Mike Budenholzer"
  },
  {
    name: "Minnesota Timberwolves",
    mascot: "Crunch the Wolf",
    coach: "Ryan Saunders"
  },
  {
    name: "New Orleans Pelicans",
    mascot: "Pierre the Pelican",
    coach: "Alvin Gentry"
  },
  { name: "New York Knicks", mascot: "none", coach: "Mike Miller" },
  {
    name: "Oklahoma City Thunder",
    mascot: "Rumble the Bison",
    coach: "Billy Donovan"
  },
  {
    name: "Orlando Magic",
    mascot: "Stuff the Magic Dragon",
    coach: "Steve Clifford"
  },
  {
    name: "Philadelphia 76ers",
    mascot: "Franklin the Dog",
    coach: "Brett Brown"
  },
  { name: "Phoenix Suns", mascot: "Go the Gorilla", coach: "Monty Williams" },
  {
    name: "Portland Trail Blazers",
    mascot: "Blaze the Trail Cat",
    coach: "Terry Stotts"
  },
  {
    name: "Sacramento Kings",
    mascot: "Slamson the Lion",
    coach: "Luke Walton"
  },
  { name: "San Antonio Spurs", mascot: "The Coyote", coach: "Gregg Popovich" },
  {
    name: "Toronto Raptors",
    mascot: "The Raptor",
    coach: "Nick Nurse",
    current_champs: "yes"
  },
  {
    name: "Utah Jazz",
    mascot: "Jazz Bear",
    coach: "Quin Snyder",
    current_mascot_of_year: "yes"
  },
  { name: "Washington Wizards", mascot: "G-wiz", coach: "Scott Brooks" }
];

// functions

var total_word_length = 0;

common_words.forEach(word => {
  total_word_length += word.length;
});

let myMap = new Map();
common_words.forEach(word => {
  [...word].forEach(letter => {
    let letter_count = myMap.get(letter);
    myMap.set(letter, ++letter_count);
  });
});

console.log;
// console logs
console.log("word count", common_words.length);
console.log("Average word length", total_word_length / common_words.length);
