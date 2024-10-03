<template>
  <div>
    <div class="engagement">

      <div class="judul">
        <h1>Pricelist Engagement</h1>
      </div>

      <div class="grid-container">
        <div v-for="(list, i) in engagement" :key="i">
          <div class="card-container">
            <div class="card card-engagement">
              <p class="title">{{ list.judul }}</p>
              <p class="price">Rp.{{ list.price }}</p>
              <p class="benefit">
                {{ list.benefit }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="prewedding">

      <div class="judul">
        <h1>Pricelist Prewedding</h1>
      </div>

      <div class="grid-container">
        <div v-for="(list, i) in prewedding" :key="i">
          <div class="card-container">
            <div class="card">
              <p class="title">{{ list.judul }}</p>
              <p class="price">Rp.{{ list.price }}</p>
              <p class="benefit">
                {{ list.benefit }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wedding">

      <div class="judul">
        <h1>Pricelist Wedding</h1>
      </div>

      <div class="grid-container">
        <div v-for="(list, i) in wedding" :key="i">
          <div class="card-container">
            <div class="card card-wedding">
              <p class="title">{{ list.judul }}</p>
              <p class="price">Rp.{{ list.price }}</p>
              <p class="benefit">
                {{ list.benefit }}
              </p>
              <p class="output">
                <b>Output:</b><br>
                {{ list.output }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.0908741005894!2d108.26738271094915!3d-7.328429887907078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f59232d662b4f%3A0xb6e45013a0fb2c27!2sLenteartstory%20%26%20Silviaa%20Mua!5e0!3m2!1sid!2sid!4v1726645893686!5m2!1sid!2sid"
      width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const engagement = ref([]);
const prewedding = ref([]);
const wedding = ref([]);

const getEngagement = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Engagement");
  if (data) engagement.value = data;
};
const getPrewedding = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Prewedding");
  if (data) prewedding.value = data;
};
const getWedding = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Wedding");
  if (data) wedding.value = data;
};

onMounted(() => {
  getEngagement();
  getPrewedding();
  getWedding();
});
</script>

<style scoped>
.judul>h1 {
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
  height: 300px;
  border-radius: 12px;
  font-family: sans-serif;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  padding: 20px;
  margin: 20px;
}

.card-engagement {
  width: 300px;
  height: 280px;
  border-radius: 12px;
  font-family: sans-serif;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  padding: 20px;
  margin: 20px;
}

.card-wedding {
  width: 300px;
  height: 350px;
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

.card .price {
  font-size: 1em;
  font-weight: 600;
  color: #000;
  margin-bottom: 6px;
}

.card .title {
  font-size: 1.2em;
  font-weight: 600;
  color: #000;
  margin-bottom: 6px;
}

.benefit,
.output {
  white-space: pre-line;
  line-height: 1.5em;
  margin-top: 5px;
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
