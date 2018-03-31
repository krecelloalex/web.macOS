function date(id)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('', '', '', '', '', '', '', '', '', '', '', '');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ''+days[day]+' '+h+':'+m;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}