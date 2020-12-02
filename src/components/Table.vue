<template>
  <div class="hello">
    <div class="col-3">
      <v-table
        :data="users"
        :currentPage.sync="currentPage"
        :pageSize="5"
        @totalPagesChanged="totalPages = $event"
      >
        <thead slot="head">
          <th>id</th>
          <th>name</th>
          <th>surname</th>
          <th>dateOfBirth</th>
          <th>aktivan</th>
        </thead>
        <tbody slot="body" slot-scope="{ displayData }">
          <tr v-for="user in displayData" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.dateOfBirth }}</td>
            <td>{{ user.aktivan }}</td>
            <button
              class="btn btn-danger float-right"
              @click="onDelete(user.id)"
            >
              X
            </button>
            <router-link v-bind:to="'/User/' + user.id">Edit</router-link>
          </tr>
        </tbody>
      </v-table>
      <smart-pagination
        :currentPage.sync="currentPage"
        :totalPages="totalPages"
      />
    </div>
  </div>
</template>

<script>
import { SviUseri, ObrisiUser } from "@/services";
export default {
  data: () => ({
    users: [],
    currentPage: 1,
    totalPages: 0,
  }),

  methods: {
    deletePred(id) {
      ObrisiUser.getAll(id)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    onDelete(user) {
      this.deletePred(user);
    },
  },
  created() {
    SviUseri.getAll().then((data) => {
      for (let key in data) {
        this.users.push(data[key]);
      }
    });
  },
  mounted() {},
};
</script>


