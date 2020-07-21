<template>
    <div class="input-group mt-md">
        <Input
            :placeholder="placeholder"
            :name="name"
            :id="id"
        />
        <div 
            class="input-group__btn"
            @click="onClick"    
        >
            {{ textBtn }}
        </div>
    </div>
</template>

<script>
import Input from '../Input'

export default {
    name: 'InputGroup',
    components: {
        Input
    },
    mounted() {
        
        const vm = this

        document.querySelector(`#${vm.id}`).addEventListener("keydown", (e) => {

            if(e.keyCode === 13) {
                
                return this.$el.lastElementChild.click()

            }

        })

    },
    props: {
        placeholder: String,
        name: {
            type: String,
            required: true
        },
        id: String,
        textBtn: {
            type: String,
            required: true
        },
        onClick: {
            required: false
        }
    },
}
</script>

<style lang="scss">
@import '@/scss/base/breakpoints.scss';
@import '@/scss/base/tokens.scss';

.input-group {
  display: flex;
  align-items: center;

  &__input {
    border-top-right-radius: $border-width-none !important;
    border-bottom-right-radius: $border-width-none !important;
  }

  &__btn {
    background: $color-brand-1;
    border: $border-width-thin $border-style-default $color-brand-1;
    padding: $spacing-xxs $spacing-xs;
    border-top-right-radius: $spacing-xxxs;
    border-bottom-right-radius: $spacing-xxxs;
    border-top-left-radius: $border-width-none;
    border-bottom-left-radius: $border-width-none;
    font-weight: $font-weight-bold;
    color: $color-brand-2;
    cursor: pointer;
  }

}
</style>
