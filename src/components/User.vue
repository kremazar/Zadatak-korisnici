<template>
  <div class="User">
    <div class="card mb-5" style="width: 18rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: {{ users.name }}</li>
        <li class="list-group-item">Surname: {{ users.surname }}</li>
        <li class="list-group-item">Date: {{ users.dateOfBirth }}</li>
        <li class="list-group-item">Aktivan: {{ users.aktivan }}</li>
      </ul>
      <button @click.prevent="edit = !edit" class="btn btn-primary">
        Edit
      </button>
    </div>

    <div v-if="edit == true">
      <div class="container">
        <form>
          <div class="form-group">
            <label for="name">First Name:</label>
            <input v-model="User.name" class="form-control" />
          </div>
          <div class="form-group">
            <label for="surname">Last Name:</label>
            <input v-model="User.surname" class="form-control" />
          </div>
          <div class="form-group">
            <label for="dateOfBirth">Date:</label>
            <input
              type="date"
              v-model="User.dateOfBirth"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="aktivan">Aktivnost:</label>
            Aktivan
            <input
              type="radio"
              v-model="User.aktivan"
              v-bind:value="true"
              class="form-control"
            />
            Neaktivan
            <input
              type="radio"
              v-model="User.aktivan"
              v-bind:value="false"
              class="form-control"
            />
          </div>
          <button @click.prevent="Edited" class="btn btn-primary">Edit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { User, EditUser } from "@/services";

export default {
  data() {
    return {
      User: {
        id: this.$route.params.id,
        name: "",
        surname: "",
        dateOfBirth: "",
        aktivan: "",
      },
      id: this.$route.params.id,
      edit: false,
      users: [],
    };
  },
  methods: {
    Edited: function () {
      EditUser.getAll(this.id, this.User).then((data) => {
        console.log(data);
        location.reload();
      });
    },
  },
  created() {
    User.getAll(this.id).then((data) => {
      this.users = data.korisnik;
    });
  },
};
</script>


