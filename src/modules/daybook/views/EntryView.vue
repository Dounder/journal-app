<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-4 fw-bold">24</span>
            <span class="mx-1 fs-3">Agosto</span>
            <span class="mx-2 fs-4 fw-light">2021, miercoles</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
        <textarea
            placeholder="Que hay de nuevo?"
        ></textarea>
    </div>

    <Fab icon="fa-save" />

    <img
        src="https://source.unsplash.com/random"
        alt="entry-picture"
        class="img-thumbnail"
    />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        Fab: defineAsyncComponent(() =>
            import(/* webpackChunkName: "daybook-fab" */ '../components/Fab')
        ),
    },
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0 5px 10px rgba(#000, 0.2);
}
</style>
