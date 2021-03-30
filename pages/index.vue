<template>
  <div>
    <Header />
    <main class="appContainer">
      <SetValues />
      <section>
        <Preview />
        <div class="appOutput">
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Preview from '../components/Preview.vue'
import SetValues from '../components/SetValues.vue'
export default {
  components: {
    Header,
    SetValues,
    Preview,
  }
}
</script>