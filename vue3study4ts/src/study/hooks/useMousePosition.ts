// 模块化功能, 为vue功能解耦.

import {ref, onMounted, onUnmounted} from 'vue'

function useMousePoint() {
  const x = ref(0)
  const y = ref(0)
  const updateMousePoint = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  }
  onMounted(() => {
    document.addEventListener('click', updateMousePoint);
  })
  onUnmounted(() => {
    document.removeEventListener('click', updateMousePoint);
  })
  return {x, y}
}

export default useMousePoint;