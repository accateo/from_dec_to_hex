module.exports = function fromDecToHex(dec,type) {
  	//se numero grande -> altro calcolo
	if(dec>256 || dec<-256){

		var newVal = (dec>>>0).toString(16);
		if(newVal.length<=4){
			return newVal;
		}
		else{
			return newVal[4]+""+newVal[5]+""+newVal[6]+""+newVal[7];
		}
		
	}
	else{
		//se numero negativo ma non sotto i 256
		if(dec<0){
			sub = 256 + parseInt(dec);
		}
		else{
			sub = dec;
		}
		var newVal = sub.toString(16);
		
		if(newVal.length==1 || newVal.length==3){
			newVal = "0"+newVal;
		}
		return newVal;
	}
};