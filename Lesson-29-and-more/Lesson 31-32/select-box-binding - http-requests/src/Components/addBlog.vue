<template>
  <div id="add-blog">
    <div v-if="submitted">
      <h3>Thanks for adding your blog</h3>
    </div>

    <div v-if="!submitted">
      <h2>Add a New Blog Post</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" required />
        <label>Blog Content:</label>
        <textarea v-model.lazy.trim="blog.content"></textarea>
        <div id="checkboxes">
          <p>Blog Categories:</p>
          <label>Ninjas</label>
          <input type="checkbox" value="ninjas" v-model="blog.categories" />
          <label>Wizards</label>
          <input type="checkbox" value="wizards" v-model="blog.categories" />
          <label>Mario</label>
          <input type="checkbox" value="mario" v-model="blog.categories" />
          <label>Cheese</label>
          <input type="checkbox" value="cheese" v-model="blog.categories" />
        </div>
        <label>
          Author
        </label>
        <select v-model="blog.author">
          <option v-for="author in authors" :key="author">{{ author }} </option>
        </select>
        <button v-on:click.prevent="post">Add Blog</button>
      </form>
      <div id="preview">
        <h3>Preview blog</h3>
        <p>Blog title: {{ blog.title }}</p>
        <p>Blog author: {{ blog.author }}</p>

        <p>Blog content:</p>

        <p style="white-space: pre">{{ blog.content }}</p>
        <p>Blog Categories:</p>
        <ul>
          <li v-for="category in blog.categories" :key="category">
            {{ category }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Mahammad", "Rasul", "Qasim"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      console.log(this);
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userID: 1
        })
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
