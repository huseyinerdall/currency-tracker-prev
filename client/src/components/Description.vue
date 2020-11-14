<template>
  <v-card>
    <v-card-title v-if="$route.params.coin">{{$route.params.coin}} Hakkında</v-card-title>
    <v-card-title v-else-if="$route.params.gold">{{$route.params.gold}} Hakkında</v-card-title>
    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dicta distinctio dolorem esse nisi quasi suscipit! Cupiditate ipsam, similique. Aspernatur culpa debitis eveniet facere fugit, hic impedit neque porro velit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur debitis dolore dolores dolorum eius labore laudantium minus neque nihil quo quod reiciendis, saepe. Aut iure laboriosam magnam sapiente vel?
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Description",
  data: () => ({
  }),
};
</script>