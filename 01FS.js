const fs = require('fs')

fs.readFile('./File/test.txt', 'utf-8', (err, dataStr) => {

    /*console.log(err);
    console.log('-------------------');
    console.log(dataStr);*/

    if (err) {

        return console.log('读取文件失败!' + err.message);

    }

    console.log('读取文件成功!' + dataStr)

})