var os = require('os');
var app = module.exports = {};
// 获取引擎路径
app.getEnginePath = function()
{
    let _cccVersion = this.getEngineVersion();
    let paths = {
        "darwin": `/Applications/CocosCreator/Creator/${_cccVersion}`,
        "win32": `c://CocosCreator${_cccVersion}`,
    }
    return paths[this.getPlatform()];
};
// 获取引擎路径
app.getEnginePathExe = function()
{
    let _cccVersion = this.getEngineVersion();
    let paths = {
        "darwin": `${this.getEnginePath()}/CocosCreator.app/Contents/MacOS/CocosCreator`,
        "win32": `c://CocosCreator${_cccVersion}`,
    }
    return paths[this.getPlatform()];
};
//cocos2d-x路径
app.getEngineCocos2dxPath = function()
{
    // '/Applications/CocosCreator/Creator/version/CocosCreator.app/Contents/Resources/cocos2d-x'
    let paths = {
        "darwin": `${this.getEnginePath()}/CocosCreator.app/Contents/Resources/cocos2d-x`,
        "win32": `${this.getEnginePath()}/Resources/cocos2d-x`,
    }
    return paths[this.getPlatform()];
};
//cocosResources路径
app.getEnginePathRes = function()
{
    let _cccVersion = this.getEngineVersion();
    let paths = {
        "darwin": `${this.getEnginePath()}/CocosCreator.app/Contents/Resources/`,
        "win32": `c://CocosCreator${_cccVersion}/Resources/`,
    }
    return paths[this.getPlatform()];
};
// 获取引擎路径
app.getEngineVersion = function()
{
    return '2.3.3-rc.4'
};
// darwin:苹果系统，win32:windows系统
app.getPlatform = function()
{
    let platform = os.platform();
    console.log(platform);
    return platform
}