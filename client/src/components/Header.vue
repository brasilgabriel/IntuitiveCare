<template>
    <header>
        <div>
            <img id="logo_intuitivecare" src="https://static.wixstatic.com/media/b91e09_95ec298e6ed645d197af640983985c6c~mv2.png/v1/fill/w_234,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_ic_v5_20210604_a4_logo_hQ.png" alt="Logo IntuitiveCare">
        </div> 
    </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {

}
</script>

<style lang="scss" scoped>
    header {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>