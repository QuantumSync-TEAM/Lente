<template>
  <div>
    <h1>Gallery</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="photo in photos" :key="photo.id" class="photo">
        <img :src="photo.url" :alt="photo.name" />
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "login",
});

export default {
  data() {
    return {
      photos: [],
      loading: true,
    };
  },
  async mounted() {
    try {
      // Ambil daftar file dari bucket "Homeimg"
      const { data, error } = await this.$supabase.storage
        .from("Homeimg") // Gunakan nama bucket Anda di sini
        .list("", { limit: 100 });

      if (error) {
        console.error("Error fetching files:", error);
        this.loading = false;
        return;
      }

      console.log("Files fetched:", data);

      // Ambil URL untuk setiap file
      const photoUrls = await Promise.all(
        data.map(async (file) => {
          const { publicURL, error } = this.$supabase.storage
            .from("Homeimg") // Gunakan nama bucket Anda di sini
            .getPublicUrl(file.name); // Mengambil URL publik file

          if (error) {
            console.error("Error fetching public URL:", error);
            return null;
          }

          return { id: file.name, url: publicURL, name: file.name };
        })
      );

      console.log("Photo URLs:", photoUrls);

      this.photos = photoUrls.filter((url) => url !== null); // Filter null
    } catch (err) {
      console.error("An error occurred:", err);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style>
.photo {
  margin: 10px;
  display: inline-block;
}

.photo img {
  width: 200px;
  height: auto;
  display: block;
}
</style>
