<script lang="ts">
    import { goto } from "$app/navigation";
  </script>
  
  <main class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
    <header class="text-center mb-8">
      <h1 class="text-5xl font-bold text-red-600 ">ZenGL</h1>
      <a 
      href="https://x.com/thekotodev"  
      target="_blank" 
      class="mt-2 text-xl text-gray-800 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[34.8%] after:h-[2px] after:bg-red-500 after:transition-all after:duration-500 hover:after:w-full"
    >
      I'm Koto
    </a>
    
        </header>
    <section class="max-w-xl text-center px-4">
      <!-- English text in gray -->
      <p class="text-lg leading-relaxed text-gray-800">
        Welcome to ZenGL—a space where code and beauty blend together.
        Here, daily 3D animations inspire your journey while carefully chosen Japanese phrases add a touch of mindfulness.
      </p>
      <!-- Japanese text in red with slight transparency -->
      <p class="text-lg leading-relaxed text-red-600 opacity-75 mt-4">
        ようこそ、ZenGLへ。ここはコードと美が融合する場所。毎日、心に響く日本語のフレーズとともに、3Dアニメーションがあなたの日常にインスピレーションを与えます。
      </p>
    </section>
    <footer class="mt-10">
      <button onclick={() => goto('/day-1')} class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
        aria-label="Experience ZenGL Now">
        今すぐ体験する
      </button>
    </footer>
  </main>
  