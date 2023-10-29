console.log("welcome to console!")

const monthlyRate = 700;
const yearlyRate = monthlyRate * 12;

console.log(yearlyRate);

const firstName = "Andris"
const lastName = "Engelis"

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceTemplate);

const skyIsBlue = true;

if (skyIsBlue) {
    console.log("The sky is blue!");
} else {
    console.log("The sky is not blue");
}

if (2 + 2 === 4) {
    console.log("Make's sense");
} else {
    console.log("Does not make sense");
}

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
    console.log("Great party");
} else if (friendsAtYourParty <= 4) {
    console.log("ok party");
}
else {
    console.log("big party");
}

let peopleCount = 0;

while (peopleCount < 100) {
    peopleCount = peopleCount + 1;
    peopleCount += 10;
    peopleCount++;
    ++peopleCount;
}

console.log(peopleCount);

let morePeopleCount = 0;
for (let i = 0; i < 10; i++) {
    morePeopleCount++;
}
console.log(morePeopleCount);