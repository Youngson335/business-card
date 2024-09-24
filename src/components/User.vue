<template>
  <div class="user">
    <UserAvatar />
    <UserInfo />
  </div>
</template>
<script>
import UserAvatar from "./UserAvatar.vue";
import UserInfo from "./UserInfo.vue";
export default {
  components: {
    UserAvatar,
    UserInfo,
  },
};
</script>
<style lang="scss">
.user {
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 30px;
}
</style>
