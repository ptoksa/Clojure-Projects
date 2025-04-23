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
var G__24587 = arguments.length;
switch (G__24587) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24588 = (function (f,blockable,meta24589){
this.f = f;
this.blockable = blockable;
this.meta24589 = meta24589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24590,meta24589__$1){
var self__ = this;
var _24590__$1 = this;
return (new cljs.core.async.t_cljs$core$async24588(self__.f,self__.blockable,meta24589__$1));
}));

(cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24590){
var self__ = this;
var _24590__$1 = this;
return self__.meta24589;
}));

(cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24589","meta24589",78916865,null)], null);
}));

(cljs.core.async.t_cljs$core$async24588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24588");

(cljs.core.async.t_cljs$core$async24588.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async24588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24588.
 */
cljs.core.async.__GT_t_cljs$core$async24588 = (function cljs$core$async$__GT_t_cljs$core$async24588(f__$1,blockable__$1,meta24589){
return (new cljs.core.async.t_cljs$core$async24588(f__$1,blockable__$1,meta24589));
});

}

return (new cljs.core.async.t_cljs$core$async24588(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24594 = arguments.length;
switch (G__24594) {
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
var G__24597 = arguments.length;
switch (G__24597) {
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
var G__24600 = arguments.length;
switch (G__24600) {
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
var val_24602 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24602);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_24602);
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
var G__24604 = arguments.length;
switch (G__24604) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__5636__auto___24606 = n;
var x_24607 = (0);
while(true){
if((x_24607 < n__5636__auto___24606)){
(a[x_24607] = (0));

var G__24608 = (x_24607 + (1));
x_24607 = G__24608;
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

var G__24609 = (i + (1));
i = G__24609;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24610 = (function (flag,meta24611){
this.flag = flag;
this.meta24611 = meta24611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24612,meta24611__$1){
var self__ = this;
var _24612__$1 = this;
return (new cljs.core.async.t_cljs$core$async24610(self__.flag,meta24611__$1));
}));

(cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24612){
var self__ = this;
var _24612__$1 = this;
return self__.meta24611;
}));

(cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24611","meta24611",1333661602,null)], null);
}));

(cljs.core.async.t_cljs$core$async24610.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24610");

(cljs.core.async.t_cljs$core$async24610.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async24610");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24610.
 */
cljs.core.async.__GT_t_cljs$core$async24610 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24610(flag__$1,meta24611){
return (new cljs.core.async.t_cljs$core$async24610(flag__$1,meta24611));
});

}

return (new cljs.core.async.t_cljs$core$async24610(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24613 = (function (flag,cb,meta24614){
this.flag = flag;
this.cb = cb;
this.meta24614 = meta24614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24615,meta24614__$1){
var self__ = this;
var _24615__$1 = this;
return (new cljs.core.async.t_cljs$core$async24613(self__.flag,self__.cb,meta24614__$1));
}));

(cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24615){
var self__ = this;
var _24615__$1 = this;
return self__.meta24614;
}));

(cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24614","meta24614",882595011,null)], null);
}));

(cljs.core.async.t_cljs$core$async24613.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24613");

(cljs.core.async.t_cljs$core$async24613.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async24613");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24613.
 */
cljs.core.async.__GT_t_cljs$core$async24613 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24613(flag__$1,cb__$1,meta24614){
return (new cljs.core.async.t_cljs$core$async24613(flag__$1,cb__$1,meta24614));
});

}

return (new cljs.core.async.t_cljs$core$async24613(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24616_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24616_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24617_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24617_SHARP_,port], null));
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
var G__24618 = (i + (1));
i = G__24618;
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
var temp__5753__auto__ = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var len__5769__auto___24623 = arguments.length;
var i__5770__auto___24624 = (0);
while(true){
if((i__5770__auto___24624 < len__5769__auto___24623)){
args__5775__auto__.push((arguments[i__5770__auto___24624]));

var G__24625 = (i__5770__auto___24624 + (1));
i__5770__auto___24624 = G__24625;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24621){
var map__24622 = p__24621;
var map__24622__$1 = cljs.core.__destructure_map.call(null,map__24622);
var opts = map__24622__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24619){
var G__24620 = cljs.core.first.call(null,seq24619);
var seq24619__$1 = cljs.core.next.call(null,seq24619);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24620,seq24619__$1);
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
var G__24627 = arguments.length;
switch (G__24627) {
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
var c__24527__auto___24673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_24651){
var state_val_24652 = (state_24651[(1)]);
if((state_val_24652 === (7))){
var inst_24647 = (state_24651[(2)]);
var state_24651__$1 = state_24651;
var statearr_24653_24674 = state_24651__$1;
(statearr_24653_24674[(2)] = inst_24647);

(statearr_24653_24674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (1))){
var state_24651__$1 = state_24651;
var statearr_24654_24675 = state_24651__$1;
(statearr_24654_24675[(2)] = null);

(statearr_24654_24675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (4))){
var inst_24630 = (state_24651[(7)]);
var inst_24630__$1 = (state_24651[(2)]);
var inst_24631 = (inst_24630__$1 == null);
var state_24651__$1 = (function (){var statearr_24655 = state_24651;
(statearr_24655[(7)] = inst_24630__$1);

return statearr_24655;
})();
if(cljs.core.truth_(inst_24631)){
var statearr_24656_24676 = state_24651__$1;
(statearr_24656_24676[(1)] = (5));

} else {
var statearr_24657_24677 = state_24651__$1;
(statearr_24657_24677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (13))){
var state_24651__$1 = state_24651;
var statearr_24658_24678 = state_24651__$1;
(statearr_24658_24678[(2)] = null);

(statearr_24658_24678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (6))){
var inst_24630 = (state_24651[(7)]);
var state_24651__$1 = state_24651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24651__$1,(11),to,inst_24630);
} else {
if((state_val_24652 === (3))){
var inst_24649 = (state_24651[(2)]);
var state_24651__$1 = state_24651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24651__$1,inst_24649);
} else {
if((state_val_24652 === (12))){
var state_24651__$1 = state_24651;
var statearr_24659_24679 = state_24651__$1;
(statearr_24659_24679[(2)] = null);

(statearr_24659_24679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (2))){
var state_24651__$1 = state_24651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24651__$1,(4),from);
} else {
if((state_val_24652 === (11))){
var inst_24640 = (state_24651[(2)]);
var state_24651__$1 = state_24651;
if(cljs.core.truth_(inst_24640)){
var statearr_24660_24680 = state_24651__$1;
(statearr_24660_24680[(1)] = (12));

} else {
var statearr_24661_24681 = state_24651__$1;
(statearr_24661_24681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (9))){
var state_24651__$1 = state_24651;
var statearr_24662_24682 = state_24651__$1;
(statearr_24662_24682[(2)] = null);

(statearr_24662_24682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (5))){
var state_24651__$1 = state_24651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24663_24683 = state_24651__$1;
(statearr_24663_24683[(1)] = (8));

} else {
var statearr_24664_24684 = state_24651__$1;
(statearr_24664_24684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (14))){
var inst_24645 = (state_24651[(2)]);
var state_24651__$1 = state_24651;
var statearr_24665_24685 = state_24651__$1;
(statearr_24665_24685[(2)] = inst_24645);

(statearr_24665_24685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (10))){
var inst_24637 = (state_24651[(2)]);
var state_24651__$1 = state_24651;
var statearr_24666_24686 = state_24651__$1;
(statearr_24666_24686[(2)] = inst_24637);

(statearr_24666_24686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (8))){
var inst_24634 = cljs.core.async.close_BANG_.call(null,to);
var state_24651__$1 = state_24651;
var statearr_24667_24687 = state_24651__$1;
(statearr_24667_24687[(2)] = inst_24634);

(statearr_24667_24687[(1)] = (10));


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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_24668 = [null,null,null,null,null,null,null,null];
(statearr_24668[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_24668[(1)] = (1));

return statearr_24668;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_24651){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_24651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e24669){if((e24669 instanceof Object)){
var ex__24434__auto__ = e24669;
var statearr_24670_24688 = state_24651;
(statearr_24670_24688[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24689 = state_24651;
state_24651 = G__24689;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_24651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_24651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_24671 = f__24528__auto__.call(null);
(statearr_24671[(6)] = c__24527__auto___24673);

return statearr_24671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
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
var process__$1 = (function (p__24690){
var vec__24691 = p__24690;
var v = cljs.core.nth.call(null,vec__24691,(0),null);
var p = cljs.core.nth.call(null,vec__24691,(1),null);
var job = vec__24691;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24527__auto___24862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_24698){
var state_val_24699 = (state_24698[(1)]);
if((state_val_24699 === (1))){
var state_24698__$1 = state_24698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24698__$1,(2),res,v);
} else {
if((state_val_24699 === (2))){
var inst_24695 = (state_24698[(2)]);
var inst_24696 = cljs.core.async.close_BANG_.call(null,res);
var state_24698__$1 = (function (){var statearr_24700 = state_24698;
(statearr_24700[(7)] = inst_24695);

return statearr_24700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24698__$1,inst_24696);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0 = (function (){
var statearr_24701 = [null,null,null,null,null,null,null,null];
(statearr_24701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__);

(statearr_24701[(1)] = (1));

return statearr_24701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1 = (function (state_24698){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_24698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e24702){if((e24702 instanceof Object)){
var ex__24434__auto__ = e24702;
var statearr_24703_24863 = state_24698;
(statearr_24703_24863[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24864 = state_24698;
state_24698 = G__24864;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = function(state_24698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1.call(this,state_24698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_24704 = f__24528__auto__.call(null);
(statearr_24704[(6)] = c__24527__auto___24862);

return statearr_24704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24705){
var vec__24706 = p__24705;
var v = cljs.core.nth.call(null,vec__24706,(0),null);
var p = cljs.core.nth.call(null,vec__24706,(1),null);
var job = vec__24706;
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
var n__5636__auto___24865 = n;
var __24866 = (0);
while(true){
if((__24866 < n__5636__auto___24865)){
var G__24709_24867 = type;
var G__24709_24868__$1 = (((G__24709_24867 instanceof cljs.core.Keyword))?G__24709_24867.fqn:null);
switch (G__24709_24868__$1) {
case "compute":
var c__24527__auto___24870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24866,c__24527__auto___24870,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async){
return (function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = ((function (__24866,c__24527__auto___24870,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async){
return (function (state_24722){
var state_val_24723 = (state_24722[(1)]);
if((state_val_24723 === (1))){
var state_24722__$1 = state_24722;
var statearr_24724_24871 = state_24722__$1;
(statearr_24724_24871[(2)] = null);

(statearr_24724_24871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (2))){
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(4),jobs);
} else {
if((state_val_24723 === (3))){
var inst_24720 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24722__$1,inst_24720);
} else {
if((state_val_24723 === (4))){
var inst_24712 = (state_24722[(2)]);
var inst_24713 = process__$1.call(null,inst_24712);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24713)){
var statearr_24725_24872 = state_24722__$1;
(statearr_24725_24872[(1)] = (5));

} else {
var statearr_24726_24873 = state_24722__$1;
(statearr_24726_24873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (5))){
var state_24722__$1 = state_24722;
var statearr_24727_24874 = state_24722__$1;
(statearr_24727_24874[(2)] = null);

(statearr_24727_24874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (6))){
var state_24722__$1 = state_24722;
var statearr_24728_24875 = state_24722__$1;
(statearr_24728_24875[(2)] = null);

(statearr_24728_24875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (7))){
var inst_24718 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24729_24876 = state_24722__$1;
(statearr_24729_24876[(2)] = inst_24718);

(statearr_24729_24876[(1)] = (3));


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
});})(__24866,c__24527__auto___24870,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async))
;
return ((function (__24866,switch__24430__auto__,c__24527__auto___24870,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0 = (function (){
var statearr_24730 = [null,null,null,null,null,null,null];
(statearr_24730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__);

(statearr_24730[(1)] = (1));

return statearr_24730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1 = (function (state_24722){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_24722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e24731){if((e24731 instanceof Object)){
var ex__24434__auto__ = e24731;
var statearr_24732_24877 = state_24722;
(statearr_24732_24877[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24878 = state_24722;
state_24722 = G__24878;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = function(state_24722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1.call(this,state_24722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__;
})()
;})(__24866,switch__24430__auto__,c__24527__auto___24870,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async))
})();
var state__24529__auto__ = (function (){var statearr_24733 = f__24528__auto__.call(null);
(statearr_24733[(6)] = c__24527__auto___24870);

return statearr_24733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(__24866,c__24527__auto___24870,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async))
);


break;
case "async":
var c__24527__auto___24879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24866,c__24527__auto___24879,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async){
return (function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = ((function (__24866,c__24527__auto___24879,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async){
return (function (state_24746){
var state_val_24747 = (state_24746[(1)]);
if((state_val_24747 === (1))){
var state_24746__$1 = state_24746;
var statearr_24748_24880 = state_24746__$1;
(statearr_24748_24880[(2)] = null);

(statearr_24748_24880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24747 === (2))){
var state_24746__$1 = state_24746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24746__$1,(4),jobs);
} else {
if((state_val_24747 === (3))){
var inst_24744 = (state_24746[(2)]);
var state_24746__$1 = state_24746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24746__$1,inst_24744);
} else {
if((state_val_24747 === (4))){
var inst_24736 = (state_24746[(2)]);
var inst_24737 = async.call(null,inst_24736);
var state_24746__$1 = state_24746;
if(cljs.core.truth_(inst_24737)){
var statearr_24749_24881 = state_24746__$1;
(statearr_24749_24881[(1)] = (5));

} else {
var statearr_24750_24882 = state_24746__$1;
(statearr_24750_24882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24747 === (5))){
var state_24746__$1 = state_24746;
var statearr_24751_24883 = state_24746__$1;
(statearr_24751_24883[(2)] = null);

(statearr_24751_24883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24747 === (6))){
var state_24746__$1 = state_24746;
var statearr_24752_24884 = state_24746__$1;
(statearr_24752_24884[(2)] = null);

(statearr_24752_24884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24747 === (7))){
var inst_24742 = (state_24746[(2)]);
var state_24746__$1 = state_24746;
var statearr_24753_24885 = state_24746__$1;
(statearr_24753_24885[(2)] = inst_24742);

(statearr_24753_24885[(1)] = (3));


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
});})(__24866,c__24527__auto___24879,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async))
;
return ((function (__24866,switch__24430__auto__,c__24527__auto___24879,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0 = (function (){
var statearr_24754 = [null,null,null,null,null,null,null];
(statearr_24754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1 = (function (state_24746){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_24746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object)){
var ex__24434__auto__ = e24755;
var statearr_24756_24886 = state_24746;
(statearr_24756_24886[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24887 = state_24746;
state_24746 = G__24887;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = function(state_24746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1.call(this,state_24746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__;
})()
;})(__24866,switch__24430__auto__,c__24527__auto___24879,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async))
})();
var state__24529__auto__ = (function (){var statearr_24757 = f__24528__auto__.call(null);
(statearr_24757[(6)] = c__24527__auto___24879);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(__24866,c__24527__auto___24879,G__24709_24867,G__24709_24868__$1,n__5636__auto___24865,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24709_24868__$1)].join('')));

}

var G__24888 = (__24866 + (1));
__24866 = G__24888;
continue;
} else {
}
break;
}

var c__24527__auto___24889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_24779){
var state_val_24780 = (state_24779[(1)]);
if((state_val_24780 === (7))){
var inst_24775 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24781_24890 = state_24779__$1;
(statearr_24781_24890[(2)] = inst_24775);

(statearr_24781_24890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (1))){
var state_24779__$1 = state_24779;
var statearr_24782_24891 = state_24779__$1;
(statearr_24782_24891[(2)] = null);

(statearr_24782_24891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (4))){
var inst_24760 = (state_24779[(7)]);
var inst_24760__$1 = (state_24779[(2)]);
var inst_24761 = (inst_24760__$1 == null);
var state_24779__$1 = (function (){var statearr_24783 = state_24779;
(statearr_24783[(7)] = inst_24760__$1);

return statearr_24783;
})();
if(cljs.core.truth_(inst_24761)){
var statearr_24784_24892 = state_24779__$1;
(statearr_24784_24892[(1)] = (5));

} else {
var statearr_24785_24893 = state_24779__$1;
(statearr_24785_24893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (6))){
var inst_24765 = (state_24779[(8)]);
var inst_24760 = (state_24779[(7)]);
var inst_24765__$1 = cljs.core.async.chan.call(null,(1));
var inst_24766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24767 = [inst_24760,inst_24765__$1];
var inst_24768 = (new cljs.core.PersistentVector(null,2,(5),inst_24766,inst_24767,null));
var state_24779__$1 = (function (){var statearr_24786 = state_24779;
(statearr_24786[(8)] = inst_24765__$1);

return statearr_24786;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24779__$1,(8),jobs,inst_24768);
} else {
if((state_val_24780 === (3))){
var inst_24777 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24779__$1,inst_24777);
} else {
if((state_val_24780 === (2))){
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24779__$1,(4),from);
} else {
if((state_val_24780 === (9))){
var inst_24772 = (state_24779[(2)]);
var state_24779__$1 = (function (){var statearr_24787 = state_24779;
(statearr_24787[(9)] = inst_24772);

return statearr_24787;
})();
var statearr_24788_24894 = state_24779__$1;
(statearr_24788_24894[(2)] = null);

(statearr_24788_24894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (5))){
var inst_24763 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24779__$1 = state_24779;
var statearr_24789_24895 = state_24779__$1;
(statearr_24789_24895[(2)] = inst_24763);

(statearr_24789_24895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (8))){
var inst_24765 = (state_24779[(8)]);
var inst_24770 = (state_24779[(2)]);
var state_24779__$1 = (function (){var statearr_24790 = state_24779;
(statearr_24790[(10)] = inst_24770);

return statearr_24790;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24779__$1,(9),results,inst_24765);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0 = (function (){
var statearr_24791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__);

(statearr_24791[(1)] = (1));

return statearr_24791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1 = (function (state_24779){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_24779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e24792){if((e24792 instanceof Object)){
var ex__24434__auto__ = e24792;
var statearr_24793_24896 = state_24779;
(statearr_24793_24896[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24897 = state_24779;
state_24779 = G__24897;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = function(state_24779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1.call(this,state_24779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_24794 = f__24528__auto__.call(null);
(statearr_24794[(6)] = c__24527__auto___24889);

return statearr_24794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_24832){
var state_val_24833 = (state_24832[(1)]);
if((state_val_24833 === (7))){
var inst_24828 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
var statearr_24834_24898 = state_24832__$1;
(statearr_24834_24898[(2)] = inst_24828);

(statearr_24834_24898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (20))){
var state_24832__$1 = state_24832;
var statearr_24835_24899 = state_24832__$1;
(statearr_24835_24899[(2)] = null);

(statearr_24835_24899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (1))){
var state_24832__$1 = state_24832;
var statearr_24836_24900 = state_24832__$1;
(statearr_24836_24900[(2)] = null);

(statearr_24836_24900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (4))){
var inst_24797 = (state_24832[(7)]);
var inst_24797__$1 = (state_24832[(2)]);
var inst_24798 = (inst_24797__$1 == null);
var state_24832__$1 = (function (){var statearr_24837 = state_24832;
(statearr_24837[(7)] = inst_24797__$1);

return statearr_24837;
})();
if(cljs.core.truth_(inst_24798)){
var statearr_24838_24901 = state_24832__$1;
(statearr_24838_24901[(1)] = (5));

} else {
var statearr_24839_24902 = state_24832__$1;
(statearr_24839_24902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (15))){
var inst_24810 = (state_24832[(8)]);
var state_24832__$1 = state_24832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24832__$1,(18),to,inst_24810);
} else {
if((state_val_24833 === (21))){
var inst_24823 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
var statearr_24840_24903 = state_24832__$1;
(statearr_24840_24903[(2)] = inst_24823);

(statearr_24840_24903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (13))){
var inst_24825 = (state_24832[(2)]);
var state_24832__$1 = (function (){var statearr_24841 = state_24832;
(statearr_24841[(9)] = inst_24825);

return statearr_24841;
})();
var statearr_24842_24904 = state_24832__$1;
(statearr_24842_24904[(2)] = null);

(statearr_24842_24904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (6))){
var inst_24797 = (state_24832[(7)]);
var state_24832__$1 = state_24832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24832__$1,(11),inst_24797);
} else {
if((state_val_24833 === (17))){
var inst_24818 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
if(cljs.core.truth_(inst_24818)){
var statearr_24843_24905 = state_24832__$1;
(statearr_24843_24905[(1)] = (19));

} else {
var statearr_24844_24906 = state_24832__$1;
(statearr_24844_24906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (3))){
var inst_24830 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24832__$1,inst_24830);
} else {
if((state_val_24833 === (12))){
var inst_24807 = (state_24832[(10)]);
var state_24832__$1 = state_24832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24832__$1,(14),inst_24807);
} else {
if((state_val_24833 === (2))){
var state_24832__$1 = state_24832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24832__$1,(4),results);
} else {
if((state_val_24833 === (19))){
var state_24832__$1 = state_24832;
var statearr_24845_24907 = state_24832__$1;
(statearr_24845_24907[(2)] = null);

(statearr_24845_24907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (11))){
var inst_24807 = (state_24832[(2)]);
var state_24832__$1 = (function (){var statearr_24846 = state_24832;
(statearr_24846[(10)] = inst_24807);

return statearr_24846;
})();
var statearr_24847_24908 = state_24832__$1;
(statearr_24847_24908[(2)] = null);

(statearr_24847_24908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (9))){
var state_24832__$1 = state_24832;
var statearr_24848_24909 = state_24832__$1;
(statearr_24848_24909[(2)] = null);

(statearr_24848_24909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (5))){
var state_24832__$1 = state_24832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24849_24910 = state_24832__$1;
(statearr_24849_24910[(1)] = (8));

} else {
var statearr_24850_24911 = state_24832__$1;
(statearr_24850_24911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (14))){
var inst_24812 = (state_24832[(11)]);
var inst_24810 = (state_24832[(8)]);
var inst_24810__$1 = (state_24832[(2)]);
var inst_24811 = (inst_24810__$1 == null);
var inst_24812__$1 = cljs.core.not.call(null,inst_24811);
var state_24832__$1 = (function (){var statearr_24851 = state_24832;
(statearr_24851[(11)] = inst_24812__$1);

(statearr_24851[(8)] = inst_24810__$1);

return statearr_24851;
})();
if(inst_24812__$1){
var statearr_24852_24912 = state_24832__$1;
(statearr_24852_24912[(1)] = (15));

} else {
var statearr_24853_24913 = state_24832__$1;
(statearr_24853_24913[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (16))){
var inst_24812 = (state_24832[(11)]);
var state_24832__$1 = state_24832;
var statearr_24854_24914 = state_24832__$1;
(statearr_24854_24914[(2)] = inst_24812);

(statearr_24854_24914[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (10))){
var inst_24804 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
var statearr_24855_24915 = state_24832__$1;
(statearr_24855_24915[(2)] = inst_24804);

(statearr_24855_24915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (18))){
var inst_24815 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
var statearr_24856_24916 = state_24832__$1;
(statearr_24856_24916[(2)] = inst_24815);

(statearr_24856_24916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24833 === (8))){
var inst_24801 = cljs.core.async.close_BANG_.call(null,to);
var state_24832__$1 = state_24832;
var statearr_24857_24917 = state_24832__$1;
(statearr_24857_24917[(2)] = inst_24801);

(statearr_24857_24917[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0 = (function (){
var statearr_24858 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__);

(statearr_24858[(1)] = (1));

return statearr_24858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1 = (function (state_24832){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_24832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e24859){if((e24859 instanceof Object)){
var ex__24434__auto__ = e24859;
var statearr_24860_24918 = state_24832;
(statearr_24860_24918[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24919 = state_24832;
state_24832 = G__24919;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__ = function(state_24832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1.call(this,state_24832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_24861 = f__24528__auto__.call(null);
(statearr_24861[(6)] = c__24527__auto__);

return statearr_24861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
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
var G__24921 = arguments.length;
switch (G__24921) {
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
var G__24924 = arguments.length;
switch (G__24924) {
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
var G__24927 = arguments.length;
switch (G__24927) {
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
var c__24527__auto___24976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_24953){
var state_val_24954 = (state_24953[(1)]);
if((state_val_24954 === (7))){
var inst_24949 = (state_24953[(2)]);
var state_24953__$1 = state_24953;
var statearr_24955_24977 = state_24953__$1;
(statearr_24955_24977[(2)] = inst_24949);

(statearr_24955_24977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (1))){
var state_24953__$1 = state_24953;
var statearr_24956_24978 = state_24953__$1;
(statearr_24956_24978[(2)] = null);

(statearr_24956_24978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (4))){
var inst_24930 = (state_24953[(7)]);
var inst_24930__$1 = (state_24953[(2)]);
var inst_24931 = (inst_24930__$1 == null);
var state_24953__$1 = (function (){var statearr_24957 = state_24953;
(statearr_24957[(7)] = inst_24930__$1);

return statearr_24957;
})();
if(cljs.core.truth_(inst_24931)){
var statearr_24958_24979 = state_24953__$1;
(statearr_24958_24979[(1)] = (5));

} else {
var statearr_24959_24980 = state_24953__$1;
(statearr_24959_24980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (13))){
var state_24953__$1 = state_24953;
var statearr_24960_24981 = state_24953__$1;
(statearr_24960_24981[(2)] = null);

(statearr_24960_24981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (6))){
var inst_24930 = (state_24953[(7)]);
var inst_24936 = p.call(null,inst_24930);
var state_24953__$1 = state_24953;
if(cljs.core.truth_(inst_24936)){
var statearr_24961_24982 = state_24953__$1;
(statearr_24961_24982[(1)] = (9));

} else {
var statearr_24962_24983 = state_24953__$1;
(statearr_24962_24983[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (3))){
var inst_24951 = (state_24953[(2)]);
var state_24953__$1 = state_24953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24953__$1,inst_24951);
} else {
if((state_val_24954 === (12))){
var state_24953__$1 = state_24953;
var statearr_24963_24984 = state_24953__$1;
(statearr_24963_24984[(2)] = null);

(statearr_24963_24984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (2))){
var state_24953__$1 = state_24953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24953__$1,(4),ch);
} else {
if((state_val_24954 === (11))){
var inst_24930 = (state_24953[(7)]);
var inst_24940 = (state_24953[(2)]);
var state_24953__$1 = state_24953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24953__$1,(8),inst_24940,inst_24930);
} else {
if((state_val_24954 === (9))){
var state_24953__$1 = state_24953;
var statearr_24964_24985 = state_24953__$1;
(statearr_24964_24985[(2)] = tc);

(statearr_24964_24985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (5))){
var inst_24933 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24934 = cljs.core.async.close_BANG_.call(null,fc);
var state_24953__$1 = (function (){var statearr_24965 = state_24953;
(statearr_24965[(8)] = inst_24933);

return statearr_24965;
})();
var statearr_24966_24986 = state_24953__$1;
(statearr_24966_24986[(2)] = inst_24934);

(statearr_24966_24986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (14))){
var inst_24947 = (state_24953[(2)]);
var state_24953__$1 = state_24953;
var statearr_24967_24987 = state_24953__$1;
(statearr_24967_24987[(2)] = inst_24947);

(statearr_24967_24987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (10))){
var state_24953__$1 = state_24953;
var statearr_24968_24988 = state_24953__$1;
(statearr_24968_24988[(2)] = fc);

(statearr_24968_24988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24954 === (8))){
var inst_24942 = (state_24953[(2)]);
var state_24953__$1 = state_24953;
if(cljs.core.truth_(inst_24942)){
var statearr_24969_24989 = state_24953__$1;
(statearr_24969_24989[(1)] = (12));

} else {
var statearr_24970_24990 = state_24953__$1;
(statearr_24970_24990[(1)] = (13));

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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_24971 = [null,null,null,null,null,null,null,null,null];
(statearr_24971[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_24971[(1)] = (1));

return statearr_24971;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_24953){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_24953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e24972){if((e24972 instanceof Object)){
var ex__24434__auto__ = e24972;
var statearr_24973_24991 = state_24953;
(statearr_24973_24991[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24992 = state_24953;
state_24953 = G__24992;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_24953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_24953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_24974 = f__24528__auto__.call(null);
(statearr_24974[(6)] = c__24527__auto___24976);

return statearr_24974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
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
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25013){
var state_val_25014 = (state_25013[(1)]);
if((state_val_25014 === (7))){
var inst_25009 = (state_25013[(2)]);
var state_25013__$1 = state_25013;
var statearr_25015_25033 = state_25013__$1;
(statearr_25015_25033[(2)] = inst_25009);

(statearr_25015_25033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (1))){
var inst_24993 = init;
var state_25013__$1 = (function (){var statearr_25016 = state_25013;
(statearr_25016[(7)] = inst_24993);

return statearr_25016;
})();
var statearr_25017_25034 = state_25013__$1;
(statearr_25017_25034[(2)] = null);

(statearr_25017_25034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (4))){
var inst_24996 = (state_25013[(8)]);
var inst_24996__$1 = (state_25013[(2)]);
var inst_24997 = (inst_24996__$1 == null);
var state_25013__$1 = (function (){var statearr_25018 = state_25013;
(statearr_25018[(8)] = inst_24996__$1);

return statearr_25018;
})();
if(cljs.core.truth_(inst_24997)){
var statearr_25019_25035 = state_25013__$1;
(statearr_25019_25035[(1)] = (5));

} else {
var statearr_25020_25036 = state_25013__$1;
(statearr_25020_25036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (6))){
var inst_25000 = (state_25013[(9)]);
var inst_24993 = (state_25013[(7)]);
var inst_24996 = (state_25013[(8)]);
var inst_25000__$1 = f.call(null,inst_24993,inst_24996);
var inst_25001 = cljs.core.reduced_QMARK_.call(null,inst_25000__$1);
var state_25013__$1 = (function (){var statearr_25021 = state_25013;
(statearr_25021[(9)] = inst_25000__$1);

return statearr_25021;
})();
if(inst_25001){
var statearr_25022_25037 = state_25013__$1;
(statearr_25022_25037[(1)] = (8));

} else {
var statearr_25023_25038 = state_25013__$1;
(statearr_25023_25038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (3))){
var inst_25011 = (state_25013[(2)]);
var state_25013__$1 = state_25013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25013__$1,inst_25011);
} else {
if((state_val_25014 === (2))){
var state_25013__$1 = state_25013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25013__$1,(4),ch);
} else {
if((state_val_25014 === (9))){
var inst_25000 = (state_25013[(9)]);
var inst_24993 = inst_25000;
var state_25013__$1 = (function (){var statearr_25024 = state_25013;
(statearr_25024[(7)] = inst_24993);

return statearr_25024;
})();
var statearr_25025_25039 = state_25013__$1;
(statearr_25025_25039[(2)] = null);

(statearr_25025_25039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (5))){
var inst_24993 = (state_25013[(7)]);
var state_25013__$1 = state_25013;
var statearr_25026_25040 = state_25013__$1;
(statearr_25026_25040[(2)] = inst_24993);

(statearr_25026_25040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (10))){
var inst_25007 = (state_25013[(2)]);
var state_25013__$1 = state_25013;
var statearr_25027_25041 = state_25013__$1;
(statearr_25027_25041[(2)] = inst_25007);

(statearr_25027_25041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (8))){
var inst_25000 = (state_25013[(9)]);
var inst_25003 = cljs.core.deref.call(null,inst_25000);
var state_25013__$1 = state_25013;
var statearr_25028_25042 = state_25013__$1;
(statearr_25028_25042[(2)] = inst_25003);

(statearr_25028_25042[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__24431__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24431__auto____0 = (function (){
var statearr_25029 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25029[(0)] = cljs$core$async$reduce_$_state_machine__24431__auto__);

(statearr_25029[(1)] = (1));

return statearr_25029;
});
var cljs$core$async$reduce_$_state_machine__24431__auto____1 = (function (state_25013){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e25030){if((e25030 instanceof Object)){
var ex__24434__auto__ = e25030;
var statearr_25031_25043 = state_25013;
(statearr_25031_25043[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25044 = state_25013;
state_25013 = G__25044;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24431__auto__ = function(state_25013){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24431__auto____1.call(this,state_25013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24431__auto____0;
cljs$core$async$reduce_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24431__auto____1;
return cljs$core$async$reduce_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_25032 = f__24528__auto__.call(null);
(statearr_25032[(6)] = c__24527__auto__);

return statearr_25032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25050){
var state_val_25051 = (state_25050[(1)]);
if((state_val_25051 === (1))){
var inst_25045 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25050__$1 = state_25050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25050__$1,(2),inst_25045);
} else {
if((state_val_25051 === (2))){
var inst_25047 = (state_25050[(2)]);
var inst_25048 = f__$1.call(null,inst_25047);
var state_25050__$1 = state_25050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25050__$1,inst_25048);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24431__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24431__auto____0 = (function (){
var statearr_25052 = [null,null,null,null,null,null,null];
(statearr_25052[(0)] = cljs$core$async$transduce_$_state_machine__24431__auto__);

(statearr_25052[(1)] = (1));

return statearr_25052;
});
var cljs$core$async$transduce_$_state_machine__24431__auto____1 = (function (state_25050){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e25053){if((e25053 instanceof Object)){
var ex__24434__auto__ = e25053;
var statearr_25054_25056 = state_25050;
(statearr_25054_25056[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25057 = state_25050;
state_25050 = G__25057;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24431__auto__ = function(state_25050){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24431__auto____1.call(this,state_25050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24431__auto____0;
cljs$core$async$transduce_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24431__auto____1;
return cljs$core$async$transduce_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_25055 = f__24528__auto__.call(null);
(statearr_25055[(6)] = c__24527__auto__);

return statearr_25055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
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
var G__25059 = arguments.length;
switch (G__25059) {
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
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25084){
var state_val_25085 = (state_25084[(1)]);
if((state_val_25085 === (7))){
var inst_25066 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25086_25107 = state_25084__$1;
(statearr_25086_25107[(2)] = inst_25066);

(statearr_25086_25107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (1))){
var inst_25060 = cljs.core.seq.call(null,coll);
var inst_25061 = inst_25060;
var state_25084__$1 = (function (){var statearr_25087 = state_25084;
(statearr_25087[(7)] = inst_25061);

return statearr_25087;
})();
var statearr_25088_25108 = state_25084__$1;
(statearr_25088_25108[(2)] = null);

(statearr_25088_25108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (4))){
var inst_25061 = (state_25084[(7)]);
var inst_25064 = cljs.core.first.call(null,inst_25061);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25084__$1,(7),ch,inst_25064);
} else {
if((state_val_25085 === (13))){
var inst_25078 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25089_25109 = state_25084__$1;
(statearr_25089_25109[(2)] = inst_25078);

(statearr_25089_25109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (6))){
var inst_25069 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25069)){
var statearr_25090_25110 = state_25084__$1;
(statearr_25090_25110[(1)] = (8));

} else {
var statearr_25091_25111 = state_25084__$1;
(statearr_25091_25111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (3))){
var inst_25082 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25084__$1,inst_25082);
} else {
if((state_val_25085 === (12))){
var state_25084__$1 = state_25084;
var statearr_25092_25112 = state_25084__$1;
(statearr_25092_25112[(2)] = null);

(statearr_25092_25112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (2))){
var inst_25061 = (state_25084[(7)]);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25061)){
var statearr_25093_25113 = state_25084__$1;
(statearr_25093_25113[(1)] = (4));

} else {
var statearr_25094_25114 = state_25084__$1;
(statearr_25094_25114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (11))){
var inst_25075 = cljs.core.async.close_BANG_.call(null,ch);
var state_25084__$1 = state_25084;
var statearr_25095_25115 = state_25084__$1;
(statearr_25095_25115[(2)] = inst_25075);

(statearr_25095_25115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (9))){
var state_25084__$1 = state_25084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25096_25116 = state_25084__$1;
(statearr_25096_25116[(1)] = (11));

} else {
var statearr_25097_25117 = state_25084__$1;
(statearr_25097_25117[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (5))){
var inst_25061 = (state_25084[(7)]);
var state_25084__$1 = state_25084;
var statearr_25098_25118 = state_25084__$1;
(statearr_25098_25118[(2)] = inst_25061);

(statearr_25098_25118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (10))){
var inst_25080 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25099_25119 = state_25084__$1;
(statearr_25099_25119[(2)] = inst_25080);

(statearr_25099_25119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (8))){
var inst_25061 = (state_25084[(7)]);
var inst_25071 = cljs.core.next.call(null,inst_25061);
var inst_25061__$1 = inst_25071;
var state_25084__$1 = (function (){var statearr_25100 = state_25084;
(statearr_25100[(7)] = inst_25061__$1);

return statearr_25100;
})();
var statearr_25101_25120 = state_25084__$1;
(statearr_25101_25120[(2)] = null);

(statearr_25101_25120[(1)] = (2));


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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_25102 = [null,null,null,null,null,null,null,null];
(statearr_25102[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_25102[(1)] = (1));

return statearr_25102;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_25084){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e25103){if((e25103 instanceof Object)){
var ex__24434__auto__ = e25103;
var statearr_25104_25121 = state_25084;
(statearr_25104_25121[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25122 = state_25084;
state_25084 = G__25122;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_25084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_25084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_25105 = f__24528__auto__.call(null);
(statearr_25105[(6)] = c__24527__auto__);

return statearr_25105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_25123 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_25123.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25124 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_25124.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25125 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_25125.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25126 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_25126.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25127 = (function (ch,cs,meta25128){
this.ch = ch;
this.cs = cs;
this.meta25128 = meta25128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25129,meta25128__$1){
var self__ = this;
var _25129__$1 = this;
return (new cljs.core.async.t_cljs$core$async25127(self__.ch,self__.cs,meta25128__$1));
}));

(cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25129){
var self__ = this;
var _25129__$1 = this;
return self__.meta25128;
}));

(cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25128","meta25128",-28303015,null)], null);
}));

(cljs.core.async.t_cljs$core$async25127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25127");

(cljs.core.async.t_cljs$core$async25127.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25127.
 */
cljs.core.async.__GT_t_cljs$core$async25127 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25127(ch__$1,cs__$1,meta25128){
return (new cljs.core.async.t_cljs$core$async25127(ch__$1,cs__$1,meta25128));
});

}

return (new cljs.core.async.t_cljs$core$async25127(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24527__auto___25349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25264){
var state_val_25265 = (state_25264[(1)]);
if((state_val_25265 === (7))){
var inst_25260 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25266_25350 = state_25264__$1;
(statearr_25266_25350[(2)] = inst_25260);

(statearr_25266_25350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (20))){
var inst_25163 = (state_25264[(7)]);
var inst_25175 = cljs.core.first.call(null,inst_25163);
var inst_25176 = cljs.core.nth.call(null,inst_25175,(0),null);
var inst_25177 = cljs.core.nth.call(null,inst_25175,(1),null);
var state_25264__$1 = (function (){var statearr_25267 = state_25264;
(statearr_25267[(8)] = inst_25176);

return statearr_25267;
})();
if(cljs.core.truth_(inst_25177)){
var statearr_25268_25351 = state_25264__$1;
(statearr_25268_25351[(1)] = (22));

} else {
var statearr_25269_25352 = state_25264__$1;
(statearr_25269_25352[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (27))){
var inst_25207 = (state_25264[(9)]);
var inst_25205 = (state_25264[(10)]);
var inst_25132 = (state_25264[(11)]);
var inst_25212 = (state_25264[(12)]);
var inst_25212__$1 = cljs.core._nth.call(null,inst_25205,inst_25207);
var inst_25213 = cljs.core.async.put_BANG_.call(null,inst_25212__$1,inst_25132,done);
var state_25264__$1 = (function (){var statearr_25270 = state_25264;
(statearr_25270[(12)] = inst_25212__$1);

return statearr_25270;
})();
if(cljs.core.truth_(inst_25213)){
var statearr_25271_25353 = state_25264__$1;
(statearr_25271_25353[(1)] = (30));

} else {
var statearr_25272_25354 = state_25264__$1;
(statearr_25272_25354[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (1))){
var state_25264__$1 = state_25264;
var statearr_25273_25355 = state_25264__$1;
(statearr_25273_25355[(2)] = null);

(statearr_25273_25355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (24))){
var inst_25163 = (state_25264[(7)]);
var inst_25182 = (state_25264[(2)]);
var inst_25183 = cljs.core.next.call(null,inst_25163);
var inst_25141 = inst_25183;
var inst_25142 = null;
var inst_25143 = (0);
var inst_25144 = (0);
var state_25264__$1 = (function (){var statearr_25274 = state_25264;
(statearr_25274[(13)] = inst_25182);

(statearr_25274[(14)] = inst_25141);

(statearr_25274[(15)] = inst_25143);

(statearr_25274[(16)] = inst_25142);

(statearr_25274[(17)] = inst_25144);

return statearr_25274;
})();
var statearr_25275_25356 = state_25264__$1;
(statearr_25275_25356[(2)] = null);

(statearr_25275_25356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (39))){
var state_25264__$1 = state_25264;
var statearr_25279_25357 = state_25264__$1;
(statearr_25279_25357[(2)] = null);

(statearr_25279_25357[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (4))){
var inst_25132 = (state_25264[(11)]);
var inst_25132__$1 = (state_25264[(2)]);
var inst_25133 = (inst_25132__$1 == null);
var state_25264__$1 = (function (){var statearr_25280 = state_25264;
(statearr_25280[(11)] = inst_25132__$1);

return statearr_25280;
})();
if(cljs.core.truth_(inst_25133)){
var statearr_25281_25358 = state_25264__$1;
(statearr_25281_25358[(1)] = (5));

} else {
var statearr_25282_25359 = state_25264__$1;
(statearr_25282_25359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (15))){
var inst_25141 = (state_25264[(14)]);
var inst_25143 = (state_25264[(15)]);
var inst_25142 = (state_25264[(16)]);
var inst_25144 = (state_25264[(17)]);
var inst_25159 = (state_25264[(2)]);
var inst_25160 = (inst_25144 + (1));
var tmp25276 = inst_25141;
var tmp25277 = inst_25143;
var tmp25278 = inst_25142;
var inst_25141__$1 = tmp25276;
var inst_25142__$1 = tmp25278;
var inst_25143__$1 = tmp25277;
var inst_25144__$1 = inst_25160;
var state_25264__$1 = (function (){var statearr_25283 = state_25264;
(statearr_25283[(18)] = inst_25159);

(statearr_25283[(14)] = inst_25141__$1);

(statearr_25283[(15)] = inst_25143__$1);

(statearr_25283[(16)] = inst_25142__$1);

(statearr_25283[(17)] = inst_25144__$1);

return statearr_25283;
})();
var statearr_25284_25360 = state_25264__$1;
(statearr_25284_25360[(2)] = null);

(statearr_25284_25360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (21))){
var inst_25186 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25288_25361 = state_25264__$1;
(statearr_25288_25361[(2)] = inst_25186);

(statearr_25288_25361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (31))){
var inst_25212 = (state_25264[(12)]);
var inst_25216 = done.call(null,null);
var inst_25217 = cljs.core.async.untap_STAR_.call(null,m,inst_25212);
var state_25264__$1 = (function (){var statearr_25289 = state_25264;
(statearr_25289[(19)] = inst_25216);

return statearr_25289;
})();
var statearr_25290_25362 = state_25264__$1;
(statearr_25290_25362[(2)] = inst_25217);

(statearr_25290_25362[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (32))){
var inst_25207 = (state_25264[(9)]);
var inst_25204 = (state_25264[(20)]);
var inst_25205 = (state_25264[(10)]);
var inst_25206 = (state_25264[(21)]);
var inst_25219 = (state_25264[(2)]);
var inst_25220 = (inst_25207 + (1));
var tmp25285 = inst_25204;
var tmp25286 = inst_25205;
var tmp25287 = inst_25206;
var inst_25204__$1 = tmp25285;
var inst_25205__$1 = tmp25286;
var inst_25206__$1 = tmp25287;
var inst_25207__$1 = inst_25220;
var state_25264__$1 = (function (){var statearr_25291 = state_25264;
(statearr_25291[(9)] = inst_25207__$1);

(statearr_25291[(20)] = inst_25204__$1);

(statearr_25291[(22)] = inst_25219);

(statearr_25291[(10)] = inst_25205__$1);

(statearr_25291[(21)] = inst_25206__$1);

return statearr_25291;
})();
var statearr_25292_25363 = state_25264__$1;
(statearr_25292_25363[(2)] = null);

(statearr_25292_25363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (40))){
var inst_25232 = (state_25264[(23)]);
var inst_25236 = done.call(null,null);
var inst_25237 = cljs.core.async.untap_STAR_.call(null,m,inst_25232);
var state_25264__$1 = (function (){var statearr_25293 = state_25264;
(statearr_25293[(24)] = inst_25236);

return statearr_25293;
})();
var statearr_25294_25364 = state_25264__$1;
(statearr_25294_25364[(2)] = inst_25237);

(statearr_25294_25364[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (33))){
var inst_25223 = (state_25264[(25)]);
var inst_25225 = cljs.core.chunked_seq_QMARK_.call(null,inst_25223);
var state_25264__$1 = state_25264;
if(inst_25225){
var statearr_25295_25365 = state_25264__$1;
(statearr_25295_25365[(1)] = (36));

} else {
var statearr_25296_25366 = state_25264__$1;
(statearr_25296_25366[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (13))){
var inst_25153 = (state_25264[(26)]);
var inst_25156 = cljs.core.async.close_BANG_.call(null,inst_25153);
var state_25264__$1 = state_25264;
var statearr_25297_25367 = state_25264__$1;
(statearr_25297_25367[(2)] = inst_25156);

(statearr_25297_25367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (22))){
var inst_25176 = (state_25264[(8)]);
var inst_25179 = cljs.core.async.close_BANG_.call(null,inst_25176);
var state_25264__$1 = state_25264;
var statearr_25298_25368 = state_25264__$1;
(statearr_25298_25368[(2)] = inst_25179);

(statearr_25298_25368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (36))){
var inst_25223 = (state_25264[(25)]);
var inst_25227 = cljs.core.chunk_first.call(null,inst_25223);
var inst_25228 = cljs.core.chunk_rest.call(null,inst_25223);
var inst_25229 = cljs.core.count.call(null,inst_25227);
var inst_25204 = inst_25228;
var inst_25205 = inst_25227;
var inst_25206 = inst_25229;
var inst_25207 = (0);
var state_25264__$1 = (function (){var statearr_25299 = state_25264;
(statearr_25299[(9)] = inst_25207);

(statearr_25299[(20)] = inst_25204);

(statearr_25299[(10)] = inst_25205);

(statearr_25299[(21)] = inst_25206);

return statearr_25299;
})();
var statearr_25300_25369 = state_25264__$1;
(statearr_25300_25369[(2)] = null);

(statearr_25300_25369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (41))){
var inst_25223 = (state_25264[(25)]);
var inst_25239 = (state_25264[(2)]);
var inst_25240 = cljs.core.next.call(null,inst_25223);
var inst_25204 = inst_25240;
var inst_25205 = null;
var inst_25206 = (0);
var inst_25207 = (0);
var state_25264__$1 = (function (){var statearr_25301 = state_25264;
(statearr_25301[(9)] = inst_25207);

(statearr_25301[(20)] = inst_25204);

(statearr_25301[(10)] = inst_25205);

(statearr_25301[(27)] = inst_25239);

(statearr_25301[(21)] = inst_25206);

return statearr_25301;
})();
var statearr_25302_25370 = state_25264__$1;
(statearr_25302_25370[(2)] = null);

(statearr_25302_25370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (43))){
var state_25264__$1 = state_25264;
var statearr_25303_25371 = state_25264__$1;
(statearr_25303_25371[(2)] = null);

(statearr_25303_25371[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (29))){
var inst_25248 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25304_25372 = state_25264__$1;
(statearr_25304_25372[(2)] = inst_25248);

(statearr_25304_25372[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (44))){
var inst_25257 = (state_25264[(2)]);
var state_25264__$1 = (function (){var statearr_25305 = state_25264;
(statearr_25305[(28)] = inst_25257);

return statearr_25305;
})();
var statearr_25306_25373 = state_25264__$1;
(statearr_25306_25373[(2)] = null);

(statearr_25306_25373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (6))){
var inst_25196 = (state_25264[(29)]);
var inst_25195 = cljs.core.deref.call(null,cs);
var inst_25196__$1 = cljs.core.keys.call(null,inst_25195);
var inst_25197 = cljs.core.count.call(null,inst_25196__$1);
var inst_25198 = cljs.core.reset_BANG_.call(null,dctr,inst_25197);
var inst_25203 = cljs.core.seq.call(null,inst_25196__$1);
var inst_25204 = inst_25203;
var inst_25205 = null;
var inst_25206 = (0);
var inst_25207 = (0);
var state_25264__$1 = (function (){var statearr_25307 = state_25264;
(statearr_25307[(9)] = inst_25207);

(statearr_25307[(29)] = inst_25196__$1);

(statearr_25307[(20)] = inst_25204);

(statearr_25307[(30)] = inst_25198);

(statearr_25307[(10)] = inst_25205);

(statearr_25307[(21)] = inst_25206);

return statearr_25307;
})();
var statearr_25308_25374 = state_25264__$1;
(statearr_25308_25374[(2)] = null);

(statearr_25308_25374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (28))){
var inst_25204 = (state_25264[(20)]);
var inst_25223 = (state_25264[(25)]);
var inst_25223__$1 = cljs.core.seq.call(null,inst_25204);
var state_25264__$1 = (function (){var statearr_25309 = state_25264;
(statearr_25309[(25)] = inst_25223__$1);

return statearr_25309;
})();
if(inst_25223__$1){
var statearr_25310_25375 = state_25264__$1;
(statearr_25310_25375[(1)] = (33));

} else {
var statearr_25311_25376 = state_25264__$1;
(statearr_25311_25376[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (25))){
var inst_25207 = (state_25264[(9)]);
var inst_25206 = (state_25264[(21)]);
var inst_25209 = (inst_25207 < inst_25206);
var inst_25210 = inst_25209;
var state_25264__$1 = state_25264;
if(cljs.core.truth_(inst_25210)){
var statearr_25312_25377 = state_25264__$1;
(statearr_25312_25377[(1)] = (27));

} else {
var statearr_25313_25378 = state_25264__$1;
(statearr_25313_25378[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (34))){
var state_25264__$1 = state_25264;
var statearr_25314_25379 = state_25264__$1;
(statearr_25314_25379[(2)] = null);

(statearr_25314_25379[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (17))){
var state_25264__$1 = state_25264;
var statearr_25315_25380 = state_25264__$1;
(statearr_25315_25380[(2)] = null);

(statearr_25315_25380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (3))){
var inst_25262 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25264__$1,inst_25262);
} else {
if((state_val_25265 === (12))){
var inst_25191 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25316_25381 = state_25264__$1;
(statearr_25316_25381[(2)] = inst_25191);

(statearr_25316_25381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (2))){
var state_25264__$1 = state_25264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25264__$1,(4),ch);
} else {
if((state_val_25265 === (23))){
var state_25264__$1 = state_25264;
var statearr_25317_25382 = state_25264__$1;
(statearr_25317_25382[(2)] = null);

(statearr_25317_25382[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (35))){
var inst_25246 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25318_25383 = state_25264__$1;
(statearr_25318_25383[(2)] = inst_25246);

(statearr_25318_25383[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (19))){
var inst_25163 = (state_25264[(7)]);
var inst_25167 = cljs.core.chunk_first.call(null,inst_25163);
var inst_25168 = cljs.core.chunk_rest.call(null,inst_25163);
var inst_25169 = cljs.core.count.call(null,inst_25167);
var inst_25141 = inst_25168;
var inst_25142 = inst_25167;
var inst_25143 = inst_25169;
var inst_25144 = (0);
var state_25264__$1 = (function (){var statearr_25319 = state_25264;
(statearr_25319[(14)] = inst_25141);

(statearr_25319[(15)] = inst_25143);

(statearr_25319[(16)] = inst_25142);

(statearr_25319[(17)] = inst_25144);

return statearr_25319;
})();
var statearr_25320_25384 = state_25264__$1;
(statearr_25320_25384[(2)] = null);

(statearr_25320_25384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (11))){
var inst_25141 = (state_25264[(14)]);
var inst_25163 = (state_25264[(7)]);
var inst_25163__$1 = cljs.core.seq.call(null,inst_25141);
var state_25264__$1 = (function (){var statearr_25321 = state_25264;
(statearr_25321[(7)] = inst_25163__$1);

return statearr_25321;
})();
if(inst_25163__$1){
var statearr_25322_25385 = state_25264__$1;
(statearr_25322_25385[(1)] = (16));

} else {
var statearr_25323_25386 = state_25264__$1;
(statearr_25323_25386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (9))){
var inst_25193 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25324_25387 = state_25264__$1;
(statearr_25324_25387[(2)] = inst_25193);

(statearr_25324_25387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (5))){
var inst_25139 = cljs.core.deref.call(null,cs);
var inst_25140 = cljs.core.seq.call(null,inst_25139);
var inst_25141 = inst_25140;
var inst_25142 = null;
var inst_25143 = (0);
var inst_25144 = (0);
var state_25264__$1 = (function (){var statearr_25325 = state_25264;
(statearr_25325[(14)] = inst_25141);

(statearr_25325[(15)] = inst_25143);

(statearr_25325[(16)] = inst_25142);

(statearr_25325[(17)] = inst_25144);

return statearr_25325;
})();
var statearr_25326_25388 = state_25264__$1;
(statearr_25326_25388[(2)] = null);

(statearr_25326_25388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (14))){
var state_25264__$1 = state_25264;
var statearr_25327_25389 = state_25264__$1;
(statearr_25327_25389[(2)] = null);

(statearr_25327_25389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (45))){
var inst_25254 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25328_25390 = state_25264__$1;
(statearr_25328_25390[(2)] = inst_25254);

(statearr_25328_25390[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (26))){
var inst_25196 = (state_25264[(29)]);
var inst_25250 = (state_25264[(2)]);
var inst_25251 = cljs.core.seq.call(null,inst_25196);
var state_25264__$1 = (function (){var statearr_25329 = state_25264;
(statearr_25329[(31)] = inst_25250);

return statearr_25329;
})();
if(inst_25251){
var statearr_25330_25391 = state_25264__$1;
(statearr_25330_25391[(1)] = (42));

} else {
var statearr_25331_25392 = state_25264__$1;
(statearr_25331_25392[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (16))){
var inst_25163 = (state_25264[(7)]);
var inst_25165 = cljs.core.chunked_seq_QMARK_.call(null,inst_25163);
var state_25264__$1 = state_25264;
if(inst_25165){
var statearr_25332_25393 = state_25264__$1;
(statearr_25332_25393[(1)] = (19));

} else {
var statearr_25333_25394 = state_25264__$1;
(statearr_25333_25394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (38))){
var inst_25243 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25334_25395 = state_25264__$1;
(statearr_25334_25395[(2)] = inst_25243);

(statearr_25334_25395[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (30))){
var state_25264__$1 = state_25264;
var statearr_25335_25396 = state_25264__$1;
(statearr_25335_25396[(2)] = null);

(statearr_25335_25396[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (10))){
var inst_25142 = (state_25264[(16)]);
var inst_25144 = (state_25264[(17)]);
var inst_25152 = cljs.core._nth.call(null,inst_25142,inst_25144);
var inst_25153 = cljs.core.nth.call(null,inst_25152,(0),null);
var inst_25154 = cljs.core.nth.call(null,inst_25152,(1),null);
var state_25264__$1 = (function (){var statearr_25336 = state_25264;
(statearr_25336[(26)] = inst_25153);

return statearr_25336;
})();
if(cljs.core.truth_(inst_25154)){
var statearr_25337_25397 = state_25264__$1;
(statearr_25337_25397[(1)] = (13));

} else {
var statearr_25338_25398 = state_25264__$1;
(statearr_25338_25398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (18))){
var inst_25189 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25339_25399 = state_25264__$1;
(statearr_25339_25399[(2)] = inst_25189);

(statearr_25339_25399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (42))){
var state_25264__$1 = state_25264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25264__$1,(45),dchan);
} else {
if((state_val_25265 === (37))){
var inst_25232 = (state_25264[(23)]);
var inst_25223 = (state_25264[(25)]);
var inst_25132 = (state_25264[(11)]);
var inst_25232__$1 = cljs.core.first.call(null,inst_25223);
var inst_25233 = cljs.core.async.put_BANG_.call(null,inst_25232__$1,inst_25132,done);
var state_25264__$1 = (function (){var statearr_25340 = state_25264;
(statearr_25340[(23)] = inst_25232__$1);

return statearr_25340;
})();
if(cljs.core.truth_(inst_25233)){
var statearr_25341_25400 = state_25264__$1;
(statearr_25341_25400[(1)] = (39));

} else {
var statearr_25342_25401 = state_25264__$1;
(statearr_25342_25401[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (8))){
var inst_25143 = (state_25264[(15)]);
var inst_25144 = (state_25264[(17)]);
var inst_25146 = (inst_25144 < inst_25143);
var inst_25147 = inst_25146;
var state_25264__$1 = state_25264;
if(cljs.core.truth_(inst_25147)){
var statearr_25343_25402 = state_25264__$1;
(statearr_25343_25402[(1)] = (10));

} else {
var statearr_25344_25403 = state_25264__$1;
(statearr_25344_25403[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24431__auto__ = null;
var cljs$core$async$mult_$_state_machine__24431__auto____0 = (function (){
var statearr_25345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25345[(0)] = cljs$core$async$mult_$_state_machine__24431__auto__);

(statearr_25345[(1)] = (1));

return statearr_25345;
});
var cljs$core$async$mult_$_state_machine__24431__auto____1 = (function (state_25264){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e25346){if((e25346 instanceof Object)){
var ex__24434__auto__ = e25346;
var statearr_25347_25404 = state_25264;
(statearr_25347_25404[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25405 = state_25264;
state_25264 = G__25405;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24431__auto__ = function(state_25264){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24431__auto____1.call(this,state_25264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24431__auto____0;
cljs$core$async$mult_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24431__auto____1;
return cljs$core$async$mult_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_25348 = f__24528__auto__.call(null);
(statearr_25348[(6)] = c__24527__auto___25349);

return statearr_25348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
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
var G__25407 = arguments.length;
switch (G__25407) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_25409 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_25409.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25410 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_25410.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25411 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25411.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25412 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_25412.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25413 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25413.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25423 = arguments.length;
var i__5770__auto___25424 = (0);
while(true){
if((i__5770__auto___25424 < len__5769__auto___25423)){
args__5775__auto__.push((arguments[i__5770__auto___25424]));

var G__25425 = (i__5770__auto___25424 + (1));
i__5770__auto___25424 = G__25425;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25418){
var map__25419 = p__25418;
var map__25419__$1 = cljs.core.__destructure_map.call(null,map__25419);
var opts = map__25419__$1;
var statearr_25420_25426 = state;
(statearr_25420_25426[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25421_25427 = state;
(statearr_25421_25427[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_25422_25428 = state;
(statearr_25422_25428[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25414){
var G__25415 = cljs.core.first.call(null,seq25414);
var seq25414__$1 = cljs.core.next.call(null,seq25414);
var G__25416 = cljs.core.first.call(null,seq25414__$1);
var seq25414__$2 = cljs.core.next.call(null,seq25414__$1);
var G__25417 = cljs.core.first.call(null,seq25414__$2);
var seq25414__$3 = cljs.core.next.call(null,seq25414__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25415,G__25416,G__25417,seq25414__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25429 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25430){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25430 = meta25430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25431,meta25430__$1){
var self__ = this;
var _25431__$1 = this;
return (new cljs.core.async.t_cljs$core$async25429(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25430__$1));
}));

(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25431){
var self__ = this;
var _25431__$1 = this;
return self__.meta25430;
}));

(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25429.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25430","meta25430",-752281137,null)], null);
}));

(cljs.core.async.t_cljs$core$async25429.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25429");

(cljs.core.async.t_cljs$core$async25429.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25429");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25429.
 */
cljs.core.async.__GT_t_cljs$core$async25429 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25429(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25430){
return (new cljs.core.async.t_cljs$core$async25429(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25430));
});

}

return (new cljs.core.async.t_cljs$core$async25429(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24527__auto___25543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25499){
var state_val_25500 = (state_25499[(1)]);
if((state_val_25500 === (7))){
var inst_25459 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
if(cljs.core.truth_(inst_25459)){
var statearr_25501_25544 = state_25499__$1;
(statearr_25501_25544[(1)] = (8));

} else {
var statearr_25502_25545 = state_25499__$1;
(statearr_25502_25545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (20))){
var inst_25452 = (state_25499[(7)]);
var state_25499__$1 = state_25499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25499__$1,(23),out,inst_25452);
} else {
if((state_val_25500 === (1))){
var inst_25435 = calc_state.call(null);
var inst_25436 = cljs.core.__destructure_map.call(null,inst_25435);
var inst_25437 = cljs.core.get.call(null,inst_25436,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25438 = cljs.core.get.call(null,inst_25436,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25439 = cljs.core.get.call(null,inst_25436,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25440 = inst_25435;
var state_25499__$1 = (function (){var statearr_25503 = state_25499;
(statearr_25503[(8)] = inst_25437);

(statearr_25503[(9)] = inst_25440);

(statearr_25503[(10)] = inst_25438);

(statearr_25503[(11)] = inst_25439);

return statearr_25503;
})();
var statearr_25504_25546 = state_25499__$1;
(statearr_25504_25546[(2)] = null);

(statearr_25504_25546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (24))){
var inst_25443 = (state_25499[(12)]);
var inst_25440 = inst_25443;
var state_25499__$1 = (function (){var statearr_25505 = state_25499;
(statearr_25505[(9)] = inst_25440);

return statearr_25505;
})();
var statearr_25506_25547 = state_25499__$1;
(statearr_25506_25547[(2)] = null);

(statearr_25506_25547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (4))){
var inst_25454 = (state_25499[(13)]);
var inst_25452 = (state_25499[(7)]);
var inst_25451 = (state_25499[(2)]);
var inst_25452__$1 = cljs.core.nth.call(null,inst_25451,(0),null);
var inst_25453 = cljs.core.nth.call(null,inst_25451,(1),null);
var inst_25454__$1 = (inst_25452__$1 == null);
var state_25499__$1 = (function (){var statearr_25507 = state_25499;
(statearr_25507[(13)] = inst_25454__$1);

(statearr_25507[(14)] = inst_25453);

(statearr_25507[(7)] = inst_25452__$1);

return statearr_25507;
})();
if(cljs.core.truth_(inst_25454__$1)){
var statearr_25508_25548 = state_25499__$1;
(statearr_25508_25548[(1)] = (5));

} else {
var statearr_25509_25549 = state_25499__$1;
(statearr_25509_25549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (15))){
var inst_25473 = (state_25499[(15)]);
var inst_25444 = (state_25499[(16)]);
var inst_25473__$1 = cljs.core.empty_QMARK_.call(null,inst_25444);
var state_25499__$1 = (function (){var statearr_25510 = state_25499;
(statearr_25510[(15)] = inst_25473__$1);

return statearr_25510;
})();
if(inst_25473__$1){
var statearr_25511_25550 = state_25499__$1;
(statearr_25511_25550[(1)] = (17));

} else {
var statearr_25512_25551 = state_25499__$1;
(statearr_25512_25551[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (21))){
var inst_25443 = (state_25499[(12)]);
var inst_25440 = inst_25443;
var state_25499__$1 = (function (){var statearr_25513 = state_25499;
(statearr_25513[(9)] = inst_25440);

return statearr_25513;
})();
var statearr_25514_25552 = state_25499__$1;
(statearr_25514_25552[(2)] = null);

(statearr_25514_25552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (13))){
var inst_25466 = (state_25499[(2)]);
var inst_25467 = calc_state.call(null);
var inst_25440 = inst_25467;
var state_25499__$1 = (function (){var statearr_25515 = state_25499;
(statearr_25515[(9)] = inst_25440);

(statearr_25515[(17)] = inst_25466);

return statearr_25515;
})();
var statearr_25516_25553 = state_25499__$1;
(statearr_25516_25553[(2)] = null);

(statearr_25516_25553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (22))){
var inst_25493 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25517_25554 = state_25499__$1;
(statearr_25517_25554[(2)] = inst_25493);

(statearr_25517_25554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (6))){
var inst_25453 = (state_25499[(14)]);
var inst_25457 = cljs.core._EQ_.call(null,inst_25453,change);
var state_25499__$1 = state_25499;
var statearr_25518_25555 = state_25499__$1;
(statearr_25518_25555[(2)] = inst_25457);

(statearr_25518_25555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (25))){
var state_25499__$1 = state_25499;
var statearr_25519_25556 = state_25499__$1;
(statearr_25519_25556[(2)] = null);

(statearr_25519_25556[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (17))){
var inst_25445 = (state_25499[(18)]);
var inst_25453 = (state_25499[(14)]);
var inst_25475 = inst_25445.call(null,inst_25453);
var inst_25476 = cljs.core.not.call(null,inst_25475);
var state_25499__$1 = state_25499;
var statearr_25520_25557 = state_25499__$1;
(statearr_25520_25557[(2)] = inst_25476);

(statearr_25520_25557[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (3))){
var inst_25497 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25499__$1,inst_25497);
} else {
if((state_val_25500 === (12))){
var state_25499__$1 = state_25499;
var statearr_25521_25558 = state_25499__$1;
(statearr_25521_25558[(2)] = null);

(statearr_25521_25558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (2))){
var inst_25440 = (state_25499[(9)]);
var inst_25443 = (state_25499[(12)]);
var inst_25443__$1 = cljs.core.__destructure_map.call(null,inst_25440);
var inst_25444 = cljs.core.get.call(null,inst_25443__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25445 = cljs.core.get.call(null,inst_25443__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25446 = cljs.core.get.call(null,inst_25443__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25499__$1 = (function (){var statearr_25522 = state_25499;
(statearr_25522[(18)] = inst_25445);

(statearr_25522[(12)] = inst_25443__$1);

(statearr_25522[(16)] = inst_25444);

return statearr_25522;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25499__$1,(4),inst_25446);
} else {
if((state_val_25500 === (23))){
var inst_25484 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
if(cljs.core.truth_(inst_25484)){
var statearr_25523_25559 = state_25499__$1;
(statearr_25523_25559[(1)] = (24));

} else {
var statearr_25524_25560 = state_25499__$1;
(statearr_25524_25560[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (19))){
var inst_25479 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25525_25561 = state_25499__$1;
(statearr_25525_25561[(2)] = inst_25479);

(statearr_25525_25561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (11))){
var inst_25453 = (state_25499[(14)]);
var inst_25463 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25453);
var state_25499__$1 = state_25499;
var statearr_25526_25562 = state_25499__$1;
(statearr_25526_25562[(2)] = inst_25463);

(statearr_25526_25562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (9))){
var inst_25470 = (state_25499[(19)]);
var inst_25453 = (state_25499[(14)]);
var inst_25444 = (state_25499[(16)]);
var inst_25470__$1 = inst_25444.call(null,inst_25453);
var state_25499__$1 = (function (){var statearr_25527 = state_25499;
(statearr_25527[(19)] = inst_25470__$1);

return statearr_25527;
})();
if(cljs.core.truth_(inst_25470__$1)){
var statearr_25528_25563 = state_25499__$1;
(statearr_25528_25563[(1)] = (14));

} else {
var statearr_25529_25564 = state_25499__$1;
(statearr_25529_25564[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (5))){
var inst_25454 = (state_25499[(13)]);
var state_25499__$1 = state_25499;
var statearr_25530_25565 = state_25499__$1;
(statearr_25530_25565[(2)] = inst_25454);

(statearr_25530_25565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (14))){
var inst_25470 = (state_25499[(19)]);
var state_25499__$1 = state_25499;
var statearr_25531_25566 = state_25499__$1;
(statearr_25531_25566[(2)] = inst_25470);

(statearr_25531_25566[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (26))){
var inst_25489 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25532_25567 = state_25499__$1;
(statearr_25532_25567[(2)] = inst_25489);

(statearr_25532_25567[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (16))){
var inst_25481 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
if(cljs.core.truth_(inst_25481)){
var statearr_25533_25568 = state_25499__$1;
(statearr_25533_25568[(1)] = (20));

} else {
var statearr_25534_25569 = state_25499__$1;
(statearr_25534_25569[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (10))){
var inst_25495 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25535_25570 = state_25499__$1;
(statearr_25535_25570[(2)] = inst_25495);

(statearr_25535_25570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (18))){
var inst_25473 = (state_25499[(15)]);
var state_25499__$1 = state_25499;
var statearr_25536_25571 = state_25499__$1;
(statearr_25536_25571[(2)] = inst_25473);

(statearr_25536_25571[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (8))){
var inst_25452 = (state_25499[(7)]);
var inst_25461 = (inst_25452 == null);
var state_25499__$1 = state_25499;
if(cljs.core.truth_(inst_25461)){
var statearr_25537_25572 = state_25499__$1;
(statearr_25537_25572[(1)] = (11));

} else {
var statearr_25538_25573 = state_25499__$1;
(statearr_25538_25573[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__24431__auto__ = null;
var cljs$core$async$mix_$_state_machine__24431__auto____0 = (function (){
var statearr_25539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25539[(0)] = cljs$core$async$mix_$_state_machine__24431__auto__);

(statearr_25539[(1)] = (1));

return statearr_25539;
});
var cljs$core$async$mix_$_state_machine__24431__auto____1 = (function (state_25499){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e25540){if((e25540 instanceof Object)){
var ex__24434__auto__ = e25540;
var statearr_25541_25574 = state_25499;
(statearr_25541_25574[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25575 = state_25499;
state_25499 = G__25575;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24431__auto__ = function(state_25499){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24431__auto____1.call(this,state_25499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24431__auto____0;
cljs$core$async$mix_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24431__auto____1;
return cljs$core$async$mix_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_25542 = f__24528__auto__.call(null);
(statearr_25542[(6)] = c__24527__auto___25543);

return statearr_25542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_25578 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_25578.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25579 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_25579.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25580 = (function() {
var G__25581 = null;
var G__25581__1 = (function (p){
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
var G__25581__2 = (function (p,v){
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
G__25581 = function(p,v){
switch(arguments.length){
case 1:
return G__25581__1.call(this,p);
case 2:
return G__25581__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25581.cljs$core$IFn$_invoke$arity$1 = G__25581__1;
G__25581.cljs$core$IFn$_invoke$arity$2 = G__25581__2;
return G__25581;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25577 = arguments.length;
switch (G__25577) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25580.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25580.call(null,p,v);
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
var G__25585 = arguments.length;
switch (G__25585) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__25583_SHARP_){
if(cljs.core.truth_(p1__25583_SHARP_.call(null,topic))){
return p1__25583_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25583_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25586 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25587){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25587 = meta25587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25588,meta25587__$1){
var self__ = this;
var _25588__$1 = this;
return (new cljs.core.async.t_cljs$core$async25586(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25587__$1));
}));

(cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25588){
var self__ = this;
var _25588__$1 = this;
return self__.meta25587;
}));

(cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25587","meta25587",464475298,null)], null);
}));

(cljs.core.async.t_cljs$core$async25586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25586");

(cljs.core.async.t_cljs$core$async25586.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25586.
 */
cljs.core.async.__GT_t_cljs$core$async25586 = (function cljs$core$async$__GT_t_cljs$core$async25586(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25587){
return (new cljs.core.async.t_cljs$core$async25586(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25587));
});

}

return (new cljs.core.async.t_cljs$core$async25586(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24527__auto___25706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25660){
var state_val_25661 = (state_25660[(1)]);
if((state_val_25661 === (7))){
var inst_25656 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
var statearr_25662_25707 = state_25660__$1;
(statearr_25662_25707[(2)] = inst_25656);

(statearr_25662_25707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (20))){
var state_25660__$1 = state_25660;
var statearr_25663_25708 = state_25660__$1;
(statearr_25663_25708[(2)] = null);

(statearr_25663_25708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (1))){
var state_25660__$1 = state_25660;
var statearr_25664_25709 = state_25660__$1;
(statearr_25664_25709[(2)] = null);

(statearr_25664_25709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (24))){
var inst_25639 = (state_25660[(7)]);
var inst_25648 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25639);
var state_25660__$1 = state_25660;
var statearr_25665_25710 = state_25660__$1;
(statearr_25665_25710[(2)] = inst_25648);

(statearr_25665_25710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (4))){
var inst_25591 = (state_25660[(8)]);
var inst_25591__$1 = (state_25660[(2)]);
var inst_25592 = (inst_25591__$1 == null);
var state_25660__$1 = (function (){var statearr_25666 = state_25660;
(statearr_25666[(8)] = inst_25591__$1);

return statearr_25666;
})();
if(cljs.core.truth_(inst_25592)){
var statearr_25667_25711 = state_25660__$1;
(statearr_25667_25711[(1)] = (5));

} else {
var statearr_25668_25712 = state_25660__$1;
(statearr_25668_25712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (15))){
var inst_25633 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
var statearr_25669_25713 = state_25660__$1;
(statearr_25669_25713[(2)] = inst_25633);

(statearr_25669_25713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (21))){
var inst_25653 = (state_25660[(2)]);
var state_25660__$1 = (function (){var statearr_25670 = state_25660;
(statearr_25670[(9)] = inst_25653);

return statearr_25670;
})();
var statearr_25671_25714 = state_25660__$1;
(statearr_25671_25714[(2)] = null);

(statearr_25671_25714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (13))){
var inst_25615 = (state_25660[(10)]);
var inst_25617 = cljs.core.chunked_seq_QMARK_.call(null,inst_25615);
var state_25660__$1 = state_25660;
if(inst_25617){
var statearr_25672_25715 = state_25660__$1;
(statearr_25672_25715[(1)] = (16));

} else {
var statearr_25673_25716 = state_25660__$1;
(statearr_25673_25716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (22))){
var inst_25645 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
if(cljs.core.truth_(inst_25645)){
var statearr_25674_25717 = state_25660__$1;
(statearr_25674_25717[(1)] = (23));

} else {
var statearr_25675_25718 = state_25660__$1;
(statearr_25675_25718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (6))){
var inst_25591 = (state_25660[(8)]);
var inst_25639 = (state_25660[(7)]);
var inst_25641 = (state_25660[(11)]);
var inst_25639__$1 = topic_fn.call(null,inst_25591);
var inst_25640 = cljs.core.deref.call(null,mults);
var inst_25641__$1 = cljs.core.get.call(null,inst_25640,inst_25639__$1);
var state_25660__$1 = (function (){var statearr_25676 = state_25660;
(statearr_25676[(7)] = inst_25639__$1);

(statearr_25676[(11)] = inst_25641__$1);

return statearr_25676;
})();
if(cljs.core.truth_(inst_25641__$1)){
var statearr_25677_25719 = state_25660__$1;
(statearr_25677_25719[(1)] = (19));

} else {
var statearr_25678_25720 = state_25660__$1;
(statearr_25678_25720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (25))){
var inst_25650 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
var statearr_25679_25721 = state_25660__$1;
(statearr_25679_25721[(2)] = inst_25650);

(statearr_25679_25721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (17))){
var inst_25615 = (state_25660[(10)]);
var inst_25624 = cljs.core.first.call(null,inst_25615);
var inst_25625 = cljs.core.async.muxch_STAR_.call(null,inst_25624);
var inst_25626 = cljs.core.async.close_BANG_.call(null,inst_25625);
var inst_25627 = cljs.core.next.call(null,inst_25615);
var inst_25601 = inst_25627;
var inst_25602 = null;
var inst_25603 = (0);
var inst_25604 = (0);
var state_25660__$1 = (function (){var statearr_25680 = state_25660;
(statearr_25680[(12)] = inst_25602);

(statearr_25680[(13)] = inst_25603);

(statearr_25680[(14)] = inst_25604);

(statearr_25680[(15)] = inst_25601);

(statearr_25680[(16)] = inst_25626);

return statearr_25680;
})();
var statearr_25681_25722 = state_25660__$1;
(statearr_25681_25722[(2)] = null);

(statearr_25681_25722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (3))){
var inst_25658 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25660__$1,inst_25658);
} else {
if((state_val_25661 === (12))){
var inst_25635 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
var statearr_25682_25723 = state_25660__$1;
(statearr_25682_25723[(2)] = inst_25635);

(statearr_25682_25723[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (2))){
var state_25660__$1 = state_25660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25660__$1,(4),ch);
} else {
if((state_val_25661 === (23))){
var state_25660__$1 = state_25660;
var statearr_25683_25724 = state_25660__$1;
(statearr_25683_25724[(2)] = null);

(statearr_25683_25724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (19))){
var inst_25591 = (state_25660[(8)]);
var inst_25641 = (state_25660[(11)]);
var inst_25643 = cljs.core.async.muxch_STAR_.call(null,inst_25641);
var state_25660__$1 = state_25660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25660__$1,(22),inst_25643,inst_25591);
} else {
if((state_val_25661 === (11))){
var inst_25601 = (state_25660[(15)]);
var inst_25615 = (state_25660[(10)]);
var inst_25615__$1 = cljs.core.seq.call(null,inst_25601);
var state_25660__$1 = (function (){var statearr_25684 = state_25660;
(statearr_25684[(10)] = inst_25615__$1);

return statearr_25684;
})();
if(inst_25615__$1){
var statearr_25685_25725 = state_25660__$1;
(statearr_25685_25725[(1)] = (13));

} else {
var statearr_25686_25726 = state_25660__$1;
(statearr_25686_25726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (9))){
var inst_25637 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
var statearr_25687_25727 = state_25660__$1;
(statearr_25687_25727[(2)] = inst_25637);

(statearr_25687_25727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (5))){
var inst_25598 = cljs.core.deref.call(null,mults);
var inst_25599 = cljs.core.vals.call(null,inst_25598);
var inst_25600 = cljs.core.seq.call(null,inst_25599);
var inst_25601 = inst_25600;
var inst_25602 = null;
var inst_25603 = (0);
var inst_25604 = (0);
var state_25660__$1 = (function (){var statearr_25688 = state_25660;
(statearr_25688[(12)] = inst_25602);

(statearr_25688[(13)] = inst_25603);

(statearr_25688[(14)] = inst_25604);

(statearr_25688[(15)] = inst_25601);

return statearr_25688;
})();
var statearr_25689_25728 = state_25660__$1;
(statearr_25689_25728[(2)] = null);

(statearr_25689_25728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (14))){
var state_25660__$1 = state_25660;
var statearr_25693_25729 = state_25660__$1;
(statearr_25693_25729[(2)] = null);

(statearr_25693_25729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (16))){
var inst_25615 = (state_25660[(10)]);
var inst_25619 = cljs.core.chunk_first.call(null,inst_25615);
var inst_25620 = cljs.core.chunk_rest.call(null,inst_25615);
var inst_25621 = cljs.core.count.call(null,inst_25619);
var inst_25601 = inst_25620;
var inst_25602 = inst_25619;
var inst_25603 = inst_25621;
var inst_25604 = (0);
var state_25660__$1 = (function (){var statearr_25694 = state_25660;
(statearr_25694[(12)] = inst_25602);

(statearr_25694[(13)] = inst_25603);

(statearr_25694[(14)] = inst_25604);

(statearr_25694[(15)] = inst_25601);

return statearr_25694;
})();
var statearr_25695_25730 = state_25660__$1;
(statearr_25695_25730[(2)] = null);

(statearr_25695_25730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (10))){
var inst_25602 = (state_25660[(12)]);
var inst_25603 = (state_25660[(13)]);
var inst_25604 = (state_25660[(14)]);
var inst_25601 = (state_25660[(15)]);
var inst_25609 = cljs.core._nth.call(null,inst_25602,inst_25604);
var inst_25610 = cljs.core.async.muxch_STAR_.call(null,inst_25609);
var inst_25611 = cljs.core.async.close_BANG_.call(null,inst_25610);
var inst_25612 = (inst_25604 + (1));
var tmp25690 = inst_25602;
var tmp25691 = inst_25603;
var tmp25692 = inst_25601;
var inst_25601__$1 = tmp25692;
var inst_25602__$1 = tmp25690;
var inst_25603__$1 = tmp25691;
var inst_25604__$1 = inst_25612;
var state_25660__$1 = (function (){var statearr_25696 = state_25660;
(statearr_25696[(12)] = inst_25602__$1);

(statearr_25696[(13)] = inst_25603__$1);

(statearr_25696[(14)] = inst_25604__$1);

(statearr_25696[(15)] = inst_25601__$1);

(statearr_25696[(17)] = inst_25611);

return statearr_25696;
})();
var statearr_25697_25731 = state_25660__$1;
(statearr_25697_25731[(2)] = null);

(statearr_25697_25731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (18))){
var inst_25630 = (state_25660[(2)]);
var state_25660__$1 = state_25660;
var statearr_25698_25732 = state_25660__$1;
(statearr_25698_25732[(2)] = inst_25630);

(statearr_25698_25732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25661 === (8))){
var inst_25603 = (state_25660[(13)]);
var inst_25604 = (state_25660[(14)]);
var inst_25606 = (inst_25604 < inst_25603);
var inst_25607 = inst_25606;
var state_25660__$1 = state_25660;
if(cljs.core.truth_(inst_25607)){
var statearr_25699_25733 = state_25660__$1;
(statearr_25699_25733[(1)] = (10));

} else {
var statearr_25700_25734 = state_25660__$1;
(statearr_25700_25734[(1)] = (11));

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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_25701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25701[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_25701[(1)] = (1));

return statearr_25701;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_25660){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e25702){if((e25702 instanceof Object)){
var ex__24434__auto__ = e25702;
var statearr_25703_25735 = state_25660;
(statearr_25703_25735[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25736 = state_25660;
state_25660 = G__25736;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_25660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_25660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_25704 = f__24528__auto__.call(null);
(statearr_25704[(6)] = c__24527__auto___25706);

return statearr_25704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
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
var G__25738 = arguments.length;
switch (G__25738) {
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
var G__25741 = arguments.length;
switch (G__25741) {
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
var G__25744 = arguments.length;
switch (G__25744) {
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
var c__24527__auto___25811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25783){
var state_val_25784 = (state_25783[(1)]);
if((state_val_25784 === (7))){
var state_25783__$1 = state_25783;
var statearr_25785_25812 = state_25783__$1;
(statearr_25785_25812[(2)] = null);

(statearr_25785_25812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (1))){
var state_25783__$1 = state_25783;
var statearr_25786_25813 = state_25783__$1;
(statearr_25786_25813[(2)] = null);

(statearr_25786_25813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (4))){
var inst_25747 = (state_25783[(7)]);
var inst_25749 = (inst_25747 < cnt);
var state_25783__$1 = state_25783;
if(cljs.core.truth_(inst_25749)){
var statearr_25787_25814 = state_25783__$1;
(statearr_25787_25814[(1)] = (6));

} else {
var statearr_25788_25815 = state_25783__$1;
(statearr_25788_25815[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (15))){
var inst_25779 = (state_25783[(2)]);
var state_25783__$1 = state_25783;
var statearr_25789_25816 = state_25783__$1;
(statearr_25789_25816[(2)] = inst_25779);

(statearr_25789_25816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (13))){
var inst_25772 = cljs.core.async.close_BANG_.call(null,out);
var state_25783__$1 = state_25783;
var statearr_25790_25817 = state_25783__$1;
(statearr_25790_25817[(2)] = inst_25772);

(statearr_25790_25817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (6))){
var state_25783__$1 = state_25783;
var statearr_25791_25818 = state_25783__$1;
(statearr_25791_25818[(2)] = null);

(statearr_25791_25818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (3))){
var inst_25781 = (state_25783[(2)]);
var state_25783__$1 = state_25783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25783__$1,inst_25781);
} else {
if((state_val_25784 === (12))){
var inst_25769 = (state_25783[(8)]);
var inst_25769__$1 = (state_25783[(2)]);
var inst_25770 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25769__$1);
var state_25783__$1 = (function (){var statearr_25792 = state_25783;
(statearr_25792[(8)] = inst_25769__$1);

return statearr_25792;
})();
if(cljs.core.truth_(inst_25770)){
var statearr_25793_25819 = state_25783__$1;
(statearr_25793_25819[(1)] = (13));

} else {
var statearr_25794_25820 = state_25783__$1;
(statearr_25794_25820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (2))){
var inst_25746 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25747 = (0);
var state_25783__$1 = (function (){var statearr_25795 = state_25783;
(statearr_25795[(7)] = inst_25747);

(statearr_25795[(9)] = inst_25746);

return statearr_25795;
})();
var statearr_25796_25821 = state_25783__$1;
(statearr_25796_25821[(2)] = null);

(statearr_25796_25821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (11))){
var inst_25747 = (state_25783[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25783,(10),Object,null,(9));
var inst_25756 = chs__$1.call(null,inst_25747);
var inst_25757 = done.call(null,inst_25747);
var inst_25758 = cljs.core.async.take_BANG_.call(null,inst_25756,inst_25757);
var state_25783__$1 = state_25783;
var statearr_25797_25822 = state_25783__$1;
(statearr_25797_25822[(2)] = inst_25758);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (9))){
var inst_25747 = (state_25783[(7)]);
var inst_25760 = (state_25783[(2)]);
var inst_25761 = (inst_25747 + (1));
var inst_25747__$1 = inst_25761;
var state_25783__$1 = (function (){var statearr_25798 = state_25783;
(statearr_25798[(7)] = inst_25747__$1);

(statearr_25798[(10)] = inst_25760);

return statearr_25798;
})();
var statearr_25799_25823 = state_25783__$1;
(statearr_25799_25823[(2)] = null);

(statearr_25799_25823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (5))){
var inst_25767 = (state_25783[(2)]);
var state_25783__$1 = (function (){var statearr_25800 = state_25783;
(statearr_25800[(11)] = inst_25767);

return statearr_25800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25783__$1,(12),dchan);
} else {
if((state_val_25784 === (14))){
var inst_25769 = (state_25783[(8)]);
var inst_25774 = cljs.core.apply.call(null,f,inst_25769);
var state_25783__$1 = state_25783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25783__$1,(16),out,inst_25774);
} else {
if((state_val_25784 === (16))){
var inst_25776 = (state_25783[(2)]);
var state_25783__$1 = (function (){var statearr_25801 = state_25783;
(statearr_25801[(12)] = inst_25776);

return statearr_25801;
})();
var statearr_25802_25824 = state_25783__$1;
(statearr_25802_25824[(2)] = null);

(statearr_25802_25824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (10))){
var inst_25751 = (state_25783[(2)]);
var inst_25752 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25783__$1 = (function (){var statearr_25803 = state_25783;
(statearr_25803[(13)] = inst_25751);

return statearr_25803;
})();
var statearr_25804_25825 = state_25783__$1;
(statearr_25804_25825[(2)] = inst_25752);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (8))){
var inst_25765 = (state_25783[(2)]);
var state_25783__$1 = state_25783;
var statearr_25805_25826 = state_25783__$1;
(statearr_25805_25826[(2)] = inst_25765);

(statearr_25805_25826[(1)] = (5));


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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_25806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25806[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_25806[(1)] = (1));

return statearr_25806;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_25783){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e25807){if((e25807 instanceof Object)){
var ex__24434__auto__ = e25807;
var statearr_25808_25827 = state_25783;
(statearr_25808_25827[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25828 = state_25783;
state_25783 = G__25828;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_25783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_25783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_25809 = f__24528__auto__.call(null);
(statearr_25809[(6)] = c__24527__auto___25811);

return statearr_25809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
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
var G__25831 = arguments.length;
switch (G__25831) {
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
var c__24527__auto___25885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25863){
var state_val_25864 = (state_25863[(1)]);
if((state_val_25864 === (7))){
var inst_25843 = (state_25863[(7)]);
var inst_25842 = (state_25863[(8)]);
var inst_25842__$1 = (state_25863[(2)]);
var inst_25843__$1 = cljs.core.nth.call(null,inst_25842__$1,(0),null);
var inst_25844 = cljs.core.nth.call(null,inst_25842__$1,(1),null);
var inst_25845 = (inst_25843__$1 == null);
var state_25863__$1 = (function (){var statearr_25865 = state_25863;
(statearr_25865[(7)] = inst_25843__$1);

(statearr_25865[(8)] = inst_25842__$1);

(statearr_25865[(9)] = inst_25844);

return statearr_25865;
})();
if(cljs.core.truth_(inst_25845)){
var statearr_25866_25886 = state_25863__$1;
(statearr_25866_25886[(1)] = (8));

} else {
var statearr_25867_25887 = state_25863__$1;
(statearr_25867_25887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (1))){
var inst_25832 = cljs.core.vec.call(null,chs);
var inst_25833 = inst_25832;
var state_25863__$1 = (function (){var statearr_25868 = state_25863;
(statearr_25868[(10)] = inst_25833);

return statearr_25868;
})();
var statearr_25869_25888 = state_25863__$1;
(statearr_25869_25888[(2)] = null);

(statearr_25869_25888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (4))){
var inst_25833 = (state_25863[(10)]);
var state_25863__$1 = state_25863;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25863__$1,(7),inst_25833);
} else {
if((state_val_25864 === (6))){
var inst_25859 = (state_25863[(2)]);
var state_25863__$1 = state_25863;
var statearr_25870_25889 = state_25863__$1;
(statearr_25870_25889[(2)] = inst_25859);

(statearr_25870_25889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (3))){
var inst_25861 = (state_25863[(2)]);
var state_25863__$1 = state_25863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25863__$1,inst_25861);
} else {
if((state_val_25864 === (2))){
var inst_25833 = (state_25863[(10)]);
var inst_25835 = cljs.core.count.call(null,inst_25833);
var inst_25836 = (inst_25835 > (0));
var state_25863__$1 = state_25863;
if(cljs.core.truth_(inst_25836)){
var statearr_25872_25890 = state_25863__$1;
(statearr_25872_25890[(1)] = (4));

} else {
var statearr_25873_25891 = state_25863__$1;
(statearr_25873_25891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (11))){
var inst_25833 = (state_25863[(10)]);
var inst_25852 = (state_25863[(2)]);
var tmp25871 = inst_25833;
var inst_25833__$1 = tmp25871;
var state_25863__$1 = (function (){var statearr_25874 = state_25863;
(statearr_25874[(10)] = inst_25833__$1);

(statearr_25874[(11)] = inst_25852);

return statearr_25874;
})();
var statearr_25875_25892 = state_25863__$1;
(statearr_25875_25892[(2)] = null);

(statearr_25875_25892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (9))){
var inst_25843 = (state_25863[(7)]);
var state_25863__$1 = state_25863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25863__$1,(11),out,inst_25843);
} else {
if((state_val_25864 === (5))){
var inst_25857 = cljs.core.async.close_BANG_.call(null,out);
var state_25863__$1 = state_25863;
var statearr_25876_25893 = state_25863__$1;
(statearr_25876_25893[(2)] = inst_25857);

(statearr_25876_25893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (10))){
var inst_25855 = (state_25863[(2)]);
var state_25863__$1 = state_25863;
var statearr_25877_25894 = state_25863__$1;
(statearr_25877_25894[(2)] = inst_25855);

(statearr_25877_25894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (8))){
var inst_25843 = (state_25863[(7)]);
var inst_25842 = (state_25863[(8)]);
var inst_25833 = (state_25863[(10)]);
var inst_25844 = (state_25863[(9)]);
var inst_25847 = (function (){var cs = inst_25833;
var vec__25838 = inst_25842;
var v = inst_25843;
var c = inst_25844;
return (function (p1__25829_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25829_SHARP_);
});
})();
var inst_25848 = cljs.core.filterv.call(null,inst_25847,inst_25833);
var inst_25833__$1 = inst_25848;
var state_25863__$1 = (function (){var statearr_25878 = state_25863;
(statearr_25878[(10)] = inst_25833__$1);

return statearr_25878;
})();
var statearr_25879_25895 = state_25863__$1;
(statearr_25879_25895[(2)] = null);

(statearr_25879_25895[(1)] = (2));


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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_25880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25880[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_25880[(1)] = (1));

return statearr_25880;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_25863){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e25881){if((e25881 instanceof Object)){
var ex__24434__auto__ = e25881;
var statearr_25882_25896 = state_25863;
(statearr_25882_25896[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25897 = state_25863;
state_25863 = G__25897;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_25863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_25863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_25883 = f__24528__auto__.call(null);
(statearr_25883[(6)] = c__24527__auto___25885);

return statearr_25883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
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
var G__25899 = arguments.length;
switch (G__25899) {
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
var c__24527__auto___25944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25923){
var state_val_25924 = (state_25923[(1)]);
if((state_val_25924 === (7))){
var inst_25905 = (state_25923[(7)]);
var inst_25905__$1 = (state_25923[(2)]);
var inst_25906 = (inst_25905__$1 == null);
var inst_25907 = cljs.core.not.call(null,inst_25906);
var state_25923__$1 = (function (){var statearr_25925 = state_25923;
(statearr_25925[(7)] = inst_25905__$1);

return statearr_25925;
})();
if(inst_25907){
var statearr_25926_25945 = state_25923__$1;
(statearr_25926_25945[(1)] = (8));

} else {
var statearr_25927_25946 = state_25923__$1;
(statearr_25927_25946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (1))){
var inst_25900 = (0);
var state_25923__$1 = (function (){var statearr_25928 = state_25923;
(statearr_25928[(8)] = inst_25900);

return statearr_25928;
})();
var statearr_25929_25947 = state_25923__$1;
(statearr_25929_25947[(2)] = null);

(statearr_25929_25947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (4))){
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25923__$1,(7),ch);
} else {
if((state_val_25924 === (6))){
var inst_25918 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25930_25948 = state_25923__$1;
(statearr_25930_25948[(2)] = inst_25918);

(statearr_25930_25948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (3))){
var inst_25920 = (state_25923[(2)]);
var inst_25921 = cljs.core.async.close_BANG_.call(null,out);
var state_25923__$1 = (function (){var statearr_25931 = state_25923;
(statearr_25931[(9)] = inst_25920);

return statearr_25931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25923__$1,inst_25921);
} else {
if((state_val_25924 === (2))){
var inst_25900 = (state_25923[(8)]);
var inst_25902 = (inst_25900 < n);
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25902)){
var statearr_25932_25949 = state_25923__$1;
(statearr_25932_25949[(1)] = (4));

} else {
var statearr_25933_25950 = state_25923__$1;
(statearr_25933_25950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (11))){
var inst_25900 = (state_25923[(8)]);
var inst_25910 = (state_25923[(2)]);
var inst_25911 = (inst_25900 + (1));
var inst_25900__$1 = inst_25911;
var state_25923__$1 = (function (){var statearr_25934 = state_25923;
(statearr_25934[(10)] = inst_25910);

(statearr_25934[(8)] = inst_25900__$1);

return statearr_25934;
})();
var statearr_25935_25951 = state_25923__$1;
(statearr_25935_25951[(2)] = null);

(statearr_25935_25951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (9))){
var state_25923__$1 = state_25923;
var statearr_25936_25952 = state_25923__$1;
(statearr_25936_25952[(2)] = null);

(statearr_25936_25952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (5))){
var state_25923__$1 = state_25923;
var statearr_25937_25953 = state_25923__$1;
(statearr_25937_25953[(2)] = null);

(statearr_25937_25953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (10))){
var inst_25915 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25938_25954 = state_25923__$1;
(statearr_25938_25954[(2)] = inst_25915);

(statearr_25938_25954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (8))){
var inst_25905 = (state_25923[(7)]);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25923__$1,(11),out,inst_25905);
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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_25939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25939[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_25939[(1)] = (1));

return statearr_25939;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_25923){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e25940){if((e25940 instanceof Object)){
var ex__24434__auto__ = e25940;
var statearr_25941_25955 = state_25923;
(statearr_25941_25955[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25956 = state_25923;
state_25923 = G__25956;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_25923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_25923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_25942 = f__24528__auto__.call(null);
(statearr_25942[(6)] = c__24527__auto___25944);

return statearr_25942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25958 = (function (f,ch,meta25959){
this.f = f;
this.ch = ch;
this.meta25959 = meta25959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25960,meta25959__$1){
var self__ = this;
var _25960__$1 = this;
return (new cljs.core.async.t_cljs$core$async25958(self__.f,self__.ch,meta25959__$1));
}));

(cljs.core.async.t_cljs$core$async25958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25960){
var self__ = this;
var _25960__$1 = this;
return self__.meta25959;
}));

(cljs.core.async.t_cljs$core$async25958.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25958.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25958.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25961 = (function (f,ch,meta25959,_,fn1,meta25962){
this.f = f;
this.ch = ch;
this.meta25959 = meta25959;
this._ = _;
this.fn1 = fn1;
this.meta25962 = meta25962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25963,meta25962__$1){
var self__ = this;
var _25963__$1 = this;
return (new cljs.core.async.t_cljs$core$async25961(self__.f,self__.ch,self__.meta25959,self__._,self__.fn1,meta25962__$1));
}));

(cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25963){
var self__ = this;
var _25963__$1 = this;
return self__.meta25962;
}));

(cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25957_SHARP_){
return f1.call(null,(((p1__25957_SHARP_ == null))?null:self__.f.call(null,p1__25957_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25959","meta25959",1967424309,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25958","cljs.core.async/t_cljs$core$async25958",-1239101786,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25962","meta25962",-680021417,null)], null);
}));

(cljs.core.async.t_cljs$core$async25961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25961");

(cljs.core.async.t_cljs$core$async25961.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25961.
 */
cljs.core.async.__GT_t_cljs$core$async25961 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25961(f__$1,ch__$1,meta25959__$1,___$2,fn1__$1,meta25962){
return (new cljs.core.async.t_cljs$core$async25961(f__$1,ch__$1,meta25959__$1,___$2,fn1__$1,meta25962));
});

}

return (new cljs.core.async.t_cljs$core$async25961(self__.f,self__.ch,self__.meta25959,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async25958.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25959","meta25959",1967424309,null)], null);
}));

(cljs.core.async.t_cljs$core$async25958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25958");

(cljs.core.async.t_cljs$core$async25958.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25958.
 */
cljs.core.async.__GT_t_cljs$core$async25958 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25958(f__$1,ch__$1,meta25959){
return (new cljs.core.async.t_cljs$core$async25958(f__$1,ch__$1,meta25959));
});

}

return (new cljs.core.async.t_cljs$core$async25958(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25964 = (function (f,ch,meta25965){
this.f = f;
this.ch = ch;
this.meta25965 = meta25965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25966,meta25965__$1){
var self__ = this;
var _25966__$1 = this;
return (new cljs.core.async.t_cljs$core$async25964(self__.f,self__.ch,meta25965__$1));
}));

(cljs.core.async.t_cljs$core$async25964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25966){
var self__ = this;
var _25966__$1 = this;
return self__.meta25965;
}));

(cljs.core.async.t_cljs$core$async25964.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25964.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25964.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25965","meta25965",-1436514678,null)], null);
}));

(cljs.core.async.t_cljs$core$async25964.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25964");

(cljs.core.async.t_cljs$core$async25964.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25964");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25964.
 */
cljs.core.async.__GT_t_cljs$core$async25964 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25964(f__$1,ch__$1,meta25965){
return (new cljs.core.async.t_cljs$core$async25964(f__$1,ch__$1,meta25965));
});

}

return (new cljs.core.async.t_cljs$core$async25964(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25967 = (function (p,ch,meta25968){
this.p = p;
this.ch = ch;
this.meta25968 = meta25968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25969,meta25968__$1){
var self__ = this;
var _25969__$1 = this;
return (new cljs.core.async.t_cljs$core$async25967(self__.p,self__.ch,meta25968__$1));
}));

(cljs.core.async.t_cljs$core$async25967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25969){
var self__ = this;
var _25969__$1 = this;
return self__.meta25968;
}));

(cljs.core.async.t_cljs$core$async25967.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25967.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25967.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25967.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25967.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25967.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25967.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25968","meta25968",208285693,null)], null);
}));

(cljs.core.async.t_cljs$core$async25967.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25967");

(cljs.core.async.t_cljs$core$async25967.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25967");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25967.
 */
cljs.core.async.__GT_t_cljs$core$async25967 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25967(p__$1,ch__$1,meta25968){
return (new cljs.core.async.t_cljs$core$async25967(p__$1,ch__$1,meta25968));
});

}

return (new cljs.core.async.t_cljs$core$async25967(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25971 = arguments.length;
switch (G__25971) {
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
var c__24527__auto___26011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_25992){
var state_val_25993 = (state_25992[(1)]);
if((state_val_25993 === (7))){
var inst_25988 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
var statearr_25994_26012 = state_25992__$1;
(statearr_25994_26012[(2)] = inst_25988);

(statearr_25994_26012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (1))){
var state_25992__$1 = state_25992;
var statearr_25995_26013 = state_25992__$1;
(statearr_25995_26013[(2)] = null);

(statearr_25995_26013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (4))){
var inst_25974 = (state_25992[(7)]);
var inst_25974__$1 = (state_25992[(2)]);
var inst_25975 = (inst_25974__$1 == null);
var state_25992__$1 = (function (){var statearr_25996 = state_25992;
(statearr_25996[(7)] = inst_25974__$1);

return statearr_25996;
})();
if(cljs.core.truth_(inst_25975)){
var statearr_25997_26014 = state_25992__$1;
(statearr_25997_26014[(1)] = (5));

} else {
var statearr_25998_26015 = state_25992__$1;
(statearr_25998_26015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (6))){
var inst_25974 = (state_25992[(7)]);
var inst_25979 = p.call(null,inst_25974);
var state_25992__$1 = state_25992;
if(cljs.core.truth_(inst_25979)){
var statearr_25999_26016 = state_25992__$1;
(statearr_25999_26016[(1)] = (8));

} else {
var statearr_26000_26017 = state_25992__$1;
(statearr_26000_26017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (3))){
var inst_25990 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25992__$1,inst_25990);
} else {
if((state_val_25993 === (2))){
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25992__$1,(4),ch);
} else {
if((state_val_25993 === (11))){
var inst_25982 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
var statearr_26001_26018 = state_25992__$1;
(statearr_26001_26018[(2)] = inst_25982);

(statearr_26001_26018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (9))){
var state_25992__$1 = state_25992;
var statearr_26002_26019 = state_25992__$1;
(statearr_26002_26019[(2)] = null);

(statearr_26002_26019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (5))){
var inst_25977 = cljs.core.async.close_BANG_.call(null,out);
var state_25992__$1 = state_25992;
var statearr_26003_26020 = state_25992__$1;
(statearr_26003_26020[(2)] = inst_25977);

(statearr_26003_26020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (10))){
var inst_25985 = (state_25992[(2)]);
var state_25992__$1 = (function (){var statearr_26004 = state_25992;
(statearr_26004[(8)] = inst_25985);

return statearr_26004;
})();
var statearr_26005_26021 = state_25992__$1;
(statearr_26005_26021[(2)] = null);

(statearr_26005_26021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (8))){
var inst_25974 = (state_25992[(7)]);
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25992__$1,(11),out,inst_25974);
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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_26006 = [null,null,null,null,null,null,null,null,null];
(statearr_26006[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_26006[(1)] = (1));

return statearr_26006;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_25992){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_25992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e26007){if((e26007 instanceof Object)){
var ex__24434__auto__ = e26007;
var statearr_26008_26022 = state_25992;
(statearr_26008_26022[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26023 = state_25992;
state_25992 = G__26023;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_25992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_25992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_26009 = f__24528__auto__.call(null);
(statearr_26009[(6)] = c__24527__auto___26011);

return statearr_26009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26025 = arguments.length;
switch (G__26025) {
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
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_26088){
var state_val_26089 = (state_26088[(1)]);
if((state_val_26089 === (7))){
var inst_26084 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26090_26128 = state_26088__$1;
(statearr_26090_26128[(2)] = inst_26084);

(statearr_26090_26128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (20))){
var inst_26054 = (state_26088[(7)]);
var inst_26065 = (state_26088[(2)]);
var inst_26066 = cljs.core.next.call(null,inst_26054);
var inst_26040 = inst_26066;
var inst_26041 = null;
var inst_26042 = (0);
var inst_26043 = (0);
var state_26088__$1 = (function (){var statearr_26091 = state_26088;
(statearr_26091[(8)] = inst_26040);

(statearr_26091[(9)] = inst_26043);

(statearr_26091[(10)] = inst_26065);

(statearr_26091[(11)] = inst_26041);

(statearr_26091[(12)] = inst_26042);

return statearr_26091;
})();
var statearr_26092_26129 = state_26088__$1;
(statearr_26092_26129[(2)] = null);

(statearr_26092_26129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (1))){
var state_26088__$1 = state_26088;
var statearr_26093_26130 = state_26088__$1;
(statearr_26093_26130[(2)] = null);

(statearr_26093_26130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (4))){
var inst_26029 = (state_26088[(13)]);
var inst_26029__$1 = (state_26088[(2)]);
var inst_26030 = (inst_26029__$1 == null);
var state_26088__$1 = (function (){var statearr_26094 = state_26088;
(statearr_26094[(13)] = inst_26029__$1);

return statearr_26094;
})();
if(cljs.core.truth_(inst_26030)){
var statearr_26095_26131 = state_26088__$1;
(statearr_26095_26131[(1)] = (5));

} else {
var statearr_26096_26132 = state_26088__$1;
(statearr_26096_26132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (15))){
var state_26088__$1 = state_26088;
var statearr_26100_26133 = state_26088__$1;
(statearr_26100_26133[(2)] = null);

(statearr_26100_26133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (21))){
var state_26088__$1 = state_26088;
var statearr_26101_26134 = state_26088__$1;
(statearr_26101_26134[(2)] = null);

(statearr_26101_26134[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (13))){
var inst_26040 = (state_26088[(8)]);
var inst_26043 = (state_26088[(9)]);
var inst_26041 = (state_26088[(11)]);
var inst_26042 = (state_26088[(12)]);
var inst_26050 = (state_26088[(2)]);
var inst_26051 = (inst_26043 + (1));
var tmp26097 = inst_26040;
var tmp26098 = inst_26041;
var tmp26099 = inst_26042;
var inst_26040__$1 = tmp26097;
var inst_26041__$1 = tmp26098;
var inst_26042__$1 = tmp26099;
var inst_26043__$1 = inst_26051;
var state_26088__$1 = (function (){var statearr_26102 = state_26088;
(statearr_26102[(8)] = inst_26040__$1);

(statearr_26102[(9)] = inst_26043__$1);

(statearr_26102[(14)] = inst_26050);

(statearr_26102[(11)] = inst_26041__$1);

(statearr_26102[(12)] = inst_26042__$1);

return statearr_26102;
})();
var statearr_26103_26135 = state_26088__$1;
(statearr_26103_26135[(2)] = null);

(statearr_26103_26135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (22))){
var state_26088__$1 = state_26088;
var statearr_26104_26136 = state_26088__$1;
(statearr_26104_26136[(2)] = null);

(statearr_26104_26136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (6))){
var inst_26029 = (state_26088[(13)]);
var inst_26038 = f.call(null,inst_26029);
var inst_26039 = cljs.core.seq.call(null,inst_26038);
var inst_26040 = inst_26039;
var inst_26041 = null;
var inst_26042 = (0);
var inst_26043 = (0);
var state_26088__$1 = (function (){var statearr_26105 = state_26088;
(statearr_26105[(8)] = inst_26040);

(statearr_26105[(9)] = inst_26043);

(statearr_26105[(11)] = inst_26041);

(statearr_26105[(12)] = inst_26042);

return statearr_26105;
})();
var statearr_26106_26137 = state_26088__$1;
(statearr_26106_26137[(2)] = null);

(statearr_26106_26137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (17))){
var inst_26054 = (state_26088[(7)]);
var inst_26058 = cljs.core.chunk_first.call(null,inst_26054);
var inst_26059 = cljs.core.chunk_rest.call(null,inst_26054);
var inst_26060 = cljs.core.count.call(null,inst_26058);
var inst_26040 = inst_26059;
var inst_26041 = inst_26058;
var inst_26042 = inst_26060;
var inst_26043 = (0);
var state_26088__$1 = (function (){var statearr_26107 = state_26088;
(statearr_26107[(8)] = inst_26040);

(statearr_26107[(9)] = inst_26043);

(statearr_26107[(11)] = inst_26041);

(statearr_26107[(12)] = inst_26042);

return statearr_26107;
})();
var statearr_26108_26138 = state_26088__$1;
(statearr_26108_26138[(2)] = null);

(statearr_26108_26138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (3))){
var inst_26086 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26088__$1,inst_26086);
} else {
if((state_val_26089 === (12))){
var inst_26074 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26109_26139 = state_26088__$1;
(statearr_26109_26139[(2)] = inst_26074);

(statearr_26109_26139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (2))){
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(4),in$);
} else {
if((state_val_26089 === (23))){
var inst_26082 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26110_26140 = state_26088__$1;
(statearr_26110_26140[(2)] = inst_26082);

(statearr_26110_26140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (19))){
var inst_26069 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26111_26141 = state_26088__$1;
(statearr_26111_26141[(2)] = inst_26069);

(statearr_26111_26141[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (11))){
var inst_26040 = (state_26088[(8)]);
var inst_26054 = (state_26088[(7)]);
var inst_26054__$1 = cljs.core.seq.call(null,inst_26040);
var state_26088__$1 = (function (){var statearr_26112 = state_26088;
(statearr_26112[(7)] = inst_26054__$1);

return statearr_26112;
})();
if(inst_26054__$1){
var statearr_26113_26142 = state_26088__$1;
(statearr_26113_26142[(1)] = (14));

} else {
var statearr_26114_26143 = state_26088__$1;
(statearr_26114_26143[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (9))){
var inst_26076 = (state_26088[(2)]);
var inst_26077 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26088__$1 = (function (){var statearr_26115 = state_26088;
(statearr_26115[(15)] = inst_26076);

return statearr_26115;
})();
if(cljs.core.truth_(inst_26077)){
var statearr_26116_26144 = state_26088__$1;
(statearr_26116_26144[(1)] = (21));

} else {
var statearr_26117_26145 = state_26088__$1;
(statearr_26117_26145[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (5))){
var inst_26032 = cljs.core.async.close_BANG_.call(null,out);
var state_26088__$1 = state_26088;
var statearr_26118_26146 = state_26088__$1;
(statearr_26118_26146[(2)] = inst_26032);

(statearr_26118_26146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (14))){
var inst_26054 = (state_26088[(7)]);
var inst_26056 = cljs.core.chunked_seq_QMARK_.call(null,inst_26054);
var state_26088__$1 = state_26088;
if(inst_26056){
var statearr_26119_26147 = state_26088__$1;
(statearr_26119_26147[(1)] = (17));

} else {
var statearr_26120_26148 = state_26088__$1;
(statearr_26120_26148[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (16))){
var inst_26072 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26121_26149 = state_26088__$1;
(statearr_26121_26149[(2)] = inst_26072);

(statearr_26121_26149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (10))){
var inst_26043 = (state_26088[(9)]);
var inst_26041 = (state_26088[(11)]);
var inst_26048 = cljs.core._nth.call(null,inst_26041,inst_26043);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26088__$1,(13),out,inst_26048);
} else {
if((state_val_26089 === (18))){
var inst_26054 = (state_26088[(7)]);
var inst_26063 = cljs.core.first.call(null,inst_26054);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26088__$1,(20),out,inst_26063);
} else {
if((state_val_26089 === (8))){
var inst_26043 = (state_26088[(9)]);
var inst_26042 = (state_26088[(12)]);
var inst_26045 = (inst_26043 < inst_26042);
var inst_26046 = inst_26045;
var state_26088__$1 = state_26088;
if(cljs.core.truth_(inst_26046)){
var statearr_26122_26150 = state_26088__$1;
(statearr_26122_26150[(1)] = (10));

} else {
var statearr_26123_26151 = state_26088__$1;
(statearr_26123_26151[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__24431__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24431__auto____0 = (function (){
var statearr_26124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26124[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24431__auto__);

(statearr_26124[(1)] = (1));

return statearr_26124;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24431__auto____1 = (function (state_26088){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_26088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e26125){if((e26125 instanceof Object)){
var ex__24434__auto__ = e26125;
var statearr_26126_26152 = state_26088;
(statearr_26126_26152[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26153 = state_26088;
state_26088 = G__26153;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24431__auto__ = function(state_26088){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24431__auto____1.call(this,state_26088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24431__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24431__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_26127 = f__24528__auto__.call(null);
(statearr_26127[(6)] = c__24527__auto__);

return statearr_26127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26155 = arguments.length;
switch (G__26155) {
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
var G__26158 = arguments.length;
switch (G__26158) {
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
var G__26161 = arguments.length;
switch (G__26161) {
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
var c__24527__auto___26208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_26185){
var state_val_26186 = (state_26185[(1)]);
if((state_val_26186 === (7))){
var inst_26180 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26187_26209 = state_26185__$1;
(statearr_26187_26209[(2)] = inst_26180);

(statearr_26187_26209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (1))){
var inst_26162 = null;
var state_26185__$1 = (function (){var statearr_26188 = state_26185;
(statearr_26188[(7)] = inst_26162);

return statearr_26188;
})();
var statearr_26189_26210 = state_26185__$1;
(statearr_26189_26210[(2)] = null);

(statearr_26189_26210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (4))){
var inst_26165 = (state_26185[(8)]);
var inst_26165__$1 = (state_26185[(2)]);
var inst_26166 = (inst_26165__$1 == null);
var inst_26167 = cljs.core.not.call(null,inst_26166);
var state_26185__$1 = (function (){var statearr_26190 = state_26185;
(statearr_26190[(8)] = inst_26165__$1);

return statearr_26190;
})();
if(inst_26167){
var statearr_26191_26211 = state_26185__$1;
(statearr_26191_26211[(1)] = (5));

} else {
var statearr_26192_26212 = state_26185__$1;
(statearr_26192_26212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (6))){
var state_26185__$1 = state_26185;
var statearr_26193_26213 = state_26185__$1;
(statearr_26193_26213[(2)] = null);

(statearr_26193_26213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (3))){
var inst_26182 = (state_26185[(2)]);
var inst_26183 = cljs.core.async.close_BANG_.call(null,out);
var state_26185__$1 = (function (){var statearr_26194 = state_26185;
(statearr_26194[(9)] = inst_26182);

return statearr_26194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26185__$1,inst_26183);
} else {
if((state_val_26186 === (2))){
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26185__$1,(4),ch);
} else {
if((state_val_26186 === (11))){
var inst_26165 = (state_26185[(8)]);
var inst_26174 = (state_26185[(2)]);
var inst_26162 = inst_26165;
var state_26185__$1 = (function (){var statearr_26195 = state_26185;
(statearr_26195[(7)] = inst_26162);

(statearr_26195[(10)] = inst_26174);

return statearr_26195;
})();
var statearr_26196_26214 = state_26185__$1;
(statearr_26196_26214[(2)] = null);

(statearr_26196_26214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (9))){
var inst_26165 = (state_26185[(8)]);
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26185__$1,(11),out,inst_26165);
} else {
if((state_val_26186 === (5))){
var inst_26162 = (state_26185[(7)]);
var inst_26165 = (state_26185[(8)]);
var inst_26169 = cljs.core._EQ_.call(null,inst_26165,inst_26162);
var state_26185__$1 = state_26185;
if(inst_26169){
var statearr_26198_26215 = state_26185__$1;
(statearr_26198_26215[(1)] = (8));

} else {
var statearr_26199_26216 = state_26185__$1;
(statearr_26199_26216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (10))){
var inst_26177 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26200_26217 = state_26185__$1;
(statearr_26200_26217[(2)] = inst_26177);

(statearr_26200_26217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (8))){
var inst_26162 = (state_26185[(7)]);
var tmp26197 = inst_26162;
var inst_26162__$1 = tmp26197;
var state_26185__$1 = (function (){var statearr_26201 = state_26185;
(statearr_26201[(7)] = inst_26162__$1);

return statearr_26201;
})();
var statearr_26202_26218 = state_26185__$1;
(statearr_26202_26218[(2)] = null);

(statearr_26202_26218[(1)] = (2));


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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_26203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26203[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_26203[(1)] = (1));

return statearr_26203;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_26185){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_26185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e26204){if((e26204 instanceof Object)){
var ex__24434__auto__ = e26204;
var statearr_26205_26219 = state_26185;
(statearr_26205_26219[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26220 = state_26185;
state_26185 = G__26220;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_26185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_26185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_26206 = f__24528__auto__.call(null);
(statearr_26206[(6)] = c__24527__auto___26208);

return statearr_26206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26222 = arguments.length;
switch (G__26222) {
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
var c__24527__auto___26288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_26260){
var state_val_26261 = (state_26260[(1)]);
if((state_val_26261 === (7))){
var inst_26256 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26262_26289 = state_26260__$1;
(statearr_26262_26289[(2)] = inst_26256);

(statearr_26262_26289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (1))){
var inst_26223 = (new Array(n));
var inst_26224 = inst_26223;
var inst_26225 = (0);
var state_26260__$1 = (function (){var statearr_26263 = state_26260;
(statearr_26263[(7)] = inst_26225);

(statearr_26263[(8)] = inst_26224);

return statearr_26263;
})();
var statearr_26264_26290 = state_26260__$1;
(statearr_26264_26290[(2)] = null);

(statearr_26264_26290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (4))){
var inst_26228 = (state_26260[(9)]);
var inst_26228__$1 = (state_26260[(2)]);
var inst_26229 = (inst_26228__$1 == null);
var inst_26230 = cljs.core.not.call(null,inst_26229);
var state_26260__$1 = (function (){var statearr_26265 = state_26260;
(statearr_26265[(9)] = inst_26228__$1);

return statearr_26265;
})();
if(inst_26230){
var statearr_26266_26291 = state_26260__$1;
(statearr_26266_26291[(1)] = (5));

} else {
var statearr_26267_26292 = state_26260__$1;
(statearr_26267_26292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (15))){
var inst_26250 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26268_26293 = state_26260__$1;
(statearr_26268_26293[(2)] = inst_26250);

(statearr_26268_26293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (13))){
var state_26260__$1 = state_26260;
var statearr_26269_26294 = state_26260__$1;
(statearr_26269_26294[(2)] = null);

(statearr_26269_26294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (6))){
var inst_26225 = (state_26260[(7)]);
var inst_26246 = (inst_26225 > (0));
var state_26260__$1 = state_26260;
if(cljs.core.truth_(inst_26246)){
var statearr_26270_26295 = state_26260__$1;
(statearr_26270_26295[(1)] = (12));

} else {
var statearr_26271_26296 = state_26260__$1;
(statearr_26271_26296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (3))){
var inst_26258 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26260__$1,inst_26258);
} else {
if((state_val_26261 === (12))){
var inst_26224 = (state_26260[(8)]);
var inst_26248 = cljs.core.vec.call(null,inst_26224);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26260__$1,(15),out,inst_26248);
} else {
if((state_val_26261 === (2))){
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(4),ch);
} else {
if((state_val_26261 === (11))){
var inst_26240 = (state_26260[(2)]);
var inst_26241 = (new Array(n));
var inst_26224 = inst_26241;
var inst_26225 = (0);
var state_26260__$1 = (function (){var statearr_26272 = state_26260;
(statearr_26272[(10)] = inst_26240);

(statearr_26272[(7)] = inst_26225);

(statearr_26272[(8)] = inst_26224);

return statearr_26272;
})();
var statearr_26273_26297 = state_26260__$1;
(statearr_26273_26297[(2)] = null);

(statearr_26273_26297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (9))){
var inst_26224 = (state_26260[(8)]);
var inst_26238 = cljs.core.vec.call(null,inst_26224);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26260__$1,(11),out,inst_26238);
} else {
if((state_val_26261 === (5))){
var inst_26228 = (state_26260[(9)]);
var inst_26225 = (state_26260[(7)]);
var inst_26224 = (state_26260[(8)]);
var inst_26233 = (state_26260[(11)]);
var inst_26232 = (inst_26224[inst_26225] = inst_26228);
var inst_26233__$1 = (inst_26225 + (1));
var inst_26234 = (inst_26233__$1 < n);
var state_26260__$1 = (function (){var statearr_26274 = state_26260;
(statearr_26274[(12)] = inst_26232);

(statearr_26274[(11)] = inst_26233__$1);

return statearr_26274;
})();
if(cljs.core.truth_(inst_26234)){
var statearr_26275_26298 = state_26260__$1;
(statearr_26275_26298[(1)] = (8));

} else {
var statearr_26276_26299 = state_26260__$1;
(statearr_26276_26299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (14))){
var inst_26253 = (state_26260[(2)]);
var inst_26254 = cljs.core.async.close_BANG_.call(null,out);
var state_26260__$1 = (function (){var statearr_26278 = state_26260;
(statearr_26278[(13)] = inst_26253);

return statearr_26278;
})();
var statearr_26279_26300 = state_26260__$1;
(statearr_26279_26300[(2)] = inst_26254);

(statearr_26279_26300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (10))){
var inst_26244 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26280_26301 = state_26260__$1;
(statearr_26280_26301[(2)] = inst_26244);

(statearr_26280_26301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (8))){
var inst_26224 = (state_26260[(8)]);
var inst_26233 = (state_26260[(11)]);
var tmp26277 = inst_26224;
var inst_26224__$1 = tmp26277;
var inst_26225 = inst_26233;
var state_26260__$1 = (function (){var statearr_26281 = state_26260;
(statearr_26281[(7)] = inst_26225);

(statearr_26281[(8)] = inst_26224__$1);

return statearr_26281;
})();
var statearr_26282_26302 = state_26260__$1;
(statearr_26282_26302[(2)] = null);

(statearr_26282_26302[(1)] = (2));


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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_26283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26283[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_26283[(1)] = (1));

return statearr_26283;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_26260){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_26260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e26284){if((e26284 instanceof Object)){
var ex__24434__auto__ = e26284;
var statearr_26285_26303 = state_26260;
(statearr_26285_26303[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26304 = state_26260;
state_26260 = G__26304;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_26260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_26260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_26286 = f__24528__auto__.call(null);
(statearr_26286[(6)] = c__24527__auto___26288);

return statearr_26286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26306 = arguments.length;
switch (G__26306) {
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
var c__24527__auto___26383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_26351){
var state_val_26352 = (state_26351[(1)]);
if((state_val_26352 === (7))){
var inst_26347 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
var statearr_26353_26384 = state_26351__$1;
(statearr_26353_26384[(2)] = inst_26347);

(statearr_26353_26384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (1))){
var inst_26307 = [];
var inst_26308 = inst_26307;
var inst_26309 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26351__$1 = (function (){var statearr_26354 = state_26351;
(statearr_26354[(7)] = inst_26308);

(statearr_26354[(8)] = inst_26309);

return statearr_26354;
})();
var statearr_26355_26385 = state_26351__$1;
(statearr_26355_26385[(2)] = null);

(statearr_26355_26385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (4))){
var inst_26312 = (state_26351[(9)]);
var inst_26312__$1 = (state_26351[(2)]);
var inst_26313 = (inst_26312__$1 == null);
var inst_26314 = cljs.core.not.call(null,inst_26313);
var state_26351__$1 = (function (){var statearr_26356 = state_26351;
(statearr_26356[(9)] = inst_26312__$1);

return statearr_26356;
})();
if(inst_26314){
var statearr_26357_26386 = state_26351__$1;
(statearr_26357_26386[(1)] = (5));

} else {
var statearr_26358_26387 = state_26351__$1;
(statearr_26358_26387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (15))){
var inst_26308 = (state_26351[(7)]);
var inst_26339 = cljs.core.vec.call(null,inst_26308);
var state_26351__$1 = state_26351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26351__$1,(18),out,inst_26339);
} else {
if((state_val_26352 === (13))){
var inst_26334 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
var statearr_26359_26388 = state_26351__$1;
(statearr_26359_26388[(2)] = inst_26334);

(statearr_26359_26388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (6))){
var inst_26308 = (state_26351[(7)]);
var inst_26336 = inst_26308.length;
var inst_26337 = (inst_26336 > (0));
var state_26351__$1 = state_26351;
if(cljs.core.truth_(inst_26337)){
var statearr_26360_26389 = state_26351__$1;
(statearr_26360_26389[(1)] = (15));

} else {
var statearr_26361_26390 = state_26351__$1;
(statearr_26361_26390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (17))){
var inst_26344 = (state_26351[(2)]);
var inst_26345 = cljs.core.async.close_BANG_.call(null,out);
var state_26351__$1 = (function (){var statearr_26362 = state_26351;
(statearr_26362[(10)] = inst_26344);

return statearr_26362;
})();
var statearr_26363_26391 = state_26351__$1;
(statearr_26363_26391[(2)] = inst_26345);

(statearr_26363_26391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (3))){
var inst_26349 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26351__$1,inst_26349);
} else {
if((state_val_26352 === (12))){
var inst_26308 = (state_26351[(7)]);
var inst_26327 = cljs.core.vec.call(null,inst_26308);
var state_26351__$1 = state_26351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26351__$1,(14),out,inst_26327);
} else {
if((state_val_26352 === (2))){
var state_26351__$1 = state_26351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26351__$1,(4),ch);
} else {
if((state_val_26352 === (11))){
var inst_26308 = (state_26351[(7)]);
var inst_26316 = (state_26351[(11)]);
var inst_26312 = (state_26351[(9)]);
var inst_26324 = inst_26308.push(inst_26312);
var tmp26364 = inst_26308;
var inst_26308__$1 = tmp26364;
var inst_26309 = inst_26316;
var state_26351__$1 = (function (){var statearr_26365 = state_26351;
(statearr_26365[(7)] = inst_26308__$1);

(statearr_26365[(12)] = inst_26324);

(statearr_26365[(8)] = inst_26309);

return statearr_26365;
})();
var statearr_26366_26392 = state_26351__$1;
(statearr_26366_26392[(2)] = null);

(statearr_26366_26392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (9))){
var inst_26309 = (state_26351[(8)]);
var inst_26320 = cljs.core.keyword_identical_QMARK_.call(null,inst_26309,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_26351__$1 = state_26351;
var statearr_26367_26393 = state_26351__$1;
(statearr_26367_26393[(2)] = inst_26320);

(statearr_26367_26393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (5))){
var inst_26316 = (state_26351[(11)]);
var inst_26312 = (state_26351[(9)]);
var inst_26309 = (state_26351[(8)]);
var inst_26317 = (state_26351[(13)]);
var inst_26316__$1 = f.call(null,inst_26312);
var inst_26317__$1 = cljs.core._EQ_.call(null,inst_26316__$1,inst_26309);
var state_26351__$1 = (function (){var statearr_26368 = state_26351;
(statearr_26368[(11)] = inst_26316__$1);

(statearr_26368[(13)] = inst_26317__$1);

return statearr_26368;
})();
if(inst_26317__$1){
var statearr_26369_26394 = state_26351__$1;
(statearr_26369_26394[(1)] = (8));

} else {
var statearr_26370_26395 = state_26351__$1;
(statearr_26370_26395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (14))){
var inst_26316 = (state_26351[(11)]);
var inst_26312 = (state_26351[(9)]);
var inst_26329 = (state_26351[(2)]);
var inst_26330 = [];
var inst_26331 = inst_26330.push(inst_26312);
var inst_26308 = inst_26330;
var inst_26309 = inst_26316;
var state_26351__$1 = (function (){var statearr_26371 = state_26351;
(statearr_26371[(14)] = inst_26331);

(statearr_26371[(7)] = inst_26308);

(statearr_26371[(8)] = inst_26309);

(statearr_26371[(15)] = inst_26329);

return statearr_26371;
})();
var statearr_26372_26396 = state_26351__$1;
(statearr_26372_26396[(2)] = null);

(statearr_26372_26396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (16))){
var state_26351__$1 = state_26351;
var statearr_26373_26397 = state_26351__$1;
(statearr_26373_26397[(2)] = null);

(statearr_26373_26397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (10))){
var inst_26322 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
if(cljs.core.truth_(inst_26322)){
var statearr_26374_26398 = state_26351__$1;
(statearr_26374_26398[(1)] = (11));

} else {
var statearr_26375_26399 = state_26351__$1;
(statearr_26375_26399[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (18))){
var inst_26341 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
var statearr_26376_26400 = state_26351__$1;
(statearr_26376_26400[(2)] = inst_26341);

(statearr_26376_26400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (8))){
var inst_26317 = (state_26351[(13)]);
var state_26351__$1 = state_26351;
var statearr_26377_26401 = state_26351__$1;
(statearr_26377_26401[(2)] = inst_26317);

(statearr_26377_26401[(1)] = (10));


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
var cljs$core$async$state_machine__24431__auto__ = null;
var cljs$core$async$state_machine__24431__auto____0 = (function (){
var statearr_26378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26378[(0)] = cljs$core$async$state_machine__24431__auto__);

(statearr_26378[(1)] = (1));

return statearr_26378;
});
var cljs$core$async$state_machine__24431__auto____1 = (function (state_26351){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_26351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e26379){if((e26379 instanceof Object)){
var ex__24434__auto__ = e26379;
var statearr_26380_26402 = state_26351;
(statearr_26380_26402[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26403 = state_26351;
state_26351 = G__26403;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
cljs$core$async$state_machine__24431__auto__ = function(state_26351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24431__auto____1.call(this,state_26351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24431__auto____0;
cljs$core$async$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24431__auto____1;
return cljs$core$async$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_26381 = f__24528__auto__.call(null);
(statearr_26381[(6)] = c__24527__auto___26383);

return statearr_26381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1745332059615
