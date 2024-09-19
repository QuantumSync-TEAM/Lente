<template>
  <div>
    <section id="home">
      <div class="slideshow-container">
        <div v-for="(image, index) in images" :key="index" class="foto">
          <div class="slide fade">
            <img :src="image.img" alt="Image" class="image" style="width: 100%" />
          </div>
        </div>
      </div>
    </section>

    <section id="about" :class="{ show: animasi }">
      <div class="logo">
        <img src="~/assets/logo.png" alt="Lenteart" />
      </div>
      <p>
        Setiap detik cerita rasa yang berbeda, semua di satukan dalam sebuah cerita yang indah. "Kami ingin membantu kalian untuk menceritakan setiap cerita yang kalian miliki. kami siap untuk berbagi kegembiran dan emosi dengan kalian,
        dalam bingkai yang indah, yang akan kita satukan dalam sebuah cerita yang tidak akan terganti dan akan di ingat selamanya”
      </p>
    </section>

    <section id="gallery">
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
    </section>
    <div class="link">
      <NuxtLink to="/gallery">See More Foto</NuxtLink>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.0908741005894!2d108.26738271094915!3d-7.328429887907078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f59232d662b4f%3A0xb6e45013a0fb2c27!2sLenteartstory%20%26%20Silviaa%20Mua!5e0!3m2!1sid!2sid!4v1726645893686!5m2!1sid!2sid"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const images = ref([]);
const prewedver = ref([]);
const prewedhor = ref([]);
const weddingver = ref([]);
const weddinghor = ref([]);

const showSlides = () => {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  setInterval(() => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
  }, 2000);
};

const getImg = async () => {
  const { data } = await supabase.from("gallery").select(`*`).eq("ukuran", "hor");
  if (data) images.value = data;
};

const prewedVer = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "prewed").eq("ukuran", "ver").limit(1);
  if (data) prewedver.value = data;
};
const prewedHor = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "prewed").eq("ukuran", "hor").limit(2);
  if (data) prewedhor.value = data;
};
const weddingVer = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "wedding").eq("ukuran", "ver").limit(1);
  if (data) weddingver.value = data;
};
const weddingHor = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "wedding").eq("ukuran", "hor").limit(2);
  if (data) weddinghor.value = data;
};

onMounted(() => {
  showSlides();
  getImg();
  prewedVer();
  prewedHor();
  weddingVer();
  weddingHor();
});
</script>

<style>
.slideshow-container {
  position: relative;
  max-width: 100%;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: auto;
}

.slide {
  display: none;
}

.slide img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
}

#about {
  padding: 0 50px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  text-align: center;
  margin-top: 30px;
}

.logo > img {
  width: 50px;
  margin-top: 15px;
  margin: 30px;
}

.animasi {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    translate: 0 150vh;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}

.logo > img {
  margin-bottom: 20px;
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

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.link > a {
  color: #000000;
  text-decoration: none;
}

@media (max-width: 768px) {
  .slideshow-container {
    position: relative;
    max-width: 100%;
    height: 100vh;
    margin: auto;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: auto;
  }

  .slide img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 70vh;
  }

  #about {
    padding: 0 50px;
    padding-bottom: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50px;
    margin-top: -180px;
    text-align: center;
  }

  .logo > img {
    margin-bottom: 20px;
  }

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
