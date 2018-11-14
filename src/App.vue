<template>
  <div>
    <the-header></the-header>
    <the-content></the-content>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import TheContent from '@/components/TheContent';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheContent,
  },
  data() {
    return {

    };
  },
};
</script>

