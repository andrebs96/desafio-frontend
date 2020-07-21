<template>
  <div class="home">
    <SortBox />
    <div :class="display" v-if="products">
      <div
        class="product-item" 
        v-for="(product, index) in products"
        :key="index"
        @click="addCart(product)"
      >
        <img :src="product.image" :alt="`Produto - ${product.name}`" class="product-item__img">
        <div class="product-item__info">
          <h2 class="product-item__name">{{ product.name }}</h2>        
          <div class="product-item__content">
            <div>
              <div class="bold mb-xxxs">R$ {{ product.unitPrice.toFixed(2) }}</div>
              <div class="small">{{ product.unitsInStock }} em estoque</div>
            </div> 
            <div class="d-flex align-center justify-space-between mb-xxxs">            
              <svg viewBox="0 0 24 24" class="product-item__cta bold bg-brand-1 fill-brand-2">
                <path :d="ctaIcon"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center my-xl" v-else>
      carregando...
    </div>
  </div>
</template>

<script>
import SortBox from './features/SortBox'
import { mdiPlusThick } from '@mdi/js';
import {
  mapState,
  mapActions 
} from 'vuex'

export default {
  name: 'Home',
  components: {
    SortBox
  },
  created() {
        
    const vm = this

    vm.$eventHub.$on('chosenDisplay', data => vm.chosenDisplay = data)

  },
  mounted() {

    this.getProducts()

    window.addEventListener('scroll', () => {

      const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

      if(bottomOfWindow) {

        this.getMoreProductsOnTheScreen()

      }

    })

  },
  data() {
    return {
      chosenDisplay: 'Grid',
      ctaIcon: mdiPlusThick,
    }
  },
  computed: {
    ...mapState({
      allProducts: 'allProducts',
      products: 'products',
    }),
    display() {

      const cssClass = {
        'Grid': () => 'products-grid',
        'List': () => 'products-list',
        'default': () => 'products-grid',
      }

      return (cssClass[this.chosenDisplay] || cssClass['default'])()

    }
  },
  methods: {
      ...mapActions([
        'getProducts',
        'getMoreProductsOnTheScreen',
        'addCart'
      ]),
  }
}
</script>

<style lang="scss">
@import '@/scss/base/breakpoints.scss';
@import '@/scss/base/tokens.scss';
@import '@/scss/components/button.scss';

.products-grid, .products-list {
  margin: 32px 0;
}

.product-item {
  padding: 8px;
  border: 1px solid $color-brand-3;
  border-radius: 4px;
  margin-bottom: 32px;
  cursor: pointer;

  &__img {
    width: 100%;
    height: auto;
    max-height: 180px;
    border-radius: 4px; 
    object-fit: fill;
  }

  &__name {
    width: 100%;
    margin: 8px 0;
    font-weight: bold;
    color: #E6007E;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $color-brand-3;
  }

  &__cta {
    width: 20px;
    height: 20px;
    padding: 8px;
    border-radius: 50%;
  }
}

@include breakpoint( 576px ) {
  .products-grid {    
    display: grid;
    grid-column-gap: 48px;
    grid-template-columns: auto auto;
  }

  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    .product-item {
      display: inline-flex;
      width: 100%;
      max-width: 600px;
    }

    .product-item__img {
      margin-right: 12px;
    }

    .product-item__img, .product-item__info {
      flex: 0 50%;
    }

    .product-item__name {
      white-space: inherit;
    }
  }
}

@include breakpoint( 992px ) {
  .products-grid {
    grid-column-gap: 5%;
    grid-template-columns: 30% 30% 30%;
  }
}
</style>
