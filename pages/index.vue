<template>
  <div>
    <Header />
    <main class="appContainer">
      <SetValues />
      <section>
        <div class="appPreview">
        </div>
        <div class="appOutput">
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import Header from '../components/Header'
import SetValues from '../components/SetValues'
export default {
  components: {
    Header,
    SetValues,
  }
}
</script>