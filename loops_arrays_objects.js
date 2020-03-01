let sports = ['football', 'rugby', 'American football'];
console.log(`there are ${sports.length} sports in the array ${sports}`);
sports.push('darts');
sports.push('pool');
console.log(`${sports[3]} and ${sports[4]} have now been added, there are now ${sports.length} sports in the array ${sports}`);


let firstSport = sports[0];
let secondSport = sports[1];

console.log(`the first sport in the array is ${firstSport}`);
console.log(`the second sport in the array is ${secondSport}`);

let removedSport = sports.pop();
console.log(`${removedSport} has now been removed`);


// console.log(` has been removed from end of the array is ${sports.pop()}`);
console.log(`current list of sports is ${sports}`);

sports.unshift('basketball');
console.log(`${sports[0]} has now been added to the array at the beginning, sports is now ${sports}`);

let removeDarts = sports.splice(4,1);

console.log(`Darts is not a proper sport so have removed it, that leaves ${sports.length} sports, current list now ${sports}`);



