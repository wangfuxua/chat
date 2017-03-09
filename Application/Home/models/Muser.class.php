<?php
namespace Home\models;
use Home\Model\UserModel;
use Think\Controller;
use Think\Model;
use Think\Upload;
use yii\base\Exception;

class Muser extends Controller{
    protected $model;
    function __construct(){
        header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');
    //   $this->model=D("user");
    }

    /*
  * 检测当前用户是否注册
  * */
    static public  function checkusername($username){
        $mode=D("user");
        $where['username']=$username;
        $re=$mode->where($where)->find();

        if($re){
            return 1;
        }else{
            return 0;
        }
    }
    static public function Login($username,$ps){
        $mode=D('user');
        $where['username']=$username;
        $where['password']=$ps;
        $re=$mode->where($where)->find();
        if($re){
            session("uid",$re['id']);
            $data['uid']=$re['id'];
            return $data;
        }else{
            return 0;
        }
    }
    /*
     * 注册用户
     * */
    static  public function Region($data){
        $user=new Model();
        $user->startTrans();
        try{
        $us['username']=$data['username'];
        $us['password']=$data['password'];
        $us['name']=$data['name'];
        $us['timeline']=time();
        $u=$user->table('user')->add($us);
        $info['headimg']=$data['headimg'];
            $info['sex']=$data['sex'];
            $info['appleMac']=$data['appleMac'];
            $info['tag']=$data['tag'];
            $info['uptime']=time();
            $info['timeline']=time();
           $i=$user->table('userinfo')->add($info);
            if($u && $i){
                $user->commit();
                return $user->table('user')->getLastInsID();
            }else{
                $user->rollback();
                return 0;
            }
        }catch (Exception $e){
            $user->rollback();
            return 0;
        }

    }
    /*
     * 获取用户信息
     * */
    static public function Getinfo(){
        $uid=session('uid');
//      $uid=1;
        $m=D('user');
       $data=$m->
           join('left join `userinfo` on user.id=userinfo.uid')->
           join('hard_relation on user.id=hard_relation.uid','left')->
           where('user.id='.$uid)->
           field('userinfo.*,user.name,user.status,user.username,hard_relation.hid')->find();
        //var_dump($data);die;
        return $data;
    }
    /*
     * 获取用户擦肩的用户
     * */
    static public function GetPass($hids){
           $uid=session('uid');
//         $m=D('pass_relation');
      //  $data=$m->where('uid='.$uid)->select();
        $m2=D('hard_relation');
        $re=array();

        foreach($hids as $v){


          self::AddPass($uid,$v);
          $da=$m2->join('user on hard_relation.uid=user.id ','left')->join('userinfo on hard_relation.uid=userinfo.uid','left')->field('user.name,user.id,userinfo.headimg,userinfo.sex')->where('hard_relation.hid=\''.$v.'\'')->find();
            $da['num']=self::CountPass($uid,$v);
            $re[]=$da;
        }
//        var_dump($re);die;
        $re=self::quchong($re);
        return $re;
    }

    /*
     * 获取擦肩次数
     * */
       static function CountPass($uid,$hid){
           $m=D('pass_relation');
           $w['uid']=$uid;
           $w['hid']=$hid;
          $r= $m->where($w)->count();
           return $r;
       }
    /*
     * 获取用户和当前用户的擦肩次数
     * */
        static  public  function GtePnum(){

        }
    /*
     * 二维数字排重
     * */
    function  quchong($data){
        foreach($data as $k=>$v){
            $d[$k]=$v['id'];
        }

        $d=array_unique($d);
        $re=array();
        foreach($d as $k=>$v){
          $re[]=$data[$k];
        }
        return $re;
    }

    /*
     * 检测是否好友关系
     * uid  主用户id
     * pid  检测的用户id
     * */
    static public function CheckFriend($uid,$pid){
    $m=D('friend');
        $where['uid']=$uid;
        $where['fuid']=$pid;
        $i=$m->where($where)->find();
        if($i){
            return 1;
        }else{
            return 0;
        }
    }
    /*
     * 添加硬件关联
     * uid  用户id
     * hid设备id
     * sta 状态
     * */
    static  public  function AddHeard($uid,$hid,$sta=1){
        $m=D('hard_relation');
        $data['hid']=$hid;
        $data['uid']=$uid;
        $data['status']=$sta;
        $data['timeline']=time();
        $m->add($data);
    }

    /*
     * 获取一个随机的名字
     * */
    static  public  function Rname(){
        $m=D('auto_prename');
        $data=$m->order('rand()')->limit(1)->field('name')->find();
        $m2=D('auto_latename');
        $data2=$m2->order('rand()')->limit(1)->field('name')->find();
        return $data['name'].$data2['name'];
    }
    /*
     * 判断用户昵称是否重复
     * */
        static  public function CheackName($name){
            $m=D('user');

            $where['name']=$name;
            $r=$m->where($where)->select();
            return $r;
        }
    /*
     * 获取一个随机的头像
     * */
    static  public function Rimg(){
        $m=D('auto_head');
        $img=$m->order('rand()')->limit(1)->field('img')->find();
        return $img['img'];
    }

    /*
     * 发送好友请求
     * */
    static  public function SendFriend($data){
        $data['status']=0;
        $data['timeline']=time();
        $m=D('sendfriend');
        $r=$m->add($data);
        return $r;
    }
    /*
     * 添加擦肩
     * */
    static public  function AddPass($uid,$pid){
        $m=D("pass_relation");
//        $where['uid']=$uid;
//        $where['hid']=$pid;
//        $r=$m->where($where)->find();


            $a['uid']=$uid;
            $a['hid']=$pid;
            $a['timeline']=time();
            $a['uptime']=time();
            $a['num']=1;
          $re=  $m->add($a);

        return $re;
    }
    /*
     * 获取用户的好友请求消息
     * */
    static  function GetSf($uid){
        $m=D('sendfriend');
        $where['touid']=$uid;
         $where['sendfriend.status']='0';
       $date= $m->where($where)->join(' userinfo on sendfriend.fromuid=userinfo.uid ','left')->join(' user on sendfriend.fromuid=user.id','left')->field('sendfriend.*,userinfo.headimg,user.name')->select();
        return $date;
    }
    /*
     * 同意用户的好友请求
     * sid  同意的id
     * */
    static function AgreeFriend($aid,$uid){
        $m=D("sendfriend");
        $where['id']=$aid;
        $data=$m->where($where)->field('fromuid')->find();

        $da['status']=1;
        $r=$m->where($where)->save($da);
        if($r){
        	$m2=D('friend');
            $dad=array();
            $w['uid']=$uid;
            $w['fuid']=$data['fromuid'];
            $rr=$m2->where($w)->select();
            if(!$rr){
        	$dad1['uid']=$uid;
            $dad1['fuid']=$data['fromuid'];
            $dad1['timeline']=time();
            $dad[]=$dad1;
            }
            $w['uid']=$data['fromuid'];
            $w['fuid']=$uid;

            $rr=$m2->where($w)->select();
            if(!$rr){
            $dad2['uid']=$data['fromuid'];
            $dad2['fuid']=$uid;
            $dad2['timeline']=time();
            $dad[]=$dad2;
            }
            if($dad){
        	$r2=$m2->addAll($dad);
            }else{
                return 2;
            }

        	if($r2){
        		return 1;
        	}else{
        		return 0;
        	}
        }else{
        	return 0;
        }
    }
    /*
     * 头像上传累
     * */
    function UpImg($uid){
        $set=array(
            'mimes'         =>  array(), //允许上传的文件MiMe类型
            'maxSize'       =>  0, //上传的文件大小限制 (0-不做限制)
            'exts'          =>  array('jpg','png','jpeg'), //允许上传的文件后缀
            'autoSub'       =>  true, //自动子目录保存文件
            'subName'       =>  array('date', 'Y-m-d'), //子目录创建方式，[0]-函数名，[1]-参数，多个参数使用数组
            'rootPath'      =>  './Public/headimg/', //保存根路径
            'savePath'      =>  '', //保存路径
            'saveName'      => time().'_'.$uid, //上传文件命名规则，[0]-函数名，[1]-参数，多个参数使用数组
            'saveExt'       =>  '', //文件保存后缀，空则使用原后缀
            'replace'       =>  false, //存在同名是否覆盖
            'hash'          =>  true, //是否生成hash编码
            'callback'      =>  false, //检测文件是否存在回调，如果存在返回文件信息数组
            'driver'        =>  '', // 文件上传驱动
            'driverConfig'  =>  array(), // 上传驱动配置

        );
        $up=new Upload($set,'LOCAL');
        $info = $up->upload($_FILES);
        if($info){
            return $info;
        }else{
            return 0;
        }
    }
    /*
     * 头像上传2 basde64  解密
     * */
    function  UpImg1($uid,$img){
        if(strstr($img,'data:image/jpeg;base64,')){
        $img = str_replace('data:image/jpeg;base64,', '', $img);
        }else{
            $img = str_replace('data:image/png;base64,', '', $img);
        }
        $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);
         $name=time().'_'.$uid.'.jpg';
        $file= './Public/headimg/'.$name;
        $success = file_put_contents($file, $data);
           return $name;
    }
    /*
     * 随机获取一条公用的真心话
     * */
    function GetQuery(){
        $m=D('query');
        $data=$m->where('uid=0')->order("rand()")->field('query,id')->find();
        if($data){
        $m2=D('answer');
        $data['answer']=$m2->where('qid='.$data['id'])->field('id,answer')->select();
        }
      return $data;
    }
    /*
     * 获取一个自己的真心话
     * */
    function GetQueryByuid($uid){
        $m=D('query');
        $data=$m->where('uid='.$uid)->field('query,id')->select();
        $datas=array();
        if($data){
            foreach($data as $v){
            $m2=D('answer');
            $v['answer']=$m2->where('qid='.$v['id'])->field('id,answer')->select();
             $datas[]=$v;
            }
        }
        return $datas;
    }
    /*
     * 添加一条自己的真心话
     * */
    function InsQuery($data,$uid){
        $m=D('query');
        $d['query']=$data['query'];
        $d['uid']=$uid;
        $d['timeline']=time();
        $r=$m->add($d);
        if($r){
            $dat=array();
            // $da['qid']= $r;
            foreach($data['answer'] as $v){
                $dat1['answer']=$v;
                $dat1['qid']=$r;
                $dat[]=$dat1;
            }

            $m2=D('answer');
           if( $m2->addAll($dat)){
               return $r;
           }else{
               return 0;
           }

        }else{
            return 0;
        }
    }

    /*
     * 获取用户为读的好友信息
     * */
    function GetMessageByUid($uid){
        $m=D('message');
        $w['toID']=$uid;
        $w['status']=0;
        $r=$m->where($w)->count();
        $m2=D('sendfriend');
        $wh['touid']=$uid;
        $wh['status']=0;
        $r1=$m->where($wh)->count();
        return $r+$r1;
    }
    /*
     * 获取某个好友的所有未读的消息
     * */
      function Getmessagefuid($uid,$fuid){
          $m=D('message');
          $w['toID']=$uid;
          $w['fromID']=$fuid;
          $w['status']=0;
          $m2=D('user');
          $wh['user.id']=$fuid;
          $data=$m2->join('userinfo on user.id=userinfo.uid','left')->where($wh)->field('user.name,userinfo.*')->find();
//          var_dump($data);die;
          $r=$m->where($w)->count();
          $re=$m->where($w)->order('timeline desc')->limit(1)->find();
          $data['endmessage']=$re;
          $data['endtime']=$re['timeline'];
          $data['num']=$r;
          return $data;
      }
    /*
     * 删除好友
     * */
    static function DelFriend($uid,$fuid){
        $m=D('friend');
//        $w['uid']=$uid;
//        $w['fuid']=$fuid;
        $w="(uid=".$uid.'&& fuid='.$fuid.") or (uid=".$fuid."&& fuid=".$uid.")";
     //   echo $w;die;
        $r=$m->where($w)->delete();
        if($r){
            $m2=D('friend_log');
            $d['uid']=$uid;
            $d['fuid']=$fuid;
            $d['timeline']=time();
            $m2->add($d);
            return $r;
        }else{
            return 0;
        }
    }
    /*
     * 获取某用户的信息
     * */
    static function Getnhbyuid($uid){
    $m=D('user');
        $w['user.id']=$uid;
       $data= $m->join('userinfo on userinfo.uid=user.id','left')->where($w)->field('user.name,userinfo.*')->find();
        return $data;
    }
    /*
     * 获取用的聊天记录
     * */
    static function GetMessage($uid,$day){
        $m=D('message');
        $t=$day*10;
        $num=10;
        $data=$m->where('(`fromID`=%d or `toID`=%d)',array($uid,$uid))->limit($t,$num)->select();
        return $data;
    }
}
?>