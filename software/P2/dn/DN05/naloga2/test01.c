
#include <stdio.h>
#include <stdlib.h>

#include "naloga2.h"

int __main__() {
    int a = 70;
    int b = 90;
    int c = 60;
    int* pa = &a;
    int* pb = &b;
    int* pc = &c;

    uredi(&pa, &pb, &pc);

    printf("%d, %d, %d\n", *pa, *pb, *pc);
    printf("%d, %d, %d\n", a, b, c);

    exit(0);
    return 0;
}
