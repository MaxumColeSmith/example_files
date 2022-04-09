class SLLNode {
    public val: number;
    public next: SLLNode;
    constructor(val: number) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {
    public head: SLLNode;
    public tail: SLLNode;
    public length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: number) {
        const newNode: SLLNode = new SLLNode(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length = this.length + 1;
        return this
    }
}

var singlyLinkedList = new SinglyLinkedList();

console.log({
    test1: singlyLinkedList.push(5), // singlyLinkedList,
    test2: singlyLinkedList.length, // 1
    test3: singlyLinkedList.head.val, // 5
    test4: singlyLinkedList.tail.val, // 5
    test5: singlyLinkedList.push(10), // singlyLinkedList
    test6: singlyLinkedList.length, // 2
    test7: singlyLinkedList.head.val, // 5
    test8: singlyLinkedList.head.next.val, // 10
    test9: singlyLinkedList.tail.val, // 10
    test10: singlyLinkedList.push(15), // singlyLinkedList
    test11: singlyLinkedList.length, // 3
    test12: singlyLinkedList.head.val, // 5
    test13: singlyLinkedList.head.next.val, // 10
    test14: singlyLinkedList.head.next.next.val, // 15
    test15: singlyLinkedList.tail.val, // 15
})