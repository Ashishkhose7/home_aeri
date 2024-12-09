<template>
    <div>
     <!-- Footer Section -->
  <footer class="footer">
    <div class="w-80 md:container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 py-8">
      <!-- Left Section -->
      <div class="footer-logo text-left md:text-left text-lg">
        <img src="https://www.aeri.com/wp-content/uploads/2021/02/aeri-logo-dark.png" alt="AERI Logo" class=" md:mx-0 h-16">
        <p class="mt-2">Toll Free: 888.427.9111</p>
        <p>Copyright © 2024 AERI. <br> All rights reserved.</p>
      </div>

      <!-- Middle Section -->
      <div class="footer-links ">
        <ul class="space-y-2 pl-0">
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Site Map</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms of Sale</a></li>
        </ul>
      </div>

      <!-- Right Section -->
      <div class="newsletter ">
        <h3 class="text-gray-800 font-bold uppercase mb-4 text-xs tracking-[1px]">
            Sign Up for News and Updates
        </h3>
        <form action="#" class="space-y-4">
            <!-- Email Label -->
            <div>
            <label for="email" class="block text-sm mb-2 text-[#333333]">
                Email<span class="text-red-500">*</span>
            </label>
            <!-- Input Field -->
            <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                required
                class="w-72 md:w-full px-4 py-6 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            </div>

            <!-- Submit Button -->
            <div>
            <button
                type="submit"
                class="w-auto px-6 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600  focus:ring-orange-400 focus:outline-none mt-5"
            >
                Submit
            </button>
            </div>
        </form>
        
        </div>
        <!-- Social Media Icons -->
        <div class="social-icons space-x-4">
            <a
            href="#"
            class="text-gray-500"
            aria-label="Facebook"
            >
            <i class="fab fa-facebook text-[20px]"></i>
            </a>
            <a
            href="#"
            class="text-gray-500"
            aria-label="Twitter"
            >
            <i class="fab fa-twitter text-[20px]"></i>
            </a>
            <a
            href="#"
            class="text-gray-500"
            aria-label="LinkedIn"
            >
            <i class="fab fa-linkedin text-[20px]"></i>
            </a>
            <a
            href="#"
            class="text-gray-500"
            aria-label="YouTube"
            >
            <i class="fab fa-youtube text-[20px]"></i>
            </a>
        </div>
    </div>
  </footer>
    </div>
</template>
<script>

</script>

<style scoped>
.footer {
      background-color: #f2f2f2; /* Light gray background */
      padding: 20px 0;
    }

    .footer-logo img {
      /* width: 100px; */
    }

    .footer p,
    .footer a {
      font-size: 15px;
      color: #333333;
    }

    .footer a {
      text-decoration: none;
    }

    .footer a:hover {
      color: #000;
      text-decoration: underline;
    }

    .newsletter input[type="email"] {
      border: 1px solid #ccc;
      padding: 8px 12px;
      border-radius: 4px;
      outline: none;
      font-size: 14px;
    }

    .newsletter button {
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s;
    }

    .newsletter button:hover {
      background-color: #ff4a2b;
    }

    .newsletter h3{
        color: #212121;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .social-icons a {
      font-size: 18px;
      color: #555;
      margin: 0 5px;
      transition: color 0.3s;
    }

</style>