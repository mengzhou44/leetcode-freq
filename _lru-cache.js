/**
 * @param {number} capacity
 */

class LinkedNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LRUCache {

    constructor(capacity) {
        this.capacity = capacity
        this.list = new LinkedNode(-1)
        this.map = new Map()
    }

    get(key) {

        if (!this.map.has(key)) return -1

        this.removeNodeFromList(key)
        this.addNodeToHead(key)

        return this.map.get(key)
    }

    put(key, value) {

        this.map.set(key, value)

        let success = this.removeNodeFromList(key)
        this.addNodeToHead(key)
        if (success === false && this.map.size > this.capacity) {
            let removed = this.removeLastNode()
            this.map.delete(removed.val)
        }
    }

    addNodeToHead(key) {
        let head = new ListNode(key)
        let temp = this.list.next
        this.list.next = head
        head.next = temp

    }

    removeLastNode() {
        let cur = this.list.next
        let prev = this.list
        while (cur.next != null) {
            prev = cur
            cur = cur.next
        }
        prev.next = null
        return cur
    }

    removeNodeFromList(key) {
        let cur = this.list.next
        let prev = this.list
        while (cur !== null) {
            if (cur.val !== key) {
                prev = cur
                cur = cur.next
            } else {
                prev.next = cur.next
                return true
            }
        }

        return false
    }
}



class LRUCache {

    constructor(capacity) {
        this.capacity = capacity
        this.queue = []
        this.map = new Map()
    }

    get(key) {
        if (!this.map.has(key)) return -1
        this.queue = this.queue.filter(k => k !== key)
        this.queue.push(key)
        return this.map.get(key)
    }

    put(key, value) {
        this.map.set(key, value)
        this.queue = this.queue.filter(k => k !== key)
        this.queue.push(key)

        if (this.queue.length > this.capacity) {
            let removed = this.queue.shift()
            this.map.delete(removed)
        }
    }
}
