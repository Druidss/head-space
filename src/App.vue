<script>
import { ConfigProvider } from 'ant-design-vue';
export default {
  components: {
    ConfigProvider
  }
}
</script>

<template>
    <ConfigProvider           
    :theme="{
      token: {
      colorPrimary: '#FFB700',
      },
    }" 
  >
  <RouterView />
</ConfigProvider>
</template>





