import { onMounted, onUnmounted, ref } from "vue";

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x = e.pageX;
    y = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
}
