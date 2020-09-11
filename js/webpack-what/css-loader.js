module.exports = function (source){
    console.log(source);
    return `export default \`${source}\``
}