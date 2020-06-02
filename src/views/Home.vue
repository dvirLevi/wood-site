<template>
  <div class="row">
    <div class="col">
       <titleSectionGallery />
       <categorySection />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import titleSectionGallery from '@/components/titleSectionGallery.vue'
import categorySection from '@/components/categorySection.vue'

export default {
  name: 'Home',
  components: {
    titleSectionGallery,
    categorySection
  }
}
</script>
