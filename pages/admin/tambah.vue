<template>
  <div class="container">
    <form>
      <div class="form">
        <label>Nama Paket</label>
        <input type="text" />
      </div>
      <div class="form">
        <label>Price</label>
        <input type="number" />
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});
</script>
