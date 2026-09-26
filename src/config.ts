/**
 * Configuração geral do WhatsApp da LinkNFC
 * 
 * Para cadastrar o seu número:
 * Insira o número no formato internacional (DDI + DDD + Número), somente números ou com formato padrão.
 * Exemplo São Paulo: '5511999999999'
 * Exemplo Rio de Janeiro: '5521999999999'
 */
export const WHATSAPP_CONFIG = {
  // Número oficial de WhatsApp de atendimento: (31) 99186-9178
  phone: '5531991869178',
  displayPhone: '(31) 99186-9178',
  
  defaultMessage: 'Olá! Vim pelo site da LinkNFC e quero comprar Placas no atacado para revender.',
};

export function buildWhatsAppUrl(customMessage?: string, phone: string = WHATSAPP_CONFIG.phone): string {
  let cleanPhone = phone.replace(/\D/g, '');
  // Adiciona DDI 55 do Brasil caso tenha sido digitado apenas com DDD (10 ou 11 dígitos)
  if (cleanPhone.length === 10 || cleanPhone.length === 11) {
    cleanPhone = `55${cleanPhone}`;
  }
  const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppDirect(customMessage?: string, phone: string = WHATSAPP_CONFIG.phone): void {
  const url = buildWhatsAppUrl(customMessage, phone);
  // Redireciona diretamente para o aplicativo do WhatsApp ou WhatsApp Web
  window.open(url, '_blank', 'noopener,noreferrer');
}
