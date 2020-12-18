<template>
  <transition name="page" mode="out-in">
    <div class="home">
      <div class="container">
        <form @submit.prevent="saveContact" action="post">
          <h1>{{ form.name }}</h1>
          <label class="input">
            <span>Имя:</span>
            <input type="text" name="name" v-model="form.name" />
          </label>
          <label class="input">
            <span>Телефон:</span>
            <input type="tel" name="tel" v-model="form.tel" />
          </label>
          <div
            class="inputs-row"
            v-for="(bf, index) of form.bonusFields"
            :key="bf"
          >
            <label class="input">
              <span>Дополнительное поле {{ index + 1 }}</span>
              <input v-model="bf.name" placeholder="Введите название поля" />
            </label>
            <label class="input">
              <input v-model="bf.value" placeholder="Введите значение" />
            </label>
          </div>
          <div class="btns-row">
            <div tabindex="0" @click="addField" class="btn">
              <img src="@/assets/images/plus.svg" alt="" />
              Добавить поле
            </div>
            <button type="submit" class="btn btn_green">
              Сохранить изменения
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      form: {
        name: "",
        tel: "",
        bonusFields: [],
      },
    };
  },
  computed: {
    contact() {
      return this.$store.getters.getContactById(+this.$route.params.id);
    },
  },
  methods: {
    addField() {
      let field = {
        name: "",
        value: "",
      };
      this.form.bonusFields.push(field);
    },
    saveContact() {
      this.$store.dispatch("updateContact", {
        id: this.contact.id,
        ...this.form,
      });
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    this.form = this.contact;
    console.log(this.form);
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 60px;
}
h1 {
  margin-bottom: 40px;
}
.input {
  margin-bottom: 25px;
}
.separator {
  margin: 45px 0;
  border: 1px solid #959595;
}
</style>
