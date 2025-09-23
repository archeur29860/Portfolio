<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

// On découpe l’adresse pour éviter de l’avoir en clair
const user = "mchedotal.pro";
const domain = "gmail.com";

// Schéma de validation
const schema = yup.object({
  name: yup.string().required("Le nom est obligatoire"),
  phone: yup.string().matches(/^[0-9+ ]*$/, "Numéro invalide").nullable(),
  object: yup.string().required("L'objet est obligatoire"),
  message: yup.string().required("Le message est obligatoire"),
});

// On configure le form avec vee-validate
const { handleSubmit, defineField, errors } = useForm({
  validationSchema: schema,
});

// Champs du formulaire
const [name, nameAttrs] = defineField("name");
const [phone, phoneAttrs] = defineField("phone");
const [object, objectAttrs] = defineField("object");
const [message, messageAttrs] = defineField("message");

// Fonction d’envoi
const onSubmit = handleSubmit((values) => {
  const subject = encodeURIComponent(`Contact portfolio - ${values.object}`);
  const body = encodeURIComponent(
    `Nom: ${values.name}\nTéléphone: ${values.phone || "N/A"}\n\n${values.message}`
  );
  const mailto = `mailto:${user}@${domain}?subject=${subject}&body=${body}`;
  window.open(mailto, "_blank");
});
</script>

<template>
  <div class="contactForm-wrapper">
    <div class="side-paragraph">
        <div class="side-paragraph-main">Mon profil vous intéresse ?</div>
        <div class="side-paragraph-sub">Posez des questions</div>
        </div>
    <form class="contactForm-form" @submit.prevent="onSubmit">
      <div class="contactForm-title">Entamez la conversation</div>
      <div class="contactForm-subtitle">Prenez contact</div>

      <input
        class="contactForm-input"
        v-model="name"
        v-bind="nameAttrs"
        placeholder="Nom"
      />
      <span class="error">{{ errors.name }}</span>

      <input
        class="contactForm-input"
        v-model="phone"
        v-bind="phoneAttrs"
        placeholder="Téléphone"
      />
      <span class="error">{{ errors.phone }}</span>

      <input
        class="contactForm-input"
        v-model="object"
        v-bind="objectAttrs"
        placeholder="Objet"
      />
      <span class="error">{{ errors.object }}</span>

      <textarea
        class="contactForm-input"
        v-model="message"
        v-bind="messageAttrs"
        placeholder="Votre message"
      ></textarea>
      <span class="error">{{ errors.message }}</span>

      <button class="contactForm-submitButton" type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped>
.contactForm-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding : 5rem;
}

.contactForm-form {
  box-sizing: border-box;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 2rem;
  gap: 1rem;
  background-color: color-mix(in srgb, var(--primary-color) 5%, transparent);
}

.contactForm-title {
    font-weight: bold;
  font-size: 3rem;
}

.contactForm-subtitle {
    font-weight: lighter;
    font-size: 2rem;
    opacity: 0.75;
}

.contactForm-input {
    cursor: none;
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: "clash display", sans-serif;
    background-color: color-mix(in srgb, var(--primary-color) 5%, transparent);
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    min-width: auto;
}

.contactForm-input::placeholder {
    color: var(--text-color);
    opacity: 0.5;
}

textarea.contactForm-input {
    resize: vertical;
    cursor: none;
}

.contactForm-submitButton {
    cursor: none;
    border: none;
    border-radius: 1rem;
    color: var(--text-color);
    font-family: "clash display", sans-serif;
    font-weight: bold;
    font-size: 2rem;
    padding: 1rem;
    background-color: var(--secondary-color);
}

.error {
  color: red;
  font-size: 1rem;
}

.side-paragraph {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    /* padding: 2rem; */
    gap: 1rem;
}

.side-paragraph-main {
    display: flex;
    flex-wrap: wrap;
    font-size: 6rem;
    font-weight: bold;
}

.side-paragraph-sub {
    display: flex;
    flex-wrap: wrap;
    font-size: 2rem;
    font-weight: lighter;
    opacity: 0.75;
}
</style>
