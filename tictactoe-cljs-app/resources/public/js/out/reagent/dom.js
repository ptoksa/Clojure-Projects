// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22395 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22396 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22396);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__22397 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22398 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22398);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22397);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22395);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22400 = arguments.length;
switch (G__22400) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__22402_22406 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__22403_22407 = null;
var count__22404_22408 = (0);
var i__22405_22409 = (0);
while(true){
if((i__22405_22409 < count__22404_22408)){
var v_22410 = cljs.core._nth.call(null,chunk__22403_22407,i__22405_22409);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22410);


var G__22411 = seq__22402_22406;
var G__22412 = chunk__22403_22407;
var G__22413 = count__22404_22408;
var G__22414 = (i__22405_22409 + (1));
seq__22402_22406 = G__22411;
chunk__22403_22407 = G__22412;
count__22404_22408 = G__22413;
i__22405_22409 = G__22414;
continue;
} else {
var temp__5753__auto___22415 = cljs.core.seq.call(null,seq__22402_22406);
if(temp__5753__auto___22415){
var seq__22402_22416__$1 = temp__5753__auto___22415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22402_22416__$1)){
var c__5568__auto___22417 = cljs.core.chunk_first.call(null,seq__22402_22416__$1);
var G__22418 = cljs.core.chunk_rest.call(null,seq__22402_22416__$1);
var G__22419 = c__5568__auto___22417;
var G__22420 = cljs.core.count.call(null,c__5568__auto___22417);
var G__22421 = (0);
seq__22402_22406 = G__22418;
chunk__22403_22407 = G__22419;
count__22404_22408 = G__22420;
i__22405_22409 = G__22421;
continue;
} else {
var v_22422 = cljs.core.first.call(null,seq__22402_22416__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22422);


var G__22423 = cljs.core.next.call(null,seq__22402_22416__$1);
var G__22424 = null;
var G__22425 = (0);
var G__22426 = (0);
seq__22402_22406 = G__22423;
chunk__22403_22407 = G__22424;
count__22404_22408 = G__22425;
i__22405_22409 = G__22426;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1745332054495
