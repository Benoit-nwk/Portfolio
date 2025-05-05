<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
let hours = ref(0);
let minutes = ref(0);
let seconds = ref(0);

const updateClock = () => {
    const date = new Date();
    hours.value = date.getHours();
    minutes.value = date.getMinutes();
    seconds.value = date.getSeconds();
};

onMounted(() => {
    updateClock();
    const interval = setInterval(updateClock, 1000);

    onUnmounted(() => {
        clearInterval(interval);
    });
});

</script>

<template>
<pre class="clock">
    <code>
        const <code class="clock-green_Code">clock</code> = {
            hours: <code class="clock-green_Code">{{ hours }}</code>,
            minutes: <code class="clock-green_Code">{{ minutes }}</code>,
            seconds: <code class="clock-green_Code">{{ seconds }}</code>,
        }
    </code>
</pre>
</template>

<style scoped>

</style>
