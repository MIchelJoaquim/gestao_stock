<template>
  <v-card class="pa-4">
    <v-card-title>
      <span class="headline">Histórico - {{ produto.descricao }}</span>
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search">
        <template v-slot:item.movimento="{item}">
            <v-chip color="success" v-if="item.movimento">
                Entrada
            </v-chip>
            <v-chip color="error" v-if="!item.movimento">
                Saída
            </v-chip>
        </template>

        <template v-slot:item.preco={item}>
            <span >{{ item.preco }} AOA</span>
        </template>
        <template v-slot:item.total={item}>
            <span >{{ (item.preco * item.qtd) }} AOA</span>
        </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: ["produto", "desserts"],
  data() {
    return {
      search: null,
      headers: [
        { text: "#", value: "id" },
        { text: "Qtd", value: "qtd" },
        { text: "Data", value: "created" },
        { text: "Movimento", value: "movimento" },
        { text: "Preço", value: "preco" },
        { text: "Total", value: "total" },
      ],
    };
  },
  mounted() {
  },
  methods: {
    
  },
};
</script>

<style></style>
