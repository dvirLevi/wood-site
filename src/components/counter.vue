<template>
  <div class="center counter m-border p-1">
    <div @click.stop="counter('+')" class="m-border-left c-p">
      +
    </div>
    <div>
      {{passAmount}}
    </div>
    <div @click.stop="counter('-')" class="m-border-right c-p">
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
      passAmount: Number,
      operation: {
        default: "operation",
        type: String
      }
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
        if (this.operation === "operation") {
          if (action === '-') this.$emit('customEvent', "-")
          if (action === '+') this.$emit('customEvent', "+")
        } else if (this.operation === "incroment") {
          if (this.amount > 0) {
            if (action === '-') this.amount--
            if (action === '+') this.amount++
          } else if (this.amount === 0) {
            if (action === '+') this.amount++
          }
          this.emitAmount(this.amount)
        }
      },
      emitAmount(amount) {
        this.$emit('customEvent', amount)
      }
    }

  }
</script>

<style scoped>
  .counter {
    font-size: 15px;
    user-select: none;
  }

  .counter div {
    padding: 0px 8px
  }

  .m-border {
    border: solid #444 1px;
    border-radius: 5px;
  }

  @media (max-width: 767.98px) {}
</style>