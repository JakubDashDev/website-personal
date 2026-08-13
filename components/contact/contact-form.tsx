'use client';

import { useTranslations } from 'next-intl';
import { useActionState } from 'react';
import { PiPaperPlaneTiltThin } from 'react-icons/pi';
import { type ContactFormState, submitContactForm } from './actions';

const fieldClassName =
  'contact-field border-hairline text-text placeholder:text-text-muted/60 focus:border-accent w-full border-b bg-transparent px-0 py-3 transition-colors';
const errorClassName = 'mt-2 block text-sm text-red-400';
const initialState: ContactFormState = {};

export function ContactForm() {
  const t = useTranslations('contact');
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const nameError = state.errors?.name;
  const emailError = state.errors?.email;
  const messageError = state.errors?.message;

  return (
    <form action={formAction} className="flex flex-col gap-6" aria-busy={pending} noValidate>
      <label className="text-text-muted text-sm" htmlFor="contact-name">
        {t('name')}
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          defaultValue={state.values?.name}
          className={fieldClassName}
          placeholder={t('namePlaceholder')}
          aria-invalid={Boolean(nameError)}
          aria-describedby={nameError ? 'contact-name-error' : undefined}
          required
        />
        {nameError && (
          <span id="contact-name-error" className={errorClassName} role="alert">
            {t(`errors.${nameError}`)}
          </span>
        )}
      </label>
      <label className="text-text-muted text-sm" htmlFor="contact-email">
        {t('email')}
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={state.values?.email}
          className={fieldClassName}
          placeholder={t('emailPlaceholder')}
          aria-invalid={Boolean(emailError)}
          aria-describedby={emailError ? 'contact-email-error' : undefined}
          required
        />
        {emailError && (
          <span id="contact-email-error" className={errorClassName} role="alert">
            {t(`errors.${emailError}`)}
          </span>
        )}
      </label>
      <label className="text-text-muted text-sm" htmlFor="contact-message">
        {t('message')}
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          defaultValue={state.values?.message}
          className={`${fieldClassName} resize-y`}
          placeholder={t('messagePlaceholder')}
          aria-invalid={Boolean(messageError)}
          aria-describedby={messageError ? 'contact-message-error' : undefined}
          required
        />
        {messageError && (
          <span id="contact-message-error" className={errorClassName} role="alert">
            {t(`errors.${messageError}`)}
          </span>
        )}
      </label>
      {state.status && (
        <p
          className={state.status === 'success' ? 'text-accent text-sm' : 'text-sm text-red-400'}
          role={state.status === 'error' ? 'alert' : 'status'}
        >
          {t(state.status)}
        </p>
      )}
      <button
        type="submit"
        className="bg-accent text-bg rounded-button inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 self-start px-6 font-medium transition hover:-translate-y-px hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
        disabled={pending}
      >
        {t(pending ? 'sending' : 'send')}
        <PiPaperPlaneTiltThin aria-hidden="true" className="text-lg" />
      </button>
    </form>
  );
}
