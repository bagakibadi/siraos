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
                  <h4 class="page-title">Form Data Pengajuan</h4>
              </div>
              <!--end page-title-box-->
            </div>
            <!--end col-->
          </div>
          <v-card shaped elevation-2 class="p-3">
            <div class="judulhead">
              <h4 class="mt-0 header-title">Form Data Pengajuan</h4>
              <!-- <div class="tambah">
                <a href="#" type="button" id="tambah" class="btn text-white btn-success"><span class="fas fa-plus"> </span> Tambah</a>
              </div> -->
            </div>
            <v-row
              justify="end"
            >
              <v-col md="3">
                <v-text-field v-model="search" append-icon="mdi-magnify" label="search" single-line hide-details></v-text-field>
              </v-col>
            </v-row>
            <v-data-table
              :search="search"
              :headers="headers"
              :items="pengajuan"
              class="elevation-1"
            >
              <template v-slot:item.attachment="{ item }">
                <div class="p-2">
                  <img :src="'https://siraos.itopsp3.my.id/' + item.attachment" :alt="item.name" height="100px">
                </div>
              </template>
            </v-data-table>
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
  components: { Navbar },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Username', value: 'username' },
        { text: 'Alasan', value: 'type' },
        { text: 'Dari Tanggal', value: 'startDate' },
        { text: 'Sampai Tanggal', value: 'endDate' },
        { text: 'Dibuat', value: 'createdOn' },
        { text: 'Lampiran', value: 'attachment' },
        { text: 'Address', value: 'address' },
        // { text: '', value: '' },
      ],
    };
  },
  computed: {
    ...mapState(['pengajuan']),
  },
  mounted() {
    this.$store.dispatch('getApi', {
      url: 'getDataSubmission',
      mutation: 'GET_PENGAJUAN',
      token: localStorage.token,
    });
  },
};
</script>

<style>

</style>
