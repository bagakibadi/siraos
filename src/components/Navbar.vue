<template>
  <body>
    <!-- leftbar-tab-menu -->
    <div class="">
      <!--end main-icon-menu-->
      <div class="main-menu-inner" id="sidebar">
        <!-- LOGO -->
        <div class="topbar-left">
          <a href="/home" class="logo">
            <span>
              <img src="../assets/images/Siraos.png" alt="logo-Siraos" class="logos logo-dark"/> SIRAOS
            </span>
          </a>
        </div>
        <!--end logo-->
        <div class="menu-body slimscroll">
          <!-- end Dashboards -->
          <div id="MetricaApps" class="main-icon-menu-panel">
            <div class="title-box">
              <h6 class="menu-title">Apps</h6>
            </div>
            <ul class="nav metismenu">
              <li class="nav-item">
                <router-link to="/home" class="nav-link" ><i class="mdi mdi-view-dashboard-outline"></i> Dashboard</router-link>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" @click="show" style="cursor: pointer">
                  <i class="mdi mdi-playlist-edit"></i><span class="w-100">Formulir</span>
                  <span class="menu-arrow">
                    <i id="arrowup" class="mdi mdi-chevron-right"></i>
                    <i id="arrowdown" class="mdi mdi-chevron-down"></i>
                  </span>
                </a>
                <ul class="nav-second-level" id="second" aria-expanded="false">
                  <li><a href="/keanggotaan">Keanggotaan</a></li>
                  <li><a href="/iuran">Isian Iuran</a></li>
                  <li><a href="/iuranregistrasi">Registrasi Iuran</a></li>
                  <li><a href="/datarayon">Data Rayon</a></li>
                  <li><a href="/agenda">Agenda</a></li>
                  <li><a href="/kendaraan">Add Kendaraan</a></li>
                </ul>
              </li> -->
              <!--end nav-item-->
              <li class="nav-item">
                <router-link class="nav-link" to="/absensi"><i class="mdi mdi-account-edit"></i> Data Absensi</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/pengajuan"><i class="mdi mdi-file-document-box"></i> Data Pengajuan</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/shift"><i class="mdi mdi-image-filter-tilt-shift"></i> Data Shift</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!--end menu-body-->
      </div>
      <!-- end main-menu-inner-->
    </div>
    <!-- end leftbar-tab-menu-->
    <!-- Top Bar Start -->
    <div class="topbar">
      <!-- Navbar -->
      <nav class="navbar-custom" id="navbar">
        <ul class="list-unstyled topbar-nav float-right mb-0">
          <li class="dropdown">
            <a
              class="nav-link dropdown-toggle nav-user"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="../assets/images/users/user-1.jpg"
                alt="profile-user"
                class="rounded-circle"
              />
              <span class="ml-1 nav-user-name hidden-sm"
                >Bagus <i class="mdi mdi-chevron-down"></i>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <!-- <a class="dropdown-item" href="/profile"><i class="dripicons-user text-muted mr-2"></i> Profile</a> -->
              <!-- <a class="dropdown-item" href="#"><i class="dripicons-wallet text-muted mr-2"></i> My Wallet</a>
              <a class="dropdown-item" href="#"><i class="dripicons-gear text-muted mr-2"></i> Settings</a>
              <a class="dropdown-item" href="#"><i class="dripicons-lock text-muted mr-2"></i> Lock screen</a> -->
              <!-- <div class="dropdown-divider"></div> -->
              <router-link class="dropdown-item bg-light" to="logout"><i class="dripicons-exit text-muted mr-2"></i> Logout</router-link>
            </div>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="nav-link"
              data-toggle="modal"
              data-animation="fade"
              data-target=".modal-rightbar"
            >
              <i data-feather="align-right" class="align-self-center"></i>
            </a>
          </li>
        </ul>
        <!--end topbar-nav-->
        <ul class="list-unstyled topbar-nav mb-0">
          <!-- <li>
            <a href="../analytics/analytics-index.html">
              <span class="responsive-logo">
                <img
                  src="../assets/images/logo-sm.png"
                  alt="logo-small"
                  class="logo-sm align-self-center"
                  height="34"
                />
              </span>
            </a>
          </li> -->
          <li>
            <button class="button-menu-mobile nav-link" @click="menubar" id="menubar">
              <svg width="30px" height="auto" viewBox="0 0 16 16" class="bi bi-justify" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </li>
          <li class="dropdown">
            <!-- <a
              class="nav-link dropdown-toggle nav-user"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <span class="ml-1 p-2 bg-soft-classic nav-user-name hidden-sm rounded" >System <i class="mdi mdi-chevron-down"></i></span>
            </a> -->
            <div class="dropdown-menu dropdown-xl dropdown-menu-left p-0">
              <div class="row no-gutters">
                <div class="col-12 col-lg-6">
                  <div class="text-center system-text">
                    <h4 class="text-white">The Poworfull Dashboard</h4>
                    <p class="text-white">See all the pages Metrica.</p>
                    <a
                      href="https://mannatthemes.com/metrica/"
                      class="btn btn-sm btn-pink mt-2"
                      >See Dashboard</a
                    >
                  </div>
                  <div
                    id="carouselExampleFade"
                    class="carousel slide carousel-fade"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="../assets/images/dashboard/dash-1.png"
                          class="d-block img-fluid"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="../assets/images/dashboard/dash-4.png"
                          class="d-block img-fluid"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="../assets/images/dashboard/dash-2.png"
                          class="d-block img-fluid"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="../assets/images/dashboard/dash-3.png"
                          class="d-block img-fluid"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!--end col-->
                <div class="col-12 col-lg-6">
                  <div class="divider-custom mb-0">
                    <div class="divider-text bg-light">All Dashboard</div>
                  </div>
                  <div class="p-4">
                    <div class="row">
                      <div class="col-6">
                        <a
                          class="dropdown-item mb-2"
                          href="../analytics/analytics-index.html"
                        >
                          Analytics</a
                        >
                        <a
                          class="dropdown-item mb-2"
                          href="../crypto/crypto-index.html"
                        >
                          Crypto</a
                        >
                        <a
                          class="dropdown-item mb-2"
                          href="../crm/crm-index.html"
                        >
                          CRM</a
                        >
                        <a
                          class="dropdown-item"
                          href="../projects/projects-index.html"
                        >
                          Project</a
                        >
                      </div>
                      <div class="col-6">
                        <a
                          class="dropdown-item mb-2"
                          href="../ecommerce/ecommerce-index.html"
                        >
                          Ecommerce</a
                        >
                        <a
                          class="dropdown-item mb-2"
                          href="../helpdesk/helpdesk-index.html"
                        >
                          Helpdesk</a
                        >
                        <a
                          class="dropdown-item"
                          href="../hospital/hospital-index.html"
                        >
                          Hospital</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
          </li>
          <!-- <li class="hide-phone app-search">
            <form role="search" class="">
              <input
                type="text"
                id="AllCompo"
                placeholder="Search..."
                class="form-control"
              />
              <a href=""><i class="fas fa-search"></i></a>
            </form>
          </li> -->
        </ul>
      </nav>
      <!-- end navbar-->
    </div>
    <!-- Top Bar End -->
    <!-- end page-wrapper -->
    <div class="modaladd" id="modaladd">
      <div class="cardmodal">
        <div class="headermodal">
          <h3>Tambah Pegawai</h3>
          <i class="mdi mdi-window-close closemodal" @click="closemodal"></i>
        </div>
        <div class="bodyform">
          <form @submit.prevent="addUser">
             <div class="row">
              <div class="col-lg-12 inputs">
                <div class="form-group row">
                  <label for="email" class="col-sm-2 col-form-label text-right">Email</label>
                  <div class="col-sm-10">
                    <input type="email" id="email" required v-model="add.email" class="form-control" placeholder="Enter Email">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="username" class="col-sm-2 col-form-label text-right">Username</label>
                  <div class="col-sm-10">
                    <input required type="text" id="username" v-model="add.username" class="form-control" placeholder="Enter Username">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="password" class="col-sm-2 col-form-label text-right">Password</label>
                  <div class="col-sm-10">
                    <input required type="password" id="password" v-model="add.password" class="form-control" placeholder="Enter Password">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="fullname" class="col-sm-2 col-form-label text-right">Fullname</label>
                  <div class="col-sm-10">
                    <input required type="text" id="fullname" v-model="add.fullname" class="form-control" placeholder="Enter Fullname">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="agencyname" class="col-sm-2 col-form-label text-right">Agency Name</label>
                  <div class="col-sm-10">
                    <input required type="text" id="agencyname" v-model="add.agencyName" class="form-control" placeholder="Enter Agency Name">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="agencyrole" class="col-sm-2 col-form-label text-right">Agency Role</label>
                  <div class="col-sm-10">
                    <input required type="text" id="agencyrole" v-model="add.agencyRole" class="form-control" placeholder="Enter Agency Role">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="#" class="col-sm-2 col-form-label text-none"></label>
                  <div class="buttons">
                    <button type="submit" class="btn text-white btn-sm btn-primary">Submit</button>
                    <button type="button" class="btn text-white btn-sm btn-danger" @click="closemodal">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modaladd" id="absensi">
      <div class="cardmodal">
        <div class="headermodal">
          <h3>Tambah Agenda</h3>
          <i class="mdi mdi-window-close closemodal" @click="closemodal"></i>
        </div>
        <div class="bodyform">
          <form action="">
             <div class="row">
              <div class="col-lg-12">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label text-right">Rayon</label>
                  <div class="col-sm-10">
                    <select class="custom-select">
                      <option selected="">- Pilih -</option>
                      <option value="1">DPP</option>
                      <option value="2">DPW / DPD</option>
                      <option value="3">DPC / PKH</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-sm-2 col-form-label text-right">Wilayah</label>
                  <div class="col-sm-10">
                    <select class="custom-select">
                      <option selected="">- Pilih -</option>
                      <option value="1">Jakarta</option>
                      <option value="2">Bali</option>
                      <option value="3">Depok</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="acara" class="col-sm-2 col-form-label text-right">Acara</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="acara">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="waktu" class="col-sm-2 col-form-label text-right">Waktu</label>
                  <div class="col-sm-10">
                    <input type="datetime-local" class="form-control" id="waktu">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="tempat" class="col-sm-2 col-form-label text-right">Tempat</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="tempat">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="contactPerson" class="col-sm-2 col-form-label text-right">Contact Person</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="contactPerson">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="noHP" class="col-sm-2 col-form-label text-right">No. HP</label>
                  <div class="col-sm-10">
                    <input type="tel" class="form-control" id="noHP">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="#" class="col-sm-2 col-form-label text-none"></label>
                  <div class="buttons">
                    <button type="submit" class="btn btn-sm btn-primary">Submit</button>
                    <button type="button" class="btn btn-sm btn-danger">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modaladd" id="isianiuran">
      <div class="cardmodal">
        <div class="headermodal">
          <h3>Tambah Iuran</h3>
          <i class="mdi mdi-window-close closemodal" @click="closemodal"></i>
        </div>
        <div class="bodyform">
          <form action="">
             <div class="row">
              <div class="col-lg-12">
                <div class="form-group row">
                  <label for="waktuMulai" class="col-sm-2 col-form-label text-right">Waktu Mulai</label>
                  <div class="col-sm-10">
                    <input type="datetime-local" class="form-control" id="waktuMulai">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="waktuSelesai" class="col-sm-2 col-form-label text-right">Waktu Selesai</label>
                  <div class="col-sm-10">
                    <input type="datetime-local" class="form-control" id="waktuSelesai">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="hargaPerbulan" class="col-sm-2 col-form-label text-right">Harga Perbulan</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="hargaPerbulan">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="#" class="col-sm-2 col-form-label text-none"></label>
                  <div class="buttons">
                    <button type="submit" class="btn btn-sm btn-primary">Submit</button>
                    <button type="button" class="btn btn-sm btn-danger">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modaladd" id="iuranregistrasi">
      <div class="cardmodal">
        <div class="headermodal">
          <h3>Tambah Iuran</h3>
          <i class="mdi mdi-window-close closemodal" @click="closemodal"></i>
        </div>
        <div class="bodyform">
          <form action="">
             <div class="row">
              <div class="col-lg-12">
                <div class="form-group row">
                  <label for="waktuMulai" class="col-sm-2 col-form-label text-right">Waktu Mulai</label>
                  <div class="col-sm-10">
                    <input type="datetime-local" class="form-control" id="waktuMulai">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="waktuSelesai" class="col-sm-2 col-form-label text-right">Waktu Selesai</label>
                  <div class="col-sm-10">
                    <input type="datetime-local" class="form-control" id="waktuSelesai">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="hargaPerbulan" class="col-sm-2 col-form-label text-right">Harga Perbulan</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="hargaPerbulan">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="#" class="col-sm-2 col-form-label text-none"></label>
                  <div class="buttons">
                    <button type="submit" class="btn btn-sm btn-primary">Submit</button>
                    <button type="button" class="btn btn-sm btn-danger">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import Axios from 'axios';
import qs from 'qs';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      add: {
        email: '',
        username: '',
        fullname: '',
        password: '',
        agencyName: '',
        agencyRole: '',
      },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidXNlcmRlbW8xQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidXNlcmRlbW8xIiwiZnVsbG5hbWUiOiJBa3VuIERlbW8iLCJhZ2VuY3lfbmFtZSI6IlBUIENvYmEgQ29iYSIsImFnZW5jeV9yb2xlIjoiQWRtaW5pc3RyYXRvciIsImFnZW5jeV90eXBlIjoiYWRtaW4iLCJkYXRhX2ZhY2UiOjAsImRhdGFfYmlvbWV0cmljcyI6MCwiZGF0YV9kZXZpY2VzIjoiMmViOGRkM2U4ZGRiYzIyMC1zYW1zdW5nLUhhbmRzZXQifSwiaWF0IjoxNjA3MDc1MjY5LCJleHAiOjE2MDc2ODAwNjl9.ApS3u-nm7COQIQL9qRNpPCgOhWOvy4buLU9UzhCFGew',
    };
  },
  methods: {
    addUser() {
      const req = {
        email: this.add.email,
        username: this.add.username,
        fullname: this.add.fullname,
        password: this.add.password,
        agency_name: this.add.agencyName,
        agency_role: this.add.agencyRole,
      };
      Axios.post('https://siraos.itopsp3.my.id/api/admin/postCreateAccount', qs.stringify(req), {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.success === false) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.data.message,
            });
          } else {
            Swal.fire(
              'Good job!',
              res.data.message,
              'success',
            ).then((result) => {
              console.log(result);
              if (result.isConfirmed) {
                this.$router.go();
              }
            })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closemodal() {
      document.getElementById('iuranregistrasi').classList.remove('d-flex');
      document.getElementById('isianiuran').classList.remove('d-flex');
      document.getElementById('modaladd').classList.remove('d-flex');
      document.getElementById('tambahuser').classList.remove('d-flex');
      console.log('close');
    },
    menubar() {
      document.getElementById('navbar').classList.toggle('m-0');
      document.getElementById('sidebar').classList.toggle('left200');
      document.getElementById('content').classList.toggle('w-100');
    },
    show() {
      document.getElementById('arrowup').classList.toggle('d-none');
      document.getElementById('arrowdown').classList.toggle('d-block');
      document.getElementById('second').classList.toggle('d-block');
    },
  },
};
</script>

<style>
.logos{
  width: 40px;
  /* height: 45px; */
}
.topbar{
  z-index: 10;
}
.topbar-left{
  z-index: 11;
}
.inputs .form-group{
  margin: 0;
}
.imgkonfirmasi img{
  width: 80px;
}
.buttons{
  display: flex;
  padding: 0 10px;
  /* justify-content: center; */
}
.buttons button{
  padding: 5px 20px;
  margin-right: 10px;
}
.closemodal{
  cursor: pointer;
}
.modaladd{
  display: none;
  position: fixed;
  z-index: 25;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}
.cardmodal{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  border-radius: 10px;
  width: 45%;
  height: auto;
  background: white;
}
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

.headermodal{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #999;
}
.headermodal i{
  font-size: 25px;
}
.judulhead{
  display: flex;
  justify-content: space-between;
}
.bodyform{
  padding: 30px 30px;
}
td button{
  line-height: normal;
  padding: 0 5px !important;
}
td i{
  line-height: normal;
  font-size: 22px;
}
#arrowdown{
  display: none;
}
#second{
  height: 0;
  display: none;
  padding: 0 0 0 50px;
  transition: all 1s ease;
}
.d-none{
  display: none !important;
}
.d-block{
  height: auto !important;
  display: block !important;
}
#datatable_filter, #datatable2_filter, #datatable3_filter, #datatable4_filter, #row_callback_filter{
  display: flex;
  justify-content: flex-end;
}
.left200{
  left: -200px !important;
}
.m-0{
  margin: 0;
}
.main-menu-inner{
  left: 0;
  z-index: 20;
}
.navbar-custom{
  margin-left: 200px;
}
.page-content-tab{
  width: calc(100% - 200px);
}
.containers{
  padding: 0 20px;
}
@media (max-width: 1024px){
  .cardmodal{
    width: 90%;
  }
  .topbar .navbar-custom {
    margin-left: 0;
  }
  #sidebar{
    left: -200px;
  }
  .left200{
    left: 0 !important;
  }
  #content{
    width: 100% !important;
  }
  .col-form-label{
    text-align: left !important;
  }
}
.card-body{
  overflow-x: auto;
}
table{
  overflow-x: auto;
}
</style>
