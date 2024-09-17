<template>
  <div class="container">
    <div class="gallery">
      <div class="column prewedding-horizontal">
        <div v-for="(image, index) in prewedhor" :key="index" class="img img-hor">
          <img :src="image.img" alt="Prewedding Horizontal" />
        </div>
      </div>

      <div class="column prewedding-vertical">
        <div v-for="(image, index) in prewedver" :key="index" class="img img-ver">
          <img :src="image.img" alt="Prewedding Vertical" />
        </div>
      </div>

      <div class="column wedding-vertical">
        <div v-for="(image, index) in weddingver" :key="index" class="img img-ver">
          <img :src="image.img" alt="Wedding Vertical" />
        </div>
      </div>

      <div class="column wedding-horizontal">
        <div v-for="(image, index) in weddinghor" :key="index" class="img img-hor">
          <img :src="image.img" alt="Wedding Horizontal" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 50px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 90px 20px 0px 20px;
  grid-gap: 20px;
  width: 100%;
}

.img {
  gap: 10px;
  margin-bottom: 10px;
}

.prewedding-horizontal .img-hor,
.wedding-horizontal .img-hor {
  width: 100%;
  height: calc(30vh);
}

.prewedding-vertical .img-ver,
.wedding-vertical .img-ver {
  width: 100%;
  height: calc(60.8vh);
}

.img-hor img,
.img-ver img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-hor img,
.img-ver img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

 

@media (max-width: 768px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 20px 0px 20px;
    grid-gap: 20px;
    width: 100%;
  }
  .prewedding-horizontal .img-hor,
  .wedding-horizontal .img-hor {
    width: 100%;
    height: calc(20vh);
  }

  .prewedding-vertical .img-ver,
  .wedding-vertical .img-ver {
    width: 100%;
    height: calc(40.8vh);
  }
}
</style>

<script setup>
const supabase = useSupabaseClient();
const prewedver = ref([]);
const prewedhor = ref([]);
const weddingver = ref([]);
const weddinghor = ref([]);

const prewedVer = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "prewed").eq("ukuran", "ver");
  if (data) prewedver.value = data;
};
const prewedHor = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "prewed").eq("ukuran", "hor");
  if (data) prewedhor.value = data;
};
const weddingVer = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "wedding").eq("ukuran", "ver");
  if (data) weddingver.value = data;
};
const weddingHor = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "wedding").eq("ukuran", "hor");
  if (data) weddinghor.value = data;
};

onMounted(() => {
  prewedVer();
  prewedHor();
  weddingVer();
  weddingHor();
});
</script>
