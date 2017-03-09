<?php
namespace Home\Model;
use Think\Model;
use Think\Model\RelationModel;
class UserModel extends RelationModel{
    protected  $tableName="";
    protected $_link=array(
        'userinfo'=>self::HAS_ONE,
        'friend'=>self::HAS_MANY,
    );

}

?>