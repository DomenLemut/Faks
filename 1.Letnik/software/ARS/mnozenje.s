    .data
    .org 0x400
A:  .word16 2
B:  .word16 25

    .code
    .org 0x0
    addui r30,r0, #0x4fc ;nastavi sklad
    lh r1, A(r0)        ;stevilo A
    lh r2, B(r0)        ;stevilo B


    add r3, r0, r0      ;SUM
    add r4, r0, r0      ;potenca
    addi r4, r4, #1     
    add r5, r0, r0      ;je vecje?
    add r6, r0, r0      ;sum B
    j find(r0)

find:                           ;ugotovi, kaj je najvecja mozna potenca, se vedno manjsa od b
    slli r4, r4, #1             ;povecaj potenco
    sgt r5, r2, r4              ;poglej, ce je vecje kot b
    bne r5, find                ;ce je se vedno manjse povecaj potenco
    srai r4, r4, #1             ;znizaj potenco
    j mnozi(r0)             

mnozi:
    add r6, r6, r4              ;dodaj potenco v sum b
    add r3, r3, r4              ;dodaj potenco v sum
    srai r4, r4, #1             ;znizaj potenco
    add r6, r6, r4              ;dodaj potenco v sum b

end:
    halt



    
    