/*
    Me Time Leaderboard JS 🗿
*/

loadJSON(generateTable);


/**
 * Copypasta function from
 * https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
 * 
 * Thanks! 👌🏻 😎 💵
 * @param {string} file 
 */
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'leaderboard.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(JSON.parse(xobj.responseText));
        }
    }
    xobj.send(null);

}

/**
 * This function prints out the leaderboard
 * with the given leaders Object. 👀
 * 
 * @param {Object} leaders 
 */
function generateTable(leaders) {
    console.log(leaders);
    // Make the table and headers
    let table = document.createElement("table");
    let header = table.createTHead();
    let row = header.insertRow(0);
    row.insertCell(0).innerHTML = "Name";
    row.insertCell(1).innerHTML = "1st Places";
    row.insertCell(2).innerHTML = "2nd Places";
    row.insertCell(3).innerHTML = "3rd Places";

    let body = table.createTBody();

    for (index in leaders.leaderboard) {
        let playerRow = body.insertRow(index);
        playerRow.insertCell(0).innerHTML = leaders.leaderboard[index].name;
        playerRow.insertCell(1).innerHTML = leaders.leaderboard[index].metimes[0];
        playerRow.insertCell(2).innerHTML = leaders.leaderboard[index].metimes[1];
        playerRow.insertCell(3).innerHTML = leaders.leaderboard[index].metimes[2];
    }

    // Append the table!
    document.body.appendChild(table);
}