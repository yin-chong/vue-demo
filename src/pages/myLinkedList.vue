<template>
    <div>

    </div>
</template>

<script>
import { LinkedList, DoublyLinkedList } from "@/config"
    export default {
        name: 'myLinkedList',
        created () {
            let linkList = new LinkedList()
            linkList.append('abc')
            linkList.append('caa')
            linkList.append(30)
            // linkList.removeAt(1)
            // console.log(linkList);
            // linkList.append(25)
            // console.log(linkList);
            // linkList.insert(2, 100)
            // console.log(linkList);
            // console.log( linkList.toString() );
            // console.log(linkList.get(4));
            // console.log(linkList.indexOf(30));
            // linkList.update(2, 150)
            // console.log(linkList);

            this.dLinkedList()
        },
        methods: {
            dLinkedList() {
                let doublyLinkedList = new DoublyLinkedList()
                console.log(doublyLinkedList.getTail());
                doublyLinkedList.append(1)
                doublyLinkedList.append(23)
                doublyLinkedList.insert(0, 'iiii')
                doublyLinkedList.insert(3, 'ccccc')
                // alert( doublyLinkedList.removeAt(0))
                // alert( doublyLinkedList.removeAt(1))
                // alert( doublyLinkedList.removeAt(1))
                doublyLinkedList.remove(1)
                console.log(doublyLinkedList.backwardString());
                // console.log(doublyLinkedList.get(2));
                // console.log(doublyLinkedList.get(3));
                // doublyLinkedList.update(1, 999)
                // console.log(doublyLinkedList.backwardString());
            }
        }
    }
</script>

<style scoped>

</style>