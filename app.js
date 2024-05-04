const validator = require('validator');
const chalk = require('chalk');

//console.log(validator.isEmail('selvides16266@gmail.com'));
//console.log(validator.isMobilePhone('085923230452', 'id-ID'));
//console.log(validator.isNumeric('085923230452'));
//console.log(chalk.italic.bgBlue.black('Hello World!'));
const nama = 'Selvi';
const pesan = chalk`Lorem, ipsum dolor {bgRed.black.bold sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Nama saya : ${nama}`;
console.log(pesan);
