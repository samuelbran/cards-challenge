'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signIn(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (email && password) {
    cookies().set('Authorization', 'abc123');
    redirect('/dashboard');
  }
}
