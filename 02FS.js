const fs = require('fs')

/*
fs.writeFile(__dirname + '/File/test02.txt', 'utf-8', (err) => {

    //console.log(err);

    if (err) {

        return console.log('文件写入失败!' + err.message);

    }

    console.log('文件写入成功！');

})*/

console.log(__dirname);

fs.readFile(__dirname + '/File/Test02.txt', 'utf8', (err, data) => {

    if (err) {

        return console.log('读取文件失败！' + err.message);

    }

    console.log('读取文件成功!' + data);

})