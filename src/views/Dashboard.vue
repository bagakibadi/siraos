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
                  <h4 class="page-title">Form Data Pegawai</h4>
              </div>
              <!--end page-title-box-->
            </div>
            <!--end col-->
          </div>
          <v-card
            elevation="2"
            shaped
            class="p-3"
          >
            <div class="judulhead">
              <h4 class="mt-0 header-title">Form Data Pegawai</h4>
              <div class="tambah">
                <a href="#" type="button" id="tambah" @click="tambah" class="btn btn-success"><span class="fas fa-plus"> </span> Tambah</a>
                <!-- <button class="btn btn-success">Tambah</button> -->
              </div>
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
              :headers="thead"
              :items="data"
              class="elevation-1"
            >
              <template v-slot:item.actions="{item}">
                <button class="mdi mdi-delete text-danger" @click="deleted(item.username)"></button>
              </template>
            </v-data-table>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import qs from 'qs';
import Swal from 'sweetalert2';
import { mapState } from 'vuex';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
  },
  data() {
    return {
      search: '',
      thead: [
        { text: 'Agency Name', value: 'agency_name' },
        { text: 'Agency Role', value: 'agency_role' },
        { text: 'Agency Type', value: 'agency_type' },
        { text: 'Fullname', value: 'fullname' },
        { text: 'Username', value: 'username' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    };
  },
  computed: {
    ...mapState(['data']),
  },
  methods: {
    tambah() {
      document.getElementById('modaladd').classList.toggle('d-flex');
    },
    deleted(id) {
      const del = {
        username: id,
      };
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Axios.post('https://siraos.itopsp3.my.id/api/admin/postDeleteUsers', qs.stringify(del), {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          })
            .then((res) => {
              console.log(res);
              if (res.data.success === true) {
                console.log(res.data.message);
                Swal.fire(
                  'Deleted!',
                  res.data.message,
                  'success',
                ).then((ress) => {
                  if (ress.isConfirmed) {
                    this.$router.go();
                  }
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
  },

  mounted() {
    this.$store.dispatch('getApi', {
      url: 'getDataPegawai?currentPage=all',
      mutation: 'GET_DATA',
      token: localStorage.token,
    });
  },
  created() {
    if (!localStorage.token) {
      this.$router.replace('login');
    } else {
      // this.$store.dispatch('postApi', {
      //   url: 'postAuthLogin',
      //   mutation: 'GET_USER',
      // })
    }
  },
};
</script>

<style>
  thead{
    background: #f1f5fa;
  }
  /* thead th{
    border: 2px solid #eaf0f7;
  } */
  .tambah a{
    color: white;
  }
  .mdi.mdi-delete{
    font-size: 25px;
  }
</style>
