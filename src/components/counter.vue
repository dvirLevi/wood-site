<template>
  <div class="center counter border p-1">
    <div @click.stop="counter('+')" class="border-left c-p">
      +
    </div>
    <div>
      {{amount}}
    </div>
    <div @click.stop="counter('-')" class="border-right c-p">
      -
    </div>
  </div>
</template>

<script>
  // import ButtonLink from '@/components/ButtonLink.vue'

  export default {
    name: 'counter',
    components: {
      // ButtonLink
    },
    props: {
      passAmount: Number
    },
    data() {
      return {
        amount: 1
      }
    },
    mounted() {
      this.amount = this.passAmount
    },
    methods: {
      counter(action) {
        if (this.amount > 0) {
          if (action === '-') this.amount--
          if (action === '+') this.amount++
        } else if (this.amount === 0) {
          if (action === '+') this.amount++
        }
        this.emitAmount(this.amount)
      },
      emitAmount(amount) {
        this.$emit('customEvent', amount)
      }
    }
  }
</script>

<style scoped>
  .counter {
    font-size: 20px;
  }

  .counter div {
    padding: 0px 10px
  }

  @media (max-width: 767.98px) {}
</style>