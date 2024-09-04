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
      <!-- <div class="cover">
        <img src="~/assets/1.jpg" alt="prewedding dan wedding" class="gallery-img" />
        <div class="navigasi">
          <div class="nav">
            <NuxtLink to="/prewedding">Prewedding</NuxtLink>
          </div>
          <div class="nav">
            <NuxtLink to="/wedding">Wedding</NuxtLink>
          </div>
        </div>
      </div> -->
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
    </section>
    <div class="link">
      <a href="/gallery">See More</a>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const images = ref([]);

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
  const { data } = await supabase.from("gallery").select(`*`);
  if (data) images.value = data;
};

onMounted(() => {
  showSlides();
  getImg();
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

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
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
  animation-duration: 3s;
  animation-name: slidein;
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

/* #gallery {
  position: relative;
  overflow: hidden;
}

.cover {
  position: relative;
  width: 100%;
}

.gallery-img {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.5s ease-in-out;
}

.navigasi {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 0 10px;
}

.nav {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.nav:hover {
  background-color: rgba(53, 53, 53, 0.8);
  backdrop-filter: blur(10px);
  color: #ffffff;
}

.nav a {
  color: #000000;
  text-decoration: none;
  font-size: 16px;
} */
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
}
</style>
