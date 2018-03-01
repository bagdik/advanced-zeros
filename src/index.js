module.exports = function getZerosCount(number, base) {
 function factorization(x){
    let factor = [];
    let multiplier = [];
	  let m = 2;
      let currentValue = x;

	  while(currentValue > 1 && m <= Math.sqrt(currentValue)){
        if (currentValue % m === 0 ){
                currentValue /= m;
                multiplier.push(m);
            } else if(m === 2){
                 m++;
		    } else {
                m += 2;
		    }
    }
    if(currentValue !== 1){
        multiplier.push(currentValue);
        
    }
	
    return multiplier;
  }
  //-----------------------------------------
  function powerCount(multiplier, a){
    let count = 0;
    for (let i = 0; i <= multiplier.length; i++){
        if(a === multiplier[i]){
            count++;
        } 
    }

    return count;
  }
  //------------------------------------------
  let p1=0, p2=0;
  
  let factor_base = factorization(base);
  let count = 0;
 //-------------------------------------------
  function zeroCount(a){
    let n = 1;
    let cnt = 0;
    while(Math.pow(a, n) < number){
	    cnt += Math.floor(number/Math.pow(a, n));
	    n++;
    }
    
    return cnt;
  } 
//------------------------------------------------       
  
   let i = 0;
   let p = 0;
   let res = [];
   while(i < factor_base.length){
	  p = powerCount(factor_base, factor_base[i]); 
	  count = Math.floor(zeroCount(factor_base[i])/p);
	  res.push(count);
	  i += p;
   }
   count = res[0];
	for (let j = 1; j < res.length; j++){
		if(count > res[j]){
			count = res[j];
		}
	}
  return  count;
}