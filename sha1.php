<?php
header("Access-Control-Allow-Origin:*");
header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');
$str='cajiang';
$key='90097';
$sign=isset($_REQUEST['sign'])?$_REQUEST['sign']:0;
if(!$sign){
    $data['code']='100404';
    $data['message']='验证失败';
    $data['data']='';
    echo json_encode($data);die;
}
                if (function_exists('hash_hmac'))
                {
                    $signature = hash_hmac("sha1", $str, $key);
                }
                else
                {
                    $signature = custom_hmac("sha1", $str, $key);

                }
if($signature!=$sign){
    $data['code']='100404';
    $data['message']='验证失败';
    $data['data']='';
    echo json_encode($data);die;
}
function custom_hmac($algo, $data, $key, $raw_output = false)
{
    $algo = strtolower($algo);
    $pack = 'H'.strlen($algo('test'));
    $size = 64;
    $opad = str_repeat(chr(0x5C), $size);
    $ipad = str_repeat(chr(0x36), $size);

    if (strlen($key) > $size) {
        $key = str_pad(pack($pack, $algo($key)), $size, chr(0x00));
    } else {
        $key = str_pad($key, $size, chr(0x00));
    }

    for ($i = 0; $i < strlen($key) - 1; $i++) {
        $opad[$i] = $opad[$i] ^ $key[$i];
        $ipad[$i] = $ipad[$i] ^ $key[$i];
    }

    $output = $algo($opad.pack($pack, $algo($ipad.$data)));

    return ($raw_output) ? pack($pack, $output) : $output;
}

?>