function validateTeacherData() {

    const Name=document.forms["Tform"]["tname"].value;
    const Mobile=document.forms["Tform"]["mob"].value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
    const nameResult = validateName(Name);
    const mobResult = validateMob(Mobile);
    

    event.preventDefault();

    if(nameResult && mobResult) {

        if(checkboxes.length == 0) {
            alert('Select atleast 1 Subject');
            return false;
        }
        
        const result = chqMobexist(Mobile);
        let sub=[];
        alert( result.data );

        document.forms["Tform"]["tname"].value = "";
        document.forms["Tform"]["mob"].value = "";
        for(i in checkboxes) {
            sub.push(checkboxes[i].id);
            checkboxes[i].checked = false;
        }
        sub = sub.filter( Number );
        result.name = Name;
        result.mobile = Mobile;
        result.subject = sub;
        return result;
    }

      
    return false;

}


function chqMobexist(mob) {
    const teachers = window.school.getAllTeachers();

    for(x in teachers) {
        if(teachers[x].Mobile == mob) {
            return {
                    data :'Mobile no. exist, Try another one',
                    value : false
            }
        }
    }

    return {
        data : 'New Teacher Added Successfully',
        value : true
    }

}

function validateName(Fname)
{
    if(!Fname)
    {
        document.forms["Tform"]["tname"].style.border="1px solid red";    
        return false;
    }
    else
    {
        document.forms["Tform"]["tname"].style.border="1px solid lightgreen";   
        return true;
    }
}

function validateMob(Mobile)
{
    if(!Mobile)
    {
        document.forms["Tform"]["mob"].style.border="1px solid red";     
        return false;
    }
    else
    {
        document.forms["Tform"]["mob"].style.border="1px solid lightgreen";   
        return true;
    }
}

