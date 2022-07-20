<script setup lang="ts">
import { Ref, ref } from "vue";

var count: Ref<number> = ref(1);

function nextCount(e: Event) {
  count.value++;
  (e.target as HTMLButtonElement).innerHTML = `Count:-> ${count.value}`;

  if (count.value == 5) {
    (e.target as HTMLButtonElement).style.background = "red";
  }
}
</script>

<template>
  <div>
    <button @click="nextCount">1</button>
  </div>
</template>
