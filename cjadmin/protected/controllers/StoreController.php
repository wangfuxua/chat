<?php
class StoreController extends CommonController{
    public $layout='main';
    public $loginflag = "__ss_admin_flag";
    public $model = '';
    protected $uid;
    public function init() {
        parent::init();
        $this->title = '';
        Yii::import('application.library.toolkit');
        $this->tool = new toolkit();
        $this->model = new ChannelModel();
        $this->uid= Yii::app()->session['uid'];

        if(!$this->uid){
            $this->redirect("/cjadmin/passport");
        }
    }
    function actionIndex(){
     $this->actionList();
    }
    /*
     * 店铺列表
     * */
    function actionList(){
        $data=$this->model->StoreList();

        $this->render("list",$data);
    }











}

?>