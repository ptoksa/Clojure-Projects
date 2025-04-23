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
}catch (e29565){if((e29565 instanceof Error)){
var e = e29565;
return "Error: Unable to stringify";
} else {
throw e29565;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29568 = arguments.length;
switch (G__29568) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29566_SHARP_){
if(typeof p1__29566_SHARP_ === 'string'){
return p1__29566_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29566_SHARP_);
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
var len__5769__auto___29571 = arguments.length;
var i__5770__auto___29572 = (0);
while(true){
if((i__5770__auto___29572 < len__5769__auto___29571)){
args__5775__auto__.push((arguments[i__5770__auto___29572]));

var G__29573 = (i__5770__auto___29572 + (1));
i__5770__auto___29572 = G__29573;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29570){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29570));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29575 = arguments.length;
var i__5770__auto___29576 = (0);
while(true){
if((i__5770__auto___29576 < len__5769__auto___29575)){
args__5775__auto__.push((arguments[i__5770__auto___29576]));

var G__29577 = (i__5770__auto___29576 + (1));
i__5770__auto___29576 = G__29577;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29574){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29574));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29578){
var map__29579 = p__29578;
var map__29579__$1 = cljs.core.__destructure_map.call(null,map__29579);
var message = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24580__auto___29657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_29629){
var state_val_29630 = (state_29629[(1)]);
if((state_val_29630 === (7))){
var inst_29625 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29631_29658 = state_29629__$1;
(statearr_29631_29658[(2)] = inst_29625);

(statearr_29631_29658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (1))){
var state_29629__$1 = state_29629;
var statearr_29632_29659 = state_29629__$1;
(statearr_29632_29659[(2)] = null);

(statearr_29632_29659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (4))){
var inst_29582 = (state_29629[(7)]);
var inst_29582__$1 = (state_29629[(2)]);
var state_29629__$1 = (function (){var statearr_29633 = state_29629;
(statearr_29633[(7)] = inst_29582__$1);

return statearr_29633;
})();
if(cljs.core.truth_(inst_29582__$1)){
var statearr_29634_29660 = state_29629__$1;
(statearr_29634_29660[(1)] = (5));

} else {
var statearr_29635_29661 = state_29629__$1;
(statearr_29635_29661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (15))){
var inst_29589 = (state_29629[(8)]);
var inst_29604 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29589);
var inst_29605 = cljs.core.first.call(null,inst_29604);
var inst_29606 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29605);
var inst_29607 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29606)].join('');
var inst_29608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29607);
var state_29629__$1 = state_29629;
var statearr_29636_29662 = state_29629__$1;
(statearr_29636_29662[(2)] = inst_29608);

(statearr_29636_29662[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (13))){
var inst_29613 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29637_29663 = state_29629__$1;
(statearr_29637_29663[(2)] = inst_29613);

(statearr_29637_29663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (6))){
var state_29629__$1 = state_29629;
var statearr_29638_29664 = state_29629__$1;
(statearr_29638_29664[(2)] = null);

(statearr_29638_29664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (17))){
var inst_29611 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29639_29665 = state_29629__$1;
(statearr_29639_29665[(2)] = inst_29611);

(statearr_29639_29665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (3))){
var inst_29627 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29629__$1,inst_29627);
} else {
if((state_val_29630 === (12))){
var inst_29588 = (state_29629[(9)]);
var inst_29602 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29588,opts);
var state_29629__$1 = state_29629;
if(inst_29602){
var statearr_29640_29666 = state_29629__$1;
(statearr_29640_29666[(1)] = (15));

} else {
var statearr_29641_29667 = state_29629__$1;
(statearr_29641_29667[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (2))){
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29629__$1,(4),ch);
} else {
if((state_val_29630 === (11))){
var inst_29589 = (state_29629[(8)]);
var inst_29594 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29595 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29589);
var inst_29596 = cljs.core.async.timeout.call(null,(1000));
var inst_29597 = [inst_29595,inst_29596];
var inst_29598 = (new cljs.core.PersistentVector(null,2,(5),inst_29594,inst_29597,null));
var state_29629__$1 = state_29629;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29629__$1,(14),inst_29598);
} else {
if((state_val_29630 === (9))){
var inst_29589 = (state_29629[(8)]);
var inst_29615 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29616 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29589);
var inst_29617 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29616);
var inst_29618 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29617)].join('');
var inst_29619 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29618);
var state_29629__$1 = (function (){var statearr_29642 = state_29629;
(statearr_29642[(10)] = inst_29615);

return statearr_29642;
})();
var statearr_29643_29668 = state_29629__$1;
(statearr_29643_29668[(2)] = inst_29619);

(statearr_29643_29668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (5))){
var inst_29582 = (state_29629[(7)]);
var inst_29584 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29585 = (new cljs.core.PersistentArrayMap(null,2,inst_29584,null));
var inst_29586 = (new cljs.core.PersistentHashSet(null,inst_29585,null));
var inst_29587 = figwheel.client.focus_msgs.call(null,inst_29586,inst_29582);
var inst_29588 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29587);
var inst_29589 = cljs.core.first.call(null,inst_29587);
var inst_29590 = figwheel.client.autoload_QMARK_.call(null);
var state_29629__$1 = (function (){var statearr_29644 = state_29629;
(statearr_29644[(8)] = inst_29589);

(statearr_29644[(9)] = inst_29588);

return statearr_29644;
})();
if(cljs.core.truth_(inst_29590)){
var statearr_29645_29669 = state_29629__$1;
(statearr_29645_29669[(1)] = (8));

} else {
var statearr_29646_29670 = state_29629__$1;
(statearr_29646_29670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (14))){
var inst_29600 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29647_29671 = state_29629__$1;
(statearr_29647_29671[(2)] = inst_29600);

(statearr_29647_29671[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (16))){
var state_29629__$1 = state_29629;
var statearr_29648_29672 = state_29629__$1;
(statearr_29648_29672[(2)] = null);

(statearr_29648_29672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (10))){
var inst_29621 = (state_29629[(2)]);
var state_29629__$1 = (function (){var statearr_29649 = state_29629;
(statearr_29649[(11)] = inst_29621);

return statearr_29649;
})();
var statearr_29650_29673 = state_29629__$1;
(statearr_29650_29673[(2)] = null);

(statearr_29650_29673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (8))){
var inst_29588 = (state_29629[(9)]);
var inst_29592 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29588,opts);
var state_29629__$1 = state_29629;
if(cljs.core.truth_(inst_29592)){
var statearr_29651_29674 = state_29629__$1;
(statearr_29651_29674[(1)] = (11));

} else {
var statearr_29652_29675 = state_29629__$1;
(statearr_29652_29675[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__24484__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24484__auto____0 = (function (){
var statearr_29653 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29653[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24484__auto__);

(statearr_29653[(1)] = (1));

return statearr_29653;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24484__auto____1 = (function (state_29629){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_29629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e29654){if((e29654 instanceof Object)){
var ex__24487__auto__ = e29654;
var statearr_29655_29676 = state_29629;
(statearr_29655_29676[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29677 = state_29629;
state_29629 = G__29677;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24484__auto__ = function(state_29629){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24484__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24484__auto____1.call(this,state_29629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24484__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24484__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_29656 = f__24581__auto__.call(null);
(statearr_29656[(6)] = c__24580__auto___29657);

return statearr_29656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29678_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29678_SHARP_));
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
var base_path_29684 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29680 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29681 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29682 = true;
var _STAR_print_fn_STAR__temp_val__29683 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29682);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29683);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29681);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29680);
}}catch (e29679){if((e29679 instanceof Error)){
var e = e29679;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29684], null));
} else {
var e = e29679;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29685){
var map__29686 = p__29685;
var map__29686__$1 = cljs.core.__destructure_map.call(null,map__29686);
var opts = map__29686__$1;
var build_id = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__29687){
var vec__29688 = p__29687;
var seq__29689 = cljs.core.seq.call(null,vec__29688);
var first__29690 = cljs.core.first.call(null,seq__29689);
var seq__29689__$1 = cljs.core.next.call(null,seq__29689);
var map__29691 = first__29690;
var map__29691__$1 = cljs.core.__destructure_map.call(null,map__29691);
var msg = map__29691__$1;
var msg_name = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29689__$1;
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
return (function (p__29692){
var vec__29693 = p__29692;
var seq__29694 = cljs.core.seq.call(null,vec__29693);
var first__29695 = cljs.core.first.call(null,seq__29694);
var seq__29694__$1 = cljs.core.next.call(null,seq__29694);
var map__29696 = first__29695;
var map__29696__$1 = cljs.core.__destructure_map.call(null,map__29696);
var msg = map__29696__$1;
var msg_name = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29694__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29697){
var map__29698 = p__29697;
var map__29698__$1 = cljs.core.__destructure_map.call(null,map__29698);
var on_compile_warning = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__29699){
var vec__29700 = p__29699;
var seq__29701 = cljs.core.seq.call(null,vec__29700);
var first__29702 = cljs.core.first.call(null,seq__29701);
var seq__29701__$1 = cljs.core.next.call(null,seq__29701);
var map__29703 = first__29702;
var map__29703__$1 = cljs.core.__destructure_map.call(null,map__29703);
var msg = map__29703__$1;
var msg_name = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29701__$1;
var pred__29704 = cljs.core._EQ_;
var expr__29705 = msg_name;
if(cljs.core.truth_(pred__29704.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29705))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29704.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29705))){
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
var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_29794){
var state_val_29795 = (state_29794[(1)]);
if((state_val_29795 === (7))){
var inst_29714 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
if(cljs.core.truth_(inst_29714)){
var statearr_29796_29843 = state_29794__$1;
(statearr_29796_29843[(1)] = (8));

} else {
var statearr_29797_29844 = state_29794__$1;
(statearr_29797_29844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (20))){
var inst_29788 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29798_29845 = state_29794__$1;
(statearr_29798_29845[(2)] = inst_29788);

(statearr_29798_29845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (27))){
var inst_29784 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29799_29846 = state_29794__$1;
(statearr_29799_29846[(2)] = inst_29784);

(statearr_29799_29846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (1))){
var inst_29707 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29794__$1 = state_29794;
if(cljs.core.truth_(inst_29707)){
var statearr_29800_29847 = state_29794__$1;
(statearr_29800_29847[(1)] = (2));

} else {
var statearr_29801_29848 = state_29794__$1;
(statearr_29801_29848[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (24))){
var inst_29786 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29802_29849 = state_29794__$1;
(statearr_29802_29849[(2)] = inst_29786);

(statearr_29802_29849[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (4))){
var inst_29792 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29794__$1,inst_29792);
} else {
if((state_val_29795 === (15))){
var inst_29790 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29803_29850 = state_29794__$1;
(statearr_29803_29850[(2)] = inst_29790);

(statearr_29803_29850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (21))){
var inst_29743 = (state_29794[(2)]);
var inst_29744 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29745 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29744);
var state_29794__$1 = (function (){var statearr_29804 = state_29794;
(statearr_29804[(7)] = inst_29743);

return statearr_29804;
})();
var statearr_29805_29851 = state_29794__$1;
(statearr_29805_29851[(2)] = inst_29745);

(statearr_29805_29851[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (31))){
var inst_29773 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29794__$1 = state_29794;
if(inst_29773){
var statearr_29806_29852 = state_29794__$1;
(statearr_29806_29852[(1)] = (34));

} else {
var statearr_29807_29853 = state_29794__$1;
(statearr_29807_29853[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (32))){
var inst_29782 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29808_29854 = state_29794__$1;
(statearr_29808_29854[(2)] = inst_29782);

(statearr_29808_29854[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (33))){
var inst_29769 = (state_29794[(2)]);
var inst_29770 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29771 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29770);
var state_29794__$1 = (function (){var statearr_29809 = state_29794;
(statearr_29809[(8)] = inst_29769);

return statearr_29809;
})();
var statearr_29810_29855 = state_29794__$1;
(statearr_29810_29855[(2)] = inst_29771);

(statearr_29810_29855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (13))){
var inst_29728 = figwheel.client.heads_up.clear.call(null);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(16),inst_29728);
} else {
if((state_val_29795 === (22))){
var inst_29749 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29750 = figwheel.client.heads_up.append_warning_message.call(null,inst_29749);
var state_29794__$1 = state_29794;
var statearr_29811_29856 = state_29794__$1;
(statearr_29811_29856[(2)] = inst_29750);

(statearr_29811_29856[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (36))){
var inst_29780 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29812_29857 = state_29794__$1;
(statearr_29812_29857[(2)] = inst_29780);

(statearr_29812_29857[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (29))){
var inst_29760 = (state_29794[(2)]);
var inst_29761 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29762 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29761);
var state_29794__$1 = (function (){var statearr_29813 = state_29794;
(statearr_29813[(9)] = inst_29760);

return statearr_29813;
})();
var statearr_29814_29858 = state_29794__$1;
(statearr_29814_29858[(2)] = inst_29762);

(statearr_29814_29858[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (6))){
var inst_29709 = (state_29794[(10)]);
var state_29794__$1 = state_29794;
var statearr_29815_29859 = state_29794__$1;
(statearr_29815_29859[(2)] = inst_29709);

(statearr_29815_29859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (28))){
var inst_29756 = (state_29794[(2)]);
var inst_29757 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29758 = figwheel.client.heads_up.display_warning.call(null,inst_29757);
var state_29794__$1 = (function (){var statearr_29816 = state_29794;
(statearr_29816[(11)] = inst_29756);

return statearr_29816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(29),inst_29758);
} else {
if((state_val_29795 === (25))){
var inst_29754 = figwheel.client.heads_up.clear.call(null);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(28),inst_29754);
} else {
if((state_val_29795 === (34))){
var inst_29775 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(37),inst_29775);
} else {
if((state_val_29795 === (17))){
var inst_29734 = (state_29794[(2)]);
var inst_29735 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29736 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29735);
var state_29794__$1 = (function (){var statearr_29817 = state_29794;
(statearr_29817[(12)] = inst_29734);

return statearr_29817;
})();
var statearr_29818_29860 = state_29794__$1;
(statearr_29818_29860[(2)] = inst_29736);

(statearr_29818_29860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (3))){
var inst_29726 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29794__$1 = state_29794;
if(inst_29726){
var statearr_29819_29861 = state_29794__$1;
(statearr_29819_29861[(1)] = (13));

} else {
var statearr_29820_29862 = state_29794__$1;
(statearr_29820_29862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (12))){
var inst_29722 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29821_29863 = state_29794__$1;
(statearr_29821_29863[(2)] = inst_29722);

(statearr_29821_29863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (2))){
var inst_29709 = (state_29794[(10)]);
var inst_29709__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29794__$1 = (function (){var statearr_29822 = state_29794;
(statearr_29822[(10)] = inst_29709__$1);

return statearr_29822;
})();
if(cljs.core.truth_(inst_29709__$1)){
var statearr_29823_29864 = state_29794__$1;
(statearr_29823_29864[(1)] = (5));

} else {
var statearr_29824_29865 = state_29794__$1;
(statearr_29824_29865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (23))){
var inst_29752 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29794__$1 = state_29794;
if(inst_29752){
var statearr_29825_29866 = state_29794__$1;
(statearr_29825_29866[(1)] = (25));

} else {
var statearr_29826_29867 = state_29794__$1;
(statearr_29826_29867[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (35))){
var state_29794__$1 = state_29794;
var statearr_29827_29868 = state_29794__$1;
(statearr_29827_29868[(2)] = null);

(statearr_29827_29868[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (19))){
var inst_29747 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29794__$1 = state_29794;
if(inst_29747){
var statearr_29828_29869 = state_29794__$1;
(statearr_29828_29869[(1)] = (22));

} else {
var statearr_29829_29870 = state_29794__$1;
(statearr_29829_29870[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (11))){
var inst_29718 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29830_29871 = state_29794__$1;
(statearr_29830_29871[(2)] = inst_29718);

(statearr_29830_29871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (9))){
var inst_29720 = figwheel.client.heads_up.clear.call(null);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(12),inst_29720);
} else {
if((state_val_29795 === (5))){
var inst_29711 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29794__$1 = state_29794;
var statearr_29831_29872 = state_29794__$1;
(statearr_29831_29872[(2)] = inst_29711);

(statearr_29831_29872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (14))){
var inst_29738 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29794__$1 = state_29794;
if(inst_29738){
var statearr_29832_29873 = state_29794__$1;
(statearr_29832_29873[(1)] = (18));

} else {
var statearr_29833_29874 = state_29794__$1;
(statearr_29833_29874[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (26))){
var inst_29764 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29794__$1 = state_29794;
if(inst_29764){
var statearr_29834_29875 = state_29794__$1;
(statearr_29834_29875[(1)] = (30));

} else {
var statearr_29835_29876 = state_29794__$1;
(statearr_29835_29876[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (16))){
var inst_29730 = (state_29794[(2)]);
var inst_29731 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29732 = figwheel.client.heads_up.display_exception.call(null,inst_29731);
var state_29794__$1 = (function (){var statearr_29836 = state_29794;
(statearr_29836[(13)] = inst_29730);

return statearr_29836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(17),inst_29732);
} else {
if((state_val_29795 === (30))){
var inst_29766 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29767 = figwheel.client.heads_up.display_warning.call(null,inst_29766);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(33),inst_29767);
} else {
if((state_val_29795 === (10))){
var inst_29724 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29837_29877 = state_29794__$1;
(statearr_29837_29877[(2)] = inst_29724);

(statearr_29837_29877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (18))){
var inst_29740 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29741 = figwheel.client.heads_up.display_exception.call(null,inst_29740);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(21),inst_29741);
} else {
if((state_val_29795 === (37))){
var inst_29777 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29838_29878 = state_29794__$1;
(statearr_29838_29878[(2)] = inst_29777);

(statearr_29838_29878[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (8))){
var inst_29716 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(11),inst_29716);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto____0 = (function (){
var statearr_29839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29839[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto__);

(statearr_29839[(1)] = (1));

return statearr_29839;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto____1 = (function (state_29794){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_29794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e29840){if((e29840 instanceof Object)){
var ex__24487__auto__ = e29840;
var statearr_29841_29879 = state_29794;
(statearr_29841_29879[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29880 = state_29794;
state_29794 = G__29880;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto__ = function(state_29794){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto____1.call(this,state_29794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_29842 = f__24581__auto__.call(null);
(statearr_29842[(6)] = c__24580__auto__);

return statearr_29842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24580__auto___29909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_29895){
var state_val_29896 = (state_29895[(1)]);
if((state_val_29896 === (1))){
var state_29895__$1 = state_29895;
var statearr_29897_29910 = state_29895__$1;
(statearr_29897_29910[(2)] = null);

(statearr_29897_29910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (2))){
var state_29895__$1 = state_29895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29895__$1,(4),ch);
} else {
if((state_val_29896 === (3))){
var inst_29893 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29895__$1,inst_29893);
} else {
if((state_val_29896 === (4))){
var inst_29883 = (state_29895[(7)]);
var inst_29883__$1 = (state_29895[(2)]);
var state_29895__$1 = (function (){var statearr_29898 = state_29895;
(statearr_29898[(7)] = inst_29883__$1);

return statearr_29898;
})();
if(cljs.core.truth_(inst_29883__$1)){
var statearr_29899_29911 = state_29895__$1;
(statearr_29899_29911[(1)] = (5));

} else {
var statearr_29900_29912 = state_29895__$1;
(statearr_29900_29912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (5))){
var inst_29883 = (state_29895[(7)]);
var inst_29885 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29883);
var state_29895__$1 = state_29895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29895__$1,(8),inst_29885);
} else {
if((state_val_29896 === (6))){
var state_29895__$1 = state_29895;
var statearr_29901_29913 = state_29895__$1;
(statearr_29901_29913[(2)] = null);

(statearr_29901_29913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (7))){
var inst_29891 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
var statearr_29902_29914 = state_29895__$1;
(statearr_29902_29914[(2)] = inst_29891);

(statearr_29902_29914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (8))){
var inst_29887 = (state_29895[(2)]);
var state_29895__$1 = (function (){var statearr_29903 = state_29895;
(statearr_29903[(8)] = inst_29887);

return statearr_29903;
})();
var statearr_29904_29915 = state_29895__$1;
(statearr_29904_29915[(2)] = null);

(statearr_29904_29915[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__24484__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24484__auto____0 = (function (){
var statearr_29905 = [null,null,null,null,null,null,null,null,null];
(statearr_29905[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24484__auto__);

(statearr_29905[(1)] = (1));

return statearr_29905;
});
var figwheel$client$heads_up_plugin_$_state_machine__24484__auto____1 = (function (state_29895){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_29895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e29906){if((e29906 instanceof Object)){
var ex__24487__auto__ = e29906;
var statearr_29907_29916 = state_29895;
(statearr_29907_29916[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29917 = state_29895;
state_29895 = G__29917;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24484__auto__ = function(state_29895){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24484__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24484__auto____1.call(this,state_29895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24484__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24484__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_29908 = f__24581__auto__.call(null);
(statearr_29908[(6)] = c__24580__auto___29909);

return statearr_29908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
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
var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_29923){
var state_val_29924 = (state_29923[(1)]);
if((state_val_29924 === (1))){
var inst_29918 = cljs.core.async.timeout.call(null,(3000));
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29923__$1,(2),inst_29918);
} else {
if((state_val_29924 === (2))){
var inst_29920 = (state_29923[(2)]);
var inst_29921 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29923__$1 = (function (){var statearr_29925 = state_29923;
(statearr_29925[(7)] = inst_29920);

return statearr_29925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29923__$1,inst_29921);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24484__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24484__auto____0 = (function (){
var statearr_29926 = [null,null,null,null,null,null,null,null];
(statearr_29926[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24484__auto__);

(statearr_29926[(1)] = (1));

return statearr_29926;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24484__auto____1 = (function (state_29923){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_29923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e29927){if((e29927 instanceof Object)){
var ex__24487__auto__ = e29927;
var statearr_29928_29930 = state_29923;
(statearr_29928_29930[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29931 = state_29923;
state_29923 = G__29931;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24484__auto__ = function(state_29923){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24484__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24484__auto____1.call(this,state_29923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24484__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24484__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_29929 = f__24581__auto__.call(null);
(statearr_29929[(6)] = c__24580__auto__);

return statearr_29929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
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
var temp__5804__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5804__auto__)){
var figwheel_version = temp__5804__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_29938){
var state_val_29939 = (state_29938[(1)]);
if((state_val_29939 === (1))){
var inst_29932 = cljs.core.async.timeout.call(null,(2000));
var state_29938__$1 = state_29938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29938__$1,(2),inst_29932);
} else {
if((state_val_29939 === (2))){
var inst_29934 = (state_29938[(2)]);
var inst_29935 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29936 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29935);
var state_29938__$1 = (function (){var statearr_29940 = state_29938;
(statearr_29940[(7)] = inst_29934);

return statearr_29940;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29938__$1,inst_29936);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto____0 = (function (){
var statearr_29941 = [null,null,null,null,null,null,null,null];
(statearr_29941[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto__);

(statearr_29941[(1)] = (1));

return statearr_29941;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto____1 = (function (state_29938){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_29938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e29942){if((e29942 instanceof Object)){
var ex__24487__auto__ = e29942;
var statearr_29943_29945 = state_29938;
(statearr_29943_29945[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29946 = state_29938;
state_29938 = G__29946;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto__ = function(state_29938){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto____1.call(this,state_29938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_29944 = f__24581__auto__.call(null);
(statearr_29944[(6)] = c__24580__auto__);

return statearr_29944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29947){
var map__29948 = p__29947;
var map__29948__$1 = cljs.core.__destructure_map.call(null,map__29948);
var file = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29949 = "";
var G__29949__$1 = (cljs.core.truth_(file)?[G__29949,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29949);
var G__29949__$2 = (cljs.core.truth_(line)?[G__29949__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29949__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = line;
if(cljs.core.truth_(and__5043__auto__)){
return column;
} else {
return and__5043__auto__;
}
})())){
return [G__29949__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29949__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29950){
var map__29951 = p__29950;
var map__29951__$1 = cljs.core.__destructure_map.call(null,map__29951);
var ed = map__29951__$1;
var exception_data = cljs.core.get.call(null,map__29951__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29951__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29953 = (function (){var G__29952 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29952)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29952;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29953);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29954){
var map__29955 = p__29954;
var map__29955__$1 = cljs.core.__destructure_map.call(null,map__29955);
var w = map__29955__$1;
var message = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29956 = cljs.core.seq.call(null,plugins);
var chunk__29957 = null;
var count__29958 = (0);
var i__29959 = (0);
while(true){
if((i__29959 < count__29958)){
var vec__29966 = cljs.core._nth.call(null,chunk__29957,i__29959);
var k = cljs.core.nth.call(null,vec__29966,(0),null);
var plugin = cljs.core.nth.call(null,vec__29966,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29972 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29956,chunk__29957,count__29958,i__29959,pl_29972,vec__29966,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29972.call(null,msg_hist);
});})(seq__29956,chunk__29957,count__29958,i__29959,pl_29972,vec__29966,k,plugin))
);
} else {
}


var G__29973 = seq__29956;
var G__29974 = chunk__29957;
var G__29975 = count__29958;
var G__29976 = (i__29959 + (1));
seq__29956 = G__29973;
chunk__29957 = G__29974;
count__29958 = G__29975;
i__29959 = G__29976;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29956);
if(temp__5804__auto__){
var seq__29956__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29956__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__29956__$1);
var G__29977 = cljs.core.chunk_rest.call(null,seq__29956__$1);
var G__29978 = c__5568__auto__;
var G__29979 = cljs.core.count.call(null,c__5568__auto__);
var G__29980 = (0);
seq__29956 = G__29977;
chunk__29957 = G__29978;
count__29958 = G__29979;
i__29959 = G__29980;
continue;
} else {
var vec__29969 = cljs.core.first.call(null,seq__29956__$1);
var k = cljs.core.nth.call(null,vec__29969,(0),null);
var plugin = cljs.core.nth.call(null,vec__29969,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29981 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29956,chunk__29957,count__29958,i__29959,pl_29981,vec__29969,k,plugin,seq__29956__$1,temp__5804__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29981.call(null,msg_hist);
});})(seq__29956,chunk__29957,count__29958,i__29959,pl_29981,vec__29969,k,plugin,seq__29956__$1,temp__5804__auto__))
);
} else {
}


var G__29982 = cljs.core.next.call(null,seq__29956__$1);
var G__29983 = null;
var G__29984 = (0);
var G__29985 = (0);
seq__29956 = G__29982;
chunk__29957 = G__29983;
count__29958 = G__29984;
i__29959 = G__29985;
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
var G__29987 = arguments.length;
switch (G__29987) {
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

var seq__29988_29993 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29989_29994 = null;
var count__29990_29995 = (0);
var i__29991_29996 = (0);
while(true){
if((i__29991_29996 < count__29990_29995)){
var msg_29997 = cljs.core._nth.call(null,chunk__29989_29994,i__29991_29996);
figwheel.client.socket.handle_incoming_message.call(null,msg_29997);


var G__29998 = seq__29988_29993;
var G__29999 = chunk__29989_29994;
var G__30000 = count__29990_29995;
var G__30001 = (i__29991_29996 + (1));
seq__29988_29993 = G__29998;
chunk__29989_29994 = G__29999;
count__29990_29995 = G__30000;
i__29991_29996 = G__30001;
continue;
} else {
var temp__5804__auto___30002 = cljs.core.seq.call(null,seq__29988_29993);
if(temp__5804__auto___30002){
var seq__29988_30003__$1 = temp__5804__auto___30002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29988_30003__$1)){
var c__5568__auto___30004 = cljs.core.chunk_first.call(null,seq__29988_30003__$1);
var G__30005 = cljs.core.chunk_rest.call(null,seq__29988_30003__$1);
var G__30006 = c__5568__auto___30004;
var G__30007 = cljs.core.count.call(null,c__5568__auto___30004);
var G__30008 = (0);
seq__29988_29993 = G__30005;
chunk__29989_29994 = G__30006;
count__29990_29995 = G__30007;
i__29991_29996 = G__30008;
continue;
} else {
var msg_30009 = cljs.core.first.call(null,seq__29988_30003__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30009);


var G__30010 = cljs.core.next.call(null,seq__29988_30003__$1);
var G__30011 = null;
var G__30012 = (0);
var G__30013 = (0);
seq__29988_29993 = G__30010;
chunk__29989_29994 = G__30011;
count__29990_29995 = G__30012;
i__29991_29996 = G__30013;
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
var len__5769__auto___30017 = arguments.length;
var i__5770__auto___30018 = (0);
while(true){
if((i__5770__auto___30018 < len__5769__auto___30017)){
args__5775__auto__.push((arguments[i__5770__auto___30018]));

var G__30019 = (i__5770__auto___30018 + (1));
i__5770__auto___30018 = G__30019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30015){
var map__30016 = p__30015;
var map__30016__$1 = cljs.core.__destructure_map.call(null,map__30016);
var opts = map__30016__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30014){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30014));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30020){if((e30020 instanceof Error)){
var e = e30020;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30020;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__30021){
var map__30022 = p__30021;
var map__30022__$1 = cljs.core.__destructure_map.call(null,map__30022);
var msg_name = cljs.core.get.call(null,map__30022__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1744477362176
