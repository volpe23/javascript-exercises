const findTheOldest = function(people) {
    const oldest = people.reduce((oldest, curr) => {
        const currDeath = curr.yearOfDeath || (new Date().getFullYear());
        const oldDeath = oldest.yearOfDeath || (new Date().getFullYear());
        
        const oldestAge = oldDeath - oldest.yearOfBirth;
        const currAge = currDeath - curr.yearOfBirth;

        return currAge > oldestAge ? curr : oldest;
    })
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
