<?php

/*
 *
 *数据库类
 */
class Db{
    function __construct($host = '10.66.138.64:3306', $username = 'root', $password = 'melon@mysql#', $thisatabase = 'cajian_db', $charset = 'utf8')
    {

        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->database = $thisatabase;
        $this->charset = $charset;
        // 连接数据库
        $this->db = mysql_connect ( $this->host, $this->username, $this->password ) or die ( "lianjiecuowu.");
       mysql_select_db ('cajian_db', $this->db ) or die ( "wufadakai" .mysql_error() );
        // 数据库编码方式
        mysql_query ( 'SET NAMES ' . $this->charset, $this->db );
    }
    function __destruct()
{
    if($this->db)
        mysql_close($this->db);
}

    /*获取数据库一条数据
     * */
    function getOne($table,$where){
        $sql="select *  from `{$table}` where '{$where}'";
        $data= mysql_query($sql,$this->db);
        return mysql_fetch_array($data);


    }
    /*
     * 获取数据库一个二维数据
     * */
    function  getAll($table,$where=''){
        $sql="select *  from `{$table}` where '{$where}'";
        $data= mysql_query($sql,$this->db);
        while( $re=mysql_fetch_array($data)){
            $resule[]=$re;
        }
        return $resule;
        mysql_close($this->db);
    }

    /*
    *执行sql 获取全部信息
    */
    function getAllBySql($sql) {
        $data= mysql_query($sql,$this->db);
        $resule=array();
        while( $re=mysql_fetch_array($data)){
            $resule[]=$re;
        }


        return $resule?$resule:'';

    }
    /*
     * 执行一条sql  语句
     * */
    function w_query($sql){
        if($sql=='')
            return false;
        if(mysql_query($sql,$this->db)){
            return true;
        }else{
            return false;
        }
    }


}




?>