// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22118__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22119__i = 0, G__22119__a = new Array(arguments.length -  0);
while (G__22119__i < G__22119__a.length) {G__22119__a[G__22119__i] = arguments[G__22119__i + 0]; ++G__22119__i;}
  args = new cljs.core.IndexedSeq(G__22119__a,0,null);
} 
return G__22118__delegate.call(this,args);};
G__22118.cljs$lang$maxFixedArity = 0;
G__22118.cljs$lang$applyTo = (function (arglist__22120){
var args = cljs.core.seq(arglist__22120);
return G__22118__delegate(args);
});
G__22118.cljs$core$IFn$_invoke$arity$variadic = G__22118__delegate;
return G__22118;
})()
);

(o.error = (function() { 
var G__22121__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22122__i = 0, G__22122__a = new Array(arguments.length -  0);
while (G__22122__i < G__22122__a.length) {G__22122__a[G__22122__i] = arguments[G__22122__i + 0]; ++G__22122__i;}
  args = new cljs.core.IndexedSeq(G__22122__a,0,null);
} 
return G__22121__delegate.call(this,args);};
G__22121.cljs$lang$maxFixedArity = 0;
G__22121.cljs$lang$applyTo = (function (arglist__22123){
var args = cljs.core.seq(arglist__22123);
return G__22121__delegate(args);
});
G__22121.cljs$core$IFn$_invoke$arity$variadic = G__22121__delegate;
return G__22121;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1744477349176
