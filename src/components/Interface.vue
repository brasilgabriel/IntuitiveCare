<template>
    <section>  
        <div id="div_pesquisar">
            <p id="p_operadoras_ativas">Relação de Operadoras Ativas ANS</p>    
            <input v-if="mostrarInput" id="input_pesquisar" v-model="pesquisa" @keyup="buscarRelatorio(pesquisa)" type="text" placeholder="Pesquisar dados">
            <p v-else id="p_selecione">SELECIONE DADOS DESEJADOS</p>
        </div>   

        <Tabela 
            :relatorio="relatorio" 
            :selecionar="selecionar"
            :editar="botaoEditarDados"
            :excluir="botaoExcluir"

            @atualizar-dados="buscarRelatorio"
            @editar-dado="dados = $event; formulario = true"
        ></Tabela>

        <Botoes 
            @botao-editar-dados="botaoEditarDados = true; botaoCriar = false; botaoExcluir = false; mostrarInput = false; selecionar = true" 
            @botao-criar="botaoEditarDados = false; formulario = true; botaoCriar = true; botaoExcluir = false; mostrarInput = true; selecionar = false"             
            @botao-excluir="botaoEditarDados = false; formulario = false; botaoCriar = false; botaoExcluir = true; mostrarInput = false; selecionar = true"
            @botao-voltar="mostrarInput = true; formulario= false; botaoEditarDados = false; botaoExcluir = false; selecionar = false" 
        ></Botoes>

        <Formularios 
            v-show="formulario"
            :dados="dados"
            :botaoCriar="botaoCriar"

            @atualizar-dados="buscarRelatorio; formulario = false"
        ></Formularios>
    </section>    
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Tabela from './Tabela.vue';
import Botoes from "./Botoes.vue";
import Formularios from "./Formularios.vue";

@Options({
  components: {
    Tabela,
    Botoes,
    Formularios
  },
})

export default class Interface extends Vue {
    relatorio: any = {};
    pesquisa: string = '';
    mostrarInput: boolean = true;  
    selecionar: boolean = false;
    botaoEditarDados: boolean = false;
    botaoCriar: boolean = false;
    botaoExcluir: boolean = false;
    formulario: boolean = false;
    dados: any = {};

    async buscarRelatorio(pesquisa: string) {
        if (this.pesquisa.length > 0) {
            const req = await fetch(`http://localhost:3000/relatorio?q=${pesquisa}`);
            const data = await req.json();

            this.relatorio = data;
        } else {
            const req = await fetch("http://localhost:3000/relatorio");
            const data = await req.json();
        
            this.relatorio = data;
        }     
    }

    mounted() {
        this.buscarRelatorio(this.pesquisa);
    }
}
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        align-items: center;
        flex-direction: column;

        #div_pesquisar {          
            width: 1100px;
            margin-top: 50px;
            display: flex;
            justify-content: space-between;

            #p_operadoras_ativas {
                font-size: 20px;
                color: #08c988;    
            }

            input {
                width: 400px;
                height: 30px;
                font-size: 17px;
                text-align: center;
                outline: none;
                border: none;
                border-radius: 10px;
                background-color: #08c988;          
            }

            input::-webkit-input-placeholder {
                color: white;
            }

            #p_selecione {
                font-size: 22px;
                font-weight: 600;
                color: black;
            }
        }
    }
</style>