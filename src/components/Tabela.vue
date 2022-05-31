<template>
    <div>
        <table class="table table-success table-striped table-sm">
            <thead id="thead">
                <tr>
                    <th>#</th>
                    <th>Registro ANS</th>
                    <th>CNPJ</th>
                    <th>Razão Social</th>
                    <th>Nome Fantasia</th>
                    <th>Modalidade</th>
                    <th>Logradouro</th>
                    <th>Número</th>
                    <th>Complemento</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>UF</th>
                    <th>CEP</th>
                    <th>DDD</th>
                    <th>Telefone</th>
                    <th>Fax</th>
                    <th>Endereço eletrônico</th>
                    <th>Representante</th>
                    <th>Cargo Representante</th>
                    <th>Data Registro ANS</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(dados, index) in relatorio" v-bind:key="index">
                    <td><b>{{ index + 1 }}</b></td>
                    <td>{{ dados.registroANS }}</td>
                    <td>{{ dados.cnpj }}</td>
                    <td>{{ dados.razaoSocial }}</td>
                    <td>{{ dados.nomeFantasia }}</td>
                    <td>{{ dados.modalidade }}</td>
                    <td>{{ dados.logradouro }}</td>
                    <td>{{ dados.numero }}</td>
                    <td>{{ dados.complemento }}</td>
                    <td>{{ dados.bairro }}</td>
                    <td>{{ dados.cidade }}</td>
                    <td>{{ dados.uf }}</td>
                    <td>{{ dados.cep }}</td>
                    <td>{{ dados.ddd }}</td>
                    <td>{{ dados.telefone }}</td>
                    <td>{{ dados.fax }}</td>
                    <td>{{ dados.enderecoEletronico }}</td>
                    <td>{{ dados.representante }}</td>
                    <td>{{ dados.cargoRepresentante }}</td>
                    <td>{{ dados.dataRegistroANS }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";


export default class Tabela extends Vue {
    @Prop() relatorio!: any;
}
</script>

<style lang="scss" scoped>
    div {
        overflow-x: scroll;
        overflow-y: scroll;
        width: 80vw;
        height: 60vh;

        table {
            text-align: center;

            #thead{ 
                background-color: black;
                color: white;
            }
        }
    }
</style>