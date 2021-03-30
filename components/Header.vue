<template>
  <header class="title">
    <h1>{{ title }}</h1>
    <p>Desenvolvido por: <a :href="developedBy.url" rel="nofollow" target="_blank">{{ developedBy.name }}</a></p>
  </header>
</template>
<script>
export default {
  data: () => ({
      title: 'Border Radius Generator',
      developedBy: {
        name: 'Henrique Vargas',
        url: 'https://henriquevargas.com.br',
      }
  })
}
</script>