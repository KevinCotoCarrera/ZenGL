<script lang="ts">
  import '@fortawesome/fontawesome-free/css/all.css';
  interface Props {
    shareText: string;
  }
  let { shareText = '目の前に立ちはだかる高い、高い壁' }: Props = $props();
  let popupVisible = $state(false);
  let copied = $state(false);

  const togglePopup = () => {
    popupVisible = !popupVisible;
  };

  const shareOnWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
    popupVisible = false;
  };

  const shareOnLine = () => {
    window.open(`https://line.me/R/msg/text/?${encodeURIComponent(shareText)}`, '_blank');
    popupVisible = false;
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
    popupVisible = false;
  };

  const shareOnInstagram = () => {
    alert("Instagram sharing is not supported directly. Please copy the link and share on your Instagram story.");
    popupVisible = false;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      copied = true;
      popupVisible = false;
      setTimeout(() => (copied = false), 2000);
    } catch (err) {
      alert("Failed to copy link.");
    }
  };
</script>

<div class="relative inline-block">
  <!-- Main share button -->
  <button
    onclick={togglePopup}
    class="h-16 w-16 p-3 rounded-full bg-gray-700 hover:bg-gray-900 text-white shadow-lg flex items-center justify-center"
    aria-label="Share options"
  >
    <i class="fas fa-share-alt text-2xl"></i>
  </button>

  <!-- Popup with share options -->
  {#if popupVisible}
    <div class="absolute z-10 top-full mt-2 right-0 bg-white rounded-lg shadow-lg p-4 flex gap-4">
      <button
        onclick={shareOnWhatsapp}
        class="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white"
        aria-label="Share on WhatsApp"
      >
        <i class="fab fa-whatsapp text-xl"></i>
      </button>
      <button
        onclick={shareOnInstagram}
        class="p-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white"
        aria-label="Share on Instagram"
      >
        <i class="fab fa-instagram text-xl"></i>
      </button>
      <button
        onclick={shareOnLine}
        class="p-2 rounded-full bg-green-400 hover:bg-green-500 text-white"
        aria-label="Share on Line"
      >
        <i class="fab fa-line text-xl"></i>
      </button>
      <button
        onclick={shareOnTwitter}
        class="p-2 rounded-full bg-blue-400 hover:bg-blue-500 text-white"
        aria-label="Share on Twitter"
      >
        <i class="fab fa-twitter text-xl"></i>
      </button>
      <button
        onclick={copyToClipboard}
        class="p-2 rounded-full bg-gray-500 hover:bg-gray-600 text-white"
        aria-label="Copy to clipboard"
      >
        <i class="fas fa-copy text-xl"></i>
      </button>
    </div>
  {/if}

  <!-- "Link copied!" notification -->
  {#if copied}
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-white bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
      Link copied!
    </div>
  {/if}
</div>
