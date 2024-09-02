<template>
  <div>
    <section id="home">
      <div class="slideshow-container">
        <div class="slide fade">
          <img src="~/assets/1.jpg" style="width: 100%" />
        </div>
        <div class="slide fade">
          <img src="~/assets/2.jpg" style="width: 100%" />
        </div>
        <div class="slide fade">
          <img src="~/assets/3.jpg" style="width: 100%" />
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
      <div class="cover">
        <img src="~/assets/1.jpg" alt="prewedding dan wedding" class="gallery-img" />
        <!-- <div class="slideshow-container">
          <div class="slide fade">
            <img src="~/assets/1.jpg" style="width: 100%" />
          </div>
          <div class="slide fade">
            <img src="~/assets/2.jpg" style="width: 100%" />
          </div>
          <div class="slide fade">
            <img src="~/assets/3.jpg" style="width: 100%" />
          </div>
        </div> -->
        <div class="navigasi">
          <div class="nav">
            <NuxtLink to="/prewedding">Prewedding</NuxtLink>
          </div>
          <div class="nav">
            <NuxtLink to="/wedding">Wedding</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

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

#gallery {
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
