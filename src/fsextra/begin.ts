import fs  from 'fs-extra'

let path = '../../../file/test.txt';
// fs.ensureFile(path, function (err) {
//     console.log(err) ;
// })

// 复制文件
// fs.copy('../../../file/test.txt', '../../../file/test2.txt')
//     .then(() => console.log('success!'))
//     .catch(err => console.error(err))

// 清空目录
// fs.emptyDir('../../../file', err => {
//     if (err) return console.error(err)
//     console.log('success!')
// })

//如果文件不存在就新建，如果存在不做任何处理
// fs.ensureFile('../../../file/test.txt', err => {
//     console.log(err) // => null
//     // file has now been created, including the directory it is to be placed in
// })

// 创建硬链接
// fs.ensureLink('../../../file/t/one.txt', '../../../file/t2/one.txt')
//     .then(() => {
//         console.log('success!')
//     })
//     .catch(err => {
//         console.error(err)
//     })

//如果目录不存在就新建，如果存在不做任何处理
// fs.ensureDir('../../../file/t')
//     .then(() => {
//         console.log('success!')
//     })
//     .catch(err => {
//         console.error(err)
//     })

// 移动文件
// fs.move('../../../file/t2/test23.txt','../../../file/test.txt')
//     .then(() => {
//         console.log('success!')
//     })
//     .catch(err => {
//         console.error(err)
//     })

// With Promises:
// 向文件写入内容，如果文件不存在，则创建之
// fs.outputFile('../../../file/out/output.txt', 'hello world!')
//     .then(() => fs.readFile('../../../file/out/output.txt', 'utf8'))
//     .then(data => {
//         console.log(data) // => hello!
//     })
//     .catch(err => {
//         console.error(err)
//     })

// fs.outputJson("../../../file/json/test.json", {name: 'JP'})
//     .then(() => fs.readJson("../../../file/json/test.json"))
//     .then(data => {
//         console.log(data.name) // => JP
//     })
//     .catch(err => {
//         console.error(err)
//     })

//判断路径存在不存在
// fs.pathExists('../../../file/output.txt', (err, exists) => {
//     console.log(err) // => null
//     console.log(exists) // => false
// })

// With Promises:
// 删除文件或者目录
// fs.remove('../../../file/t2')
//     .then(() => {
//         console.log('success!')
//     })
//     .catch(err => {
//         console.error(err)
//     })

// fs.writeJson('../../../file/last.json', {name: 'fs-extra',age:1})
//     .then(() => {
//         console.log('success!')
//     })
//     .catch(err => {
//         console.error(err)
//     })
