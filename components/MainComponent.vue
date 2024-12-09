<template>
  <div class="certifications-section">
    <!-- Heading -->
    <h2 class="certifications-title  ">Certifications</h2>

     <!-- Custom Carousel Wrapper -->
<div class="mx-auto my-auto border-1 border-red-500 w-[100%] lg:w-[80%] pl-16">
  <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner mx-auto self-center text-center" role="listbox"
      onmouseover="this.carouselPaused = true" 
      onmouseout="this.carouselPaused = false">
    
      <div class="carousel-item active">
        <div class="w-full sm:w-1/2 md:w-1/4 px-2 cursor-pointer">
          <img src="https://www.aeri.com/wp-content/uploads/2023/08/NQA_ESDS20.20.png" class="img-fluid">
        </div>
      </div>
      <div class="carousel-item">
        <div class="w-full sm:w-1/2 md:w-1/4 px-2 cursor-pointer">
          <img src="https://www.aeri.com/wp-content/uploads/2021/05/ERAI-logo.png" class="img-fluid">
        </div>
      </div>
      <div class="carousel-item">
        <div class="w-full sm:w-1/2 md:w-1/4 px-2 cursor-pointer">
          <img src="https://www.aeri.com/wp-content/uploads/2023/08/NQA_AS6081.png" class="img-fluid">
        </div>
      </div>
      <div class="carousel-item">
        <div class="w-full sm:w-1/2 md:w-1/4 px-2 cursor-pointer">
          <img src="https://www.aeri.com/wp-content/uploads/2023/08/NQA_ISO9001-1.png" class="img-fluid">
        </div>
      </div>
      <div class="carousel-item">
        <div class="w-full sm:w-1/2 md:w-1/4 px-2 cursor-pointer">
          <img src="https://www.aeri.com/wp-content/uploads/2023/08/NQA_AS9120.png" class="img-fluid">
        </div>
      </div>
      <div class="carousel-item">
        <div class="w-full sm:w-1/2 md:w-1/4 px-2 cursor-pointer">
          <img src="https://www.aeri.com/wp-content/uploads/2021/05/IDEA-logo.png" class="img-fluid">
        </div>
      </div>
      <div class="carousel-item">
        <div class="w-full sm:w-1/2 md:w-1/4 px-2 cursor-pointer">
          <img src="https://www.aeri.com/wp-content/uploads/2021/05/QTSL-DOD-qualified-logo.png" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</div>

  </div>

  <!-- Contact us section -->
  <div
    class="contactus py-12 px-4 text-center md:text-left md:flex md:items-center md:justify-center"
  >
    <!-- Text Section -->
    <p class="text-[#4B4F52] text-base md:text-lg leading-normal md:mb-0">
      Ready to get Started? Create your RFQ or Contact one of our Search Experts
      Today.
    </p>

    <!-- Button Section -->
    <div class="contactus-button ml-5 mt-6 md:mt-0">
      <a
        href="#"
        class="text-white font-semibold uppercase rounded-full underline hover:no-underline transition-all duration-300"
        style="letter-spacing: 1px"
      >
        Contact Us
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import { onMounted } from "vue";

onMounted(() => {
  if (process.client) {

  // JavaScript Code to Clone Items
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // Wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
}
});

</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.carousel-item img{
  height: 150px
}

@media (max-width: 767px) {
    .carousel-inner .carousel-item > div {
        display: none;
    }
    .carousel-inner .carousel-item > div:first-child {
        display: block;
    }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
    display: flex;
}

/* medium and up screens */
@media (min-width: 768px) {
    
    .carousel-inner .carousel-item-end.active,
    .carousel-inner .carousel-item-next {
      transform: translateX(25%);
    }
    
    .carousel-inner .carousel-item-start.active, 
    .carousel-inner .carousel-item-prev {
      transform: translateX(-25%);
    }
}

.carousel-inner .carousel-item-end,
.carousel-inner .carousel-item-start { 
  transform: translateX(0);
}

/* certifications */
.placeholder-box {
  background-color: #ddd;
  text-align: center;
  padding: 20px;
  margin-bottom: 10px;
}

/* Section Styles */
.certifications-section {
  background-color: #0078f5; /* Bright blue background */
  padding: 50px 20px;
  text-align: center;
  color: white;
}

/* Heading */
.certifications-title {
  font-size: 32px;
  /* font-weight: bold; */
  color: #ffffff;
  font-weight: 400;
  margin-bottom: 40px;
}

/* Certifications Grid */
.certifications-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

/* Individual Certification Items */
.certification-item {
  flex: 1;
  max-width: 200px;
  text-align: center;
}

/* Placeholder Box */
.placeholder-box {
  background-color: white; /* White background for placeholders */
  color: #0078f5; /* Blue text for content inside */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: bold;
}

/* Certification Heading */
.certification-heading {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

/* Certification Text */
.certification-text {
  font-size: 12px;
  text-transform: uppercase;
}

/* Contact us */
.contactus {
  background-color: #ecebe9;
}
.contactus-button a {
  background-color: #e81c24;
  font-size: 12px;
  box-shadow: 0 -3px #d01920 inset;
  padding: 18px 19px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.contactus-button a:hover {
  background-color: #f56a6f;
  text-decoration: none;
  box-shadow: 0 -3px #f56a6f inset;
}
</style>
