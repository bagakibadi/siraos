<script>
export default {
  name: 'Logout',
  created() {
    localStorage.clear();
    this.$router.replace('/login');
  },
};
</script>
