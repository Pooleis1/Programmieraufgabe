// src/assets/main.js
const { ref: vueRef, onMounted: vueOnMounted, onUnmounted: vueOnUnmounted } = Vue;

// Diese Funktion teilen sich alle Seiten
function useNavigation() {
  const isScrolled = ref(false);
  const menuOpen = ref(false);

  const onScroll = () => { 
    isScrolled.value = window.scrollY > 20; 
  };

  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return { isScrolled, menuOpen };
}