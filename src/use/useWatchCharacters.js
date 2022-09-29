import { watch } from "vue";

export function useWatchCharacters(valueToWatch, maxChars = 20) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length >= maxChars) {
      alert(`Only ${maxChars}!`);
    }
  });
}
