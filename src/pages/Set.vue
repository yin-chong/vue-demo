<template>
    <div>

    </div>
</template>

<script>
import {Set} from '@/config';
    export default {
        name: 'Set',
        created() {
            let setA = new Set()
            setA.add('aaa')
            setA.add('bbb')
            setA.add('ccc')
            setA.remove('ccc')
            console.log(setA);
            console.log(setA.size());
            console.log(setA.values());
            let setB = new Set()
            setB.add('aaa')
            setB.add('abc')
            setB.add('aba')
            console.log(setA.union(setB));
            console.log(setA.intersection(setB));
            console.log(setA.difference(setB));
            console.log(setA.subSet(setB));
            let setC = new Set()
            setC.add('aaa')
            console.log(setA.subSet(setC));
        }
    }
</script>

<style scoped>

</style>