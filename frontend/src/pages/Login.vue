<template>
  <div class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">로그인</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
             @keyup.enter="submit()" v-model="state.form.email">
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
             @keyup.enter="submit()" v-model="state.form.password">
      <label for="floatingPassword">Password</label>
    </div>


    <button class="btn btn-primary w-100 py-2" @click="submit()">로그인</button>
    <p class="mt-5 mb-3 text-body-secondary">&copy; 2024.02 ~</p>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import store from "@/scripts/store";
import router from "@/scripts/router";

export default {
  setup() {
    const state = reactive({
      form: {
        email: '',
        password: ""
      }
    })
    const resetForm = () =>{
      state.form.email = '';
      state.form.password = ''
    }
    const submit = () => {
      axios.post("/api/account/login", state.form).then((res) => {
        store.commit('setAccount', res.data)
        console.log(res.data)
        sessionStorage.setItem("id", res.data)
        router.push({path: "/"})
        window.alert("로그인 하였습니다.")
      }).catch(() => {
        window.alert("로그인에 실패하였습니다. 다시 시도해주십시오")
        resetForm()
      })
    }
    return {state, submit}
  }
}

</script>


<style scoped>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>