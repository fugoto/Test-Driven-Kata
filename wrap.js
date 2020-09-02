const wrap = (line, maxLen) => {
    let str = ''
    let lengthCount = 0
    // for(let i = 1; i <= line.length; i++) {
    //     if(i % maxLen === 0) str += '\n'
    //     else str += line[i-1]
    // }
    line = line.split(' ')
    console.log(line)
    
    for(let i = 0; i < line.length; i++) {
        let word = line[i]
        console.log('word',word.length)
        if(lengthCount + word.length <= maxLen) {
            str += word + " "
            lengthCount += word.length + 1
        }
        else {
            str += '\n'
            i -= 1
            lengthCount = 0
        }
        console.log(str)
    };
    return str

}
wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20)

module.exports = wrap;
