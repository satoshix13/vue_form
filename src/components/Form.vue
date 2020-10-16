<template>
   <div id="container">
      <div class="container">
        <form action="post" @submit.prevent="submitHandler">
          <div class="row">
            <div class="col-25">
              <label for="fname">Фамилия*</label>
            </div>
            <div class="col-75 test">
              <input v-model.trim="form.familyName"
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
                v-model.trim="form.name"
                :class="$v.form.name.$error ? 'is-invalid' : '' "
              />
               <p v-if="$v.form.familyName.$dirty && !$v.form.name.required" class="feedback">это поле обязательное</p>
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
                :class="$v.form.bday.$error ?  'is-invalid' : ''"
                v-model.trim="form.bday"
              />
               <p v-if="$v.form.bday.$dirty && !$v.form.bday.required" class="feedback">это поле обязательное</p>
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
              <p v-if="$v.form.tel.$dirty && !$v.form.tel.elevenDigits" class="feedback">Должно быть 11 цифр</p>
              <p v-if="$v.form.tel.$dirty && !$v.form.tel.startsWith" class="feedback">Номер должен начинаться с 7</p>
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
          <div class="row">
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
          </div>
           <!-- <div class="row">
            <div class="col-25">
              <label for="сlients">Группа клиентов*</label>
            </div>
            <div class="col-75">
              <div class="form-check">
                <input type="checkbox" name="selectednames[]" value = "VIp" />
                <input type="checkbox" name="selectednames[]" value = "2" />
                <input type="checkbox" name="selectednames[]" value = "3" />
                <input type="checkbox" name="selectednames[]" value = "4" />
            </div>
            </div>
          </div> -->



          <div class="row">
            <div class="col-25">
              <label for="doctor">Лечащий врач</label>
            </div>
            <div class="col-75">
              <select id="doctor" name="doctor">
                <option value="Ivanov">Иванов</option>
                <option value="Zaharov">Захаров</option>
                <option value="Chernishev">Чернышева</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="sms">смс</label>
            </div>
            <div class="col-75">
              <div>
                <input type="checkbox" id="sms" name="sms"
                       checked>
                <label for="sms">Не отправлять</label>
              </div>
            </div>
          </div>

          <hr />

            <div class="row">
            <div class="col-25">
              <label for="index">Индекс</label>
            </div>
            <div class="col-75">
              <input
                type="number"
                id="index"
                name="index"

              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="country">Страна</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="country"
                name="country"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="region">Область</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="region"
                name="region"
      
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="city">Город*</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="city"
                name="city"
                v-model.trim="form.city"
                :class="$v.form.city.$error ?  'is-invalid' : ''"
              />
              <p v-if="$v.form.city.$dirty && !$v.form.city.required" class="feedback">это поле обязательное</p>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="street">Улица</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="street"
                name="street"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="house">Дом</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="house"
                name="house"
              />
            </div>
          </div>

          <hr />
        
        <div class="row">
            <div class="col-25">
              <label for="document">Тип документа*</label>
            </div>
            <div class="col-75">
              <select id="document" name="document" required>
                <option value="pas">Паспорт</option>
                <option value="certificate">Свидетельство о Рождении</option>
                <option value="license">Вод. удостоверение</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="seria">Серия</label>
            </div>
            <div class="col-75">
              <input
                type="number"
                id="seria"
                name="seria"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="pasnumber">Номер</label>
            </div>
            <div class="col-75">
              <input
                type="number"
                id="pasnumber"
                name="pasnumber"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="issuedby">Кем выдан</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="issuedby"
                name="issuedby"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="issuedate">Дата выдачи*</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="issuedate"
                name="issuedate"
                placeholder="12.09.2010"
                v-model.trim="form.issuedate"
                :class="$v.form.issuedate.$error ?  'is-invalid' : ''"
              />
              <p v-if="$v.form.issuedate.$dirty && !$v.form.issuedate.required" class="feedback">это поле обязательное</p>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>*Поле обязательное для заполнения.</label>
            </div>
            <input type="submit" value="Отправить" />
          </div>
          <div v-if="success" class="successMsg">
                <h2>Форма была успешна отправлена</h2>
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
        name:"",
        bday:"",
        familyName: "",
        city: "",
        issuedate: "",
      },
      success: false,
    }
  },
  validations: {
     form: {
       familyName: { required },
       name: { required },
       bday: { required },
       city: { required },
       tel: { elevenDigits, startsWith },
       issuedate: { required }
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
  color: green;
  margin-top: 20px;
  border: 3px solid;
  border-color: green;
  display: inline-block;
}

.is-invalid {
  border: 1px solid;
  border-color: red;
}

.feedback {
  color: red;
}
</style>