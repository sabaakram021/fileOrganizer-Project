/* How to take input in node using */
// let inputArr = process.argv;
// let input = inputArr[2];
// console.log(input);

let fs = require('fs');
let path = require('path');
let folderPath = process.argv[2];
console.log(folderPath);
let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};

let folderExists = fs.existsSync(folderPath);

if(folderExists){
    let files = fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let folderName = givefolderName(ext);
        console.log("extension--",ext,"folderName--",folderName);
    }
}else{
    console.log("Please enter a valid path");
}

function givefolderName(ext){
    for(let key in extensions){
        let extensionArr = extensions[key];
        for(let i=0;i<extensionArr.length;i++){
            if(extensionArr[i]==ext){
                return key;
            }
        }
    }
    return "others";
}