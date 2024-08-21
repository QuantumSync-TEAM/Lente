<template>
  <div>
    <header class="nav-scroll">
      <nav>
        <div class="logo">
          <img src="~/assets/logo.png" alt="Lenteart" />
        </div>
        <div class="menu" id="nav-links">
          <NuxtLink to="#home">Home</NuxtLink>
          <NuxtLink to="#about">About</NuxtLink>
          <NuxtLink to="#gallery">Gallery</NuxtLink>
          <NuxtLink to="#price-list">Price List</NuxtLink>
        </div>

        <div class="hamburger" id="hamburger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </nav>
    </header>
    <slot />
    <footer>
      <div class="text">
        <div class="1">
          <h3>Sosial Media</h3>
          <p>Kp.Cipeusar Rt.02 Rw.04 Kelurahan.Sukajaya Kecamatan.Purbaratu Kota Tasikmalaya</p>
        </div>
        <div class="1">
          <h3>Address</h3>
          <p>Kp.Cipeusar Rt.02 Rw.04 Kelurahan.Sukajaya Kecamatan.Purbaratu Kota Tasikmalaya</p>
        </div>
      </div>
      <p>All content Copyright &copy; 2024 Lenteartstory</p>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    this.showSlides();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    showSlides() {
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
    },
    // handleScroll() {
    //   const header = document.querySelector("header");
    //   const navScroll = header.offsetTop;

    //   if (window.pageYOffset > navScroll) {
    //     header.classList.add("nav-scroll");
    //     console.log("y");
    //   } else {
    //     header.classList.remove("nav-scroll");
    //   }
    // },
  },
};
</script>

<style>
* {
  margin: 0;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}

nav {
  background-color: transparent;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  z-index: 10;
}

.nav-scroll {
  background-color: red;
}

.logo > img {
  width: 50px;
  margin-left: 20px;
}

.menu a {
  margin: 0 15px;
  text-decoration: none;
  color: black;
}

.hamburger {
  display: none;
  font-size: 24px;
  cursor: pointer;
}

footer {
  background-color: #000000;
  height: 180px;
  color: #ffffff;
  padding: 0 10px;
}

.text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 0px;
}

footer > p {
  text-align: center;
}

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    padding: 10px;
    width: 20%;
  }

  .menu.show {
    display: flex;
    transition: ease-in-out 3ms;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20px;
  }

  .hamburger > span {
    transition: all 0.3s;
    margin: 2px;
  }

  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 3px);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -3px);
  }

  .line {
    width: 20px;
    height: 3px;
    background-color: #000000;
    display: block;
    margin: 4px 0;
  }
}
</style>
