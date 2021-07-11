#!/bin/bash
#set -x

#
# MIPS
#

echo ""
echo " MIPS: examples"
MIPS_TEST="2 3 4 5 6 7 8 11 12 20 21 23 24 25 26 30 31"
for I in $MIPS_TEST;
do
   echo -n " * ./travis/MIPS/correct/example-$I: "
   ./creator.sh -a ./architecture/MIPS-32-like.json \
                -s ./travis/MIPS/correct/example$I.txt \
                -r ./travis/MIPS/correct/example$I.output -o min | tail -1
done

echo ""
echo " MIPS: common errors"
MIPS_TEST="1 2 3 4 5 6 7 8 9 10 11 31 32 33 34 35 36 37 39 40 41 42 43 44 45 46 47 48 49"
for I in $MIPS_TEST;
do
   echo -n " * ./travis/MIPS/error/error-$I: "
   ./creator.sh -a ./architecture/MIPS-32-like.json \
                -s ./travis/MIPS/error/error-$I.s -o min > /tmp/e-$I.output
   diff /tmp/e-$I.output ./travis/MIPS/error/error-$I.output
   if [ $? -ne 0 ]; then
       echo "Different: Error $I with different outputs...";
   else
       echo "Equals";
   fi
   rm   /tmp/e-$I.output
done


#
# RISC-V
#

echo ""
echo " RISC-V:"
RV_TEST="2 3 4 5 6 7 8 11 12"
for I in $RV_TEST;
do
  echo -n " * ./travis/riscv/correct/example-$I: "
  ./creator.sh -a ./architecture/RISC-V-like.json \
               -s ./travis/riscv/correct/example$I.txt \
               -r ./travis/riscv/correct/example$I.output -o min | tail -1
done

