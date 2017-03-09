<?php

class UserModel extends commonModel{
    public function init() {
        parent::init();
        Yii::import('application.library.toolkit');
        $this->tool = new toolkit();
    }
    /**
     * 登录
     * @param  [type] $phone [description]
     * @param  [type] $pwd   [description]
     * @return [type]        [description]
     */
    public function doLogin($username, $pwd) {
        if (!$username || !$pwd)
            return -1;
        $sql = "SELECT `id`,`password` FROM `admin_user` WHERE `username`='{$username}'";
        $command = Yii::app()->db->createCommand($sql);
        $row = $command->queryRow();

        if (!$row)
            return -2;

        // password begin
        include_once('./protected/library/class-phpass.php');
        // chcek password
        $wp_hasher = new PasswordHash(8, TRUE);
        $rs = $wp_hasher->CheckPassword($pwd, $row['password']);
        // var_dump($rs);exit;
        if (!$rs)
            return 0;
        Yii::app()->session['uid']=$row['id'];

        Yii::app()->user->id = $row['id'];

        return 1;
    }




}
?>