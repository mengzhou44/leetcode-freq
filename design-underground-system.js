class UndergroundSystem {

    constructor() {
        this.usersMap = new Map()
        this.travelTimeMap = new Map()
    }

    checkIn(id, stationName, time) {
        this.usersMap.set(id, { from: stationName, checkIn: time })
    }

    checkOut(id, stationName, time) {
        let user = this.usersMap.get(id)
        let travelTime = time - user.checkIn
        let startStation = user.from
        let endStation = stationName
        this.usersMap.delete(id)

        let key = `${startStation}-${endStation}`

        if (!this.travelTimeMap.has(key)) {
            this.travelTimeMap.set(key, [travelTime])
        } else {
            this.travelTimeMap.get(key).push(travelTime)
        }
    }

    getAverageTime(startStation, endStation) {

        let key = `${startStation}-${endStation}`
        let travelTimes = this.travelTimeMap.get(key)
        let res = travelTimes.reduce((sum, time) => sum + time) / travelTimes.length
        return res
    }

}

