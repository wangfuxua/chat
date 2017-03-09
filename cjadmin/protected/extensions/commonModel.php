<?php

class commonModel extends CFormModel {
	public $db = '';
	public $tool = null;


	public function getUserPhone() {
		$uid = Yii::app()->user->id;
		if (!$uid)
			return 0;
		$row = $this->getUserLogin($uid);
		if (!$row)
			return 0;
		return $row['phone'];
	}


	public function getUserLogin($uid) {
		$uid = !!$uid ? $uid : Yii::app()->user->id;
		if (!$uid)
			return 0;
		$sql = "SELECT * FROM `user_login` WHERE `uid`='{$uid}'";
		$command = Yii::app()->db->createCommand($sql);
		$row = $command->queryRow();
		return $row;
	}

	public function getUserInfo() {
		$uid = Yii::app()->user->id;
		if (!$uid)
			return 0;
		$sql = "SELECT * FROM `user_info` WHERE `uid`='{$uid}'";
		$command = Yii::app()->db->createCommand($sql);
		$row = $command->queryRow();
		return $row;
	}

	public function getUser() {
		$uid = Yii::app()->user->id;
		if (!$uid)
			return 0;
		$sql = "SELECT * FROM `user` WHERE `uid`='{$uid}'";
		$command = Yii::app()->db->createCommand($sql);
		$row = $command->queryRow();
		return $row;
	}

	public function getUserAll($uid='') {
		$uid = !!$uid ? $uid : Yii::app()->user->id;
		if (!$uid)
			return 0;
		$sql = "SELECT b.*, c.*, a.* FROM `user_login` a 
				LEFT JOIN `user` b ON a.`uid`=b.`uid` 
				LEFT JOIN `user_info` c ON a.`uid`=c.`uid` 
				WHERE a.`uid`='{$uid}'";
		$command = Yii::app()->db->createCommand($sql);
		$row = $command->queryRow();
		//  $row['org'] = unserialize($row['org']);
		$row['header'] = $this->getAvatarPath($uid, 'b');
		return $row;
	}
	
	/**
	 * 获取头像
	 * @param  string $uid  user id
	 * @param  string $size s/m/b
	 * @return string       头像路径
	 */
	public function getAvatarPath($uid, $size='') {
		if (!$uid)
			return '';
		$dir1 = substr($uid, 0, 3);
		$dir2 = substr($uid, 3, 2);
		$path = "attachment/header/{$dir1}/{$dir2}/{$uid}";
		
		if ("s" == $size) {
			$ret =  $path."_s.jpg";
			if (!$this->checkTarget(base_url($ret)))
				$ret = "images/header/header_s.gif";
		} else if ("m" == $size) {
			$ret =  $path."_m.jpg";
			if (!$this->checkTarget(base_url($ret)))
				$ret = "images/header/header_m.gif";
		} else if ("b" == $size) {
			$ret =  $path."_b.jpg";
			if (!$this->checkTarget(base_url($ret)))
				$ret = "images/header/header_b.gif";
		} else {
			$ret['header_s'] = $path."_s.jpg";
			$ret['header_m'] = $path."_m.jpg";
			$ret['header_b'] = $path."_b.jpg";
			if (!$this->checkTarget(base_url($ret['header_b']))) {
				$ret['header_s'] = "images/header/header_s.gif";
				$ret['header_m'] = "images/header/header_m.gif";
				$ret['header_b'] = "images/header/header_b.gif";
			}
		}
		return $ret;
	}

	/**
	 * 检测目标链接
	 * @param  [str] $url [目标链接]
	 * @return [bool]      [返回值]
	 */
	private function checkTarget($url) {
		$flag = false;
		$header = @get_headers($url);
		if (strstr($header[0], '200')) {
			$flag = true;
		}
		return $flag;
	}
	
	/**
	 * 保存数据，如果不存在则插入，如果存在则修改
	 * @param string $table   表名
	 * @param string $columns 条件
	 * @param string $id      [description]
	 */
	public function setData($table='', $columns='', $id='') {
		if (!$table || !$columns)
			return false;
		// 如果没有传入id，则表示插入
		if (!$id) {
			return $this->addData($table, $columns);
		}
		// 默认id字段名
		$field = 'id';
		if (is_array($id)) {
			$field = array_keys($id);
			$field = $field[0];
			$id = $id[$field];
		}
		// 判断是否存在
		$sql = "SELECT COUNT(1) FROM `{$table}` WHERE `{$field}`='{$id}'";
		$command = Yii::app()->db->createCommand($sql);
		$c = $command->queryScalar();
		// 如果不存在则插入
		if (!$c) {
			$columns[$field] = $id;
			return $this->addData($table, $columns);
		}
		// 如果存在则修改
		$conditions = "{$field}=:id";
		$params = array(':id'=>$id);
		return $this->updateData($table, $columns, $conditions, $params);
	}

	/**
	 * 修改数据，用法语Yii的update相同
	 * @param  string $table      [description]
	 * @param  string $columns    [description]
	 * @param  string $conditions [description]
	 * @param  array  $params     [description]
	 * @return [type]             [description]
	 */
	public function updateData($table='', $columns='', $conditions='', $params=array()) {
		if (!$table || !$columns || !$conditions || !$params)
			return false;
		$command = Yii::app()->db->createCommand();
		return $command->update($table, $columns, $conditions, $params);
	}

	/*
	 * 添加数据
	 */
	public function addData($table, $columns) {
		if (!$table || !$columns)
			return false;
		$command = Yii::app()->db->createCommand();
		return $command->insert($table, $columns);
	}
}
