const getRemainTime=FECHA_LIMITE=>
{
    let FECHA_ACTUAL=new Date(), 
            TIEMPO_RESTANTE=(new Date(FECHA_LIMITE)-FECHA_ACTUAL+1000)/1000,//convertir los MILISEGUNDOS a SEGUNDOS y se le suma 1000 para no atrasar 1 segundo
            SEGUNDS_RESTANTES=('0'+Math.floor(TIEMPO_RESTANTE % 60 )).slice(-2),
            MINUTOS_RESTANTES=('0'+Math.floor(TIEMPO_RESTANTE / 60 % 60)).slice(-2),
            HORAS_RESTANTES=('0'+Math.floor(TIEMPO_RESTANTE / 3600 % 24)).slice(-2),
            DIAS_RESTANTES=Math.floor(TIEMPO_RESTANTE / (3600*24)),
            MESES_RESTANTES=Math.floor(DIAS_RESTANTES/30);
            
            console.log("XDE");
    return {
        TIEMPO_RESTANTE,
        SEGUNDS_RESTANTES,
        MINUTOS_RESTANTES,
        HORAS_RESTANTES,
        DIAS_RESTANTES,
        MESES_RESTANTES
    }
};

const Countdown=(FECHA_LIMITE, FinalMessage)=>{
    //const el=document.getElementById(elem);
    const Mes=document.getElementById('month');
    const Dia=document.getElementById('day');
    const Hora=document.getElementById('hour');
    const Minutos=document.getElementById('minute');
    const Segundos=document.getElementById('seconds');

    const DivDia=document.getElementById("dias");
    const DivMes=document.getElementById("meses");
    const timerUpdate=setInterval(()=>{
        let tiempo=getRemainTime(FECHA_LIMITE);
       // el.innerHTML=`${tiempo.DIAS_RESTANTES}d:${tiempo.HORAS_RESTANTES}h:${tiempo.MINUTOS_RESTANTES}m:${tiempo.SEGUNDS_RESTANTES}s`;
        Mes.innerHTML=`${tiempo.MESES_RESTANTES}`;
        Dia.innerHTML=`${tiempo.DIAS_RESTANTES}`;
        Hora.innerHTML=`${tiempo.HORAS_RESTANTES}`;
        Minutos.innerHTML=`${tiempo.MINUTOS_RESTANTES}`;
        Segundos.innerHTML=`${tiempo.SEGUNDS_RESTANTES}`;

        if (tiempo.DIAS_RESTANTES>=30) {
            DivDia.style.display="none"
        }
        else if(tiempo.DIAS_RESTANTES<=30)
        {
            DivDia.style.display="block"
            DivMes.style.display="none"
        }

        if(tiempo.TIEMPO_RESTANTE<=1)
        {
            clearInterval(timerUpdate);
            el.innerHTML=FinalMessage
        }
    },1000)//se actualiza cada segundo
}

Countdown('Jan 10 2021 00:00:00', 'LANZAMIENTO LISTO')