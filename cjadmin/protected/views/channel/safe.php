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
                    <a href="">信息管理</a>
                    <i class="icon-angle-right"></i>
                </li>
                <li>
                    <a href="">安全中心</a>

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
                    <form class="form-horizontal" id='myform' action='<?php echo base_url('channel/Epwd')  ?>' method='post'  >
                        <input type="hidden" value="<?php echo $id?>" name="id">

                        <div id="html1">
                            <div class="control-group">
                                <label class="control-label">账号：</label>
                                <div class="controls">
                                    <?php echo $username?>
<!--                                    <input type="text" name="name" class="m-wrap biger" data-trigger="hover" value="--><?php //echo $data['name']?><!--"     datatype="*1-255" nullmsg="公司名" readonly>-->
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label">旧密码：</label>
                                <div class="controls">
                                    <input type="password"   name="password1" class="m-wrap big" data-trigger="hover"  value=""     datatype="*1-255" nullmsg="旧密码">
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="control-label">新密码：</label>
                                <div class="controls">
                                    <input type="password"   name="newpassword" class="m-wrap big" data-trigger="hover"  value=""     datatype="*1-255" nullmsg="新密码">
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>
                                    <div class="form-actions">
                                        <button type="submit" class="btn blue">修改密码</button>
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