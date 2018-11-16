<template>
  <div class="container">
      <form action="" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              type="text"
              id="login"
              v-model="user.login"
              >
            <label for="logig">Login</label>
          </div>
          <div class="input-field col s12">
            <input
              type="password"
              id="password"
              v-model="user.password"
              >
            <label for="password">Password</label>
          </div>
          <div class="input-field col s12 m3">
            <input type="checkbox" id="createaccount" v-model="user.isNew">
            <label for="createaccount">Create Account?</label>
          </div>
          <div class="input-field col s12 m9" v-show="user.isNew">
            <input type="text" id="name" v-model="user.name">
            <label for="name">Your name</label>
          </div>
        </div>
        <div class="input-field col s12">
          <button
            class="waves-effect waves-light btn right"
            @click="doLogin"
            >
            Enviar
          </button>
        </div>
      </form>

    <div v-show="showProgress" class="progress">
     <div class="indeterminate"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
        login: '',
        isNew: false,
      },
    };
  },
};
</script>
