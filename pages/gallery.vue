<!-- <template>
  <div class="container">
    <div class="judul">
      <div class="text"><h1>Prewedding</h1></div>
      <div class="text"><h1>Wedding</h1></div>
    </div>
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

.img-hor img,
.img-ver img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-column .img-ver {
  height: 100%;
}
</style> -->
<template>
  <div class="container">
    <div class="judul">
      <div class="text"><h1>Prewedding</h1></div>
      <div class="text"><h1>Wedding</h1></div>
    </div>
    <div class="gallery">
      <!-- Prewedding Grid -->
      <div class="prewedding">
        <div class="left-column">
          <div v-for="(image, index) in preweddingHorizontal" :key="'prewedding-hor-' + index" class="img img-hor">
            <img :src="image.url" :alt="image.description" />
          </div>
        </div>
        <div class="right-column">
          <div v-for="(image, index) in preweddingVertical" :key="'prewedding-ver-' + index" class="img img-ver">
            <img :src="image.url" :alt="image.description" />
          </div>
        </div>
      </div>

      <!-- Wedding Grid -->
      <div class="wedding">
        <div class="left-column">
          <div v-for="(image, index) in weddingHorizontal" :key="'wedding-hor-' + index" class="img img-hor">
            <img :src="image.url" :alt="image.description" />
          </div>
        </div>
        <div class="right-column">
          <div v-for="(image, index) in weddingVertical" :key="'wedding-ver-' + index" class="img img-ver">
            <img :src="image.url" :alt="image.description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const preweddingHorizontal = ref([]);
const preweddingVertical = ref([]);
const weddingHorizontal = ref([]);
const weddingVertical = ref([]);

const supabase = useSupabaseClient();

onMounted(async () => {
  const { data, error } = await supabase.from("gallery2").select(`*, kategori(*)`);

  if (error) {
    console.error("Error fetching data:", error);
    return;
  }

  data.forEach((image) => {
    if (image.kategori === 2) {
      // Prewedding
      if (image.ukuran === 1) {
        preweddingHorizontal.value.push(image);
      } else if (image.ukuran === 2) {
        preweddingVertical.value.push(image);
      }
    } else if (image.kategori === 1) {
      // Wedding
      if (image.ukuran === 1) {
        weddingHorizontal.value.push(image);
      } else if (image.ukuran === 2) {
        weddingVertical.value.push(image);
      }
    }
  });
});
</script>

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

.img-hor img,
.img-ver img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-column .img-ver {
  height: 100%;
}
</style>
