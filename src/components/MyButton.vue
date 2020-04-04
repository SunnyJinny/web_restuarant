<template>
    <div class="btn-wrap">
        <button>{{ btntitle }}
            </button>
    </div>
</template>

<script>
    export default {
        props: [ "btntitle" ],
        data: function () {
            return {
            }

        }
    };

</script>

<style scoped>
.btn-wrap {
    text-align: center;
}
</style>
