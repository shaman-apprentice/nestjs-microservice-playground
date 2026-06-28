#!/bin/sh

set -e

echo "Creating topics which not already exist..."

for topic in \
  tweet \
  get.poem \
  get.poem.reply \
  get.sum \
  get.sum.reply
do
  /opt/kafka/bin/kafka-topics.sh \
    --bootstrap-server kafka:9092 \
    --create \
    --if-not-exists \
    --topic "$topic" \
    --partitions 1 \
    --replication-factor 1
done

echo "Kafka ready."
