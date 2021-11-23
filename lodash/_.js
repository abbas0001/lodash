const _ = {
    clamp: (number, lower, upper) => {
        if (number < lower) {
            return lower;
        }
        if (number > upper) {
            return upper;
        }
        if (number < upper && number > lower) {
            return number;
        }
    },

    inRange: (number, start, end) => {
        if (typeof end === 'undefined') {
            end = start;
            start = 0;
        }
        if (start > end) {
            const temp = start;
            start = end;
            end = temp;
        }
        if (number === start) {
            return true;
        }
        if (number < start) {
            return false;
        }
        if (number >= end) {
            return false;
        }
        if (number < end && number > start) {
            return true;
        }
    },

    words: str => {
        return str.split(' ');
    },

    pad: (str, len) => {
        if (len <= str.length) {
            return str;
        }
        let diff = len - str.length;
        if (diff % 2 === 0) {
            let padNum = diff / 2;
            let pad = ' '.repeat(padNum);
            return `${pad}${str}${pad}`;
        } else {
            let padNum = Math.ceil(diff / 2);
            if (padNum === 1) {
                return `${str} `;
            }
            let leftPad = ' '.repeat(padNum - 1);
            let rightPad = ' '.repeat(padNum);
            return `${leftPad}${str}${rightPad}`;
        }
    },

    has: (obj, key) => {
        const keys = Object.keys(obj);
        return keys.some(x => x === key);
    },

    invert: obj => {
        const result = {};
        for (let x in obj) {
            let value = obj[x];
            result[value] = x;
        }
        return result;
    },

    findKey: (obj, func) => {
        let key;
        for (let x in obj) {
            let returned = func(obj[x]);
            if (returned) {
                key = x;
            }
        }
        if (key === undefined) {
            return undefined;
        } else {
            return key;
        }
    },

    drop: (arr, num = 1) => {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (i < num) {
                continue;
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    },

    dropWhile: (arr, func) => {
        const result = [];
        let index;
        for (let i = 0; i < arr.length; i++) {
            const returned = func(arr[i], i, arr);
            if (!returned) {
                index = i;
                break;
            }
        }
        for (let i = index; i < arr.length; i++) {
            result.push(arr[i]);
        }
        return result;
    },

    chunk: (arr, size = 1) => {
        const result = [];
        let secondArr = [];
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            count++;
            secondArr.push(arr[i]);
            if (count % size === 0) {
                result.push(secondArr);
                secondArr = [];
            }
        }
        if (secondArr.length !== 0) {
            result.push(secondArr);
        }
        return result;
    }
};




// Do not write or modify code below this line.
module.exports = _;