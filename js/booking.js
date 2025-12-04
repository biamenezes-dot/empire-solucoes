// ============================================
// BOOKING FORM - JAVASCRIPT PURO
// Integração: WhatsApp
// ============================================

const bookingForm = document.getElementById('bookingForm');
const submitBtn = document.getElementById('submitBtn');

// Configuração de serviços
const services = {
  'maintenance': 'Manutenção Geral',
  'electrical': 'Elétrica Automotiva',
  'brakes': 'Freios e Suspensão',
  'diagnostic': 'Diagnóstico Computadorizado',
  'other': 'Outro Serviço'
};

// ============================================
// VALIDAÇÃO DE FORMULÁRIO
// ============================================

function validateForm(formData) {
  const errors = [];

  if (!formData.name.trim()) {
    errors.push('Por favor, insira seu nome');
  }

  if (!formData.phone.trim()) {
    errors.push('Por favor, insira seu telefone');
  }

  if (!formData.email.trim()) {
    errors.push('Por favor, insira seu email');
  } else if (!isValidEmail(formData.email)) {
    errors.push('Por favor, insira um email válido');
  }

  if (!formData.service) {
    errors.push('Por favor, selecione um serviço');
  }

  if (!formData.date) {
    errors.push('Por favor, selecione uma data');
  }

  if (!formData.time) {
    errors.push('Por favor, selecione um horário');
  }

  return errors;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================
// GERAÇÃO DE MENSAGEM WHATSAPP
// ============================================

function generateWhatsAppMessage(formData) {
  const serviceLabel = services[formData.service] || formData.service;
  const date = new Date(formData.date);
  const formattedDate = date.toLocaleDateString('pt-BR');

  const message = `Olá! Gostaria de agendar um serviço na Empire Soluções Automotivas.

*Informações do Agendamento:*
📝 Nome: ${formData.name}
📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}
🔧 Serviço: ${serviceLabel}
🚗 Veículo: ${formData.vehicle || 'Não informado'}
📅 Data: ${formattedDate}
⏰ Horário: ${formData.time}
${formData.message ? `\n💬 Mensagem: ${formData.message}` : ''}

Obrigado!`;

  return encodeURIComponent(message);
}

// ============================================
// NOTIFICAÇÕES (TOAST)
// ============================================

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Remover após 4 segundos
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ============================================
// CONFIGURAR DATA MÍNIMA E MÁXIMA
// ============================================

function setupDateInput() {
  const dateInput = document.getElementById('date');
  
  // Data mínima: hoje
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;

  // Data máxima: 30 dias no futuro
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateString = maxDate.toISOString().split('T')[0];
  dateInput.max = maxDateString;
}

// ============================================
// SUBMIT DO FORMULÁRIO
// ============================================

bookingForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Coletar dados do formulário
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    service: document.getElementById('service').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    vehicle: document.getElementById('vehicle').value,
    message: document.getElementById('message').value
  };

  // Validar formulário
  const errors = validateForm(formData);
  if (errors.length > 0) {
    errors.forEach(error => showToast(error, 'error'));
    return;
  }

  // Mostrar estado de carregamento
  submitBtn.disabled = true;
  submitBtn.classList.add('loading');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span class="spinner"></span> Processando...';

  try {
    // Simular delay de processamento
    await new Promise(resolve => setTimeout(resolve, 500));

    // Gerar mensagem do WhatsApp
    const whatsappMessage = generateWhatsAppMessage(formData);
    const whatsappPhone = '5579999727920'; // Número da Empire
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');

    // Mostrar sucesso
    showToast('Redirecionando para WhatsApp...', 'success');

    // Limpar formulário
    bookingForm.reset();

  } catch (error) {
    showToast('Erro ao processar agendamento', 'error');
    console.error('Erro:', error);
  } finally {
    // Restaurar estado do botão
    submitBtn.disabled = false;
    submitBtn.classList.remove('loading');
    submitBtn.innerHTML = originalText;
  }
});

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  setupDateInput();
  console.log('Formulário de agendamento carregado com sucesso!');
});

// ============================================
// FORMATAÇÃO DE TELEFONE (OPCIONAL)
// ============================================

const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
      if (value.length <= 2) {
        value = `(${value}`;
      } else if (value.length <= 7) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
      }
    }
    
    e.target.value = value;
  });
}

// ============================================
// ANIMAÇÃO DE SCROLL REVEAL
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar elementos com animação
document.querySelectorAll('.info-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
