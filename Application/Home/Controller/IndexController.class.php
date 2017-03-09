<?php
namespace Home\Controller;
use Think\Controller;
use Workerman\Worker;
class IndexController extends Controller {
    public function index(){

      $this->show('<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;font-size:24px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px } a,a:hover,{color:blue;}</style><div style="padding: 24px 48px;"> <h1>:)</h1><p>欢迎使用 <b>ThinkPHP</b>！</p><br/>版本 V{$Think.version}</div><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_55e75dfae343f5a1"></thinkad><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>','utf-8');
     die;

        $User=  D('user');
        $data['name']=11111;
        $User->add($data);
        echo $User->name;
    }
        function  workman(){
//            set_time_limit(0);
            require_once APP_PATH.'home/lib/workerman/Autoloader.php';
// 创建一个Worker监听2346端口，使用websocket协议通讯
            $ws_worker = new Worker("websocket://0.0.0.0:2346");

// 启动4个进程对外提供服务
            $ws_worker->count = 4;

// 当收到客户端发来的数据后返回hello $data给客户端
            $ws_worker->onMessage = function($connection, $data)
            {
                // 向客户端发送hello $data
                $connection->send('hello ' . $data);
            };

// 运行worker
            Worker::runAll();
        }
    function ws(){

        set_time_limit(0);
        $address='0.0.0.0';
        $port="2346";
        if( ($sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)) ===false){
            echo "创建一个套接字 失败" . "\n";
        }
        if(socket_listen($sock) === false){
            echo "监听端口 失败" . socket_strerror($sock) . "\n";
        }
        do {

            //似乎是接收客户端传来的消息

            if(($msgsock=socket_accept($sock,5))===false){

                echo "socket_accepty() failed :reason:".socket_strerror(socket_last_error($sock)) . "\n";

                break;

            }

            //echo "读取客户端传来的消息"."\n";

            $buf = socket_read($msgsock, 8192);

            $talkback = "1111111";

            if(false=== socket_write($msgsock, $talkback)){

                echo "socket_write() failed reason:" . socket_strerror(socket_last_error($sock)) ."\n";

            }else{

                echo "return info msg ku hu duan success"."\n";

            }

            socket_close($msgsock);

        }while (true);
        socket_close($sock);
    }
}