<template>
   <div id="container">
      <div class="container" :class="{ successMsg: success }">
        <form action="post" @submit.prevent="submitHandler">
          <div class="row">
            <div class="col-25">
              <label for="fname">Фамилия*</label>
            </div>
            <div class="col-75 test">
              <input v-model="form.familyName"
                type="text"
                id="fname"
                name="firstname"
                :class="$v.form.familyName.$error ? 'is-invalid' : '' "
              />
              <p v-if="$v.form.familyName.$dirty && !$v.form.familyName.required" class="feedback">это поле обязательное</p>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Имя*</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="3name">Отчество</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="3name"
                name="3name"

                
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="bday">Дата рождения*</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="bday"
                name="bday"
                placeholder="12.09.1992"
               
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="tel">Номер телефона*</label>
            </div>
            <div class="col-75">
              <input v-model="form.tel"
                type="number"
                id="tel"
                name="tel"
                placeholder="7"
                :class="$v.form.tel.$error ?  'is-invalid' : ''"
              />
              <p v-if="$v.form.tel.$dirty && !$v.form.tel.elevenDigits">Должно быть 11 цифр</p>
              <p v-if="$v.form.tel.$dirty && !$v.form.tel.startsWith">Номер должен начинаться с 7</p>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="gender">Пол</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="gender"
                name="gender"
              />
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-25">
              <label for="сlients">Группа клиентов*</label>
            </div>
            <div class="col-75">
              <select multiple="multiple" id="clients" name="clients" required>
                <option value="vip">Vip</option>
                <option value="problem">Проблемные</option>
                <option value="oms">ОМС</option>
              </select>
            </div>
          </div> -->

        
          <div class="row">
            <div class="col-25">
              <label>*Поле обязательное для заполнения.</label>
            </div>
            <input type="submit" value="Отправить" />
          </div>
        </form>
      </div>
    </div>
</template>



<script>
import { maxLength, minLength, required } from 'vuelidate/lib/validators'
import { elevenDigits, startsWith } from '../Validators/validators'
export default {
  name: "Form",
  data(){
    return {
      form: {
        tel: "",
        familyName: "",
      },
      success: false,
    }
  },
  validations: {
     form: {
       familyName: { required },
       tel: { elevenDigits, startsWith }
     }
  },
  methods: {
    submitHandler(){
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.success = true
      }
    }
  }
}
</script>

<style scoped>

.successMsg {
   display: none;
}

.is-invalid {
  border: 1px solid;
  border-color: red;
}

.feedback {
  color: red;
}
</style>