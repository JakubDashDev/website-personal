'use server';

import { Resend } from 'resend';
import { z } from 'zod';
import { contactEmail } from '@/data';

const contactFormSchema = z.object({
  name: z.string().trim().min(1),
  email: z.email(),
  message: z.string().trim().min(1),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
  errors?: Partial<Record<keyof ContactFormData, keyof ContactFormData>>;
  values?: ContactFormData;
  status?: 'success' | 'error';
};

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
  };
  const result = contactFormSchema.safeParse(values);

  if (!result.success) {
    const fieldErrors = z.flattenError(result.error).fieldErrors;

    return {
      errors: {
        name: fieldErrors.name ? 'name' : undefined,
        email: fieldErrors.email ? 'email' : undefined,
        message: fieldErrors.message ? 'message' : undefined,
      },
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: 'error', values: result.data };

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: 'JakubDashDev Portfolio <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: result.data.email,
      subject: `Portfolio contact from ${result.data.name}`,
      text: `Name: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`,
    });

    return error ? { status: 'error', values: result.data } : { status: 'success' };
  } catch {
    return { status: 'error', values: result.data };
  }
}
