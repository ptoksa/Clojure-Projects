// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tictactoe.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.core !== 'undefined') && (typeof tictactoe.core.board !== 'undefined')){
} else {
tictactoe.core.board = reagent.core.atom.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,(9),null)));
}
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.core !== 'undefined') && (typeof tictactoe.core.current_player !== 'undefined')){
} else {
tictactoe.core.current_player = reagent.core.atom.call(null,"X");
}
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.core !== 'undefined') && (typeof tictactoe.core.winner !== 'undefined')){
} else {
tictactoe.core.winner = reagent.core.atom.call(null,null);
}
tictactoe.core.winning_lines = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null)], null);
tictactoe.core.check_winner = (function tictactoe$core$check_winner(board){
return cljs.core.some.call(null,(function (p__22072){
var vec__22073 = p__22072;
var a = cljs.core.nth.call(null,vec__22073,(0),null);
var b = cljs.core.nth.call(null,vec__22073,(1),null);
var c = cljs.core.nth.call(null,vec__22073,(2),null);
var v = cljs.core.nth.call(null,board,a);
if(cljs.core.truth_((function (){var and__5043__auto__ = v;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core._EQ_.call(null,v,cljs.core.nth.call(null,board,b))) && (cljs.core._EQ_.call(null,v,cljs.core.nth.call(null,board,c))));
} else {
return and__5043__auto__;
}
})())){
return v;
} else {
return null;
}
}),tictactoe.core.winning_lines);
});
tictactoe.core.board_full_QMARK_ = (function tictactoe$core$board_full_QMARK_(board){
return cljs.core.every_QMARK_.call(null,cljs.core.some_QMARK_,board);
});
tictactoe.core.square = (function tictactoe$core$square(idx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.square","div.square",-441224302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if((((cljs.core.nth.call(null,cljs.core.deref.call(null,tictactoe.core.board),idx) == null)) && ((cljs.core.deref.call(null,tictactoe.core.winner) == null)))){
cljs.core.swap_BANG_.call(null,tictactoe.core.board,cljs.core.assoc,idx,cljs.core.deref.call(null,tictactoe.core.current_player));

var w = tictactoe.core.check_winner.call(null,cljs.core.deref.call(null,tictactoe.core.board));
if(cljs.core.truth_(w)){
return cljs.core.reset_BANG_.call(null,tictactoe.core.winner,w);
} else {
if(tictactoe.core.board_full_QMARK_.call(null,cljs.core.deref.call(null,tictactoe.core.board))){
return cljs.core.reset_BANG_.call(null,tictactoe.core.winner,new cljs.core.Keyword(null,"draw","draw",1358331674));
} else {
return cljs.core.swap_BANG_.call(null,tictactoe.core.current_player,(function (p1__22076_SHARP_){
if(cljs.core._EQ_.call(null,p1__22076_SHARP_,"X")){
return "O";
} else {
return "X";
}
}));

}
}
} else {
return null;
}
})], null),cljs.core.nth.call(null,cljs.core.deref.call(null,tictactoe.core.board),idx)], null);
});
tictactoe.core.board_component = (function tictactoe$core$board_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),(function (){var iter__5523__auto__ = (function tictactoe$core$board_component_$_iter__22077(s__22078){
return (new cljs.core.LazySeq(null,(function (){
var s__22078__$1 = s__22078;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__22078__$1);
if(temp__5753__auto__){
var s__22078__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22078__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__22078__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__22080 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__22079 = (0);
while(true){
if((i__22079 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__22079);
cljs.core.chunk_append.call(null,b__22080,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.square,i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__22081 = (i__22079 + (1));
i__22079 = G__22081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22080),tictactoe$core$board_component_$_iter__22077.call(null,cljs.core.chunk_rest.call(null,s__22078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22080),null);
}
} else {
var i = cljs.core.first.call(null,s__22078__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.square,i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),tictactoe$core$board_component_$_iter__22077.call(null,cljs.core.rest.call(null,s__22078__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,(9)));
})()], null);
});
tictactoe.core.reset_game = (function tictactoe$core$reset_game(){
cljs.core.reset_BANG_.call(null,tictactoe.core.board,cljs.core.vec.call(null,cljs.core.repeat.call(null,(9),null)));

cljs.core.reset_BANG_.call(null,tictactoe.core.current_player,"X");

return cljs.core.reset_BANG_.call(null,tictactoe.core.winner,null);
});
tictactoe.core.app = (function tictactoe$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Tic-Tac-Toe"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.board_component], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tictactoe.core.winner),new cljs.core.Keyword(null,"draw","draw",1358331674)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw","div.draw",279333708),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"It's a draw!"], null)], null):(cljs.core.truth_(cljs.core.deref.call(null,tictactoe.core.winner))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.winner","div.winner",-795149627),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Winner: ",cljs.core.deref.call(null,tictactoe.core.winner)], null)], null):null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tictactoe.core.reset_game], null),"Restart Game"], null)], null);
});
tictactoe.core.start = (function tictactoe$core$start(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.app], null),document.getElementById("app"));
});
tictactoe.core.init = (function tictactoe$core$init(){
return tictactoe.core.start.call(null);
});
tictactoe.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1745338640923
