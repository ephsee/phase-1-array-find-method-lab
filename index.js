// code your solution here

function superbowlWin(record) {
    let wins = record.find(({result}) => result === "W");
    if(wins === undefined) {
        return undefined;
    }
    return wins.year
}
superbowlWin(record)