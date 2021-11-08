<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
        <slot></slot>
        <button>Go Home</button>
      <div class="modal" @click.stop>
        <h2 style="color: #ffffff;">NOICE</h2>
        <p>Your Details have been saved Successfully</p>
        <button>Go Home</button>
      </div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="/images/logo.svg" alt="" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0; 
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal {
  text-align: center;
  background-color: white !important;
  height: 100%;
  width: 100%;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}
.close-img {
  width: 25px;
}
.check {
  width: 150px;
}
h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
}
button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
