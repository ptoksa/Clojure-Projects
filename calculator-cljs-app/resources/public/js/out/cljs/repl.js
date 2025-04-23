// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29242){
var map__29243 = p__29242;
var map__29243__$1 = cljs.core.__destructure_map.call(null,map__29243);
var m = map__29243__$1;
var n = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29244_29272 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29245_29273 = null;
var count__29246_29274 = (0);
var i__29247_29275 = (0);
while(true){
if((i__29247_29275 < count__29246_29274)){
var f_29276 = cljs.core._nth.call(null,chunk__29245_29273,i__29247_29275);
cljs.core.println.call(null,"  ",f_29276);


var G__29277 = seq__29244_29272;
var G__29278 = chunk__29245_29273;
var G__29279 = count__29246_29274;
var G__29280 = (i__29247_29275 + (1));
seq__29244_29272 = G__29277;
chunk__29245_29273 = G__29278;
count__29246_29274 = G__29279;
i__29247_29275 = G__29280;
continue;
} else {
var temp__5804__auto___29281 = cljs.core.seq.call(null,seq__29244_29272);
if(temp__5804__auto___29281){
var seq__29244_29282__$1 = temp__5804__auto___29281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29244_29282__$1)){
var c__5568__auto___29283 = cljs.core.chunk_first.call(null,seq__29244_29282__$1);
var G__29284 = cljs.core.chunk_rest.call(null,seq__29244_29282__$1);
var G__29285 = c__5568__auto___29283;
var G__29286 = cljs.core.count.call(null,c__5568__auto___29283);
var G__29287 = (0);
seq__29244_29272 = G__29284;
chunk__29245_29273 = G__29285;
count__29246_29274 = G__29286;
i__29247_29275 = G__29287;
continue;
} else {
var f_29288 = cljs.core.first.call(null,seq__29244_29282__$1);
cljs.core.println.call(null,"  ",f_29288);


var G__29289 = cljs.core.next.call(null,seq__29244_29282__$1);
var G__29290 = null;
var G__29291 = (0);
var G__29292 = (0);
seq__29244_29272 = G__29289;
chunk__29245_29273 = G__29290;
count__29246_29274 = G__29291;
i__29247_29275 = G__29292;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29293 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29293);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29293)))?cljs.core.second.call(null,arglists_29293):arglists_29293));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29248_29294 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29249_29295 = null;
var count__29250_29296 = (0);
var i__29251_29297 = (0);
while(true){
if((i__29251_29297 < count__29250_29296)){
var vec__29260_29298 = cljs.core._nth.call(null,chunk__29249_29295,i__29251_29297);
var name_29299 = cljs.core.nth.call(null,vec__29260_29298,(0),null);
var map__29263_29300 = cljs.core.nth.call(null,vec__29260_29298,(1),null);
var map__29263_29301__$1 = cljs.core.__destructure_map.call(null,map__29263_29300);
var doc_29302 = cljs.core.get.call(null,map__29263_29301__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29303 = cljs.core.get.call(null,map__29263_29301__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29299);

cljs.core.println.call(null," ",arglists_29303);

if(cljs.core.truth_(doc_29302)){
cljs.core.println.call(null," ",doc_29302);
} else {
}


var G__29304 = seq__29248_29294;
var G__29305 = chunk__29249_29295;
var G__29306 = count__29250_29296;
var G__29307 = (i__29251_29297 + (1));
seq__29248_29294 = G__29304;
chunk__29249_29295 = G__29305;
count__29250_29296 = G__29306;
i__29251_29297 = G__29307;
continue;
} else {
var temp__5804__auto___29308 = cljs.core.seq.call(null,seq__29248_29294);
if(temp__5804__auto___29308){
var seq__29248_29309__$1 = temp__5804__auto___29308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29248_29309__$1)){
var c__5568__auto___29310 = cljs.core.chunk_first.call(null,seq__29248_29309__$1);
var G__29311 = cljs.core.chunk_rest.call(null,seq__29248_29309__$1);
var G__29312 = c__5568__auto___29310;
var G__29313 = cljs.core.count.call(null,c__5568__auto___29310);
var G__29314 = (0);
seq__29248_29294 = G__29311;
chunk__29249_29295 = G__29312;
count__29250_29296 = G__29313;
i__29251_29297 = G__29314;
continue;
} else {
var vec__29264_29315 = cljs.core.first.call(null,seq__29248_29309__$1);
var name_29316 = cljs.core.nth.call(null,vec__29264_29315,(0),null);
var map__29267_29317 = cljs.core.nth.call(null,vec__29264_29315,(1),null);
var map__29267_29318__$1 = cljs.core.__destructure_map.call(null,map__29267_29317);
var doc_29319 = cljs.core.get.call(null,map__29267_29318__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29320 = cljs.core.get.call(null,map__29267_29318__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29316);

cljs.core.println.call(null," ",arglists_29320);

if(cljs.core.truth_(doc_29319)){
cljs.core.println.call(null," ",doc_29319);
} else {
}


var G__29321 = cljs.core.next.call(null,seq__29248_29309__$1);
var G__29322 = null;
var G__29323 = (0);
var G__29324 = (0);
seq__29248_29294 = G__29321;
chunk__29249_29295 = G__29322;
count__29250_29296 = G__29323;
i__29251_29297 = G__29324;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__29268 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29269 = null;
var count__29270 = (0);
var i__29271 = (0);
while(true){
if((i__29271 < count__29270)){
var role = cljs.core._nth.call(null,chunk__29269,i__29271);
var temp__5804__auto___29325__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___29325__$1)){
var spec_29326 = temp__5804__auto___29325__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29326));
} else {
}


var G__29327 = seq__29268;
var G__29328 = chunk__29269;
var G__29329 = count__29270;
var G__29330 = (i__29271 + (1));
seq__29268 = G__29327;
chunk__29269 = G__29328;
count__29270 = G__29329;
i__29271 = G__29330;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__29268);
if(temp__5804__auto____$1){
var seq__29268__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29268__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__29268__$1);
var G__29331 = cljs.core.chunk_rest.call(null,seq__29268__$1);
var G__29332 = c__5568__auto__;
var G__29333 = cljs.core.count.call(null,c__5568__auto__);
var G__29334 = (0);
seq__29268 = G__29331;
chunk__29269 = G__29332;
count__29270 = G__29333;
i__29271 = G__29334;
continue;
} else {
var role = cljs.core.first.call(null,seq__29268__$1);
var temp__5804__auto___29335__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___29335__$2)){
var spec_29336 = temp__5804__auto___29335__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29336));
} else {
}


var G__29337 = cljs.core.next.call(null,seq__29268__$1);
var G__29338 = null;
var G__29339 = (0);
var G__29340 = (0);
seq__29268 = G__29337;
chunk__29269 = G__29338;
count__29270 = G__29339;
i__29271 = G__29340;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29341 = cljs.core.conj.call(null,via,t);
var G__29342 = cljs.core.ex_cause.call(null,t);
via = G__29341;
t = G__29342;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29345 = datafied_throwable;
var map__29345__$1 = cljs.core.__destructure_map.call(null,map__29345);
var via = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29346 = cljs.core.last.call(null,via);
var map__29346__$1 = cljs.core.__destructure_map.call(null,map__29346);
var type = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29347 = data;
var map__29347__$1 = cljs.core.__destructure_map.call(null,map__29347);
var problems = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29348 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29348__$1 = cljs.core.__destructure_map.call(null,map__29348);
var top_data = map__29348__$1;
var source = cljs.core.get.call(null,map__29348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29349 = phase;
var G__29349__$1 = (((G__29349 instanceof cljs.core.Keyword))?G__29349.fqn:null);
switch (G__29349__$1) {
case "read-source":
var map__29350 = data;
var map__29350__$1 = cljs.core.__destructure_map.call(null,map__29350);
var line = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29351 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29351__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29351,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29351);
var G__29351__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29351__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29351__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29351__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29352 = top_data;
var G__29352__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29352,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29352);
var G__29352__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29352__$1);
var G__29352__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29352__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29352__$2);
var G__29352__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29352__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29352__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29352__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29352__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29353 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29353,(0),null);
var method = cljs.core.nth.call(null,vec__29353,(1),null);
var file = cljs.core.nth.call(null,vec__29353,(2),null);
var line = cljs.core.nth.call(null,vec__29353,(3),null);
var G__29356 = top_data;
var G__29356__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29356,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29356);
var G__29356__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29356__$1);
var G__29356__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__29356__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29356__$2);
var G__29356__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29356__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29356__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29356__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29356__$4;
}

break;
case "execution":
var vec__29357 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29357,(0),null);
var method = cljs.core.nth.call(null,vec__29357,(1),null);
var file = cljs.core.nth.call(null,vec__29357,(2),null);
var line = cljs.core.nth.call(null,vec__29357,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__29344_SHARP_){
var or__5045__auto__ = (p1__29344_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29344_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__29360 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29360__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29360,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29360);
var G__29360__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29360__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29360__$1);
var G__29360__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.call(null,G__29360__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29360__$2);
var G__29360__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29360__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29360__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29360__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29360__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29349__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29364){
var map__29365 = p__29364;
var map__29365__$1 = cljs.core.__destructure_map.call(null,map__29365);
var triage_data = map__29365__$1;
var phase = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29366 = phase;
var G__29366__$1 = (((G__29366 instanceof cljs.core.Keyword))?G__29366.fqn:null);
switch (G__29366__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29367_29376 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29368_29377 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29369_29378 = true;
var _STAR_print_fn_STAR__temp_val__29370_29379 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29369_29378);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29370_29379);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29362_SHARP_){
return cljs.core.dissoc.call(null,p1__29362_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29368_29377);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29367_29376);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29371_29380 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29372_29381 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29373_29382 = true;
var _STAR_print_fn_STAR__temp_val__29374_29383 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29373_29382);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29374_29383);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29363_SHARP_){
return cljs.core.dissoc.call(null,p1__29363_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29372_29381);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29371_29380);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29366__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1744477361303
