class TimeMap {
    constructor() {
        this.map = new Map()
    }

    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, [{ value, timestamp }])
        } else {
            let values = this.map.get(key)
            values.push({ value, timestamp })
        }
    }

    get(key, timestamp) {
        if (!this.map.has(key)) {
            return ''
        }

        let values = this.map.get(key)

        for (let i = values.length - 1; i >= 0; i--) {
            if (values[i].timestamp <= timestamp) {
                return values[i].value
            }
        }

        return ''

    }
}
