// Default ckeditor
ClassicEditor
    .create(document.querySelector('#editor1'))
    .catch(error => {
        console.error(error);
    });