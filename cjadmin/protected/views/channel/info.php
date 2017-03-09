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
                    <a href="">个人信息管理</a>

                </li>


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
                    <form class="form-horizontal" id='myform' action='<?php echo base_url('channel/Einfo')  ?>' method='post'  >
                        <input type="hidden" value="<?php echo $data['id']?>" name="id">

                        <div id="html1">
                            <div class="control-group">
                                <label class="control-label">账号：</label>
                                <div class="controls">
                                    <?php echo $data['username']?>
<!--                                    <input type="text" name="name" class="m-wrap biger" data-trigger="hover" value="--><?php //echo $data['name']?><!--"     datatype="*1-255" nullmsg="公司名" readonly>-->
                                    <span class="help-inline  Validform_checktip"></span>
                                </div>
                            </div>

                            <div id="html1">
                                <div class="control-group">
                                    <label class="control-label">金子余额：</label>
                                    <div class="controls">
                                        <?php echo $data['gold']?> 克
                                        <!--                                    <input type="text" name="name" class="m-wrap biger" data-trigger="hover" value="--><?php //echo $data['name']?><!--"     datatype="*1-255" nullmsg="公司名" readonly>-->
                                        <span class="help-inline  Validform_checktip"></span>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">联系人：</label>
                                    <div class="controls">
                                        <input type="text" name="email" class="m-wrap big" data-trigger="hover"   value=" <?php echo $data['name']?>"    datatype="*1-255" nullmsg="联系人" readonly>
                                        <span class="help-inline  Validform_checktip"></span>
                                    </div>
                                </div>

                                    <div class="control-group">
                                        <label class="control-label">联系人电话：</label>
                                        <div class="controls">
                                            <input type="text" name="num" class="m-wrap big" data-trigger="hover"  value="<?php echo $data['phone']?>"     datatype="*1-255" nullmsg="联系人电话" readonly>
                                            <span class="help-inline  Validform_checktip"></span>
                                        </div>
                                    </div>

                                        <div class="control-group">
                                            <label class="control-label">所在省：</label>
                                            <div class="controls">
                                                <input type="text" name="username" class="m-wrap big" data-trigger="hover"  value="<?php echo $data['province']?>"     datatype="*1-255" nullmsg="所在省" readonly>
                                                <span class="help-inline  Validform_checktip"></span>
                                            </div>
                                        </div>

                                            <div class="control-group">
                                                <label class="control-label">所在市：</label>
                                                <div class="controls">
                                                    <input type="text" name="tel" class="m-wrap big" data-trigger="hover"  value="<?php echo $data['city']?>"     datatype="*1-255" nullmsg="所在市" readonly>
                                                    <span class="help-inline  Validform_checktip"></span>
                                                </div>
                                            </div>

                                                <div class="control-group">
                                                    <label class="control-label">详细地址：</label>
                                                    <div class="controls">
                                                        <input type="text" name="phone" class="m-wrap big" data-trigger="hover"  value="<?php echo $data['address']?>"     datatype="*1-255" nullmsg="详细地址" >
                                                        <span class="help-inline  Validform_checktip"></span>
                                                    </div>
                                                </div>
                                            <div class="control-group">
                                                <label class="control-label">区号：</label>
                                                <div class="controls">
                                                    <input type="text" name="username1" class="m-wrap big" data-trigger="hover"  value="<?php echo $data['code']?>"     datatype="*1-255" nullmsg="区号" readonly>
                                                    <span class="help-inline  Validform_checktip"></span>
                                                </div>
                                            </div>

                                                <div class="control-group">
                                                    <label class="control-label">公司：</label>
                                                    <div class="controls">
                                                        <input type="text" name="tel1" class="m-wrap big" data-trigger="hover"  value="<?php echo $data['company']?>"     datatype="*1-255" nullmsg="公司" readonly>
                                                        <span class="help-inline  Validform_checktip"></span>
                                                    </div>
                                                </div>
                                    <div class="control-group">
                                        <label class="control-label">创建时间：</label>
                                        <div class="controls">
                                            <input type="text" name="timeline" class="m-wrap big" data-trigger="hover"  value="<?php echo date('Y-m-d H:i:s',$data['timeline'])?>"     datatype="*1-255" nullmsg="创建时间" readonly>
                                            <span class="help-inline  Validform_checktip"></span>
                                        </div>
                                    </div>
                                    <div class="form-actions">
                                        <button type="submit" class="btn blue">更改修改项</button>
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