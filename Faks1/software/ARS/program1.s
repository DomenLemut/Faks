        .data
        .org 0xFFFFFF00

POD:    .byte 9,2,0,4,7,0,-1,2,0,0,0,0
        .code
        .org 0x0
        addui r9, r0, POD

ZANKA:
        lb r1, 0(r9)
        lb r2, 1(r9)
        sub r3, r1, r2
        subi r3, r3, 1
        sb 2(r9), r3
        slti r17, r3, 0
        addui r9, r9, 3
        beq r17, ZANKA
        halt