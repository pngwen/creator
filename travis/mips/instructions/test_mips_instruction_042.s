
#
# Creator (https://creatorsim.github.io/creator/)
#

.text
    main:
      li  $t0 882
      li  $t1 881
      li  $t2 5
      li  $t3 543
      bgt $t1 $t0 jump1
      bgt $t0 $t3 jump1

    jump2:
      li $t6 34
      li $v0 10
      syscall

    jump1:
      li $t4 11
      li $t5 555
      bgt $t5 $t4 jump2
