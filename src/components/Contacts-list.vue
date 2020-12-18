<template>
  <ul class="contacts-list">
    <transition-group name="page" mode="out-in">
      <li class="contacts-item" v-for="contact of contacts" :key="contact.id">
        <div class="contacts-item__head">
          <h2>{{ contact.name }}</h2>
          <div class="btns-row">
            <router-link
              tag="div"
              tabindex="0"
              class="btn btn_s btn_green"
              :to="'/contacts/' + contact.id"
            >
              <img src="@/assets/images/pencil.svg" alt="Изменить контакт" />
            </router-link>
            <div
              @click="removeContact(contact.id)"
              tabindex="0"
              type="submit"
              class="btn btn_s btn_red"
            >
              <img src="@/assets/images/times.svg" alt="Удалить контакт" />
            </div>
          </div>
        </div>
        <h3>
          <span>Телефон: </span>
          <a :href="'tel:' + contact.tel"> {{ contact.tel }}</a>
        </h3>
        <ul class="contacts-item__list">
          <li v-for="field of contact.bonusFields" :key="field">
            <b>{{ field.name }}: </b>
            <span>{{ field.value }}</span>
          </li>
        </ul>
      </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  methods: {
    removeContact(id) {
      if (confirm("Вы уверены что хотите удалить контакт?")) {
        this.$store.dispatch("removeContact", id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts-list {
  .contacts-item:not(:last-child) {
    margin-bottom: 35px;
  }
}
.contacts-item {
  background: var(--grey);
  color: black;
  padding: 18px 40px;
  border-radius: 20px;
  transition: all ease 0.2s;

  &__head {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: normal;
  }
  a {
    text-decoration: none;
    color: var(--main-color);
    transition: all ease 0.16s;

    &:hover {
      color: var(--main-color_dark);
    }
  }

  &__list {
    margin-top: 15px;
  }
}
</style>
