<template>    
    <header :class="hasHeaderClasses">
        <div class="header__container--sm container">
            <div class="header__main">
                <h1 class="header__logo">
                    <slot name="logo"></slot>                
                </h1>

                <div class="header__icon-box" @click="showMenu">
                    <svg viewBox="0 0 24 24" :class="hasIconClasses">
                        <path :d="iconMenu"/>
                    </svg>
                </div>
            </div>

            <nav :class="isOpenMenu">
                <slot name="menu-list"></slot>
            </nav>
        </div>
    </header>
</template>

<script>
import { 
    mdiMenu,
    mdiCloseThick
} from '@mdi/js';

export default {
  name: 'Header',
  props: {
    headerClasses: String,
    iconClasses: String,
  },
  data() {
    return {
        iconMenu: mdiMenu,
        openMenu: false
    }
  },
  watch: {
      openMenu() {

        return this.openMenu ? this.iconMenu = mdiCloseThick : this.iconMenu = mdiMenu

      }
  },
  computed: {
    hasHeaderClasses() {

        return this.headerClasses ? `header ${this.headerClasses}` : `header`

    },
    hasIconClasses() {

        return this.iconClasses ? `header__icon ${this.iconClasses}` : `header__icon`

    },
    isOpenMenu() {

        return this.openMenu ? `header__menu header__menu--open` : `header__menu`

    }
  },
  methods: {
    showMenu() {
        
        return this.openMenu = !this.openMenu

    }      
  } 
}
</script>

<style lang="scss">
@import './index.scss';
</style>