<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9">
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
          <button @click.prevent="dodaj" class="btn btn-primary">Dodaj</button>
        </form>
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
</template>

<script>
import { Novi } from "@/services";
export default {
  data() {
    return {
      User: {
        name: "",
        surname: "",
        dateOfBirth: "",
        aktivan: "",
      },
    };
  },
  methods: {
    dodaj: function () {
      Novi.getAll(this.User).then(() => {
        this.$router.replace({ name: "Home" });
      });
    },
  },
};
</script>