#!/bin/bash

time=10

if(($# >= 1))
then
	time=$1
fi

sleep $time
