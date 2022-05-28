            .data
            .org 0x400
ISBN:       .byte 0,3,4,0,0,1,3,8,1,8

            .code
            .org 0x0
            addui r30, r0, 0x4FC
            addui r24, r0, ISBN
            call r31, CHECK_ISBN(r0)
            halt

            
CHECK_ISBN: push r31
            push r29
            add r29, r0, r30

            
            
            pop r29
            pop r31
            j 0(r31)