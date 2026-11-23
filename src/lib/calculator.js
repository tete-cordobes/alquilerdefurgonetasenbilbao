const money = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
const number = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 2 });
const format = (value) => number.format(value);

function businessEstimate(values) {
  const covered = values.days * values.includedKm;
  const extraKm = Math.max(0, values.distance - covered);
  const rent = values.days * values.daily;
  const excess = extraKm * values.extraKmPrice;
  const total = rent + excess + values.extras;
  return [
    'Coste estimado: ' + money.format(total),
    'Alquiler: ' + format(values.days) + ' días × ' + money.format(values.daily) + ' = ' + money.format(rent) + '.',
    'Ruta: ' + format(values.distance) + ' km previstos, ' + format(covered) + ' km incluidos y ' + format(extraKm) + ' km de exceso (' + money.format(excess) + ').',
    'Extras: ' + money.format(values.extras) + '. Coste medio por día: ' + money.format(total / values.days) + '.',
    'Fianza por separado: ' + money.format(values.deposit) + '. La estimación usa tu presupuesto y no comprueba disponibilidad.',
  ];
}

const form = document.querySelector('[data-calculator]');
if (form) {
  const result = document.querySelector('[data-result]');
  const copy = document.querySelector('[data-copy]');
  const copyStatus = document.querySelector('[data-copy-status]');
  let summary = '';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = Object.fromEntries([...new FormData(form)].map(([key, value]) => [key, Number(value)]));
    const lines = businessEstimate(values);
    result.replaceChildren(...lines.map((line) => {
      const span = document.createElement('span');
      span.textContent = line;
      return span;
    }));
    summary = lines.join('\n');
    copy.hidden = false;
    copyStatus.textContent = '';
    result.focus();
  });
  form.addEventListener('input', () => {
    summary = '';
    copy.hidden = true;
    copyStatus.textContent = '';
    result.textContent = 'Pulsa Calcular para actualizar la estimación.';
  });
  form.querySelector('[data-example]').addEventListener('click', () => {
    form.reset();
    const example = JSON.parse(form.dataset.example);
    for (const [key, value] of Object.entries(example)) form.elements[key].value = value;
    form.requestSubmit();
  });
  copy.addEventListener('click', async () => {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary);
      copyStatus.textContent = 'Estimación copiada.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(result);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = 'Texto seleccionado. Usa la opción Copiar de tu dispositivo.';
    }
  });
}
