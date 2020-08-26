<template>
  <div
    class="el-form-item"
    :class="[{
      'el-form-item--feedback':elForm && elForm.statusIcon
  }]"
  ></div>
</template>

<script>
export default {
  name: "ElFormItem",
  date() {
    return {};
  },
  inject: ["elForm"],
  props: {},
  computed: {},
  created() {}
};
</script>

<style lang="scss" scoped>
</style>