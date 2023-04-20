"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
csvFileReader.read();
console.log(csvFileReader.data);
