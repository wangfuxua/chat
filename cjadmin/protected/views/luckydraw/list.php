<style type="text/css">
	<!--

-->
</style>
<script src="media/js/table-editable.js"></script>    
<script type="text/javascript">
	
	//删除项
	$("#dev_del").live('click',function(){
            

		var btn = $(this);
		var id = btn.attr('rel');
		// alert(id);return false;
		var URL ="<?php echo base_url('gold/glod_remove/bid/'.$bid['id'].'/sid/'.$sid['id'].' ')?>";
                if(confirm("确定要清空数据吗？")){
                        $.ajax({
                          type: "POST",
                          url: URL,
                          data: "id="+id,
                          success: function(msg){
                                 if(msg==1){
                                         alert("删除成功!");
                                         location.reload() ;
                                 }else{
                                         alert("删除成功!");
                                         return false;
                                 }
                              }
                       });
                }
//                hiConfirm('您确定要删除吗？', '提示',function(r){
//                alert(id);return false;
//	        if(r){
//                    
//                      }
//		});
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
				<?php echo $bid['name'];?> <small><?php echo $sid['name'];?> </small>
			</h3>
			<ul class="breadcrumb">
				<li>
					<i class="icon-home"></i>
					<a href="index.html">Home</a> 
					<i class="icon-angle-right"></i>
				</li>
				<li>
					<a href="#"><?php echo $bid['name'];?></a>
					<i class="icon-angle-right"></i>
				</li>
				<li><a href="#"><?php echo $sid['name'];?></a></li>
			</ul>
			<!-- END PAGE TITLE & BREADCRUMB-->
		</div>
	</div>
	<!-- END PAGE HEADER-->
	<!-- BEGIN PAGE CONTENT-->
	<div class="row-fluid">
		<div class="span12">


			<div class=" ">
			<!-- BEGIN CONDENSED TABLE PORTLET-->
                	<div class="portlet box green">

				<div class="portlet-title">
					<div class="caption"><i class="icon-picture"></i>
					<?php if (in_array('gold_list_a',$role)){?>
						<a href="<?php echo base_url('gold/gold_add/bid/'.$bid['id'].'/sid/'.$sid['id'].' ')?>">
							<span class="label label-warning"></span></a><?php }?></div>
                                                        
                                      
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
                                <th>编码</th>
                                <th>店名</th>
                                <th>扫码数</th>
                                <th>抽奖数</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                           

                            <?php foreach ($data as $item) { ?>

                                <tr id="<?php echo $item['yid']?>">
                                    <td><?php echo $item['yid']?></td>
                                    <td>                                      
                                        <?php if(empty($item['region'])){?> 
                                        <input type="text" id="region" ><input type="button" value="添加店名" onclick="upregion(<?php echo $item['id']?>)">
                                        <?php }else{echo $item['region']; }?>
                                    </td>
                                    <td><?php echo $item['sweepyardnum']?></td>
                                    <td><?php echo $item['luckydrawnum']?></td>   
                                    
                                    <td><a href="" onclick="delet(<?php echo $item['id']?>)">删除</a> <a href="/Luckydraw/cominfo/yid/<?php echo $item['yid']?>">编辑</a> </td>

                                </tr>
                            <?php } ?>

                            </tbody>

                        </table>
                                <div class="row-fluid">
                                  <?php echo $page ?>
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

</div>

<script>
function upregion(id){

      var vals =  $("#region").val();

        $.ajax({
         type: "post",
         url: "<?php echo base_url('Luckydraw/region_up/bid/'.$bid['id'].'/sid/'.$sid['id'].' ')?>",
         data:"region="+vals+"&id="+id,
         success: function(data){
         if(data==1){  

             location.reload() ;
         }else{
             alert('修改失败');
         }
         },
         error: function(){
          alert("怎么出错了呢");
         }
        });
    }
    



</script>