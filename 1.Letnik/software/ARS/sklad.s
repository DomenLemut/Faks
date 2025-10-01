    .data
    .org 0x400
A:  .word16 2
B:  .word16 3
C:  .word16 4

    .code
    .org 0x0
    addui r30,r0, #0x4fc ;nastavi sklad
    lh r1, A(r0)        ;stevilo A
    lh r2, B(r0)        ;stevilo B
    lh r3, C(r0)


    sw 0(r30), r1       ;PUSH r1
    subui r30,r30,#4    

    sw 0(r30), r2       ;PUSH r2
    subui r30,r30,#4    

    sw 0(r30), r3
    subui r30,r30,#4    


    addui r30,r30,#4    ;POP1
    lw r4, 0(r30)
    addui r30,r30,#4    ;POP2
    lw r5, 0(r30)
    addui r30,r30,#4    ;POP1
    lw r6, 0(r30)
    halt