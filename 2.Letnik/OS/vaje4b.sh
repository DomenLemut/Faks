#!/bin/bash

grep -v '^\s*#' datoteka.txt | cut -d: -f2 |sort | uniq -c | sort -nr | nl
