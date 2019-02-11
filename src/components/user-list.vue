<template>
  <div>
    <section>
      <a class="load-users" href="#" @click.prevent="loadUsers">Load users</a>
      <h2>Count: {{ userCount }}</h2>
    </section>

    <ul class="user-list">
      <li class="user-list--item" v-for="user in users" :key="user.id">
        <div class="avatar"><img :src="userAvatar" width="48" /></div>
        <span class="username">{{ user.name }}</span>
        <a href="#" class="btn-remove" @click.prevent="removeUser(user.id);"
          >+</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import userAvatar from "../assets/user-avatar.png";
import { mapState, mapGetters } from "vuex";

export default {
  name: "UserList",

  data: () => ({ userAvatar }),

  computed: {
    ...mapState("users", ["users"]),
    ...mapGetters("users", ["userCount"])
  },

  methods: {
    loadUsers() {
      this.$store
        .dispatch("users/LOAD_USERS")
        .catch(err => console.log("--- ERROR --->", err.message));
    },

    removeUser(id) {
      this.$store.commit("users/REMOVE_USER", id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

section {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .load-users {
    font-size: 16px;
    color: $vue-green-plus-25;
  }

  h2 {
    margin-left: auto;
  }
}

.user-list {
  margin-bottom: 16px;
  background: $vue-dark-minus-5;
  padding: 0 8px;

  .user-list--item {
    font-size: 24px;
    border-bottom: 1px solid $vue-dark-plus-15;
    height: 80px;
    display: flex;
    align-items: center;

    &:last-child {
      border: none;
    }
  }

  .avatar {
    background: $vue-dark-plus-15;
    width: 56px;
    height: 56px;
    padding: 4px;
  }

  .username {
    padding: 0 12px;
  }

  .btn-remove {
    font-size: 32px;
    color: #f99;
    transform: rotate(45deg);
    margin: 12px;
    margin-left: auto;
  }
}
</style>
