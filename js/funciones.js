$("#btn_registro").click(function() {
        $("#errores").empty();
        usuario = $("#txt_nombre").val();
        validador=0;
        if(usuario == "") {
                validador= validador + 1;
                $("#errores").append('<li> Debe ingresar un usuario </li>');
                $('#txt_nombre').removeClass('is-valid')
                $('#txt_nombre').addClass('is-invalid');
        }
        else{  
                $('#txt_nombre').removeClass('is-invalid')
                $('#txt_nombre').addClass('is-valid');
        };

        apellido = $("#txt_apellido").val();
        if(apellido == "") {
                validador= validador + 1;
                $("#errores").append('<li> Debe ingresar un apellido </li>');
                $('#txt_apellido').removeClass('is-valid')
                $('#txt_apellido').addClass('is-invalid');
        }else{  
                $('#txt_apellido').removeClass('is-invalid')
                $('#txt_apellido').addClass('is-valid');
        };


        mail = $("#txt_mail").val();
        if(mail == "") {
                validador= validador + 1;
                $("#errores").append('<li> Debe ingresar un mail </li>');
                $('#txt_mail').removeClass('is-valid')
                $('#txt_mail').addClass('is-invalid');
        }else{  
                $('#txt_mail').removeClass('is-invalid')
                $('#txt_mail').addClass('is-valid');
        };

        direccion = $("#txt_direccion").val();
        if(direccion == "") {
                validador= validador + 1;
                $("#errores").append('<li> Debe ingresar una direccion </li>');
                $('#txt_direccion').removeClass('is-valid')
                $('#txt_direccion').addClass('is-invalid');
        }else{  
                $('#txt_direccion').removeClass('is-invalid')
                $('#txt_direccion').addClass('is-valid');
        };



        comuna = $("#cmb_comuna option:selected").text();
        if(comuna == "Elegir...") {
                validador= validador + 1;
                $("#errores").append('<li> Debe seleccionar una comuna </li>');
                $('#cmb_comuna').removeClass('is-valid')
                $('#cmb_comuna').addClass('is-invalid');
        }else{  
                $('#cmb_comuna').removeClass('is-invalid')
                $('#cmb_comuna').addClass('is-valid');
        };

        telefono = $("#txt_telefono").val();
        if(telefono == "") {
                validador= validador + 1;
                $("#errores").append('<li> Debe ingresar un teléfono </li>');
                $('#txt_telefono').removeClass('is-valid')
                $('#txt_telefono').addClass('is-invalid');
        }else{  
                $('#txt_telefono').removeClass('is-invalid')
                $('#txt_telefono').addClass('is-valid');
        };

        rut = $("#txt_rut").val();
        if(rut == "") {
                validador= validador + 1;
                $("#errores").append('<li> Debe ingresar un RUT </li>');
                $('#txt_rut').removeClass('is-valid')
                $('#txt_rut').addClass('is-invalid');
        }else{  
                $('#txt_rut').removeClass('is-invalid')
                $('#txt_rut').addClass('is-valid');
        };


        pass1 = $("#txt_pass1").val();
        pass2 = $("#txt_pass2").val();
        if(pass1 == "" && pass2==""){
                validador= validador + 1;
                $("#errores").append('<li> Debe ingresar las contraseñas </li>');
                $('#txt_pass1').removeClass('is-valid')
                $('#txt_pass1').addClass('is-invalid');
                $('#txt_pass2').removeClass('is-valid')
                $('#txt_pass2').addClass('is-invalid');

                
        }
        else if(pass1.lenght >15) {
                validador= validador + 1;
                $("#errores").append('<li> La contraseña no cumple con los requisitos </li>');
                $('#txt_pass1').removeClass('is-valid')
                $('#txt_pass1').addClass('is-invalid');
        }
        else if(pass1 != pass2){
                validador= validador + 1;
                $("#errores").append('<li> Las contraseñas no son idénticas </li>');
                $('#txt_pass1').removeClass('is-valid')
                $('#txt_pass1').addClass('is-invalid');
                $('#txt_pass2').removeClass('is-valid')
                $('#txt_pass2').addClass('is-invalid');

        }
        

        else{  
                $('#txt_pass1').removeClass('is-invalid')
                $('#txt_pass1').addClass('is-valid');
                $('#txt_pass2').removeClass('is-invalid')
                $('#txt_pass2').addClass('is-valid');
                
        };

        var checkBox = document.getElementById("chk_terminos");

        if (checkBox.checked == false){
                validador= validador + 1;
                alert("Debe aceptar los términos y condiciones");
               
        } 
        if(validador == 0){
                alert("Registro correcto"); 
        }
       

        
});


$("#tarjeta1").click(function() {
        tarjeta = $("#tarjeta1").val();
        

}



        


