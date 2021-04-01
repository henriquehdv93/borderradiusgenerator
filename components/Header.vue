<template>
  <header class="title">
    <h1>{{ title }}</h1>
    <p>Desenvolvido por: <a :href="developedBy.url" rel="nofollow" target="_blank">{{ developedBy.name }}</a></p>
    <p><a :href="github" rel="nofollow" target="_blank">Acesse o Github do projeto</a></p>
  </header>
</template>
<script>
export default {
  data: () => ({
      title: 'Gerador de CSS3 border-radius',
      developedBy: {
        name: 'Henrique Vargas',
        url: 'https://henriquevargas.com.br',
      },
      github: 'https://github.com/henriquehdv93/borderradiusgenerator/'
  })
}
</script>