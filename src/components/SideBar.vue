<template>
  <nav class="menu">
    <input
      checked="checked"
      class="menu-toggler"
      id="menu-toggler"
      type="checkbox"
    />
    <label for="menu-toggler"></label>
    <ul>
      <li class="menu-item">
        <router-link :to="{ name: 'Home' }" class="menu-link">
          <Icon :size="28" icon="home"></Icon>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'Manager' }" class="menu-link">
          <Icon :size="28" icon="server"></Icon>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'About' }" class="menu-link">
          <Icon :size="28" icon="info"></Icon>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'About' }" class="menu-link">
          <Icon :size="28" icon="sun"></Icon>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
$toggler-size: 40px*0.8;
$toggler-color: white;
$toggler-transition: transform 0.5s, top 0.5s;

$item-count: 6;
$item-size: $toggler-size * 2;
$item-color: white;
$item-transition: 0.4s;

@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}

@mixin absolute-center {
  position: absolute;
  display: block;
  top: 88vh;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}

@mixin line {
  @include size($toggler-size, $toggler-size/8);
  display: block;
  z-index: 1;
  border-radius: $toggler-size/16;
  background: rgba($toggler-color, 0.7);
  transition: $toggler-transition;
}

.menu {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to top,
    #3b41c5 0%,
    #a981bb 48%,
    #ffc8a9 100%
  );
}

.menu-toggler {
  @include absolute-center;
  @include size($toggler-size);
  z-index: 2;
  opacity: 0;
  cursor: pointer;
  &:hover + label,
  &:hover + label:before,
  &:hover + label:after {
    background: $toggler-color;
  }
}

.menu-toggler:checked {
  & + label {
    background: transparent;
  }

  & + label:before,
  & + label:after {
    top: 0;
    width: $toggler-size;
    transform-origin: 50% 50%;
  }

  & + label:before {
    transform: rotate(45deg);
  }

  & + label:after {
    transform: rotate(-45deg);
  }
}

.menu-toggler:checked ~ ul {
  .menu-item {
    opacity: 1;
  }

  @for $i from 0 through $item-count - 1 {
    .menu-item:nth-child(#{$i + 1}) {
      transform: rotate(360deg / $item-count * $i)
        translateX(-$item-size - 30px);
    }
  }
}

.menu-toggler + label {
  @include line;
  @include absolute-center;
  &:before,
  &:after {
    @include line;
    content: "";
    position: absolute;
    left: 0;
  }

  &:before {
    top: $toggler-size/4;
  }

  &:after {
    top: -$toggler-size/4;
  }
}

@for $i from 0 through $item-count - 1 {
  .menu-item:nth-child(#{$i + 1}) {
    .menu-link {
      transform: rotate(-360deg / $item-count * $i);
    }
  }
}

.menu-item {
  @include absolute-center;
  @include size($item-size);
  display: block;
  opacity: 0;
  transition: $item-transition;
}

.menu-item .menu-link {
  display: block;
  width: inherit;
  height: inherit;
  line-height: $item-size;
  background: rgba(#fff, 0.2);
  border-radius: 999px;
  .icon-svg {
    fill: rgba(#fff, 0.5);
    transition: $item-transition;
  }
  text-align: center;
  font-size: $item-size/1.6;
  transition: $item-transition;
  &:hover {
    box-shadow: 0 0 0 $item-size/40 rgba(#fff, 0.5);
    background: rgba(#fff, 0.5);
    font-size: $item-size/1.6;
    .icon-svg {
      fill: rgba(#fff, 1);
    }
  }
}
</style>
