<template>
    <div>
        <button type="button" v-bind:class="[ botoes ? mostrarBotoes : esconderBotoes]" class="btn botoes_editar">Editar linhas</button>
        <button type="button" v-bind:class="[ botoes ? mostrarBotoes : esconderBotoes]" id="botao_ordenar" class="btn">Ordenar colunas</button>
        <button type="button" v-bind:class="[ botoes ? mostrarBotoes : esconderBotoes]" id="botao_criar" class="btn">Criar nova operadora</button>
        <button type="button" v-bind:class="[ botoes ? mostrarBotoes : esconderBotoes]" id="botao" class="btn btn-outline-danger">Excluir</button>
        <button @click="botoes = !botoes" v-bind:class="[ !botoes ? mostrarBotoes : esconderBotoes]" type="button" id="botao_principal" class="btn botoes_editar">Editar</button> 
        <button @click="botoes = !botoes" v-bind:class="[ botoes ? mostrarBotoes : esconderBotoes]" type="button" id="botao_principal" class="btn botoes_editar">Voltar</button>  <!-- dps de clicar, mudar para voltar    -->
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Opcoes extends Vue {
    botoes: boolean = false;
    mostrarBotoes: string = 'mostrarBotoes';
    esconderBotoes: string = 'esconderBotoes';
}
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 60px;

        button {
            margin-left: 20px;
        }

        .mostrarBotoes{
            display: flex;
        }

        .esconderBotoes{
            display: none;
        }

        #botao_ordenar {
            border-color: #ff8c02;
            color: #ff8c02;
        }

        #botao_ordenar:hover {
            background-color: #ff8c02;
            color: white;
        }

        #botao_criar {
            border-color: #9851f1;
            color: #9851f1;
        }

        #botao_criar:hover {
            background-color: #9851f1;
            color: white;
        }

        .botoes_editar {
            border-color: #5262f1;
            color: #5262f1;          
        }

        .botoes_editar:hover {
            background-color: #5262f1;
            color: white;
        }

        #botao_principal {
            margin-left: 80px;
        }
    }
</style>