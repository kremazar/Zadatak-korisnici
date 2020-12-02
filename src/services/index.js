import axios from "axios";

let Service = axios.create({
    baseURL: "https://bonsai-hiring.azurewebsites.net/api/",
    timout: 1000,
    headers:{
        'bonsai-key' : 'b42938ac014c4a6ab4fafd8231f8b6cd',
        'Content-Type': 'application/json'
    }
  });

  let SviUseri = {
    async getAll() {
      let response = await Service.get(`/user`);
      let data = response.data;
      return data.data
    },
  };
  let Novi = {
    async getAll(podaci) {
      let response = await Service.post("/user", podaci);
      return response;
    },
  };
  let ObrisiUser = {
    async getAll(id) {
      let response = await Service.delete(`/user/${id}`);
      return response;
    },
  };
  let User = {
    async getAll(id) {
      let response = await Service.get(`/user/${id}`);
      let data = response.data;
      return data;
    },
  };
  let EditUser = {
    async getAll(id,data) {
      let response = await Service.patch(`/user/${id}`,data);
      return response;
    },
  };
  export {
    SviUseri,Novi,ObrisiUser,User,EditUser
  };