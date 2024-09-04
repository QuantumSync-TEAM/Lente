<template>
  <div class="container">
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
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

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
  height: auto;
  border-radius: 12px;
  font-family: sans-serif;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  padding: 20px;
  margin: 20px;
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

button {
  background-color: #dfdfdf;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 10px;
}
</style>
