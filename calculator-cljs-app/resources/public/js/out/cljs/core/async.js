// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24640 = arguments.length;
switch (G__24640) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24641 = (function (f,blockable,meta24642){
this.f = f;
this.blockable = blockable;
this.meta24642 = meta24642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24643,meta24642__$1){
var self__ = this;
var _24643__$1 = this;
return (new cljs.core.async.t_cljs$core$async24641(self__.f,self__.blockable,meta24642__$1));
}));

(cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24643){
var self__ = this;
var _24643__$1 = this;
return self__.meta24642;
}));

(cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24642","meta24642",-1036472855,null)], null);
}));

(cljs.core.async.t_cljs$core$async24641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24641");

(cljs.core.async.t_cljs$core$async24641.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async24641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24641.
 */
cljs.core.async.__GT_t_cljs$core$async24641 = (function cljs$core$async$__GT_t_cljs$core$async24641(f__$1,blockable__$1,meta24642){
return (new cljs.core.async.t_cljs$core$async24641(f__$1,blockable__$1,meta24642));
});

}

return (new cljs.core.async.t_cljs$core$async24641(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24647 = arguments.length;
switch (G__24647) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24650 = arguments.length;
switch (G__24650) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24653 = arguments.length;
switch (G__24653) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24655 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24655);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_24655);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24657 = arguments.length;
switch (G__24657) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___24659 = n;
var x_24660 = (0);
while(true){
if((x_24660 < n__5636__auto___24659)){
(a[x_24660] = (0));

var G__24661 = (x_24660 + (1));
x_24660 = G__24661;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24662 = (i + (1));
i = G__24662;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24663 = (function (flag,meta24664){
this.flag = flag;
this.meta24664 = meta24664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24665,meta24664__$1){
var self__ = this;
var _24665__$1 = this;
return (new cljs.core.async.t_cljs$core$async24663(self__.flag,meta24664__$1));
}));

(cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24665){
var self__ = this;
var _24665__$1 = this;
return self__.meta24664;
}));

(cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24664","meta24664",-16351040,null)], null);
}));

(cljs.core.async.t_cljs$core$async24663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24663");

(cljs.core.async.t_cljs$core$async24663.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async24663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24663.
 */
cljs.core.async.__GT_t_cljs$core$async24663 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24663(flag__$1,meta24664){
return (new cljs.core.async.t_cljs$core$async24663(flag__$1,meta24664));
});

}

return (new cljs.core.async.t_cljs$core$async24663(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24666 = (function (flag,cb,meta24667){
this.flag = flag;
this.cb = cb;
this.meta24667 = meta24667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24668,meta24667__$1){
var self__ = this;
var _24668__$1 = this;
return (new cljs.core.async.t_cljs$core$async24666(self__.flag,self__.cb,meta24667__$1));
}));

(cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24668){
var self__ = this;
var _24668__$1 = this;
return self__.meta24667;
}));

(cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24667","meta24667",-772361745,null)], null);
}));

(cljs.core.async.t_cljs$core$async24666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24666");

(cljs.core.async.t_cljs$core$async24666.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async24666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24666.
 */
cljs.core.async.__GT_t_cljs$core$async24666 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24666(flag__$1,cb__$1,meta24667){
return (new cljs.core.async.t_cljs$core$async24666(flag__$1,cb__$1,meta24667));
});

}

return (new cljs.core.async.t_cljs$core$async24666(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24669_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24669_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24670_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24670_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24671 = (i + (1));
i = G__24671;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24676 = arguments.length;
var i__5770__auto___24677 = (0);
while(true){
if((i__5770__auto___24677 < len__5769__auto___24676)){
args__5775__auto__.push((arguments[i__5770__auto___24677]));

var G__24678 = (i__5770__auto___24677 + (1));
i__5770__auto___24677 = G__24678;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24674){
var map__24675 = p__24674;
var map__24675__$1 = cljs.core.__destructure_map.call(null,map__24675);
var opts = map__24675__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24672){
var G__24673 = cljs.core.first.call(null,seq24672);
var seq24672__$1 = cljs.core.next.call(null,seq24672);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24673,seq24672__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24680 = arguments.length;
switch (G__24680) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24580__auto___24726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_24704){
var state_val_24705 = (state_24704[(1)]);
if((state_val_24705 === (7))){
var inst_24700 = (state_24704[(2)]);
var state_24704__$1 = state_24704;
var statearr_24706_24727 = state_24704__$1;
(statearr_24706_24727[(2)] = inst_24700);

(statearr_24706_24727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (1))){
var state_24704__$1 = state_24704;
var statearr_24707_24728 = state_24704__$1;
(statearr_24707_24728[(2)] = null);

(statearr_24707_24728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (4))){
var inst_24683 = (state_24704[(7)]);
var inst_24683__$1 = (state_24704[(2)]);
var inst_24684 = (inst_24683__$1 == null);
var state_24704__$1 = (function (){var statearr_24708 = state_24704;
(statearr_24708[(7)] = inst_24683__$1);

return statearr_24708;
})();
if(cljs.core.truth_(inst_24684)){
var statearr_24709_24729 = state_24704__$1;
(statearr_24709_24729[(1)] = (5));

} else {
var statearr_24710_24730 = state_24704__$1;
(statearr_24710_24730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (13))){
var state_24704__$1 = state_24704;
var statearr_24711_24731 = state_24704__$1;
(statearr_24711_24731[(2)] = null);

(statearr_24711_24731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (6))){
var inst_24683 = (state_24704[(7)]);
var state_24704__$1 = state_24704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24704__$1,(11),to,inst_24683);
} else {
if((state_val_24705 === (3))){
var inst_24702 = (state_24704[(2)]);
var state_24704__$1 = state_24704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24704__$1,inst_24702);
} else {
if((state_val_24705 === (12))){
var state_24704__$1 = state_24704;
var statearr_24712_24732 = state_24704__$1;
(statearr_24712_24732[(2)] = null);

(statearr_24712_24732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (2))){
var state_24704__$1 = state_24704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24704__$1,(4),from);
} else {
if((state_val_24705 === (11))){
var inst_24693 = (state_24704[(2)]);
var state_24704__$1 = state_24704;
if(cljs.core.truth_(inst_24693)){
var statearr_24713_24733 = state_24704__$1;
(statearr_24713_24733[(1)] = (12));

} else {
var statearr_24714_24734 = state_24704__$1;
(statearr_24714_24734[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (9))){
var state_24704__$1 = state_24704;
var statearr_24715_24735 = state_24704__$1;
(statearr_24715_24735[(2)] = null);

(statearr_24715_24735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (5))){
var state_24704__$1 = state_24704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24716_24736 = state_24704__$1;
(statearr_24716_24736[(1)] = (8));

} else {
var statearr_24717_24737 = state_24704__$1;
(statearr_24717_24737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (14))){
var inst_24698 = (state_24704[(2)]);
var state_24704__$1 = state_24704;
var statearr_24718_24738 = state_24704__$1;
(statearr_24718_24738[(2)] = inst_24698);

(statearr_24718_24738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (10))){
var inst_24690 = (state_24704[(2)]);
var state_24704__$1 = state_24704;
var statearr_24719_24739 = state_24704__$1;
(statearr_24719_24739[(2)] = inst_24690);

(statearr_24719_24739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24705 === (8))){
var inst_24687 = cljs.core.async.close_BANG_.call(null,to);
var state_24704__$1 = state_24704;
var statearr_24720_24740 = state_24704__$1;
(statearr_24720_24740[(2)] = inst_24687);

(statearr_24720_24740[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_24721 = [null,null,null,null,null,null,null,null];
(statearr_24721[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_24721[(1)] = (1));

return statearr_24721;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_24704){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_24704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e24722){if((e24722 instanceof Object)){
var ex__24487__auto__ = e24722;
var statearr_24723_24741 = state_24704;
(statearr_24723_24741[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24742 = state_24704;
state_24704 = G__24742;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_24704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_24704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_24724 = f__24581__auto__.call(null);
(statearr_24724[(6)] = c__24580__auto___24726);

return statearr_24724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__24743){
var vec__24744 = p__24743;
var v = cljs.core.nth.call(null,vec__24744,(0),null);
var p = cljs.core.nth.call(null,vec__24744,(1),null);
var job = vec__24744;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24580__auto___24915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_24751){
var state_val_24752 = (state_24751[(1)]);
if((state_val_24752 === (1))){
var state_24751__$1 = state_24751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24751__$1,(2),res,v);
} else {
if((state_val_24752 === (2))){
var inst_24748 = (state_24751[(2)]);
var inst_24749 = cljs.core.async.close_BANG_.call(null,res);
var state_24751__$1 = (function (){var statearr_24753 = state_24751;
(statearr_24753[(7)] = inst_24748);

return statearr_24753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24751__$1,inst_24749);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0 = (function (){
var statearr_24754 = [null,null,null,null,null,null,null,null];
(statearr_24754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1 = (function (state_24751){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_24751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object)){
var ex__24487__auto__ = e24755;
var statearr_24756_24916 = state_24751;
(statearr_24756_24916[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24917 = state_24751;
state_24751 = G__24917;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = function(state_24751){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1.call(this,state_24751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_24757 = f__24581__auto__.call(null);
(statearr_24757[(6)] = c__24580__auto___24915);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24758){
var vec__24759 = p__24758;
var v = cljs.core.nth.call(null,vec__24759,(0),null);
var p = cljs.core.nth.call(null,vec__24759,(1),null);
var job = vec__24759;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5636__auto___24918 = n;
var __24919 = (0);
while(true){
if((__24919 < n__5636__auto___24918)){
var G__24762_24920 = type;
var G__24762_24921__$1 = (((G__24762_24920 instanceof cljs.core.Keyword))?G__24762_24920.fqn:null);
switch (G__24762_24921__$1) {
case "compute":
var c__24580__auto___24923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24919,c__24580__auto___24923,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async){
return (function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = ((function (__24919,c__24580__auto___24923,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async){
return (function (state_24775){
var state_val_24776 = (state_24775[(1)]);
if((state_val_24776 === (1))){
var state_24775__$1 = state_24775;
var statearr_24777_24924 = state_24775__$1;
(statearr_24777_24924[(2)] = null);

(statearr_24777_24924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24776 === (2))){
var state_24775__$1 = state_24775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24775__$1,(4),jobs);
} else {
if((state_val_24776 === (3))){
var inst_24773 = (state_24775[(2)]);
var state_24775__$1 = state_24775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24775__$1,inst_24773);
} else {
if((state_val_24776 === (4))){
var inst_24765 = (state_24775[(2)]);
var inst_24766 = process__$1.call(null,inst_24765);
var state_24775__$1 = state_24775;
if(cljs.core.truth_(inst_24766)){
var statearr_24778_24925 = state_24775__$1;
(statearr_24778_24925[(1)] = (5));

} else {
var statearr_24779_24926 = state_24775__$1;
(statearr_24779_24926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24776 === (5))){
var state_24775__$1 = state_24775;
var statearr_24780_24927 = state_24775__$1;
(statearr_24780_24927[(2)] = null);

(statearr_24780_24927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24776 === (6))){
var state_24775__$1 = state_24775;
var statearr_24781_24928 = state_24775__$1;
(statearr_24781_24928[(2)] = null);

(statearr_24781_24928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24776 === (7))){
var inst_24771 = (state_24775[(2)]);
var state_24775__$1 = state_24775;
var statearr_24782_24929 = state_24775__$1;
(statearr_24782_24929[(2)] = inst_24771);

(statearr_24782_24929[(1)] = (3));


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
});})(__24919,c__24580__auto___24923,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async))
;
return ((function (__24919,switch__24483__auto__,c__24580__auto___24923,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0 = (function (){
var statearr_24783 = [null,null,null,null,null,null,null];
(statearr_24783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__);

(statearr_24783[(1)] = (1));

return statearr_24783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1 = (function (state_24775){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_24775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e24784){if((e24784 instanceof Object)){
var ex__24487__auto__ = e24784;
var statearr_24785_24930 = state_24775;
(statearr_24785_24930[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24931 = state_24775;
state_24775 = G__24931;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = function(state_24775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1.call(this,state_24775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__;
})()
;})(__24919,switch__24483__auto__,c__24580__auto___24923,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async))
})();
var state__24582__auto__ = (function (){var statearr_24786 = f__24581__auto__.call(null);
(statearr_24786[(6)] = c__24580__auto___24923);

return statearr_24786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
});})(__24919,c__24580__auto___24923,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async))
);


break;
case "async":
var c__24580__auto___24932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24919,c__24580__auto___24932,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async){
return (function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = ((function (__24919,c__24580__auto___24932,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async){
return (function (state_24799){
var state_val_24800 = (state_24799[(1)]);
if((state_val_24800 === (1))){
var state_24799__$1 = state_24799;
var statearr_24801_24933 = state_24799__$1;
(statearr_24801_24933[(2)] = null);

(statearr_24801_24933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (2))){
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24799__$1,(4),jobs);
} else {
if((state_val_24800 === (3))){
var inst_24797 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24799__$1,inst_24797);
} else {
if((state_val_24800 === (4))){
var inst_24789 = (state_24799[(2)]);
var inst_24790 = async.call(null,inst_24789);
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24790)){
var statearr_24802_24934 = state_24799__$1;
(statearr_24802_24934[(1)] = (5));

} else {
var statearr_24803_24935 = state_24799__$1;
(statearr_24803_24935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (5))){
var state_24799__$1 = state_24799;
var statearr_24804_24936 = state_24799__$1;
(statearr_24804_24936[(2)] = null);

(statearr_24804_24936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (6))){
var state_24799__$1 = state_24799;
var statearr_24805_24937 = state_24799__$1;
(statearr_24805_24937[(2)] = null);

(statearr_24805_24937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (7))){
var inst_24795 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24806_24938 = state_24799__$1;
(statearr_24806_24938[(2)] = inst_24795);

(statearr_24806_24938[(1)] = (3));


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
});})(__24919,c__24580__auto___24932,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async))
;
return ((function (__24919,switch__24483__auto__,c__24580__auto___24932,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0 = (function (){
var statearr_24807 = [null,null,null,null,null,null,null];
(statearr_24807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__);

(statearr_24807[(1)] = (1));

return statearr_24807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1 = (function (state_24799){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_24799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e24808){if((e24808 instanceof Object)){
var ex__24487__auto__ = e24808;
var statearr_24809_24939 = state_24799;
(statearr_24809_24939[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24940 = state_24799;
state_24799 = G__24940;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = function(state_24799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1.call(this,state_24799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__;
})()
;})(__24919,switch__24483__auto__,c__24580__auto___24932,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async))
})();
var state__24582__auto__ = (function (){var statearr_24810 = f__24581__auto__.call(null);
(statearr_24810[(6)] = c__24580__auto___24932);

return statearr_24810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
});})(__24919,c__24580__auto___24932,G__24762_24920,G__24762_24921__$1,n__5636__auto___24918,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24762_24921__$1)].join('')));

}

var G__24941 = (__24919 + (1));
__24919 = G__24941;
continue;
} else {
}
break;
}

var c__24580__auto___24942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_24832){
var state_val_24833 = (state_24832[(1)]);
if((state_val_24833 === (7))){
var inst_24828 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
var statearr_24834_24943 = state_24832__$1;
(statearr_24834_24943[(2)] = inst_24828);

(statearr_24834_24943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (1))){
var state_24832__$1 = state_24832;
var statearr_24835_24944 = state_24832__$1;
(statearr_24835_24944[(2)] = null);

(statearr_24835_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (4))){
var inst_24813 = (state_24832[(7)]);
var inst_24813__$1 = (state_24832[(2)]);
var inst_24814 = (inst_24813__$1 == null);
var state_24832__$1 = (function (){var statearr_24836 = state_24832;
(statearr_24836[(7)] = inst_24813__$1);

return statearr_24836;
})();
if(cljs.core.truth_(inst_24814)){
var statearr_24837_24945 = state_24832__$1;
(statearr_24837_24945[(1)] = (5));

} else {
var statearr_24838_24946 = state_24832__$1;
(statearr_24838_24946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (6))){
var inst_24818 = (state_24832[(8)]);
var inst_24813 = (state_24832[(7)]);
var inst_24818__$1 = cljs.core.async.chan.call(null,(1));
var inst_24819 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24820 = [inst_24813,inst_24818__$1];
var inst_24821 = (new cljs.core.PersistentVector(null,2,(5),inst_24819,inst_24820,null));
var state_24832__$1 = (function (){var statearr_24839 = state_24832;
(statearr_24839[(8)] = inst_24818__$1);

return statearr_24839;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24832__$1,(8),jobs,inst_24821);
} else {
if((state_val_24833 === (3))){
var inst_24830 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24832__$1,inst_24830);
} else {
if((state_val_24833 === (2))){
var state_24832__$1 = state_24832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24832__$1,(4),from);
} else {
if((state_val_24833 === (9))){
var inst_24825 = (state_24832[(2)]);
var state_24832__$1 = (function (){var statearr_24840 = state_24832;
(statearr_24840[(9)] = inst_24825);

return statearr_24840;
})();
var statearr_24841_24947 = state_24832__$1;
(statearr_24841_24947[(2)] = null);

(statearr_24841_24947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (5))){
var inst_24816 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24832__$1 = state_24832;
var statearr_24842_24948 = state_24832__$1;
(statearr_24842_24948[(2)] = inst_24816);

(statearr_24842_24948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (8))){
var inst_24818 = (state_24832[(8)]);
var inst_24823 = (state_24832[(2)]);
var state_24832__$1 = (function (){var statearr_24843 = state_24832;
(statearr_24843[(10)] = inst_24823);

return statearr_24843;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24832__$1,(9),results,inst_24818);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0 = (function (){
var statearr_24844 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24844[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__);

(statearr_24844[(1)] = (1));

return statearr_24844;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1 = (function (state_24832){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_24832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e24845){if((e24845 instanceof Object)){
var ex__24487__auto__ = e24845;
var statearr_24846_24949 = state_24832;
(statearr_24846_24949[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24950 = state_24832;
state_24832 = G__24950;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = function(state_24832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1.call(this,state_24832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_24847 = f__24581__auto__.call(null);
(statearr_24847[(6)] = c__24580__auto___24942);

return statearr_24847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_24885){
var state_val_24886 = (state_24885[(1)]);
if((state_val_24886 === (7))){
var inst_24881 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24887_24951 = state_24885__$1;
(statearr_24887_24951[(2)] = inst_24881);

(statearr_24887_24951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (20))){
var state_24885__$1 = state_24885;
var statearr_24888_24952 = state_24885__$1;
(statearr_24888_24952[(2)] = null);

(statearr_24888_24952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (1))){
var state_24885__$1 = state_24885;
var statearr_24889_24953 = state_24885__$1;
(statearr_24889_24953[(2)] = null);

(statearr_24889_24953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (4))){
var inst_24850 = (state_24885[(7)]);
var inst_24850__$1 = (state_24885[(2)]);
var inst_24851 = (inst_24850__$1 == null);
var state_24885__$1 = (function (){var statearr_24890 = state_24885;
(statearr_24890[(7)] = inst_24850__$1);

return statearr_24890;
})();
if(cljs.core.truth_(inst_24851)){
var statearr_24891_24954 = state_24885__$1;
(statearr_24891_24954[(1)] = (5));

} else {
var statearr_24892_24955 = state_24885__$1;
(statearr_24892_24955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (15))){
var inst_24863 = (state_24885[(8)]);
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24885__$1,(18),to,inst_24863);
} else {
if((state_val_24886 === (21))){
var inst_24876 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24893_24956 = state_24885__$1;
(statearr_24893_24956[(2)] = inst_24876);

(statearr_24893_24956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (13))){
var inst_24878 = (state_24885[(2)]);
var state_24885__$1 = (function (){var statearr_24894 = state_24885;
(statearr_24894[(9)] = inst_24878);

return statearr_24894;
})();
var statearr_24895_24957 = state_24885__$1;
(statearr_24895_24957[(2)] = null);

(statearr_24895_24957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (6))){
var inst_24850 = (state_24885[(7)]);
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24885__$1,(11),inst_24850);
} else {
if((state_val_24886 === (17))){
var inst_24871 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
if(cljs.core.truth_(inst_24871)){
var statearr_24896_24958 = state_24885__$1;
(statearr_24896_24958[(1)] = (19));

} else {
var statearr_24897_24959 = state_24885__$1;
(statearr_24897_24959[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (3))){
var inst_24883 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24885__$1,inst_24883);
} else {
if((state_val_24886 === (12))){
var inst_24860 = (state_24885[(10)]);
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24885__$1,(14),inst_24860);
} else {
if((state_val_24886 === (2))){
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24885__$1,(4),results);
} else {
if((state_val_24886 === (19))){
var state_24885__$1 = state_24885;
var statearr_24898_24960 = state_24885__$1;
(statearr_24898_24960[(2)] = null);

(statearr_24898_24960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (11))){
var inst_24860 = (state_24885[(2)]);
var state_24885__$1 = (function (){var statearr_24899 = state_24885;
(statearr_24899[(10)] = inst_24860);

return statearr_24899;
})();
var statearr_24900_24961 = state_24885__$1;
(statearr_24900_24961[(2)] = null);

(statearr_24900_24961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (9))){
var state_24885__$1 = state_24885;
var statearr_24901_24962 = state_24885__$1;
(statearr_24901_24962[(2)] = null);

(statearr_24901_24962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (5))){
var state_24885__$1 = state_24885;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24902_24963 = state_24885__$1;
(statearr_24902_24963[(1)] = (8));

} else {
var statearr_24903_24964 = state_24885__$1;
(statearr_24903_24964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (14))){
var inst_24865 = (state_24885[(11)]);
var inst_24863 = (state_24885[(8)]);
var inst_24863__$1 = (state_24885[(2)]);
var inst_24864 = (inst_24863__$1 == null);
var inst_24865__$1 = cljs.core.not.call(null,inst_24864);
var state_24885__$1 = (function (){var statearr_24904 = state_24885;
(statearr_24904[(11)] = inst_24865__$1);

(statearr_24904[(8)] = inst_24863__$1);

return statearr_24904;
})();
if(inst_24865__$1){
var statearr_24905_24965 = state_24885__$1;
(statearr_24905_24965[(1)] = (15));

} else {
var statearr_24906_24966 = state_24885__$1;
(statearr_24906_24966[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (16))){
var inst_24865 = (state_24885[(11)]);
var state_24885__$1 = state_24885;
var statearr_24907_24967 = state_24885__$1;
(statearr_24907_24967[(2)] = inst_24865);

(statearr_24907_24967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (10))){
var inst_24857 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24908_24968 = state_24885__$1;
(statearr_24908_24968[(2)] = inst_24857);

(statearr_24908_24968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (18))){
var inst_24868 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24909_24969 = state_24885__$1;
(statearr_24909_24969[(2)] = inst_24868);

(statearr_24909_24969[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (8))){
var inst_24854 = cljs.core.async.close_BANG_.call(null,to);
var state_24885__$1 = state_24885;
var statearr_24910_24970 = state_24885__$1;
(statearr_24910_24970[(2)] = inst_24854);

(statearr_24910_24970[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0 = (function (){
var statearr_24911 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__);

(statearr_24911[(1)] = (1));

return statearr_24911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1 = (function (state_24885){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_24885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e24912){if((e24912 instanceof Object)){
var ex__24487__auto__ = e24912;
var statearr_24913_24971 = state_24885;
(statearr_24913_24971[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24972 = state_24885;
state_24885 = G__24972;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__ = function(state_24885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1.call(this,state_24885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_24914 = f__24581__auto__.call(null);
(statearr_24914[(6)] = c__24580__auto__);

return statearr_24914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24974 = arguments.length;
switch (G__24974) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24977 = arguments.length;
switch (G__24977) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24980 = arguments.length;
switch (G__24980) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24580__auto___25029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25006){
var state_val_25007 = (state_25006[(1)]);
if((state_val_25007 === (7))){
var inst_25002 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
var statearr_25008_25030 = state_25006__$1;
(statearr_25008_25030[(2)] = inst_25002);

(statearr_25008_25030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (1))){
var state_25006__$1 = state_25006;
var statearr_25009_25031 = state_25006__$1;
(statearr_25009_25031[(2)] = null);

(statearr_25009_25031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (4))){
var inst_24983 = (state_25006[(7)]);
var inst_24983__$1 = (state_25006[(2)]);
var inst_24984 = (inst_24983__$1 == null);
var state_25006__$1 = (function (){var statearr_25010 = state_25006;
(statearr_25010[(7)] = inst_24983__$1);

return statearr_25010;
})();
if(cljs.core.truth_(inst_24984)){
var statearr_25011_25032 = state_25006__$1;
(statearr_25011_25032[(1)] = (5));

} else {
var statearr_25012_25033 = state_25006__$1;
(statearr_25012_25033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (13))){
var state_25006__$1 = state_25006;
var statearr_25013_25034 = state_25006__$1;
(statearr_25013_25034[(2)] = null);

(statearr_25013_25034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (6))){
var inst_24983 = (state_25006[(7)]);
var inst_24989 = p.call(null,inst_24983);
var state_25006__$1 = state_25006;
if(cljs.core.truth_(inst_24989)){
var statearr_25014_25035 = state_25006__$1;
(statearr_25014_25035[(1)] = (9));

} else {
var statearr_25015_25036 = state_25006__$1;
(statearr_25015_25036[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (3))){
var inst_25004 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25006__$1,inst_25004);
} else {
if((state_val_25007 === (12))){
var state_25006__$1 = state_25006;
var statearr_25016_25037 = state_25006__$1;
(statearr_25016_25037[(2)] = null);

(statearr_25016_25037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (2))){
var state_25006__$1 = state_25006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25006__$1,(4),ch);
} else {
if((state_val_25007 === (11))){
var inst_24983 = (state_25006[(7)]);
var inst_24993 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25006__$1,(8),inst_24993,inst_24983);
} else {
if((state_val_25007 === (9))){
var state_25006__$1 = state_25006;
var statearr_25017_25038 = state_25006__$1;
(statearr_25017_25038[(2)] = tc);

(statearr_25017_25038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (5))){
var inst_24986 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24987 = cljs.core.async.close_BANG_.call(null,fc);
var state_25006__$1 = (function (){var statearr_25018 = state_25006;
(statearr_25018[(8)] = inst_24986);

return statearr_25018;
})();
var statearr_25019_25039 = state_25006__$1;
(statearr_25019_25039[(2)] = inst_24987);

(statearr_25019_25039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (14))){
var inst_25000 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
var statearr_25020_25040 = state_25006__$1;
(statearr_25020_25040[(2)] = inst_25000);

(statearr_25020_25040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (10))){
var state_25006__$1 = state_25006;
var statearr_25021_25041 = state_25006__$1;
(statearr_25021_25041[(2)] = fc);

(statearr_25021_25041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (8))){
var inst_24995 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
if(cljs.core.truth_(inst_24995)){
var statearr_25022_25042 = state_25006__$1;
(statearr_25022_25042[(1)] = (12));

} else {
var statearr_25023_25043 = state_25006__$1;
(statearr_25023_25043[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_25024 = [null,null,null,null,null,null,null,null,null];
(statearr_25024[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_25024[(1)] = (1));

return statearr_25024;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_25006){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25025){if((e25025 instanceof Object)){
var ex__24487__auto__ = e25025;
var statearr_25026_25044 = state_25006;
(statearr_25026_25044[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25045 = state_25006;
state_25006 = G__25045;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_25006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_25006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25027 = f__24581__auto__.call(null);
(statearr_25027[(6)] = c__24580__auto___25029);

return statearr_25027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25066){
var state_val_25067 = (state_25066[(1)]);
if((state_val_25067 === (7))){
var inst_25062 = (state_25066[(2)]);
var state_25066__$1 = state_25066;
var statearr_25068_25086 = state_25066__$1;
(statearr_25068_25086[(2)] = inst_25062);

(statearr_25068_25086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25067 === (1))){
var inst_25046 = init;
var state_25066__$1 = (function (){var statearr_25069 = state_25066;
(statearr_25069[(7)] = inst_25046);

return statearr_25069;
})();
var statearr_25070_25087 = state_25066__$1;
(statearr_25070_25087[(2)] = null);

(statearr_25070_25087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25067 === (4))){
var inst_25049 = (state_25066[(8)]);
var inst_25049__$1 = (state_25066[(2)]);
var inst_25050 = (inst_25049__$1 == null);
var state_25066__$1 = (function (){var statearr_25071 = state_25066;
(statearr_25071[(8)] = inst_25049__$1);

return statearr_25071;
})();
if(cljs.core.truth_(inst_25050)){
var statearr_25072_25088 = state_25066__$1;
(statearr_25072_25088[(1)] = (5));

} else {
var statearr_25073_25089 = state_25066__$1;
(statearr_25073_25089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25067 === (6))){
var inst_25049 = (state_25066[(8)]);
var inst_25053 = (state_25066[(9)]);
var inst_25046 = (state_25066[(7)]);
var inst_25053__$1 = f.call(null,inst_25046,inst_25049);
var inst_25054 = cljs.core.reduced_QMARK_.call(null,inst_25053__$1);
var state_25066__$1 = (function (){var statearr_25074 = state_25066;
(statearr_25074[(9)] = inst_25053__$1);

return statearr_25074;
})();
if(inst_25054){
var statearr_25075_25090 = state_25066__$1;
(statearr_25075_25090[(1)] = (8));

} else {
var statearr_25076_25091 = state_25066__$1;
(statearr_25076_25091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25067 === (3))){
var inst_25064 = (state_25066[(2)]);
var state_25066__$1 = state_25066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25066__$1,inst_25064);
} else {
if((state_val_25067 === (2))){
var state_25066__$1 = state_25066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25066__$1,(4),ch);
} else {
if((state_val_25067 === (9))){
var inst_25053 = (state_25066[(9)]);
var inst_25046 = inst_25053;
var state_25066__$1 = (function (){var statearr_25077 = state_25066;
(statearr_25077[(7)] = inst_25046);

return statearr_25077;
})();
var statearr_25078_25092 = state_25066__$1;
(statearr_25078_25092[(2)] = null);

(statearr_25078_25092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25067 === (5))){
var inst_25046 = (state_25066[(7)]);
var state_25066__$1 = state_25066;
var statearr_25079_25093 = state_25066__$1;
(statearr_25079_25093[(2)] = inst_25046);

(statearr_25079_25093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25067 === (10))){
var inst_25060 = (state_25066[(2)]);
var state_25066__$1 = state_25066;
var statearr_25080_25094 = state_25066__$1;
(statearr_25080_25094[(2)] = inst_25060);

(statearr_25080_25094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25067 === (8))){
var inst_25053 = (state_25066[(9)]);
var inst_25056 = cljs.core.deref.call(null,inst_25053);
var state_25066__$1 = state_25066;
var statearr_25081_25095 = state_25066__$1;
(statearr_25081_25095[(2)] = inst_25056);

(statearr_25081_25095[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24484__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24484__auto____0 = (function (){
var statearr_25082 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25082[(0)] = cljs$core$async$reduce_$_state_machine__24484__auto__);

(statearr_25082[(1)] = (1));

return statearr_25082;
});
var cljs$core$async$reduce_$_state_machine__24484__auto____1 = (function (state_25066){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25083){if((e25083 instanceof Object)){
var ex__24487__auto__ = e25083;
var statearr_25084_25096 = state_25066;
(statearr_25084_25096[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25097 = state_25066;
state_25066 = G__25097;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24484__auto__ = function(state_25066){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24484__auto____1.call(this,state_25066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24484__auto____0;
cljs$core$async$reduce_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24484__auto____1;
return cljs$core$async$reduce_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25085 = f__24581__auto__.call(null);
(statearr_25085[(6)] = c__24580__auto__);

return statearr_25085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25103){
var state_val_25104 = (state_25103[(1)]);
if((state_val_25104 === (1))){
var inst_25098 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25103__$1,(2),inst_25098);
} else {
if((state_val_25104 === (2))){
var inst_25100 = (state_25103[(2)]);
var inst_25101 = f__$1.call(null,inst_25100);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25103__$1,inst_25101);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24484__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24484__auto____0 = (function (){
var statearr_25105 = [null,null,null,null,null,null,null];
(statearr_25105[(0)] = cljs$core$async$transduce_$_state_machine__24484__auto__);

(statearr_25105[(1)] = (1));

return statearr_25105;
});
var cljs$core$async$transduce_$_state_machine__24484__auto____1 = (function (state_25103){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25106){if((e25106 instanceof Object)){
var ex__24487__auto__ = e25106;
var statearr_25107_25109 = state_25103;
(statearr_25107_25109[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25110 = state_25103;
state_25103 = G__25110;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24484__auto__ = function(state_25103){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24484__auto____1.call(this,state_25103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24484__auto____0;
cljs$core$async$transduce_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24484__auto____1;
return cljs$core$async$transduce_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25108 = f__24581__auto__.call(null);
(statearr_25108[(6)] = c__24580__auto__);

return statearr_25108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25112 = arguments.length;
switch (G__25112) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25137){
var state_val_25138 = (state_25137[(1)]);
if((state_val_25138 === (7))){
var inst_25119 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25139_25160 = state_25137__$1;
(statearr_25139_25160[(2)] = inst_25119);

(statearr_25139_25160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (1))){
var inst_25113 = cljs.core.seq.call(null,coll);
var inst_25114 = inst_25113;
var state_25137__$1 = (function (){var statearr_25140 = state_25137;
(statearr_25140[(7)] = inst_25114);

return statearr_25140;
})();
var statearr_25141_25161 = state_25137__$1;
(statearr_25141_25161[(2)] = null);

(statearr_25141_25161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (4))){
var inst_25114 = (state_25137[(7)]);
var inst_25117 = cljs.core.first.call(null,inst_25114);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25137__$1,(7),ch,inst_25117);
} else {
if((state_val_25138 === (13))){
var inst_25131 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25142_25162 = state_25137__$1;
(statearr_25142_25162[(2)] = inst_25131);

(statearr_25142_25162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (6))){
var inst_25122 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
if(cljs.core.truth_(inst_25122)){
var statearr_25143_25163 = state_25137__$1;
(statearr_25143_25163[(1)] = (8));

} else {
var statearr_25144_25164 = state_25137__$1;
(statearr_25144_25164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (3))){
var inst_25135 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25137__$1,inst_25135);
} else {
if((state_val_25138 === (12))){
var state_25137__$1 = state_25137;
var statearr_25145_25165 = state_25137__$1;
(statearr_25145_25165[(2)] = null);

(statearr_25145_25165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (2))){
var inst_25114 = (state_25137[(7)]);
var state_25137__$1 = state_25137;
if(cljs.core.truth_(inst_25114)){
var statearr_25146_25166 = state_25137__$1;
(statearr_25146_25166[(1)] = (4));

} else {
var statearr_25147_25167 = state_25137__$1;
(statearr_25147_25167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (11))){
var inst_25128 = cljs.core.async.close_BANG_.call(null,ch);
var state_25137__$1 = state_25137;
var statearr_25148_25168 = state_25137__$1;
(statearr_25148_25168[(2)] = inst_25128);

(statearr_25148_25168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (9))){
var state_25137__$1 = state_25137;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25149_25169 = state_25137__$1;
(statearr_25149_25169[(1)] = (11));

} else {
var statearr_25150_25170 = state_25137__$1;
(statearr_25150_25170[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (5))){
var inst_25114 = (state_25137[(7)]);
var state_25137__$1 = state_25137;
var statearr_25151_25171 = state_25137__$1;
(statearr_25151_25171[(2)] = inst_25114);

(statearr_25151_25171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (10))){
var inst_25133 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25152_25172 = state_25137__$1;
(statearr_25152_25172[(2)] = inst_25133);

(statearr_25152_25172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (8))){
var inst_25114 = (state_25137[(7)]);
var inst_25124 = cljs.core.next.call(null,inst_25114);
var inst_25114__$1 = inst_25124;
var state_25137__$1 = (function (){var statearr_25153 = state_25137;
(statearr_25153[(7)] = inst_25114__$1);

return statearr_25153;
})();
var statearr_25154_25173 = state_25137__$1;
(statearr_25154_25173[(2)] = null);

(statearr_25154_25173[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_25155 = [null,null,null,null,null,null,null,null];
(statearr_25155[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_25155[(1)] = (1));

return statearr_25155;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_25137){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25156){if((e25156 instanceof Object)){
var ex__24487__auto__ = e25156;
var statearr_25157_25174 = state_25137;
(statearr_25157_25174[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25175 = state_25137;
state_25137 = G__25175;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_25137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_25137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25158 = f__24581__auto__.call(null);
(statearr_25158[(6)] = c__24580__auto__);

return statearr_25158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_25176 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25176.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25177 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25177.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25178 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25178.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25179 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25179.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25180 = (function (ch,cs,meta25181){
this.ch = ch;
this.cs = cs;
this.meta25181 = meta25181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25182,meta25181__$1){
var self__ = this;
var _25182__$1 = this;
return (new cljs.core.async.t_cljs$core$async25180(self__.ch,self__.cs,meta25181__$1));
}));

(cljs.core.async.t_cljs$core$async25180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25182){
var self__ = this;
var _25182__$1 = this;
return self__.meta25181;
}));

(cljs.core.async.t_cljs$core$async25180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25180.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25180.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25180.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25180.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25181","meta25181",-810611275,null)], null);
}));

(cljs.core.async.t_cljs$core$async25180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25180");

(cljs.core.async.t_cljs$core$async25180.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25180.
 */
cljs.core.async.__GT_t_cljs$core$async25180 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25180(ch__$1,cs__$1,meta25181){
return (new cljs.core.async.t_cljs$core$async25180(ch__$1,cs__$1,meta25181));
});

}

return (new cljs.core.async.t_cljs$core$async25180(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__24580__auto___25402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25317){
var state_val_25318 = (state_25317[(1)]);
if((state_val_25318 === (7))){
var inst_25313 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25319_25403 = state_25317__$1;
(statearr_25319_25403[(2)] = inst_25313);

(statearr_25319_25403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (20))){
var inst_25216 = (state_25317[(7)]);
var inst_25228 = cljs.core.first.call(null,inst_25216);
var inst_25229 = cljs.core.nth.call(null,inst_25228,(0),null);
var inst_25230 = cljs.core.nth.call(null,inst_25228,(1),null);
var state_25317__$1 = (function (){var statearr_25320 = state_25317;
(statearr_25320[(8)] = inst_25229);

return statearr_25320;
})();
if(cljs.core.truth_(inst_25230)){
var statearr_25321_25404 = state_25317__$1;
(statearr_25321_25404[(1)] = (22));

} else {
var statearr_25322_25405 = state_25317__$1;
(statearr_25322_25405[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (27))){
var inst_25258 = (state_25317[(9)]);
var inst_25265 = (state_25317[(10)]);
var inst_25185 = (state_25317[(11)]);
var inst_25260 = (state_25317[(12)]);
var inst_25265__$1 = cljs.core._nth.call(null,inst_25258,inst_25260);
var inst_25266 = cljs.core.async.put_BANG_.call(null,inst_25265__$1,inst_25185,done);
var state_25317__$1 = (function (){var statearr_25323 = state_25317;
(statearr_25323[(10)] = inst_25265__$1);

return statearr_25323;
})();
if(cljs.core.truth_(inst_25266)){
var statearr_25324_25406 = state_25317__$1;
(statearr_25324_25406[(1)] = (30));

} else {
var statearr_25325_25407 = state_25317__$1;
(statearr_25325_25407[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (1))){
var state_25317__$1 = state_25317;
var statearr_25326_25408 = state_25317__$1;
(statearr_25326_25408[(2)] = null);

(statearr_25326_25408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (24))){
var inst_25216 = (state_25317[(7)]);
var inst_25235 = (state_25317[(2)]);
var inst_25236 = cljs.core.next.call(null,inst_25216);
var inst_25194 = inst_25236;
var inst_25195 = null;
var inst_25196 = (0);
var inst_25197 = (0);
var state_25317__$1 = (function (){var statearr_25327 = state_25317;
(statearr_25327[(13)] = inst_25235);

(statearr_25327[(14)] = inst_25196);

(statearr_25327[(15)] = inst_25194);

(statearr_25327[(16)] = inst_25195);

(statearr_25327[(17)] = inst_25197);

return statearr_25327;
})();
var statearr_25328_25409 = state_25317__$1;
(statearr_25328_25409[(2)] = null);

(statearr_25328_25409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (39))){
var state_25317__$1 = state_25317;
var statearr_25332_25410 = state_25317__$1;
(statearr_25332_25410[(2)] = null);

(statearr_25332_25410[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (4))){
var inst_25185 = (state_25317[(11)]);
var inst_25185__$1 = (state_25317[(2)]);
var inst_25186 = (inst_25185__$1 == null);
var state_25317__$1 = (function (){var statearr_25333 = state_25317;
(statearr_25333[(11)] = inst_25185__$1);

return statearr_25333;
})();
if(cljs.core.truth_(inst_25186)){
var statearr_25334_25411 = state_25317__$1;
(statearr_25334_25411[(1)] = (5));

} else {
var statearr_25335_25412 = state_25317__$1;
(statearr_25335_25412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (15))){
var inst_25196 = (state_25317[(14)]);
var inst_25194 = (state_25317[(15)]);
var inst_25195 = (state_25317[(16)]);
var inst_25197 = (state_25317[(17)]);
var inst_25212 = (state_25317[(2)]);
var inst_25213 = (inst_25197 + (1));
var tmp25329 = inst_25196;
var tmp25330 = inst_25194;
var tmp25331 = inst_25195;
var inst_25194__$1 = tmp25330;
var inst_25195__$1 = tmp25331;
var inst_25196__$1 = tmp25329;
var inst_25197__$1 = inst_25213;
var state_25317__$1 = (function (){var statearr_25336 = state_25317;
(statearr_25336[(14)] = inst_25196__$1);

(statearr_25336[(15)] = inst_25194__$1);

(statearr_25336[(16)] = inst_25195__$1);

(statearr_25336[(17)] = inst_25197__$1);

(statearr_25336[(18)] = inst_25212);

return statearr_25336;
})();
var statearr_25337_25413 = state_25317__$1;
(statearr_25337_25413[(2)] = null);

(statearr_25337_25413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (21))){
var inst_25239 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25341_25414 = state_25317__$1;
(statearr_25341_25414[(2)] = inst_25239);

(statearr_25341_25414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (31))){
var inst_25265 = (state_25317[(10)]);
var inst_25269 = done.call(null,null);
var inst_25270 = cljs.core.async.untap_STAR_.call(null,m,inst_25265);
var state_25317__$1 = (function (){var statearr_25342 = state_25317;
(statearr_25342[(19)] = inst_25269);

return statearr_25342;
})();
var statearr_25343_25415 = state_25317__$1;
(statearr_25343_25415[(2)] = inst_25270);

(statearr_25343_25415[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (32))){
var inst_25257 = (state_25317[(20)]);
var inst_25259 = (state_25317[(21)]);
var inst_25258 = (state_25317[(9)]);
var inst_25260 = (state_25317[(12)]);
var inst_25272 = (state_25317[(2)]);
var inst_25273 = (inst_25260 + (1));
var tmp25338 = inst_25257;
var tmp25339 = inst_25259;
var tmp25340 = inst_25258;
var inst_25257__$1 = tmp25338;
var inst_25258__$1 = tmp25340;
var inst_25259__$1 = tmp25339;
var inst_25260__$1 = inst_25273;
var state_25317__$1 = (function (){var statearr_25344 = state_25317;
(statearr_25344[(20)] = inst_25257__$1);

(statearr_25344[(21)] = inst_25259__$1);

(statearr_25344[(9)] = inst_25258__$1);

(statearr_25344[(22)] = inst_25272);

(statearr_25344[(12)] = inst_25260__$1);

return statearr_25344;
})();
var statearr_25345_25416 = state_25317__$1;
(statearr_25345_25416[(2)] = null);

(statearr_25345_25416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (40))){
var inst_25285 = (state_25317[(23)]);
var inst_25289 = done.call(null,null);
var inst_25290 = cljs.core.async.untap_STAR_.call(null,m,inst_25285);
var state_25317__$1 = (function (){var statearr_25346 = state_25317;
(statearr_25346[(24)] = inst_25289);

return statearr_25346;
})();
var statearr_25347_25417 = state_25317__$1;
(statearr_25347_25417[(2)] = inst_25290);

(statearr_25347_25417[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (33))){
var inst_25276 = (state_25317[(25)]);
var inst_25278 = cljs.core.chunked_seq_QMARK_.call(null,inst_25276);
var state_25317__$1 = state_25317;
if(inst_25278){
var statearr_25348_25418 = state_25317__$1;
(statearr_25348_25418[(1)] = (36));

} else {
var statearr_25349_25419 = state_25317__$1;
(statearr_25349_25419[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (13))){
var inst_25206 = (state_25317[(26)]);
var inst_25209 = cljs.core.async.close_BANG_.call(null,inst_25206);
var state_25317__$1 = state_25317;
var statearr_25350_25420 = state_25317__$1;
(statearr_25350_25420[(2)] = inst_25209);

(statearr_25350_25420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (22))){
var inst_25229 = (state_25317[(8)]);
var inst_25232 = cljs.core.async.close_BANG_.call(null,inst_25229);
var state_25317__$1 = state_25317;
var statearr_25351_25421 = state_25317__$1;
(statearr_25351_25421[(2)] = inst_25232);

(statearr_25351_25421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (36))){
var inst_25276 = (state_25317[(25)]);
var inst_25280 = cljs.core.chunk_first.call(null,inst_25276);
var inst_25281 = cljs.core.chunk_rest.call(null,inst_25276);
var inst_25282 = cljs.core.count.call(null,inst_25280);
var inst_25257 = inst_25281;
var inst_25258 = inst_25280;
var inst_25259 = inst_25282;
var inst_25260 = (0);
var state_25317__$1 = (function (){var statearr_25352 = state_25317;
(statearr_25352[(20)] = inst_25257);

(statearr_25352[(21)] = inst_25259);

(statearr_25352[(9)] = inst_25258);

(statearr_25352[(12)] = inst_25260);

return statearr_25352;
})();
var statearr_25353_25422 = state_25317__$1;
(statearr_25353_25422[(2)] = null);

(statearr_25353_25422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (41))){
var inst_25276 = (state_25317[(25)]);
var inst_25292 = (state_25317[(2)]);
var inst_25293 = cljs.core.next.call(null,inst_25276);
var inst_25257 = inst_25293;
var inst_25258 = null;
var inst_25259 = (0);
var inst_25260 = (0);
var state_25317__$1 = (function (){var statearr_25354 = state_25317;
(statearr_25354[(20)] = inst_25257);

(statearr_25354[(21)] = inst_25259);

(statearr_25354[(9)] = inst_25258);

(statearr_25354[(27)] = inst_25292);

(statearr_25354[(12)] = inst_25260);

return statearr_25354;
})();
var statearr_25355_25423 = state_25317__$1;
(statearr_25355_25423[(2)] = null);

(statearr_25355_25423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (43))){
var state_25317__$1 = state_25317;
var statearr_25356_25424 = state_25317__$1;
(statearr_25356_25424[(2)] = null);

(statearr_25356_25424[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (29))){
var inst_25301 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25357_25425 = state_25317__$1;
(statearr_25357_25425[(2)] = inst_25301);

(statearr_25357_25425[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (44))){
var inst_25310 = (state_25317[(2)]);
var state_25317__$1 = (function (){var statearr_25358 = state_25317;
(statearr_25358[(28)] = inst_25310);

return statearr_25358;
})();
var statearr_25359_25426 = state_25317__$1;
(statearr_25359_25426[(2)] = null);

(statearr_25359_25426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (6))){
var inst_25249 = (state_25317[(29)]);
var inst_25248 = cljs.core.deref.call(null,cs);
var inst_25249__$1 = cljs.core.keys.call(null,inst_25248);
var inst_25250 = cljs.core.count.call(null,inst_25249__$1);
var inst_25251 = cljs.core.reset_BANG_.call(null,dctr,inst_25250);
var inst_25256 = cljs.core.seq.call(null,inst_25249__$1);
var inst_25257 = inst_25256;
var inst_25258 = null;
var inst_25259 = (0);
var inst_25260 = (0);
var state_25317__$1 = (function (){var statearr_25360 = state_25317;
(statearr_25360[(20)] = inst_25257);

(statearr_25360[(21)] = inst_25259);

(statearr_25360[(9)] = inst_25258);

(statearr_25360[(12)] = inst_25260);

(statearr_25360[(30)] = inst_25251);

(statearr_25360[(29)] = inst_25249__$1);

return statearr_25360;
})();
var statearr_25361_25427 = state_25317__$1;
(statearr_25361_25427[(2)] = null);

(statearr_25361_25427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (28))){
var inst_25257 = (state_25317[(20)]);
var inst_25276 = (state_25317[(25)]);
var inst_25276__$1 = cljs.core.seq.call(null,inst_25257);
var state_25317__$1 = (function (){var statearr_25362 = state_25317;
(statearr_25362[(25)] = inst_25276__$1);

return statearr_25362;
})();
if(inst_25276__$1){
var statearr_25363_25428 = state_25317__$1;
(statearr_25363_25428[(1)] = (33));

} else {
var statearr_25364_25429 = state_25317__$1;
(statearr_25364_25429[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (25))){
var inst_25259 = (state_25317[(21)]);
var inst_25260 = (state_25317[(12)]);
var inst_25262 = (inst_25260 < inst_25259);
var inst_25263 = inst_25262;
var state_25317__$1 = state_25317;
if(cljs.core.truth_(inst_25263)){
var statearr_25365_25430 = state_25317__$1;
(statearr_25365_25430[(1)] = (27));

} else {
var statearr_25366_25431 = state_25317__$1;
(statearr_25366_25431[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (34))){
var state_25317__$1 = state_25317;
var statearr_25367_25432 = state_25317__$1;
(statearr_25367_25432[(2)] = null);

(statearr_25367_25432[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (17))){
var state_25317__$1 = state_25317;
var statearr_25368_25433 = state_25317__$1;
(statearr_25368_25433[(2)] = null);

(statearr_25368_25433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (3))){
var inst_25315 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25317__$1,inst_25315);
} else {
if((state_val_25318 === (12))){
var inst_25244 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25369_25434 = state_25317__$1;
(statearr_25369_25434[(2)] = inst_25244);

(statearr_25369_25434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (2))){
var state_25317__$1 = state_25317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25317__$1,(4),ch);
} else {
if((state_val_25318 === (23))){
var state_25317__$1 = state_25317;
var statearr_25370_25435 = state_25317__$1;
(statearr_25370_25435[(2)] = null);

(statearr_25370_25435[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (35))){
var inst_25299 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25371_25436 = state_25317__$1;
(statearr_25371_25436[(2)] = inst_25299);

(statearr_25371_25436[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (19))){
var inst_25216 = (state_25317[(7)]);
var inst_25220 = cljs.core.chunk_first.call(null,inst_25216);
var inst_25221 = cljs.core.chunk_rest.call(null,inst_25216);
var inst_25222 = cljs.core.count.call(null,inst_25220);
var inst_25194 = inst_25221;
var inst_25195 = inst_25220;
var inst_25196 = inst_25222;
var inst_25197 = (0);
var state_25317__$1 = (function (){var statearr_25372 = state_25317;
(statearr_25372[(14)] = inst_25196);

(statearr_25372[(15)] = inst_25194);

(statearr_25372[(16)] = inst_25195);

(statearr_25372[(17)] = inst_25197);

return statearr_25372;
})();
var statearr_25373_25437 = state_25317__$1;
(statearr_25373_25437[(2)] = null);

(statearr_25373_25437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (11))){
var inst_25216 = (state_25317[(7)]);
var inst_25194 = (state_25317[(15)]);
var inst_25216__$1 = cljs.core.seq.call(null,inst_25194);
var state_25317__$1 = (function (){var statearr_25374 = state_25317;
(statearr_25374[(7)] = inst_25216__$1);

return statearr_25374;
})();
if(inst_25216__$1){
var statearr_25375_25438 = state_25317__$1;
(statearr_25375_25438[(1)] = (16));

} else {
var statearr_25376_25439 = state_25317__$1;
(statearr_25376_25439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (9))){
var inst_25246 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25377_25440 = state_25317__$1;
(statearr_25377_25440[(2)] = inst_25246);

(statearr_25377_25440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (5))){
var inst_25192 = cljs.core.deref.call(null,cs);
var inst_25193 = cljs.core.seq.call(null,inst_25192);
var inst_25194 = inst_25193;
var inst_25195 = null;
var inst_25196 = (0);
var inst_25197 = (0);
var state_25317__$1 = (function (){var statearr_25378 = state_25317;
(statearr_25378[(14)] = inst_25196);

(statearr_25378[(15)] = inst_25194);

(statearr_25378[(16)] = inst_25195);

(statearr_25378[(17)] = inst_25197);

return statearr_25378;
})();
var statearr_25379_25441 = state_25317__$1;
(statearr_25379_25441[(2)] = null);

(statearr_25379_25441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (14))){
var state_25317__$1 = state_25317;
var statearr_25380_25442 = state_25317__$1;
(statearr_25380_25442[(2)] = null);

(statearr_25380_25442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (45))){
var inst_25307 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25381_25443 = state_25317__$1;
(statearr_25381_25443[(2)] = inst_25307);

(statearr_25381_25443[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (26))){
var inst_25249 = (state_25317[(29)]);
var inst_25303 = (state_25317[(2)]);
var inst_25304 = cljs.core.seq.call(null,inst_25249);
var state_25317__$1 = (function (){var statearr_25382 = state_25317;
(statearr_25382[(31)] = inst_25303);

return statearr_25382;
})();
if(inst_25304){
var statearr_25383_25444 = state_25317__$1;
(statearr_25383_25444[(1)] = (42));

} else {
var statearr_25384_25445 = state_25317__$1;
(statearr_25384_25445[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (16))){
var inst_25216 = (state_25317[(7)]);
var inst_25218 = cljs.core.chunked_seq_QMARK_.call(null,inst_25216);
var state_25317__$1 = state_25317;
if(inst_25218){
var statearr_25385_25446 = state_25317__$1;
(statearr_25385_25446[(1)] = (19));

} else {
var statearr_25386_25447 = state_25317__$1;
(statearr_25386_25447[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (38))){
var inst_25296 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25387_25448 = state_25317__$1;
(statearr_25387_25448[(2)] = inst_25296);

(statearr_25387_25448[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (30))){
var state_25317__$1 = state_25317;
var statearr_25388_25449 = state_25317__$1;
(statearr_25388_25449[(2)] = null);

(statearr_25388_25449[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (10))){
var inst_25195 = (state_25317[(16)]);
var inst_25197 = (state_25317[(17)]);
var inst_25205 = cljs.core._nth.call(null,inst_25195,inst_25197);
var inst_25206 = cljs.core.nth.call(null,inst_25205,(0),null);
var inst_25207 = cljs.core.nth.call(null,inst_25205,(1),null);
var state_25317__$1 = (function (){var statearr_25389 = state_25317;
(statearr_25389[(26)] = inst_25206);

return statearr_25389;
})();
if(cljs.core.truth_(inst_25207)){
var statearr_25390_25450 = state_25317__$1;
(statearr_25390_25450[(1)] = (13));

} else {
var statearr_25391_25451 = state_25317__$1;
(statearr_25391_25451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (18))){
var inst_25242 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25392_25452 = state_25317__$1;
(statearr_25392_25452[(2)] = inst_25242);

(statearr_25392_25452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (42))){
var state_25317__$1 = state_25317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25317__$1,(45),dchan);
} else {
if((state_val_25318 === (37))){
var inst_25276 = (state_25317[(25)]);
var inst_25185 = (state_25317[(11)]);
var inst_25285 = (state_25317[(23)]);
var inst_25285__$1 = cljs.core.first.call(null,inst_25276);
var inst_25286 = cljs.core.async.put_BANG_.call(null,inst_25285__$1,inst_25185,done);
var state_25317__$1 = (function (){var statearr_25393 = state_25317;
(statearr_25393[(23)] = inst_25285__$1);

return statearr_25393;
})();
if(cljs.core.truth_(inst_25286)){
var statearr_25394_25453 = state_25317__$1;
(statearr_25394_25453[(1)] = (39));

} else {
var statearr_25395_25454 = state_25317__$1;
(statearr_25395_25454[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (8))){
var inst_25196 = (state_25317[(14)]);
var inst_25197 = (state_25317[(17)]);
var inst_25199 = (inst_25197 < inst_25196);
var inst_25200 = inst_25199;
var state_25317__$1 = state_25317;
if(cljs.core.truth_(inst_25200)){
var statearr_25396_25455 = state_25317__$1;
(statearr_25396_25455[(1)] = (10));

} else {
var statearr_25397_25456 = state_25317__$1;
(statearr_25397_25456[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24484__auto__ = null;
var cljs$core$async$mult_$_state_machine__24484__auto____0 = (function (){
var statearr_25398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25398[(0)] = cljs$core$async$mult_$_state_machine__24484__auto__);

(statearr_25398[(1)] = (1));

return statearr_25398;
});
var cljs$core$async$mult_$_state_machine__24484__auto____1 = (function (state_25317){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25399){if((e25399 instanceof Object)){
var ex__24487__auto__ = e25399;
var statearr_25400_25457 = state_25317;
(statearr_25400_25457[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25458 = state_25317;
state_25317 = G__25458;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24484__auto__ = function(state_25317){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24484__auto____1.call(this,state_25317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24484__auto____0;
cljs$core$async$mult_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24484__auto____1;
return cljs$core$async$mult_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25401 = f__24581__auto__.call(null);
(statearr_25401[(6)] = c__24580__auto___25402);

return statearr_25401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25460 = arguments.length;
switch (G__25460) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_25462 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25462.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25463 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25463.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25464 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25464.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25465 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,state_map);
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25465.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25466 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,mode);
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25466.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25476 = arguments.length;
var i__5770__auto___25477 = (0);
while(true){
if((i__5770__auto___25477 < len__5769__auto___25476)){
args__5775__auto__.push((arguments[i__5770__auto___25477]));

var G__25478 = (i__5770__auto___25477 + (1));
i__5770__auto___25477 = G__25478;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25471){
var map__25472 = p__25471;
var map__25472__$1 = cljs.core.__destructure_map.call(null,map__25472);
var opts = map__25472__$1;
var statearr_25473_25479 = state;
(statearr_25473_25479[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25474_25480 = state;
(statearr_25474_25480[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_25475_25481 = state;
(statearr_25475_25481[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25467){
var G__25468 = cljs.core.first.call(null,seq25467);
var seq25467__$1 = cljs.core.next.call(null,seq25467);
var G__25469 = cljs.core.first.call(null,seq25467__$1);
var seq25467__$2 = cljs.core.next.call(null,seq25467__$1);
var G__25470 = cljs.core.first.call(null,seq25467__$2);
var seq25467__$3 = cljs.core.next.call(null,seq25467__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25468,G__25469,G__25470,seq25467__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25482 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25483){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25483 = meta25483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25484,meta25483__$1){
var self__ = this;
var _25484__$1 = this;
return (new cljs.core.async.t_cljs$core$async25482(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25483__$1));
}));

(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25484){
var self__ = this;
var _25484__$1 = this;
return self__.meta25483;
}));

(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25482.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25483","meta25483",-1084886592,null)], null);
}));

(cljs.core.async.t_cljs$core$async25482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25482");

(cljs.core.async.t_cljs$core$async25482.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25482.
 */
cljs.core.async.__GT_t_cljs$core$async25482 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25482(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25483){
return (new cljs.core.async.t_cljs$core$async25482(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25483));
});

}

return (new cljs.core.async.t_cljs$core$async25482(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24580__auto___25596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25552){
var state_val_25553 = (state_25552[(1)]);
if((state_val_25553 === (7))){
var inst_25512 = (state_25552[(2)]);
var state_25552__$1 = state_25552;
if(cljs.core.truth_(inst_25512)){
var statearr_25554_25597 = state_25552__$1;
(statearr_25554_25597[(1)] = (8));

} else {
var statearr_25555_25598 = state_25552__$1;
(statearr_25555_25598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (20))){
var inst_25505 = (state_25552[(7)]);
var state_25552__$1 = state_25552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25552__$1,(23),out,inst_25505);
} else {
if((state_val_25553 === (1))){
var inst_25488 = calc_state.call(null);
var inst_25489 = cljs.core.__destructure_map.call(null,inst_25488);
var inst_25490 = cljs.core.get.call(null,inst_25489,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25491 = cljs.core.get.call(null,inst_25489,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25492 = cljs.core.get.call(null,inst_25489,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25493 = inst_25488;
var state_25552__$1 = (function (){var statearr_25556 = state_25552;
(statearr_25556[(8)] = inst_25493);

(statearr_25556[(9)] = inst_25491);

(statearr_25556[(10)] = inst_25490);

(statearr_25556[(11)] = inst_25492);

return statearr_25556;
})();
var statearr_25557_25599 = state_25552__$1;
(statearr_25557_25599[(2)] = null);

(statearr_25557_25599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (24))){
var inst_25496 = (state_25552[(12)]);
var inst_25493 = inst_25496;
var state_25552__$1 = (function (){var statearr_25558 = state_25552;
(statearr_25558[(8)] = inst_25493);

return statearr_25558;
})();
var statearr_25559_25600 = state_25552__$1;
(statearr_25559_25600[(2)] = null);

(statearr_25559_25600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (4))){
var inst_25507 = (state_25552[(13)]);
var inst_25505 = (state_25552[(7)]);
var inst_25504 = (state_25552[(2)]);
var inst_25505__$1 = cljs.core.nth.call(null,inst_25504,(0),null);
var inst_25506 = cljs.core.nth.call(null,inst_25504,(1),null);
var inst_25507__$1 = (inst_25505__$1 == null);
var state_25552__$1 = (function (){var statearr_25560 = state_25552;
(statearr_25560[(13)] = inst_25507__$1);

(statearr_25560[(7)] = inst_25505__$1);

(statearr_25560[(14)] = inst_25506);

return statearr_25560;
})();
if(cljs.core.truth_(inst_25507__$1)){
var statearr_25561_25601 = state_25552__$1;
(statearr_25561_25601[(1)] = (5));

} else {
var statearr_25562_25602 = state_25552__$1;
(statearr_25562_25602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (15))){
var inst_25526 = (state_25552[(15)]);
var inst_25497 = (state_25552[(16)]);
var inst_25526__$1 = cljs.core.empty_QMARK_.call(null,inst_25497);
var state_25552__$1 = (function (){var statearr_25563 = state_25552;
(statearr_25563[(15)] = inst_25526__$1);

return statearr_25563;
})();
if(inst_25526__$1){
var statearr_25564_25603 = state_25552__$1;
(statearr_25564_25603[(1)] = (17));

} else {
var statearr_25565_25604 = state_25552__$1;
(statearr_25565_25604[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (21))){
var inst_25496 = (state_25552[(12)]);
var inst_25493 = inst_25496;
var state_25552__$1 = (function (){var statearr_25566 = state_25552;
(statearr_25566[(8)] = inst_25493);

return statearr_25566;
})();
var statearr_25567_25605 = state_25552__$1;
(statearr_25567_25605[(2)] = null);

(statearr_25567_25605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (13))){
var inst_25519 = (state_25552[(2)]);
var inst_25520 = calc_state.call(null);
var inst_25493 = inst_25520;
var state_25552__$1 = (function (){var statearr_25568 = state_25552;
(statearr_25568[(8)] = inst_25493);

(statearr_25568[(17)] = inst_25519);

return statearr_25568;
})();
var statearr_25569_25606 = state_25552__$1;
(statearr_25569_25606[(2)] = null);

(statearr_25569_25606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (22))){
var inst_25546 = (state_25552[(2)]);
var state_25552__$1 = state_25552;
var statearr_25570_25607 = state_25552__$1;
(statearr_25570_25607[(2)] = inst_25546);

(statearr_25570_25607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (6))){
var inst_25506 = (state_25552[(14)]);
var inst_25510 = cljs.core._EQ_.call(null,inst_25506,change);
var state_25552__$1 = state_25552;
var statearr_25571_25608 = state_25552__$1;
(statearr_25571_25608[(2)] = inst_25510);

(statearr_25571_25608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (25))){
var state_25552__$1 = state_25552;
var statearr_25572_25609 = state_25552__$1;
(statearr_25572_25609[(2)] = null);

(statearr_25572_25609[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (17))){
var inst_25498 = (state_25552[(18)]);
var inst_25506 = (state_25552[(14)]);
var inst_25528 = inst_25498.call(null,inst_25506);
var inst_25529 = cljs.core.not.call(null,inst_25528);
var state_25552__$1 = state_25552;
var statearr_25573_25610 = state_25552__$1;
(statearr_25573_25610[(2)] = inst_25529);

(statearr_25573_25610[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (3))){
var inst_25550 = (state_25552[(2)]);
var state_25552__$1 = state_25552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25552__$1,inst_25550);
} else {
if((state_val_25553 === (12))){
var state_25552__$1 = state_25552;
var statearr_25574_25611 = state_25552__$1;
(statearr_25574_25611[(2)] = null);

(statearr_25574_25611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (2))){
var inst_25493 = (state_25552[(8)]);
var inst_25496 = (state_25552[(12)]);
var inst_25496__$1 = cljs.core.__destructure_map.call(null,inst_25493);
var inst_25497 = cljs.core.get.call(null,inst_25496__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25498 = cljs.core.get.call(null,inst_25496__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25499 = cljs.core.get.call(null,inst_25496__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25552__$1 = (function (){var statearr_25575 = state_25552;
(statearr_25575[(18)] = inst_25498);

(statearr_25575[(16)] = inst_25497);

(statearr_25575[(12)] = inst_25496__$1);

return statearr_25575;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25552__$1,(4),inst_25499);
} else {
if((state_val_25553 === (23))){
var inst_25537 = (state_25552[(2)]);
var state_25552__$1 = state_25552;
if(cljs.core.truth_(inst_25537)){
var statearr_25576_25612 = state_25552__$1;
(statearr_25576_25612[(1)] = (24));

} else {
var statearr_25577_25613 = state_25552__$1;
(statearr_25577_25613[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (19))){
var inst_25532 = (state_25552[(2)]);
var state_25552__$1 = state_25552;
var statearr_25578_25614 = state_25552__$1;
(statearr_25578_25614[(2)] = inst_25532);

(statearr_25578_25614[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (11))){
var inst_25506 = (state_25552[(14)]);
var inst_25516 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25506);
var state_25552__$1 = state_25552;
var statearr_25579_25615 = state_25552__$1;
(statearr_25579_25615[(2)] = inst_25516);

(statearr_25579_25615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (9))){
var inst_25523 = (state_25552[(19)]);
var inst_25497 = (state_25552[(16)]);
var inst_25506 = (state_25552[(14)]);
var inst_25523__$1 = inst_25497.call(null,inst_25506);
var state_25552__$1 = (function (){var statearr_25580 = state_25552;
(statearr_25580[(19)] = inst_25523__$1);

return statearr_25580;
})();
if(cljs.core.truth_(inst_25523__$1)){
var statearr_25581_25616 = state_25552__$1;
(statearr_25581_25616[(1)] = (14));

} else {
var statearr_25582_25617 = state_25552__$1;
(statearr_25582_25617[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (5))){
var inst_25507 = (state_25552[(13)]);
var state_25552__$1 = state_25552;
var statearr_25583_25618 = state_25552__$1;
(statearr_25583_25618[(2)] = inst_25507);

(statearr_25583_25618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (14))){
var inst_25523 = (state_25552[(19)]);
var state_25552__$1 = state_25552;
var statearr_25584_25619 = state_25552__$1;
(statearr_25584_25619[(2)] = inst_25523);

(statearr_25584_25619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (26))){
var inst_25542 = (state_25552[(2)]);
var state_25552__$1 = state_25552;
var statearr_25585_25620 = state_25552__$1;
(statearr_25585_25620[(2)] = inst_25542);

(statearr_25585_25620[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (16))){
var inst_25534 = (state_25552[(2)]);
var state_25552__$1 = state_25552;
if(cljs.core.truth_(inst_25534)){
var statearr_25586_25621 = state_25552__$1;
(statearr_25586_25621[(1)] = (20));

} else {
var statearr_25587_25622 = state_25552__$1;
(statearr_25587_25622[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (10))){
var inst_25548 = (state_25552[(2)]);
var state_25552__$1 = state_25552;
var statearr_25588_25623 = state_25552__$1;
(statearr_25588_25623[(2)] = inst_25548);

(statearr_25588_25623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (18))){
var inst_25526 = (state_25552[(15)]);
var state_25552__$1 = state_25552;
var statearr_25589_25624 = state_25552__$1;
(statearr_25589_25624[(2)] = inst_25526);

(statearr_25589_25624[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25553 === (8))){
var inst_25505 = (state_25552[(7)]);
var inst_25514 = (inst_25505 == null);
var state_25552__$1 = state_25552;
if(cljs.core.truth_(inst_25514)){
var statearr_25590_25625 = state_25552__$1;
(statearr_25590_25625[(1)] = (11));

} else {
var statearr_25591_25626 = state_25552__$1;
(statearr_25591_25626[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__24484__auto__ = null;
var cljs$core$async$mix_$_state_machine__24484__auto____0 = (function (){
var statearr_25592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25592[(0)] = cljs$core$async$mix_$_state_machine__24484__auto__);

(statearr_25592[(1)] = (1));

return statearr_25592;
});
var cljs$core$async$mix_$_state_machine__24484__auto____1 = (function (state_25552){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25593){if((e25593 instanceof Object)){
var ex__24487__auto__ = e25593;
var statearr_25594_25627 = state_25552;
(statearr_25594_25627[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25628 = state_25552;
state_25552 = G__25628;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24484__auto__ = function(state_25552){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24484__auto____1.call(this,state_25552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24484__auto____0;
cljs$core$async$mix_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24484__auto____1;
return cljs$core$async$mix_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25595 = f__24581__auto__.call(null);
(statearr_25595[(6)] = c__24580__auto___25596);

return statearr_25595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_25631 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_25631.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25632 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_25632.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25633 = (function() {
var G__25634 = null;
var G__25634__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__25634__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__25634 = function(p,v){
switch(arguments.length){
case 1:
return G__25634__1.call(this,p);
case 2:
return G__25634__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25634.cljs$core$IFn$_invoke$arity$1 = G__25634__1;
G__25634.cljs$core$IFn$_invoke$arity$2 = G__25634__2;
return G__25634;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25630 = arguments.length;
switch (G__25630) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25633.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25633.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25638 = arguments.length;
switch (G__25638) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__25636_SHARP_){
if(cljs.core.truth_(p1__25636_SHARP_.call(null,topic))){
return p1__25636_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25636_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25639 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25640){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25640 = meta25640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25641,meta25640__$1){
var self__ = this;
var _25641__$1 = this;
return (new cljs.core.async.t_cljs$core$async25639(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25640__$1));
}));

(cljs.core.async.t_cljs$core$async25639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25641){
var self__ = this;
var _25641__$1 = this;
return self__.meta25640;
}));

(cljs.core.async.t_cljs$core$async25639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25639.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25639.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25639.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async25639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25640","meta25640",-2139073837,null)], null);
}));

(cljs.core.async.t_cljs$core$async25639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25639");

(cljs.core.async.t_cljs$core$async25639.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25639.
 */
cljs.core.async.__GT_t_cljs$core$async25639 = (function cljs$core$async$__GT_t_cljs$core$async25639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25640){
return (new cljs.core.async.t_cljs$core$async25639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25640));
});

}

return (new cljs.core.async.t_cljs$core$async25639(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24580__auto___25759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25713){
var state_val_25714 = (state_25713[(1)]);
if((state_val_25714 === (7))){
var inst_25709 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
var statearr_25715_25760 = state_25713__$1;
(statearr_25715_25760[(2)] = inst_25709);

(statearr_25715_25760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (20))){
var state_25713__$1 = state_25713;
var statearr_25716_25761 = state_25713__$1;
(statearr_25716_25761[(2)] = null);

(statearr_25716_25761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (1))){
var state_25713__$1 = state_25713;
var statearr_25717_25762 = state_25713__$1;
(statearr_25717_25762[(2)] = null);

(statearr_25717_25762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (24))){
var inst_25692 = (state_25713[(7)]);
var inst_25701 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25692);
var state_25713__$1 = state_25713;
var statearr_25718_25763 = state_25713__$1;
(statearr_25718_25763[(2)] = inst_25701);

(statearr_25718_25763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (4))){
var inst_25644 = (state_25713[(8)]);
var inst_25644__$1 = (state_25713[(2)]);
var inst_25645 = (inst_25644__$1 == null);
var state_25713__$1 = (function (){var statearr_25719 = state_25713;
(statearr_25719[(8)] = inst_25644__$1);

return statearr_25719;
})();
if(cljs.core.truth_(inst_25645)){
var statearr_25720_25764 = state_25713__$1;
(statearr_25720_25764[(1)] = (5));

} else {
var statearr_25721_25765 = state_25713__$1;
(statearr_25721_25765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (15))){
var inst_25686 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
var statearr_25722_25766 = state_25713__$1;
(statearr_25722_25766[(2)] = inst_25686);

(statearr_25722_25766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (21))){
var inst_25706 = (state_25713[(2)]);
var state_25713__$1 = (function (){var statearr_25723 = state_25713;
(statearr_25723[(9)] = inst_25706);

return statearr_25723;
})();
var statearr_25724_25767 = state_25713__$1;
(statearr_25724_25767[(2)] = null);

(statearr_25724_25767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (13))){
var inst_25668 = (state_25713[(10)]);
var inst_25670 = cljs.core.chunked_seq_QMARK_.call(null,inst_25668);
var state_25713__$1 = state_25713;
if(inst_25670){
var statearr_25725_25768 = state_25713__$1;
(statearr_25725_25768[(1)] = (16));

} else {
var statearr_25726_25769 = state_25713__$1;
(statearr_25726_25769[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (22))){
var inst_25698 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
if(cljs.core.truth_(inst_25698)){
var statearr_25727_25770 = state_25713__$1;
(statearr_25727_25770[(1)] = (23));

} else {
var statearr_25728_25771 = state_25713__$1;
(statearr_25728_25771[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (6))){
var inst_25692 = (state_25713[(7)]);
var inst_25644 = (state_25713[(8)]);
var inst_25694 = (state_25713[(11)]);
var inst_25692__$1 = topic_fn.call(null,inst_25644);
var inst_25693 = cljs.core.deref.call(null,mults);
var inst_25694__$1 = cljs.core.get.call(null,inst_25693,inst_25692__$1);
var state_25713__$1 = (function (){var statearr_25729 = state_25713;
(statearr_25729[(7)] = inst_25692__$1);

(statearr_25729[(11)] = inst_25694__$1);

return statearr_25729;
})();
if(cljs.core.truth_(inst_25694__$1)){
var statearr_25730_25772 = state_25713__$1;
(statearr_25730_25772[(1)] = (19));

} else {
var statearr_25731_25773 = state_25713__$1;
(statearr_25731_25773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (25))){
var inst_25703 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
var statearr_25732_25774 = state_25713__$1;
(statearr_25732_25774[(2)] = inst_25703);

(statearr_25732_25774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (17))){
var inst_25668 = (state_25713[(10)]);
var inst_25677 = cljs.core.first.call(null,inst_25668);
var inst_25678 = cljs.core.async.muxch_STAR_.call(null,inst_25677);
var inst_25679 = cljs.core.async.close_BANG_.call(null,inst_25678);
var inst_25680 = cljs.core.next.call(null,inst_25668);
var inst_25654 = inst_25680;
var inst_25655 = null;
var inst_25656 = (0);
var inst_25657 = (0);
var state_25713__$1 = (function (){var statearr_25733 = state_25713;
(statearr_25733[(12)] = inst_25679);

(statearr_25733[(13)] = inst_25657);

(statearr_25733[(14)] = inst_25655);

(statearr_25733[(15)] = inst_25654);

(statearr_25733[(16)] = inst_25656);

return statearr_25733;
})();
var statearr_25734_25775 = state_25713__$1;
(statearr_25734_25775[(2)] = null);

(statearr_25734_25775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (3))){
var inst_25711 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25713__$1,inst_25711);
} else {
if((state_val_25714 === (12))){
var inst_25688 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
var statearr_25735_25776 = state_25713__$1;
(statearr_25735_25776[(2)] = inst_25688);

(statearr_25735_25776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (2))){
var state_25713__$1 = state_25713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25713__$1,(4),ch);
} else {
if((state_val_25714 === (23))){
var state_25713__$1 = state_25713;
var statearr_25736_25777 = state_25713__$1;
(statearr_25736_25777[(2)] = null);

(statearr_25736_25777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (19))){
var inst_25644 = (state_25713[(8)]);
var inst_25694 = (state_25713[(11)]);
var inst_25696 = cljs.core.async.muxch_STAR_.call(null,inst_25694);
var state_25713__$1 = state_25713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25713__$1,(22),inst_25696,inst_25644);
} else {
if((state_val_25714 === (11))){
var inst_25668 = (state_25713[(10)]);
var inst_25654 = (state_25713[(15)]);
var inst_25668__$1 = cljs.core.seq.call(null,inst_25654);
var state_25713__$1 = (function (){var statearr_25737 = state_25713;
(statearr_25737[(10)] = inst_25668__$1);

return statearr_25737;
})();
if(inst_25668__$1){
var statearr_25738_25778 = state_25713__$1;
(statearr_25738_25778[(1)] = (13));

} else {
var statearr_25739_25779 = state_25713__$1;
(statearr_25739_25779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (9))){
var inst_25690 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
var statearr_25740_25780 = state_25713__$1;
(statearr_25740_25780[(2)] = inst_25690);

(statearr_25740_25780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (5))){
var inst_25651 = cljs.core.deref.call(null,mults);
var inst_25652 = cljs.core.vals.call(null,inst_25651);
var inst_25653 = cljs.core.seq.call(null,inst_25652);
var inst_25654 = inst_25653;
var inst_25655 = null;
var inst_25656 = (0);
var inst_25657 = (0);
var state_25713__$1 = (function (){var statearr_25741 = state_25713;
(statearr_25741[(13)] = inst_25657);

(statearr_25741[(14)] = inst_25655);

(statearr_25741[(15)] = inst_25654);

(statearr_25741[(16)] = inst_25656);

return statearr_25741;
})();
var statearr_25742_25781 = state_25713__$1;
(statearr_25742_25781[(2)] = null);

(statearr_25742_25781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (14))){
var state_25713__$1 = state_25713;
var statearr_25746_25782 = state_25713__$1;
(statearr_25746_25782[(2)] = null);

(statearr_25746_25782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (16))){
var inst_25668 = (state_25713[(10)]);
var inst_25672 = cljs.core.chunk_first.call(null,inst_25668);
var inst_25673 = cljs.core.chunk_rest.call(null,inst_25668);
var inst_25674 = cljs.core.count.call(null,inst_25672);
var inst_25654 = inst_25673;
var inst_25655 = inst_25672;
var inst_25656 = inst_25674;
var inst_25657 = (0);
var state_25713__$1 = (function (){var statearr_25747 = state_25713;
(statearr_25747[(13)] = inst_25657);

(statearr_25747[(14)] = inst_25655);

(statearr_25747[(15)] = inst_25654);

(statearr_25747[(16)] = inst_25656);

return statearr_25747;
})();
var statearr_25748_25783 = state_25713__$1;
(statearr_25748_25783[(2)] = null);

(statearr_25748_25783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (10))){
var inst_25657 = (state_25713[(13)]);
var inst_25655 = (state_25713[(14)]);
var inst_25654 = (state_25713[(15)]);
var inst_25656 = (state_25713[(16)]);
var inst_25662 = cljs.core._nth.call(null,inst_25655,inst_25657);
var inst_25663 = cljs.core.async.muxch_STAR_.call(null,inst_25662);
var inst_25664 = cljs.core.async.close_BANG_.call(null,inst_25663);
var inst_25665 = (inst_25657 + (1));
var tmp25743 = inst_25655;
var tmp25744 = inst_25654;
var tmp25745 = inst_25656;
var inst_25654__$1 = tmp25744;
var inst_25655__$1 = tmp25743;
var inst_25656__$1 = tmp25745;
var inst_25657__$1 = inst_25665;
var state_25713__$1 = (function (){var statearr_25749 = state_25713;
(statearr_25749[(17)] = inst_25664);

(statearr_25749[(13)] = inst_25657__$1);

(statearr_25749[(14)] = inst_25655__$1);

(statearr_25749[(15)] = inst_25654__$1);

(statearr_25749[(16)] = inst_25656__$1);

return statearr_25749;
})();
var statearr_25750_25784 = state_25713__$1;
(statearr_25750_25784[(2)] = null);

(statearr_25750_25784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (18))){
var inst_25683 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
var statearr_25751_25785 = state_25713__$1;
(statearr_25751_25785[(2)] = inst_25683);

(statearr_25751_25785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (8))){
var inst_25657 = (state_25713[(13)]);
var inst_25656 = (state_25713[(16)]);
var inst_25659 = (inst_25657 < inst_25656);
var inst_25660 = inst_25659;
var state_25713__$1 = state_25713;
if(cljs.core.truth_(inst_25660)){
var statearr_25752_25786 = state_25713__$1;
(statearr_25752_25786[(1)] = (10));

} else {
var statearr_25753_25787 = state_25713__$1;
(statearr_25753_25787[(1)] = (11));

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
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_25754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25754[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_25754[(1)] = (1));

return statearr_25754;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_25713){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25755){if((e25755 instanceof Object)){
var ex__24487__auto__ = e25755;
var statearr_25756_25788 = state_25713;
(statearr_25756_25788[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25789 = state_25713;
state_25713 = G__25789;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_25713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_25713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25757 = f__24581__auto__.call(null);
(statearr_25757[(6)] = c__24580__auto___25759);

return statearr_25757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25791 = arguments.length;
switch (G__25791) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25794 = arguments.length;
switch (G__25794) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25797 = arguments.length;
switch (G__25797) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__24580__auto___25864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25836){
var state_val_25837 = (state_25836[(1)]);
if((state_val_25837 === (7))){
var state_25836__$1 = state_25836;
var statearr_25838_25865 = state_25836__$1;
(statearr_25838_25865[(2)] = null);

(statearr_25838_25865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (1))){
var state_25836__$1 = state_25836;
var statearr_25839_25866 = state_25836__$1;
(statearr_25839_25866[(2)] = null);

(statearr_25839_25866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (4))){
var inst_25800 = (state_25836[(7)]);
var inst_25802 = (inst_25800 < cnt);
var state_25836__$1 = state_25836;
if(cljs.core.truth_(inst_25802)){
var statearr_25840_25867 = state_25836__$1;
(statearr_25840_25867[(1)] = (6));

} else {
var statearr_25841_25868 = state_25836__$1;
(statearr_25841_25868[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (15))){
var inst_25832 = (state_25836[(2)]);
var state_25836__$1 = state_25836;
var statearr_25842_25869 = state_25836__$1;
(statearr_25842_25869[(2)] = inst_25832);

(statearr_25842_25869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (13))){
var inst_25825 = cljs.core.async.close_BANG_.call(null,out);
var state_25836__$1 = state_25836;
var statearr_25843_25870 = state_25836__$1;
(statearr_25843_25870[(2)] = inst_25825);

(statearr_25843_25870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (6))){
var state_25836__$1 = state_25836;
var statearr_25844_25871 = state_25836__$1;
(statearr_25844_25871[(2)] = null);

(statearr_25844_25871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (3))){
var inst_25834 = (state_25836[(2)]);
var state_25836__$1 = state_25836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25836__$1,inst_25834);
} else {
if((state_val_25837 === (12))){
var inst_25822 = (state_25836[(8)]);
var inst_25822__$1 = (state_25836[(2)]);
var inst_25823 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25822__$1);
var state_25836__$1 = (function (){var statearr_25845 = state_25836;
(statearr_25845[(8)] = inst_25822__$1);

return statearr_25845;
})();
if(cljs.core.truth_(inst_25823)){
var statearr_25846_25872 = state_25836__$1;
(statearr_25846_25872[(1)] = (13));

} else {
var statearr_25847_25873 = state_25836__$1;
(statearr_25847_25873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (2))){
var inst_25799 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25800 = (0);
var state_25836__$1 = (function (){var statearr_25848 = state_25836;
(statearr_25848[(7)] = inst_25800);

(statearr_25848[(9)] = inst_25799);

return statearr_25848;
})();
var statearr_25849_25874 = state_25836__$1;
(statearr_25849_25874[(2)] = null);

(statearr_25849_25874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (11))){
var inst_25800 = (state_25836[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25836,(10),Object,null,(9));
var inst_25809 = chs__$1.call(null,inst_25800);
var inst_25810 = done.call(null,inst_25800);
var inst_25811 = cljs.core.async.take_BANG_.call(null,inst_25809,inst_25810);
var state_25836__$1 = state_25836;
var statearr_25850_25875 = state_25836__$1;
(statearr_25850_25875[(2)] = inst_25811);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25836__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (9))){
var inst_25800 = (state_25836[(7)]);
var inst_25813 = (state_25836[(2)]);
var inst_25814 = (inst_25800 + (1));
var inst_25800__$1 = inst_25814;
var state_25836__$1 = (function (){var statearr_25851 = state_25836;
(statearr_25851[(7)] = inst_25800__$1);

(statearr_25851[(10)] = inst_25813);

return statearr_25851;
})();
var statearr_25852_25876 = state_25836__$1;
(statearr_25852_25876[(2)] = null);

(statearr_25852_25876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (5))){
var inst_25820 = (state_25836[(2)]);
var state_25836__$1 = (function (){var statearr_25853 = state_25836;
(statearr_25853[(11)] = inst_25820);

return statearr_25853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25836__$1,(12),dchan);
} else {
if((state_val_25837 === (14))){
var inst_25822 = (state_25836[(8)]);
var inst_25827 = cljs.core.apply.call(null,f,inst_25822);
var state_25836__$1 = state_25836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25836__$1,(16),out,inst_25827);
} else {
if((state_val_25837 === (16))){
var inst_25829 = (state_25836[(2)]);
var state_25836__$1 = (function (){var statearr_25854 = state_25836;
(statearr_25854[(12)] = inst_25829);

return statearr_25854;
})();
var statearr_25855_25877 = state_25836__$1;
(statearr_25855_25877[(2)] = null);

(statearr_25855_25877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (10))){
var inst_25804 = (state_25836[(2)]);
var inst_25805 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25836__$1 = (function (){var statearr_25856 = state_25836;
(statearr_25856[(13)] = inst_25804);

return statearr_25856;
})();
var statearr_25857_25878 = state_25836__$1;
(statearr_25857_25878[(2)] = inst_25805);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25836__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25837 === (8))){
var inst_25818 = (state_25836[(2)]);
var state_25836__$1 = state_25836;
var statearr_25858_25879 = state_25836__$1;
(statearr_25858_25879[(2)] = inst_25818);

(statearr_25858_25879[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_25859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25859[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_25859[(1)] = (1));

return statearr_25859;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_25836){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25860){if((e25860 instanceof Object)){
var ex__24487__auto__ = e25860;
var statearr_25861_25880 = state_25836;
(statearr_25861_25880[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25881 = state_25836;
state_25836 = G__25881;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_25836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_25836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25862 = f__24581__auto__.call(null);
(statearr_25862[(6)] = c__24580__auto___25864);

return statearr_25862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25884 = arguments.length;
switch (G__25884) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24580__auto___25938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25916){
var state_val_25917 = (state_25916[(1)]);
if((state_val_25917 === (7))){
var inst_25896 = (state_25916[(7)]);
var inst_25895 = (state_25916[(8)]);
var inst_25895__$1 = (state_25916[(2)]);
var inst_25896__$1 = cljs.core.nth.call(null,inst_25895__$1,(0),null);
var inst_25897 = cljs.core.nth.call(null,inst_25895__$1,(1),null);
var inst_25898 = (inst_25896__$1 == null);
var state_25916__$1 = (function (){var statearr_25918 = state_25916;
(statearr_25918[(9)] = inst_25897);

(statearr_25918[(7)] = inst_25896__$1);

(statearr_25918[(8)] = inst_25895__$1);

return statearr_25918;
})();
if(cljs.core.truth_(inst_25898)){
var statearr_25919_25939 = state_25916__$1;
(statearr_25919_25939[(1)] = (8));

} else {
var statearr_25920_25940 = state_25916__$1;
(statearr_25920_25940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (1))){
var inst_25885 = cljs.core.vec.call(null,chs);
var inst_25886 = inst_25885;
var state_25916__$1 = (function (){var statearr_25921 = state_25916;
(statearr_25921[(10)] = inst_25886);

return statearr_25921;
})();
var statearr_25922_25941 = state_25916__$1;
(statearr_25922_25941[(2)] = null);

(statearr_25922_25941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (4))){
var inst_25886 = (state_25916[(10)]);
var state_25916__$1 = state_25916;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25916__$1,(7),inst_25886);
} else {
if((state_val_25917 === (6))){
var inst_25912 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25923_25942 = state_25916__$1;
(statearr_25923_25942[(2)] = inst_25912);

(statearr_25923_25942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (3))){
var inst_25914 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25916__$1,inst_25914);
} else {
if((state_val_25917 === (2))){
var inst_25886 = (state_25916[(10)]);
var inst_25888 = cljs.core.count.call(null,inst_25886);
var inst_25889 = (inst_25888 > (0));
var state_25916__$1 = state_25916;
if(cljs.core.truth_(inst_25889)){
var statearr_25925_25943 = state_25916__$1;
(statearr_25925_25943[(1)] = (4));

} else {
var statearr_25926_25944 = state_25916__$1;
(statearr_25926_25944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (11))){
var inst_25886 = (state_25916[(10)]);
var inst_25905 = (state_25916[(2)]);
var tmp25924 = inst_25886;
var inst_25886__$1 = tmp25924;
var state_25916__$1 = (function (){var statearr_25927 = state_25916;
(statearr_25927[(10)] = inst_25886__$1);

(statearr_25927[(11)] = inst_25905);

return statearr_25927;
})();
var statearr_25928_25945 = state_25916__$1;
(statearr_25928_25945[(2)] = null);

(statearr_25928_25945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (9))){
var inst_25896 = (state_25916[(7)]);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25916__$1,(11),out,inst_25896);
} else {
if((state_val_25917 === (5))){
var inst_25910 = cljs.core.async.close_BANG_.call(null,out);
var state_25916__$1 = state_25916;
var statearr_25929_25946 = state_25916__$1;
(statearr_25929_25946[(2)] = inst_25910);

(statearr_25929_25946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (10))){
var inst_25908 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25930_25947 = state_25916__$1;
(statearr_25930_25947[(2)] = inst_25908);

(statearr_25930_25947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (8))){
var inst_25886 = (state_25916[(10)]);
var inst_25897 = (state_25916[(9)]);
var inst_25896 = (state_25916[(7)]);
var inst_25895 = (state_25916[(8)]);
var inst_25900 = (function (){var cs = inst_25886;
var vec__25891 = inst_25895;
var v = inst_25896;
var c = inst_25897;
return (function (p1__25882_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25882_SHARP_);
});
})();
var inst_25901 = cljs.core.filterv.call(null,inst_25900,inst_25886);
var inst_25886__$1 = inst_25901;
var state_25916__$1 = (function (){var statearr_25931 = state_25916;
(statearr_25931[(10)] = inst_25886__$1);

return statearr_25931;
})();
var statearr_25932_25948 = state_25916__$1;
(statearr_25932_25948[(2)] = null);

(statearr_25932_25948[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_25933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25933[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_25933[(1)] = (1));

return statearr_25933;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_25916){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25934){if((e25934 instanceof Object)){
var ex__24487__auto__ = e25934;
var statearr_25935_25949 = state_25916;
(statearr_25935_25949[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25950 = state_25916;
state_25916 = G__25950;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_25916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_25916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25936 = f__24581__auto__.call(null);
(statearr_25936[(6)] = c__24580__auto___25938);

return statearr_25936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25952 = arguments.length;
switch (G__25952) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24580__auto___25997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_25976){
var state_val_25977 = (state_25976[(1)]);
if((state_val_25977 === (7))){
var inst_25958 = (state_25976[(7)]);
var inst_25958__$1 = (state_25976[(2)]);
var inst_25959 = (inst_25958__$1 == null);
var inst_25960 = cljs.core.not.call(null,inst_25959);
var state_25976__$1 = (function (){var statearr_25978 = state_25976;
(statearr_25978[(7)] = inst_25958__$1);

return statearr_25978;
})();
if(inst_25960){
var statearr_25979_25998 = state_25976__$1;
(statearr_25979_25998[(1)] = (8));

} else {
var statearr_25980_25999 = state_25976__$1;
(statearr_25980_25999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (1))){
var inst_25953 = (0);
var state_25976__$1 = (function (){var statearr_25981 = state_25976;
(statearr_25981[(8)] = inst_25953);

return statearr_25981;
})();
var statearr_25982_26000 = state_25976__$1;
(statearr_25982_26000[(2)] = null);

(statearr_25982_26000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (4))){
var state_25976__$1 = state_25976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25976__$1,(7),ch);
} else {
if((state_val_25977 === (6))){
var inst_25971 = (state_25976[(2)]);
var state_25976__$1 = state_25976;
var statearr_25983_26001 = state_25976__$1;
(statearr_25983_26001[(2)] = inst_25971);

(statearr_25983_26001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (3))){
var inst_25973 = (state_25976[(2)]);
var inst_25974 = cljs.core.async.close_BANG_.call(null,out);
var state_25976__$1 = (function (){var statearr_25984 = state_25976;
(statearr_25984[(9)] = inst_25973);

return statearr_25984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25976__$1,inst_25974);
} else {
if((state_val_25977 === (2))){
var inst_25953 = (state_25976[(8)]);
var inst_25955 = (inst_25953 < n);
var state_25976__$1 = state_25976;
if(cljs.core.truth_(inst_25955)){
var statearr_25985_26002 = state_25976__$1;
(statearr_25985_26002[(1)] = (4));

} else {
var statearr_25986_26003 = state_25976__$1;
(statearr_25986_26003[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (11))){
var inst_25953 = (state_25976[(8)]);
var inst_25963 = (state_25976[(2)]);
var inst_25964 = (inst_25953 + (1));
var inst_25953__$1 = inst_25964;
var state_25976__$1 = (function (){var statearr_25987 = state_25976;
(statearr_25987[(10)] = inst_25963);

(statearr_25987[(8)] = inst_25953__$1);

return statearr_25987;
})();
var statearr_25988_26004 = state_25976__$1;
(statearr_25988_26004[(2)] = null);

(statearr_25988_26004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (9))){
var state_25976__$1 = state_25976;
var statearr_25989_26005 = state_25976__$1;
(statearr_25989_26005[(2)] = null);

(statearr_25989_26005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (5))){
var state_25976__$1 = state_25976;
var statearr_25990_26006 = state_25976__$1;
(statearr_25990_26006[(2)] = null);

(statearr_25990_26006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (10))){
var inst_25968 = (state_25976[(2)]);
var state_25976__$1 = state_25976;
var statearr_25991_26007 = state_25976__$1;
(statearr_25991_26007[(2)] = inst_25968);

(statearr_25991_26007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (8))){
var inst_25958 = (state_25976[(7)]);
var state_25976__$1 = state_25976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25976__$1,(11),out,inst_25958);
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
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_25992 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25992[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_25992[(1)] = (1));

return statearr_25992;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_25976){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_25976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e25993){if((e25993 instanceof Object)){
var ex__24487__auto__ = e25993;
var statearr_25994_26008 = state_25976;
(statearr_25994_26008[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26009 = state_25976;
state_25976 = G__26009;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_25976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_25976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_25995 = f__24581__auto__.call(null);
(statearr_25995[(6)] = c__24580__auto___25997);

return statearr_25995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26011 = (function (f,ch,meta26012){
this.f = f;
this.ch = ch;
this.meta26012 = meta26012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26013,meta26012__$1){
var self__ = this;
var _26013__$1 = this;
return (new cljs.core.async.t_cljs$core$async26011(self__.f,self__.ch,meta26012__$1));
}));

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26013){
var self__ = this;
var _26013__$1 = this;
return self__.meta26012;
}));

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26014 = (function (f,ch,meta26012,_,fn1,meta26015){
this.f = f;
this.ch = ch;
this.meta26012 = meta26012;
this._ = _;
this.fn1 = fn1;
this.meta26015 = meta26015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26016,meta26015__$1){
var self__ = this;
var _26016__$1 = this;
return (new cljs.core.async.t_cljs$core$async26014(self__.f,self__.ch,self__.meta26012,self__._,self__.fn1,meta26015__$1));
}));

(cljs.core.async.t_cljs$core$async26014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26016){
var self__ = this;
var _26016__$1 = this;
return self__.meta26015;
}));

(cljs.core.async.t_cljs$core$async26014.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26014.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__26010_SHARP_){
return f1.call(null,(((p1__26010_SHARP_ == null))?null:self__.f.call(null,p1__26010_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async26014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26012","meta26012",867841006,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26011","cljs.core.async/t_cljs$core$async26011",1889627270,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26015","meta26015",1591525247,null)], null);
}));

(cljs.core.async.t_cljs$core$async26014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26014");

(cljs.core.async.t_cljs$core$async26014.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26014.
 */
cljs.core.async.__GT_t_cljs$core$async26014 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26014(f__$1,ch__$1,meta26012__$1,___$2,fn1__$1,meta26015){
return (new cljs.core.async.t_cljs$core$async26014(f__$1,ch__$1,meta26012__$1,___$2,fn1__$1,meta26015));
});

}

return (new cljs.core.async.t_cljs$core$async26014(self__.f,self__.ch,self__.meta26012,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26012","meta26012",867841006,null)], null);
}));

(cljs.core.async.t_cljs$core$async26011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26011");

(cljs.core.async.t_cljs$core$async26011.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26011.
 */
cljs.core.async.__GT_t_cljs$core$async26011 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26011(f__$1,ch__$1,meta26012){
return (new cljs.core.async.t_cljs$core$async26011(f__$1,ch__$1,meta26012));
});

}

return (new cljs.core.async.t_cljs$core$async26011(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26017 = (function (f,ch,meta26018){
this.f = f;
this.ch = ch;
this.meta26018 = meta26018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26019,meta26018__$1){
var self__ = this;
var _26019__$1 = this;
return (new cljs.core.async.t_cljs$core$async26017(self__.f,self__.ch,meta26018__$1));
}));

(cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26019){
var self__ = this;
var _26019__$1 = this;
return self__.meta26018;
}));

(cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async26017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26018","meta26018",-1339974691,null)], null);
}));

(cljs.core.async.t_cljs$core$async26017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26017");

(cljs.core.async.t_cljs$core$async26017.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26017.
 */
cljs.core.async.__GT_t_cljs$core$async26017 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26017(f__$1,ch__$1,meta26018){
return (new cljs.core.async.t_cljs$core$async26017(f__$1,ch__$1,meta26018));
});

}

return (new cljs.core.async.t_cljs$core$async26017(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26020 = (function (p,ch,meta26021){
this.p = p;
this.ch = ch;
this.meta26021 = meta26021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26022,meta26021__$1){
var self__ = this;
var _26022__$1 = this;
return (new cljs.core.async.t_cljs$core$async26020(self__.p,self__.ch,meta26021__$1));
}));

(cljs.core.async.t_cljs$core$async26020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26022){
var self__ = this;
var _26022__$1 = this;
return self__.meta26021;
}));

(cljs.core.async.t_cljs$core$async26020.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26020.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26020.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26020.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26021","meta26021",-339827554,null)], null);
}));

(cljs.core.async.t_cljs$core$async26020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26020");

(cljs.core.async.t_cljs$core$async26020.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26020.
 */
cljs.core.async.__GT_t_cljs$core$async26020 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26020(p__$1,ch__$1,meta26021){
return (new cljs.core.async.t_cljs$core$async26020(p__$1,ch__$1,meta26021));
});

}

return (new cljs.core.async.t_cljs$core$async26020(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26024 = arguments.length;
switch (G__26024) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24580__auto___26064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_26045){
var state_val_26046 = (state_26045[(1)]);
if((state_val_26046 === (7))){
var inst_26041 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
var statearr_26047_26065 = state_26045__$1;
(statearr_26047_26065[(2)] = inst_26041);

(statearr_26047_26065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (1))){
var state_26045__$1 = state_26045;
var statearr_26048_26066 = state_26045__$1;
(statearr_26048_26066[(2)] = null);

(statearr_26048_26066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (4))){
var inst_26027 = (state_26045[(7)]);
var inst_26027__$1 = (state_26045[(2)]);
var inst_26028 = (inst_26027__$1 == null);
var state_26045__$1 = (function (){var statearr_26049 = state_26045;
(statearr_26049[(7)] = inst_26027__$1);

return statearr_26049;
})();
if(cljs.core.truth_(inst_26028)){
var statearr_26050_26067 = state_26045__$1;
(statearr_26050_26067[(1)] = (5));

} else {
var statearr_26051_26068 = state_26045__$1;
(statearr_26051_26068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (6))){
var inst_26027 = (state_26045[(7)]);
var inst_26032 = p.call(null,inst_26027);
var state_26045__$1 = state_26045;
if(cljs.core.truth_(inst_26032)){
var statearr_26052_26069 = state_26045__$1;
(statearr_26052_26069[(1)] = (8));

} else {
var statearr_26053_26070 = state_26045__$1;
(statearr_26053_26070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (3))){
var inst_26043 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26045__$1,inst_26043);
} else {
if((state_val_26046 === (2))){
var state_26045__$1 = state_26045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26045__$1,(4),ch);
} else {
if((state_val_26046 === (11))){
var inst_26035 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
var statearr_26054_26071 = state_26045__$1;
(statearr_26054_26071[(2)] = inst_26035);

(statearr_26054_26071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (9))){
var state_26045__$1 = state_26045;
var statearr_26055_26072 = state_26045__$1;
(statearr_26055_26072[(2)] = null);

(statearr_26055_26072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (5))){
var inst_26030 = cljs.core.async.close_BANG_.call(null,out);
var state_26045__$1 = state_26045;
var statearr_26056_26073 = state_26045__$1;
(statearr_26056_26073[(2)] = inst_26030);

(statearr_26056_26073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (10))){
var inst_26038 = (state_26045[(2)]);
var state_26045__$1 = (function (){var statearr_26057 = state_26045;
(statearr_26057[(8)] = inst_26038);

return statearr_26057;
})();
var statearr_26058_26074 = state_26045__$1;
(statearr_26058_26074[(2)] = null);

(statearr_26058_26074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (8))){
var inst_26027 = (state_26045[(7)]);
var state_26045__$1 = state_26045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26045__$1,(11),out,inst_26027);
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
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_26059 = [null,null,null,null,null,null,null,null,null];
(statearr_26059[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_26059[(1)] = (1));

return statearr_26059;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_26045){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_26045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e26060){if((e26060 instanceof Object)){
var ex__24487__auto__ = e26060;
var statearr_26061_26075 = state_26045;
(statearr_26061_26075[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26076 = state_26045;
state_26045 = G__26076;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_26045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_26045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_26062 = f__24581__auto__.call(null);
(statearr_26062[(6)] = c__24580__auto___26064);

return statearr_26062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26078 = arguments.length;
switch (G__26078) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_26141){
var state_val_26142 = (state_26141[(1)]);
if((state_val_26142 === (7))){
var inst_26137 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
var statearr_26143_26181 = state_26141__$1;
(statearr_26143_26181[(2)] = inst_26137);

(statearr_26143_26181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (20))){
var inst_26107 = (state_26141[(7)]);
var inst_26118 = (state_26141[(2)]);
var inst_26119 = cljs.core.next.call(null,inst_26107);
var inst_26093 = inst_26119;
var inst_26094 = null;
var inst_26095 = (0);
var inst_26096 = (0);
var state_26141__$1 = (function (){var statearr_26144 = state_26141;
(statearr_26144[(8)] = inst_26095);

(statearr_26144[(9)] = inst_26096);

(statearr_26144[(10)] = inst_26118);

(statearr_26144[(11)] = inst_26094);

(statearr_26144[(12)] = inst_26093);

return statearr_26144;
})();
var statearr_26145_26182 = state_26141__$1;
(statearr_26145_26182[(2)] = null);

(statearr_26145_26182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (1))){
var state_26141__$1 = state_26141;
var statearr_26146_26183 = state_26141__$1;
(statearr_26146_26183[(2)] = null);

(statearr_26146_26183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (4))){
var inst_26082 = (state_26141[(13)]);
var inst_26082__$1 = (state_26141[(2)]);
var inst_26083 = (inst_26082__$1 == null);
var state_26141__$1 = (function (){var statearr_26147 = state_26141;
(statearr_26147[(13)] = inst_26082__$1);

return statearr_26147;
})();
if(cljs.core.truth_(inst_26083)){
var statearr_26148_26184 = state_26141__$1;
(statearr_26148_26184[(1)] = (5));

} else {
var statearr_26149_26185 = state_26141__$1;
(statearr_26149_26185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (15))){
var state_26141__$1 = state_26141;
var statearr_26153_26186 = state_26141__$1;
(statearr_26153_26186[(2)] = null);

(statearr_26153_26186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (21))){
var state_26141__$1 = state_26141;
var statearr_26154_26187 = state_26141__$1;
(statearr_26154_26187[(2)] = null);

(statearr_26154_26187[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (13))){
var inst_26095 = (state_26141[(8)]);
var inst_26096 = (state_26141[(9)]);
var inst_26094 = (state_26141[(11)]);
var inst_26093 = (state_26141[(12)]);
var inst_26103 = (state_26141[(2)]);
var inst_26104 = (inst_26096 + (1));
var tmp26150 = inst_26095;
var tmp26151 = inst_26094;
var tmp26152 = inst_26093;
var inst_26093__$1 = tmp26152;
var inst_26094__$1 = tmp26151;
var inst_26095__$1 = tmp26150;
var inst_26096__$1 = inst_26104;
var state_26141__$1 = (function (){var statearr_26155 = state_26141;
(statearr_26155[(14)] = inst_26103);

(statearr_26155[(8)] = inst_26095__$1);

(statearr_26155[(9)] = inst_26096__$1);

(statearr_26155[(11)] = inst_26094__$1);

(statearr_26155[(12)] = inst_26093__$1);

return statearr_26155;
})();
var statearr_26156_26188 = state_26141__$1;
(statearr_26156_26188[(2)] = null);

(statearr_26156_26188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (22))){
var state_26141__$1 = state_26141;
var statearr_26157_26189 = state_26141__$1;
(statearr_26157_26189[(2)] = null);

(statearr_26157_26189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (6))){
var inst_26082 = (state_26141[(13)]);
var inst_26091 = f.call(null,inst_26082);
var inst_26092 = cljs.core.seq.call(null,inst_26091);
var inst_26093 = inst_26092;
var inst_26094 = null;
var inst_26095 = (0);
var inst_26096 = (0);
var state_26141__$1 = (function (){var statearr_26158 = state_26141;
(statearr_26158[(8)] = inst_26095);

(statearr_26158[(9)] = inst_26096);

(statearr_26158[(11)] = inst_26094);

(statearr_26158[(12)] = inst_26093);

return statearr_26158;
})();
var statearr_26159_26190 = state_26141__$1;
(statearr_26159_26190[(2)] = null);

(statearr_26159_26190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (17))){
var inst_26107 = (state_26141[(7)]);
var inst_26111 = cljs.core.chunk_first.call(null,inst_26107);
var inst_26112 = cljs.core.chunk_rest.call(null,inst_26107);
var inst_26113 = cljs.core.count.call(null,inst_26111);
var inst_26093 = inst_26112;
var inst_26094 = inst_26111;
var inst_26095 = inst_26113;
var inst_26096 = (0);
var state_26141__$1 = (function (){var statearr_26160 = state_26141;
(statearr_26160[(8)] = inst_26095);

(statearr_26160[(9)] = inst_26096);

(statearr_26160[(11)] = inst_26094);

(statearr_26160[(12)] = inst_26093);

return statearr_26160;
})();
var statearr_26161_26191 = state_26141__$1;
(statearr_26161_26191[(2)] = null);

(statearr_26161_26191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (3))){
var inst_26139 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26141__$1,inst_26139);
} else {
if((state_val_26142 === (12))){
var inst_26127 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
var statearr_26162_26192 = state_26141__$1;
(statearr_26162_26192[(2)] = inst_26127);

(statearr_26162_26192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (2))){
var state_26141__$1 = state_26141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26141__$1,(4),in$);
} else {
if((state_val_26142 === (23))){
var inst_26135 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
var statearr_26163_26193 = state_26141__$1;
(statearr_26163_26193[(2)] = inst_26135);

(statearr_26163_26193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (19))){
var inst_26122 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
var statearr_26164_26194 = state_26141__$1;
(statearr_26164_26194[(2)] = inst_26122);

(statearr_26164_26194[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (11))){
var inst_26093 = (state_26141[(12)]);
var inst_26107 = (state_26141[(7)]);
var inst_26107__$1 = cljs.core.seq.call(null,inst_26093);
var state_26141__$1 = (function (){var statearr_26165 = state_26141;
(statearr_26165[(7)] = inst_26107__$1);

return statearr_26165;
})();
if(inst_26107__$1){
var statearr_26166_26195 = state_26141__$1;
(statearr_26166_26195[(1)] = (14));

} else {
var statearr_26167_26196 = state_26141__$1;
(statearr_26167_26196[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (9))){
var inst_26129 = (state_26141[(2)]);
var inst_26130 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26141__$1 = (function (){var statearr_26168 = state_26141;
(statearr_26168[(15)] = inst_26129);

return statearr_26168;
})();
if(cljs.core.truth_(inst_26130)){
var statearr_26169_26197 = state_26141__$1;
(statearr_26169_26197[(1)] = (21));

} else {
var statearr_26170_26198 = state_26141__$1;
(statearr_26170_26198[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (5))){
var inst_26085 = cljs.core.async.close_BANG_.call(null,out);
var state_26141__$1 = state_26141;
var statearr_26171_26199 = state_26141__$1;
(statearr_26171_26199[(2)] = inst_26085);

(statearr_26171_26199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (14))){
var inst_26107 = (state_26141[(7)]);
var inst_26109 = cljs.core.chunked_seq_QMARK_.call(null,inst_26107);
var state_26141__$1 = state_26141;
if(inst_26109){
var statearr_26172_26200 = state_26141__$1;
(statearr_26172_26200[(1)] = (17));

} else {
var statearr_26173_26201 = state_26141__$1;
(statearr_26173_26201[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (16))){
var inst_26125 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
var statearr_26174_26202 = state_26141__$1;
(statearr_26174_26202[(2)] = inst_26125);

(statearr_26174_26202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (10))){
var inst_26096 = (state_26141[(9)]);
var inst_26094 = (state_26141[(11)]);
var inst_26101 = cljs.core._nth.call(null,inst_26094,inst_26096);
var state_26141__$1 = state_26141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26141__$1,(13),out,inst_26101);
} else {
if((state_val_26142 === (18))){
var inst_26107 = (state_26141[(7)]);
var inst_26116 = cljs.core.first.call(null,inst_26107);
var state_26141__$1 = state_26141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26141__$1,(20),out,inst_26116);
} else {
if((state_val_26142 === (8))){
var inst_26095 = (state_26141[(8)]);
var inst_26096 = (state_26141[(9)]);
var inst_26098 = (inst_26096 < inst_26095);
var inst_26099 = inst_26098;
var state_26141__$1 = state_26141;
if(cljs.core.truth_(inst_26099)){
var statearr_26175_26203 = state_26141__$1;
(statearr_26175_26203[(1)] = (10));

} else {
var statearr_26176_26204 = state_26141__$1;
(statearr_26176_26204[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24484__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24484__auto____0 = (function (){
var statearr_26177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26177[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24484__auto__);

(statearr_26177[(1)] = (1));

return statearr_26177;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24484__auto____1 = (function (state_26141){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_26141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e26178){if((e26178 instanceof Object)){
var ex__24487__auto__ = e26178;
var statearr_26179_26205 = state_26141;
(statearr_26179_26205[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26206 = state_26141;
state_26141 = G__26206;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24484__auto__ = function(state_26141){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24484__auto____1.call(this,state_26141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24484__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24484__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_26180 = f__24581__auto__.call(null);
(statearr_26180[(6)] = c__24580__auto__);

return statearr_26180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26208 = arguments.length;
switch (G__26208) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26211 = arguments.length;
switch (G__26211) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26214 = arguments.length;
switch (G__26214) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24580__auto___26261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_26238){
var state_val_26239 = (state_26238[(1)]);
if((state_val_26239 === (7))){
var inst_26233 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26240_26262 = state_26238__$1;
(statearr_26240_26262[(2)] = inst_26233);

(statearr_26240_26262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (1))){
var inst_26215 = null;
var state_26238__$1 = (function (){var statearr_26241 = state_26238;
(statearr_26241[(7)] = inst_26215);

return statearr_26241;
})();
var statearr_26242_26263 = state_26238__$1;
(statearr_26242_26263[(2)] = null);

(statearr_26242_26263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (4))){
var inst_26218 = (state_26238[(8)]);
var inst_26218__$1 = (state_26238[(2)]);
var inst_26219 = (inst_26218__$1 == null);
var inst_26220 = cljs.core.not.call(null,inst_26219);
var state_26238__$1 = (function (){var statearr_26243 = state_26238;
(statearr_26243[(8)] = inst_26218__$1);

return statearr_26243;
})();
if(inst_26220){
var statearr_26244_26264 = state_26238__$1;
(statearr_26244_26264[(1)] = (5));

} else {
var statearr_26245_26265 = state_26238__$1;
(statearr_26245_26265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (6))){
var state_26238__$1 = state_26238;
var statearr_26246_26266 = state_26238__$1;
(statearr_26246_26266[(2)] = null);

(statearr_26246_26266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (3))){
var inst_26235 = (state_26238[(2)]);
var inst_26236 = cljs.core.async.close_BANG_.call(null,out);
var state_26238__$1 = (function (){var statearr_26247 = state_26238;
(statearr_26247[(9)] = inst_26235);

return statearr_26247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26238__$1,inst_26236);
} else {
if((state_val_26239 === (2))){
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26238__$1,(4),ch);
} else {
if((state_val_26239 === (11))){
var inst_26218 = (state_26238[(8)]);
var inst_26227 = (state_26238[(2)]);
var inst_26215 = inst_26218;
var state_26238__$1 = (function (){var statearr_26248 = state_26238;
(statearr_26248[(7)] = inst_26215);

(statearr_26248[(10)] = inst_26227);

return statearr_26248;
})();
var statearr_26249_26267 = state_26238__$1;
(statearr_26249_26267[(2)] = null);

(statearr_26249_26267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (9))){
var inst_26218 = (state_26238[(8)]);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26238__$1,(11),out,inst_26218);
} else {
if((state_val_26239 === (5))){
var inst_26218 = (state_26238[(8)]);
var inst_26215 = (state_26238[(7)]);
var inst_26222 = cljs.core._EQ_.call(null,inst_26218,inst_26215);
var state_26238__$1 = state_26238;
if(inst_26222){
var statearr_26251_26268 = state_26238__$1;
(statearr_26251_26268[(1)] = (8));

} else {
var statearr_26252_26269 = state_26238__$1;
(statearr_26252_26269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (10))){
var inst_26230 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26253_26270 = state_26238__$1;
(statearr_26253_26270[(2)] = inst_26230);

(statearr_26253_26270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (8))){
var inst_26215 = (state_26238[(7)]);
var tmp26250 = inst_26215;
var inst_26215__$1 = tmp26250;
var state_26238__$1 = (function (){var statearr_26254 = state_26238;
(statearr_26254[(7)] = inst_26215__$1);

return statearr_26254;
})();
var statearr_26255_26271 = state_26238__$1;
(statearr_26255_26271[(2)] = null);

(statearr_26255_26271[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_26256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26256[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_26256[(1)] = (1));

return statearr_26256;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_26238){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_26238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e26257){if((e26257 instanceof Object)){
var ex__24487__auto__ = e26257;
var statearr_26258_26272 = state_26238;
(statearr_26258_26272[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26273 = state_26238;
state_26238 = G__26273;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_26238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_26238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_26259 = f__24581__auto__.call(null);
(statearr_26259[(6)] = c__24580__auto___26261);

return statearr_26259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26275 = arguments.length;
switch (G__26275) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24580__auto___26341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_26313){
var state_val_26314 = (state_26313[(1)]);
if((state_val_26314 === (7))){
var inst_26309 = (state_26313[(2)]);
var state_26313__$1 = state_26313;
var statearr_26315_26342 = state_26313__$1;
(statearr_26315_26342[(2)] = inst_26309);

(statearr_26315_26342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (1))){
var inst_26276 = (new Array(n));
var inst_26277 = inst_26276;
var inst_26278 = (0);
var state_26313__$1 = (function (){var statearr_26316 = state_26313;
(statearr_26316[(7)] = inst_26278);

(statearr_26316[(8)] = inst_26277);

return statearr_26316;
})();
var statearr_26317_26343 = state_26313__$1;
(statearr_26317_26343[(2)] = null);

(statearr_26317_26343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (4))){
var inst_26281 = (state_26313[(9)]);
var inst_26281__$1 = (state_26313[(2)]);
var inst_26282 = (inst_26281__$1 == null);
var inst_26283 = cljs.core.not.call(null,inst_26282);
var state_26313__$1 = (function (){var statearr_26318 = state_26313;
(statearr_26318[(9)] = inst_26281__$1);

return statearr_26318;
})();
if(inst_26283){
var statearr_26319_26344 = state_26313__$1;
(statearr_26319_26344[(1)] = (5));

} else {
var statearr_26320_26345 = state_26313__$1;
(statearr_26320_26345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (15))){
var inst_26303 = (state_26313[(2)]);
var state_26313__$1 = state_26313;
var statearr_26321_26346 = state_26313__$1;
(statearr_26321_26346[(2)] = inst_26303);

(statearr_26321_26346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (13))){
var state_26313__$1 = state_26313;
var statearr_26322_26347 = state_26313__$1;
(statearr_26322_26347[(2)] = null);

(statearr_26322_26347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (6))){
var inst_26278 = (state_26313[(7)]);
var inst_26299 = (inst_26278 > (0));
var state_26313__$1 = state_26313;
if(cljs.core.truth_(inst_26299)){
var statearr_26323_26348 = state_26313__$1;
(statearr_26323_26348[(1)] = (12));

} else {
var statearr_26324_26349 = state_26313__$1;
(statearr_26324_26349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (3))){
var inst_26311 = (state_26313[(2)]);
var state_26313__$1 = state_26313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26313__$1,inst_26311);
} else {
if((state_val_26314 === (12))){
var inst_26277 = (state_26313[(8)]);
var inst_26301 = cljs.core.vec.call(null,inst_26277);
var state_26313__$1 = state_26313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26313__$1,(15),out,inst_26301);
} else {
if((state_val_26314 === (2))){
var state_26313__$1 = state_26313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26313__$1,(4),ch);
} else {
if((state_val_26314 === (11))){
var inst_26293 = (state_26313[(2)]);
var inst_26294 = (new Array(n));
var inst_26277 = inst_26294;
var inst_26278 = (0);
var state_26313__$1 = (function (){var statearr_26325 = state_26313;
(statearr_26325[(10)] = inst_26293);

(statearr_26325[(7)] = inst_26278);

(statearr_26325[(8)] = inst_26277);

return statearr_26325;
})();
var statearr_26326_26350 = state_26313__$1;
(statearr_26326_26350[(2)] = null);

(statearr_26326_26350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (9))){
var inst_26277 = (state_26313[(8)]);
var inst_26291 = cljs.core.vec.call(null,inst_26277);
var state_26313__$1 = state_26313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26313__$1,(11),out,inst_26291);
} else {
if((state_val_26314 === (5))){
var inst_26286 = (state_26313[(11)]);
var inst_26281 = (state_26313[(9)]);
var inst_26278 = (state_26313[(7)]);
var inst_26277 = (state_26313[(8)]);
var inst_26285 = (inst_26277[inst_26278] = inst_26281);
var inst_26286__$1 = (inst_26278 + (1));
var inst_26287 = (inst_26286__$1 < n);
var state_26313__$1 = (function (){var statearr_26327 = state_26313;
(statearr_26327[(11)] = inst_26286__$1);

(statearr_26327[(12)] = inst_26285);

return statearr_26327;
})();
if(cljs.core.truth_(inst_26287)){
var statearr_26328_26351 = state_26313__$1;
(statearr_26328_26351[(1)] = (8));

} else {
var statearr_26329_26352 = state_26313__$1;
(statearr_26329_26352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (14))){
var inst_26306 = (state_26313[(2)]);
var inst_26307 = cljs.core.async.close_BANG_.call(null,out);
var state_26313__$1 = (function (){var statearr_26331 = state_26313;
(statearr_26331[(13)] = inst_26306);

return statearr_26331;
})();
var statearr_26332_26353 = state_26313__$1;
(statearr_26332_26353[(2)] = inst_26307);

(statearr_26332_26353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (10))){
var inst_26297 = (state_26313[(2)]);
var state_26313__$1 = state_26313;
var statearr_26333_26354 = state_26313__$1;
(statearr_26333_26354[(2)] = inst_26297);

(statearr_26333_26354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (8))){
var inst_26286 = (state_26313[(11)]);
var inst_26277 = (state_26313[(8)]);
var tmp26330 = inst_26277;
var inst_26277__$1 = tmp26330;
var inst_26278 = inst_26286;
var state_26313__$1 = (function (){var statearr_26334 = state_26313;
(statearr_26334[(7)] = inst_26278);

(statearr_26334[(8)] = inst_26277__$1);

return statearr_26334;
})();
var statearr_26335_26355 = state_26313__$1;
(statearr_26335_26355[(2)] = null);

(statearr_26335_26355[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_26336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26336[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_26336[(1)] = (1));

return statearr_26336;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_26313){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_26313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e26337){if((e26337 instanceof Object)){
var ex__24487__auto__ = e26337;
var statearr_26338_26356 = state_26313;
(statearr_26338_26356[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26357 = state_26313;
state_26313 = G__26357;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_26313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_26313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_26339 = f__24581__auto__.call(null);
(statearr_26339[(6)] = c__24580__auto___26341);

return statearr_26339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26359 = arguments.length;
switch (G__26359) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24580__auto___26436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_26404){
var state_val_26405 = (state_26404[(1)]);
if((state_val_26405 === (7))){
var inst_26400 = (state_26404[(2)]);
var state_26404__$1 = state_26404;
var statearr_26406_26437 = state_26404__$1;
(statearr_26406_26437[(2)] = inst_26400);

(statearr_26406_26437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (1))){
var inst_26360 = [];
var inst_26361 = inst_26360;
var inst_26362 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26404__$1 = (function (){var statearr_26407 = state_26404;
(statearr_26407[(7)] = inst_26362);

(statearr_26407[(8)] = inst_26361);

return statearr_26407;
})();
var statearr_26408_26438 = state_26404__$1;
(statearr_26408_26438[(2)] = null);

(statearr_26408_26438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (4))){
var inst_26365 = (state_26404[(9)]);
var inst_26365__$1 = (state_26404[(2)]);
var inst_26366 = (inst_26365__$1 == null);
var inst_26367 = cljs.core.not.call(null,inst_26366);
var state_26404__$1 = (function (){var statearr_26409 = state_26404;
(statearr_26409[(9)] = inst_26365__$1);

return statearr_26409;
})();
if(inst_26367){
var statearr_26410_26439 = state_26404__$1;
(statearr_26410_26439[(1)] = (5));

} else {
var statearr_26411_26440 = state_26404__$1;
(statearr_26411_26440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (15))){
var inst_26361 = (state_26404[(8)]);
var inst_26392 = cljs.core.vec.call(null,inst_26361);
var state_26404__$1 = state_26404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26404__$1,(18),out,inst_26392);
} else {
if((state_val_26405 === (13))){
var inst_26387 = (state_26404[(2)]);
var state_26404__$1 = state_26404;
var statearr_26412_26441 = state_26404__$1;
(statearr_26412_26441[(2)] = inst_26387);

(statearr_26412_26441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (6))){
var inst_26361 = (state_26404[(8)]);
var inst_26389 = inst_26361.length;
var inst_26390 = (inst_26389 > (0));
var state_26404__$1 = state_26404;
if(cljs.core.truth_(inst_26390)){
var statearr_26413_26442 = state_26404__$1;
(statearr_26413_26442[(1)] = (15));

} else {
var statearr_26414_26443 = state_26404__$1;
(statearr_26414_26443[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (17))){
var inst_26397 = (state_26404[(2)]);
var inst_26398 = cljs.core.async.close_BANG_.call(null,out);
var state_26404__$1 = (function (){var statearr_26415 = state_26404;
(statearr_26415[(10)] = inst_26397);

return statearr_26415;
})();
var statearr_26416_26444 = state_26404__$1;
(statearr_26416_26444[(2)] = inst_26398);

(statearr_26416_26444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (3))){
var inst_26402 = (state_26404[(2)]);
var state_26404__$1 = state_26404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26404__$1,inst_26402);
} else {
if((state_val_26405 === (12))){
var inst_26361 = (state_26404[(8)]);
var inst_26380 = cljs.core.vec.call(null,inst_26361);
var state_26404__$1 = state_26404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26404__$1,(14),out,inst_26380);
} else {
if((state_val_26405 === (2))){
var state_26404__$1 = state_26404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26404__$1,(4),ch);
} else {
if((state_val_26405 === (11))){
var inst_26369 = (state_26404[(11)]);
var inst_26361 = (state_26404[(8)]);
var inst_26365 = (state_26404[(9)]);
var inst_26377 = inst_26361.push(inst_26365);
var tmp26417 = inst_26361;
var inst_26361__$1 = tmp26417;
var inst_26362 = inst_26369;
var state_26404__$1 = (function (){var statearr_26418 = state_26404;
(statearr_26418[(7)] = inst_26362);

(statearr_26418[(8)] = inst_26361__$1);

(statearr_26418[(12)] = inst_26377);

return statearr_26418;
})();
var statearr_26419_26445 = state_26404__$1;
(statearr_26419_26445[(2)] = null);

(statearr_26419_26445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (9))){
var inst_26362 = (state_26404[(7)]);
var inst_26373 = cljs.core.keyword_identical_QMARK_.call(null,inst_26362,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_26404__$1 = state_26404;
var statearr_26420_26446 = state_26404__$1;
(statearr_26420_26446[(2)] = inst_26373);

(statearr_26420_26446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (5))){
var inst_26362 = (state_26404[(7)]);
var inst_26370 = (state_26404[(13)]);
var inst_26369 = (state_26404[(11)]);
var inst_26365 = (state_26404[(9)]);
var inst_26369__$1 = f.call(null,inst_26365);
var inst_26370__$1 = cljs.core._EQ_.call(null,inst_26369__$1,inst_26362);
var state_26404__$1 = (function (){var statearr_26421 = state_26404;
(statearr_26421[(13)] = inst_26370__$1);

(statearr_26421[(11)] = inst_26369__$1);

return statearr_26421;
})();
if(inst_26370__$1){
var statearr_26422_26447 = state_26404__$1;
(statearr_26422_26447[(1)] = (8));

} else {
var statearr_26423_26448 = state_26404__$1;
(statearr_26423_26448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (14))){
var inst_26369 = (state_26404[(11)]);
var inst_26365 = (state_26404[(9)]);
var inst_26382 = (state_26404[(2)]);
var inst_26383 = [];
var inst_26384 = inst_26383.push(inst_26365);
var inst_26361 = inst_26383;
var inst_26362 = inst_26369;
var state_26404__$1 = (function (){var statearr_26424 = state_26404;
(statearr_26424[(14)] = inst_26384);

(statearr_26424[(15)] = inst_26382);

(statearr_26424[(7)] = inst_26362);

(statearr_26424[(8)] = inst_26361);

return statearr_26424;
})();
var statearr_26425_26449 = state_26404__$1;
(statearr_26425_26449[(2)] = null);

(statearr_26425_26449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (16))){
var state_26404__$1 = state_26404;
var statearr_26426_26450 = state_26404__$1;
(statearr_26426_26450[(2)] = null);

(statearr_26426_26450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (10))){
var inst_26375 = (state_26404[(2)]);
var state_26404__$1 = state_26404;
if(cljs.core.truth_(inst_26375)){
var statearr_26427_26451 = state_26404__$1;
(statearr_26427_26451[(1)] = (11));

} else {
var statearr_26428_26452 = state_26404__$1;
(statearr_26428_26452[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (18))){
var inst_26394 = (state_26404[(2)]);
var state_26404__$1 = state_26404;
var statearr_26429_26453 = state_26404__$1;
(statearr_26429_26453[(2)] = inst_26394);

(statearr_26429_26453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (8))){
var inst_26370 = (state_26404[(13)]);
var state_26404__$1 = state_26404;
var statearr_26430_26454 = state_26404__$1;
(statearr_26430_26454[(2)] = inst_26370);

(statearr_26430_26454[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$state_machine__24484__auto__ = null;
var cljs$core$async$state_machine__24484__auto____0 = (function (){
var statearr_26431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26431[(0)] = cljs$core$async$state_machine__24484__auto__);

(statearr_26431[(1)] = (1));

return statearr_26431;
});
var cljs$core$async$state_machine__24484__auto____1 = (function (state_26404){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_26404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e26432){if((e26432 instanceof Object)){
var ex__24487__auto__ = e26432;
var statearr_26433_26455 = state_26404;
(statearr_26433_26455[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26456 = state_26404;
state_26404 = G__26456;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
cljs$core$async$state_machine__24484__auto__ = function(state_26404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24484__auto____1.call(this,state_26404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24484__auto____0;
cljs$core$async$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24484__auto____1;
return cljs$core$async$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_26434 = f__24581__auto__.call(null);
(statearr_26434[(6)] = c__24580__auto___26436);

return statearr_26434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1744477355723
