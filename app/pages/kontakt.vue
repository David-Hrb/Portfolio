<template>
  <section class="relative mt-32 flex justify-center overflow-hidden px-6 pb-24">
    <div class="relative z-10 flex w-full max-w-2xl flex-col items-center gap-10">
      <div class="text-center">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-text-bright md:text-5xl">
          {{ $t('Contact.header') }}
        </h2>
        <p class="mx-auto max-w-md text-lg italic leading-relaxed text-text-muted">
          {{ $t('Contact.paragraph') }}
        </p>
      </div>
      <div class="w-100 rounded-2xl border border-white/10 bg-surface/50 p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] md:p-12">
        <UForm v-if="status !== 'success'" :state="form" @submit="handleSubmit" class="flex flex-col items-center gap-8">
          <UFormGroup name="email">
            <span class="mb-2 block text-center text-xl font-bold uppercase tracking-[0.15em] text-text-bright">
              {{ $t('Contact.emailLabel') }}
            </span>
            <UInput
              v-model="form.email"
              type="email"
              placeholder="jmeno@domena.cz"
              size="xl"
              variant="none"
              :ui="{
                base: 'w-full rounded-xl border border-white/10 bg-bg-main/60 text-center text-text-bright transition-all placeholder:text-text-muted/40 focus:border-primary-500 focus:bg-bg-main/85 focus:ring-2 focus:ring-primary-500/20 focus:outline-none',
              }"
              required
            />
          </UFormGroup>

          <UFormGroup name="message">
            <template #label>
              <span class="mb-2 block text-center text-[11px] font-bold uppercase tracking-[0.15em] text-text-bright">
                {{ $t('Contact.messageLabel') }}
              </span>
            </template>
            <UTextarea
              v-model="form.message"
              placeholder="Jak vám mohu pomoci?"
              autoresize
              :rows="5"
              size="xl"
              variant="none"
              :ui="{
                base: 'w-full rounded-xl border border-white/10 bg-bg-main/60 text-center text-text-bright leading-relaxed transition-all placeholder:text-text-muted/40 focus:border-primary-500 focus:bg-bg-main/85 focus:ring-2 focus:ring-primary-500/20 focus:outline-none',
              }"
              required
            />
          </UFormGroup>

          <p v-if="status === 'error'" class="text-center text-sm font-bold text-red-400">
            Něco se nepovedlo. Zkuste to prosím znovu.
          </p>

          <div class="flex justify-center pt-2">
            <UButton
              type="submit"
              :loading="status === 'loading'"
              variant="solid"
              size="xl"
              class="rounded-full px-12 text-[13px] font-extrabold uppercase tracking-[0.12em] text-bg-main shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] active:scale-95"
            >
              {{ status === 'loading' ? 'Odesílám…' : ($t('Contact.submitLabel') || 'Poslat zprávu') }}
              <template #trailing>
                <UIcon v-if="status !== 'loading'" name="i-heroicons-paper-airplane" class="h-5 w-5" />
              </template>
            </UButton>
          </div>

        </UForm>
        <div v-else class="flex flex-col items-center gap-6 py-10 text-center">
          <div class="flex h-20 w-20 items-center justify-center rounded-full border border-primary-500/30 bg-primary-500/10">
            <UIcon name="i-heroicons-check-circle" class="h-11 w-11 text-primary-400" />
          </div>
          <div>
            <h3 class="text-2xl font-extrabold tracking-tight text-text-bright">
              Odesláno!
            </h3>
            <p class="mt-2 italic text-text-muted">
              Díky, ozvu se vám co nejdříve na
              <span class="font-semibold not-italic text-primary-400">{{ latestEmail }}</span>.
            </p>
          </div>
          <UButton
            variant="ghost"
            class="rounded-full border border-white/10 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-text-bright hover:border-white/20 hover:bg-white/5"
            @click="status = 'idle'"
          >
            Poslat další zprávu
          </UButton>
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

const handleSubmit = async () => {
  status.value = 'loading';
  try {
    await $fetch('https://formspree.io/f/mnjbbaqw', {
      method: 'POST',
      body: form,
      headers: { 'Accept': 'application/json' }
    });
    latestEmail.value = form.email;
    form.email = '';
    form.message = '';
    status.value = 'success';
  } catch (e) {
    status.value = 'error';
  }
};
</script>