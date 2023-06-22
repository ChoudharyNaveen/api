
/**
 * Checks the input is Array of not
 *
 * @method IsArray
 * @param {array} arr input array
 *
 * @return {boolean} boolean value indicating the array status
 */
const IsArray = arr => (typeof (arr) === 'object' && arr instanceof Array);

/**
 * Checks an Arry is empty or not
 *
 * @method IsEmptyArray
 * @param {array} arr input array
 *
 * @return {boolean} boolean value indicating the array status
 */
const IsEmptyArray = arr => !(IsArray(arr) && arr.length > 0);

/**
 * Checks if set is a Set, regardless of the number of elements it holds
 *
 * @method IsSet
 * @param {Set} set input set
 *
 * @return {boolean} boolean value indicating the Set status
 */
const IsSet = set => typeof (set) === 'object' && set instanceof Set;

/**
 * Checks a Set is valid or not
 *
 * @method IsEmptySet
 * @param {Set} set input set
 *
 * @return {boolean} boolean value indicating the Set status
 */
const IsEmptySet = set => !(IsSet(set) && set.size > 0);

/**
 * Checks if map is a Map, regardless of the number of elements it holds
 *
 * @method IsMap
 * @param {Map} map input map
 *
 * @return {boolean} boolean value indicating the Map status
 */
const IsMap = map => typeof (map) === 'object' && map instanceof Map;

/**
 * Checks a Map is valid or not
 *
 * @method IsEmptyMap
 * @param {Map} map input map
 *
 * @return {boolean} boolean value indicating the Map status
 */
const IsEmptyMap = map => !(IsMap(map) && map.size > 0);

/**
 * Checks a Value is Function
 *
 * @method IsFunction
 * @param {function} fn input function
 *
 * @return {boolean} boolean indicating if arg is valid function
 */
const IsFunction = fn => (typeof (fn) === 'function');

/**
 * Deep clone object
 *
 * @method jsonCopy
 * @param {object} src input object
 *
 * @return {object} cloned object
 */
const jsonCopy = src => JSON.parse(JSON.stringify(src));
/**
 * Checks an Object is empty or not
 *
 * @method IsEmptyObject
 * @param {object} obj input object
 *
 * @return {boolean} boolean value indicating the object status
 */
const IsEmptyObject = obj => !(typeof (obj) === 'object' && !(obj instanceof Array) && obj !== null && Object.keys(obj).length > 0);

/**
 * Checks an Object is valid
 *
 * @method IsValidObject
 * @param {object} obj input object
 *
 * @return {boolean} boolean value indicating the object status
 */
const IsValidObject = obj => (typeof (obj) === 'object' && !(obj instanceof Array) && obj !== null);

/**
 * Checks a String is valid or not
 *
 * @method IsValidString
 * @param {string} str input string
 *
 * @return {boolean} boolean value indicating the string status
 */
const IsValidString = str => (typeof (str) === 'string' && str.trim().length > 0);

/**
 * Checks a Number is valid or not
 *
 * @method IsValidNumber
 * @param {number} num input number
 *
 * @return {boolean} boolean value indicating the number status
 */
// eslint-disable-next-line
const IsValidNumber = num => !isNaN(parseFloat(num)) && Number.isFinite(parseFloat(num));

/**
 * validates a boolean field.
 *
 * @method IsBoolean
 * @param {boolean} field field to check
 *
 * @return {booean} valid boolean field or not;
 */
const IsBoolean = field => typeof (field) === 'boolean';

/**
 * Checks if a string is a valid UUID
 *
 * @method IsValidUuid
 * @param {string} uuid input UUID
 *
 * @return {boolean} boolean value indicating the UUID status
 */
const IsValidUuid = uuid => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);


module.exports = {
    IsValidNumber,
    IsValidObject,
    IsValidUuid,
    isFinite,
    IsArray,
    IsEmptyArray,
    IsEmptyObject,
    IsValidObject,
    IsValidString
};