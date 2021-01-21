<template>
  <div>
    <v-row justify="center" class="pt-4">
      <v-col xs="10" sm="8" md="6">
        <v-card class="px-4 py-4 pb-4" style="text-align: center;">
          <h1>Cadastrar Produto</h1>
          <v-row class="pt-4">
            <v-col xs="12" sm="12">
              <v-text-field
                label="Descrição"
                outlined
                dense
                v-model="produto.descricao"
              ></v-text-field>
            </v-col>
            <v-col xs="12" sm="12">
              <v-text-field
                label="Unidade"
                outlined
                dense
                v-model="produto.unidade"
              ></v-text-field>
            </v-col>
            <v-col xs="12" sm="12">
              <v-text-field
                label="Qtd Mínima"
                outlined
                dense
                v-model="produto.qtd_min"
              ></v-text-field>
            </v-col>
            <v-col xs="12" sm="12">
              <v-text-field
                label="Qtd Máxima"
                outlined
                dense
                v-model="produto.qtd_max"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="produto.categoria"
                :items="categorias"
                item-text="name"
                item-value="id"
                label="Categoria"
                return-object
                single-line
                outlined
                dense
              ></v-select>
            </v-col>
            <v-col xs="12" sm="12" md="6">
              <v-text-field
                label="Preço de compra"
                outlined
                dense
                v-model="produto.preco_compra"
              ></v-text-field>
            </v-col>
            <v-col xs="12" sm="12" md="6">
              <v-text-field
                label="Preço de venda"
                outlined
                dense
                v-model="produto.preco_venda"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn color="primary" @click="create()">Salvar</v-btn>
            </v-col>
            <v-col>
              <v-btn color="error" @click="clear()">Limpar</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as ServiceProduto from "./service.js";
import * as ServiceCategoria from "../Categoria/Service.js";
// import { Produto } from './produto.js';
export default {
  data() {
    return {
      produto: {
        descricao: "",
        unidade: "",
        preco_venda: null,
        preco_compra: null,
        categoria: {},
        qtd_min: null,
        qtd_max: null
      },
      categorias: [],
    };
  },
  methods: {
    getCategorias() {
      ServiceCategoria.readAll().then((res) => {
        this.categorias = res.data;
      });
    },
    create() {
      ServiceProduto.create(this.produto).then((res) => {
        console.log(res);
        this.clear()
      });
    },
    clear() {
      this.produto = {};
    },
  },
  mounted() {
    this.getCategorias();
  },
};
</script>

<style></style>
