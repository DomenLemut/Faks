        .data
        .org 0x400
TAB:    .word 1,2,3,4,5,6,7
REZ:    .space 28

    .code
    .org 0x0
    lw r1, TAB(r0)
    lw r2, TAB+8(r0)
    add r3, r1, r2
    sub r4, r1, r2
    sw REZ(r0), r3
    sw REZ+4(r0), r4
    halt