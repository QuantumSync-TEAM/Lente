<!-- <template>
  <div class="container">
    <form @submit.prevent="uploadImage">
      <div class="form">
        <div>
          <label>File</label>
          <input type="file" @change="handleFileInput" />
        </div>

        <div>
          <label>kategori</label>
          <select>
            <option value="prewed">Prewedding</option>
            <option value="wedding">Wedding</option>
          </select>
        </div>

        <div>
          <label>Ukuran</label>
          <select>
            <option value="hor">Horizontal</option>
            <option value="ver">Vertical</option>
          </select>
        </div>

        <button type="submit">Upload Foto</button>
      </div>
    </form>
  </div>
</template> -->
<template>
  <div class="container">
    <form @submit.prevent="uploadImage">
      <div class="form">
        <div class="form-group">
          <label>File</label>
          <input type="file" @change="handleFileInput" class="input-file" />
        </div>

        <div class="form-group">
          <label>Kategori</label>
          <select class="input-select">
            <option value="prewed">Prewedding</option>
            <option value="wedding">Wedding</option>
          </select>
        </div>

        <div class="form-group">
          <label>Ukuran</label>
          <select class="input-select">
            <option value="hor">Horizontal</option>
            <option value="ver">Vertical</option>
          </select>
        </div>

        <button type="submit" class="btn-submit">Upload Foto</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  display: block;
  color: #333;
}

.input-file,
.input-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  background-color: #ff0000;
}

.input-file {
  background-color: #fff;
}

.input-select {
  background-color: #f0f0f0;
}

.btn-submit {
  padding: 10px 20px;
  background-color: #3f3f3f;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #218838;
}

.btn-submit:active {
  background-color: #1e7e34;
}
</style>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});
const supabase = useSupabaseClient();

// File yang akan diupload
const file = ref(null);

const handleFileInput = (event) => {
  file.value = event.target.files[0];
};

const uploadImage = async () => {
  if (!file.value) {
    alert("Pilih file terlebih dahulu!");
    return;
  }

  try {
    // 1. Upload file ke bucket "Homeimg"
    const { data, error } = await supabase.storage.from("Homeimg").upload(`public/${file.value.name}`, file.value);

    if (error) {
      throw error;
    }

    // 2. Ambil URL file yang diupload
    const publicUrl = supabase.storage.from("Homeimg").getPublicUrl(`public/${file.value.name}`).data.publicUrl;

    // 3. Simpan URL ke tabel "gallery" di kolom "img"
    const { error: insertError } = await supabase.from("gallery").insert([{ img: publicUrl }]);

    if (insertError) {
      throw insertError;
    }

    alert("Foto berhasil diupload dan disimpan ke gallery!");
  } catch (error) {
    console.error("Error uploading file:", error.message);
    alert("Gagal mengupload file.");
  }
};
</script>
