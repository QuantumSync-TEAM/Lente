<template>
  <div>
    <div class="container">
      <img src="~/assets/1.jpg" alt="" />
      <img src="~/assets/1.jpg" alt="" />
      <img src="~/assets/1.jpg" alt="" />
      <img src="~/assets/1.jpg" alt="" />
      <img src="~/assets/1.jpg" alt="" />
      <img src="~/assets/1.jpg" alt="" />
      <img src="~/assets/1.jpg" alt="" />
      <img src="~/assets/1.jpg" alt="" />
    </div>
  </div>
</template>

<style scoped>
/* .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
} */

.container > img {
  width: 500px;
  height: auto;
}

div.container {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
}

div.container img {
  padding: 10px;
}
</style>
