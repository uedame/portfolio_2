// toggleボタンの記述
let header = document.querySelector(".header");
let btn = document.querySelector(".toggle_btn");
let mask = document.querySelector(".mask");

btn.onclick = () => {
	header.classList.toggle("open");
}


//ヘッダースクロール時のアニメーション
const hero = document.querySelector(".hero");
const question_btn = document.querySelector(".question_btn");
const top_btn = document.querySelector(".top_btn");

window.addEventListener("scroll", () => {
	// console.log(window.pageYOffset);
	// console.log(hero.offsetTop);
	// console.log(main.offsetTop-100);

	if (window.pageYOffset >= hero.offsetTop) {
		question_btn.classList.add("disp");
		top_btn.classList.add("disp");
	} else {
		question_btn.classList.remove("disp");
		top_btn.classList.remove("disp");
	}
})

// //ページスクロールの記述
// $(function () {
// 	$('a[href^=#]').click(function () {
// 		var speed = 500; // スクロール速度(ミリ秒)
// 		var href = $(this).attr("href");
// 		var target = $(href == "#" || href == "" ? 'html' : href);
// 		var position = target.offset().top;
// 		$('html').animate({
// 			scrollTop: position
// 		}, speed, 'swing');
// 		return false;
// 	});
// });


//------------------------------------------------------------------------------
// メールを送信するスクリプト
// 実行には、Outlook が必要です。
//------------------------------------------------------------------------------
// // 以下を書き換える
// var mail_to = "bb_tetsu@outlook.jp";
// var subject = "test";
// var body = "test test test!";
// //------------------------------------------------------------------------------
// // メールの送信処理
// var outlook = new ActiveXObject("Outlook.Application");
// var mail = outlook.CreateItem(0);
// mail.To = mail_to;
// mail.Subject = subject;
// mail.Body = body;
// mail.Send(); // ←この動作が微妙
//------------------------

// //-------------------------------------------------------------------
// // JScript(WSH)でメール送信
// //-------------------------------------------------------------------
// // Gmailのアカウントを設定 (★以下を書き換えてください★)
// var gmail_user = "0403maildummy@gmail.com"; // Gmailのメールアドレス
// var gmail_pass = "bronx0403"; // Gmailのパスワード
// //-------------------------------------------------------------------
// // 送信内容の設定(★以下を書き換えてください★)
// var msg = WScript.CreateObject("CDO.Message");
// msg.From = gmail_user; // 自分のメールアドレス
// msg.To = "0403bb@gmai.com"; // 送り先のメールアドレス
// msg.Subject = "test"; // メールの件名
// msg.TextBody = "送信テストです。\nメールの送信テストです。\n";
// setGmailConfig(msg, gmail_user, gmail_pass);
// // 送信
// msg.Send();
// WScript.Echo("送信しました!!");
// //-------------------------------------------------------------------
// // Gmailで送信のための細かい設定を行う
// function setGmailConfig(msg, user, pass) {
// 	msg.TextBodyPart.Charset = 'ISO-2022-JP';
// 	var setConfig = function (conf_obj) {
// 		var uri = 'http://schemas.microsoft.com/cdo/configuration/';
// 		for (var key in conf_obj) {
// 			msg.Configuration.Fields.Item(uri + key) = conf_obj[key];
// 		}
// 	}
// 	setConfig({
// 		'sendusing': 2,
// 		'smtpconnectiontimeout': 30,
// 		'smtpserver': 'smtp.gmail.com',
// 		'smtpserverport': 465,
// 		'smtpauthenticate': true,
// 		'smtpusessl': true,
// 		'sendusername': user,
// 		'sendpassword': pass
// 	});
// 	msg.Configuration.Fields.Update();
// }
// //-------------------------------------------------------------------