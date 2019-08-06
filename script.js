var dictionary = ["the", "of", "and", "to", "a", "in", "for", "is", "on", "that", "by", "this", "with", "i", "you", "it", "not", "or", "be", "are", "from", "at", "as", "your", "all", "have", "new", "more", "an", "was", "we", "will", "home", "can", "us", "about", "if", "page", "my", "has", "search", "free", "but", "our", "one", "other", "do", "no", "information", "time", "they", "site", "he", "up", "may", "what", "which", "their", "news", "out", "use", "any", "there", "see", "only", "so", "his", "when", "contact", "here", "business", "who", "web", "also", "now", "help", "get", "pm", "view", "online", "c", "e", "first", "am", "been", "would", "how", "were", "me", "s", "services", "some", "these", "click", "its", "like", "service", "x", "than", "find", "price", "date", "back", "top", "people", "had", "list", "name", "just", "over", "state", "year", "day", "into", "email", "two", "health", "n", "world", "re", "next", "used", "go", "b", "work", "last", "most", "products", "music", "buy", "data", "make", "them", "should", "product", "system", "post", "her", "city", "t", "add", "policy", "number", "such", "please", "available", "copyright", "support", "message", "after", "best", "software", "then", "jan", "good", "video", "well", "d", "where", "info", "rights", "public", "books", "high", "school", "through", "m", "each", "links", "she", "review", "years", "order", "very", "privacy", "book", "items", "company", "r", "read", "group", "need", "many", "user", "said", "de", "does", "set", "under", "general", "research", "university", "january", "mail", "full", "map", "reviews", "program", "life", "know", "games", "way", "days", "management", "p", "part", "could", "great", "united", "hotel", "real", "f", "item", "international", "center", "ebay", "must", "store", "travel", "comments", "made", "development", "report", "off", "member", "details", "line", "terms", "before", "hotels", "did", "send", "right", "type", "because", "local", "those", "using", "results", "office", "education", "national", "car", "design", "take", "posted", "internet", "address", "community", "within", "states", "area", "want", "phone", "dvd", "shipping", "reserved", "subject", "between", "forum", "family", "l", "long", "based", "w", "code", "show", "o", "even", "black", "check", "special", "prices", "website", "index", "being", "women", "much", "sign", "file", "link", "open", "today", "technology", "south", "case", "project", "same", "pages", "uk", "version", "section", "own", "found", "sports", "house", "related", "security", "both", "g", "county", "american", "photo", "game", "members", "power", "while", "care", "network", "down", "computer", "systems", "three", "total", "place", "end", "following", "download", "h", "him", "without", "per", "access", "think", "north", "resources", "current", "posts", "big", "media", "law", "control", "water", "history", "pictures", "size", "art", "personal", "since", "including", "guide", "shop", "directory", "board", "location", "change", "white", "text", "small", "rating", "rate", "government", "children", "during", "usa", "return", "students", "v", "shopping", "account", "times", "sites", "level", "digital", "profile", "previous", "form", "events", "love", "old", "john", "main", "call", "hours", "image", "department", "title", "description", "non", "k", "y", "insurance", "another", "why", "shall", "property", "class", "cd", "still", "money", "quality", "every", "listing", "content", "country", "private", "little", "visit", "save", "tools", "low", "reply", "customer", "december", "compare", "movies", "include", "college", "value", "article", "york", "man", "card", "jobs", "provide", "j", "food", "source", "author", "different", "press", "u", "learn", "sale", "around", "print", "course", "job", "canada", "process", "teen", "room", "stock", "training", "too", "credit", "point", "join", "science", "men", "categories", "advanced", "west", "sales", "look", "english", "left", "team", "estate", "box", "conditions", "select", "windows", "photos", "gay", "thread", "week", "category", "note", "live", "large", "gallery", "table", "register", "however", "june", "october", "november", "market", "library", "really", "action", "start", "series", "model", "features", "air", "industry", "plan", "human", "provided", "tv", "yes", "required", "second", "hot", "accessories", "cost", "movie", "forums", "march", "la", "september", "better", "say", "questions", "july", "yahoo", "going", "medical"];

var submitWordBox = document.getElementById("submitWordBox");
var wordInput = document.getElementById("word");
var submitWordButton = document.getElementById("submitWord");
var randomWordButton = document.getElementById("randomWord");
var submitMessageDisplay = document.getElementById("submitMessage");
var messageBox = document.getElementById("message");
var blankBoxes = document.getElementById("blankBoxes");
var letterBoxes = document.getElementById("letterBoxes");

var word;
var stage = 0;
var numGuessed = 0;

submitWordButton.addEventListener("click", submitWord);
randomWordButton.addEventListener("click", randomWord);

function submitWord() {
    word = wordInput.value.trim().toUpperCase();

    if (word != "") {
        startGame();
    }
    else {
        submitMessageDisplay.innerHTML = "Please type a word.";
    }
}

function randomWord() {
    var randomNumber = Math.floor(Math.random() * dictionary.length);
    word = dictionary[randomNumber].toUpperCase();
    startGame();
}

function startGame() {
    submitWordBox.style.display = "none";

    document.getElementById("stage0").style.display = "inline-block";

    for (var i = 0; i < word.length; i++) {
        var blankBox = document.createElement("div");
        blankBox.classList.add("blank");
        blankBoxes.appendChild(blankBox);
    }

    for (var i = 0; i < 26; i++) {
        var letter = String.fromCharCode(i + 65);
        var letterBox = document.createElement("div");

        letterBox.setAttribute("id", letter);
        letterBox.classList.add("letter");
        letterBox.innerHTML = letter;
        letterBox.addEventListener("click", guessLetter);
        letterBoxes.appendChild(letterBox);
    }
}

function guessLetter() {
    if (!this.classList.contains("used") && stage < 7 && numGuessed < word.length) {
        var letter = this.getAttribute("id");
        var blanks = document.querySelectorAll(".blank");
        var numRight = 0;

        for (var i = 0; i < word.length; i++) {
            if (word[i] == letter) {
                blanks[i].innerHTML = letter;
                numRight++;
            }
        }

        if (numRight == 0) {
            document.getElementById("stage" + stage).style.display = "none";
            stage++;
            document.getElementById("stage" + stage).style.display = "inline-block";

            if (stage == 7) {
                messageBox.innerHTML = "You lose";

                for (var i = 0; i < word.length; i++) {
                    if (blanks[i].innerHTML == "") {
                        blanks[i].classList.add("notGuessed");
                        blanks[i].innerHTML = word[i];
                    }
                }
            }
        }
        else {
            numGuessed += numRight;

            if (numGuessed == word.length) {
                messageBox.innerHTML = "You win";
            }
        }

        this.classList.add("used");
    }
}
