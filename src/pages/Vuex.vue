<template>
    <div>
        {{ JSON.stringify(doneTodos) }}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
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
            ...mapGetters([
                'doneTodos'
            ])
        }
    }
</script>

<style scoped>

</style>
