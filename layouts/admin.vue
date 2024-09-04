<template>
  <div class="container">
    <div class="sidebar">
      <div class="logo">
        <img src="~/assets/logo.png" alt="" />
      </div>
      <div class="button">
        <button>Keluar</button>
        <button>Logout</button>
      </div>
    </div>
    <div class="contain">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #dfdfdf;
  display: grid;
  grid-template-columns: auto auto auto;
}
.sidebar {
  background-color: #ffffff;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo > img {
  width: 80px;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
}

.button > button {
  background-color: #dfdfdf;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 10px;
}

.button > button:hover {
  background-color: #353535;
  color: #ffffff;
  transform: scale(1.1);
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 10px;
}
</style>
