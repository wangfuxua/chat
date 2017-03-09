<?php
class ChannelController extends CommonController{
    public $layout='main';
    public $loginflag = "__ss_admin_flag";
    public $model = '';
    protected $uid;
    public function init() {
        parent::init();
        //$this->title = '买金网';
        Yii::import('application.library.toolkit');
        $this->tool = new toolkit();
        $this->model = new ChannelModel();
        $this->uid= Yii::app()->session['uid'];
//        echo $this->uid;die;
        if(!$this->uid){
            $this->redirect("/passport");
        }
    }
    function actionIndex(){
     $this->render("index");
    }
    function actionInfo(){
      $data=  $this->model->GetInfo();
//        var_dump($data);die;
        $this->render("info",array(
            'data'=>$data
        ));
    }
    /*
     * 安全中心
     * */
  function  actionSafe(){

      $data=  $this->model->GetUser();
      $data['errormsg']=Yii::app()->request->getParam('error');
      $this->render("safe",$data);
  }
  function  actionEpwd(){
      $pwd=Yii::app()->request->getParam('password1');
      $newpwd=Yii::app()->request->getParam('newpassword');
      $data=  $this->model->GetUser();
      include_once('./protected/library/class-phpass.php');
      // chcek password
      $wp_hasher = new PasswordHash(8, TRUE);
      $rs = $wp_hasher->CheckPassword($pwd, $data['password']);
      // var_dump($rs);exit;
      if (!$rs)
      {
          $this->redirect('/channel/safe/error/旧密码错误');die;
      }
      $new=$wp_hasher->HashPassword($newpwd);
     $r =$this->model->UpPwd($new);
      if($r){
          $this->redirect('/channel/safe/error/修改密码成功');die;
      }else{
          $this->redirect('/channel/safe/error/旧密码错误');die;
      }
  }
/*
 * 添加账号
 * */
   function  actionAdd(){
       $data['errormsg']=Yii::app()->request->getParam('error');
       $this->render('add',$data);
   }










}

?>