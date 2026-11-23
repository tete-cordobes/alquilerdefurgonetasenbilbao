export const reservation = 'https://www.iberfurgo.com/oficinas/alquiler-furgonetas-bilbao/';
export const booking = reservation + '#reserva-bilbao';
export const operator = 'https://www.iberfurgo.com/#organization';
export const branch = reservation + '#AutoRental';
export const office = {
  address: 'Av. Txorierri, 46, 48150 Basozabal (Sondika), Bizkaia',
  maps: 'https://www.google.com/maps?cid=18056671413343467253',
  phone: '+34697969378',
  displayPhone: '697 969 378',
};
export const municipalGuide = 'https://www.bilbao.eus/cs/Satellite?c=Page&cid=1279229433800&language=es&pageid=1279229433800&pagename=Bilbaonet%2FPage%2FBIO_contenidoFinal';

export const site = {
  name: 'Furgonetas de trabajo en Bilbao',
  masthead: 'Furgonetas de trabajo',
  locality: 'Guía de Bilbao y Bizkaia',
  title: 'Alquiler de furgonetas en Bilbao para empresas',
  description: 'Estima el coste del alquiler de una furgoneta de trabajo en Bilbao según días, kilometraje y extras. Consulta las fechas con la oficina de Sondika.',
  toolTitle: 'Calcula el coste de tu ruta',
  toolDescription: 'Introduce los importes de tu presupuesto con impuestos incluidos.',
  resultNote: 'Comprueba que tu tarifa acumula los kilómetros de todos los días. Si tienes una bolsa total, divídela entre los días para obtener el equivalente diario.',
  blogTitle: 'Guías de alquiler para empresas en Bilbao',
  blogDescription: 'Prepara el alquiler de una furgoneta para reparto y trabajo en Bilbao y Bizkaia. Compara costes, dimensiones y condiciones.',
};

export const fields = [
  ['Tarifa y uso previsto', [['days', 'Días de alquiler'], ['daily', 'Precio por día (€)', '0.01', 0], ['distance', 'Kilómetros previstos', '0.01', 0], ['includedKm', 'Kilómetros incluidos por día', 'any', 0], ['extraKmPrice', 'Precio por km extra (€)', '0.001', 0]]],
  ['Extras y fianza', [['extras', 'Extras totales (€)', '0.01', 0, 0], ['deposit', 'Fianza (€)', '0.01', 0, 0]]],
];

export const example = { days: 4, daily: 75, distance: 700, includedKm: 150, extraKmPrice: 0.20, extras: 24, deposit: 300 };
