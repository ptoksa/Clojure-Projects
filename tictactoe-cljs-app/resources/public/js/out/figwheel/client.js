// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29512){if((e29512 instanceof Error)){
var e = e29512;
return "Error: Unable to stringify";
} else {
throw e29512;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29515 = arguments.length;
switch (G__29515) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29513_SHARP_){
if(typeof p1__29513_SHARP_ === 'string'){
return p1__29513_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29513_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29518 = arguments.length;
var i__5770__auto___29519 = (0);
while(true){
if((i__5770__auto___29519 < len__5769__auto___29518)){
args__5775__auto__.push((arguments[i__5770__auto___29519]));

var G__29520 = (i__5770__auto___29519 + (1));
i__5770__auto___29519 = G__29520;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29517){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29517));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29522 = arguments.length;
var i__5770__auto___29523 = (0);
while(true){
if((i__5770__auto___29523 < len__5769__auto___29522)){
args__5775__auto__.push((arguments[i__5770__auto___29523]));

var G__29524 = (i__5770__auto___29523 + (1));
i__5770__auto___29523 = G__29524;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29521){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29521));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29525){
var map__29526 = p__29525;
var map__29526__$1 = cljs.core.__destructure_map.call(null,map__29526);
var message = cljs.core.get.call(null,map__29526__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29526__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__5045__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__5043__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__5043__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__5043__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24527__auto___29604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_29576){
var state_val_29577 = (state_29576[(1)]);
if((state_val_29577 === (7))){
var inst_29572 = (state_29576[(2)]);
var state_29576__$1 = state_29576;
var statearr_29578_29605 = state_29576__$1;
(statearr_29578_29605[(2)] = inst_29572);

(statearr_29578_29605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (1))){
var state_29576__$1 = state_29576;
var statearr_29579_29606 = state_29576__$1;
(statearr_29579_29606[(2)] = null);

(statearr_29579_29606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (4))){
var inst_29529 = (state_29576[(7)]);
var inst_29529__$1 = (state_29576[(2)]);
var state_29576__$1 = (function (){var statearr_29580 = state_29576;
(statearr_29580[(7)] = inst_29529__$1);

return statearr_29580;
})();
if(cljs.core.truth_(inst_29529__$1)){
var statearr_29581_29607 = state_29576__$1;
(statearr_29581_29607[(1)] = (5));

} else {
var statearr_29582_29608 = state_29576__$1;
(statearr_29582_29608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (15))){
var inst_29536 = (state_29576[(8)]);
var inst_29551 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29536);
var inst_29552 = cljs.core.first.call(null,inst_29551);
var inst_29553 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29552);
var inst_29554 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29553)].join('');
var inst_29555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29554);
var state_29576__$1 = state_29576;
var statearr_29583_29609 = state_29576__$1;
(statearr_29583_29609[(2)] = inst_29555);

(statearr_29583_29609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (13))){
var inst_29560 = (state_29576[(2)]);
var state_29576__$1 = state_29576;
var statearr_29584_29610 = state_29576__$1;
(statearr_29584_29610[(2)] = inst_29560);

(statearr_29584_29610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (6))){
var state_29576__$1 = state_29576;
var statearr_29585_29611 = state_29576__$1;
(statearr_29585_29611[(2)] = null);

(statearr_29585_29611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (17))){
var inst_29558 = (state_29576[(2)]);
var state_29576__$1 = state_29576;
var statearr_29586_29612 = state_29576__$1;
(statearr_29586_29612[(2)] = inst_29558);

(statearr_29586_29612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (3))){
var inst_29574 = (state_29576[(2)]);
var state_29576__$1 = state_29576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29576__$1,inst_29574);
} else {
if((state_val_29577 === (12))){
var inst_29535 = (state_29576[(9)]);
var inst_29549 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29535,opts);
var state_29576__$1 = state_29576;
if(inst_29549){
var statearr_29587_29613 = state_29576__$1;
(statearr_29587_29613[(1)] = (15));

} else {
var statearr_29588_29614 = state_29576__$1;
(statearr_29588_29614[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (2))){
var state_29576__$1 = state_29576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29576__$1,(4),ch);
} else {
if((state_val_29577 === (11))){
var inst_29536 = (state_29576[(8)]);
var inst_29541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29542 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29536);
var inst_29543 = cljs.core.async.timeout.call(null,(1000));
var inst_29544 = [inst_29542,inst_29543];
var inst_29545 = (new cljs.core.PersistentVector(null,2,(5),inst_29541,inst_29544,null));
var state_29576__$1 = state_29576;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29576__$1,(14),inst_29545);
} else {
if((state_val_29577 === (9))){
var inst_29536 = (state_29576[(8)]);
var inst_29562 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29563 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29536);
var inst_29564 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29563);
var inst_29565 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29564)].join('');
var inst_29566 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29565);
var state_29576__$1 = (function (){var statearr_29589 = state_29576;
(statearr_29589[(10)] = inst_29562);

return statearr_29589;
})();
var statearr_29590_29615 = state_29576__$1;
(statearr_29590_29615[(2)] = inst_29566);

(statearr_29590_29615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (5))){
var inst_29529 = (state_29576[(7)]);
var inst_29531 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29532 = (new cljs.core.PersistentArrayMap(null,2,inst_29531,null));
var inst_29533 = (new cljs.core.PersistentHashSet(null,inst_29532,null));
var inst_29534 = figwheel.client.focus_msgs.call(null,inst_29533,inst_29529);
var inst_29535 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29534);
var inst_29536 = cljs.core.first.call(null,inst_29534);
var inst_29537 = figwheel.client.autoload_QMARK_.call(null);
var state_29576__$1 = (function (){var statearr_29591 = state_29576;
(statearr_29591[(8)] = inst_29536);

(statearr_29591[(9)] = inst_29535);

return statearr_29591;
})();
if(cljs.core.truth_(inst_29537)){
var statearr_29592_29616 = state_29576__$1;
(statearr_29592_29616[(1)] = (8));

} else {
var statearr_29593_29617 = state_29576__$1;
(statearr_29593_29617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (14))){
var inst_29547 = (state_29576[(2)]);
var state_29576__$1 = state_29576;
var statearr_29594_29618 = state_29576__$1;
(statearr_29594_29618[(2)] = inst_29547);

(statearr_29594_29618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (16))){
var state_29576__$1 = state_29576;
var statearr_29595_29619 = state_29576__$1;
(statearr_29595_29619[(2)] = null);

(statearr_29595_29619[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (10))){
var inst_29568 = (state_29576[(2)]);
var state_29576__$1 = (function (){var statearr_29596 = state_29576;
(statearr_29596[(11)] = inst_29568);

return statearr_29596;
})();
var statearr_29597_29620 = state_29576__$1;
(statearr_29597_29620[(2)] = null);

(statearr_29597_29620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (8))){
var inst_29535 = (state_29576[(9)]);
var inst_29539 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29535,opts);
var state_29576__$1 = state_29576;
if(cljs.core.truth_(inst_29539)){
var statearr_29598_29621 = state_29576__$1;
(statearr_29598_29621[(1)] = (11));

} else {
var statearr_29599_29622 = state_29576__$1;
(statearr_29599_29622[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24431__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24431__auto____0 = (function (){
var statearr_29600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29600[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24431__auto__);

(statearr_29600[(1)] = (1));

return statearr_29600;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24431__auto____1 = (function (state_29576){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_29576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e29601){if((e29601 instanceof Object)){
var ex__24434__auto__ = e29601;
var statearr_29602_29623 = state_29576;
(statearr_29602_29623[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29624 = state_29576;
state_29576 = G__29624;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24431__auto__ = function(state_29576){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24431__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24431__auto____1.call(this,state_29576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24431__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24431__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_29603 = f__24528__auto__.call(null);
(statearr_29603[(6)] = c__24527__auto___29604);

return statearr_29603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29625_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29625_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29631 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29627 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29628 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29629 = true;
var _STAR_print_fn_STAR__temp_val__29630 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29629);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29630);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29628);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29627);
}}catch (e29626){if((e29626 instanceof Error)){
var e = e29626;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29631], null));
} else {
var e = e29626;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29632){
var map__29633 = p__29632;
var map__29633__$1 = cljs.core.__destructure_map.call(null,map__29633);
var opts = map__29633__$1;
var build_id = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__29634){
var vec__29635 = p__29634;
var seq__29636 = cljs.core.seq.call(null,vec__29635);
var first__29637 = cljs.core.first.call(null,seq__29636);
var seq__29636__$1 = cljs.core.next.call(null,seq__29636);
var map__29638 = first__29637;
var map__29638__$1 = cljs.core.__destructure_map.call(null,map__29638);
var msg = map__29638__$1;
var msg_name = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29636__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29639){
var vec__29640 = p__29639;
var seq__29641 = cljs.core.seq.call(null,vec__29640);
var first__29642 = cljs.core.first.call(null,seq__29641);
var seq__29641__$1 = cljs.core.next.call(null,seq__29641);
var map__29643 = first__29642;
var map__29643__$1 = cljs.core.__destructure_map.call(null,map__29643);
var msg = map__29643__$1;
var msg_name = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29641__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29644){
var map__29645 = p__29644;
var map__29645__$1 = cljs.core.__destructure_map.call(null,map__29645);
var on_compile_warning = cljs.core.get.call(null,map__29645__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29645__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__29646){
var vec__29647 = p__29646;
var seq__29648 = cljs.core.seq.call(null,vec__29647);
var first__29649 = cljs.core.first.call(null,seq__29648);
var seq__29648__$1 = cljs.core.next.call(null,seq__29648);
var map__29650 = first__29649;
var map__29650__$1 = cljs.core.__destructure_map.call(null,map__29650);
var msg = map__29650__$1;
var msg_name = cljs.core.get.call(null,map__29650__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29648__$1;
var pred__29651 = cljs.core._EQ_;
var expr__29652 = msg_name;
if(cljs.core.truth_(pred__29651.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29652))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29651.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29652))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_29741){
var state_val_29742 = (state_29741[(1)]);
if((state_val_29742 === (7))){
var inst_29661 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
if(cljs.core.truth_(inst_29661)){
var statearr_29743_29790 = state_29741__$1;
(statearr_29743_29790[(1)] = (8));

} else {
var statearr_29744_29791 = state_29741__$1;
(statearr_29744_29791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (20))){
var inst_29735 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29745_29792 = state_29741__$1;
(statearr_29745_29792[(2)] = inst_29735);

(statearr_29745_29792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (27))){
var inst_29731 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29746_29793 = state_29741__$1;
(statearr_29746_29793[(2)] = inst_29731);

(statearr_29746_29793[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (1))){
var inst_29654 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29741__$1 = state_29741;
if(cljs.core.truth_(inst_29654)){
var statearr_29747_29794 = state_29741__$1;
(statearr_29747_29794[(1)] = (2));

} else {
var statearr_29748_29795 = state_29741__$1;
(statearr_29748_29795[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (24))){
var inst_29733 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29749_29796 = state_29741__$1;
(statearr_29749_29796[(2)] = inst_29733);

(statearr_29749_29796[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (4))){
var inst_29739 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29741__$1,inst_29739);
} else {
if((state_val_29742 === (15))){
var inst_29737 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29750_29797 = state_29741__$1;
(statearr_29750_29797[(2)] = inst_29737);

(statearr_29750_29797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (21))){
var inst_29690 = (state_29741[(2)]);
var inst_29691 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29692 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29691);
var state_29741__$1 = (function (){var statearr_29751 = state_29741;
(statearr_29751[(7)] = inst_29690);

return statearr_29751;
})();
var statearr_29752_29798 = state_29741__$1;
(statearr_29752_29798[(2)] = inst_29692);

(statearr_29752_29798[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (31))){
var inst_29720 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29741__$1 = state_29741;
if(inst_29720){
var statearr_29753_29799 = state_29741__$1;
(statearr_29753_29799[(1)] = (34));

} else {
var statearr_29754_29800 = state_29741__$1;
(statearr_29754_29800[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (32))){
var inst_29729 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29755_29801 = state_29741__$1;
(statearr_29755_29801[(2)] = inst_29729);

(statearr_29755_29801[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (33))){
var inst_29716 = (state_29741[(2)]);
var inst_29717 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29718 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29717);
var state_29741__$1 = (function (){var statearr_29756 = state_29741;
(statearr_29756[(8)] = inst_29716);

return statearr_29756;
})();
var statearr_29757_29802 = state_29741__$1;
(statearr_29757_29802[(2)] = inst_29718);

(statearr_29757_29802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (13))){
var inst_29675 = figwheel.client.heads_up.clear.call(null);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(16),inst_29675);
} else {
if((state_val_29742 === (22))){
var inst_29696 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29697 = figwheel.client.heads_up.append_warning_message.call(null,inst_29696);
var state_29741__$1 = state_29741;
var statearr_29758_29803 = state_29741__$1;
(statearr_29758_29803[(2)] = inst_29697);

(statearr_29758_29803[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (36))){
var inst_29727 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29759_29804 = state_29741__$1;
(statearr_29759_29804[(2)] = inst_29727);

(statearr_29759_29804[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (29))){
var inst_29707 = (state_29741[(2)]);
var inst_29708 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29709 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29708);
var state_29741__$1 = (function (){var statearr_29760 = state_29741;
(statearr_29760[(9)] = inst_29707);

return statearr_29760;
})();
var statearr_29761_29805 = state_29741__$1;
(statearr_29761_29805[(2)] = inst_29709);

(statearr_29761_29805[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (6))){
var inst_29656 = (state_29741[(10)]);
var state_29741__$1 = state_29741;
var statearr_29762_29806 = state_29741__$1;
(statearr_29762_29806[(2)] = inst_29656);

(statearr_29762_29806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (28))){
var inst_29703 = (state_29741[(2)]);
var inst_29704 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29705 = figwheel.client.heads_up.display_warning.call(null,inst_29704);
var state_29741__$1 = (function (){var statearr_29763 = state_29741;
(statearr_29763[(11)] = inst_29703);

return statearr_29763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(29),inst_29705);
} else {
if((state_val_29742 === (25))){
var inst_29701 = figwheel.client.heads_up.clear.call(null);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(28),inst_29701);
} else {
if((state_val_29742 === (34))){
var inst_29722 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(37),inst_29722);
} else {
if((state_val_29742 === (17))){
var inst_29681 = (state_29741[(2)]);
var inst_29682 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29683 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29682);
var state_29741__$1 = (function (){var statearr_29764 = state_29741;
(statearr_29764[(12)] = inst_29681);

return statearr_29764;
})();
var statearr_29765_29807 = state_29741__$1;
(statearr_29765_29807[(2)] = inst_29683);

(statearr_29765_29807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (3))){
var inst_29673 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29741__$1 = state_29741;
if(inst_29673){
var statearr_29766_29808 = state_29741__$1;
(statearr_29766_29808[(1)] = (13));

} else {
var statearr_29767_29809 = state_29741__$1;
(statearr_29767_29809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (12))){
var inst_29669 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29768_29810 = state_29741__$1;
(statearr_29768_29810[(2)] = inst_29669);

(statearr_29768_29810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (2))){
var inst_29656 = (state_29741[(10)]);
var inst_29656__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29741__$1 = (function (){var statearr_29769 = state_29741;
(statearr_29769[(10)] = inst_29656__$1);

return statearr_29769;
})();
if(cljs.core.truth_(inst_29656__$1)){
var statearr_29770_29811 = state_29741__$1;
(statearr_29770_29811[(1)] = (5));

} else {
var statearr_29771_29812 = state_29741__$1;
(statearr_29771_29812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (23))){
var inst_29699 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29741__$1 = state_29741;
if(inst_29699){
var statearr_29772_29813 = state_29741__$1;
(statearr_29772_29813[(1)] = (25));

} else {
var statearr_29773_29814 = state_29741__$1;
(statearr_29773_29814[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (35))){
var state_29741__$1 = state_29741;
var statearr_29774_29815 = state_29741__$1;
(statearr_29774_29815[(2)] = null);

(statearr_29774_29815[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (19))){
var inst_29694 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29741__$1 = state_29741;
if(inst_29694){
var statearr_29775_29816 = state_29741__$1;
(statearr_29775_29816[(1)] = (22));

} else {
var statearr_29776_29817 = state_29741__$1;
(statearr_29776_29817[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (11))){
var inst_29665 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29777_29818 = state_29741__$1;
(statearr_29777_29818[(2)] = inst_29665);

(statearr_29777_29818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (9))){
var inst_29667 = figwheel.client.heads_up.clear.call(null);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(12),inst_29667);
} else {
if((state_val_29742 === (5))){
var inst_29658 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29741__$1 = state_29741;
var statearr_29778_29819 = state_29741__$1;
(statearr_29778_29819[(2)] = inst_29658);

(statearr_29778_29819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (14))){
var inst_29685 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29741__$1 = state_29741;
if(inst_29685){
var statearr_29779_29820 = state_29741__$1;
(statearr_29779_29820[(1)] = (18));

} else {
var statearr_29780_29821 = state_29741__$1;
(statearr_29780_29821[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (26))){
var inst_29711 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29741__$1 = state_29741;
if(inst_29711){
var statearr_29781_29822 = state_29741__$1;
(statearr_29781_29822[(1)] = (30));

} else {
var statearr_29782_29823 = state_29741__$1;
(statearr_29782_29823[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (16))){
var inst_29677 = (state_29741[(2)]);
var inst_29678 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29679 = figwheel.client.heads_up.display_exception.call(null,inst_29678);
var state_29741__$1 = (function (){var statearr_29783 = state_29741;
(statearr_29783[(13)] = inst_29677);

return statearr_29783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(17),inst_29679);
} else {
if((state_val_29742 === (30))){
var inst_29713 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29714 = figwheel.client.heads_up.display_warning.call(null,inst_29713);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(33),inst_29714);
} else {
if((state_val_29742 === (10))){
var inst_29671 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29784_29824 = state_29741__$1;
(statearr_29784_29824[(2)] = inst_29671);

(statearr_29784_29824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (18))){
var inst_29687 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29688 = figwheel.client.heads_up.display_exception.call(null,inst_29687);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(21),inst_29688);
} else {
if((state_val_29742 === (37))){
var inst_29724 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29785_29825 = state_29741__$1;
(statearr_29785_29825[(2)] = inst_29724);

(statearr_29785_29825[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (8))){
var inst_29663 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(11),inst_29663);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto____0 = (function (){
var statearr_29786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29786[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto__);

(statearr_29786[(1)] = (1));

return statearr_29786;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto____1 = (function (state_29741){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_29741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e29787){if((e29787 instanceof Object)){
var ex__24434__auto__ = e29787;
var statearr_29788_29826 = state_29741;
(statearr_29788_29826[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29827 = state_29741;
state_29741 = G__29827;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto__ = function(state_29741){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto____1.call(this,state_29741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_29789 = f__24528__auto__.call(null);
(statearr_29789[(6)] = c__24527__auto__);

return statearr_29789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24527__auto___29856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_29842){
var state_val_29843 = (state_29842[(1)]);
if((state_val_29843 === (1))){
var state_29842__$1 = state_29842;
var statearr_29844_29857 = state_29842__$1;
(statearr_29844_29857[(2)] = null);

(statearr_29844_29857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (2))){
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29842__$1,(4),ch);
} else {
if((state_val_29843 === (3))){
var inst_29840 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29842__$1,inst_29840);
} else {
if((state_val_29843 === (4))){
var inst_29830 = (state_29842[(7)]);
var inst_29830__$1 = (state_29842[(2)]);
var state_29842__$1 = (function (){var statearr_29845 = state_29842;
(statearr_29845[(7)] = inst_29830__$1);

return statearr_29845;
})();
if(cljs.core.truth_(inst_29830__$1)){
var statearr_29846_29858 = state_29842__$1;
(statearr_29846_29858[(1)] = (5));

} else {
var statearr_29847_29859 = state_29842__$1;
(statearr_29847_29859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (5))){
var inst_29830 = (state_29842[(7)]);
var inst_29832 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29830);
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29842__$1,(8),inst_29832);
} else {
if((state_val_29843 === (6))){
var state_29842__$1 = state_29842;
var statearr_29848_29860 = state_29842__$1;
(statearr_29848_29860[(2)] = null);

(statearr_29848_29860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (7))){
var inst_29838 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
var statearr_29849_29861 = state_29842__$1;
(statearr_29849_29861[(2)] = inst_29838);

(statearr_29849_29861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (8))){
var inst_29834 = (state_29842[(2)]);
var state_29842__$1 = (function (){var statearr_29850 = state_29842;
(statearr_29850[(8)] = inst_29834);

return statearr_29850;
})();
var statearr_29851_29862 = state_29842__$1;
(statearr_29851_29862[(2)] = null);

(statearr_29851_29862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24431__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24431__auto____0 = (function (){
var statearr_29852 = [null,null,null,null,null,null,null,null,null];
(statearr_29852[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24431__auto__);

(statearr_29852[(1)] = (1));

return statearr_29852;
});
var figwheel$client$heads_up_plugin_$_state_machine__24431__auto____1 = (function (state_29842){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_29842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e29853){if((e29853 instanceof Object)){
var ex__24434__auto__ = e29853;
var statearr_29854_29863 = state_29842;
(statearr_29854_29863[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29864 = state_29842;
state_29842 = G__29864;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24431__auto__ = function(state_29842){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24431__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24431__auto____1.call(this,state_29842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24431__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24431__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_29855 = f__24528__auto__.call(null);
(statearr_29855[(6)] = c__24527__auto___29856);

return statearr_29855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_29870){
var state_val_29871 = (state_29870[(1)]);
if((state_val_29871 === (1))){
var inst_29865 = cljs.core.async.timeout.call(null,(3000));
var state_29870__$1 = state_29870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29870__$1,(2),inst_29865);
} else {
if((state_val_29871 === (2))){
var inst_29867 = (state_29870[(2)]);
var inst_29868 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29870__$1 = (function (){var statearr_29872 = state_29870;
(statearr_29872[(7)] = inst_29867);

return statearr_29872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29870__$1,inst_29868);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24431__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24431__auto____0 = (function (){
var statearr_29873 = [null,null,null,null,null,null,null,null];
(statearr_29873[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24431__auto__);

(statearr_29873[(1)] = (1));

return statearr_29873;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24431__auto____1 = (function (state_29870){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_29870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e29874){if((e29874 instanceof Object)){
var ex__24434__auto__ = e29874;
var statearr_29875_29877 = state_29870;
(statearr_29875_29877[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29878 = state_29870;
state_29870 = G__29878;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24431__auto__ = function(state_29870){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24431__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24431__auto____1.call(this,state_29870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24431__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24431__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_29876 = f__24528__auto__.call(null);
(statearr_29876[(6)] = c__24527__auto__);

return statearr_29876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5753__auto__)){
var figwheel_version = temp__5753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_29885){
var state_val_29886 = (state_29885[(1)]);
if((state_val_29886 === (1))){
var inst_29879 = cljs.core.async.timeout.call(null,(2000));
var state_29885__$1 = state_29885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29885__$1,(2),inst_29879);
} else {
if((state_val_29886 === (2))){
var inst_29881 = (state_29885[(2)]);
var inst_29882 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29883 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29882);
var state_29885__$1 = (function (){var statearr_29887 = state_29885;
(statearr_29887[(7)] = inst_29881);

return statearr_29887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29885__$1,inst_29883);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto____0 = (function (){
var statearr_29888 = [null,null,null,null,null,null,null,null];
(statearr_29888[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto__);

(statearr_29888[(1)] = (1));

return statearr_29888;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto____1 = (function (state_29885){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_29885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e29889){if((e29889 instanceof Object)){
var ex__24434__auto__ = e29889;
var statearr_29890_29892 = state_29885;
(statearr_29890_29892[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29893 = state_29885;
state_29885 = G__29893;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto__ = function(state_29885){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto____1.call(this,state_29885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_29891 = f__24528__auto__.call(null);
(statearr_29891[(6)] = c__24527__auto__);

return statearr_29891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29894){
var map__29895 = p__29894;
var map__29895__$1 = cljs.core.__destructure_map.call(null,map__29895);
var file = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29896 = "";
var G__29896__$1 = (cljs.core.truth_(file)?[G__29896,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29896);
var G__29896__$2 = (cljs.core.truth_(line)?[G__29896__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29896__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = line;
if(cljs.core.truth_(and__5043__auto__)){
return column;
} else {
return and__5043__auto__;
}
})())){
return [G__29896__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29896__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29897){
var map__29898 = p__29897;
var map__29898__$1 = cljs.core.__destructure_map.call(null,map__29898);
var ed = map__29898__$1;
var exception_data = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29900 = (function (){var G__29899 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29899)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29899;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29900);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29901){
var map__29902 = p__29901;
var map__29902__$1 = cljs.core.__destructure_map.call(null,map__29902);
var w = map__29902__$1;
var message = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__5043__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29903 = cljs.core.seq.call(null,plugins);
var chunk__29904 = null;
var count__29905 = (0);
var i__29906 = (0);
while(true){
if((i__29906 < count__29905)){
var vec__29913 = cljs.core._nth.call(null,chunk__29904,i__29906);
var k = cljs.core.nth.call(null,vec__29913,(0),null);
var plugin = cljs.core.nth.call(null,vec__29913,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29919 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29903,chunk__29904,count__29905,i__29906,pl_29919,vec__29913,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29919.call(null,msg_hist);
});})(seq__29903,chunk__29904,count__29905,i__29906,pl_29919,vec__29913,k,plugin))
);
} else {
}


var G__29920 = seq__29903;
var G__29921 = chunk__29904;
var G__29922 = count__29905;
var G__29923 = (i__29906 + (1));
seq__29903 = G__29920;
chunk__29904 = G__29921;
count__29905 = G__29922;
i__29906 = G__29923;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__29903);
if(temp__5753__auto__){
var seq__29903__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29903__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__29903__$1);
var G__29924 = cljs.core.chunk_rest.call(null,seq__29903__$1);
var G__29925 = c__5568__auto__;
var G__29926 = cljs.core.count.call(null,c__5568__auto__);
var G__29927 = (0);
seq__29903 = G__29924;
chunk__29904 = G__29925;
count__29905 = G__29926;
i__29906 = G__29927;
continue;
} else {
var vec__29916 = cljs.core.first.call(null,seq__29903__$1);
var k = cljs.core.nth.call(null,vec__29916,(0),null);
var plugin = cljs.core.nth.call(null,vec__29916,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29928 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29903,chunk__29904,count__29905,i__29906,pl_29928,vec__29916,k,plugin,seq__29903__$1,temp__5753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29928.call(null,msg_hist);
});})(seq__29903,chunk__29904,count__29905,i__29906,pl_29928,vec__29916,k,plugin,seq__29903__$1,temp__5753__auto__))
);
} else {
}


var G__29929 = cljs.core.next.call(null,seq__29903__$1);
var G__29930 = null;
var G__29931 = (0);
var G__29932 = (0);
seq__29903 = G__29929;
chunk__29904 = G__29930;
count__29905 = G__29931;
i__29906 = G__29932;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29934 = arguments.length;
switch (G__29934) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29935_29940 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29936_29941 = null;
var count__29937_29942 = (0);
var i__29938_29943 = (0);
while(true){
if((i__29938_29943 < count__29937_29942)){
var msg_29944 = cljs.core._nth.call(null,chunk__29936_29941,i__29938_29943);
figwheel.client.socket.handle_incoming_message.call(null,msg_29944);


var G__29945 = seq__29935_29940;
var G__29946 = chunk__29936_29941;
var G__29947 = count__29937_29942;
var G__29948 = (i__29938_29943 + (1));
seq__29935_29940 = G__29945;
chunk__29936_29941 = G__29946;
count__29937_29942 = G__29947;
i__29938_29943 = G__29948;
continue;
} else {
var temp__5753__auto___29949 = cljs.core.seq.call(null,seq__29935_29940);
if(temp__5753__auto___29949){
var seq__29935_29950__$1 = temp__5753__auto___29949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29935_29950__$1)){
var c__5568__auto___29951 = cljs.core.chunk_first.call(null,seq__29935_29950__$1);
var G__29952 = cljs.core.chunk_rest.call(null,seq__29935_29950__$1);
var G__29953 = c__5568__auto___29951;
var G__29954 = cljs.core.count.call(null,c__5568__auto___29951);
var G__29955 = (0);
seq__29935_29940 = G__29952;
chunk__29936_29941 = G__29953;
count__29937_29942 = G__29954;
i__29938_29943 = G__29955;
continue;
} else {
var msg_29956 = cljs.core.first.call(null,seq__29935_29950__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29956);


var G__29957 = cljs.core.next.call(null,seq__29935_29950__$1);
var G__29958 = null;
var G__29959 = (0);
var G__29960 = (0);
seq__29935_29940 = G__29957;
chunk__29936_29941 = G__29958;
count__29937_29942 = G__29959;
i__29938_29943 = G__29960;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29964 = arguments.length;
var i__5770__auto___29965 = (0);
while(true){
if((i__5770__auto___29965 < len__5769__auto___29964)){
args__5775__auto__.push((arguments[i__5770__auto___29965]));

var G__29966 = (i__5770__auto___29965 + (1));
i__5770__auto___29965 = G__29966;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29962){
var map__29963 = p__29962;
var map__29963__$1 = cljs.core.__destructure_map.call(null,map__29963);
var opts = map__29963__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29961){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29961));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29967){if((e29967 instanceof Error)){
var e = e29967;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29967;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__29968){
var map__29969 = p__29968;
var map__29969__$1 = cljs.core.__destructure_map.call(null,map__29969);
var msg_name = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1745332066104
