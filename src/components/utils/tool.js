import _ from "lodash";
function diffObject(object, base) {
    function changes(object, base) {
        let arrayIndexCounter = 0;
        return _.transform(object, function (result, value, key) {
            if (!_.isEqual(value, base[key])) {
                let resultKey = _.isArray(base) ? arrayIndexCounter++ : key;
                result[resultKey] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
                console.log("Result: " + JSON.stringify(result));
            }
        });
    }
    return changes(object, base);
}

export default diffObject;