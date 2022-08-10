const thenFs = require('then-fs')

console.log('A')
async function getAllFile() {
    console.log('B')
    const r1 = await thenFs.readFile('./File/test.txt', 'utf-8')
    const r2 = await thenFs.readFile('./File/test02.txt', 'utf-8')
    console.log(r1)
    console.log(r2)
    console.log('C')
}

getAllFile()

console.log('D')
console.log('F')
console.log('G')
console.log('H')
console.log('I')
console.log('J')
console.log('K')

// 执行结果
/*A
B
D
F
G
H
I
J
K
Hello Node.js
utf-8
C*/
// 证明会在所有同步任务执行完再执行异步任务回调函数 これは
