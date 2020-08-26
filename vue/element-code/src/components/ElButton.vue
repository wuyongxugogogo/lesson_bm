<template>
  <button
    @click="handleClick"
    class="el-button"
    :disabled="loading"
    :type="nativeType"
    :autofocus="autofocus"
    :class="[
        type?'el-button--'+type:'',
        buttonSize?'el-button--'+size:'',
        {
            'is-round': round,
            'is-circle': circle,
            'is-loading': loading,
            'is-disabled': buttonDisabled,
            'is-plain': plain,
        }
        ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon"></i>
    <!-- {{type}} - {{tit}} -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'ElButton',
  data() {
    return {
      tit: "hello"
    };
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
    // 按钮大小
    buttonSize() {
      return this.size;
    }
  },
  props: {
    size: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "default"
    },
    round: Boolean,
    circle: Boolean,
    autofocus: Boolean,
    icon: {
      type: String,
      default: ""
    },
    loading: Boolean,
    plain: Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style>
</style>
