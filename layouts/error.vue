<template lang="pug">
.error-contents
    h1.title エラーが発生しました。
    .description このページは存在しません。
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  public static layout = "error_layout";
}
</script>

<style scoped lang="sass">
.error-contents
    margin: 100px 200px
    & > .title
        font-size: 24px
        font-weight: bold
</style>
