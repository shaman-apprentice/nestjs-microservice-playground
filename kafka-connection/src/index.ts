export const bootstrapServer = process.env.NODE_ENV === 'production'
  ? "kafka:9092"
  : "localhost:29092";
