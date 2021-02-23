#!/usr/bin/env node

/**
 * Packages
 */
const program = require('commander')

/**
 * CSV2HTML
 */
const { CSVToHTML } = require('../dist/')

const converter = new CSVToHTML();

(async () => {
    program
        .version('2.0.0')
        .option('-i, --input <path>', 'CSV input file location')
        .option('-o, --output <path>', 'HTML output file location')
        .option('-d, --delimiter <n>', 'CSV delimiter to use', ',')
        .option('-t, --title <name>', 'HTML document title', false)
        .parse(process.argv)

    if (program.input && program.output) {
        await converter.parseGlobal(program)
    } else {
        console.error('CSV2HTML requires at least input and output file !')
    }
})()
