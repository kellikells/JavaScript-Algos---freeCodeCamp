function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let user in usersObj) {
       console.log(user)
        if (usersObj[user].online == true) {
            count++;
        }

    }
    return count;
    // Only change code above this line
}
let users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

console.log(countOnline(users))