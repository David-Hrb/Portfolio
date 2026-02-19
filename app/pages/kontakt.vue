
<template>
  <section class="mt-32">
    <UContainer class="max-w-6xl w-[90%] md:w-[80%] mb-20">
      <div class="form-container">
        <Uform @submit.prevent="handleSubmit" v-if="status !== 'success'">
          <div>
            <label for="email">Váš e-mail:</label>
            <UInput 
              id="email"
              v-model="form.email" 
              type="email" 
              required 
              placeholder="jmeno@domena.cz"
            />
          </div>

          <div>
            <label for="message">Zpráva:</label>
            <textarea 
              id="message"
              v-model="form.message" 
              required 
              placeholder="Jak vám mohu pomoci?"
            ></textarea>
          </div>

          <button type="submit" :disabled="status === 'loading'">
            {{ status === 'loading' ? 'Odesílám...' : 'Poslat zprávu' }}
          </button>

          <p v-if="status === 'error'" class="error">
            Něco se nepovedlo. Zkuste to prosím znovu.
          </p>
        </Uform>

        <div v-else class="success-message">
          <h3>Díky! Zpráva byla úspěšně odeslána.</h3>
          <p>Ozvu se vám co nejdříve zpět na {{ latestEmail }}</p>
          <button @click="status = 'idle'">Poslat další zprávu</button>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface ContactForm {
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const form = reactive<ContactForm>({
  email: '',
  message: '',
});

const latestEmail = ref<string>('');

const status = ref<FormStatus>('idle');

const handleSubmit = async (): Promise<void> => {
  status.value = 'loading';

  try {
    await $fetch('https://formspree.io/f/mnjbbaqw', {
      method: 'POST',
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    });

    status.value = 'success';
    latestEmail.value = form.email;
    form.email = '';
    form.message = '';
  } catch (error: unknown) {
    status.value = 'error';
    console.error('Chyba při odesílání:', error);
  }
};
</script>

<style scoped>
.form-container { 
  max-width: 400px; 
  margin: 2rem auto; 
  font-family: sans-serif;
}

input, textarea { 
  width: 100%; 
  margin-bottom: 1rem; 
  padding: 0.5rem; 
  display: block; 
  border: 1px solid #ccc;
  border-radius: 4px;
}

button { 
  cursor: pointer; 
  padding: 0.7rem 1.5rem; 
  background-color: #00dc82; /* Nuxt zelená */
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error { 
  color: #e63946; 
  margin-top: 1rem;
}

.success-message { 
  text-align: center; 
  padding: 2rem;
  border: 2px solid #00dc82;
  border-radius: 8px;
}
</style>