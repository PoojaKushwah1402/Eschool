window.school = (function () {
    var teachers = [];
    var subjects = [];

    return {
        addTeacher : function (name,mob,sub) {
            const teacher = {
                name : name,
                Mobile : mob,
                Subject : sub,
                id : Math.random()
            }
            teachers.push(teacher);
        },

        addSubject : function (subject) {
            subjects.push(subject);
        },

        getAllSubjects : function () {
            return subjects;
        },

        getSubById : function (subarr) {
            const subjct = [];
            for(x in subarr) {
                let arr = subjects.filter(function (obj) {
                    if(obj.id == subarr[x]) {
                        return obj;
                    }
                });
                subjct.push(arr[0]);
            }
            return subjct ;
        },

        getAllTeachers : function () {
            return teachers;
        },

        getTeachById : function (id) {
            let teach = teachers.filter( function (obj) {
                if(obj.id == id ) {
                    return obj;
                }
            });
           return teach[0]; 
        }

    }

})();