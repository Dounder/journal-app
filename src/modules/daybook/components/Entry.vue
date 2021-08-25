<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">25</span>
            <span class="mx-1 fs-5">Agosto</span>
            <span class="mx-2 fw-light">2021, miercoles</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quia
            tempora nam animi iste consequatur deserunt neque voluptatum vero
            tenetur? Natus architecto corrupti debitis explicabo expedita magni
            neque atque at!
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: all 0.2s ease-in;
    &:hover {
        background-color: lighten(grey, 45);
        transition: all 0.2s ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>
