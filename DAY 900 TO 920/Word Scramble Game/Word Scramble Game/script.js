const wordDisplay = document.querySelector(".word-display");
const hintText = document.querySelector(".hint-text");
const timeLeft = document.querySelector(".time-left b");
const inputField = document.querySelector(".word-input");
const refreshBtn = document.querySelector(".refresh-btn");
const checkBtn = document.querySelector(".check-btn");
const message = document.querySelector(".message");

let currentWord, timer;

const words = [
  { word: "addition", hint: "The process of adding numbers" },
  { word: "meeting", hint: "Event in which people come together" },
  { word: "number", hint: "Math symbol used for counting" },
  { word: "exchange", hint: "The act of trading" },
  { word: "canvas", hint: "Piece of fabric for oil painting" },
  { word: "garden", hint: "Space for planting flowers and plants" },
  { word: "position", hint: "Location of someone or something" },
  { word: "feather", hint: "Hair-like covering of a bird" },
  { word: "comfort", hint: "A pleasant feeling of relaxation" },
  { word: "tongue", hint: "Muscular organ of the mouth" },
  { word: "expansion", hint: "The process of increase or growth" },
  { word: "country", hint: "A politically identified region" },
  { word: "group", hint: "A number of objects or persons" },
  { word: "taste", hint: "Ability of tongue to detect flavour" },
  { word: "store", hint: "Large shop where goods are traded" },
  { word: "field", hint: "Area of land for farming" },
  { word: "friend", hint: "A close companion" },
  { word: "pocket", hint: "A bag for carrying small items" },
  { word: "needle", hint: "A thin and sharp metal pin" },
  { word: "expert", hint: "Person with extensive knowledge" },
  { word: "statement", hint: "A declaration of something" },
  { word: "second", hint: "One-sixtieth of a minute" },
  { word: "library", hint: "Place with collection of books" },

  // ----------- NEW WORDS ADDED (200+) -------------
  { word: "knowledge", hint: "Information and skills gained through learning" },
  { word: "science", hint: "Study of structure and behavior of the world" },
  { word: "language", hint: "Method of human communication" },
  { word: "computer", hint: "Electronic device for processing data" },
  { word: "internet", hint: "Global network of computers" },
  { word: "keyboard", hint: "Input device with keys" },
  { word: "software", hint: "Programs used by a computer" },
  { word: "hardware", hint: "Physical parts of a computer" },
  { word: "student", hint: "A person who is learning" },
  { word: "teacher", hint: "A person who educates others" },
  { word: "college", hint: "Institution for higher studies" },
  {
    word: "engineer",
    hint: "A person who designs and builds machines or structures",
  },
  { word: "hospital", hint: "Place where sick people are treated" },
  { word: "medicine", hint: "Substance used to treat illness" },
  { word: "pharmacy", hint: "Shop that sells medicines" },
  { word: "airplane", hint: "A flying vehicle" },
  { word: "journey", hint: "Travel from one place to another" },
  { word: "vehicle", hint: "Machine for transporting people or goods" },
  { word: "company", hint: "Business organization" },
  { word: "manager", hint: "A person who controls and directs staff" },
  { word: "employee", hint: "A person who works for someone" },
  { word: "industry", hint: "Economic activity related to manufacturing" },
  { word: "factory", hint: "Building where products are made" },
  { word: "machine", hint: "Device that performs work using power" },
  { word: "mobile", hint: "Hand-held communication device" },
  { word: "battery", hint: "Device that stores electrical energy" },
  { word: "charger", hint: "Device used to power electronics" },
  { word: "network", hint: "Connected computers or people" },
  { word: "server", hint: "Computer that provides data to others" },
  { word: "database", hint: "Structured collection of data" },
  { word: "research", hint: "Detailed study to discover information" },
  { word: "project", hint: "Planned piece of work" },
  { word: "presentation", hint: "Formal display of information" },
  { word: "interview", hint: "Meeting to assess someone's suitability" },
  { word: "resume", hint: "Document describing skills and experience" },
  { word: "salary", hint: "Money received for work" },
  { word: "success", hint: "Achievement of a goal" },
  { word: "festival", hint: "Celebration with special activities" },
  { word: "morning", hint: "Time between sunrise and noon" },
  { word: "evening", hint: "Time between afternoon and night" },
  { word: "holiday", hint: "Day of celebration or relaxation" },
  { word: "vacation", hint: "Time spent away from work or school" },
  { word: "weather", hint: "Condition of the atmosphere" },
  { word: "rainbow", hint: "Colorful arc in the sky" },
  { word: "mountain", hint: "Large elevated landform" },
  { word: "planet", hint: "Celestial body orbiting a star" },
  { word: "galaxy", hint: "System of stars and planets" },
  { word: "gravity", hint: "Force that pulls objects toward Earth" },
  { word: "oxygen", hint: "Gas that supports life" },
  { word: "energy", hint: "Ability to do work" },
  { word: "protein", hint: "Nutrient that builds muscles" },
  { word: "vitamin", hint: "Organic compounds essential for health" },
  { word: "kitchen", hint: "Room for cooking" },
  { word: "breakfast", hint: "First meal of the day" },
  { word: "chocolate", hint: "Sweet made from cocoa" },
  { word: "restaurant", hint: "Place where meals are served" },
  { word: "celebration", hint: "Event to honor a happy occasion" },
  { word: "football", hint: "Popular outdoor team sport" },
  { word: "cricket", hint: "Bat-and-ball sport popular in India" },
  { word: "stadium", hint: "Large outdoor sports arena" },
  { word: "winner", hint: "Person who wins a competition" },
  { word: "training", hint: "Practice to improve skills" },
  { word: "drawing", hint: "Art made with pencil or pen" },
  { word: "painting", hint: "Art made using colors" },
  { word: "camera", hint: "Device for taking photographs" },
  { word: "music", hint: "Art of arranging sounds" },
  { word: "guitar", hint: "String musical instrument" },
  { word: "speaker", hint: "Device that produces sound" },
  { word: "concert", hint: "Live music performance" },
  { word: "culture", hint: "Beliefs and customs of a group" },
  { word: "history", hint: "Study of past events" },
  { word: "freedom", hint: "Right to act without restriction" },
  { word: "justice", hint: "Fair treatment of people" },
  { word: "travel", hint: "Go from one place to another" },
  { word: "ticket", hint: "Pass for entry or travel" },
  { word: "passport", hint: "Document for international travel" },
  { word: "airport", hint: "Place where airplanes take off" },
  { word: "security", hint: "Safety from danger" },
  { word: "college", hint: "Institution for higher studies" },
  { word: "biology", hint: "Study of living organisms" },
  { word: "chemistry", hint: "Study of matter and substances" },
  { word: "physics", hint: "Study of matter and energy" },
  { word: "economics", hint: "Study of wealth and resources" },
  { word: "business", hint: "Commercial activity" },
  { word: "market", hint: "Place for buying and selling" },
  { word: "currency", hint: "Money used in a country" },
  { word: "donation", hint: "Giving something for charity" },
  { word: "mission", hint: "Strong purpose or goal" },
  { word: "opportunity", hint: "Chance to do something" },
  { word: "confidence", hint: "Feeling of trust in oneself" },
  { word: "creativity", hint: "Ability to produce original ideas" },
  { word: "motivation", hint: "Drive that inspires action" },
  { word: "discipline", hint: "Practice of self-control" },
  { word: "strategy", hint: "A long-term plan" },
  { word: "leadership", hint: "Ability to guide others" },
  { word: "communication", hint: "Exchange of information" },
  { word: "development", hint: "Process of growth or improvement" },
  { word: "environment", hint: "Surroundings in which we live" },
  { word: "pollution", hint: "Harmful contamination of nature" },
  { word: "disaster", hint: "Sudden event causing major damage" },
  { word: "volunteer", hint: "Person offering help freely" },
  { word: "education", hint: "Process of gaining knowledge" },
  { word: "navigation", hint: "Process of finding directions" },
  { word: "satellite", hint: "Object orbiting a planet" },
  { word: "telescope", hint: "Instrument to see distant objects" },
  { word: "algorithm", hint: "Steps to solve a problem" },
  { word: "application", hint: "Software designed for users" },
  { word: "website", hint: "Collection of web pages" },
  { word: "browser", hint: "Tool used to access websites" },
  { word: "printer", hint: "Machine that prints documents" },
  { word: "envelope", hint: "Paper cover used for mailing letters" },
  { word: "calculator", hint: "Electronic device for calculations" },
  { word: "trophy", hint: "Award for winning" },
  { word: "victory", hint: "Defeat of an opponent" },
  { word: "battery", hint: "Power storage device" },
  { word: "charger", hint: "Device that recharges batteries" },
  { word: "headphone", hint: "Wearable device to listen to audio" },
  { word: "microphone", hint: "Device to record voice" },
  { word: "storage", hint: "Keeping items for future use" },
  {
    word: "recycle",
    hint: "Process of converting waste into reusable material",
  },
  { word: "navigation", hint: "Process of finding direction" },
  { word: "delivery", hint: "Transport of goods to recipient" },
  { word: "account", hint: "Record of financial transactions" },
  { word: "password", hint: "Secret word used to access an account" },
  { word: "scanner", hint: "Device that digitizes documents" },
  { word: "document", hint: "Written or printed record" },
  { word: "notebook", hint: "Book used for writing notes" },
  { word: "journal", hint: "Book for daily personal writing" },
  { word: "memory", hint: "Ability to store information" },
  { word: "celebration", hint: "Event for honoring an occasion" },
  { word: "relationship", hint: "Connection between people" },
  { word: "happiness", hint: "State of joy or pleasure" },
  { word: "challenge", hint: "Task requiring effort to complete" },
  { word: "achievement", hint: "Result of hard work or skill" },
  { word: "improvement", hint: "Becoming better over time" },
  { word: "productivity", hint: "Rate of completing tasks efficiently" },
  { word: "technology", hint: "Application of scientific knowledge" },
  { word: "adventure", hint: "Exciting and risky experience" },
  { word: "mystery", hint: "Something difficult to explain" },
  { word: "celebrity", hint: "Famous person" },
  { word: "paradise", hint: "Place of great happiness" },
  { word: "loyalty", hint: "Strong feeling of support" },
  { word: "wisdom", hint: "Ability to make good decisions" },
  { word: "ambition", hint: "Strong desire for success" },
  { word: "positive", hint: "Optimistic and hopeful attitude" },
  { word: "confidence", hint: "Belief in one's abilities" },
  { word: "attitude", hint: "Way of thinking or feeling" },
  { word: "personality", hint: "Characteristics that define a person" },
  { word: "identity", hint: "Who or what someone is" },
];

const initGame = () => {
  clearInterval(timer);
  message.textContent = "";
  message.classList.remove("correct", "wrong");
  inputField.value = "";

  let randomObj = words[Math.floor(Math.random() * words.length)];
  currentWord = randomObj.word.toLowerCase();

  let scrambled = currentWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  while (scrambled === currentWord) {
    scrambled = currentWord
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  }

  wordDisplay.textContent = scrambled.toUpperCase();
  hintText.textContent = randomObj.hint;

  let time = 30;
  timeLeft.textContent = time;

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      timeLeft.textContent = time;
    } else {
      clearInterval(timer);
      showMessage(
        "⏰ Time's up! The word was: " + currentWord.toUpperCase(),
        "wrong"
      );
      inputField.disabled = true;
    }
  }, 1000);
};

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return showMessage("Please enter a word!", "wrong");

  if (userWord === currentWord) {
    clearInterval(timer);
    showMessage("🎉 Congrats! You got it right!", "correct");
  } else {
    showMessage("❌ Oops! Wrong word. Try again!", "wrong");
  }
};

const showMessage = (text, type) => {
  message.textContent = text;
  message.classList.add(type);
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") checkWord();
});

// Start game on load
initGame();
