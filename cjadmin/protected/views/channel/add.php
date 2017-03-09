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
                    <a href="">账号管理</a>
                    <i class="icon-angle-right"></i>
                </li>
                <li>
                    <a href="">添加账号</a>

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


                        <div id="html1">
                            <div class="control-group">
                                <label class="control-label">账号：</label>
                                <div class="controls">
                                    <input type="text"   name="username" class="m-wrap big" data-trigger="hover"  value=""     datatype="*1-255" nullmsg="账号">
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label">密码：</label>
                                <div class="controls">
                                    <input type="password"   name="password1" class="m-wrap big" data-trigger="hover"  value=""     datatype="*1-255" nullmsg="密码">
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="control-label">重复密码：</label>
                                <div class="controls">
                                    <input type="password"   name="newpassword" class="m-wrap big" data-trigger="hover"  value=""     datatype="*1-255" nullmsg="重复密码">
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>
                                    <div class="form-actions">
                                        <button type="submit" class="btn blue">确认添加</button>
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