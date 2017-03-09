<?php
return array(
	//'配置项'=>'配置值'
    'APP_DEBUG'    => false, // 是否开启调试模式
    'session_auto_start' => true,
    //数据库配置信息
    'DB_TYPE'   => 'mysql', // 数据库类型
    'DB_HOST'   => '561c72011070c.sh.cdb.myqcloud.com', // 服务器地址
    'DB_NAME'   => 'cajian_db', // 数据库名
    'DB_USER'   => 'cdb_outerroot', // 用户名
    'DB_PWD'    => 'melon@mysql#', // 密码
    'DB_PORT'   => 5023, // 端口
    'DB_PREFIX' => '', // 数据库表前缀
    'DB_CHARSET'=> 'utf8', // 字符集
    'DB_DEBUG'  =>  TRUE, // 数据库调试模式 开启后可以记录SQL日志
    'URL_CASE_INSENSITIVE'  =>  true,
     'URL_MODEL'=>1,
    'SESSION_AUTO_START'    => true,
    'DEFAULT_CHARSET'       => 'utf-8', // 默认输出编码
    'DEFAULT_JSONP_HANDLER' =>  'JsonpReturn', // 默认JSONP格式返回的处理方法
);