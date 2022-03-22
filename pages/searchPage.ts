var readlineSync = require('readline-sync');

export let input = readlineSync.question('Enter Input Data: ');
var escapechar: RegExp =/\\r|\\f|\\b|\\n|&|\//g;
export let trimmedinput= input.replace(escapechar, '').replace(/^[ +]+$/g,'');

export function explode (text, max) {
    if (text == null) return '';
if (text.length <= max) return text;
const nextNewLine = /\n/.exec(text);

const lineLength = nextNewLine ? nextNewLine.index: text.length;
if (lineLength <=  max) {
    const line = text.substr(0, lineLength);
    const rest = text.substr(lineLength+1);
    return line + '\n'+  explode(rest, max);
} else {
    let line = text.substr(0, max);
    let rest = text.substr(max);

    const res = (/([\s])[^\s]*$/.exec(line));
    if(res){ //
        line = text.substr(0, res.index);
        rest = text.substr(res.index+1);
    } else {
        line = line + "-";
    }
    return line + '\n'+  explode(rest, max);
}
}

