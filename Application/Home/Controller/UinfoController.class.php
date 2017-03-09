<?php
namespace Home\Controller;
use Home\Model\UserModel;
use Think\Controller;
use Think\Model;
use  Home\models;
class UinfoController extends Controller {
    protected $model;
    protected  $uid;
    public function __construct() {
        parent::__construct();
        header("Access-Control-Allow-Origin:*");
        header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');
        $this->uid=session('uid');
        $uid=session('uid');
        $uid2= I("uid",'0');

        if(!$uid){
            if($uid2){
                session("uid",$uid2);
            }else{
            $data1['code']="100404";
            $data1['data']='';
            $data1['message']="您还没有登陆";
          //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
            die;}
        }
    }
   public  function index(){
       $u= new models\Muser();
       echo $u->checkusername('111');
    }
    /*
     *获取用户基本信息
     * */
    function Getuser(){

    $data=models\Muser::Getinfo();
        $data1['code']="100404";
        $data1['data']='';
        if(!$data){
            $data1['message']='信息有误';
            $this->ajaxReturn($data1);die;
            die;
        }else{
            $data['headimg']='/'.$data['headimg'];
            $data1['code']="100200";
            $data1['data']=$data;
            $data1['message']='获取信息成功';
            $this->ajaxReturn($data1);die;
            die;
        }
    }
    /*
     *获取和用户擦肩的用户
     * */
    function Getpass(){
       // echo $i=models\Muser::CheckFriend(1,2);die;
        $uid=session('uid');
        $hid=$_REQUEST['mac']?$_REQUEST['mac']:0;
//       echo $hid;
//        $hid='{"hid":"11111111111"}';
       $hids=json_decode($hid,true);

        $data1['code']="100404";
        $data1['data']='';
        $data=models\Muser::GetPass($hids);

        if($data){
            $datas=array();
            foreach($data as $v){
                 $i=models\Muser::CheckFriend($uid,$v['id']);
                 $v['if']=$i;
                $datas[]=$v;
            }
            var_dump($datas);die;
            $data1['code']="100200";
            $data1['data']=$datas;
            $data1['message']='获取信息成功';
            $this->ajaxReturn($data1);die;
            die;
        }else{
            $data1['message']='无擦肩信息';
            $this->ajaxReturn($data1);die;
            die;
        }
    }

    /*
     * 添加和用户擦肩的用户
     * */
        function AddPass(){
            $uid= $data['uid']=I("uid",'0');//登陆用户id
          //  $uid=session('uid');
            $pid= $data['pid']=I("hid",'0');//擦肩用户id

            $data1['code']="100404";
            $data1['data']='';
            $r=models\Muser::AddPass($data);
            if($r){
                $data1['message']='擦肩请求成功';
                $data1['code']="100200";
                $this->ajaxReturn($data1);die;
            }else{
                $data1['message']='擦肩请求失败';
                $this->ajaxReturn($data1);die;
            }
        }

    /*
     * 发送好友请求
     * */
    function SendFriend(){
        $uid=session('uid');
        $tuid=I("tuid",'0');
        $message=I("message",'0');
        $data['fromuid']=$uid;
        $data['touid']=$tuid;

        $data['message']=$message;
        $data1['code']="100404";
        $data1['data']='';
        if($uid==$tuid){
            $data1['message']='不能添加自己为好友';
            $this->ajaxReturn($data1);die;
        }
        $r=models\Muser::CheckFriend($uid,$tuid);
        if($r){
            $data1['message']='你们已经是好友了';
            $this->ajaxReturn($data1);die;
        }
        $r=models\Muser::SendFriend($data);
        if($r){
            $data1['message']='发送好友请求成功';
            $data1['code']="100200";
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']='发送好友请求失败';
            $this->ajaxReturn($data1);die;
        }
    }
    /*
     * 获取用户的所有好友请求消息
     * */
    function GetSfriend(){
        $uid= $data['uid']=I("uid",'0');//登陆用户id
        $data1['code']="100404";
        $data1['data']='';
        $data=models\Muser::GetSf($uid);
        if($data){
        $re=array();
       foreach($data as $v){
            $v['headimg']='/'.$v['headimg'];
           $re[]=$v;
       }
            $data1['message']='获取成功';
            $data1['code']="100200";
            $data1['data']=$re;
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']='获取失败';
            $this->ajaxReturn($data1);die;
        }

    }
    
    /*
     * 同意加好友
     * */
    function AgreeFriend(){
        $uid= $data['uid']=I("uid",'0');//登陆用户id

        $aid= $data['aid']=I("aid",'0');//请求消息id
        $data1['code']="100404";
        $data1['data']='';
       $r=models\Muser::AgreeFriend($aid,$uid);
       if($r){
       	$data1['message']='同意成功';
       	$data1['code']="100200";
       	$data1['data']='';
       	$this->ajaxReturn($data1);die;
       }else{
       	$data1['message']='同意失败';       
       	$this->ajaxReturn($data1);die;
       }
        
      }
      /*
       * 更新用户的基本信息
       * */
      function UpUserinfo(){

//        var_dump($_FILES);die;
      	$data1['code']="100404";
      	$data1['data']='';
      	$uid=$w['uid']=I("uid",'0')?I("uid",'0'):session('uid');//登陆用户id
      	if(!$uid){
      		$data1['message']='用户信息有误';
      		$this->ajaxReturn($data1);die;
      	}

      	$name=I("name",'0');//登陆用户昵称
      	if($uid){
      		$data['name']=$name;
      	}
      	$status=I("status",'0');//登陆用户状态
      if($status){
      	$data['status']=$status;
      }	
      if($status || $name){
      	$m=D('user');
      	$wh['id']=$uid;
      	$r1=$m->where($wh)->save($data);
      }
      $sex=I("sex",'0');//登陆用户性别
      if($sex){
      	$da['sex']=$sex;
      }

      $tag=I("tag",'0');//登陆用户性别
     	if($tag){
     		$da['tag']=$tag;
     	}
          $img=I("img",'0');//登陆用户性别
        if($img){
          $headimg=models\Muser::UpImg1($uid,$img);

          if($headimg!='0'){
//              var_dump($headimg);die;
              $da['headimg']='/Public/headimg/'.$headimg;
              $data1['data']=  $da['headimg'];
          }
        }
            $sign=I("sign",'0');//登陆用户签名
          if($sign){
              $da['sign']=$sign;
          }

          if($tag || $sex || $headimg<>0 || $sign){

     		$m=D('userinfo');
     		$r=$m->where($w)->save($da);

     	}
     if($r || $r1){
     	$data1['message']='更新用户信息成功';
     	$data1['code']='100200';
     	$this->ajaxReturn($data1);die;
     }else{
     	$data1['message']='更新用户信息失败';
     	$this->ajaxReturn($data1);die;
     }	
     	
      }
    /*
     * 拒绝用户好友请求
     * */
      function DownFriend(){
     $uid=$w['uid']=I("uid",'0');//登陆用户id
     $aid=$w['aid']=I("aid",'0');//id
     $data1['code']="100404";
     $data1['data']='';
   		$m=D('sendfriend');
   		$w['touid']=$uid;
   		$w['id']=$aid;
   		$data['status']=2;
   		$r=$m->where($w)->save($data);
   	if($r){
   		$data1['code']="100200";
   		$data1['data']=$r;
   		$data1['message']='拒绝用户成功';
   		$this->ajaxReturn($data1);die;
   	}else{
   		$data1['message']='拒绝用户失败';
   		$this->ajaxReturn($data1);die;
   	}
      }

    /*
     * 获取好友列表
     * */
      function GetFriend(){
          $data1['code']="100404";
          $data1['data']='';
          $name=I("name",'0');
          $p=I("p",'0');//获取的页数
          $order=($p*10).',10';
          $uid=$w['uid']=I("uid",'0');//登陆用户id
          if(!$uid){
              $uid=session('uid');
          }
           $m=D('friend');
            $data=$m->where($w)->limit($order)->select();
          if($data){
          $m2=D('user');
          if($name){
             $where['user.name']=array('like','%'.$name."%");
          }
          $datas=array();
          foreach($data as $v){
              $where['user.id']=$v['fuid'];
           $r= $m2->join('userinfo on user.id=userinfo.uid','left')->where($where)->field('user.name,userinfo.*')->find();
              $datas[]=$r;
          }
          $data1['code']="100200";
          $data1['data']=$datas;
          $data1['message']='获取用户好友成功';
          $this->ajaxReturn($data1);die;
          }else{
              $data1['message']='获取用户好友失败';
              $this->ajaxReturn($data1);die;
          }
      }

    /*
     * 随机获取真心话
     * */
    function GetQuery(){
        $data1['code']="100404";
        $data1['data']='';
       $r= models\Muser::GetQuery();
        if($r){
            $data1['code']="100200";
            $data1['message']='获取真心话成功';
            $data1['data']=$r;
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']='获取真心话失败';
            $this->ajaxReturn($data1);die;
        }
    }
    /*
     * 获取用户的真心话
     * */
    function GetQueryByuid(){
        $uid=$w['uid']=I("uid",'0');//登陆用户id
        $data1['code']="100404";
        $data1['data']='';
        $r= models\Muser::GetQueryByuid($uid);
        if($r){
            $data1['code']="100200";
            $data1['message']='获取真心话成功';
            $data1['data']=$r;
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']='获取真心话失败';
            $this->ajaxReturn($data1);die;
        }
    }
    /*
     * 添加一个自己的真心话
     * */
    function InsQuery(){
        $data['query']=$query=I('query',0);
        $data1['code']="100404";
        $data1['data']='';
        $uid=$w['uid']=I("uid",'0');//登陆用户id
        if(!$uid){
            $uid=session('uid');
        }
        if(!$query){
            $data1['message']='问题不能为空';
            $this->ajaxReturn($data1);die;
        }
        $data['answer']=$answer=$_REQUEST['answer']?$_REQUEST['answer']:0;
        if(!$answer){
            $data1['message']='答案不能为空';
            $this->ajaxReturn($data1);die;
            }
        $data['answer']=json_decode($answer,true);
        $r= models\Muser::InsQuery($data,$uid);
        if($r){
            $data1['code']="100200";
            $data1['message']='添加成功';
            $data1['data']=$r;
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']='添加失败';
            $this->ajaxReturn($data1);die;
        }
    }
    /*
     * 获取用户的未读消息数量
     * */
    function GetMessage(){
        $uid=$w['uid']=I("uid",'0');//登陆用户id
        $data1['code']="100404";
        $data1['data']='';
        if(!$uid){
            $uid=session('uid');
        }
        $r= models\Muser::GetMessageByUid($uid);
        $re['num']=$r;
        $re['uid']=$uid;
        if($r){
            $data1['code']="100200";
            $data1['message']='获取成功';
            $data1['data']=$re;
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']='获取失败';
            $this->ajaxReturn($data1);die;
        }
    }
    /*
     *获取所有好友的所有未读消息的数量
     * */
    function GetFriendM(){
        $data1['code']="100404";
        $data1['data']='';
        $uid=$w['uid']=I("uid",'0');//登陆用户id
        $m=D('friend');
        $w['uid']=$uid;
        $data=$m->where($w)->group("fuid")->select();
//        var_dump($data);die;
        if(!empty($data)){
            $re=array();
        foreach($data as $v){
            $r=models\Muser::Getmessagefuid($uid,$v['fuid']);
            if($r['num']>0){
                $re[]=$r;
            }
        }

        if(!empty($re)){
            $data1['code']="100200";
            $data1['message']='获取成功';
            $data1['data']=$re;
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']='获取失败';
            $this->ajaxReturn($data1);die;
        }
        }else{
            $data1['message']='获取失败';
            $this->ajaxReturn($data1);die;
        }
    }
    /*
     * 删除好友
     * */
        function DelFriedn(){
            $data1['code']="100404";
            $data1['data']='';
            $uid=I("uid",'0');//登陆用户id
            $fuid=I("fuid",'0');//登陆用户id
            $r=models\Muser::DelFriend($uid,$fuid);
            if($r){
                $data1['code']="100200";
                $data1['message']='删除成功';
                $data1['data']=$r;
                $this->ajaxReturn($data1);die;
            }else{
                $data1['message']='删除失败';
                $this->ajaxReturn($data1);die;
            }
        }

    /*
     * 获取聊天记录
     * */
        function GetMessageByUid(){
            $uid=I("uid",'0');//登陆用户id
            $day=I("day",'0');//天
            $r=models\Muser::GetMessage($uid,$day);
            if($r){
                $data1['code']="100200";
                $data1['message']='获取成功';
                $data1['data']=$r;
                $this->ajaxReturn($data1);die;
            }else{
                $data1['message']='获取失败';
                $this->ajaxReturn($data1);die;
            }
        }
}