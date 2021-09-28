$.validator.addMethod("alpha", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
});
$.validator.addMethod("isEmail", function (value, element) {
    return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
});
$(document).ready(()=>{

    $("#form1").validate({
        rules:{
            name:{
                required: true,
                minlength:3,
                alpha: true
            },
            email:{
                required: true,
                isEmail:true
            },
            phone:{
                required:true,
                maxlength: 10,
                digits: true
            },
            message:{
                required:true,
                minlength:5,
            }
        },
        messages:{
            name:{
                alpha:"Characters only",
                required: "*Required Feild",
                minlength:"Min character 3"
            },
            email:{
                required: "*Required Feild ! Enter a valid email",
                isEmail:"Please enter valid email"
            },
            phone:{
                required:"*Required Feild",
                maxlength: "Invalid max 10 characters",
                digits:"Numbers only"
            },
            message:{
                required:"*Required Feild",
                minlength:"Min character 5",

            }
        },
        submitHandler:function(form){
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbx9BkPEssHVrYxG09vYhzZnKAfgweYdQpDse6Isj9WNLwXZBv86fTIyapnSkLGHhlE/exec",
                data:$("#form1").serialize(),
                method:"post",
                success:((res)=>{
                    alert("form submission success")
                    window.location.reload()
                }),
                error:((res)=>{
                    alert("something went wrong")
                })
            })
        }
    })

})
