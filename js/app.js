/*Listado de arquitecturas disponibles*/
var architecture_available = [];

/*Almacena el color de fondo de cada card*/
var back_card = [];

/*Listado de arquitecturas cargadas*/
var load_architectures_available = [];
var load_architectures = [];

/*tabla hash de la arquitectura*/
var architecture_hash = [];

/*Arquitectura cargada*/
var architecture = {components:[
  /*{name: "Control registers", type: "control", double_precision: false, elements:[
      {name:"PC", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"EPC", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"CAUSE", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"BADVADDR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"STATUS", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"HI", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"LO", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},

      {name:"FIR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"FCSR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"FCCR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"FEXR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    ]},
    {name: "Integer registers", type: "integer", double_precision: false, elements:[
      {name:"r0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"at", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"v0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"v1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"a0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"a1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"a2", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"a3", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t2", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t3", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t4", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t5", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t6", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t7", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s2", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s3", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s4", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s5", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s6", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s7", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t8", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t9", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"k0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"k1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"gp", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"sp", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s8", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"ra", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    ]},
    {name: "Simple floating point registers",type: "floating point", double_precision: false, elements:[
      {name:"FG0", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG1", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG2", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG3", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG4", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG5", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG6", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG7", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG8", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG9", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG10", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG11", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG12", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG13", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG14", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG15", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG16", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG17", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG18", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG19", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG20", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG21", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG22", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG23", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG24", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG25", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG26", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG27", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG28", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG29", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG30", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG31", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
    ]},
    {name: "Double floating point registers", type: "floating point", double_precision: true, elements:[
      {name:"FP0", nbits:"64", value:0.0, simple_reg: ["FG0","FG1"], properties: ["read", "write"]},
      {name:"FP2", nbits:"64", value:0.0, simple_reg: ["FG2","FG3"], properties: ["read", "write"]},
      {name:"FP4", nbits:"64", value:0.0, simple_reg: ["FG4","FG5"], properties: ["read", "write"]},
      {name:"FP6", nbits:"64", value:0.0, simple_reg: ["FG6","FG7"], properties: ["read", "write"]},
      {name:"FP8", nbits:"64", value:0.0, simple_reg: ["FG8","FG9"], properties: ["read", "write"]},
      {name:"FP10", nbits:"64", value:0.0, simple_reg: ["FG10","FG11"], properties: ["read", "write"]},
      {name:"FP12", nbits:"64", value:0.0, simple_reg: ["FG12","FG13"], properties: ["read", "write"]},
      {name:"FP14", nbits:"64", value:0.0, simple_reg: ["FG14","FG15"], properties: ["read", "write"]},
      {name:"FP16", nbits:"64", value:0.0, simple_reg: ["FG16","FG17"], properties: ["read", "write"]},
      {name:"FP18", nbits:"64", value:0.0, simple_reg: ["FG18","FG19"], properties: ["read", "write"]},
      {name:"FP20", nbits:"64", value:0.0, simple_reg: ["FG20","FG21"], properties: ["read", "write"]},
      {name:"FP22", nbits:"64", value:0.0, simple_reg: ["FG22","FG23"], properties: ["read", "write"]},
      {name:"FP24", nbits:"64", value:0.0, simple_reg: ["FG24","FG25"], properties: ["read", "write"]},
      {name:"FP26", nbits:"64", value:0.0, simple_reg: ["FG26","FG27"], properties: ["read", "write"]},
      {name:"FP28", nbits:"64", value:0.0, simple_reg: ["FG28","FG29"], properties: ["read", "write"]},
      {name:"FP30", nbits:"64", value:0.0, simple_reg: ["FG30","FG31"], properties: ["read", "write"]},
    ]}*/
  ], instructions:[
    /*{name: "add", co: "000000", cop: "100000", nwords: 1, signature_definition: "F0 $F1 $F2 $F3", signature: "add,$INT-Reg,$INT-Reg,$INT-Reg", signatureRaw: "add $reg1 $reg2 $reg3", fields: [
      {name: "add", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "INT-Reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2+reg3"},
    {name: "addi", co: "001000", cop: null, nwords: 1, signature_definition: "F0 $F1 $F2 F3", signature: "addi,$INT-Reg,$INT-Reg,inm", signatureRaw: "addi $reg1 $reg2 val", fields: [
      {name: "addi", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=reg2+val"},
    {name: "and", co: "000000", cop: "100100", nwords: 1, signature_definition: "F0 $F1 $F2 $F3", signature: "and,$INT-Reg,$INT-Reg,$INT-Reg", signatureRaw: "and $reg1 $reg2 $reg3", fields: [
      {name: "and", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "INT-Reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2&reg3"},
    {name: "andi", co: "001100", cop: null, nwords: 1, signature_definition: "F0 $F1 $F2 F3", signature: "andi,$INT-Reg,$INT-Reg,inm", signatureRaw: "andi $reg1 $reg2 val", fields: [
      {name: "andi", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=reg2&val"},
    {name: "b", co: "000100", cop: null, nwords: 1, signature_definition: "F0 F1", signature: "b,inm", signatureRaw: "b val", fields: [
      {name: "b", type: "co", startbit: 31, stopbit: 26},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "PC=val"},
    {name: "beq", co: "000100", cop: null, nwords: 1, signature_definition: "F0 $F1 $F2 F3", signature: "beq,$INT-Reg,$INT-Reg,inm", signatureRaw: "beq $reg1 $reg2 val", fields: [
      {name: "beq", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "if(reg1 == reg2){PC=val}"},
    {name: "bne", co: "000101", cop: null, nwords: 1, signature_definition: "F0 $F1 $F2 F3", signature: "bne,$INT-Reg,$INT-Reg,inm", signatureRaw: "bne $reg1 $reg2 val", fields: [
      {name: "bne", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "if(reg1 != reg2){PC=val}"},
    {name: "div", co: "000000", cop: "011010", nwords: 1, signature_definition: "F0 $F1 $F2 $F3", signature: "div,$INT-Reg,$INT-Reg,$INT-Reg", signatureRaw: "div $reg1 $reg2 $reg3", fields: [
      {name: "div", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "INT-Reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2/reg3"},
    {name: "lw", co: "000102", cop: null, nwords: 1, signature_definition: "F0 $F1 F2 ($F3)", signature: "lw,$INT-Reg,inm,($INT-Reg)", signatureRaw: "lw $reg1 val ($reg2)", fields: [
      {name: "lw", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
      {name: "reg2", type: "INT-Reg", startbit: 25, stopbit: 21},
    ], definition: "reg1=MP.w.(val+reg2)"},
    {name: "mul", co: "011100", cop: "000010", nwords: 1, signature_definition: "F0 $F1 $F2 $F3", signature: "mul,$INT-Reg,$INT-Reg,$INT-Reg", signatureRaw: "mul $reg1 $reg2 $reg3", fields: [
      {name: "mul", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "INT-Reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2*reg3"},
    {name: "nop", co: "000000", cop: "000000", nwords: 1, signature_definition: "F0", signature: "nop", signatureRaw: "nop", fields: [
      {name: "nop", type: "co", startbit: 31, stopbit: 26},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: ""},
    {name: "or", co: "000000", cop: "100101", nwords: 1, signature_definition: "F0 $F1 $F2 $F3", signature: "or,$INT-Reg,$INT-Reg,$INT-Reg", signatureRaw: "or $reg1 $reg2 $reg3", fields: [
      {name: "or", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "INT-Reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2|reg3"},
    {name: "ori", co: "001101", cop: null, nwords: 1, signature_definition: "F0 $F1 $F2 F3", signature: "ori,$INT-Reg,$INT-Reg,inm", signatureRaw: "ori $reg1 $reg2 val", fields: [
      {name: "ori", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=reg2|val"},
    {name: "sub", co: "000000", cop: "100010", nwords: 1, signature_definition: "F0 $F1 $F2 $F3", signature: "sub,$INT-Reg,$INT-Reg,$INT-Reg", signatureRaw: "sub $reg1 $reg2 $reg3", fields: [
      {name: "sub", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "INT-Reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2-reg3"},
    {name: "sw", co: "000103", cop: null, nwords: 1, signature_definition: "F0 $F1 F2 ($F3)", signature: "sw,$INT-Reg,$inm,($INT-Reg)", signatureRaw: "sw $reg1 val ($reg2)", fields: [
      {name: "sw", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
      {name: "reg2", type: "INT-Reg", startbit: 25, stopbit: 21},
    ], definition: "MP.w.(val+reg2)=reg1"},
    {name: "xor", co: "000000", cop: "100110", nwords: 1, signature_definition: "F0 $F1 $F2 $F3", signature: "xor,$INT-Reg,$INT-Reg,$INT-Reg", signatureRaw: "xor $reg1 $reg2 $reg3", fields: [
      {name: "xor", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "INT-Reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2^reg3"},
    {name: "xori", co: "001110", cop: null, nwords: 1, signature_definition: "F0 $F1 $F2 F3", signature: "xori,$INT-Reg,$INT-Reg,inm", signatureRaw: "xori $reg1 $reg2 val", fields: [
      {name: "xori", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=reg2^val"},
    {name: "lui", co: "001111", cop: null, nwords: 1, signature_definition: "F0 $F1 F2", signature: "lui,$INT-Reg,inm", signatureRaw: "lui $reg1 val", fields: [
      {name: "lui", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=val<<16"},*/
  ],pseudoinstructions:[
    /*{name: "move", nwords: 1, signature_definition: "move $F0 $F1", signature: "move,$INT-Reg,$INT-Reg", signatureRaw: "move $reg1 $reg2", fields: [
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      ], definition: "add reg1 $r0 reg2;"},
    {name: "addi", nwords: 1, signature_definition: "addi $F0 $F1 F2", signature: "addi,$INT-Reg,$INT-Reg,inm", signatureRaw: "addi $reg1 $reg2 val", fields: [
      {name: "reg1", type: "INT-Reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "INT-Reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
      ], definition: "lui $at Field.3.(31,16); ori $at $at Field.3.(15,0); add $reg1 $reg2 $at;"},*/
  ], directives:[
    /*{name:".kdata", kindof:"segment", size:0 },
    {name:".ktext", kindof:"segment", size:0 },
    {name:".data", kindof:"segment", size:0 },
    {name:".text", kindof:"segment", size:0 },
    {name:".byte", kindof:"datatype", size:1 },
    {name:".half", kindof:"datatype", size:2 },
    {name:".word", kindof:"datatype", size:4 },
    {name:".space", kindof:"datatype", size:1 },
    {name:".ascii", kindof:"datatype", size:1 },
    {name:".asciiz", kindof:"datatype", size:1 },
    {name:".align", kindof:"datatype", size:0 },*/
  ]};

var componentsTypes = [
  { text: 'Integer', value: 'integer' },
  { text: 'Floating point', value: 'floating point' },
  { text: 'Control', value: 'control' },
]

var kindofTypes = [
  { text: 'segment', value: 'segment' },
  { text: 'datatype', value: 'datatype' },
]

memory = [
  {Address: 0x01000, Binary: [
    {Addr: 0x01000, DefBin: "01", Bin: "01", Tag: 'a'},
    {Addr: 0x01001, DefBin: "ff", Bin: "ff", Tag: null},
    {Addr: 0x01002, DefBin: "07", Bin: "07", Tag: null},
    {Addr: 0x01003, DefBin: "0a", Bin: "0a", Tag: 'd'},
  ]},
  {Address: 0x01004, Binary: [
    {Addr: 0x01004, DefBin: "61", Bin: "61", Tag: 'b'},
    {Addr: 0x01005, DefBin: "65", Bin: "65", Tag: null},
    {Addr: 0x01006, DefBin: "6c", Bin: "6c", Tag: 'c'},
    {Addr: 0x01007, DefBin: "50", Bin: "50", Tag: null},
  ]},
]

var  instructions = []

/*Direccion para la siguiente instruccion compilada*/
var address = 0x0000;

/*Instrucciones pendientes de compilar*/
var pending_instructions = [];

/*Mensajes de error compilador*/
var compileError =[
  {mess1: "Empty label", mess2: ""},
  {mess1: "Repeated tag: ", mess2: ""},
  {mess1: "Instruction '", mess2: "' not found"},
  {mess1: "Incorrect signature --> ", mess2: ""},
  {mess1: "Register '", mess2: "' not found"},
  {mess1: "Immediate number '", mess2: "' is too big"},
  {mess1: "Immediate number '", mess2: "' is not valid"},
  {mess1: "Tag '", mess2: "' is not valid"},
  {mess1: "Address '", mess2: "' is too big"},
  {mess1: "Address '", mess2: "' is not valid"},
  {mess1: "This field '", mess2: "' must start with a '('"},
  {mess1: "This field '", mess2: "' must end with a ')'"},
  {mess1: "This field is too small to encode in binary '", mess2: ""},
];

/*Notificaciones mostradas*/
var notifications = [];

/*Indice de compilacion*/
var tokenIndex = 0;

/*Indice de ejecucion*/
var executionIndex = 0;

/*Variables que almacenan el codigo introducido*/
var code_assembly = '';

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

function binaryStringToInt( b ) {
    return parseInt(b, 2);
}

window.app = new Vue({
  el: "#app",
  data: {

    /*ALERTA GLOBAL*/
    alertMessaje: '',
    type: '',
    dismissSecs: 3,
    dismissCountDown: 0,

    /*ALERTA MODAL*/
    dismissSecsMod: 3,
    dismissCountDownMod: 0,

    /*Todas las alertas*/
    notifications: notifications,

    /*PAGINA CARGA ARQUITECTURA*/
    /*Configuraciones Disponibles*/
    arch_available: architecture_available,
    /*Background de cada uno de los cards del menu*/
    back_card: back_card,
    /*Fecha copia de seguidad*/
    date_copy:'',
    /*Datos de la nueva arquitectura*/
    name_arch: '',
    description_arch: '',
    load_arch: '',
    /*Nombre del fichero a guardar*/
    name_arch_save: '',
    /*Numero de bits de la arquitectura*/
    number_bits: 32,
    /*Asingacion de la arquitectura empleada*/
    architecture: architecture,
    /*Tabla hash arquitectura*/
    architecture_hash: architecture_hash,
    /*Listado de tipos de componentes*/
    componentsTypes:componentsTypes,
    /*Listado de registros de coma flotante*/
    simple_reg:[],
    /*Campos de la tabla de componentes*/
    archFields: ['name', 'ID', 'nbits', 'default_value', 'properties', 'actions'],
    /*Edicion de la arquitectura*/
    formArchitecture: {
      name: '',
      id: '',
      type: '',
      defValue: '',
      properties: [],
      precision: '',
    },
    /*Reset de la arquitectura*/
    modalResetArch: {
      title: '',
      element: '',
    },
    /*Edicion de un componente*/
    modalEditComponent: {
      title: '',
      element: '',
    },
    /*Borrado de un componente*/
    modalDeletComp:{
      title: '',
      element: '',
    },
    /*Nuevo elemento*/
    modalNewElement:{
      title: '',
      element: '',
      type: '',
      double_precision: '',
      simple1: '',
      simple2: '',
    },
    /*Edicion de un elemento*/
    modalEditElement:{
      title: '',
      element: '',
      type: '',
      double_precision: '',
      simple1: '',
      simple2: '',
    },
    /*Borrado de un elemento*/
    modalDeletElement:{
      title: '',
      element: '',
    },
    /*Nombre de la arquitectura*/
    architecture_name: '',
    /*Variables para mostrar modales*/
    showNewComponent: false,
    showEditComponent: false,
    showNewElement: false,
    showEditElement: false,


    /*PAGINA DE INSTRUCCIONES*/
    instFields: ['name', 'co', 'cop', 'nwords', 'signature', 'signatureRaw', 'fields', 'definition', 'actions'],
    /*Edicion de las instrucciones*/
    formInstruction: {
      name: '',
      co: '',
      cop: '',
      nwords: 1,
      numfields: 1,
      nameField: [],
      typeField: [],
      startBitField: [],
      stopBitField: [],
      assignedCop: false,
      signature:'',
      signatureRaw: '',
      signature_definition: '',
      definition: '',
    },
    /*Barra de paginas formulario instrucciones*/
    instructionFormPage: 1,
    instructionFormPageLink: ['#Principal', '#Fields', '#Signature', '#Definition'],
    /*Variables para el selector de campos tabla*/
    instSel: '',
    /*Reset de las instrucciones*/
    modalResetInst:{
      title: '',
      element: '',
    },
    /*Borrado de una instruccion*/
    modalDeletInst:{
      title: '',
      element: '',
      index: 0,
    },
    /*Edicion de una instruccion*/
    modalEditInst:{
      title: '',
      element: '',
      co: '',
      cop: '',
    },
    /*Campos instruccion*/
    modalViewFields:{
      title: '',
      element: '',
      co: '',
      cop: '',
    },

    /*Mostrar modal*/
    showNewInstruction: false,
    showEditInstruction: false,

    /*Asignacion de valores de la tabla de instrucciones*/
    archInstructions: ['Break', 'Address', 'Label', 'User Instructions', 'Loaded Instructions'],
    instructions: instructions,


    /*PAGINA DE PSEUDOINSTRUCCIONES*/
    pseudoinstFields: ['name', 'nwords', 'signature', 'signatureRaw', 'fields', 'definition', 'actions'],
    /*Edicion de las instrucciones*/
    formPseudoinstruction: {
      name: '',
      nwords: 1,
      numfields: 0,
      nameField: [],
      typeField: [],
      startBitField: [],
      stopBitField: [],
      signature:'',
      signatureRaw: '',
      signature_definition: '',
      definition: '',
    },
    /*Reset de las instrucciones*/
    modalResetPseudoinst:{
      title: '',
      element: '',
    },
    /*Borrado de una instruccion*/
    modalDeletPseudoinst:{
      title: '',
      element: '',
      index: 0,
    },
    /*Edicion de una instruccion*/
    modalEditPseudoinst:{
      title: '',
      element: '',
      index: 0,
    },

    /*PAGINA DE DIRECTIVAS*/
    directivesFields: ['name', 'kindof', 'size', 'actions'],

    formDirective:{
      name: '',
      kindof: '',
      size: 0,
    },
    /*Reset de la arquitectura*/
    modalResetDir: {
      title: '',
      element: '',
    },
    modalDeletDir:{
      title: '',
      element: '',
    },
    /*Listado de tipos de componentes*/
    kindofTypes:kindofTypes,

    modalEditDirective:{
      title: '',
      element: '',
    },

    /*Mostrar modal*/
    showNewPseudoinstruction: false,
    showEditPseudoinstruction: false,


    /*MEMORIA*/
    /*Campos tabla memoria*/
    memFields: ['Address', 'Binary', 'Value'],
    /*Asignacion de valores de la tabla de memoria*/
    memory: memory,


    /*CARGA Y LECTURA ENSAMBLADOR*/
    /*Variables donde se guardan los ficheros cargados*/
    load_assembly: '',
    /*Variables donde se guardan los nombre de los ficheros guardados*/
    save_assembly: '',
    /*Modal error compilacion*/
    modalAssemblyError:{
      code1: '',
      code2: '',
      code3: '',
      error:'',
    },


    /*PAGINA SIMULADOR*/
    /*Nuevo valor del registro*/
    newValue: '',
    /*Registros a mostrar*/
    register_type: 'integer',
    /*Consola*/
    display: '',
    keyboard: '',
    
  },
  computed: {

  },
  methods:{
    /*ALERTA GLOBAL*/
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    /*ALERTA MODAL*/
    countDownChangedMod (dismissCountDown) {
      this.dismissCountDownMod = dismissCountDown;
    },

    /*Nombres de barra de paginacion*/
    linkGen (pageNum) {
      return this.instructionFormPageLink[pageNum - 1]
    },
    pageGen (pageNum) {
      return this.instructionFormPageLink[pageNum - 1].slice(1)
    },

    /*VALIDADOR FORMULARIOS*/
    valid(value){
      for (var i = 0; i <this.formInstruction.typeField.length; i++) {
        if(this.formInstruction.typeField[i]=='cop'){
          this.formInstruction.assignedCop = true;
          break;
        }
        if(i == this.formInstruction.typeField.length-1){
          this.formInstruction.assignedCop = false;
        }
      }

      if(parseInt(value) != 0){
        if(!value){
          return false;
        }
        else{
          return true;
        }
      }
      else{
        return true;
      }
    },

    /*PAGINA CARGA ARQUITECTURA*/
    /*Carga las arquitecturas que hay disponibles y comprueba si hay una copia de seguridad*/
    load_arch_available(){
      $.getJSON('architecture/available_arch.json', function(cfg){
        architecture_available = cfg;
        
        if (typeof(Storage) !== "undefined") {
          if(localStorage.getItem("load_architectures_available") != null){
            var auxArch = localStorage.getItem("load_architectures_available");
            var aux = JSON.parse(auxArch);

            for (var i = 0; i < aux.length; i++) {
              architecture_available.push(aux[i]);
              load_architectures_available.push(aux[i]);

              var auxArch2 = localStorage.getItem("load_architectures");
              var aux2 = JSON.parse(auxArch2);
              load_architectures.push(aux2[i]);
            }
          }
        }

        app._data.arch_available = architecture_available;

        for (var i = 0; i < architecture_available.length; i++) {
          back_card.push({name: architecture_available[i].name , background: "default"});
        }
      })
    },

    /*Cambia el background del card seleccionado*/
    change_background(name, type){
      if(type == 1){
        for (var i = 0; i < back_card.length; i++) {
          if(name == back_card[i].name){
            back_card[i].background = "secondary";
          }
          else{
            back_card[i].background = "default";
          }
        }
      }
      if(type == 0){
        for (var i = 0; i < back_card.length; i++) {
          back_card[i].background = "default";
        }
      }
    },

    /*Muestra modal si hay copia de seguridad*/
    backupCopyModal(){
      if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("architecture_copy") != null && localStorage.getItem("assembly_copy") != null && localStorage.getItem("date_copy") != null){
          this.date_copy = localStorage.getItem("date_copy")
          this.$refs.copyRef.show();
        }
      }
    },

    /*Carga la copia de seguridad*/
    load_copy(){
      $(".loading").show();
      architecture = JSON.parse(localStorage.getItem("architecture_copy"));
      app._data.architecture = architecture;
      textarea_assembly_editor.setValue(localStorage.getItem("assembly_copy"));

      architecture_hash = [];
      for (var i = 0; i < architecture.components.length; i++) {
        architecture_hash.push({name: architecture.components[i].name, index: i}); 
        app._data.architecture_hash = architecture_hash;
      }

      this.reset();

      $("#architecture_menu").hide();
      $("#simulator").show();
      $("#save_btn_arch").show();
      $("#assembly_btn_arch").show();
      $("#load_arch_btn_arch").hide();
      $("#sim_btn_arch").show();
      $("#load_arch").hide();
      $("#load_menu_arch").hide();
      $("#view_components").show();
      $(".loading").hide();

      this.$refs.copyRef.hide();

      app._data.alertMessaje = 'The backup has been loaded correctly';
      app._data.type ='success';
      app._data.dismissCountDown = app._data.dismissSecs;
      var date = new Date();
      notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
    },

    /*Elimina la copia de seguridad*/
    remove_copy(){
      localStorage.removeItem("architecture_copy");
      localStorage.removeItem("assembly_copy");
      localStorage.removeItem("date_copy");

      this.$refs.copyRef.hide();
    },

    /*Carga la arquitectura seleccionada*/
    load_arch_select(e){
      $(".loading").show();

      for (var i = 0; i < load_architectures.length; i++) {
        if(e == load_architectures[i].id){
          architecture = JSON.parse(load_architectures[i].architecture);
          app._data.architecture = architecture;

          architecture_hash = [];
          for (var i = 0; i < architecture.components.length; i++) {
            architecture_hash.push({name: architecture.components[i].name, index: i}); 
            app._data.architecture_hash = architecture_hash;
          }

          app._data.architecture_name = e;

          $("#architecture_menu").hide();
          $("#simulator").show();
          $("#save_btn_arch").show();
          $("#assembly_btn_arch").show();
          $("#load_arch_btn_arch").hide();
          $("#sim_btn_arch").show();
          $("#load_arch").hide();
          $("#load_menu_arch").hide();
          $("#view_components").show();
          $(".loading").hide();

          app._data.alertMessaje = 'The selected architecture has been loaded correctly';
          app._data.type ='success';
          app._data.dismissCountDown = app._data.dismissSecs;
          var date = new Date();
          notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
          
          return;
        }
      }

      $.getJSON('architecture/'+e+'.json', function(cfg){
        architecture = cfg;
        app._data.architecture = architecture;

        architecture_hash = [];
        for (var i = 0; i < architecture.components.length; i++) {
          architecture_hash.push({name: architecture.components[i].name, index: i}); 
          app._data.architecture_hash = architecture_hash;
        }

        app._data.architecture_name = e;

        $("#architecture_menu").hide();
        $("#simulator").show();
        $("#save_btn_arch").show();
        $("#assembly_btn_arch").show();
        $("#load_arch_btn_arch").hide();
        $("#sim_btn_arch").show();
        $("#load_arch").hide();
        $("#load_menu_arch").hide();
        $("#view_components").show();
        $(".loading").hide();

        app._data.alertMessaje = 'The selected architecture has been loaded correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
      });
    },

    /*Lectura del JSON de la arquitectura seleccionada*/
    read_arch(e){
      $(".loading").show();

      var file;
      var reader;
      var files = document.getElementById('arch_file').files;

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        reader = new FileReader();
        reader.onloadend = onFileLoaded;
        reader.readAsBinaryString(file);
      }

      function onFileLoaded(event) {
        architecture_available.push({name: app._data.name_arch, img: "./images/personalized_logo.png", alt: app._data.name_arch + " logo" , id:"select_conf"+app._data.name_arch , description: app._data.description_arch});
        load_architectures_available.push({name: app._data.name_arch, img: "./images/personalized_logo.png", alt: app._data.name_arch + " logo" , id:"select_conf"+app._data.name_arch , description: app._data.description_arch});

        back_card.push({name: architecture_available[architecture_available.length-1].name , background: "default"});

        load_architectures.push({id: app._data.name_arch, architecture: event.currentTarget.result});

        if (typeof(Storage) !== "undefined") {
          var auxArch = JSON.stringify(load_architectures, null, 2);
          localStorage.setItem("load_architectures", auxArch);

          auxArch = JSON.stringify(load_architectures_available, null, 2);
          localStorage.setItem("load_architectures_available", auxArch);
        }

        app._data.alertMessaje = 'The selected architecture has been loaded correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()});
        
        app._data.name_arch = '';
        app._data.description_arch = '';
        app._data.load_arch = '';

        $(".loading").hide();
      }
    },

    /*Guarda la arquitectura actual en un JSON*/
    arch_save(){
      $(".loading").show();

      var textToWrite = JSON.stringify(architecture, null, 2);
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/json' });
      var fileNameToSaveAs;

      if(this.name_arch_save == ''){
        fileNameToSaveAs = "architecture.json";
      }
      else{
        fileNameToSaveAs = this.name_arch_save + ".json";
      }

      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "My Hidden Link";

      window.URL = window.URL || window.webkitURL;

      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();

      $(".loading").hide();
      app._data.alertMessaje = 'Save architecture';
      app._data.type ='success';
      app._data.dismissCountDown = app._data.dismissSecs;
      var date = new Date();
      notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
    },

    remove_cache_arch(index){

      var id = architecture_available[index].name;

      for (var i = 0; i < load_architectures.length; i++) {
        if(load_architectures[i].id == id){
          load_architectures.splice(i, 1);
        }
      }

      for (var i = 0; i < load_architectures_available.length; i++) {
        if(load_architectures_available[i].name == id){
          load_architectures_available.splice(i, 1);
        }
      }

      architecture_available.splice(index, 1);

      var auxArch = JSON.stringify(load_architectures, null, 2);
      localStorage.setItem("load_architectures", auxArch);

      auxArch = JSON.stringify(load_architectures_available, null, 2);
      localStorage.setItem("load_architectures_available", auxArch);

      app._data.alertMessaje = 'Architecture deleted successfully';
      app._data.type ='success';
      app._data.dismissCountDown = app._data.dismissSecs;
      var date = new Date();
      notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
    },

    default_arch(item){
      for (var i = 0; i < load_architectures_available.length; i++) {
        if(load_architectures_available[i].name == item){
          return true;
        }
      }
      return false;
    },

    /*Asigna id a los registros*/
    element_id(name, type, double){
      var id = 0;
      for(var i = 0; i < architecture.components.length; i++){
        for(var j = 0; j < architecture.components[i].elements.length; j++){
          if(architecture.components[i].elements[j].name == name){
            return id;
          }
          if(architecture.components[i].type == type && architecture.components[i].double_precision == double){
            id++;
          }
        }
      }
    },

    /*Modal de alerta de reset*/
    resetArchModal(elem, button){
      this.modalResetArch.title = "Reset " + elem + " registers";
      this.modalResetArch.element = elem;
      this.$root.$emit('bv::show::modal', 'modalResetArch', button);
    },

    /*Resetea la arquitectura*/
    resetArchitecture(arch){
      $(".loading").show();
      $.getJSON('architecture/'+arch+'.json', function(cfg){
        architecture.components = cfg.components;
        app._data.architecture = architecture;

        architecture_hash = [];
        for (var i = 0; i < architecture.components.length; i++) {
          architecture_hash.push({name: architecture.components[i].name, index: i}); 
          app._data.architecture_hash = architecture_hash;
        }

        $(".loading").hide();
        app._data.alertMessaje = 'The registers has been reset correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
      });
    },

    /*Comprueba que estan todos los campos del formulario de nuevo componente*/
    newComponentVerify(evt){
      $(".loading").show();
      evt.preventDefault();
      if (!this.formArchitecture.name || !this.formArchitecture.type) {
        $(".loading").hide();
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        this.newComponent()
      }
    },

    /*Crea un nuevo componente*/
    newComponent(){
      for (var i = 0; i < architecture_hash.length; i++) {
        if(this.formArchitecture.name == architecture_hash[i].name){
          app._data.alertMessaje = 'The component already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.showNewComponent = false;

      var precision = false;
      if(this.formArchitecture.precision == "precision"){
        precision = true;
      }

      var newComp = {name: this.formArchitecture.name, type: this.formArchitecture.type, double_precision: precision ,elements:[]};
      architecture.components.push(newComp);
      var newComponentHash = {name: this.formArchitecture.name, index: architecture_hash.length};
      architecture_hash.push(newComponentHash);

      this.formArchitecture.name='';
      this.formArchitecture.type='';
      this.formArchitecture.precision='';
      $(".loading").hide();
    },

    /*Muestra el modal para editar un componente*/
    editCompModal(comp, index, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditComponent.title = "Edit Component";
      this.modalEditComponent.element = comp;

      this.formArchitecture.name = comp;

      this.$root.$emit('bv::show::modal', 'modalEditComponent', button);
    },

    /*Comprueba que estan todos los campos del formulario de editar component*/
    editCompVerify(evt, comp){
      $(".loading").show();

      evt.preventDefault();
      if (!this.formArchitecture.name) {
        $(".loading").hide();
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        this.editComponent(comp);
      }
    },

    /*Edita un componente*/
    editComponent(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        if((this.formArchitecture.name == architecture_hash[i].name) && (comp != this.formArchitecture.name)){
          app._data.alertMessaje = 'The component already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.showEditComponent = false;

      for (var i = 0; i < architecture_hash.length; i++) {
        if(comp == architecture_hash[i].name){
          architecture_hash[i].name = this.formArchitecture.name;
          architecture.components[i].name = this.formArchitecture.name;
        }
      }
      this.formArchitecture.name='';
      $(".loading").hide();
    },

    /*Muestra el modal de confirmacion de borrado de un componente*/
    delCompModal(elem, button){
      this.modalDeletComp.title = "Delete Component";
      this.modalDeletComp.element = elem;
      this.$root.$emit('bv::show::modal', 'modalDeletComp', button);
    },

    /*Borra un componente*/
    delComponent(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        if(comp == architecture_hash[i].name){
          architecture.components.splice(i,1);
          architecture_hash.splice(i,1);
          for (var j = 0; j < architecture_hash.length; j++){
            architecture_hash[j].index = j;
          }
        }
      }
    },

    /*Muestra el modal para nuevo un elemento*/
    newElemModal(comp, index, button){
      app._data.dismissCountDownMod = 0;

      this.modalNewElement.title = "New element";
      this.modalNewElement.element = comp;
      this.modalNewElement.type = architecture.components[index].type;
      this.modalNewElement.double_precision = architecture.components[index].double_precision;

      this.$root.$emit('bv::show::modal', 'modalNewElement', button);

      app._data.simple_reg = [];
      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length && architecture.components[i].type =="floating point" && architecture.components[i].double_precision == false; j++){
          app._data.simple_reg.push({ text: architecture.components[i].elements[j].name, value: architecture.components[i].elements[j].name},)
        }
      }

      var id = 0;
      for(var i = 0; i < architecture.components.length; i++){
        for(var j = 0; j < architecture.components[i].elements.length; j++){
          if(architecture.components[i].name == comp && architecture.components[i].elements.length-1 == j){
            id++;
            this.formArchitecture.id = id;
          }
          if(architecture.components[i].type == architecture.components[index].type && architecture.components[i].double_precision == architecture.components[index].double_precision){
            id++;
          }
        }
      }
    },

    /*Comprueba que estan todos los campos del formulario de nuevo elemento*/
    newElementVerify(evt, comp){
      $(".loading").show();
      evt.preventDefault();
      if (!this.formArchitecture.name) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        if(!this.formArchitecture.defValue && this.formArchitecture.double_precision == false){
          $(".loading").hide();
          app._data.alertMessaje = 'Please complete all fields';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
        }
        else if(isNaN(this.formArchitecture.defValue)){
          $(".loading").hide();
          app._data.alertMessaje = 'The default value must be a number';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
        }
        else{
          this.newElement(comp);
        }
      }
    },

    /*Crea un nuevo elemento*/
    newElement(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length; j++){
          if(this.formArchitecture.name == architecture.components[i].elements[j].name){
            $(".loading").hide();
            app._data.alertMessaje = 'The element already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        } 
      }

      this.showNewElement = false;

      for (var i = 0; i < architecture_hash.length; i++) {
        if((comp == architecture_hash[i].name)&&(architecture.components[i].type == "integer")){
          var newElement = {name:this.formArchitecture.name, nbits: this.number_bits, value: bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value, default_value:bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value, properties: this.formArchitecture.properties};
          architecture.components[i].elements.push(newElement);
          this.formArchitecture.name='';
          this.formArchitecture.defValue='';
          this.formArchitecture.properties=[];
          break;
        }
        if((comp == architecture_hash[i].name)&&(architecture.components[i].type == "control")){
          var newElement = {name:this.formArchitecture.name, nbits: this.number_bits, value: bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value, default_value:bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value, properties: ["read", "write"]};
          architecture.components[i].elements.push(newElement);
          this.formArchitecture.name='';
          this.formArchitecture.defValue='';
          this.formArchitecture.properties=[];
          break;
        }
        if((comp == architecture_hash[i].name)&&(architecture.components[i].type == "floating point")&&(architecture.components[i].double_precision == false)){
          var newElement = {name:this.formArchitecture.name, nbits: this.number_bits, value: parseFloat(this.formArchitecture.defValue), default_value:parseFloat(this.formArchitecture.defValue), properties: this.formArchitecture.properties};
          architecture.components[i].elements.push(newElement);
          this.formArchitecture.name='';
          this.formArchitecture.defValue='';
          this.formArchitecture.properties=[];
          break;
        }
        if((comp == architecture_hash[i].name)&&(architecture.components[i].type == "floating point")&&(architecture.components[i].double_precision == true)){
          var aux_new;

          var aux_value;
          var aux_sim1;
          var aux_sim2;

          for (var a = 0; a < architecture_hash.length; a++) {
            for (var b = 0; b < architecture.components[a].elements.length; b++) {
              if(architecture.components[a].elements[b].name == this.formArchitecture.simple1){
                aux_sim1 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].default_value));
              }
              if(architecture.components[a].elements[b].name == this.formArchitecture.simple2){
                aux_sim2 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].default_value));
              }
            }
          }

          aux_value = aux_sim1 + aux_sim2;
          aux_new = this.hex2double("0x" + aux_value);

          var newElement = {name:this.formArchitecture.name, nbits: this.number_bits*2, value: aux_new, properties: this.formArchitecture.properties};
          architecture.components[i].elements.push(newElement);
          this.formArchitecture.name='';
          this.formArchitecture.id ='';
          this.formArchitecture.defValue='';
          this.formArchitecture.properties=[];
          break;
        }
      }
      $(".loading").hide();
    },
    
    /*Muestra el modal de editar un elemento*/
    editElemModal(elem, comp, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditElement.title = "Edit Element";
      this.modalEditElement.element = elem;
      this.modalEditElement.type = architecture.components[comp].type;
      this.modalEditElement.double_precision = architecture.components[comp].double_precision;

      app._data.simple_reg = [];
      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length && architecture.components[i].type =="floating point" && architecture.components[i].double_precision == false; j++){
          app._data.simple_reg.push({ text: architecture.components[i].elements[j].name, value: architecture.components[i].elements[j].name},)
        }
      }

      for(var j=0; j < architecture.components[comp].elements.length; j++){
        if(elem == architecture.components[comp].elements[j].name){
          this.formArchitecture.name = elem;
          this.formArchitecture.properties = architecture.components[comp].elements[j].properties;
          if(this.modalEditElement.double_precision == true){
            this.formArchitecture.simple1 = architecture.components[comp].elements[j].simple_reg[0];
            this.formArchitecture.simple2 = architecture.components[comp].elements[j].simple_reg[1];
          }
          else{
            this.formArchitecture.defValue = (architecture.components[comp].elements[j].default_value).toString();
          }
        }
      }

      var id = 0;
      for(var i = 0; i < architecture.components.length; i++){
        for(var j = 0; j < architecture.components[i].elements.length; j++){
          if(architecture.components[i].elements[j].name == this.formArchitecture.name){
            this.formArchitecture.id = id;
          }
          if(architecture.components[i].type == architecture.components[comp].type && architecture.components[i].double_precision == architecture.components[comp].double_precision){
            id++;
          }
        }
      }

      this.$root.$emit('bv::show::modal', 'modalEditElement', button);
    },

    /*Comprueba que estan todos los campos del formulario de editar elemento*/
    editElementVerify(evt, comp){
      $(".loading").show();
      evt.preventDefault();
      if (!this.formArchitecture.name || !this.formArchitecture.defValue) {
        $(".loading").hide();
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } 
      else if(isNaN(this.formArchitecture.defValue)){
        $(".loading").hide();
        app._data.alertMessaje = 'The default value must be a number';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else {
        this.editElement(comp);
      }
    },

    /*Edita un elemento*/
    editElement(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length; j++){
          if((this.formArchitecture.name == architecture.components[i].elements[j].name) && (comp != this.formArchitecture.name)){
            $(".loading").hide();
            app._data.alertMessaje = 'The element already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        } 
      }

      this.showEditElement = false;

      for (var i = 0; i < architecture_hash.length; i++) {
        for(var j=0; j < architecture.components[i].elements.length; j++){
          if(comp == architecture.components[i].elements[j].name){
            architecture.components[i].elements[j].name = this.formArchitecture.name;
            if(architecture.components[i].type == "control" || architecture.components[i].type == "integer"){
              architecture.components[i].elements[j].default_value= bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value;
            }
            else{
              if(architecture.components[i].double_precision == false){
                architecture.components[i].elements[j].default_value= parseFloat(this.formArchitecture.defValue, 10);
              }
              else{
                
                var aux_value;
                var aux_sim1;
                var aux_sim2;

                for (var a = 0; a < architecture_hash.length; a++) {
                  for (var b = 0; b < architecture.components[a].elements.length; b++) {
                    if(architecture.components[a].elements[b].name == this.formArchitecture.simple1){
                      aux_sim1 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].value));
                    }
                    if(architecture.components[a].elements[b].name == this.formArchitecture.simple2){
                      aux_sim2 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].value));
                    }
                  }
                }

                aux_value = aux_sim1 + aux_sim2;

                architecture.components[i].elements[j].value = this.hex2double("0x" + aux_value);

                architecture.components[i].elements[j].simple_reg[0] = this.formArchitecture.simple1;
                architecture.components[i].elements[j].simple_reg[1] = this.formArchitecture.simple2;
              }
            }
            architecture.components[i].elements[j].properties = this.formArchitecture.properties;
          }
        }
      } 
      this.formArchitecture.name='';
      this.formArchitecture.id='';
      this.formArchitecture.defValue='';
      this.formArchitecture.properties=[];
      this.formArchitecture.simple1='';
      this.formArchitecture.simple2='';
      $(".loading").hide();
    },

    /*Muestra el modal para confirmar el borrado*/
    delElemModal(elem, button){
      this.modalDeletElement.title = "Delete Element";
      this.modalDeletElement.element = elem;
      this.$root.$emit('bv::show::modal', 'modalDeletElement', button);
    },

    /*Borra un elemento*/
    delElement(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        for(var j=0; j < architecture.components[i].elements.length; j++){
          if(comp == architecture.components[i].elements[j].name){
            architecture.components[i].elements.splice(j,1);
          }
        }
      }
    },

    /*PAGINA DE INSTRUCCIONES*/
    /*Genera la signtura para las intrucciones*/
    generateSignatureInst(){
      var signature = this.formInstruction.signature_definition;

      var re = new RegExp("^ +");
      this.formInstruction.signature_definition= this.formInstruction.signature_definition.replace(re, "");

      re = new RegExp(" +", "g");
      this.formInstruction.signature_definition = this.formInstruction.signature_definition.replace(re, " ");

      re = new RegExp("^ +");
      signature= signature.replace(re, "");

      re = new RegExp(" +", "g");
      signature = signature.replace(re, " ");

      for (var z = 0; z < this.formInstruction.numfields; z++) {
        re = new RegExp("[Ff]"+z, "g");

        if(z == 0){
          signature = signature.replace(re, this.formInstruction.name);
        }
        else{
          signature = signature.replace(re, this.formInstruction.typeField[z]);
        }
      }

      re = new RegExp(" ", "g");
      signature = signature.replace(re , ",");


      var signatureRaw = this.formInstruction.signature_definition;

      re = new RegExp("^ +");
      signatureRaw= signatureRaw.replace(re, "");

      re = new RegExp(" +", "g");
      signatureRaw = signatureRaw.replace(re, " ");

      for (var z = 0; z < this.formInstruction.numfields; z++) {
        re = new RegExp("[Ff]"+z, "g");

        signatureRaw = signatureRaw.replace(re, this.formInstruction.nameField[z]);
      }

      this.formInstruction.signature = signature;
      this.formInstruction.signatureRaw = signatureRaw;
    },

    generateSignaturePseudo(){
      var signature = this.formPseudoinstruction.signature_definition;

      var re = new RegExp("^ +");
      this.formPseudoinstruction.signature_definition= this.formInstruction.signature_definition.replace(re, "");

      re = new RegExp(" +", "g");
      this.formPseudoinstruction.signature_definition = this.formInstruction.signature_definition.replace(re, " ");

      re = new RegExp("^ +");
      signature= signature.replace(re, "");

      re = new RegExp(" +", "g");
      signature = signature.replace(re, " ");

      for (var z = 0; z < this.formPseudoinstruction.numfields; z++) {
        re = new RegExp("[Ff]"+z, "g");

        signature = signature.replace(re, this.formPseudoinstruction.typeField[z]);
      }

      re = new RegExp(" ", "g");
      signature = signature.replace(re , ",");


      var signatureRaw = this.formPseudoinstruction.signature_definition;

      re = new RegExp("^ +");
      signatureRaw= signatureRaw.replace(re, "");

      re = new RegExp(" +", "g");
      signatureRaw = signatureRaw.replace(re, " ");

      for (var z = 0; z < this.formPseudoinstruction.numfields; z++) {
        re = new RegExp("[Ff]"+z, "g");

        signatureRaw = signatureRaw.replace(re, this.formPseudoinstruction.nameField[z]);
      }

      this.formPseudoinstruction.signature = signature;
      this.formPseudoinstruction.signatureRaw = signatureRaw;
    },


    /*Visualizacion del modal con los campos de la instruccion*/
    viewFielsInst(elem, co, cop, button){
      $(".loading").show();
      this.modalViewFields.title = "Fields of " + elem;
      this.modalViewFields.element = elem;
      for (var i = 0; i < architecture.instructions.length; i++) {
        if(elem == architecture.instructions[i].name && co == architecture.instructions[i].co && cop == architecture.instructions[i].cop){
          this.formInstruction.name = architecture.instructions[i].name;
          this.formInstruction.cop = architecture.instructions[i].cop;
          this.formInstruction.co = architecture.instructions[i].co;
          app._data.modalViewFields.co = architecture.instructions[i].co;
          app._data.modalViewFields.cop = architecture.instructions[i].cop;
          this.formInstruction.numfields = architecture.instructions[i].fields.length;

          for (var j = 0; j < architecture.instructions[i].fields.length; j++) {
            this.formInstruction.nameField [j]= architecture.instructions[i].fields[j].name;
            this.formInstruction.typeField[j] = architecture.instructions[i].fields[j].type;
            this.formInstruction.startBitField[j] = architecture.instructions[i].fields[j].startbit;
            this.formInstruction.stopBitField[j] = architecture.instructions[i].fields[j].stopbit;
          }

        }
      }

      $(".loading").hide();
      this.$root.$emit('bv::show::modal', 'modalViewFields', button);
    },

    /*Modal de alerta de reset*/
    resetInstModal(elem, button){
      this.modalResetInst.title = "Reset " + elem + " instructions";
      this.modalResetInst.element = elem;
      this.$root.$emit('bv::show::modal', 'modalResetInst', button);
    },

    resetInstructions(arch){
      $(".loading").show();
      $.getJSON('architecture/'+arch+'.json', function(cfg){
        architecture.instructions = cfg.instructions;
        app._data.architecture = architecture;

        $(".loading").hide();
        app._data.alertMessaje = 'The instruction set has been reset correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
      });
    },

    /*Comprueba que estan todos los campos del formulario de nueva instruccion*/
    newInstVerify(evt){
      $(".loading").show();
      evt.preventDefault();

      var empty = 0;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] == 'cop'){
          if(!this.formInstruction.cop){
            empty = 1;
          }
          else{
            if((this.formInstruction.cop).length != (this.formInstruction.startBitField[z] - this.formInstruction.stopBitField[z] + 1)){
              $(".loading").hide();
              app._data.alertMessaje = 'The length of cop should be ' + (this.formInstruction.startBitField[z] - this.formInstruction.stopBitField[z] + 1) + ' binary numbers';
              app._data.type ='danger';
              app._data.dismissCountDownMod = app._data.dismissSecsMod;
              return;
            }

            for (var i = 0; i < this.formInstruction.cop.length; i++) {
              if(this.formInstruction.cop.charAt(i) != "0" && this.formInstruction.cop.charAt(i) != "1"){
                $(".loading").hide();
                app._data.alertMessaje = 'The value of cop must be binary';
                app._data.type ='danger';
                app._data.dismissCountDownMod = app._data.dismissSecsMod;
                return;
              }
            }
          }
        }
      }

      for (var i = 0; i < this.formInstruction.co.length; i++) {
        console.log(this.formInstruction.co.charAt(i))
        if(this.formInstruction.co.charAt(i) != "0" && this.formInstruction.co.charAt(i) != "1"){
          $(".loading").hide();
          app._data.alertMessaje = 'The value of co must be binary';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      for (var i = 0; i < this.formInstruction.numfields; i++) {
        if(this.formInstruction.nameField.length <  this.formInstruction.numfields || this.formInstruction.typeField.length <  this.formInstruction.numfields || this.formInstruction.startBitField.length <  this.formInstruction.numfields || this.formInstruction.stopBitField.length <  this.formInstruction.numfields){
          empty = 1;
        }
      }

      if (!this.formInstruction.name || !this.formInstruction.co || !this.formInstruction.nwords || !this.formInstruction.numfields || !this.formInstruction.signature_definition || !this.formInstruction.definition || empty == 1) {
        $(".loading").hide();
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } 
      else if(isNaN(this.formInstruction.co)){
        $(".loading").hide();
        app._data.alertMessaje = 'The field co must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if(isNaN(this.formInstruction.cop)){
        $(".loading").hide();
        app._data.alertMessaje = 'The field cop must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if((this.formInstruction.co).length != (this.formInstruction.startBitField[0] - this.formInstruction.stopBitField[0] + 1)){
        $(".loading").hide();
        app._data.alertMessaje = 'The length of co should be ' + (this.formInstruction.startBitField[0] - this.formInstruction.stopBitField[0] + 1) + ' binary numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else {
        this.newInstruction();
      }
    },

    /*Inserta una nueva instruccion*/
    newInstruction(){
      for (var i = 0; i < architecture.instructions.length; i++) {
        if(this.formInstruction.co == architecture.instructions[i].co){
          if((!this.formInstruction.cop)){
            $(".loading").hide();
            app._data.alertMessaje = 'The instruction already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        }
      }

      for (var i = 0; i < architecture.instructions.length; i++) {
        if((this.formInstruction.cop == architecture.instructions[i].cop) && (!this.formInstruction.cop == false)){
          $(".loading").hide();
          app._data.alertMessaje = 'The instruction already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.showNewInstruction = false;

      var cop = false;

      this.generateSignatureInst();

      var signature = this.formInstruction.signature;
      var signatureRaw = this.formInstruction.signatureRaw;


      if(cop == false){
        this.formInstruction.cop='';
      }

      var newInstruction = {name: this.formInstruction.name, signature_definition: this.formInstruction.signature_definition, signature: signature, signatureRaw: signatureRaw, co: this.formInstruction.co , cop: this.formInstruction.cop, nwords: this.formInstruction.nwords , fields: [], definition: this.formInstruction.definition};
      architecture.instructions.push(newInstruction);

      for (var i = 0; i < this.formInstruction.numfields; i++) {
        var newField = {name: this.formInstruction.nameField[i], type: this.formInstruction.typeField[i], startbit: this.formInstruction.startBitField[i], stopbit: this.formInstruction.stopBitField[i]};
        architecture.instructions[architecture.instructions.length-1].fields.push(newField);
      }

      this.formInstruction.name='';
      this.formInstruction.cop='';
      this.formInstruction.co ='';
      this.formInstruction.nwords =1;
      this.formInstruction.numfields=1;
      this.formInstruction.nameField=[];
      this.formInstruction.typeField=[];
      this.formInstruction.startBitField=[];
      this.formInstruction.stopBitField=[];
      this.formInstruction.definition='';
      this.formInstruction.signature_definition='';
      this.formInstruction.signature='';
      this.formInstruction.signatureRaw='';
      this.formInstruction.assignedCop=false;
      this.instructionFormPage = 1;
      $(".loading").hide();
      
    },

    /*Muestra el modal de confirmacion de borrado de una instruccion*/
    delInstModal(elem, index, button){
      this.modalDeletInst.title = "Delete Instruction";
      this.modalDeletInst.element = elem;
      this.modalDeletInst.index = index;
      this.$root.$emit('bv::show::modal', 'modalDeletInst', button);
    },

    /*Borra una instruccion*/
    delInstruction(index){
      architecture.instructions.splice(index,1);
    },

    /*Muestra el modal de editar instruccion*/
    editInstModal(elem, co, cop, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditInst.title = "Edit Instruction";
      this.modalEditInst.element = elem;
      for (var i = 0; i < architecture.instructions.length; i++) {
        if(elem == architecture.instructions[i].name && co == architecture.instructions[i].co && cop == architecture.instructions[i].cop){
          this.formInstruction.name = architecture.instructions[i].name;
          this.formInstruction.cop = architecture.instructions[i].cop;
          this.formInstruction.co = architecture.instructions[i].co;
          app._data.modalEditInst.co = architecture.instructions[i].co;
          app._data.modalEditInst.cop = architecture.instructions[i].cop;
          this.formInstruction.nwords = architecture.instructions[i].nwords;
          this.formInstruction.numfields = architecture.instructions[i].fields.length;
          this.formInstruction.signature_definition= architecture.instructions[i].signature_definition;
          this.formInstruction.definition = architecture.instructions[i].definition;

          for (var j = 0; j < architecture.instructions[i].fields.length; j++) {
            this.formInstruction.nameField [j]= architecture.instructions[i].fields[j].name;
            this.formInstruction.typeField[j] = architecture.instructions[i].fields[j].type;
            this.formInstruction.startBitField[j] = architecture.instructions[i].fields[j].startbit;
            this.formInstruction.stopBitField[j] = architecture.instructions[i].fields[j].stopbit;
          }

          this.generateSignatureInst();

        }
      }

      this.$root.$emit('bv::show::modal', 'modalEditInst', button);
    },

    /*Comprueba que estan todos los campos del formulario de editar instruccion*/
    editInstVerify(evt, inst, co, cop){
      $(".loading").show();
      evt.preventDefault();

      var empty = 0;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] == 'cop'){
          if(!this.formInstruction.cop){
            empty = 1;
          }
          else{
            if((this.formInstruction.cop).length != (this.formInstruction.startBitField[z] - this.formInstruction.stopBitField[z] + 1)){
              $(".loading").hide();
              app._data.alertMessaje = 'The length of cop should be ' + (this.formInstruction.startBitField[z] - this.formInstruction.stopBitField[z] + 1) + ' binary numbers';
              app._data.type ='danger';
              app._data.dismissCountDownMod = app._data.dismissSecsMod;
              return;
            }

            for (var i = 0; i < this.formInstruction.cop.length; i++) {
              if(this.formInstruction.cop.charAt(i) != "0" && this.formInstruction.cop.charAt(i) != "1"){
                $(".loading").hide();
                app._data.alertMessaje = 'The value of cop must be binary';
                app._data.type ='danger';
                app._data.dismissCountDownMod = app._data.dismissSecsMod;
                return;
              }
            }
          }
        }
      }

      for (var i = 0; i < this.formInstruction.co.length; i++) {
        if(this.formInstruction.co.charAt(i) != "0" && this.formInstruction.co.charAt(i) != "1"){
          $(".loading").hide();
          app._data.alertMessaje = 'The value of co must be binary';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      for (var i = 0; i < this.formInstruction.numfields; i++) {
        if(!this.formInstruction.nameField[i] || !this.formInstruction.typeField[i] || (!this.formInstruction.startBitField[i] && this.formInstruction.startBitField[i] != 0) || (!this.formInstruction.stopBitField[i] && this.formInstruction.stopBitField[i] != 0)){
          empty = 1;
        }
      }
      if (!this.formInstruction.name || !this.formInstruction.co || !this.formInstruction.nwords || !this.formInstruction.numfields || !this.formInstruction.signature_definition || !this.formInstruction.definition || empty == 1) {
        $(".loading").hide();
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if(isNaN(this.formInstruction.co)){
        $(".loading").hide();
        app._data.alertMessaje = 'The field co must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if(isNaN(this.formInstruction.cop)){
        $(".loading").hide();
        app._data.alertMessaje = 'The field cop must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if((this.formInstruction.co).length != (this.formInstruction.startBitField[0] - this.formInstruction.stopBitField[0] + 1)){
        $(".loading").hide();
        app._data.alertMessaje = 'The length of co should be ' + (this.formInstruction.startBitField[0] - this.formInstruction.stopBitField[0] + 1) + ' binary numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else {
        this.editInstruction(inst, co, cop);
      }
    },

    /*edita una instruccion*/
    editInstruction(comp, co, cop){
      var exCop = false;

      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] == 'cop'){
          exCop = true;
        }
      }

      for (var i = 0; i < architecture.instructions.length; i++) {
        if((this.formInstruction.co == architecture.instructions[i].co) && (this.formInstruction.co != co) && (exCop == false)){
          if(((!this.formInstruction.cop) || (exCop != true))){
            $(".loading").hide();
            app._data.alertMessaje = 'The instruction already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        }
      }

      for (var i = 0; i < architecture.instructions.length && exCop == true ; i++) {
        if((this.formInstruction.cop == architecture.instructions[i].cop) && (!this.formInstruction.cop == false) && (this.formInstruction.cop != cop)){
          $(".loading").hide();
          app._data.alertMessaje = 'The instruction already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.showEditInstruction = false;

      for (var i = 0; i < architecture.instructions.length; i++){
        if(architecture.instructions[i].name == comp && architecture.instructions[i].co == co && architecture.instructions[i].cop == cop){
          architecture.instructions[i].name = this.formInstruction.name;
          architecture.instructions[i].co = this.formInstruction.co;
          architecture.instructions[i].cop = this.formInstruction.cop;
          architecture.instructions[i].nwords = this.formInstruction.nwords;
          architecture.instructions[i].signature_definition = this.formInstruction.signature_definition;
          architecture.instructions[i].definition = this.formInstruction.definition;

          for (var j = 0; j < this.formInstruction.numfields; j++){
            if(j < architecture.instructions[i].fields.length){
              architecture.instructions[i].fields[j].name = this.formInstruction.nameField[j];
              architecture.instructions[i].fields[j].type = this.formInstruction.typeField[j];
              architecture.instructions[i].fields[j].startbit = this.formInstruction.startBitField[j];
              architecture.instructions[i].fields[j].stopbit = this.formInstruction.stopBitField[j];
            }
            else{
              var newField = {name: this.formInstruction.nameField[j], type: this.formInstruction.typeField[j], startbit: this.formInstruction.startBitField[j], stopbit: this.formInstruction.stopBitField[j]};
              architecture.instructions[i].fields.push(newField);
            }
          }

          this.generateSignatureInst();

          var signature = this.formInstruction.signature;
          var signatureRaw = this.formInstruction.signatureRaw;

          if(exCop == false){
            architecture.instructions[i].cop='';
          }

          architecture.instructions[i].signature = signature;
          architecture.instructions[i].signatureRaw = signatureRaw;

          if(architecture.instructions[i].fields.length > this.formInstruction.numfields){
            architecture.instructions[i].fields.splice(this.formInstruction.numfields, (architecture.instructions[i].fields.length - this.formInstruction.numfields));
          }

        }
      }

      this.formInstruction.name='';
      this.formInstruction.cop='';
      this.formInstruction.co ='';
      this.formInstruction.nwords =1;
      this.formInstruction.numfields=1;
      this.formInstruction.nameField=[];
      this.formInstruction.typeField=[];
      this.formInstruction.startBitField=[];
      this.formInstruction.stopBitField=[];
      this.formInstruction.signature_definition='';
      this.formInstruction.signature='';
      this.formInstruction.signatureRaw='';
      this.formInstruction.definition='';
      this.instructionFormPage = 1;
      $(".loading").hide();
    },

    /*PAGINA DE PSEUDOINSTRUCCIONES*/

    viewFielsPseudo(elem, index, button){
      this.modalViewFields.title = "Edit " + elem;
      this.modalViewFields.element = elem;
      
      this.formPseudoinstruction.name = architecture.pseudoinstructions[index].name;
      this.formPseudoinstruction.numfields = architecture.pseudoinstructions[index].fields.length;

      for (var j = 0; j < architecture.pseudoinstructions[index].fields.length; j++) {
        this.formPseudoinstruction.nameField[j] = architecture.pseudoinstructions[index].fields[j].name;
        this.formPseudoinstruction.typeField[j] = architecture.pseudoinstructions[index].fields[j].type;
        this.formPseudoinstruction.startBitField[j] = architecture.pseudoinstructions[index].fields[j].startbit;
        this.formPseudoinstruction.stopBitField[j] = architecture.pseudoinstructions[index].fields[j].stopbit;
      }

      this.$root.$emit('bv::show::modal', 'modalViewPseudoFields', button);
    },

    /*Modal de alerta de reset*/
    resetPseudoinstModal(elem, button){
      this.modalResetPseudoinst.title = "Reset " + elem + " pseudoinstructions";
      this.modalResetPseudoinst.element = elem;
      this.$root.$emit('bv::show::modal', 'modalResetPseudoinst', button);
    },

    resetPseudoinstructionsModal(arch){
      $(".loading").show();
      $.getJSON('architecture/'+arch+'.json', function(cfg){
        architecture.pseudoinstructions = cfg.pseudoinstructions;
        app._data.architecture = architecture;

        $(".loading").hide();
        app._data.alertMessaje = 'The pseudoinstruction set has been reset correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
      });
    },

    /*Muestra el modal de confirmacion de borrado de una instruccion*/
    delPseudoinstModal(elem, index, button){
      this.modalDeletPseudoinst.title = "Delete Pseudointruction";
      this.modalDeletPseudoinst.element = elem;
      this.modalDeletPseudoinst.index = index;
      this.$root.$emit('bv::show::modal', 'modalDeletPseudoinst', button);
    },

    /*Borra una instruccion*/
    delPseudoinstruction(index){
      architecture.pseudoinstructions.splice(index,1);
    },

    /*Muestra el modal de editar instruccion*/
    editPseudoinstModal(elem, index, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditPseudoinst.title = "Edit Pseudoinstruction";
      this.modalEditPseudoinst.element = elem;
      this.modalEditPseudoinst.index = index;
      
      this.formPseudoinstruction.name = architecture.pseudoinstructions[index].name;
      this.formPseudoinstruction.nwords = architecture.pseudoinstructions[index].nwords;
      this.formPseudoinstruction.numfields = architecture.pseudoinstructions[index].fields.length;
      this.formPseudoinstruction.signature_definition = architecture.pseudoinstructions[index].signature_definition;
      this.formPseudoinstruction.definition = architecture.pseudoinstructions[index].definition;

      for (var j = 0; j < architecture.pseudoinstructions[index].fields.length; j++) {
        this.formPseudoinstruction.nameField[j] = architecture.pseudoinstructions[index].fields[j].name;
        this.formPseudoinstruction.typeField[j] = architecture.pseudoinstructions[index].fields[j].type;
        this.formPseudoinstruction.startBitField[j] = architecture.pseudoinstructions[index].fields[j].startbit;
        this.formPseudoinstruction.stopBitField[j] = architecture.pseudoinstructions[index].fields[j].stopbit;
      }

      this.generateSignaturePseudo();

      this.$root.$emit('bv::show::modal', 'modalEditPseudoinst', button);
    },

    /*Comprueba que estan todos los campos del formulario de editar instruccion*/
    editPseudoinstVerify(evt, inst, index){
      $(".loading").show();
      evt.preventDefault();

      var vacio = 0;

      for (var i = 0; i < this.formPseudoinstruction.numfields; i++) {
        if(!this.formPseudoinstruction.nameField[i] || !this.formPseudoinstruction.typeField[i] || (!this.formPseudoinstruction.startBitField[i] && this.formPseudoinstruction.startBitField[i] != 0) || (!this.formPseudoinstruction.stopBitField[i] && this.formPseudoinstruction.stopBitField[i] != 0)){
          vacio = 1;
        }
      }

      var result = this.pseudoDefValidator(this.formPseudoinstruction.name, this.formPseudoinstruction.definition);

      if(result == -1){
        $(".loading").hide();
        return;
      }

      if (!this.formPseudoinstruction.name || !this.formPseudoinstruction.nwords || !this.formPseudoinstruction.numfields || !this.formPseudoinstruction.signature_definition || !this.formPseudoinstruction.definition || vacio == 1) {
        $(".loading").hide();
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else {
        this.editPseudoinstruction(inst, index);
      }
    },

    /*edita una instruccion*/
    editPseudoinstruction(comp, index){

      this.showEditPseudoinstruction = false;
      
      architecture.pseudoinstructions[index].name = this.formPseudoinstruction.name;
      architecture.pseudoinstructions[index].nwords = this.formPseudoinstruction.nwords;
      architecture.pseudoinstructions[index].definition = this.formPseudoinstruction.definition;
      architecture.pseudoinstructions[index].signature_definition = this.formPseudoinstruction.signature_definition;

      for (var j = 0; j < this.formPseudoinstruction.numfields; j++){
        if(j < architecture.pseudoinstructions[index].fields.length){
          architecture.pseudoinstructions[index].fields[j].name = this.formPseudoinstruction.nameField[j];
          architecture.pseudoinstructions[index].fields[j].type = this.formPseudoinstruction.typeField[j];
          architecture.pseudoinstructions[index].fields[j].startbit = this.formPseudoinstruction.startBitField[j];
          architecture.pseudoinstructions[index].fields[j].stopbit = this.formPseudoinstruction.stopBitField[j];
        }
        else{
          var newField = {name: this.formPseudoinstruction.nameField[j], type: this.formPseudoinstruction.typeField[j], startbit: this.formPseudoinstruction.startBitField[j], stopbit: this.formPseudoinstruction.stopBitField[j]};
          architecture.pseudoinstructions[index].fields.push(newField);
        }
      }

      this.generateSignaturePseudo();

      var signature = this.formPseudoinstruction.signature;
      var signatureRaw = this.formPseudoinstruction.signatureRaw;



      architecture.pseudoinstructions[index].signature = signature;
      architecture.pseudoinstructions[index].signatureRaw = signatureRaw;

      if(architecture.pseudoinstructions[index].fields.length > this.formPseudoinstruction.numfields){
        architecture.pseudoinstructions[index].fields.splice(this.formPseudoinstruction.numfields, (architecture.pseudoinstructions[i].fields.length - this.formPseudoinstruction.numfields));
      }

      this.formPseudoinstruction.name='';
      this.formPseudoinstruction.nwords =1;
      this.formPseudoinstruction.numfields=0;
      this.formPseudoinstruction.nameField=[];
      this.formPseudoinstruction.typeField=[];
      this.formPseudoinstruction.startBitField=[];
      this.formPseudoinstruction.stopBitField=[];
      this.formPseudoinstruction.definition='';
      this.formPseudoinstruction.signature_definition='';
      this.formPseudoinstruction.signature='';
      this.formPseudoinstruction.signatureRaw='';
      this.instructionFormPage = 1;
      $(".loading").hide();
    },

    /*Comprueba que estan todos los campos del formulario de nueva pseudoinstruccion*/
    newPseudoinstVerify(evt){
      $(".loading").show();
      evt.preventDefault();

      var vacio = 0;

      for (var i = 0; i < this.formPseudoinstruction.numfields; i++) {
        if(this.formPseudoinstruction.nameField.length <  this.formPseudoinstruction.numfields || this.formPseudoinstruction.typeField.length <  this.formPseudoinstruction.numfields || this.formPseudoinstruction.startBitField.length <  this.formPseudoinstruction.numfields || this.formPseudoinstruction.stopBitField.length <  this.formPseudoinstruction.numfields){
          vacio = 1;
        }
      }

      var result = this.pseudoDefValidator(this.formPseudoinstruction.name, this.formPseudoinstruction.definition);

      if(result == -1){
        $(".loading").hide();
        return;
      }

      if (!this.formPseudoinstruction.name || !this.formPseudoinstruction.nwords || !this.formPseudoinstruction.numfields || !this.formPseudoinstruction.signature_definition || !this.formPseudoinstruction.definition || vacio == 1) {
        $(".loading").hide();
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } 
      else {
        this.newPseudoinstruction();
      }
    },

    /*Inserta una nueva pseudoinstruccion*/
    newPseudoinstruction(){

      this.showNewPseudoinstruction = false;

      this.generateSignaturePseudo();

      var signature = this.formPseudoinstruction.signature;
      var signatureRaw = this.formPseudoinstruction.signatureRaw;



      var newPseudoinstruction = {name: this.formPseudoinstruction.name, signature_definition: this.formPseudoinstruction.signature_definition, signature: signature, signatureRaw: signatureRaw, nwords: this.formPseudoinstruction.nwords , fields: [], definition: this.formPseudoinstruction.definition};
      architecture.pseudoinstructions.push(newPseudoinstruction);

      for (var i = 0; i < this.formPseudoinstruction.numfields; i++) {
        var newField = {name: this.formPseudoinstruction.nameField[i], type: this.formPseudoinstruction.typeField[i], startbit: this.formPseudoinstruction.startBitField[i], stopbit: this.formPseudoinstruction.stopBitField[i]};
        architecture.pseudoinstructions[architecture.pseudoinstructions.length-1].fields.push(newField);
      }

      this.formPseudoinstruction.name='';
      this.formPseudoinstruction.nwords =1;
      this.formPseudoinstruction.numfields=0;
      this.formPseudoinstruction.nameField=[];
      this.formPseudoinstruction.typeField=[];
      this.formPseudoinstruction.startBitField=[];
      this.formPseudoinstruction.stopBitField=[];
      this.formPseudoinstruction.definition='';
      this.formPseudoinstruction.signature_definition='';
      this.formPseudoinstruction.signature='';
      this.formPseudoinstruction.signatureRaw='';
      this.formPseudoinstruction.assignedCop=false;
      this.instructionFormPage = 1;
      $(".loading").hide();
    },

    pseudoDefValidator(name, definition){

      var re = new RegExp("^\n+");
      definition = definition.replace(re, "");
      
      re = new RegExp("\n+", "g");
      definition = definition.replace(re, "");

      console.log(definition)

      re = /{([^}]*)}/g;
      var code = re.exec(definition);

      if(code != null){
        while(code != null){
          console.log(code)
          var instructions = code[1].split(";");

          for (var j = 0; j < instructions.length-1; j++){
            re = new RegExp("^ +");
            instructions[j] = instructions[j].replace(re, "");

            re = new RegExp(" +", "g");
            instructions[j] = instructions[j].replace(re, " ");

            var instructionParts = instructions[j].split(" ");

            console.log(instructionParts)

            var found = false;
            for (var i = 0; i < architecture.instructions.length; i++){
              if(architecture.instructions[i].name == instructionParts[0]){
                found = true;
                var numFields = 0;
                for (var z = 0; z < architecture.instructions[i].fields.length; z++){
                  if(architecture.instructions[i].fields[z].type != "cop"){
                    numFields++;
                  }

                  if(architecture.instructions[i].fields[z].type == "INT-Reg" || architecture.instructions[i].fields[z].type == "FP-Reg" ||architecture.instructions[i].fields[z].type == "Ctrl-Reg"){
                    var found = false;
                    for (var a = 0; a < architecture.components.length; a++){
                      for (var b = 0; b < architecture.components[a].elements.length; b++){
                        if("$" + architecture.components[a].elements[b].name == instructionParts[z]){
                          found = true;
                        }
                      }
                    }

                    for (var a = 0; a < architecture.pseudoinstructions.length; a++){
                      if(architecture.pseudoinstructions[a].name == name){
                        for (var b = 0; b < architecture.pseudoinstructions[a].fields.length; b++){
                          if(architecture.pseudoinstructions[a].fields[b].name == instructionParts[z]){
                            found = true;
                          }
                        }
                      }
                    }

                    if(!found){
                      app._data.alertMessaje = 'Register ' + instructionParts[z] + ' not found';
                      app._data.type ='danger';
                      app._data.dismissCountDownMod = app._data.dismissSecsMod;
                      return -1;
                    }
                  }

                  if(architecture.instructions[i].fields[z].type == "inm"){
                    var fieldsLength = architecture.instructions[i].fields[z].startbit - architecture.instructions[i].fields[z].stopbit + 1;

                    if(instructionParts[z].match(/^0x/)){
                      var value = instructionParts[z].split("x");
                      console.log(isNaN(parseInt(instructionParts[z], 16)))
                      if(isNaN(parseInt(instructionParts[z], 16)) == true){
                        app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is not valid";
                        app._data.type ='danger';
                        app._data.dismissCountDownMod = app._data.dismissSecsMod;
                        return -1;
                      }

                      if(value[1].length*4 > fieldsLength){
                        app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is too big";
                        app._data.type ='danger';
                        app._data.dismissCountDownMod = app._data.dismissSecsMod;
                        return -1;
                      }
                    }
                    else if (instructionParts[z].match(/^(\d)+\.(\d)+/)){
                      if(isNaN(parseFloat(instructionParts[z])) == true){
                        app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is not valid";
                        app._data.type ='danger';
                        app._data.dismissCountDownMod = app._data.dismissSecsMod;
                        return -1;
                      }

                      if(this.float2bin(parseFloat(instructionParts[z])).length > fieldsLength){
                        app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is too big";
                        app._data.type ='danger';
                        app._data.dismissCountDownMod = app._data.dismissSecsMod;
                        return -1;
                      }
                    }
                    else if(isNaN(parseInt(instructionParts[z]))){

                    }
                    else {
                      var numAux = parseInt(instructionParts[z], 10);
                      if(isNaN(parseInt(instructionParts[z])) == true){
                        app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is not valid";
                        app._data.type ='danger';
                        app._data.dismissCountDownMod = app._data.dismissSecsMod;
                        return -1;
                      }

                      if((numAux.toString(2)).length > fieldsLength){
                        app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is too big";
                        app._data.type ='danger';
                        app._data.dismissCountDownMod = app._data.dismissSecsMod;
                        return -1;
                      }
                    }
                  }

                  if(architecture.instructions[i].fields[z].type == "address"){
                    var fieldsLength = architecture.instructions[i].fields[z].startbit - architecture.instructions[i].fields[z].stopbit + 1;

                    if(instructionParts[z].match(/^0x/)){
                      var value = instructionParts[z].split("x");
                      if(isNaN(parseInt(instructionParts[z], 16)) == true){
                        app._data.alertMessaje = "Address " + instructionParts[z] + " is not valid";
                        app._data.type ='danger';
                        app._data.dismissCountDownMod = app._data.dismissSecsMod;
                        return -1;
                      }

                      if(value[1].length*4 > fieldsLength){
                        app._data.alertMessaje = "Address " + instructionParts[z] + " is too big";
                        app._data.type ='danger';
                        app._data.dismissCountDownMod = app._data.dismissSecsMod;
                        return -1;
                      }

                      
                    }
                  }

                  if(architecture.instructions[i].fields[z].type == "(INT-Reg)" || architecture.instructions[i].fields[z].type == "(FP-Reg)" ||architecture.instructions[i].fields[z].type == "(Ctrl-Reg)"){
                    var found = false;

                    for (var a = 0; a < architecture.components.length; a++){
                      for (var b = 0; b < architecture.components[a].elements.length; b++){
                        if("($" + architecture.components[a].elements[b].name + ")" == instructionParts[z]){
                          found = true;
                        }
                      }
                    }

                    for (var a = 0; a < architecture.pseudoinstructions.length; a++){
                      if(architecture.pseudoinstructions[a].name == name){
                        for (var b = 0; b < architecture.pseudoinstructions[a].fields.length; b++){
                          if("(" + architecture.pseudoinstructions[a].fields[b].name + ")" == instructionParts[z]){
                            found = true;
                          }
                        }
                      }
                    }
                  }

                  if(!found){
                    app._data.alertMessaje = 'Register ' + instructionParts[z] + ' not found';
                    app._data.type ='danger';
                    app._data.dismissCountDownMod = app._data.dismissSecsMod;
                    return -1;
                  }
                }

                if(numFields != instructionParts.length){
                  app._data.alertMessaje = 'Incorrect definition of ' + instructions[j];
                  app._data.type ='danger';
                  app._data.dismissCountDownMod = app._data.dismissSecsMod;
                  return -1;
                }
              }
            }
            if(!found){
              app._data.alertMessaje = 'Instruction ' + instructions[j] + ' do not exists';
              app._data.type ='danger';
              app._data.dismissCountDownMod = app._data.dismissSecsMod;
              return -1;
            }
          }

          definition = definition.replace(code[0], "");

          re = /{([^}]*)}/g;
          code = re.exec(definition);
        }
      }
      else{
        var instructions = definition.split(";");
        console.log(instructions.length)

        if(instructions.length == 1){
          app._data.alertMessaje = 'Enter a ";" at the end of each line of code';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return -1;
        }

        for (var j = 0; j < instructions.length-1; j++){
          var re = new RegExp("^ +");
          instructions[j] = instructions[j].replace(re, "");

          re = new RegExp(" +", "g");
          instructions[j] = instructions[j].replace(re, " ");

          var instructionParts = instructions[j].split(" ");

          var found = false;
          for (var i = 0; i < architecture.instructions.length; i++){
            if(architecture.instructions[i].name == instructionParts[0]){
              found = true;
              var numFields = 0;
              for (var z = 0; z < architecture.instructions[i].fields.length; z++){
                if(architecture.instructions[i].fields[z].type != "cop"){
                  numFields++;
                }

                if(architecture.instructions[i].fields[z].type == "INT-Reg" || architecture.instructions[i].fields[z].type == "FP-Reg" ||architecture.instructions[i].fields[z].type == "Ctrl-Reg"){
                  var found = false;
                  for (var a = 0; a < architecture.components.length; a++){
                    for (var b = 0; b < architecture.components[a].elements.length; b++){
                      if("$" + architecture.components[a].elements[b].name == instructionParts[z]){
                        found = true;
                      }
                    }
                  }

                  for (var a = 0; a < architecture.pseudoinstructions.length; a++){
                    if(architecture.pseudoinstructions[a].name == name){
                      for (var b = 0; b < architecture.pseudoinstructions[a].fields.length; b++){
                        if(architecture.pseudoinstructions[a].fields[b].name == instructionParts[z]){
                          found = true;
                        }
                      }
                    }
                  }

                  if(!found){
                    app._data.alertMessaje = 'Register ' + instructionParts[z] + ' not found';
                    app._data.type ='danger';
                    app._data.dismissCountDownMod = app._data.dismissSecsMod;
                    return -1;
                  }
                }

                if(architecture.instructions[i].fields[z].type == "inm"){
                  var fieldsLength = architecture.instructions[i].fields[z].startbit - architecture.instructions[i].fields[z].stopbit + 1;

                  if(instructionParts[z].match(/^0x/)){
                    var value = instructionParts[z].split("x");
                    console.log(isNaN(parseInt(instructionParts[z], 16)))
                    if(isNaN(parseInt(instructionParts[z], 16)) == true){
                      app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is not valid";
                      app._data.type ='danger';
                      app._data.dismissCountDownMod = app._data.dismissSecsMod;
                      return -1;
                    }

                    if(value[1].length*4 > fieldsLength){
                      app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is too big";
                      app._data.type ='danger';
                      app._data.dismissCountDownMod = app._data.dismissSecsMod;
                      return -1;
                    }
                  }
                  else if (instructionParts[z].match(/^(\d)+\.(\d)+/)){
                    if(isNaN(parseFloat(instructionParts[z])) == true){
                      app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is not valid";
                      app._data.type ='danger';
                      app._data.dismissCountDownMod = app._data.dismissSecsMod;
                      return -1;
                    }

                    if(this.float2bin(parseFloat(instructionParts[z])).length > fieldsLength){
                      app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is too big";
                      app._data.type ='danger';
                      app._data.dismissCountDownMod = app._data.dismissSecsMod;
                      return -1;
                    }
                  }
                  else if(isNaN(parseInt(instructionParts[z]))){

                  }
                  else {
                    var numAux = parseInt(instructionParts[z], 10);
                    if(isNaN(parseInt(instructionParts[z])) == true){
                      app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is not valid";
                      app._data.type ='danger';
                      app._data.dismissCountDownMod = app._data.dismissSecsMod;
                      return -1;
                    }

                    if((numAux.toString(2)).length > fieldsLength){
                      app._data.alertMessaje = "Immediate number " + instructionParts[z] + " is too big";
                      app._data.type ='danger';
                      app._data.dismissCountDownMod = app._data.dismissSecsMod;
                      return -1;
                    }
                  }
                }

                if(architecture.instructions[i].fields[z].type == "address"){
                  var fieldsLength = architecture.instructions[i].fields[z].startbit - architecture.instructions[i].fields[z].stopbit + 1;

                  if(instructionParts[z].match(/^0x/)){
                    var value = instructionParts[z].split("x");
                    if(isNaN(parseInt(instructionParts[z], 16)) == true){
                      app._data.alertMessaje = "Address " + instructionParts[z] + " is not valid";
                      app._data.type ='danger';
                      app._data.dismissCountDownMod = app._data.dismissSecsMod;
                      return -1;
                    }

                    if(value[1].length*4 > fieldsLength){
                      app._data.alertMessaje = "Address " + instructionParts[z] + " is too big";
                      app._data.type ='danger';
                      app._data.dismissCountDownMod = app._data.dismissSecsMod;
                      return -1;
                    }

                    
                  }
                }

                if(architecture.instructions[i].fields[z].type == "(INT-Reg)" || architecture.instructions[i].fields[z].type == "(FP-Reg)" ||architecture.instructions[i].fields[z].type == "(Ctrl-Reg)"){
                  var found = false;

                  for (var a = 0; a < architecture.components.length; a++){
                    for (var b = 0; b < architecture.components[a].elements.length; b++){
                      if("($" + architecture.components[a].elements[b].name + ")" == instructionParts[z]){
                        found = true;
                      }
                    }
                  }

                  for (var a = 0; a < architecture.pseudoinstructions.length; a++){
                    if(architecture.pseudoinstructions[a].name == name){
                      for (var b = 0; b < architecture.pseudoinstructions[a].fields.length; b++){
                        if("(" + architecture.pseudoinstructions[a].fields[b].name + ")" == instructionParts[z]){
                          found = true;
                        }
                      }
                    }
                  }
                }

                if(!found){
                  app._data.alertMessaje = 'Register ' + instructionParts[z] + ' not found';
                  app._data.type ='danger';
                  app._data.dismissCountDownMod = app._data.dismissSecsMod;
                  return -1;
                }
              }

              if(numFields != instructionParts.length){
                app._data.alertMessaje = 'Incorrect definition of ' + instructions[j];
                app._data.type ='danger';
                app._data.dismissCountDownMod = app._data.dismissSecsMod;
                return -1;
              }
            }
          }
          if(!found){
            app._data.alertMessaje = 'Instruction ' + instructions[j] + ' do not exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return -1;
          }
        }
      }
      return 0;
    },











    /*PAGINA DE DIRECTIVAS*/
    /*Modal de alerta de reset*/
    resetDirModal(elem, button){
      this.modalResetDir.title = "Reset " + elem + " directives";
      this.modalResetDir.element = elem;
      this.$root.$emit('bv::show::modal', 'modalResetDir', button);
    },

    resetDirectives(arch){
      $.getJSON('architecture/'+arch+'.json', function(cfg){
        architecture.directives = cfg.directives;
        app._data.architecture = architecture;

        app._data.alertMessaje = 'The directive set has been reset correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
      });
    },

    /*Muestra el modal de confirmacion de borrado de una directiva*/
    delDirModal(elem, button){
      this.modalDeletDir.title = "Delete " + elem;
      this.modalDeletDir.element = elem;
      this.$root.$emit('bv::show::modal', 'modalDeletDir', button);
    },

    /*Borra una instruccion*/
    delDirective(comp){
      for (var i = 0; i < architecture.directives.length; i++) {
        if(comp == architecture.directives[i].name){
          architecture.directives.splice(i,1);
        }
      }
    },

    /*Muestra el modal de editar directiva*/
    editDirModal(elem, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditDirective.title = "Edit " + elem;
      this.modalEditDirective.element = elem;

      for (var i = 0; i < architecture.directives.length; i++) {
        if(elem == architecture.directives[i].name){
          this.formDirective.name = architecture.directives[i].name;
          this.formDirective.kindof = architecture.directives[i].kindof;
          this.formDirective.size = architecture.directives[i].size;
        }
      }
      
      this.$root.$emit('bv::show::modal', 'modalEditDirective', button);
    },

    /*Verifica que se han completado todos los campos*/
    editDirVerify(evt, name){
      evt.preventDefault();

      if (!this.formDirective.name || !this.formDirective.kindof || isNaN(parseInt(this.formDirective.size))) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        this.editDirective(name);
      }
    },

    /*Edita la directiva*/
    editDirective(name){
      for (var i = 0; i < architecture.directives.length; i++) {
        if((this.formDirective.name == architecture.directives[i].name) && (name != this.formDirective.name)){
          app._data.alertMessaje = 'The directive already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.editDirective.hide();

      for (var i = 0; i < architecture.directives.length; i++) {
        if(name == architecture.directives[i].name){
          architecture.directives[i].name = this.formDirective.name;
          architecture.directives[i].kindof = this.formDirective.kindof;
          architecture.directives[i].size = this.formDirective.size;

          this.formDirective.name = '';
          this.formDirective.kindof = '';
          this.formDirective.size = 0;

          return;
        }
      }
    },

    /*Verifica que se han completado todos los campos*/
    newDirVerify(evt){

      evt.preventDefault();

      if (!this.formDirective.name || !this.formDirective.kindof || isNaN(parseInt(this.formDirective.size))) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        this.newDirective();
      }
    },

    /*Crea una nueva directiva*/
    newDirective(){
      for (var i = 0; i < architecture.directives.length; i++) {
        if(this.formDirective.name == architecture.directives[i].name){
          app._data.alertMessaje = 'The directive already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.newDir.hide();

      var newDir = {name: this.formDirective.name, kindof: this.formDirective.kindof, size: this.formDirective.size};
      architecture.directives.push(newDir);

      this.formDirective.name='';
      this.formDirective.kindof='';
      this.formDirective.size=0;
    },
    












    /*PAGINA ENSAMBLADOR*/
    /*Funciones de carga y descarga de ensamblador*/
    read_assembly(e){
      $(".loading").show();
      var file;
      var reader;
      var files = document.getElementById('assembly_file').files;

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        reader = new FileReader();
        reader.onloadend = onFileLoaded;
        reader.readAsBinaryString(file);
      }

      function onFileLoaded(event) {
        code_assembly = event.currentTarget.result;
      }
      $(".loading").hide();
    },

    assembly_update(){
      textarea_assembly_editor.setValue(code_assembly);
    },

    assembly_save(){
      $(".loading").show();
      var textToWrite = textarea_assembly_editor.getValue();
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
      var fileNameToSaveAs;

      if(this.save_assembly == ''){
        fileNameToSaveAs = "assembly.txt";
      }
      else{
        fileNameToSaveAs = this.save_assembly + ".txt";
      }

      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "My Hidden Link";

      window.URL = window.URL || window.webkitURL;

      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();
      $(".loading").hide();
    },

    /*Lee un token*/
    get_token(){
      var assembly = textarea_assembly_editor.getValue();
      var index = tokenIndex;

      if(index == assembly.length){
        return null;
      }

      while((assembly.charAt(index) != '#') && (assembly.charAt(index) != '\t') && (assembly.charAt(index) != '\n') && (assembly.charAt(index) != ' ') && (assembly.charAt(index) != '\r') && (index < assembly.length)){
        index++;
      }

      return assembly.substring(tokenIndex, index);
    },

    /*Avanza al siguente token*/
    next_token(){
      var assembly = textarea_assembly_editor.getValue();
      var index = tokenIndex;

      while((assembly.charAt(index) != '#') && (assembly.charAt(index) != '\t') && (assembly.charAt(index) != '\n') && (assembly.charAt(index) != ' ') && (assembly.charAt(index) != '\r') && (index < assembly.length)){
        index++;
      }

      while(((assembly.charAt(index) == '\t') || (assembly.charAt(index) == '\n') || (assembly.charAt(index) == ' ') || (assembly.charAt(index) == '\r')) && (index < assembly.length)){
        index++;
      }

      if(assembly.charAt(index) == '#'){
        while((assembly.charAt(index) != '\n') && (index < assembly.length)){
          index++;
        }

        while(((assembly.charAt(index) == '\t') || (assembly.charAt(index) == '\n') || (assembly.charAt(index) == ' ') || (assembly.charAt(index) == '\r')) && (index < assembly.length)){
          index++;
        }
      }
      tokenIndex = index;
    },

    /*Coloca el puntero en la primera posicion*/
    first_token(){
      var assembly = textarea_assembly_editor.getValue();
      var index = tokenIndex;

      while(((assembly.charAt(index) == '\t') || (assembly.charAt(index) == '\n') || (assembly.charAt(index) == ' ') || (assembly.charAt(index) == '\r')) && (index < assembly.length)){
        index++;
      }
      tokenIndex = index;
    },

    /*Compilador*/
    assembly_compiler(){
      $(".loading").show();
      instructions = [];
      pending_instructions = [];

      var existsInstruction = true;
      var pseudoinstruccion = false;

      /*Guarda en la memoria del navegador una copia de seguidad*/
      if (typeof(Storage) !== "undefined") {
        var auxArch = JSON.stringify(architecture, null, 2);
        var date = new Date();
        var auxDate = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" - "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

        localStorage.setItem("architecture_copy", auxArch);
        localStorage.setItem("assembly_copy", textarea_assembly_editor.getValue());
        localStorage.setItem("date_copy", auxDate);
      }

      this.first_token();

      if(this.get_token() == null){
        $(".loading").hide();
        app._data.alertMessaje = 'Please enter the assembly code before compiling';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
        
        return;
      }

      while(existsInstruction){
        var token = this.get_token();
        var label = "";
        var validTagPC = true;

        if(token == null){
          tokenIndex = 0;
          break;
        }

        console.log(token)

        var found = false;

        if(token.search(/\:$/) != -1){
          if(token.length == 1){
            this.compileError(0, "", textarea_assembly_editor.posFromIndex(tokenIndex).line);
            $(".loading").hide();
            instructions = [];
            pending_instructions = [];
            return;
          }

          for(var i = 0; i < instructions.length; i++){
            if(instructions[i].Label == token.substring(0,token.length-1)){
              this.compileError(1, token.substring(0,token.length-1), textarea_assembly_editor.posFromIndex(tokenIndex).line);
              $(".loading").hide();
              instructions = [];
              pending_instructions = [];
              return;
            } 
          }

          for(var i = 0; i < pending_instructions.length; i++){
            if(pending_instructions[i].Label == token.substring(0,token.length-1)){
              this.compileError(1, token.substring(0,token.length-1), textarea_assembly_editor.posFromIndex(tokenIndex).line);
              $(".loading").hide();
              instructions = [];
              pending_instructions = [];
              return;
            } 
          }

          label = token.substring(0,token.length-1);
          this.next_token();
          token = this.get_token();
        }

        for(var i = 0; i < architecture.instructions.length; i++){
          if(architecture.instructions[i].name != token){
            continue;
          }

          else{
            var instruction = "";
            var userInstruction = "";

            var numFields = 0;
            found = true;

            for (var j = 0; j < architecture.instructions[i].fields.length; j++){
              if(architecture.instructions[i].fields[j].type != "cop"){
                numFields++;
              }
            }
            console.log(numFields);

            instruction = instruction + token;
            userInstruction = userInstruction + token;

            for (var j = 0; j < numFields - 1; j++){
              this.next_token();
              token = this.get_token();
              instruction = instruction + " " + token;
              userInstruction = userInstruction + " " + token;
            }

            console.log(instruction)
            console.log(label)

            var result = this.instruction_compiler(instruction, userInstruction, label, textarea_assembly_editor.posFromIndex(tokenIndex).line, false, 0);

            if(result == -1){
              $(".loading").hide();
              return;
            }

            this.next_token();
          }
        }

        if(!found){
          var resultPseudo = -2;
          var instruction = "";
          var numToken = 0;

          for (var i = 0; i < architecture.pseudoinstructions.length; i++){
            if(architecture.pseudoinstructions[i].name == token){
              numToken = architecture.pseudoinstructions[i].fields.length;

              instruction = instruction + token;

              for (var i = 0; i < numToken; i++){
                this.next_token();
                token = this.get_token();
                instruction = instruction + " " + token;
              }

              resultPseudo = this.pseudoinstruction_compiler(instruction, label, textarea_assembly_editor.posFromIndex(tokenIndex).line);
            }
          }

          if(resultPseudo == -2){
            this.compileError(2, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

            existsInstruction = false;
            tokenIndex = 0;
            address = 0;
            $(".loading").hide();
            instructions = [];
            pending_instructions = [];
            return;
          }

          if(resultPseudo == -1){
            existsInstruction = false;
            tokenIndex = 0;
            address = 0;
            $(".loading").hide();
            instructions = [];
            pending_instructions = [];
            return;
          }

          this.next_token();

        }
      }

      for(var p = 0; p < pending_instructions.length; p++){
        console.log("PENDING      " + pending_instructions[p].instruction)
        console.log(pending_instructions[p].Label)

        var result = this.instruction_compiler(pending_instructions[p].instruction, pending_instructions[p].instruction, pending_instructions[p].Label, pending_instructions[p].line, true, pending_instructions[p].address);
      
        if(result == -1){
          $(".loading").hide();
          return;
        }

      }

      app._data.alertMessaje = 'Compilation completed successfully';
      app._data.type ='success';
      app._data.dismissCountDown = app._data.dismissSecs;
      var date = new Date();
      notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 

      app._data.instructions = instructions;
      
      this.reset();

      address = 0;
      $(".loading").hide();
    },












    pseudoinstruction_compiler(instruction, label, line){
      var instructionParts = instruction.split(' ');
      var found = false;

      console.log(instructionParts);

      for (var i = 0; i < architecture.pseudoinstructions.length; i++){
        if(architecture.pseudoinstructions[i].name != instructionParts[0]){
          continue;
        }

        else{
          found = true;

          var signatureParts = architecture.pseudoinstructions[i].signature.split(',');
          var signatureRawParts = architecture.pseudoinstructions[i].signatureRaw.split(' ');
          var definition = architecture.pseudoinstructions[i].definition;

          for (var j = 1; j < signatureRawParts.length; j++){
            var aux = signatureRawParts[j].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            re = new RegExp(aux,"g");

            definition = definition.replace(re, instructionParts[j]);
          }

          console.log(definition)

          re = /Field.(\d).(.*?)[;\s]/;
          while (definition.search(re) != -1){
            var match = re.exec(definition);
            console.log(match)

            var value;

            try{
              eval("value = this.field('" + instructionParts[match[1]] +"', '" + match[2] + "')");
            }
            catch(e){
              if (e instanceof SyntaxError) {
                return -1;
              }
            }

            if(value == -1){
              return -1;
            }

            definition = definition.replace("Field." + match[1] + "." + match[2], value);
            re = /Field.(\d).(.*?)[;\s]/;
          }

          console.log(definition)

          var re = /{([^}]*)}/g;
          var code = re.exec(definition);

          if(code != null){
            while(code != null){
              var instructions = code[1].split(";");
              console.log(instructions)

              for (var j = 0; j < instructions.length-1; j++){
                var aux;
                if(j == 0){
                  aux = "this.instruction_compiler('" + instructions[j] + "','" + instruction + "','" + label + "'," + line + ", false, 0)";
                }
                else{
                  aux = "this.instruction_compiler('" + instructions[j] + "','" + instruction + "', ''," + line + ", false, 0)";
                }
                definition = definition.replace(instructions[j]+";", aux+";\n");
              }

              code = re.exec(definition);
            }
          }
          else{
            var instructions = definition.split(";");

            for (var j = 0; j < instructions.length-1; j++){
              var aux;
              if(j == 0){
                aux = "this.instruction_compiler('" + instructions[j] + "','" + instruction + "','" + label + "'," + line + ", false, 0)";
              }
              else{
                aux = "this.instruction_compiler('" + instructions[j] + "','', ''," + line + ", false, 0)";
              }
              definition = definition.replace(instructions[j]+";", aux+";\n");
            }
          }

          console.log(definition)

          try{
            eval(definition);
            console.log("finpseudo")
            return 0;
          }
          catch(e){
            if (e instanceof SyntaxError) {
              return -1;
            }
          }

        }
      }

      if(!found){
        return -1;
      }
    },

    field(field, action){
      console.log(field)
      console.log(action)
      
      if(action == "SIZE"){
        console.log("SIZE")

        if(field.match(/^0x/)){
          var value = field.split("x");
          return value[1].length*4;
        }
        else if (field.match(/^(\d)+\.(\d)+/)){
          return this.float2bin(parseFloat(field)).length;
        }
        else {
          var numAux = parseInt(field, 10);
          return (numAux.toString(2)).length;
        }
      }

      re = /\((.*?)\)/;
      if (action.search(re) != -1){
        var match = re.exec(action);
        var bits = match[1].split(",");

        var startBit = parseInt(bits[0]);
        var endBit = parseInt(bits[1]);

        if(field.match(/^0x/)){
          var num = "";
          num = num.padStart(startBit-endBit, "0");
          var binNum = (parseInt(field, 16).toString(2));
          binNum = binNum.substring(31-startBit, 31-endBit);
          var hexNum = "0x" + this.bin2hex(binNum);

          return hexNum;
        }
        else if (field.match(/^(\d)+\.(\d)+/)){
          var num = "";
          num = num.padStart(startBit-endBit, "0");
          var binNum = this.float2bin(parseFloat(field));
          binNum = binNum.substring(31-startBit, 31-endBit);
          var hexNum = "0x" + this.bin2hex(binNum);

          return hexNum;
        }
        else {
          var num = "";
          num = num.padStart(startBit-endBit, "0");
          var binNum = (parseInt(field, 10)).toString(2);
          binNum = binNum.substring(31-startBit, 31-endBit);
          var hexNum = "0x" + this.bin2hex(binNum);

          return hexNum;
        }
      }

      return -1;
    },
















    instruction_compiler(instruction, userInstruction, label, line, pending, pendingAddress){
      var re = new RegExp("^ +");
      var oriInstruction = instruction.replace(re, "");

      re = new RegExp(" +", "g");
      oriInstruction = oriInstruction.replace(re, " ");

      var instructionParts = oriInstruction.split(' ');
      var validTagPC = true;
      var resultPseudo = -3;

      console.log(label)
      console.log(line)

      for(var i = 0; i < architecture.instructions.length; i++){
        if(architecture.instructions[i].name != instructionParts[0]){
          continue;
        }
        else{
          var binary = "";
          binary = binary.padStart(architecture.instructions[i].nwords * 32, "0");

          var instruction = architecture.instructions[i].signature_definition;
          var userInstruction = userInstruction;

          var signatureDef = architecture.instructions[i].signature_definition;
          signatureDef = signatureDef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          re = new RegExp("[fF][0-9]", "g");
          signatureDef = signatureDef.replace(re, "(.*?)");

          re = new RegExp(",", "g");
          var signature = architecture.instructions[i].signature.replace(re, " ");

          re = new RegExp(signatureDef+"$")
          var match = re.exec(signature);
          var signatureParts = [];
          for(var j = 1; j < match.length; j++){
            signatureParts.push(match[j]);
          }

          match = re.exec(architecture.instructions[i].signatureRaw);
          var signatureRawParts = [];
          for(var j = 1; j < match.length; j++){
            signatureRawParts.push(match[j]);
          }

          console.log(signatureParts)
          console.log(signatureRawParts)

          re = new RegExp(signatureDef+"$")
          if(oriInstruction.search(re) == -1){
            this.compileError(3, architecture.instructions[i].signatureRaw, textarea_assembly_editor.posFromIndex(tokenIndex).line);
                  
            instructions = [];
            pending_instructions = [];
            return -1;
          }

          match = re.exec(oriInstruction);
          instructionParts = [];
          for(var j = 1; j < match.length; j++){
            instructionParts.push(match[j]);
          }
          
          console.log(instructionParts)


          for(var j = 0; j < signatureParts.length; j++){
            switch(signatureParts[j]) {
              case "INT-Reg":
                token = instructionParts[j];

                console.log(token)

                var validReg = false;

                var regNum = 0;

                for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                  if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                    for(var z = 0; z < architecture_hash.length; z++){
                      for(var w = 0; w < architecture.components[z].elements.length; w++){
                        if(token == architecture.components[z].elements[w].name && architecture.components[z].type == "integer"){
                          validReg = true;
                          regNum++;

                          fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                          var reg = regNum;

                          if(reg.toString(2).length > fieldsLength){
                            this.compileError(12, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                            instructions = [];
                            pending_instructions = [];
                            return -1;
                          }

                          binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (reg.toString(2)).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                          //instruction = instruction + " " + token;
                          re = RegExp("[fF][0-9]");
                          instruction = instruction.replace(re, token);
                        }
                        else if(z == architecture_hash.length-1 && w == architecture.components[z].elements.length-1 && validReg == false){
                          this.compileError(4, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                          instructions = [];
                          pending_instructions = [];
                          return -1;
                        }
                        if(architecture.components[z].type == "integer"){
                          regNum++;
                        }
                      }
                    }
                  }
                }

                break;

              case "FP-Reg":
                token = instructionParts[j];

                console.log(token)

                var validReg = false;

                var regNum = 0;

                for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                  if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                    for(var z = 0; z < architecture_hash.length; z++){
                      for(var w = 0; w < architecture.components[z].elements.length; w++){
                        if(token == architecture.components[z].elements[w].name && architecture.components[z].type == "floating point"){
                          validReg = true;
                          regNum++;

                          fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                          var reg = regNum;

                          if(reg.toString(2).length > fieldsLength){
                            this.compileError(12, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                            instructions = [];
                            pending_instructions = [];
                            return -1;
                          }

                          binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (reg.toString(2)).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                          //instruction = instruction + " " + token;
                          re = RegExp("[fF][0-9]");
                          instruction = instruction.replace(re, token);
                        }
                        else if(z == architecture_hash.length-1 && w == architecture.components[z].elements.length-1 && validReg == false){
                          this.compileError(4, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                          instructions = [];
                          pending_instructions = [];
                          return -1;
                        }
                        if(architecture.components[z].type == "floating point"){
                          regNum++;
                        }
                      }
                    }
                  }
                }

                break;

              case "Ctrl-Reg":
                token = instructionParts[j];

                console.log(token)

                var validReg = false;

                var regNum = 0;

                for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                  if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                    for(var z = 0; z < architecture_hash.length; z++){
                      for(var w = 0; w < architecture.components[z].elements.length; w++){
                        if(token == architecture.components[z].elements[w].name && architecture.components[z].type == "control"){
                          validReg = true;
                          regNum++;

                          fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                          var reg = regNum;

                          if(reg.toString(2).length > fieldsLength){
                            this.compileError(12, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                            instructions = [];
                            pending_instructions = [];
                            return -1;
                          }

                          binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (reg.toString(2)).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                          //instruction = instruction + " " + token;
                          re = RegExp("[fF][0-9]");
                          instruction = instruction.replace(re, token);
                        }
                        else if(z == architecture_hash.length-1 && w == architecture.components[z].elements.length-1 && validReg == false){
                          this.compileError(4, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                          instructions = [];
                          pending_instructions = [];
                          return -1;
                        }
                        if(architecture.components[z].type == "control"){
                          regNum++;
                        }
                      }
                    }
                  }
                }

                break;

              case "inm":
                token = instructionParts[j];

                var token_user = "";

                console.log(token)

                for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                  if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                    fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                
                    var inm;

                    if(token.match(/^0x/)){
                      var value = token.split("x");

                      if(value[1].length*4 > fieldsLength){
                        resultPseudo = this.pseudoinstruction_compiler(oriInstruction, label, line);

                        if(resultPseudo == -1){
                          this.compileError(5, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);
                          instructions = [];
                          pending_instructions = [];
                          return -1;
                        }

                      }

                      if(isNaN(parseInt(token, 16)) == true){
                        this.compileError(6, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);
                        instructions = [];
                        pending_instructions = [];
                        return -1;
                      }

                      inm = (parseInt(token, 16)).toString(2);
                    }
                    else if (token.match(/^(\d)+\.(\d)+/)){
                      if(this.float2bin(parseFloat(token)).length > fieldsLength){
                        resultPseudo = this.pseudoinstruction_compiler(oriInstruction, label, line);

                        if(resultPseudo == -1){
                          this.compileError(5, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);
                          instructions = [];
                          pending_instructions = [];
                          return -1;
                        }
                      }

                      if(isNaN(parseFloat(token)) == true){
                        this.compileError(6, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);
                        instructions = [];
                        pending_instructions = [];
                        return -1;
                      }

                      inm = this.float2bin(parseFloat(token, 16));
                    }
                    else if(isNaN(parseInt(token))){
                      if(instructions.length == 0){
                        validTagPC = false;
                      }

                      for (var z = 0; z < instructions.length; z++){
                        if(token == instructions[z].Label){
                          var addr = (parseInt(instructions[z].Address, 16)).toString(2);

                          binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + addr.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);

                          token_user = token;
                          token = instructions[z].Address;

                          validTagPC = true;
                          inm = addr;

                          break;
                        }
                        else if(z == instructions.length-1){
                          validTagPC = false;
                          if(pending == true){
                            this.compileError(7, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                            instructions = [];
                            pending_instructions = [];
                            return -1;
                          }
                        }  
                      }
                    }
                    else {
                      var numAux = parseInt(token, 10);
                      if((numAux.toString(2)).length > fieldsLength){
                        resultPseudo = this.pseudoinstruction_compiler(oriInstruction, label, line);

                        if(resultPseudo == -1){
                          this.compileError(5, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);
                          instructions = [];
                          pending_instructions = [];
                          return -1;
                        }
                      }

                      if(isNaN(parseInt(token)) == true && resultPseudo == -3){
                        this.compileError(6, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);
                        instructions = [];
                        pending_instructions = [];
                        return -1;
                      }

                      inm = (parseInt(token, 10)).toString(2);
                    }
                    if(validTagPC == true){
                      binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + inm.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                    }
                    
                    //instruction = instruction + " " + token;
                    re = RegExp("[fF][0-9]");
                    instruction = instruction.replace(re, token);
                  }
                }

                break;

              case "address":
                token = instructionParts[j];

                console.log(token)

                for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                  if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                    fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;

                    if(token.match(/^0x/)){
                      var value = token.split("x");

                      if(value[1].length*4 > fieldsLength){
                        this.compileError(8, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                        instructions = [];
                        pending_instructions = [];
                        return -1;
                      }

                      if(isNaN(parseInt(token, 16)) == true){
                        this.compileError(9, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                        instructions = [];
                        pending_instructions = [];
                        return -1;
                      }

                      addr = (parseInt(token, 16)).toString(2);
                    
                      binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + addr.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                      //instruction = instruction + " " + token;
                      re = RegExp("[fF][0-9]");
                      instruction = instruction.replace(re, token);
                    }
                    else{
                      var validTag = false;
                      for (var z = 0; z < memory.length; z++){
                        for (var w = 0; w < memory[z].Binary.length; w++){
                          if(token == memory[z].Binary[w].Tag){
                            addr = (memory[z].Binary[w].Addr).toString(2);

                            binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + addr.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                            //instruction = instruction + " " + token;
                            re = RegExp("[fF][0-9]");
                            instruction = instruction.replace(re, token);

                            validTag = true;
                          }
                          if(z == memory.length-1 && w == memory[z].Binary.length-1 && validTag == false){
                            this.compileError(7, token, textarea_assembly_editor.posFromIndex(tokenIndex).line);

                            instructions = [];
                            pending_instructions = [];
                            return -1;
                          }
                        }
                      }
                    }
                  }
                }

                break;

              default:
                token = instructionParts[j];

                console.log(token)

                for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                  if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                    fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                    
                    binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (architecture.instructions[i].co).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit), binary.length);

                    //instruction = instruction + token;
                    re = RegExp("[fF][0-9]");
                    instruction = instruction.replace(re, token);
                  }

                  if(architecture.instructions[i].fields[a].type == "cop"){
                    fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;

                    binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (architecture.instructions[i].cop).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                  }
                }

              break;
            }


          }

          if(validTagPC == false && resultPseudo == -3){
            console.log("pendiente")

            pending_instructions.push({address: address, instruction: instruction, signature: signatureParts, signatureRaw: signatureRawParts, Label: label, instIndex: i, line: textarea_assembly_editor.posFromIndex(tokenIndex).line});

            address = address + (4*architecture.instructions[i].nwords);

            break;
          }

          else{
            if(resultPseudo == -3){
              console.log("no pendiente")

              var padding = "";
              padding = padding.padStart((architecture.instructions[i].nwords*32)-(binary.length), "0");

              binary = binary + padding;

              console.log(binary)
              console.log(instruction)
              if(pending == false){
                instructions.push({ Break: null, Address: "0x" + address.toString(16), Label: label , loaded: instruction, user: userInstruction, _rowVariant: ''});
              }
              else{
                for(var pos = 0; pos < instructions.length; pos++){
                  if(parseInt(instructions[pos].Address, 16) > pendingAddress){
                    instructions.splice(pos, 0, { Break: null, Address: "0x" + pendingAddress.toString(16), Label: label , loaded: instruction, user: userInstruction, _rowVariant: ''});
                    break;
                  }
                }
              }
              address = address + (4*architecture.instructions[i].nwords);

              console.log(instructions)
            }

          }
        }
      } 
    },

    /*Muestra el mensaje de error al compilar*/
    compileError(error, token, line){
      this.$root.$emit('bv::show::modal', 'modalAssemblyError');

      if (line > 0){
        this.modalAssemblyError.code1 = line + "  " + textarea_assembly_editor.getLine(line - 1);
      }
      else{
        this.modalAssemblyError.code1 = "";
      }

      this.modalAssemblyError.code2 = (line + 1) + "  " + textarea_assembly_editor.getLine(line);

      if(line < textarea_assembly_editor.lineCount() - 1){
        this.modalAssemblyError.code3 = (line + 2) + "  " + textarea_assembly_editor.getLine(line + 1);
      }
      else{
        this.modalAssemblyError.code3 = "";
      }

      this.modalAssemblyError.error = compileError[error].mess1 + token + compileError[error].mess2;

      tokenIndex = 0;
    },






























    /*PAGINA SIMULADOR*/
    /*Abre la consola en una ventana*/
    open_console(){
      window.open("./console.html", "WepSim-Console", "width=720, height=auto");
    },

    /*Funciones de los popover*/
    popoverId(i){
      return 'popoverValueContent' + i;
    },

    /*Convierte de hexadecimal a float*/
    hex2float ( hexvalue ){
      var sign     = (hexvalue & 0x80000000) ? -1 : 1;
      var exponent = ((hexvalue >> 23) & 0xff) - 127;
      var mantissa = 1 + ((hexvalue & 0x7fffff) / 0x800000);

      var valuef = sign * mantissa * Math.pow(2, exponent);
      if (-127 == exponent)
        if (1 == mantissa)
          valuef = (sign == 1) ? "+0" : "-0" ;
        else valuef = sign * ((hexvalue & 0x7fffff) / 0x7fffff) * Math.pow(2, -126) ;
      if (128 == exponent)
        if (1 == mantissa)
          valuef = (sign == 1) ? "+Inf" : "-Inf" ;
        else valuef = "NaN" ;

      return valuef ;
    },

    hex2double ( hexvalue ){
      var value = hexvalue.split('x');
      var value_bit = '';

      for (var i = 0; i < value[1].length; i++) {
      	var aux = value[1].charAt(i);
      	aux = (parseInt(aux, 16)).toString(2).padStart(4, "0");
      	value_bit = value_bit + aux;
      }

	  	var buffer = new ArrayBuffer(8);
		  new Uint8Array( buffer ).set( value_bit.match(/.{8}/g).map( binaryStringToInt ) );
		  return new DataView( buffer ).getFloat64(0, false);
    },

    /*Convierte de hexadecimal a char*/
    hex2char8 ( hexvalue ){

    	var num_char = ((hexvalue.toString().length))/2;
    	var exponent = 0;
    	var pos = 0;

      var valuec = new Array();

      for (var i = 0; i < num_char; i++) {
        var auxHex = hexvalue.substring(pos, pos+2);
        valuec[i] = String.fromCharCode(parseInt(auxHex, 16));
        pos = pos + 2;
      }

      var characters = '';

      for (var i = 0; i < valuec.length; i++) {
        characters = characters + valuec[i] + ' ';
      }

      return  characters;
    },

    float2bin (number){
	    var i, result = "";
	    var dv = new DataView(new ArrayBuffer(4));

	    dv.setFloat32(0, number, false);

	    for (i = 0; i < 4; i++) {
	        var bits = dv.getUint8(i).toString(2);
	        if (bits.length < 8) {
	            bits = new Array(8 - bits.length).fill('0').join("") + bits;
	        }
	        result += bits;
	    }
	    return result;
    },

    double2bin(number) {
	    var i, result = "";
	    var dv = new DataView(new ArrayBuffer(8));

	    dv.setFloat64(0, number, false);

	    for (i = 0; i < 8; i++) {
	        var bits = dv.getUint8(i).toString(2);
	        if (bits.length < 8) {
	            bits = new Array(8 - bits.length).fill('0').join("") + bits;
	        }
	        result += bits;
	    }
	    return result;
		},

    bin2hex(s) {
	    var i, k, part, accum, ret = '';
	    for (i = s.length-1; i >= 3; i -= 4) {

	      part = s.substr(i+1-4, 4);
	      accum = 0;
	      for (k = 0; k < 4; k += 1) {
          if (part[k] !== '0' && part[k] !== '1') {     
              return { valid: false };
          }
          accum = accum * 2 + parseInt(part[k], 10);
	      }
	      if (accum >= 10) {
          ret = String.fromCharCode(accum - 10 + 'A'.charCodeAt(0)) + ret;
	      } else {
          ret = String(accum) + ret;
	      }
	    }

	    if (i >= 0) {
        accum = 0;
        for (k = 0; k <= i; k += 1) {
          if (s[k] !== '0' && s[k] !== '1') {
              return { valid: false };
          }
          accum = accum * 2 + parseInt(s[k], 10);
        }
        ret = String(accum) + ret;
	    }
	    return ret;
		},

    /*Modifica registros de doble precision segun los de simple*/
    updateDouble(comp, elem){
      for (var j = 0; j < architecture.components.length; j++) {
        for (var z = 0; z < architecture.components[j].elements.length && architecture.components[j].double_precision == true; z++) {
          if(architecture.components[j].elements[z].simple_reg[0] == architecture.components[comp].elements[elem].name){
            var simple = this.bin2hex(this.float2bin(architecture.components[comp].elements[elem].value));
            var double = this.bin2hex(this.double2bin(architecture.components[j].elements[z].value)).substr(8, 15);
            var newDouble = simple + double;

            architecture.components[j].elements[z].value = this.hex2double("0x"+newDouble);
          }
          if(architecture.components[j].elements[z].simple_reg[1] == architecture.components[comp].elements[elem].name){
            var simple = this.bin2hex(this.float2bin(architecture.components[comp].elements[elem].value));
            var double = this.bin2hex(this.double2bin(architecture.components[j].elements[z].value)).substr(0, 8);
            var newDouble = double + simple;

            architecture.components[j].elements[z].value = this.hex2double("0x"+newDouble);
          }
        }
      }
    },

    /*Modifica registros de simple precision segun los de doble*/
    updateSimple(comp, elem){
      var part1 = this.bin2hex(this.double2bin(architecture.components[comp].elements[elem].value)).substr(0, 8);
      var part2 = this.bin2hex(this.double2bin(architecture.components[comp].elements[elem].value)).substr(8, 15);

      for (var j = 0; j < architecture.components.length; j++) {
        for (var z = 0; z < architecture.components[j].elements.length; z++) {
          if(architecture.components[j].elements[z].name == architecture.components[comp].elements[elem].simple_reg[0]){
            architecture.components[j].elements[z].value = this.hex2float("0x"+part1);
          }
          if(architecture.components[j].elements[z].name == architecture.components[comp].elements[elem].simple_reg[1]){
            architecture.components[j].elements[z].value = this.hex2float("0x"+part2);
          }
        }
      }
    },

    /*FUNCIONES DE GESTION DE REGISTROS*/
    /*Actualiza el valor de un registro*/
    updateReg(comp, elem, type, precision){
      for (var i = 0; i < architecture.components[comp].elements.length; i++) {
        if(type == "integer" || type == "control"){
          if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^0x/)){
            var value = this.newValue.split("x");
            architecture.components[comp].elements[i].value = bigInt(value[1], 16);
          }
          else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^(\d)+/)){
            architecture.components[comp].elements[i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
          }
          else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^-/)){
            architecture.components[comp].elements[i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
          }
        }
        else if(type =="floating point"){
          if(precision == false){
            
            if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^0x/)){
              architecture.components[comp].elements[i].value = this.hex2float(this.newValue);

              this.updateDouble(comp, i);
            }
            else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^(\d)+/)){
              architecture.components[comp].elements[i].value = parseFloat(this.newValue, 10);

              this.updateDouble(comp, i);
            }
            else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^-/)){
              architecture.components[comp].elements[i].value = parseFloat(this.newValue, 10);

              this.updateDouble(comp, i);
            }
          }

          else if(precision == true){
            if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^0x/)){
              architecture.components[comp].elements[i].value = this.hex2double(this.newValue);

              this.updateSimple(comp, i);
            }
            else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^(\d)+/)){
              architecture.components[comp].elements[i].value = parseFloat(this.newValue, 10);

              this.updateSimple(comp, i);
            }
            else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^-/)){
              architecture.components[comp].elements[i].value = parseFloat(this.newValue, 10);

              this.updateSimple(comp, i)
            }
          }
        }
      }
      this.newValue = '';
    },

    /*FUNCIONES DE EJECUCION*/
    /*Funcion que ejecuta instruccion a instruccion*/
    executeInstruction(){
      $(".loading").show();
      if(instructions.length == 0){
        $(".loading").hide();
        app._data.alertMessaje = 'No instructions in memory';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
        return;
      }

      /*Verifica que el programa no ha finalizado ya*/
      if(executionIndex < -1){
        $(".loading").hide();
        app._data.alertMessaje = 'The program has finished';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
        return;
      }
      else if(executionIndex == -1){
        $(".loading").hide();
        app._data.alertMessaje = 'The program has finished with errors';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
        return;
      }

      var error = 0;
      var index;

      for (var i = 0; i < instructions.length; i++) {
        if(parseInt(instructions[i].Address, 16) == architecture.components[0].elements[0].value){
          executionIndex = i;
          instructions[executionIndex]._rowVariant = 'info';
        }
        else{
          instructions[i]._rowVariant = '';
        }
      }

      var instructionExec = instructions[executionIndex].loaded;

      var instructionExecParts = instructionExec.split(' ');

      var signatureDef;
      var signatureParts;
      var signatureRawParts;
      var nwords;
      var auxDef;

      /*Busca la instruccion a ejecutar y coge la definicion*/
      for (var i = 0; i < architecture.instructions.length; i++) {
        var auxSig = architecture.instructions[i].signatureRaw.split(' ');

        if(architecture.instructions[i].name == instructionExecParts[0] && instructionExecParts.length == auxSig.length){
          //signatureParts = architecture.instructions[i].signature.split(',');
          //signatureRawParts = architecture.instructions[i].signatureRaw.split(' ');

          signatureDef = architecture.instructions[i].signature_definition;
          signatureDef = signatureDef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          re = new RegExp("[fF][0-9]", "g");
          signatureDef = signatureDef.replace(re, "(.*?)");

          re = new RegExp(",", "g");
          var signature = architecture.instructions[i].signature.replace(re, " ");

          re = new RegExp(signatureDef+"$")
          var match = re.exec(signature);
          var signatureParts = [];
          for(var j = 1; j < match.length; j++){
            signatureParts.push(match[j]);
          }

          match = re.exec(architecture.instructions[i].signatureRaw);
          var signatureRawParts = [];
          for(var j = 1; j < match.length; j++){
            signatureRawParts.push(match[j]);
          }
          
          console.log(signatureParts)
          console.log(signatureRawParts)

          auxDef = architecture.instructions[i].definition;
          nwords = architecture.instructions[i].nwords;
          break;
        }
      }

      /*Incrementar PC*/
      architecture.components[0].elements[0].value = architecture.components[0].elements[0].value + (nwords * 4);

      console.log(auxDef)

      re = new RegExp(signatureDef+"$")
      var match = re.exec(instructionExec);
      instructionExecParts = [];
      for(var j = 1; j < match.length; j++){
        instructionExecParts.push(match[j]);
      }

      console.log(instructionExecParts)

      /*Replaza los valores por el nombre de los registros*/
      for (var i = 1; i < signatureRawParts.length; i++){
        var re = new RegExp(signatureRawParts[i],"g");
        auxDef = auxDef.replace(re, instructionExecParts[i]);
      }

      console.log(auxDef)

      /*Remplaza el nombre del registro por su variable*/
      var regIndex = 0;

      for (var i = 0; i < architecture.components.length; i++){
        for (var j = 0; j < architecture.components[i].elements.length; j++){
          var re;

          /*Si es un regitro en el que se escribe*/
          re = new RegExp(architecture.components[i].elements[j].name+" *=[^=]");
          if (auxDef.search(re) != -1){
            re = new RegExp(architecture.components[i].elements[j].name+" *=","g");

            auxDef = auxDef.replace(re, "var reg"+ regIndex+"=");
            auxDef = "var reg" + regIndex + "=null\n" + auxDef
            auxDef = auxDef + "\n this.writeRegister(reg"+regIndex+","+i+" ,"+j+");"
            regIndex++;
          }

          /*Si es un registro de lectura*/
          re = new RegExp(architecture.components[i].elements[j].name,"g");
          auxDef = auxDef.replace(re, "this.readRegister("+i+" ,"+j+")");
        }
      }

      console.log(auxDef)

      /*Remplaza la direccion de memoria por su valor*/
      /*Replaces escritura en memoria por registro + desplazamiento*/
      re = /MP.([whb]).\((.*?)\)\) *=/;
      if (auxDef.search(re) != -1){
        var match = re.exec(auxDef);
        var auxDir;
        eval("auxDir="+match[2]+")");

        re = /MP.[whb].\((.*?)\)\) *=/g;
        auxDef = auxDef.replace(re, "var dir"+ auxDir +"=");
        auxDef = "var dir" + auxDir + "=null\n" + auxDef
        auxDef = auxDef + "\n this.writeMemory(dir"+auxDir+",'0x"+auxDir.toString(16)+"','"+match[1]+"');"
      }

      /*Replaces escritura en memoria por direccion y etiqueta*/
      re = new RegExp("MP.([whb]).(.*?) *=");
      if (auxDef.search(re) != -1){
        var match = re.exec(auxDef);

        re = new RegExp("MP."+match[1]+"."+match[2]+" *=","g");
        auxDef = auxDef.replace(re, "var dir"+ match[2]+"=");
        auxDef = "var dir" + match[2] + "=null\n" + auxDef
        auxDef = auxDef + "\n this.writeMemory(dir"+match[2]+",'"+match[2]+"','"+match[1]+"');"
      }

      /*Replaces lectura en memoria por registro + desplazamiento*/
      re = /MP.([whb]).\((.*?)\)\)/;
      if (auxDef.search(re) != -1){
        var match = re.exec(auxDef);
        var auxDir;

        eval("auxDir="+match[2]+"))");

        re = /MP.[whb].\((.*?)\)\)/g;
        auxDef = auxDef.replace(re, "this.readMemory('0x"+auxDir.toString(16)+"', '"+match[1]+"'");
      }

      /*Replaces lectura en memoria por direccion y etiqueta*/
      re = new RegExp("MP.([whb]).([0-9]*[a-z]*[0-9]*)");
      if (auxDef.search(re) != -1){
        var match = re.exec(auxDef);

        re = new RegExp("MP."+match[1]+"."+match[2],"g");
        auxDef = auxDef.replace(re, "this.readMemory('"+match[2]+"','"+match[1]+"')");
      }

      console.log(auxDef)

      try{
        eval(auxDef);
      }
      catch(e){
        if (e instanceof SyntaxError) {
          error = 1;
          instructions[executionIndex]._rowVariant = 'danger';
          executionIndex = -1;
          $(".loading").hide();
          app._data.alertMessaje = 'Syntax Error';
          app._data.type ='danger';
          app._data.dismissCountDown = app._data.dismissSecs;
          var date = new Date();
          notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
        }
      }
      
      if(executionIndex == -1){
        $(".loading").hide();
        error = 1;
      }

      if(error != 1){
        for (var i = 0; i < instructions.length; i++) {
          if(parseInt(instructions[i].Address, 16) == architecture.components[0].elements[0].value){
            executionIndex = i;
            instructions[executionIndex]._rowVariant = 'success';
            break;
          }
          else if(i == instructions.length-1){
            instructions[executionIndex]._rowVariant = '';
            executionIndex = instructions.length+1;
          }
        }
      }
    
      if(executionIndex >= instructions.length){
        executionIndex = -2;
        $(".loading").hide();
        app._data.alertMessaje = 'The execution of the program has finished';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
      }
      else{
        if(error != 1){
          instructions[executionIndex]._rowVariant = 'success';
        }
      }

      $(".loading").hide();
    },

    /*Funcion que ejecuta todo el programa*/
    executeProgram(){
      $(".loading").show();
      var iter1 = 1;
      while(executionIndex >= 0){
        if(instructions[executionIndex].Break == true && iter1 == 0){
          return;
        }
        else{
          this.executeInstruction();
          iter1 = 0;
        }
      }
      $(".loading").hide();
    },

    /*Funcion que resetea la ejecucion*/
    reset(){
      $(".loading").show();
      for (var i = 0; i < instructions.length; i++) {
        instructions[i]._rowVariant = '';
      }
      executionIndex = 0;
      if(instructions.length > 0){
        instructions[executionIndex]._rowVariant = 'success';
      }

      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length; j++) {
          if(architecture.components[i].double_precision == false){
            architecture.components[i].elements[j].value = architecture.components[i].elements[j].default_value;
          }

          else{
            var aux_value;
            var aux_sim1;
            var aux_sim2;

            for (var a = 0; a < architecture_hash.length; a++) {
              for (var b = 0; b < architecture.components[a].elements.length; b++) {
                if(architecture.components[a].elements[b].name == architecture.components[i].elements[j].simple_reg[0]){
                  aux_sim1 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].default_value));
                }
                if(architecture.components[a].elements[b].name == architecture.components[i].elements[j].simple_reg[1]){
                  aux_sim2 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].default_value));
                }
              }
            }

            aux_value = aux_sim1 + aux_sim2;

            architecture.components[i].elements[j].value = this.hex2double("0x" + aux_value);
          }
        }
      }

      for (var i = 0; i < memory.length; i++) {
        for (var j = 0; j < memory[i].Binary.length; j++) {
          memory[i].Binary[j].Bin = memory[i].Binary[j].DefBin;
        }
      }
      $(".loading").hide();
    },

    /*Funcion que lee de los registro*/
    readRegister(indexComp, indexElem){
      /*Verifica que se puede leer el registro*/
      if(architecture.components[indexComp].elements[indexElem].properties[0] != "read" && architecture.components[indexComp].elements[indexElem].properties[1] != "read"){
        app._data.alertMessaje = 'The register '+ architecture.components[indexComp].elements[indexElem].name +' cannot be read';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
        var date = new Date();
        notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
        executionIndex = -1;
        return;
      }

      return architecture.components[indexComp].elements[indexElem].value;
    },

    /*Funcion que escribe en los registro*/
    writeRegister(value, indexComp, indexElem){

      if(value == null){
        return;
      }

      if(architecture.components[indexComp].type == "integer" || architecture.components[indexComp].type == "control"){
        /*Verifica que se puede escribir en el registro*/
        if(architecture.components[indexComp].elements[indexElem].properties[0] != "write" && architecture.components[indexComp].elements[indexElem].properties[1] != "write"){
          app._data.alertMessaje = 'The register '+ architecture.components[indexComp].elements[indexElem].name +' cannot be written';
          app._data.type ='danger';
          app._data.dismissCountDown = app._data.dismissSecs;
          var date = new Date();
          notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
          executionIndex = -1;
          return;
        }

        architecture.components[indexComp].elements[indexElem].value = bigInt(parseInt(value) >>> 0, 10);

        var button = '#popoverValueContent' + architecture.components[indexComp].elements[indexElem].name;

        $(button).attr("class", "btn btn-outline-secondary btn-block btn-sm modRegister");

        setTimeout(function() {
          $(button).attr("class", "btn btn-outline-secondary btn-block btn-sm registers");
        }, 350);
      }

      else if(architecture.components[indexComp].type =="floating point"){
        console.log(architecture.components[indexComp].double_precision)
        if(architecture.components[indexComp].double_precision == false){
          /*Verifica que se puede escribir en el registro*/
          if(architecture.components[indexComp].elements[indexElem].properties[0] != "write" && architecture.components[indexComp].elements[indexElem].properties[1] != "write"){
            app._data.alertMessaje = 'The register '+ architecture.components[indexComp].elements[indexElem].name +' cannot be written';
            app._data.type ='danger';
            app._data.dismissCountDown = app._data.dismissSecs;
            var date = new Date();
            notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
            return;
          }

          architecture.components[indexComp].elements[indexElem].value = parseFloat(value, 10);

          this.updateDouble(indexComp, indexElem);

          var button = '#popoverValueContent' + architecture.components[indexComp].elements[indexElem].name;

          $(button).attr("style", "background-color:#c2c2c2;");

          setTimeout(function() {
            $(button).attr("style", "background-color:#f5f5f5;");
          }, 350);
        }
        
        else if(architecture.components[indexComp].double_precision == true){
          /*Verifica que se puede escribir en el registro*/
          if(architecture.components[indexComp].elements[indexElem].properties[0] != "write" && architecture.components[indexComp].elements[indexElem].properties[1] != "write"){
            app._data.alertMessaje = 'The register '+ architecture.components[indexComp].elements[indexElem].name +' cannot be written';
            app._data.type ='danger';
            app._data.dismissCountDown = app._data.dismissSecs;
            var date = new Date();
            notifications.push({mess: app._data.alertMessaje, color: app._data.type, time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}); 
            return;
          }
          architecture.components[indexComp].elements[indexElem].value = parseFloat(value, 10);

          this.updateSimple(indexComp, indexElem);

          var button = '#popoverValueContent' + architecture.components[indexComp].elements[indexElem].name;

          $(button).attr("style", "background-color:#c2c2c2;");

          setTimeout(function() {
            $(button).attr("style", "background-color:#f5f5f5;");
          }, 350);
        }
      }  
    },

    /*Funcion que lee de memoria*/
    readMemory(addr, type){
      var memValue = '';

      if (type == "w"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              for (var z = 0; z < memory[i].Binary.length; z++){
                memValue = memory[i].Binary[z].Bin + memValue;
              }
              return bigInt(memValue, 16);
            }
          }
        }
      }

      if (type == "h"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              if(j < 2){
                for (var z = 0; z < memory[i].Binary.length -2; z++){
                  memValue = memory[i].Binary[z].Bin + memValue;
                }
                return bigInt(memValue, 16);
              }
              else{
                for (var z = 2; z < memory[i].Binary.length; z++){
                  memValue = memory[i].Binary[z].Bin + memValue;
                }
                return bigInt(memValue, 16);
              }
            }
          }
        }
      }

      if (type == "b"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              memValue = memory[i].Binary[j].Bin + memValue;
              return bigInt(memValue, 16);
            }
          }
        }
      }
    },

    /*Funcion que escribe de memoria*/
    writeMemory(value, addr, type){

      if(value == null){
        return;
      }

      var memValue = (value.toString(16)).padStart(8, "0");

      if (type == "w"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              var charIndex = memValue.length-1;
              for (var z = 0; z < memory[i].Binary.length; z++){
                memory[i].Binary[z].Bin = memValue.charAt(charIndex-1)+memValue.charAt(charIndex);
                charIndex = charIndex - 2;
              }
              return;
            }
          }
        }
      }

      if (type == "h"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
               if(j < 2){
                  var charIndex = memValue.length-1;
                  for (var z = 0; z < memory[i].Binary.length - 2; z++){
                    memory[i].Binary[z].Bin = memValue.charAt(charIndex-1)+memValue.charAt(charIndex);
                    charIndex = charIndex - 2;
                  }
                  return;
                }
                else{
                  var charIndex = memValue.length-1;
                  for (var z = 2; z < memory[i].Binary.length; z++){
                    memory[i].Binary[z].Bin = memValue.charAt(charIndex-1)+memValue.charAt(charIndex);
                    charIndex = charIndex - 2;
                  }
                  return;
                }
            }
          }
        }
      }

      if (type == "b"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              var charIndex = memValue.length-1;
              memory[i].Binary[j].Bin = memValue.charAt(charIndex-1)+memValue.charAt(charIndex);
              return;
            }
          }
        }
      }
    },

    breakPoint(record, index){
      if(instructions[index].Break == null){
        instructions[index].Break = true;
        app._data.instructions[index].Break = true;
      }
      else if(instructions[index].Break == true){
        instructions[index].Break = null;
        app._data.instructions[index].Break = null;
      }
    }

  },

  created(){
    this.load_arch_available();
  },

   mounted(){
    this.backupCopyModal();
  },
})

/*Cambia la vision de los registros*/
$("#selectData").change(function(){
  var value = document.getElementById("selectData").value;
  if(value == "CPU-FP Registers"){
    app._data.register_type = 'floating point';
    $("#registers").show();
    $("#memory").hide();
  }
  if(value == "CPU-INT Registers") {
    app._data.register_type = 'integer';
    $("#registers").show();
    $("#memory").hide();
  }
});

/*Codemirror, text area ensamblador*/
// initialize codemirror for assembly
editor_cfg = {
  lineNumbers: true,
  autoRefresh:true,
} ;

textarea_assembly_obj = document.getElementById("textarea_assembly");

textarea_assembly_editor = CodeMirror.fromTextArea(textarea_assembly_obj, editor_cfg);

textarea_assembly_editor.setOption('keyMap', 'sublime') ; // vim -> 'vim', 'emacs', 'sublime', ...

textarea_assembly_editor.setValue("\n\n\n\n\n\n\n\n\n\n\n\n\n");
textarea_assembly_editor.setSize("auto", "550px");