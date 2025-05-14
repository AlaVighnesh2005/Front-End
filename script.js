// script.js
function getRecommendations() {
    const songName = document.getElementById("songInput").value;
    
    // For now, we'll use a static list of recommendations.
    const recommendations = [
        "Song 1 - Artist A",
        "Song 2 - Artist B",
        "Song 3 - Artist C",
        "Song 4 - Artist D"
    ];

    let output = `<h2>Recommendations for "${songName}":</h2><ul>`;
    for (let i = 0; i < recommendations.length; i++) {
        output += `<li>${recommendations[i]}</li>`;
    }
    output += `</ul>`;

    document.getElementById("recommendations").innerHTML = output;
}
