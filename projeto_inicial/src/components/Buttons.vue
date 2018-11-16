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
    <table class="highlight striped">
      <thead>
        <th>Nome</th>
        <th>Email</th>
        <th>Pais</th>
        <th>Ações</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.country }}</td>
          <td>
            <button
              @click="deleteUser(user.id)"
              class="btn"
              >
                Deletar
              </button>
          </td>
        </tr>
      </tbody>
    </table>
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
      this.$http
        .get('http://localhost:3000/users')
        .then((res) => {
          console.log(res.body);
          this.users = res.body;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    countUsers() {
      return 'oi';
    },
    deleteUser(id) {
      const deleteUser = window.confirm('Deseja realmente deletar o usuário?');
      deleteUser && this.$http
        .delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          const newUsers = this.users.filter(user => user.id !== id);
          this.users = newUsers;
        });
    }
  },
};
</script>
