<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll"
                    class="check-button"
                    @click.native="checkClick"/>
      <span>全选</span>
      
      <div class="price">
        合计: {{totalPrice}}
      </div>

      <div class="calculate">
        去计算：{{checkLength}}
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      totalPrice () {
        return '¥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll () {
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        if (this.$store.state.cartList.length === 0) return false
        for (let item of this.$store.state.cartList) {
          if (!item.checked) {
            return false
          }
        }
        return true
      }
    },
    methods: {
      checkClick () {
        if (this.isSelectAll) {
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
          });
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
          });
        }
      }
    },
  }
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background: #eee;
    position: relative;
    bottom: 135px;
    z-index: 900;
    line-height: 40px;
    display: flex;
  }

  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    /* line-height: 40px; */
  }

  .check-button {
    width: 22px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .price {
    margin-left: 20px;
  }

  .calculate {
    width: 110px;
    background: red;
    position: absolute;
    right: 0;
    text-align: center;
  }
</style>