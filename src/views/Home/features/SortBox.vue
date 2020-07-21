<template>
    <div class="sort-box">
        <InputGroup 
            placeholder="Search..."
            :name="name"
            id="search"
            textBtn="Search"
            :onClick="searchTerm"
        />
        <ButtonGroup>
            <template slot="btn">
                <button
                    type="button"
                    class="btn"
                    @click="chosenDisplay('Grid')"
                >
                    Grid
                </button>
                <button
                    type="button"
                    class="btn"
                    @click="chosenDisplay('List')"
                >
                    List
                </button>
            </template>
        </ButtonGroup>
    </div>
</template>

<script>
import InputGroup from '@/components/InputGroup/index.vue'
import ButtonGroup from '@/components/ButtonGroup/index.vue'
import { mapActions } from 'vuex'

export default {
    name: 'SortBox',
    components: {
        InputGroup,
        ButtonGroup
    },
    created() {
        
        const vm = this

        vm.$eventHub.$on(vm.name, data => vm.term = data)

    },
    data() {
        return {
            name: 'search',
            term: '',
        }
    },
    methods: {
        ...mapActions([
            'surveyedProducts',
        ]),
        searchTerm() {

            return this.surveyedProducts(this.term)

        },
        chosenDisplay(display) {

            return this.$eventHub.$emit('chosenDisplay', display)

        }
    }
}
</script>

<style lang="scss">
@import '@/scss/base/breakpoints.scss';
@import '@/scss/base/tokens.scss';

.sort-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@include breakpoint( 576px ) {
  .sort-box {
    justify-content: space-between;
  }
}
</style>
