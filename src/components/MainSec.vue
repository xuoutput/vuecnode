<template>
    <div class="main">
        <!-- <p>main</p> -->
        <router-view name="main" class="content"/>
        <router-view name="sidebar" class="sidebar"/>
    </div>
</template>

<script>
export default {
  data() {
      return {
      }
    }
}
</script>

<style lang="less" scoped>
.main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;

    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;

    .content {
        order: 1;
        width: 73%;
    }
    .sidebar {
        order: 2;
        width: 25%;
    }
}


</style>