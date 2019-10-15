/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
    let factor = config[focus] || 0,
        full_time = study_time(knowsProgramming);

    return factor == 0 ? full_time : Math.ceil(full_time / factor);
  };

function study_time(knowsProgramming) {
    let weeks_with_basic = 800,
        weeks_without_basic = weeks_with_basic + 500;

    return knowsProgramming ? weeks_with_basic : weeks_without_basic;
}
