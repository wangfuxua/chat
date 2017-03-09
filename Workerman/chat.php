<?php
use Workerman\Worker;
require_once('Autoloader.php');
require_once('Db.php');
//error_reporting(0);
//给用户分配uid的链接
$global_uid=0;
$db=new Db();
function handler_connection($connection)
{

    global $http_worker, $global_uid;
    // 为这个链接分配一个uid
        $connection->uid=$global_uid;
}

function handle_message($connection,$data)
{
    $db=new Db();
    $datas=json_decode($data,true);
    if(isset($datas['uid'])&& $datas['uid']){
    $connection->uid=$datas['uid'];
    }
    if(isset($datas['status']) && $datas['status'] && isset($datas['mid'])){
            $mids=json_decode($datas['mid'],true);
        foreach($mids as $v){
       $sql="update `message` set `status`=1 where `id`={$v}";
//      $connection->send($sql);
       if($db->w_query($sql)){
//           $connection->send($datas['mid']);
       }
        }
    }
    global $http_worker;
    $i=1;
    if(isset($datas['message']) && $datas['message'] && isset($datas['tuid'])){
        $oo=1;
        $sql="insert into `message` (`from`,`to`,`message`,`timeline`) values ({$datas['fuid']},{$datas['tuid']},'{$datas['message']}',UNIX_TIMESTAMP(now()))";
        if(!$db->w_query($sql)){
                $oo=0;
        }
        $da=mysql_query("SELECT LAST_INSERT_ID() as mid");
        $da=mysql_fetch_assoc($da);
        $datas['mid']=$da['mid'];
        $s=json_encode($datas);
    foreach($http_worker->connections as $conn)
    {
        $sql="SELECT * from `message` where `to`='{$conn->uid}' and `status`<>1";
       $r= $db->getAllBySql($sql);
        if($r){
            $i=0;
            $s1=json_encode($r);
            $conn->send($s1);
        }elseif($conn->uid== $datas['fuid']){
            if($oo){
                   $conn->send(0);
            }else{
                $conn->send(-1);
            }
        }

    }
    }
    if($i){
    foreach($http_worker->connections as $conn)
    {
        $sql="SELECT * from `message` where `to`='{$conn->uid}' and `status`<>1";
        $r= $db->getAllBySql($sql);
        if($r){
            $s1=json_encode($r);
            $conn->send($s1);
        }
    }
    }
}



//$ws_worker = new Worker("websocket://0.0.0.0:8080");
//
//// 启动4个进程对外提供服务
//$ws_worker->count = 4;
//
//// 当收到客户端发来的数据后返回hello $data给客户端
//$ws_worker->onMessage = function($connection, $data)
//{
//    // 向客户端发送hello $data
//    $connection->send('hello ' . $data);
//};
//
//// 运行worker
//Worker::runAll();


//621226 020007 0266974
$http_worker=new Worker("websocket://0.0.0.0:8080");
$http_worker->count=1;
$http_worker->onConnect = 'handler_connection';
$http_worker->onMessage='handle_message';
Worker::runAll();
?>