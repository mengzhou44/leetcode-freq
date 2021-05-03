/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let map = new Map()

    for (let domain of cpdomains) {
        let temp = domain.split(' ')
        let count = parseInt(temp[0])
        let name = temp[1]

        let keys = createKeys(name)

        for (let key of keys) {
            if (!map.has(key)) {
                map.set(key, count)
            } else {
                map.set(key, map.get(key) + count)
            }
        }
    }

    return Array.from(map.keys()).map(key => `${map.get(key)} ${key}`)


    function createKeys(name) {
        let array = name.split('.')
        let keys = []
        let size = array.length
        let count = 0
        while (count < size) {
            let key = array.join('.')
            keys.push(key)
            array.shift()
            count++
        }

        return keys
    }
};