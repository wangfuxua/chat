<?php
namespace Home\Controller;
use Home\Model\UserModel;
use Think\Controller;
use Think\Model;
use  Home\models;
class ArticleController extends Controller{

    protected $model;
    protected  $uid;
    public function __construct() {
        parent::__construct();
        header("Access-Control-Allow-Origin:*");
        header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');
        $this->uid=session('uid');
        $uid=session('uid');
        $uid2= I("uid",'0');

        if(!$uid){
            if($uid2){
                session("uid",$uid2);
            }else{
                $data1['code']="100404";
                $data1['data']='';
                $data1['message']="您还没有登陆";
                //  echo 'jsoncallback'.json_encode($data1);
                $this->ajaxReturn($data1);die;
                die;}
        }
    }


function SendArt(){

    $uid=I("uid",'0');//登陆用户id
    $data1['code']="100404";
    $data1['data']='';
    if(!$uid){
        $uid=session('uid');
    }
    $title= I("title",'0');
    if($title){
        $data['title']=$title;
    }else{
        $data1['message']="标题不能为空";
        //  echo 'jsoncallback'.json_encode($data1);
        $this->ajaxReturn($data1);die;
    }
    $desc= $data['desc']=I("desc",'0');
   $r=models\Marticle::SendArt($uid,$data);
    if($r){
        $data1['code']="100200";
        $data1['message']="添加成功";
        $data1['data']=$r;
        $this->ajaxReturn($data1);die;
    }else{
        $data1['message']="添加失败";
        //  echo 'jsoncallback'.json_encode($data1);
        $this->ajaxReturn($data1);die;
    }
}
    function getAllart(){
        $uid=I("uid",'0');//登陆用户id
        $p=I("p",'0');//获取第几页的数据
        $data1['code']="100404";
        $data1['data']='';
        if(!$uid){
            $uid=session('uid');
        }
        $r=models\Marticle::getAllartBYuid($uid,$p);

        if($r){
            $data1['code']="100200";
            $data1['message']="获取成功";
//            $re=array();
//            foreach($r as $v){
//                if($v['desc']){
//                    $v['title']="<a href='".$v['desc']."'>".$v['title']."</a>";
//                }
//                $re[]=$v;
//            }
            $data1['data']=$r;
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']="获取失败";
            //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
        }
    }
    function AddGood(){
        $id=I("id",'0');//登陆用户id
        $data1['code']="100404";
        $data1['data']='';
        $r=models\Marticle::AddGood($id);
        if($r){
            $data1['code']="100200";
            $data1['message']="点赞成功";
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']="点赞失败";
            //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
        }
    }
   function DncGood(){
       $id=I("id",'0');//登陆用户id
       $data1['code']="100404";
       $data1['data']='';
       $r=models\Marticle::DncGood($id);
       if($r){
           $data1['code']="100200";
           $data1['message']="取消点赞成功";
           $this->ajaxReturn($data1);die;
       }else{
           $data1['message']="取消点赞失败";
           //  echo 'jsoncallback'.json_encode($data1);
           $this->ajaxReturn($data1);die;
       }
   }
   function IncHit(){
       $id=I("id",'0');//登陆用户id
       $data1['code']="100404";
       $data1['data']='';
       $r=models\Marticle::IncHit($id);
       if($r){
           $data1['code']="100200";
           $data1['message']="点击成功";
           $this->ajaxReturn($data1);die;
       }else{
           $data1['message']="点击失败";
           //  echo 'jsoncallback'.json_encode($data1);
           $this->ajaxReturn($data1);die;
       }
   }

    function DecHit(){
        $id=I("id",'0');//登陆用户id
        $data1['code']="100404";
        $data1['data']='';
        $r=models\Marticle::DecHit($id);
        if($r){
            $data1['code']="100200";
            $data1['message']="取消点击成功";
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']="取消点击失败";
            //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
        }
    }

    function IncTrans(){
        $id=I("id",'0');//登陆用户id
        $data1['code']="100404";
        $data1['data']='';
        $r=models\Marticle::IncTrans($id);
        if($r){
            $data1['code']="100200";
            $data1['message']="转发成功";
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']="转发失败";
            //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
        }
    }
   /*
    * 获取擦肩用户的当天文章信息
    * */
	function DayPassArt(){
		$uid=session('uid');
		$data1['code']="100404";
		$data1['data']='';
        $mac=I("mac",'0');//登陆用户id
		$m=D('pass_relation');

		//$data=$m->where('uid='.$uid)->select();
        $data=json_decode($mac,true);
		$m2=D('hard_relation');
        //var_dump($data);die;
		if($data){
			$cuser=array();
			foreach ($data as $v){

                if($v){

				$da=$m2->where('hid='.$v)->field('uid')->find();
                if(isset($da['uid'])){
				$cuser[]=$da['uid'];
                }
                }
			}
			$cusers=array_unique($cuser);
            $datar='';
        if($cusers){
		$m3=D('user');
		$where['id']=array(array('in',$cusers));	
		$datar=$m3->where($where)->
		join('userinfo on user.id=userinfo.uid','left')->
		join('send_article on user.id=send_article.uid','left')->
		field('user.name,userinfo.headimg,send_article.*')->
		select();
        }
		if($datar){
			$data1['code']='100200';
			$data1['data']=$datar;
			$data1['message']="擦肩的文章";
			//  echo 'jsoncallback'.json_encode($data1);
			$this->ajaxReturn($data1);die;
		}else{
			$data1['message']="无擦肩的设备";
			//  echo 'jsoncallback'.json_encode($data1);
			$this->ajaxReturn($data1);die;
		}
		}else{
			$data1['message']="无擦肩的设备";
			//  echo 'jsoncallback'.json_encode($data1);
			$this->ajaxReturn($data1);die;
		}
	}

    /*
     *捡到的文章
     * */
    function PickArt(){
        $uid=I("uid",'0');//登陆用户id
        if(!$uid){
            $uid=session('uid');
        }
//        $dd=models\Muser::Getnhbyuid($uid);
//        var_dump($dd);die;
         $art=I('art',0);
        if($art){
         $artids=json_decode($art,true);
        }
        $artid=implode(',',$artids);
        $m=D('send_article');
        $w['id']=array('in',$artid);
        $r=$m->where($w)->select();
        $data1['code']="100404";
        $data1['data']='';
        if($r){
            $rs=array();
            foreach($r as $v){
                $dd=models\Muser::Getnhbyuid($v['uid']);
                $v['name']=$dd['name'];
                $v['headimg']=$dd['headimg'];
                $rs[]=$v;
            }
            $data1['code']="100200";
            $data1['data']=$rs;
            $data1['message']="获取成功";
            //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']="获取失败";
            //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
        }
    }

    /*
     * 转发文章
     * */
    function TransArt(){
        $data1['code']="100404";
        $data1['data']='';
        $aid=I("aid",'0');//文章id
        $title=I("title",'0');//文章id

        $uid=I("uid",'0');//登陆用户id
        if(!$uid){
            $uid=session('uid');
        }
       $m=D('send_article');
        $w['id']=$aid;
        $d=$m->where($w)->field('id,title,desc,hit,transmit,good,from')->find();
        if($d){
       // var_dump($d);die;
        $da['from']=$d['from'];
        if(!$d['from']){
            $da['from']=$d['id'];
        }
            if($title){
                $da['title']=$title;
            }else{
        $da['title']=$d['title'];
            }
        $da['desc']=$d['desc'];
        $da['hit']=$d['hit'];
        $da['uid']=$uid;
        $da['timeline']=time();;
        $da['transmit']=$d['transmit']+1;
        $da['good']=$d['good'];

        $r=$m->add($da);
        if($r){
            models\Marticle::IncTrans($da['from']);;
            $data1['code']="100200";
            $data1['data']=$r;
            $data1['message']="转发成功";
            //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
        }else{
            $data1['message']="转发失败";
            //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
        }
        }else{
            $data1['message']="没有该文章";
            //  echo 'jsoncallback'.json_encode($data1);
            $this->ajaxReturn($data1);die;
        }
    }



}
?>