<template>
  <section class="relative mt-32 flex justify-center overflow-hidden px-6 pb-24">

    <!-- Ambient glow background -->
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div class="h-[500px] w-[700px] rounded-full bg-primary-500/5 blur-[120px]" />
    </div>

    <div class="relative z-10 flex w-full max-w-2xl flex-col items-center gap-12">

      <!-- Header -->
      <div class="text-center">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-text-bright md:text-5xl">
          {{ $t('Contact.header') }}
        </h2>
        <p class="mx-auto max-w-md text-base leading-relaxed text-text-muted">
          {{ $t('Contact.paragraph') }}
        </p>

        <!-- Contact links -->
        <div class="flex flex-wrap gap-4 justify-center mt-6">
          <a
            href="https://github.com/David-Hrb"
            target="_blank"
            class="flex items-center gap-2 text-sm font-semibold text-[#B0B0B0] hover:text-primary-400 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.26.825-.58 0-.285-.01-1.04-.015-2.04-3.34.725-4.04-1.61-4.04-1.61-.545-1.385-1.33-1.755-1.33-1.755-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.995.11-.775.42-1.305.765-1.605-2.665-.305-5.467-1.335-5.467-5.935 0-1.31.465-2.38 1.235-3.22-.125-.305-.535-1.535.115-3.195 0 0 1.005-.32 3.295 1.23a11.48 11.48 0 013-.405c1 .005 2 .135 3 .405 2.29-1.55 3.295-1.23 3.295-1.23.655 1.66.245 2.89.12 3.195.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.815 1.105.815 2.225v3.295c0 .315.215.685.825.57C20 23.5 24 18.5 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            {{ $t('Contact.github') }}
          </a>
          <a
            href="https://www.linkedin.com/in/david-hrb%C3%A1%C4%8Dek-6113633b0/"
            target="_blank"
            class="flex items-center gap-2 text-sm font-semibold text-[#B0B0B0] hover:text-primary-400 transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 128 128">
              <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
            </svg>
            {{ $t('Contact.linkedin') }}
          </a>
          <button
            @click="copyEmail"
            class="cursor-pointer flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
            :class="emailCopied ? 'text-primary-400' : 'text-[#B0B0B0] hover:text-primary-400'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            {{ emailCopied ? $t('Contact.emailCopied') : $t('Contact.email') }}
          </button>
        </div>
      </div>

      <div class="w-full rounded-3xl border border-white/10 bg-surface/40 p-8 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-500 hover:border-white/20 md:p-12">

        <UForm v-if="status !== 'success'" :state="form" @submit="handleSubmit" class="flex flex-col gap-7">

          <UFormGroup name="email">
            <label class="mb-2 block text-center text-xl font-bold uppercase tracking-[0.15em] text-text-bright">
              {{ $t('Contact.emailLabel') }}
            </label>
            <UInput
              v-model="form.email"
              type="email"
              :placeholder="$t('Contact.emailPlaceholder')"
              autoresize
              :rows="5"
              size="xl"
              variant="none"
              class="w-full"
              :ui="{
                wrapper: 'w-full',
                base: 'w-full rounded-xl border border-white/10 bg-bg-main/50 text-text-bright leading-relaxed transition-all placeholder:text-text-muted/30 focus:border-primary-500/60 focus:bg-bg-main/80 focus:ring-2 focus:ring-primary-500/15 focus:outline-none'
              }"
              required
            />
          </UFormGroup>

          <UFormGroup name="message" class="w-full">
            <label class="mb-2 block text-center text-xl font-bold uppercase tracking-[0.15em] text-text-bright">
              {{ $t('Contact.messageLabel') }}
            </label>

            <UTextarea
              v-model="form.message"
              :placeholder="$t('Contact.placeholder')"
              autoresize
              :rows="5"
              size="xl"
              variant="none"
              class="w-full"
              :ui="{
                wrapper: 'w-full',
                base: 'w-full rounded-xl border border-white/10 bg-bg-main/50 text-text-bright leading-relaxed transition-all placeholder:text-text-muted/30 focus:border-primary-500/60 focus:bg-bg-main/80 focus:ring-2 focus:ring-primary-500/15 focus:outline-none'
              }"
              required
            />
          </UFormGroup>

          <p v-if="status === 'error'" class="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm font-semibold text-red-400">
           {{ $t('Contact.formError') }}
          </p>

          <div class="flex justify-center pt-1">
            <button
              type="submit"
              :disabled="status === 'loading'"
              class="inline-flex cursor-pointer items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#E0E0E0] text-[#111111] font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span>{{ status === 'loading' ? 'Odesílám…' : $t('Contact.submitLabel') }}</span>
              <span v-if="status !== 'loading'">&#8594;</span>
              <svg v-else class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
            </button>
          </div>

        </UForm>

        <div v-else class="flex flex-col items-center gap-6 py-10 text-center">
          <div class="flex h-20 w-20 items-center justify-center rounded-full border border-primary-500/30 bg-primary-500/10 ring-4 ring-primary-500/5">
            <UIcon name="i-heroicons-check-circle" class="h-11 w-11 text-primary-400" />
          </div>
          <div>
            <h3 class="text-2xl font-extrabold tracking-tight text-text-bright">
              Odesláno!
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-text-muted">
              {{ $t('Contact.successMessage') }}
              <br />
              <span class="mt-1 inline-block font-semibold text-primary-400">{{ latestEmail }}</span>
            </p>
          </div>
          <button
            @click="status = 'idle'"
            class="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/10 text-[11px] font-bold uppercase tracking-[0.14em] text-text-bright hover:border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            Poslat další zprávu
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ContactForm {
  email: string;
  message: string;
}

const form = reactive<ContactForm>({
  email: '',
  message: '',
});

const latestEmail = ref('');
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle');
const emailCopied = ref(false);

const copyEmail = async () => {
  await navigator.clipboard.writeText('hrbacekdavid.it@gmail.com');
  emailCopied.value = true;
  setTimeout(() => (emailCopied.value = false), 2000);
};

const handleSubmit = async () => {
  status.value = 'loading';
  try {
    await $fetch('https://formspree.io/f/mnjbbaqw', {
      method: 'POST',
      body: form,
      headers: { Accept: 'application/json' },
    });
    latestEmail.value = form.email;
    form.email = '';
    form.message = '';
    status.value = 'success';
  } catch {
    status.value = 'error';
  }
};
</script>