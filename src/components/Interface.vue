<template>
    <section>  
        <div v-if="mensagens" class="div_pesquisar">
            <p class="p_operadoras_ativas">Relação de Operadoras Ativas ANS</p>    
            <p v-show="operadoraCriada" class="p_mensagens">OPERADORA CRIADA!</p>
            <p v-show="operadoraEditada" class="p_mensagens">ALTERAÇÕES REALIZADAS!</p>
            <p v-show="operadoraDeletada" class="p_mensagens" id="p_deletada">OPERADORA EXCLUÍDA!</p>
        </div>

        <div v-else class="div_pesquisar">
            <p class="p_operadoras_ativas">Relação de Operadoras Ativas ANS</p>    
            <input v-if="mostrarInput" id="input_pesquisar" v-model="pesquisa" @keyup="buscarRelatorio(pesquisa)" type="text" placeholder="Pesquisar dados">
            <p v-else id="p_selecionar_dados">SELECIONE DADOS DESEJADOS</p>
        </div>   

        <Tabela 
            :relatorio="relatorio" 
            :selecionar="selecionar"
            :editar="botaoEditarDados"
            :excluir="botaoExcluir"

            @atualizar-dados="buscarRelatorio"
            @operadora-deletada="operadoraDeletada = true; mostrarMensagem()"
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
            @operadora-criada="operadoraCriada = true; mostrarMensagem()"
            @operadora-editada="operadoraEditada = true; mostrarMensagem()"
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
    operadoraCriada: boolean = false;
    operadoraEditada: boolean = false;
    operadoraDeletada: boolean = false;
    mensagens: boolean = false;

    mostrarMensagem() {
        this.mensagens = true;

        setTimeout(() => {
            this.mensagens = false;
            this.operadoraCriada = false;
            this.operadoraEditada = false; 
            this.operadoraDeletada = false;
        }, 2000)
    }

    // buscará os dados da API, emulada com JSON server
    async buscarRelatorio(pesquisa: string) { 
        if (this.pesquisa.length > 0) { // aqui define se a pessoa está pesquisando ou não, se estiver pesquisando, o link para a requisição mudará
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

        .div_pesquisar {          
            width: 1100px;
            margin-top: 50px;
            display: flex;
            justify-content: space-between;

            .p_operadoras_ativas {
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

            .p_mensagens {
                font-size: 22px;
                font-weight: 600;
                color: #08c988;
            }

            #p_deletada {
                color: #ff0019;
            }

            #p_selecionar_dados {
                font-size: 22px;
                font-weight: 600;
                color: black;
            }
        }
    }

    @media screen and (max-width: 1400px) {
        section .div_pesquisar {
            width: 900px;
        }
    }

    @media screen and (max-width: 1200px) {
        section .div_pesquisar {
            width: 800px;

            .p_operadoras_ativas {
                font-size: 18px;
            }

            .p_mensagens {
                font-size: 20px;
            }

            input {
                width: 300px;     
            }
        }
    }

    @media screen and (max-width: 900px) {
        section .div_pesquisar {
            width: 650px;
        }
    }
</style>