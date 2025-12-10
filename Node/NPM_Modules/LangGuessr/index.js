const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const lang = franc(process.argv[2]);

if (lang === 'und') {
    console.log(colors.red('Sorry, could not figure it out, try with more sample text'));
} else {
    const language = langs.where('3', lang);
    if (language) {
        console.log(colors.rainbow(`Our best guess is: ${language.name}`));
    } else {
        console.log(colors.red(`Sorry, could not find a language for code: ${lang}`));
    }
}