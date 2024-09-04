<template>
  <div class="container">
    <div class="fc">
      <div v-for="(image, index) in images" :key="index" class="foto">
        <div class="persegi">
          <img :src="image.img" alt="Image" class="image" />
        </div>
        <div class="perpanver">
          <img :src="image.img" alt="Image" class="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const images = ref([]);

const getImg = async () => {
  const { data } = await supabase.from("gallery").select(`*, kategori(*)`);
  if (data) images.value = data;
  console.log(images);
};

onMounted(() => {
  getImg();
});
</script>

<style scoped>
.fc {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.foto {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.persegi,
.perpanver {
  background-color: black;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.persegi {
  width: 150px;
  height: 150px;
}

.perpanver {
  width: 150px;
  height: 300px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
