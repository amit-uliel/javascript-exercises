const findTheOldest = function(people) {
    people.sort((p1, p2) => {
        let p1Age;
        let p2Age;
        currentYear = new Date().getFullYear();
        if (!p1.yearOfDeath) {
            p1Age = currentYear - p1.yearOfBirth;
        } else {
            p1Age = p1.yearOfDeath - p1.yearOfBirth;
        }

        if (!p2.yearOfDeath) {
            p2Age = currentYear - p2.yearOfBirth;
        } else {
            p2Age = p2.yearOfDeath - p2.yearOfBirth;
        }

        return p2Age - p1Age;
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
