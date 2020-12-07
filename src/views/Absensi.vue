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
                  <h4 class="page-title">Form Data Absensi</h4>
              </div>
              <!--end page-title-box-->
            </div>
            <!--end col-->
          </div>
          <v-card elevation-2 shaped class="p-3">
            <div class="judulhead">
              <h4 class="mt-0 header-title">Form Data Absensi</h4>
              <div class="tambah">
                <a href="#" type="button" id="tambah" @click="tambah" class="btn text-white btn-success"><span class="fas fa-plus"> </span> Tambah</a>
                <!-- <button class="btn btn-success">Tambah</button> -->
              </div>
            </div>
            <v-row>
              <v-col md="3">
                <v-text-field v-model="search" append-icon="mdi-magnify" label="search" single-line hide-details></v-text-field>
              </v-col>
            </v-row>
            <v-data-table
              :search="search"
              :headers="headers"
              :items="attendance"
              class="elevation-1"
            ></v-data-table>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Username', value: 'username' },
        { text: 'Time Created', value: 'createdOn' },
        { text: 'Clock In', value: 'timeIn' },
        { text: 'Address In', value: 'addressIn', width: '25%' },
        { text: 'Clock Out', value: 'timeOut' },
        { text: 'Address Out', value: 'addressOut', width: '25%' },
        // { text: '', value: '' },
      ],
    };
  },
  methods: {
    tambah() {
      document.getElementById('absensi').classList.toggle('d-flex');
    },
  },
  computed: {
    ...mapState(['attendance']),
  },
  mounted() {
    this.$store.dispatch('getApi', {
      url: 'getDataSummaryAttendance',
      mutation: 'GET_SUMMARYATTENDANCE',
      token: localStorage.token,
    });
  },
};
</script>

<style>
  thead{
    background: #f1f5fa;
  }

</style>
