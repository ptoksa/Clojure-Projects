// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('calculator.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof calculator !== 'undefined') && (typeof calculator.core !== 'undefined') && (typeof calculator.core.state !== 'undefined')){
} else {
calculator.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input1","input1",-987904984),"",new cljs.core.Keyword(null,"input2","input2",-403997100),"",new cljs.core.Keyword(null,"op","op",-1882987955),"+",new cljs.core.Keyword(null,"result","result",1415092211),null], null));
}
calculator.core.parse_num = (function calculator$core$parse_num(s){
return parseFloat(s);
});
calculator.core.calculate = (function calculator$core$calculate(p__35626){
var map__35627 = p__35626;
var map__35627__$1 = cljs.core.__destructure_map.call(null,map__35627);
var input1 = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"input1","input1",-987904984));
var input2 = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"input2","input2",-403997100));
var op = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var n1 = calculator.core.parse_num.call(null,input1);
var n2 = calculator.core.parse_num.call(null,input2);
var G__35628 = op;
switch (G__35628) {
case "+":
return (n1 + n2);

break;
case "-":
return (n1 - n2);

break;
case "*":
return (n1 * n2);

break;
case "/":
if((n2 === (0))){
return "Error: /0";
} else {
return (n1 / n2);
}

break;
default:
return "Invalid op";

}
});
calculator.core.calculator_ui = (function calculator$core$calculator_ui(){
var map__35633 = cljs.core.deref.call(null,calculator.core.state);
var map__35633__$1 = cljs.core.__destructure_map.call(null,map__35633);
var input1 = cljs.core.get.call(null,map__35633__$1,new cljs.core.Keyword(null,"input1","input1",-987904984));
var input2 = cljs.core.get.call(null,map__35633__$1,new cljs.core.Keyword(null,"input2","input2",-403997100));
var op = cljs.core.get.call(null,map__35633__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var result = cljs.core.get.call(null,map__35633__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Simple Calculator"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"First number",new cljs.core.Keyword(null,"value","value",305978217),input1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35630_SHARP_){
return cljs.core.swap_BANG_.call(null,calculator.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"input1","input1",-987904984),p1__35630_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),op,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35631_SHARP_){
return cljs.core.swap_BANG_.call(null,calculator.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"op","op",-1882987955),p1__35631_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"+"], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"-"], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"*"], null),"*"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"/"], null),"/"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Second number",new cljs.core.Keyword(null,"value","value",305978217),input2,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35632_SHARP_){
return cljs.core.swap_BANG_.call(null,calculator.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"input2","input2",-403997100),p1__35632_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,calculator.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),calculator.core.calculate.call(null,cljs.core.deref.call(null,calculator.core.state)));
})], null),"="], null)], null),(cljs.core.truth_(result)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Result: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)], null)], null):null)], null);
});
calculator.core.start = (function calculator$core$start(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.core.calculator_ui], null),document.getElementById("app"));
});
calculator.core.init = (function calculator$core$init(){
return calculator.core.start.call(null);
});
calculator.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1744478084310
