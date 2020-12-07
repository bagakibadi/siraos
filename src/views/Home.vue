<script>

export default {
  name: 'Home',
  created() {
    if (!localStorage.token) {
      this.$router.replace('/login');
    } else {
      this.$router.replace('/home');
    }
  },
};
</script>
