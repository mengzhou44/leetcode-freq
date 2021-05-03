var addTwoNumbers = function(l1, l2) {
    if (l1 === null)  return l2
    if (l2 === null ) return l1

    let dummy = new ListNode(-1)
    let prev = dummy
    let carry = 0
    while(l1!==null || l2!== null) {
         let sum = carry
          if (l1!== null)  {
               sum += l1.val
              l1 = l1.next
          }

         if (l2!== null) {
              sum += l2.val
             l2 = l2.next
         }

         if (sum >=10) {
              sum = sum -10
             carry =1
         } else {
             carry = 0
         }

         let node = new ListNode(sum)
         prev.next = node
         prev = node
    }

   if (carry === 1)  {
        prev.next = new ListNode(carry)
   }

    return  dummy.next

};