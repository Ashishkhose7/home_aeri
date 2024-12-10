<template>
<div class="absolute inset-0 video-wrapper z-10"></div>

<div class="relative z-20 container mx-auto py-16">
            <!-- Market News Badge -->
            <div class="flex justify-center mb-8 w-[30%]">
              <span class="text-slate-100 px-3 py-1.5 rounded-full text-xs font-bold border-2 border-slate-100 cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black hover:border-gray-200">
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
                    >
                    <button class="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <!-- Customer Retention -->
                <div class=" p-6 rounded-lg text-center text-white">
                    <div class="text-red-500 text-base mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium mb-2">99% Customer Retention</h3>
                    <p class="text-[15px] font-medium text-gray-400">with the Most Certifications In The Business</p>
                </div>

                <!-- Spot a Fake -->
                <div class="p-6 rounded-lg text-center text-white">
                    <div class="text-red-500 text-4xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium mb-2">Learn How to Spot a Fake</h3>
                    <p class="text-[15px] font-medium text-gray-400">How to Detect Counterfeit Electronic Components</p>
                </div>

                <!-- Trustpilot -->
                <div class="p-6 rounded-lg text-center text-white">
                    <div class="flex justify-center mb-4">
                      <div class="flex text-2xl">
                      <!-- Full Stars -->
                      <span class="text-red-500">★</span>
                      <span class="text-red-500">★</span>
                      <span class="text-red-500">★</span>
                      <span class="text-red-500">★</span>

                      <!-- Half Star -->
                      <span class="text-red-500 relative" style="display: inline-block; width: 1em; position: relative; overflow: hidden;">
                        <!-- Full Star -->
                        <span class="absolute inset-0 text-red-500">★</span>
                        <!-- Empty Star Mask (Clip from the left side) -->
                        <span class="absolute inset-0 text-gray-300" style="clip-path: inset(0 0 0 50%);">
                          ★
                        </span>
                      </span>
                    </div>


                    </div>
                    <h3 class="text-lg font-medium mb-2">Trustpilot</h3>
                    <p class="text-[15px] font-medium text-gray-400">4.7 with 100+ reviews</p>
                </div>
            </div>
        </div>
</template>