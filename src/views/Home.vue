<template>
	<div class="home">
		<div class="container">
			<form @submit.prevent="addContact" action="post">
				<div class="inputs-row">
					<label class="input">
						<span>Имя:</span>
						<input type="text" name="name" v-model="form.name" />
					</label>
					<label class="input">
						<span>Телефон:</span>
						<input type="tel" name="tel" v-model="form.tel" />
					</label>
				</div>
				<div class="inputs-row" v-for="(bf, idx) of form.bonusFields" :key="bf">
					<label class="input">
						<span>Дополнительное поле {{ idx + 1 }}:</span>
						<input
							type="text"
							required
							:name="bf.name"
							v-model="bf.name"
							placeholder="Введите название поля"
						/>
					</label>
					<label class="input">
						<input
							type="tel"
							v-model="bf.value"
							placeholder="Введите значение"
						/>
					</label>
				</div>
				<div class="btns-row">
					<div tabindex="0" @click="addField" class="btn">
						<img src="@/assets/images/plus.svg" alt="" />
						Добавить поле
					</div>
					<button type="submit" class="btn btn_green">
						Добавить контакт
					</button>
				</div>
			</form>
			<hr class="separator" />
			<contactsList></contactsList>
		</div>
	</div>
</template>

<script>
import contactsList from "@/components/Contacts-list";

export default {
	components: { contactsList },
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
	methods: {
		addField() {
			let field = {
				name: "",
				value: "",
			};
			this.form.bonusFields.push(field);
		},
		addContact() {
			const contact = {
				name: this.form.name,
				tel: this.form.tel,
				bonusFields: this.form.bonusFields,
				id: Date.now(),
			};
			this.$store.dispatch("createContact", contact);
			this.form.name = "";
			this.form.tel = "";
			this.form.bonusFields = [];
		},
	},
};
</script>

<style lang="scss" scoped>
.home {
	margin-top: 60px;
}
.inputs-row {
	margin-bottom: 20px;
}

.separator {
	margin: 45px 0;
	border: 1px solid #959595;
}
</style>
