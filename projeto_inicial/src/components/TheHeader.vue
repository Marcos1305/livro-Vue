<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link tag="a" to="'/'">Home</router-link>
        </li>
        <li>
          <router-link tag="a" to="/card">Card</router-link>
        </li>
        <li>
          <router-link tag="a" to="/buttons">Buttons</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {

};
</script>

