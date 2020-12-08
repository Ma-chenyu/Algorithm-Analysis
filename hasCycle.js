/*
 *  判断给定的链表中是否有环。如果有环则返回true，否则返回false。
 *  解题思路：
 *          利用快慢指针遍历数组，当快指针与慢指针值相同时，说明环存在
 */

 function hasCycle(head){
     let fast = head;       //快指针
     let slow = head;       //慢指针
     while(fast && slow && fast.next){
        //  慢指针指向一个节点
         slow = slow.next;
        //  快指针隔一个节点
         fast = fast.next,next;
        //  二者相遇时，环存在
         if(slow === fast){
             return true;
         }
     }
     return false;
 }

 hasCycle();