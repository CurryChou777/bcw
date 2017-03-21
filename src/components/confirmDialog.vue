<template>
  <div>
      <div class="modal" v-show="show" transition="fade">
        <div class="modal-dialog">
            <div class="modal-body">
                <p class="notice">{{modalOptions.text}}</p>
            </div>
            <div class="modal-footer">
                <a v-if="modalOptions.showCancelButton" href="javascript:void(0)" class="['button',modalOptions.cancelButtonClass]" @click="close(1)">{{modalOptions.cancelButtonText}}</a>
                <a v-if="modalOptions.showConfirmButton" href="javascript:void(0)" class="['button',modalOptions.confirmButtonClass]" @click="submit">{{modalOptions.confirmButtonText}}</a>
            </div>
          </div>
      </div>
      <div v-show="show" class="modal-backup" transition="fade"></div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      show: false,   // 是否显示模态框
      resolve: '',
      reject: '',
      promise: '',  // 保存promise对象，
      modalOptions:{
        text: '确定？',
        showCancelButton: true,
        cancelButtonClass: 'btn-default',
        cancelButtonText: '取消',
        showConfirmButton: true,
        confirmButtonClass: 'btn-active',
        confirmButtonText: '确定'
      }
    }
  },
  methods: {
    /**
     * 确定,将promise断定为完成态
     */
    submit() {
      this.resolve('submit');
    },
    /**
     * 关闭,将promise断定为reject状态
     * @param type {number} 关闭的方式 0表示关闭按钮关闭,1表示取消按钮关闭
     */
    close(type) {
      this.show = false;
      this.reject(type);
    },
    /**
     * 显示confirm弹出,并创建promise对象
     * @returns {Promise}
     */
    confirm(obj) {
      this.modalOptions = {
        text: obj.text,
        showCancelButton: typeof obj.showCancelButton === 'undefined' ? true : obj.showCancelButton,
        cancelButtonClass: obj.cancelButtonClass ? obj.showCancelButton : 'btn-default',
        cancelButtonText: obj.cancelButtonText ? obj.cancelButtonText : '取消',
        showConfirmButton: typeof obj.showConfirmButton === 'undefined' ? true : obj.cancelButtonClass,
        confirmButtonClass: obj.confirmButtonClass ? obj.confirmButtonClass : 'btn-active',
        confirmButtonText: obj.confirmButtonText ? obj.confirmButtonText : '确定',
      }
      this.show = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      return this.promise;   //返回promise对象,给父级组件调用
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal {
    position: fixed;
    width:100%;
    height:100%;
    left: 0;
    top: 0;
    z-index: 1001;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    overflow: scroll;
  }
  .modal-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width:70%;
    background: #fff;
    border-radius:10px;
    overflow:hidden;
  }
  .modal-dialog .modal-body p{padding:15px;text-align:center;color:#000;font-size:1.4rem;line-height:2rem;}
  .modal-dialog .modal-footer{display:flex;border-top:solid 1px #ccc;}
  .modal-dialog .modal-footer a{flex:1;border-right:solid 1px #ccc;text-align:center;color:#333;padding:10px 0;display:block;font-size:1.4rem;line-height:2rem;}
  .modal-dialog .modal-footer a:last-child{border-right:none;}
  .modal-backup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
