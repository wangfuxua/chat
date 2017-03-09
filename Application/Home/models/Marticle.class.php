<?php
namespace Home\models;
use Home\Model\UserModel;
use Think\Controller;
use Think\Model;
use yii\base\Exception;

class Marticle extends Controller{
    protected $model;
    function __construct(){
        header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');
    //   $this->model=D("user");
    }
    /*
     * 添加文章
     * */
    static function SendArt($uid,$data){
    	$data['timeline']=time();
        $data['uid']=$uid;
    	$m=D('send_article');
    	if($m->add($data)){
    		return $m->getLastInsID();
    	}else{
    		return 0;
    	}
    }
    /*
     * 获取某个用户的所有文章
     * */
    static function getAllartBYuid($uid,$p=0){
    	$m=D('send_article');
    	$where['uid']=$uid;
        $limit=($p*10).',10';
    	$data=$m->where($where)->order('timeline desc')->limit($limit)->select();
        return $data;
    }
    
    /*
     * 点赞某个文章
     * id 文章id
     * */
    static function AddGood($id){
    	$m=D('send_article');
		$where['id']=$id;
    	if($m->where($where)->setInc('good')){
    		return  1;
    	}else{
    		return  0;
    	}
    }
    /*
     * 取消点赞某个文章
     * */
    static function DncGood($id){
    	$m=D('send_article');
    	$where['id']=$id;
    	if($m->where($where)->setDec('good')){
    		return  1;
    	}else{
    		return  0;
    	}
    }
    /*
     * 点击某个文章
     * */
    static function IncHit($id){
    	$m=D('send_article');
    	$where['id']=$id;
    	if($m->where($where)->setInc('hit')){
    		return  1;
    	}else{
    		return  0;
    	}
    	
    }
    /*u
     * 取消点击
     * */
    static  function DecHit($id){
    	$m=D('send_article');
    	$w['id']=$id;
    	if($m->where($w)->setDec('hit')){
    		return 1;
    	}else{
    		return 0;
    	}    	
    }
    /*
     * 增加转发次数
     * */
    static  function IncTrans($id){
    	$m=D('send_article');
    	$w['id']=$id;
    	if($m->where($w)->setInc('transmit'))
    	{
    		return 1;
    	}else{
    		return 0;
    	}   	
    }
    
    /*
     * 获取某用户最新的一条文章
     * */
     static  function GetNewByUid($uid){
        $m=D('send_article');
         $w['uid']=$uid;
         $data=$m->where($w)->order('timeline desc')->limit(1)->find();
         return $data;
     }
    /*
     *
     * */
}
?>