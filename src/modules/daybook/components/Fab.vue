<template>
    <button class="btn btn-primary" @click="$emit('on:click')">
        <i class="fa fa-2x" :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus',
        },
    },
}
</script>

<style lang="scss" scoped>
button {
    width: 80px;
    height: 80px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 100%;
}
</style>
