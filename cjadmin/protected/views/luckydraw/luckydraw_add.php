 
<div class="container-fluid">

    <!-- BEGIN PAGE HEADER-->

    <div class="row-fluid">

        <div class="span12">

            <!-- BEGIN STYLE CUSTOMIZER -->

            <!-- END BEGIN STYLE CUSTOMIZER --> 

            <!-- BEGIN PAGE TITLE & BREADCRUMB-->
            <h3 class="page-title">
               </small>
            </h3>
            <ul class="breadcrumb">
                <li>
                    <i class="icon-home"></i>
                    <a href="index.html">Home</a> 
                    <i class="icon-angle-right"></i>
                </li>
                <li>
                    <a href=""></a>
                    <i class="icon-angle-right"></i>
                </li>
                <li><a href="/gold/gold_list/bid/71/sid/72"><i class="icon-angle-right"></i></a></li>
                <li><a href="/gold/gold_add/bid/71/sid/72">库存添加</a></li>
            </ul>
            <!-- END PAGE TITLE & BREADCRUMB-->

        </div>

    </div>

    <!-- END PAGE HEADER-->

    <!-- BEGIN PAGE CONTENT-->

    <div class="row-fluid">

        <div class="span12">
            <div class="portlet box blue">

                <div class="portlet-title">

                    <div class="caption"><i class="icon-reorder"></i>Form   <?php //  echo date("Y-m-d H:m:i", 1403513875);  ?></div>


                </div>

                <div class="portlet-body form">

                    <!-- BEGIN FORM-->
                    <hr />
                    <div id="html1" style="">
                        <form class="form-horizontal" id='myform' action='<?php echo base_url('luckydraw/qr_insert') ?>' method='post'  >

                            <div class="control-group">
                                <label class="control-label">省：</label>
                                <div class="controls">
                                    <select class="grsr2" name="ads_prov" id="sr1" onchange="course(this.value)">
                                        <option value="">省</option>
                                        <?php foreach ($place as $item) { ?>
                                            <option value="<?php echo $item['region_id'] ?>"><?php echo $item['region_name'] ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>


                            <div class="control-group">
                                <label class="control-label">市：</label>
                                <div class="controls">
                                    <select class="grsr2" name="ads_city" id="sr2" >
                                        <option value="">市</option>
                                    </select>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label">编码个数：</label>
                                <div class="controls">
                                    <input type="text" name="codenum" class="m-wrap small" data-trigger="hover"      >
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>



                            <div class="form-actions">
                                <button type="submit" class="btn blue">Submit</button>
                                <button type="button" class="btn">Cancel</button>
                            </div>

                        </form>
                    </div>
                    <!-- END FORM-->       

                </div>

            </div>

        </div>

    </div>

    <!-- END PAGE CONTENT-->

</div>

<!-- END PAGE CONTAINER--> 

</div>

<!-- END PAGE -->    

</div>
<script>
    function course(a) {
        var obj = document.getElementById("sr2");
        for (var i = 0; i < obj.length; i++) {
            obj.options.length = 0;
        }

        var URL = "<?php echo base_url('Luckydraw/getplase') ?>";
        $.ajax({
            type: "post",
            url: URL,
            data: "name=" + a,
            dataType: 'json',
            success: function(msg) {
                var htmloptions = "<option value='' >市</option>";
                for (i = 0; i < msg.length; i++) {
                    htmloptions += "<option value=" + msg[i].region_id + " >" + msg[i].region_name + "</option> ";
                }
                $('#sr2').append(htmloptions);
                var htmloptions = '';

            }
        });
    }
</script>