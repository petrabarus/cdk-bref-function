#!/usr/bin/env bash
cd cdk && npm install && cd ..
cd lambda && composer install && cd ..
cd cdk && cdk deploy -y