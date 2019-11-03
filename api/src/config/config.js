// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 4000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '5m';


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'seed-ripley';
