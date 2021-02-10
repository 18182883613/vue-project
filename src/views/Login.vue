<template>
  <div class="login">
    <p class="login-title">信息管理系统</p>
    <div class="login-content">
      <div class="login-main">
        <div class="login-container">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login()">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: 'admin',
        password: 'admin'
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    login () {
      const { name, password } = this.ruleForm
      if (name === 'admin' && password === 'admin') {
        // 缓存
        sessionStorage.setItem('username', name)
        // 路由跳转
        this.$router.push('/home')
      } else {
        alert('用户名和密码不匹配')
      }
    }
  }
}
</script>
