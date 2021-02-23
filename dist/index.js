"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const util = require("util");
exports.defaultCSVToHtmlConfig = {
    delimiter: ',',
    documentTitle: false,
    inputFile: path.normalize(process.cwd() + '/input.csv'),
    outputFile: path.normalize(process.cwd() + '/output.csv')
};
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
class CSVToHTML {
    constructor(opts = exports.defaultCSVToHtmlConfig) {
        this.setOptions(opts);
    }
    /**
     * Sets the input file path
     * @param {string} path Path to input file
     * @returns CSVToHTML instance
     */
    setInputFile(path) {
        this.settings.inputFile = path;
        return this;
    }
    /**
     * Sets the input file path
     * @param {string} path Path to input file
     * @returns CSVToHTML instance
     */
    setOutputFile(path) {
        this.settings.outputFile = path;
        return this;
    }
    /**
     * Update settings with provided ones
     * @param opts
     * @returns CSVToHTML instance
     */
    setOptions(opts) {
        this.settings = Object.assign(Object.assign({}, this.settings), opts);
        return this;
    }
    /**
     * Get current converter settings
     * @returns ICSVToHTMLSettings Current settings
     */
    getOptions() {
        return this.settings;
    }
    /**
     * Converts the CSV to HTML
     */
    convert() {
        return __awaiter(this, void 0, void 0, function* () {
            const { delimiter, inputFile, documentTitle, outputFile } = this.settings;
            const file = yield readFile(inputFile, 'utf8');
            const content = file.split('\n');
            if (content.length < 2)
                throw new Error('At least two lines are required in your .csv file (header + data)');
            const header = content.shift();
            let thead = '', tbody = '';
            // Generate header
            header.split(delimiter).forEach((category) => thead += `<th>${category}</th>`);
            // Generate body
            content.forEach((line) => {
                let lineData = '';
                line = line.replace(/,,/g, ', ,');
                line.split(delimiter).forEach((data) => lineData += `<th>${data}</th>`);
                tbody += `<tr>${lineData}</tr>`;
            });
            const html = `<html><head>${documentTitle ? `<title>${documentTitle}</title>` : ''}</head><body><table><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table></body></html>`;
            yield writeFile(outputFile, html);
        });
    }
    /**
     * Parses CLI input and do the conversion
     * @param {object} program CLI input
     */
    parseGlobal(program) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setInputFile(program.input);
            this.setOutputFile(program.output);
            this.setOptions({
                delimiter: program.delimiter,
                documentTitle: program.title
            });
            yield this.convert();
        });
    }
}
exports.CSVToHTML = CSVToHTML;
//# sourceMappingURL=index.js.map