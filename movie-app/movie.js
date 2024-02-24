//creates html for list + button
function createEntry (title, rating){
    return `
    <tr>
        <td>${title}</td>
        <td>${rating}/10</td>
        <td><button id = "remove">X</button></td>
    </tr>`;
}

//when submit button clicked, appended above html to DOM
$('form').on('submit', function(e){
    e.preventDefault();
    const title = $('#title').val();
    const rating = $('#rating').val();
    $('#ratings-list').append(createEntry(title, rating));
    //table styling
    $('#ratings-list td').css({
        padding: '1rem', 
        textAlign: 'center'
    });
    $('#ratings-list tr:nth-of-type(2n)').css('background-color', 'lightgray' );
    //clear input fields
    $('#title').val('');
    $('#rating').val('');
});


//when remove button clicked, removes tr data from DOM
$('#ratings-list').on('click', 'button', function(){
    $(this).parent().parent().remove();
});

//form styling with jQuery
$('.header').css('textAlign', 'center');
$('form').find('label').css('margin', '0px 20px');
$('form').find('button').css('margin', '0px 20px');

//table styling with jQuery
$('#ratings-list').css({
    marginTop: '20px',
    borderCollapse: 'collapse', 
    width: '100%'
});
