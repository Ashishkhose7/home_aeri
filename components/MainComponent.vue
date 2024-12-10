<template>
  <div class="relative min-h-screen herosection">
    <div class="absolute inset-0 video-wrapper z-10"></div>
    <!-- Video Background -->
    <video
      class="absolute top-0 w-full h-full object-cover z-0"
      autoplay
      muted
      loop
      poster=""
    >
      <source
        src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4"
        type="video/mp4"
      />
    </video>

    <!-- Overlay -->
    <div class="absolute top-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

    <!-- Content -->
    <div class="relative z-20 container mx-auto py-16">
      <!-- Market News Badge -->
      <div class="flex justify-center mb-14 w-[70%] md:w-[32%]">
        <span
          class="text-slate-100 px-3 py-1.5 rounded-full text-xs font-bold border-2 border-slate-100 cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black hover:border-gray-200"
        >
          2024 MARKET NEWS
        </span>
      </div>

      <!-- Main Heading -->
      <h1 class="text-5xl md:text-7xl text-white font-medium text-center mb-4">
        We Are AERI
      </h1>
      <h2 class="text-xl md:text-2xl text-[#ffffff] text-center mb-12">
        Keeping Your Production Lines Moving
      </h2>

      <!-- Search Bar -->
      <div class="max-w-md mx-auto mb-16">
        <div class="flex">
          <input
            type="text"
            placeholder="Part Number"
            class="flex-1 p-3 rounded-l-lg focus:outline-none"
          />
          <button
            class="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Customer Retention -->
        <div class="p-6 rounded-lg text-center text-white cursor-pointer">
          <a href="https://www.aeri.com/about/why-aeri/" target="_blank">
            <div class="text-red-500 text-base mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <h3 class="text-lg font-medium mb-2">99% Customer Retention</h3>
            <p class="text-[15px] font-medium text-gray-400">
              with the Most Certifications In The Business
            </p>
          </a>
        </div>

        <!-- Spot a Fake -->
        <div class="p-6 rounded-lg text-center text-white">
          <a
            href="https://www.aeri.com/counterfeit-electronic-component-detection/"
            target="_blank"
          >
            <div class="text-red-500 text-4xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-medium mb-2">Learn How to Spot a Fake</h3>
            <p class="text-[15px] font-medium text-gray-400">
              How to Detect Counterfeit Electronic Components
            </p>
          </a>
        </div>

        <!-- Trustpilot -->
        <div class="p-6 rounded-lg text-center text-white">
          <a
            href="https://ie.trustpilot.com/review/www.aeri.com"
            target="_blank"
          >
            <div class="flex justify-center mb-4">
              <div class="flex text-2xl">
                <!-- Full Stars -->
                <span class="text-red-500">★</span>
                <span class="text-red-500">★</span>
                <span class="text-red-500">★</span>
                <span class="text-red-500">★</span>

                <!-- Half Star -->
                <span
                  class="text-red-500 relative"
                  style="
                    display: inline-block;
                    width: 1em;
                    position: relative;
                    overflow: hidden;
                  "
                >
                  <!-- Full Star -->
                  <span class="absolute inset-0 text-red-500">★</span>
                  <!-- Empty Star Mask (Clip from the left side) -->
                  <span
                    class="absolute inset-0 text-gray-300"
                    style="clip-path: inset(0 0 0 50%)"
                  >
                    ★
                  </span>
                </span>
              </div>
            </div>
            <h3 class="text-lg font-medium mb-2">Trustpilot</h3>
            <p class="text-[15px] font-medium text-gray-400">
              4.7 with 100+ reviews
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Prompt Responsiveness -->
  <div class="mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div class="bg-[#004285] text-white p-8 px-12 text-center">
        <div class="flex justify-center mb-6">
          <i class="fa-solid fa-rocket text-4xl mt-1"></i>
        </div>
        <h2 class="text-xl font-normal mb-4">Prompt Responsiveness</h2>
        <p class="mb-8">
          Our team responds quickly to your requests, and gets to work
          immediately to provide great prices on hard to find active components
          or obsolete components.
        </p>
        <a
          href="https://www.aeri.com/products/"
          target="_blank"
          class="discover-more-button border-2 border-white text-white px-8 py-2.5 rounded-full transition-colors text-sm font-medium tracking-wider relative overflow-hidden"
        >
          <span class="button-text">DISCOVER MORE</span>
          <i class="fa-solid fa-rocket text-base rocket-icon"></i>
        </a>
      </div>

      <!-- Guaranteed Quality -->
      <div class="bg-blue-700 text-white p-8 text-center">
        <div class="flex justify-center mb-6">
          <i class="fa-solid fa-trophy text-4xl mt-1"></i>
        </div>
        <h2 class="text-xl font-normal mb-4">Guaranteed Quality</h2>
        <p class="mb-8">
          Our quality-control processes guard against counterfeits while
          ensuring reliability and performance. As the industry leaders in
          quality we believe if we can't get it, you don't want it.
        </p>
        <a
          href="https://www.aeri.com/counterfeit-electronic-component-detection/"
          target="_blank"
          class="discover-more-button border-2 border-white text-white px-8 py-2.5 rounded-full transition-colors text-sm font-medium tracking-wider relative overflow-hidden"
        >
          <span class="button-text">HOW TO SPOT A FAKE</span>
          <i class="fa-solid fa-trophy text-base rocket-icon"></i>
        </a>
      </div>

      <!-- Global Access -->
      <div class="bg-[#007eff] text-white p-8 text-center">
        <div class="flex justify-center mb-6">
          <i class="fa-solid fa-earth-asia text-4xl mt-1"></i>
        </div>
        <h2 class="text-xl font-normal mb-4">Global Access</h2>
        <p class="mb-8">
          Our worldwide network of trusted resources allows us to find and
          deliver the specific parts you need. AERI is an electronic component
          supplier in America, Asia and Europe.
        </p>
        <a
          href="https://www.aeri.com/contact/"
          target="_blank"
          class="discover-more-button border-2 border-white text-white px-8 py-2.5 rounded-full transition-colors text-sm font-medium tracking-wider relative overflow-hidden"
        >
          <span class="button-text">LEARN MORE</span>
          <i class="fa-solid fa-earth-asia text-base rocket-icon"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- learn more  -->
  <section class="contactus bg-gray-100 py-14">
    <div class="container">
      <div
        class="flex flex-col lg:flex-row items-center justify-center gap-12 w-[85%] mx-auto"
      >
        <!-- Image Container -->
        <div class="w-full lg:w-1/2 flex border">
          <div class="rounded-sm overflow-hidden">
            <img
              src="https://www.aeri.com/wp-content/uploads/2020/12/aeri-contact-bg.jpg"
              alt="AERI Office Space"
              class="w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>

        <!-- Content Container -->
        <div class="w-full lg:w-1/2 space-y-6 text-left">
          <h2
            class="text-lg md:text-lg font-medium text-[#1e83ec]"
            style="line-height: 30px"
          >
            Since 1994, AERI has been working with <br />
            clients to source hard-to-find and obsolete <br />
            electronic components from around the world.
          </h2>

          <p class="text-[#676767] text-base">
            Founders Robert Hammond and Anthony Romano recognized the need for
            an independent distributor not only to locate parts, but to assure
            their clients that the components were high quality and that the
            customer service would match the most famed retailers who were
            paving the way for a new generation of service.
          </p>

          <div class="pt-4 learnmore">
            <a
              href="https://www.aeri.com/about/why-aeri/"
              target="_blank"
              class="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors group relative overflow-hidden"
            >
              <span
                class="border-b border-blue-600 leading-none group-hover:border-0"
                >Learn More</span
              >
              <i
                class="fa-solid fa-circle-chevron-right ml-2 text-xl chevron-right pr-2"
              ></i>
              <i
                class="fa-solid fa-arrow-right ml-2 text-xl arrow-right absolute left-0"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Testimonoals -->

  <div class="my-20 relative">
    <h2 class="text-center py-10 text-3xl text-[#007eff]">Customer Reviews</h2>
    <div class="testimonial-slider mx-auto">
      <div class="swiper-container">
        <div class="swiper-wrapper" style="margin: 0 -10%">
          <!-- Testimonial Slide 1 -->
          <div class="swiper-slide">
            <div class="testimonial bg-blue-500 rounded-lg p-8 text-white">
              <h3 class="text-base mb-4">Bart Buzanowski</h3>
              <p class="text-white leading-relaxed tracking-[1px] text-lg">
                "Alex delivers excellent pricing and service. Whether the order
                is large or small he takes the time to do the job correctly. My
                dealings with him have been professional and to the point. No
                endless fishing calls, emails, or useless small talk. I would
                recommend anyone who wants to order with the knowledge that
                everything will be correctly taken care of correctly to use
                Alex's services."
              </p>
            </div>
          </div>
          <!-- Testimonial Slide 2 -->
          <div class="swiper-slide">
            <div class="testimonial bg-blue-500 rounded-lg p-8 text-white">
              <h3 class="text-base mb-4">Marc Andre</h3>
              <p class="text-white leading-relaxed tracking-[1px] text-lg">
                Great service, great people to work with, always giving their
                best to help. I recommand every buyers to deal with AERI, they
                helped me so often finding tough parts to find and at good
                prices, and much more. Thank you!
              </p>
            </div>
          </div>
          <!-- Testimonial Slide 3 -->
          <div class="swiper-slide">
            <div class="testimonial bg-blue-500 rounded-lg p-8 text-white">
              <h3 class="text-base mb-4">Jan Wouters</h3>
              <p class="text-white leading-relaxed tracking-[1px] text-lg">
                "We have been relying on AERI in the UK on a few occasions when
                obsolete electronic parts were hampering our business
                continuation. Besides being extremely customer focused with a
                very high level of responsiveness, the service they deliver is
                outstanding, timely and to the point...Without any reservations,
                I do recommend AERI when in dire need for obsoletes in the
                electronic manufacturing business."
              </p>
            </div>
          </div>
          <!-- Testimonial Slide 4 -->
          <div class="swiper-slide">
            <div class="testimonial bg-blue-500 rounded-lg p-8 text-white">
              <h3 class="text-base mb-4">Joerg Fricke</h3>
              <p class="text-white leading-relaxed tracking-[1px] text-lg">
                "Up till now, I bought obsolete parts via AERI two times. The
                parts were as described, and arrived within a week. There was an
                administrative problem caused by me but the employee at AERI,
                located in the U.K., who handled my orders solved the matter in
                a friendly, quick, and completely satisfactory way. In the
                future, when looking for hard to find parts, AERI will be my
                first address, and I unrestrictedly recommend this company."
              </p>
            </div>
          </div>
        </div>
        <!-- Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>

  <!-- posts section -->
  <div class="contactus">
    <div
      class="max-w-6xl py-10 px-8 mx-auto flex flex-col items-center justify-end"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- News Card 1 -->
        <div
          class="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full max-w-sm"
        >
          <div class="relative">
            <img
              src="https://www.aeri.com/wp-content/uploads/2024/10/image001-1-600x403.jpg"
              alt="Flooded Semiconductor Material Mines"
              class="w-full h-52 object-cover transform transition duration-300 hover:scale-105 cursor-pointer"
            />
            <!-- Increased height to h-52 -->
            <span
              class="absolute top-4 left-4 bg-[#007eff] hover:border-[#003469] hover:bg-[#003469] transition cursor-pointer text-white px-3 py-[2px] rounded-full border-2 font-semibold text-[12px] group"
            >
              <span class="border-b block mb-[2px] group-hover:border-0"
                >AERI NEWS</span
              >
            </span>
          </div>
          <div class="flex flex-col flex-grow cursor-pointer">
            <div class="flex-grow p-5">
              <!-- Increased horizontal padding to px-5 -->
              <p class="card-subheading text-sm mb-2">October 3, 2024</p>
              <h2 class="text-lg font-semibold mb-2 card-title">
                BREAKING NEWS! Flooded Semiconductor Material Mines Could Cause
                Another Chip Shortage.
              </h2>
              <p class="card-subheading text-sm">
                A semiconductor industry overview.
              </p>
            </div>
            <div class="flex items-center px-3 py-2 border-t border-gray-100">
              <div class="flex items-center group cursor-pointer">
                <i
                  class="fa-regular fa-user text-gray-400 w-7 h-7 flex items-center justify-center rounded-full group-hover:text-blue-900"
                ></i>
                <span
                  class="ml-2 text-gray-600 text-sm border-b border-gray-400 group-hover:border-0 leading-none"
                  >John Ward</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- News Card 2 -->
        <div
          class="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full max-w-sm"
        >
          <div class="relative">
            <img
              src="https://www.aeri.com/wp-content/uploads/2024/09/ecia_August_MAIN-600x364.webp"
              alt="Electronic Component Sales Chart"
              class="w-full h-52 object-cover transform transition duration-300 hover:scale-105 cursor-pointer"
            />
            <span
              class="absolute top-4 left-4 bg-[#007eff] text-white px-3 py-[2px] rounded-full border-2 font-semibold text-[12px] hover:border-[#003469] hover:bg-[#003469] transition cursor-pointer group"
              ><span class="border-b block mb-[2px] group-hover:border-0"
                >AERI NEWS</span
              ></span
            >
          </div>
          <div class="flex flex-col flex-grow cursor-pointer">
            <div class="flex-grow p-5">
              <p class="card-subheading text-sm mb-2">September 25, 2024</p>
              <h2 class="text-lg font-semibold mb-2 card-title">
                The ECIA Electronic Component Sales Sentiment
              </h2>
              <p class="card-subheading text-sm">
                A semiconductor industry overview.
              </p>
            </div>
            <div class="flex items-center px-3 py-2 border-t border-gray-100">
              <div class="flex items-center group cursor-pointer">
                <i
                  class="fa-regular fa-user text-gray-400 w-7 h-7 flex items-center justify-center rounded-full group-hover:text-blue-900"
                ></i>
                <span
                  class="ml-2 text-gray-600 text-sm border-b border-gray-400 group-hover:border-0 leading-none"
                  >John Ward</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- News Card 3 -->
        <div
          class="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full max-w-sm"
        >
          <div class="relative">
            <img
              src="https://www.aeri.com/wp-content/uploads/2024/09/oct-news-900x604.webp"
              alt="Semiconductor Fab Building"
              class="w-full h-52 object-cover transform transition duration-300 hover:scale-105 cursor-pointer"
            />
            <span
              class="absolute top-4 left-4 bg-[#007eff] hover:border-[#003469] hover:bg-[#003469] transition cursor-pointer text-white px-3 py-[2px] rounded-full border-2 font-semibold text-[12px] group"
              ><span class="border-b block mb-[2px] group-hover:border-0"
                >AERI NEWS</span
              ></span
            >
          </div>
          <div class="flex flex-col flex-grow cursor-pointer">
            <div class="flex-grow p-5">
              <p class="card-subheading text-sm mb-2">September 25, 2024</p>
              <h2 class="text-lg font-semibold mb-2 card-title">
                Could the Semiconductor Fab Building Bonanza Lead to a Perpetual
                Component Glut?
              </h2>
              <p class="card-subheading text-sm">
                A semiconductor industry overview.
              </p>
            </div>
            <div class="flex items-center px-3 py-2 border-t border-gray-100">
              <div class="flex items-center group cursor-pointer">
                <i
                  class="fa-regular fa-user text-gray-400 w-7 h-7 flex items-center justify-center rounded-full group-hover:text-blue-900"
                ></i>
                <span
                  class="ml-2 text-gray-600 text-sm border-b border-gray-400 group-hover:border-0 leading-none"
                  >John Ward</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-[#003469] py-[14px] flex items-center justify-center px-8 rounded-full my-20 cursor-pointer hover:bg-[#003569e1] transition-all duration-300"
      >
        <a
          href="https://www.aeri.com/blog/"
          target="_blank"
          class="text-white text-[13px] font-semibold uppercase rounded-full"
          style="letter-spacing: 1px"
        >
          VIEW ALL POST
        </a>
      </div>
    </div>
  </div>

  <div class="certifications-section">
    <!-- Heading -->
    <h2 class="certifications-title">Certifications</h2>

    <div class="swiper-container-certification">
      <!-- Swiper Wrapper -->
      <div class="swiper-wrapper">
        <!-- Testimonial Slide 1 -->
        <div
          class="swiper-slide flex flex-col items-center text-center p-4"
        >
        <div class=" px-2 cursor-pointer">
              <img
                src="https://www.aeri.com/wp-content/uploads/2023/08/NQA_ESDS20.20.png"
                class="img-fluid"
              />
            </div>
        </div>
        <!-- Testimonial Slide 2 -->
        <div
          class="swiper-slide flex flex-col items-center text-center p-4"
        >
        <div class=" px-2 cursor-pointer">
              <img
                src="https://www.aeri.com/wp-content/uploads/2021/05/ERAI-logo.png"
                class="img-fluid"
              />
            </div>
        </div>
        <!-- Testimonial Slide 3 -->
        <div
          class="swiper-slide flex flex-col items-center text-center p-4"
        >
        <div class=" px-2 cursor-pointer">
              <img
                src="https://www.aeri.com/wp-content/uploads/2023/08/NQA_AS6081.png"
                class="img-fluid"
              />
            </div>
        </div>
        <!-- Testimonial Slide 4 -->
        <div
          class="swiper-slide flex flex-col items-center text-center p-4"
        >
        <div class=" px-2 cursor-pointer">
              <img
                src="https://www.aeri.com/wp-content/uploads/2023/08/NQA_ISO9001-1.png"
                class="img-fluid"
              />
            </div>
        </div>
        <!-- Testimonial Slide 5 -->
        <div
          class="swiper-slide flex flex-col items-center text-center p-4"
        >
        <div class=" px-2 cursor-pointer">
              <img
                src="https://www.aeri.com/wp-content/uploads/2023/08/NQA_AS9120.png"
                class="img-fluid"
              />
            </div>
        </div>
        <!-- Testimonial Slide 6 -->
        <div
          class="swiper-slide flex flex-col items-center text-center p-4"
        >
        <div class=" px-2 cursor-pointer">
              <img
                src="https://www.aeri.com/wp-content/uploads/2021/05/IDEA-logo.png"
                class="img-fluid"
              />
            </div>
        </div>
        <!-- Testimonial Slide 7 -->
        <div
          class="swiper-slide flex flex-col items-center text-center p-4"
        >
        <div class=" px-2 cursor-pointer">
              <img
                src="https://www.aeri.com/wp-content/uploads/2021/05/QTSL-DOD-qualified-logo.png"
                class="img-fluid"
              />
            </div>
        </div>
      </div>
      <!-- Swiper Pagination -->
      <div class="swiper-pagination"></div>
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
        href="https://www.aeri.com/contact/"
        target="_blank"
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

    const swiper2 = new Swiper(".swiper-container-certification", {
      slidesPerView: 3, // Default to 1 slide on mobile
      spaceBetween: 20, // Spacing between slides
      breakpoints: {
        // Breakpoints for responsiveness
        // Mobile Screens
        0: {
          slidesPerView: 2, // Show 1 slide on screens smaller than 640px
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3, // Show 2 slides on screens between 640px and 1024px
          spaceBetween: 10,
        },
        // Larger Screens
        1024: {
          slidesPerView: 4, // Maintain the existing configuration for larger screens
          spaceBetween: -120,
        },
      },
      loop: true, // Enable looping
      autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false, // Keep auto-slide on after interaction
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allow pagination dots to be clickable
      },
      // slidesPerGroup: 2,
    });

    // const swiper = new Swiper(".swiper-container", {
    //   slidesPerView: 2.5,
    //   loopedSlides: 4,
    //   spaceBetween: 10,
    //   centeredSlides: true,
    //   loop: true,
    //   autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: true,
    //   },
    //   breakpoints: {
    //     // Mobile Screens
    //     0: {
    //       slidesPerView: 1, // Show 1 slide on screens smaller than 640px
    //       spaceBetween: 0,
    //     },
    //     // Tablet Screens
    //     640: {
    //       slidesPerView: 2.5, // Show 2 slides on screens between 640px and 1024px
    //       spaceBetween: 10,
    //     },
    //     // Larger Screens
    //     1024: {
    //       slidesPerView: 2.5, // Maintain the existing configuration for larger screens
    //       spaceBetween: -70,
    //     },
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   slidesPerGroup: 2,
    // });
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
.herosection {
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
}
.video-wrapper {
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
}
.discover-more-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.button-text {
  transition: transform 0.4s ease;
}
.discover-more-button .rocket-icon {
  position: absolute;
  right: 30px; /* Start off the screen on the right */
  transition: right 0.4s ease, opacity 0.4s ease;
  opacity: 0;
}
.discover-more-button:hover .button-text {
  transform: translateX(-10px); /* Move text slightly to the left */
}
.discover-more-button:hover .rocket-icon {
  right: 10px; /* Move into position */
  opacity: 1;
}
.relative {
  position: relative;
}
.overflow-hidden {
  overflow: hidden;
}
/* learnmore animation */
.inline-flex {
  display: inline-flex;
  align-items: center;
}
.items-center {
  align-items: center;
}
.text-blue-500 {
  color: #3b82f6;
}
.font-medium {
  font-weight: 500;
}
.hover\:text-blue-600:hover {
  color: #2563eb;
}
.transition-colors {
  transition: color 0.2s;
}
.group .chevron-right {
  transition: opacity 0.2s ease;
}
.group:hover .chevron-right {
  opacity: 0;
}
.group .arrow-right {
  transform: translateX(-100%);
  transition: transform 0.4s ease;
  opacity: 0;
}
.group:hover .arrow-right {
  transform: translateX(0);
  opacity: 1;
}
.ml-2 {
  margin-left: 0.5rem;
}
.text-xl {
  font-size: 1.25rem;
}
.border-2 {
  border-width: 2px;
}
.border-red-400 {
  border-color: #f87171;
}
.relative {
  position: relative;
}
.overflow-hidden {
  overflow: hidden;
}
.absolute {
  position: absolute;
}
.left-0 {
  left: 80px;
}
/* swiper  */
.swiper-container {
  overflow: hidden;
  max-width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.swiper-slide {
  transition: transform 0.3s ease;
}
.testimonial-slider {
  max-width: 100%;
  margin: 0 auto;
}
.testimonial {
  box-sizing: border-box;
  width: 100%;
  /* min-height: 360px;  */
  min-height: 440px;
}
@media (min-width: 640px) {
  .swiper-container {
    width: 100%;
  }
  .testimonial {
    width: 85%;
  }
}
@media (max-width: 1024px) {
  .testimonial-slider {
    max-width: 100%;
  }
}
.swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  /* border: 1px solid red; */
}
.swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: #000;
  opacity: 0.8;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background: #ff0000;
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  /* top: 0; */
  bottom: -60px;
}
::v-deep(.swiper-pagination-bullet) {
  /* width: 10px;
  height: 10px; */
  background-color: gray;
  border: 2px solid gray;
  border-radius: 50%;
  opacity: 1;
  transition: transform 0.3s ease;
}

::v-deep(.swiper-pagination-bullet-active) {
  width: 10px;
  height: 10px;
  border: 2px solid black;
  background-color: white;
  transform: scale(1.2);
}
/*  */
.swiper-container-certification {
  width: 100%;
  max-width: 100%;
  overflow: hidden; /* Prevent overflow */
}
.swiper-container-certification {
  width: 100%;
  max-width: 100%;
  overflow: hidden; /* Prevent overflow */
}

.swiper-wrapper {
  display: flex;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.swiper-slide img {
  height: 140px;
  width: 140px;
  /* border: 1px solid red; */
  object-fit: contain
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
.card-subheading {
  color: #888;
}
.card-title {
  color: #676767;
}
</style>
