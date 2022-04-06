// Create lion object here
var lion = {
    name: "Simba",
    legs: "4",
    tails: "1"

};
// End of lion object
// Create a function below this line
function myFunction(prop1, value1) {
    lion[prop1] = value1;
    return lion;
}
// End of function
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;