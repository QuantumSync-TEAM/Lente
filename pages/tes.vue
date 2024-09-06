<template>
  <div class="container">
    <div class="judul">
      <div class="text"><h1>Prewedding</h1></div>
      <div class="text"><h1>Wedding</h1></div>
    </div>
    <!-- layout gallery yang benar -->
    <div class="gallery">
      <div class="prewedding">
        <div class="left-column">
          <div class="img img-hor">
            <img src="~/assets/7.jpg" alt="Prewedding Horizontal 1" />
          </div>
          <div class="img img-hor">
            <img src="~/assets/7.jpg" alt="Prewedding Horizontal 2" />
          </div>
        </div>
        <div class="right-column">
          <div class="img img-ver">
            <img src="~/assets/6.jpg" alt="Prewedding Vertical" />
          </div>
        </div>
      </div>

      <div class="wedding">
        <div class="left-column">
          <div class="img img-hor">
            <img src="~/assets/7.jpg" alt="Wedding Horizontal 1" />
          </div>
          <div class="img img-hor">
            <img src="~/assets/7.jpg" alt="Wedding Horizontal 2" />
          </div>
        </div>
        <div class="right-column">
          <div class="img img-ver">
            <img src="~/assets/6.jpg" alt="Wedding Vertical" />
          </div>
        </div>
      </div>
    </div>
    <!-- layout gallery yang salah -->
    <div class="gallery">
      <div class="prewedding">
        <div class="left-column">
          <div v-for="(image, index) in prewedhor" :key="index" class="img img-hor">
            <img :src="image.img" alt="prewed" />
          </div>
        </div>
        <div class="right-column">
          <div v-for="(image, index) in prewedver" :key="index" class="img img-ver">
            <img :src="image.img" alt="prewed" />
          </div>
        </div>
      </div>

      <div class="wedding">
        <div class="left-column">
          <div v-for="(image, index) in weddinghor" :key="index" class="img img-hor">
            <img :src="image.img" alt="wedding" />
          </div>
        </div>
        <div class="right-column">
          <div v-for="(image, index) in weddingver" :key="index" class="img img-ver">
            <img :src="image.img" alt="wedding" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
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

.img-hor,
.img-ver {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0px;
}

img {
  object-fit: auto;
  margin: 0px;
  padding: 0px;
}

.right-column .img-ver {
  height: 100%;
}
</style>
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
