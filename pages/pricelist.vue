<template>
  <div>
    <div class="judul">
      <h1>pricelist</h1>
    </div>

    <div class="grid-container">
      <div v-for="(list, i) in pricelist" :key="i">
        <div class="card-container">
          <div class="card">
            <p class="title">{{ list.judul }}</p>
            <p class="harga">Rp{{ list.price }}</p>
            <p class="benefit">
              {{ list.benefit }}
            </p>
            <p class="output">
              {{ list.output }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const pricelist = ref([]);

const getData = async () => {
  const { data } = await supabase.from("package").select(`*, kategori(*)`);
  if (data) pricelist.value = data;
};

onMounted(() => {
  getData();
});
</script>

<style scoped>
.judul > h1 {
  text-align: center;
  margin-top: 100px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.card {
  width: 300px;
  height: 150px;
  border-radius: 12px;
  font-family: sans-serif;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  padding: 20px;
  margin: 20px;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card .harga {
  font-size: 1em;
  font-weight: 600;
  color: #000;
  margin-bottom: 4px;
}

.card .title {
  font-size: 1.2em;
  font-weight: 600;
  color: #000;
}

@media (max-width: 1150px) {
  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
  }
}
@media (max-width: 768px) {
  .grid-container {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>
