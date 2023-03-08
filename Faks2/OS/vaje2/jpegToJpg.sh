#!/bin/bash

for file in $(ls *.jpeg);  do mv "$file" "${file%.*}.jpg" ; done
