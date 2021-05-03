/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (meetings) {
    if (meetings.length < 2) return meetings.length

    meetings = meetings.sort((a, b) => a[0] - b[0])

    let rooms = [meetings[0][1]]
    for (let i = 1; i < meetings.length; i++) {
        let useExistingRoom = false

        for (let j = 0; j < rooms.length; j++) {

            if (rooms[j] <= meetings[i][0]) {
                rooms[j] = meetings[i][1]
                useExistingRoom = true
                break
            }
        }

        if (useExistingRoom === false) {
            rooms.push(meetings[i][1])
        }
        rooms = rooms.sort((a, b) => a - b)

    }
    return rooms.length
};