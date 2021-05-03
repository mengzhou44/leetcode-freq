class RandomizedSet {
    constructor() {
        this.list = []
        this.map = new Map()

    }

    insert(val) {
        if (this.map.has(val)) return false
        this.map.set(val, this.list.length)
        this.list.push(val)
        return true
    }

    remove(val) {
        if (!this.map.has(val)) return false

        let lastElement = this.list[this.list.length - 1]
        let index = this.map.get(val)
        this.list[index] = lastElement
        this.map.set(lastElement, index)

        this.list.pop()
        this.map.delete(val)

        return true
    }

    getRandom() {
        let index = Math.floor(Math.random() * this.list.length)
        return this.list[index]
    }

}

