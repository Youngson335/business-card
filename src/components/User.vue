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
@mixin flex-position($content, $align) {
  display: flex;
  justify-content: $content;
  align-items: $align;
}
.user {
  @include flex-position(start, start);
  padding: 30px;
}
@media (max-width: 600px) {
  .user {
    @include flex-position(center, center);
    flex-direction: column;
  }
  .user__avatar {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .user__description {
    font-size: 16px;
  }
  .user__avatar {
    width: 100%;
    max-width: 150px;
  }
}
</style>
