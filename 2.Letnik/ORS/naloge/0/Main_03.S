.balign 4
.global delay
.type delay, @function 
delay:
    addi sp, sp, -16                # Increase the stack pointer by 4x4
    sw ra, 12(sp)                   # Save the return address
    sw fp, 8(sp)                    # Save the frame pointer
    sw s1, 4(sp)                    # Save two registers (to ensure the stack size is valid)
    sw s2, 0(sp)
    addi fp, sp, 16                 # Set the frame pointer

    li t1, 32768                    # The frequency of the mtime register
    mul t0, a0, t1                  # Calculate the number of ticks for the given milliseconds
    lw t1, 0x0200BFF8               # Load the current value of mtime
    add t2, t1, t0                  # Calculate the end time by adding the delay to current mtime

delay_loop:
    lw t1, 0x0200BFF8               # Load current mtime
    bge t1, t2, delay_done           # Break out of the loop when the end time is reached
    j delay_loop

delay_done:
    lw s2, 0(sp)                    # Retrieve the saved values for both registers
    lw s1, 4(sp)
    lw fp, 8(sp)                    # Restore the frame pointer
    lw ra, 12(sp)                   # Restore the return address
    addi sp, sp, 16                 # Adjust the stack pointer
    ret

# A function to turn on the LED
.global turn_on_leds
.type turn_on_leds, @function 
turn_on_leds:
    # Code to turn on all three LED diodes
    li a0, 19
    call gpio_set_pin
    li a0, 21
    call gpio_set_pin
    li a0, 22
    call gpio_set_pin
    ret

# A function to turn off the LED
.global turn_off_leds
.type turn_off_leds, @function 
turn_off_leds:
    # Code to turn off all three LED diodes
    li a0, 19
    call gpio_reset_pin
    li a0, 21
    call gpio_reset_pin
    li a0, 22
    call gpio_reset_pin
    ret

# Program to alternate LED lights every half a second
main:
    loop:
        call turn_on_leds               # Turn on all LEDs
        li a0, 500                      # Delay for 500 milliseconds
        call delay
        call turn_off_leds              # Turn off all LEDs
        li a0, 500                      # Delay for 500 milliseconds
        call delay
        j loop                          # Repeat indefinitely
