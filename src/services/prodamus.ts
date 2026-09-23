/**
 * Prodamus payment helper for Amaliya's Brow Course
 * 
 * Documentation & parameters:
 * https://help.prodamus.ru/
 */

export interface ProdamusPaymentParams {
  order_id?: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  customer_instagram?: string;
  price: number;
  product_name: string;
}

// You can set VITE_PRODAMUS_PAYFORM_URL in your .env (for example: https://amaliya-brows.payform.ru)
// Default placeholder that users can replace with their registered Prodamus payform URL:
export const DEFAULT_PRODAMUS_URL = (import.meta.env.VITE_PRODAMUS_PAYFORM_URL as string) || 'https://amaliya-brows.payform.ru';

/**
 * Builds the direct Prodamus payment URL with pre-filled buyer details, product name, price, and Telegram return callback
 */
export function buildProdamusPaymentUrl(params: ProdamusPaymentParams, baseUrl = DEFAULT_PRODAMUS_URL): string {
  try {
    const url = new URL(baseUrl);

    // Order and customer credentials
    if (params.order_id) {
      url.searchParams.set('order_id', params.order_id);
    }
    if (params.customer_name) {
      url.searchParams.set('customer_name', params.customer_name);
    }
    if (params.customer_phone) {
      url.searchParams.set('customer_phone', params.customer_phone.replace(/\D/g, ''));
    }
    if (params.customer_email) {
      url.searchParams.set('customer_email', params.customer_email);
    }
    if (params.customer_instagram) {
      url.searchParams.set('customer_extra', `Instagram: ${params.customer_instagram}`);
    }

    // Product item details
    url.searchParams.set('products[0][name]', params.product_name);
    url.searchParams.set('products[0][price]', params.price.toString());
    url.searchParams.set('products[0][quantity]', '1');

    // Success and fail redirects
    // Return student directly to Telegram bot / channel after successful payment
    const telegramChannelUrl = (import.meta.env.VITE_TELEGRAM_CHANNEL_URL as string) || 'https://t.me/AmiAmii23';
    url.searchParams.set('urlSuccess', telegramChannelUrl);
    url.searchParams.set('urlReturn', window.location.href);

    return url.toString();
  } catch (e) {
    console.error('Error generating Prodamus URL:', e);
    return baseUrl;
  }
}
