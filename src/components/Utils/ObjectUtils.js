import _ from "lodash";
function diffObject(object, base) {
    function changes(object, base) {
        const accumulator = {};
        Object.keys(base).forEach((key) => {
            if (object[key] === undefined) {
                accumulator[`-${key}`] = base[key];
            }
        });
        return _.transform(
            object,
            (accumulator, value, key) => {
                if (base[key] === undefined) {
                    accumulator[`+${key}`] = value;
                } else if (!_.isEqual(value, base[key])) {
                    accumulator[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
                }
            },
            accumulator
        );
    }
    return changes(object, base);
}

export default diffObject;