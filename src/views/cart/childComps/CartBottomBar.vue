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
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 15px;
    box-sizing: border-box;
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
    background: orangered;
    position: absolute;
    right: 0;
    text-align: center;
    color: #fff;
  }
</style>