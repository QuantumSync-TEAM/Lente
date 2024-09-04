<template>
  <div>
    <h1>tes</h1>
  </div>
</template>

<!-- <template>
  <div class="gallery-grid">
    <div v-for="(image, index) in images" :key="index" class="gallery-item">
      <img :src="image" alt="Gallery Image" />
    </div>
  </div>
</template>

<script>
const supabase = useSupabaseClient();

export default {
  async asyncData() {
    // Fetch images from Supabase storage
    const { data, error } = await supabase.storage
      .from("Homeimg") // Ganti dengan nama bucket Anda
      .list("path/to/your/images"); // Ganti dengan path folder gambar Anda di Supabase

    if (error) {
      console.error(error);
      return { images: [] };
    }

    // Generate public URLs for each image
    const images = data.map((image) => supabase.storage.from("your-bucket-name").getPublicUrl(`path/to/your/images/${image.name}`).publicUrl);

    return { images };
  },
};
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Adjust the number of columns */
  gap: 10px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Responsive for mobile */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr); /* Change to 2 columns */
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr; /* Change to 1 column */
  }
}
</style> -->
