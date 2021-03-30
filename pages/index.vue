<template>
  <div>
    <Header />
    <main class="appContainer">
      <SetValues />
      <section>
        <Preview />
        <Output />
      </section>
    </main>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Preview from '../components/Preview.vue'
import SetValues from '../components/SetValues.vue'
import Output from '../components/Output.vue'
export default {
  components: {
    Header,
    SetValues,
    Preview,
    Output,
  }
}
</script>