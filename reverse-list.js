var reverseList = function (head) {
    if (head == null) return head

    let cur = head
    let prev = null
    while (cur !== null) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    return prev
}