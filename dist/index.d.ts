export interface ICSVToHTMLSettings {
    delimiter: string;
    documentTitle: boolean;
    inputFile: string;
    outputFile: string;
}
export declare const defaultCSVToHtmlConfig: {
    delimiter: string;
    documentTitle: boolean;
    inputFile: string;
    outputFile: string;
};
export declare class CSVToHTML {
    settings: ICSVToHTMLSettings;
    constructor(opts?: Partial<ICSVToHTMLSettings>);
    /**
     * Sets the input file path
     * @param {string} path Path to input file
     * @returns CSVToHTML instance
     */
    setInputFile(path: string): CSVToHTML;
    /**
     * Sets the input file path
     * @param {string} path Path to input file
     * @returns CSVToHTML instance
     */
    setOutputFile(path: string): CSVToHTML;
    /**
     * Update settings with provided ones
     * @param opts
     * @returns CSVToHTML instance
     */
    setOptions(opts: Partial<ICSVToHTMLSettings>): CSVToHTML;
    /**
     * Get current converter settings
     * @returns ICSVToHTMLSettings Current settings
     */
    getOptions(): ICSVToHTMLSettings;
    /**
     * Converts the CSV to HTML
     */
    convert(): Promise<void>;
    /**
     * Parses CLI input and do the conversion
     * @param {object} program CLI input
     */
    parseGlobal(program: any): Promise<void>;
}
