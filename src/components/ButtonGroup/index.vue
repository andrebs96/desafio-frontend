<template>
    <div class="btn-group mt-md">
        <slot name="btn"></slot>
    </div>
</template>

<script>
export default {
    name: 'ButtonGroup'
}
</script>

<style lang="scss">
@import '@/scss/base/tokens.scss';

.btn-group {
  display: inline-block;

  .btn {
    padding: $spacing-xxs;

    &:hover {
      opacity: 0.75;
    }

    &:first-child {
      border-radius: $border-radius-small $border-radius-none $border-radius-none $border-radius-small;
    }

    &:last-child {
      border-radius: $border-radius-none $border-radius-small $border-radius-small $border-radius-none;
    }
  }
}
</style>
