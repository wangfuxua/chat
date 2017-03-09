 	<script type="text/javascript">
		jQuery(document).ready(function(){
			var m = "<?php echo $errormsg ?>";
			if (m) {
				ph$.alert(m);
			}
		});
	</script>
<!--content-->
    <style type="text/css">
        html,body,input{font-family: "Microsoft YaHei";margin :0;padding: 0;}
        .login_bg p{font-size: 20px;font-weight: bold;color: #fff;line-height: 20px;  margin: 25px 0px 10px 10px;}
        h1{font-size: 45px;font-weight: normal;margin: 0;color: #fff;text-shadow: #666 2px 2px 10px;margin: 100px 0 40px 0 ;text-align: center;}
        .login_bg{}
        input{-webkit-box-shadow: #666 2px 2px 10px;
            -moz-box-shadow: #666 2px 2px 10px;
            box-shadow: #666 2px 2px 10px;
            width: 400px;
            height: 40px;
            background-color: #CAC1B0;
            border: 1px solid #D7D3C8;
            border-radius: 8px;
            padding-left: 10px;
            color: #fff;
            font-size: 20px;
        }
        body{background:url(/cjadmin/images/login_bg.jpg) no-repeat center 0 ;}
        .ipt_yzm{width: 165px;margin-top: 0;float: left;margin-right: 10px;}
        .login_form{width: 400px;margin: 0 auto;}
        .login_form img{border-radius: 5px;
            display: block;
            float: left;
            border: 1px solid #D7D3C8;
        }
        .login_btn{margin-top: 10px;
            background-color: #E9393B;
            border:none;
            border-bottom:3px solid #901C1C;
            color: #fff;
            font-size: 18px;
            width: 165px;
            /*padding: 10px 0 10px 0;*/
            margin: 30px 0 0 0 ;
            cursor: pointer;}
    </style>
<div class="login_bg">
    <h1>擦肩后台管理系统</h1>
    <form class="login_form"action="<?php echo base_url('passport/DoLogin')?>" method="post">
        <p>账号：</p>
        <input type="text" name="username">
        <p>密码：</p>
        <input type="password" name="pwd">
        <p>验证码：</p>
        <input type="text" name="authcode" class="ipt_yzm"><span id="authcode_btn_login"><img class="yan" id="authcode_img" src="<?php echo base_url("passport/authcode") ?>" /></span>
        <div class="clear"></div>
        <input type="submit" value="登陆" class="login_btn">
    </form>

<!--content end-->
 