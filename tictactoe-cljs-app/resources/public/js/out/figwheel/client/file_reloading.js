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
var G__27877 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__27877 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__27877,"requires");
}
}):(function (path){
var G__27878 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__27878 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__27878);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27879_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27879_SHARP_)));
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
var G__27880 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__27880__$1 = (((G__27880 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__27880,"provides"));
if((G__27880__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__27880__$1);
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
var seq__27881 = cljs.core.seq.call(null,provides);
var chunk__27882 = null;
var count__27883 = (0);
var i__27884 = (0);
while(true){
if((i__27884 < count__27883)){
var prov = cljs.core._nth.call(null,chunk__27882,i__27884);
var seq__27893_27905 = cljs.core.seq.call(null,requires);
var chunk__27894_27906 = null;
var count__27895_27907 = (0);
var i__27896_27908 = (0);
while(true){
if((i__27896_27908 < count__27895_27907)){
var req_27909 = cljs.core._nth.call(null,chunk__27894_27906,i__27896_27908);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27909,prov);


var G__27910 = seq__27893_27905;
var G__27911 = chunk__27894_27906;
var G__27912 = count__27895_27907;
var G__27913 = (i__27896_27908 + (1));
seq__27893_27905 = G__27910;
chunk__27894_27906 = G__27911;
count__27895_27907 = G__27912;
i__27896_27908 = G__27913;
continue;
} else {
var temp__5753__auto___27914 = cljs.core.seq.call(null,seq__27893_27905);
if(temp__5753__auto___27914){
var seq__27893_27915__$1 = temp__5753__auto___27914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27893_27915__$1)){
var c__5568__auto___27916 = cljs.core.chunk_first.call(null,seq__27893_27915__$1);
var G__27917 = cljs.core.chunk_rest.call(null,seq__27893_27915__$1);
var G__27918 = c__5568__auto___27916;
var G__27919 = cljs.core.count.call(null,c__5568__auto___27916);
var G__27920 = (0);
seq__27893_27905 = G__27917;
chunk__27894_27906 = G__27918;
count__27895_27907 = G__27919;
i__27896_27908 = G__27920;
continue;
} else {
var req_27921 = cljs.core.first.call(null,seq__27893_27915__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27921,prov);


var G__27922 = cljs.core.next.call(null,seq__27893_27915__$1);
var G__27923 = null;
var G__27924 = (0);
var G__27925 = (0);
seq__27893_27905 = G__27922;
chunk__27894_27906 = G__27923;
count__27895_27907 = G__27924;
i__27896_27908 = G__27925;
continue;
}
} else {
}
}
break;
}


var G__27926 = seq__27881;
var G__27927 = chunk__27882;
var G__27928 = count__27883;
var G__27929 = (i__27884 + (1));
seq__27881 = G__27926;
chunk__27882 = G__27927;
count__27883 = G__27928;
i__27884 = G__27929;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__27881);
if(temp__5753__auto__){
var seq__27881__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27881__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27881__$1);
var G__27930 = cljs.core.chunk_rest.call(null,seq__27881__$1);
var G__27931 = c__5568__auto__;
var G__27932 = cljs.core.count.call(null,c__5568__auto__);
var G__27933 = (0);
seq__27881 = G__27930;
chunk__27882 = G__27931;
count__27883 = G__27932;
i__27884 = G__27933;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27881__$1);
var seq__27897_27934 = cljs.core.seq.call(null,requires);
var chunk__27898_27935 = null;
var count__27899_27936 = (0);
var i__27900_27937 = (0);
while(true){
if((i__27900_27937 < count__27899_27936)){
var req_27938 = cljs.core._nth.call(null,chunk__27898_27935,i__27900_27937);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27938,prov);


var G__27939 = seq__27897_27934;
var G__27940 = chunk__27898_27935;
var G__27941 = count__27899_27936;
var G__27942 = (i__27900_27937 + (1));
seq__27897_27934 = G__27939;
chunk__27898_27935 = G__27940;
count__27899_27936 = G__27941;
i__27900_27937 = G__27942;
continue;
} else {
var temp__5753__auto___27943__$1 = cljs.core.seq.call(null,seq__27897_27934);
if(temp__5753__auto___27943__$1){
var seq__27897_27944__$1 = temp__5753__auto___27943__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27897_27944__$1)){
var c__5568__auto___27945 = cljs.core.chunk_first.call(null,seq__27897_27944__$1);
var G__27946 = cljs.core.chunk_rest.call(null,seq__27897_27944__$1);
var G__27947 = c__5568__auto___27945;
var G__27948 = cljs.core.count.call(null,c__5568__auto___27945);
var G__27949 = (0);
seq__27897_27934 = G__27946;
chunk__27898_27935 = G__27947;
count__27899_27936 = G__27948;
i__27900_27937 = G__27949;
continue;
} else {
var req_27950 = cljs.core.first.call(null,seq__27897_27944__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27950,prov);


var G__27951 = cljs.core.next.call(null,seq__27897_27944__$1);
var G__27952 = null;
var G__27953 = (0);
var G__27954 = (0);
seq__27897_27934 = G__27951;
chunk__27898_27935 = G__27952;
count__27899_27936 = G__27953;
i__27900_27937 = G__27954;
continue;
}
} else {
}
}
break;
}


var G__27955 = cljs.core.next.call(null,seq__27881__$1);
var G__27956 = null;
var G__27957 = (0);
var G__27958 = (0);
seq__27881 = G__27955;
chunk__27882 = G__27956;
count__27883 = G__27957;
i__27884 = G__27958;
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
var seq__27901 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__27902 = null;
var count__27903 = (0);
var i__27904 = (0);
while(true){
if((i__27904 < count__27903)){
var prov = cljs.core._nth.call(null,chunk__27902,i__27904);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__27901,chunk__27902,count__27903,i__27904,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27901,chunk__27902,count__27903,i__27904,prov,requires))
);


var G__27959 = seq__27901;
var G__27960 = chunk__27902;
var G__27961 = count__27903;
var G__27962 = (i__27904 + (1));
seq__27901 = G__27959;
chunk__27902 = G__27960;
count__27903 = G__27961;
i__27904 = G__27962;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__27901);
if(temp__5753__auto__){
var seq__27901__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27901__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27901__$1);
var G__27963 = cljs.core.chunk_rest.call(null,seq__27901__$1);
var G__27964 = c__5568__auto__;
var G__27965 = cljs.core.count.call(null,c__5568__auto__);
var G__27966 = (0);
seq__27901 = G__27963;
chunk__27902 = G__27964;
count__27903 = G__27965;
i__27904 = G__27966;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27901__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__27901,chunk__27902,count__27903,i__27904,prov,seq__27901__$1,temp__5753__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27901,chunk__27902,count__27903,i__27904,prov,seq__27901__$1,temp__5753__auto__,requires))
);


var G__27967 = cljs.core.next.call(null,seq__27901__$1);
var G__27968 = null;
var G__27969 = (0);
var G__27970 = (0);
seq__27901 = G__27967;
chunk__27902 = G__27968;
count__27903 = G__27969;
i__27904 = G__27970;
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
return cljs.core.some.call(null,(function (p__27971){
var vec__27972 = p__27971;
var _ = cljs.core.nth.call(null,vec__27972,(0),null);
var v = cljs.core.nth.call(null,vec__27972,(1),null);
var and__5043__auto__ = v;
if(cljs.core.truth_(and__5043__auto__)){
return v.call(null,dep);
} else {
return and__5043__auto__;
}
}),cljs.core.filter.call(null,(function (p__27975){
var vec__27976 = p__27975;
var k = cljs.core.nth.call(null,vec__27976,(0),null);
var v = cljs.core.nth.call(null,vec__27976,(1),null);
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

var seq__27988_27996 = cljs.core.seq.call(null,deps);
var chunk__27989_27997 = null;
var count__27990_27998 = (0);
var i__27991_27999 = (0);
while(true){
if((i__27991_27999 < count__27990_27998)){
var dep_28000 = cljs.core._nth.call(null,chunk__27989_27997,i__27991_27999);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_28000;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28000));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28000,(depth + (1)),state);
} else {
}


var G__28001 = seq__27988_27996;
var G__28002 = chunk__27989_27997;
var G__28003 = count__27990_27998;
var G__28004 = (i__27991_27999 + (1));
seq__27988_27996 = G__28001;
chunk__27989_27997 = G__28002;
count__27990_27998 = G__28003;
i__27991_27999 = G__28004;
continue;
} else {
var temp__5753__auto___28005 = cljs.core.seq.call(null,seq__27988_27996);
if(temp__5753__auto___28005){
var seq__27988_28006__$1 = temp__5753__auto___28005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27988_28006__$1)){
var c__5568__auto___28007 = cljs.core.chunk_first.call(null,seq__27988_28006__$1);
var G__28008 = cljs.core.chunk_rest.call(null,seq__27988_28006__$1);
var G__28009 = c__5568__auto___28007;
var G__28010 = cljs.core.count.call(null,c__5568__auto___28007);
var G__28011 = (0);
seq__27988_27996 = G__28008;
chunk__27989_27997 = G__28009;
count__27990_27998 = G__28010;
i__27991_27999 = G__28011;
continue;
} else {
var dep_28012 = cljs.core.first.call(null,seq__27988_28006__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_28012;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28012));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28012,(depth + (1)),state);
} else {
}


var G__28013 = cljs.core.next.call(null,seq__27988_28006__$1);
var G__28014 = null;
var G__28015 = (0);
var G__28016 = (0);
seq__27988_27996 = G__28013;
chunk__27989_27997 = G__28014;
count__27990_27998 = G__28015;
i__27991_27999 = G__28016;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27992){
var vec__27993 = p__27992;
var seq__27994 = cljs.core.seq.call(null,vec__27993);
var first__27995 = cljs.core.first.call(null,seq__27994);
var seq__27994__$1 = cljs.core.next.call(null,seq__27994);
var x = first__27995;
var xs = seq__27994__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__27979_SHARP_){
return clojure.set.difference.call(null,p1__27979_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28017_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28017_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28018 = cljs.core.seq.call(null,provides);
var chunk__28019 = null;
var count__28020 = (0);
var i__28021 = (0);
while(true){
if((i__28021 < count__28020)){
var prov = cljs.core._nth.call(null,chunk__28019,i__28021);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28030_28038 = cljs.core.seq.call(null,requires);
var chunk__28031_28039 = null;
var count__28032_28040 = (0);
var i__28033_28041 = (0);
while(true){
if((i__28033_28041 < count__28032_28040)){
var req_28042 = cljs.core._nth.call(null,chunk__28031_28039,i__28033_28041);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28042,prov);


var G__28043 = seq__28030_28038;
var G__28044 = chunk__28031_28039;
var G__28045 = count__28032_28040;
var G__28046 = (i__28033_28041 + (1));
seq__28030_28038 = G__28043;
chunk__28031_28039 = G__28044;
count__28032_28040 = G__28045;
i__28033_28041 = G__28046;
continue;
} else {
var temp__5753__auto___28047 = cljs.core.seq.call(null,seq__28030_28038);
if(temp__5753__auto___28047){
var seq__28030_28048__$1 = temp__5753__auto___28047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28030_28048__$1)){
var c__5568__auto___28049 = cljs.core.chunk_first.call(null,seq__28030_28048__$1);
var G__28050 = cljs.core.chunk_rest.call(null,seq__28030_28048__$1);
var G__28051 = c__5568__auto___28049;
var G__28052 = cljs.core.count.call(null,c__5568__auto___28049);
var G__28053 = (0);
seq__28030_28038 = G__28050;
chunk__28031_28039 = G__28051;
count__28032_28040 = G__28052;
i__28033_28041 = G__28053;
continue;
} else {
var req_28054 = cljs.core.first.call(null,seq__28030_28048__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28054,prov);


var G__28055 = cljs.core.next.call(null,seq__28030_28048__$1);
var G__28056 = null;
var G__28057 = (0);
var G__28058 = (0);
seq__28030_28038 = G__28055;
chunk__28031_28039 = G__28056;
count__28032_28040 = G__28057;
i__28033_28041 = G__28058;
continue;
}
} else {
}
}
break;
}


var G__28059 = seq__28018;
var G__28060 = chunk__28019;
var G__28061 = count__28020;
var G__28062 = (i__28021 + (1));
seq__28018 = G__28059;
chunk__28019 = G__28060;
count__28020 = G__28061;
i__28021 = G__28062;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__28018);
if(temp__5753__auto__){
var seq__28018__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28018__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__28018__$1);
var G__28063 = cljs.core.chunk_rest.call(null,seq__28018__$1);
var G__28064 = c__5568__auto__;
var G__28065 = cljs.core.count.call(null,c__5568__auto__);
var G__28066 = (0);
seq__28018 = G__28063;
chunk__28019 = G__28064;
count__28020 = G__28065;
i__28021 = G__28066;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28018__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28034_28067 = cljs.core.seq.call(null,requires);
var chunk__28035_28068 = null;
var count__28036_28069 = (0);
var i__28037_28070 = (0);
while(true){
if((i__28037_28070 < count__28036_28069)){
var req_28071 = cljs.core._nth.call(null,chunk__28035_28068,i__28037_28070);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28071,prov);


var G__28072 = seq__28034_28067;
var G__28073 = chunk__28035_28068;
var G__28074 = count__28036_28069;
var G__28075 = (i__28037_28070 + (1));
seq__28034_28067 = G__28072;
chunk__28035_28068 = G__28073;
count__28036_28069 = G__28074;
i__28037_28070 = G__28075;
continue;
} else {
var temp__5753__auto___28076__$1 = cljs.core.seq.call(null,seq__28034_28067);
if(temp__5753__auto___28076__$1){
var seq__28034_28077__$1 = temp__5753__auto___28076__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28034_28077__$1)){
var c__5568__auto___28078 = cljs.core.chunk_first.call(null,seq__28034_28077__$1);
var G__28079 = cljs.core.chunk_rest.call(null,seq__28034_28077__$1);
var G__28080 = c__5568__auto___28078;
var G__28081 = cljs.core.count.call(null,c__5568__auto___28078);
var G__28082 = (0);
seq__28034_28067 = G__28079;
chunk__28035_28068 = G__28080;
count__28036_28069 = G__28081;
i__28037_28070 = G__28082;
continue;
} else {
var req_28083 = cljs.core.first.call(null,seq__28034_28077__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28083,prov);


var G__28084 = cljs.core.next.call(null,seq__28034_28077__$1);
var G__28085 = null;
var G__28086 = (0);
var G__28087 = (0);
seq__28034_28067 = G__28084;
chunk__28035_28068 = G__28085;
count__28036_28069 = G__28086;
i__28037_28070 = G__28087;
continue;
}
} else {
}
}
break;
}


var G__28088 = cljs.core.next.call(null,seq__28018__$1);
var G__28089 = null;
var G__28090 = (0);
var G__28091 = (0);
seq__28018 = G__28088;
chunk__28019 = G__28089;
count__28020 = G__28090;
i__28021 = G__28091;
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
var seq__28092_28096 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28093_28097 = null;
var count__28094_28098 = (0);
var i__28095_28099 = (0);
while(true){
if((i__28095_28099 < count__28094_28098)){
var ns_28100 = cljs.core._nth.call(null,chunk__28093_28097,i__28095_28099);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28100);


var G__28101 = seq__28092_28096;
var G__28102 = chunk__28093_28097;
var G__28103 = count__28094_28098;
var G__28104 = (i__28095_28099 + (1));
seq__28092_28096 = G__28101;
chunk__28093_28097 = G__28102;
count__28094_28098 = G__28103;
i__28095_28099 = G__28104;
continue;
} else {
var temp__5753__auto___28105 = cljs.core.seq.call(null,seq__28092_28096);
if(temp__5753__auto___28105){
var seq__28092_28106__$1 = temp__5753__auto___28105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28092_28106__$1)){
var c__5568__auto___28107 = cljs.core.chunk_first.call(null,seq__28092_28106__$1);
var G__28108 = cljs.core.chunk_rest.call(null,seq__28092_28106__$1);
var G__28109 = c__5568__auto___28107;
var G__28110 = cljs.core.count.call(null,c__5568__auto___28107);
var G__28111 = (0);
seq__28092_28096 = G__28108;
chunk__28093_28097 = G__28109;
count__28094_28098 = G__28110;
i__28095_28099 = G__28111;
continue;
} else {
var ns_28112 = cljs.core.first.call(null,seq__28092_28106__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28112);


var G__28113 = cljs.core.next.call(null,seq__28092_28106__$1);
var G__28114 = null;
var G__28115 = (0);
var G__28116 = (0);
seq__28092_28096 = G__28113;
chunk__28093_28097 = G__28114;
count__28094_28098 = G__28115;
i__28095_28099 = G__28116;
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
var G__28117__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28118__i = 0, G__28118__a = new Array(arguments.length -  0);
while (G__28118__i < G__28118__a.length) {G__28118__a[G__28118__i] = arguments[G__28118__i + 0]; ++G__28118__i;}
  args = new cljs.core.IndexedSeq(G__28118__a,0,null);
} 
return G__28117__delegate.call(this,args);};
G__28117.cljs$lang$maxFixedArity = 0;
G__28117.cljs$lang$applyTo = (function (arglist__28119){
var args = cljs.core.seq(arglist__28119);
return G__28117__delegate(args);
});
G__28117.cljs$core$IFn$_invoke$arity$variadic = G__28117__delegate;
return G__28117;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28120_SHARP_,p2__28121_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28120_SHARP_)),p2__28121_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28122_SHARP_,p2__28123_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28122_SHARP_),p2__28123_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28124 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28124.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28124.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28124;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28125){if((e28125 instanceof Error)){
var e = e28125;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28125;

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
}catch (e28126){if((e28126 instanceof Error)){
var e = e28126;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28126;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28127 = cljs.core._EQ_;
var expr__28128 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28127.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28128))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28127.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28128))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28127.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28128))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28130,callback){
var map__28131 = p__28130;
var map__28131__$1 = cljs.core.__destructure_map.call(null,map__28131);
var file_msg = map__28131__$1;
var request_url = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_28168){
var state_val_28169 = (state_28168[(1)]);
if((state_val_28169 === (7))){
var inst_28164 = (state_28168[(2)]);
var state_28168__$1 = state_28168;
var statearr_28170_28196 = state_28168__$1;
(statearr_28170_28196[(2)] = inst_28164);

(statearr_28170_28196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (1))){
var state_28168__$1 = state_28168;
var statearr_28171_28197 = state_28168__$1;
(statearr_28171_28197[(2)] = null);

(statearr_28171_28197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (4))){
var inst_28134 = (state_28168[(7)]);
var inst_28134__$1 = (state_28168[(2)]);
var state_28168__$1 = (function (){var statearr_28172 = state_28168;
(statearr_28172[(7)] = inst_28134__$1);

return statearr_28172;
})();
if(cljs.core.truth_(inst_28134__$1)){
var statearr_28173_28198 = state_28168__$1;
(statearr_28173_28198[(1)] = (5));

} else {
var statearr_28174_28199 = state_28168__$1;
(statearr_28174_28199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (15))){
var inst_28147 = (state_28168[(8)]);
var inst_28149 = (state_28168[(9)]);
var inst_28151 = inst_28149.call(null,inst_28147);
var state_28168__$1 = state_28168;
var statearr_28175_28200 = state_28168__$1;
(statearr_28175_28200[(2)] = inst_28151);

(statearr_28175_28200[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (13))){
var inst_28158 = (state_28168[(2)]);
var state_28168__$1 = state_28168;
var statearr_28176_28201 = state_28168__$1;
(statearr_28176_28201[(2)] = inst_28158);

(statearr_28176_28201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (6))){
var state_28168__$1 = state_28168;
var statearr_28177_28202 = state_28168__$1;
(statearr_28177_28202[(2)] = null);

(statearr_28177_28202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (17))){
var inst_28155 = (state_28168[(2)]);
var state_28168__$1 = state_28168;
var statearr_28178_28203 = state_28168__$1;
(statearr_28178_28203[(2)] = inst_28155);

(statearr_28178_28203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (3))){
var inst_28166 = (state_28168[(2)]);
var state_28168__$1 = state_28168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28168__$1,inst_28166);
} else {
if((state_val_28169 === (12))){
var state_28168__$1 = state_28168;
var statearr_28179_28204 = state_28168__$1;
(statearr_28179_28204[(2)] = null);

(statearr_28179_28204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (2))){
var state_28168__$1 = state_28168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28168__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28169 === (11))){
var inst_28139 = (state_28168[(10)]);
var inst_28145 = figwheel.client.file_reloading.blocking_load.call(null,inst_28139);
var state_28168__$1 = state_28168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28168__$1,(14),inst_28145);
} else {
if((state_val_28169 === (9))){
var inst_28139 = (state_28168[(10)]);
var state_28168__$1 = state_28168;
if(cljs.core.truth_(inst_28139)){
var statearr_28180_28205 = state_28168__$1;
(statearr_28180_28205[(1)] = (11));

} else {
var statearr_28181_28206 = state_28168__$1;
(statearr_28181_28206[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (5))){
var inst_28134 = (state_28168[(7)]);
var inst_28140 = (state_28168[(11)]);
var inst_28139 = cljs.core.nth.call(null,inst_28134,(0),null);
var inst_28140__$1 = cljs.core.nth.call(null,inst_28134,(1),null);
var state_28168__$1 = (function (){var statearr_28182 = state_28168;
(statearr_28182[(10)] = inst_28139);

(statearr_28182[(11)] = inst_28140__$1);

return statearr_28182;
})();
if(cljs.core.truth_(inst_28140__$1)){
var statearr_28183_28207 = state_28168__$1;
(statearr_28183_28207[(1)] = (8));

} else {
var statearr_28184_28208 = state_28168__$1;
(statearr_28184_28208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (14))){
var inst_28139 = (state_28168[(10)]);
var inst_28149 = (state_28168[(9)]);
var inst_28147 = (state_28168[(2)]);
var inst_28148 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28149__$1 = cljs.core.get.call(null,inst_28148,inst_28139);
var state_28168__$1 = (function (){var statearr_28185 = state_28168;
(statearr_28185[(8)] = inst_28147);

(statearr_28185[(9)] = inst_28149__$1);

return statearr_28185;
})();
if(cljs.core.truth_(inst_28149__$1)){
var statearr_28186_28209 = state_28168__$1;
(statearr_28186_28209[(1)] = (15));

} else {
var statearr_28187_28210 = state_28168__$1;
(statearr_28187_28210[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (16))){
var inst_28147 = (state_28168[(8)]);
var inst_28153 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28147);
var state_28168__$1 = state_28168;
var statearr_28188_28211 = state_28168__$1;
(statearr_28188_28211[(2)] = inst_28153);

(statearr_28188_28211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (10))){
var inst_28160 = (state_28168[(2)]);
var state_28168__$1 = (function (){var statearr_28189 = state_28168;
(statearr_28189[(12)] = inst_28160);

return statearr_28189;
})();
var statearr_28190_28212 = state_28168__$1;
(statearr_28190_28212[(2)] = null);

(statearr_28190_28212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28169 === (8))){
var inst_28140 = (state_28168[(11)]);
var inst_28142 = eval(inst_28140);
var state_28168__$1 = state_28168;
var statearr_28191_28213 = state_28168__$1;
(statearr_28191_28213[(2)] = inst_28142);

(statearr_28191_28213[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__24431__auto__ = null;
var figwheel$client$file_reloading$state_machine__24431__auto____0 = (function (){
var statearr_28192 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28192[(0)] = figwheel$client$file_reloading$state_machine__24431__auto__);

(statearr_28192[(1)] = (1));

return statearr_28192;
});
var figwheel$client$file_reloading$state_machine__24431__auto____1 = (function (state_28168){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_28168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e28193){if((e28193 instanceof Object)){
var ex__24434__auto__ = e28193;
var statearr_28194_28214 = state_28168;
(statearr_28194_28214[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28215 = state_28168;
state_28168 = G__28215;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24431__auto__ = function(state_28168){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24431__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24431__auto____1.call(this,state_28168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24431__auto____0;
figwheel$client$file_reloading$state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24431__auto____1;
return figwheel$client$file_reloading$state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_28195 = f__24528__auto__.call(null);
(statearr_28195[(6)] = c__24527__auto__);

return statearr_28195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28217 = arguments.length;
switch (G__28217) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28219,callback){
var map__28220 = p__28219;
var map__28220__$1 = cljs.core.__destructure_map.call(null,map__28220);
var file_msg = map__28220__$1;
var namespace = cljs.core.get.call(null,map__28220__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28221){
var map__28222 = p__28221;
var map__28222__$1 = cljs.core.__destructure_map.call(null,map__28222);
var file_msg = map__28222__$1;
var namespace = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28223){
var map__28224 = p__28223;
var map__28224__$1 = cljs.core.__destructure_map.call(null,map__28224);
var file_msg = map__28224__$1;
var namespace = cljs.core.get.call(null,map__28224__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28225,callback){
var map__28226 = p__28225;
var map__28226__$1 = cljs.core.__destructure_map.call(null,map__28226);
var file_msg = map__28226__$1;
var request_url = cljs.core.get.call(null,map__28226__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28226__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24527__auto___28275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_28260){
var state_val_28261 = (state_28260[(1)]);
if((state_val_28261 === (1))){
var inst_28234 = cljs.core.seq.call(null,files);
var inst_28235 = cljs.core.first.call(null,inst_28234);
var inst_28236 = cljs.core.next.call(null,inst_28234);
var inst_28237 = files;
var state_28260__$1 = (function (){var statearr_28262 = state_28260;
(statearr_28262[(7)] = inst_28237);

(statearr_28262[(8)] = inst_28235);

(statearr_28262[(9)] = inst_28236);

return statearr_28262;
})();
var statearr_28263_28276 = state_28260__$1;
(statearr_28263_28276[(2)] = null);

(statearr_28263_28276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28261 === (2))){
var inst_28243 = (state_28260[(10)]);
var inst_28237 = (state_28260[(7)]);
var inst_28242 = cljs.core.seq.call(null,inst_28237);
var inst_28243__$1 = cljs.core.first.call(null,inst_28242);
var inst_28244 = cljs.core.next.call(null,inst_28242);
var inst_28245 = (inst_28243__$1 == null);
var inst_28246 = cljs.core.not.call(null,inst_28245);
var state_28260__$1 = (function (){var statearr_28264 = state_28260;
(statearr_28264[(11)] = inst_28244);

(statearr_28264[(10)] = inst_28243__$1);

return statearr_28264;
})();
if(inst_28246){
var statearr_28265_28277 = state_28260__$1;
(statearr_28265_28277[(1)] = (4));

} else {
var statearr_28266_28278 = state_28260__$1;
(statearr_28266_28278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28261 === (3))){
var inst_28258 = (state_28260[(2)]);
var state_28260__$1 = state_28260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28260__$1,inst_28258);
} else {
if((state_val_28261 === (4))){
var inst_28243 = (state_28260[(10)]);
var inst_28248 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28243);
var state_28260__$1 = state_28260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28260__$1,(7),inst_28248);
} else {
if((state_val_28261 === (5))){
var inst_28254 = cljs.core.async.close_BANG_.call(null,out);
var state_28260__$1 = state_28260;
var statearr_28267_28279 = state_28260__$1;
(statearr_28267_28279[(2)] = inst_28254);

(statearr_28267_28279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28261 === (6))){
var inst_28256 = (state_28260[(2)]);
var state_28260__$1 = state_28260;
var statearr_28268_28280 = state_28260__$1;
(statearr_28268_28280[(2)] = inst_28256);

(statearr_28268_28280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28261 === (7))){
var inst_28244 = (state_28260[(11)]);
var inst_28250 = (state_28260[(2)]);
var inst_28251 = cljs.core.async.put_BANG_.call(null,out,inst_28250);
var inst_28237 = inst_28244;
var state_28260__$1 = (function (){var statearr_28269 = state_28260;
(statearr_28269[(7)] = inst_28237);

(statearr_28269[(12)] = inst_28251);

return statearr_28269;
})();
var statearr_28270_28281 = state_28260__$1;
(statearr_28270_28281[(2)] = null);

(statearr_28270_28281[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto____0 = (function (){
var statearr_28271 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28271[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto__);

(statearr_28271[(1)] = (1));

return statearr_28271;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto____1 = (function (state_28260){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_28260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e28272){if((e28272 instanceof Object)){
var ex__24434__auto__ = e28272;
var statearr_28273_28282 = state_28260;
(statearr_28273_28282[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28283 = state_28260;
state_28260 = G__28283;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto__ = function(state_28260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto____1.call(this,state_28260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_28274 = f__24528__auto__.call(null);
(statearr_28274[(6)] = c__24527__auto___28275);

return statearr_28274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28284,opts){
var map__28285 = p__28284;
var map__28285__$1 = cljs.core.__destructure_map.call(null,map__28285);
var eval_body = cljs.core.get.call(null,map__28285__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28286){var e = e28286;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28287_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28287_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5751__auto__)){
var file_msg = temp__5751__auto__;
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
return cljs.core.map.call(null,(function (p__28288){
var vec__28289 = p__28288;
var k = cljs.core.nth.call(null,vec__28289,(0),null);
var v = cljs.core.nth.call(null,vec__28289,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28292){
var vec__28293 = p__28292;
var k = cljs.core.nth.call(null,vec__28293,(0),null);
var v = cljs.core.nth.call(null,vec__28293,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28299,p__28300){
var map__28301 = p__28299;
var map__28301__$1 = cljs.core.__destructure_map.call(null,map__28301);
var opts = map__28301__$1;
var before_jsload = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28302 = p__28300;
var map__28302__$1 = cljs.core.__destructure_map.call(null,map__28302);
var msg = map__28302__$1;
var files = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24528__auto__ = (function (){var switch__24430__auto__ = (function (state_28434){
var state_val_28435 = (state_28434[(1)]);
if((state_val_28435 === (7))){
var inst_28317 = (state_28434[(7)]);
var inst_28315 = (state_28434[(8)]);
var inst_28316 = (state_28434[(9)]);
var inst_28314 = (state_28434[(10)]);
var inst_28322 = cljs.core._nth.call(null,inst_28315,inst_28317);
var inst_28323 = figwheel.client.file_reloading.eval_body.call(null,inst_28322,opts);
var inst_28324 = (inst_28317 + (1));
var tmp28436 = inst_28315;
var tmp28437 = inst_28316;
var tmp28438 = inst_28314;
var inst_28314__$1 = tmp28438;
var inst_28315__$1 = tmp28436;
var inst_28316__$1 = tmp28437;
var inst_28317__$1 = inst_28324;
var state_28434__$1 = (function (){var statearr_28439 = state_28434;
(statearr_28439[(7)] = inst_28317__$1);

(statearr_28439[(11)] = inst_28323);

(statearr_28439[(8)] = inst_28315__$1);

(statearr_28439[(9)] = inst_28316__$1);

(statearr_28439[(10)] = inst_28314__$1);

return statearr_28439;
})();
var statearr_28440_28507 = state_28434__$1;
(statearr_28440_28507[(2)] = null);

(statearr_28440_28507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (20))){
var inst_28357 = (state_28434[(12)]);
var inst_28365 = figwheel.client.file_reloading.sort_files.call(null,inst_28357);
var state_28434__$1 = state_28434;
var statearr_28441_28508 = state_28434__$1;
(statearr_28441_28508[(2)] = inst_28365);

(statearr_28441_28508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (27))){
var state_28434__$1 = state_28434;
var statearr_28442_28509 = state_28434__$1;
(statearr_28442_28509[(2)] = null);

(statearr_28442_28509[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (1))){
var inst_28306 = (state_28434[(13)]);
var inst_28303 = before_jsload.call(null,files);
var inst_28304 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28305 = (function (){return (function (p1__28296_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28296_SHARP_);
});
})();
var inst_28306__$1 = cljs.core.filter.call(null,inst_28305,files);
var inst_28307 = cljs.core.not_empty.call(null,inst_28306__$1);
var state_28434__$1 = (function (){var statearr_28443 = state_28434;
(statearr_28443[(14)] = inst_28304);

(statearr_28443[(15)] = inst_28303);

(statearr_28443[(13)] = inst_28306__$1);

return statearr_28443;
})();
if(cljs.core.truth_(inst_28307)){
var statearr_28444_28510 = state_28434__$1;
(statearr_28444_28510[(1)] = (2));

} else {
var statearr_28445_28511 = state_28434__$1;
(statearr_28445_28511[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (24))){
var state_28434__$1 = state_28434;
var statearr_28446_28512 = state_28434__$1;
(statearr_28446_28512[(2)] = null);

(statearr_28446_28512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (4))){
var inst_28351 = (state_28434[(2)]);
var inst_28352 = cljs.core.List.EMPTY;
var inst_28353 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28352);
var inst_28354 = (function (){return (function (p1__28297_SHARP_){
var and__5043__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28297_SHARP_);
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28297_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28297_SHARP_))));
} else {
return and__5043__auto__;
}
});
})();
var inst_28355 = cljs.core.filter.call(null,inst_28354,files);
var inst_28356 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28357 = cljs.core.concat.call(null,inst_28355,inst_28356);
var state_28434__$1 = (function (){var statearr_28447 = state_28434;
(statearr_28447[(16)] = inst_28351);

(statearr_28447[(17)] = inst_28353);

(statearr_28447[(12)] = inst_28357);

return statearr_28447;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28448_28513 = state_28434__$1;
(statearr_28448_28513[(1)] = (16));

} else {
var statearr_28449_28514 = state_28434__$1;
(statearr_28449_28514[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (15))){
var inst_28341 = (state_28434[(2)]);
var state_28434__$1 = state_28434;
var statearr_28450_28515 = state_28434__$1;
(statearr_28450_28515[(2)] = inst_28341);

(statearr_28450_28515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (21))){
var inst_28367 = (state_28434[(18)]);
var inst_28367__$1 = (state_28434[(2)]);
var inst_28368 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28367__$1);
var state_28434__$1 = (function (){var statearr_28451 = state_28434;
(statearr_28451[(18)] = inst_28367__$1);

return statearr_28451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28434__$1,(22),inst_28368);
} else {
if((state_val_28435 === (31))){
var inst_28432 = (state_28434[(2)]);
var state_28434__$1 = state_28434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28434__$1,inst_28432);
} else {
if((state_val_28435 === (32))){
var inst_28409 = (state_28434[(19)]);
var inst_28413 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28414 = cljs.core.map.call(null,inst_28413,inst_28409);
var inst_28415 = cljs.core.pr_str.call(null,inst_28414);
var inst_28416 = ["figwheel-no-load meta-data: ",inst_28415].join('');
var inst_28417 = figwheel.client.utils.log.call(null,inst_28416);
var state_28434__$1 = state_28434;
var statearr_28452_28516 = state_28434__$1;
(statearr_28452_28516[(2)] = inst_28417);

(statearr_28452_28516[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (33))){
var state_28434__$1 = state_28434;
var statearr_28453_28517 = state_28434__$1;
(statearr_28453_28517[(2)] = null);

(statearr_28453_28517[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (13))){
var inst_28327 = (state_28434[(20)]);
var inst_28331 = cljs.core.chunk_first.call(null,inst_28327);
var inst_28332 = cljs.core.chunk_rest.call(null,inst_28327);
var inst_28333 = cljs.core.count.call(null,inst_28331);
var inst_28314 = inst_28332;
var inst_28315 = inst_28331;
var inst_28316 = inst_28333;
var inst_28317 = (0);
var state_28434__$1 = (function (){var statearr_28454 = state_28434;
(statearr_28454[(7)] = inst_28317);

(statearr_28454[(8)] = inst_28315);

(statearr_28454[(9)] = inst_28316);

(statearr_28454[(10)] = inst_28314);

return statearr_28454;
})();
var statearr_28455_28518 = state_28434__$1;
(statearr_28455_28518[(2)] = null);

(statearr_28455_28518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (22))){
var inst_28375 = (state_28434[(21)]);
var inst_28367 = (state_28434[(18)]);
var inst_28371 = (state_28434[(22)]);
var inst_28370 = (state_28434[(23)]);
var inst_28370__$1 = (state_28434[(2)]);
var inst_28371__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28370__$1);
var inst_28372 = (function (){var all_files = inst_28367;
var res_SINGLEQUOTE_ = inst_28370__$1;
var res = inst_28371__$1;
return (function (p1__28298_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28298_SHARP_));
});
})();
var inst_28373 = cljs.core.filter.call(null,inst_28372,inst_28370__$1);
var inst_28374 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28375__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28374);
var inst_28376 = cljs.core.not_empty.call(null,inst_28375__$1);
var state_28434__$1 = (function (){var statearr_28456 = state_28434;
(statearr_28456[(24)] = inst_28373);

(statearr_28456[(21)] = inst_28375__$1);

(statearr_28456[(22)] = inst_28371__$1);

(statearr_28456[(23)] = inst_28370__$1);

return statearr_28456;
})();
if(cljs.core.truth_(inst_28376)){
var statearr_28457_28519 = state_28434__$1;
(statearr_28457_28519[(1)] = (23));

} else {
var statearr_28458_28520 = state_28434__$1;
(statearr_28458_28520[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (36))){
var state_28434__$1 = state_28434;
var statearr_28459_28521 = state_28434__$1;
(statearr_28459_28521[(2)] = null);

(statearr_28459_28521[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (29))){
var inst_28409 = (state_28434[(19)]);
var inst_28373 = (state_28434[(24)]);
var inst_28375 = (state_28434[(21)]);
var inst_28367 = (state_28434[(18)]);
var inst_28371 = (state_28434[(22)]);
var inst_28370 = (state_28434[(23)]);
var inst_28403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28406 = (function (){var all_files = inst_28367;
var res_SINGLEQUOTE_ = inst_28370;
var res = inst_28371;
var files_not_loaded = inst_28373;
var dependencies_that_loaded = inst_28375;
return (function (p__28405){
var map__28460 = p__28405;
var map__28460__$1 = cljs.core.__destructure_map.call(null,map__28460);
var namespace = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_28407 = cljs.core.group_by.call(null,inst_28406,inst_28373);
var inst_28408 = cljs.core.__destructure_map.call(null,inst_28407);
var inst_28409__$1 = cljs.core.get.call(null,inst_28408,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28410 = cljs.core.get.call(null,inst_28408,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28411 = cljs.core.not_empty.call(null,inst_28409__$1);
var state_28434__$1 = (function (){var statearr_28461 = state_28434;
(statearr_28461[(19)] = inst_28409__$1);

(statearr_28461[(25)] = inst_28403);

(statearr_28461[(26)] = inst_28410);

return statearr_28461;
})();
if(cljs.core.truth_(inst_28411)){
var statearr_28462_28522 = state_28434__$1;
(statearr_28462_28522[(1)] = (32));

} else {
var statearr_28463_28523 = state_28434__$1;
(statearr_28463_28523[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (6))){
var inst_28348 = (state_28434[(2)]);
var state_28434__$1 = state_28434;
var statearr_28464_28524 = state_28434__$1;
(statearr_28464_28524[(2)] = inst_28348);

(statearr_28464_28524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (28))){
var inst_28373 = (state_28434[(24)]);
var inst_28400 = (state_28434[(2)]);
var inst_28401 = cljs.core.not_empty.call(null,inst_28373);
var state_28434__$1 = (function (){var statearr_28465 = state_28434;
(statearr_28465[(27)] = inst_28400);

return statearr_28465;
})();
if(cljs.core.truth_(inst_28401)){
var statearr_28466_28525 = state_28434__$1;
(statearr_28466_28525[(1)] = (29));

} else {
var statearr_28467_28526 = state_28434__$1;
(statearr_28467_28526[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (25))){
var inst_28371 = (state_28434[(22)]);
var inst_28387 = (state_28434[(2)]);
var inst_28388 = cljs.core.not_empty.call(null,inst_28371);
var state_28434__$1 = (function (){var statearr_28468 = state_28434;
(statearr_28468[(28)] = inst_28387);

return statearr_28468;
})();
if(cljs.core.truth_(inst_28388)){
var statearr_28469_28527 = state_28434__$1;
(statearr_28469_28527[(1)] = (26));

} else {
var statearr_28470_28528 = state_28434__$1;
(statearr_28470_28528[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (34))){
var inst_28410 = (state_28434[(26)]);
var inst_28420 = (state_28434[(2)]);
var inst_28421 = cljs.core.not_empty.call(null,inst_28410);
var state_28434__$1 = (function (){var statearr_28471 = state_28434;
(statearr_28471[(29)] = inst_28420);

return statearr_28471;
})();
if(cljs.core.truth_(inst_28421)){
var statearr_28472_28529 = state_28434__$1;
(statearr_28472_28529[(1)] = (35));

} else {
var statearr_28473_28530 = state_28434__$1;
(statearr_28473_28530[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (17))){
var state_28434__$1 = state_28434;
var statearr_28474_28531 = state_28434__$1;
(statearr_28474_28531[(2)] = recompile_dependents);

(statearr_28474_28531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (3))){
var state_28434__$1 = state_28434;
var statearr_28475_28532 = state_28434__$1;
(statearr_28475_28532[(2)] = null);

(statearr_28475_28532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (12))){
var inst_28344 = (state_28434[(2)]);
var state_28434__$1 = state_28434;
var statearr_28476_28533 = state_28434__$1;
(statearr_28476_28533[(2)] = inst_28344);

(statearr_28476_28533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (2))){
var inst_28306 = (state_28434[(13)]);
var inst_28313 = cljs.core.seq.call(null,inst_28306);
var inst_28314 = inst_28313;
var inst_28315 = null;
var inst_28316 = (0);
var inst_28317 = (0);
var state_28434__$1 = (function (){var statearr_28477 = state_28434;
(statearr_28477[(7)] = inst_28317);

(statearr_28477[(8)] = inst_28315);

(statearr_28477[(9)] = inst_28316);

(statearr_28477[(10)] = inst_28314);

return statearr_28477;
})();
var statearr_28478_28534 = state_28434__$1;
(statearr_28478_28534[(2)] = null);

(statearr_28478_28534[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (23))){
var inst_28373 = (state_28434[(24)]);
var inst_28375 = (state_28434[(21)]);
var inst_28367 = (state_28434[(18)]);
var inst_28371 = (state_28434[(22)]);
var inst_28370 = (state_28434[(23)]);
var inst_28378 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28380 = (function (){var all_files = inst_28367;
var res_SINGLEQUOTE_ = inst_28370;
var res = inst_28371;
var files_not_loaded = inst_28373;
var dependencies_that_loaded = inst_28375;
return (function (p__28379){
var map__28479 = p__28379;
var map__28479__$1 = cljs.core.__destructure_map.call(null,map__28479);
var request_url = cljs.core.get.call(null,map__28479__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_28381 = cljs.core.reverse.call(null,inst_28375);
var inst_28382 = cljs.core.map.call(null,inst_28380,inst_28381);
var inst_28383 = cljs.core.pr_str.call(null,inst_28382);
var inst_28384 = figwheel.client.utils.log.call(null,inst_28383);
var state_28434__$1 = (function (){var statearr_28480 = state_28434;
(statearr_28480[(30)] = inst_28378);

return statearr_28480;
})();
var statearr_28481_28535 = state_28434__$1;
(statearr_28481_28535[(2)] = inst_28384);

(statearr_28481_28535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (35))){
var inst_28410 = (state_28434[(26)]);
var inst_28423 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28410);
var inst_28424 = cljs.core.pr_str.call(null,inst_28423);
var inst_28425 = ["not required: ",inst_28424].join('');
var inst_28426 = figwheel.client.utils.log.call(null,inst_28425);
var state_28434__$1 = state_28434;
var statearr_28482_28536 = state_28434__$1;
(statearr_28482_28536[(2)] = inst_28426);

(statearr_28482_28536[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (19))){
var inst_28357 = (state_28434[(12)]);
var inst_28363 = figwheel.client.file_reloading.expand_files.call(null,inst_28357);
var state_28434__$1 = state_28434;
var statearr_28483_28537 = state_28434__$1;
(statearr_28483_28537[(2)] = inst_28363);

(statearr_28483_28537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (11))){
var state_28434__$1 = state_28434;
var statearr_28484_28538 = state_28434__$1;
(statearr_28484_28538[(2)] = null);

(statearr_28484_28538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (9))){
var inst_28346 = (state_28434[(2)]);
var state_28434__$1 = state_28434;
var statearr_28485_28539 = state_28434__$1;
(statearr_28485_28539[(2)] = inst_28346);

(statearr_28485_28539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (5))){
var inst_28317 = (state_28434[(7)]);
var inst_28316 = (state_28434[(9)]);
var inst_28319 = (inst_28317 < inst_28316);
var inst_28320 = inst_28319;
var state_28434__$1 = state_28434;
if(cljs.core.truth_(inst_28320)){
var statearr_28486_28540 = state_28434__$1;
(statearr_28486_28540[(1)] = (7));

} else {
var statearr_28487_28541 = state_28434__$1;
(statearr_28487_28541[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (14))){
var inst_28327 = (state_28434[(20)]);
var inst_28336 = cljs.core.first.call(null,inst_28327);
var inst_28337 = figwheel.client.file_reloading.eval_body.call(null,inst_28336,opts);
var inst_28338 = cljs.core.next.call(null,inst_28327);
var inst_28314 = inst_28338;
var inst_28315 = null;
var inst_28316 = (0);
var inst_28317 = (0);
var state_28434__$1 = (function (){var statearr_28488 = state_28434;
(statearr_28488[(7)] = inst_28317);

(statearr_28488[(8)] = inst_28315);

(statearr_28488[(31)] = inst_28337);

(statearr_28488[(9)] = inst_28316);

(statearr_28488[(10)] = inst_28314);

return statearr_28488;
})();
var statearr_28489_28542 = state_28434__$1;
(statearr_28489_28542[(2)] = null);

(statearr_28489_28542[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (26))){
var inst_28373 = (state_28434[(24)]);
var inst_28375 = (state_28434[(21)]);
var inst_28367 = (state_28434[(18)]);
var inst_28371 = (state_28434[(22)]);
var inst_28370 = (state_28434[(23)]);
var inst_28390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28392 = (function (){var all_files = inst_28367;
var res_SINGLEQUOTE_ = inst_28370;
var res = inst_28371;
var files_not_loaded = inst_28373;
var dependencies_that_loaded = inst_28375;
return (function (p__28391){
var map__28490 = p__28391;
var map__28490__$1 = cljs.core.__destructure_map.call(null,map__28490);
var namespace = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_28393 = cljs.core.map.call(null,inst_28392,inst_28371);
var inst_28394 = cljs.core.pr_str.call(null,inst_28393);
var inst_28395 = figwheel.client.utils.log.call(null,inst_28394);
var inst_28396 = (function (){var all_files = inst_28367;
var res_SINGLEQUOTE_ = inst_28370;
var res = inst_28371;
var files_not_loaded = inst_28373;
var dependencies_that_loaded = inst_28375;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_28397 = setTimeout(inst_28396,(10));
var state_28434__$1 = (function (){var statearr_28491 = state_28434;
(statearr_28491[(32)] = inst_28395);

(statearr_28491[(33)] = inst_28390);

return statearr_28491;
})();
var statearr_28492_28543 = state_28434__$1;
(statearr_28492_28543[(2)] = inst_28397);

(statearr_28492_28543[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (16))){
var state_28434__$1 = state_28434;
var statearr_28493_28544 = state_28434__$1;
(statearr_28493_28544[(2)] = reload_dependents);

(statearr_28493_28544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (30))){
var state_28434__$1 = state_28434;
var statearr_28494_28545 = state_28434__$1;
(statearr_28494_28545[(2)] = null);

(statearr_28494_28545[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (10))){
var inst_28327 = (state_28434[(20)]);
var inst_28329 = cljs.core.chunked_seq_QMARK_.call(null,inst_28327);
var state_28434__$1 = state_28434;
if(inst_28329){
var statearr_28495_28546 = state_28434__$1;
(statearr_28495_28546[(1)] = (13));

} else {
var statearr_28496_28547 = state_28434__$1;
(statearr_28496_28547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (18))){
var inst_28361 = (state_28434[(2)]);
var state_28434__$1 = state_28434;
if(cljs.core.truth_(inst_28361)){
var statearr_28497_28548 = state_28434__$1;
(statearr_28497_28548[(1)] = (19));

} else {
var statearr_28498_28549 = state_28434__$1;
(statearr_28498_28549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (37))){
var inst_28429 = (state_28434[(2)]);
var state_28434__$1 = state_28434;
var statearr_28499_28550 = state_28434__$1;
(statearr_28499_28550[(2)] = inst_28429);

(statearr_28499_28550[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28435 === (8))){
var inst_28327 = (state_28434[(20)]);
var inst_28314 = (state_28434[(10)]);
var inst_28327__$1 = cljs.core.seq.call(null,inst_28314);
var state_28434__$1 = (function (){var statearr_28500 = state_28434;
(statearr_28500[(20)] = inst_28327__$1);

return statearr_28500;
})();
if(inst_28327__$1){
var statearr_28501_28551 = state_28434__$1;
(statearr_28501_28551[(1)] = (10));

} else {
var statearr_28502_28552 = state_28434__$1;
(statearr_28502_28552[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto____0 = (function (){
var statearr_28503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28503[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto__);

(statearr_28503[(1)] = (1));

return statearr_28503;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto____1 = (function (state_28434){
while(true){
var ret_value__24432__auto__ = (function (){try{while(true){
var result__24433__auto__ = switch__24430__auto__.call(null,state_28434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24433__auto__;
}
break;
}
}catch (e28504){if((e28504 instanceof Object)){
var ex__24434__auto__ = e28504;
var statearr_28505_28553 = state_28434;
(statearr_28505_28553[(5)] = ex__24434__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28554 = state_28434;
state_28434 = G__28554;
continue;
} else {
return ret_value__24432__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto__ = function(state_28434){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto____1.call(this,state_28434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24431__auto__;
})()
})();
var state__24529__auto__ = (function (){var statearr_28506 = f__24528__auto__.call(null);
(statearr_28506[(6)] = c__24527__auto__);

return statearr_28506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
}));

return c__24527__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28557,link){
var map__28558 = p__28557;
var map__28558__$1 = cljs.core.__destructure_map.call(null,map__28558);
var file = cljs.core.get.call(null,map__28558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5753__auto__ = link.href;
if(cljs.core.truth_(temp__5753__auto__)){
var link_href = temp__5753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__28555_SHARP_,p2__28556_SHARP_){
if(cljs.core._EQ_.call(null,p1__28555_SHARP_,p2__28556_SHARP_)){
return p1__28555_SHARP_;
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
var temp__5753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28560){
var map__28561 = p__28560;
var map__28561__$1 = cljs.core.__destructure_map.call(null,map__28561);
var match_length = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28559_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28559_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28562_SHARP_,p2__28563_SHARP_){
return cljs.core.assoc.call(null,p1__28562_SHARP_,cljs.core.get.call(null,p2__28563_SHARP_,key),p2__28563_SHARP_);
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
var temp__5751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5751__auto__)){
var link = temp__5751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28564 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28564);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28564);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28565,p__28566){
var map__28567 = p__28565;
var map__28567__$1 = cljs.core.__destructure_map.call(null,map__28567);
var on_cssload = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28568 = p__28566;
var map__28568__$1 = cljs.core.__destructure_map.call(null,map__28568);
var files_msg = map__28568__$1;
var files = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5753__auto__)){
var f_datas = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1745332063477
