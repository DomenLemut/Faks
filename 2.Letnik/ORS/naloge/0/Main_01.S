.balign 4
.global gpio_set_pin 
.type gpio_set_pin, @function 
gpio_set_pin:
    addi sp, sp, -16                # povecamo skladovni kazalec za 4x4
    sw ra, 12(sp)                   # shranimo povratni naslov
    sw fp, 8(sp)                    # shranimo kazalec na okvir
    sw s1, 4(sp)                    # shranimo dva registra (da je velikost sklada veljavna)
    sw s2, 0(sp)
    addi fp, sp, 16                 # nastavimo kazalec na okvir

    li t0, GPIO_BASE_ADDRESS
    lw t1, GPIO_OUTPUT_VAL(t0)      # beremo trenutno vrednost
    li t2, 0x01
    sll t2, t2, a0                  # premaknemo enico za ciljni pin 
    or t1, t1, t2                   # postavimo bit in shranimo
    sw t1, GPIO_OUTPUT_VAL(t0)      

    # izstopna tocka
    lw s2, 0(sp)                    # preberemo shranjeni vrednosti za oba registra
    lw s1, 4(sp)
    lw fp, 8(sp)                    # povrnemo vrednost kazalca na okvir
    lw ra, 12(sp)                   # povrnemo vrednost povratnega naslova
    addi sp, sp, 16                 # povrnemo skladovni kazalec
    ret

.balign 4
.global gpio_reset_pin 
.type gpio_reset_pin, @function 
gpio_reset_pin:
    addi sp, sp, -16                # povecamo skladovni kazalec za 4x4
    sw ra, 12(sp)                   # shranimo povratni naslov
    sw fp, 8(sp)                    # shranimo kazalec na okvir
    sw s1, 4(sp)                    # shranimo dva registra (da je velikost sklada veljavna)
    sw s2, 0(sp)
    addi fp, sp, 16                 # nastavimo kazalec na okvir

    li t0, GPIO_BASE_ADDRESS
    lw t1, GPIO_OUTPUT_VAL(t0)      # beremo trenutno vrednost
    li t2, 0x01
    sll t2, t2, a0                  # premaknemo enico za ciljni pin 
    not t2, t2                      # inverzija bita
    and t1, t1, t2                  # resetiranje bita in shranimo
    sw t1, GPIO_OUTPUT_VAL(t0)      

    # izstopna tocka
    lw s2, 0(sp)                    # preberemo shranjeni vrednosti za oba registra
    lw s1, 4(sp)
    lw fp, 8(sp)                    # povrnemo vrednost kazalca na okvir
    lw ra, 12(sp)                   # povrnemo vrednost povratnega naslova
    addi sp, sp, 16                 # povrnemo skladovni kazalec
    ret

# Koda za uporabo funkcij za vklop vseh treh LED diod
li a0, 19
call gpio_output_en
li a0, 21
call gpio_output_en
li a0, 22
call gpio_output_en

# Vključi vse tri LED diode
li a0, 19
call gpio_set_pin
li a0, 21
call gpio_set_pin
li a0, 22
call gpio_set_pin
