const timeLog = (req, res, next) => {
    let starttime = new Date().getTime();
    next()
    let endtime = new Date().getTime();
    console.log(endtime - starttime);
}
module.exports = {
    timeLog
}