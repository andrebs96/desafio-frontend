<template>
    <input
        type="text"
        :placeholder="placeholder"
        :name="name"
        :id="id"
        v-model="input"
        class="input input-group__input"
    >
</template>

<script>
export default {
    name: 'Input', 
    props: {
        placeholder: String,
        name: {
            type: String,
            required: true
        },
        id: String
    },
    data() {
        return {
            input: '',
        }
    },
    watch: {
        input() {

            return this.$eventHub.$emit(this.name, this.input)

        }
    }
}
</script>

<style lang="scss">
@import '@/scss/base/breakpoints.scss';
@import '@/scss/base/tokens.scss';

.input {
  padding: $spacing-xxs;
  border: $border-width-thin $border-style-default $color-brand-1;
  border-radius: $border-radius-small;
  outline: 0;
  box-sizing: border-box;

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: $color-brand-1;
  }

  &:-ms-input-placeholder { /* IE 10+ */
    color: $color-brand-1;
  }
}
</style>