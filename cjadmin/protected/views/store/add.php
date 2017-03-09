<div class="container-fluid">

    <!-- BEGIN PAGE HEADER-->

    <div class="row-fluid">

        <div class="span12">

            <!-- BEGIN STYLE CUSTOMIZER -->

            <!-- END BEGIN STYLE CUSTOMIZER -->

            <!-- BEGIN PAGE TITLE & BREADCRUMB-->

            <ul class="breadcrumb">
                <li>
                    <i class="icon-home"></i>
                    <a href="index.html">Home</a>
                    <i class="icon-angle-right"></i>
                </li>
                <li>
                    <a href="">门店管理</a>
                    <i class="icon-angle-right"></i>
                </li>
                <li>
                    <a href="">添加门店</a>

                </li>


            </ul>
            <!-- END PAGE TITLE & BREADCRUMB-->

        </div>

    </div>

    <!-- END PAGE HEADER-->

    <!-- BEGIN PAGE CONTENT-->
    <script type="text/javascript">
        jQuery(document).ready(function(){
            var m = "<?php echo $errormsg ?>";
            if (m) {
                ph$.alert(m);
            }
        });
    </script>
    <div class="row-fluid">

        <div class="span12">
            <div class="portlet box blue">

                <div class="portlet-title">

                    <div class="caption"><i class="icon-reorder"></i>Form   <?php //  echo date("Y-m-d H:m:i", 1403513875);?></div>

                    <!-- <div class="tools">

                        <a href="javascript:;" class="collapse"></a>

                        <a href="#portlet-config" data-toggle="modal" class="config"></a>

                        <a href="javascript:;" class="reload"></a>

                        <a href="javascript:;" class="remove"></a>

                    </div> -->

                </div>

                <div class="portlet-body form">

                    <!-- BEGIN FORM-->


                    <?php if(isset($_GET['error']) && $_GET['error']==1){echo "<span style='color: red'>您输入的信息不完整,请重新输入</span>";}?>
                    <hr />
                    <form class="form-horizontal" id='myform' action='<?php echo base_url('store/DoAdd')  ?>' method='post'  >


                        <div id="html1">
                            <div class="control-group">
                                <label class="control-label">门店名称：</label>
                                <div class="controls">
                                    <input type="text" name="name" class="m-wrap big" data-trigger="hover"  value=""     datatype="*1-255" nullmsg="门店名称">
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label">门店电话：</label>
                                <div class="controls">
                                    <input type="text"   name="phone" class="m-wrap big" data-trigger="hover"  value=""     datatype="*1-255" nullmsg="旧密码">
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="control-label">门店面积：</label>
                                <div class="controls">
                                    <div class="input-prepend input-append">

                                      <input name="area" type="text" class="m-wrap "><span class="add-on">m²</span>

                                    </div>

                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label">门店地址：</label>
                                <div class="controls">
                                    <input class="m-wrap small" type="text" placeholder="small" value="<?php echo $province.$city?>" readonly=""> -
                                    <input type="text"   name="address" class="m-wrap big" data-trigger="hover"  value=""     datatype="*1-255" nullmsg="门店地址">
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label">门店二维编码：</label>
                                <div class="controls">
                                    <input class="m-wrap small" type="text" placeholder="small" value="<?php echo $code?>" readonly=""> -
                                    <input type="text"   name="qrcode" class="m-wrap big" data-trigger="hover"  value=""     datatype="*1-255" nullmsg="门店二维编码">
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>

                                    <div class="form-actions">
                                        <button type="submit" class="btn blue">添加门店</button>
                                    </div>
                                </div>
                    </form>


                    <!-- END FORM-->

                </div>

            </div>

        </div>

    </div>

    <!-- END PAGE CONTENT-->

</div>