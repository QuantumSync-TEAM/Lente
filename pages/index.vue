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

    <section id="about">
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
        <img src="~/assets/1.jpg" alt="prewedding dan wedding" />
        <div class="navigasi">
          <div class="nav">
            <NuxtLink to="/prewedding">prewedding</NuxtLink>
          </div>
          <div class="nav">
            <NuxtLink to="/wedding">wedding</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

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
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
}

.logo > img {
  margin-bottom: 20px;
}

.cover {
  position: relative;
  text-align: center;
  color: white;
}

.cover > img {
  width: 100%;
}

.navigasi {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: space-between;
}

.nav > a {
  color: #000000;
  text-decoration: none;
}
</style>
