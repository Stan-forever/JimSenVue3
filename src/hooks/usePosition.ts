import { ref } from "vue";
import useEventListener from "./useEventListener";

export default function usePosition() {
  const x = ref(0);
  const y = ref(0);

  const getPosition = (event: Event) => {
    x.value = event.clientX;
    y.value = event.clientY;
  };

  useEventListener(window, "mousemove", getPosition);

  return { x, y };
}
