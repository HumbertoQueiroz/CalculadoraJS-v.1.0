//Variável que vai receber o primeiro número
var x1;

//Variável que vai receber o segundo número
var y1;

//Várialvel que vai armazenar a operação
var operacao;




var display1 = document.getElementById('display1');
var num1 = Number(display1.value);


var display2 = document.getElementById('display2');
var num2 = Number(display2.value);


var display3 = document.getElementById('display3');
var num3 = Number(display3.value);

var display0 = document.getElementById('display0');
var num0 = parseInt(display0.value);

var controle4 = true;

function alteraDisplay() {
      display1.style.display = 'inline';
      display2.style.display = 'none';
      display3.style.display = 'none';
}

alteraDisplay();

function addNumeroDisplay(e) {

   //If para alterar primeiro valor

      if ( display1.style.display == 'inline') {
            console.log('\n\n\nIf para alterar primeiro valor');
            if (num1 == 0) {
       
                  HTMLTNovo = e;
                  HTMLTemporario = HTMLTNovo;
                  display1.innerHTML = HTMLTemporario;
                  num1 = display1.innerHTML
                  console.log('If valor anterior do num1 zero, novo =',display1.textContent);      
            } else {
                 
                  HTMLTNovo = e;
                  HTMLTemporario = HTMLTemporario + HTMLTNovo;
                  display1.innerHTML = HTMLTemporario;
                  console.log('If para valor anterior do num1 diferente de 0, novo valor = ', display1.textContent);
            };
      }
      else if(display2.style.display == 'inline') {

            //If para alterar segundo valor

              console.log('\n\n\n If para alterar segundo valor');
             if (Number(display2.textContent) == 0) {
                
                  HTMLTNovo = e;
                  HTMLTemporario = HTMLTNovo;
                  display2.innerHTML = HTMLTemporario;
                  num2 = display2.innerHTML
                  console.log('num2.1 quando tem zero=', display2);
      
            } else {
                
                  HTMLTNovo = e;
                  HTMLTemporario = HTMLTemporario + HTMLTNovo;
                  display2.innerHTML = HTMLTemporario;
                  console.log('num2.2 quando tem numero=', display2);
            };
      }

     

};

function armazenaOperacao(e) {
       
      //If operação continua

      if (!num1==0 && !num2==0 && Number(display3.textContent)==0){
            console.log('\n\n\nIf operação continua');
            controle4=false;
            calcula();
            controle4=true;



      }

      //If Operação com valor anterior para num1

      else if (display3.style.display == 'inline') {
            console.log('\n\n\n If Operação com valor anterior para num1');


                  
            HTMLTNovo = 0;
            HTMLTemporario = HTMLTNovo;
            display2.innerHTML = HTMLTemporario;
            num2 = display2.innerHTML

            display1.style.display = 'none';
            display2.style.display = 'inline'; 
            display3.style.display = 'none';
            console.log("exibiu display2")       

            x1 = display3;
            console.log('armazenou o resultado no x1 = ', x1)

            operacao = e;
            console.log("adicionou o valor de", e, ' a operação')
            
            
            controle2 = true;
            console.log('Alterou as variáveis de controle para');
      

      } 
      
        // If Operação Inicial

      else if (display1.style.display == 'inline') {

            console.log('\n\n\n If Operação Inicial');

            display1.style.display = 'none';
            display2.style.display = 'inline';
            console.log("exibiu display2")

            x1 = display1;
            console.log("adicionou o valor de", x1, ' do display1 ao x1')
            
            operacao = e;
            console.log("adicionou o valor de", e, ' a operação')
      
      }
      else {
            console.log('entrou adiciona operação if 02');

            display1.style.display = 'none';
            display2.style.display = 'none'
            display2.style.display = 'inline'
            y1 = display2;
            operacao = e;
            
                  
            console.log(x1,operacao,y1)
            console.log("exibiu display3");
      }
}
      



function calcula() { 
      var valorX = x1;
      var novoValorX = valorX.textContent;
      var intNovoValorX = parseInt(novoValorX);
      console.log('valor x1',intNovoValorX);


      var valory = display2;
      var novoValory = valory.textContent;
      var intNovoValory = parseInt(novoValory);

      
         
      controle3 = true;   

      switch (operacao) {
            case '+':
             resultado = intNovoValorX + intNovoValory;
            break;
            case '-':
             resultado = intNovoValorX - intNovoValory;
            break;
            case '*':
             resultado = intNovoValorX * intNovoValory;
            break;
            case '/':
             resultado = intNovoValorX / intNovoValory;
            break;
            default:
      console.log('Operador inválido');
      }

      if(controle4)
      {
            console.log('\n\n\n\Operação normal',resultado);
            display1.style.display = 'none';
            display2.style.display = 'none'; 
            display3.style.display = 'inline'; 
            
            display3.innerHTML = resultado;      
      } else{
            console.log('\n\n\n\Operação continua dentro do calcula',resultado);            
            display1.style.display = 'none';
            display2.style.display = 'inline'; 
            display3.style.display = 'none'; 
            
            display1.innerHTML = resultado;
            display2.innerHTML = 0;      
      }
}

function limpa() {
      display1.style.display = 'inline';
      display2.style.display = 'none'; 
      display3.style.display = 'none'; 
      display1.innerHTML = 0;
      display2.innerHTML = 0;
      display3.innerHTML = 0;
      controle1 = true;
      
      num1 = 0;
      num2 = 0;
      operacao = ""
}