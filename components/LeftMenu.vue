<template lang="pug">
.menus
    .menus__item.menu(v-for="category in categories")
        img.menu__image(:src="category.image|getCategoryImagePath")
        nuxt-link.menu__text(:to="category.page") {{category.name}}
</template>

<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
import axios from "axios";

@Component
export default class extends Vue {
  public async mounted() {
    const categories = await axios.get(process.env.baseUrlAPI + "/category");
    this.$store.dispatch("categories/fetchCategories", categories.data);
  }
  // 一覧取得
  public get categories(): string {
    return this.$store.state.categories.list;
  }
}
</script>

<style lang="scss" scoped>
.menus {
  display: flex;
  flex-direction: column;
  &__item {
    margin-top: 12px;
  }
}
.menu {
  position: relative;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  &__text {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(black, 0.2);
    color: white;
    border-radius: inherit;
  }
}
</style>
