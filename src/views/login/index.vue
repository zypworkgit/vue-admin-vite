<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" class="login-form" :rules="rules">
      <div class="title-container">
        <h3 class="title">{{ $t("login.title") }}</h3>
      </div>
      <el-form-item label="账号：">
        <svg-icon iconName="user" class="svg-container"></svg-icon>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <svg-icon iconName="password" class="svg-container"></svg-icon>
        <el-input :type="passwordType" v-model="form.password"></el-input>
        <svg-icon
          :iconName="passwordType === 'password' ? 'eye' : 'eye-open'"
          @click="changeType"
        ></svg-icon>
      </el-form-item>
      <el-button type="primary" class="login-button" @click="handleLogin">{{
        $t("login.btnTitle")
      }}</el-button>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import svgIcon from "@/components/SvgIcon/index.vue";
import { usesUserStore } from "@/stores/user.js";

const userStore = usesUserStore();
const form = ref({
  username: "admin",
  password: "123456",
});
const formRef = ref(null);
const rules = ref({
  username: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur",
    },
  ],
});

const handleLogin = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await userStore.toLogin(form.value);
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};
const passwordType = ref("password");
const changeType = () => {
  if (passwordType.value === "password") {
    passwordType.value = "text";
  } else {
    passwordType.value = "password";
  }
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
