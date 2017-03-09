<?php

class ChannelModel extends commonModel{
    public function init() {
        parent::init();
        Yii::import('application.library.toolkit');
        $this->tool = new toolkit();
    }


    /*
     * 获取用户的的账号信息
     * */
    function  GetUser(){
        $uid= Yii::app()->session['uid'];
        $sql="select * from `admin_user` where id=:uid";
        $data=Yii::app()->db->createCommand($sql)->bindParam(':uid',$uid)->queryRow();
        return $data;
    }

    /*
     * 更新用户密码
     * */
     function UpPwd($pwd){
         $uid= Yii::app()->session['uid'];
         $sql="update `admin_user` set `password`='{$pwd}' where `id`=:uid";
         $data=Yii::app()->db->createCommand($sql)->bindParam(':uid',$uid)->execute();
         return $data;
     }

    /*
     * 获取用户列表
     * */
    function StoreList(){
        $uid= Yii::app()->session['uid'];
        $criteria = new CDbCriteria;
        $sql="select count(1) from `user` as a left join `userinfo` as b on a.id=b.uid ";
        $num= (int) Yii::app()->db->createCommand($sql)->bindParam(':uid',$uid)->queryScalar();
        $page=new CPagination($num);
        $page->pageSize=10;//每页数量
        $page->applyLimit($criteria);
        $sql="select a.name,a.username,b.* from `user` as a left join `userinfo` as b on a.id=b.uid  order by `timeline` desc";
        $sql=$sql." limit :offset,:limit";
        $model=Yii::app()->db->createCommand($sql);
        $model->bindValue(':offset',$page->currentPage*$page->pageSize);
        $model->bindValue(':limit',$page->pageSize);
        $data=$model->queryAll();
        return array('data'=>$data,'page'=>$page);
    }


}
?>