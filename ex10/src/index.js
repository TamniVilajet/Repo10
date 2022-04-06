function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
    // Add a record here
            artist: "Red Hot Chili Peppers",
            title: "Californication",
            release_year: 1999,
            id: 2,
            formats: {
                1: "TAPE",
                2: "CD",
                3: "DVD"
                },
            gold: true
            }
    };
    return myMusic;
    }
    console.log(myFunction()[2]);
    module.exports = myFunction;