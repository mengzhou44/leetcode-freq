/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
    let wordSet = new Set()
    for (let word of wordList) {
        wordSet.add(word)
    }

    let array = [beginWord]
    let res = 0
    let distance = 0

    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        while (count < levelSize) {
            let word = array.shift()
            if (word === endWord) return distance + 1
            wordSet.delete(word)
            let neighbourWords = getNeighbourWords(word, wordSet)

            for (let item of neighbourWords) {
                if (!array.includes(item)) {
                    array.push(item)
                }
            }

            count++
        }

        distance++
    }

    return 0
}


function getNeighbourWords(cur, wordSet) {
    let res = []
    for (let i = 0; i < cur.length; i++) {
        for (let ch of 'abcdefghijklmnopqrstuvwxyz') {
            let newWord = cur.substring(0, i) + ch + cur.substring(i + 1)

            if (wordSet.has(newWord)) {
                res.push(newWord)
            }
        }
    }
    return res

}