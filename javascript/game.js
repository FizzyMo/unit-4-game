$(document).ready(function () {

    var charact1Count = true;
    var countDefending = 0;
    var obiCount = 0;
    var lukeCount = 0;
    var sidCOunt = 0;
    var darmaulCount = 0;

    $('.attBtn').off('click');

    $('1charact').on('click', function() {

        if(charact1Count ===true)

        {
            $(this).addClass('main');
            obiCount++;

            charact1Count = false;


        }



    }







}