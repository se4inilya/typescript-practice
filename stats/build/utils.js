"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromString = void 0;
const dateFromString = (dateString) => {
    const dateParts = dateString
        .split("/")
        .map((part) => { return parseInt(part); });
    return new Date(dateParts[2], dateParts[1], dateParts[0]);
};
exports.dateFromString = dateFromString;
