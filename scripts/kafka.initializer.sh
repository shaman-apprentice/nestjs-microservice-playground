#!/bin/sh

set -e

echo "Creating topics..."

/opt/kafka/bin/kafka-topics.sh \
  --bootstrap-server kafka:9092 \
  --create \
  --if-not-exists \
  --topic tweet \
  --partitions 1 \
  --replication-factor 1

echo "Kafka ready."