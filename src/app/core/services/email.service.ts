import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  // ⚠️ À REMPLACER avec tes vraies clés EmailJS plus tard
  private readonly SERVICE_ID = 'YOUR_SERVICE_ID';
  private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  async send(payload: ContactPayload): Promise<void> {
    await emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      {
        from_name: payload.name,
        from_email: payload.email,
        message: payload.message,
      },
      { publicKey: this.PUBLIC_KEY }
    );
  }
}