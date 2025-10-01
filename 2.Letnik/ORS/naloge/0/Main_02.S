.balign 4
.global gpio_set_pin 
.type gpio_set_pin, @function 
gpio_set_pin:
    addi sp, sp, -16                # increase the stack pointer by 4x4
    sw ra, 12(sp)                   # save the return address
    sw fp, 8(sp)                    # save the frame pointer
    sw s1, 4(sp)                    # save two registers (to ensure the stack size is valid)
    sw s2, 0(sp)
    addi fp, sp, 16                 # set the frame pointer

    li t0, GPIO_BASE_ADDRESS
    lw t1, GPIO_OUTPUT_VAL(t0)      # read the current value
    li t2, 0x01
    sll t2, t2, a0                  # shift the one to the target pin 
    or t1, t1, t2                   # set the bit and store it
    sw t1, GPIO_OUTPUT_VAL(t0)      

    # exit point
    lw s2, 0(sp)                    # retrieve the saved values for both registers
    lw s1, 4(sp)
    lw fp, 8(sp)                    # restore the frame pointer
    lw ra, 12(sp)                   # restore the return address
    addi sp, sp, 16                 # adjust the stack pointer
    ret

.balign 4
.global gpio_reset_pin 
.type gpio_reset_pin, @function 
gpio_reset_pin:
    addi sp, sp, -16                # increase the stack pointer by 4x4
    sw ra, 12(sp)                   # save the return address
    sw fp, 8(sp)                    # save the frame pointer
    sw s1, 4(sp)                    # save two registers (to ensure the stack size is valid)
    sw s2, 0(sp)
    addi fp, sp, 16                 # set the frame pointer

    li t0, GPIO_BASE_ADDRESS
    lw t1, GPIO_OUTPUT_VAL(t0)      # read the current value
    li t2, 0x01
    sll t2, t2, a0                  # shift the one to the target pin 
    not t2, t2                      # invert the bit
    and t1, t1, t2                  # reset the bit and store it
    sw t1, GPIO_OUTPUT_VAL(t0)      

    # exit point
    lw s2, 0(sp)                    # retrieve the saved values for both registers
    lw s1, 4(sp)
    lw fp, 8(sp)                    # restore the frame pointer
    lw ra, 12(sp)                   # restore the return address
    addi sp, sp, 16                 # adjust the stack pointer
    ret

# Code to use the functions to enable all three LED diodes
li a0, 19
call gpio_output_en
li a0, 21
call gpio_output_en
li a0, 22
call gpio_output_en

# Turn on all three LED diodes
li a0, 19
call gpio_set_pin
li a0, 21
call gpio_set_pin
li a0, 22
call gpio_set_pin
