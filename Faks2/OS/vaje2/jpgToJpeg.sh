#!/bin/bash

for file in $(ls *.jpg);  do mv "$file" "${file%.*}.jpeg" ; done
