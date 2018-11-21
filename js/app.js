/*Listado de arquitecturas disponibles*/
var architecture_available = [];

/*Listado de componentes creados*/
var components = [
  {name:"PC", nbits:"32", value:0, default_value:0, read: true, write: true},
  {name:"EPC", nbits:"32", value:0, default_value:0, read: true, write: true},
  {name:"CAUSE", nbits:"32", value:0, default_value:0, read: true, write: true},
  {name:"BADVADDR", nbits:"32", value:0, default_value:0, read: true, write: true},
  {name:"STATUS", nbits:"32", value:0, default_value:0, read: true, write: true},
  {name:"HI", nbits:"32", value:0, default_value:0, read: true, write: true},
  {name:"LO", nbits:"32", value:0, default_value:0, read: true, write: true},
]

/*Arquitectura cargada*/
var architecture = [
  /*conf = {assembly_type: "MIPS32", num_bits: 32, num_int_reg: 32, num_fp_reg_single_precision: 32, num_fp_reg_double_precision:16},

  contr_int_reg =[
    {name:"PC", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    {name:"EPC", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    {name:"CAUSE", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    {name:"BADVADDR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    {name:"STATUS", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    {name:"HI", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    {name:"LO", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
  ],

  int_reg = [],

  contr_fp_reg =[
    {name:"FIR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    {name:"FCSR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    {name:"FCCR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    {name:"FEXR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
  ],

  fp_reg_single_precision=[],
  fp_reg_double_precision=[],

  memory = [
    { Address: "0x01003-0x01000", Binary: "61 65 6c 50", Tag: 'a', Value: null },
    { Address: "0x01007-0x01004", Binary: "61 65 6c 50", Tag: 'b', Value: 30 },
    { Address: "0x0100b-0x01008", Binary: "61 65 6c 50", Tag: 'msg', Value: "hello wold" },
    { Address: "0x0100f-0x0100c", Binary: "61 65 6c 50", Tag: 'msg2', Value: "Please, press letter '0' to end the 'echo' effect" },
  ],

  instructions = [
    { Break: null, Address: "0x8000", Label: "main", Assembly: "la $26 msg" },
    { Break: null, Address: "0x8004", Label: "loop1", Assembly: "lb $27 ($26)" },
    { Break: null, Address: "0x8008", Label: "", Assembly: "li $1 0" },
    { Break: null, Address: "0x800c", Label: "", Assembly: "beq $27 $1 end1" },
  ],*/
]

/*Variables que almacenan el codigo introducido*/
var code_assembly = '';
var code_micro = '';

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

window.app = new Vue({
  el: "#app",
  data: {

    /*PAGINA CARGA*/
    /*Configuraciones Disponibles*/
    arch_available: architecture_available,
    /*Numero de bits*/
    number_bits: 0,
    /*Nombre del fichero a cargar*/
    load_arch: '',
    /*Nombre del fichero a guardar*/
    name_arch_save: '',
    /*Componentes creados en la nueva arquitectura*/
    components: components,


    /*CARGA Y LECTURA ENSAMBLADOR Y MICROCODIGO*/
    /*Variables donde se guardan los contenidos de los textarea*/
    text_micro: code_micro,
    text_assembly: code_assembly,
    /*Variables donde se guardan los ficheros cargados*/
    load_assembly: '',
    load_micro: '',
    /*Variables donde se guardan los nombre de los ficheros guardados*/
    save_assembly: '',
    save_micro: '',

    /*PAGINA SIMULADOR*/
    /*Nuevo valor del registro*/
    newValue: '',


    /*SE CREA SEGUN JSON*/
    /*Asignacion de valores de los registros de control de los enteros*/
    reg_int_contr: architecture[1],
    /*Asignacion de valores de los registros enteros*/
    reg_int: architecture[2],
    /*Asignacion de valores de los registros de control de los reales*/
    reg_fp_contr: architecture[3],
    /*Asignacion de valores de los registros reales de simple precision*/
    reg_fp_single: architecture[4],
    /*Asignacion de valores de los registros reales de doble precision*/
    reg_fp_double: architecture[5],
    /*Asignacion de valores de la tabla de memoria*/
    memory: architecture[6],
    /*Asignacion de valores de la tabla de instrucciones*/
    instructions: architecture[7],
    
  },
  computed: {
    
  },
  methods:{
    /*PAGINA CARGA*/
    /*Carga las arquitecturas que hay disponibles*/
    load_arch_available(){
      $.getJSON('architecture/available_arch.json', function(cfg){
        architecture_available = cfg;
        app._data.arch_available = cfg;
      })
    },

    /*Carga la arquitectura seleccionada*/
    load_arch_select(e){
      $.getJSON('architecture/'+e+'.json', function(cfg){
        architecture = cfg;

        /*for (var i = 0; i < architecture[0].num_int_reg; i++) {
          architecture[2].push({name:"R"+i, nbits: architecture[0].num_bits, value:0, default_value:0, properties: ["read", "write"]});
        }
        for (var i = 0; i < architecture[0].num_fp_reg_single_precision; i++) {
          architecture[4].push({name:"FG"+i, nbits: architecture[0].num_bits, value:0.0, default_value:0.0, properties: ["read", "write"]});
        }
        for (var i = 0; i < architecture[0].num_fp_reg_double_precision; i++) {
          architecture[5].push({name:"FP"+(i*2), nbits: architecture[0].num_bits, value:0.0, default_value:0.0, properties: ["read", "write"]});
        }*/

        app._data.reg_int_contr = architecture[1];
        app._data.reg_int = architecture[2];
        app._data.reg_fp_contr = architecture[3];
        app._data.reg_fp_single = architecture[4];
        app._data.reg_fp_double = architecture[5];
        app._data.memory = architecture[6];
        app._data.instructions = architecture[7];
      });
    },

    /*Lectura del JSON de la arquitectura seleccionada*/
    read_arch(e){
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
        architecture = JSON.parse(event.currentTarget.result);

        /*for (var i = 0; i < architecture[0].num_int_reg; i++) {
          architecture[2].push({name:"R"+i, nbits: architecture[0].num_bits, value:0, default_value:0, properties: ["read", "write"]});
        }
        for (var i = 0; i < architecture[0].num_fp_reg_single_precision; i++) {
          architecture[4].push({name:"FG"+i, nbits: architecture[0].num_bits, value:0.0, default_value:0.0, properties: ["read", "write"]});
        }
        for (var i = 0; i < architecture[0].num_fp_reg_double_precision; i++) {
          architecture[5].push({name:"FP"+(i*2), nbits: architecture[0].num_bits, value:0.0, default_value:0.0, properties: ["read", "write"]});
        }*/

        app._data.reg_int_contr = architecture[1];
        app._data.reg_int = architecture[2];
        app._data.reg_fp_contr = architecture[3];
        app._data.reg_fp_single = architecture[4];
        app._data.reg_fp_double = architecture[5];
        app._data.memory = architecture[6];
        app._data.instructions = architecture[7];

      }
    },

    /*Guarda la arquitectura actual en un JSON*/
    arch_save(){
      var textToWrite = JSON.stringify(architecture, null, 2);
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/json' });
      var fileNameToSaveAs = this.name_arch_save + ".json";

      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "My Hidden Link";

      window.URL = window.URL || window.webkitURL;

      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();
    },

    /*CARGA Y LECTURA ENSAMBLADOR Y MICROCODIGO*/
    /*Funciones de carga y descarga de microcodigo y ensamblador*/
    read_assembly(e){
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
    },

    assembly_update(){
      this.text_assembly = code_assembly;
    },

    assembly_save(){
      var textToWrite = this.text_assembly;
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
      var fileNameToSaveAs = this.save_assembly + ".txt";

      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "My Hidden Link";

      window.URL = window.URL || window.webkitURL;

      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();
    },

    read_micro(e){
      var file;
      var reader;
      var files = document.getElementById('micro_file').files;

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        reader = new FileReader();
        reader.onloadend = onFileLoaded;
        reader.readAsBinaryString(file);
      }

      function onFileLoaded(event) {
        code_micro = event.currentTarget.result;
      }
    },

    micro_update(){
      this.text_micro = code_micro;
    },

    micro_save(){
      var textToWrite = this.text_micro;
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
      var fileNameToSaveAs = this.save_micro + ".txt";

      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "My Hidden Link";

      window.URL = window.URL || window.webkitURL;

      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();
    },

    /*PAGINA SIMULADOR*/
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

    /*Convierte de hexadecimal a char*/
    hex2char8 ( hexvalue ){
      var valuec = new Array();

      valuec[0] = String.fromCharCode((hexvalue & 0xFF000000) >> 24) ;
      valuec[1] = String.fromCharCode((hexvalue & 0x00FF0000) >> 16) ;
      valuec[2] = String.fromCharCode((hexvalue & 0x0000FF00) >>  8) ;
      valuec[3] = String.fromCharCode((hexvalue & 0x000000FF) >>  0) ;

      var characters = '';

      for (var i = 0; i < valuec.length; i++) {
        characters = characters + valuec[i] + ' ';
      }

      return  characters;
    },


    /*FUNCIONES DE GESTION DE REGISTROS*/
    /*Funcion que resetea todos los registros*/
    reset(){
      for (var i = 0; i < architecture[1].length; i++) {
         architecture[1][i].value =  architecture[1][i].default_value;
      }
      for (var i = 0; i < architecture[0].num_int_reg; i++) {
        architecture[2][i].value = architecture[2][i].default_value;
      }
      for (var i = 0; i < architecture[3].length; i++) {
        architecture[3][i].value = architecture[3][i].default_value;
      }
      for (var i = 0; i < architecture[0].num_fp_reg_single_precision; i++) {
        architecture[4][i].value = architecture[4][i].default_value;
      }
      for (var i = 0; i < architecture[0].num_fp_reg_double_precision; i++) {
        architecture[5][i].value = architecture[5][i].default_value;
      }
    },

    /*Funciones de actualizacion de los valores de los registros de control enteros*/
    updateIntcontr(j){
      for (var i = 0; i < architecture[1].length; i++) {
        if(architecture[1][i].name == j && this.newValue.match(/^0x/)){
          var value = this.newValue.split("x");
          architecture[1][i].value = bigInt(value[1], 16);
        }
        else if(architecture[1][i].name == j && this.newValue.match(/^(\d)+/)){
          architecture[1][i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
        }
        else if(architecture[1][i].name == j && this.newValue.match(/^-/)){
          architecture[1][i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
        }
      }
      this.newValue = '';
    },

    updateIntReg(j){
      for (var i = 0; i < architecture[2].length; i++) {
        if(architecture[2][i].name == j && this.newValue.match(/^0x/)){
          var value = this.newValue.split("x");
          architecture[2][i].value = bigInt(value[1], 16);
        }
        else if(architecture[2][i].name == j && this.newValue.match(/^(\d)+/)){
          architecture[2][i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
        }
        else if(architecture[2][i].name == j && this.newValue.match(/^-/)){
          architecture[2][i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
        }
      }
      this.newValue = '';
    },

    updateRegFpContr(j){
      for (var i = 0; i < architecture[3].length; i++) {
        if(architecture[3][i].name == j && this.newValue.match(/^0x/)){
          var value = this.newValue.split("x");
          architecture[3][i].value = bigInt(value[1], 16);
        }
        else if(architecture[3][i].name == j && this.newValue.match(/^(\d)+/)){
          architecture[3][i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
        }
        else if(architecture[3][i].name == j && this.newValue.match(/^-/)){
          architecture[3][i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
        }
      }
      this.newValue = '';
    },

    /*REVISAR*/
    updateRegFpSingle(j){
      for (var i = 0; i < architecture[4].length; i++) {
        if(architecture[4][i].name == j && this.newValue.match(/^0x/)){
          architecture[4][i].value = this.hex2float(this.newValue);
        }
        else if(architecture[4][i].name == j && this.newValue.match(/^(\d)+/)){
          architecture[4][i].value = parseFloat(this.newValue, 10);
        }
      }
      this.newValue = '';
    },
    /*REVISAR*/
    updateRegFpDouble(j){
      for (var i = 0; i < architecture[5].length; i++) {
        if(architecture[5][i].name == j && this.newValue.match(/^0x/)){
          architecture[5][i].value = this.hex2float(this.newValue);
        }
        else if(architecture[5][i].name == j && this.newValue.match(/^(\d)+/)){
          architecture[5][i].value = parseFloat(this.newValue, 10);
        }
      }
      this.newValue = '';
    },
    


  },
  created(){
    this.load_arch_available();
  }
})
