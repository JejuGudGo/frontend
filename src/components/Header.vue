<template>
  <div class="header">
    <button v-if="backRoute" class="icon-button" @click="navigate(backRoute)">
      <img src="../assets/icons/arrow-48.svg" alt="back" />
    </button>
    <h1 class="title">{{ title }}</h1>
    <button v-if="closeRoute" class="icon-button" @click="navigate(closeRoute)">
      <img src="../assets/icons/delete-48.svg" alt="close" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    backRoute: {
      type: String,
      default: null
    },
    closeRoute: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const router = useRouter();

    const navigate = (route: string) => {
      if (route) {
        router.push(route);
      }
    };

    return {
      navigate
    };
  }
});
</script>

<style lang="scss">
@import "../assets/colors/color-global";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $background;
  padding: 10px;
  color: white;
  height: 50px;
  position: relative;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.title {
  font-size: 16px;
  color: $neutral-white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
