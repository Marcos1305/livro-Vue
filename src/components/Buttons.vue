<template>
  <div>
    <a href="#" class="waves-effect waves-light btn">Button</a>
    <a
      href="#"
      class="waves-effect waves-light btn"
      @click="callUsers"
      >
      <i class="material-icons left">Call Users</i>
    </a>
    <a
      href="#"
      class="waves-effect waves-light btn"
      @click="countUsers"
      >
      <i class="material-icons right">Count Users</i>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: null,
    };
  },
  methods: {
    callUsers() {
      this.$http({ url: 'users.json', method: 'GET' })
        .then(function (response) {
          this.users = response.data;
        })
        .catch(() => alert('Erro'));
    },
    countUsers() {
      alert(this.users.length);
    },
  },
};
</script>
