// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.file_reloading.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__5045__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (((typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (((cljs.core._EQ_.call(null,"cljs.core",ns)) || (((cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (((goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")))))))));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__27930 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__27930 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__27930,"requires");
}
}):(function (path){
var G__27931 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__27931 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__27931);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27932_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27932_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__27933 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__27933__$1 = (((G__27933 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__27933,"provides"));
if((G__27933__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__27933__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides")));
})),(function (dep,path,_){
var provides = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides");
var requires = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"requires");
var seq__27934 = cljs.core.seq.call(null,provides);
var chunk__27935 = null;
var count__27936 = (0);
var i__27937 = (0);
while(true){
if((i__27937 < count__27936)){
var prov = cljs.core._nth.call(null,chunk__27935,i__27937);
var seq__27946_27958 = cljs.core.seq.call(null,requires);
var chunk__27947_27959 = null;
var count__27948_27960 = (0);
var i__27949_27961 = (0);
while(true){
if((i__27949_27961 < count__27948_27960)){
var req_27962 = cljs.core._nth.call(null,chunk__27947_27959,i__27949_27961);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27962,prov);


var G__27963 = seq__27946_27958;
var G__27964 = chunk__27947_27959;
var G__27965 = count__27948_27960;
var G__27966 = (i__27949_27961 + (1));
seq__27946_27958 = G__27963;
chunk__27947_27959 = G__27964;
count__27948_27960 = G__27965;
i__27949_27961 = G__27966;
continue;
} else {
var temp__5804__auto___27967 = cljs.core.seq.call(null,seq__27946_27958);
if(temp__5804__auto___27967){
var seq__27946_27968__$1 = temp__5804__auto___27967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27946_27968__$1)){
var c__5568__auto___27969 = cljs.core.chunk_first.call(null,seq__27946_27968__$1);
var G__27970 = cljs.core.chunk_rest.call(null,seq__27946_27968__$1);
var G__27971 = c__5568__auto___27969;
var G__27972 = cljs.core.count.call(null,c__5568__auto___27969);
var G__27973 = (0);
seq__27946_27958 = G__27970;
chunk__27947_27959 = G__27971;
count__27948_27960 = G__27972;
i__27949_27961 = G__27973;
continue;
} else {
var req_27974 = cljs.core.first.call(null,seq__27946_27968__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27974,prov);


var G__27975 = cljs.core.next.call(null,seq__27946_27968__$1);
var G__27976 = null;
var G__27977 = (0);
var G__27978 = (0);
seq__27946_27958 = G__27975;
chunk__27947_27959 = G__27976;
count__27948_27960 = G__27977;
i__27949_27961 = G__27978;
continue;
}
} else {
}
}
break;
}


var G__27979 = seq__27934;
var G__27980 = chunk__27935;
var G__27981 = count__27936;
var G__27982 = (i__27937 + (1));
seq__27934 = G__27979;
chunk__27935 = G__27980;
count__27936 = G__27981;
i__27937 = G__27982;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27934);
if(temp__5804__auto__){
var seq__27934__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27934__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27934__$1);
var G__27983 = cljs.core.chunk_rest.call(null,seq__27934__$1);
var G__27984 = c__5568__auto__;
var G__27985 = cljs.core.count.call(null,c__5568__auto__);
var G__27986 = (0);
seq__27934 = G__27983;
chunk__27935 = G__27984;
count__27936 = G__27985;
i__27937 = G__27986;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27934__$1);
var seq__27950_27987 = cljs.core.seq.call(null,requires);
var chunk__27951_27988 = null;
var count__27952_27989 = (0);
var i__27953_27990 = (0);
while(true){
if((i__27953_27990 < count__27952_27989)){
var req_27991 = cljs.core._nth.call(null,chunk__27951_27988,i__27953_27990);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27991,prov);


var G__27992 = seq__27950_27987;
var G__27993 = chunk__27951_27988;
var G__27994 = count__27952_27989;
var G__27995 = (i__27953_27990 + (1));
seq__27950_27987 = G__27992;
chunk__27951_27988 = G__27993;
count__27952_27989 = G__27994;
i__27953_27990 = G__27995;
continue;
} else {
var temp__5804__auto___27996__$1 = cljs.core.seq.call(null,seq__27950_27987);
if(temp__5804__auto___27996__$1){
var seq__27950_27997__$1 = temp__5804__auto___27996__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27950_27997__$1)){
var c__5568__auto___27998 = cljs.core.chunk_first.call(null,seq__27950_27997__$1);
var G__27999 = cljs.core.chunk_rest.call(null,seq__27950_27997__$1);
var G__28000 = c__5568__auto___27998;
var G__28001 = cljs.core.count.call(null,c__5568__auto___27998);
var G__28002 = (0);
seq__27950_27987 = G__27999;
chunk__27951_27988 = G__28000;
count__27952_27989 = G__28001;
i__27953_27990 = G__28002;
continue;
} else {
var req_28003 = cljs.core.first.call(null,seq__27950_27997__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28003,prov);


var G__28004 = cljs.core.next.call(null,seq__27950_27997__$1);
var G__28005 = null;
var G__28006 = (0);
var G__28007 = (0);
seq__27950_27987 = G__28004;
chunk__27951_27988 = G__28005;
count__27952_27989 = G__28006;
i__27953_27990 = G__28007;
continue;
}
} else {
}
}
break;
}


var G__28008 = cljs.core.next.call(null,seq__27934__$1);
var G__28009 = null;
var G__28010 = (0);
var G__28011 = (0);
seq__27934 = G__28008;
chunk__27935 = G__28009;
count__27936 = G__28010;
i__27937 = G__28011;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,requires,(function (deps,path,_){
var seq__27954 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__27955 = null;
var count__27956 = (0);
var i__27957 = (0);
while(true){
if((i__27957 < count__27956)){
var prov = cljs.core._nth.call(null,chunk__27955,i__27957);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__27954,chunk__27955,count__27956,i__27957,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27954,chunk__27955,count__27956,i__27957,prov,requires))
);


var G__28012 = seq__27954;
var G__28013 = chunk__27955;
var G__28014 = count__27956;
var G__28015 = (i__27957 + (1));
seq__27954 = G__28012;
chunk__27955 = G__28013;
count__27956 = G__28014;
i__27957 = G__28015;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27954);
if(temp__5804__auto__){
var seq__27954__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27954__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27954__$1);
var G__28016 = cljs.core.chunk_rest.call(null,seq__27954__$1);
var G__28017 = c__5568__auto__;
var G__28018 = cljs.core.count.call(null,c__5568__auto__);
var G__28019 = (0);
seq__27954 = G__28016;
chunk__27955 = G__28017;
count__27956 = G__28018;
i__27957 = G__28019;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27954__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__27954,chunk__27955,count__27956,i__27957,prov,seq__27954__$1,temp__5804__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27954,chunk__27955,count__27956,i__27957,prov,seq__27954__$1,temp__5804__auto__,requires))
);


var G__28020 = cljs.core.next.call(null,seq__27954__$1);
var G__28021 = null;
var G__28022 = (0);
var G__28023 = (0);
seq__27954 = G__28020;
chunk__27955 = G__28021;
count__27956 = G__28022;
i__27957 = G__28023;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28024){
var vec__28025 = p__28024;
var _ = cljs.core.nth.call(null,vec__28025,(0),null);
var v = cljs.core.nth.call(null,vec__28025,(1),null);
var and__5043__auto__ = v;
if(cljs.core.truth_(and__5043__auto__)){
return v.call(null,dep);
} else {
return and__5043__auto__;
}
}),cljs.core.filter.call(null,(function (p__28028){
var vec__28029 = p__28028;
var k = cljs.core.nth.call(null,vec__28029,(0),null);
var v = cljs.core.nth.call(null,vec__28029,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28041_28049 = cljs.core.seq.call(null,deps);
var chunk__28042_28050 = null;
var count__28043_28051 = (0);
var i__28044_28052 = (0);
while(true){
if((i__28044_28052 < count__28043_28051)){
var dep_28053 = cljs.core._nth.call(null,chunk__28042_28050,i__28044_28052);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_28053;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28053));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28053,(depth + (1)),state);
} else {
}


var G__28054 = seq__28041_28049;
var G__28055 = chunk__28042_28050;
var G__28056 = count__28043_28051;
var G__28057 = (i__28044_28052 + (1));
seq__28041_28049 = G__28054;
chunk__28042_28050 = G__28055;
count__28043_28051 = G__28056;
i__28044_28052 = G__28057;
continue;
} else {
var temp__5804__auto___28058 = cljs.core.seq.call(null,seq__28041_28049);
if(temp__5804__auto___28058){
var seq__28041_28059__$1 = temp__5804__auto___28058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28041_28059__$1)){
var c__5568__auto___28060 = cljs.core.chunk_first.call(null,seq__28041_28059__$1);
var G__28061 = cljs.core.chunk_rest.call(null,seq__28041_28059__$1);
var G__28062 = c__5568__auto___28060;
var G__28063 = cljs.core.count.call(null,c__5568__auto___28060);
var G__28064 = (0);
seq__28041_28049 = G__28061;
chunk__28042_28050 = G__28062;
count__28043_28051 = G__28063;
i__28044_28052 = G__28064;
continue;
} else {
var dep_28065 = cljs.core.first.call(null,seq__28041_28059__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_28065;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28065));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28065,(depth + (1)),state);
} else {
}


var G__28066 = cljs.core.next.call(null,seq__28041_28059__$1);
var G__28067 = null;
var G__28068 = (0);
var G__28069 = (0);
seq__28041_28049 = G__28066;
chunk__28042_28050 = G__28067;
count__28043_28051 = G__28068;
i__28044_28052 = G__28069;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28045){
var vec__28046 = p__28045;
var seq__28047 = cljs.core.seq.call(null,vec__28046);
var first__28048 = cljs.core.first.call(null,seq__28047);
var seq__28047__$1 = cljs.core.next.call(null,seq__28047);
var x = first__28048;
var xs = seq__28047__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28032_SHARP_){
return clojure.set.difference.call(null,p1__28032_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28070_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28070_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28071 = cljs.core.seq.call(null,provides);
var chunk__28072 = null;
var count__28073 = (0);
var i__28074 = (0);
while(true){
if((i__28074 < count__28073)){
var prov = cljs.core._nth.call(null,chunk__28072,i__28074);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28083_28091 = cljs.core.seq.call(null,requires);
var chunk__28084_28092 = null;
var count__28085_28093 = (0);
var i__28086_28094 = (0);
while(true){
if((i__28086_28094 < count__28085_28093)){
var req_28095 = cljs.core._nth.call(null,chunk__28084_28092,i__28086_28094);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28095,prov);


var G__28096 = seq__28083_28091;
var G__28097 = chunk__28084_28092;
var G__28098 = count__28085_28093;
var G__28099 = (i__28086_28094 + (1));
seq__28083_28091 = G__28096;
chunk__28084_28092 = G__28097;
count__28085_28093 = G__28098;
i__28086_28094 = G__28099;
continue;
} else {
var temp__5804__auto___28100 = cljs.core.seq.call(null,seq__28083_28091);
if(temp__5804__auto___28100){
var seq__28083_28101__$1 = temp__5804__auto___28100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28083_28101__$1)){
var c__5568__auto___28102 = cljs.core.chunk_first.call(null,seq__28083_28101__$1);
var G__28103 = cljs.core.chunk_rest.call(null,seq__28083_28101__$1);
var G__28104 = c__5568__auto___28102;
var G__28105 = cljs.core.count.call(null,c__5568__auto___28102);
var G__28106 = (0);
seq__28083_28091 = G__28103;
chunk__28084_28092 = G__28104;
count__28085_28093 = G__28105;
i__28086_28094 = G__28106;
continue;
} else {
var req_28107 = cljs.core.first.call(null,seq__28083_28101__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28107,prov);


var G__28108 = cljs.core.next.call(null,seq__28083_28101__$1);
var G__28109 = null;
var G__28110 = (0);
var G__28111 = (0);
seq__28083_28091 = G__28108;
chunk__28084_28092 = G__28109;
count__28085_28093 = G__28110;
i__28086_28094 = G__28111;
continue;
}
} else {
}
}
break;
}


var G__28112 = seq__28071;
var G__28113 = chunk__28072;
var G__28114 = count__28073;
var G__28115 = (i__28074 + (1));
seq__28071 = G__28112;
chunk__28072 = G__28113;
count__28073 = G__28114;
i__28074 = G__28115;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__28071);
if(temp__5804__auto__){
var seq__28071__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28071__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__28071__$1);
var G__28116 = cljs.core.chunk_rest.call(null,seq__28071__$1);
var G__28117 = c__5568__auto__;
var G__28118 = cljs.core.count.call(null,c__5568__auto__);
var G__28119 = (0);
seq__28071 = G__28116;
chunk__28072 = G__28117;
count__28073 = G__28118;
i__28074 = G__28119;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28071__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28087_28120 = cljs.core.seq.call(null,requires);
var chunk__28088_28121 = null;
var count__28089_28122 = (0);
var i__28090_28123 = (0);
while(true){
if((i__28090_28123 < count__28089_28122)){
var req_28124 = cljs.core._nth.call(null,chunk__28088_28121,i__28090_28123);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28124,prov);


var G__28125 = seq__28087_28120;
var G__28126 = chunk__28088_28121;
var G__28127 = count__28089_28122;
var G__28128 = (i__28090_28123 + (1));
seq__28087_28120 = G__28125;
chunk__28088_28121 = G__28126;
count__28089_28122 = G__28127;
i__28090_28123 = G__28128;
continue;
} else {
var temp__5804__auto___28129__$1 = cljs.core.seq.call(null,seq__28087_28120);
if(temp__5804__auto___28129__$1){
var seq__28087_28130__$1 = temp__5804__auto___28129__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28087_28130__$1)){
var c__5568__auto___28131 = cljs.core.chunk_first.call(null,seq__28087_28130__$1);
var G__28132 = cljs.core.chunk_rest.call(null,seq__28087_28130__$1);
var G__28133 = c__5568__auto___28131;
var G__28134 = cljs.core.count.call(null,c__5568__auto___28131);
var G__28135 = (0);
seq__28087_28120 = G__28132;
chunk__28088_28121 = G__28133;
count__28089_28122 = G__28134;
i__28090_28123 = G__28135;
continue;
} else {
var req_28136 = cljs.core.first.call(null,seq__28087_28130__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28136,prov);


var G__28137 = cljs.core.next.call(null,seq__28087_28130__$1);
var G__28138 = null;
var G__28139 = (0);
var G__28140 = (0);
seq__28087_28120 = G__28137;
chunk__28088_28121 = G__28138;
count__28089_28122 = G__28139;
i__28090_28123 = G__28140;
continue;
}
} else {
}
}
break;
}


var G__28141 = cljs.core.next.call(null,seq__28071__$1);
var G__28142 = null;
var G__28143 = (0);
var G__28144 = (0);
seq__28071 = G__28141;
chunk__28072 = G__28142;
count__28073 = G__28143;
i__28074 = G__28144;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28145_28149 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28146_28150 = null;
var count__28147_28151 = (0);
var i__28148_28152 = (0);
while(true){
if((i__28148_28152 < count__28147_28151)){
var ns_28153 = cljs.core._nth.call(null,chunk__28146_28150,i__28148_28152);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28153);


var G__28154 = seq__28145_28149;
var G__28155 = chunk__28146_28150;
var G__28156 = count__28147_28151;
var G__28157 = (i__28148_28152 + (1));
seq__28145_28149 = G__28154;
chunk__28146_28150 = G__28155;
count__28147_28151 = G__28156;
i__28148_28152 = G__28157;
continue;
} else {
var temp__5804__auto___28158 = cljs.core.seq.call(null,seq__28145_28149);
if(temp__5804__auto___28158){
var seq__28145_28159__$1 = temp__5804__auto___28158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28145_28159__$1)){
var c__5568__auto___28160 = cljs.core.chunk_first.call(null,seq__28145_28159__$1);
var G__28161 = cljs.core.chunk_rest.call(null,seq__28145_28159__$1);
var G__28162 = c__5568__auto___28160;
var G__28163 = cljs.core.count.call(null,c__5568__auto___28160);
var G__28164 = (0);
seq__28145_28149 = G__28161;
chunk__28146_28150 = G__28162;
count__28147_28151 = G__28163;
i__28148_28152 = G__28164;
continue;
} else {
var ns_28165 = cljs.core.first.call(null,seq__28145_28159__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28165);


var G__28166 = cljs.core.next.call(null,seq__28145_28159__$1);
var G__28167 = null;
var G__28168 = (0);
var G__28169 = (0);
seq__28145_28149 = G__28166;
chunk__28146_28150 = G__28167;
count__28147_28151 = G__28168;
i__28148_28152 = G__28169;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__5045__auto__ = goog.require__;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28170__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28171__i = 0, G__28171__a = new Array(arguments.length -  0);
while (G__28171__i < G__28171__a.length) {G__28171__a[G__28171__i] = arguments[G__28171__i + 0]; ++G__28171__i;}
  args = new cljs.core.IndexedSeq(G__28171__a,0,null);
} 
return G__28170__delegate.call(this,args);};
G__28170.cljs$lang$maxFixedArity = 0;
G__28170.cljs$lang$applyTo = (function (arglist__28172){
var args = cljs.core.seq(arglist__28172);
return G__28170__delegate(args);
});
G__28170.cljs$core$IFn$_invoke$arity$variadic = G__28170__delegate;
return G__28170;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28173_SHARP_,p2__28174_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28173_SHARP_)),p2__28174_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28175_SHARP_,p2__28176_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28175_SHARP_),p2__28176_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28177 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28177.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28177.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28177;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28178){if((e28178 instanceof Error)){
var e = e28178;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28178;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.client.file_reloading.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28179){if((e28179 instanceof Error)){
var e = e28179;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28179;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28180 = cljs.core._EQ_;
var expr__28181 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28180.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28181))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28180.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28181))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28180.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28181))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28183,callback){
var map__28184 = p__28183;
var map__28184__$1 = cljs.core.__destructure_map.call(null,map__28184);
var file_msg = map__28184__$1;
var request_url = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__5045__auto__ = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_28221){
var state_val_28222 = (state_28221[(1)]);
if((state_val_28222 === (7))){
var inst_28217 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28223_28249 = state_28221__$1;
(statearr_28223_28249[(2)] = inst_28217);

(statearr_28223_28249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (1))){
var state_28221__$1 = state_28221;
var statearr_28224_28250 = state_28221__$1;
(statearr_28224_28250[(2)] = null);

(statearr_28224_28250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (4))){
var inst_28187 = (state_28221[(7)]);
var inst_28187__$1 = (state_28221[(2)]);
var state_28221__$1 = (function (){var statearr_28225 = state_28221;
(statearr_28225[(7)] = inst_28187__$1);

return statearr_28225;
})();
if(cljs.core.truth_(inst_28187__$1)){
var statearr_28226_28251 = state_28221__$1;
(statearr_28226_28251[(1)] = (5));

} else {
var statearr_28227_28252 = state_28221__$1;
(statearr_28227_28252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (15))){
var inst_28202 = (state_28221[(8)]);
var inst_28200 = (state_28221[(9)]);
var inst_28204 = inst_28202.call(null,inst_28200);
var state_28221__$1 = state_28221;
var statearr_28228_28253 = state_28221__$1;
(statearr_28228_28253[(2)] = inst_28204);

(statearr_28228_28253[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (13))){
var inst_28211 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28229_28254 = state_28221__$1;
(statearr_28229_28254[(2)] = inst_28211);

(statearr_28229_28254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (6))){
var state_28221__$1 = state_28221;
var statearr_28230_28255 = state_28221__$1;
(statearr_28230_28255[(2)] = null);

(statearr_28230_28255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (17))){
var inst_28208 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28231_28256 = state_28221__$1;
(statearr_28231_28256[(2)] = inst_28208);

(statearr_28231_28256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (3))){
var inst_28219 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28221__$1,inst_28219);
} else {
if((state_val_28222 === (12))){
var state_28221__$1 = state_28221;
var statearr_28232_28257 = state_28221__$1;
(statearr_28232_28257[(2)] = null);

(statearr_28232_28257[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (2))){
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28221__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28222 === (11))){
var inst_28192 = (state_28221[(10)]);
var inst_28198 = figwheel.client.file_reloading.blocking_load.call(null,inst_28192);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28221__$1,(14),inst_28198);
} else {
if((state_val_28222 === (9))){
var inst_28192 = (state_28221[(10)]);
var state_28221__$1 = state_28221;
if(cljs.core.truth_(inst_28192)){
var statearr_28233_28258 = state_28221__$1;
(statearr_28233_28258[(1)] = (11));

} else {
var statearr_28234_28259 = state_28221__$1;
(statearr_28234_28259[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (5))){
var inst_28193 = (state_28221[(11)]);
var inst_28187 = (state_28221[(7)]);
var inst_28192 = cljs.core.nth.call(null,inst_28187,(0),null);
var inst_28193__$1 = cljs.core.nth.call(null,inst_28187,(1),null);
var state_28221__$1 = (function (){var statearr_28235 = state_28221;
(statearr_28235[(11)] = inst_28193__$1);

(statearr_28235[(10)] = inst_28192);

return statearr_28235;
})();
if(cljs.core.truth_(inst_28193__$1)){
var statearr_28236_28260 = state_28221__$1;
(statearr_28236_28260[(1)] = (8));

} else {
var statearr_28237_28261 = state_28221__$1;
(statearr_28237_28261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (14))){
var inst_28202 = (state_28221[(8)]);
var inst_28192 = (state_28221[(10)]);
var inst_28200 = (state_28221[(2)]);
var inst_28201 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28202__$1 = cljs.core.get.call(null,inst_28201,inst_28192);
var state_28221__$1 = (function (){var statearr_28238 = state_28221;
(statearr_28238[(8)] = inst_28202__$1);

(statearr_28238[(9)] = inst_28200);

return statearr_28238;
})();
if(cljs.core.truth_(inst_28202__$1)){
var statearr_28239_28262 = state_28221__$1;
(statearr_28239_28262[(1)] = (15));

} else {
var statearr_28240_28263 = state_28221__$1;
(statearr_28240_28263[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (16))){
var inst_28200 = (state_28221[(9)]);
var inst_28206 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28200);
var state_28221__$1 = state_28221;
var statearr_28241_28264 = state_28221__$1;
(statearr_28241_28264[(2)] = inst_28206);

(statearr_28241_28264[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (10))){
var inst_28213 = (state_28221[(2)]);
var state_28221__$1 = (function (){var statearr_28242 = state_28221;
(statearr_28242[(12)] = inst_28213);

return statearr_28242;
})();
var statearr_28243_28265 = state_28221__$1;
(statearr_28243_28265[(2)] = null);

(statearr_28243_28265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (8))){
var inst_28193 = (state_28221[(11)]);
var inst_28195 = eval(inst_28193);
var state_28221__$1 = state_28221;
var statearr_28244_28266 = state_28221__$1;
(statearr_28244_28266[(2)] = inst_28195);

(statearr_28244_28266[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__24484__auto__ = null;
var figwheel$client$file_reloading$state_machine__24484__auto____0 = (function (){
var statearr_28245 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28245[(0)] = figwheel$client$file_reloading$state_machine__24484__auto__);

(statearr_28245[(1)] = (1));

return statearr_28245;
});
var figwheel$client$file_reloading$state_machine__24484__auto____1 = (function (state_28221){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_28221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e28246){if((e28246 instanceof Object)){
var ex__24487__auto__ = e28246;
var statearr_28247_28267 = state_28221;
(statearr_28247_28267[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28268 = state_28221;
state_28221 = G__28268;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24484__auto__ = function(state_28221){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24484__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24484__auto____1.call(this,state_28221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24484__auto____0;
figwheel$client$file_reloading$state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24484__auto____1;
return figwheel$client$file_reloading$state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_28248 = f__24581__auto__.call(null);
(statearr_28248[(6)] = c__24580__auto__);

return statearr_28248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28270 = arguments.length;
switch (G__28270) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28272,callback){
var map__28273 = p__28272;
var map__28273__$1 = cljs.core.__destructure_map.call(null,map__28273);
var file_msg = map__28273__$1;
var namespace = cljs.core.get.call(null,map__28273__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28274){
var map__28275 = p__28274;
var map__28275__$1 = cljs.core.__destructure_map.call(null,map__28275);
var file_msg = map__28275__$1;
var namespace = cljs.core.get.call(null,map__28275__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28276){
var map__28277 = p__28276;
var map__28277__$1 = cljs.core.__destructure_map.call(null,map__28277);
var file_msg = map__28277__$1;
var namespace = cljs.core.get.call(null,map__28277__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__5043__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__5043__auto__){
var or__5045__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__5043__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28278,callback){
var map__28279 = p__28278;
var map__28279__$1 = cljs.core.__destructure_map.call(null,map__28279);
var file_msg = map__28279__$1;
var request_url = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24580__auto___28328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_28313){
var state_val_28314 = (state_28313[(1)]);
if((state_val_28314 === (1))){
var inst_28287 = cljs.core.seq.call(null,files);
var inst_28288 = cljs.core.first.call(null,inst_28287);
var inst_28289 = cljs.core.next.call(null,inst_28287);
var inst_28290 = files;
var state_28313__$1 = (function (){var statearr_28315 = state_28313;
(statearr_28315[(7)] = inst_28289);

(statearr_28315[(8)] = inst_28288);

(statearr_28315[(9)] = inst_28290);

return statearr_28315;
})();
var statearr_28316_28329 = state_28313__$1;
(statearr_28316_28329[(2)] = null);

(statearr_28316_28329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (2))){
var inst_28296 = (state_28313[(10)]);
var inst_28290 = (state_28313[(9)]);
var inst_28295 = cljs.core.seq.call(null,inst_28290);
var inst_28296__$1 = cljs.core.first.call(null,inst_28295);
var inst_28297 = cljs.core.next.call(null,inst_28295);
var inst_28298 = (inst_28296__$1 == null);
var inst_28299 = cljs.core.not.call(null,inst_28298);
var state_28313__$1 = (function (){var statearr_28317 = state_28313;
(statearr_28317[(10)] = inst_28296__$1);

(statearr_28317[(11)] = inst_28297);

return statearr_28317;
})();
if(inst_28299){
var statearr_28318_28330 = state_28313__$1;
(statearr_28318_28330[(1)] = (4));

} else {
var statearr_28319_28331 = state_28313__$1;
(statearr_28319_28331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (3))){
var inst_28311 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28313__$1,inst_28311);
} else {
if((state_val_28314 === (4))){
var inst_28296 = (state_28313[(10)]);
var inst_28301 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28296);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28313__$1,(7),inst_28301);
} else {
if((state_val_28314 === (5))){
var inst_28307 = cljs.core.async.close_BANG_.call(null,out);
var state_28313__$1 = state_28313;
var statearr_28320_28332 = state_28313__$1;
(statearr_28320_28332[(2)] = inst_28307);

(statearr_28320_28332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (6))){
var inst_28309 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
var statearr_28321_28333 = state_28313__$1;
(statearr_28321_28333[(2)] = inst_28309);

(statearr_28321_28333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (7))){
var inst_28297 = (state_28313[(11)]);
var inst_28303 = (state_28313[(2)]);
var inst_28304 = cljs.core.async.put_BANG_.call(null,out,inst_28303);
var inst_28290 = inst_28297;
var state_28313__$1 = (function (){var statearr_28322 = state_28313;
(statearr_28322[(12)] = inst_28304);

(statearr_28322[(9)] = inst_28290);

return statearr_28322;
})();
var statearr_28323_28334 = state_28313__$1;
(statearr_28323_28334[(2)] = null);

(statearr_28323_28334[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto____0 = (function (){
var statearr_28324 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28324[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto__);

(statearr_28324[(1)] = (1));

return statearr_28324;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto____1 = (function (state_28313){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_28313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e28325){if((e28325 instanceof Object)){
var ex__24487__auto__ = e28325;
var statearr_28326_28335 = state_28313;
(statearr_28326_28335[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28336 = state_28313;
state_28313 = G__28336;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto__ = function(state_28313){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto____1.call(this,state_28313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_28327 = f__24581__auto__.call(null);
(statearr_28327[(6)] = c__24580__auto___28328);

return statearr_28327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28337,opts){
var map__28338 = p__28337;
var map__28338__$1 = cljs.core.__destructure_map.call(null,map__28338);
var eval_body = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__5043__auto__ = eval_body;
if(cljs.core.truth_(and__5043__auto__)){
return typeof eval_body === 'string';
} else {
return and__5043__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28339){var e = e28339;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5802__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28340_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28340_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5802__auto__)){
var file_msg = temp__5802__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28341){
var vec__28342 = p__28341;
var k = cljs.core.nth.call(null,vec__28342,(0),null);
var v = cljs.core.nth.call(null,vec__28342,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28345){
var vec__28346 = p__28345;
var k = cljs.core.nth.call(null,vec__28346,(0),null);
var v = cljs.core.nth.call(null,vec__28346,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28352,p__28353){
var map__28354 = p__28352;
var map__28354__$1 = cljs.core.__destructure_map.call(null,map__28354);
var opts = map__28354__$1;
var before_jsload = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28355 = p__28353;
var map__28355__$1 = cljs.core.__destructure_map.call(null,map__28355);
var msg = map__28355__$1;
var files = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24581__auto__ = (function (){var switch__24483__auto__ = (function (state_28487){
var state_val_28488 = (state_28487[(1)]);
if((state_val_28488 === (7))){
var inst_28367 = (state_28487[(7)]);
var inst_28370 = (state_28487[(8)]);
var inst_28368 = (state_28487[(9)]);
var inst_28369 = (state_28487[(10)]);
var inst_28375 = cljs.core._nth.call(null,inst_28368,inst_28370);
var inst_28376 = figwheel.client.file_reloading.eval_body.call(null,inst_28375,opts);
var inst_28377 = (inst_28370 + (1));
var tmp28489 = inst_28367;
var tmp28490 = inst_28368;
var tmp28491 = inst_28369;
var inst_28367__$1 = tmp28489;
var inst_28368__$1 = tmp28490;
var inst_28369__$1 = tmp28491;
var inst_28370__$1 = inst_28377;
var state_28487__$1 = (function (){var statearr_28492 = state_28487;
(statearr_28492[(7)] = inst_28367__$1);

(statearr_28492[(8)] = inst_28370__$1);

(statearr_28492[(11)] = inst_28376);

(statearr_28492[(9)] = inst_28368__$1);

(statearr_28492[(10)] = inst_28369__$1);

return statearr_28492;
})();
var statearr_28493_28560 = state_28487__$1;
(statearr_28493_28560[(2)] = null);

(statearr_28493_28560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (20))){
var inst_28410 = (state_28487[(12)]);
var inst_28418 = figwheel.client.file_reloading.sort_files.call(null,inst_28410);
var state_28487__$1 = state_28487;
var statearr_28494_28561 = state_28487__$1;
(statearr_28494_28561[(2)] = inst_28418);

(statearr_28494_28561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (27))){
var state_28487__$1 = state_28487;
var statearr_28495_28562 = state_28487__$1;
(statearr_28495_28562[(2)] = null);

(statearr_28495_28562[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (1))){
var inst_28359 = (state_28487[(13)]);
var inst_28356 = before_jsload.call(null,files);
var inst_28357 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28358 = (function (){return (function (p1__28349_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28349_SHARP_);
});
})();
var inst_28359__$1 = cljs.core.filter.call(null,inst_28358,files);
var inst_28360 = cljs.core.not_empty.call(null,inst_28359__$1);
var state_28487__$1 = (function (){var statearr_28496 = state_28487;
(statearr_28496[(14)] = inst_28356);

(statearr_28496[(15)] = inst_28357);

(statearr_28496[(13)] = inst_28359__$1);

return statearr_28496;
})();
if(cljs.core.truth_(inst_28360)){
var statearr_28497_28563 = state_28487__$1;
(statearr_28497_28563[(1)] = (2));

} else {
var statearr_28498_28564 = state_28487__$1;
(statearr_28498_28564[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (24))){
var state_28487__$1 = state_28487;
var statearr_28499_28565 = state_28487__$1;
(statearr_28499_28565[(2)] = null);

(statearr_28499_28565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (4))){
var inst_28404 = (state_28487[(2)]);
var inst_28405 = cljs.core.List.EMPTY;
var inst_28406 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28405);
var inst_28407 = (function (){return (function (p1__28350_SHARP_){
var and__5043__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28350_SHARP_);
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28350_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28350_SHARP_))));
} else {
return and__5043__auto__;
}
});
})();
var inst_28408 = cljs.core.filter.call(null,inst_28407,files);
var inst_28409 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28410 = cljs.core.concat.call(null,inst_28408,inst_28409);
var state_28487__$1 = (function (){var statearr_28500 = state_28487;
(statearr_28500[(16)] = inst_28404);

(statearr_28500[(17)] = inst_28406);

(statearr_28500[(12)] = inst_28410);

return statearr_28500;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28501_28566 = state_28487__$1;
(statearr_28501_28566[(1)] = (16));

} else {
var statearr_28502_28567 = state_28487__$1;
(statearr_28502_28567[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (15))){
var inst_28394 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28503_28568 = state_28487__$1;
(statearr_28503_28568[(2)] = inst_28394);

(statearr_28503_28568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (21))){
var inst_28420 = (state_28487[(18)]);
var inst_28420__$1 = (state_28487[(2)]);
var inst_28421 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28420__$1);
var state_28487__$1 = (function (){var statearr_28504 = state_28487;
(statearr_28504[(18)] = inst_28420__$1);

return statearr_28504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28487__$1,(22),inst_28421);
} else {
if((state_val_28488 === (31))){
var inst_28485 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28487__$1,inst_28485);
} else {
if((state_val_28488 === (32))){
var inst_28462 = (state_28487[(19)]);
var inst_28466 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28467 = cljs.core.map.call(null,inst_28466,inst_28462);
var inst_28468 = cljs.core.pr_str.call(null,inst_28467);
var inst_28469 = ["figwheel-no-load meta-data: ",inst_28468].join('');
var inst_28470 = figwheel.client.utils.log.call(null,inst_28469);
var state_28487__$1 = state_28487;
var statearr_28505_28569 = state_28487__$1;
(statearr_28505_28569[(2)] = inst_28470);

(statearr_28505_28569[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (33))){
var state_28487__$1 = state_28487;
var statearr_28506_28570 = state_28487__$1;
(statearr_28506_28570[(2)] = null);

(statearr_28506_28570[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (13))){
var inst_28380 = (state_28487[(20)]);
var inst_28384 = cljs.core.chunk_first.call(null,inst_28380);
var inst_28385 = cljs.core.chunk_rest.call(null,inst_28380);
var inst_28386 = cljs.core.count.call(null,inst_28384);
var inst_28367 = inst_28385;
var inst_28368 = inst_28384;
var inst_28369 = inst_28386;
var inst_28370 = (0);
var state_28487__$1 = (function (){var statearr_28507 = state_28487;
(statearr_28507[(7)] = inst_28367);

(statearr_28507[(8)] = inst_28370);

(statearr_28507[(9)] = inst_28368);

(statearr_28507[(10)] = inst_28369);

return statearr_28507;
})();
var statearr_28508_28571 = state_28487__$1;
(statearr_28508_28571[(2)] = null);

(statearr_28508_28571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (22))){
var inst_28424 = (state_28487[(21)]);
var inst_28428 = (state_28487[(22)]);
var inst_28420 = (state_28487[(18)]);
var inst_28423 = (state_28487[(23)]);
var inst_28423__$1 = (state_28487[(2)]);
var inst_28424__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28423__$1);
var inst_28425 = (function (){var all_files = inst_28420;
var res_SINGLEQUOTE_ = inst_28423__$1;
var res = inst_28424__$1;
return (function (p1__28351_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28351_SHARP_));
});
})();
var inst_28426 = cljs.core.filter.call(null,inst_28425,inst_28423__$1);
var inst_28427 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28428__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28427);
var inst_28429 = cljs.core.not_empty.call(null,inst_28428__$1);
var state_28487__$1 = (function (){var statearr_28509 = state_28487;
(statearr_28509[(21)] = inst_28424__$1);

(statearr_28509[(22)] = inst_28428__$1);

(statearr_28509[(24)] = inst_28426);

(statearr_28509[(23)] = inst_28423__$1);

return statearr_28509;
})();
if(cljs.core.truth_(inst_28429)){
var statearr_28510_28572 = state_28487__$1;
(statearr_28510_28572[(1)] = (23));

} else {
var statearr_28511_28573 = state_28487__$1;
(statearr_28511_28573[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (36))){
var state_28487__$1 = state_28487;
var statearr_28512_28574 = state_28487__$1;
(statearr_28512_28574[(2)] = null);

(statearr_28512_28574[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (29))){
var inst_28424 = (state_28487[(21)]);
var inst_28428 = (state_28487[(22)]);
var inst_28420 = (state_28487[(18)]);
var inst_28426 = (state_28487[(24)]);
var inst_28462 = (state_28487[(19)]);
var inst_28423 = (state_28487[(23)]);
var inst_28456 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28459 = (function (){var all_files = inst_28420;
var res_SINGLEQUOTE_ = inst_28423;
var res = inst_28424;
var files_not_loaded = inst_28426;
var dependencies_that_loaded = inst_28428;
return (function (p__28458){
var map__28513 = p__28458;
var map__28513__$1 = cljs.core.__destructure_map.call(null,map__28513);
var namespace = cljs.core.get.call(null,map__28513__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_28460 = cljs.core.group_by.call(null,inst_28459,inst_28426);
var inst_28461 = cljs.core.__destructure_map.call(null,inst_28460);
var inst_28462__$1 = cljs.core.get.call(null,inst_28461,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28463 = cljs.core.get.call(null,inst_28461,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28464 = cljs.core.not_empty.call(null,inst_28462__$1);
var state_28487__$1 = (function (){var statearr_28514 = state_28487;
(statearr_28514[(25)] = inst_28463);

(statearr_28514[(19)] = inst_28462__$1);

(statearr_28514[(26)] = inst_28456);

return statearr_28514;
})();
if(cljs.core.truth_(inst_28464)){
var statearr_28515_28575 = state_28487__$1;
(statearr_28515_28575[(1)] = (32));

} else {
var statearr_28516_28576 = state_28487__$1;
(statearr_28516_28576[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (6))){
var inst_28401 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28517_28577 = state_28487__$1;
(statearr_28517_28577[(2)] = inst_28401);

(statearr_28517_28577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (28))){
var inst_28426 = (state_28487[(24)]);
var inst_28453 = (state_28487[(2)]);
var inst_28454 = cljs.core.not_empty.call(null,inst_28426);
var state_28487__$1 = (function (){var statearr_28518 = state_28487;
(statearr_28518[(27)] = inst_28453);

return statearr_28518;
})();
if(cljs.core.truth_(inst_28454)){
var statearr_28519_28578 = state_28487__$1;
(statearr_28519_28578[(1)] = (29));

} else {
var statearr_28520_28579 = state_28487__$1;
(statearr_28520_28579[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (25))){
var inst_28424 = (state_28487[(21)]);
var inst_28440 = (state_28487[(2)]);
var inst_28441 = cljs.core.not_empty.call(null,inst_28424);
var state_28487__$1 = (function (){var statearr_28521 = state_28487;
(statearr_28521[(28)] = inst_28440);

return statearr_28521;
})();
if(cljs.core.truth_(inst_28441)){
var statearr_28522_28580 = state_28487__$1;
(statearr_28522_28580[(1)] = (26));

} else {
var statearr_28523_28581 = state_28487__$1;
(statearr_28523_28581[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (34))){
var inst_28463 = (state_28487[(25)]);
var inst_28473 = (state_28487[(2)]);
var inst_28474 = cljs.core.not_empty.call(null,inst_28463);
var state_28487__$1 = (function (){var statearr_28524 = state_28487;
(statearr_28524[(29)] = inst_28473);

return statearr_28524;
})();
if(cljs.core.truth_(inst_28474)){
var statearr_28525_28582 = state_28487__$1;
(statearr_28525_28582[(1)] = (35));

} else {
var statearr_28526_28583 = state_28487__$1;
(statearr_28526_28583[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (17))){
var state_28487__$1 = state_28487;
var statearr_28527_28584 = state_28487__$1;
(statearr_28527_28584[(2)] = recompile_dependents);

(statearr_28527_28584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (3))){
var state_28487__$1 = state_28487;
var statearr_28528_28585 = state_28487__$1;
(statearr_28528_28585[(2)] = null);

(statearr_28528_28585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (12))){
var inst_28397 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28529_28586 = state_28487__$1;
(statearr_28529_28586[(2)] = inst_28397);

(statearr_28529_28586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (2))){
var inst_28359 = (state_28487[(13)]);
var inst_28366 = cljs.core.seq.call(null,inst_28359);
var inst_28367 = inst_28366;
var inst_28368 = null;
var inst_28369 = (0);
var inst_28370 = (0);
var state_28487__$1 = (function (){var statearr_28530 = state_28487;
(statearr_28530[(7)] = inst_28367);

(statearr_28530[(8)] = inst_28370);

(statearr_28530[(9)] = inst_28368);

(statearr_28530[(10)] = inst_28369);

return statearr_28530;
})();
var statearr_28531_28587 = state_28487__$1;
(statearr_28531_28587[(2)] = null);

(statearr_28531_28587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (23))){
var inst_28424 = (state_28487[(21)]);
var inst_28428 = (state_28487[(22)]);
var inst_28420 = (state_28487[(18)]);
var inst_28426 = (state_28487[(24)]);
var inst_28423 = (state_28487[(23)]);
var inst_28431 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28433 = (function (){var all_files = inst_28420;
var res_SINGLEQUOTE_ = inst_28423;
var res = inst_28424;
var files_not_loaded = inst_28426;
var dependencies_that_loaded = inst_28428;
return (function (p__28432){
var map__28532 = p__28432;
var map__28532__$1 = cljs.core.__destructure_map.call(null,map__28532);
var request_url = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_28434 = cljs.core.reverse.call(null,inst_28428);
var inst_28435 = cljs.core.map.call(null,inst_28433,inst_28434);
var inst_28436 = cljs.core.pr_str.call(null,inst_28435);
var inst_28437 = figwheel.client.utils.log.call(null,inst_28436);
var state_28487__$1 = (function (){var statearr_28533 = state_28487;
(statearr_28533[(30)] = inst_28431);

return statearr_28533;
})();
var statearr_28534_28588 = state_28487__$1;
(statearr_28534_28588[(2)] = inst_28437);

(statearr_28534_28588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (35))){
var inst_28463 = (state_28487[(25)]);
var inst_28476 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28463);
var inst_28477 = cljs.core.pr_str.call(null,inst_28476);
var inst_28478 = ["not required: ",inst_28477].join('');
var inst_28479 = figwheel.client.utils.log.call(null,inst_28478);
var state_28487__$1 = state_28487;
var statearr_28535_28589 = state_28487__$1;
(statearr_28535_28589[(2)] = inst_28479);

(statearr_28535_28589[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (19))){
var inst_28410 = (state_28487[(12)]);
var inst_28416 = figwheel.client.file_reloading.expand_files.call(null,inst_28410);
var state_28487__$1 = state_28487;
var statearr_28536_28590 = state_28487__$1;
(statearr_28536_28590[(2)] = inst_28416);

(statearr_28536_28590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (11))){
var state_28487__$1 = state_28487;
var statearr_28537_28591 = state_28487__$1;
(statearr_28537_28591[(2)] = null);

(statearr_28537_28591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (9))){
var inst_28399 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28538_28592 = state_28487__$1;
(statearr_28538_28592[(2)] = inst_28399);

(statearr_28538_28592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (5))){
var inst_28370 = (state_28487[(8)]);
var inst_28369 = (state_28487[(10)]);
var inst_28372 = (inst_28370 < inst_28369);
var inst_28373 = inst_28372;
var state_28487__$1 = state_28487;
if(cljs.core.truth_(inst_28373)){
var statearr_28539_28593 = state_28487__$1;
(statearr_28539_28593[(1)] = (7));

} else {
var statearr_28540_28594 = state_28487__$1;
(statearr_28540_28594[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (14))){
var inst_28380 = (state_28487[(20)]);
var inst_28389 = cljs.core.first.call(null,inst_28380);
var inst_28390 = figwheel.client.file_reloading.eval_body.call(null,inst_28389,opts);
var inst_28391 = cljs.core.next.call(null,inst_28380);
var inst_28367 = inst_28391;
var inst_28368 = null;
var inst_28369 = (0);
var inst_28370 = (0);
var state_28487__$1 = (function (){var statearr_28541 = state_28487;
(statearr_28541[(7)] = inst_28367);

(statearr_28541[(8)] = inst_28370);

(statearr_28541[(31)] = inst_28390);

(statearr_28541[(9)] = inst_28368);

(statearr_28541[(10)] = inst_28369);

return statearr_28541;
})();
var statearr_28542_28595 = state_28487__$1;
(statearr_28542_28595[(2)] = null);

(statearr_28542_28595[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (26))){
var inst_28424 = (state_28487[(21)]);
var inst_28428 = (state_28487[(22)]);
var inst_28420 = (state_28487[(18)]);
var inst_28426 = (state_28487[(24)]);
var inst_28423 = (state_28487[(23)]);
var inst_28443 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28445 = (function (){var all_files = inst_28420;
var res_SINGLEQUOTE_ = inst_28423;
var res = inst_28424;
var files_not_loaded = inst_28426;
var dependencies_that_loaded = inst_28428;
return (function (p__28444){
var map__28543 = p__28444;
var map__28543__$1 = cljs.core.__destructure_map.call(null,map__28543);
var namespace = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_28446 = cljs.core.map.call(null,inst_28445,inst_28424);
var inst_28447 = cljs.core.pr_str.call(null,inst_28446);
var inst_28448 = figwheel.client.utils.log.call(null,inst_28447);
var inst_28449 = (function (){var all_files = inst_28420;
var res_SINGLEQUOTE_ = inst_28423;
var res = inst_28424;
var files_not_loaded = inst_28426;
var dependencies_that_loaded = inst_28428;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_28450 = setTimeout(inst_28449,(10));
var state_28487__$1 = (function (){var statearr_28544 = state_28487;
(statearr_28544[(32)] = inst_28443);

(statearr_28544[(33)] = inst_28448);

return statearr_28544;
})();
var statearr_28545_28596 = state_28487__$1;
(statearr_28545_28596[(2)] = inst_28450);

(statearr_28545_28596[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (16))){
var state_28487__$1 = state_28487;
var statearr_28546_28597 = state_28487__$1;
(statearr_28546_28597[(2)] = reload_dependents);

(statearr_28546_28597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (30))){
var state_28487__$1 = state_28487;
var statearr_28547_28598 = state_28487__$1;
(statearr_28547_28598[(2)] = null);

(statearr_28547_28598[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (10))){
var inst_28380 = (state_28487[(20)]);
var inst_28382 = cljs.core.chunked_seq_QMARK_.call(null,inst_28380);
var state_28487__$1 = state_28487;
if(inst_28382){
var statearr_28548_28599 = state_28487__$1;
(statearr_28548_28599[(1)] = (13));

} else {
var statearr_28549_28600 = state_28487__$1;
(statearr_28549_28600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (18))){
var inst_28414 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
if(cljs.core.truth_(inst_28414)){
var statearr_28550_28601 = state_28487__$1;
(statearr_28550_28601[(1)] = (19));

} else {
var statearr_28551_28602 = state_28487__$1;
(statearr_28551_28602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (37))){
var inst_28482 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28552_28603 = state_28487__$1;
(statearr_28552_28603[(2)] = inst_28482);

(statearr_28552_28603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (8))){
var inst_28380 = (state_28487[(20)]);
var inst_28367 = (state_28487[(7)]);
var inst_28380__$1 = cljs.core.seq.call(null,inst_28367);
var state_28487__$1 = (function (){var statearr_28553 = state_28487;
(statearr_28553[(20)] = inst_28380__$1);

return statearr_28553;
})();
if(inst_28380__$1){
var statearr_28554_28604 = state_28487__$1;
(statearr_28554_28604[(1)] = (10));

} else {
var statearr_28555_28605 = state_28487__$1;
(statearr_28555_28605[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto____0 = (function (){
var statearr_28556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28556[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto__);

(statearr_28556[(1)] = (1));

return statearr_28556;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto____1 = (function (state_28487){
while(true){
var ret_value__24485__auto__ = (function (){try{while(true){
var result__24486__auto__ = switch__24483__auto__.call(null,state_28487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24486__auto__;
}
break;
}
}catch (e28557){if((e28557 instanceof Object)){
var ex__24487__auto__ = e28557;
var statearr_28558_28606 = state_28487;
(statearr_28558_28606[(5)] = ex__24487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28607 = state_28487;
state_28487 = G__28607;
continue;
} else {
return ret_value__24485__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto__ = function(state_28487){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto____1.call(this,state_28487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24484__auto__;
})()
})();
var state__24582__auto__ = (function (){var statearr_28559 = f__24581__auto__.call(null);
(statearr_28559[(6)] = c__24580__auto__);

return statearr_28559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24582__auto__);
}));

return c__24580__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28610,link){
var map__28611 = p__28610;
var map__28611__$1 = cljs.core.__destructure_map.call(null,map__28611);
var file = cljs.core.get.call(null,map__28611__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5804__auto__ = link.href;
if(cljs.core.truth_(temp__5804__auto__)){
var link_href = temp__5804__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__28608_SHARP_,p2__28609_SHARP_){
if(cljs.core._EQ_.call(null,p1__28608_SHARP_,p2__28609_SHARP_)){
return p1__28608_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5804__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28613){
var map__28614 = p__28613;
var map__28614__$1 = cljs.core.__destructure_map.call(null,map__28614);
var match_length = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28612_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28612_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5804__auto__)){
var res = temp__5804__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28615_SHARP_,p2__28616_SHARP_){
return cljs.core.assoc.call(null,p1__28615_SHARP_,cljs.core.get.call(null,p2__28616_SHARP_,key),p2__28616_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5802__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5802__auto__)){
var link = temp__5802__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28617 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28617);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28617);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28618,p__28619){
var map__28620 = p__28618;
var map__28620__$1 = cljs.core.__destructure_map.call(null,map__28620);
var on_cssload = cljs.core.get.call(null,map__28620__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28621 = p__28619;
var map__28621__$1 = cljs.core.__destructure_map.call(null,map__28621);
var files_msg = map__28621__$1;
var files = cljs.core.get.call(null,map__28621__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5804__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5804__auto__)){
var f_datas = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1744477359553
