import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

// Extraer la URL de la cadena de conexión si viene envuelta en un comando psql
function extractDatabaseUrl(connectionString: string): string {
  // Si la cadena contiene 'postgresql://', extraer la URL completa
  // Buscar la URL entre comillas simples o capturar todo después de postgresql://
  const urlMatch = connectionString.match(/postgresql:\/\/[^'\s]+/);
  if (urlMatch) {
    return urlMatch[0];
  }
  // Si no, devolver la cadena original
  return connectionString;
}

const databaseUrl = process.env.DATABASE_URL!;
const cleanedUrl = extractDatabaseUrl(databaseUrl);

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: cleanedUrl,
  },
});
