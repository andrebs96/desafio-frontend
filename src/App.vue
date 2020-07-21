<template>
  <div id="app">
    <Header
      headerClasses="bg-brand-2"
      iconClasses="fill-brand-1"
    >
      <template slot="logo">
        <router-link to="/">
          <img alt="Tembici logo" src="./assets/logo.png">
        </router-link>        
      </template>
      <template slot="menu-list">  
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/top-5-products">Top-5 Products</router-link>
          </li>
          <li>
            <router-link to="/your-cart">
              <div>
                Your Cart
                <span class="badge bg-brand-1 color-brand-2">0</span>
              </div>
            </router-link>
          </li>
        </ul>                      
      </template>
    </Header>
    <router-view class="container mt-xl pt-xs"/>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import '@/scss/main.scss';


</style>
