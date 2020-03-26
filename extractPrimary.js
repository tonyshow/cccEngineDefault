var fs = require("fs");
var path = require("path");
var child_process = require("child_process");
var templateCfg = require('./templateCfg');
var cccEngineCfg = require('./cccEngineCfg.js');
var app = module.exports = {};


app.mkdirsSync = function(dirname)
{
    if (fs.existsSync(dirname))
    {
        return true;
    }
    else
    {
        if (this.mkdirsSync(path.dirname(dirname)))
        {
            fs.mkdirSync(dirname);
            return true;
        }
    }
};
//去除文件名
app.rmFileName = function(_path)
{
    let tmpList = _path.split('/');
    if (-1 != _path.indexOf('\\'))
    {
        tmpList = _path.split('\\');
    }
    let fileName = tmpList[tmpList.length - 1];
    return _path.replace(fileName, '');
}

app.doMain = function()
{
    let cccEnginePath = cccEngineCfg.getEnginePath();
    let cccVersion = cccEngineCfg.getEngineVersion();
    let cccVersionFolderName = `./primary/${cccVersion}`
    fs.exists(cccEnginePath, (exists) =>
    { 
        if (!exists)
        {    
            console.log(cccEnginePath)
            console.log("引擎路径不存在")
            return; 
        }  
        fs.exists(cccVersionFolderName, (exists) =>
        { 
            if (exists)
            {    
                // console.log(`${cccVersionFolderName}\n版本文件夹已存在`);
            }  
            else
            {
                fs.mkdirSync(cccVersionFolderName);
            }

            for (let _path of templateCfg.paths)
            {
                let engineFilePath = `${cccEnginePath}${_path}`
              
                let versionFilePath  = `${cccVersionFolderName}/${_path}`
                let mkdirPath = `${cccVersionFolderName}/${this.rmFileName(_path)}`
                this.mkdirsSync(mkdirPath);
                
                try {
                    fs.statSync(versionFilePath).isFile();
                    console.warn(`文件${versionFilePath}已提取过`); 
                } catch (error) {
                    let cpInfo = `cp -r -f ${engineFilePath} ${mkdirPath} `
                    child_process.execSync(cpInfo);
                    console.log(`成功提取:${engineFilePath}`)
                }

               
                // if(!stat){
                //     let cpInfo = `cp -r -f ${engineFilePath} ${mkdirPath} `
                //     child_process.execSync(cpInfo);
                // }else{
                //     console.warn(`文件${versionFilePath}已提取过`); 
                // }  
            }
        })
    })
}
app.doMain();