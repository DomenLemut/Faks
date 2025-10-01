#!/bin/bash

CHECK_MARK="\033[0;32m\xE2\x9C\x94\033[0m"

echo -e "\n\e[4mDoing Things\e[0m"
for i in {1..10}
do
echo -n "doing task $i..."
sleep 1
echo -e "\\r${CHECK_MARK} task $i done"
done

echo -e "\nALL TASKS HAVE BEEN COMPLETED"
