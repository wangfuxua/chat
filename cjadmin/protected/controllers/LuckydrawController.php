<?php

class LuckydrawController extends CommonController {

    //public $layout='main_admin';
    private $uid;
    public $model = '';
    public $sf = null;
    public $xml = null;

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
        $data['errormsg']=Yii::app()->request->getParam('error');
        $this->render('addimg',$data);
    }
    /*
     * 扫描头像
     * */
    function actionScanHead(){
        echo "<div>开始扫描</div>";

        $f="./data/head/";
            if(!is_dir("./data/head")){
                echo "<div>文件夹不存在</div>";die;
            }
        $data=scandir($f);

        $sql="select * from `auto_head`";
        $dataimg=Yii::app()->db->createCommand($sql)->queryAll();
        $n=0;
        foreach($data as $v){
            if($v!='.' && $v!='..'){
                foreach($dataimg as $val){
                      if($val['img']!="Public/headimg/".$v){
                           if( rename($f.$v,"./../Public/headimg/".$v)){
                               $img="Public/headimg/".$v;
                               $t=time();
                              $sql="insert into `auto_head` (`img`,timeline) values ('{$img}',{$t})";
                               if(Yii::app()->db->createCommand($sql)->execute())
                               $n++;
                           }
                    }
                }
            }
        }
        echo "<div>新增了".$n."条数据</div>";die;
    }

    /*
     * 昵称扫描 brfore
     * */
    function actionScanNick(){
       echo "<div>开始扫描</div>";
          $f="./data/nick/nick.txt";
          $ft= fopen($f,'r');
        $n=0;
        $sql="select name from `auto_prename`";
        $dat=Yii::app()->db->createCommand($sql)->queryAll();

        while(!feof($ft)){
            $line=fgets($ft);
            $line=ltrim($line);
            $line=iconv('GB2312', 'UTF-8', $line);
            $sql="select id from `auto_prename` where name='{$line}'";
           if(!Yii::app()->db->createCommand($sql)->queryRow() && $line){
               $t=time();
                   //echo $line;die;
                $sql="insert into `auto_prename` (`name`,timeline) values ('{$line}',{$t})";
                if(Yii::app()->db->createCommand($sql)->execute()){
                    $n++;
                }
           }



        }
        echo "<div>新增了".$n."条数据</div>";die;
    }

    /*
     *
     * 昵称扫描end
     * */

                                                
}
