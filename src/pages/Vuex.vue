<template>
  <div>
    {{ JSON.stringify(doneTodos) }}
    {{ JSON.stringify(todos) }}
    {{ JSON.stringify(getTodosById(1)) }}
    {{  num  }}
    {{ getNum }}

    <button @click="test1">测试</button>
  </div>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'

  export default {
    name: 'Vuex',
    data () {
      return {
        num1: 0
      }
    },
    created () {
      // console.log(this.$store.state.todos);
    },
    mounted(){
     console.log(this.todos, this.num);
    },
    methods: {
      test1 () {
        this.addNum(++this.num1)
      },

      ...mapActions([
        'addNum'
      ])
    },

    computed: {
      test () {
        return this.$store.state.todos
      },
      ...mapState([
        'todos',
        'num'
      ]),
      ...mapGetters([
        'doneTodos',
        'getNum',
        'getTodosById'
      ])
    }
  }
</script>

<style scoped>

</style>
