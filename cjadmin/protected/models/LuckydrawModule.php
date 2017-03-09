<?php

class LuckydrawModule extends commonModel {
    /*
     * *
     */
    public $tool = null;
    private $uid;

    function init() {
        parent::init();
        Yii::import('application.library.toolkit');
        $this->tool = new toolkit();
        $this->uid= Yii::app()->session['uid'];
        if(!$this->uid){
            $this->redirect("/passport");
        }
    }
      /*添加头像页面
       * */
    function  actionAddimg(){
        $this->render('addimg');
    }


        
        
        
        
}
