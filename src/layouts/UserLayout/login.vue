<template>
  <div class="login-form">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
      <el-form-item prop="userId">
        <el-input v-model.number="loginForm.userId" placeholder="userId">
          <i slot="prefix"><label class="input-label">userId</label></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="loginForm.pass"
          placeholder="password"
          autocomplete="off"
        >
          <i slot="prefix"><label class="input-label">password</label></i>
        </el-input>
      </el-form-item>
      <el-form-item class="save-change">
        <el-checkbox v-model="saveId">Save online ID</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="sign-btn"
          @click="submitForm('loginForm')"
          >Sign In</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkUserId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("userId不能为空"));
      }
      if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (value.length < 6) {
          callback(new Error("密码不能少于6位"));
        }
        callback();
      }
    };
    return {
      loginForm: {
        userId: "",
        pass: ""
      },
      loginRules: {
        userId: [{ validator: checkUserId, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      },
      saveId: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/user/login-text");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
.login-form {
  .el-form-item {
    position: relative;
    .el-input__inner:placeholder-shown::placeholder {
      color: transparent;
    }
    /* 线框样式label定位 */
    .el-input__inner:not(:placeholder-shown) ~ .el-input__prefix,
    .el-input__inner:focus ~ .el-input__prefix {
      .input-label {
        color: #2486ff;
        transform: scale(0.85) translate(-2px, -26px);
      }
    }
    /* 线框交互下有个白色背景 */
    .el-input__inner ~ .el-input__prefix {
      .input-label {
        background-color: #fff;
        font-size: 14px;
      }
    }
    .el-input__prefix {
      .input-label {
        position: absolute;
        left: 15px;
        top: 2px;
        height: 90%;
        font-size: 14px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.login-form {
  width: 60%;
  // border: 1px solid red;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  .sign-btn {
    width: 100%;
  }
}
</style>
