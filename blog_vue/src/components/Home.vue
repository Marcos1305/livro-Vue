<template>
  <div>
    <div v-show="showProgress" class="progress">
      <div class="indeterminate"></div>
    </div>
    <div class="row" v-for="post in posts" :key="post.id">
      <div class="col s12">
        <div class="card blue lighten-5">
          <div class="card-content black-text">
            <span class="card-title">{{ post.title }}</span>
            <p>{{ post.text }}</p>
          </div>
          <div class="card-action">
            <span>
              <i class="material-icons">Author: </i>
              {{ post.user.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: null,
      showProgress: true,
    };
  },
  created() {
    this.showProgress = true;
    this.$http.get('http://localhost:9000/api/posts')
      .then((res) => {
        this.showProgress = false;
        this.posts = res.data;
      })
      .catch((err) => {
        this.showProgress = false;
        this.$materialize.toast(`Error ${err.statusText}`, 3000);
      });
  },
};
</script>

