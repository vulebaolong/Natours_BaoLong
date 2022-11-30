let nav_text_list_item_All_El = document.querySelectorAll('.nav_text_list_item')
let nav_cb_All_El = document.querySelector('.nav_cb')

nav_text_list_item_All_El.forEach( (nav_text_list_item_El) => {
    nav_text_list_item_El.onclick = () => {
        let isCheck = nav_cb_All_El.checked
        if (isCheck) {
            nav_cb_All_El.checked = false
        }
    }
})
