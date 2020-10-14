<template>
   <div id="container">
      <div class="container">
        <form action="post" @submit.prevent="submitHandler">
          <div class="row">
            <div class="col-25">
              <label for="fname">Фамилия*</label>
            </div>
            <div class="col-75 test">
              <input v-model="familyName"
                type="text"
                id="fname"
                name="firstname"
              />
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
              <input v-model="tel"
                type="number"
                id="tel"
                name="tel"
                placeholder="7"
                :class="{invalid: ($v.tel.$dirty && !$v.tel.maxLength && !$v.tel.minLength)}"
             
              />
              <small v-if="$v.tel.$dirty && !$v.tel.minLength && !$v.tel.maxLength">должно быть 11 цифр</small>
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
          </div>



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
              
              />
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
              <select id="document" name="document">
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
               
              />
            </div>
          </div>
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
export default {
  name: "Form",
  data(){
    return {
      tel: "",
      familyName: "",

    }
  },
  validations: {
     tel: { maxLength: maxLength(11), minLength: minLength(11)},
     familyName: {}
  },
  methods: {
    submitHandler(){
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
    }
  }
}
</script>