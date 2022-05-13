export function getLastValue(list) {
    let lastValue;
    if (list.length >= 1) {
        lastValue = list[list.length-1];
    } else {
        lastValue = 0
    }
    
    return lastValue;
}

export function getPrevValue(list) {
    let prevValue;
    if (list.length >= 2) {
        prevValue = list[list.length -2];
    } else {
        prevValue = 0;
    }
    return prevValue;
}

export function getLastChange(list) {
    const lastValue = getLastValue(list);
    const prevValue = getPrevValue(list);
    const lastChange = lastValue - prevValue;
    return lastChange;
}

export function getLastChangeRate(list) {
    const prevValue = getPrevValue(list);
    const lastChange = getLastChange(list);
    let lastChangeRate;
    if (prevValue != 0) {
        lastChangeRate = lastChange/prevValue * 100;
    } else {
        lastChangeRate = 0;
    }
    return lastChangeRate
}