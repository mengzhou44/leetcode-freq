class TweetCounts {
    constructor() {
        this.tweetMap = new Map()
        this.chunkMap = new Map()
        this.chunkMap.set('minute', 60)
        this.chunkMap.set('hour', 3600)
        this.chunkMap.set('day', 86400)
    }

    recordTweet(tweetName, time) {
        if (!this.tweetMap.has(tweetName)) {
            this.tweetMap.set(tweetName, [time])
        } else {
            let times = this.tweetMap.get(tweetName)
            times.push(time)
            times = times.sort((a, b) => a - b)
        }
    }


    getTweetCountsPerFrequency(freq, tweetName, startTime, endTime) {

        if (tweetName === 'tweet3') {
            console.log(this.tweetMap)
        }
        if (!this.tweetMap.has(tweetName)) return []

        let times = this.tweetMap.get(tweetName)

        if (times.length === 0) return []

        let chunkSize = this.chunkMap.get(freq)
        let res = []
        let i = 0
        while (startTime <= endTime) {
            let count = 0
            while (times[i] < startTime) {
                i++
            }
            while (times[i] < Math.min(startTime + chunkSize, endTime + 1)) {
                count++
                i++
            }
            res.push(count)
            startTime += chunkSize
        }


        return res

    }



}
