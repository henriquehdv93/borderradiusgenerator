<template>
  <footer>
    <a :href="logo.url" :title="logo.title" target="_blank" rel="nofollow">
      <img :src="logo.src" :alt="logo.alt" :title="logo.title">
    </a>
  </footer>
</template>
<script>
export default {
  data: () => ({
    logo: {
      url: 'https://www.henriquevargas.com.br',
      src: 'images/henriquevargas.png',
      title: 'Henrique Vargas - Desenvolvedor web',
      alt: 'Desenvolvido por Henrique Vargas'
    }
  })
}
</script>