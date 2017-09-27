/*function fib(a, b) {
      if (b != 1) { 
        return a + fib(a, b = 2);
      } else {
        return a;
      }
    }
    alert( fib(1, 2) );*/
    
    const n = Number (prompt ('fibonacci number:' ));
    function fib(n) {
      let a =1, b=1;
      for ( let i=3; i<= n; i++) {
        let c = a + b,
         a = b;
         b = c;
      }
      return b;
      }
    alert('fibonacci number is =' + fib(n));
    

