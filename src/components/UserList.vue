<template>
  <div id="app">
    <div style="width: 45%; float: left">
      <div v-for="user in users" :key="user.id" style="padding: 1em 0">
        <div>
          Name:
          <span
            style="text-decoration: underline; cursor: pointer"
            @click="fetchUser(user.id)"
            >{{ user.name }}</span
          >
        </div>

        <div>Email: {{ user.email }}</div>
        <hr />
      </div>
    </div>
    <div style="width: 45%; float: left">
      <h3>User Details</h3>
      Name: {{ userDetails.name }}<br />
      Company: {{ userDetails.company.name }}<br />
      Email: {{ userDetails.email }}<br />
      Website: {{ userDetails.website }}
    </div>
  </div>
</template>

<script>
import { Repository } from '../utils/Repository';

const usersRepository = new Repository('/users');

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      userDetails: {
        company: {}
      }
    };
  },
  created() {
    usersRepository.list().then((response) => {
      this.$data.users = response.data;
    });
  },
  methods: {
    fetchUser(id) {
      usersRepository.show(id).then((response) => {
        console.log(response);
        this.$data.userDetails = response.data;
      });
    }
  }
};
</script>
