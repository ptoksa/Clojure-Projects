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
var G__22065__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22066__i = 0, G__22066__a = new Array(arguments.length -  0);
while (G__22066__i < G__22066__a.length) {G__22066__a[G__22066__i] = arguments[G__22066__i + 0]; ++G__22066__i;}
  args = new cljs.core.IndexedSeq(G__22066__a,0,null);
} 
return G__22065__delegate.call(this,args);};
G__22065.cljs$lang$maxFixedArity = 0;
G__22065.cljs$lang$applyTo = (function (arglist__22067){
var args = cljs.core.seq(arglist__22067);
return G__22065__delegate(args);
});
G__22065.cljs$core$IFn$_invoke$arity$variadic = G__22065__delegate;
return G__22065;
})()
);

(o.error = (function() { 
var G__22068__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22069__i = 0, G__22069__a = new Array(arguments.length -  0);
while (G__22069__i < G__22069__a.length) {G__22069__a[G__22069__i] = arguments[G__22069__i + 0]; ++G__22069__i;}
  args = new cljs.core.IndexedSeq(G__22069__a,0,null);
} 
return G__22068__delegate.call(this,args);};
G__22068.cljs$lang$maxFixedArity = 0;
G__22068.cljs$lang$applyTo = (function (arglist__22070){
var args = cljs.core.seq(arglist__22070);
return G__22068__delegate(args);
});
G__22068.cljs$core$IFn$_invoke$arity$variadic = G__22068__delegate;
return G__22068;
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

//# sourceMappingURL=debug.js.map?rel=1745332053118
