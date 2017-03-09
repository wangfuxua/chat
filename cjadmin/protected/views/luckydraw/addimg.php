<script type="text/javascript">
    jQuery(document).ready(function(){
        var m = "<?php echo $errormsg ?>";
        if (m) {
            ph$.alert(m);
        }
    });
</script>
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
                    <a href="/">Home</a>
                    <i class="icon-angle-right"></i>
                </li>
                <li>
                    <a href="">资源管理</a>
                    <i class="icon-angle-right"></i>
                </li>
                <li><a href="">添加头像<i class="icon-angle-right"></i></a></li>
                
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

                    <div class="caption"><i class="icon-reorder"></i>Form   <?php //  echo date("Y-m-d H:m:i", 1403513875);   ?></div>


                </div>

                <div class="portlet-body form">

                    <!-- BEGIN FORM-->
                    <hr />
                    <div id="html1" style="">
                        <form class="form-horizontal" id='myform' action='<?php echo base_url('luckydraw/gold_insert') ?>' method='post'  >


                            <div class="control-group">
                                <label class="control-label">扫描头像：</label>
                                <div class="controls">
                                   <a class="btn green"  id="st" value='' onclick="startimg()"> 开始扫描</a>
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>
                            <div class="form-actions" id="hhhh">

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
    function startimg(){
        var URL="<?php echo base_url('Luckydraw/ScanHead');?>";
        $.ajax({
            type: "post",
            url: URL,
            data: "",

            success:function(msg){
             $('#hhhh').append(msg);
            }
        });
    }

</script>