#!/bin/bash

leto=$1

((leto % 4 == 0)) && echo "$leto je prestopno leto." || echo "$leto ni prestopno leto."