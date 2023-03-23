let navstatus=0

function openNav()
{
    if(!navstatus)
    {
        $('.maincontainer').css('width','100%');
        $('li').css('display',"block");
        navstatus=1;
    }
    else{
        $('.maincontainer').css('width',"0");
        $('li').css('display',"none");
        navstatus=0;
    
    }

}


