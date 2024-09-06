<template>
  <div class="container">
    <div class="judul">
      <div class="text"><h1>Prewedding</h1></div>
      <div class="text"><h1>Wedding</h1></div>
    </div>
    <div class="gallery">
      <!-- Prewedding Gallery -->
      <div class="prewedding">
        <div class="left-column">
          <div class="img img-hor" v-for="(image, index) in prewedhor" :key="index">
            <img :src="image.img" :alt="`Prewedding Horizontal ${index + 1}`" />
          </div>
        </div>
        <div class="right-column">
          <div class="img img-ver" v-for="(image, index) in prewedver" :key="index">
            <img :src="image.img" :alt="`Prewedding Vertical ${index + 1}`" />
          </div>
        </div>
      </div>

      <!-- Wedding Gallery -->
      <div class="wedding">
        <div class="left-column">
          <div class="img img-hor" v-for="(image, index) in weddinghor" :key="index">
            <img :src="image.img" :alt="`Wedding Horizontal ${index + 1}`" />
          </div>
        </div>
        <div class="right-column">
          <div class="img img-ver" v-for="(image, index) in weddingver" :key="index">
            <img :src="image.img" :alt="`Wedding Vertical ${index + 1}`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const prewedver = ref([]);
const prewedhor = ref([]);
const weddingver = ref([]);
const weddinghor = ref([]);

const prewedVer = async () => {
  const { data, error } = await supabase.from("gallery").select(`*`).eq("kategori", "prewed").eq("ukuran", "ver");
  if (data) prewedver.value = data;
};
const prewedHor = async () => {
  const { data, error } = await supabase.from("gallery").select(`*`).eq("kategori", "prewed").eq("ukuran", "hor");
  if (data) prewedhor.value = data;
};
const weddingVer = async () => {
  const { data, error } = await supabase.from("gallery").select(`*`).eq("kategori", "wedding").eq("ukuran", "ver");
  if (data) weddingver.value = data;
};
const weddingHor = async () => {
  const { data, error } = await supabase.from("gallery").select(`*`).eq("kategori", "wedding").eq("ukuran", "hor");
  if (data) weddinghor.value = data;
};

onMounted(() => {
  prewedVer();
  prewedHor();
  weddingVer();
  weddingHor();
});
</script>

<style scoped>
.container {
  margin-top: 100px;
  height: auto;
  width: 100%;
}

.judul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.text {
  text-align: center;
  margin-bottom: 10px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.prewedding {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 0px 0px 10px 10px;
}

.wedding {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 0px 10px 10px 0px;
}

.left-column {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}

.img-hor img,
.img-ver img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-ver > img {
  height: 100%;
}

.img-hor > img {
  width: 100%;
}
</style>
