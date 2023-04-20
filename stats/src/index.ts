import { CsvFileReader } from "./CsvFileReader";

const csvFileReader = new CsvFileReader("football.csv")
csvFileReader.read();

console.log(csvFileReader.data);
