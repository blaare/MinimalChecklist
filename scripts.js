var currentVal = 0;
$("#list").append(newListItem());

$("#add-one").on("click", function(event){
    event.preventDefault();
    $("#list").append(newListItem());
});

$("#list").on("change", ".form-checked",function(){
    let val = $(this).attr("data-val");
    let $inputBox = $(`#${val}`);

    if($(this).prop("checked")) {
        $inputBox.prop("disabled", true);
        $inputBox.wrap("<del>");
    } else {
        $inputBox.prop("disabled", false);
        $inputBox.unwrap();
    }
});

function newListItem(){
    currentVal++;
    return `<div class="form-group row">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <input type="checkbox" class="form-checked" data-val="${currentVal}">
                                    </div>
                                </div>
                                <input type="text" class="form-control" id="${currentVal}">
                            </div>
                        </div>`;
}
