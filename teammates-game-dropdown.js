
const teammateLevels = [
  { player1: "LeBron James", player2: "Dwyane Wade", team: "Miami Heat" },
  { player1: "Stephen Curry", player2: "Klay Thompson", team: "Golden State Warriors" },
  { player1: "Kevin Durant", player2: "Russell Westbrook", team: "Oklahoma City Thunder" },
  { player1: "Shaquille O'Neal", player2: "Kobe Bryant", team: "Los Angeles Lakers" },
  { player1: "Kyrie Irving", player2: "LeBron James", team: "Cleveland Cavaliers" },
  { player1: "Chris Paul", player2: "Blake Griffin", team: "Los Angeles Clippers" },
  { player1: "Giannis Antetokounmpo", player2: "Khris Middleton", team: "Milwaukee Bucks" },
  { player1: "Jayson Tatum", player2: "Jaylen Brown", team: "Boston Celtics" },
  { player1: "Nikola Jokic", player2: "Jamal Murray", team: "Denver Nuggets" },
  { player1: "Damian Lillard", player2: "CJ McCollum", team: "Portland Trail Blazers" },
  { player1: "Devin Booker", player2: "Chris Paul", team: "Phoenix Suns" },
  { player1: "DeMar DeRozan", player2: "Kyle Lowry", team: "Toronto Raptors" },
  { player1: "Jimmy Butler", player2: "Joel Embiid", team: "Philadelphia 76ers" },
  { player1: "Rajon Rondo", player2: "Anthony Davis", team: "Los Angeles Lakers" },
  { player1: "Kevin Durant", player2: "Kyrie Irving", team: "Brooklyn Nets" },
  { player1: "James Harden", player2: "Dwight Howard", team: "Houston Rockets" },
  { player1: "Russell Westbrook", player2: "Bradley Beal", team: "Washington Wizards" },
  { player1: "LaMarcus Aldridge", player2: "Demar DeRozan", team: "San Antonio Spurs" },
  { player1: "Derrick Rose", player2: "Joakim Noah", team: "Chicago Bulls" },
  { player1: "Kawhi Leonard", player2: "Danny Green", team: "San Antonio Spurs" },
  { player1: "Steve Nash", player2: "Amar'e Stoudemire", team: "Phoenix Suns" },
  { player1: "Chris Webber", player2: "Peja Stojakovic", team: "Sacramento Kings" },
  { player1: "Baron Davis", player2: "Stephen Jackson", team: "Golden State Warriors" },
  { player1: "Chauncey Billups", player2: "Rip Hamilton", team: "Detroit Pistons" },
  { player1: "Vince Carter", player2: "Jason Kidd", team: "New Jersey Nets" },
  { player1: "Yao Ming", player2: "Tracy McGrady", team: "Houston Rockets" },
  { player1: "Manu Ginobili", player2: "Boris Diaw", team: "San Antonio Spurs" },
  { player1: "Carlos Boozer", player2: "Deron Williams", team: "Utah Jazz" },
  { player1: "Shawn Marion", player2: "Steve Nash", team: "Phoenix Suns" },
  { player1: "Tyson Chandler", player2: "Dirk Nowitzki", team: "Dallas Mavericks" },
  { player1: "Paul George", player2: "David West", team: "Indiana Pacers" },
  { player1: "Nene", player2: "Gilbert Arenas", team: "Washington Wizards" },
  { player1: "OJ Mayo", player2: "Zach Randolph", team: "Memphis Grizzlies" },
  { player1: "JJ Redick", player2: "Chris Paul", team: "Los Angeles Clippers" },
  { player1: "Luol Deng", player2: "Carlos Boozer", team: "Chicago Bulls" },
  { player1: "Rudy Gay", player2: "DeMarcus Cousins", team: "Sacramento Kings" },
  { player1: "Al Jefferson", player2: "Kemba Walker", team: "Charlotte Hornets" },
  { player1: "Arron Afflalo", player2: "Carmelo Anthony", team: "New York Knicks" },
  { player1: "Andre Miller", player2: "LaMarcus Aldridge", team: "Portland Trail Blazers" },
  { player1: "Michael Redd", player2: "Andrew Bogut", team: "Milwaukee Bucks" },
  { player1: "Mike Conley", player2: "Marc Gasol", team: "Memphis Grizzlies" },
  { player1: "Brandon Roy", player2: "LaMarcus Aldridge", team: "Portland Trail Blazers" },
  { player1: "Kyle Lowry", player2: "Luis Scola", team: "Houston Rockets" },
  { player1: "Ben Gordon", player2: "Tyrus Thomas", team: "Chicago Bulls" },
  { player1: "Andre Iguodala", player2: "Jrue Holiday", team: "Philadelphia 76ers" },
  { player1: "Jameer Nelson", player2: "Rashard Lewis", team: "Orlando Magic" },
  { player1: "Eric Gordon", player2: "Chris Kaman", team: "Los Angeles Clippers" },
  { player1: "Raymond Felton", player2: "Gerald Wallace", team: "Charlotte Bobcats" },
  { player1: "Antawn Jamison", player2: "Zydrunas Ilgauskas", team: "Cleveland Cavaliers" },
  { player1: "Michael Beasley", player2: "Udonis Haslem", team: "Miami Heat" },
  { player1: "T.J. Ford", player2: "Danny Granger", team: "Indiana Pacers" }
];

let currentLevel = 0;
let lives = 3;

const nbaTeams = [
  "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Bobcats",
  "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks",
  "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets",
  "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies",
  "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Jersey Nets",
  "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic",
  "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings",
  "San Antonio Spurs", "Seattle SuperSonics", "Toronto Raptors", "Utah Jazz",
  "Washington Wizards"
];

function populateDropdown() {
  const select = document.getElementById("teamSelect");
  nbaTeams.sort().forEach(team => {
    const option = document.createElement("option");
    option.value = team.toLowerCase();
    option.text = team;
    select.appendChild(option);
  });
}

function renderLevel() {
  if (currentLevel >= teammateLevels.length) {
    document.getElementById("game").innerHTML = "<h2>🎉 You completed all 50 levels!</h2>";
    return;
  }
  const pair = teammateLevels[currentLevel];
  document.getElementById("pair").innerText = `Level ${currentLevel + 1}: ${pair.player1} & ${pair.player2}`;
  document.getElementById("feedback").innerText = "";
  document.getElementById("teamSelect").value = "";
}

function checkAnswer() {
  const guess = document.getElementById("teamSelect").value.trim().toLowerCase();
  const correct = teammateLevels[currentLevel].team.toLowerCase();
  if (guess === correct) {
    document.getElementById("feedback").innerText = "✅ Correct!";
    currentLevel++;
    setTimeout(renderLevel, 1000);
  } else {
    lives--;
    if (lives <= 0) {
      document.getElementById("game").innerHTML = "<h2>💀 Game Over</h2>";
    } else {
      document.getElementById("feedback").innerText = `❌ Wrong! Lives left: ${lives}`;
    }
  }
}

window.onload = () => {
  renderLevel();
  populateDropdown();
};
