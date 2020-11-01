<template>
  <span ref="root" class="icon"></span>
</template>

<script>
import octicons from "@primer/octicons";
export default {
  props: {
    icon: {
      type: String,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  mounted() {
    const iconElement = this.$refs.root;

    const svgHTML = octicons[this.icon].toSVG({
      width: this.size,
      class: "icon-svg",
    });

    iconElement.innerHTML = svgHTML;
  },
};
</script>

<style></style>
