var cccEnginePath = process.argv[2];
var cccVersion = process.argv[3];
var fs = require("fs");
var child_process = require("child_process");
var templateCfg = require('./templateCfg');
var cccEngineCfg = require('./cccEngineCfg.js.bak');
var app = module.exports = {};
app.doMain = function()
{

    console.log("命令格式提示:参数1:cocosCreator引擎路径,参数2:cocosCreator引擎版本号")
    if (!!cccEnginePath && !!cccVersion)
    {
        let cccVersionFolderName = `./${cccVersion}`
        fs.exists(cccVersionFolderName, (exists) =>
        { 
            if (exists)
            {    
                console.log("文件存在")
                return; 
            }  
            fs.mkdirSync(cccVersionFolderName);
            for (let _path of templateCfg.paths)
            {

            }
        })
    }
    else
    {
        console.error("参数错误")
        console.error("正确姿态:node extractPrimary.js cocosCreator引擎根目录 cocosCreator引擎版本号")
    }
}
app.doMain();