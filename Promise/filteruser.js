const { filterDirMyPromise } = require('./filterdir')
 
 
async function tester() {
  try {
    const files = await filterDirMyPromise("Folder1", ".js")
    console.log(files)
  } catch (err) {
    console.log(err)
  }
}
tester()

