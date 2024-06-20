// GENERATE CATEGORIES FROM ARRAY

const categories = [
    "Master of the Nail",
    "Hunter's Journle", 
    "Dangerous Foes", 
    "Name That DLC",
    "Team Cherry",
    "35k and a dream",
    "Out Of Context",
    "Lands Beyond Hallownest",
    "Holloguessr",
];

var final = [];
var count = 0;
function getCats() {
    if (final.length < 5){
        if (count == undefined){
            count = 0;
        }
        if (count > 4){
            return;
        }
        count++;
        var f = Math.floor (Math.random () * categories.length)
        if (final.includes(categories[f])){
            count--;
            return;
        }
        final[count] = categories[f];
    }   
}
for (var i = 0; i < 10; i++){
    getCats();
}
final[final.length+1] = "Mystery Trivia";

// SET HTML CODE FROM VALUES
for (let i = 1; i < 5; i++){
    document.getElementById(i).innerHTML = final[i];
}
document.getElementById('5').innerHTML = "Mystery Trivia";



function clicked(id){
    if (id.includes(",")){
        let f = id.split(',');
        let x = document.getElementById(id).innerHTML;
        let cat = document.getElementById(f[0]).innerHTML;
        getQuestion(x, cat);
    } else {
        console.log("Clicked on category " + document.getElementById(id).innerHTML);
    }
}

function getQuestion(value, cat){
    if (cat.includes("35")){
        switch (value) {
            case "100": {
                
            }
        }
    }
}