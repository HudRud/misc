/*:
 * @author Hudrud
 * @plugindesc Moral plugin for simple karma system
 * 
 * @param initMoralValue
 * @desc Intial moral value
 * @type number
 * @default 0
 *
 * @param maxMoralValue
 * @desc Maximum moral value
 * @type number
 * @default 100
 * 
 * @param minMoralValue
 * @desc Minimum moral value
 * @type number
 * @default 0
 * 
 */

let currentMoralValue, minMoralValue,maxMoralValue
(function(){
    let params = PluginManager.parameters("moralPlugin");
    currentMoralValue = params["initMoralValue"]
    minMoralValue = params["minMoralValue"]
    maxMoralValue = params["maxMoralValue"]
    console.log(currentMoralValue + "\n" + minMoralValue + "\n" + maxMoralValue)
    
})();