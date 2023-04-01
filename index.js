try{
myaudio=document.getElementById("lyd");
myaudio.playbackRate=0.5;
}
catch{}

document.querySelector('#knap').onclick = function(){
    const leje = document.getElementById('leje').value;
    const eje = document.getElementById('ejer').value;
    const værdi = document.getElementById('værdi').value;
    //const tilbagebetaling = document.getElementById('tilbagebetaling').value;

    const besparelse = (eje-leje)*0.98;
    const afkast = 0.0979/12;
    const boligprisudvikling = 0.04;
    
    const nper = 30;
    const nper_l = nper*12
    
    const lejer = FV(afkast, nper_l,-besparelse,-værdi*0.05,0)
    const fortjeneste = lejer-(besparelse*nper_l)
    const skat = fortjeneste*0.42

    const ejerafkast = parseInt(værdi*(1+boligprisudvikling)**nper)//-tilbagebetaling)
    const lejerafkast = parseInt(lejer-skat)
    
  

    const p = document.getElementById('test');
   
    p.innerText = 'Lejer afkast: ' + lejerafkast.toLocaleString('da-DK') + ' kr. Ejer afkast: ' + ejerafkast.toLocaleString('da-DK') + ' kr.'; 
    
    const res = document.getElementById('result');
    if (ejerafkast > lejerafkast) {
      res.innerText = "Resultat: Ejerboligen kan bedst betale sig";
    } 
    else{
      res.innerText = "Resultat: Lejeboligen kan bedst betale sig";
    }
}


/* Tyvstjålet fra Stackoverflow
 Calculate FV. 
 Exact same Excel FV function
 Rate is the interest rate per period.
 Nper is the total number of payment periods in an annuity.
 Pmt is the payment made each period; it cannot change over the life of the annuity. Pmt must be entered as a negative number.
 Pv is the present value, or the lump-sum amount that a series of future payments is worth right now. If pv is omitted, it is assumed to be 0 (zero). PV must be entered as a negative number.
 Type is the number 0 or 1 and indicates when payments are due. If type is omitted, it is assumed to be 0 which represents at the end of the period.  If payments are due at the beginning of the period, type should be 1.
 */
 function FV(rate, nper, pmt, pv, type) {
    var pow = Math.pow(1 + rate, nper),
      fv;
  
    pv = pv || 0;
    type = type || 0;
  
    if (rate) {
      fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
    } else {
      fv = -1 * (pv + pmt * nper);
    }
    return fv;
  }
  