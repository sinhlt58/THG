$(document).ready(function(){
    //=============================*MENU*========================================
    var url = "ajax/menu.php";
    var $menu = $('#menu');
    var $menu2 = $('#menu2');

    //=============START FOOD CATEGORIES=========================================
    //Setup.
    var typeRequestFc;
    var addFoodCategoryTemplate = $('#categories-template').html();//Cai nay la ve javascript mustache, tao template cho hop ly.
    var addFoodCategoryTemplate2 = $('#categories-template2').html();
    //Add New Category.
    $('#add-fc').on('click', function(){
        typeRequestFc = "add";
        var $fcName = $('#fc-name');
        //Lay cac gia tri tu cac the tag tuong ung.
        var foodCategoryName = $fcName.val();
        var restaurantId = $fcName.attr('restaurant-id');

        //Gui len server.
        $.ajax({
            type: 'GET',
            url: url + '?nameFc='+foodCategoryName + '&restaurantId='+restaurantId + '&typeRequestFc='+typeRequestFc,
            dataType: 'json',
            success: function(newFoodCategory){//lay du lieu tu server roi in ra tag.
                $menu.find('div').first().after(Mustache.render(addFoodCategoryTemplate, newFoodCategory));
                $menu2.find('div').first().after(Mustache.render(addFoodCategoryTemplate2, newFoodCategory));
                $.getScript('UI Design/lib/webflow.2a44966e9.js'); //load lai javascript sau khi them category de tab hoat dong
            },
            error: function(){
                alert('error adding categories.')
            }
        });

    });

    //Delete FoodCategory.
    $menu.delegate('.b-delete-fc', 'click', function(){
        typeRequestFc = "delete";
        var $divNamefc = $("div").find('.w--current')
        var $allDivfood = $(this).closest('.w--tab-active');

        //remove on database.
        var fcId = $(this).attr('fc-id');

        $.get(url + '?fc-id='+fcId +'&typeRequestFc='+typeRequestFc);

        //remove divs.
        $allDivfood.fadeOut(1000, function(){
            (this).remove();
        });
        $divNamefc.fadeOut(1000, function(){
            (this).remove();
        });
    });

    //Edit FoodCategory.
    /*$menu.delegate('.b-edit-fc', 'click', function(){
        var $edit = $(this).closest('.w--tab-active');
        $edit.addClass('edit-fc');
    });*/

    $menu.delegate('.b-save-fc', 'click', function(){
        typeRequestFc = "edit";
        var $nameFc = $(this).closest('.w--tab-active').find('input');
        var nameFc = $nameFc.val();
        var fcId = $(this).attr('fc-id');

        $.get(url + '?fc-id='+fcId + '&nameFc='+nameFc +'&typeRequestFc='+typeRequestFc);
        $("div").find(".w--current").html('<div class="no-edit-fc">'+nameFc+'</div>');
        //var $edit = $(this).closest('.row');
        //$edit.removeClass('edit-fc');
    });
    //=============END FOOD CATEGORIES===========================================

    //=============START FOOD ITEMS=========================================

    //Setup.
    var typeRequestFi;// gia tri bi thay doi tuy vao nhu cau.
    var addFoodItemTemplate = $('#food-item-template').html();

    //Add a new food item.
    var $theRowClosest;// dung chung cho 2 event ben duoi.
    $menu.delegate('.b-add-fi', 'click', function(){
        $theRowClosest = $(this).closest('.w-row');
        //lay food category id.
        var fcId = $(this).attr('fc-id');
        $('#add-fi').attr('fc-id', fcId);
    });

    $('#add-fi').on('click', function(){
        typeRequestFi = 'add';

        //lay cac gia tri trong tag input tuong ung.
        var nameFi = $('#fi-name').val();
        var priceFi =$('#fi-price').val();
        var fcId = $(this).attr('fc-id');

        //gui len server.
        $.ajax({
            type: 'GET',
            url: url + '?nameFi='+nameFi + '&priceFi='+priceFi + '&fcId='+fcId + '&typeRequestFi='+typeRequestFi,
            dataType: 'json',
            success: function(newFoodItem){ //lay food id vua gui tu server.
                $theRowClosest.after(Mustache.render(addFoodItemTemplate, newFoodItem));
            },
            error: function(){
                alert('error adding food item.')
            }
        });
    });
    //End add a new food item.

    //Delete a food item.
    $menu.delegate('.b-delete-fi', 'click', function(){
        typeRequestFi = 'delete';

        //lay id food item can xoa.
        var fiId = $(this).attr('fi-id');

        //gui len server.
        $.get(url + '?fiId='+fiId + '&typeRequestFi='+typeRequestFi);

        //xoa div.
        $(this).closest('.row').fadeOut(1000, function(){
            (this).remove();
        });
    });

    //Edit food item.
    $menu.delegate('.b-edit-fi', 'click', function(){
        var $edit = $(this).closest('.row');
        $edit.addClass('edit-fi');
    });

    $menu.delegate('.b-save-fi', 'click', function(){
        typeRequestFi = 'edit';
        //lay du lieu tu tag.
        var fiId = $(this).attr('fi-id');
        var $div = $(this).closest('.row');
        var nameFi = $div.find('input.food-name').val();
        var priceFi = $div.find('input.food-price').val();

        //day len server.
        $.get(url + '?nameFi='+nameFi + '&priceFi='+priceFi + '&fiId='+fiId + '&typeRequestFi='+typeRequestFi);

        //add cac gia tri vao tag thich hop.
        $div.find('p.food-name').html(nameFi);
        $div.find('p.food-price').html(priceFi);

        //remove class edit-fi.
        var $edit = $(this).closest('.row');
        $edit.removeClass('edit-fi');
    });

    //=============END FOOD ITEMS==========================================

    //=============================*END MENU*===================================

});