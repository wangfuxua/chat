
<div class="container-fluid">
    <!-- BEGIN PAGE HEADER-->
    <div class="row-fluid">
        <div class="span12">
            <!-- BEGIN STYLE CUSTOMIZER -->
            <!-- END BEGIN STYLE CUSTOMIZER -->
            <!-- BEGIN PAGE TITLE & BREADCRUMB-->
            <h3 class="page-title">

            </h3>
            <ul class="breadcrumb">
                <li>
                    <i class="icon-home"></i>
                    <a href="index.html">Home</a>
                    <i class="icon-angle-right"></i>
                </li>
                <li>
                    <a href="#">用户管理</a>
                    <i class="icon-angle-right"></i>
                </li>
                <li><a href="#">用户列表</a></li>
            </ul>
            <!-- END PAGE TITLE & BREADCRUMB-->
        </div>
    </div>
    <!-- END PAGE HEADER-->
    <!--start input for search-->
    <style>
        .search_red{
            color: red;
        }

    </style>


    <!--end input for search-->

    <!-- BEGIN PAGE CONTENT-->
    <div class="row-fluid">
        <div class="span12">


            <div class=" ">
                <!-- BEGIN CONDENSED TABLE PORTLET-->

                <div class="portlet box green">
                    <div class="portlet-title">
                        <div class="caption"><i class="icon-picture"></i>

                           </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"></a>
                            <!-- <a href="portlet-config" data-toggle="modal" class="config"></a> -->
                            <a href="javascript:;" class="reload"></a>
                            <!-- <a href="javascript:;" class="remove"></a> -->
                        </div>
                    </div>



                    <div class="portlet-body">
                        <table class="table table-condensed table-hover">

                            <thead>
                            <tr>
                                <th>用户名</th>

                                <th>用户昵称</th>
                                <th>用户性别</th>

                                <th>用户签名</th>
                                <th>时间</th>

                            </tr>
                            </thead>
                            <tbody>



                            <?php if($data):?>
                            <?php foreach($data as $v):?>
                                <tr >
                                    <td><?php echo $v['username']?></td>
                                    <td><?php echo $v['name'];?></td>
                                    <td><?php if($v['sex']==0){echo "保密";}elseif($v['sex']==1){echo "男";}elseif($v['sex']==1){echo "女";}?></td>
                                    <td><?php echo $v['tag']?$v['tag']:'null';?></td>
                                    <td><?php echo date("Y-m-d H:i:s",$v['timeline'])?>
                                    </td>

                                </tr>
                            <?php endforeach;?>
                            <?php endif;?>
                            </tbody>

                        </table>
                        <div class="row-fluid">
                            <?php if(isset($page)):?>
                            <?php
                            $this->widget('CLinkPager',array(
                                    'header'=>'',
                                    'firstPageLabel' => '首页',
                                    'lastPageLabel' => '末页',
                                    'prevPageLabel' => '上一页',
                                    'nextPageLabel' => '下一页',
                                    'pages' => $page,
                                    'maxButtonCount'=>10
                                )
                            );
                            ?>
    <?php endif;?>

                        </div>
                    </div>

                </div>

                <!-- END CONDENSED TABLE PORTLET-->

            </div>


        </div>

        <!-- END PAGE CONTENT-->

    </div>

    <!-- END PAGE CONTAINER-->

</div>

<!-- END PAGE -->

