<?php
namespace Home\Controller;
use Home\Model\UserModel;
use Think\Controller;
use Think\Model;
use  Home\models;
class UserController extends Controller {
    protected $model;
    public function __construct() {
        parent::__construct();
        header("Access-Control-Allow-Origin:*");
        header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');
    }
   public  function index(){
       $u= new models\Muser();
       echo $u->checkusername('111');

    }
    public function login(){
        $usernme=I("username",'0');
        $password=I("password",'0');
        $data['code']="100404";
        $data['data']='';
       if(!$usernme){
           $data['message']='用户名不能为空';
           $this->ajaxReturn($data);die;
       }
    if(!$password){
        $data['message']='密码不能为空';
        $this->ajaxReturn($data);die;
    }
         $re=models\Muser::checkusername($usernme);
           if(!$re){
               $data['message']='账号不存在';
               $this->ajaxReturn($data);die;
               die;
           }
      $ps=md5(md5($password).'run');

        $r=models\Muser::Login($usernme,$ps);
        if(!$r){

            $data['message']='账号或密码错误';
            $this->ajaxReturn($data);die;
            die;
        }
        $data['code']='100200';
        $data['message']='登陆成功';
        $data['data']=$r;
        $this->ajaxReturn($data);die;
        die;
    }
    /*
     * 用户注册
     * */
    public  function region(){

       $data['username']=I("username",'0');
        $data['name']=I("name",'');
        if(!$data['name']){
            $data['name']=models\Muser::Rname();

//            $f=models\Muser::CheackName($data['name']);
//            while($f){
//                $data['name']=models\Muser::Rname();
//                $f=models\Muser::CheackName($data['name']);
//            }
        }
    //    var_dump($data);die;
        $data['password']=I("password",'0');
        $data['sex']=I("sex",'0');
        $data['appleMac']=I("appleMac",'0');
        $hid=I("hid",'0');
        $data['headimg']=I("headimg",'0');
        if(!$data['headimg']){
            $data['headimg']=models\Muser::Rimg();
        }
        $data['tag']=I("tag",'0');
        $data1['code']="100404";
        $data1['data']='';
        if(!$data['username']){
            $data1['message']='用户名不符合';
            $this->ajaxReturn($data1);die;
        }
        if(!$data['password']){
            $data1['message']='密码不符合';
            $this->ajaxReturn($data1);die;
        }
        if(models\Muser::checkusername($data['username'])){
            $data1['message']='用户名已经注册';
            $this->ajaxReturn($data1);die;
        }
        $data['password']=md5(md5($data['password']).'run');
       $re=models\Muser::Region($data);

      if($re){
          if($hid){
          models\Muser::AddHeard($re,$hid,1);
          }
          $data1['code']="100200";
          $data1['message']='注册成功';
          $this->ajaxReturn($data1);die;
          die;
      }else{
          $data1['message']='注册失败,请重新注册';
          $this->ajaxReturn($data1);die;
          die;
      }
    }




}