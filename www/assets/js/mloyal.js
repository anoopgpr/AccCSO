$.mobile.allowCrossDomainPages = true;
_debug = false;

var popUp;
var city_id='';
var category_id='';

var gallery_cat='';
var galstr='';
var player_cat='';
var fix_cat='';

var reg_id="";
var backstore ="";
var lastattemptpage='';

var shop_img='';
var pan_img='';
var aadhar_img='';

var file_pphoto='';
var file_pdoc='';
var file_adimg_front='';
var file_adimg_back='';
var doc_img='';
var file_pphoto_doc='';
var totalData = '';

var json_fb='https://taghash.co/mloyalApps/facebookatootbandhan.php';
var RSS_twitter='https://taghash.co/mloyalApps/twitter.php?uname=atootbandhanhome';
var RSS_pinterest='http://103.25.128.61/projects/taghash/mloyalApps/pinteresttantra.php?brand=atootbandhan';
var RSS_instagram='https://www.instagram.com/atootbandhan/?__a=1';
var RSS_youtube='http://xceedfbapps.com/mloyalfeeds/youtube.php?brandname=atootbandhan';
var RSS_tumblr='http://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=http://atootbandhan.tumblr.com';

var brandname='atootbandhan';
var aboutus_det='atootbandhan';
var brand_url='http://atootbandhan.com/';
var cart = { cartdata: []};
var indexary=new Array();
var ids = [];
var cityarr=new Array();
var cityidarr=new Array();

user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"other_mobile_no":"",
	"Upi_id":"",
	"store_code_atootbandhan" : "",
	"email":"",
	"dob":"",
	"membership_slab":"",
	"pincode":"",
	"city":"",
	"age":"",
	"locationn":"",
    "address":"",
	"gender":"",
	"cattype_ex":"",
	"gst_no":"",
	"pan_no":"",
	"aadhar_no":"",
	"p_photo":"",
	"state":"",
	"district":"",
	"IsApproved_se":"",
	"totalpurchaseval":"",
	"totalpurchaseval_approved":"",
	"cashback":"",
	"Nature_Workshop":"",
	"Vehicle_Type":"",
	"No_of_Mechanics":"",
	"Potential":"",
	"Charger_Available":"",
	"Preferred_Language":"",
	"Preferred_Payment_mode":"",
	"Shop_Name":"",
	"ShopPhoto":"",
	"docPhoto":"",
	"adhPhoto":"",
	"adimg_front":"",
	"adimg_back":"",
	"refer_code":"",
	"manpower":"",
	"infrastructure":"",
	"bankaccountno":"",
	"ongoing_sites":"",
	"completed_sites":""
};

store = {
	"store_id" : "",
    "store_name" : "",
	"store_category" : "",
    "redeem_logic" : "",
    "store_members" : "",
	"store_rank" : "",
	"storecode ":"",
	"storefirstname ":"",
	"secode ":"",
	"sename ":"",
	"storemobile":"",
	"AreaOfficeCode":""
};

var SERVER = "https://atootbandhan.mloyalretail.com/m/";
var SERVER1 = "https://atootbandhan.mloyalretail.com/http://localhost:8086/";
var SERVER2 = "https://atootbandhan.mloyalretail.com/APIs/";
var SERVER3 = 'https://atootbandhan.mloyalretail.com/Rewards/';
var GSERVER2 = "https://atootbandhan.mloyalretail.com/APIs/";
var GSERVER22 = "https://atootbandhan.mloyalretail.com/APIs/";


var gbrd='EEDB9B2B-9F25-4304-8C54-9F003441177B';



//var gbrd='E0B69562-7BCF-4E86-9A18-443E1674CB08';


var SERVER_m = "https://mliveshare.com/"; 
var SERVER1_m = "https://mliveshare.com/user/";
var BITLYS = "https://mliveshare.com/";
var versionurl  ='https://taghash.co/';
var versionurl1  ='https://taghash.co/';


var app_versionCode = '16';

       
$(document).ready(function(event){


                $( function() {
					$("#optionspop_profile_doc_kyc").enhanceWithin().popup();
					 //$("#scan_qr_success" ).enhanceWithin().popup();
					 //$("#coupons_pop" ).enhanceWithin().popup();
					 //$("#newuser_register_byse_popup").enhanceWithin().popup();

					 //$("#optionspop_profile").enhanceWithin().popup();
					 //$("#optionspop_adh1").enhanceWithin().popup();
					 //$("#optionspop_adh2").enhanceWithin().popup();
				});

                $("#wait").css("display","none");
				
                $(document).ajaxStart(function() {
                       $("#wait").css("display","block");
                    });

					$(document).ajaxSend(function() {
						$("#wait").css("display","block");
					 });
				  
                $(document).ajaxStop(function() {
                       $("#wait").css("display","none");
                    });
					checkapp_Version();
				localStorage.setItem('selectedstoreatootbandhan',gbrd);

				// loadState_list();
				// fetchDistrictlist();
				// update_runningsite_count_enrollcont();
				//loadLocation();
				//setToday_date();

				document.addEventListener("backbutton", function(e)
				{
					   if($.mobile.activePage.is('#page-forgot-password'))
					   {
							navigator.app.exitApp();
					   }
					   if($.mobile.activePage.is('#homepage'))
					   {
						   e.preventDefault();
						   var x;
							if (confirm("Are you sure you want to exit?") == true) {
								x = "Yes";
								navigator.app.exitApp();
							} else {
								x = "No";
							}
						   
					   }
					   else 
					   {
						   navigator.app.backHistory();
					   }
			     }, false);



				        var dealeruser = localStorage.getItem("usernamemloyal_atootbandhan");
						var dealerpass = localStorage.getItem("userpassloyal_atootbandhan");
						
						if(typeof dealeruser == undefined || dealeruser == null)
							dealeruser = '';
						if(typeof dealerpass == undefined || dealerpass == null)
							dealerpass = '';
						//console.log('dealeruser'+dealeruser+'.......dealerpass'+dealerpass);
						if(dealeruser!='')
						{
							 $('#dealerusername_se').val(dealeruser);
							 //$('#dealer_mobileno_se').val(dealeruser);
						}
						if(dealeruser!='' && dealerpass!='')
	                    {
	                           
	                           $('#dealerusername_se').val(localStorage.getItem("usernamemloyal_atootbandhan"));
	                           //$('#dealerpassword').val(localStorage.getItem("userpassloyal_atootbandhan"));
	                           var pass = localStorage.getItem("userpassloyal_atootbandhan");
							   if(pass.length>=4)
						       {
						       /*var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }*/
										 $('#dealerpassword_se').val(pass);
						        }
						        $.mobile.changePage( "#gifslider", { transition: "none"} );
								setTimeout( function() {
								    dealerauthenticate_se();
								}, 2000);  // 2 seconds
	                           
                        }
                        else if(dealeruser!='' && dealerpass=='')
		                 {
	                        $('#dealerusername_se').val(localStorage.getItem("usernamemloyal_atootbandhan"));
	                        //$('#dealer_mobileno_se').val(localStorage.getItem("usermobilemloyal_atootbandhan")); 
	                        $.mobile.changePage( "#page-login-dealer_se", { transition: "none"} );
	                        
		                 }
	                     else
	                     {
	                     	$.mobile.changePage( "#page-login-dealer_se", { transition: "none"} );
							
						 }

});


function checkapp_Version()
{

     $.getJSON(
            'https://taghash.co/atootbandhan/getapp_version_cso.php', 
			{

			},
		    function (json) {

				 localStorage.setItem("atootbandhan_vcode", JSON.stringify(json));

				 //console.log('vcode:'+json[0].versioncode);

				 if(json[0].promptstatus=='1')
				 {
					 toast_p(json[0].prompt);
				 }

				 var vcode = json[0].versioncode;

				 if( app_versionCode < vcode )
				 {
					checkapp_Version_popup();
					// toast('New version of your application available. Please update');

					//navigator.app.exitApp();
					$.mobile.changePage( "#page-login-dealer_se", { transition: "none"} );

				 }
				 else
				 {
					     var cattype = localStorage.getItem('cattype_ex');

						 if(typeof cattype==undefined || cattype== null)
							cattype='';
					
						 if(cattype=='Mechanic')
						 {
							if(localStorage.getItem("usernameatootbandhan")!=null && localStorage.getItem("usernameatootbandhan")!='' && localStorage.getItem("passwordatootbandhan")!=null && localStorage.getItem("passwordatootbandhan")!='')
							{
									$('#username').val(localStorage.getItem("usernameatootbandhan"));
									$('#password_myacc').val(localStorage.getItem("passwordatootbandhan"));
									user.mobile = localStorage.getItem('usernameatootbandhan');
									var pwd = localStorage.getItem('passwordatootbandhan');
									var uname = user.mobile;
									user.balance = localStorage.getItem('balance');
									user.firstname = localStorage.getItem('firstname');
									user.lastname = localStorage.getItem('lastname');
									user.id = localStorage.getItem('id');
									user.total = localStorage.getItem('total');
									user.validity = localStorage.getItem('validity');
									user.trans_sms = localStorage.getItem('trans_sms');
									user.mktgsms = localStorage.getItem('mktgsms');
									user.cpns = localStorage.getItem('cpns');
									user.ads = localStorage.getItem('ads');
									user.dob = localStorage.getItem('dob');
									user.emailid = localStorage.getItem('emailid');
									user.store_code_atootbandhan = localStorage.getItem('store_code_atootbandhan');
									user.def_store = localStorage.getItem('def_store');
									user.def_city = localStorage.getItem('def_city');
									user.visit_frequency = localStorage.getItem('visit_frequency');
									user.membership_slab = localStorage.getItem('membership_slab');
									
									if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
										user.firstname = '';
									if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
											user.lastname = '';
									if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
											user.emailid = '';
									if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
											user.dob = '';
									if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
											user.mobile = '';
									if(user.balance=='undefined' || user.balance=='null' || user.balance==null)
											user.balance = '0';
									
									$('#update_firstname').val(user.firstname);
									//$('#update_lastname').val(user.lastname);

										var dob = user.dob.split('-');
										var mm = dob.length == 3 ? dob[1] : '';
										var dd = dob.length == 3 ? dob[0] : '';
										var yyyy = dob.length == 3 ? dob[2] : '';
										
										/*$('#update_dd').val(dd);
										$('#update_mm').val(mm);
										$('#update_yyyy').val(yyyy);*/

									$('#update_email').val(user.emailid);
									//$('#update_dob').val(user.dob);
									$('#update_firstname1').val(user.firstname);
									$('#update_lastname1').val(user.lastname);

		   
									document.getElementById("profilenm").innerHTML=user.firstname;
									//document.getElementById("trans_nm").innerHTML= user.firstname+' '+user.lastname;
									document.getElementById("profilenm1").innerHTML=user.firstname;
									//document.getElementById("profilenm_mloyal").innerHTML=user.firstname+' '+user.lastname;
									document.getElementById("profilepts1").innerHTML=user.total;
									document.getElementById("trans_pts").innerHTML=user.total;
									
									 $("#wait").css("display","none");
									 authenticate();
									 /*if(imageExists('https://taghash.co/mloyalfileupload/uploads/atootbandhan_'+localStorage.getItem("usernameatootbandhan")+'.jpg'))
									 {
										 document.getElementById("cardImagemenu").src='https://taghash.co/mloyalfileupload/uploads/atootbandhan_'+localStorage.getItem("usernameatootbandhan")+'.jpg';
									 }*/                  
							 }
							 else if(localStorage.getItem("usernameatootbandhan")!=null && localStorage.getItem("usernameatootbandhan")!='' && (localStorage.getItem("passwordatootbandhan")==null || localStorage.getItem("passwordatootbandhan")=='')) 
							 {
									$.mobile.changePage( "#login_pg", { transition: "none"} );
							 }
							 else
							 {	
									//$.mobile.changePage( "#page-forgot-password", { transition: "none"} );
									$.mobile.changePage( "#selectcategorypage", { transition: "none"} );
							 }
						 }
						 else if(cattype=='SalesExecutive' )
						 {	
								//document.getElementById('headlbl_login_se').innerHTML='Sales Executive';

								var dealeruser = localStorage.getItem("usernamemloyal_ex");
								var dealerpass = localStorage.getItem("userpassloyal_ex");
								//alert(dealeruser+'................'+dealerpass);
								if(typeof dealeruser == undefined || dealeruser == null)
									dealeruser = '';
								if(typeof dealerpass == undefined || dealerpass == null)
									dealerpass = '';
								//console.log('dealeruser'+dealeruser+'.......dealerpass'+dealerpass);
								if(dealeruser!='')
								{
									 $('#username_se').val(dealeruser);
								}
								if(dealeruser!='' && dealerpass!='')
								{
									   
									   $('#username_se').val(localStorage.getItem("usernamemloyal_ex"));
									   $('#password_myacc_se').val(localStorage.getItem("userpassloyal_ex"));
									   
									   //$.mobile.changePage( "#gifslider", { transition: "none"} );
										setTimeout( function() {
											authenticate_se();
										}, 2000);
									   
								}
								else if(dealeruser!='' && dealerpass=='')
								{
									$('#username_se').val(localStorage.getItem("usernamemloyal_ex"));
									$('#password_myacc_se').val(localStorage.getItem("usermobilemloyal_ex")); 
									$.mobile.changePage( "#login_pg_se", { transition: "none"} );
									
								}
								else
								{
									$.mobile.changePage( "#page-login-dealer_se", { transition: "none"} );
								}
						}
				 }
  
	 
	 }).error(function () { toast('Could not connect to Server, make sure you are connected to Internet');  });
	  
}

function checkapp_Version_popup()
{
	console.log('enter');
	var str = '';
	str +='<div class="notification_section">';
	str +='<div class="notification_overlay">';
	str +='</div>';
	str +='<div class="notification_pop">';
	// str +='<a class="notification_close" onclick="javascript:closePop_ver();">+</a>';
	str +='<div class="notification_block">';
	str +='<p class="notification_msg">New version of your application available. </p>';

	str +='<div class="refer_btns_version">';
	// str +='<button onclick="javascript:closePop_ver();" style="margin-right:4%;" data-role="none">Cancel</button>';
	str +='<button onclick="javascript:rateApp();" type="reset" data-role="none">Update</button>';
	str +='</div>';
	
	str +='</div>';
	str +='</div>';
	str +='</div>';	
	$("#page-login-dealer_se").prepend(str);
	
}

function getOtp_resend() 
{
	  var mob = $('#username_new').val();

		$.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 30000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 if(data.toLowerCase()=='success')
			 {
				  toast('OTP has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      //$('#username').val(mob);
				  $('#username_new').val(mob);
				  localStorage.setItem('usernameatootbandhan',mob);
				 
				  $.mobile.changePage("#login_pg_new");
				  //$.mobile.changePage("#login_pg");
              }
			  else{
				 toast(mob+' is not registered, please try again.');
				 $('#forgot_mobile').val('');
				 $.mobile.changePage( "#page-forgot-password", { transition: "none"} );
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				   toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  
}

$(document).on('pageshow', '#login_pg_new', function (event, ui) {
    
	$("#resendotp_btn").css('display', 'none');

	setTimeout(function(){
            $("#resendotp_btn").css('display', 'block');
		}, 60000);
    
});

$(document).on('pageshow', '#enroleContractor', function (event, ui) {
    //  getMapedDealer();
	// fetchDistrictlist();
});
$(document).on('pageshow', '#salesdata_se_leads', function (event, ui) {
	loadState_list();
});
function getMapedDealer(){  

 $.ajax({
   url: SERVER2+'get_store_data_json_byse_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&se_code='+store.secode,
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    // data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14'},
    complete: function(xhr, textStatus) {
   //called when complete  &se_code=2215452&status=Pending
    },
    success: function(data, textStatus, xhr) {
    console.log('JSONDATA'+JSON.stringify(data));
	var listItems= "";
	listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>Select Dealer</option>";
	for (var i = 0; i < data.data.length; i++)
	{ 
	   listItems+= "<option value='" + data.data[i].StoreCode + "'>" + data.data[i].StoreName +"</option>";
	}

	$("#update_select_dealer").html(listItems);
	// $("#update_state_de").html(listItems);
    },
    error: function(xhr, textStatus, errorThrown) {
		//toast('searchcust resend:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
}

function searchcustResend(mob)
{
	
 
 var searchcust = mob;

 if(searchcust.trim()=='')
 {
	toast('Please Enter Mobile No.');
	$.mobile.changePage( "#page-forgot-password", { transition: "none"} );
 }
 else if(searchcust.length<10 || searchcust.length>10)
 {
	 toast('Invalid Mobile No.');
	 $.mobile.changePage( "#page-forgot-password", { transition: "none"} );
 }
 else
 {
  

 $.ajax({
   url: SERVER2+'get_points_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': searchcust},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
    //console.log('JSONDATA'+JSON.stringify(data));
	    if(data.data.length>0)
		{
			getOtp(searchcust);
			isuserexist=false;
		}
	    else
		{
			$('#forgot_mobile').val('');
			getOtp(searchcust);
			isuserexist=false;
		}
	
  
    },
    error: function(xhr, textStatus, errorThrown) {
		//toast('searchcust resend:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  

 }

}

function tx_Submit(){
	
	var date = $('#tx_date').val();
	//var mobile = $('#tx_mobile').val();
	var brand = $("#tx_brand").val();
	var product = $('#tx_product').val();
	var quantity = $('#tx_quantity').val();
	var area = $('#tx_area').val();
	var pincode = $('#tx_pincode').val();
	// var dealer = $('#tx_dealer').val();
	
	// var siteowner_name = $('#tx_siteowner_name').val();
	// var siteowner_mobile = $('#tx_siteowner_mobile').val();
	// var siteowner_pincode = $('#tx_siteowner_pincode').val();

	var mm ='';
	var dd ='';
	var dd1 ='';
	var yyyy = '';
	var yyyy1 = '';

	if(date != ''){
		var dob = date.split('-');
		// console.log(dob);
		dd = dob[2];
		mm = dob[1];
		yyyy = dob[0];		
	}

	var dt_tx_new = mm+'/'+dd+'/'+yyyy;

	console.log('dt_tx_new:'+dt_tx_new);

	if(date == '')
	{
		toast('Please enter mandatory details.');
	}
	else if(brand=='' || brand==undefined || brand==null)
	{
		toast('Please check brand');
	}
	else if(quantity=='')
	{
		toast('Please check quantity');
	}
	else
	{

		$.ajax({
			url: SERVER2+"earn_points_json_api.asp?",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			                "mobileno": user.mobile,
							"bill_date": dt_tx_new,
							"brand": brand,
							"qty": quantity,
							"product": product,
							"pincode": pincode,
							"scode": user.store_code_atootbandhan,
							"area": area
							
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPI');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14');
            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			 
			    console.log("data:"+JSON.stringify(data));

			    if(data.error.length>=1)
				{
					toast_p(data.error);
				}
				else
				{
					toast_p(data.data);

					$('#tx_mobile').val('');
					$("#tx_brand").val('');
					$('#tx_product').val('');
					$('#tx_quantity').val('');
					$('#tx_area').val('');
					$('#tx_pincode').val('');

					tx_loadhomepage();
			   
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
	}
}

function tx_loadhomepage()
{
									//$.mobile.changePage( "#homepage", { transition: "none"} );

									$('#username_new').val(localStorage.getItem("usernameatootbandhan"));
                                    var pass = localStorage.getItem("passwordatootbandhan");

                                    if(pass.length>=4)
								    {
								      var i=4;
								      while(i>0)
											  {
												$('#codeBox'+i).val(parseInt(pass%10));
												i--;
												pass = parseInt(pass/10);
												
											  }
									}

									setTimeout( function() {
									authenticate_new();
								}, 2000);  // 2 seconds
}

function forget_pswd_confirm()
{
		 if($("#tnc-chck1").is(":checked"))
		 {
			forget_pswd();
		 }
		 else
		 {
			toast('Please agree to all terms and conditions');	 
		 }
}


function forget_pswd()
{
	 var mob = $('#forgot_mobile').val();
	 
	 if(mob=='')
	 {
		 toast('Please enter your mobile number');
	 }
	 else if(mob.length==10)
	 {
		 //$.mobile.changePage("#login_pg");
		 $.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 30000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 console.log(textStatus);
			 if(data.toLowerCase()=='success'){
				 //startWatch();
				 console.log("In forgot_pswd.asp");
				 toast('OTP has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      //$('#username').val(mob);
				  $('#username_new').val(mob);
				  localStorage.setItem('usernameatootbandhan',mob);
				 
				  $.mobile.changePage("#login_pg_new");
				  //$.mobile.changePage("#login_pg");
              }
			  else{
				 toast(mob+' is not valid.');
				 $('#forgot_mobile').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				   toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  }
  else
  {
	  toast('Please enter 10 digits mobile number');
  }
}

function forget_pswd_se()
{
  var uname = $('#forgot_mobile_se').val();
  
 if(uname=='')
 {
    toast('Please enter Mobile Number');
 }
 else if(uname.length!=10)
 {
	toast('Please enter 10 digits mobile number');
 }
 else
 {

  $.ajax({
   url: SERVER2+'forgot_pswd_dealer_se_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALCKBAPI','apipswd':'Ml0yalCKBAP!2!','login_name': uname,'Status_flag':'0'},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

    //  console.log('data'+JSON.stringify(data));
         console.log(data);
	    if(data.error.length>0)
		{
			toast(data.error);
			//$('#forgot_mobile_se').val('');
		}
		else
		{
			toast(data.data);
			$('#username_se').val(uname);
			localStorage.setItem('usernameatootbandhan',uname);
			localStorage.setItem('stateId',data.data);
            $.mobile.changePage("#login_pg_se");

		}
    
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('se auth:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
 }

}

function forget_pswd_se_none()
{
	 var mob = $('#forgot_mobile_se').val();
	 
	 if(mob=='')
	 {
		 toast('Please enter your mobile number');
	 }
	 else if(mob.length==10)
	 {
		 //$.mobile.changePage("#login_pg");
		 $.ajax({
			url: SERVER+'forgot_pswd_se.asp',
			type: 'GET',
			timeout: 30000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 console.log(textStatus);
			 if(data.toLowerCase()=='success'){
				 //startWatch();
				 console.log("In forgot_pswd.asp");
				 toast('Passcode has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      $('#username_se').val(mob);
				  localStorage.setItem('usernameatootbandhan',mob);
				 
				  $.mobile.changePage("#login_pg_se");
              }
			  else{
				 toast(mob+' is not registered, please try again.');
				 $('#forgot_mobile_se').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				   toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  }
  else
  {
	  toast('Please enter 10 digits mobile number');
  }
}

function checkminlength(str,len)
{
	var str1 = $('#'+str).val();

	if(str1.length>=parseInt(len))
	{
		return (true);
	}
	toast('Min '+len+' characters required');
	$('#'+str).val('');
	return (false);
}

function matchpassword(val,val1)
{
	var str = $('#'+val).val();
	var str1 = $('#'+val1).val();
	if(str == str1)
	{
		return (true);
	}
	toast("Password mismatch.Please try again."); 
	$('#'+val1).val('');
    return (false);
}


$(document).on('pageinit', '#myaccount', function (event, ui) {

		//receivedEvent('deviceready');

		  
        $(document).on('tap', '#login_button', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		
		authenticate();

	});
});

$(document).on('pageinit', '#slidepage', function (event, ui) {
         //document.getElementById("slide1img").src=SERVER+'images/apps/splash1.jpg';
		 //document.getElementById("slide2img").src=SERVER+'images/apps/splash2.jpg';
		 //document.getElementById("slide3img").src=SERVER+'images/apps/splash3.jpg';
		
});
function hideloader()
{
	try{
	var pop = document.getElementById('wait');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    }catch(err){}
}

$(document).on('pageshow', '#homepage', function (event, ui) {
    //hideloader();

    //localStorage.setItem('cattype_ex','Mechanic')
	//toggleDivbylointype();

	//setToday_date();

	//checkNotification();

	/*$(".promo_slider").owlCarousel({
		items:1,
		loop:false,
		margin:0,
		autoplay:true,
		nav:false,
		dots:false,
		autoplayTimeout:1800
	})*/

	//showApprovalstatus_oncard();
    
});

$(document).on('pageshow', '#homepage_se', function (event, ui) {
    //hideloader();

    localStorage.setItem('cattype_ex','SalesExecutive');

	//checkNotification_se();

	/*$(".promo_slider").owlCarousel({
		items:1,
		loop:false,
		margin:0,
		autoplay:true,
		nav:false,
		dots:false,
		autoplayTimeout:1800
	})*/
    
});

$(document).on("pageshow", "#homepage", function(){
	$(".noti_trans").on("click", ".noti_btn", function(){		
		$("#filter_panel").slideDown("fast");
		$(".overlay").fadeIn("fast");		
	})
	
	$("#filterClose").on("click", function() {
		$("#filter_panel").slideUp("fast");		
		$(".overlay").fadeOut("fast");
	})
	$(".overlay").on("click", function(){
		$(".overlay").fadeOut("fast");
		$("#filter_panel").slideUp("fast");
	});
	$(".close_panel").on("click", function(){
		$(".overlay").fadeOut("fast");
		$(".notification_stacks").remove();
		$("#filter_panel").slideUp("fast");
	});
	
	//$(".notification_stacks").remove();
   
	//setProfilepic_border();
	//bannerCoupons();
	//showTrainingbanners();
	//listCategoryhomepage();

});

$(document).on('pageinit', '#homepage', function (event, ui) {
        
	/*if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
		document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Points';
			if(user.membership_slab=='1' || user.membership_slab=='')
            {
               document.getElementById("category_img").src="img/Silver_icon.png";
			   //document.getElementById("profiletype").innerHTML = 'Silver';
            }
            else if(user.membership_slab=='2')
            {
               document.getElementById("category_img").src="img/gold.png";
			   //document.getElementById("profiletype").innerHTML = 'Gold';
            }
            else if(user.membership_slab=='3')
            {
               document.getElementById("category_img").src="img/platinum.png";
			   //document.getElementById("profiletype").innerHTML = 'Platinum';
            }
	}*/
		
});


function authenticate_new()
{

  var uname = $('#username_new').val();

  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    console.log("uname:"+uname);
    console.log("pwd:"+pwd);
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.store_code_atootbandhan = data.store_code;
	user.def_store = data.store;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = data.slabid;
    
	user.gender = checkforundefined(data.Gender);
    user.pincode = checkforundefined(data.PostalCode);
	user.address = checkforundefined(data.Address);
	user.state = checkforundefined(data.State);
	user.district = checkforundefined(data.district);
	user.aadhar_no =  checkforundefined(data.aadhar_card_no);
    user.adimg_front = checkforundefined(data.aadhar_front_photo);
    user.adimg_back = checkforundefined(data.aadhar_back_photo);
	user.refer_code = checkforundefined(data.Ref_code);

	user.manpower = checkforundefined(data.Manpower);
	user.infrastructure = checkforundefined(data.Infrastructure);
	user.bankaccountno = checkforundefined(data.AccountNo);
	user.gst_no = checkforundefined(data.GstNo);
	user.qualification  = checkforundefined(data.Qualification);
	user.ongoing_sites = checkforundefined(data.OngoingSites);
	user.completed_sites  = checkforundefined(data.CompleteSites);
	user.p_photo = checkforundefined(data.ProfilePphoto);

	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	console.log("user.firstname:"+user.firstname);

	console.log("success"+data.status);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameatootbandhan',uname);
   localStorage.setItem('passwordatootbandhan',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.store_code_atootbandhan=='undefined' || user.store_code_atootbandhan=='null' || user.store_code_atootbandhan==null)
			user.store_code_atootbandhan = 'HO-001';

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    /*var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';*/
		
		//$('#update_dd').val(dd);
		//$('#update_mm').val(mm);
		//$('#update_yyyy').val(yyyy);

	$('#update_email').val(user.emailid);
	//$('#update_city').val(user.city);
	//$('#update_state').val(user.state);
	//$('#update_pincode').val(user.pincode);
	//$('#update_aadharno').val(user.aadhar_no);
	$('#update_address').val(user.address);
	$('#update_manpower').val(user.manpower);
	$('#update_infrastructure').val(user.infrastructure);
	//$('#update_expertise').val(user.expertise);
	$('#update_bankacounto').val(user.bankaccountno);
	$('#update_gstnno').val(user.gst_no);
	$('#update_qualification').val(user.qualification);
	$('#update_ongoingsites').val(user.ongoing_sites);
	$('#update_completedsites').val(user.completed_sites);

	// if(user.gender != '')
	// $('input:radio[name="update_gender"][value="' + user.gender +'"]').prop('checked', true);
    
	if(user.id != ''){
		var id1 = user.id.substring(0, 4);
		var id2 = user.id.substring(4, 8);
		var id3 = user.id.substring(8, 10);
	}
    if(user.firstname != '' || user.lastname != ''){
		var fn = user.firstname.substring(0, 1);
		var ln = user.lastname.substring(0, 1);
	}
	document.getElementById("sortname").innerHTML= fn+''+ln;
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
    document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("homeshort_nm").innerHTML= user.firstname.substring(0, 1);
	// document.getElementById("pr_valid").innerHTML = 'Valid Thru:'+user.validity;
	document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
	// document.getElementById("pro_id1").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;
	// document.getElementById("pr_valid1").innerHTML=user.validity;

	if(imageExists('https://taghash.co/ACC/uploads/photo_'+localStorage.getItem("usernameatootbandhan")+'.jpg'))
	{
		user.p_photo = 'https://taghash.co/ACC/uploads/photo_'+localStorage.getItem("usernameatootbandhan")+'.jpg'; 
		document.getElementById("update_photo").src = user.p_photo;
		document.getElementById("update_photo_self").src = user.p_photo;
		document.getElementById("update_photo1").src = user.p_photo;
		localStorage.setItem('file_pphoto',user.p_photo);
	}

	/*if(user.p_photo != '')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("update_photo").src = user.p_photo;
			document.getElementById("update_photo1").src = user.p_photo;
			localStorage.setItem('file_pphoto',user.p_photo);
		}
	}
	if(user.adimg_front != 'null')
    {
		if(imageExists(user.adimg_front))
		{
			document.getElementById("update_adharimg_front").src = user.adimg_front;
			localStorage.setItem('adimg_front',user.adimg_front);
		}
	}
	if(user.adimg_back != 'null')
    {
		if(imageExists(user.adimg_back))
		{
			document.getElementById("update_adharimg_back").src = user.adimg_back;
			localStorage.setItem('adimg_back',user.adimg_back);
		}
	}*/

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	var numbers = /^[0-9]+$/;
	/*if(user.state.trim()!='')
	{
		if(user.state.match(numbers))
		{
			$("#update_state_list").val(user.state);
			fetchDistrictlist_1(user.state);
		}
		else
		{
	   
			$("#update_state_list option").each(function() {
						  if($(this).text().indexOf(user.state)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
			});
			var sval=$("#update_state_list").val();
			fetchDistrictlist_1(sval);
		 }
	}*/

    
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
    {
		 //$('#profile_divv').css('display','block');
	     //$('#kyc_divv').css('display','none');
		 $.mobile.changePage( "#profilepage", { transition: "flip"} );
    }
    else
    {
		$.mobile.changePage( "#homepage", { transition: "flip"} );

	    /*if(localStorage.getItem("profiledone_atootbandhan"))
		{
			//document.getElementById("profilepts").innerHTML=user.balance;
			if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
			{
				document.getElementById("profilenm").innerHTML= 'Guest';
				document.getElementById("profilenm1").innerHTML='Guest';
			}
			else
			{
				document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts").innerHTML=user.balance;
				document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts1").innerHTML=user.balance;
				//document.getElementById("homeshort_nm").innerHTML= user.firstname.substring(0, 1);
				document.getElementById("pr_valid").innerHTML = 'Valid Thru:'+user.validity;
					
			}
			$.mobile.changePage( "#homepage", { transition: "flip"} );
		}
		else
		{
			 //$('#profile_divv').css('display','block');
			 //$('#kyc_divv').css('display','none');
			 $.mobile.changePage( "#profilepage", { transition: "flip"} );
		}*/
    }
   }else{
		 toast('Authentication failed');
		  $.mobile.changePage( "#login_pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameatootbandhan');
	pwd = localStorage.getItem('passwordatootbandhan');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {

		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
		
	   }
   
    }
  });
 }
}

function loadState_list()
{
	    console.log('statelist12345');
	$.getJSON(
            GSERVER22+'Get_allstate_json_api.asp',
			{

			}, 
		    function (json) {

				 //localStorage.setItem("agappestatejson", JSON.stringify(json));

				 var listItems= "";
				     listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-Select State-</option>";
				     for (var i = 0; i < json.data.length; i++)
					 {
						listItems+= "<option value='" + json.data[i].stateid + "'>" + json.data[i].statename + "</option>";
					 }
				
				     $("#approval_se_state").html(listItems);
					//  $("#update_state_de").html(listItems);
				
	 
	 }).error(function () {  console.log("err in loading state") });
}

function authenticate()
{

  var uname = $('#username').val();
  var pwd = $('#password_myacc').val();
  var phno = localStorage.getItem("phno");
    console.log("uname"+uname);
    console.log("pwd"+pwd);
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd,'phonenos':phno},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.store_code_atootbandhan = data.store_code;
	user.def_store = data.store;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = data.slabid;
    
	user.gender = checkforundefined(data.Gender);
    user.pincode = checkforundefined(data.PostalCode);
	user.address = checkforundefined(data.Address);
	user.state = checkforundefined(data.State);
	user.district = checkforundefined(data.district);
	user.p_photo = checkforundefined(data.ProfilePhoto);
	user.aadhar_no =  checkforundefined(data.aadhar_card_no);
    user.adimg_front = checkforundefined(data.aadhar_front_photo);
    user.adimg_back = checkforundefined(data.aadhar_back_photo);
	user.refer_code = checkforundefined(data.Ref_code);

	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	console.log("user.firstname"+user.firstname);

	console.log("success"+data.status);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameatootbandhan',uname);
   localStorage.setItem('passwordatootbandhan',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.store_code_atootbandhan=='undefined' || user.store_code_atootbandhan=='null' || user.store_code_atootbandhan==null)
			user.store_code_atootbandhan = 'HO-001';

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    /*var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';*/
		
		//$('#update_dd').val(dd);
		//$('#update_mm').val(mm);
		//$('#update_yyyy').val(yyyy);

	$('#update_email').val(user.emailid);
	//$('#update_city').val(user.city);
	//$('#update_state').val(user.state);
	$('#update_pincode').val(user.pincode);
	$('#update_aadharno').val(user.aadhar_no);
	$('#update_address').val(user.address);
	$('#update_refercode').val(user.refer_code);

	if(user.gender != '')
	$('input:radio[name="update_gender"][value="' + user.gender +'"]').prop('checked', true);

     
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
	document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("homeshort_nm").innerHTML= user.firstname.substring(0, 1);
	document.getElementById("pr_valid").innerHTML = 'Valid Thru:'+user.validity;
	/*document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/



	if(user.p_photo != 'null')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("update_photo").src = user.p_photo;
			//document.getElementById("home_user_pic_main").src = user.p_photo;
			document.getElementById("cardImagemenu").src = user.p_photo;
			localStorage.setItem('file_pphoto',user.p_photo);
		}
	}
	if(user.adimg_front != 'null')
    {
		if(imageExists(user.adimg_front))
		{
			document.getElementById("update_adharimg_front").src = user.adimg_front;
			localStorage.setItem('adimg_front',user.adimg_front);
		}
	}
	if(user.adimg_back != 'null')
    {
		if(imageExists(user.adimg_back))
		{
			document.getElementById("update_adharimg_back").src = user.adimg_back;
			localStorage.setItem('adimg_back',user.adimg_back);
		}
	}

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	var numbers = /^[0-9]+$/;
	if(user.state.trim()!='')
	{
		if(user.state.match(numbers))
		{
			$("#update_state_list").val(user.state);
			fetchDistrictlist_1(user.state);
		}
		else
		{
	   
			$("#update_state_list option").each(function() {
						  if($(this).text().indexOf(user.state)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
			});
			var sval=$("#update_state_list").val();
			fetchDistrictlist_1(sval);
		 }
	}

    
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
    {
		 //$('#profile_divv').css('display','block');
		 //$('#kyc_divv').css('display','none');
		 $.mobile.changePage( "#profilepage", { transition: "flip"} );
    }
    else
    {

		$.mobile.changePage( "#homepage", { transition: "flip"} );

	    /*if(localStorage.getItem("profiledone_atootbandhan"))
		{
			//document.getElementById("profilepts").innerHTML=user.balance;
			if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
			{
				document.getElementById("profilenm").innerHTML= 'Guest';
				document.getElementById("profilenm1").innerHTML='Guest';
			}
			else
			{
				document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts").innerHTML=user.balance;
				document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts1").innerHTML=user.balance;
				//document.getElementById("homeshort_nm").innerHTML= user.firstname.substring(0, 1);
				document.getElementById("pr_valid").innerHTML = 'Valid Thru:'+user.validity;
					
			}
			$.mobile.changePage( "#homepage", { transition: "flip"} );
		}
		else
		{
			// $('#profile_divv').css('display','block');
			 //$('#kyc_divv').css('display','none');
			 $.mobile.changePage( "#profilepage", { transition: "flip"} );
		}*/
    }
   }
   else
   {
		  toast('Authentication failed');
		  $.mobile.changePage( "#login_pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameatootbandhan');
	pwd = localStorage.getItem('passwordatootbandhan');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {

		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
		
	   }
   
    }
  });
 }
}

function authenticate_se()
{

  var uname = $('#username_se').val();
  var pwd = $('#password_myacc_se').val();
  var phno = localStorage.getItem("phno");
    console.log("uname:"+uname);
    console.log("pwd:"+pwd);
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else
 {

  $.ajax({
   url: SERVER2+'forgot_pswd_dealer_se_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALCKBAPI','apipswd':'Ml0yalCKBAP!2!','login_name': uname, 'user_pwd': pwd,'Status_flag':'1'},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

     console.log('data'+JSON.stringify(data));

	    if(data.error.length>0)
		{
			toast('Authentication failed');

			localStorage.removeItem('usernamemloyal_ex');
			localStorage.removeItem('userpassloyal_ex');
			
			$('#username_se').val('');
			$('#password_myacc_se').val('');

		}
		else
		{
			//toast(data.data);

			store.secode = data.SEdata[0].SE_code ;
			store.sename = data.SEdata[0].SE_name;
			//store.storemobile = data.SEdata[0].SE_mobile;

			document.getElementById("user_id_se").innerHTML='CSO Code '+store.secode;
    		//document.getElementById("user_id1_se").innerHTML='SE Code '+store.secode;
			document.getElementById("profilenm_se").innerHTML= store.sename;
			document.getElementById("profilenm1_se").innerHTML= store.sename;

			localStorage.setItem('usernamemloyal_ex',uname);
			localStorage.setItem('userpassloyal_ex',pwd);

			localStorage.setItem('store_code_se',uname);
			localStorage.setItem("usermtype_ex",localStorage.getItem('cattype_ex'));

			var new_app=localStorage.getItem('latestApp');

		    if(new_app==null || new_app=='')
			new_app='true';


			if(new_app=='true')
			{
				$.mobile.changePage( "#homepage_se", { transition: "none"} );
			}
			else
			{
				$.mobile.changePage( "#downpage", { transition: "none"} );
			}


		}
    
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('se auth:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
 }
}

function authenticate_new_none()
{

  var uname = $('#username_new').val();
  var pwd = $('#password_myacc_new').val();
  var phno = localStorage.getItem("phno");
    console.log("uname"+uname);
    console.log("pwd"+pwd);
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd,'phonenos':phno},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.store_code_atootbandhan = data.store_code;
	user.def_store = data.store;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = data.slabid;

	user.pincode = checkforundefined(data.PostalCode);
	user.city = checkforundefined(data.City);
	//user.age = checkforundefined(data.age);
	user.locationn = checkforundefined(data.floor_flat);
	user.address = checkforundefined(data.street);
	//user.gender = checkforundefined(data.gender);

	user.state = checkforundefined(data.State);
	user.gst_no = checkforundefined(data.GSTNo);
	user.pan_no = checkforundefined(data.Pan_card_no);
	user.aadhar_no = checkforundefined(data.aadhar_card_no);


	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	console.log("firstname:"+user.firstname);
    
    $('#username_new').val('');
    $('#password_myacc_new').val('');

	$('#update_password').val(pwd);
	$('#update_conpassword').val(pwd);
  
   localStorage.setItem('usernameatootbandhan',uname);
   localStorage.setItem('passwordatootbandhan',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
			user.firstname = '';
	 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
			user.lastname = '';
	 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
			 user.emailid = '';
	 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
			 user.dob = '';
	 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
			user.mobile = '';
	 if(user.store_code_atootbandhan=='undefined' || user.store_code_atootbandhan=='null' || user.store_code_atootbandhan==null)
			user.store_code_atootbandhan = 'HO-001';

	$('#update_firstname').val(user.firstname);
	//$('#update_lastname').val(user.lastname);

	var dob = user.dob.split('-');
    var mm = dob.length == 3 ? dob[1] : '';
	var dd = dob.length == 3 ? dob[0] : '';
	var yyyy = dob.length == 3 ? dob[2] : '';
		
	/*$('#update_dd').val(dd);
	$('#update_mm').val(mm);
	$('#update_yyyy').val(yyyy);
	$('#update_dob').val(user.dob);*/

	$('#update_email').val(user.emailid);
	$('#update_pincode').val(user.pincode);
	$('#update_city').val(user.city);
	//$('#update_age').val(user.age);
	$('#update_address').val(user.locationn);
	$('#update_address_main').val(user.address);
  
	//$('#update_state').val(user.state);
	$('#update_state_list').val(user.state);
	$('#update_gstno').val(user.gst_no);
	$('#update_pancardno').val(user.pan_no);
	$('#update_aadharno').val(user.aadhar_no);



	/*if(user.gender == '')
	{
		$('input:radio[name="update_gender"][value="Male"]').prop('checked', true);
	}
	else
	{
		$('input:radio[name="update_gender"][value="' + user.gender +'"]').prop('checked', true);
	}*/
	

     //$('#push_reg_no').val(reg_id);

	
	document.getElementById("profilenm").innerHTML= user.firstname;
	//document.getElementById("trans_nm").innerHTML= user.firstname+' '+user.lastname;
	//document.getElementById("profilepts").innerHTML=user.total;
	document.getElementById("profilenm1").innerHTML=user.firstname;
	//document.getElementById("profilenm_mloyal").innerHTML=user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.total;
	document.getElementById("trans_pts").innerHTML=user.total;
	
    
	/*var existmemtype = data.cust_type;
	if(typeof existmemtype == undefined || existmemtype == null || existmemtype == 'null')
		existmemtype = '';
	if((existmemtype != '') && (existmemtype != localStorage.getItem('cattype_ex')))
	{
		toast('You are already registered as '+existmemtype);
		$.mobile.changePage( "#selectcategorypage", { transition: "flip"} );
	}
	else
	{*/
    
		if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
		{
			 //$('#userpassdiv').css('display','none');
			 $.mobile.changePage( "#profilepage", { transition: "flip"} );
		}
		else
		{
			if(localStorage.getItem("profiledone_atootbandhan")){
				//document.getElementById("profilepts").innerHTML=user.balance;
			if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
			{
				document.getElementById("profilenm").innerHTML = 'Guest';
				document.getElementById("profilenm1").innerHTML= 'Guest';
				//document.getElementById("trans_nm").innerHTML= 'Guest';
				//document.getElementById("profilenm_mloyal").innerHTML= 'Guest';
			}
			else
			{
				document.getElementById("profilenm").innerHTML= user.firstname;
				//document.getElementById("trans_nm").innerHTML= user.firstname+' '+user.lastname;
				//document.getElementById("profilepts").innerHTML=user.balance;
				document.getElementById("profilenm1").innerHTML=user.firstname;
				//document.getElementById("profilenm_mloyal").innerHTML=user.firstname+' '+user.lastname;
				document.getElementById("profilepts1").innerHTML=user.balance;
				document.getElementById("trans_pts").innerHTML=user.balance;
					
			}

			$.mobile.changePage( "#homepage", { transition: "flip"} );
			//popupstart_check();
			
			}
		    else
			{
			  //$('#userpassdiv').css('display','none');
		      $.mobile.changePage( "#profilepage", { transition: "flip"} );
			}
		}
   //}

   }else{
		  toast('Authentication failed');
		  $.mobile.changePage( "#login_pg_new", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameatootbandhan');
	pwd = localStorage.getItem('passwordatootbandhan');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
	user.store_code_atootbandhan = localStorage.getItem('store_code_atootbandhan');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
	if(localStorage.getItem("imagedata")!=null)
	   {
		document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
		
	   }
	if(localStorage.getItem("cardPic")==null || localStorage.getItem("cardPic")=='null' || localStorage.getItem("cardPic")=='undefined' )
	   {
		//document.getElementById("cardImage").src = 'img/person_img.png';
		//document.getElementById("cardImagepunch").src = 'img/person_img.png';
		
	   }
	else
	   {
		//document.getElementById("cardImage").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
		//document.getElementById("cardImagepunch").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
	   }
   
    }
  });
 }
}

function get_confirm_updateProfile()
{
		 if($("#tnc-chck2").is(":checked"))
		 {
			updateProfile();
		 }
		 else
		 {
			toast('Please agree to all terms and conditions');	 
		 }
}

function checkgst()
{

  var gstno = $('#update_gstnno').val();
  
  if(gstno.length!=15)
  {
		toast('Please enter valid GST No.');
		$('#update_gstnno').val('');
  }
  else
  {
	  // do nothing
  }

}

function updateProfile()
{

		var firstname = $('#update_firstname').val();
		var lastname = $('#update_lastname').val();
		var mobile = user.mobile;
		var email = $('#update_email').val();
		var address = $('#update_address').val();
		var manpower = $('#update_manpower').val();
		var infrastructure = $('#update_infrastructure').val();
		var expertise = $('#update_expertise').val();
		var bankacounto = $('#update_bankacounto').val();
		var gstnNo = $('#update_gstnno').val();
		var qualification = $('#update_qualification').val();
		var ongoingsites = $('#update_ongoingsites').val();
		var completedsites = $('#update_completedsites').val();
	
		var mm ='';
		var dd ='';
		var dd1 ='';
		var yyyy = '';
		var yyyy1 = '';
        

		//var gender = $('input[name="update_gender"]:checked').val();
		
		//var city = $('#update_city').val();
		//var pincode = $('#update_pincode').val();
		//var state = $('#update_state_list').val();
		//var aadharno = $('#update_aadharno').val();
		//var dist = $('#update_district option:selected').text();
		//var refercode = $('#update_refercode').val();

		var selfimg = checkforundefined(localStorage.getItem('file_pphoto'));
		//var adimg_front = localStorage.getItem('adimg_front');
		//var adimg_back = localStorage.getItem('adimg_back');
	    //var docimg = localStorage.getItem('file_pdoc');

		var birthday = $('#update_dob').val();
		// console.log(birthday);
			// dd = dob.length == 3 ? dob[0] : '';
			
		if(birthday!=''){
			var dob = birthday.split('-');
			// console.log(dob);
			dd = dob[2];
			mm = dob[1];
			yyyy = dob[0];		
		}
		// console.log(mm +'/'+ dd +'/'+yyyy);
		// if(dd.length==4){
		// 	yyyy=dd1;
		// 	dd=yyyy1;
		// }
        
		
		//var city = $('#update_city').val();
		//var state = $('#update_state').val();
		//var state_dd = $('#update_state_list').val();

		//var gender = $('input[name="update_gender"]:checked').val();

		/*var birthday = $('#update_dob').val();
		var dob = birthday.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[2] : '';
		var yyyy = dob.length == 3 ? dob[0] : '';*/
		//var devid=$('#push_reg_no').val();
		/*var mm = $('#update_mm').val();
		var dd = $('#update_dd').val();
		var yyyy =$('#update_yyyy').val();*/

		var mandate=false;

		if(firstname.trim()=='' || lastname.trim()=='' || email.trim()=='')
		{
			mandate=true;
		}
		else
		{
			mandate=false;
		}
		
    if(mandate)
	{
		toast('Please enter mandatory fields.');
	}
	else if(birthday='')
	{
		toast('Please enter mandatory fields.');
	}
	/*else if(selfimg=='')
	{
		toast('Please upload profile photo');
		$('#update_photo').focus();
		$('#update_photo').scrollIntoView();
	}*/
	// else if($('#update_state_list').val()==null)
    // {         
    //        toast('Please select state');
    //        $('#update_state_list').focus();
    //        $('#update_state_list').scrollIntoView();
    // }
	// else if($('#update_district').val()==null)
    // {       
    //        toast('District cannot be blank');
    //        $('#update_district').focus();
    //        $('#update_district').scrollIntoView();
    // }
	/*else if($('#update_aadharno').val().trim()=='')
	{
							
		toast('Please fill Aadhar No');
		$('#update_aadharno').focus();
		$('#update_aadharno').scrollIntoView();
	}
	else if(adimg_front=='')
	{
		toast('Please upload adhar front photo');
		$('#update_adharimg_front').focus();
		$('#update_adharimg_front').scrollIntoView();
	}
	else if(adimg_back=='')
	{
		toast('Please upload adhar back photo');
		$('#update_adharimg_back').focus();
		$('#update_adharimg_back').scrollIntoView();
	}*/
	else
	{
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': firstname,
				'lastName': lastname,
				'deviceid': reg_id,
				'cname':'',
				'mobileno': mobile,
				'Emailid': email,
				//'cust_type': localStorage.getItem('cattype_gd'),
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
                'deviceType': deviceType,
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'storecd': 'HO-001',
				'floor_flat': address,
				'manpower': manpower,
				'Infrastructure': infrastructure,
				'expertise': expertise,
				'accounto': bankacounto,
				'gstno': gstnNo,
				'qualification': qualification,
				'ongoingsites': ongoingsites,
				'completeSites': completedsites,
				'profilephoto': selfimg
				// 'gender': gender,
				// 'FlatNo': '',
				// 'PostalCode': pincode,
				// 'City': '',
				// 'District': dist,
				// 'State': state
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_atootbandhan","Yes");
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						//user.dob=dd+"-"+mm+"-"+yyyy;
						//user.age = age;
						//user.address = address;
						//user.gender = gender;

						//user.pincode = pincode;
						//user.def_city_name = city;
						//user.age = checkforundefined(data.age);
						//user.locationn = address;
						//user.address = checkforundefined(data.floor_flat);
						//user.gender = checkforundefined(data.gender);

						/*user.state = state_dd;
						user.gst_no = gstno;
						user.pan_no = pancardno;
						user.aadhar_no = checkforundefined(aadharno);*/
						

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
	//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
	{
		document.getElementById("profilenm").innerHTML= 'Guest';
		document.getElementById("profilenm1").innerHTML='Guest';
		//document.getElementById("trans_nm").innerHTML= 'Guest';
		//document.getElementById("profilenm_mloyal").innerHTML= 'Guest';
	}
	else
	{
		var uuu = '';
	for(var i=0;i<user.id.length;i++){
		console.log(user.id);
	 if(i%4==2)
		{
			uuu = uuu + user.id.charAt(i) +'  ';
		}
	 else
		{
			uuu = uuu + user.id.charAt(i);
		}
	}
		document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
		// document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
		//document.getElementById("homeshort_nm").innerHTML= user.firstname.substring(0, 1);
		document.getElementById("pr_valid").innerHTML = 'Valid Thru:'+user.validity;
		//document.getElementById("trans_nm").innerHTML= user.firstname+' '+user.lastname;
		document.getElementById("profilepts").innerHTML=user.balance;
		document.getElementById("pro_id").innerHTML=uuu;
		//document.getElementById("profilenm1").innerHTML=user.firstname;
		//document.getElementById("profilenm_mloyal").innerHTML=user.firstname+' '+user.lastname;
		//document.getElementById("profilepts1").innerHTML=user.balance;
		//document.getElementById("trans_pts").innerHTML=user.balance;
	}
				
				
		$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function updateProfile_kyc()
{
		
		var aadharno = $('#update_aadharno').val();

		var adimg_front = localStorage.getItem('adimg_front');
		var adimg_back = localStorage.getItem('adimg_back');

		
	if($('#update_aadharno').val().trim()=='')
	{
							
		toast('Please fill Aadhar No');
		$('#update_aadharno').focus();
		$('#update_aadharno').scrollIntoView();
	}
	else if(adimg_front=='')
	{
		toast('Please upload adhar front photo');
		$('#update_adharimg_front').focus();
		$('#update_adharimg_front').scrollIntoView();
	}
	else if(adimg_back=='')
	{
		toast('Please upload adhar back photo');
		$('#update_adharimg_back').focus();
		$('#update_adharimg_back').scrollIntoView();
	}
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalkycupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'mobileno': user.mobile,
				'aadhar_card_no': aadharno,
				'aadhar_front_photo': adimg_front,
				'aadhar_back_photo': adimg_back
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_atootbandhan","Yes");
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your KYC has been submitted successfully.');
						
						user.aadhar_no = checkforundefined(aadharno);
						

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
	//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
	{
		document.getElementById("profilenm").innerHTML= 'Guest';
		document.getElementById("profilenm1").innerHTML='Guest';
		//document.getElementById("trans_nm").innerHTML= 'Guest';
		//document.getElementById("profilenm_mloyal").innerHTML= 'Guest';
	}
	else
	{
		document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
		document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
		//document.getElementById("homeshort_nm").innerHTML= user.firstname.substring(0, 1);
		document.getElementById("pr_valid").innerHTML = 'Valid Thru:'+user.validity;
		//document.getElementById("trans_nm").innerHTML= user.firstname+' '+user.lastname;
		//document.getElementById("profilepts").innerHTML=user.balance;
		//document.getElementById("profilenm1").innerHTML=user.firstname;
		//document.getElementById("profilenm_mloyal").innerHTML=user.firstname+' '+user.lastname;
		//document.getElementById("profilepts1").innerHTML=user.balance;
		//document.getElementById("trans_pts").innerHTML=user.balance;
	}
				
				
		$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

$(document).on('pageinit', '#profilepage_fb', function (event, ui) {

	    console.log("in profilepage");
	
		$(document).on('tap', '#update_button_fb', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		var firstname = $('#update_firstname_fb').val();
		var lastname = $('#update_lastname_fb').val();
		var mobile = user.mobile;
		var email = $('#update_email_fb').val();
		var mm;
		var dd;
		var yyyy;
		if(user.dob!=null || user.dob !='null')
			{
		var birthday = $('#update_dob_fb1').val();
		var dob = birthday.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
			}
		else
			{
			mm = $('#update_mm1').val();
		    dd = $('#update_dd1').val();
		    yyyy =$('#update_yyyy1').val();
			}

    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
                deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				console.log("data:"+data);
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						$('#update_response_msg_fb').html('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;

				}
				else if(data=='Failed')
					$('#update_response_msg_fb').html('Update failed.');
				else
					$('#update_response_msg_fb').html(data);
					

					//showHome();
					//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
		document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Points';
		if(parseInt(user.balance)<=10000){
			document.getElementById("category_img").src="img/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=20000){
			document.getElementById("category_img").src="img/gold.png";
		}
		else{
			document.getElementById("category_img").src="img/platinum.png";
		}
	}
                $.mobile.changePage( "#homepage", {transition: "flip"} );
		        
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
		
	});
	if($('#update_firstname_fb').val()=='' || $('#update_firstname_fb').val()=='null' || $('#update_firstname_fb').val()==null || $('#update_firstname_fb').val()=='undefined')
	{
		        $('#update_firstname_fb').val(user.firstname);
	            $('#update_lastname_fb').val(user.lastname);
	
	            $('#update_email_fb').val(user.emailid);
				try{
				if(user.dob!=null || user.dob!='null' || user.dob==' ')
					{
					$('#updt_1').css('display','none');
	                $('#update_dob_fb1').val(user.dob);
                    $('#updt_2').css('display','block');
					}
					else
					{
					$('#updt_2').css('display','none');
	               // $('#update_dob_fb1').val(user.dob);
                    $('#updt_1').css('display','block');
					}
				}catch(err)
		        {
					txt="There was an error on this page.\n\n"; 
					txt+="Error description: " + err.message + "\n\n"; 
					alert(txt);
				}
	}
	});





$(document).on('pageinit', '#profile', function (event, ui) {

	    //console.log("in profilepage");
		
	
		$(document).on('tap', '#update_button1', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		var firstname = $('#update_firstname1').val();
		var lastname = $('#update_lastname1').val();
		var mobile = user.mobile;
		var email = $('#update_email1').val();
		var birthday = $('#update_dob1').val();
		var dob = birthday.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[2] : '';
		var yyyy = dob.length == 3 ? dob[0] : '';
		//var devid=$('#push_reg_no').val();
		

		
    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
                deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						$('#update_response_msg1').html('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						//user.dob=mm+"-"+dd+"-"yyyy;

				}
				else if(data=='Failed')
					$('#update_response_msg1').html('Update failed.');
				else
					$('#update_response_msg1').html(data);
					


				//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
		document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Points';
		if(parseInt(user.balance)<=10000){
			document.getElementById("category_img").src="img/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=20000){
			document.getElementById("category_img").src="img/gold.png";
		}
		else{
			document.getElementById("category_img").src="img/platinum.png";
		}
	}
				$.mobile.changePage( "#homepage", {transition: "flip"} );
               
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
	});
	});


function aboutprg(){
	

	    $("#navBdr").css('display', 'none');
        $("#navBdr_about").css('display', 'block');
        $("#navBdr_coupon").css('display', 'none');
        $("#navBdr_points").css('display', 'none');

		$("#MESSAGES").css('display', 'none');
		$("#ABOUT").css('display', 'block');
		$("#COUPONS").css('display', 'none');
		$("#POINTS").css('display', 'none');
		renderTemplatedetail('aboutus');
		//document.getElementById("barcontentplist").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
        
        $.mobile.changePage( "#mloyalpg", {transition: "flip"} );
  }   

function showInbox(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	//document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	//document.getElementById("headername").innerHTML='Messages';
	//var main = document.getElementById("cardcontent");
	//main.style.display = 'none';
	$("#navBdr").css('display', 'block');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'block');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'none');
   
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('inbox', 'msg_history_json.asp');
	}
}
function showLoyalty(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Points';
	 var main = document.getElementById("cardcontent");
	main.style.display = 'none';*/
	$("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'block');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'block');
    
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('loyalty', 'points_history_json.asp');
	}
}
function showCoupons(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Coupons';
	
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';*/
	$("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'block');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'block');
    $("#POINTS").css('display', 'none');
   
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('coupons', 'cpns_history_json.asp');
	}
}
function showRewards(){
	 
	openInWebView('https://atootbandhan.mloyalretail.com/microsite/');
	//RewardsNA();
	/*
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	 document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn_star.png" class="mem_acc_icon_rewardstore"></span><span><a href="javascript:showcategories();"><img src="img/menu_icon.png" class="rewardstore_menu"></a></span>';
     document.getElementById("headername").innerHTML='Rewardstore';
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';
	$.mobile.changePage( "#page-card", { transition: "none"} ); 
	showTabContent('rewardstore', 'coupons_json.asp');
	
	$("a[data-role='button']").button();
	}*/
}
function showcategories(){

    $.mobile.changePage( "#reward-cat", { transition: "none"} ); 
	showTabContent('reward-cat', 'categories_json.asp');
}
function showcatbrands(catid){
    $.mobile.changePage( "#reward-brand", { transition: "none"} ); 
	showTabContent('reward-brand', 'coupons_json.asp?cat_id='+catid);
}
function viewcart(){
	var main = document.getElementById("cardcontent");
	main.style.display = 'none';
	$.mobile.changePage( "#page-card", { transition: "none"} ); 
	  renderTemplate('viewcart',cart);
	  $("a[data-role='button']").button();

	 
}

function showSpecial()
{


       $.mobile.changePage( "#whatsnew", { transition: "none"} ); 

		/*$.mobile.changePage( "#specials", { transition: "none"} );
		//document.getElementById("left-panel").panel( "close" );
		try{
		$( "#sidebar" ).panel( "close" );
		}catch(err) 
		{	}
		
		showTabContent('specials', 'specials_json.asp');*/

}

function gobackfromstore()
{
    if(backstore=='home')
    {
        showHome1();
    }
    else if(backstore=='store')
    {
        showStores();
    }
}

function showStores(){
	
	backstore = 'home';
	//document.getElementById("barcontentstores").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby</span></a>';
	
	$.mobile.changePage( "#stores", { transition: "none"} );
	
	showTabContent('citylist', 'city_locator_json.asp');


}

function getCityId(id)
{
       city_id=id;
	   backstore = 'store';
	   $.mobile.changePage( "#stores", { transition: "none"} );
	   showTabContent('centre', 'store_locator_json.asp?city='+city_id);
	  
      
}


function showTabContent_Map(addr,ind) {
var url="http://delhidaredevilsadda.com/latlong.php";
 console.log(url+'&addr='+addr);
	$.getJSON(
		url, {
		//page: url,
		addr : addr
	}, function (json) {
       console.log("SSSS"+JSON.stringify(json));
	  
	    
		var lat,lng;
		try
		{
		lat=json.results[0].geometry.location.lat;
		lng=json.results[0].geometry.location.lng;	
		}
		catch (err)
		{
			lat="";
			lng="";
		}
        
		
		if(lat !="" && lng !="")
			{
			 drawMap(new google.maps.LatLng(lat, lng),ind);
			//openInWebView('http://maps.google.com/maps/api/staticmap?center='+lat+','+lng+'&zoom=14&amp;size=304x250&scale=2&amp;sensor=false&markers=color:green|'+lat+','+lng+'&key=AIzaSyCAAjJ5FAg8NmaZ9594yQXq-t1HzcgYocs&size=279x183');
			}
			else
			{
				toast("Location could not be traced");
			}
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

   function drawMap(latlng,index) {
	   
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
			alert(index);

			var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById(index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }



function showTabContent_Map1(addr) {
var url="http://maps.googleapis.com/maps/api/geocode/json";
	$.getJSON(
		url, {
		//page: url,
		latlng : addr,
		sensor : 'false'
	}, function (json) {
       //console.log("SSSS"+JSON.stringify(json.results[0].address_components[3]));
		
		for(var i=0;i<json.results[0].address_components.length;i++)
		{
		console.log("SSSS"+JSON.stringify(json.results[0].address_components[i].types[0]));
		if(json.results[0].address_components[i].types[0]=='locality')
			{
        var cityname= json.results[0].address_components[i].long_name;
        if(cityarr.indexOf(cityname))
				{
			  var j = cityarr.indexOf(cityname);
			  getCityId(cityidarr[j]);
				}
			}
		}
		
		
		
		
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

function showTabContent(id, url) {
console.log("url"+url);
var tabserver='';
    if(id=='rewardstore' || id=='reward-cat' || id=='reward-brand')
	{
		tabserver = "https://atootbandhan.mloyalretail.com/Rewards/";
	}
    else
	{
		tabserver = "https://atootbandhan.mloyalretail.com/m/";
	}
	$.getJSON(
		tabserver+url, {
		//page: url,
		mno : user.mobile
	}, function (json) {
       console.log("SSSS"+JSON.stringify(json));
			
		renderTemplate(id, json);
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

function openInWebView(url)
	{
	
          //var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#482a1f'
    },
    toolbar: {
        height: 75,
        color: '#482a1f'
    },
    title: {
        color: '#ffffff',
  staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'img/leftMenu_back.png',
        wwwImagePressed: 'img/leftMenu_back.png',
        align: 'left',
  marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


	}


function renderTemplate(pageID, json) {
	var str = '';
	var str1 = '';
	var oth = document.getElementById("othercontent");
    var main = document.getElementById("cardcontent");

	console.log('pageID'+pageID);
	switch (pageID) {
	case 'loyalty':
				
		str += '<br/><div class="pts_new"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';
        str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="eIcon"><span>Earned Points :' + json.earnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></a>';
        str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/redeemed-points.png" alt="img" class="rIcon"><span>Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsBonus" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="rIcon"><span>Bonus Points :' + json.bonuspoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
	
		//str += '<a href="#" id="ptsEarn1" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="eIconT"><span class="ernPt1">Earned Points :' + json.earnpoints + '</span><span class="rdmPt1">Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt1">My Purchase History</span></a>';
		
		
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Purchase History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.data[i].burn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].burn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("points").innerHTML=str;   
		
		
		break;

	case 'loyaltynew':
		
	    str += '<div class="p-3">';
		str += '<div class="pts"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';

		str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Earned Points : ' + json.earnpoints + '</span></a>';
		str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/pointredused.png" alt="img" class="eIcon"><span>Redeemed Points : ' + json.burnpoints + '</span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Bonus Points : ' + json.bonuspoints + '</span></a>';
		str += '</div>';
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Earned History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.redeem.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.redeem[i].redeempoints+'</span></span>  <span class="cap_date">'+json.redeem[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.redeem[i].redeempoints+'</td><td>'+json.redeem[i].billnumber+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("points_div").innerHTML=str;   
		
		
		break;

	case 'specials':
		console.log(JSON.stringify(json));

		if(json.length == 0)
		{
			str = '<div style="text-align:center;">No Events Found</div>';
		}
		else
		{
			str += '<div class="whats_new_slider owl-carousel owl-theme">';

			for (var i=0;i<json.length;i++ )
			{
			
			    console.log('Video:'+json[i].AdVideoURL);
			    if(json[i].AdVideoURL=='' || json[i].AdVideoURL==null  || json[i].AdVideoURL=='null')
				{
				    str += '<div class="wn_offer">';
					str += '<a href="#">';
					str += '<img src='+SERVER+json[i].AdImgURL+' alt="" class="img-responsive" />';
				    str += '</a>';
				    str += '</div>';
				}
				else
				{
					 console.log('Img:'+json[i].AdVideoURL);
					//str += '<div class="whats_new_slider owl-carousel owl-theme">';
					//str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p>';
					str += '<video width="320" height="240" controls="controls" poster='+SERVER+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video>';
					//str += '</div></div>';
					//str += '</div>';
					
				}
			}

			str += '</div>';
		}
        
		document.getElementById("whatsnew_div").innerHTML=str;
		
		var _owl2 = $(".whats_new_slider");
		setTimeout(function(){
 			_owl2.owlCarousel({
				items:1,
						loop:false,
						margin:0,
						//merge:true,
						nav:false,
						dots:false,
						autoplay:true,
						autoWidth:false,
						navText: ['<','>']
			});
		}, 100);

		
		break;
	case 'coupons':
		str = '';


        if (json.data.length == 0) 
		 {
                str = '<span style="text-align:center;margin: 0 auto;display: block;">No Coupons Found</span>';
         }
		else
		 {
		   for(var i=0;i<json.data.length;i++)
		{
            str += '<div class="px-3 pb-3">';

            if(json.data[i].couponstatus == 'Active')
            {
                str += '<div class="coupon active">';
            }
            else
            {
                str += '<div class="coupon inactive">';
            }


			str += '<div class="d-flex align-items-center justify-content-between">';
			str += '<div class="w-80">';
			str += '<h2 class="coupon_code">'+json.data[i].couponcode+'</h2>';
			str += '<h3 class="validity">Valid Till : <span>'+json.data[i].validtill+'</span></h3>';
			str += '<h3 class="coupon_no">Coupon Detail : '+json.data[i].offername+'</h3>';
			str += '<a href="#tnc">T&amp;C* </a>';
			str += '<div class="coupon_state"></div>';
		    str += '</div>';
			str += '<div class="w-20">';
			str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+json.data[i].couponcode+'&choe=UTF-8" alt="" /></div>';
			str += '</div>';
			str += '</div>';

            str += '</div>';
			str += '</div>';
		
		}
		}
		//str += '</ul>';
		document.getElementById("rewards").innerHTML=str;
		break;

	case 'inbox':
		
		console.log('json'+JSON.stringify(json));
		
		str +=' <ul id="MsgUl" class="messages">';
		for(var i=0;i<json.length;i++ )
		{

			str += '<li>';
			str += '<div class="msg_img">';
			str += '<img src="assets/images/open.png" alt="" class="msgImg"/>';
			str += '</div>';
			str += '<div class="MsgBlk">';
			str += '<div class="MsgBdr">';
			str += '<span class="msghdr">DM-atootbandhan</span>';
			str += '<span class="msgTime">'+json[i].msgtime+'</span>';
			str += '<span class="msgDate">' + json[i].msgdate + '</span>';
			str += '</div>';
			str += '<div class="msg_body">';
			str += '<span class="msgTxt">'+json[i].msg+'</span>';
			str += '</div>';
			str += '</div>';
			str += '</li>';
	
		}
		
		str +='</ul>';
		document.getElementById("message").innerHTML=str;
		break;


		case 'centre':
   //console.log('inside centre');
      console.log('json'+JSON.stringify(json));
  
  str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
  for (var i=0;i<json.length;i++ )
  {
   var storecontact=json[i].storephone;
   var custcare=json[i].CustomerCare;
   if(storecontact==null)
    storecontact='';
   if(custcare==null)
    custcare='';

   if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('ONLINE')==0 || json[i].storename.indexOf('online')==0 || json[i].storename.indexOf('Paytm App Store')==0 || json[i].storename.indexOf('ShortCode')==0 || json[i].storename.indexOf('Mobile App')==0 || json[i].storename.indexOf('Paytm Store')==0|| json[i].storename.indexOf('MicroSite')==0|| json[i].storename.indexOf('test')==0)
				continue;
   
  
      str += '<li data-icon="false" class="storeList"><h3 class="storeName">'+json[i].storename+','+json[i].storelocation+'</h3><span class="callout1">'+json[i].storeaddress+'</span><br/><br/>';
   if(storecontact!='')
   {
   str += '<a href="tel:'+storecontact+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+storecontact+'</a>';
   }
  if(custcare!='')
   {
   str +='<a href="tel:'+custcare+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+json[i].CustomerCare+'</a>';
   }

  //str +='<div  id=map-canvas'+i+' style="height:250px;width:95%;margin: 0 auto;">';

  str +='</li>';



  
  
  //alert(str);
  //str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+json[i].storephone+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
        //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
  //str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
  
  }
  //str +='<div  id=map-canvas'+i+' style="height:250px;width:250px;">';
  str += '</ul>';
  
  document.getElementById("stor").innerHTML=str;

	  /*for (var i=0;i<json.length;i++ )
	  {
			if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('ONLINE')==0 || json[i].storename.indexOf('online')==0 || json[i].storename.indexOf('Paytm App Store')==0 || json[i].storename.indexOf('ShortCode')==0 || json[i].storename.indexOf('Mobile App')==0 || json[i].storename.indexOf('Paytm Store')==0|| json[i].storename.indexOf('MicroSite')==0|| json[i].storename.indexOf('test')==0)
			continue;

			var lat1  = checkforundefined(json[i].storelatitude);
			var long1 = checkforundefined(json[i].storelongitude);
			var add   = lat1+','+long1;
	   

		   showTabContent_Map_latlong(lat1,long1,i);
	  }*/
	   
	 $('#ul_locator_sub').listview();

  break;
		
	case 'defstore':
		//console.log('inside default store'+user.def_store);
	     console.log('json'+JSON.stringify(json));
		//str +='<div  style="text-align:center;width:100%;"><img src="img/c-logo.png" width="137" height="44" /></div>';
		str += '<h2 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Default Store : '+user.def_store+'</h2>';
		str += '<a href="#citylist" data-role="button" data-theme="reset" class="ios">View All Stores</a>';
		str += '<h3 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Other Stores in your city</h3><h3></h3>';
		//$("#" + pageID + " .ui-content").html(str);
		$("#" + pageID + " .ui-content").html(str+$.render[pageID](json));
		$("a[data-role='button']").button();
		break;
	case 'citylist':
		//console.log('inside citylist');
	    console.log('json'+JSON.stringify(json));
		
        str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator" id="ul_locator">';
		for (var i=0;i<json.data.length;i++ )
		{
			if(json.data[i].cityid!='9')
			{
				cityidarr[i]=json.data[i].cityid;
				cityarr[i]=json.data[i].cityname;
				//str +='<a href="javascript:getCityId('+json.data[i].cityid+');" data-role="button"  data-theme="reset" class="ios">'+json.data[i].cityname+'</a>'
				str += '<li data-icon="false"><a href="javascript:getCityId('+json.data[i].cityid+');" class="ui-btn ui-icon-location ui-btn-icon-left ui-shadow ui-corner-all">'+json.data[i].cityname+'</a></li>';
			}
		}
		str += '</ul>';
		document.getElementById("stor").innerHTML=str;
		  
        $('#ul_locator').listview();
		//$("a[data-role='button']").button();
		break;

	case 'merchandise':
	  console.log(JSON.stringify(json));
	  
	  /*str += '<h3>Merchandise</h3>';


	  for (var i=0;i<json.length;i++ )
	  {
			
	   str += '<div><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240"  poster='+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/> <a href="#" data-role="button" id="forgot_button">Order</a></div></div>';

	  }


	  $("#" + pageID + " .ui-content").html(str);*/
	  break;
case 'categorylist':
   console.log(JSON.stringify(json));

  //str = str +'<div class="subheading_t" style="font-size:14px;"><div style="color:#555555;">Welcome '+user.firstname+'</div><div class="submenu_button_right" ><img src="img/coupons.png" style="height:26px;width:auto;"></div></div>';
  str +='<img src="img/rstore.png" style="width:97%;height:auto;"><br/>';
  //str +='<div id="rss_desc1"><ul>';
 // str +='<ul>';
  // for (var i=0;i<json.length;i++ )
  //{
  //str +='<li><a href="javascript:getCatDetails('+json[i].Catid+');" data-theme="reset" class="ios" style="background: url(../img/shop_categoryList.png);height: 78px;color:#000;">'+json[i].CatName+'</a></li>';
  //str +='<li class="s_cn"><a href="javascript:getCatDetails('+json[i].Catid+');" style="background-image: url(../img/s_cn.png);color:#000;text-align:center;">'+json[i].CatName+'</a></li>';
  //}
 // str +='</ul>';
  //str +='</ul></div>';
  $("#" + pageID + " .ui-content").html(str);

  $("a[data-role='button']").button();
   break;
	  case 'rewardsmain':
		
		 $("#" + pageID + " .ui-content").html(str);
		break;
	  case 'viewcart':
		
		//str += '<div class="cartinfo">You have '+json.cartdata.length+' items in your cart</div>';
		
		str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="cartlist">';
        for (var i=0;i<json.cartdata.length;i++ )
		{
		
		
		str += '<li data-icon="delete" data-iconpos="right" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;line-height:90px;"><img src='+json.cartdata[i].url+' style="width: 100px;height: 100px;padding: 5px;"/>'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'<br/><span class="callout1">'+json.cartdata[i].BrandDescription+'</span></li>';
        																																					   
																																							   
		
		//	str +='<li><div class="li-img"><img src='+json.cartdata[i].url+' /></div><div class="li-text"><h4 class="li-head">'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'</h4><br/><p class="li-sub">'+json.cartdata[i].BrandDescription+'</p></div></li>';
            
		}
		str += '</ul>';
		
		str += '<br clear="all" /><a href="#" data-role="button" id="view_cart" class="btnclass">Redeem</a>';
		console.log("str herrrrrr"+str);
		oth.innerHTML=str; oth.style.display = 'block';  
		 $('#cartlist').listview();
		 $('#view_cart').button();
		break;

	case 'rewardstore':
    
  
       
	  jsonary = json.data;
  
  // str += '<div class="ui-content rsbanner"><span class="vouchers"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" class="vouchers" id="vouchers"'+i+'/></a></span><img src="img/featured.png" class="rs_b1" /></div>';
          
  for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><div class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</div></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
   //str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
 //  str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
  //str +='Coming Soon';
  
   oth.innerHTML=str; oth.style.display = 'block';  
    break;
 case 'reward-cat':
   str +='<ul data-role="listview" id="ul_reward-cat" class="ul_shop" data-icon="false" data-iconpos="none">';
   for(var i=0;i<json.data.length;i++)
  {
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands('+json.data[i].catid+');" class="lt_shop_a"><h2>'+json.data[i].catname+'</h2></a></li>';
  }
 str +='</ul>';
 //str +='Coming Soon';
    $("#" + pageID + " .ui-content").html(str);
    $('#ul_reward-cat').listview();
   break;
   case 'reward-brand':
   for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><span class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</span></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
  // str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
   //str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
            $("#" + pageID + " .ui-content").html(str);
   break;
			
    case 'socialwall_youtube':
		
		//str += '<a href=\"javascript:loadDataGal(\''+gallery_cat+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><span><img src=\"img/cheer/refresh.png\" /></span></a></div>';
		
		for (var i=0;i<json.length;i++ )
		{
			//console.log(JSON.stringify(json[i]));
        if(json[i].link!='')
			{

			//console.log(json[i].link[1].href);
			//console.log(json[i].link[1].href.indexOf("videos/")+7);

			//console.log(json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related")));
			

			 str1="http://www.youtube.com/embed/"+json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related"));
			 //console.log(str1);
			
			
				
			   	str += '<div id="rss_desc"><div><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title.t+'</span><HR>';
				
				
					str +='<iframe width="95%" height="240" src='+str1+' frameborder="0" allowfullscreen=""></iframe>';
					str +='<br/>'+json[i].content.t;
					
				 
				  str += '</div></div>';
				
				
			}
		}

		
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_facebook':
		for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].link != '')
                {
                    var fbid=json.data[i].id;
                    
                    
                    
                    var first_part=fbid.substr(0,fbid.indexOf('_'));
                     
                     var sec_part=fbid.substr(fbid.indexOf('_')+1,fbid.length);
                    
                    
                    var linkfbpost='https://www.facebook.com/'+first_part+'/posts/'+sec_part;
                   
                    
                    
				
				var msg=json.data[i].message;
				if(msg=='' || msg=='undefined' || msg==null || msg=='null')
					{
						msg='';
					}
		
				var lk='';
				if(json.data[i].likes)
				{
					lk= json.data[i].likes.data.length;
				}
				else
				{
					lk= '0';
				}
				

				str+='<div class="ui-grid-solo">';
				str+='<div class="ui-block">';
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				//<!--<div class="f_hdr_time" id="f_hdr_time">'+jQuery.timeago(json.data[i].updated_time)+'</div>-->
				//str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.data[i].from.name+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json.data[i].from.category+'</span></div>';
				if(typeof json.data[i].picture !== "undefined" && json.data[i].picture != null)
					{
					str+='<div class="f_feed_bdy"><img src='+json.data[i].picture+' id="f_banner" alt="banner"></div>';
					}
				str+='<div class="f_feed_bdy"><p id="fb_msg">'+msg+'</p></div>';
				str+='<div class=f_feed_ftr><hr class=hori /><div class=f_bdy_lcs><span><img src=img/like.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Like</span><span><img src=img/comment.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Comment</span><span><img src=img/share.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Share</span></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
				str+='</div>';
				str+='</div>';

                }
            }

			document.getElementById("FACEBOOK").innerHTML = str;
            
            break;

		case 'socialwall_twitter':
		for (var i = 0; i < json.length; i++)
            {

               


					str+='<ul class="facebookFeed">';
					str+='<li>';
					str+='<div class="y_feedCon">';
					str+='<div class="ui-grid-a">';
					str+='<div class="ui-block-a" style="width:25%;"><img src="img/twitter.png" alt="twitter" class="y_video"></div>';
					str+='<div class="ui-block-b" style="width:75%;padding-left:10px;">';
					str+='<div class="y_hdr_title">'+json[i].user.name+'</div>';
					//str+='<div class="y_hdr_desc">'+json[i].user.description+'</div>';
					try{
					str+='<div class="f_feed_bdy"><img src='+json[i].entities.media[0].media_url+' id="f_banner" alt="banner" onClick=javascript:openBrowser(\''+json[i].entities.urls.url+'\');></div>';
					}
					catch(err){}
					str+='<div class="y_hdr_desc">'+json[i].text+'</div>';
					//str+='<div class=f_bdy_likes>'+json[i].user.followers_count+' Followers</div>';
					str+='</div></div></div></li></ul>';

                
            }

            document.getElementById("TWITTER").innerHTML = str;

            break;

		case 'socialwall_pinterest':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
				console.log(json[i].name);
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+brandname+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json[i].board.name+'<br>'+json[i].desc+'</span></div>';
				str +='<div class="ui-grid-solo"><div class="ui-block"><img src="'+json[i].src+'" ></div></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
		}
        
        
        document.getElementById("PINTEREST").innerHTML=str;
		break;
		case 'socialwall_tumblr':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="content-responsive">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;

		case 'socialwall_instagram':

		var json = JSON.parse(json)
		var length = JSON.stringify(json.images.length);

		//console.log('instagram: '+JSON.stringify(json));

		for (var i = 0; i < length; i++)
        {
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.full_name+'</span><br/>';
				//str+='<span class="f_hdr_desc" id="f_hdr_desc">'+json.images[i].node.edge_media_to_caption.edges[0].node.text+'</span></div>';
				str +='<img style="border: 1px solid #cccccc;text-align: center;width: 98%;height: auto;" src="'+json.images[i].node.display_url+'" />';
				str+='<div class=f_bdy_likes>'+json.images[i].node.edge_liked_by.count+' Likes</div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';

		}

        document.getElementById("INSTAGRAM").innerHTML = str;

        break;
		
		case 'popuppage4':

       
		for(var i=0;i<json.data.length;i++)
		
		{

		str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
		str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
		str += '<h2>'+json.data[i].offername+'</h2><p>Coupon Code : '+json.data[i].couponcode+'</p></a>';
		str += '</li></ul>';
               
		
		}
		 $("#" + pageID + " .ui-content").html(str);
		break;
		


	}
}


function renderTemplatedetail(pageID) {
var str = '';



	switch (pageID) {
		
		case 'aboutus':

			console.log('cardname:-'+user.firstname+' '+user.lastname);
			//document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
			document.getElementById("cardname").innerHTML = user.firstname;
		    var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
			
			var mobileqr = '';
			if(user.mobile==null || user.mobile=='' || user.mobile=='undefined')
			{
				mobileqr = 'Guest';
			}
			else
		    {
				mobileqr = user.mobile;
			}

		    document.getElementById("cardid").innerHTML = uuu;
		    //document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			//document.getElementById("tpoint").innerHTML = user.balance;
			document.getElementById("barimg").innerHTML = '<img src="https://quickchart.io/qr?text='+mobileqr+'&size=80&margin=2" class="img-responsive" />';

			/*if(user.membership_slab=='1' || user.membership_slab=='')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('baseslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Base Member';
            }
            else if(user.membership_slab=='2')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('silverslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Silver Member';
            }
			else if(user.membership_slab=='4')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('goldslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Gold Member';
            }
			else if(user.membership_slab=='3')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('platinumslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Platinum Member';
            }*/

			setUserbalance_aboutus();
        

			break;

		case 'page-card':
			
			document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpoint").innerHTML = tstr;
			document.getElementById("barimg").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';

			document.getElementById("headername").innerHTML='Membership';
			 
			break;


			case 'page-card-punch':
			
			


						document.getElementById("barcontentpunch").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardnamepunch").innerHTML = user.firstname+' '+user.lastname;
			var pstr='<span style="color:#ffffff;"><br><br>';
			console.log("user.visit_frequency)"+user.visit_frequency);
            //user.visit_frequency='2';
			console.log("parseInt(user.visit_frequency)"+parseInt(user.visit_frequency));
			 for (var k1=0;k1<parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star11.png"/>';
			}
			 for (var k1=0;k1<10-parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star.png"/>';
			}
			pstr +='</span>'
			console.log("pstr"+pstr);



            document.getElementById("card_punches").innerHTML =pstr;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		   
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpointpunch").innerHTML = tstr;
			
			document.getElementById("headernamepunch").innerHTML='Membership';
			break;

		    case 'shop':
            str +='<ul data-role="listview" id="ul_shop" class="ul_shop" data-icon="false" data-iconpos="none">';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S1\');" class="lt_shop_a"><h2>Khazana</h2></a></li>';
            str +='</ul>';
			
            $("#" + pageID + " .ui-content").html(str);
    $('#ul_shop').listview();
   break;
  
	}
	}





function shareMessagefb(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
	window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(msg, null /* img */, null /* url */, brandname, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
}

function shareMessagetw(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
      window.plugins.socialsharing.shareViaTwitter(msg);
}
function shareMessage(msg)
{
	window.plugins.socialsharing.share(msg,brandname);
}

var map;
var geocoder;

    function InitializeMap(lat,longt,ind) 
	{

		var lat = parseFloat(lat);
        var lng = parseFloat(longt);

        var myOptions =
        {
            zoom: 15,
            center: {
				lat: lat,
				lng: lng
			},
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        map = new google.maps.Map(document.getElementById("map-canvas"+ind), myOptions);

    }

    function showTabContent_Map_latlong(lat,longt,i) 
	{
 
        //geocoder = new google.maps.Geocoder();
        InitializeMap(lat,longt,i);

        /*geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });

            }
            else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });*/

    }

function checkforundefined(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='';
    }
        return str;
}

function checkforundefinedPts(str)
{
    if(typeof str==undefined || str=='undefined'||str==null||str=='null' ||str=='')
    {
        str='0';
    }
        return str;
}

function showTabContentRSS(id, url) {
  if(url==json_fb)
	{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json);

     

          localStorage.setItem('facebook_atootbandhan',JSON.stringify(json.item));
     

    

       }).error(function () {
		 try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('facebook_atootbandhan')));
		 }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 
}
if(url==RSS_youtube)
{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.feed.entry);

     

          localStorage.setItem('youtube_atootbandhan',JSON.stringify(json.feed.entry));
     

    

       }).error(function () {
		   try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('youtube_atootbandhan')));
		   }
		   catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_twitter)
{


  $.ajax({
                url: url,
                type: 'GET',
                timeout: 50000,
				dataType: 'json',
                success: function (data, textStatus, xhr) {

				console.log(JSON.stringify(data));
				renderTemplate(id, data);

			
            //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
            localStorage.setItem('twitter_atootbandhan', JSON.stringify(data));
                },
                error: function (xhr, textStatus, errorThrown) {
					var err = eval("(" + xhr.responseText + ")");

					alert(err.Message);

                  try {
				} catch (err)
				{
					renderTemplate(id, JSON.parse(localStorage.getItem('twitter_atootbandhan')));
					//alert('here in catch');
				}
            //alert("Oops network error!!Please try again");
                }
            });


}
else if(url==RSS_pinterest)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.body);
			
     
		  console.log(JSON.stringify(json.body));
          localStorage.setItem('pinterest_atootbandhan',JSON.stringify(json.body));
       

    

       }).error(function () {
		   try{
			    renderTemplate(id,JSON.parse(localStorage.getItem('pinterest_atootbandhan')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 

}
else if(url==RSS_tumblr)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.channel.item);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('tumblr_atootbandhan',JSON.stringify(json.channel.item));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('tumblr_atootbandhan')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_instagram)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.user);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('instagram_atootbandhan',JSON.stringify(json.user));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('instagram_atootbandhan')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}



 
}
//newfeedback
function changeRate(element)
{

	//var tImage = document.getElementById('rate_img');

	if(element=='b_icon1')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','0.4');
		$("#b_icon3").css('opacity','0.4');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='1';
		document.getElementById("fdbk_text").innerHTML='Poor';
		//tImage.src = 'assets/images/rating_img.png';

		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon2')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','0.4');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='2';
		document.getElementById("fdbk_text").innerHTML='Fair';
		
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon3')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='3';
		document.getElementById("fdbk_text").innerHTML='Good';

		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon4')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','1');
		$("#b_icon5").css('opacity','0.4');
		rating='4';
		document.getElementById("fdbk_text").innerHTML='Awesome';
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon5')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','1');
		$("#b_icon5").css('opacity','1');
		rating='5';
		document.getElementById("fdbk_text").innerHTML='Excellent';
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else
	{
		rating='0';
	}
}

function rateFeed(){
	console.log("Rating:"+rating+" by:"+user.mobile);
}

$(document).on('pageshow', '#feedback', function (event, ui) {

	//$('#feed_mobile').val(user.mobile);
	//loadLocation();

});

function submitFeedback_1()
{
	toast('Thanks for submitting your valuable feedback.');
	$.mobile.changePage( "#homepage", { transition: "none"} );
}

function submitFeedback()
{

 var service=$('input[name="service"]:checked').val();
 var product=$('input[name="product"]:checked').val();
 var offers=$('input[name="offers"]:checked').val();
 var store_atmosphere=$('input[name="store_atmosphere"]:checked').val();

 var comments = $('#feedback_enq').val();


 /*if(service==''){
		  toast('Please enter mandatory fields!');
		}
 else{*/

   $.ajax({
    url: SERVER+'feedback_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'html',
    data: {

				'MobileNo': user.mobile,
				'FirstName': '',
				'LastName': '',
				'EmailId': '',       
				'StoreId': '',    
				'Var1': service,   
				'Var2': product,     
				'Var3': offers,
				'Var4': store_atmosphere,    
				'Var5': '',      
				'Var6': '',     
				'Var7': '',        
				'Var8': '',             
				'Var9': '',
				'Var10': '',
				'Var11': '',           
				'Var12': '',
				'Var13': comments,
				'Var14': '',
				'Var15': '',
				'Var16': '',
				'Var17': '',
				'Var18': '',
				'Var19': '',
				'Var20': ''	
					
			},
   
    success: function(data, textStatus, xhr) {

				console.log('JSONDATA:'+JSON.stringify(data));

				toast('Thanks for submitting your valuable feedback.');

				$.mobile.changePage( "#homepage", { transition: "none"} );

				$('input[name="service"]').attr('checked', false);
				$('input[name="service"]').prop('checked',false);
				$('input[name="product"]').attr('checked', false);
				$('input[name="product"]').prop('checked',false);
				$('input[name="offers"]').attr('checked', false);
				$('input[name="offers"]').prop('checked',false);
				$('input[name="store_atmosphere"]').attr('checked', false);
				$('input[name="store_atmosphere"]').prop('checked',false);
				$('#feedback_enq').val('');
    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 //}

}
//ends here

function playvideo(url)
{
	
	//window.plugins.videoPlayer.play("https://www.youtube.com/watch?v=en_sVVjWFKk");
	openInWebView(url); 

}


function mobilecoupon()
{
	var mainpop = document.getElementById('mainpop'); 
    mainpop.style.display = 'none';
	var smallImage = document.getElementById('getbarimage');
    smallImage.style.display = 'none';
	var smallImage1 = document.getElementById('getmobcoupon');
    smallImage1.style.display = 'block';
	$.ajax({
			url: SERVER+'get_active_voucher_api.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				mobileno: user.mobile,
				
							
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						smallImage1.innerHTML = '<div>You will shortly receive a sms with your mobile coupon</div>';
						

				}
			
	
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
	
}

function showRewards1(){
	try{
		popupCloseRight1.remove();
	}catch(err) 
	{	}
		showRewards();
}


function showHome(){
 $.mobile.changePage( "#page-card", { transition: "none"} ); 
 var oth = document.getElementById("othercontent");
 var main = document.getElementById("cardcontent");  
 oth.style.display = 'none';
 main.style.display = 'block';
 try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	
 document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
 document.getElementById("headername").innerHTML='Membership';	
}

function showHome1(){
	//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
		document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Points';
		if(parseInt(user.balance)<=10000){
			document.getElementById("category_img").src="img/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=20000){
			document.getElementById("category_img").src="img/gold.png";
		}
		else{
			document.getElementById("category_img").src="img/platinum.png";
		}
	}
 $.mobile.changePage( "#homepage", { transition: "none"} ); 

 try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	

}

function successHandler (result) {
	//alert('Callback Success! Result = '+result)
	}
function errorHandler(error) {
	 //alert(error);
	}

function receivedEvent(id) {
       

 var push = PushNotification.init({ "android": {"senderID": "1081230587269"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;
                     });
          
                     push.on('notification', function(data) {
						alert(data.message);
					 
						//showInbox();
                     });
          
                     push.on('error', function(e) {
						//alert(e);
                     }
					);
}

function getContacts(){


 try{
 var optFilter = new ContactFindOptions();
 optFilter.filter = "";  // to return all contacts
 optFilter.multiple = true; // return multiple results
 var fields = [navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers];
 
 // get all contacts
 navigator.contacts.find(fields,gcsSuccess, gcsError, optFilter);
 }
 catch(err)
 {
     txt="There was an error loading contacts.\n\n"; 
     txt+="Error description: " + err.message + "\n\n"; 
    // alert(txt); 
    
 }
}

/* get all contacts success */
function gcsSuccess(contacts){
 
 //alert("Contact sync start"+contacts.length);
 if( contacts.length != 0 ){
  // get formatted names and sort
  var names = new Array();
  var contactnos = new Array();
  
  
  for(var i=0; i<contacts.length; ++i){


   if( contacts[i].phoneNumbers == null )
            continue;

   
   
               
           
            
 

   
   if(contacts[i].name){
    var pname = contacts[i].displayName != null ? contacts[i].displayName: "No name";
     names.push(pname);
    
    }

   // display phone numbers
     if (contacts[i].phoneNumbers){
                              var pNumber = contacts[i].phoneNumbers[0].value; 
      
          contactnos.push(pNumber);
     

     }
   
  }
  names.sort();


  
 var contactstr='<label for="choosefrnd" class="select">Choose Friend:</label><select name="choosefrnd" id="choosefrnd"  onchange="if (this.selectedIndex) doSomething(this.selectedIndex);">';
  for(var i=0; i<names.length; ++i){
   contactstr += '<option value='+contactnos[i]+'>'+names[i]+'</option>';
  }
   contactstr += '</select>';

   //alert(contactstr);
   document.getElementById("allContacts").innerHTML=contactstr;

 } else document.getElementById("allContacts").innerHTML='No Contact';
}

/* get all contacts error */
function gcsError(contactError){
 navigator.notification.alert('Contacts Error');
}

function getContactno(i)
{
$('#search-mobile').val(phonenos.get(i));

}
function doSomething(str)
{
 
 var e = document.getElementById("choosefrnd");
    var strmob = e.options[e.selectedIndex].value;

 $('#giftmno').val(strmob);
 
}
function addincart(i)
{
	ids.push(i);
	cart.cartdata.push({ 
   "index":i,
   "url" : "https://atootbandhan.mloyalretail.com/"+jsonary[i].brand_logo,
   "BrandId" : jsonary[i].brand_id,
   "BrandName" : jsonary[i].brand_name,
   "BrandValue" : jsonary[i].gift_voucher_value,
   "BrandDescription":jsonary[i].brand_description,
   "Validity":jsonary[i].end_date,
    });
   
  indexary.push(jsonary[i].brand_id);
  
  $('#cartval').html(ids.length);
}


 $(document).on('tap', '#view_cart', function (e, ui) {

        checkout();
 
 
});


function checkout(){
   var offers='';
  for (var i=0;i<cart.cartdata.length;i++ )
  {
        offers = offers + cart.cartdata[i].BrandId + ',';
  }
  
        offers = offers.substring(0,offers.length-1);

  $.ajax({
    url: 'https://atootbandhan.mloyalretail.com/Rewards/complete.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'offers': offers,'redeemval':'0'},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}

function getVoucher(id,val){

  
  
  $.ajax({
    url: 'https://atootbandhan.mloyalretail.com/Rewards/complete.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'offers': id,'redeemval':val},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}





function showPOPEnApprove(msg){
  
    var $popUp = $("<div id=sharepopnot />").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		//showHome();
		
		
		
        
    }).css({
            'width': '270px',            
            //'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#a9a19c'
    });
    //create a title for the popup
    $("<div />", {
        html: "<span style=\"text-align: center;margin: 0 auto;display: block;\">"+msg+"</span> <div class=\"ui-grid-a mt-30 mb-20\">"+
        "<div class=\"ui-block-solo\" style=\"padding: 0 10px\"> <a href=\"javascript:$('#sharepopnot').remove();resetSalesdata_se();getPending_members_byse();\" class=\"btn btn_primary\" id=\"popnot\">OK</a> </div>"+
      "</div>"
    }).appendTo($popUp);

    //create a message for the popup

		
    //create a back button
    

    $popUp.popup('open').trigger("create");
	
    
 
}

function showPOPTxnApprove(msg){
  
    var $popUp = $("<div id=sharepopnot />").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		//showHome();
		
		
		
        
    }).css({
            'width': '270px',            
            //'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#a9a19c'
    });
    //create a title for the popup
    $("<div />", {
        html: "<span style=\"text-align: center;margin: 0 auto;display: block;\">"+msg+"</span> <div class=\"ui-grid-a mt-30 mb-20\">"+
        "<div class=\"ui-block-solo\" style=\"padding: 0 10px\"> <a href=\"javascript:$('#sharepopnot').remove();resetSalesdata_se_txns();getPending_txns_byse();\" class=\"btn btn_primary\" id=\"popnot\">OK</a> </div>"+
      "</div>"
    }).appendTo($popUp);

    //create a message for the popup

		
    //create a back button
    

    $popUp.popup('open').trigger("create");
	
    
 
}



function showPOPSiteApprove(msg){
  
    var $popUp = $("<div id=sharepopnot />").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing
        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		//showHome();
    }).css({
            'width': '270px',            
            //'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': 'rgb(0 0 0);'
    });
    //create a title for the popup
    $("<div />", {
        html: "<span style=\"text-align: center;margin: -1px auto;padding-top: 20px;display: block;\">"+msg+"</span> <div class=\"ui-grid-a mt-10 mb-10\">"+
        "<div class=\"ui-block-solo\" style=\"padding: 9px 0px 9px 0px;width: 50%;margin-left: 25%;margin-top: -13px;\"> <a href=\"javascript:$('#sharepopnot').remove();resetSalesdata_se_leads();getPending_sites_byse();\" class=\"btn btn_primary\" id=\"popnot\">OK</a> </div>"+
      "</div>"
    }).appendTo($popUp);

    //create a message for the popup

		
    //create a back button
    

    $popUp.popup('open').trigger("create");
	
    
 
}



function showPOPup()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'Please wait...'+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    

    $popUp.popup('open').trigger("create");

}


function giftfriend(){
  var to_mob=$('#giftmno').val();
  var val=$('#giftpt').val();
  $.ajax({
    url: 'https://atootbandhan.mloyalretail.com/m/gift_points_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'tomobileno': to_mob,'gift_points':val},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}

function showRecharge()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'Coming Soon...'+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

function RewardsNA()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#69534A'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'RewardStore is coming soon.\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

$(document).bind('keydown', function(event) {

  if (event.keyCode == 27) { // 27 = 'Escape' keyCode (back button)
    event.preventDefault();
  }
});

function shareApp()
{
	window.plugins.socialsharing.share('Hi, Join atootbandhan Loyalty.', null, 'https://taghash.co/shareimg/atootbandhan.jpg', 'https://atootbandhan.mloyalretail.com/mapp');
}

function rateApp()
{
	var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
		 if (deviceType=='iPad' || deviceType=='iPhone') 
			 {
                //window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8'); // or itms://
				window.open('https://atootbandhan.mloyalretail.com/mapp');
			 } 
		 else if (deviceType=='Android') 
			 {
               window.open("market://details?id=com.mobiquest.atootbandhancso","_system");
				//window.open('http://180.179.202.114:82/mloyalandroid.jsp?brandname='+brandname);
             }
		else if (deviceType=='BlackBerry')
			{
                //window.open('http://appworld.blackberry.com/webstore/content/<applicationid>');
				window.open('https://atootbandhan.mloyalretail.com/mapp');
            }
}

// onSuccess Geolocation
    //
    function onGeoSuccess(position) {
       /* var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';*/
	 var latlng = position.coords.latitude+','+position.coords.longitude;
	 showTabContent_Map1(latlng);
							
    }

    // onError Callback receives a PositionError object
    //
    function onGeoError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

function getNearStores(){
     navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
	 
}

function showPopuppage4(){
$.mobile.changePage( "#popuppage4", { transition: "slide"} ); 
	showTabContent('popuppage4', 'cpns_history_json.asp');
	
	
}

function showshoplinks(str)
{
 $.mobile.changePage( "#innershop", {transition: "flip"} );
 var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
 var the_width = $(window).width();
 var str1='';
	if(str=='S1')
	{
	//openInWebView('http://www.damilano.com/women');
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=1" width='+the_width+' height='+the_height+' /></embed>';
	}
	else if(str=='S2')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=5" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/men');
	}
	else if(str=='S3')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=7" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/leather-accessories');
	}
	else if(str=='S4')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=9" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/business-essentials');
	}
	else if(str=='S5')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=11" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/travel');
	}
	else if(str=='S6')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=4" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/home-195');
	}
	else if(str=='S7')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=6" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');
	}
    else if(str=='S8')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=8" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');

	}
	else if(str=='S9')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=10" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');
	}
    else if(str=='S10')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=12" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');

	}

	document.getElementById("barcontentinnershop").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
    $("#innerdata").html(str1);
 //$("#innershop .ui-content").html(str1);
}

function showFbNew_1()
{
	var ref = window.open('https://www.facebook.com/ACCInd/', '_blank');
}

function showTwitterNew_1()
{
	var ref = window.open('https://twitter.com/acclimited', '_blank');
}

function showInstagramNew_1()
{
	var ref = window.open('https://www.youtube.com/channel/UCEOETWLE_dn6PQ97XmK7b8w', '_blank');
}

function showYoutubeNew_1()
{
	var ref = window.open('https://www.youtube.com/channel/UCLBlzPfQ_YbVw4a93A133gA', '_blank');
}


function showFbNew(){

	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'block');
    $("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'block');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'none');

	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	//showTabContentRSS('socialwall_facebook', json_fb);
	
}

function showTwitterNew(){

	$("#navBdr_twitter").css('display', 'block');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'block');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'none');

	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	showTabContentRSS('socialwall_twitter', RSS_twitter);
    
}

function showInstagramNew(){

	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'block');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'block');
    $("#PINTEREST").css('display', 'none');
	
	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	//showTabContentRSS('socialwall_instagram', RSS_instagram);

	$.instagramFeed({
		'username': 'atootbandhan',
		'get_raw_json': true,
		'callback': displayInstagram
	});
   
  
}

function displayInstagram(json)
{
	//console.log('instagram1:'+json);

	renderTemplate('socialwall_instagram',json);
}

function showYoutubeNew(){

    openInWebView('https://www.youtube.com/');
  
}

function showPinterestNew(){
	
	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'block');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'block');

	$.mobile.changePage( "#socialpg", { transition: "none"} );
	showTabContentRSS('socialwall_pinterest', RSS_pinterest);
	
}


function showShop()
{
    //openInWebView('http://atootbandhan.com/');
	var ref = window.open('https://online.fliphtml5.com/wfadw/dzcp/', '_blank');
   
}

function showShop11()
{

    $.mobile.changePage( "#feedback", { transition: "none"} );
   
}

function loadLocation()
{
   var cityid='';
   $.ajax({
   
   url: SERVER+'store_locator_json.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'city': cityid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
			listItems+= "<option value='0'>--Select--</option>";
            for(var i = 0; i < data.length; i++)
			{
				//if(data[i].storename.indexOf('Email Admin')==0 || data[i].storename.indexOf('ONLINE')==0 || data[i].storename.indexOf('online')==0 || data[i].storename.indexOf('Paytm App Store')==0 || data[i].storename.indexOf('ShortCode')==0 || data[i].storename.indexOf('Mobile App')==0 || data[i].storename.indexOf('Paytm Store')==0 || data[i].storename.indexOf('MicroSite')==0 || data[i].storename.indexOf('test')==0)
				//continue;

                listItems+= "<option value='" + data[i].storecode + "'>" + data[i].storename + "</option>";
             } 
      
			$("#update_dealer_list").html(listItems);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
}

function loadLocation_pincode(pincode)
{
   //var pincode = $('#update_pincode').val();
   var cityid='';

   $.ajax({
    url: SERVER+'store_locator_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'city': cityid, 'pincode': pincode},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
			listItems+= "<option value=''>--Select Distributor*--</option>";
            for(var i = 0; i < data.length; i++)
			{
				//if(data[i].storename.indexOf('Email Admin')==0 || data[i].storename.indexOf('ONLINE')==0 || data[i].storename.indexOf('online')==0 || data[i].storename.indexOf('Paytm App Store')==0 || data[i].storename.indexOf('ShortCode')==0 || data[i].storename.indexOf('Mobile App')==0 || data[i].storename.indexOf('Paytm Store')==0 || data[i].storename.indexOf('MicroSite')==0 || data[i].storename.indexOf('test')==0)
				//continue;

                listItems+= "<option value='" + data[i].storecode + "'>" + data[i].storename + "</option>";
             } 
      
			$("#update_dealer_list").html(listItems);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
}

function drawMap(latlng,index) {
    
        var myOptions = {
            zoom: 2,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        };
   

   var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById('map-canvas'+index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }

function purchaseHistory()
{
	var pop = document.getElementById('purchaseHistory');

	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('redeemHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function redeemHistory()
{
	var pop = document.getElementById('redeemHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function bonusHistory()
{
	var pop = document.getElementById('bonusHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#ff1100",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(1500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}

var toast_p = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#ff1100",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(3500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}


function capturePhoto1()
{
    
			$("input[type=file]").trigger("click");
		
}

$("input[type=file]").change(function(){
			
    
    var aFormData = new FormData();
    
  // alert($("input[type=file]")[0].files[0]);

    aFormData.append("filename", $("input[type=file]")[0].files[0]);
    
    

	aFormData.append("mobile", localStorage.getItem("usernameatootbandhan"));
    aFormData.append("brand", "atootbandhan");
     

	
	$.ajax(
    {
      url         : "http://103.25.128.61:9296/mloyalfileupload/fileupload1.php",
      type        : "POST",
      contentType : false,
      processData : false,
      data        : aFormData,
      success     : 
        function(data)
        {

		  toast("Your picture has been updated..Please reload page to see changes");
   
         document.getElementById("cardImagemenu").src='https://taghash.co/mloyalfileupload/uploads/atootbandhan_'+localStorage.getItem("usernameatootbandhan")+'.jpg';
      //   document.getElementById("cardImage").src='http://103.25.128.61:9296/mloyalfileupload/uploads/atootbandhan_'+localStorage.getItem("usernameatootbandhan")+'.jpg';
        }
    });

	

});


function imageExists(image_url){

    /*var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;*/

	return true;
}

function tokenHandler(result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
    reg_id = result;
    localStorage.setItem("deviceid",reg_id);
    //alert(reg_id);
}

function openBrowser(url)
 {
	
          //var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#482a1f'
    },
    toolbar: {
        height: 75,
        color: '#482a1f'
    },
    title: {
        color: '#ffffff',
		staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'img/leftMenu_back.png',
        wwwImagePressed: 'img/leftMenu_back.png',
        align: 'left',
  marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


}

function logoutApp()
{
	localStorage.clear();
	localStorage.removeItem('usernamemloyal_atootbandhan');
	localStorage.removeItem('usermobilemloyal_atootbandhan');
	
    user.mobile='';
	
    user.mobile='';

	$.mobile.changePage("#page-login-dealer_se");
}

function capturePhotopopup()
{
	$("#popupforPic").popup();
	$("#popupforPic").popup("open");
}

function capturePhotonew()
{
	//$("#popupforPic").popup("close");

	if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} );
		toast('Login to upload image..');
	}
	else
	{
		navigator.camera.getPicture(uploadPhoto, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true });
	}
}

function uploadFromGallery() 
{
	//$("#popupforPic").popup("close");

	if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} );
		toast('Login to upload image..');
	}
	else
	{
		navigator.camera.getPicture(uploadPhoto, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true });
	}

}

function uploadPhoto(imageURI) {

				//$("#wait").css("display", "block");

				toast('Uploading photo..Please wait');

				//document.getElementById("upload_btn").disabled = true;

				var b_Image = document.getElementById('cardImagemenu');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				var fName='atootbandhan_'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm='http://taghash.co/viviana/uploads/'+options.fileName;
				filenm=options.fileName+".jpg";
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

				ft.upload(imageURI, encodeURI("https://taghash.co/mloyalfileupload/fileupload1.php"), win, fail, options, true);
			}

			function win(r) {
				toast('Photo uploaded sucessfully');
			}

			function fail(error) {
				toast("There was an error uploading image");
			}

function showpass1()
{

  var input = $("#password_myacc");

  if (input.attr("type") === "password") 
  {
      input.attr("type", "text");
  } 
  else 
  {
      input.attr("type", "password");
  }
}

function showpass1_se()
{

  var input = $("#password_myacc_se");

  if (input.attr("type") === "password") 
  {
      input.attr("type", "text");
  } 
  else 
  {
      input.attr("type", "password");
  }
}

function showpass1_new()
{

  var input = $("#password_myacc_new");

  if (input.attr("type") === "password") 
  {
      input.attr("type", "text");
  }
  else 
  {
      input.attr("type", "password");
  }
}

/* new */

function getCodeBoxElement(index) {
        return document.getElementById('codeBox' + index);
      }
      function onKeyUpEvent(index, event) {
        const eventCode = event.which || event.keyCode;
        if (getCodeBoxElement(index).value.length === 1) {
          if (index !== 6) {
            getCodeBoxElement(index+ 1).focus();
          } else {
            getCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
          }
        }
        if (eventCode === 8 && index !== 1) {
          getCodeBoxElement(index - 1).focus();
        }
      }
      function onFocusEvent(index) {
        for (item = 1; item < index; item++) {
          const currentElement = getCodeBoxElement(item);
          if (!currentElement.value) {
              currentElement.focus();
              break;
          }
        }
      }	
      function getDealerCodeBoxElement(index) {
        return document.getElementById('dealercodeBox' + index);
      }
      function onDealerKeyUpEvent(index, event) {
        const eventCode = event.which || event.keyCode;
        if (getDealerCodeBoxElement(index).value.length === 1) {
          if (index !== 6) {
            getDealerCodeBoxElement(index+ 1).focus();
          } else {
            getDealerCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
          }
        }
        if (eventCode === 8 && index !== 1) {
          getDealerCodeBoxElement(index - 1).focus();
        }
      }
      function onDealerFocusEvent(index) {
        for (item = 1; item < index; item++) {
          const currentElement = getDealerCodeBoxElement(item);
          if (!currentElement.value) {
              currentElement.focus();
              break;
          }
        }
      }	
	
	 function addFields_old(){
			  
			  $(".my_order_form").append(`<div class="my_order_row d-flex align-items-center justify-content-between mt-20">
					  	<div class="sel_brand">
							<select name="" id="" data-role="none">
								<option value="">SELECT BRAND</option>
								<option value="">BRAND 1</option>
								<option value="">BRAND 2</option>
								<option value="">BRAND 3</option>
								<option value="">BRAND 4</option>
							</select>  
						</div>
					  	<div class="sel_qty">
							 <button  onclick="addProduct(this)" class="spinner_button plus" data-role="none"></button>	
							<input type="number" min="0" class="sel_b_qty" placeholder="QUANTITY" data-role="none">
							<button  onclick="removeProduct(this)" data-role="none" class="spinner_button minus" ></button>	
						 </div>
					  </div>`)
		  }
		
			
			 $(document).on('pageshow', "#showroom_details", function(){

          $("#showroom-gallery").lightSlider().destroy();

                  $("#showroom-gallery").lightSlider({          
              //pager: false,
          item:1,
          
          thumbItem:5,
          
          gallery:true,
          
          pager:false,
          auto:false,
          freeMove:false,
          controls:true,
                  onSliderLoad: function() {
                      $('#showroom-gallery').removeClass('cS-hidden');

                }  
        }); 

        
        });
    
			
			$(document).on('pageshow', "#scan_history", function() {
				$("#scan_cards").lightSlider({					
        			//pager: false,
					item:1.3,
					slideMargin:10,
					speed:1000,
					gallery:true,
					pause:3500,
					pager:false,
					auto:true,
					freeMove:false,
					controls:false,
					gallery:false,
                	onSliderLoad: function() {
                    	$('#scan_cards').removeClass('cS-hidden');
                }  
				}); 
			  });
			         
				$(document).on("pageshow", "#slidepage", function() {
					var slider = 	$('#sliderA').lightSlider({
					item:1,
					slideMargin:0,
					speed:1000,
					gallery:false,
					pause:800,
					pager:true,
					auto:false,
					freeMove:true,
					loop:false,
					controls:false,
                	onSliderLoad: function() {
                    	$('#sliderA').removeClass('cS-hidden');
                }  
				});  
				
					$("#nextBtn_slider").on("click", function(){
						var total_slide = slider.getTotalSlideCount();
						var current_slide = slider.getCurrentSlideCount();
						if (total_slide!=current_slide) {
							slider.goToNextSlide();
						}						
						else {
							$.mobile.changePage( "#login_pg", { transition: "flip"} );
						}
						
						
					})
					
				});
			$(document).on("pageshow", "#scan_redeem", function(){
				setTimeout(function(){				
					$("#scan_details").popup("open", {
					  positionTo: "window"
					});
				}, 10);
			})
			$(document).on("pageshow", "#whatsnew", function(){
				var _owl2 = $(".whats_new_slider");
					_owl2.owlCarousel({
						items:1,
						loop:false,
						margin:0,
						//merge:true,
						nav:false,
						dots:false,
						autoplay:true,
						autoWidth:false,
						navText: ['<','>']
					});
				
			})
			$(document).on("pageshow", "#product_launch", function(){
				var _owl2 = $(".whats_new_slider");
					_owl2.owlCarousel({
						items:1,
						loop:false,
						margin:0,
						//merge:true,
						nav:false,
						dots:false,
						autoplay:false,
						autoWidth:false,
						navText: ['<','>']
					});
				
			})
			$(document).on("pageshow", "#scan_gift", function(){
				setTimeout(function(){				
					$("#scan_details_gift").popup("open", {
					  positionTo: "window"
					});
				}, 10);
			})
	
			$(document).on("pageshow", function(){				
				setTimeout(function(){
					$("#sidebar").show();
					$("#sidebar").enhanceWithin().panel();
				},1000)				
			})
      
       $('input[type=radio][name=input_email_statement]').change(function() {
        if (this.value == 'selectduration') {
           $("#dateduration").show();
        }
        else {
            $("#dateduration").hide();
        }
    });
//
//	$('input[type=radio][name=filter_transaction]').change(function() {
//        
//		   if(localStorage.getItem("usermtype_goldmedal")=='Retailer')
//		       
//		   else		   	   
//            $("#filter_panel").toggle();
//        
//    });
//	$('input[type=radio][name=filter_transaction1]').change(function() {
//        
//			getdealer_retailertrans(this.value);
//            $("#filter_panel1").toggle();
//        
//    });
	
	 function toggleDD(e){
            //console.log(e);
            //e.stopPropagation();          
            $(e).toggleClass("open");
            $(e).next(".sub_menu").slideToggle();
        }
	
		function removeProduct(e){
			e.parentNode.querySelector('input[type=number]').stepDown();		
		}
		function addProduct(e){
			e.parentNode.querySelector('input[type=number]').stepUp();
		}

	function gotomembership(){
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );	
		$("#contest_tabs").tabs( "option", "active", 0 );		
	}
	function gotomessages(){
		//$('a[href="#weekly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );	
		$("#contest_tabs").tabs( "option", "active", 1 );
	}
	
	function gotopoints(){
		//$('a[href="#monthly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		$("#contest_tabs").tabs( "option", "active", 2 );
	}
	function gotorewards(){
		//$('a[href="#monthly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		$("#contest_tabs").tabs( "option", "active", 3 );
	}
	
	$("#toggleFilter").on("click", function() {
		//console.log("filter");
		$(".overlay").fadeIn("fast");
		$("#filter_panel").slideToggle("fast");
	})
	$("#filterClose").on("click", function() {
		$("#filter_panel").slideToggle("fast");
		$(".overlay").fadeOut("fast");
	})
	$(".overlay").on("click", function(){
		$(".overlay").fadeOut("fast");
		$("#filter_panel").slideUp("fast");
		$("#filter_panel1").slideUp("fast");
		$("#filter_panel2").slideUp("fast");
	});
	
	function showpass() {
  		var x = document.getElementById("reg_pass");
	  	if (x.type === "password") {
			x.type = "text";
		  } else {
			x.type = "password";
		  }
		}

	function showpass1() {
  		var x = document.getElementById("login_pass");
	  	if (x.type === "password") {
			x.type = "text";
		  } else {
			x.type = "password";
		  }
		}


$(document).on("pageshow", "#homepage", function(){
	$(".noti_trans").on("click", ".noti_btn", function(){		
		$("#filter_panel").slideDown("fast");
		$(".overlay").fadeIn("fast");		
	})
	
	$("#filterClose").on("click", function() {
		$("#filter_panel").slideUp("fast");		
		$(".overlay").fadeOut("fast");
	})
	$(".overlay").on("click", function(){
		$(".overlay").fadeOut("fast");
		$("#filter_panel").slideUp("fast");
	});
	$(".close_panel").on("click", function(){
		$(".overlay").fadeOut("fast");
		$(".notification_stacks").remove();
		$("#filter_panel").slideUp("fast");
	});
	
	$(".promo_slider").owlCarousel({
		items:1,
		loop:true,
		margin:0,
		//merge:true,
		nav:false,
		dots:false,
		autoplay:true,
		autoWidth:false,
		navText: ['<','>']
	});
	//$(".notification_stacks").remove();
})

$(document).on("pageshow", "#transactions", function(){
	$(".overlay").fadeOut("fast");
	$("#filter_panel1").slideUp("fast");
	$("#toggleFilter1").on("click", function() {
			$(".overlay").fadeIn("fast");
			$("#filter_panel1").slideDown("fast");
		})
		$("#filterClose1").on("click", function() {
			$("#filter_panel1").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
		$(".overlay").on("click", function() {
			$("#filter_panel1").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
	
		
	})

$(document).on("pageshow", "#products", function(){
	$(".overlay").fadeOut("fast");
	$("#sort_panel").slideUp("fast");
	$("#toggleSort").on("click", function() {
			$(".overlay").fadeIn("fast");
			$("#sort_panel").slideDown("fast");
		})
		$("#sortClose").on("click", function() {
			$("#sort_panel").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
		$(".overlay").on("click", function() {
			$("#sort_panel").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
	
	$(".product_categories").on("click", "a", function(){			
			$(".product_categories a").removeClass("active")
			$(this).addClass("active")
		})
	})

$(document).on("pageshow", "#requestStatement", function(){
	$(".overlay").fadeOut("fast");
	$("#filter_panel2").slideUp("fast");
	$("#toggleFilter2").on("click", function() {
			$(".overlay").fadeIn("fast");
			$("#filter_panel2").slideDown("fast");
		})
		$("#filterClose2").on("click", function() {
			$("#filter_panel2").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
		$(".overlay").on("click", function() {
			$("#filter_panel2").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
	$('input[type=radio][name=input_email_statement]').change(function() {
			if(this.value == 'selectduration') {
				$("#dateduration").show();
			} else {
				$("#dateduration").hide();
			}
		});
	});

 function toggleDD(e){
            //console.log(e);
            //e.stopPropagation();          
            $(e).toggleClass("open");
            $(e).next(".sub_menu").slideToggle();
        }
function slide_this(e){
	$(e).toggleClass("open");
	$(e).next(".faq_text").slideToggle("fast");
};


	
		function removeProduct(e){
			e.parentNode.querySelector('input[type=number]').stepDown();		
		}
		function addProduct(e){
			e.parentNode.querySelector('input[type=number]').stepUp();
		}

	function gotomembership()
	{

		$("#message").css('display', 'none');
		$("#membership").css('display', 'block');
		$("#rewards").css('display', 'none');
		$("#points").css('display', 'none');

		//$("#sidebar").panel("close");
		renderTemplatedetail('aboutus');
		$.mobile.changePage( "#my_membership", { transition: "none"} );	
		$("#contest_tabs").tabs( "option", "active", 3 );		
	}


	function gotomessages_1()
	{
		$("#message").css('display', 'block');
		$("#membership").css('display', 'none');
		$("#rewards").css('display', 'none');
		$("#points").css('display', 'none');

		//$('a[href="#weekly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('inbox', 'msg_history_json.asp');
		$("#contest_tabs").tabs( "option", "active", 1 );
	}
	
	function gotopoints_1()
	{

		$("#message").css('display', 'none');
		$("#membership").css('display', 'none');
		$("#rewards").css('display', 'none');
		$("#points").css('display', 'block');

		//$('a[href="#monthly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('loyaltynew', 'points_history_json.asp');
		$("#contest_tabs").tabs( "option", "active", 0 );
	}
	function gotorewards_1()
	{

		$("#message").css('display', 'none');
		$("#membership").css('display', 'none');
		$("#rewards").css('display', 'block');
		$("#points").css('display', 'none');

		//$('a[href="#monthly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('coupons', 'cpns_history_json.asp');
		$("#contest_tabs").tabs( "option", "active", 2 );
	}
	
	$("#toggleFilter").on("click", function() {
		//console.log("filter");
		$(".overlay").fadeIn("fast");
		$("#filter_panel").slideToggle("fast");
	})
	$("#filterClose").on("click", function() {
		$("#filter_panel").slideToggle("fast");
		$(".overlay").fadeOut("fast");
	})
	$(".overlay").on("click", function(){
		$(".overlay").fadeOut("fast");
		$("#filter_panel").slideUp("fast");
		$("#filter_panel1").slideUp("fast");
		$("#filter_panel2").slideUp("fast");
	});
	
	function showpass() {
  		var x = document.getElementById("reg_pass");
	  	if (x.type === "password") {
			x.type = "text";
		  } else {
			x.type = "password";
		  }
		}

	function showpass11() {
  		var x = document.getElementById("login_pass");
	  	if (x.type === "password") {
			x.type = "text";
		  } else {
			x.type = "password";
		  }
		}

$(document).on("pageshow", "#transactions", function(){
	$(".overlay").fadeOut("fast");
	$("#filter_panel1").slideUp("fast");
	$("#toggleFilter1").on("click", function() {
			$(".overlay").fadeIn("fast");
			$("#filter_panel1").slideDown("fast");
		})
		$("#filterClose1").on("click", function() {
			$("#filter_panel1").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
		$(".overlay").on("click", function() {
			$("#filter_panel1").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
	
		
	})

$(document).on("pageshow", "#products", function(){
	$(".overlay").fadeOut("fast");
	$("#sort_panel").slideUp("fast");
	$("#toggleSort").on("click", function() {
			$(".overlay").fadeIn("fast");
			$("#sort_panel").slideDown("fast");
		})
		$("#sortClose").on("click", function() {
			$("#sort_panel").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
		$(".overlay").on("click", function() {
			$("#sort_panel").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
	
	$(".product_categories").on("click", "a", function(){			
			$(".product_categories a").removeClass("active")
			$(this).addClass("active")
		})
	})

$(document).on("pageshow", "#requestStatement", function(){
	$(".overlay").fadeOut("fast");
	$("#filter_panel2").slideUp("fast");
	$("#toggleFilter2").on("click", function() {
			$(".overlay").fadeIn("fast");
			$("#filter_panel2").slideDown("fast");
		})
		$("#filterClose2").on("click", function() {
			$("#filter_panel2").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
		$(".overlay").on("click", function() {
			$("#filter_panel2").slideUp("fast");
			$(".overlay").fadeOut("fast");
		})
	$('input[type=radio][name=input_email_statement]').change(function() {
			if(this.value == 'selectduration') {
				$("#dateduration").show();
			} else {
				$("#dateduration").hide();
			}
		});
	})

 function toggleDD(e){
            //console.log(e);
            //e.stopPropagation();          
            $(e).toggleClass("open");
            $(e).next(".sub_menu").slideToggle();
        }
function slide_this(e){
	$(e).toggleClass("open");
	$(e).next(".faq_text").slideToggle("fast");
}

function gotoContactus()
{
	$.mobile.changePage( "#contactus", { transition: "none"} );
}
function gotoFaqs()
{
	$.mobile.changePage( "#faqs", { transition: "none"} );
}
function showSocial()
{
	$.mobile.changePage( "#social", { transition: "none"} );
}

/* catalogoe woo */


function showCategorysharenew()
{
    
	'use strict';	
	   $.ajax({
		 url: SERVER_m+'getcat/getloccatsall/'+gbrd,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				console.log('JSONDATA:'+JSON.stringify(data));
				if(data.length>0)
				{
				var str = '';
                var str1 = '';

				for(var i=0;i<data.length;i++)
				{

					
					var catimg = data[i].imagefolder;
					if(typeof catimg == undefined || typeof catimg == null || typeof catimg == 'undefined' || catimg == null || catimg == 'null' || catimg == '')
                    {
                        catimg = 'assets/images/no-img-gd.png';    
                    }

                    if(typeof data[i].subcategory==undefined || typeof data[i].subcategory=="undefined" || data[i].subcategory==undefined || data[i].subcategory==null || data[i].subcategory=='' || data[i].subcategory=='null')
                    {
						str +='<div class="primary_block" id="catdiv'+data[i].id+'">';
						str +='<a href="javascript:showProductShare(\''+data[i].id+'\',\''+data[i].name+'\');" class="what_new_item ui-link">';
						str +='<div class="item_img"><img src='+catimg+' class="img-responsive" alt=""/></div>';
						str +='<div class="item_brief">';
						str +='<h4>'+data[i].name+'</h4>';
						str +='</div>';
						str +='</a>';
						//str +='<div class="ui-grid-a social_share_list"><div class="ui-block-a"> <img src="assets/images/wapp.png" class="img-responsive" onclick="javascript:shareProductsCat(\''+data[i].id+'\',\''+data[i].name+'\',\''+catimg+'\');"></div><div class="ui-block-a"> <img src="assets/images/fb.png" class="img-responsive" onclick="javascript:shareProductsCatFb(\''+data[i].id+'\',\''+data[i].name+'\',\''+catimg+'\');"></div></div>';
					    str +='</div>';

                    }
                    else
                    {

						str +='<div class="primary_block" id="catdiv'+data[i].id+'">';
						str +='<a href="javascript:toggleDivnew(\'catinnerdiv'+data[i].id+'\', \'catdiv'+data[i].id+'\');" class="what_new_item ui-link">';
						str +='<div class="item_img"><img src='+catimg+' class="img-responsive" alt=""/></div>';
						str +='<div class="item_brief">';
						str +='<h4>'+data[i].name+'</h4>';
						str +='</div>';
						str +='<div class="plus minus"></div>';
						str +='</a>';
						//str +='<div class="ui-grid-a social_share_list"><div class="ui-block-a"> <img src="assets/images/wapp.png" class="img-responsive" onclick="javascript:shareProductsCat(\''+data[i].id+'\',\''+data[i].name+'\',\''+catimg+'\');"></div><div class="ui-block-a"> <img src="assets/images/fb.png" class="img-responsive" onclick="javascript:shareProductsCatFb(\''+data[i].id+'\',\''+data[i].name+'\',\''+catimg+'\');"></div></div>';
					    str +='</div>';


						str+='<div id="catinnerdiv'+data[i].id+'" class="catinnerhdr">';
						str+='</div>';


						addSubcategory(data[i].id);

                    }

				}

			document.getElementById("shopzone").innerHTML=str;

			$.mobile.changePage('#share');

		}
		else
		{
			document.getElementById('title_error').innerHTML='Category List';

			document.getElementById('failqty').innerHTML='Start by adding categories and products';

			

			$.mobile.changePage('#failpage');
		}
				

				
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}

function addSubcategory(catid)
{
	'use strict';	
	   $.ajax({
		 url: SERVER_m+'getcat/getloccatsall/'+gbrd,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));

				var str='';
				str+= '<div class="subdiv">';
				str+= '<ul>';
                
				for(var i=0;i<data.length;i++)
				{
				    if(data[i].id==catid)
					{

						for(var k=0;k<data[i].subcategory.length;k++)
						{

							var catimg = data[i].subcategory[k].imagefolder;
							if(typeof catimg == undefined ||typeof catimg == 'undefined' || catimg == null || catimg == 'null' || catimg == '')
							{
							     catimg = 'assets/images/no-img.jpg';    
							}

			

							str +='<div class="primary_block" id="catdiv'+data[i].subcategory[k].id+'">';

							if(data[i].subcategory[k].id=='10100291' || data[i].subcategory[k].id=='10100292')
							{
								
								str +='<a href="#" class="what_new_item ui-link">';
							}
							else
							{
								str +='<a href="javascript:showProductShare(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\');" class="what_new_item ui-link">';
							}
							


							str +='<div class="item_img"><img src='+catimg+' class="img-responsive" alt=""/></div>';
							str +='<div class="item_brief">';
							str +='<h4>'+data[i].subcategory[k].name+'</h4>';
							str +='</div>';
							//str +='<div class="plus minus"></div>';
							str +='</a>';

							//str +='<div class="ui-grid-a social_share_list_new"><div class="ui-block-a"> <img src="assets/images/wapp.png" class="img-responsive" onclick="javascript:shareProductsCat(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');"></div><div class="ui-block-a"> <img src="assets/images/fb.png" class="img-responsive" onclick="javascript:shareProductsCatFb(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');"></div></div>';
							

							str +='</div>';
					
						}
					}
					
				}

				str+='</ul>';
				str+='<div>';
				
				document.getElementById("catinnerdiv"+catid).innerHTML=str;
        
        
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function addSubcategory_new(catid)
{
	'use strict';	
	   $.ajax({
		 url: SERVER_m+'getcat/getloccatsall/'+gbrd,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));

				var str='';
				str+= '<div class="subdiv">';
				str+= '<ul>';
                
				for(var i=0;i<data.length;i++)
				{

				    if(data[i].id==catid)
					{
                       
						for(var k=0;k<data[i].subcategory.length;k++)
						{

							var catimg = data[i].subcategory[k].imagefolder;
							if(typeof catimg == undefined ||typeof catimg == 'undefined' || catimg == null || catimg == 'null' || catimg == '')
							{
							     catimg = 'assets/images/no-img.jpg';    
							}

			

							/* new */
							

							if(typeof data[i].subcategory[k].subcategory==undefined || typeof data[i].subcategory[k].subcategory=="undefined" || data[i].subcategory[k].subcategory==undefined || data[i].subcategory[k].subcategory==null || data[i].subcategory[k].subcategory=='' || data[i].subcategory[k].subcategory=='null')
							{

								str +='<div class="primary_block" id="catdiv_new'+data[i].subcategory[k].id+'">';
							    str +='<a href="javascript:showProductShare(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\');" class="what_new_item ui-link">';
								str +='<div class="item_img"><img src='+catimg+' class="img-responsive" alt=""/></div>';
								str +='<div class="item_brief">';
								str +='<h4>'+data[i].subcategory[k].name+'</h4>';
								str +='</div>';
								//str +='<div class="plus minus"></div>';
								str +='</a>';
								//str +='<div class="ui-grid-a social_share_list_new"><div class="ui-block-a"> <img src="assets/images/wapp.png" class="img-responsive" onclick="javascript:shareProductsCat(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');"></div><div class="ui-block-a"> <img src="assets/images/fb.png" class="img-responsive" onclick="javascript:shareProductsCatFb(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');"></div></div>';
								str +='</div>';

							}
							else
							{

								
								str +='<div class="primary_block" id="catdiv_new2'+data[i].subcategory[k].id+'">';
							    str +='<a href="javascript:showProductShare_Subcat_l2(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');" class="what_new_item ui-link">';
								str +='<div class="item_img"><img src='+catimg+' class="img-responsive" alt=""/></div>';
								str +='<div class="item_brief">';
								str +='<h4>'+data[i].subcategory[k].name+'</h4>';
								str +='</div>';
								//str +='<div class="plus minus"></div>';
								str +='</a>';
								//str +='<div class="ui-grid-a social_share_list_new"><div class="ui-block-a"> <img src="assets/images/wapp.png" class="img-responsive" onclick="javascript:shareProductsCat(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');"></div><div class="ui-block-a"> <img src="assets/images/fb.png" class="img-responsive" onclick="javascript:shareProductsCatFb(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');"></div></div>';
								str +='</div>';

								//str2+='<li><a href="javascript:showProductShare_Subcat(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');">'+data[i].subcategory[k].name+'</a></li>';
							}

							
					
						}
					}
					
				}

				str+='</ul>';
				str+='<div>';
				
				document.getElementById("catinnerdiv_new"+catid).innerHTML=str;
        
        
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function showProductShare(cid,cname)
{  
	'use strict';	

	   var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";


    //$('body').addClass('ui-loading');
	document.getElementById("cat_header").innerHTML='<span>'+cname+'</span>';
	$.mobile.changePage( "#products");
	   
	var shopcmsurl = SERVER_m;

    console.log(cid);
				
	var str='';
	
	   $.ajax({
		 url: SERVER_m+'getcat/getitems/'+gbrd+'/'+cid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				console.log('ProductsData:'+JSON.stringify(data));
				var str = '';
                localStorage.setItem("ProductsData",JSON.stringify(data));
				var totlength = data.length;
				console.log('totlength....'+totlength);

                var i=0;

				while(i<totlength)
				{

					str +='<div class="ui-grid-a list">';
						console.log('index'+i);
						console.log(data[i]);
						console.log('i%2'+i%2);

					if(i%2==0)
					{
					
					var imgurl= data[i].itemcode;
					var imgurlmain= imgurl.trim();
				



                    var img_str_json=JSON.stringify(data[i].images).replace(/"/g, '');
                    // var img_str_json=JSON.stringify(img_str);

                    var pr_img = '';
				    if(typeof data[i].images == undefined ||typeof data[i].images == 'undefined' || data[i].images == null || data[i].images == 'null' || data[i].images == '')
                    {
                        pr_img = 'assets/images/no-img.jpg';
                    }
					else
					{
						pr_img = data[i].images[0];
					}

                    
        			str +='<div class="ui-block-a ">';
            		str +='<div class="shop-thumb">';
					str +='<div class="social_share">';
                    //str +='<a href="javascript:addtowish(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
                   // str +='<a href="javascript:shareProduct(\''+data[i].images[0]+'\')" class="ui-link"><img src="assets/images/share_icon.png" alt=""></a>';
				   //str +='<label class="container"><input type="checkbox" name="share_pr" value="'+data[i].itemcode+'#'+data[i].itemname+'#'+data[i].description+'#'+data[i].images[0]+'" class="shareapp"><span class="checkmark"></span></label>';
                
					str +='</div>';
                	str +='<a href="javascript:showshopdetail(\''+data[i].itemcode+'\');">';
                    str +='<img src="'+pr_img+'" class="img-responsive"/></a>';
                   // str +='<img src="'+shopcmsurl+'uploads/products/'+imgurlmain+'.jpg" class="humbleLightbox img-responsive" alt=""/></a>';
                    str +='<div class="description">';
                	var sz = data[i].size;
                    if(typeof sz == undefined ||typeof sz == 'undefined' || sz == null || sz == 'null')
                    {
                       str +='<h3 class="product_name">'+data[i].itemname+'</h3>';     
                    }
                    else
                    {
                        str +='<h3 class="product_name">'+data[i].itemname+ '-'+ data[i].size+'</h3>';
                    }



					var cattype = localStorage.getItem('cattype_ex');
					if(cattype=='Mechanic')
					{
						str +='<h2 class="price" onclick="javascript:openpdf(\''+data[i].productyoutubelink+'\')">Product Details</h2>';
					}
                    //str +='<h2 class="price">INR '+numberWithCommas(data[i].mrp)+'</h2>';
					//str +='<table><tr><td>Qty:</td><td><input type="number" data-role="none" min="1" name="qty'+i+'" id="qty'+i+'" value="1" title="Qty" class="qty"></td></tr>';
                    //str +='</table>';
                 

                   var description=data[i].description;
                    if(data[i].productyoutubelink!=null &&  data[i].productyoutubelink!='' )
                    	description='Product Video\n'+data[i].productyoutubelink+'\n'+description;
                    console.log(description);
                 

                   /*str +=' <div class=\"ui-grid-b\ social_share_list">';
                  str +='<div class=\"ui-block-a\">  <img src=\"assets/images/other.png\" class=\"img-responsive\"   onclick="javascript:shareProductsOther(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/>  </div>';
                 if(deviceType=='Android')
                 str +=' <div class=\"ui-block-b\"> <img src=\"assets/images/fb.png\" class=\"img-responsive\"  onclick="javascript:shareProductsFb(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
               
                 if(deviceType=='Android')
                 str +=' <div class=\"ui-block-c\"> <img src=\"assets/images/wapp.png\" class=\"img-responsive\"  onclick="javascript:shareProducts(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                else
                	 str +=' <div class=\"ui-block-c\"> <img src=\"assets/images/wapp.png\" class=\"img-responsive\"  onclick="javascript:shareProductsios(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                
                str +='</div>';*/


                //    str +='<div><button onclick="javascript:shareProducts(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+data[i].description.trim()+'\',\''+data[i].images[0]+'\');" class="add_to_cart" data-role="none">Share</button></div>';
					str +='</div>';
					str +='</div>';
                
					str +='</div>';
					}


                    console.log(data[(i+1)]);
                    
					if(typeof data[(i+1)] !='undefined')
					{
                        
					if((i+1)%2==1)
					{
					
					var imgurl= data[i+1].itemcode;
					var imgurlmain= imgurl.trim();
                    

                    var img_str_json1=JSON.stringify(data[i+1].images).replace(/"/g, '');
                    //var img_str_json=JSON.stringify(img_str);


					var pr_img = '';
				    if(typeof data[i+1].images == undefined ||typeof data[i+1].images == 'undefined' || data[i+1].images == null || data[i+1].images == 'null' || data[i+1].images == '')
                    {
                        pr_img = 'assets/images/no-img.jpg';    
                    }
					else
					{
						pr_img = data[i+1].images[0];
					}

					str +='<div class="ui-block-b">';
            		str +='<div class="shop-thumb">';
					str +='<div class="social_share">';
                    //str +='<a href="javascript:addtowish(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
					//str +='<a href="javascript:shareProduct(\''+data[i+1].images[0]+'\')" class="ui-link"><img src="assets/images/share_icon.png" alt=""></a>';
					//str +='<label class="container"><input type="checkbox" name="share_pr" value="'+data[i+1].itemcode+'#'+data[i+1].itemname+'#'+data[i+1].description+'#'+data[i+1].images[0]+'" class="shareapp"><span class="checkmark"></span></label>';
                
                    str +='</div>';
					str +='<a href="javascript:showshopdetail(\''+data[i+1].itemcode+'\');">';
                    //str +='<img src="'+shopcmsurl+'uploads/products/'+imgurlmain+'.jpg" class="humbleLightbox img-responsive" alt=""/>';
                    str +='<img src="'+pr_img+'" class="img-responsive"/></a>';
                    str +='<div class="description">';
                	var sz = data[i+1].size;
                    if(typeof sz == undefined ||typeof sz == 'undefined' || sz == null || sz == 'null')
                    {
                       str +='<h3 class="product_name">'+data[i+1].itemname+'</h3>';     
                    }
                    else
                    {
                        str +='<h3 class="product_name">'+data[i+1].itemname+ '-'+ data[i+1].size+'</h3>';
                    }

					var cattype = localStorage.getItem('cattype_ex');
					if(cattype=='Mechanic')
					{
						str +='<h2 class="price" onclick="javascript:openpdf(\''+data[i+1].productyoutubelink+'\')">Product Details</h2>';
					}

                    //str +='<h2 class="price">INR '+numberWithCommas(data[i+1].mrp)+'</h2>';
					//str +='<table><tr><td>Qty:</td><td><input type="number" data-role="none" min="1" name="qty'+(i+1)+'" id="qty'+(i+1)+'" value="1" title="Qty" class="qty"></td></tr>';
                    //str +='</table>';

                     var description=data[i+1].description;
                    if(data[i+1].productyoutubelink!=null &&  data[i+1].productyoutubelink!='' )
                    	description='Product Video\n'+data[i+1].productyoutubelink+'\n'+description;


                    /*str +=' <div class=\"ui-grid-b\ social_share_list">';
                  str +='<div class=\"ui-block-a\">  <img src=\"assets/images/other.png\" class=\"img-responsive\"   onclick="javascript:shareProductsOther(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/>  </div>';
                  if(deviceType=='Android')
                 str +=' <div class=\"ui-block-b\"> <img src=\"assets/images/fb.png\" class=\"img-responsive\"   onclick="javascript:shareProductsFb(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                 if(deviceType=='Android')
                 str +=' <div class=\"ui-block-c\"> <img src=\"assets/images/wapp.png\" class=\"img-responsive\"  onclick="javascript:shareProducts(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                else
                	 str +=' <div class=\"ui-block-c\"> <img src=\"assets/images/wapp.png\" class=\"img-responsive\"  onclick="javascript:shareProductsios(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                

                str +='</div>';*/
				 // str +='<div><button onclick="javascript:shareProducts(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+data[i+1].description.trim()+'\',\''+data[i+1].images[0]+'\');" class="add_to_cart" data-role="none">Share</button></div>';
                    str +='</div>';
					str +='</div>';
                
					str +='</div>';
					}
					}
					str +='</div>';

					i=i+2;
					
				}
				
				document.getElementById("prdctlist").innerHTML=str;
				

				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

function shareProducts1()
{
    var favorite = [];

    var description='';

   // var shopurl=shopcmsurl+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_id;

    
//var i=1;
    $("input:checkbox[name=share_pr]:checked").each(function() {
       
      // url=url+encodeURI($(this).val())+"%0D%0A";
        
       // var fileTransfer = new FileTransfer();
        var wdata = $(this).val();

       

        var dt=wdata.split('#');

        var shopurl=SERVER_m+'welcome/getProductDetails/5/'+dt[0]+'/'+gbrd+'/'+user.store_id;

       console.log(shopurl);


        

       // var shopurl=SERVER+'welcome/getProductDetails/5/'+dt[0]+'/'+gbrd+'/'+user.store_id;


        description=description+dt[2]+'\n\n'+shopurl+'\n\n';

        
        favorite.push(dt[3]);

        
        });

     if(favorite.length>0){
    
      window.plugins.socialsharing.shareWithOptions({
                      subject: 'Share and Buy',
                      message: description,
                      url: '',
                      files: favorite
                    },
                    function() {console.log('share ok')},
                    function(errormsg){ alert("Error: " + errormsg)}
            );
     }
     else
     {
        alert('Please select items');
     }

     



    
  }

function shareProductsCatFb(catcode,catname,iimage)
{


  var shopurl=BITLYS+'welcome/showShop/'+gbrd+'/'+user.store_code+'/'+catcode;
  console.log('shopurl:'+shopurl);
   fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
   headers: {
        'Authorization': 'Bearer dc30a71f9c5c9ba1ffb4afbe04bcabd2c284729f',
        'Content-Type': 'application/json'
    },
   body: JSON.stringify({ "long_url": shopurl, "domain": "bit.ly", "group_guid": "Bk65hnCRG29" })
}).then(function(response) {
return response.json();
}).then(function(json) {

console.log(json.link);

 var des=json.link;

   try{
     window.plugins.socialsharing.shareViaFacebook
     (null,iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';shareDescriptionFb(''+des+'');}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}


});

	 
      
       

   
/*

	   showPOPup();
	   var imgshared=false;
	
	//return false;
	
       var shopurl=SERVER+'welcome/getProductDetails/5/'+icode+'/'+user.store_id+'/'+user.id;

       console.log(shopurl);
       var des=description+'\n'+shopurl;


        try{
     window.plugins.socialsharing.shareViaWhatsApp
     ('',iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';alert('Image shared successfull..Sharing description');shareDescription(''+des+'')}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}

    */



	
}

function shareProductsCat(catcode,catname,iimage)
{


//https://mliveshare.com/welcome/showShop/97FEECAD-72B0-4FA9-AF12-DC2C719C8657/1/2049
//var apiKey = 'dc30a71f9c5c9ba1ffb4afbe04bcabd2c284729f';
//	var username = 'anoop@mobiquest.com';

var shopurl=BITLYS+'welcome/showShop/'+gbrd+'/'+user.store_code+'/'+catcode;
       console.log('shopurl:'+shopurl);
	   //console.log('iimage:'+iimage);



       fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
   headers: {
        'Authorization': 'Bearer dc30a71f9c5c9ba1ffb4afbe04bcabd2c284729f',
        'Content-Type': 'application/json'
    },
   body: JSON.stringify({ "long_url": shopurl, "domain": "bit.ly", "group_guid": "Bk65hnCRG29" })
}).then(function(response) {
return response.json();
}).then(function(json) {

 try{
 	console.log(json.link);
	 window.plugins.socialsharing.shareWithOptions({
                      subject:catname,
                      message: catname,
                      url: json.link,
                      files: [iimage],
                      chooserTitle: 'WhatsApp', // Android only, you can override the default share sheet title
  					  appPackageName: 'com.whatsapp', // Android only, you can provide id of the App you want to share with
                    },
                    function() {console.log('share ok');},
                    function(errormsg){ alert("Error: " + errormsg)}
            );
	}
	catch(ex)
	{
//$('#sharepop').remove();
	}
});

      

}

function shareProducts(icode,iname,description,iimage)
{

	

	 
      

       var shopurl=BITLYS+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_code;
       console.log('shopurl:'+shopurl);



       fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
   headers: {
        'Authorization': 'Bearer dc30a71f9c5c9ba1ffb4afbe04bcabd2c284729f',
        'Content-Type': 'application/json'
    },
   body: JSON.stringify({ "long_url": shopurl, "domain": "bit.ly", "group_guid": "Bk65hnCRG29" })
}).then(function(response) {
return response.json();
}).then(function(json) {

      console.log(json.link);
      try{
	 window.plugins.socialsharing.shareWithOptions({
                      subject: iname,
                      message: description,
                      url: json.link,
                      files: [iimage],
                      chooserTitle: 'WhatsApp', // Android only, you can override the default share sheet title
  					  appPackageName: 'com.whatsapp', // Android only, you can provide id of the App you want to share with
                    },
                    function() {console.log('share ok');},
                    function(errormsg){ alert("Error: " + errormsg)}
            );
	}
	catch(ex)
	{
//$('#sharepop').remove();
	}
  });
       
/*
   


	   showPOPup();
	   var imgshared=false;
	
	//return false;
	
     //  var shopurl=SERVER+'welcome/getProductDetails/5/'+icode+'/'+user.store_id+'/'+user.id;

       console.log(shopurl);
       var des=description+'\n'+shopurl;


        try{
     window.plugins.socialsharing.shareViaWhatsApp
     ('',iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';alert('Image shared successfull..Sharing description');shareDescription(''+des+'')}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}

    */



	
  }

function shareProductsios(icode,iname,description,iimage)
{

	 
      
       

   


	   showPOPup();
	   var imgshared=false;
	
	//return false;
	
       var shopurl=BITLYS+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_code;

       console.log(shopurl);




       fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
   headers: {
        'Authorization': 'Bearer dc30a71f9c5c9ba1ffb4afbe04bcabd2c284729f',
        'Content-Type': 'application/json'
    },
   body: JSON.stringify({ "long_url": shopurl, "domain": "bit.ly", "group_guid": "Bk65hnCRG29" })
}).then(function(response) {
return response.json();
}).then(function(json) {
	console.log(json.link);
       var des=description+'\n'+json.link;


        try{
     window.plugins.socialsharing.shareViaWhatsApp
     ('',iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';shareDescription(''+des+'')}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}

    
  });


	
  }


function shareProductsFb(icode,iname,description,iimage)
{


	   showPOPup();

	   
       var shopurl=BITLYS+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_code;

       console.log(shopurl);

          fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
   headers: {
        'Authorization': 'Bearer dc30a71f9c5c9ba1ffb4afbe04bcabd2c284729f',
        'Content-Type': 'application/json'
    },
   body: JSON.stringify({ "long_url": shopurl, "domain": "bit.ly", "group_guid": "Bk65hnCRG29" })
}).then(function(response) {
return response.json();
}).then(function(json) {
    console.log(json.link);
       var des=description+'\n'+json.link;


        try{
     window.plugins.socialsharing.shareViaFacebook
     (null,iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';shareDescriptionFb(''+des+'');}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}


});


	
  }

function shareProductsOther(icode,iname,description,iimage)
{


	 
       var shopurl=BITLYS+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_code;

       console.log(shopurl);

          fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
   headers: {
        'Authorization': 'Bearer dc30a71f9c5c9ba1ffb4afbe04bcabd2c284729f',
        'Content-Type': 'application/json'
    },
   body: JSON.stringify({ "long_url": shopurl, "domain": "bit.ly", "group_guid": "Bk65hnCRG29" })
}).then(function(response) {
return response.json();
}).then(function(json) {
	console.log(json.link);
    
      try{
	 window.plugins.socialsharing.shareWithOptions({
                      subject: iname,
                      message: description,
                      url: json.link,
                      files: [iimage]
                    },
                    function() {console.log('share ok');},
                    function(errormsg){ alert("Error: " + errormsg)}
            );
	}
	catch(ex)
	{

	}

       

   });
   



	
  }




function shareDescription(desc)
{

	  try{
     window.plugins.socialsharing.shareViaWhatsApp
     (
      desc,
      null,
      null,
      function() {document.getElementById('sdesc').src='assets/images/verify_icon.png';$('#sharepop').remove();}, 
      function(errormsg){alert(errormsg)}
      );
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		//$('#sharepop').remove();
	}
}

function shareDescriptionFb(desc)
{

	  try{
     window.plugins.socialsharing.shareViaFacebook
     (
      desc,
      null,
      null,
      function() {document.getElementById('sdesc').src='assets/images/verify_icon.png';$('#sharepop').remove();}, 
      function(errormsg){alert(errormsg)}
      );
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		//$('#sharepop').remove();
	}
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function formatName(str)
{
	if(typeof str==undefined || str=='undefined'|| str==null || str=='null' || str=='')
    {
        str='#';
    }
        return str;
}

function removeHash(str)
{
	return str.replace('#','');
}

function check_Redeempts()
{
	if(user.IsApproved_se=='Approved')
	{
		$.mobile.changePage( "#pointPage", {transition: "none"} );
	}
	else
	{
		toast('Get yourself approved to redeeem points');
	}
}

function showScan_check()
{

	var s_count = localStorage.getItem("scanseen_count");
	if (s_count<=4)
	{
		showScan();
	}
	else
	{
		toast('Maximum scan limit reached');
	}
}

function showScan_new()
{
	$.mobile.changePage( "#scanpage", {transition: "none"} );

	      cordova.plugins.barcodeScanner.scan(
			   function (result) {

					//$.mobile.changePage( "#homepage", {transition: "none"} );

					if(result.cancelled == true)
				    {
						//toast('Scanning canceled');
						$.mobile.changePage( "#homepage", {transition: "none"} );
				    }
					else
				    {
						var bcode=result.text;
						var bcodenew = bcode.trim();
						isValid_coupon(bcodenew);
					}

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417,CODABAR,DATA_MATRIX,RSS14,CODE_39,CODE_93,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );
}

function showScan()
{

	//showScan_isvalid('A4A9A047631');
	$('#scan_serialno').val('');
	$('#scan_invoiceno').val('');
	$('#scan_sku').val('');
	$('#scan_invoicedate').val('');
	$('#scan_brandcode').val('');

	cordova.plugins.barcodeScanner.scan(
			   function (result) {

					$.mobile.changePage( "#scanpage", {transition: "none"} );

					if(result.cancelled == true)
				    {
						toast('Scanning canceled');
						$.mobile.changePage( "#homepage", {transition: "none"} );
				    }
					else
				    {

						var bcode=result.text;
						var bcodenew = bcode.trim();

						showScan_isvalid(bcodenew);

					}

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417,CODABAR,DATA_MATRIX,RSS14,CODE_39,CODE_93,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );
}

function showScan_isvalid(bcode)
{

	document.getElementById("filter_panel_div").innerHTML='';

	$.ajax({
			url: "https://taghash.co/xmlread.php?barcode="+bcode,
		    type: 'GET',
		    timeout: 55000,
		    dataType: 'json',
		    data:{
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			 
			    console.log("data:"+JSON.stringify(data));

				if(data.data.length>0)
				{
					console.log(data.data[0].Barcode.trim());
					//console.log(data.data[0].InvoiceNo);
					//console.log(data.data[0].InvoiceDate.split('T')[0]);
					//console.log(data.data[0].Sku);

					$('#scan_serialno').val(data.data[0].Barcode.trim());
					$('#scan_invoiceno').val(data.data[0].InvoiceNo);
					$('#scan_sku').val(data.data[0].Sku);
					$('#scan_brandcode').val(data.data[0].BrandCode);
					$('#scan_invoicedate').val(data.data[0].InvoiceDate.split('T')[0]);

				    reset_scanpg();

					$.mobile.changePage("#scan_details_pg", {transition: "none"});
				}
				else
				{
					toast('Invalid code');
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}

function reset_scanpg()
{
    $('#scan_pincode').val('');
	$('#scan_vehicleno').val('');
}

function earn_Scanpage(mobileno,sku_no,invoiceno,brandcode,invoicedate)
{
     //document.getElementById("scan_qr_success_txt").innerHTML ='';

	 var today = new Date();
		
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 
      today = yyyy+'-'+mm+'-'+dd;

	  $.ajax({
			url: SERVER2+"earn_points_json_api.asp",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "mobileno": user.mobile,
			  "product": sku_no,
			  "bill_number": invoiceno,
			  "bill_date": invoicedate,
			  "brand_code": brandcode,
			  "scode": user.store_code_atootbandhan
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPI');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14');
            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			 
			    console.log("data:"+JSON.stringify(data));

			    if(data.error.length>=1)
				{
					toast_p(data.error);
				}
				else
				{
					//toast_p(data.data);
					//$.mobile.changePage( "#homepage", { transition: "none"} );

					document.getElementById("filter_panel_div").innerHTML= data.data;
					$.mobile.changePage( "#homepage", { transition: "none"} );
					$(".overlay").fadeIn("fast");
					$("#filter_panel").slideToggle("fast");

					$('#scan_otp_mobile').val('');
					$('#scan_otp_qrcode').val('');
					$('#scan_otp_session_token').val('');
			   
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}

$(document).on('pageshow', '#transactions', function (event, ui) {
    get_transactions_details();
});

function get_transactions_details()
{
	
	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';

			if(data.data[0].msg=='No Records Found.')
			{
				toast('No Records Found.');
			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {	
					
				
					    str += '<div class="recent_transfer">';
					    str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].TransactionDate+'</div>';
					    str += '<div class="recent_block pl-4 pr-4">';
                        
						if(data.data[i].TransType == 'Revoke')
					    {
							str += '<div class="recent_user_icon"> <img src="assets/images/pointredeem.png" class="img-responsive" alt=""/> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Revoked from SF Batteries</p>';
						}
						else if(data.data[i].TransType == 'Redeem')
						{
							str += '<div class="recent_user_icon"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""/> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Redeemed from SF Batteries</p>';
						}
						else
						{
							str += '<div class="recent_user_icon"> <img src="assets/images/pointredeem.png" class="img-responsive" alt=""/> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Earned from SF Batteries</p>';
					    }

						//str += '<p class="recent_date">TX Date : '+data.data[i].TransactionDate+'</p>';
						str += '<p class="recent_date">Invoice Date : '+data.data[i].BillDate+'</p>';
						str += '<p class="recent_date">Invoice No. : '+data.data[i].BillNumber+'</p>';
						str += '<p class="recent_date">Bill Amount : '+data.data[i].BillAmount+'</p>';
						str += '<p class="recent_date">Product Code : '+checkforundefined(data.data[i].ProductCode)+'</p>';
						str += '<p class="recent_date">Brand Name : '+checkforundefined(data.data[i].BrandName)+'</p>';
						str += '</div>';
						str += '<div class="recent_user_points"><h2 class="text_green">'+data.data[i].Points+'<span>Points</span></h2></div>';						
					    str += '</div>';
				        str += '</div>';
				 }

				 document.getElementById('transfersret').innerHTML=str;

			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function submitPaytm()
{

  var userid = $('#kyc_paytm_id').val();
  var amount = $('#kyc_paytm_amount').val();

	if(userid=='')
	{
		toast("Please enter UPI ID/Paytm Wallet Number");
	}
	else if(amount=='' || amount=='0' )
	{
		toast("Please enter points to redeem");
	}
    else if((parseFloat(amount)) > parseFloat(user.balance))
	{
		toast('Points redeemeed cannot be greater than point balance');
	}
	else
	{

	   if(userid.indexOf("@")>=0)
	   {

		  $.ajax({
			url: "https://taghash.co/grati/atootbandhan/send.php",
		    type: 'POST',
		    timeout: 7000,
		    dataType: 'json',
		    data:JSON.stringify({
			      "upiid": userid,
				  "amount": amount
            }),
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");

            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			 
			 console.log("data:"+JSON.stringify(data));

			        if(data.response.status=='ACCEPTED')
					{
						toast('Request accepted');
						burnpoints(amount);
					}
					else
					{
						toast('Request failed');
					}

					$.mobile.changePage( "#homepage", { transition: "none"} );
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
       }
	   else
	   {
		   if(userid.length!=10)
		   {
				toast('Please enter valid mobile no.');
		   }
		   else
		   {

			   $.ajax({
				url: "https://taghash.co/grati/atootbandhan/send.php",
				type: 'POST',
				timeout: 7000,
				dataType: 'json',
				data:JSON.stringify({
					  "mobileno": userid,
					  "amount": amount
				}),
				beforeSend: function (xhr) {

					$("#wait").css("display","block");

				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
				 
				 console.log("data:"+JSON.stringify(data));

					if(data.response.status=='ACCEPTED')
					{
						toast('Request accepted');
						burnpoints(amount);
					}
					else
					{
						toast('Request failed');
					}

					$.mobile.changePage( "#homepage", { transition: "none"} );
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are connected to Internet');
					}
			});

		  }

	   }
	}

}

function burnpoints(redeempoints)
{

 var refbillno =  'gdrj'+Math.floor((Math.random() * 100000) + 1);

 $.ajax({
   url: SERVER2+'burn_points_json_api.asp',
   type: 'GET',
   timeout: 50000,
   dataType: 'json',
   data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','redeem_points': redeempoints, 'mobileno': user.mobile, 'ref_bill_number': refbillno, 'scode': 'HO-001', 'send': '1'},
   complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
    console.log('JSONDATA'+JSON.stringify(data));
      
	 /*if(data.data.length>=1)
	 {
		 toast(data.data);
	 }
	 else
	 {
		 toast(data.error);
	 }*/
   
  
    },
    error: function(xhr, textStatus, errorThrown) {
		//toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
 

}

function savecategory()
{
	//var cattype = $('#select_role').val();
	var cattype = $("input[name='select_role']:checked").val()
	console.log(cattype);

	if(typeof cattype==undefined || cattype=='undefined'|| cattype==null|| cattype=='null' || cattype=='')
	{
		toast('Please select category type');
	}
	else
	{
		localStorage.setItem('cattype_ex',cattype);


		if(cattype=='SalesExecutive')
		{
			$.mobile.changePage( "#page-forgot-password-se", { transition: "none"} );
		}
		else
		{
			$.mobile.changePage( "#page-forgot-password", { transition: "none"} );
		}

	}
}

$(document).on('pageshow', '#rewardPage', function (event, ui) {

    showRewards_new();
    
});

function showRewards_new()
{

	  $.ajax({
		 url: SERVER3+'categories_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		 success: function(data, textStatus, xhr) {
					 
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				var str = '';
				//str +='<div class="primary_section">';
				//str +='<div class="primary_section_inner pt-30">';
					
				for(var i=0;i<data.data.length;i++)
				{
		
					str +='<a href="javascript:toggleDiv(\'catpro'+data.data[i].catid+'\', \'catbtn'+data.data[i].catid+'\')" class="primary_block text-decoration_none bg-grey d-block" id="catbtn'+data.data[i].catid+'">';
					//str +='<a href="javascript:showProductsold(\''+data.data[i].catid+'\',\''+data.data[i].catname+'\');" class="points_bal_btn p_0">';	
					str +='<div class="points_bal_btn p_0 right">';	
					str +='<div class="points_bal">';
					str +='<h4><strong>'+data.data[i].catname+'</strong></h4>';
					str +='</div>';						
					str +='<div class="points_arrow"><img src="assets/images/arrow_green.png" class="img-responsive" alt=""></div>';
					str +='</div>';
				  	str +='</a>';
					str +='<div id="catpro'+data.data[i].catid+'"  class="reward_content"></div>';

					addProducts(data.data[i].catid,data.data[i].catname);
				}
				//str +='</div>';	
				//str +='</div>';

				document.getElementById("rewards_div").innerHTML=str;	
				//$.mobile.changePage( "#reward_store", { transition: "none"} );
				     
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	 

}

function toggleDiv(str,tg)
{
    $('#'+tg+'').find(".right").toggleClass("down");
   // $(".catinnerhdr").slideUp("fast");
	$('#'+str+'').slideToggle("fast");
   // $(".catheader").removeClass("bg_toggle");
    //$('#'+tg+'').toggleClass("bg_toggle");
}

function toggleDivnew(str,tg)
{
    $('#'+tg+'').find(".minus").toggleClass("plus");
   // $(".catinnerhdr").slideUp("fast");
	$('#'+str+'').slideToggle("fast");
   // $(".catheader").removeClass("bg_toggle");
    $('#'+tg+'').toggleClass("bg_toggle");
}


function addProducts_(catid,catname)
{
	 
	   $.ajax({
		 url: SERVER3+'brands_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { 'cat_id': catid },
		 success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				
				var str = '<div class="reward_section d-flex align-items-start justify-content-between flex-wrap p-3">';

				for(var i=0;i<data.data.length;i++)
				{
					var surl=SERVER3+'all_products_json.asp?cat_id='+catid+'&b_id='+data.data[i].brand_id;
							
				
							var pointval='';
							var pointdate='';
							var product_id='';
							var gvcode='';

								   $.ajax({
									 url: surl,
									 type: 'GET',
									 timeout: 50000,
									 dataType: 'json',
									 async:false,
									 success: function(data1, textStatus, xhr) {

										console.log(JSON.stringify(data1));
											
											
											if(data1.data.length!=0)
											{
												pointval = data1.data[0].GiftVoucherValue;
												gvcode=data1.data[0].GiftVoucherCode;
												pointdate=data1.data[0].GiftVoucherEndDate;
												product_id=data1.data[0].ProductId;
											}
											else
											{
												pointval='';
												gvcode='';
												pointdate='';
											}

											//console.log(pointval);

								
											
									},
									error: function(xhr, textStatus, errorThrown) {
												toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
									}
								  });

                                    

									var bname=data.data[i].brand_name.replace(/["']/g, '');
									var bdesc=data.data[i].brand_description.replace(/["']/g, '');
									var blogo=data.data[i].brand_logo.replace(/\\/g, "/");
									var brand_id=data.data[i].brand_id;
									   

									if(pointval!='')
									{
										str +='<a class="reward_block" href="javascript:showRewardDetails(\''+product_id+'\',\''+blogo+'\',\''+bname+'\',\''+bdesc+'\',\''+pointval+'\',\''+brand_id+'\',\''+pointdate+'\',\''+gvcode+'\')">';
									}
									else
									{
										str +='<a class="reward_block">';
									}
									str +='<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""></div>';
									str +='<div class="reward_brief">';
									str +='<p>'+data.data[i].brand_name+'</p>';
									str +='<p>VoucherValue:'+pointval+'</p>';
									str +='</div>';
									str +='</a>';


											/*var bname=data.data[i].brand_name.replace(/["']/g, '');
											var bdesc=data.data[i].brand_description.replace(/["']/g, '');
											var blogo=data.data[i].brand_logo.replace(/\\/g, "/");
											var brand_id=data.data[i].brand_id;
											str +='<div class="primary_block bb1">';
											if(pointval!=''){
												str +='<a href="javascript:showRewardDetails(\''+product_id+'\',\''+blogo+'\',\''+bname+'\',\''+bdesc+'\',\''+pointval+'\',\''+brand_id+'\')" class="reward_item">';						
											}
											else
											{
												str +='<a href="" class="reward_item">';						
											
											}
											str +='	<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""/></div>';
											str +='	<div class="reward_brief">';
											str +='	<p>'+data.data[i].brand_name+'</p>';
											if(pointval!=''){
											str +='	<h2 class="item_rewards">'+pointval+'<span >Points</span></h2>';
											}
											else
											{
												str +='	<h4>Product Not Available<span></span></h4>';
											}

											str +='	</div>';
											str +='</a>';
											str +='</div>';*/
					
				}

				str +='</div>';
				document.getElementById("catpro"+catid).innerHTML=str;
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function site_Reg(xname,xmobile,btnID,materialtype){
 var mobileno_cont = $('#update_mobile_de').val();
 var material = $('#'+materialtype).val();
 var sname = $('#'+xname).val();
 var mobile = $('#'+xmobile).val();

//  console.log(sname + ' ' + mobile + ' ' + material);
 if(mobileno_cont == ''){
	toast('Please enter contractor primary mobile no first');
}else if(mobileno_cont.length!=10){
	toast('Please enter valid 10 digits contractor primary mobile number first');
}else if(sname=='' || mobile=='' || material == undefined)
 {
     toast('Please enter mandatory fields!');
 } else {

   $.ajax({
    url: SERVER2+'Site_Running_details_API.asp?apiuid=MLOYALAPI&apipswd=M0B!Q%24T%402o19&referedby='+mobileno_cont+'&Name='+sname+'&MobileNo='+mobile+'&matrialstatus='+material,
    type: 'GET',
    timeout: 50000,
    dataType: 'html',
   
    success: function(data, textStatus, xhr) {
		// console.log(data);
        //          console.log("data:" + JSON.stringify(data));
				 toast(JSON.stringify(data));
                 if(data == 'Site Running Details Submitted'){
					document.getElementById(btnID).disabled = true;
				 }
				 
				//  $.mobile.changePage( "#homepage", { transition: "none"} );
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

}

}

// $('.update_firstname_de').bind('keyup blur',function(inputtxt){   
// 	firstName(inputtxt);
// });
$('.update_firstname_de').keydown(function(e){
    return firstName(e);
});

function firstName(inputtxt)
      { 
		var key = inputtxt.keyCode;
		return ((key >= 65 && key <= 90) || key == 8 || key == 32);
			// 	var node = $('#'+inputtxt);
			//    node.val(node.val().replace(/[^a-zA-Z]/g,'') ); 
      }

	  function  testFirstName(){
		var FirstName = $('#update_firstname_de').val();
		var letters = /^[A-Za-z ]+$/;
         console.log(FirstName);
		if(FirstName.match(letters) || FirstName == ''){
			
	      }else{
			toast('Enter Name in English Only.');
			$('#update_firstname_de').val('');
		  }
	  }
	  

	  function viewService(){
		$('#my_panding_service_div').val('');
		$('#service_div').val('');
		toast("Under Constraction.");
		$.mobile.changePage( "#services", { transition: "none"} );
         console.log('viewService');
	  }

function showRewardDetails(bid,blogo,bname,bdesc,gvalue,brandid)
{
	
	var etype = localStorage.getItem("cattype");

	/*if(isGiftStore == true)
	{
		document.getElementById("qtydivision").style.display = 'none';
		document.getElementById("reward_division").style.display = 'none';
		document.getElementById("gift_division1").style.display = 'block';
	}
	else
	{*/
		document.getElementById("reward_division").style.display = 'block';
		document.getElementById("gift_division1").style.display = 'none';
		document.getElementById("pro_input_box").style.display = 'none';
		
	//}

	document.getElementById("pro_txt").innerHTML=bname;

    document.getElementById('pro_img').innerHTML= '<img src='+blogo+' class="img-responsive" alt="brandlogo"/>';

	document.getElementById("pro_desc").innerHTML='<h3 class="text-primary mt-0">Description</h3><p>'+bdesc+'</p>';

	document.getElementById("pro_points").innerHTML= gvalue+'<span>Points</span>';

	document.getElementById("select_qty").innerHTML = '<select id="detailqty" data-role="none" onchange="javascript:changepointval(\''+this.value+'\',\''+gvalue+'\');"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>';

	 document.getElementById("rewlink").onclick = function() {
				redeemProduct(bid,brandid,gvalue);
				return false;
		 };
    document.getElementById("giftlink1").onclick = function() {
				sendOTP(bid);
				return false;
		 };
    localStorage.setItem('gval',gvalue);
	$.mobile.changePage( "#reward_details", { transition: "none"} );



}

function changepointval(q,ptval)
{
	q = $('#detailqty').val();
	//alert('here'+q);
	q = parseInt(q)*parseInt(ptval);
	//alert(q);
	document.getElementById("pro_points").innerHTML= q+'<span>Points</span>';
}

function redeemProduct(pid,brandid,pvalue)
{
		if(user.mobile==null || user.mobile=='')
		{
				$.mobile.changePage( "#login_pg", { transition: "none"} );
				toast('Please login..');
		}
		else
		{
		    var qty = $('#detailqty').val();

			$.ajax({
			 url: SERVER3+'redeem_rewards_bybrand_json_api.asp',
			 type: 'GET',
			 timeout: 50000,
			 dataType: 'json',
			 data: { 'mobile': user.mobile, 'brand_Id': brandid, 'qty': qty, 'product_value' : pvalue},

			success: function(data, textStatus, xhr) {
						 
					// console.log('Data:'+JSON.stringify(data));
					toast(data.data);
					
					
					if(data.data=='Your loyalty points are not sufficient for redemption.')
				    { 
						$.mobile.changePage( "#reward_redeem_fail", { transition: "none"} );
					}
					else if (data.error.indexOf('Product quantity is not available')>=0)
					{
						document.getElementById('failqty').innerText = data.error;
						$.mobile.changePage( "#reward_redeem_failqty", { transition: "none"} );
					}
					else
					{
						/*var trackno='';
						try
						{
							trackno=data.data.substr(data.data.indexOf('#')+1,data.data.length);
						}
						catch (err)
						{
						}

						$('#rettrack').val(trackno);*/
						
                        document.getElementById("rrs_div").innerHTML= 'Voucher Code: '+data.Vouchercode;

						$.mobile.changePage( "#reward_redeem_success", { transition: "none"} );

						$('#username').val(localStorage.getItem("usernameatootbandhan"));
                        $('#password_myacc').val(localStorage.getItem("passwordatootbandhan"));

						setTimeout( function() {
							authenticate();
						}, 7000);  // 7 seconds
					}
					
					   
			},
			error: function(xhr, textStatus, errorThrown) {
						toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
		}
}

function copyTxt()
{
		var input = $('#coupon_code_input').val();
		if (navigator.clipboard) {
    navigator.clipboard.writeText(input).then(() => {
      console.log('Copied to clipboard successfully.');
    }, (err) => {
      console.log('Failed to copy the text to clipboard.', err);
    });
  } else if (window.clipboardData) {
    window.clipboardData.setData("Text", input);
  }
}

function popupstart_check()
{
	
	var cattype = localStorage.getItem('cattype_ex');
	if(cattype=='System Integrator')
	{
	    //bannerCoupons();
		
	}
	else
	{
		// do nothing
	}
}

function showTrainingbanners()
{
	 document.getElementById("homepagebanners_si").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));

				var str='';
				str+='<div class="primary_block mb-20 border_none promo_slider owl-carousel owl-theme p-0">';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='Training')
					{
						str+='<img src='+SERVER+json[i].AdImgURL+' class="img-responsive" alt="">';
					}
		        }
                
				str+='</div>';


				document.getElementById("homepagebanners_si").innerHTML= str;

				$(".promo_slider").owlCarousel({
					items:1,
					loop:false,
					margin:0,
					autoplay:true,
					nav:false,
					dots:false,
					autoplayTimeout:1800
				})

				//$.mobile.changePage( "#homepage", { transition: "none"} );

    }).error(function () {
        
            //toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

function bannerCoupons()
{

	 document.getElementById("homepagebanners_cpns_si").innerHTML= '';

	 var tabserver = SERVER+"cpns_history_json.asp";
	 
	 $.getJSON(
            tabserver , {  'mno': user.mobile }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));
                
				var str='';
			    str +='<div class="owl-carousel promo_slider2 owl-theme mb-10">';
                 
				for(var i=0;i<json.data.length;i++)
				{

					if(json.data[i].couponstatus == 'Active')
					{
						//str += '<div class="cpnbanner"><h4>'+json.data[i].couponcode+'<br>'+json.data[i].validtill+'</h4></div>';

                        str += '<div class="container_cpn">';
						str += '<div class="card_cpn">';
						str += '<div class="main_cpn">';
						str += '<div class="co-img">';
						str += '<img src="assets/images/no-img-gd.png" alt="" />';
						str += '</div>';
						str += '<div class="vertical_cpn"></div>';
						str += '<div class="content_cpn">';
						str += '<h2>atootbandhan</h2>';
						str += '<h1><span>'+json.data[i].couponcode+'</span></h1>';
						str += '<p>Valid till '+json.data[i].validtill+'</p>';
						str += '</div>';
						str += '</div>';
						//str += '<div class="copy-button">';
						//str += '<input id="copyvalue" type="text" readonly value="GOFREE" />';
						//str += '<button onclick="copyIt()" class="copybtn">COPY</button>';
						//str += '</div>';
						str += '</div>';
						str += '</div>';
					}
				
				}

				str += '</div>';

				document.getElementById("homepagebanners_cpns_si").innerHTML= str;

				$(".promo_slider2").owlCarousel({
					items:1,
					loop:false,
					margin:0,
					autoplay:true,
					nav:false,
					dots:false,
					autoplayTimeout:2800
				})

				//$.mobile.changePage( "#homepage", { transition: "none"} );

    }).error(function () {
        
            //toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });

}

function setProfilepic_border()
{
	   var mcls = document.getElementById("home_user_pic").classList;

		    if(user.membership_slab=='1' || user.membership_slab=='')
            {
               mcls.add("open_bdr");
            }
            else if(user.membership_slab=='2')
            {
               mcls.add("silver_bdr");
            }
			else if(user.membership_slab=='3')
            {
               mcls.add("gold_bdr");
            }
}

function submitEnquiry()
{

 var uname = $('#enquiry_name').val();
 var mobile = $('#enquiry_mobile').val();
 var email = $('#enquiry_email').val();
 var enquiry = $('#enquiry_txt').val();


 if(uname=='' || mobile=='' || email=='')
 {
     toast('Please enter mandatory fields!');
 }
 else
 {

   $.ajax({
    url: SERVER2+'ServiceEnquiryAPI.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'html',
    data: {
                'apiuid':'MLOYALAPI',
				'apipswd':'M0B!Q$T@2o19',
				'Name': uname,
				'MobileNo': mobile,
				'EmailId': email,
				'comment': enquiry
					
		  },
   
    success: function(data, textStatus, xhr) {
                console.log("data:" + JSON.stringify(data));

				toast('Service request submitted.');

				$.mobile.changePage( "#homepage", { transition: "none"} );

				resetEnquiryform();
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}

function resetEnquiryform()
{
	$('#enquiry_name').val('');
	$('#enquiry_mobile').val('');
	$('#enquiry_email').val('');
	$('#enquiry_txt').val('');
}

function receivedEventDummy(id) 
{
	var str = '';
	str +='<div class="notification_section">';
	str +='<div class="notification_overlay">';
	str +='</div>';
	str +='<div class="notification_pop">';
	str +='<a class="notification_close" onclick="closePop()">+</a>';
	str +='<div class="notification_block">';
	str +='<p class="notification_msg">Set your new tab and homepage to Yahoo to keep up with the latest news.</p>';
	str +='</div>';
	str +='</div>';
	str +='</div>';	
	$("#homepage").prepend(str);
	
}

function closePop()
{
	$(".notification_section").remove();
}

//var gettime;
//var seetime;
function checkNotification_none()
{

  $.ajax({

	url: SERVER+'not_json.asp',
	type: 'POST',
	timeout: 50000,
	dataType: 'json',
	data: {'mno': localStorage.getItem('usernameatootbandhan')},
	complete: function(xhr, textStatus) { 
	},
	success: function(data, textStatus, xhr) {


	var listItems= "";

	var today = new Date();
	var t_date = new Date(today.getFullYear(),today.getMonth(),today.getDate());


	if(data.length>0)
	{


		for (var i = 0; i < data.length; i++)
		{

				var split_date=data[i].msgdate.split('-');

				var msg_date = new Date(split_date[0],split_date[1]-1,split_date[2]);
			
				var Difference_In_Time = t_date.getTime() - msg_date.getTime(); 

				var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

				console.log('Difference_In_Days:'+Difference_In_Days);

		  if(Difference_In_Days<3)
		  {

			if(data[i].type=='ShowOnHomePage')
			{

							var str = '';
							 str +='<div class="notification_section">';
							 str +='<div class="notification_overlay">';
							 str +='</div>';
							 str +='<div class="notification_pop">';
							 str +='<a class="notification_close" onclick="closePop()">+</a>';
							 str +='<div class="notification_block p_relative">';
							 str+= "<div class=\"notifications_img1\"><img src=\""+data[i].image+"\" class=\"img-responsive\"></div>";
							 //str +='<p class="notification_msg">'+data[i].image+'</p>';
							 str +='<p class="notification_msg1">'+data[i].msg+'</p>';
							 str +='</div>';
							 str +='</div>';
							 str +='</div>';	
							 $("#homepage").prepend(str);
			}
		  }
		}
		/*var j = parseInt(data.length-1);
		gettime = (data[0].msgdate+data[0].msgtime);
		seetime = localStorage.getItem("nottimeseen");
		console.log('gettime'+gettime+'.....seetime'+seetime);
		if(gettime == seetime){
		localStorage.setItem("seennotification", "true");
		document.getElementById("ncount_home").innerHTML = '';
		$(".notification_btn img").removeClass("shake");
			
		}
		else
		{
		localStorage.removeItem("seennotification");
		document.getElementById("ncount_home").innerHTML= '<span class="noti_active"></span>' ;
			if((".notification_btn .noti_active").length > 0) {
				$(".notification_btn img").addClass("shake");
			}
		}*/
	  }

	},
	error: function(xhr, textStatus, errorThrown) {

	}
	});


}

function toggleDivbylointype()
{
	var cattype = localStorage.getItem('cattype_ex');

	if(cattype=='Mechanic')
	{

		document.getElementById("mymembership_section_txt_main").innerHTML= 'My Membership';
		document.getElementById("mymembership_section_txt_main_panel").innerHTML= 'My Membership';

		$('#homesection_main').css('display','none');
		$('#mymembership_section').css('display','block');
		$('#rewards_section').css('display','block');
		$('#homepagebanners_si').css('display','block');
		$('#homepagebanners_cpns_si').css('display','block');
		//$('#productportfolio_section').css('display','block');
		$('#announesocial_section').css('display','block');
		$('#helpsupport_section').css('display','block');
		$('#schemes_section').css('display','none');
		$('#scanqr_section').css('display','flex');

		$('#helpsupport_contactus').css('display','block');
		$('#helpsupport_serviceenquiry').css('display','block');

		$('#mymembership_section_1').css('display','block');
		$('#mymembership_section_2').css('display','block');
		$('#mymembership_section_3').css('display','block');
		$('#mymembership_section_4').css('display','block');
		$('#mymembership_section_panel_1').css('display','block');
		$('#mymembership_section_panel_2').css('display','block');
		$('#mymembership_section_panel_3').css('display','block');
		$('#mymembership_section_panel_4').css('display','block');

    
		/* side panel */

		$('#mymembership_section_panel').css('display','block');
		$('#rewards_section_panel').css('display','block');
		$('#productportfolio_section_panel').css('display','block');
		$('#announesocial_section_panel').css('display','block');
		$('#helpsupport_section_panel').css('display','block');
		$('#schemes_section_panel').css('display','none');

		$('#helpsupport_contactus_panel').css('display','block');
		$('#helpsupport_serviceenquiry_panel').css('display','block');
	}
	else
	{

		document.getElementById("mymembership_section_txt_main").innerHTML= 'My Membership & Transaction Details';
		document.getElementById("mymembership_section_txt_main_panel").innerHTML= 'My Membership & Transaction Details';
        
		$('#homesection_main').css('display','block');
		$('#mymembership_section').css('display','block');
		$('#rewards_section').css('display','block');
		$('#homepagebanners_si').css('display','none');
		$('#homepagebanners_cpns_si').css('display','none');
		//$('#productportfolio_section').css('display','block');
		$('#announesocial_section').css('display','block');
		$('#helpsupport_section').css('display','block');
		$('#schemes_section').css('display','none');
		$('#scanqr_section').css('display','flex');

		$('#helpsupport_contactus').css('display','block');
		$('#helpsupport_serviceenquiry').css('display','block');

		$('#mymembership_section_1').css('display','none');
		$('#mymembership_section_2').css('display','none');
		$('#mymembership_section_3').css('display','none');
		$('#mymembership_section_4').css('display','none');
		$('#mymembership_section_5').css('display','none');
		$('#mymembership_section_6').css('display','block');
		$('#mymembership_section_panel_1').css('display','none');
		$('#mymembership_section_panel_2').css('display','none');
		$('#mymembership_section_panel_3').css('display','none');
		$('#mymembership_section_panel_4').css('display','none');
		$('#mymembership_section_panel_5').css('display','none');
		$('#mymembership_section_panel_6').css('display','block');

    
		/* side panel */

		$('#mymembership_section_panel').css('display','block');
		$('#rewards_section_panel').css('display','block');
		$('#productportfolio_section_panel').css('display','block');
		$('#announesocial_section_panel').css('display','block');
		$('#helpsupport_section_panel').css('display','block');
		$('#schemes_section_panel').css('display','none');

		$('#helpsupport_contactus_panel').css('display','block');
		$('#helpsupport_serviceenquiry_panel').css('display','block');

	}
}

function toggleDivbylointype_old()
{
	var cattype = localStorage.getItem('cattype_ex');

	if(cattype=='System Integrator')
	{

		document.getElementById("mymembership_section_txt_main").innerHTML= 'My Membership & Transaction Details';
		document.getElementById("mymembership_section_txt_main_panel").innerHTML= 'My Membership & Transaction Details';

		$('#mymembership_section').css('display','block');
		$('#rewards_section').css('display','block');
		$('#homepagebanners_si').css('display','block');
		$('#homepagebanners_cpns_si').css('display','block');
		$('#productportfolio_section').css('display','block');
		$('#announesocial_section').css('display','block');
		$('#helpsupport_section').css('display','block');
		$('#schemes_section').css('display','none');
		$('#scanqr_section').css('display','flex');

		$('#helpsupport_contactus').css('display','block');
		$('#helpsupport_serviceenquiry').css('display','block');

		$('#mymembership_section_1').css('display','block');
		$('#mymembership_section_2').css('display','block');
		$('#mymembership_section_3').css('display','block');
		$('#mymembership_section_4').css('display','block');
		$('#mymembership_section_panel_1').css('display','block');
		$('#mymembership_section_panel_2').css('display','block');
		$('#mymembership_section_panel_3').css('display','block');
		$('#mymembership_section_panel_4').css('display','block');

    
		/* side panel */

		$('#mymembership_section_panel').css('display','block');
		$('#rewards_section_panel').css('display','block');
		$('#productportfolio_section_panel').css('display','block');
		$('#announesocial_section_panel').css('display','block');
		$('#helpsupport_section_panel').css('display','block');
		$('#schemes_section_panel').css('display','none');

		$('#helpsupport_contactus_panel').css('display','block');
		$('#helpsupport_serviceenquiry_panel').css('display','block');
	}
	if(cattype=='Marketing')
	{

		document.getElementById("mymembership_section_txt_main").innerHTML= 'My Profile';
		document.getElementById("mymembership_section_txt_main_panel").innerHTML= 'My Profile';

		$('#mymembership_section').css('display','block');
		$('#rewards_section').css('display','block');
		$('#homepagebanners_si').css('display','none');
		$('#homepagebanners_cpns_si').css('display','none');
		$('#productportfolio_section').css('display','block');
		$('#announesocial_section').css('display','block');
		$('#helpsupport_section').css('display','block');
		$('#schemes_section').css('display','block');
		$('#scanqr_section').css('display','flex');

		$('#helpsupport_contactus').css('display','block');
		$('#helpsupport_serviceenquiry').css('display','none');


		$('#mymembership_section_1').css('display','none');
		$('#mymembership_section_2').css('display','none');
		$('#mymembership_section_3').css('display','none');
		$('#mymembership_section_4').css('display','none');
		$('#mymembership_section_5').css('display','none');
		$('#mymembership_section_6').css('display','block');
		$('#mymembership_section_panel_1').css('display','none');
		$('#mymembership_section_panel_2').css('display','none');
		$('#mymembership_section_panel_3').css('display','none');
		$('#mymembership_section_panel_4').css('display','none');
		$('#mymembership_section_panel_5').css('display','none');
		$('#mymembership_section_panel_6').css('display','block');

		/* side panel */

		$('#mymembership_section_panel').css('display','block');
		$('#rewards_section_panel').css('display','block');
		$('#productportfolio_section_panel').css('display','block');
		$('#announesocial_section_panel').css('display','block');
		$('#helpsupport_section_panel').css('display','block');
		$('#schemes_section_panel').css('display','block');

		$('#helpsupport_contactus_panel').css('display','block');
		$('#helpsupport_serviceenquiry_panel').css('display','none');

	}
	if(cattype=='Product')
	{

		document.getElementById("mymembership_section_txt_main").innerHTML= 'My Profile';
		document.getElementById("mymembership_section_txt_main_panel").innerHTML= 'My Profile';

		$('#mymembership_section').css('display','block');
		$('#rewards_section').css('display','block');
		$('#homepagebanners_si').css('display','none');
		$('#homepagebanners_cpns_si').css('display','none');
		$('#productportfolio_section').css('display','block');
		$('#announesocial_section').css('display','block');
		$('#helpsupport_section').css('display','block');
		$('#schemes_section').css('display','block');
		$('#scanqr_section').css('display','flex');

		$('#helpsupport_contactus').css('display','block');
		$('#helpsupport_serviceenquiry').css('display','none');

		$('#mymembership_section_1').css('display','none');
		$('#mymembership_section_2').css('display','none');
		$('#mymembership_section_3').css('display','none');
		$('#mymembership_section_4').css('display','none');
		$('#mymembership_section_5').css('display','none');
		$('#mymembership_section_6').css('display','block');
		$('#mymembership_section_panel_1').css('display','none');
		$('#mymembership_section_panel_2').css('display','none');
		$('#mymembership_section_panel_3').css('display','none');
		$('#mymembership_section_panel_4').css('display','none');
		$('#mymembership_section_panel_5').css('display','none');
		$('#mymembership_section_panel_6').css('display','block');

		/* side panel */

		$('#mymembership_section_panel').css('display','block');
		$('#rewards_section_panel').css('display','block');
		$('#productportfolio_section_panel').css('display','block');
		$('#announesocial_section_panel').css('display','block');
		$('#helpsupport_section_panel').css('display','block');
		$('#schemes_section_panel').css('display','block');

		$('#helpsupport_contactus_panel').css('display','block');
		$('#helpsupport_serviceenquiry_panel').css('display','none');

	}
	if(cattype=='Service')
	{

		document.getElementById("mymembership_section_txt_main").innerHTML= 'My Profile';
		document.getElementById("mymembership_section_txt_main_panel").innerHTML= 'My Profile';

		$('#mymembership_section').css('display','block');
		$('#rewards_section').css('display','none');
		$('#homepagebanners_si').css('display','none');
		$('#homepagebanners_cpns_si').css('display','none');
		$('#productportfolio_section').css('display','block');
		$('#announesocial_section').css('display','block');
		$('#helpsupport_section').css('display','block');
		$('#schemes_section').css('display','none');
		$('#scanqr_section').css('display','flex');

		$('#helpsupport_contactus').css('display','none');
        $('#helpsupport_serviceenquiry').css('display','none');


		$('#mymembership_section_1').css('display','none');
		$('#mymembership_section_2').css('display','none');
		$('#mymembership_section_3').css('display','none');
		$('#mymembership_section_4').css('display','none');
		$('#mymembership_section_5').css('display','none');
		$('#mymembership_section_panel_1').css('display','none');
		$('#mymembership_section_panel_2').css('display','none');
		$('#mymembership_section_panel_3').css('display','none');
		$('#mymembership_section_panel_4').css('display','none');
		$('#mymembership_section_panel_5').css('display','none');

		/* side panel */

		$('#mymembership_section_panel').css('display','block');
		$('#rewards_section_panel').css('display','none');
		$('#productportfolio_section_panel').css('display','block');
		$('#announesocial_section_panel').css('display','block');
		$('#helpsupport_section_panel').css('display','block');
		$('#schemes_section_panel').css('display','none');

		$('#helpsupport_contactus_panel').css('display','none');
		$('#helpsupport_serviceenquiry_panel').css('display','none');
	}
}

function listCategoryhomepage()
{


	'use strict';	
	   $.ajax({

		 url: SERVER_m+'getcat/getloccatsall/'+gbrd,
		 type: 'GET',
		 timeout: 70000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
			  //console.log(data);
			  var str1 = '';
			  var str2 = '';
			  
			  for (var i = 0; i < data.length; i++)
			  {

				var cat_img = '';
				if(typeof data[i].imagefolder == undefined ||typeof data[i].imagefolder == 'undefined' || data[i].imagefolder == null || data[i].imagefolder == 'null' || data[i].imagefolder == '' )
                {
					cat_img = 'assets/images/no-img-gd.png';
                }
			    else
				{
					cat_img = data[i].imagefolder;
				}


				if(typeof data[i].subcategory==undefined || typeof data[i].subcategory=="undefined" || data[i].subcategory==undefined || data[i].subcategory==null || data[i].subcategory=='' || data[i].subcategory=='null')
                {

					str1+='<a class="thumb" href="javascript:showProductShare(\''+data[i].id+'\',\''+data[i].name+'\');">';
					str1+='<div class="thumb_icon"> <img src="'+cat_img+'" alt=""> </div>';
					str1+='<p>'+data[i].name+'</p>';
					str1+='</a>';

					str2+='<li><a href="javascript:showProductShare(\''+data[i].id+'\',\''+data[i].name+'\');">'+data[i].name+'</a></li>';

				}
				else
                {

					str1+='<a class="thumb" href="javascript:showProductShare_Subcat(\''+data[i].id+'\',\''+data[i].name+'\',\''+cat_img+'\');">';
					str1+='<div class="thumb_icon"> <img src="'+cat_img+'" alt=""> </div>';
					str1+='<p>'+data[i].name+'</p>';
					str1+='</a>';

					str2+='<li><a href="javascript:showProductShare_Subcat(\''+data[i].id+'\',\''+data[i].name+'\',\''+cat_img+'\');">'+data[i].name+'</a></li>';
				}
				 
				
				

              }

			  document.getElementById("product_cat_homepage").innerHTML=str1;
			  document.getElementById("product_cat_homepage_sidebar").innerHTML=str2;

                
		},
		error: function(xhr, textStatus, errorThrown) {
			    //toast('Network error..Please Reload');
		}
	  });

}

function showProductShare_Subcat(id,name,catimg)
{
	var str='';
		                str +='<div class="primary_block" id="catdiv_new'+id+'">';
						str +='<a href="javascript:toggleDivnew(\'catinnerdiv_new'+id+'\', \'catdiv_new'+id+'\');" class="what_new_item ui-link">';
						str +='<div class="item_img"><img src='+catimg+' class="img-responsive" alt=""/></div>';
						str +='<div class="item_brief">';
						str +='<h4>'+name+'</h4>';
						str +='</div>';
						str +='<div class="plus minus"></div>';
						str +='</a>';
						//str +='<div class="ui-grid-a social_share_list"><div class="ui-block-a"> <img src="assets/images/wapp.png" class="img-responsive" onclick="javascript:shareProductsCat(\''+data[i].id+'\',\''+data[i].name+'\',\''+catimg+'\');"></div><div class="ui-block-a"> <img src="assets/images/fb.png" class="img-responsive" onclick="javascript:shareProductsCatFb(\''+data[i].id+'\',\''+data[i].name+'\',\''+catimg+'\');"></div></div>';
					    str +='</div>';


						str+='<div id="catinnerdiv_new'+id+'" class="catinnerhdr">';
						str+='</div>';


						addSubcategory_new(id);



						document.getElementById("subcatlist").innerHTML=str;

			            $.mobile.changePage('#subcat');
}

function showProductShare_Subcat_l2(id,name,catimg)
{
	var str='';
		                str +='<div class="primary_block" id="catdiv_new_l2'+id+'">';
						str +='<a href="javascript:toggleDivnew(\'catinnerdiv_new_l2'+id+'\', \'catdiv_new_l2'+id+'\');" class="what_new_item ui-link">';
						str +='<div class="item_img"><img src='+catimg+' class="img-responsive" alt=""/></div>';
						str +='<div class="item_brief">';
						str +='<h4>'+name+'</h4>';
						str +='</div>';
						str +='<div class="plus minus"></div>';
						str +='</a>';
						//str +='<div class="ui-grid-a social_share_list"><div class="ui-block-a"> <img src="assets/images/wapp.png" class="img-responsive" onclick="javascript:shareProductsCat(\''+data[i].id+'\',\''+data[i].name+'\',\''+catimg+'\');"></div><div class="ui-block-a"> <img src="assets/images/fb.png" class="img-responsive" onclick="javascript:shareProductsCatFb(\''+data[i].id+'\',\''+data[i].name+'\',\''+catimg+'\');"></div></div>';
					    str +='</div>';


						str+='<div id="catinnerdiv_new_l2'+id+'" class="catinnerhdr">';
						str+='</div>';


						addSubcategory_new_l2(id);



						document.getElementById("subcatlist2").innerHTML=str;

			            $.mobile.changePage('#subcat2');
}

function addSubcategory_new_l2(catid)
{
	'use strict';	
	   $.ajax({
		 url: SERVER_m+'getcat/getloccatsall/'+gbrd,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));

				var str='';
				str+= '<div class="subdiv">';
				str+= '<ul>';
                
				for(var i=0;i<data.length;i++)
				{
				    //if(data[i].id==catid)
					//{

						for(var k=0;k<data[i].subcategory.length;k++)
						{
							
                          
						  if(data[i].subcategory[k].id==catid)
					      {
                            
                            for(var j=0;j<data[i].subcategory[k].subcategory.length;j++)
							{

								var catimg = data[i].subcategory[k].subcategory[j].imagefolder;
								if(typeof catimg == undefined ||typeof catimg == 'undefined' || catimg == null || catimg == 'null' || catimg == '')
								{
									 catimg = 'assets/images/no-img.jpg';    
								}

				

								str +='<div class="primary_block" id="catdiv_new_l2'+data[i].subcategory[k].subcategory[j].id+'">';

								
								str +='<a href="javascript:showProductShare(\''+data[i].subcategory[k].subcategory[j].id+'\',\''+data[i].subcategory[k].subcategory[j].name+'\');" class="what_new_item ui-link">';
								


								str +='<div class="item_img"><img src='+catimg+' class="img-responsive" alt=""/></div>';
								str +='<div class="item_brief">';
								str +='<h4>'+data[i].subcategory[k].subcategory[j].name+'</h4>';
								str +='</div>';
								//str +='<div class="plus minus"></div>';
								str +='</a>';

								//str +='<div class="ui-grid-a social_share_list_new"><div class="ui-block-a"> <img src="assets/images/wapp.png" class="img-responsive" onclick="javascript:shareProductsCat(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');"></div><div class="ui-block-a"> <img src="assets/images/fb.png" class="img-responsive" onclick="javascript:shareProductsCatFb(\''+data[i].subcategory[k].id+'\',\''+data[i].subcategory[k].name+'\',\''+catimg+'\');"></div></div>';
								

								str +='</div>';

						    }

						}

					
						}
					//}
					
				}

				str+='</ul>';
				str+='<div>';
				
				document.getElementById("catinnerdiv_new_l2"+catid).innerHTML=str;
        
        
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function checkforundefined_gst(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='0';
    }
        return str;
}

$(document).on('pageshow', '#notificationspg', function (event, ui) {
    
	showNotification();
    
});

$(document).on('pageshow', '#addtransactions', function (event, ui) {
    
//get_item_master();

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10)
	{
		dd='0'+dd;
	} 
	if(mm<10)
	{
		mm='0'+mm;
	}

	today = yyyy+'-'+mm+'-'+dd;
	document.getElementById("tx_date").value = today;

});

$(document).on('pageshow', '#notificationspg_se', function (event, ui) {
    
	showNotification_se();
    
});

function checkpin(str)
{
	var str1 = $('#'+str).val();

	if(str1.trim()!='')
	{
		if(str1.length==6)
		{
			return (true);
			
		}
		toast('Invalid Pincode');
		$('#'+str).val('');
		return (false);
	}
}

function gotomessages()
{

 //document.getElementById("ncount_home").innerHTML = '';

 $.ajax({

	url: SERVER+'msg_history_json.asp',
	type: 'GET',
	timeout: 50000,
	dataType: 'json',
	data: {'mno': localStorage.getItem('usernameatootbandhan')},
	complete: function(xhr, textStatus) {
	},
	success: function(data, textStatus, xhr) {

		if(data.length>0)
		{
			var listItems= "";

			//var setime = (data[0].msgdate+data[0].msgtime);
			//localStorage.setItem("nottimeseen",setime);
			localStorage.setItem("notseen_count",data.length);

			for(var i = 0; i < data.length; i++)
			{

				listItems+= "<div class=\"notifications_thread\" >";
				listItems+= "<div class=\"notifications_img\"><img src=\"assets/images/logo2.png\" class=\"img-responsive\"></div>";
				listItems+="<div class=\"notification_content\"><p class=\"noti_text\">"+data[i].msg+"</p>";
				listItems+="<p class=\"noti_date\">"+data[i].msgdate+' '+data[i].msgtime+"</p>";
				listItems+="</div>";
				listItems+="</div>";
				listItems+="</div>";
			}

			document.getElementById("inbox_div").innerHTML = listItems;

			
		}
		else
		{     
			  //localStorage.setItem("notseen_count","0");
			  document.getElementById("inbox_div").innerHTML = 'No msg Available!!';
		}

		$.mobile.changePage( "#messagepg", {transition: "slide"} );


	},
	error: function(xhr, textStatus, errorThrown) {

	}
	});

}

function gotopoints()
{
	    $.mobile.changePage( "#pointspg", { transition: "none"} );
		showTabContent('loyaltynew', 'points_history_json.asp');
}

function showNotification_se()
{

 //document.getElementById("ncount_home").innerHTML = '';

 $.ajax({

	url: SERVER+'msg_history_json.asp',
	type: 'GET',
	timeout: 50000,
	dataType: 'json',
	data: {'mno': localStorage.getItem('usernameatootbandhan')},
	complete: function(xhr, textStatus) {
	},
	success: function(data, textStatus, xhr) {

		if(data.length>0)
		{
			var listItems= "";

			//var setime = (data[0].msgdate+data[0].msgtime);
			//localStorage.setItem("nottimeseen",setime);
			localStorage.setItem("notseen_count_se",data.length);

			for(var i = 0; i < data.length; i++)
			{

				listItems+= "<div class=\"notifications_thread\" >";
				listItems+= "<div class=\"notifications_img\"><img src=\"assets/images/logo.png\" class=\"img-responsive\"></div>";
				listItems+="<div class=\"notification_content\"><p class=\"noti_text\">"+data[i].msg+"</p>";
				listItems+="<p class=\"noti_date\">"+data[i].msgdate+' '+data[i].msgtime+"</p>";
				listItems+="</div>";
				listItems+="</div>";
				listItems+="</div>";
			}

			document.getElementById("notification_div_se").innerHTML = listItems;

			//$.mobile.changePage( "#notificationspg", {transition: "slide"} );
		}
		else
		{     
			  localStorage.setItem("notseen_count_se","0");
			  document.getElementById("notification_div_se").innerHTML = 'No Notification Available!!';
		}


	},
	error: function(xhr, textStatus, errorThrown) {

	}
	});

}

var gettime;
var seetime;
function checkNotification2()
{

//shownotbrands();

$.ajax({

url: SERVER+'msg_history_json.asp',
type: 'GET',
timeout: 50000,
dataType: 'json',
data: {'mno': localStorage.getItem('usernameatootbandhan')},
complete: function(xhr, textStatus) { 
},
success: function(data, textStatus, xhr) {


var listItems= "";

var today = new Date();
var t_date = new Date(today.getFullYear(),today.getMonth(),today.getDate());


if(data.length>0)
{

	/*for (var i = 0; i < data.length; i++)
	{

			var split_date=data[i].msgdate.split('-');

			var msg_date = new Date(split_date[0],split_date[1]-1,split_date[2]);

			var Difference_In_Time = t_date.getTime() - msg_date.getTime(); 

			var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

			console.log('Difference_In_Days:'+Difference_In_Days);

	  if(Difference_In_Days<3)
	  {

	 					var str = '';
						 str +='<div class="notification_section">';
						 str +='<div class="notification_overlay">';
						 str +='</div>';
						 str +='<div class="notification_pop">';
						 str +='<a class="notification_close" onclick="closePop()">+</a>';
						 str +='<div class="notification_block p_relative">';
						 str+= "<div class=\"notifications_img1\"><img src=\""+data[i].image+"\" class=\"img-responsive\"></div>";
						 //str +='<p class="notification_msg">'+data[i].image+'</p>';
						 str +='<p class="notification_msg1">'+data[i].msg+'</p>';
						 str +='</div>';
						 str +='</div>';
						 str +='</div>';	
					     $("#dashboard").prepend(str);
		
	  }
	}*/

	var j = parseInt(data.length-1);
	gettime = (data[0].msgdate+data[0].msgtime);
	seetime = localStorage.getItem("nottimeseen");
	console.log('gettime:'+gettime);
	console.log('seetime:'+seetime);
	if(gettime == seetime)
	{
		//localStorage.setItem("seennotification", "true");
		$(".notifiction_btn").removeClass("notification_active");
	}
	else
	{
		//localStorage.removeItem("seennotification");
		$(".notification_btn").addClass("notification_active");
	}
  }

},
error: function(xhr, textStatus, errorThrown) {

}
});

}

function checkNotification()
{

 $.ajax({
	url: SERVER+'msg_history_json.asp',
	type: 'GET',
	timeout: 50000,
	dataType: 'json',
	data: {'mno': localStorage.getItem('usernameatootbandhan')},
	complete: function(xhr, textStatus) { 
	},
	success: function(data, textStatus, xhr) {
   
        //console.log("data:"+JSON.stringify(data));

		if(data.length>0)
		{
			if(localStorage.getItem("notseen_count"))
			{
				var notseen_count1 = localStorage.getItem("notseen_count");
			}
			else
			{
				var notseen_count1 = 0;
			}

			var notseen_count2 = data.length;
			console.log('notseen_count1:'+notseen_count1);
			console.log('notseen_count2:'+notseen_count2);

			if(notseen_count1 == notseen_count2)
			{
				$("#notification_home").attr("data-value", 0);
			}
			else
			{
				var notcount_diff = parseInt(notseen_count2) - parseInt(notseen_count1);
				console.log('notcount_diff:'+notcount_diff);
				$("#notification_home").attr("data-value", notcount_diff);
			}
		}

	},
	error: function(xhr, textStatus, errorThrown) {

	}
	});

}

function checkNotification_se()
{

 $.ajax({
	url: SERVER+'msg_history_json.asp',
	type: 'GET',
	timeout: 50000,
	dataType: 'json',
	data: {'mno': localStorage.getItem('usernameatootbandhan')},
	complete: function(xhr, textStatus) { 
	},
	success: function(data, textStatus, xhr) {
   
        //console.log("data:"+JSON.stringify(data));

		if(data.length>0)
		{
			if(localStorage.getItem("notseen_count_se"))
			{
				var notseen_count1 = localStorage.getItem("notseen_count_se");
			}
			else
			{
				var notseen_count1 = 0;
			}

			var notseen_count2 = data.length;
			console.log('notseen_count1:'+notseen_count1);
			console.log('notseen_count2:'+notseen_count2);

			if(notseen_count1 == notseen_count2)
			{
				$("#notification_home_se").attr("data-value", 0);
			}
			else
			{
				var notcount_diff = parseInt(notseen_count2) - parseInt(notseen_count1);
				console.log('notcount_diff:'+notcount_diff);
				$("#notification_home_se").attr("data-value", notcount_diff);
			}
		}

	},
	error: function(xhr, textStatus, errorThrown) {

	}
	});

}

function setUserbalance_aboutus()
{
	 $.ajax({
	    url: SERVER+'points_history_json.asp',
	    type: 'GET',
	    timeout: 50000,
		dataType: 'json',
		data: {'mno': user.mobile},
		complete: function(xhr, textStatus) {
	       //called when complete
		},
		success: function(data, textStatus, xhr) {

		    //console.log('JSONDATA:'+JSON.stringify(data));
			document.getElementById("tpoint").innerHTML = data.balance;
			document.getElementById("trans_pts").innerHTML = data.balance;
			
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function showScan_register()
{

   cordova.plugins.barcodeScanner.scan(
			   function (result) {

					//$.mobile.changePage( "#homepage", {transition: "none"} );

					if(result.cancelled == true)
				    {
						toast('Scanning canceled');
				    }
					else
				    {

						var bcode=result.text;
						var bcodenew = bcode.trim();
						showScan_register_submit(bcodenew);

					}

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417,CODABAR,DATA_MATRIX,RSS14,CODE_39,CODE_93,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );

}

function showScan_register_submit(itemcode)
{
    var scanby ='';
	var cattype = localStorage.getItem('cattype_ex');
    
	if(cattype=='System Integrator')
	{
        scanby ='SI';
	}
	if(cattype=='National Distributor')
	{
		scanby ='ND';
	}
	if(cattype=='Sales Distributor')
	{
		scanby ='SD';
	}
	if(cattype=='Regional Distributor')
	{
		scanby ='RD';
	}

	$.ajax({
		url: SERVER2+'scan_product_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o21','mobileno': user.mobile,'itmcode': itemcode,'scanby': scanby },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		    console.log(JSON.stringify(data));

			if(data.error.length>=1)
			{
				toast_p(data.error);
				//$.mobile.changePage( "#homepage", { transition: "none"} );
			}
			else
			{
				toast_p(data.data);
				$.mobile.changePage( "#homepage", { transition: "none"} );
			}
		},
		error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function viewTransactions_register()
{

	var scanby ='';
	var cattype = localStorage.getItem('cattype_ex');
    
	if(cattype=='System Integrator')
	{
        scanby ='SI';
	}
	if(cattype=='National Distributor')
	{
		scanby ='ND';
	}
	if(cattype=='Sales Distributor')
	{
		scanby ='SD';
	}
	if(cattype=='Regional Distributor')
	{
		scanby ='RD';
	}

	$.ajax({
		url: SERVER2+'get_scan_product_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o21','mobileno': user.mobile, 'scanby': scanby },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';

			if(data.error.length>=1)
			{
				toast(data.error);
				document.getElementById('transactions_register_div').innerHTML= '';
			}
			else
			{

				 str +='<div class="table-responsive">';
			     str +='<table class="table couter_list bg-dark">';
			     str +='<thead class="table_header"><th>Product Name</th><th>Product Code</th><th>Price(Rs.)</th><th>Category</th></thead>';

				 for (var i = 0; i < data.data.length; i++)
				 {	
					
				
					str+='<tr>';
					str+='<td>'+data.data[i].item_name+'</td>';
					str+='<td>'+data.data[i].item_code+'</td>';
					str+='<td>'+data.data[i].item_price+'</td>';
					str+='<td>'+data.data[i].item_category+'</td>';
					//str+='<td>'+data.data[i].item_descr+'</td>';
					str+='</tr>';
				 }

				 str +='</table>';
		         str +='</div>';

				 document.getElementById('transactions_register_div').innerHTML=str;

				 $.mobile.changePage( "#transactions_register", {transition: "slide"} );

			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function viewTransactions_main()
{
	   var str = '';
        
			  str +='<div class="table-responsive">';
			  str +='<table class="table couter_list bg-dark">';
			  str +='<thead class="table_header"><th>Product Name</th><th>Product Code</th><th>Date</th><th>Points</th></thead>';

			  for (var j = 0; j < 2; j++)
			  {
					str+='<tr>';
					str+='<td>Digital Cam</td>';
					str+='<td>DB012345</td>';
					str+='<td>07/02/2022 5:43 PM</td>';
					str+='<td>10</td>';
					str+='</tr>';
			  } 
                      
			  str +='</table>';
		      str +='</div>';

       document.getElementById("transactions_register_div").innerHTML = str;

	   $.mobile.changePage( "#transactions_register", {transition: "slide"} );
}

function checkWarranty()
{
	var str='';


					var imgurlnew= 'assets/images/fridge2.png';

					if(imgurlnew=='null' || imgurlnew==null || imgurlnew=='' || imgurlnew=='undefined')
					{
						imgurlnew = 'assets/images/no-img-bg.jpg';
					}

					if(imgurlnew.indexOf("http://")>=0)
					{
						imgurlnew = imgurlnew.replace('http://','https://');
					}

					str+='<div class="mb-20 promo_slider_genuine p-0" style="border:1px solid #aeaeae;border-radius: 10px">';
					str+='<img src='+imgurlnew+' class="img-responsive-genuine" alt="">';
				    str+='</div>';
					
					str+='<table class="DescTable"><tbody>';
					str +='<thead class="table_header"><th>Product Name</th><th>Desription</th><th>End ate</th></thead>';
					str +='<tr><td>Refrigerator</td><td>atootbandhan Eon Astra 280</td><td>04/03/2022</td></tr>';
					str+='</tbody></table><br><br>';


					//str+='<button class="btn btn_primary" onclick="javascript:goto_warrantyregiser(\''+data.data[0].ItemCode+'\',\''+data.data[0].ItemName+'\',\''+data.data[0].ItemPrice+'\');" data-role="none">Click here for warranty registration</button>';

					//str+='<br><button class="btn btn_primary btn-itemvdo" onclick="javascript:goto_prctVideo(\''+checkforundefined(data.data[0].ItemVideo)+'\');" data-role="none">Click here for product video</button>';


                    document.getElementById("geneuine_div").innerHTML= str;

					$.mobile.changePage( "#genuineproductpg", {transition: "none"} );

}

function checkgst_old()
{
  var gstno = $('#update_gstno').val();
  
  if(gstno.length!=15)
  {
		toast('Please enter valid GST No.');
		$('#update_gstno').val('');
  }
  else
  {
	  // do nothing
  }
}

function checkgst(str1)
{

  var gst_no = $('#'+str1).val().toUpperCase();
  
  if(gst_no!='')
  {
	var regpan = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
	if(regpan.test(gst_no))
	{
		//checkproofvalidity('GST',str);
		//return(true);
		check_gst_alreay_exist(str1,gst_no);
	}
	else
	{
		$('#'+str1).val('');
		toast('Invalid GSTIN');
		return (false);
	}
  }
  
}

function check_gst_alreay_exist(str,gst)
{
    	 
		 $.ajax({
			url: 'https://taghash.co/atootbandhan/validategst.php',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'gst': gst
				
				},
			success: function(data, textStatus, xhr) {
				
					console.log('Data:'+JSON.stringify(data));

					if(data.success=='0')
					{
						//do nothing
					}
					else
					{
						$('#'+str).val('');
						toast('GSTIN already exist');
					}
			 },
			error: function(xhr, textStatus, errorThrown) {
				   toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
}

function checkpan_old(str1)
{
	var str1 = $('#'+str).val();
	var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
	if(regpan.test(str1))
	{
		//checkproofvalidity('PAN',str);
		return(true);
	}
	toast('Invalid Pan No');
	$('#'+str).val('');
	return (false);
}

function checkpan(str)
{
	var str1 = $('#'+str).val();
    
	//if(str1!='')
	//{
		var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
		if(regpan.test(str1))
		{
			//checkproofvalidity('AADHAR',str);
			//return (true);
			check_pan_alreay_exist(str,str1);

		}
		else
		{
			$('#'+str).val('');
			toast('Invalid Pan Card No');
			return false;
		}
	//}
}

function check_pan_alreay_exist(str,pancardno)
{
    	 
		 $.ajax({
			url: 'https://taghash.co/atootbandhan/validatepan.php',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'Pan_card_no': pancardno
				
				},
			success: function(data, textStatus, xhr) {
				
					console.log('Data:'+JSON.stringify(data));

					if(data.success=='0')
					{
						//do nothing
					}
					else
					{
						$('#'+str).val('');
						toast('Pan card no. already exist');
						return false;
					}
			 },
			error: function(xhr, textStatus, errorThrown) {
				   toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
}

function checkaadhar_old(str)
{
  
  var str1 = $('#'+str).val();

  if(str1!='')
  {
	if(str1.length==12)
	{
		//checkproofvalidity('AADHAR',str);
		//return (true);
		check_aadhar_alreay_exist(str,str1);
	}
	else
	{
        $('#'+str).val('');
		toast('Invalid Aadhar Card No');
		return false;
	}
  }
}

function check_aadhar_alreay_exist(str,aadhar)
{
    	 
		 $.ajax({
			url: 'https://taghash.co/atootbandhan/validateid.php',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'adharno': aadhar
				
				},
			success: function(data, textStatus, xhr) {
				
					console.log('Data:'+JSON.stringify(data));

					if(data.success=='0')
					{
						//do nothing
					}
					else
					{
						$('#'+str).val('');
						toast('Aadhar no. already exist');
						return false;
					}
			 },
			error: function(xhr, textStatus, errorThrown) {
				   toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
}

function getdetailsPincode()
{
    var pincode =  $('#update_pincode').val();

	$.ajax({
		url: 'https://api.postalpincode.in/pincode/'+pincode,
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {},
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		    console.log(JSON.stringify(data));
			console.log(data[0].Status);

            if(data[0].Status=='Success')
		    {
				$('#update_address').val(data[0].PostOffice[0].Block);
				//$('#update_city').val(data[0].PostOffice[0].District);
				//$('#update_state').val(data[0].PostOffice[0].State);

				var selectedText = data[0].PostOffice[0].State;
				// Now set dropdown selected option to 'State'.
				$('#update_state_list option').map(function () {
					if ($(this).text() == selectedText) return this;
				}).attr('selected', 'selected');

				fetchDistrictlist_new(data[0].PostOffice[0].District);
		    }
			
		},
		error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

	  //loadLocation_pincode(pincode);
}

function getdetailsPincode_byse()
{
    var pincode =  $('#update_pincode_byse').val();

	$.ajax({
		url: 'https://api.postalpincode.in/pincode/'+pincode,
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {},
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		    console.log(JSON.stringify(data));
			console.log(data[0].Status);

            if(data[0].Status=='Success')
		    {
				$('#update_address_byse').val(data[0].PostOffice[0].Block);
				$('#update_city_byse').val(data[0].PostOffice[0].District);
				//$('#update_state_byse').val(data[0].PostOffice[0].State);

				var selectedText = data[0].PostOffice[0].State;
				// Now set dropdown selected option to 'State'.
				$('#update_state_list_byse option').map(function () {
					if ($(this).text() == selectedText) return this;
				}).attr('selected', 'selected');

				fetchDistrictlist_new_byse(data[0].PostOffice[0].District);
		    }
			
		},
		error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });CSO_stateId

	  //loadLocation_pincode(pincode);
}

function fetchDistrictlist()
{
	console.log('show district')
	var stateid = localStorage.getItem('CSO_StateID');
     console.log(stateid);
  $.ajax({
    url: GSERVER2+'Get_alldistrict_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
      console.log(data)
   
        var listItems= "";
		    listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select District*-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			
			if(data.data[i].Districtname == user.district)
				listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
			else
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
			
		}


				  $("#update_district_de").html(listItems);


   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

}



function fetchDistrictlist_new(mydist)
{
 
  
  var stateid = $('#update_state_list').val();

  $.ajax({
    url: GSERVER2+'Get_alldistrict_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
		    listItems+= "<option value='d' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select District-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			
			if(data.data[i].Districtname == user.district)
				listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
			else
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
			
		}


				  $("#update_district").html(listItems);
	

				  $('#update_district option').map(function () {
					if ($(this).text() == mydist) return this;
				  }).attr('selected', 'selected');
		
				  /*$("#update_city_ret").selectmenu('refresh');*/
  
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

}

function fetchDistrictlist_new_byse(mydist)
{
 
  
  var stateid = $('#update_state_list_byse').val();

  $.ajax({
    url: GSERVER2+'Get_alldistrict_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
		    listItems+= "<option value='d' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select District*-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			
			if(data.data[i].Districtname == user.district)
				listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
			else
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
			
		}


				  $("#update_district_byse").html(listItems);
	

				  $('#update_district_byse option').map(function () {
					if ($(this).text() == mydist) return this;
				  }).attr('selected', 'selected');
		
				  /*$("#update_city_ret_byse").selectmenu('refresh');*/
  
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });


}

function fetchDistrictlist_byse_fetch(stateid,districtid,cityid,store_code)
{
		

  $.ajax({
    url: GSERVER2+'Get_alldistrict_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
		    listItems+= "<option value='d' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select District-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			
			if(districtid!='')
			{
				if(data.data[i].Districtid == districtid)
					listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
				else
					listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
			}
			else
			{
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
			}
			
		}


		$("#update_district_byse").html(listItems);


		if(districtid!='')
		{
			fetchCitylist_byse_fetch(districtid,cityid,store_code);
		}

    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

}

function fetchDistrictlist_1(stateid)
{
		

  $.ajax({
    url: GSERVER2+'Get_alldistrict_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
		    listItems+= "<option value='d' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select District-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			
			if(data.data[i].Districtname == user.district)
				listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
			else
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
			
		}

    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

}

function fetchDistrictlist_sreg(str1,str2)
{
    console.log('1234567')
    var stateid = $('#'+str1).val();
    console.log(stateid);
    $.ajax({
    url: GSERVER22+'Get_alldistrict_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

        var listItems= "";
		    listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-District-</option>";
		for (var i = 0; i < data.data.length; i++)
		{
			listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
		}
				  $("#"+str2).html(listItems);
    },
    error: function(xhr, textStatus, errorThrown) {
    }
  });

}

function showDistrictCityList(str1,str2)
{
	
  var districtid = $('#'+str1).val();

  $.ajax({
    url:SERVER2+'Get_allcity_json_api.asp?districtid='+districtid,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',

    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data);
        var listItems= "";
		    listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select City*-</option>";
		for (var i = 0; i < data.data.length; i++)
		{
				listItems+= "<option value='" + data.data[i].Cityid + "'>" + data.data[i].cityname + "</option>";
		}
				  $("#"+str2).html(listItems);
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function showCityDealerList_new(){
   console.log('dealerList');
  $.ajax({
    url:SERVER+'store_locator_json.asp?secode='+store.secode,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',

    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
		console.log(data)
		var Ddata = JSON.stringify(data);
		localStorage.setItem('searchDealer',Ddata);
		if(data.length>0){
        var listItems= "";
		    listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>Select Dealer</option>";
		for (var i = 0; i < data.length; i++)
		{
			// console.log(data[i].storename);
				listItems+= "<option value='" + data[i].storecode + "'>" + data[i].storename + ' ' + '('+ data[i].storecode +')' + "</option>";
		}
				//   $("#update_select_dealer").html(listItems);
		}else{
			toast('Dealer Not Available');
		}
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function showCityDealerList(str){
	console.log('dealerList');
	var selectedDealer = $('#'+str).val();
	console.log(selectedDealer);
	document.getElementById("searchlist_div").innerHTML = '';
	$('#tx_smobile').val('');

   $.ajax({
	 url:SERVER2+'get_dealer_by_dealer_name_and_se_json_api.asp?apiuid=MLOYALAPIACC&apipswd=Ml0yalAP!2o14ACC&Store_Name='+selectedDealer+'&Se_Code='+store.secode,
	 type: 'GET',
	 timeout: 50000,
	 dataType: 'json',
 
	 complete: function(xhr, textStatus) {
	 },
	 success: function(data, textStatus, xhr) {
		 console.log(data)
		 var Ddata = JSON.stringify(data);
		 localStorage.setItem('searchDealer',Ddata);
		//  if(data.data.length>0){
		 var listItems= "";
			 listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E; width:250%'  selected='selected'>Select Dealer</option>";
		 for (var i = 0; i < data.data.length; i++)
		 {
			 // console.log(data[i].storename);
			     listItems+= '<option value='+data.data[i].Store_Code+' onclick=javascript:SelectedDealerName(\''+data.data[i].Store_Code+'\');>' + data.data[i].Store_Name + ' ' + '('+data.data[i].Store_Code+')'+ '</option>';
				 listItems+= '<hr class="cust_search_new">';
				}
		 document.getElementById("searchlist_div").innerHTML = listItems;
		 $("#tform").css("display","none");
				 //   $("#update_select_dealer").html(listItems);
		//  }else{
		// 	 toast('Dealer Not Available');
		//  }
	   },
	   error: function(xhr, textStatus, errorThrown) {
	 }
   });
 }

 function SelectedDealerName(str){
	console.log('done data');
	console.log(str);
	var data22 = localStorage.getItem('searchDealer');
	// console.log(data22);
	var dom2 = JSON.parse(data22)
	console.log(dom2);
	for (var l = 0; l < dom2.data.length; l++){
		// console.log(dom2.data[l].Store_Code);
		if(str == dom2.data[l].Store_Code){
			// console.log(dom2.data[l].Store_Code);
		    $('#update_select_dealer').val(dom2.data[l].Store_Code);
			$('#update_select_dealer_name').val(dom2.data[l].Store_Name);
			document.getElementById("searchlist_div").innerHTML = '';
			// console.log($('#tx_dealercode').val());
		}
	}
	// $('#tx_dealercode').val(data22);
}

function filterSearchedDealer(str){
	var aaa = $('#'+str).val();
    var data22 = localStorage.getItem('searchDealer');
	var Ddata = JSON.parse(data22)
	console.log(Ddata);
    for (var l = 0; l < Ddata.length; l++){
		if(aaa == Ddata[l].storename){
          console.log('Done');
	    }else{
		  console.log('Not Done');
		}
      }
   }


// function update_runningsite_count_enrollcont()
// {
   
//         var listItems= "";
// 			listItems+= "<option value='0'>--Select--</option>";
//             for(var i = 1; i < 100; i++)
// 			{

//                 listItems+= "<option value='" + i + "'>" + i + "</option>";
//              } 
      
// 		$("#update_runningsite_count").html(listItems);
    
// }

function showTrainingVideos()
{
	 document.getElementById("training_vdos_div").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));

				var str='';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='TrainingVideo')
					{
						str+= '<div class="event_block" style="margin-bottom: 25px;">';
						str+= '<div class="event_fig">';
					    str+= '<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				        str+= '</div>';
						str+= '</div>';
					}
		        }

				document.getElementById("training_vdos_div").innerHTML= str;

				$.mobile.changePage( "#training", { transition: "none"} );

    }).error(function () {
        
            toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

$(document).on('pageshow', '#checkwarrantypg', function (event, ui) {
   
    $('#checkwarranty_mobile').val(user.mobile);
});

function checkWarranty_update()
{
  
  var mobile = $('#checkwarranty_mobile').val();
  var p_code = $('#checkwarranty_pcode').val();
  var fromdate = $('#checkwarrantyfrom').val();
  var todate = $('#checkwarrantyto').val();

  console.log(fromdate);

  if(mobile=='' || p_code=='' || fromdate=='' || todate=='' )
  {
		toast('Please enter mandatory details.');
  }
  else if(mobile.length!=10)
  {
		toast('Please enter valid mobile no.');
  }
  else
  {
    $.ajax({
		url: SERVER2+'update_product_warranty_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o21','mobileno': mobile,'itmcode': p_code,'warranty_sdate': fromdate,'warranty_edate': todate},
		complete: function(xhr, textStatus) {
	   
		}, success: function(data, textStatus, xhr) {

			console.log('Data:'+JSON.stringify(data));

			var str = '';

			if(data.error.length>=1)
			{
				toast(data.error);
				//str +='';
			}
			else
			{
				toast_p(data.data);
				$.mobile.changePage( "#homepage", { transition: "none"} );


				$('#checkwarranty_mobile').val('');
			    $('#checkwarranty_pcode').val('');
			    $('#checkwarrantyfrom').val('');
			    $('#checkwarrantyto').val('');
				       			
			}
		},
		error: function(xhr, textStatus, errorThrown) {
				toast("Error: Could not connect to Server, make sure you are connected to Network");
		}
	  });
  }
  
}

function openpdf(pdfLoc)
{
	 var ref = window.open(pdfLoc, '_system', 'location=yes');

	 ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
     ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
     ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
     ref.addEventListener('exit', function(event) { alert(event.type); });
}

function opendocImg(pdfLoc)
{
	 var ref = window.open(pdfLoc, '_system', 'location=yes');

	 ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
     ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
     ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
     ref.addEventListener('exit', function(event) { alert(event.type); });
}

function getPending_members_byse()
{

	  $.ajax({
		url: SERVER2+'get_district_member_json_byse_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','se_code': store.secode },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		    console.log(data);
			var str='';
			var str1='';

			if(data.error.length>0)
			{
				toast(data.error);

				str1 +='';
				$.mobile.changePage( "#homepage", { transition: "none"} );

			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {
				 	console.log(data.data[i].RunningSite);
					var runsitelen = '';
					if(typeof data.data[i].RunningSite!='undefined')
                        runsitelen=data.data[i].RunningSite;
       
						str1 +='<div class="primary_block">';
						str1 +='<div class="ui-grid-solo">';
						str1 +='<div class="ui-block">';

						
						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+capitalizeFirstLetter(data.data[i].FirstName+' '+data.data[i].LastName)+'</span></div>';
						
						
						str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].Mobileno)+'" class="a_link_call_new">Mobile No: '+data.data[i].Mobileno+'</a></span></div>';
						// str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Email: '+checkforundefined(data.data[i].Email)+'</span></div>';

					
                        //console.log('data.data[i].Dobday:'+data.data[i].Dobday);
						if(data.data[i].Dobday.trim()!='' && data.data[i].Dobmonth.trim()!='' && data.data[i].Dobyear.trim()!='' )
						{

							var dob_se1 = data.data[i].Dobday+'-'+data.data[i].Dobmonth+'-'+data.data[i].Dobyear;
							str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">DOB: '+checkforundefined(dob_se1)+'</span></div>';
						}
						var baseUrl = 'https://taghash.co/Atoot-Bandhan-Dealer/uploads/';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Name of KYC Document: '+checkforundefined(data.data[i].document_type).toUpperCase()+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">KYC Document No: '+checkforundefined(data.data[i].AadharCardNo)+'</span></div>';
						
						str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">KYC Document: <img id="myImg'+i+'" style="max-width: 60px;" onclick="showImageBig(\'myImg'+i+'\')" src="'+baseUrl+data.data[i].document_type+'_'+data.data[i].Mobileno+'.jpg'+'"  /></span></div>';//onclick="showImageBig('+data.data[i].document_type+'_'+data.data[i].Mobileno+')"
						str1 +='<div id="myModal" class="modal">';
						str1 +='<span class="close">&times;</span>';
						str1 +='<img class="modal-content" id="img01">';
						str1 +='<div id="caption"></div>';
						str1 +='</div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="approval_email">Dealer/AR Name: '+checkforundefined(data.data[i].dealername)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="approval_email">Dealer/AR Code: '+checkforundefined(data.data[i].dealercode)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email">Running Sites:'+checkforundefined(runsitelen.length)+'</span></div>';
						
						str1 +='<p  onclick="myFunctionx(\'myDIV'+i+'\','+i+')"><a>show...</a></p>';
						str1 +='<div  id="myDIV'+i+'" style="background: transparent; display:none">';
						for (var j = 0; j < runsitelen.length; j++)
						{
						str1 +='<div style="background-color:#cbcbcb; border-radius: 10px;">';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="approval_email">Name: '+checkforundefined(runsitelen[j]['First_Name'])+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email">Mobile No.: '+checkforundefined(runsitelen[j]['Mobile_Num'])+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email">Material Status:</span></div>';//+checkforundefined(runsitelen[j]['Address1'])+
						str1 +='</div>';
						}
						str1 +='</div>';
						

						str1+='<div>';
						str1+='<div class="ui-grid-b apr_block"><div class="ui-block-a"><a href="javascript:gotoApprovalpage(\'Approve\',\''+data.data[i].Mobileno+'\',\''+data.data[i].FirstName+'\',\''+data.data[i].LastName+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Approve</a></div><div class="ui-block-b"><a href="javascript:gotoApprovalpage(\'Reject\',\''+data.data[i].Mobileno+'\',\''+data.data[i].FirstName+'\',\''+data.data[i].LastName+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Reject</a></div></div>';//<div class="ui-block-c"><a href="javascript:gotoUpdatepage_byse(\''+data.data[i].Mobileno+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Update</a></div>
						str1+='</div>';

						str1 += '</div></div></div>';
						str1 +='</div>';
				 }
				  if(str1=='')
				  {
						str1='<span style="text-align:center;display: block;">No pending approvals</span>';
				  }
				 document.getElementById("se_pending_div").innerHTML=str1;
				 $.mobile.changePage( "#se_pending", { transition: "none"} );
				 //$('#approval_se_mob').val('');
			}
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
		}
	  });
}

function showImageBig(idstr)
{
	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById(idstr);
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	modal.style.display = "none";
	}
}

function acc_tcc_bag(str){
	var area = $('#'+str).val();
	console.log(area);
	// var cemenetmain = parseInt(area*(0.45));
	var LB202main = parseInt(area*(0.1));
	var LB303main = parseInt(area*(0.04));
	var Adhesivemain = parseInt(area*(0.03));

	// $('#salesdata_se_leads_cement_potentiall').val(cemenetmain);
	$('#approval_se_LB202_Potential').val(LB202main);
	$('#approval_se_LB303_Potential').val(LB303main);
	$('#approval_se_XT22_Potential').val(Adhesivemain);	
}

function acc_tcc_bag2(str){
	var consumed = $('#'+str).val();
	var totalbag = $('#salesdata_se_leads_cement_potentiall').val();
	var leftbaf = totalbag - consumed;
	$('#salesdata_se_leads_cement_leftpotentiall').val(leftbaf);
}

function acc_tcc_LB202(str){
	var consumed = $('#'+str).val();
	var totalLB202 = $('#approval_se_LB202_Potential').val();
	var leftLB202 = totalLB202 - consumed;
	$('#approval_se_LB202_Left').val(leftLB202);
}

function acc_tcc_LB303(str){
	var consumed = $('#'+str).val();
	var totalLB303 = $('#approval_se_LB303_Potential').val();
	var leftLB303 = totalLB303 - consumed;
	$('#approval_se_LB303_Left').val(leftLB303);
}

function acc_tcc_XT22(str){
	var consumed = $('#'+str).val();
	var totalXT22 = $('#approval_se_XT22_Potential').val();
	var leftXT22 = totalXT22 - consumed;
	$('#approval_se_XT22_Left').val(leftXT22);
}



function showDistrictCityList_siteregg()
{
  var districtid = $('#approval_se_dist').val();
console.log(districtid)
  $.ajax({
    url:SERVER2+'Get_allcity_json_api.asp?districtid='+districtid,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',

    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data);
        var listItems= "";
		    listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select City-</option>";
		for (var i = 0; i < data.data.length; i++)
		{
				listItems+= "<option value='" + data.data[i].Cityid + "'>" + data.data[i].cityname + "</option>";
		}
				  $("#approval_se_city").html(listItems);
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function myFunctionx(str,i) {
	var approval = 'approval_se_txns_type_'+i;
	var approvals = 'reason_showhideapprovals_'+i;
	var rejects = 'reason_showhiderejects_'+i;
	var x = document.getElementById(str);
	if (x.style.display === "none") {
	  x.style.display = "block";
	  toggle_reason_showhideapprovals(approval,approvals,rejects);
	} else {
	  x.style.display = "none";
	}
  }

function getActive_members_byse()
{

	  $.ajax({
		url: SERVER2+'get_district_approved_member_json_byse_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALCKBAPI','apipswd':'Ml0yalCKBAP!2!','se_code': store.secode },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		    //console.log(JSON.stringify(data));
            
			var str='';
			var str1='';

			if(data.error.length>0)
			{
				toast(data.error);
				str1 +='';
			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {
       
						str1 +='<div class="primary_block">';
						str1 +='<div class="ui-grid-solo">';
						str1 +='<div class="ui-block">';

						/*if(checkforundefined(data.data[i].isduplicate)=='Yes')
					    {
							str1 +='<div class="approval_block" style="background: #FFFF00 !important;"><img src="assets/images/retailer_name_icon.png" class="location_icon" /><span class="customer_name">'+capitalizeFirstLetter(data.data[i].FirstName+' '+data.data[i].LastName)+'</span></div>';
						}
						else
						{
							str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+capitalizeFirstLetter(data.data[i].FirstName+' '+data.data[i].LastName)+'</span></div>';
						}*/

						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+capitalizeFirstLetter(data.data[i].FirstName+' '+data.data[i].LastName)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].Mobileno)+'" class="a_link_call_new">Mobileno: '+data.data[i].Mobileno+'</a></span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Email: '+checkforundefined(data.data[i].Email)+'</span></div>';
                        console.log('data.data[i].Dobday:'+data.data[i].Dobday);
						if(data.data[i].Dobday.trim()!='' && data.data[i].Dobmonth.trim()!='' && data.data[i].Dobyear.trim()!='' )
						{
							var dob_se1 = data.data[i].Dobday+'-'+data.data[i].Dobmonth+'-'+data.data[i].Dobyear;
							str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">DOB: '+checkforundefined(dob_se1)+'</span></div>';
						}
						str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">PanCardNo: '+checkforundefined(data.data[i].PanCardNo).toUpperCase()+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">GstNo: '+checkforundefined(data.data[i].GstNo).toUpperCase()+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">AadharCardNo: '+checkforundefined(data.data[i].AadharCardNo)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email">Garage Name: '+checkforundefined(data.data[i].ShopName)+'</span></div>';

						if(data.data[i].ShopPhoto.trim()!='')
						{
							str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Garage Photo: <img src="'+data.data[i].ShopPhoto+'" style="margin-top:5px;width:20px;height:20px;" class="ui-li-icon ui-corner-none profile_img" onclick="javascript:opendocImg(\''+data.data[i].ShopPhoto+'\');"/></span></div>';
						}

						str1 +='<div class="approval_block"><img src="assets/images/retailer_map_icon.png" class="location_icon"/><span class="approval_email">Address: '+checkforundefined(data.data[i].HomeNo)+' '+checkforundefined(data.data[i].Floor_flat)+', '+checkforundefined(data.data[i].Street)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">City: '+checkforundefined(data.data[i].City)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">District: '+checkforundefined(data.data[i].District)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">Pincode: '+checkforundefined(data.data[i].PostalCode)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">State: '+checkforundefined(data.data[i].State)+'</span></div>';

						//str1+='<div>';
						//str1+='<div class="ui-grid-a apr_block"><div class="ui-block-a"></div><div class="ui-block-b"><a href="javascript:gotoApprovalpage(\''+data.data[i].Mobileno+'\',\''+data.data[i].FirstName+'\',\''+data.data[i].LastName+'\');" class="btn_primary btn_aaprov mt-20 ui-link">Approve/Reject</a></div></div>';
						//str1+='</div>';

						str1 += '</div></div></div>';
						str1 +='</div>';
				 }
	
				  if(str1=='')
				  {
						str1='<span style="text-align:center;display: block;">No active mechanics</span>';
				  }

				 document.getElementById("se_activ_div").innerHTML=str1;
				 $.mobile.changePage( "#se_active", { transition: "none"} );
			  }
		   },
		   error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
		 }
	  });
}

function gotoApprovalpage(stype,mob,fname,lname)
{
	if(stype=='Approve')
	{
		var result = confirm("Are you Sure to approve this Contractor" + ' '+fname + ' ' + lname +" ?");
		if(result)
		{
		    $.ajax({
					url: SERVER2+'se_approval_json_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
						'apiuid': 'MLOYALCKBAPI',
						'apipswd': 'Ml0yalCKBAP!2!',
						'mobileno': mob,
						'se_comments': 'Approved',
						'se_reason': '',
						'isapproved_se': 'Approved',
						'se_code': store.secode
						},
					
					success: function(data, textStatus, xhr) {
						
							//console.log('Data:'+JSON.stringify(data));

							if(data.error.length>0)
							{
								toast(data.error);
							}
							else
							{
								// authoApproved();
								showPOPEnApprove(data.data);
								getPending_members_byse();

							}
							//update_memberStore(mob,disttobuy);
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
				});
			}
	}
	else if(stype=='Reject')
	{
		$('#approval_se_mob').val(mob);
		//get_distributors_against_se();
		$('#approval_se_type').val('Rejected');
		$.mobile.changePage( "#salesdata_se", { transition: "none"} );
	}
}

function authoApproved(mobile)
 {
	console.log('ho gya contractor approve' + ' '+ store.secode);
	$.ajax({
		url: SERVER2+'se_approval_json_api.asp',
		type: 'GET',
		timeout: 300000,
		dataType: "json",
		data: {
			'apiuid': 'MLOYALCKBAPI',
			'apipswd': 'Ml0yalCKBAP!2!',
			'mobileno': mobile,
			'se_comments': 'Approved',
			'se_reason': '',
			'isapproved_se': 'Approved',
			'se_code': store.secode
			},
		
		success: function(data, textStatus, xhr) {
			
				console.log('Data: Approved');

				// if(data.error.length>0)
				// {
				// 	toast(data.error);
				// }
				// else
				// {
					
				// 	showPOPEnApprove(data.data);
				// 	// getPending_members_byse();
				// }
				//update_memberStore(mob,disttobuy);
		 },
		error: function(xhr, textStatus, errorThrown) {
			 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
			}
	});
 }

function submitData_se_reject()
{
	var mob  = $('#approval_se_mob').val();
	var reason  = $('#approval_se_reason').val();
	var comments  = $('#approval_se_comments').val();
	var app_type  = 'Rejected';
	//var app_type  = $('#approval_se_type').val();
	//var disttobuy = $('#approval_se_dist_list').val();

	if(mob=='')
	{
		toast('Please enter mandatory fields');
	}
	else if(app_type=='' || app_type==null || app_type=='undefined' || app_type=='null')
	{
		toast('Please select approval type');
	}
	else
	{
			$.ajax({
					url: SERVER2+'se_approval_json_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
						'apiuid': 'MLOYALCKBAPI',
						'apipswd': 'Ml0yalCKBAP!2!',
						'mobileno': mob,
						'se_comments': comments,
						'se_reason': reason,
						'isapproved_se': app_type,
						'se_code': store.secode
						},
					
					success: function(data, textStatus, xhr) {
						
							//console.log('Data:'+JSON.stringify(data));

							if(data.error.length>0)
							{
								toast(data.error);
							}
							else
							{
								showPOPEnApprove(data.data);
								getPending_members_byse();
							}
							//update_memberStore(mob,disttobuy);
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
				});
		}
}

function resetSalesdata_se()
{
	$('#approval_se_mob').val('');
	$('#approval_se_reason').val('');
	$('#approval_se_comments').val('');
	//$('#approval_se_type').val('');
	//document.getElementById('approval_se_type').selectedIndex= 0;
}

function getPending_txns_byse(){

	  $.ajax({
			url: SERVER2+"get_transactions_details_by_transtype_json_api.asp",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "secode": store.secode,
			  "transtype": "Pending"
            },
		    beforeSend: function (xhr) {
				$('#loading').addClass('loading');
				xhr.setRequestHeader('apiuid', 'MLOYALAPIACC');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14ACC');
            },
		    complete: function(xhr, textStatus) {
		    	$('#loading').removeClass('loading');
		    },
			success: function(data, textStatus, xhr) {
			    
				//  console.log("data:"+JSON.stringify(data));
				console.log(data);
				
				 var str='';
				 var str1='';
                 totalData = data.length;
				 console.log(data.error.length);

				 if(data.error.length>0)
				 {
					toast(data.error);
				    str1 ='';
					document.getElementById("se_pending_txns_div").innerHTML=str1;
				    $.mobile.changePage( "#homepage", { transition: "none"} );
				 }
				 else
				 {
					var stringData = JSON.stringify(data);
					localStorage.setItem('allPendingTransaction',stringData);
					 for (var i = 0; i < data.data.length; i++)
					 {
						// console.log(data.data[i].MobileNumber);
						var trancountdata = localStorage.getItem('tranFirstShow');
						// console.log(trancountdata);
						if(trancountdata <= 3){
							tranFirstShow = 3;
							// console.log('in if condition');
						}else{
							tranFirstShow = localStorage.getItem('tranFirstShow');
							// console.log('in else condition');
						}
						localStorage.setItem('tranFirstShow',tranFirstShow);
						var showMatData = localStorage.getItem('tranFirstShow');
						var showDataless = localStorage.getItem('showDataless');
						if(showDataless < 0){
							var val = 0;
							localStorage.setItem('showDataless',val);
						}
                       if(showDataless < data.data[i].SNo && showMatData >= data.data[i].SNo){
						 if(data.data[i].MobileNumber.startsWith('91') && data.data[i].MobileNumber.length=='12')
						 {
							data.data[i].MobileNumber=data.data[i].MobileNumber.substr(2,data.data[i].MobileNumber.length);
						 }
							str1 +='<div class="primary_block1">';
							str1 +='<div class="ui-grid-solo">';
							str1 +='<div class="ui-block">';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon1.png" class="location_icon"/><span class="approval_email">Contractor Name: '+checkforundefined(data.data[i].FirstName) + ' ' + checkforundefined(data.data[i].LastName) + ' ' + '('+data.data[i].MobileNumber+')</span></div>';
							// str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email">Home Owner Mobile: '+checkforundefined(data.data[i].IHB_MobileNo)+'</span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="approval_email">Home Owner  Name: '+checkforundefined(data.data[i].IHB_Name) + ' ' + '('+data.data[i].IHB_MobileNo+')</span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="approval_email">Store Name: '+checkforundefined(data.data[i].Store_Name)+ ' ' +'('+data.data[i].Store_Code+')</span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Brand: '+checkforundefined(data.data[i].brand_code)+'</span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Quantity: '+checkforundefined(data.data[i].Quantity)+'</span></div>';

							str1 +='<p  onclick="myFunctionx(\'myDIV'+data.data[i].BillNumber+'\','+i+')"><a>more...</a></p>';
							
							


						    str1 +='<div  id="myDIV'+data.data[i].BillNumber+'" style="background: transparent; display:none">';
							
						    str1 +='<label style="font-size: 11px;">Verification field<span style="color: red;">*</span></label>';
							str1 +='<div class="select_role_block">';
							str1 +='<select name="approval_se_txns_verification_field_'+i+'" id="approval_se_txns_verification_field_'+i+'" data-role="none">';
							str1 +='<option disabled="disabled" selected="selected">Verification field</option>';
							str1 +='<option value="Physical">Physical</option>';
							str1 +='<option value="Virtual" >Virtual</option>';
							str1 +='</select>';
							str1 +='</div><br>';

							str1 +='<label class="additional_label">Status:<span style="color: red;">*</span></label>';
							str1 +='<div class="additional_form" style=" margin:0 auto; padding: 0px;">';
							str1 +='<div class="additional_input">';
							str1 +='<select name="approval_se_txns_type_'+i+'" id="approval_se_txns_type_'+i+'" class="additional_control" data-role="none" data-mini="true" onchange="javascript:toggle_reason_showhideapprovals(\'approval_se_txns_type_'+i+'\',\'reason_showhideapprovals_'+i+'\',\'reason_showhiderejects_'+i+'\');" data-inline="true">';
							str1 +='<option disabled="disabled" value="">Select Status</option>';
							str1 +='<option value="Approved">Approve</option>';
							str1 +='<option value="Rejected">Reject</option>';          
							str1 +='</select>';
							str1 +='</div>';
							str1 +='</div><br>';


							str1 +='<div id="reason_showhiderejects_'+i+'" style="display: none;">';
							str1 +='<label class="form_label" >Approval reason:<span style="color: red">*</span></label>';
							str1 +='<div class="additional_form" style=" margin:0 auto; padding: 0px;">';
							str1 +='<div class="additional_input">';
							str1 +=' <select name="approvel_se_leads_approval_'+i+'" id="approvel_se_leads_approval_'+i+'" class="additional_control" data-role="none" data-mini="true" data-inline="true">';
							str1 +='<option disabled="disabled" value="">-Select Reason(if approved)-</option>';
							str1 +='<option value="Confirm by IHB">Confirm by IHB</option>';
							str1 +='<option value="Self check">Self check</option>';           
							str1 +='</select>';
							str1 +='</div>';
							str1 +='</div> ';

							str1 +='<div class="ui-grid-solo mt-10">';
							str1 +='<div class="ui-block-a form_btns"> ';
							str1 +='<div class="btmsize" id="transaction_approve_submit">';
							str1 +='<button onclick="javascript:submitData_txns_se(\'Approved\',\''+i+'\',\''+data.data[i].IHB_MobileNo+'\',\''+data.data[i].BillNumber+'\',\''+data.data[i].MobileNumber+'\',\''+data.data[i].Quantity+'\',\''+data.data[i].brand_code+'\');"  id="complaint_button_se1_'+i+'" class="btn pop_btn btn_primary">Submit</button>'; 
							str1 +='</div></div></div></div>';

							str1 +='<div id="reason_showhideapprovals_'+i+'" style="display: none;">';
							str1 +='<label class="form_label">Reason for Rejection :<span style="color: red">*</span></label>';
							str1 +='<div class="additional_form" style=" margin:0 auto; padding: 0px;">';
							str1 +='<div class="additional_input">';
							str1 +='<select name="approval_se_txns_reason_'+i+'" id="approval_se_txns_reason_'+i+'" class="additional_control" data-role="none" data-mini="true" data-inline="true">';
							str1 +='<option disabled="disabled" value="">-Select Reason(if rejected)-</option>';
							str1 +='<option value="Incorrect Brand">Incorrect Brand</option>';
							str1 +='<option value="Incorrect Quantity">Incorrect Quantity</option>';
							str1 +='<option value="Unable to verify">Unable to Verify</option>';
							str1 +='<option value="Duplicate Entry">Duplicate Entry</option>';
							str1 +='</select>';
							str1 +='</div>';
							str1 +='</div>';

							str1 +='<div class="ui-grid-solo mt-10">';
							str1 +='<div class="ui-block-a form_btns">';
							str1 +='<div class="btmsize" id="transaction_rejected_submit">';
							str1 +='<a href="javascript:submitData_txns_se(\'Rejected\',\''+i+'\',\''+data.data[i].IHB_MobileNo+'\',\''+data.data[i].BillNumber+'\',\''+data.data[i].MobileNumber+'\',\''+data.data[i].Quantity+'\');"  id="complaint_button_se2_'+i+'"  class="btn pop_btn btn_primary">Reject</a>';
							str1 +='</div>';
							str1 +='</div>';
							str1 +=' </div>';
							str1 +='</div>';							
							
							str1+='<div>';
							str1+='</div>';
							
							str1+='<div>';
							str1+='</div>';
							str1 += '</div></div></div>';
							str1 +='</div>';				
					 }
					 
					}

					var showDataless = localStorage.getItem('showDataless');
					if(showDataless == '0')
					{
						str1 +='<div><a onclick="tranSubmore()" id="hideback" style="margin-left: 10px;display:none;">Back...</a><a onclick="tranAddmore()"   >Next...</a></div>';
					}
					else
					{
						str1 +='<div class="ne"><a onclick="tranSubmore()" id="hideback" style="margin-left: 10px;">Back...</a><a onclick="tranAddmore()"   >Next...</a></div>';
					}

					document.getElementById("se_pending_txns_div").innerHTML=str1;

				    $.mobile.changePage( "#se_pending_txns", { transition: "none"} );
				 }
	
                  
				//   if(str1=='')
				//   {
				// 		str1='<span style="text-align:center;display: block;">No pending txns</span>';
				//   }

				 

				 //$('#approval_se_mob').val('');
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 $('#loading').removeClass('loading');
				 toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});

}

function tranAddmore(){
	var metedata = localStorage.getItem('tranFirstShow');
	tranFirstShow = parseInt(metedata) + parseInt(3);
	tranFirstShow1 = parseInt(tranFirstShow) - parseInt(3);
	localStorage.setItem('showDataless',tranFirstShow1);
	localStorage.setItem('tranFirstShow',tranFirstShow);
	getPending_txns_byse();
}

function tranSubmore(){
	var metedataL = localStorage.getItem('showDataless');
	if(metedataL <= 0){
		console.log('NO');
	}else{
	var metedata = localStorage.getItem('tranFirstShow');
	tranFirstShow = parseInt(metedata) - parseInt(3);
	tranFirstShow1 = parseInt(tranFirstShow) - parseInt(3);
	localStorage.setItem('showDataless',tranFirstShow1);
	localStorage.setItem('tranFirstShow',tranFirstShow);
	getPending_txns_byse();
	}
}

function Pending_filterTran(str){
	console.log('Enter');
	var searchcon = $('#'+str).val();
	var alltrans = JSON.parse(localStorage.getItem('allPendingTransaction'));
	// console.log(allSites.data);
	if(searchcon != ''){
		$("#se_pending_txns_div").css("display","none");
		$("#se_searched_txns_div").css("display","block");
		var str1='';
		for (var i = 0; i < alltrans.data.length; i++)
		{
			if(alltrans.data[i].MobileNumber.indexOf(searchcon) >= 0 || alltrans.data[i].FirstName.toLowerCase().indexOf(searchcon.toLowerCase()) >= 0 || alltrans.data[i].LastName.toLowerCase().indexOf(searchcon.toLowerCase()) >= 0){
			
				if(alltrans.data[i].MobileNumber.startsWith('91') && alltrans.data[i].MobileNumber.length=='12'){
				alltrans.data[i].MobileNumber=alltrans.data[i].MobileNumber.substr(2,alltrans.data[i].MobileNumber.length);
			    }
			   str1 +='<div class="primary_block2">';
			   str1 +='<div class="ui-grid-solo">';
			   str1 +='<div class="ui-block">';
			   str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon1.png" class="location_icon"/><span class="approval_email">Contractor Name: '+checkforundefined(alltrans.data[i].FirstName) + ' ' + checkforundefined(alltrans.data[i].LastName) + ' ' + '('+alltrans.data[i].MobileNumber+')</span></div>';
			   // str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email">Home Owner Mobile: '+checkforundefined(data.data[i].IHB_MobileNo)+'</span></div>';
			   str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="approval_email">Home Owner  Name: '+checkforundefined(alltrans.data[i].IHB_Name) + ' ' + '('+alltrans.data[i].IHB_MobileNo+')</span></div>';
			   str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="approval_email">Store Name: '+checkforundefined(alltrans.data[i].Store_Name)+ ' ' +'('+alltrans.data[i].Store_Code+')</span></div>';
			   str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Brand: '+checkforundefined(alltrans.data[i].brand_code)+'</span></div>';
			   str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Quantity: '+checkforundefined(alltrans.data[i].Quantity)+'</span></div>';

			   str1 +='<p  onclick="myFunctionx(\'myDIV'+alltrans.data[i].BillNumber+'\','+i+')"><a>more...</a></p>';
			   
			   


			   str1 +='<div  id="myDIV'+alltrans.data[i].BillNumber+'" style="background: transparent; display:none">';
			   
			   str1 +='<label style="font-size: 11px;">Verification field<span style="color: red;">*</span></label>';
			   str1 +='<div class="select_role_block">';
			   str1 +='<select name="approval_se_txns_verification_field_'+i+'" id="approval_se_txns_verification_field_'+i+'" data-role="none">';
			   str1 +='<option disabled="disabled" selected="selected">Verification field</option>';
			   str1 +='<option value="Physical">Physical</option>';
			   str1 +='<option value="Virtual" >Virtual</option>';
			   str1 +='</select>';
			   str1 +='</div><br>';

			   str1 +='<label class="additional_label">Status:<span style="color: red;">*</span></label>';
			   str1 +='<div class="additional_form" style=" margin:0 auto; padding: 0px;">';
			   str1 +='<div class="additional_input">';
			   str1 +='<select name="approval_se_txns_type_'+i+'" id="approval_se_txns_type_'+i+'" class="additional_control" data-role="none" data-mini="true" onchange="javascript:toggle_reason_showhideapprovals(\'approval_se_txns_type_'+i+'\',\'reason_showhideapprovals_'+i+'\',\'reason_showhiderejects_'+i+'\');" data-inline="true">';
			   str1 +='<option disabled="disabled" value="">Select Status</option>';
			   str1 +='<option value="Approved">Approve</option>';
			   str1 +='<option value="Rejected">Reject</option>';          
			   str1 +='</select>';
			   str1 +='</div>';
			   str1 +='</div><br>';


			   str1 +='<div id="reason_showhiderejects_'+i+'" style="display: none;">';
			   str1 +='<label class="form_label" >Approval reason:<span style="color: red">*</span></label>';
			   str1 +='<div class="additional_form" style=" margin:0 auto; padding: 0px;">';
			   str1 +='<div class="additional_input">';
			   str1 +=' <select name="approvel_se_leads_approval_'+i+'" id="approvel_se_leads_approval_'+i+'" class="additional_control" data-role="none" data-mini="true" data-inline="true">';
			   str1 +='<option disabled="disabled" value="">-Select Reason(if approved)-</option>';
			   str1 +='<option value="Confirm by IHB">Confirm by IHB</option>';
			   str1 +='<option value="Self check">Self check</option>';           
			   str1 +='</select>';
			   str1 +='</div>';
			   str1 +='</div> ';

			   str1 +='<div class="ui-grid-solo mt-10">';
			   str1 +='<div class="ui-block-a form_btns"> ';
			   str1 +='<div class="btmsize" id="transaction_approve_submit">';
			   str1 +='<button onclick="javascript:submitData_txns_se(\'Approved\',\''+i+'\',\''+alltrans.data[i].IHB_MobileNo+'\',\''+alltrans.data[i].BillNumber+'\',\''+alltrans.data[i].MobileNumber+'\',\''+alltrans.data[i].Quantity+'\',\''+alltrans.data[i].brand_code+'\');"  id="complaint_button_se1_'+i+'" class="btn pop_btn btn_primary">Submit</button>'; 
			   str1 +='</div></div></div></div>';

			   str1 +='<div id="reason_showhideapprovals_'+i+'" style="display: none;">';
			   str1 +='<label class="form_label">Reason for Rejection :<span style="color: red">*</span></label>';
			   str1 +='<div class="additional_form" style=" margin:0 auto; padding: 0px;">';
			   str1 +='<div class="additional_input">';
			   str1 +='<select name="approval_se_txns_reason_'+i+'" id="approval_se_txns_reason_'+i+'" class="additional_control" data-role="none" data-mini="true" data-inline="true">';
			   str1 +='<option disabled="disabled" value="">-Select Reason(if rejected)-</option>';
			   str1 +='<option value="Incorrect Brand">Incorrect Brand</option>';
			   str1 +='<option value="Incorrect Quantity">Incorrect Quantity</option>';
			   str1 +='<option value="Unable to verify">Unable to Verify</option>';
			   str1 +='<option value="Duplicate Entry">Duplicate Entry</option>';
			   str1 +='</select>';
			   str1 +='</div>';
			   str1 +='</div>';

			   str1 +='<div class="ui-grid-solo mt-10">';
			   str1 +='<div class="ui-block-a form_btns">';
			   str1 +='<div class="btmsize" id="transaction_rejected_submit">';
			   str1 +='<a href="javascript:submitData_txns_se(\'Rejected\',\''+i+'\',\''+alltrans.data[i].IHB_MobileNo+'\',\''+alltrans.data[i].BillNumber+'\',\''+alltrans.data[i].MobileNumber+'\',\''+alltrans.data[i].Quantity+'\');"  id="complaint_button_se2_'+i+'"  class="btn pop_btn btn_primary">Reject</a>';
			   str1 +='</div>';
			   str1 +='</div>';
			   str1 +=' </div>';
			   str1 +='</div>';							
			   
			   str1+='<div>';
			   str1+='</div>';
			   
			   str1+='<div>';
			   str1+='</div>';
			   str1 += '</div></div></div>';
			   str1 +='</div>';

	    }

	        document.getElementById("se_searched_txns_div").innerHTML=str1;
	  }
	}else{
		console.log('in else conditions');
		var str2 = '';
		document.getElementById("se_pending_txns_div").innerHTML = str2;
		$("#se_pending_txns_div").css("display","block");
		$("#se_searched_txns_div").css("display","none");
		viewSites();
		
	}
}


function gotoApprovalpage_txns(txn_id,cont_mobile,noofbags,ihbmobile)
{

	$.ajax({
				url: SERVER2+'get_ihb_customer_details.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno='+ihbmobile,
				type: 'GET',
				timeout: 50000,
				dataType: 'json',
				data: { },
			   success: function(data, textStatus, xhr) {	
					   
					   console.log('JSONDATA:'+JSON.stringify(data));
					   
					   if(data.sms.length>=1)
					   {
						   if(checkforundefined(data.sms[0].Status)=='Approved')
						   {
								$('#approval_se_txns_ihbmobile').val(ihbmobile);
								$('#approval_se_txns_id').val(txn_id);
								$('#approval_se_txns_contractormob').val(cont_mobile);
								$('#approval_se_txns_noofbags').val(noofbags);
								//get_distributors_against_se();
								$.mobile.changePage( "#salesdata_se_txns", { transition: "none"} );
						   }
						   else
						   {
								toast('Site is not approved.');
						   }
					   }
					   else
					   {
							toast('Site is not registered.');
					   }
			   },
			   error: function(xhr, textStatus, errorThrown) {
			   toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			   }
	});
}

function submitData_txns_se(checkstatus,ind,ihbmobile,txn_id,mobileno,qty,brand)
{   
	$('#approval_se_txns_ihbmobile').val(ihbmobile);
    $('#approval_se_txns_id').val(txn_id);
	$('#approval_se_txns_contractormob').val(mobileno);
	$('#approval_se_txns_noofbags').val(qty);
	// console.log(checkstatus + ' ' + ind + ' '+ ihbmobile + ' ' + txn_id + ' ' + mobileno + ' ' + qty);
	var currentTime = new Date().toISOString().slice(0, 10)
	var date = currentTime.split('-');
	console.log(date)
	$.ajax({
		url: SERVER2+'get_contractor_dealer_monthqry_json_api.asp?apiuid=MLOYALAPIACC&apipswd=Ml0yalAP!2o14ACC',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'storecode':store.secode,
		       'brandcode': brand,
			   '&mnth':date[1],
			   '&year':date[0] },
	   success: function(data, textStatus, xhr) {	
			   
			   console.log(data);
			   var restrictTransaction = data.DealerTotal - data.ContractorTotal;
			//    if(restrictTransaction <= 0)
			   if(restrictTransaction <= 0)
			   {
					toast('Site is not registered.');
			   }else{
				console.log('DONE')
				///////////////////////////////////> data.DealerTotal
				if(checkstatus ==  'Approved')
				{
				var ihbmobile = $('#approval_se_txns_ihbmobile').val();
				var txn_id  = $('#approval_se_txns_id').val();
				var mobileno  = $('#approval_se_txns_contractormob').val();
				var qty  = $('#approval_se_txns_noofbags').val();
				var reason  = $('#approvel_se_leads_approval_'+ind).val();
				var verificationField  = $('#approval_se_txns_verification_field_'+ind).val();
				var status = $('#approval_se_txns_reason_'+ind).val();
				var approval = $('#approval_se_txns_type_'+ind).val();
				console.log(approval + ' ' + verificationField + ' ' + reason + ' ' + checkstatus + ' ' + ihbmobile + ' ' + txn_id + ' ' + mobileno + ' ' + qty);

				if(txn_id=='' || mobileno=='' || qty=='' || qty=='0' || ihbmobile=='' || verificationField =='' || approval=='')
				{
					toast('Please enter mandatory fields');
				}else if(reason == '' || reason == 'undefine'){
					toast('Please enter mandatory fields');
				}
				else
				{
					document.getElementById('complaint_button_se1_'+ind).disabled = true;
					$.ajax({
							url: SERVER2+'get_ihb_customer_details.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno='+ihbmobile,
							type: 'GET',
							timeout: 50000,
							dataType: 'json',
							data: { },
						   success: function(data, textStatus, xhr) {	
								   
								//    console.log('JSONDATA:'+JSON.stringify(data));
								console.log(data);
								   
								   if(data.sms.length>=1)
								   {
									   //do tx
									   console.log(data.sms[0].Status);
									   if(data.sms[0].Status=='Approved')
									   {
										    document.getElementById('complaint_button_se1_'+ind).disabled = false;
											submitData_txns_se_new('Approved',status,verificationField,reason);
									   }
									   else
									   {
											toast('Site is not approved.');
									   }
								   }
								   else
								   {
										toast('Site is not registered.');
								   }
						   },
						   error: function(xhr, textStatus, errorThrown) {
						   toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
						   }
						 });
					
				}
			}else{
				var ihbmobile = $('#approval_se_txns_ihbmobile').val();
				var txn_id  = $('#approval_se_txns_id').val();
				var mobileno  = $('#approval_se_txns_contractormob').val();
				var qty  = $('#approval_se_txns_noofbags').val();
				var approve  = $('#approvel_se_leads_approval_'+ind).val();
				var verificationField  = $('#approval_se_txns_verification_field_'+ind).val();
				var reason = $('#approval_se_txns_reason_'+ind).val();
			
				if(txn_id=='' || mobileno=='' || qty=='' || qty=='0' || ihbmobile=='' || verificationField== '')
				{
					toast('Please enter mandatory fields');
				}
				else if(reason=='' || reason==null || reason=='undefined' || reason=='null')
				{
					toast('Please select reason');
				}
				else
				{
					document.getElementById('complaint_button_se2_'+ind).disabled = true;
					$.ajax({
							url: SERVER2+'get_ihb_customer_details.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno='+ihbmobile,
							type: 'GET',
							timeout: 50000,
							dataType: 'json',
							data: { },
						   success: function(data, textStatus, xhr) {	
								   
								   console.log('JSONDATA:'+JSON.stringify(data));
								   
								   if(data.sms.length>=1)
								   {
									   //do tx
									   if(data.sms[0].Status=='Approved')
									   {
										document.getElementById('complaint_button_se2_'+ind).disabled = false;											submitData_txns_se_new('Rejected',status,verificationField,reason);
									   }
									   else
									   {
											toast('Site is not approved.');
									   }
								   }
								   else
								   {
										toast('Site is not registered.');
								   }
						   },
						   error: function(xhr, textStatus, errorThrown) {
						   toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
						   }
						 });
					
				}
			}

			   }
			   
	   },
	   error: function(xhr, textStatus, errorThrown) {
	   toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
	   }
	});
}

$(document).on('pageshow', '#homepage', function (event, ui) {
    $("#wait").css("display","block");
	check_site_Notification();
	check_trans_Notification();
	$("#wait").css("display","none");
});



function check_site_Notification()
{

  $.ajax({
	url: SERVER2+'get_district_lead_json_byse_api.asp',
	type: 'GET',
	timeout: 50000,
	dataType: 'json',
	data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','se_code': store.secode,'status':'Pending' },
	beforeSend: function() {
		$('#loading').addClass('loading');
	},
	complete: function(xhr, textStatus) {
		$('#loading').removeClass('loading');
	},
	success: function(data, textStatus, xhr) {
   
            console.log(data);
        
			// console.log(data.data.length);
			if(data.error.length>0)
			{
				$("#sitenotification").removeClass("se_notify");
				$("#sitenotification_count_div").attr("data-value",data.data.length);
			}
			else
			{
				if(data.data.length>= 0)
				{
					console.log('1')
					$("#sitenotification").addClass("se_notify");
					$("#sitenotification_count_div").attr("data-value",data.data.length);
				}
				else
				{
					console.log('2')
					//var nott_count1 = data.data.length;
					$("#sitenotification").removeClass("se_notify");
					$("#sitenotification_count_div").attr("data-value",data.data.length);
				}

			}

	},
	error: function(xhr, textStatus, errorThrown) {
	}
	});

}

function check_trans_Notification()
{
	$.ajax({
		url: SERVER2+"get_transactions_details_by_transtype_json_api.asp",
		type: 'POST',
		timeout: 50000,
		dataType: 'json',
		data:{
		  "secode": store.secode,
		  "transtype": "Pending"
		},
		
		beforeSend: function (xhr) {

			$('#loading').addClass('loading');
			xhr.setRequestHeader('apiuid', 'MLOYALAPIACC');
			xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14ACC');
		},
		complete: function(xhr, textStatus) {
			$('#loading').removeClass('loading');
		},
	success: function(data, textStatus, xhr) {
            console.log(data);
			if(data.error.length>0)
			{
				console.log('IN the erroer')
				$("#transnotification").removeClass("se_notify1");
				$("#transnotification_count_div").attr("data-value",data.data.length);
			}
			else
			{
				if(data.data.length>=1)
				{
					$("#transnotification").addClass("se_notify1");
					$("#transnotification_count_div").attr("data-value",data.data.length);
				}
				else
				{
					$("#transnotification").removeClass("se_notify1");
				}
			}
	},
	error: function(xhr, textStatus, errorThrown) {
	}
	});

}

function submitData_txns_se_new(app_type,status,verificationField,reason)
{
	var txn_id  = $('#approval_se_txns_id').val();
	var mobileno  = $('#approval_se_txns_contractormob').val();
	var qty  = $('#approval_se_txns_noofbags').val();
    // var reason  = $('#approval_se_txns_reason').val();
	//var app_type  = $('#approval_se_txns_type').val();
	// var approve  = $('#approvel_se_leads_approval').val();
	console.log(reason + ' ' + status + ' ' + verificationField)
	if(txn_id=='' || mobileno=='' || qty=='' || qty=='0')
	{
		toast('Please enter mandatory fields');
	}
	else
	{
		$.ajax({
			url: SERVER2+"transaction_status_json_api.asp",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "mobileno": mobileno,
			  "billno": txn_id,
              "qty": qty,
			  "comment": verificationField,
			  "transstatus": app_type,
			  "reason": reason			 
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPIACC');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14ACC');
            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
						
							//console.log('Data:'+JSON.stringify(data));

							if(data.error.length>0)
							{
								toast(data.error);
							}
							else
							{
								showPOPTxnApprove(data.data);
							}
							//update_memberStore(mob,disttobuy);	
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
				});
		}
}

function resetSalesdata_se_txns()
{
	$('#approval_se_txns_id').val('');
	$('#approval_se_txns_contractormob').val('');
	$('#approval_se_txns_noofbags').val('');
    $('#approval_se_txns_comments').val('');
	//$('#approval_se_type').val('');
	//document.getElementById('approval_se_type').selectedIndex= 0;
}

function getPending_sites_byse(){
	  $.ajax({
		url: SERVER2+'get_district_lead_json_byse_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','se_code': store.secode,'status':'Pending' },
		complete: function(xhr, textStatus) {

		}, beforeSend: function() {
			$('#loading').addClass('loading');
		}, success: function(data, textStatus, xhr) {
			console.log(data);
		    $('#loading').removeClass('loading');
			var str='';
			var str1='';
           
			if(data.error.length>0)
			{
				toast(data.error);
				str1 ='';
				document.getElementById("se_leads_div").innerHTML=str1;
				$.mobile.changePage( "#homepage", { transition: "none"} );

			}
			else
			{
				var stringData = JSON.stringify(data);
					localStorage.setItem('allPendingSites',stringData);
				 for (var i = 0; i < data.data.length; i++)
				 {
                        
					var siteucountdata = localStorage.getItem('contUFirstShow');
					// console.log(siteucountdata);
					if(siteucountdata <= 3){
						contUFirstShow = 3;
						// console.log('in if condition');
					}else{
						contUFirstShow = localStorage.getItem('contUFirstShow');
						// console.log('in else condition');
					}
					localStorage.setItem('contUFirstShow',contUFirstShow);
					var showMatData = localStorage.getItem('contUFirstShow');
					var showDataless = localStorage.getItem('showUDataless');
						console.log(showMatData +' '+ showDataless);
                    if(showDataless < 0){
						var val = 0;
						localStorage.setItem('showUDataless',val);
					}
				   if(showDataless < data.data[i].sno && showMatData >= data.data[i].sno){
						str1 +='<div class="primary_block1">';
						str1 +='<div class="ui-grid-solo">';
						str1 +='<div class="ui-block">';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon1.png" class="location_icon"/><span class="customer_name">Home Owner Name: '+capitalizeFirstLetter(checkforundefined(data.data[i].FirstName)+' '+checkforundefined(data.data[i].LastName))+'('+data.data[i].Mobileno+')</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">Contractor Name: '+capitalizeFirstLetter(checkforundefined(data.data[i].ContarctorName)+' '+checkforundefined(data.data[i].LastName))+'('+data.data[i].ContractorNo+')</span></div>';
						// str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].Mobileno)+'" class="a_link_call_new">Home Owner Mobile: '+data.data[i].Mobileno+'</a></span></div>';
						// str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].ContractorNo)+'" class="a_link_call_new">Contractor Mobile: '+data.data[i].ContractorNo+'</a></span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Contract Type: '+checkforundefined(data.data[i].matrialstatus)+'</span></div>';

						str1 +='<label style="font-size: 11px;">Verification field<span style="color: red;">*</span></label>';
						str1 +='<div class="select_role_block">';
						str1 +='<select name="approval_se_verification_field_'+ data.data[i].sno +'" id="approval_se_verification_field_'+ data.data[i].sno +'" data-role="none">';
						// str1 +='<option>Verification field</option>';
						str1 +='<option value="Physical" selected="selected">Physical</option>';
						str1 +='<option value="Virtual" >Virtual</option>';
						str1 +='</select>';
						str1 +='</div>';

						str1+='<div id="Rejected'+data.data[i].sno+'" style="background: transparent; display:none">';
						str1 +='<label style="font-size: 11px;">Rejection field<span style="color: red;">*</span></label>';
						str1 +='<div class="select_role_block">';
						str1 +='<select name="approval_se_rejection_field_'+ data.data[i].sno +'" id="approval_se_rejection_field_'+ data.data[i].sno +'" data-role="none">';
						str1 +='<option value="Duplicate" selected="selected">Duplicate</option>';
						str1 +='<option value="Site dose not exist" >Site dose not exist</option>';
						str1 +='<option value="Unable to verify" >Unable to verify</option>';
						str1 +='</select>';
						str1 +='</div>';
						str1 +='</div>';

						str1+='<div>';
						str1+='<div class="ui-grid-a apr_block"><div class="ui-block-a"><a href="javascript:gotoApprovalpage_leads(\''+data.data[i].sno+'\',\''+data.data[i].CustomerId+'\',\''+data.data[i].Mobileno+'\',\''+data.data[i].device_id+'\',\''+data.data[i].device_type+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Verify</a></div><div id="rejectSubmitShow'+data.data[i].sno+'" class="ui-block-b"><a href="javascript:show_leads_se_reject(\'Rejected'+data.data[i].sno+'\',\''+data.data[i].CustomerId+'\',\''+data.data[i].sno+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Reject</a></div><div id="rejectSubmit'+data.data[i].sno+'" style="display:none" class="ui-block-b"><a href="javascript:submitData_leads_se_reject(\'Rejected\',\''+data.data[i].CustomerId+'\',\''+data.data[i].sno+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Submit</a></div></div>';
						str1 += '</div></div></div>';
						str1 +='</div>';
				   }
				 }
				 var metedataless = localStorage.getItem('contUFirstShow');
				 if(showDataless == '0'){
				 str1 +='<div><a onclick="contuSubmore()" id="hideback" style="margin-left: 10px; display:none;">Back...</a><a onclick="contuAddmore()"   >Next...</a></div>';
				//  str1 +='<div><a onclick="contuSubmore()" style="margin-left: 10px;">Back...</a><a onclick="contuAddmore()" style="margin-left: 50%;" >Next...</a></div>'; 
				 }else{
					str1 +='<div class="ne"><a onclick="contuSubmore()" id="hideback" style="margin-left: 10px; ">Back...</a><a onclick="contuAddmore()"   >Next...</a></div>';

				}
                 if(str1=='') 
				  {
						str1='<span style="text-align:center;display: block;">No pending leads</span>';
				  }

				 document.getElementById("se_leads_div").innerHTML=str1;

				 $.mobile.changePage( "#se_leads", { transition: "none"} );

				 //$('#approval_se_mob').val('');

			}
		},
		error: function(xhr, textStatus, errorThrown) {
			$('#loading').removeClass('loading');
			toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
		}
	  });

}

function contuAddmore(){
	var metedata = localStorage.getItem('contUFirstShow');
	contUFirstShow = parseInt(metedata) + parseInt(3);
	contUFirstShow1 = parseInt(contUFirstShow) - parseInt(3);
	localStorage.setItem('showUDataless',contUFirstShow1);
	localStorage.setItem('contUFirstShow',contUFirstShow);

	getPending_sites_byse();
}

function contuSubmore(){
	var metadataL = localStorage.getItem('showUDataless');
	// console.log(metadataL);
	if(metadataL <= 0){
		console.log('NO');
	}else{
	var metedata = localStorage.getItem('contUFirstShow');
	contUFirstShow = parseInt(metedata) - parseInt(3);
	contUFirstShow1 = parseInt(contUFirstShow) - parseInt(3);
	localStorage.setItem('showUDataless',contUFirstShow1);
	localStorage.setItem('contUFirstShow',contUFirstShow);
	getPending_sites_byse();
	}
}

function getPending_sitesFilter(str){
	var searchcon = $('#'+str).val();
	var allSites = JSON.parse(localStorage.getItem('allPendingSites'));
	console.log(allSites.data);
	console.log(searchcon);
	if(searchcon != ''){
		$("#se_leads_div").css("display","none");
		$("#my_searched_site_div").css("display","block");
		var str1='';
		for (var i = 0; i < allSites.data.length; i++){
			if(allSites.data[i].ContractorNo.indexOf(searchcon) >= 0 || allSites.data[i].ContarctorName.toLowerCase().indexOf(searchcon.toLowerCase()) >= 0 ){
			str1 +='<div class="primary_block2">';
			str1 +='<div class="ui-grid-solo">';
			str1 +='<div class="ui-block">';
			str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon1.png" class="location_icon"/><span class="customer_name">Home Owner Name: '+capitalizeFirstLetter(checkforundefined(allSites.data[i].FirstName)+' '+checkforundefined(allSites.data[i].LastName))+'('+allSites.data[i].Mobileno+')</span></div>';
			str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">Contractor Name: '+capitalizeFirstLetter(checkforundefined(allSites.data[i].ContarctorName)+' '+checkforundefined(allSites.data[i].LastName))+'('+allSites.data[i].ContractorNo+')</span></div>';
			// str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].Mobileno)+'" class="a_link_call_new">Home Owner Mobile: '+data.data[i].Mobileno+'</a></span></div>';
			// str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].ContractorNo)+'" class="a_link_call_new">Contractor Mobile: '+data.data[i].ContractorNo+'</a></span></div>';
			str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Contract Type: '+checkforundefined(allSites.data[i].matrialstatus)+'</span></div>';

			str1 +='<label style="font-size: 11px;">Verification field<span style="color: red;">*</span></label>';
			str1 +='<div class="select_role_block">';
			str1 +='<select name="approval_se_verification_field_'+ allSites.data[i].sno +'" id="approval_se_verification_field_'+ allSites.data[i].sno +'" data-role="none">';
			// str1 +='<option>Verification field</option>';
			str1 +='<option value="Physical" selected="selected">Physical</option>';
			str1 +='<option value="Virtual" >Virtual</option>';
			str1 +='</select>';
			str1 +='</div>';

			str1+='<div id="Rejected'+allSites.data[i].sno+'" style="background: transparent; display:none">';
			str1 +='<label style="font-size: 11px;">Rejection field<span style="color: red;">*</span></label>';
			str1 +='<div class="select_role_block">';
			str1 +='<select name="approval_se_rejection_field_'+ allSites.data[i].sno +'" id="approval_se_rejection_field_'+ allSites.data[i].sno +'" data-role="none">';
			str1 +='<option value="Duplicate" selected="selected">Duplicate</option>';
			str1 +='<option value="Site dose not exist" >Site dose not exist</option>';
			str1 +='<option value="Unable to verify" >Unable to verify</option>';
			str1 +='</select>';
			str1 +='</div>';
			str1 +='</div>';

			str1+='<div>';
			str1+='<div class="ui-grid-a apr_block"><div class="ui-block-a"><a href="javascript:gotoApprovalpage_leads(\''+allSites.data[i].sno+'\',\''+allSites.data[i].CustomerId+'\',\''+allSites.data[i].Mobileno+'\',\''+allSites.data[i].device_id+'\',\''+allSites.data[i].device_type+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Verify</a></div><div id="rejectSubmitShow'+allSites.data[i].sno+'" class="ui-block-b"><a href="javascript:show_leads_se_reject(\'Rejected'+allSites.data[i].sno+'\',\''+allSites.data[i].CustomerId+'\',\''+allSites.data[i].sno+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Reject</a></div><div id="rejectSubmit'+allSites.data[i].sno+'" style="display:none" class="ui-block-b"><a href="javascript:submitData_leads_se_reject(\'Rejected\',\''+allSites.data[i].CustomerId+'\',\''+allSites.data[i].sno+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Submit</a></div></div>';
			str1 += '</div></div></div>';
			str1 +='</div>';
	    }

	        document.getElementById("my_panding_site_div").innerHTML=str1;
	}
	}else{
		console.log('in else conditions');
		var str2 = '';
		document.getElementById("my_panding_site_div").innerHTML = str2;
		$("#se_leads_div").css("display","block");
		$("#my_searched_site_div").css("display","none");
		viewSites();
		
	}
}

 function show_leads_se_reject(type,id,sno)
 {
  console.log(type);
  var x = document.getElementById(type);
	if (x.style.display === "none") {
	  x.style.display = "block";
	  $("#rejectSubmit"+sno).css("display","block");
	  $("#rejectSubmitShow"+sno).css("display","none");
	} else {
	  x.style.display = "none";
	  $("#rejectSubmitShow"+sno).css("display","none");
	}
 }
function toggle_For_Rejection_Site()
{
	var str=$('input[name="update_pay_mode"]:checked').val();
	if(str=='Paytm Wallet')
	{
		$("#update_pay_mode_1").css("display","block");
		$("#update_pay_mode_2").css("display","none");
	}
	else
	{
		$("#update_pay_mode_1").css("display","none");
		$("#update_pay_mode_2").css("display","block");
	}
}

function gotoApprovalpage_leads(ind,cust_id,cust_mobile,device_id,device_type)
{
    localStorage.setItem('device_id',device_id);
    localStorage.setItem('device_type',device_type);
    localStorage.setItem('cust_mobile',cust_mobile);
	$('#salesdata_se_leads_cust_id').val(cust_id);
	var verificationField  = $('#approval_se_verification_field_'+ind).val();
	console.log(verificationField);
	 $('#approval_se_verification_select').val(verificationField);
	var demo = $('#approval_se_verification_select').val();
	console.log(demo);
	$.mobile.changePage( "#salesdata_se_leads", { transition: "none"} );
}

function leadnotapprovelpopup(str){
	console.log('str');
	var value = $('#'+str).val();
	if(value == 'Started'){
       console.log('not started')
	}else{
		$(".languagesss").toggle();
	}
	
}

function gotoConstEnrole()
{
	$.mobile.changePage( "#enroleContractor", {transition: "flip"} );
	// fetchDistrictlist();
	// showCityDealerList();
	//$("#contest_tabs").tabs( "option", "active", 1 );
}


function submitData_leads_se(stype,btnId1)
{
	if(stype=='Approved')
	{
		var cust_id  = $('#salesdata_se_leads_cust_id').val();
		console.log(cust_id);
		var verificationField = $('#approval_se_verification_select').val();
		console.log(verificationField);
		var approval  = $('#approvel_se_leads_txns').val();
		//var sitea  = $('#salesdata_se_leads_sitea').val();
		var cement_potentiall  = $('#salesdata_se_leads_cement_potentiall').val();
		var cement_consumed  = $('#salesdata_se_leads_cement_consumed').val();
		var cement_leftpotentiall  = $('#salesdata_se_leads_cement_leftpotentiall').val();
		console.log(cement_leftpotentiall);
		//var app_type  = $('#approval_se_leads_type').val();
		var reason = $('#approval_se_leads_reason').val();
		var follow_up  = $('#approval_se_followup').val();
		var address = $('#approval_se_address').val();
		// var location = $('#approval_se_loc').val();
		var state = $('#approval_se_state').val();
		var district = $('#approval_se_dist').val();
		var city = $('#approval_se_city').val();
        //   console.log(cement_potentiall + ' ' + '<' + ' ' + cement_consumed   + ' '+ 'left ='+ cement_leftpotentiall);
		if(cement_potentiall - cement_consumed <= 0){
			console.log('jadA HAI');
            $('#salesdata_se_leads_cement_leftpotentiall').val('');
			toast('Enter Valid Number of Bags.');
		}else{
			// console.log(btnId1);
			// document.getElementById(btnId1).disabled = true;
			// $("#site_approve_submit").css("display","none");
			// document.getElementById(btnId1).disabled = true;
		if(cust_id == ''){
			toast('Please enter mandatory fields1');
		}else if(address == ''){
			toast('Please Select Address Field');
		}else if(state == '' || state == null){
			toast('Please Select State Field');
		}else if(district == '' || district == null){
			toast('Please Select District Field');
		}else if(city == '' || city == null){
			toast('Please Select City Field');
		}else if(approval == '' || approval == null || approval == 'undefined'){
			toast('Please Select Status Field Field');
		}else if(verificationField == '' || verificationField == null || verificationField == 'undefined'){
			toast('Please Select Verification Field Field');
		}else if(cement_potentiall == '' || cement_potentiall == null || cement_potentiall == 'undefined'){
			toast('Please Select Mendatory Field');
		}else if(cement_consumed == '' || cement_consumed == null || cement_consumed == 'undefined'){
			toast('Please Select Mendatory Field');
		}else if(cement_leftpotentiall == '' || cement_leftpotentiall == null || cement_leftpotentiall == 'undefined'){
			toast('Please Select Mendatory Field');
		}else{
			document.getElementById("site_approve_submit").disabled = true;
			$.ajax({
				url: SERVER2+"site_approval_rejection.asp",
				type: 'POST',
				timeout: 50000,
				dataType: 'json',
				data:{
				  "customerid": cust_id,
				  "status": 'Approved',
				  "contructionstatus": '',
				  "timeframe": '',
				  "siteareasqft": verificationField,
				  "reason": approval,
				  "se_code": store.secode,
				  "Address": address,
				  "state": state,
				  "city": city,
				  "district": district,
				  "total_cement_potential": cement_potentiall,
				  "total_cement_consumed": cement_consumed,
				  "potentialleft": cement_leftpotentiall,
	 
				},

				
				beforeSend: function (xhr) {
	
					 $("#wait").css("display","block");
					xhr.setRequestHeader('apiuid', 'MLOYALAPIACC');
					xhr.setRequestHeader('apipswd', ' Ml0yalAP!2o14ACC');
	
				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
							
								//console.log('Data:'+JSON.stringify(data));
	
								if(data.error.length>0)
								{
									toast(data.error);
								}
								else
								{
									$("#approve_submit_button").css("display","block");
									showPOPSiteApprove(data.data);
									document.getElementById("site_approve_submit").disabled = false;
                                    sendNoti("Site Lead Approved","Site for "+localStorage.getItem('cust_mobile'));
									$('#approval_se_verification_select').val('');
									$('#salesdata_se_leads_cement_potentiall').val('');
		                            $('#salesdata_se_leads_cement_consumed').val('');
		                            $('#salesdata_se_leads_cement_leftpotentiall').val('');
									$('#approval_se_state').val('');
		                            $('#approval_se_dist').val('');
		                            $('#approval_se_city').val('');
									$('#approval_se_address').val('');
								}
	
								// update_memberStore(mob,disttobuy);
	
								
						 },
						error: function(xhr, textStatus, errorThrown) {
							 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
							}
					});
			}
		}
	}
	else if(stype == 'Rejected')
	{
		var cust_id  = $('#salesdata_se_leads_cust_id').val();
		var reasolnsSitereject  = $('#reason_se_leads_txns_reason').val();
		// console.log(timef);
		var verificationField  = $('#approval_se_verification_select').val();
		var cement_potentiall  = $('#salesdata_se_leads_cement_potentiall').val();
		var cement_consumed  = $('#salesdata_se_leads_cement_consumed').val();
		var cement_leftpotentiall  = $('#salesdata_se_leads_cement_leftpotentiall').val();
		var reason = $('#approval_se_leads_reason').val();
		var address = $('#approval_se_address').val();
		// var location = $('#approval_se_loc').val();
		var state = $('#approval_se_state').val();
		var district = $('#approval_se_dist').val();
		var city = $('#approval_se_city').val();
	
		if(cust_id ==''){
			toast('Please enter mandatory fields');
		}else
		{
			$.ajax({
				url: SERVER2+"site_approval_rejection.asp",
				type: 'POST',
				timeout: 50000,
				dataType: 'json',
				data:{
					"customerid": cust_id,
					"status": 'Rejected',
					"contructionstatus": '',
					"timeframe": '',
					"siteareasqft": '',
					"potentialleft": '',
					"reason": '',
					"se_code": store.secode,
					"Address": '',
					"state": '',
					"city": '',
					"district": '',
					"total_cement_potential": '',
				    "total_cement_consumed": '',
				    "potential_left": '',
				  },
				beforeSend: function (xhr) {
	
					 $("#wait").css("display","block");
					xhr.setRequestHeader('apiuid', 'MLOYALAPIACC');
					xhr.setRequestHeader('apipswd', ' Ml0yalAP!2o14ACC');
	
				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
							
								//console.log('Data:'+JSON.stringify(data));
	
								if(data.error.length>0)
								{
									toast(data.error);
								}
								else
								{
									showPOPSiteApprove(data.data);
									$('#approval_se_verification_select').val('');
								}
	
								//update_memberStore(mob,disttobuy);
	
								
						 },
						error: function(xhr, textStatus, errorThrown) {
							 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
							}
					});
			}
	}
	
}

function submitData_leads_se_reject(stype,cust_id,sno){
	console.log(sno)
	    // var cust_id  = $('#salesdata_se_leads_cust_id').val();
		var reasolnsSitereject  = $('#reason_se_leads_txns_reason').val();
		var verificationField  = $('#approval_se_verification_select').val();
		var cement_potentiall  = $('#salesdata_se_leads_cement_potentiall').val();
		var cement_consumed  = $('#salesdata_se_leads_cement_consumed').val();
		var cement_leftpotentiall  = $('#salesdata_se_leads_cement_leftpotentiall').val();
		var reason = $('#approval_se_leads_reason').val();
		var address = $('#approval_se_address').val();
		var rejectionreason = $('#approval_se_rejection_field_'+sno).val();
		var state = $('#approval_se_state').val();
		var district = $('#approval_se_dist').val();
		var city = $('#approval_se_city').val();
		// var follow_up  = $('#approval_se_followup').val();
		// var LB202_Potential = $('#approval_se_LB202_Potential').val();
		// var LB202_Consumed = $('#approval_se_LB202_Consumed').val();
		// var LB202_Left = $('#approval_se_LB202_Left').val();
		// var LB303_Potential = $('#approval_se_LB303_Potential').val();
		// var LB303_Consumed = $('#approval_se_LB303_Consumed').val();
		// var LB303_Left = $('#approval_se_LB303_Left').val();
		// var XT22_Potential = $('#approval_se_XT22_Potential').val();
		// var XT22_Consumed = $('#approval_se_XT22_Consumed').val();
		// var XT22_Left = $('#approval_se_XT22_Left').val();
		console.log(cust_id + ' ' + stype + ' ' + rejectionreason)
		if(cust_id =='')
		{
			toast('Please enter mandatory fields');
		}
		else if( rejectionreason=='' || rejectionreason==null || rejectionreason=='undefined' || rejectionreason=='null'){
			toast('Please enter Rejection fields');
		}
		else
		{
			$.ajax({
				url: SERVER2+"site_approval_rejection.asp",
				type: 'POST',
				timeout: 50000,
				dataType: 'json',
				data:{
					"customerid": cust_id,
					"status": 'Rejected',
					"contructionstatus": '',
					"timeframe": '',
					"siteareasqft": '',
					"potentialleft": '',
					"reason": rejectionreason,
					"se_code": store.secode,
					"Address": '',
					"state": '',
					"city": '',
					"district": '',
					"total_cement_potential": '',
				    "total_cement_consumed": '',
				    "potential_left": '', 
				  },
				beforeSend: function (xhr) {
	
					 $("#wait").css("display","block");
					xhr.setRequestHeader('apiuid', 'MLOYALAPIACC');
					xhr.setRequestHeader('apipswd', ' Ml0yalAP!2o14ACC');
	
				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
							
								//console.log('Data:'+JSON.stringify(data));
	
								if(data.error.length>0)
								{
									toast(data.error);
								}
								else
								{
									showPOPSiteApprove(data.data);
									$('#approval_se_verification_select').val('');
								}
	
								//update_memberStore(mob,disttobuy);
	
								
						 },
						error: function(xhr, textStatus, errorThrown) {
							 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
							}
					});
			}
	}


function sendNoti(title,bodymsg)
{

    var settings = {
        "url": "https://fcm.googleapis.com/fcm/send",
        "method": "POST",
        "timeout": 0,
        "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer AAAAuXAo4hY:APA91bEJLOLQ5NN3yBQ6phEyEWYrMVy1Kn301bgcYbDLRdBPkkTIOmTlIef2TnppEDBO9CthUQcL3atdadEJ1Et9_D8un_UQZDnw8VNQfqJfDuVXtfVA4BfZ9IDT5iVf06H7YO6lfgWY"
        },
        "data": JSON.stringify({
        "to": localStorage.getItem('device_id'),
        "data": {
            "title": title,
            "body": bodymsg,
            "image": "https://taghash.co/Atoot-Bandhan-Dealer/www/assets/images/logo4.png"
        }
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}

function resetSalesdata_se_leads()
{
	// $('#salesdata_se_leads_sitecs').val('');
	// $('#salesdata_se_leads_timef').val('');
    // $('#salesdata_se_leads_sitea').val('');
	$('#salesdata_se_leads_potentiall').val('');
	//$('#approval_se_type').val('');
	//document.getElementById('approval_se_type').selectedIndex= 0;
}

function gotoHomepage()
{

	if(localStorage.getItem('cattype_ex') == 'Mechanic')
	{
		$.mobile.changePage( "#homepage", { transition: "none"} );
	}
	else if(localStorage.getItem('cattype_ex') == 'SalesExecutive')
	{
		$.mobile.changePage( "#homepage_se", { transition: "none"} );
	}
	else
	{
		$.mobile.changePage( "#homepage", { transition: "none"} );
        // do nothing
	}
}

function capturePhoto_shop() 
{
	navigator.camera.getPicture(uploadPhoto_shop, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function capturePhoto_pan() 
{
	navigator.camera.getPicture(uploadPhoto_pan, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function capturePhoto_aadhar()
{
	navigator.camera.getPicture(uploadPhoto_aadhar, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function uploadPhoto_shop(imageURI) 
{

				
				var b_Image = document.getElementById('shop_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='shop_'+user.mobile;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				shop_img="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";


				localStorage.setItem('shopimg',shop_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("shop_photo_status");
				statusDomdiv=document.getElementById("shop_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new.php"), win, failPhoto_shop, options, true);
}

function failPhoto_shop(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('shopimg');
			shop_img = '';
			document.getElementById('shop_photo').src = "assets/images/camera_icon.png";
}

function uploadPhoto_pan(imageURI) 
{

				
				var b_Image = document.getElementById('pan_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='pan_'+user.mobile;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				pan_img="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";


				localStorage.setItem('docimg',pan_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("pan_photo_status");
				statusDomdiv=document.getElementById("pan_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new.php"), win, failPhoto_pan, options, true);
}

function failPhoto_pan(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('docimg');
			pan_img = '';
			document.getElementById('pan_photo').src = "assets/images/camera_icon.png";
}

function capturePhoto_aadhar(imageURI) 
{

				
				var b_Image = document.getElementById('aadhar_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='aadhar_'+user.mobile;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				aadhar_img="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";


				localStorage.setItem('adimg',aadhar_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("aadhar_photo_status");
				statusDomdiv=document.getElementById("aadhar_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new.php"), win, failPhoto_aadhar, options, true);
}

function failPhoto_aadhar(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('adimg');
			aadhar_img = '';
			document.getElementById('aadhar_photo').src = "assets/images/camera_icon.png";
}

function check_no_of_mechanics()
{
	var ncount = $('#update_no_of_mechanics').val();

	if(parseInt(ncount)>99)
	{
		toast('Mechanics values only less than 99');
		$('#update_no_of_mechanics').val('');
	}
}

function check_potential()
{
	var ncount = $('#update_potential').val();

	if(parseInt(ncount)>999)
	{
		toast('Potential values only less than 999');
		$('#update_potential').val('');
	}
}

function check_no_of_mechanics_byse()
{
	var ncount = $('#update_no_of_mechanics_byse').val();

	if(parseInt(ncount)>99)
	{
		toast('Mechanics values only less than 99');
		$('#update_no_of_mechanics_byse').val('');
	}
}

function check_potential_byse()
{
	var ncount = $('#update_potential_byse').val();

	if(parseInt(ncount)>999)
	{
		toast('Potential values only less than 999');
		$('#update_potential_byse').val('');
	}
}

function togglePaymode()
{
	var str=$('input[name="update_pay_mode"]:checked').val();
	if(str=='Paytm Wallet')
	{
		$("#update_pay_mode_1").css("display","block");
		$("#update_pay_mode_2").css("display","none");
	}
	else
	{
		$("#update_pay_mode_1").css("display","none");
		$("#update_pay_mode_2").css("display","block");
	}
}

function togglePaymode_byse()
{
	var str=$('input[name="update_pay_mode_byse"]:checked').val();
	if(str=='Paytm Wallet')
	{
		$("#update_pay_mode_1_byse").css("display","block");
		$("#update_pay_mode_2_byse").css("display","none");
	}
	else
	{
		$("#update_pay_mode_1_byse").css("display","none");
		$("#update_pay_mode_2_byse").css("display","block");
	}
}

function toggleKyc_docdiv()
{
	var str= $('#update_kyc_type').val();

	if(str=='Pancard')
	{
		$("#update_kyc_type_pancard").css("display","block");
		$("#update_kyc_type_aadharcard").css("display","none");
	}
	else
	{
		$("#update_kyc_type_pancard").css("display","none");
		$("#update_kyc_type_aadharcard").css("display","block");
	}
}

function toggleKyc_docdiv_byse()
{
	var str= $('#update_kyc_type_byse').val();

	if(str=='Pancard')
	{
		$("#update_kyc_type_pancard_byse").css("display","block");
		$("#update_kyc_type_aadharcard_byse").css("display","none");
	}
	else
	{
		$("#update_kyc_type_pancard_byse").css("display","none");
		$("#update_kyc_type_aadharcard_byse").css("display","block");
	}
}

function checkmobile_paytmno(mob)
{
	var mobile = $('#'+mob).val();
	
    //var filter = /^[6-7][0-9-+]+$/;
    //if (filter.test(mobile)) {
    var firstelem = mobile.charAt(0);
    
	if(mobile!='')
    {
		if(parseInt(firstelem)>5 && parseInt(firstelem)<10 && mobile.length==10)
		{
			return true;
		}
		else 
		{
			
			//$.mobile.changePage( "#transferpointspg1", { transition: "slide"} );
			
			//for development purpose only
			
			toast("Please put valid 10 digit mobile number");
			$('#'+mob).val('');
			return false;
		
		}
   }
}
function checkUpi(str)
{
	var str1 = $('#'+str).val();

	if(str1.length<=20)
	{
		return (true);
	}
	toast('Invalid UPI Id');
	$('#'+str).val('');
	return (false);
}

function setminDate_dob()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10)
	{
		dd='0'+dd;
	} 
	if(mm<10)
	{
		mm='0'+mm;
	} 

	today = yyyy+'-'+mm+'-'+dd;
    
	document.getElementById("update_dob").setAttribute("max", today);

}

$(document).on('pageshow', '#profilepage', function (event, ui) {

	//setminDate_dob();

});

function fetchcurrent_Location()
{
        try{
		cordova.plugins.locationAccuracy.request(
          function() {
            console.log("testhigh success");
            setTimeout(function() {
              getPosition_new();
            }, 1500);
          },
          function() {
            //toast("error");
          },
          cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
        );
		 }
		 catch(e)
		 {

		  navigator.geolocation.getCurrentPosition(geolocationSuccess_new,geolocationError_new);

		 }
}
function getPosition_new() 
{
         navigator.geolocation.getCurrentPosition(geolocationSuccess_new,geolocationError_new);
}
function geolocationSuccess_new(position)
{
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
       
		console.log('latlng:'+ position.coords.latitude+','+position.coords.longitude);

		$('#update_latitude').val(lat);
		$('#update_longitude').val(lng);
								
}
function geolocationError_new(error) 
{
        //toast('unable to trace');
}

function check_pin(str)
{
	var str1 = $('#'+str).val();

	if(str1.length==6)
	{
		return (true);
	}
	toast('Invalid Pin');
	$('#'+str).val('');
	return (false);
}

function sendOtp_scan()
{
    
	var serialno  = $('#scan_serialno').val();
	var mobile  = $('#scan_mobile').val();
	var fname  = $('#scan_fname').val();
	var lname  = $('#scan_lname').val();
	var pincode  = $('#scan_pincode').val();
	var vehicleno  = $('#scan_vehicleno').val();
	//var registrationfor = $('input[name="scan_registrationfor"]:checked').val();
	//var batterytype = $('input[name="scan_batterytype"]:checked').val();

    var invoiceno  = $('#scan_invoiceno').val();
	var sku_no  = $('#scan_sku').val();
	var brandcode = $('#scan_brandcode').val();
	var invoicedate  = $('#scan_invoicedate').val();

	var username = "testuser";
	var password = "ANRBIRApu20Avi21";


	var today = new Date();
		
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 
        today = yyyy+'-'+mm+'-'+dd;


	if(serialno=='' || mobile=='' || fname=='' || lname=='' || pincode=='' || vehicleno=='')
	{
		toast('Please enter mandatory fields');
	}
	else if(mobile.length!=10)
	{
		toast('Please enter 10 digits mobile number');
	}
	else
	{
			
			$.ajax({
				url: SERVER_SF+"SFSalesRegistration/ISVCRegGeneric.svc/sendOtpForBatteryRegistrationByCustomer",
				type: 'POST',
				timeout: 300000,
				dataType: 'json',
				data:JSON.stringify({
					    "encryptiontoken": "FHSdwKrYU-pVLDty-WEPPECop365gfs",
						"registrationFor": "B",
						"batterySerialNumber": serialno,
						"purchaseDate": invoicedate,
						"mobileNumber": mobile,
						"batteryType": "1",
						"vehicleRegistrationNumber": vehicleno,
						"FirstName": fname,
						"LastName": lname,
						"Pincode": pincode
				}),
				beforeSend: function (xhr) {

					$("#wait").css("display","block");
					xhr.setRequestHeader("Content-Type", "application/json");
					xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));

				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
				 
				    console.log("data:"+JSON.stringify(data));
				    //console.log(data.Response);

					if(data.Response=='6')
					{
						toast_p(data.Description);
						$('#scan_otp_mobile').val(mobile);
						$('#scan_otp_qrcode').val(serialno);
						$('#scan_otp_session_token').val(data.sessionToken);

						$("#submit_scan_details_pg_btn").attr("href", "javascript:submitOtp_scan('"+sku_no+"','"+invoiceno+"','"+brandcode+"','"+invoicedate+"');");

						$.mobile.changePage( "#scan_otp_pg", { transition: "none"} );
					}
					else
					{
						toast_p(data.Description);
					}
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are connected to Internet');
					}
			});
				
		}
}

function submitOtp_scan(sku_no,invoiceno,brandcode,invoicedate)
{
   
	var otpval  = $('#scan_otp').val();
	var mobileno  = $('#scan_otp_mobile').val();
	var itemcode  = $('#scan_otp_qrcode').val();
	var session_token = $('#scan_otp_session_token').val();

	var username = "testuser";
	var password = "ANRBIRApu20Avi21";

	if(otpval=='')
	{
		toast('Please enter OTP.');
	}
	else
	{
	    $.ajax({
				url: SERVER_SF+"SFSalesRegistration/ISVCRegGeneric.svc/verifyOtpForBatteryRegistrationByCustomer",
				type: 'POST',
				timeout: 300000,
				dataType: 'json',
				data:JSON.stringify({
					    "encryptiontoken": "FHSdwKrYU-pVLDty-WEPPECop365gfs",
						"sessionToken": session_token,
						"otp": otpval
				}),
				beforeSend: function (xhr) {

					$("#wait").css("display","block");
					xhr.setRequestHeader("Content-Type", "application/json");
					xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));

				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
				 
				    console.log("data:"+JSON.stringify(data));

					if(data.Response=='2')
					{
						//toast(data.Description);
						earn_Scanpage(mobileno,sku_no,invoiceno,brandcode,invoicedate);
						checkScan_count();
					}
					else
					{
						toast_p(data.Description);
					}
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are connected to Internet');
					}
			});
    }
}

function resend_Scan_otp()
{
	var username = "testuser";
	var password = "ANRBIRApu20Avi21";

	var session_token = $('#scan_otp_session_token').val();

	$.ajax({
				url: SERVER_SF+"SFSalesRegistration/ISVCRegGeneric.svc/resendOtp",
				type: 'POST',
				timeout: 300000,
				dataType: 'json',
				data:JSON.stringify({
					    "encryptiontoken": "FHSdwKrYU-pVLDty-WEPPECop365gfs",
						"sessionToken": session_token,
						"sectionType": "C"
				}),
				beforeSend: function (xhr) {

					$("#wait").css("display","block");
					xhr.setRequestHeader("Content-Type", "application/json");
					xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));

				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
				 
				    console.log("data:"+JSON.stringify(data));
				    //console.log(data.Response);

					if(data.Response=='1')
					{
						toast_p(data.Description);
						$('#scan_otp_session_token').val(data.sessionToken);
					}
					else
					{
						toast_p(data.Description);
					}
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are connected to Internet');
					}
			});
}

function setToday_date()
{
	var today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+dd;
	} 
	if(mm<10){
		mm='0'+mm;
	}
	var current_date = yyyy+'-'+mm+'-'+dd;
    console.log(current_date);

	if(localStorage.getItem("todaydate_atootbandhan"))
	{
		var set_date = localStorage.getItem("todaydate_atootbandhan");

		if(current_date.toString() != set_date.toString())
		{
			console.log('not same');
			localStorage.setItem("todaydate_atootbandhan",current_date);
			localStorage.setItem("scanseen_count","0");
		}
		else
		{
			console.log('same');
		}
	}
	else
	{
		localStorage.setItem("todaydate_atootbandhan",current_date);
		localStorage.setItem("scanseen_count","0");
	}

}

function checkScan_count()
{

    var today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+dd;
	} 
	if(mm<10){
		mm='0'+mm;
	}
	var current_date = yyyy+'-'+mm+'-'+dd;
    //console.log(current_date);

	var s_date = localStorage.getItem("todaydate_atootbandhan");

    if(current_date.toString() == s_date.toString())
	{
		var s_count = localStorage.getItem("scanseen_count");
		s_count++;
		localStorage.setItem("scanseen_count",s_count);
	}

}

function update_memberStore(mob,scode)
{
	$.ajax({
			url: SERVER2+"update_customer_store_api.asp",
		    type: 'GET',
		    timeout: 55000,
		    dataType: 'json',
		    data:{
				 'apiuid': 'MLOYALAPI',
				 'apipswd':'Ml0yalAP!2o14',
				 'mno': mob,
				 'StoreCode': scode
            },
		    beforeSend: function (xhr) {
		     	$("#wait").css("display","block");
            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			 
			    console.log("data:"+JSON.stringify(data));

				if(data.data.length>0)
				{
					//toast(data.data);
				}
				else
				{
					//toast('Invalid code');
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 //toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}

$(document).on('pageshow', '#pointPage', function (event, ui) {
    
	update_balancePts();
 
});

function update_balancePts()
{

	$.ajax({
	    url: SERVER+'points_history_json.asp',
	    type: 'GET',
	    timeout: 50000,
		dataType: 'json',
		data: {'mno': user.mobile},
		complete: function(xhr, textStatus) {
	       //called when complete
		},
		success: function(data, textStatus, xhr) {

		    //console.log('JSONDATA:'+JSON.stringify(data));

			user.balance = data.balance;
			localStorage.setItem('balance',user.balance);

			document.getElementById("profilepts1").innerHTML=data.balance;
			document.getElementById("tpoint").innerHTML = data.balance;
			document.getElementById("trans_pts").innerHTML = data.balance;
			
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			$.mobile.changePage( "#homepage", { transition: "none"} );
		}
	  });
}

function get_distributors_against_se()
{
	$.ajax({
		url: SERVER2+'get_se_stores_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','secode': store.secode},
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

			console.log("data:"+JSON.stringify(data));
			 //var data = JSON.parse(data);

			    var listItems= "";
				    listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-Select Distributor*-</option>";

			    if(data.data[0].msg=='No Records Found.')
				{
				  toast('No Distributor Records Found.');
				}
				else
				{
					   if(data.data.length>=0)
					   {
						 for (var i = 0; i < data.data.length; i++)
						 {
							listItems+= "<option value='" + data.data[i].Distributor_Code + "'>"+data.data[i].Distributor_Name+"</option>";
						 }
					   }
				}

				$("#approval_se_dist_list").html(listItems);
				$("#update_dealer_list_byse").html(listItems);
				  
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function AddUser_byse()
{
	$('#newuser_mobile_byse').val('');
	$('#newuser_register_byse_popup').popup();
    $('#newuser_register_byse_popup').popup("open");


	try{
	$( "#sidebar_se" ).panel( "close" );
	}catch(err) 
	{	}
}

function existingUser_check_byse()
{
	
	 var searchcust = $('#newuser_mobile_byse').val();

	 if(searchcust=='')
	 {
		toast('Please Enter Mobile No.');
	 }
	 else if(searchcust.indexOf(".")>=0)
	 {
		 toast('Invalid Mobile No.');
	 }
	 else if(searchcust.length<10 || searchcust.length>10)
	 {
		 toast('Invalid Mobile No.');
	 }
	 else
	 {
	  
	  $.ajax({
	    url: SERVER2+'get_points_json_api.asp',
	    type: 'GET',
	    timeout: 50000,
		dataType: 'json',
		data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': searchcust},
		complete: function(xhr, textStatus) {
	    //called when complete
		},
		success: function(data, textStatus, xhr) {
		    //console.log('JSONDATA'+JSON.stringify(data));

			fetchcurrent_Location();

			if(data.data.length>0)
			{
				toast('User already registered with us');
				$('#newuser_mobile_byse').val('');
			}
			else
			{
				//toast(data.error);
				clearReg_forse();
				customerRegistration_forSe(searchcust);
			}
		
	  
		},
		error: function(xhr, textStatus, errorThrown) {
			//toast('searchcust:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	  

	 }
}

function clearReg_forse()
{
	$('#update_firstname_byse').val('');
    $('#update_mobile_byse').val('');
    // $('#update_email_byse').val('');
	$('#update_gstno_byse').val('');
	$('#update_pancardno_byse').val('');
	$('#update_aadharno_byse').val('');
	$('#update_pincode_byse').val('');
	$('#update_address_byse').val('');
	$('#update_address_main_byse').val('');
	$('#update_city_byse').val('');
	
	document.getElementById('update_state_list_byse').selectedIndex= 0;
	$("#update_district_byse").html('');

	//$('#update_district_byse').val('');
	$('#update_dealer_list_byse').val('');
	$('#update_garage_name_byse').val('');
	localStorage.setItem('shopimg_byse','');
	localStorage.setItem('docimg_byse','');
	localStorage.setItem('adimg_byse','');

	document.getElementById('update_workshop_nature_byse').selectedIndex= 0;
	document.getElementById('update_vehicle_type_byse').selectedIndex= 0;
	document.getElementById('update_planguage_byse').selectedIndex= 0;

	$('#update_no_of_mechanics_byse').val('');
	$('#update_potential_byse').val('');
	//$('input[name="update_charger_available_byse"]:checked').val();
	//$('input[name="update_pay_mode_byse"]:checked').val();
	$('#update_paytm_mobile_byse').val('');
	$('#update_upi_id_byse').val('');
	$('#update_dob_byse').val('');

	document.getElementById('shop_photo_byse').src = "assets/images/camera_icon.png";
    document.getElementById('pan_photo_byse').src = "assets/images/camera_icon.png";
	document.getElementById('aadhar_photo_byse').src = "assets/images/camera_icon.png";

	/*$("#update_district_ret1").html('');
	$("#update_brandstobuy_ret1 option:selected").removeAttr("selected");
	$("#update_brandstobuy_ret1").val('').trigger("change");*/
}

function customerRegistration_forSe(mobileno)
{
	  //console.log('mobileno:'+mobileno);p

	  $.ajax({
				
				url: SERVER2+'cust_registration_json_api.asp',
				type: 'GET',
				timeout: 300000,
				dataType: "json",
				data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': mobileno, 'title': '', 'firstname': ' ', 'Lastname': ''
				, 'gender': '', 'email': '', 'homeno': '', 'dobday': '', 'dobmonth': '', 'dobyear': '',
				'doaday': '', 'domonth': '', 'doayear': '', 'floor_flat': '', 'building': '', 'street': '',
				'town': '', 'city': '', 'country': '', 'occupation': '', 'scode': ''},
				
				success: function(data, textStatus, xhr) {
					
					//console.log('Data:'+JSON.stringify(data));

					if(data.error!='')
					{
						toast(data.error);
					}
					else
					{
						$('#update_mobile_byse').val(mobileno);
						get_distributors_against_se();
						$.mobile.changePage( "#profilepage_byse", { transition: "none"} );
					}
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are conn ected to Internet'+errorThrown);
					}
				 
			});
}

function updateProfile_byse()
{

	var firstname = $('#update_firstname_byse').val();
	var lastname = $('#update_lastname_byse').val();
	var mobile = $('#update_mobile_byse').val();
	var mobile2 = $('#update_mobile2_byse').val();
	// var email = $('#update_email_byse').val();
	var address = $('#update_address_byse').val();

	var gender = $('input[name="update_gender_byse"]:checked').val();
	var aadharno = $('#update_aadharno_byse').val();
	var doctype = $('#update_kyc_type_byse').val();

	var state = $('#update_state_list_byse').val();
	var district = $('#update_district_byse').val();
	var city = $('#update_city_byse').val();
	var store_cd = $('#update_dealer_list_byse').val();

	
		var mm ='';
		var dd ='';
		var dd1 ='';
		var yyyy = '';
		var yyyy1 = '';
        
        var source_byse = $('#update_source_byse').val();
		var from_type = $('#update_point_claim_byse').val();
		var selfimg = checkforundefined($('#update_photo_byse').val());
		var docimg = checkforundefined(localStorage.getItem('IdProof_pic'));

		var birthday = $('#update_dob_byse').val();
			
		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           //$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;
		}

		var mandate=false;

		
		if(firstname.trim() == '' || aadharno.trim() == '')
		{
			toast('Please enter mandatory fields.');
		}
		else if(state == null || state == 'undefined' || state == '' || state=='null')
		{         
			toast('Please enter mandatory fields.');
		}
		else if(district == null || district == 'undefined' || district == '' || district=='null')
		{       
			toast('Please enter mandatory fields.');
		}
		else if(city == '' || city == 'undefined' || city == '' || city=='null')
		{
			toast('Please enter mandatory fields.');
		}
		else if(gender == '' || gender == 'undefined' || gender == '' || gender=='null')
		{
			toast('Please enter mandatory fields.');
		}
		else if(store_cd == '' || store_cd == 'undefined' || store_cd == '' || store_cd=='null') 
		{
			toast('Please select dealer.');
		}
		else
		{
		  $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'FirstName': firstname,
				'lastName': lastname,
				'deviceid': reg_id,
				'cname':'',
				'mobileno': mobile,
				'altmobileno':mobile2,
				'Emailid': '',
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
                'deviceType': deviceType,
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'storecd': store_cd,
				'source': source_byse,
				'point_claim': from_type,
				'floor_flat': address,
				'state': state,
				'district': district,
				'city': city,
				// 'manpower': manpower,
				// 'Infrastructure': infrastructure,
				// 'expertise': expertise,
				// 'accounto': bankacounto,
				// 'gstno': gstnNo,
				// 'qualification': qualification,
				// 'ongoingsites': ongoingsites,
				// 'completeSites': completedsites,
				'profilephoto': selfimg,
				'gender': gender,
				'aadhar_card_no': aadharno,
				'IdProof_Name': doctype,
				'IdProof_pic': docimg
			},
			success: function(data, textStatus, xhr) {

				
				if(data.indexOf("Success")>=0)
				{
					toast('Contractor profile has been updated successfully.');

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);

				$.mobile.changePage( "#homepage", {transition: "flip"} );
				reset_updateProfile_byse();
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function reset_updateProfile_byse()
{
	$('#update_firstname_byse').val('');
	$('#update_lastname_byse').val('');
	$('#update_mobile_byse').val('');
	$('#update_mobile2_byse').val('');
	// $('#update_email_byse').val('');
	$('#update_address_byse').val('');

	$('input:radio[name="update_gender_byse"][value="Male"]').prop('checked', true);
	$('#update_aadharno_byse').val('');
	$('#update_kyc_type_byse').val('pancard');

	$('#update_source_byse').val('');
	$('#update_point_claim_byse').val('');
	$('#update_photo_byse').val('');
	$('#update_dob_byse').val('');

	document.getElementById("kycdoc_photo_byse").src = 'assets/images/camera_icon.png';
	localStorage.setItem('IdProof_pic','');
	doc_img='';

	document.getElementById('update_state_list_byse').selectedIndex= 0;
	$("#update_district_byse").html('');
	$("#update_city_byse").html('');
	$("#update_dealer_list_byse").html('');
}

function getPending_members_byse_foredit()
{

	  $.ajax({
		url: SERVER2+'get_district_member_json_byse_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALCKBAPI','apipswd':'Ml0yalCKBAP!2!','se_code': store.secode },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		    //console.log(JSON.stringify(data));
            
			var str='';
			var str1='';

			if(data.error.length>0)
			{
				toast(data.error);
				str1 +='';
			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {
       
						str1 +='<div class="primary_block">';
						str1 +='<div class="ui-grid-solo">';
						str1 +='<div class="ui-block">';

						if(checkforundefined(data.data[i].isduplicate)=='Yes')
					    {
							str1 +='<div class="approval_block" style="background: #FFFF00 !important;"><img src="assets/images/retailer_name_icon.png" class="location_icon" /><span class="customer_name">'+capitalizeFirstLetter(data.data[i].FirstName+' '+data.data[i].LastName)+'</span></div>';
						}
						else
						{
							str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+capitalizeFirstLetter(data.data[i].FirstName+' '+data.data[i].LastName)+'</span></div>';
						}
						
						str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].Mobileno)+'" class="a_link_call_new">Mobileno: '+data.data[i].Mobileno+'</a></span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Email: '+checkforundefined(data.data[i].Email)+'</span></div>';

					
                        console.log('data.data[i].Dobday:'+data.data[i].Dobday);
						if(data.data[i].Dobday.trim()!='' && data.data[i].Dobmonth.trim()!='' && data.data[i].Dobyear.trim()!='' )
						{

							var dob_se1 = data.data[i].Dobday+'-'+data.data[i].Dobmonth+'-'+data.data[i].Dobyear;
							str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">DOB: '+checkforundefined(dob_se1)+'</span></div>';
						}
						

						str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">PanCardNo: '+checkforundefined(data.data[i].PanCardNo).toUpperCase()+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">GstNo: '+checkforundefined(data.data[i].GstNo).toUpperCase()+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">AadharCardNo: '+checkforundefined(data.data[i].AadharCardNo)+'</span></div>';
                        
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email">Garage Name: '+checkforundefined(data.data[i].ShopName)+'</span></div>';

                   
						if(data.data[i].ShopPhoto.trim()!='')
						{
							str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Garage Photo: <img src="'+data.data[i].ShopPhoto+'" style="margin-top:5px;width:20px;height:20px;" class="ui-li-icon ui-corner-none profile_img" onclick="javascript:opendocImg(\''+data.data[i].ShopPhoto+'\');"/></span></div>';
						}

						str1 +='<div class="approval_block"><img src="assets/images/retailer_map_icon.png" class="location_icon"/><span class="approval_email">Address: '+checkforundefined(data.data[i].HomeNo)+' '+checkforundefined(data.data[i].Floor_flat)+', '+checkforundefined(data.data[i].Street)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">City: '+checkforundefined(data.data[i].City)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">District: '+checkforundefined(data.data[i].District)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">Pincode: '+checkforundefined(data.data[i].PostalCode)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">State: '+checkforundefined(data.data[i].State)+'</span></div>';

						str1+='<div>';
						str1+='<div class="ui-grid-a apr_block"><div class="ui-block-a"></div><div class="ui-block-b"><a href="javascript:gotoUpdatepage_byse(\''+data.data[i].Mobileno+'\');" class="btn_primary btn_aaprov mt-20 ui-link">Edit User</a></div></div>';
						str1+='</div>';

						str1 += '</div></div></div>';
						str1 +='</div>';
					 
				 }
	
                  
				  if(str1=='')
				  {
						str1='<span style="text-align:center;display: block;">No users found for updation</span>';
				  }

				 document.getElementById("se_edit_div").innerHTML=str1;

				 $.mobile.changePage( "#se_edit", { transition: "none"} );


			}
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
		}
	  });
}

function gotoUpdatepage_byse(searchcust)
{

	document.getElementById("kycdoc_photo_byse").src = 'assets/images/camera_icon.png';
	localStorage.setItem('IdProof_pic','');
	doc_img='';

	$.ajax({
	    url: SERVER2+'get_points_json_api.asp',
	    type: 'GET',
	    timeout: 50000,
		dataType: 'json',
		data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': searchcust},
		complete: function(xhr, textStatus) {
	    //called when complete
		},
		success: function(data, textStatus, xhr) {
		    //console.log('JSONDATA'+JSON.stringify(data));

			//fetchcurrent_Location();

			if(data.data.length>0)
			{   
                $('#update_firstname_byse').val(data.data[0].CustomerName);
				//$('#update_lastname_byse').val(data.data[0].CustomerName);
				$('#update_mobile_byse').val(searchcust);
				$('#update_mobile2_byse').val(checkforundefined(data.data[0].altmobileno));
				// $('#update_email_byse').val(data.data[0].Email);
				$('#update_address_byse').val(data.data[0].floor_flat);
				$('#update_dob_byse').val(data.data[0].dobyear+'-'+data.data[0].dobmonth+'-'+data.data[0].dobday);

				if(checkforundefined(data.data[0].gender) != '')
					$('input:radio[name="update_gender_byse"][value="' + data.data[0].gender +'"]').prop('checked', true);

                $('#update_aadharno_byse').val(data.data[0].aadhar_card_no);

				if(checkforundefined(data.data[0].IdProof_Name)=='')
					data.data[0].IdProof_Name='pancard';

				$('#update_kyc_type_byse').val(data.data[0].IdProof_Name);
				$('#update_dealer_list_byse').val(data.data[0].aadhar_card_no);

				$('#update_source_byse').val(checkforundefined(data.data[0].source));
				$('#update_point_claim_byse').val(checkforundefined(data.data[0].point_claim));
				$('#update_photo_byse').val(checkforundefined(data.data[0].profile_photo));

				if(checkforundefined(data.data[0].IdProof_pic) !='')
				{
					if(imageExists(data.data[0].IdProof_pic))
					{
						document.getElementById("kycdoc_photo_byse").src = data.data[0].IdProof_pic;
						localStorage.setItem('IdProof_pic',data.data[0].IdProof_pic);
					}
				}

				var numbers = /^[0-9]+$/;
				if(checkforundefined(data.data[0].state)!='')
				{
					if(data.data[0].state.match(numbers))
					{
						$("#update_state_list_byse").val(data.data[0].state);
						fetchDistrictlist_byse_fetch(data.data[0].state,checkforundefined(data.data[0].DISTRICT),checkforundefined(data.data[0].city),checkforundefined(data.data[0].store_code));
					}
					else
					{
				   
						$("#update_state_list_byse option").each(function() {
									  if($(this).text().indexOf(data.data[0].state)>=0) {
										 
										$(this).prop('selected', 'selected');            
									  }                        
						});
						var sval=$("#update_state_list_byse").val();
						fetchDistrictlist_byse_fetch(sval,checkforundefined(data.data[0].DISTRICT),checkforundefined(data.data[0].city),checkforundefined(data.data[0].store_code));
					 }
				}

				$.mobile.changePage( "#profilepage_byse", { transition: "none"} );
			}
			else
			{
				toast(data.error);
			}
		
	  
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('searchcust:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function validate_Email(str)   
{  
  var email = $('#'+str).val();

  if(email!='')
  {

	  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  
	  {  
		return (true);  
	  }  
		toast("You have entered an invalid email address!");
		$('#'+str).val('');
		return (false);
  }
}


/* functions for new user addition by SE */


function capturePhoto_shop_byse()
{

	var mobileno = $('#update_mobile_byse').val();
	if(mobileno=='')
	{
		toast('Please enter mobile no first');
	}
	else if(mobileno.length!=10)
	{
		toast('Please enter valid 10 digits mobile number first');
	}
	else
	{
		navigator.camera.getPicture(uploadPhoto_shop_byse, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	}
}

function capturePhoto_pan_byse()
{
	var mobileno = $('#update_mobile_byse').val();
	if(mobileno=='')
	{
		toast('Please enter mobile no first');
	}
	else if(mobileno.length!=10)
	{
		toast('Please enter valid 10 digits mobile number first');
	}
	else
	{
		navigator.camera.getPicture(uploadPhoto_pan_byse, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	}
}

function capturePhoto_aadhar_byse()
{
	var mobileno = $('#update_mobile_byse').val();
	if(mobileno=='')
	{
		toast('Please enter mobile no first');
	}
	else if(mobileno.length!=10)
	{
		toast('Please enter valid 10 digits mobile number first');
	}
	else
	{
		navigator.camera.getPicture(uploadPhoto_aadhar_byse, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	}
}

function uploadPhoto_shop_byse(imageURI) 
{

				var mobileno = $('#update_mobile_byse').val();

				var b_Image = document.getElementById('shop_photo_byse');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='shop_'+mobileno;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				shop_img="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";


				localStorage.setItem('shopimg_byse',shop_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("shop_photo_byse_status");
				statusDomdiv=document.getElementById("shop_photo_byse_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new.php"), win, failPhoto_shop_byse, options, true);
}

function failPhoto_shop_byse(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('shopimg_byse');
			shop_img = '';
			document.getElementById('shop_photo_byse').src = "assets/images/camera_icon.png";
}

function uploadPhoto_pan_byse(imageURI) 
{

				var mobileno = $('#update_mobile_byse').val();

				var b_Image = document.getElementById('pan_photo_byse');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='pan_'+mobileno;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				pan_img="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";


				localStorage.setItem('docimg_byse',pan_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("pan_photo_byse_status");
				statusDomdiv=document.getElementById("pan_photo_byse_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new.php"), win, failPhoto_pan_byse, options, true);
}

function failPhoto_pan_byse(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('docimg_byse');
			pan_img = '';
			document.getElementById('pan_photo_byse').src = "assets/images/camera_icon.png";
}

function uploadPhoto_aadhar_byse(imageURI) 
{
                var mobileno = $('#update_mobile_byse').val();
				
				var b_Image = document.getElementById('aadhar_photo_byse');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='aadhar_'+mobileno;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				aadhar_img="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";


				localStorage.setItem('adimg_byse',aadhar_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("aadhar_photo_byse_status");
				statusDomdiv=document.getElementById("aadhar_photo_byse_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new.php"), win, failPhoto_aadhar_byse, options, true);
}

function failPhoto_aadhar_byse(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('adimg_byse');
			aadhar_img = '';
			document.getElementById('aadhar_photo_byse').src = "assets/images/camera_icon.png";
}

function loadWorkshop()
{
   var cityid='';
   $.ajax({
   
   url: SERVER+'store_locator_json.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'city': cityid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
    
	   console.log('JSONDATA'+JSON.stringify(data));

	   var str1='';

				 for (var i = 0; i < data.length; i++)
				 {
       
						str1 +='<div class="primary_block">';
						str1 +='<div class="ui-grid-solo">';
						str1 +='<div class="ui-block">';
						
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon" /><span class="approval_email"><a href="tel:'+checkforundefined(data[i].storename)+'" class="a_link_call_new" style="color:#32286b !important;">'+data[i].storename+'</a></span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">'+checkforundefined(data[i].storeaddress)+'</span></div>';
						//str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data[i].storephone)+'" class="a_link_call_new">'+checkforundefined(data[i].storephone)+'</a></span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data[i].CustomerCare)+'" class="a_link_call_new">'+checkforundefined(data[i].CustomerCare)+'</a></span></div>';
                 
						str1 += '</div></div></div>';
						str1 +='</div>';
					 
				 }
	
                  
				  if(str1=='')
				  {
						str1='<span style="text-align:center;display: block;">No workshop found</span>';
				  }

				 document.getElementById("store_div").innerHTML=str1;

				 $.mobile.changePage( "#stores", { transition: "none"} );

   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
}

function showRewards_()
{
	  $.ajax({
		 url: SERVER3+'categories_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		 success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				var str = '';
				//str +='<div class="primary_section">';
				//str +='<div class="primary_section_inner pt-30">';
					
				for(var i=0;i<data.data.length;i++)
				{
		
					str +='<a href="javascript:toggleDiv(\'catpro'+data.data[i].catid+'\', \'catbtn'+data.data[i].catid+'\')" class="primary_block text-decoration_none bg-grey" id="catbtn'+data.data[i].catid+'">';
					//str +='<a href="javascript:showProductsold(\''+data.data[i].catid+'\',\''+data.data[i].catname+'\');" class="points_bal_btn p_0">';	
					str +='<div class="points_bal_btn p_0 right">';	
					str +='<div class="points_bal">';
					str +='<h4><strong>'+data.data[i].catname+'</strong></h4>';
					str +='</div>';						
					str +='<div class="points_arrow"><img src="assets/images/arrow_green.png" class="img-responsive" alt=""></div>';
					str +='</div>';
				  	str +='</a>';
					str +='<div id="catpro'+data.data[i].catid+'"  class="reward_content"></div>';

					addProducts(data.data[i].catid,data.data[i].catname);
					
				}
				//str +='</div>';	
				//str +='</div>';

				document.getElementById("rewards_div").innerHTML=str;	
				$.mobile.changePage( "#reward_store", { transition: "none"} );
				     
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	 

}

function toggleDiv(str,tg)
{
    $('#'+tg+'').find(".right").toggleClass("down");
   // $(".catinnerhdr").slideUp("fast");
	$('#'+str+'').slideToggle("fast");
   // $(".catheader").removeClass("bg_toggle");
    //$('#'+tg+'').toggleClass("bg_toggle");
}


function addProducts(catid,catname)
{
	  selcid = catid;
	  selcname = catname;
	  try{
		$( "#Menu_sidebar" ).panel( "close" );
		}catch(err) 
		{	}

	   $.ajax({
		 url: SERVER3+'brands_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { 'cat_id': catid },
		 success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				
				var str = '';

				for(var i=0;i<data.data.length;i++)
				{
					var surl=SERVER3+'all_products_json.asp?cat_id='+catid+'&b_id='+data.data[i].brand_id;

							var pointval='';
							var pointdate='';
							var product_id='';

								   $.ajax({
									 url: surl,
									 type: 'GET',
									 timeout: 50000,
									 dataType: 'json',
									 async:false,
									 

									success: function(data1, textStatus, xhr) {

										console.log(JSON.stringify(data1));
											
											
											if(data1.data.length!=0){
												pointval = data1.data[0].GiftVoucherValue;
												pointdate=data1.data[0].GiftVoucherEndDate;
												product_id=data1.data[0].ProductId;
											}
											else
											{
												pointval='';
												pointdate='';
											}

											//console.log(pointval);

								
											
									},
									error: function(xhr, textStatus, errorThrown) {
												toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
									}
								  });
					/*str +='<div class="primary_block">';
					//str +='<a href="javascript:showProducts(\''+data.data[i].brand_id+'\',\''+data.data[i].brand_name+'\',\''+data.data[i].brand_logo+'\',\''+data.data[i].brand_description+'\',\''+data.data[i].Gift_Voucher_Value+'\');" class="reward_item">';
					str +='<a href="#" class="reward_item">';
					str +='<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""/></div>';
					str +='<div class="reward_brief">';
					str +='<p>'+data.data[i].brand_name+'</p>';
					str +='<h2 class="item_rewards">'+data.data[i].Gift_Voucher_Value+'<span>Points</span></h2>';
					str +='</div>';
			  	    str +='</a>';
					str +='</div>';*/


											var bname=data.data[i].brand_name.replace(/["']/g, '');
											var bdesc=data.data[i].brand_description.replace(/["']/g, '');
											var blogo=data.data[i].brand_logo.replace(/\\/g, "/");
											var brand_id=data.data[i].brand_id;
											str +='<div class="primary_block bb1">';
											if(pointval!=''){
												str +='<a href="javascript:showRewardDetails(\''+product_id+'\',\''+blogo+'\',\''+bname+'\',\''+bdesc+'\',\''+pointval+'\',\''+brand_id+'\')" class="reward_item">';						
											}
											else
											{
												str +='<a href="" class="reward_item">';						
											
											}
											str +='	<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""/></div>';
											str +='	<div class="reward_brief">';
											str +='	<p>'+data.data[i].brand_name+'</p>';
											if(pointval!=''){
											str +='	<h2 class="item_rewards">'+pointval+'<span >Points</span></h2>';
											}
											else
											{
												str +='	<h4>Product Not Available<span></span></h4>';
											}

											str +='	</div>';
											str +='</a>';
											str +='</div>';
					
				}

				document.getElementById("catpro"+catid).innerHTML=str;
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function showCategory()
{
	'use strict';	
	   $.ajax({
		 url: SERVER3+'categories_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				
                var str = '';
					str +='<div class="primary_section">';
					str +='<div class="primary_section_inner pt-30">';
					//str1 = '<li><a href="javascript:showProducts(\'0\',\'All\');">All</a></li>';
				for(var i=0;i<data.data.length;i++)
				{
					
								
					str +='<div class="primary_block bg-grey">';
					str +='<a href="javascript:showProductsold(\''+data.data[i].catid+'\',\''+data.data[i].catname+'\');" class="points_bal_btn p_0">';						
					str +='<div class="points_bal">';
					str +='<h4><strong>'+data.data[i].catname+'</strong></h4>';
					str +='</div>';						
				  	str +='</a>';
					str +='</div>';	
					
				}
				str +='</div>';	
				str +='</div>';	

                document.getElementById("rewardscat_div").innerHTML=str;	
				$.mobile.changePage( "#rewardscat", { transition: "none"} );
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	  
}

function showRedemption_tx()
{
	
	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';

			if(data.data1[0].msg=='No Records Found.')
			{
				toast('No Records Found.');
			}
			else
			{
				 for (var i = 0; i < data.data1.length; i++)
				 {
					
					var dt = data.data1[i].RedeemDate;

					if(data.data1[i].Points.toString().indexOf(".")>=0)
					{
						data.data1[i].Points  = parseFloat(data.data1[i].Points).toFixed(2);
					}

                	str +='<div class="recent_transfer2">';
			        str +='<p class="recent_date2">'+formatDate(dt)+'</p>';
			        str +='<div class="primary_block2"><div class="recent_block2 padding0_10px">';
			        str +='<div class="recent_user_icon2"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""/> </div>';
			        str +='<div class="recent_user_details2">';
			       
							
					str += 'Txn No: '+data.data1[i].RefBillNumber+'<br>';
					str += 'Points: '+data.data1[i].Points+'<br>';
				
			        str += '</div></div></div>';
				 }

				 document.getElementById('redemption_tx_div').innerHTML=str;
				 $.mobile.changePage( "#redemption_tx", { transition: "none"} );

			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function formatDate(date) 
{
	
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        h = d.getHours();
        m = d.getMinutes();
		//console.log(m.toString().length);
        if(m.toString().length < 2)
        	m = '0' + m;
        var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day,month,year].join('/')+' '+_time;
}

function showEvents(){
	
	
		//document.getElementById("barcontentspecials").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
		$.mobile.changePage( "#whatsnew", { transition: "none"} );
		//document.getElementById("left-panel").panel( "close" );
		
		
		showTabContent('specials', 'specials_json.asp');

	
}

function isValid_coupon(cpncode)
{

 $.ajax({
   url: 'https://taghash.co/grati/atootbandhan/cpnaction.php',
   type: 'POST',
   timeout: 50000,
   dataType: 'json',
   headers: {
    "Content-Type": "application/json"
   },
   data:JSON.stringify({
			"mobileno": user.mobile,
			"type": "0",
			"cpncode": cpncode
	}),
   complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

		 console.log('JSONDATA:'+JSON.stringify(data));

		 if(data.success=='1')
		 {
			  if(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.Success === true)
			  {
				   burnCoupon(cpncode);
			  }
			  else
			  {
				  toast(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.message);
				  $.mobile.changePage( "#homepage", {transition: "none"} );
			  }
		 }
		 else
		 {
			 toast('No suceess response found..');
			 $.mobile.changePage( "#homepage", {transition: "none"} );
		 }
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
 
}

function burnCoupon(cpncode)
{
 $.ajax({
   url: 'https://taghash.co/grati/atootbandhan/cpnaction.php',
   type: 'POST',
   timeout: 50000,
   dataType: 'json',
   headers: {
    "Content-Type": "application/json"
  },
   data:JSON.stringify({
			"mobileno": user.mobile,
			"type": "1",
			"cpncode": cpncode
	}),
   complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

		 console.log('JSONDATA'+JSON.stringify(data));
        
		 if(data.success=='1')
		 {
			  if(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.Success === true)
			  {
				   var cpnvalue = data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.output.coupon_value;
				   //console.log('cpnvalue:'+cpnvalue);
				   //sendGratification(cpnvalue);
				   earn_points_byqr(cpncode,cpnvalue);
			  }
			  else
			  {
				    toast(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.message);
					$.mobile.changePage( "#homepage", {transition: "none"} );
			  }
		 }
		 else
		 {
			 toast('No response found..');
			 $.mobile.changePage( "#homepage", {transition: "none"} );
		 }
		 
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
 
}

function sendGratification(amount)
{
	    $.ajax({
				url: "https://taghash.co/grati/atootbandhan/send.php",
				type: 'POST',
				timeout: 70000,
				dataType: 'json',
				data:JSON.stringify({
					  "mobileno": user.mobile,
					  "amount": amount
				}),
				beforeSend: function (xhr) {

					$("#wait").css("display","block");

				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
				 
				 console.log("data:"+JSON.stringify(data));

					if(data.response.status=='ACCEPTED')
					{
						//toast('Request accepted');
						//toast_p('RS.('+amount+') Will be credited to your Paytm wallet.');
						//burnpoints(amount);

						document.getElementById("filter_panel_div").innerHTML= 'RS.('+amount+') Will be credited to your Paytm wallet.';
						$.mobile.changePage( "#homepage", { transition: "none"} );
						//$(".overlay").fadeIn("fast");
						$("#filter_panel").slideToggle("fast");
					}
					else
					{
						toast('Request failed');
						$.mobile.changePage( "#homepage", {transition: "none"} );
					}

					$.mobile.changePage( "#homepage", { transition: "none"} );
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are connected to Internet');
					}
			});
}

function earn_points_byqr(cpnncode,cpnnvalue)
{
	  
	  var today = new Date();
		
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 
      var billdate = yyyy+'-'+mm+'-'+dd;

	  var refbillno1 =  'atootbandhan_'+Math.floor((Math.random() * 1000000000) + 1);

	$.ajax({
			url: SERVER2+"earn_points_json_api.asp",
		    type: 'GET',
		    timeout: 50000,
		    dataType: 'json',
		    data: { 'apiuid':'MLOYALAPI',
				    'apipswd':'Ml0yalAP!2o14',
			        'mobileno': user.mobile,
			        'bill_number': refbillno1,
			        'bill_amount': cpnnvalue,
			        'bill_date': billdate,
			        'period': 'normal',
			        'scode': user.store_code_atootbandhan,
					
			},
		    complete: function(xhr, textStatus) {
		    	//$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			 
			    console.log("data:"+JSON.stringify(data));

			    if(data.error.length>=1)
				{
					toast_p(data.error);
					$.mobile.changePage( "#homepage", { transition: "none"} );
				}
				else
				{
					burnpoints_byqr(cpnnvalue);
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}

function burnpoints_byqr(camount)
{

	var refbillno =  'atootbandhan'+Math.floor((Math.random() * 1000000000) + 1);

	$.ajax({
			url: SERVER2+"burn_points_json_api.asp",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "mobileno": user.mobile,
			  "ref_bill_number": refbillno,
			  "redeem_points": camount,
			  "send": '1'
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPI');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14');

            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			    
				 console.log("data:"+JSON.stringify(data));

				 if(data.data.length>=1)
				 {
					//toast(data.data);
					sendGratification(camount);
				 }
				 else
				 {
					 toast(data.error);
					 $.mobile.changePage( "#homepage", { transition: "none"} );
				 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}

function gotoprofilepage()
{
	//$('#profile_divv').css('display','block');
	//$('#kyc_divv').css('display','none');
	$.mobile.changePage( "#profilepage", { transition: "none"} );
}

function gotoreferpage()
{
	$.mobile.changePage( "#referpage", { transition: "none"} );
}

function gotokycpage()
{
	//$('#profile_divv').css('display','none');
	//$('#kyc_divv').css('display','block');
	$.mobile.changePage( "#profilepage_kyc", { transition: "none"} );
}

function uploadPhoto_doc_option()
{
	$("#optionspop_profile_doc_kyc").popup();
	$("#optionspop_profile_doc_kyc").popup("open");
}

function gotoredeempage()
{
	//$('#profile_divv').css('display','none');
	//$('#kyc_divv').css('display','block');
	$.mobile.changePage( "#redeem_pg", { transition: "none"} );
}
function capturePhoto_profile()
{
	//   navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#optionspop_profile").popup();
	  $("#optionspop_profile").popup("open");
}

function uploadPhoto_doc()
{
	try{
		$("#optionspop_profile_doc_kyc").popup("close");
		}catch(err) 
	{	}
   var mobileno_cont = $('#update_mobile_de').val();
   if(mobileno_cont=='')
   {
		toast('Please enter contractor primary mobile no first');
   }
   else if(mobileno_cont.length!=10)
   {
		toast('Please enter valid 10 digits contractor primary mobile number first');
   }
   else
   {

		navigator.camera.getPicture(uploadPhotokyc, onFail, { quality: 40,
			destinationType: navigator.camera.DestinationType.FILE_URI,
			sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
		});
   }
}

function uploadPhoto_doc_cam()
{
	try{
		$("#optionspop_profile_doc_kyc").popup("close");
		}catch(err) 
	{	}
   var mobileno_cont = $('#update_mobile_de').val();
   if(mobileno_cont=='')
   {
		toast('Please enter contractor primary mobile no first');
   }
   else if(mobileno_cont.length!=10)
   {
		toast('Please enter valid 10 digits contractor primary mobile number first');
   }
   else
   {

	navigator.camera.getPicture(uploadPhotokyc, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
   }
}

function uploadPhotokyc(imageURI) 
{

				var mobile = $('#update_mobile_de').val();
				
				var b_Image = document.getElementById('kyc_doc_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='doc_'+mobile;

				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pphoto = options.fileName+".jpg";

				file_pphoto_doc="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pphoto_doc',file_pphoto_doc);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				/*statusDom=document.getElementById("update_photo_status");
				statusDomdiv=document.getElementById("update_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};*/

				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new1.php"), win, failuploadPhotokyc, options, true);
}

function failuploadPhotokyc(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pphoto_doc');
				file_pphoto_doc = '';
				document.getElementById('kyc_doc_photo').src = "assets/images/camera.png";
}

function captureAdhar1_pop()
{
	  //navigator.camera.getPicture(uploadPhoto5, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#optionspop_adh1").popup();
	  $("#optionspop_adh1").popup("open");
}
function captureAdhar2_pop()
{
	  //navigator.camera.getPicture(uploadPhoto5, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#optionspop_adh2").popup();
	  $("#optionspop_adh2").popup("open");
}

function capturePhoto4() 
{
	try{
		$("#optionspop_profile").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function capturePhoto4_gallery()
{
	try{
		$("#optionspop_profile").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function onFail(message)
{
	toast('Failed because: ' + message);
}

function uploadPhoto4(imageURI) 
{

				
				var b_Image = document.getElementById('update_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;

				var b_Image2 = document.getElementById('update_photo1');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;

				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='photo_'+user.mobile;

				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pphoto = options.fileName+".jpg";

				file_pphoto="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pphoto',file_pphoto);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				/*statusDom=document.getElementById("update_photo_status");
				statusDomdiv=document.getElementById("update_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};*/

				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new1.php"), win, failPhoto4, options, true);
}

function failPhoto4(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pphoto');
				file_pphoto = '';
				document.getElementById('update_photo').src = "";
}

function captureAdhar1() 
{
	
	try{
		$("#optionspop_adh1").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto_adhar1, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function captureAdhar1_gallery()
{
	try{
		$("#optionspop_adh1").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto_adhar1, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function captureAdhar2() 
{

	try{
		$("#optionspop_adh2").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto_adhar2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function captureAdhar2_gallery()
{
	try{
		$("#optionspop_adh2").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto_adhar2, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function uploadPhoto_adhar1(imageURI) 
{

				
				var b_Image = document.getElementById('update_adharimg_front');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='myaadhar_front_'+user.mobile;


				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_adimg_front = options.fileName+".jpg";

				file_adimg_front="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";

				localStorage.setItem('adimg_front',file_adimg_front);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						         var statusDom;
						         var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("update_adharimg_front_status");
				statusDomdiv=document.getElementById("update_adharimg_front_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};

	  
				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new1.php"), win, failAdhar1, options, true);
}

function failAdhar1(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('adimg_front');
				file_adimg_front = '';
				document.getElementById('update_adharimg_front').src = "";
}

function uploadPhoto_adhar2(imageURI) 
{

				
				var b_Image = document.getElementById('update_adharimg_back');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='myaadhar_back_'+user.mobile;


				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_adimg_back = options.fileName+".jpg";

				file_adimg_back="https://taghash.co/atootbandhan/uploads/"+options.fileName+".jpg";

				localStorage.setItem('adimg_back',file_adimg_back);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						         var statusDom;
						         var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("update_adharimg_back_status");
				statusDomdiv=document.getElementById("update_adharimg_back_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};

	  
				ft.upload(imageURI, encodeURI("https://taghash.co/atootbandhan/upload_photo_new1.php"), win, failAdhar2, options, true);
}

function failAdhar2(error) 
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('adimg_back');
			file_adimg_back = '';
			document.getElementById('update_adharimg_back').src = "";
}

function checkaadhar(str)
{
  
  var str1 = $('#'+str).val();

  if(str1!='')
  {
	if(str1.length==12)
	{
		//checkproofvalidity('AADHAR',str);
		return (true);
		//check_aadhar_alreay_exist(str,str1);
	}
	else
	{
        $('#'+str).val('');
		toast('Invalid Aadhar Card No');
		return false;
	}
  }
}

function isDate18orMoreYearsOld(dt) 
{
		var mm ='';
		var dd ='';
		var yyyy = '';
		var birthday = new Date($('#'+dt).val());
		
		 
		var age = parseInt((Date.now() - birthday) / (31557600000));
		
		if(age>=18 && age<=65)
		{
			return true;
		}
		
		toast('Kindly check your Date of Birth');
		$('#'+dt).val('');
		return false;
}

function checkpan(str)
{
	var str1 = $('#'+str).val();
    
	if(str1!='')
	{
		var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
		if(regpan.test(str1))
		{
			return (true);
			//check_pan_alreay_exist(str,str1);
		}
		else
		{
			$('#'+str).val('');
			toast('Invalid Pan Card No');
			return false;
		}
	}
}

function showScan_new_check()
{

  $.ajax({
    url: SERVER2+'get_member_status_api_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {  
	 
	  'apiuid': 'MLOYALAPI',
	  'apipswd': 'Ml0yalAP!2o14',
	  'mobileno': user.mobile
	
	},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
        console.log(JSON.stringify(data));

		if(checkforundefined(data.data[0].ApprovedStatus)=='Approved')
		{
			showScan_new();
		}
		else if(checkforundefined(data.data[0].ApprovedStatus)=='Rejected')
		{
			toast('User Rejected.');
			$.mobile.changePage( "#homepage", { transition: "flip"} );
		}
		else
		{
			toast('User not approved.');
			$.mobile.changePage( "#homepage", { transition: "flip"} );
			//isValid_coupon('PENvxita8wn2s');
		}
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		$.mobile.changePage( "#homepage", { transition: "flip"} );
    }
  });
	
}

function refer()
{
 
  var referral_mobile = user.mobile;
  var referral_name =  user.firstname;

  var referred_mobile = $('#rmobile').val();
  var referred_name =  $('#rname').val();
 

  if(referred_mobile=='' || referred_name=='' )
  {
	  toast('Please enter referred details');
  }
  else if(referred_mobile.length!=10)
  {
	 toast('Please enter 10 digits mobile number');
  }
  else
  {
		
    $.ajax({
     url: SERVER2+'referral_api.asp',
     type: 'GET',
     timeout: 50000,
     dataType: 'html',
     data: {
    
				'apiuid': 'MLOYALAPI',   
				'apipswd': 'Ml0yalAP!2o14',     
				'referral_mobile': referral_mobile, 
				'referral_name': referral_name,
				'referred_mobile': referred_mobile,      
				'referred_name': referred_name
				
			},
   
    success: function(data, textStatus, xhr) {

				console.log('JSONDATA:'+JSON.stringify(data));
				toast(JSON.stringify(data));
   
				$.mobile.changePage( "#homepage", { transition: "none"} );

				$('#rmobile').val('');
				$('#rname').val('');

    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}

function updateKyc()
{

	var aadharno = $('#update_aadharno').val();
    var adimg_front = localStorage.getItem('adimg_front');
	var adimg_back = localStorage.getItem('adimg_back');

	if($('#update_aadharno').val().trim()=='')
	{			
		toast('Please fill Aadhar No');
		$('#update_aadharno').focus();
		$('#update_aadharno').scrollIntoView();
	}
	else if(adimg_front=='')
	{
		toast('Please upload adhar front photo');
		$('#update_adharimg_front').focus();
		$('#update_adharimg_front').scrollIntoView();
	}
	else if(adimg_back=='')
	{
		toast('Please upload adhar back photo');
		$('#update_adharimg_back').focus();
		$('#update_adharimg_back').scrollIntoView();
	}
	else
	{
    
	  $.ajax({
			url: SERVER+'mloyalprofileupdate_kyc.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'mobileno': user.mobile,
				'aadhar_card_no': aadharno,
				'aadhar_front_photo': adimg_front,
				'aadhar_back_photo': adimg_back
				
			},
			success: function(data, textStatus, xhr) {

				
				//localStorage.setItem("profiledone_atootbandhan","Yes");
				
				if (data.indexOf("Success")>=0)
				{
					toast('Your KYC details has been submitted successfully.');

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					
                 $.mobile.changePage( "#homepage", {transition: "flip"} );
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
    } 
}

function showApprovalstatus_oncard()
{

  $.ajax({
    url: SERVER2+'get_member_status_api_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {  
	 
	  'apiuid': 'MLOYALAPI',
	  'apipswd': 'Ml0yalAP!2o14',
	  'mobileno': user.mobile
	
	},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
        console.log(JSON.stringify(data));

		if(checkforundefined(data.data[0].ApprovedStatus)=='Approved')
		{
			document.getElementById("pr_approvalststus").innerHTML= 'Status: Approved';
		}
		else if(checkforundefined(data.data[0].ApprovedStatus)=='Rejected')
		{
			document.getElementById("pr_approvalststus").innerHTML= 'Status: Rejected';
		}
		else
		{
			document.getElementById("pr_approvalststus").innerHTML= 'Status: Pending';
		}
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		$.mobile.changePage( "#homepage", { transition: "flip"} );
    }
  });
}

function checkKycDoc(){
	var docNo = $('#update_kyc_doc_type_de').val();
	var Numberdoc = $('#update_doc_number_de').val();
	console.log(docNo);
	console.log(Numberdoc);
	 if(docNo == 'pancard'){
		var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
			if(regpan.test(Numberdoc)){ 
				console.log('valid pan card number')
				 return true; 
				}else{ 
				$('#update_doc_number_de').val('');
				toast('Please enter valid PAN card Number.');
				}
	}else if (docNo == 'aadharcard' ){
		console.log('enter aadhar');

        var newAdhar = Numberdoc.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
        console.log(newAdhar);
		var regpan = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/
			if(regpan.test(newAdhar)){ 
				console.log('valid Aadhar card number')
				 return true; 
				}else{ 
				$('#update_doc_number_de').val('');
				toast('Please enter valid Aadhar card Number.');
				}
	}else if (update_doc_number_de == 'drivinglicense'){
		
		var regexpDL = /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;
		if(regexpDL.test(Numberdoc)){ 
			console.log("Valid DL Number"); 
			}else{ 
                $('#update_doc_number_de').val('');
				toast('Please enter valid DL  Number.');
			
			}
	}
}

function checkMobile_Number(str){
	var get_name = $('#'+str).val();
	let res = $('#'+str).val(get_name.replace(/^[0-9]/g, ""));
	console.log(get_name);
	if(get_name.length <= 10){
		$('#update_mobile_de').val(get_name);
	}else{
		console.log('wrong number');
	}
        
}

function EnroledContractor()
{
	// console.log('shagun bhag')
	var firstname = $('#update_firstname_de').val();
	var lastname = $('#update_lastname_de').val();
	var mobile = $('#update_mobile_de').val();
	var email = '';
	var address = $('#update_address_de').val();
	// var mobile2 = $('#update_mobile2_de').val();
	var aadharno = $('#update_doc_number_de').val();
	var birthday = $('#update_dob_de').val();
	// var state = $('#update_state_de').val();
	var district = $('#update_district_de').val();
	var city = $('#update_city_de').val();
	var selectDealer = $('#update_select_dealer').val();
	var doctype = $('#update_kyc_doc_type_de').val();
	var gender = $('input[name="update_gender_de"]:checked').val();
   
	var rcount = $('#update_runningsite_count').val();

		var mm ='';
		var dd ='';
		var dd1 ='';
		var yyyy = '';
		var yyyy1 = '';

		var selfimg = checkforundefined(localStorage.getItem('file_pphoto'));
	    var docimg = checkforundefined(localStorage.getItem('file_pphoto_doc'));


		var birthday = $('#update_dob_de').val();
		// console.log(birthday);
			// dd = dob.length == 3 ? dob[0] : '';
		

		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           //$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;
		}


        /* checking running sites data min 2 max 5 allowed */
		var mandate=false;

		var ihbmob1 = $('#update_rcount_ihbmobile1').val();
		var ihbname1 = $('#update_rcount_ihbname1').val();
		var ihbmob2 = $('#update_rcount_ihbmobile2').val();
		var ihbname2 = $('#update_rcount_ihbname2').val();
		
		if(ihbmob1=='' || ihbname1=='' || ihbmob2=='' || ihbname2==''){
				 mandate=true;
		}else{ 
				mandate=false;
	    }
		

		if(firstname.trim() == '' || mobile == '' ){
			toast('Please Enter First Name fields.');
		}else if(mobile.length!='10'){
			toast('Please enter valid 10 digit mobile no.');
		}else if(gender == '' || gender == 'undefined' || gender == ''){
			toast('Please enter Gender fields.');
		}
		// else if(docimg == '' || docimg == 'undefined' || docimg == '')
		// {
		// 	toast('Please Upload Document First.');
		// }
		else if(selectDealer == 'null' || selectDealer == null || selectDealer == 'undefined' || selectDealer == ''){
			toast('Please Select Dealer fields.');
		}else if(mandate){
		    toast('Please check for mandatory details for Sites..');
		}else if (aadharno == '' || aadharno == 'undefined'){
			toast('Please enter Document Number fields.');
		}else{
		
			document.getElementById("create_new_contractore").disabled = true;
	      $.ajax({
			url: SERVER2+'cust_registration_json_api.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'firstname': firstname,
				'lastname': lastname,
				'deviceid': reg_id,
				'cname':'',
				'mobileno': mobile,
				'altmobileno':'',
				'email': email,
				'dobday': dd,
				'dobmonth': mm,
				'dobyear': yyyy,
				'scode': selectDealer,
                'deviceType': deviceType,
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'storecd': selectDealer,
				'source': 'dealer',
				'point_claim': '',
				'floor_flat': address,
				'IdProof_Name': doctype,
				'IdProof_pic': '',
				'profilephoto': selfimg,
				'gender': gender,
				'aadhar_card_no': aadharno,
				'city': city,
				'dist': district,
				'state': '',
				'apiuid': 'MLOYALAPIACC',
				'apipswd':'Ml0yalAP!2o14ACC',
				'totrunningSite': rcount
			},
			success: function(data, textStatus, xhr) {
                    
					var data = JSON.parse(data);
				    //console.log('JSONDATA:'+JSON.stringify(data));

				    if(data.data.length>=1)
					{
						toast('Contractor enrolled successfully.');
						$.mobile.changePage( "#homepage", { transition: "none"} );
						document.getElementById("create_new_contractore").disabled = false;
						reset_enrollProfile_byse();
						authoApproved(mobile);
					}
					else
					{
						document.getElementById("create_new_contractore").disabled = false;
						toast(data.error);
					}

			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
  }
}

function reset_enrollProfile_byse()
{
	document.getElementById('update_rcount_ihbmobile1_button').disabled = false;
	document.getElementById('update_rcount_ihbmobile2_button').disabled = false;
	$('#update_firstname_de').val('');
	$('#update_lastname_de').val('');
	$('#update_mobile_de').val('');
	$('#update_mobile2_de').val('');
	$('#update_select_dealer_name').val('');
	$('#update_runningsite_count').val('');
	$('#update_doc_number_de').val('');
	$('#update_address_de').val('');
	$('#update_select_dealer').val('');
	$('input:radio[name="update_gender_de"][value="Male"]').prop('checked', true);
	$('#update_aadharno_de').val('');
	$('#update_kyc_type_de').val('pancard');
	$('#update_dob_de').val('');

	//document.getElementById("kycdoc_photo_status_bydealer").src = 'assets/images/camera_icon.png';
	localStorage.setItem('IdProof_pic','');
	doc_img='';

	document.getElementById("update_photo").src = 'assets/images/user_pic.png';
	localStorage.setItem('file_pphoto','');
	file_pphoto='';

    document.getElementById('kyc_doc_photo').src = "assets/images/camera.png";
	localStorage.setItem('file_pphoto_doc','');
	file_pphoto_doc = '';
				

	// document.getElementById('update_state_de').selectedIndex= 0;
	$("#update_district_de").html('');
	$("#update_city_de").html('');

     submitformnum = 0;
	/ clearing sites values data /
	$('#update_rcount_ihbmobile1').val('');
	$('#update_rcount_ihbname1').val('');
	$('#update_rcount_ihbaddress1').val('');
	$('#update_rcount_ihbpotential1').val('');

	$('#update_rcount_ihbmobile2').val('');
	$('#update_rcount_ihbname2').val('');
	$('#update_rcount_ihbaddress2').val('');
	$('#update_rcount_ihbpotential2').val('');

	$('#update_rcount_ihbmobile3').val('');
	$('#update_rcount_ihbname3').val('');
	$('#update_rcount_ihbaddress3').val('');
	$('#update_rcount_ihbpotential3').val('');

	$('#update_rcount_ihbmobile4').val('');
	$('#update_rcount_ihbname4').val('');
	$('#update_rcount_ihbaddress4').val('');
	$('#update_rcount_ihbpotential4').val('');

	$('#update_rcount_ihbmobile5').val('');
	$('#update_rcount_ihbname5').val('');
	$('#update_rcount_ihbaddress5').val('');
	$('#update_rcount_ihbpotential5').val('');

	// $('#update_runningsite_count').val('2');

	$("#update_runningsite_div1").css("display","block");
	$("#update_runningsite_div2").css("display","block");
	$("#update_runningsite_div3").css("display","none");
	$("#update_runningsite_div4").css("display","none");
	$("#update_runningsite_div5").css("display","none");
}

function restrictuploadfile(){
	var primarymobile = $('#update_mobile_de').val();
	var doctype = $('#update_kyc_doc_type_de').val();
	var docnumber = $('#update_doc_number_de').val();
	if(primarymobile && doctype && docnumber){
       $('#form').submit();
	}else{
      toast('Please Enter All Mandatory Fields!');
	}
}

function site_Reg1()
{

 var sname = $('#sreg_name').val();
 var mobile = $('#sreg_mobile').val();
 var address = $('#sreg_address').val();
 var loc = $('#sreg_loc').val();
 var city = $('#approval_se_city').val();
 var state = $('#approval_se_state').val();
 var dist = $('#approval_se_dist').val();
 var pincode = $('#sreg_pincode').val();


 if(sname=='' || mobile=='' || address=='' || city=='' )
 {
     toast('Please enter mandatory fields!');
 }
 else
 {

   $.ajax({
    url: SERVER2+'Site_Registration_API.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'html',
    data: {
                'apiuid':'MLOYALAPI',
				'apipswd':'M0B!Q$T@2o19',
				'referedby': user.mobile,
				'Name': sname,
				'MobileNo': mobile,
				'address': address,
				'area': loc,
				'city': city,
				'state': state,
				'district': dist,
				'pincode': pincode
					
		  },
   
    success: function(data, textStatus, xhr) {
                 console.log("data:" + JSON.stringify(data));

				 toast('Site Registration submitted.');

				 $.mobile.changePage( "#homepage", { transition: "none"} );

				 $('#sreg_name').val('');
				 $('#sreg_mobile').val('');
				 $('#sreg_address').val('');
				 $('#sreg_loc').val('');
				 $('#approval_se_city').val('');
				 $('#sreg_pincode').val('');
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}

function dealerauthenticate_se()
{
 var uname = $('#dealerusername_se').val();
 var pwd = $('#dealerpassword_se').val();
 //var pwd = $('#dealercodeBox1').val()+$('#dealercodeBox2').val()+$('#dealercodeBox3').val()+$('#dealercodeBox4').val();

 var numbers = /^[0-9]+$/;
 if(pwd.match(numbers)){
  toast('Please Enter Valid Username.');
 }else if(uname == '' || pwd==''){
  toast('Please Enter Username/password');
 }else{
  
 $.ajax({
   url: SERVER2+'forgot_pswd_dealer_se_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','login_name': uname, 'user_pwd': pwd,'Status_flag':'1'},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
		console.log(data);
		// console.log(data.SEdata[0].State_Id);
    //  console.log('data'+JSON.stringify(data));

	    if(data.error.length>0)
		{
			toast('Authentication failed');

			localStorage.removeItem('usernamemloyal_atootbandhan');
			localStorage.removeItem('userpassloyal_atootbandhan');
			
			$('#dealerusername_se').val('');
			$('#dealerpassword_se').val('');
		}	
		else
		{
			//toast(data.data); 
			// && data.SEdata[0].SE_name == '' || data.SEdata[0].SE_name == 'null' || data.SEdata[0].SE_name == 'undefined'
			if(data.SEdata[0].Login_Type == 'CSO' ){
               
			store.AreaOfficeCode = data.SEdata[0].Area_Office_code;
			store.secode = data.SEdata[0].SE_code;
			store.sename = data.SEdata[0].SE_name;

			//document.getElementById("user_id_se").innerHTML='SE Code '+store.secode;
    		document.getElementById("user_id1_se").innerHTML='CSO Code '+store.secode;
			//document.getElementById("user_name_se").innerHTML= store.sename;
			document.getElementById("user_name_se1").innerHTML= store.sename;
			// var JName = JSON.stringify(store.sename)
            // console.log(JName.length);
			if(store.sename)
			{
				var fn = store.sename.substring(0, 1);
				document.getElementById("sortname").innerHTML= fn;
				localStorage.setItem('CSO_StateID',data.SEdata[0].State_Id);
				localStorage.setItem('usernamemloyal_atootbandhan',uname);
				localStorage.setItem('userpassloyal_atootbandhan',pwd);
				localStorage.setItem('store_code_se',uname);
				$.mobile.changePage( "#homepage", { transition: "none"} );
			    update_device_data();
			}else{
				toast("CSO Details is not available.");
			}
		}else{
           toast('Authentication Failed.');
		}
	 }
    
    },
    error: function(xhr, textStatus, errorThrown) {
		
		toast('auth:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  
 }
}

function capturePhoto_kycdoc_byse()
{

	var mobileno = $('#update_mobile_byse').val();
	if(mobileno=='')
	{
		toast('Please enter primary mobile no first');
	}
	else if(mobileno.length!=10)
	{
		toast('Please enter valid 10 digits primary mobile number first');
	}
	else
	{
		navigator.camera.getPicture(uploadPhoto_kycdoc_byse, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	}
	
}

function uploadPhoto_kycdoc_byse(imageURI) 
{

				var mobileno = $('#update_mobile_byse').val();

				var b_Image = document.getElementById('kycdoc_photo_byse');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				var fName='doc_'+mobileno;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				doc_img="https://taghash.co/ACC/uploads/"+options.fileName+".jpg";


				localStorage.setItem('IdProof_pic',doc_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("kycdoc_photo_status_byse");
				statusDomdiv=document.getElementById("kycdoc_photo_status_div_byse");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/ACC/upload_photo_new.php"), win, failPhoto_kycdoc_byse, options, true);
}

function failPhoto_kycdoc_byse(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('docimg');
			doc_img = '';
			document.getElementById('kycdoc_photo_byse').src = "assets/images/camera_icon.png";
}

// function loadState_list()
// {
// 	console.log('statelist');
// 	$.getJSON(
//             GSERVER22+'Get_allstate_json_api.asp',
// 			{

// 			}, 
// 		    function (json) {

// 				 //localStorage.setItem("agappestatejson", JSON.stringify(json));

// 				 var listItems= "";
// 				     listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-Select State-</option>";
// 				     for (var i = 0; i < json.data.length; i++)
// 					 {
// 						listItems+= "<option value='" + json.data[i].stateid + "'>" + json.data[i].statename + "</option>";
// 					 }
				
// 				     $("#update_state_list_byse").html(listItems);
				
	 
// 	 }).error(function () {  console.log("err in loading state") });
// }

function fetchDistrictlist_byse()
{
  var stateid = $('#update_state_list_byse').val();

  $.ajax({
    url: SERVER2+'Get_alldistrict_json_api.asp?stateid='+stateid,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    // data: {
	// 	// 'apiuid': 'MLOYALAPI',
	// 	// 'apipswd' : 'Ml0yalAP!2o14',
	// 	'stateid' : stateid
    //   },
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data);
        var listItems= "";
		    listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select District-</option>";
		for (var i = 0; i < data.data.length; i++)
		{
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
		}
				  $("#update_district_byse").html(listItems);
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function fetchCitylist_byse()
{

  var districtid = $('#update_district_byse').val();
  $.ajax({
    url:SERVER2+'Get_allcity_json_api.asp?districtid='+districtid,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',

    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data);
        var listItems= "";
		    listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select City-</option>";
		for (var i = 0; i < data.data.length; i++)
		{
				listItems+= "<option value='" + data.data[i].Cityid + "'>" + data.data[i].cityname + "</option>";
		}
				  $("#update_city_byse").html(listItems);
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}


function fetchCitylist_byse_fetch(districtid,cityid,store_code)
{

  $.ajax({
    url:SERVER2+'Get_allcity_json_api.asp?districtid='+districtid,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',

    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data);
        var listItems= "";
		    listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select City-</option>";
		for (var i = 0; i < data.data.length; i++)
		{
			if(cityid!='')
			{

				if(data.data[i].Cityid == cityid)
					listItems+= "<option value='" + data.data[i].Cityid + "' selected>" + data.data[i].cityname + "</option>";
				else
					listItems+= "<option value='" + data.data[i].Cityid + "'>" + data.data[i].cityname + "</option>";
			}
			else
			{
					listItems+= "<option value='" + data.data[i].Cityid + "'>" + data.data[i].cityname + "</option>";
			}
		}
				  $("#update_city_byse").html(listItems);

				  
				if(cityid!='')
				{
					fetchDealerlist_byse_fetch(cityid,store_code);
				}
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}



function fetchDealerlist_byse()
{
	
  var cityid = $('#update_city_byse').val();
  $.ajax({
    url:SERVER+'store_locator_json.asp?city='+cityid,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',

    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data);
        var listItems= "";
		    listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select Dealer-</option>";
		for (var i = 0; i < data.length; i++)
		{
			    console.log(data[i].storename);
				listItems+= "<option value='" + data[i].storecode + "'>" + data[i].storename + "</option>";
		}
				  $("#update_dealer_list_byse").html(listItems);
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function fetchDealerlist_byse_fetch(cityid,store_code)
{
	
  $.ajax({
    url:SERVER+'store_locator_json.asp?city='+cityid,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',

    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
        var listItems= "";
		    listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select Dealer-</option>";
		for (var i = 0; i < data.length; i++)
		{
			    if(data[i].storecode == store_code)
					listItems+= "<option value='" + data[i].storecode + "' selected>" + data[i].storename + "</option>";
				else
					listItems+= "<option value='" + data[i].storecode + "'>" + data[i].storename + "</option>";
		}
				  $("#update_dealer_list_byse").html(listItems);

      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function toggle_reason_nonapprovals()
{
	var app_type  = $('#approval_se_leads_type').val();

	if(app_type=='Rejected')
	{
		$("#reason_nonapprovals").css("display","flex");
	}
	else
	{
       $("#reason_nonapprovals").css("display","none");
	}
}

function toggle_reason_showhideapprovalsonsite()
{
	var app_type  = $('#salesdata_se_leads_type').val();

	if(app_type=='Rejected')
	{
		$("#reason_showhidesiteapprovals").css("display","none");
		$("#reason_showhidesiterejects").css("display","block");
		// $("#complaint_button_se2").css("display","flex");
		// $("#complaint_button_se1").css("display","none");
	}
	else
	{
       $("#reason_showhidesiteapprovals").css("display","block");
	   $("#reason_showhidesiterejects").css("display","none");
	//    $("#complaint_button_se2").css("display","none");
	//    $("#complaint_button_se1").css("display","flex");
	}
}


function toggle_reason_showhideapprovals(str1,str2,str3)
{
	var app_type  = $('#'+str1).val();
	if(app_type=='Rejected'){
		$("#"+str2).css("display","block");
		$("#"+str3).css("display","none");
	}else{
		$("#"+str2).css("display","none");
		$("#"+str3).css("display","block");
	}
}


function toggle_timeframe_txt()
{
	var str = $("#salesdata_se_leads_sitecs").val();
	if(str=='Started')
	{
		document.getElementById("salesdata_se_leads_timef_label").innerHTML= 'When Started ? <span style="color: red;">*</span>';
	}
	else if(str=='Not Started')
	{
		document.getElementById("salesdata_se_leads_timef_label").innerHTML= 'When it will start<span style="color: red;">*</span>';
	}
	else
	{
		document.getElementById("salesdata_se_leads_timef_label").innerHTML= 'Time Frame<span style="color: red;">*</span>';
	
	}
}

function viewSites(){
	$.ajax({
		url: SERVER2+'get_cso_site_approval_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPIACC','apipswd':'Ml0yalAP!2o14ACC','se_code': store.secode },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, beforeSend: function() {
			$('#loading').addClass('loading');
		}, success: function(data, textStatus, xhr) {
			console.log(data);
			$('#loading').removeClass('loading');
			var str='';
			var str1='';

			if(data.error.length>0)
			{
				toast(data.error);
				str1 +='';
			}
			else
			{
				var stringData = JSON.stringify(data);
					localStorage.setItem('allEnroleSites',stringData);
				 for (var i = 0; i < data.data.length; i++)
				 {
					var sitevcountdata = localStorage.getItem('siteVFirstShow');
					// console.log(sitevcountdata);
					
					if(sitevcountdata <= 3){
						siteVFirstShow = 3;
						// console.log('in if condition');
					}else{
						siteVFirstShow = localStorage.getItem('siteVFirstShow');
						// console.log('in else condition');
					}
					localStorage.setItem('siteVFirstShow',siteVFirstShow);
					var showMatData = localStorage.getItem('siteVFirstShow');
					var showDataless = localStorage.getItem('showVDataless');
				    console.log(showMatData +' '+ showDataless);
					if(showDataless < 0){
						var val = 0;
						localStorage.setItem('showVDataless',val);
					}
					if(showDataless < data.data[i].sno && showMatData >= data.data[i].sno){
						str1 +='<div class="primary_block1">';
						str1 +='<div class="ui-grid-solo">';
						str1 +='<div class="ui-block">';		

						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon1.png" class="location_icon"/><span class="customer_name">Home Owner Name :'+checkforundefined(data.data[i].First_Name)+ ' ' +'('+data.data[i].Mobile_Num+')</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">Contractor Name : '+checkforundefined(data.data[i].member_name)+ ' ' +'('+data.data[i].member_mobile+')</span></div>';
						// str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].Mobile_Num)+'" class="a_link_call_new"  style="font-weight: 500;">Mobileno: '+data.data[i].Mobile_Num+'</a></span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Contract Type : '+checkforundefined(data.data[i].matrialstatus)+'</span></div>';
						// str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Balance Cement Ponantial : '+checkforundefined(data.data[i].total_cement_potential)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Total Cement Left : '+checkforundefined(data.data[i].Potential_Left)+'</span></div>';

						var is_approved ='';
						if(checkforundefined(data.data[i].IsApproved)!='')
						{
							is_approved = checkforundefined(data.data[i].IsApproved);
						}
						else
						{
							is_approved ='Pending';
						}
						// str1 +='<div class="approval_block" style="background: #268d319c !important;border-radius: 20px;color: #fff;width: 225px;"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Status: '+is_approved+'</span></div>';
						str1+='<div>';
						str1+='</div>';
						str1 += '</div></div></div>';
						str1 +='</div>';
				 }
				}
	
				// str1 +='<div><a onclick="contsSubmore()" style="margin-left: 10px;">Back...</a><a onclick="contsAddmore()" style="margin-left: 50%;" >Next...</a></div>'; 


				var showDataless = localStorage.getItem('showVDataless');
					if(showDataless == '0')
					{
						str1 +='<div><a onclick="contsSubmore()" id="hideback" style="margin-left: 10px;display:none;">Back...</a><a onclick="contsAddmore()"   >Next...</a></div>';
					}
					else
					{
						str1 +='<div class="ne"><a onclick="contsSubmore()" id="hideback" style="margin-left: 10px;">Back...</a><a onclick="contsAddmore()"   >Next...</a></div>';
					}


				  if(str1=='')
				  {
						str1='<span style="text-align:center;display: block;">No Data found !</span>';
				  }

				 document.getElementById("my_site_div").innerHTML=str1;

				 $.mobile.changePage( "#my_site", { transition: "none"} );

				 //$('#approval_se_mob').val('');

			}
		},
		error: function(xhr, textStatus, errorThrown) {
			$('#loading').removeClass('loading');
			toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
		}
	  });
}

function filterSites(str){
	var searchcon = $('#'+str).val();
	var allSites = JSON.parse(localStorage.getItem('allEnroleSites'));
	console.log(allSites.data);
	console.log(searchcon);
	if(searchcon != ''){
		$("#my_site_div").css("display","none");
		$("#my_searched_site_div").css("display","block");
		var str1='';
		for (var i = 0; i < allSites.data.length; i++)
		{
			if(allSites.data[i].member_mobile.indexOf(searchcon) >= 0 || allSites.data[i].member_name.toLowerCase().indexOf(searchcon.toLowerCase()) >= 0){
						str1 +='<div class="primary_block_searched">';
						str1 +='<div class="ui-grid-solo">';
						str1 +='<div class="ui-block">';		

						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon1.png" class="location_icon"/><span class="customer_name">Home Owner Name : '+checkforundefined(allSites.data[i].First_Name)+ ' ' +'('+allSites.data[i].Mobile_Num+')</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">Contractor Name : '+checkforundefined(allSites.data[i].member_name)+ ' ' +'('+allSites.data[i].member_mobile+')</span></div>';
						// str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].Mobile_Num)+'" class="a_link_call_new"  style="font-weight: 500;">Mobileno: '+data.data[i].Mobile_Num+'</a></span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Contract Type : '+checkforundefined(allSites.data[i].matrialstatus)+'</span></div>';
						// str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Balance Cement Ponantial : '+checkforundefined(data.data[i].total_cement_potential)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Total Cement Left : '+checkforundefined(allSites.data[i].Potential_Left)+'</span></div>';

						var is_approved ='';
						if(checkforundefined(allSites.data[i].IsApproved)!='')
						{
							is_approved = checkforundefined(allSites.data[i].IsApproved);
						}
						else
						{
							is_approved ='Pending';
						}
						// str1 +='<div class="approval_block" style="background: #268d319c !important;border-radius: 20px;color: #fff;width: 225px;"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Status: '+is_approved+'</span></div>';
						str1+='<div>';
						str1+='</div>';
						str1 += '</div></div></div>';
						str1 +='</div>';
				//  }

	   }

	        document.getElementById("my_searched_site_div").innerHTML=str1;
	 }
	}else{
		console.log('in else conditions');
		var str2 = '';
		document.getElementById("my_searched_site_div").innerHTML = str2;
		$("#my_site_div").css("display","block");
		$("#my_searched_site_div").css("display","none");
		viewSites();
		
	}
}

function contsAddmore(){
	var metedata = localStorage.getItem('siteVFirstShow');
	siteVFirstShow = parseInt(metedata) + parseInt(3);
	siteVFirstShow1 = parseInt(siteVFirstShow) - parseInt(3);
	localStorage.setItem('showVDataless',siteVFirstShow1);
	localStorage.setItem('siteVFirstShow',siteVFirstShow);
	viewSites();
}

function contsSubmore(){
	var metedataL = localStorage.getItem('showVDataless');
	if(metedataL <= 0){
		console.log('NO');
	}else{
	var metedata = localStorage.getItem('siteVFirstShow');
	siteVFirstShow = parseInt(metedata) - parseInt(3);
	siteVFirstShow1 = parseInt(siteVFirstShow) - parseInt(3);
	localStorage.setItem('showVDataless',siteVFirstShow1);
	localStorage.setItem('siteVFirstShow',siteVFirstShow);
	viewSites();
	}
}

function filterContractor(str){
	console.log('enter')
	var searchcon = $('#'+str).val();
	var allContractor = JSON.parse(localStorage.getItem('allEnroleContractor'));
	console.log(allContractor.data);
	if(searchcon != ''){
		$("#my_contractor_div").css("display","none");
		$("#my_searched_contractor_div").css("display","block");
		var str1='';
		for (var i = 0; i < allContractor.data.length; i++)
		{

			if(allContractor.data[i].Member_Mobile.indexOf(searchcon) >= 0 || allContractor.data[i].First_Name.toLowerCase().indexOf(searchcon.toLowerCase()) >= 0 || allContractor.data[i].Last_Name.toLowerCase().indexOf(searchcon.toLowerCase()) >= 0){
			   console.log('hello')
			   str1 +='<div class="primary_block">';
			   str1 +='<div class="ui-grid-solo">';
			   str1 +='<div class="ui-block">';
			   str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+checkforundefined(allContractor.data[i].First_Name)+ ' '+ checkforundefined(allContractor.data[i].Last_Name)+'</span></div>';
			   str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(allContractor.data[i].Member_Mobile)+'" class="a_link_call_new"  style="font-weight: 500;">Mobileno: '+allContractor.data[i].Member_Mobile+'</a></span></div>';
		   
			   var is_approved ='';
			   if(checkforundefined(allContractor.data[i].IsApproved)!='')
			   {
				   is_approved = checkforundefined(allContractor.data[i].IsApproved);
			   }
			   else
			   {
				   is_approved ='Pending';
			   }
			   
			   str1 +='<div class="approval_block" style="background: #268d319c !important;border-radius: 20px;color: #fff;width: 225px;"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Status: '+is_approved+'</span></div>';
			   str1+='<div>';
			   str1+='</div>';
			   str1 += '</div></div></div>';
			   str1 +='</div>';
		}
	   }

	        document.getElementById("my_searched_contractor_div").innerHTML=str1;
		
	}else{
		console.log('in else conditions');
		var str2 = '';
		document.getElementById("my_searched_contractor_div").innerHTML = str2;
		$("#my_contractor_div").css("display","block");
		$("#my_searched_contractor_div").css("display","none");
		viewContractors();
		
	}
}

function viewContractors(){

	  $.ajax({
		url: SERVER2+'get_cso_enrollment_transaction_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPIACC','apipswd':'Ml0yalAP!2o14ACC','se_code': store.secode },
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		beforeSend: function() {
			$('#loading').addClass('loading');
		},
		success: function(data, textStatus, xhr) {
		    console.log(data);
			$('#loading').removeClass('loading');
			// return;
			 var stringData = JSON.stringify(data);
             localStorage.setItem('allEnroleContractor',stringData);
		    // console.log(JSON.stringify(data));
			var str='';
			var str1='';

			if(data.error.length>0){
				toast(data.error);
				str1 ='';
			}else{
				 for (var i = 0; i < data.data.length; i++){
					var sitecountdata = localStorage.getItem('contFirstShow');
					// console.log(sitecountdata);
					if(sitecountdata <= 3){
						contFirstShow = 3;
						// console.log('in if condition');
					}else{
						contFirstShow = localStorage.getItem('contFirstShow');
						// console.log('in else condition');
					}
					localStorage.setItem('contFirstShow',contFirstShow);
					var showMatData = localStorage.getItem('contFirstShow');
					var showDataless = localStorage.getItem('showXDataless');
					// console.log(showDataless)
					if(showDataless < 0){
						var val = 0;
						localStorage.setItem('showXDataless',val);
					}
					
				   if(showDataless < data.data[i].sno && showMatData >= data.data[i].sno){
					    
						str1 +='<div class="primary_block">';
						str1 +='<div class="ui-grid-solo">';
						str1 +='<div class="ui-block">';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+checkforundefined(data.data[i].First_Name)+ ' '+ checkforundefined(data.data[i].Last_Name)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].Member_Mobile)+'" class="a_link_call_new"  style="font-weight: 500;">Mobileno: '+data.data[i].Member_Mobile+'</a></span></div>';
					
						var is_approved ='';
						if(checkforundefined(data.data[i].IsApproved)!=''){
							is_approved = checkforundefined(data.data[i].IsApproved);
						}else{
							is_approved ='Pending';
						}
						//str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">PanCardNo: '+checkforundefined(data.data[i].PanCardNo).toUpperCase()+'</span></div>';
						//str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">GstNo: '+checkforundefined(data.data[i].GstNo).toUpperCase()+'</span></div>';
						str1 +='<div class="approval_block" style="background: #268d319c !important;border-radius: 20px;color: #fff;width: 225px;"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Status: '+is_approved+'</span></div>';
						str1+='<div>';
						//str1+='<div class="ui-grid-a apr_block"><div class="ui-block-a"><a href="javascript:gotoApprovalpage(\''+data.data[i].Mobileno+'\',\''+data.data[i].FirstName+'\',\''+data.data[i].LastName+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Approve/Reject</a></div><div class="ui-block-b"><a href="javascript:gotoUpdatepage_byse(\''+data.data[i].Mobileno+'\');" class="btn_primary_approve btn_aaprov mt-20 ui-link">Update</a></div></div>';
						str1+='</div>';
						str1 += '</div></div></div>';
						str1 +='</div>';
				 }
				}
				// str1 +='<div><a onclick="contSubmore()" style="margin-left: 10px;">Back...</a><a onclick="contAddmore()" style="margin-left: 50%;" >Next...</a></div>'; 
				var showDataless = localStorage.getItem('showXDataless');
				if(showDataless == '0'){
					str1 +='<div><a onclick="contSubmore()" id="hideback" style="margin-left: 10px;display:none;">Back...</a><a onclick="contAddmore()"   >Next...</a></div>';
				}else{
					str1 +='<div class="ne"><a onclick="contSubmore()" id="hideback" style="margin-left: 10px;">Back...</a><a onclick="contAddmore()"   >Next...</a></div>';
				}
				if(str1==''){
						str1='<span style="text-align:center;display: block;">No Data found !</span>';
				  }
				//   if(searchcon != ''){
				// 	document.getElementById("my_searched_contractor_div").innerHTML=str1;
				//   }else{
					document.getElementById("my_contractor_div").innerHTML=str1;
				//   }
				 $.mobile.changePage( "#my_contractor", { transition: "none"} );
			}
		},
		error: function(xhr, textStatus, errorThrown) {
			$('#loading').removeClass('loading');
			toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
		}
	  });

}

function contAddmore(){
	var metedata = localStorage.getItem('contFirstShow');
	contFirstShow = parseInt(metedata) + parseInt(3);
	contFirstShow1 = parseInt(contFirstShow) - parseInt(3);
	localStorage.setItem('showXDataless',contFirstShow1);
	localStorage.setItem('contFirstShow',contFirstShow);
	viewContractors();
}

function contSubmore(){
	var metedataL = localStorage.getItem('showXDataless');
	if(metedataL <= 0){
		console.log('NO');
	}else{
	var metedata = localStorage.getItem('contFirstShow');
	contFirstShow = parseInt(metedata) - parseInt(3);
	contFirstShow1 = parseInt(contFirstShow) - parseInt(3);
	localStorage.setItem('showXDataless',contFirstShow1);
	localStorage.setItem('contFirstShow',contFirstShow);
	viewContractors();
	}
}

function viewTransactions(){
	  $.ajax({
			url: SERVER2+"get_cso_transaction_details_json_api.asp?apiuid=MLOYALAPIACC&apipswd=Ml0yalAP!2o14ACC",
		    type: 'Get',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "se_code": store.secode
            },beforeSend: function (xhr) {

				$('#loading').addClass('loading');
				xhr.setRequestHeader('apiuid', 'MLOYALAPIACC');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14ACC');

            },
		    complete: function(xhr, textStatus) {
		    	$('#loading').removeClass('loading');
		    },
			success: function(data, textStatus, xhr) {
				console.log(data);
				//  console.log("data:"+JSON.stringify(data));
				var stringData = JSON.stringify(data);
				localStorage.setItem('allEnroleTransaction',stringData);
				 var str='';
				 var str1='';

				 console.log(data.error.length);

				 if(data.error.length>0)
				 {
					toast(data.error);
				    str1 +='';
					
				 } else
				 {
					 for (var i = 0; i < data.data.length; i++)
					 {
						var tranVcountdata = localStorage.getItem('tranvFirstShow');
						// console.log(tranVcountdata);
						if(tranVcountdata <= 3){
							tranvFirstShow = 3;
							// console.log('in if condition');
						}else{
							tranvFirstShow = localStorage.getItem('tranvFirstShow');
							// console.log('in else condition');
						}
						localStorage.setItem('tranvFirstShow',tranvFirstShow);
						var showMatData = localStorage.getItem('tranvFirstShow');
						var showTDataless = localStorage.getItem('showTDataless');
						console.log(showMatData + ' ' + showTDataless);
						if(showTDataless < 0){
							var val = 0;
							localStorage.setItem('showTDataless',val);
						}
						
                       if(showTDataless < data.data[i].sno && showMatData >= data.data[i].sno){
						
						 if(data.data[i].Member_Mobile.startsWith('91') && data.data[i].MobileNumber.length=='12')
						 {
							data.data[i].Member_Mobile=data.data[i].Member_Mobile.substr(2,data.data[i].Member_Mobile.length);
						 }
							str1 +='<div class="primary_block1">';
							str1 +='<div class="ui-grid-solo">';
							str1 +='<div class="ui-block">';
							str1 +='<div class="approval_block"><img src="assets/images/date_icon.png" style="height: 18px;" class="location_icon"/><span class="customer_name">'+data.data[i].Created_On+'</span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon1.png" class="location_icon"/><span class="approval_email">Home Owner Name: '+checkforundefined(data.data[i].IHB_Name)+ ' ' +'('+data.data[i].IHB_MobileNo+')</span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="approval_email">Contractor Name: '+checkforundefined(data.data[i].Member_Name)+ ' ' +'('+data.data[i].Member_Mobile+')</span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Brand: '+checkforundefined(data.data[i].Brand)+'</span></div>';
							str1+='<div>';
							str1+='</div>';
							str1 += '</div></div></div>';
							str1 +='</div>';
					 }
					}
				 					
				//  str1 +='<div><a onclick="tranvSubmore()" style="margin-left: 10px;" >Back...</a><a onclick="tranvAddmore()" style="margin-left: 50%;">Next...</a></div>';
				 var showDataless = localStorage.getItem('showTDataless');
				 if(showDataless == '0')
				 {
					 str1 +='<div><a onclick="tranvSubmore()" id="hideback" style="margin-left: 10px;display:none;">Back...</a><a onclick="tranvAddmore()"   >Next...</a></div>';
				 }
				 else
				 {
					 str1 +='<div class="ne"><a onclick="tranvSubmore()" id="hideback" style="margin-left: 10px;">Back...</a><a onclick="tranvAddmore()"   >Next...</a></div>';
				 }

				  if(str1=='')
				  {
						str1='<span style="text-align:center;display: block;">No pending txns</span>';
				  }
				 document.getElementById("my_txnslist_div").innerHTML=str1;

				 $.mobile.changePage( "#my_txnslist", { transition: "none"} );
				}
			 },
			error: function(xhr, textStatus, errorThrown) {
				$('#loading').removeClass('loading');
				 toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}

function filterTransation(str){
	var searchcon = $('#'+str).val();
	var TransactionData = JSON.parse(localStorage.getItem('allEnroleTransaction'));
	console.log(TransactionData.data);
	console.log(searchcon);
	if(searchcon != ''){
		$("#my_txnslist_div").css("display","none");
		$("#my_searched_tran_div").css("display","block");
		var str1='';
		for (var i = 0; i < TransactionData.data.length; i++)
		{
		
			if(TransactionData.data[i].Member_Mobile.indexOf(searchcon) >= 0 || TransactionData.data[i].Member_Name.toLowerCase().indexOf(searchcon.toLowerCase()) >= 0 ){
						 if(TransactionData.data[i].Member_Mobile.startsWith('91') && TransactionData.data[i].MobileNumber.length=='12')
						 {
							TransactionData.data[i].Member_Mobile=TransactionData.data[i].Member_Mobile.substr(2,TransactionData.data[i].Member_Mobile.length);
						 }
							str1 +='<div class="primary_block_searched">';
							str1 +='<div class="ui-grid-solo">';
							str1 +='<div class="ui-block">';
							str1 +='<div class="approval_block"><img src="assets/images/date_icon.png" style="height: 18px;" class="location_icon"/><span class="customer_name">'+TransactionData.data[i].Created_On+'</span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon1.png" class="location_icon"/><span class="approval_email">Home Owner Name: '+checkforundefined(TransactionData.data[i].IHB_Name)+ ' ' + '('+TransactionData.data[i].IHB_MobileNo+')</span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="approval_email">Contractor Name: '+checkforundefined(TransactionData.data[i].Member_Name) + ' ' +'('+TransactionData.data[i].Member_Mobile+')</span></div>';

							// str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email"><a href="tel:'+checkforundefined(data.data[i].Member_Mobile)+'" class="a_link_call_new" style="font-weight:500;"> Home Owner Mobile: '+data.data[i].Member_Mobile+'</a></span></div>';
							str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">Brand: '+checkforundefined(TransactionData.data[i].Brand)+'</span></div>';
							str1+='<div>';
							str1+='</div>';
							str1 += '</div></div></div>';
							str1 +='</div>';
					//  }
	        }

	        document.getElementById("my_searched_tran_div").innerHTML = str1;
		  }
		}else{
		console.log('in else conditions');
		var str2 = '';
		document.getElementById("my_searched_tran_div").innerHTML = str2;
		$("#my_txnslist_div").css("display","block");
		$("#my_searched_tran_div").css("display","none");
		viewTransactions();
	}
}

function tranvAddmore(){
	var metedata = localStorage.getItem('tranvFirstShow');
	tranvFirstShow = parseInt(metedata) + parseInt(3);
	tranvFirstShow1 = parseInt(tranvFirstShow) - parseInt(3);
	localStorage.setItem('showTDataless',tranvFirstShow1);
	localStorage.setItem('tranvFirstShow',tranvFirstShow);
	viewTransactions();
}

function tranvSubmore(){
	var metedataL = localStorage.getItem('showTDataless');
	if(metedataL <= 0){
		console.log('NO');
	}else{
	var metedata = localStorage.getItem('tranvFirstShow');
	tranvFirstShow = parseInt(metedata) - parseInt(3);
	tranvFirstShow1 = parseInt(tranvFirstShow) - parseInt(3);
	localStorage.setItem('showTDataless',tranvFirstShow1);
	localStorage.setItem('tranvFirstShow',tranvFirstShow);
	viewTransactions();
	}
}

function update_device_data()
{
	 var deviceType1 = (navigator.userAgent.match(/iPad/i)) == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i)) == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
					 if(deviceType1=='null')
						deviceType1='Android';

	 $.ajax({
			url: SERVER2+"login_device_type_id_update_json_api.asp",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "lcode": store.secode,
			  "deviceid": reg_id,
			  "devicetype": deviceType1
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPIACC');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14ACC');
            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			    
				 //console.log("data:"+JSON.stringify(data));
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 //toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}