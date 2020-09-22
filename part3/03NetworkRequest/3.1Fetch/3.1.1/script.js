"use strict";
let log = console.log.bind(console);

function rndNum(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

async function getUsers(names) {
    let jobs = [];

    for(let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {
                return null;
            }
        );
        jobs.push(job);
    }

    let results = await Promise.all(jobs);

    log(results);
    return results;
}
