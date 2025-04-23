// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29189){
var map__29190 = p__29189;
var map__29190__$1 = cljs.core.__destructure_map.call(null,map__29190);
var m = map__29190__$1;
var n = cljs.core.get.call(null,map__29190__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29190__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
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
var seq__29191_29219 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29192_29220 = null;
var count__29193_29221 = (0);
var i__29194_29222 = (0);
while(true){
if((i__29194_29222 < count__29193_29221)){
var f_29223 = cljs.core._nth.call(null,chunk__29192_29220,i__29194_29222);
cljs.core.println.call(null,"  ",f_29223);


var G__29224 = seq__29191_29219;
var G__29225 = chunk__29192_29220;
var G__29226 = count__29193_29221;
var G__29227 = (i__29194_29222 + (1));
seq__29191_29219 = G__29224;
chunk__29192_29220 = G__29225;
count__29193_29221 = G__29226;
i__29194_29222 = G__29227;
continue;
} else {
var temp__5753__auto___29228 = cljs.core.seq.call(null,seq__29191_29219);
if(temp__5753__auto___29228){
var seq__29191_29229__$1 = temp__5753__auto___29228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29191_29229__$1)){
var c__5568__auto___29230 = cljs.core.chunk_first.call(null,seq__29191_29229__$1);
var G__29231 = cljs.core.chunk_rest.call(null,seq__29191_29229__$1);
var G__29232 = c__5568__auto___29230;
var G__29233 = cljs.core.count.call(null,c__5568__auto___29230);
var G__29234 = (0);
seq__29191_29219 = G__29231;
chunk__29192_29220 = G__29232;
count__29193_29221 = G__29233;
i__29194_29222 = G__29234;
continue;
} else {
var f_29235 = cljs.core.first.call(null,seq__29191_29229__$1);
cljs.core.println.call(null,"  ",f_29235);


var G__29236 = cljs.core.next.call(null,seq__29191_29229__$1);
var G__29237 = null;
var G__29238 = (0);
var G__29239 = (0);
seq__29191_29219 = G__29236;
chunk__29192_29220 = G__29237;
count__29193_29221 = G__29238;
i__29194_29222 = G__29239;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29240 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29240);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29240)))?cljs.core.second.call(null,arglists_29240):arglists_29240));
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
var seq__29195_29241 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29196_29242 = null;
var count__29197_29243 = (0);
var i__29198_29244 = (0);
while(true){
if((i__29198_29244 < count__29197_29243)){
var vec__29207_29245 = cljs.core._nth.call(null,chunk__29196_29242,i__29198_29244);
var name_29246 = cljs.core.nth.call(null,vec__29207_29245,(0),null);
var map__29210_29247 = cljs.core.nth.call(null,vec__29207_29245,(1),null);
var map__29210_29248__$1 = cljs.core.__destructure_map.call(null,map__29210_29247);
var doc_29249 = cljs.core.get.call(null,map__29210_29248__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29250 = cljs.core.get.call(null,map__29210_29248__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29246);

cljs.core.println.call(null," ",arglists_29250);

if(cljs.core.truth_(doc_29249)){
cljs.core.println.call(null," ",doc_29249);
} else {
}


var G__29251 = seq__29195_29241;
var G__29252 = chunk__29196_29242;
var G__29253 = count__29197_29243;
var G__29254 = (i__29198_29244 + (1));
seq__29195_29241 = G__29251;
chunk__29196_29242 = G__29252;
count__29197_29243 = G__29253;
i__29198_29244 = G__29254;
continue;
} else {
var temp__5753__auto___29255 = cljs.core.seq.call(null,seq__29195_29241);
if(temp__5753__auto___29255){
var seq__29195_29256__$1 = temp__5753__auto___29255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29195_29256__$1)){
var c__5568__auto___29257 = cljs.core.chunk_first.call(null,seq__29195_29256__$1);
var G__29258 = cljs.core.chunk_rest.call(null,seq__29195_29256__$1);
var G__29259 = c__5568__auto___29257;
var G__29260 = cljs.core.count.call(null,c__5568__auto___29257);
var G__29261 = (0);
seq__29195_29241 = G__29258;
chunk__29196_29242 = G__29259;
count__29197_29243 = G__29260;
i__29198_29244 = G__29261;
continue;
} else {
var vec__29211_29262 = cljs.core.first.call(null,seq__29195_29256__$1);
var name_29263 = cljs.core.nth.call(null,vec__29211_29262,(0),null);
var map__29214_29264 = cljs.core.nth.call(null,vec__29211_29262,(1),null);
var map__29214_29265__$1 = cljs.core.__destructure_map.call(null,map__29214_29264);
var doc_29266 = cljs.core.get.call(null,map__29214_29265__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29267 = cljs.core.get.call(null,map__29214_29265__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29263);

cljs.core.println.call(null," ",arglists_29267);

if(cljs.core.truth_(doc_29266)){
cljs.core.println.call(null," ",doc_29266);
} else {
}


var G__29268 = cljs.core.next.call(null,seq__29195_29256__$1);
var G__29269 = null;
var G__29270 = (0);
var G__29271 = (0);
seq__29195_29241 = G__29268;
chunk__29196_29242 = G__29269;
count__29197_29243 = G__29270;
i__29198_29244 = G__29271;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__29215 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29216 = null;
var count__29217 = (0);
var i__29218 = (0);
while(true){
if((i__29218 < count__29217)){
var role = cljs.core._nth.call(null,chunk__29216,i__29218);
var temp__5753__auto___29272__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___29272__$1)){
var spec_29273 = temp__5753__auto___29272__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29273));
} else {
}


var G__29274 = seq__29215;
var G__29275 = chunk__29216;
var G__29276 = count__29217;
var G__29277 = (i__29218 + (1));
seq__29215 = G__29274;
chunk__29216 = G__29275;
count__29217 = G__29276;
i__29218 = G__29277;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__29215);
if(temp__5753__auto____$1){
var seq__29215__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29215__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__29215__$1);
var G__29278 = cljs.core.chunk_rest.call(null,seq__29215__$1);
var G__29279 = c__5568__auto__;
var G__29280 = cljs.core.count.call(null,c__5568__auto__);
var G__29281 = (0);
seq__29215 = G__29278;
chunk__29216 = G__29279;
count__29217 = G__29280;
i__29218 = G__29281;
continue;
} else {
var role = cljs.core.first.call(null,seq__29215__$1);
var temp__5753__auto___29282__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___29282__$2)){
var spec_29283 = temp__5753__auto___29282__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29283));
} else {
}


var G__29284 = cljs.core.next.call(null,seq__29215__$1);
var G__29285 = null;
var G__29286 = (0);
var G__29287 = (0);
seq__29215 = G__29284;
chunk__29216 = G__29285;
count__29217 = G__29286;
i__29218 = G__29287;
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
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
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
var G__29288 = cljs.core.conj.call(null,via,t);
var G__29289 = cljs.core.ex_cause.call(null,t);
via = G__29288;
t = G__29289;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
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
var map__29292 = datafied_throwable;
var map__29292__$1 = cljs.core.__destructure_map.call(null,map__29292);
var via = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29293 = cljs.core.last.call(null,via);
var map__29293__$1 = cljs.core.__destructure_map.call(null,map__29293);
var type = cljs.core.get.call(null,map__29293__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29293__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29293__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29294 = data;
var map__29294__$1 = cljs.core.__destructure_map.call(null,map__29294);
var problems = cljs.core.get.call(null,map__29294__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29294__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29294__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29295 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29295__$1 = cljs.core.__destructure_map.call(null,map__29295);
var top_data = map__29295__$1;
var source = cljs.core.get.call(null,map__29295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29296 = phase;
var G__29296__$1 = (((G__29296 instanceof cljs.core.Keyword))?G__29296.fqn:null);
switch (G__29296__$1) {
case "read-source":
var map__29297 = data;
var map__29297__$1 = cljs.core.__destructure_map.call(null,map__29297);
var line = cljs.core.get.call(null,map__29297__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29297__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29298 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29298__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29298,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29298);
var G__29298__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29298__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29298__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29298__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29298__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29299 = top_data;
var G__29299__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29299,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29299);
var G__29299__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29299__$1);
var G__29299__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29299__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29299__$2);
var G__29299__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29299__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29299__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29299__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29299__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29300 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29300,(0),null);
var method = cljs.core.nth.call(null,vec__29300,(1),null);
var file = cljs.core.nth.call(null,vec__29300,(2),null);
var line = cljs.core.nth.call(null,vec__29300,(3),null);
var G__29303 = top_data;
var G__29303__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29303,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29303);
var G__29303__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29303__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29303__$1);
var G__29303__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__29303__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29303__$2);
var G__29303__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29303__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29303__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29303__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29303__$4;
}

break;
case "execution":
var vec__29304 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29304,(0),null);
var method = cljs.core.nth.call(null,vec__29304,(1),null);
var file = cljs.core.nth.call(null,vec__29304,(2),null);
var line = cljs.core.nth.call(null,vec__29304,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__29291_SHARP_){
var or__5045__auto__ = (p1__29291_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29291_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__29307 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29307__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29307,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29307);
var G__29307__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29307__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29307__$1);
var G__29307__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29307__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29307__$2);
var G__29307__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29307__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29307__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29307__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29307__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29296__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29311){
var map__29312 = p__29311;
var map__29312__$1 = cljs.core.__destructure_map.call(null,map__29312);
var triage_data = map__29312__$1;
var phase = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29313 = phase;
var G__29313__$1 = (((G__29313 instanceof cljs.core.Keyword))?G__29313.fqn:null);
switch (G__29313__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29314_29323 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29315_29324 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29316_29325 = true;
var _STAR_print_fn_STAR__temp_val__29317_29326 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29316_29325);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29317_29326);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29309_SHARP_){
return cljs.core.dissoc.call(null,p1__29309_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29315_29324);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29314_29323);
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
var _STAR_print_newline_STAR__orig_val__29318_29327 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29319_29328 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29320_29329 = true;
var _STAR_print_fn_STAR__temp_val__29321_29330 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29320_29329);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29321_29330);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29310_SHARP_){
return cljs.core.dissoc.call(null,p1__29310_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29319_29328);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29318_29327);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29313__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1745332065233
