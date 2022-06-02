<template>
    <div> <!-- quando os eventos de click forem acionados, emitiram um dado, que é usado com booleanos no componente Interface -->
        <button @click="$emit('botaoEditarDados')" v-show="botoes" type="button" class="btn botao_editar">Editar dados</button>
        <button @click="$emit('botaoCriar')" v-show="botoes" type="button" class="btn botao_criar">Criar nova operadora</button>
        <button @click="$emit('botaoExcluir')" v-show="botoes" type="button" class="btn btn-outline-danger">Excluir</button>
        <button @click="botoes = !botoes; $emit('botaoVoltar')" v-show="botoes" type="button" id="botao_principal" class="btn botoes_principais">Voltar</button>
        <button @click="botoes = !botoes" v-show="!botoes" type="button" id="botao_principal" class="btn botoes_principais">Editar</button> 
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Botoes extends Vue {
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
        width: 75%;
        height: 60px;
        margin-top: 20px;

        button {
            margin-left: 20px;
        }

        .mostrarBotoes{
            display: flex;
        }

        .esconderBotoes{
            display: none;
        }

        .botao_editar {
            border-color: #ff8c02;
            color: #ff8c02;
        }

        .botao_editar:hover {
            background-color: #ff8c02;
            color: white;
        }

        .botao_criar {
            border-color: #9851f1;
            color: #9851f1;
        }

        .botao_criar:hover {
            background-color: #9851f1;
            color: white;
        }

        .botoes_principais {
            border-color: #5262f1;
            color: #5262f1;          
        }

        .botoes_principais:hover {
            background-color: #5262f1;
            color: white;
        }

        #botao_principal {
            margin-left: 80px;
        }
    }
</style>