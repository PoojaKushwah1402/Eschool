$(document).ready( function () {

    $('.subject').hide();
    $('form[name="Tform"]').hide();
    

    $('button.frontPage').click( function() {
        $('.frontPage').hide();
        $('form[name="Tform"]').show();
    });

    $('.head').click(function (){
        $('.main').show();
        $('.frontPage').show();
        $('form[name="Tform"]').hide();
        $('.subject').hide();
        $('.teacher').hide();
        $('.lessons').hide();
        $('.selectlesson').hide();
        $('.selectSubjects').hide();
        $('.selectmodules').hide();
        $('.mddl').hide();
        
    });

    $(document).on('click','.bttn', function() {
        const data = validateTeacherData();
        if(data.value) {
            addTeacher(data);
        }
       
    });

    $(document).on('click','.allsub', function() {
        $('.subject').show();
        $('.main').hide();
        $('.teacher').hide();
        $('.lessons').hide();
        $('.selectlesson').hide();
        $('.selectSubjects').hide();
        $('.selectmodules').hide();
        $('.mddl').hide();
    });

    $(document).on('click','.allteach', function() {
        $('.main').hide();
        $('.subject').hide();
        $('.teacher').remove();
        $('.selectSubjects').hide();
        $('.lessons').hide();
        $('.selectlesson').hide();
        $('.selectmodules').hide();
        $('.mddl').hide();
        displayAllTeachers();
        
    });


    $(document).on('click', '.teach_', function () {
        const id = $(this).attr('id');
        $('.subject').hide();
        $('.main').hide();
        $('.teacher').hide();
        $('.lessons').hide();
        $('.selectlesson').hide();
        activeSubjects(id);

        $('.selectsub').click( function() {
          
            const id = $(this).attr('id');
            $('.subject').hide();
            $('.main').hide();
            $('.teacher').hide();
            $('.selectSubjects').hide();
            $('.lessons').hide();
            $('.selectlesson').hide();
            const subjct = activeLessons(id);
    
            $('.sellessns').click( function() {
                const Lid = $(this).attr('id');
                $('.lessons').hide();
                const modules = activeModules(subjct, Lid);
      

                $('.selectmdl').click( function() {
                    const Mid = $(this).attr('id');
                    $('.selectmodules').hide();
                    var Mright = selectedModule(modules, Mid);


                });


            });
        });       
    });

});

