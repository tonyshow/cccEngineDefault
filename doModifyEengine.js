var app = module.exports = {};
var child_process = require("child_process");
var path = require("path");
var cccEngineCfg = require('./cfg/cfgCCCEngine');
app.doMain = function()
{
    let engPath = cccEngineCfg.getEnginePathRes();
    let v = cccEngineCfg.getEngineVersion();
    let replacePath = `./modify/${v}/`;
    let fullPath = path.join(__dirname, replacePath);
    let cpInfo = `cp -r -f ${fullPath}* ${engPath}`
    console.log(cpInfo);
    child_process.execSync(cpInfo)
}
app.doMain();