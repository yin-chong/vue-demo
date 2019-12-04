<template>
    <div>
        {{ JSON.stringify(doneTodos) }}
        {{  JSON.stringify(todos)  }}
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'
    export default {
        name: 'Vuex',
        data () {
            return {

            }
        },
        created () {
            // console.log(this.$store.state.todos);
        },

        computed: {
            ...mapState([
                    'todos'
            ]),
            ...mapGetters([
                'doneTodos'
            ])
        }
    }
</script>

<style scoped>

</style>
