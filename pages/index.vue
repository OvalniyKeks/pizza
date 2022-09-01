<template>
  <div class="main">

    <div class="container">
      <Carousel
        class="m-mb-lg m-mb-md-m"
        :slides-per-page='8'
        :slides-per-page-mobile='3'
        center
      >
        <Category
          v-for="(cat, i) of categories"
          :key="`category-main-page-${i}`"
          :category='cat'
        />
      </Carousel>
    </div>

    <div class="container">
      <Carousel
        class="m-mb-lg"
        :slides-per-page='4'
        :slides-per-page-mobile='1'
      >
        <Sale
          v-for="(sale, i) of sales"
          :key="`sale-main-page-${i}`"
          :sale='sale'
        />
      </Carousel>
    </div>

    <div class="container">
      <CheckAddress id="check-address" />
    </div>

    <div class="container">
      <Section
        v-for="(category, i) of categories"
        :key="`main-categories-section-${i}`"
        :id="category._id"
        class="m-mt-lg"
      >
        <SectionTitle class="m-mb-lg">{{category.label}}</SectionTitle>

        <SectionProducts>
          <ProductCard
            v-for="(product, i) of category.products"
            :key="`main-product-section-${i}`"
            :product='product'
            @click="showModalProduct(product)"
          />
        </SectionProducts>

      </Section>
    </div>

    <div class="container">
      <Section
        style="max-width: 850px; margin: auto"
        class="m-mt-lg"
      >
        <SectionTitle
          class="m-mb-lg"
          style="font-size: 32px"
        >
          Доставка пиццы в Москве
        </SectionTitle>

        <TextMore height='308px'>
          <p>Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.</p>
          <p><strong>Как сделать заказ</strong> <br> Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!</p>
        </TextMore>
      </Section>
    </div>

    <CartMobileButton class="desktop-hide" />

    <Modal
      v-model="isModalProduct"
      align='center'
    >
      <ProductModal
        v-model="isModalProduct"
        :product='isModalProductData'
      />
    </Modal>

  </div>
</template>

<script>
// import example_compound from '../assets/images/example_compound.svg'
import placeholderIcon from '../assets/images/icon/global/el_placeholder.svg'
export default {
  name: 'Main',

  async asyncData ({ $axios, error, store }) {
    try {
      const categories = await $axios.$get(`/products/`);
      const sales = await $axios.$get(`/sale/`);

      categories.map(cat => {
        cat.products.map(product => {
          product.compound = product.compound.map(el => {
            if (!el.icon) {
              el.icon = placeholderIcon
            }
            return { ...el, disable: false }
          })
          product.modificators = product.modificators.map(el => {
            if (!el.icon) {
              el.icon = placeholderIcon
            }
            return { ...el, disable: true }
          })
          return product
        })
        return cat
      })

      store.commit('products/set_products', categories)
      return { categories, sales };
    } catch (e) {
      error(e);
    }
  },

  // Удалить потом
  // async asyncData ({ store }) {
  //   const images = [
  //     'https://oran-g.ru/images/com_hikashop/upload/thumbnails/500x500f/apiProducts/b4103df5-e0ef-4071-a5cb-8a32fcd2c694.jpg',
  //     'https://freepngimg.com/thumb/pizza/46-pizza-png-image.png',
  //     'https://epizza.su/images/pizza/two-pizza.png'
  //   ]
  //   for (let i = 0; i < 8; i++) {
  //     const obj = {
  //       id: Math.floor(Date.now() / Math.random()),
  //       new: Math.floor(Math.random() * (1 - 0 + 1)) + 0,
  //       top: Math.floor(Math.random() * (1 - 0 + 1)) + 0,
  //       image: images[Math.floor(Math.random() * (2 - 0 + 2)) + 0],
  //       label: 'Чикен Сладкий Чили',
  //       description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус',
  //       quantity: 0,
  //       type: [
  //         {
  //           id: 0,
  //           label: 'Традиционное'
  //         },
  //         {
  //           id: 1,
  //           label: 'Тонкое'
  //         }
  //       ],
  //       price: [
  //         {
  //           id: 0,
  //           price: 289,
  //           size: 20,
  //           weight: '200 г'
  //         },
  //         {
  //           id: 1,
  //           price: 380,
  //           size: 28,
  //           weight: '300 г'
  //         },
  //         {
  //           id: 2,
  //           price: 400,
  //           size: 33,
  //           weight: '400 г'
  //         },
  //       ],
  //       modificators: [
  //         {
  //           id: 0,
  //           icon: example_compound,
  //           label: 'Моцарелла',
  //           price: 59,
  //           disable: true
  //         },
  //         {
  //           id: 1,
  //           icon: example_compound,
  //           label: 'Шампиньоны',
  //           price: 59,
  //           disable: true
  //         },
  //         {
  //           id: 2,
  //           icon: example_compound,
  //           label: 'Красный лук',
  //           price: 59,
  //           disable: true
  //         },
  //         {
  //           id: 3,
  //           icon: example_compound,
  //           label: 'Сладкий перец',
  //           price: 59,
  //           disable: true
  //         },
  //       ],
  //       compound: [
  //         {
  //           id: 0,
  //           icon: example_compound,
  //           label: 'Моцарелла',
  //           price: 59,
  //           disable: false
  //         },
  //         {
  //           id: 1,
  //           icon: example_compound,
  //           label: 'Шампиньоны',
  //           price: 59,
  //           disable: false
  //         },
  //         {
  //           id: 2,
  //           icon: example_compound,
  //           label: 'Красный лук',
  //           price: 59,
  //           disable: false
  //         },
  //         {
  //           id: 3,
  //           icon: example_compound,
  //           label: 'Сладкий перец',
  //           price: 59,
  //           disable: false
  //         }
  //       ]
  //     }
  //     store.commit('products/set_products', obj)
  //   }
  // },
  data () {
    return {
      isModalProduct: false,
      isModalProductData: null
    }
  },
  methods: {
    showModalProduct (product) {
      this.isModalProductData = product
      this.isModalProduct = true
    }
  },
  // computed: {
  //   categoriesArr () {
  //     return this.$store.state.products.categories
  //   }
  // }
}
</script>
