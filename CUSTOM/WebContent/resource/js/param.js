var curWwwPath = window.document.location.href;
var pathName = window.document.location.pathname;
var pos = curWwwPath.indexOf(pathName);
//获取主机地址，如： http://localhost:8083
var localhostPaht = curWwwPath.substring(0, pos);
var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
var path = localhostPaht+projectName

function saveWangZ(){
	var appName = $("#appName").val();
	var on_off = $("#on_off").val();
	var baidu_on = $("#baidu_on").val();
	var token = $("#token").val();
	
	if("" == appName){
		alert("请输入网站名");
		return;
	}else{
		var url = path +"/admin/saveWangZ";
		$.ajax({
				  type: "POST",
				  url: url,
				  data: {"appName":appName,"on_off":on_off,"baidu_on":baidu_on,"token":token},
				  success: function(res){
 					 if(res.result==1){
 						alert("修改成功");
		   			}else{
		   				alert("修改失败");
		   			}
	   			},
				  dataType: "json",
				  error:function(){
					  alert("系统繁忙，请重试");
				  }
				});
	}
};

function savePeiLv(){
	var ssc_gufan = $("#ssc_gufan").val();
	var ssc_chuan = $("#ssc_chuan").val();
	var ssc_nian = $("#ssc_nian").val();
	var ssc_zheng = $("#ssc_zheng").val();
	var ssc_tong = $("#ssc_tong").val();
	
	if("" == ssc_gufan || "" == ssc_chuan || "" == ssc_nian || "" == ssc_zheng || "" == ssc_tong){
		alert("赔率不能为空");
		return;
	}else{
		var url = path +"/jingcai/savePeiLv";
		$.ajax({
				  type: "POST",
				  url: url,
				  data: {"2":ssc_gufan,"1":ssc_chuan,"0":ssc_nian,"3":ssc_zheng,"4":ssc_tong},
				  success: function(res){
 					 if(res.result==1){
 						alert("修改成功");
		   			}else{
		   				alert("修改失败");
		   			}
	   			},
				  dataType: "json",
				  error:function(){
					  alert("系统繁忙，请重试");
				  }
				});
	}
};

function saveDailiSet(){
	var charge_rule = $("#charge_rule").val();
	var fenhong_rule = $("#fenhong_rule").val();
	if("" == charge_rule){
		alert("请输入佣金比例");
		return;
	}if("" == fenhong_rule){
		alert("请输入分红比例");
		return;
	}
		var url = path +"/admin/saveDailiSet";
		$.ajax({
				  type: "POST",
				  url: url,
				  data: {"charge_rule":charge_rule,"fenhong_rule":fenhong_rule},
				  success: function(res){
 					 if(res.result==1){
 						alert("修改成功");
		   			}else{
		   				alert("修改失败");
		   			}
	   			},
				  dataType: "json",
				  error:function(){
					  alert("系统繁忙，请重试");
				  }
				});
	
};


function savejiben(){
	var welcome = $("#welcome").val();
	var onlineNum = $("#onlineNum").val();
	var robot = $("#robot").val();
	var robotInterval = $("#robotInterval").val();
	var is_say = $("#is_say").val();
	var is_repeat_voice = $("#is_repeat_voice").val();
	var is_del_order = $("#is_del_order").val();
	var is_cancel_order = $("#is_cancel_order").val();
	var ssc_stop_time = $("#ssc_stop_time").val();
	var ssc_limit_1 = $("#ssc_limit_1").val();
	debugger;
	if("" == ssc_stop_time){
		alert("封盘时间不能为空");
		return;
	}else{
		var url = path +"/admin/savejiben";
		$.ajax({
			  type: "POST",
			  url: url,
			  data: {"welcome":welcome,"onlineNum":onlineNum,"robot":robot,"robotInterval":robotInterval,"is_say":is_say,
				  "is_repeat_voice":is_repeat_voice,"is_del_order":is_del_order,"is_cancel_order":is_cancel_order,"ssc_stop_time":ssc_stop_time,
				  "ssc_limit_1":ssc_limit_1},
			  success: function(res){
				 if(res.result==1){
					alert("修改成功");
	   			}else{
	   				alert("修改失败");
	   			}
 			},
			  dataType: "json",
			  error:function(){
				  alert("系统繁忙，请重试");
			  }
			});
	}
};


function saveKill(){
	
	var kill = $("#kill").val();
	if("0" == kill){
		var url = path +"/admin/executeStopCQG";
		$.ajax({
			  type: "POST",
			  url: url,
			  data: {},
			  success: function(res){
				 if(res.result==1){
					alert("关闭成功");
	   			}else{
	   				alert("关闭失败");
	   			}
			},
			  dataType: "json",
			  error:function(){
				  alert("系统繁忙，请重试");
			  }
			});
	}else if("1" == kill){
		var url = path +"/admin/executeStartCQG";
		$.ajax({
			  type: "POST",
			  url: url,
			  data: {},
			  success: function(res){
				 if(res.result==1){
					alert("重启成功");
	   			}else{
	   				alert("重启失败");
	   			}
 			},
			  dataType: "json",
			  error:function(){
				  alert("系统繁忙，请重试");
			  }
			});
	}
};


//上传运行
function savekefu() {
    $("#sake").attr("disabled", true);
    var fileName = $('#file').val();
    if (fileName == null || fileName == undefined || fileName == '') {
        alert("文件不能为空");
        $("#sake").attr("disabled", false);
        return;
    }
 
 
    fileName2 = fileName.substring(fileName.length - 3, fileName.length);
    console.log(fileName)
/*    if (fileName2 != 'jpg' || fileName2 != 'png') {
    	alert("文件格式需要是jpg、png");
        $("#sake").attr("disabled", false);
        return;
    }*/
 
    var url = path +"/admin/savekefu";
    $.ajaxFileUpload({
        url: url,
        type:'post',
        secureuri:false,
        fileElementId:'file',//file标签的id
        dataType: 'JSON',//返回数据的类型
        data:{},//一同上传的数据
        success: function (data, status) {
        	if (status=="success") {
        		$("#kfPhoto").attr("src",res.resUrl);
                alert("文件成功处理完成!");
            } else {
                alert("文件成功处理出错！原因：" + data.ErrorMessage);
            }
        	$('#kefucode').val('');
            $("#sake").attr("disabled", false);
        },
        error: function (data) {
        	
        	$('#kefucode').val('');
       	 $("#sake").attr("disabled", false);
        }
	});
	
};


function saveweixin() {
    $("#sake").attr("disabled", true);
    var fileName = $('#file').val();
    if (fileName == null || fileName == undefined || fileName == '') {
        alert("文件不能为空");
        $("#sake").attr("disabled", false);
        return;
    }
 
 
    fileName2 = fileName.substring(fileName.length - 3, fileName.length);
    console.log(fileName)
/*    if (fileName2 != 'jpg' || fileName2 != 'png') {
    	alert("文件格式需要是jpg、png");
        $("#sake").attr("disabled", false);
        return;
    }*/
 
    var url = path +"/admin/saveweixin";
    $.ajaxFileUpload({
        url: url,
        type:'post',
        secureuri:false,
        fileElementId:'file',//file标签的id
        dataType: 'JSON',//返回数据的类型
        data:{},//一同上传的数据
        success: function (data, status) {
        	if (status=="success") {
                alert("文件成功处理完成!");
                $("#wxskPhoto").attr("src",res.resUrl);
            } else {
                alert("文件成功处理出错！原因：" + data.ErrorMessage);
            }
        	$('#kefucode').val('');
            $("#sake").attr("disabled", false);
        },
        error: function (data) {
        	
        	$('#kefucode').val('');
       	 $("#sake").attr("disabled", false);
        }
	});
	
};

function saveali() {
    $("#sake").attr("disabled", true);
    var fileName = $('#file').val();
    if (fileName == null || fileName == undefined || fileName == '') {
        alert("文件不能为空");
        $("#sake").attr("disabled", false);
        return;
    }
 
 
    fileName2 = fileName.substring(fileName.length - 3, fileName.length);
    console.log(fileName)
/*    if (fileName2 != 'jpg' || fileName2 != 'png') {
    	alert("文件格式需要是jpg、png");
        $("#sake").attr("disabled", false);
        return;
    }*/
 
    var url = path +"/admin/saveali";
    $.ajaxFileUpload({
        url: url,
        type:'post',
        secureuri:false,
        fileElementId:'file',//file标签的id
        dataType: 'JSON',//返回数据的类型
        data:{},//一同上传的数据
        success: function (data, status) {
        	if (status=="success") {
                alert("文件成功处理完成!");
                $("#zfbPhoto").attr("src",res.resUrl);
            } else {
                alert("文件成功处理出错！原因：" + data.ErrorMessage);
            }
        	$('#kefucode').val('');
            $("#sake").attr("disabled", false);
        },
        error: function (data) {
        	
        	$('#kefucode').val('');
       	 $("#sake").attr("disabled", false);
        }
	});
	
};

function getMyDate(str){  
    var oDate = new Date(str),  
    oYear = oDate.getFullYear(),  
    oMonth = oDate.getMonth()+1,  
    oDay = oDate.getDate(),  
    oHour = oDate.getHours(),  
    oMin = oDate.getMinutes(),  
    oSen = oDate.getSeconds(),  
    oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间  
    return oTime;  
}; 
//补0操作
function getzf(num){  
  if(parseInt(num) < 10){  
      num = '0'+num;  
  }  
  return num;  
}

function tohuiyuan(e) {
	var url = path+"/user/userInfo";
	var checkName = $("#getName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/huiyuan.html");
	var pn = e;
	$.ajax({
			  type: "POST",
			  url: url,
			  data: {"checkName":checkName,"pn":pn},
			  success: function(res){
				  console.log(res);
				  var list = res.result.pageInfo.list;
				 var a = list[0];
				  console.log(a);
				  var str = ""
				  for(var i=0;i<list.length;i++){
					    str += "<tr>";
					   str += "<td style='text-align: center;'>";
				    str += " ";
				 	str += "</td>";
					   str += "<td id='nickname"+ list[i].customer_id +"' style='text-align: center;'>";
					    str += list[i].nickname;
					 	str += "</td>";
					 	str += "<td style='text-align: center;'>";
					    str += list[i].username;
					 	str += "</td>";
					 	str += "<td style='text-align: center;'>";
					 	if(list[i].agency_id==null || list[i].agency_id==undefined){
					 		str += "";
					 	}else{
					 		str += list[i].agency_id;
					 	}
					 	str += "</td>";
					 	str += "<td style='text-align: center;'>";
					 	if(list[i].sex==1){
					 		str += "男";
					 	}else{
					 		str += "女";
					 	}
					    
					 	str += "</td>";
					 	str += "<td style='text-align: center;'>";
					 	if(list[i].remark==null || list[i].remark==undefined){
					 		str += "";
					 	}else{
					 		str += list[i].remark;
					 	}
					    
					 	str += "</td>";
					 	str += "<td style='text-align: center;'>";
					    str += getMyDate(list[i].create_time.time);
					 	str += "</td>";
					 	str += "<td style='text-align: center;'>";
					 	if(list[i].charges==null || list[i].charges==undefined){
					 		str += "";
					 	}else{
					 		str += list[i].charges;
					 	}
					 	str += "</td>";
					 	str += "<td id='charge"+ list[i].customer_id +"' style='text-align: center;'>";
					    str += list[i].integral;
					 	str += "</td>";
					 	str += "<td width='500'>";
					    str += "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal' data-whatever='"+ list[i].nickname +"' data-ty='"+ list[i].customer_id +"' }'>上分</button>";
					   	str += "<button type='button' class='btn btn-info' data-toggle='modal' data-target='#exampleModal2' data-whatever='"+ list[i].nickname +"' data-ty='"+ list[i].customer_id +"' }'>下分</button>";
					  	str += "<button type='button' class='btn btn-default' data-toggle='modal' data-target='#exampleModal3' data-whatever='"+ list[i].nickname +"' data-ty='"+ list[i].customer_id +"' data-username='"+ list[i].username +"' }'>编辑</button>";
					 	str += "<button type='button' class='btn btn-default' data-toggle='modal' data-target='#exampleModal5' data-whatever='"+ list[i].nickname +"' data-ty='"+ list[i].customer_id +"' data-username='"+ list[i].username +"' data-sjid='"+ list[i].agency_id +"' }'>修改上级</button>";
					 	if(list[i].agency_id==null || list[i].agency_id==undefined || list[i].agency_id=="" ){
					 		str += "<button type='button' class='btn btn-danger'>【无上线】</button>";
					 	}else{
					 		str += "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#exampleModal4' data-whatever='"+ list[i].nn +"' data-ty='"+ list[i].us +"' }'>查看上线</button>";
					 	}
					 	if(list[i].user_type == 1){
					 		str += "<button type='button' class='btn btn-primary' id='jia"+ list[i].customer_id +"' onclick=\"setjiaren('"+ list[i].customer_id +"')\">设为假人</button>";
					 		str += "<button type='button' class='btn btn-danger' id='cancle"+ list[i].customer_id +"'  onclick=\"cancledaili('"+ list[i].customer_id +"')\">取消代理</button>";
					 	}
					 	if(list[i].user_type == 0){
					 		str += "<button type='button' class='btn btn-primary' id='jia"+ list[i].customer_id +"' onclick=\"setjiaren('"+ list[i].customer_id +"')\">设为假人</button>";
					 		str += "<button type='button' class='btn btn-danger' id='setdai"+ list[i].customer_id +"'  onclick=\"setdaili('"+ list[i].customer_id +"')\">设为代理</button>";
					 	}
					 	if(list[i].enable == 0){
					 		str += "<button type='button'  class='btn btn-danger' id='enable"+ list[i].customer_id +"' onclick=\"setenable('"+ list[i].customer_id +"')\">禁用</button>";
					 	}
					 	if(list[i].enable == 1){
					 		str += "<button type='button' class='btn btn-danger' id='enable"+ list[i].customer_id +"' onclick=\"cancleenable('"+ list[i].customer_id +"')\">启用</button>";
					 	}
					 	
					 	//str += "<a  class='btn btn-warning'>删除</a>";
					 	str += "</td>";
						str += "</tr>";
				  }
				  $("#tbhuiyuan").html(str);
				  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
 				
				  var fenyestr = "<li style='display:inline;'><a onclick='tohuiyuan(1)'>首页</a></li>";
				 		if(res.result.pageInfo.hasPreviousPage){
				 			fenyestr += "<li style='display:inline;'><a onclick='tohuiyuan("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
				 		}	  
				 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
				 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
				 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
				 			}else{
				 				fenyestr += "<li style='display:inline;'><a onclick='tohuiyuan("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
				 				
				 			}
				 		}
						
				 		if(res.result.pageInfo.hasNextPage){
				 			fenyestr += "<li style='display:inline;'><a onclick='tohuiyuan("+(res.result.pageInfo.pageNum+1)+")' aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
				 		}
				 			fenyestr += "<li style='display:inline;'><a onclick='tohuiyuan("+res.result.pageInfo.pages+")'>末页</a></li>";
			  			$("#fenye").html(fenyestr);
			  
			  },
			  dataType: "json",
			  error:function(){
				  alert("系统繁忙，请重试");
			  }
			});
};

function setjiaren(e) {
	var els = "#jia"+e;
	var url = path+"/user/editUserType";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"customer_id":e,"usertype":"2"},
		  success: function(res){
			 if(res.result==1){
				 $(els).remove();
				 alert("修改成功");
   			}else{
   				alert("修改失败");
   			}
			},
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
};


function setenable(e) {
	var els = "#enable"+e;
	var url = path+"/user/editEnable";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"customer_id":e,"enable":"1"},
		  success: function(res){
			 if(res.result==1){
				 $(els).after("<button type='button' class='btn btn-danger' id='enable"+ e +"' onclick=\"cancleenable('"+ e +"')\">启用</button>");
				 $(els).remove();
				 alert("用户已启用");
   			}else{
   				alert("修改失败");
   			}
			},
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
};

function cancleenable(e) {
	var els = "#enable"+e;
	var url = path+"/user/editEnable";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"customer_id":e,"enable":"0"},
		  success: function(res){
			 if(res.result==1){
				 $(els).after("<button type='button' class='btn btn-danger' id='enable"+ e +"' onclick=\"setenable('"+ e +"')\">禁用</button>");
				 $(els).remove();
				 alert("用户已禁用");
   			}else{
   				alert("修改失败");
   			}
			},
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
};

function cancledaili(e) {
	var els = "#cancle"+e;
	var url = path+"/user/editUserType";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"customer_id":e,"usertype":"0"},
		  success: function(res){
			 if(res.result==1){
				 $(els).after("<button type='button' class='btn btn-danger' id='setdai"+ e +"'  onclick='setdaili("+ e +")'>设为代理</button>")
				 $(els).remove();
				 alert("修改成功");
   			}else{
   				alert("修改失败");
   			}
			},
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
};

function setdaili(e) {
	var els = "#setdai"+e;
	var url = path+"/user/editUserType";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"customer_id":e,"usertype":"1"},
		  success: function(res){
			 if(res.result==1){
				 $(els).after("<button type='button' class='btn btn-danger' id='cancle"+ e +"'  onclick='cancledaili("+ e +")'>取消代理</button>");
				 $(els).remove();
				 alert("修改成功");
   			}else{
   				$("#exampleModal3").hide();
   				$(".modal-backdrop").remove();
   				alert("修改失败");
   			}
			},
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
};


function editPSW() { 
	var url = path+"/user/editPSW";
	var psw = $("#pswed").val();
	var rppswed = $("#rppswed").val();
	var userId = $("#loginUserId").val();
	if(psw == ""){
		alert("密码不能为空");
		return;
	}
	if(psw != rppswed){
		alert("输入的密码不一致，请重新输入");
		return ;
	}else{
		$.ajax({
			  type: "POST",
			  url: url,
			  data: {"customer_id":userId,"psw":psw},
			  success: function(res){
				 if(res.result==1){
					 $("#exampleModalPSW").hide();
		   				$(".modal-backdrop").remove();
					 alert("修改成功");
	   			}else{
	   				$("#exampleModalPSW").hide();
	   				$(".modal-backdrop").remove();
	   				alert("修改失败");
	   			}
				},
			  dataType: "json",
			  error:function(){
				  alert("系统繁忙，请重试");
			  }
			});
	}
	
};



function jincaijilu(e) {
	
	var startTime = $("#starttime").val();
	var endTime = $("#endtime").val();
	var findName = $("#findName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/jingcaijilu.html");
	var pn = e;
	var url = path+"/jingcai/toJingCaiJiLu";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"findName":findName,"pn":pn,"startTime":startTime,"endTime":endTime},
		  success: function(res){
			  console.log(res);
			  var list = res.result.pageInfo.list;
			 var a = list[0];
			  console.log(a);
			  var str = ""
			  debugger;
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				   str += "<td style='text-align: center;'>";
			    str += "重庆时时彩";
			 	str += "</td>";
				   str += "<td style='text-align: center;'>";
				    str += list[i].award_no;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += getMyDate(list[i].create_time.time);
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	str += "";
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	str += list[i].nickname;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	str += list[i].username;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += list[i].bet_item;
				    str += list[i].bet_integral;
				 	str += "</td>";
				 	if(list[i].status==3){
				 		str += "<td style='text-align: center;'>";
				 		str += list[i].showResult;
				 		str += "</td>";
				 	}else if(list[i].status==4){
				 		str += "<td style='text-align: center;color:red'>";
				 		str += list[i].showResult;
				 		str += "</td>";
				 	}else if(list[i].status==5){
				 		str += "<td style='text-align: center;'>";
				 		str += list[i].showResult;
				 		str += "</td>";
				 	}else if(list[i].status==0){
				 		str += "<td style='text-align: center;'>";
				 		str += "取消";
				 		str += "</td>";
				 	}else if(list[i].status==1){
				 		str += "<td style='text-align: center;'>";
				 		str += "购买";
				 		str += "</td>";
				 	}else if(list[i].status==2){
				 		str += "<td style='text-align: center;'>";
				 		str += "成功投注";
				 		str += "</td>";
				 	}
				 	/*str += "<td style='text-align: center;'>";
				    str += "";
				 	str += "</td>";*/
					str += "</tr>";
			  }
			  $("#jingcaiData").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			  $("#findName").val(findName);
			  var fenyestr = "<li style='display:inline;'><a onclick='jincaijilu(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='jincaijilu("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='jincaijilu("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick=\"jincaijilu('"+(res.result.pageInfo.pageNum+1)+"')\" aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick=\"jincaijilu('"+res.result.pageInfo.pages+"')\">末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
	
};

function totalBet(e) {
	
	var startTime = $("#starttime").val();
	var endTime = $("#endtime").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/totalBet.html");
	var pn = e;
	var url = path+"/jingcai/totalBet";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"pn":pn,"startTime":startTime,"endTime":endTime},
		  success: function(res){
			  console.log(res);
			  var list = res.result.pageInfo.list;
			 var a = list[0];
			  console.log(a);
			  var str = ""
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				   str += "<td style='text-align: center;'>";
				    str += list[i].totalDay;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	str += list[i].totalBet;
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#totalBetData").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='totalBet(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='totalBet("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='totalBet("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick=\"totalBet('"+(res.result.pageInfo.pageNum+1)+"')\" aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick=\"totalBet('"+res.result.pageInfo.pages+"')\">末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
	
};


function totalShang(e) {
	
	var startTime = $("#starttime").val();
	var endTime = $("#endtime").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/totalShang.html");
	var pn = e;
	var url = path+"/jingcai/totalShang";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"pn":pn,"startTime":startTime,"endTime":endTime},
		  success: function(res){
			  console.log(res);
			  var list = res.result.pageInfo.list;
			 var a = list[0];
			  console.log(a);
			  var str = ""
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				   str += "<td style='text-align: center;'>";
				    str += list[i].totalDay;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	str += list[i].totalBet;
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#totalBetData").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='totalShang(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='totalShang("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='totalShang("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick=\"totalShang('"+(res.result.pageInfo.pageNum+1)+"')\" aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick=\"totalShang('"+res.result.pageInfo.pages+"')\">末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
	
};


function totalXia(e) {
	
	var startTime = $("#starttime").val();
	var endTime = $("#endtime").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/totalXia.html");
	var pn = e;
	var url = path+"/jingcai/totalXia";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"pn":pn,"startTime":startTime,"endTime":endTime},
		  success: function(res){
			  console.log(res);
			  var list = res.result.pageInfo.list;
			 var a = list[0];
			  console.log(a);
			  var str = ""
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				   str += "<td style='text-align: center;'>";
				    str += list[i].totalDay;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	str += list[i].totalBet;
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#totalBetData").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='totalXia(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='totalXia("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='totalXia("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick=\"totalXia('"+(res.result.pageInfo.pageNum+1)+"')\" aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick=\"totalXia('"+res.result.pageInfo.pages+"')\">末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
	
};


function yingkui(e) {
	
	var startTime = $("#starttime").val();
	var endTime = $("#endtime").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/yingkui.html");
	var pn = e;
	var url = path+"/jingcai/queryYingkui";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"pn":pn,"startTime":startTime,"endTime":endTime},
		  success: function(res){
			  console.log(res);
			  var list = res.result.pageInfo.list;
			 var a = list[0];
			  console.log(a);
			  var str = ""
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				   str += "<td style='text-align: center;'>";
				    str += list[i].totalDay;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	str += list[i].result;
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#totalBetData").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='yingkui(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='yingkui("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='yingkui("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick=\"yingkui('"+(res.result.pageInfo.pageNum+1)+"')\" aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick=\"yingkui('"+res.result.pageInfo.pages+"')\">末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
	
};


function sfsq(e) {
	var findName = $("#getName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/shangfenshenqing.html");
	var pn = e;
	var url = path+"/jingcai/tosfsq";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"findName":findName,"pn":pn},
		  success: function(res){
			  $("#getName").val(findName);
			  console.log(res);
			  var list = res.result.pageInfo.list;
			 var a = list[0];
			  console.log(a);
			  var str = ""
			  debugger;
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				   str += "<td style='text-align: center;'>";
			    str += "<input id='cus"+ list[i].record_id +"' value='"+ list[i].customer_id +"' hidden='hidden'>";
			 	str += "</td>";
			 	str += "<td style='text-align: center;'>";
			    str += list[i].username;
			 	str += "</td>";
				   str += "<td style='text-align: center;'>";
				    str += list[i].nickname;
				 	str += "</td>";
				    str += "<td id='sco"+ list[i].record_id +"' style='text-align: center;'>";
				 	str += list[i].record_score;
				 	str += "</td>";
				 	str += "<td id='yue"+ list[i].record_id +"' style='text-align: center;'>";
				 	str += list[i].integral;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += getMyDate(list[i].create_time.time);
				 	str += "</td>";
				 	str += "<td id='eTime"+ list[i].record_id +"' style='text-align: center;'>";
				 	if(null == list[i].execute_time || undefined == list[i].execute_time || ""==list[i].execute_time){
				 		str += "";
				 	}else{
				 		str += getMyDate(list[i].execute_time.time);
				 	}
				 	str += "</td>";
				 	str += "<td id='shenhe"+ list[i].record_id +"' style='text-align: center;'>";
				 	if(list[i].execute_type==0){
				 		str += "<button type='button' class='btn btn-success' onclick=\"setShenHe('"+ list[i].record_id +"')\">审核</button>";
				 		str += "<button type='button' class='btn btn-primary' onclick=\"setHulue('"+ list[i].record_id +"')\">忽略</button>";
				 	}
				 	if(list[i].execute_type==1){
				 		str += "审核成功，已上分";
				 	}
				 	if(list[i].execute_type==2){
				 		str += "忽略";
				 	}
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#tbsfsq").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='sfsq(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='sfsq("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='sfsq("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='sfsq("+(res.result.pageInfo.pageNum+1)+")' aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick='sfsq("+res.result.pageInfo.pages+")'>末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
	
};


function xfsq(e) {
	var findName = $("#getName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/xiafenshenqing.html");
	var pn = e;
	var url = path+"/jingcai/toxfsq";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"findName":findName,"pn":pn},
		  success: function(res){
			  $("#getName").val(findName);
			  console.log(res);
			  var list = res.result.pageInfo.list;
			  var a = list[0];
			  console.log(a);
			  var str = ""
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				    str += "<td style='text-align: center;'>";
			        str += "<input id='cus"+ list[i].record_id +"' value='"+ list[i].customer_id +"' hidden='hidden'>";
			        str += "</td>";
			        str += "<td style='text-align: center;'>";
				    str += list[i].username;
				 	str += "</td>";
				    str += "<td style='text-align: center;'>";
				    str += list[i].nickname;
				 	str += "</td>";
				    str += "<td id='sco"+ list[i].record_id +"' style='text-align: center;'>";
				 	str += list[i].record_score;
				 	str += "</td>";/*
				 	str += "<td id='yue"+ list[i].record_id +"' style='text-align: center;'>";
				 	str += list[i].integral;
				 	str += "</td>";*/
				 	if(list[i].selected_type==1){
				 		str += "<td style='text-align: center;'>";
				 		str += "微信";
				 		str += "</td>";
				 		str += "<td style='text-align: center;'>";
					    str += list[i].wechat_id;
					 	str += "</td>";
					 	str += "<td style='text-align: center;'>";
				 		str += "";
				 		str += "</td>";
				 		str += "<td style='text-align: center;'>";
				 		str += "";
				 		str += "</td>";
				 	}else if(list[i].selected_type==2){
				 		str += "<td style='text-align: center;'>";
				 		str += "支付宝";
				 		str += "</td>";
				 		str += "<td style='text-align: center;'>";
					    str += list[i].ali_id;
					 	str += "</td>";
					 	str += "<td style='text-align: center;'>";
				 		str += "";
				 		str += "</td>";
				 		str += "<td style='text-align: center;'>";
				 		str += "";
				 		str += "</td>";
				 	}else{
				 		str += "<td style='text-align: center;'>";
				 		str += "银行卡";
				 		str += "</td>";
				 		str += "<td style='text-align: center;'>";
				 		if(list[i].bankcard_no==null || list[i].bankcard_no==undefined || list[i].bankcard_no=="" ){
				 			str += "";
				 		}else{
				 			str += list[i].bankcard_no;
				 		}
					 	str += "</td>";
					 	str += "<td style='text-align: center;'>";
					 	if(list[i].bankcard_address==null || list[i].bankcard_address==undefined || list[i].bankcard_address=="" ){
				 			str += "";
				 		}else{
				 			str += list[i].bankcard_address;
				 		}
				 		str += "</td>";
				 		str += "<td style='text-align: center;'>";
				 		if(list[i].payee==null || list[i].payee==undefined || list[i].payee=="" ){
				 			str += "";
				 		}else{
					 		str += list[i].payee;
				 		}
				 		str += "</td>";
				 	}
				 	str += "<td style='text-align: center;'>";
				    str += getMyDate(list[i].create_time.time);
				 	str += "</td>";
				 	str += "<td id='eTime"+ list[i].record_id +"' style='text-align: center;'>";
				 	if(null == list[i].execute_time || undefined == list[i].execute_time || ""==list[i].execute_time){
				 		str += "";
				 	}else{
				 		str += getMyDate(list[i].execute_time.time);
				 	}
				 	str += "</td>";
				 	str += "<td id='shenhe"+ list[i].record_id +"' style='text-align: center;'>";
				 	if(list[i].execute_type==0){
				 		str += "<button type='button' class='btn btn-success' onclick=\"setXFShenHe('"+ list[i].record_id +"')\">审核</button>";
				 		str += "<button type='button' class='btn btn-primary' onclick=\"setHulueXF('"+ list[i].record_id +"')\">忽略</button>";
				 	}
				 	if(list[i].execute_type==1){
				 		str += "审核成功，已下分";
				 	}
				 	if(list[i].execute_type==2){
				 		str += "忽略";
				 	}
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#tbxfsq").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='xfsq(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='xfsq("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='xfsq("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='xfsq("+(res.result.pageInfo.pageNum+1)+")' aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick='xfsq("+res.result.pageInfo.pages+")'>末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
	
};


function sxfjl(e) {
	var findName = $("#findName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/shangxiafenjilu.html");
	var pn = e;
	var url = path+"/jingcai/shangxiafenjl";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"findName":findName,"pn":pn},
		  success: function(res){
			  $("#findName").val(findName);
			  console.log(res);
			  var list = res.result.pageInfo.list;
			  var a = list[0];
			  console.log(a);
			  var str = ""
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				    str += "<td style='text-align: center;'>";
			        str += list[i].customer_id;
			        str += "</td>";
				    str += "<td style='text-align: center;'>";
				    str += "";
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += list[i].nickname;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += list[i].username;
				 	str += "</td>";
//				    str += "<td id='sco"+ list[i].record_id +"' style='text-align: center;'>";
//				 	str += list[i].score_before;
//				 	str += "</td>";
				 	if(list[i].record_type==4){
				 		str += "<td id='yue"+ list[i].record_id +"' style='text-align: center;color:red;'>";
					 	str += "-"+list[i].record_score;
					 	str += "</td>";
				 	}else{
				 		str += "<td id='yue"+ list[i].record_id +"' style='text-align: center;'>";
					 	str += list[i].record_score;
					 	str += "</td>";
				 	}
				 	
//				 	str += "<td style='text-align: center;'>";
//			 		str += list[i].score_after;
//			 		str += "</td>";
				 	
				 	str += "<td style='text-align: center;'>";
				 	str += getMyDate(list[i].execute_time.time);
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#sxfData").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='sxfjl(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='sxfjl("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='sxfjl("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='sxfjl("+(res.result.pageInfo.pageNum+1)+")' aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick='sxfjl("+res.result.pageInfo.pages+")'>末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
	
};

function wxsk(e) {
	var findName = $("#getName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/weixinshoukuan.html");
	var pn = e;
	
	var url = path+"/jingcai/showPhoto";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"paramName":"pay_weixin"},
		  success: function(res){
			  console.log(res);
			  $("#wxskPhoto").attr("src",res.pturl);
			  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		})
	
};

function zfbsk(e) {
	var findName = $("#getName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/zhifubao.html");
	var pn = e;
	
	var url = path+"/jingcai/showPhoto";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"paramName":"pay_ali"},
		  success: function(res){
			  console.log(res);
			  $("#zfbPhoto").attr("src",res.pturl);
			  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		})
};


function dlfh(e) {
	var findName = $("#getName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/dailifenhong.html");
	var pn = e;
	
	
};

function dllb(e) {
	var findName = $("#getName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/daililiebiao.html");
	var pn = e;
	var url = path+"/jingcai/todaililiebiao";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"findName":findName,"pn":pn},
		  success: function(res){
			  console.log(res);
			  var list = res.result.pageInfo.list;
			 var a = list[0];
			  console.log(a);
			  var str = ""
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				   str += "<td style='text-align: center;'>";
			    str += "";
			 	str += "</td>";
				   str += "<td id='nickname"+ list[i].customer_id +"' style='text-align: center;'>";
				    str += list[i].nickname;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += list[i].username;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += list[i].customer_id;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	if(list[i].sex==1){
				 		str += "男";
				 	}else{
				 		str += "女";
				 	}
				    
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += list[i].phone;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += list[i].extension_url;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += getMyDate(list[i].create_time.time);
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	if(list[i].charges==null || list[i].charges==undefined){
				 		str += "";
				 	}else{
				 		str += list[i].charges;
				 	}
				 	str += "<td style='text-align: center;'>";
				    str += list[i].integral;
				 	str += "</td>";
				 	str += "<td width='200'>";
				 	if(list[i].agency_id==null || list[i].agency_id==undefined || list[i].agency_id=="" ){
				 		str += "<button type='button' class='btn btn-danger'>【无上线】</button>";
				 	}else{
				 		str += "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#exampleModal4' data-whatever='"+ list[i].nn +"' data-ty='"+ list[i].us +"' }'>查看上线</button>";
				 	}
				 	
				 	str += "<a class='btn btn-danger' onclick='findXiaxian("+ list[i].customer_id +",1)' >查看下线</a>";
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#tbdailie").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='dllb(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='dllb("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='dllb("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='dllb("+(res.result.pageInfo.pageNum+1)+")' aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick='dllb("+res.result.pageInfo.pages+")'>末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});	
};

function cqssshuju(e) {
	$("#menudetail").html("");
	$("#menudetail").load(path+"/cqssshuju.html");
	var pn = e;
	
	var url = path+"/jingcai/tocqssshuju";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"pn":pn},
		  success: function(res){
			  console.log(res);
			  var list = res.result.pageInfo.list;
			 var a = list[0];
			  console.log(a);
			  var str = ""
			  debugger;
			  for(var i=0;i<list.length;i++){
				    str += "<tr>";
				   str += "<td style='text-align: center;'>";
			    str += "重庆时时彩";
			 	str += "</td>";
				   str += "<td style='text-align: center;'>";
				    str += list[i].id;
				 	str += "</td>";
				    str += "<td style='text-align: center;'>";
				 	str += getMyDate(list[i].date.time);
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	str += list[i].number;
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#tbcss").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='cqssshuju(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='cqssshuju("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='cqssshuju("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='cqssshuju("+(res.result.pageInfo.pageNum+1)+")' aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick='cqssshuju("+res.result.pageInfo.pages+")'>末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
};


function jiqr(e) {
	var findName = $("#getName").val();
	$("#menudetail").html("");
	$("#menudetail").load(path+"/jqrlb.html");
	var pn = e;
	
	var url = path+"/jingcai/tojqr";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {"pn":pn,"findName":findName},
		  success: function(res){
			  $("#getName").val(findName);
			  console.log(res);
			  var list = res.result.pageInfo.list;
			 var a = list[0];
			  console.log(a);
			  var str = ""
			  for(var i=0;i<list.length;i++){
				    str += "<tr id='tr"+ list[i].customer_id +"'>";
				    str += "<td style='text-align: center;'>";
				   	str += "";
				   	str += "</td>";
				    str += "<td style='text-align: center;'>";
				    str += list[i].nickname;
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				    str += list[i].username;
				 	str += "</td>";
				    str += "<td style='text-align: center;'>";
				 	str += getMyDate(list[i].create_time.time);
				 	str += "</td>";
				 	str += "<td style='text-align: center;'>";
				 	str += "<button type='button' class='btn btn-danger' onclick='deljqr("+list[i].customer_id +")'>删除</button>";
				 	str += "</td>";
					str += "</tr>";
			  }
			  $("#tbjqr").html(str);
			  $("#pageT").html("当前第："+res.result.pageInfo.pageNum+"页，总共："+res.result.pageInfo.pages+"页，总共："+res.result.pageInfo.total+"条记录");
			
			  var fenyestr = "<li style='display:inline;'><a onclick='jiqr(1)'>首页</a></li>";
			 		if(res.result.pageInfo.hasPreviousPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='jiqr("+(res.result.pageInfo.pageNum-1)+")'aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}	  
			 		for(var i=0;i<res.result.pageInfo.navigatepageNums.length;i++){
			 			if(res.result.pageInfo.navigatepageNums[i] == res.result.pageInfo.pageNum){
			 				fenyestr += "<li style='display:inline;' class='active'><a href='#'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 			}else{
			 				fenyestr += "<li style='display:inline;'><a onclick='jiqr("+res.result.pageInfo.navigatepageNums[i]+")'>"+res.result.pageInfo.navigatepageNums[i]+"</a></li>";
			 				
			 			}
			 		}
					
			 		if(res.result.pageInfo.hasNextPage){
			 			fenyestr += "<li style='display:inline;'><a onclick='jiqr("+(res.result.pageInfo.pageNum+1)+")' aria-label='Next'><span aria-hidden='true'>&laquo;</span></a></li>";
			 		}
			 			fenyestr += "<li style='display:inline;'><a onclick='jiqr("+res.result.pageInfo.pages+")'>末页</a></li>";
		  			$("#fenye").html(fenyestr);
		  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		});
};


function shouye() {
	$("#menudetail").html("");
	$("#menudetail").load(path+"/shuying.html");
	
var url = path+"/jingcai/toShuying";
	$.ajax({
		  type: "POST",
		  url: url,
		  data: {},
		  success: function(res){
			  console.log(res);
			  if(null==res.sytoday){
				  $("#sytoday").html(0);
			  }else{
				  $("#sytoday").html(res.sytoday.total);
			  }
			  if(null==res.syMon){
				  $("#syMon").html(0);
			  }else{
				  $("#syMon").html(res.syMon.total);
			  }
			  if(null==res.usertoday){
				  $("#usertoday").html(0);
			  }else{
				  $("#usertoday").html(res.usertoday.userTotal);
			  }
			  if(null==res.userMon){
				  $("#userMon").html(0);
			  }else{
				  $("#userMon").html(res.userMon.userTotal);
			  }
			 
			  if(null==res.allXiafen ){
				  $("#allXiafen").html(0);
			  }else{
				  $("#allXiafen").html(res.allXiafen.allxiafen);
			  }
			  if(null==res.nowShangfen){
				  $("#nowShangfen").html(0);
			  }else{
				  $("#nowShangfen").html(res.nowShangfen.allshangfen);
			  }
			  if(null==res.nowXiafen){
				  $("#nowXiafen").html(0);
			  }else{
				  $("#nowXiafen").html(res.nowXiafen.xiafennow);
			  }
			
			  
		  },
		  dataType: "json",
		  error:function(){
			  alert("系统繁忙，请重试");
		  }
		})
};

function logout() {
var url = path+"/user/logout";
	$.ajax({
		  type: "POST",
		  url: url,
		  success: function(res){
			  console.log(res);
		  },
		  dataType: "json",
		  error:function(e){
			  alert(e);
			  console.log(e);
		  }
		})
	
		
		
};