function addSubjects(num) {
    for(let i=0;i<num;i++) {
        let subject ={};
        const lessons = [];
        subject.name = 'Subject'+ (i+1);
        subject.id = Math.random();

        for(let j=0;j<5;j++) {
            const lsn =[];

            for(let k=0;k<3;k++) {
                let modle = {};
                modle.data = Mdata;
                modle.WB = Mwrkbook;
                modle.id = Math.random();
                modle.name = 'Module '+ k;
                lsn.push(modle);
            }
            lessons.push(lsn);
        }
        subject.data = lessons;
        window.school.addSubject(subject);
    }
}



function displayAllContent(dispcontent, name, maincls, mainid, colcls, colid) {
    
    const lenth = dispcontent.length;
    const mainDiv = document.createElement('div');

    if(lenth == 0) {
        mainDiv.className = 'container text-center back display-2 ' + maincls ;
        mainDiv.textContent = 'No Teachers, Please Add';
        $('.main').after(mainDiv);
        return ;
    }
    let value = 0;
    mainDiv.className = 'container text-center back1 display-4 ' + maincls;
    mainDiv.id = mainid;
    mainDiv.textContent = name ;

    
    for(let i=0; i<=(lenth/3); i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        for(let k=0; k<3; k++) {
            if(dispcontent[value]) {
                const columnDiv = createcolumn(dispcontent[value], colcls, colid);
                rowDiv.appendChild(columnDiv);
                value++;
            }
            else {
                break;
            }
        }
        mainDiv.appendChild(rowDiv);
    }
    $('.main').after(mainDiv);
}

function createcolumn(name, cls, colid) {
    const column = document.createElement('div');
    const smallcol = document.createElement('div');
    const anchor = document.createElement('a');
    column.className = 'col-xl-4 ';
    smallcol.className = cls ;
    anchor.setAttribute('href','#');
    anchor.className = colid;
    anchor.id = name.id;
    smallcol.textContent = name.name;
    anchor.appendChild(smallcol);
    column.appendChild(anchor);
    return column;
}



function createSubjectList() {
    const subjects = window.school.getAllSubjects();
    const mainDiv = document.createElement('div');
    mainDiv.className = 'container abc';

    for(x in subjects) {
        const smalldiv = document.createElement('div');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');

        smalldiv.className = 'container';
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('name',subjects[x].name);
        checkbox.setAttribute('id',subjects[x].id);
        label.setAttribute('for',subjects[x].id);
        label.textContent = subjects[x].name;
        smalldiv.appendChild(label);
        smalldiv.appendChild(checkbox);
        mainDiv.appendChild(smalldiv);
    }

    return mainDiv;
}




function teacherForm() {
    const form = document.createElement('form');
    const nameDiv = document.createElement('div');
    const namelabel = document.createElement('label');
    const nameinput = document.createElement('input');
    const mobDiv = document.createElement('div');
    const moblabel = document.createElement('label');
    const mobinput = document.createElement('input');
    const button = document.createElement('button');
    const subjects = createSubjectList();
    namelabel.setAttribute('for','name');
    moblabel.setAttribute('for','mob');
    nameDiv.className = 'formClass ';
    mobDiv.className = 'formClass '
    mobinput.setAttribute('type','text');
    mobinput.setAttribute('id','mob');
    mobinput.setAttribute('name','mob');
    mobinput.setAttribute('placeholder','Number');
    button.className = 'btn btn-outline-info bttn';
    nameinput.setAttribute('type','text');
    nameinput.setAttribute('id','name');
    nameinput.setAttribute('name','tname');
    nameinput.setAttribute('placeholder','Name');
    button.setAttribute('type','submit');
    button.setAttribute('method','post');
    form.setAttribute('name','Tform') ;
    button.textContent = 'Add';
    namelabel.textContent = 'Name';
    moblabel.textContent = 'Mobile';

    nameDiv.appendChild(namelabel);
    nameDiv.appendChild(nameinput);
    mobDiv.appendChild(moblabel);
    mobDiv.appendChild(mobinput);
    form.appendChild(nameDiv);
    form.appendChild(mobDiv);
    form.appendChild(subjects);
    form.appendChild(button);
    

    $('.main').append(form);
}


function expandModule(mdl, id) {

    const mainDiv = document.createElement('div');
    const divData = document.createElement('div');
    const divWB = document.createElement('div');
    const headData = document.createElement('div');
    const headWB = document.createElement('div');
    const data = document.createElement('p');
    const datad = document.createElement('p');


    mainDiv.textContent = name;
    headData.className = 'display-4 text-center'
    headWB.className = 'display-4 text-center'
    mainDiv.className = 'container text-center back1 mddl';
    
    data.className = 'text-body display-5';
    datad.className = 'text-body display-5';

    headData.textContent = 'Data for this '+ mdl.name;
    datad.textContent = mdl.data;
    divData.appendChild(headData);
    divData.appendChild(datad);
 
    headWB.textContent = 'WB for this '+ mdl.name;
    data.textContent = mdl.WB;
    divWB.appendChild(headWB);
    divWB.appendChild(data);

    mainDiv.appendChild(divData);
    mainDiv.appendChild(divWB);
    $('.main').after(mainDiv);
}


function addTeacher(data) {
    window.school.addTeacher(data.name, data.mobile, data.subject);    
}

function activeSubjects (teacherid) {
    tchrs = window.school.getTeachById(teacherid);
    subjcts =  window.school.getSubById(tchrs.Subject);
    const str = 'Subjects of Teacher '+ tchrs.name;
    const maincls = 'selectSubjects';
    const mainid = Math.random();;
    const colcls = 'clmn' ;
    const colid = 'selectsub';
    displayAllContent(subjcts, str, maincls, mainid, colcls, colid);
}

function activeModules(subject, id) {

    let selectedlsn = subject.lssns.filter( function (obj) {
        if(obj.id == id ) {
            return obj;
        }
    });

    const str = 'All modules of ' + selectedlsn[0].name + " of " + subject.name;
    const maincls = 'selectmodules';
    const mainid = Math.random();;
    const colcls = 'clmn' ;
    const colid = 'selectmdl';

    displayAllContent(selectedlsn[0], str, maincls, mainid, colcls, colid);

    return selectedlsn[0];
}

function selectedModule(modules, Mid) {
    let selectedmdl = modules.filter( function (obj) {
        if(obj.id == Mid ) {
            return obj;
        }
    });
    const mainid = Math.random();
    expandModule(selectedmdl[0], mainid);
    return mainid;
}


function activeLessons(id) {
    subjcts =  window.school.getSubById([id]);
    const sub =subjcts[0].data 
    const Str = 'All Lessons of '+ subjcts[0].name;
    const maincls = 'lessons';
    const mainid = Math.random();;
    const colcls = 'clmn';
    const colid = 'sellessns'; 

    for(x in sub) {
        let num = Number(x)+1;
       sub[x].name = 'Lesson '+ num; 
       sub[x].id = Math.random();
    }

    displayAllContent(sub, Str, maincls, mainid, colcls, colid);

    return {
        name : subjcts[0].name ,
        lssns : sub
    }
}

function displayAllSubjects() {
    const subjects = window.school.getAllSubjects();
    const Str = 'All Subject';
    const maincls = 'subject'
    const mainid = Math.random();;
    const colcls = 'clmn' ;
    const colid = 'sub_ject'
    displayAllContent(subjects, Str, maincls, mainid, colcls, colid);
}

function displayAllTeachers() {
    const teachers = window.school.getAllTeachers();
    const Str = 'All Teachers';
    const maincls = 'teacher'
    const mainid = Math.random();
    const colcls = 'clmn' ;
    const colid = 'teach_'
    console.log(teachers);
    displayAllContent(teachers, Str, maincls, mainid, colcls, colid);
}




addSubjects(10);
displayAllSubjects();
teacherForm();
