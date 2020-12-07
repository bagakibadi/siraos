<template>
  <div>
    <Navbar/>
    <div class="page-wrapper">
      <!-- Page Content-->
      <div class="page-content-tab" id="content">
        <div class="containers">
          <!-- Page-Title -->
          <div class="row">
            <div class="col-sm-12">
              <div class="page-title-box">
                <!-- <div class="float-right">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0);">Metrica</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0);">Pages</a>
                    </li>
                    <li class="breadcrumb-item active">Starter</li>
                  </ol>
                </div> -->
                  <h4 class="page-title">Data Shift</h4>
              </div>
              <!--end page-title-box-->
            </div>
            <!--end col-->
          </div>
          <v-card elevation-2 shaped class="p-3">
            <div class="judulhead">
              <h4 class="mt-0 header-title">Data Shift</h4>
              <!-- <div class="tambah">
                <a href="#" type="button" id="tambah" @click="tambah" class="btn text-white btn-success"><span class="fas fa-plus"> </span> Tambah</a>
              </div> -->
            </div>
            <v-row>
              <v-col md="3">
                <v-text-field v-model="search" append-icon="mdi-magnify" label="search" single-line hide-details></v-text-field>
              </v-col>
            </v-row>
            <v-data-table
              :search="search"
              :headers="headers"
              :items="shift"
              class="elevation-1"
            >
              <template v-slot:item.actions="{item}">
                <button class="mdi mdi-square-edit-outline text-primary actions" @click="edit(item.id)"></button>
                <button class="mdi mdi-delete text-danger actions" @click="deleted(item.id)"></button>
              </template>
            </v-data-table>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import { mapState } from 'vuex';
import Navbar from '../components/Navbar.vue';

export default {
  components: { Navbar },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Time', value: 'time' },
        { text: 'Updated On', value: 'updateOn' },
        { text: 'Actions', value: 'actions' },
        // { text: '', value: '' },
      ],
    };
  },
  methods: {
    edit(eid) {
      const dataa = {
        id: eid,
        name: '1',
        time: '07:00 - 15:00',
      };
      console.log(eid);
      this.$store.dispatch('postApi', {
        url: 'postUpdateShift',
        token: localStorage.token,
        data: qs.stringify(dataa),
      });
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    },
    deleted(id) {
      console.log(id);
    },
  },
  computed: {
    ...mapState(['shift']),
  },
  mounted() {
    this.$store.dispatch('getApi', {
      url: 'getDataShift',
      mutation: 'GET_SHIFT',
      token: localStorage.token,
    });
  },
};
</script>

<style>
  .actions{
    font-size: 25px;
  }
</style>
