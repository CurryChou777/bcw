<template>
    <div>
        <p @click="goList('百草味')">搜索：百草味</p>
        <router-link :to="{ path: 'cateList', query: { searchKey: 123 }}">搜索：百草味</router-link>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        created () {
        },
        updated () {
        },
        mounted () {

        },
        methods: {
            goList (key) {
                this.$router.push({ path: 'cateList', query: { searchKey: key }})
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
