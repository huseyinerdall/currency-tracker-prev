<template>
  <div class="home">
    <MainDoviz />
  </div>
</template>

<script>
// @ is an alias to /src
import MainDoviz from "@/components/MainDoviz.vue";

export default {
  name: "Home",
  components: {
    MainDoviz
  }
};
</script>
