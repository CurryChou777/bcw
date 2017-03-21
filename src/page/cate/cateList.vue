<template>
    <div>
        <p>bbb</p>
        <p>{{key}}</p>
        <p>{{$route.query.searchKey}}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                key:this.$route.query.searchKey
            }
        },
        created () {
        },
        updated () {
        },
        mounted () {

        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
