<template>
  <div>
    <div class="container">
      <div class="fc">
        <div class="foto">
          <div class="persegi"></div>
          <div class="perpanver"></div>
        </div>
        <div class="foto">
          <div class="perpanver"></div>
          <div class="persegi"></div>
        </div>
        <div class="foto">
          <div class="persegi"></div>
          <div class="perpanver"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fc {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.persegi {
  width: 150px;
  height: 150px;
  background-color: black;
  margin: 10px;
}

.perpanver {
  width: 150px;
  height: 300px;
  background-color: black;
  margin: 10px;
}

.perpanhor {
  width: 100px;
  height: 50px;
  background-color: black;
  margin: 10px;
}
</style>
