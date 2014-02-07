if(!lt.util.load.provided_QMARK_('lt.plugins.plugins-inc')) {
goog.provide('lt.plugins.plugins_inc');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.app');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.plugins_inc.hello_panel = (function hello_panel(this$){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from plugins-inc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.appl)))))], null)], null));var seq__9303_9310 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9304_9311 = null;var count__9305_9312 = 0;var i__9306_9313 = 0;while(true){
if((i__9306_9313 < count__9305_9312))
{var vec__9307_9314 = cljs.core._nth.call(null,chunk__9304_9311,i__9306_9313);var ev__8100__auto___9315 = cljs.core.nth.call(null,vec__9307_9314,0,null);var func__8101__auto___9316 = cljs.core.nth.call(null,vec__9307_9314,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___9315,func__8101__auto___9316);
{
var G__9317 = seq__9303_9310;
var G__9318 = chunk__9304_9311;
var G__9319 = count__9305_9312;
var G__9320 = (i__9306_9313 + 1);
seq__9303_9310 = G__9317;
chunk__9304_9311 = G__9318;
count__9305_9312 = G__9319;
i__9306_9313 = G__9320;
continue;
}
} else
{var temp__4092__auto___9321 = cljs.core.seq.call(null,seq__9303_9310);if(temp__4092__auto___9321)
{var seq__9303_9322__$1 = temp__4092__auto___9321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9303_9322__$1))
{var c__7485__auto___9323 = cljs.core.chunk_first.call(null,seq__9303_9322__$1);{
var G__9324 = cljs.core.chunk_rest.call(null,seq__9303_9322__$1);
var G__9325 = c__7485__auto___9323;
var G__9326 = cljs.core.count.call(null,c__7485__auto___9323);
var G__9327 = 0;
seq__9303_9310 = G__9324;
chunk__9304_9311 = G__9325;
count__9305_9312 = G__9326;
i__9306_9313 = G__9327;
continue;
}
} else
{var vec__9308_9328 = cljs.core.first.call(null,seq__9303_9322__$1);var ev__8100__auto___9329 = cljs.core.nth.call(null,vec__9308_9328,0,null);var func__8101__auto___9330 = cljs.core.nth.call(null,vec__9308_9328,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___9329,func__8101__auto___9330);
{
var G__9331 = cljs.core.next.call(null,seq__9303_9322__$1);
var G__9332 = null;
var G__9333 = 0;
var G__9334 = 0;
seq__9303_9310 = G__9331;
chunk__9304_9311 = G__9332;
count__9305_9312 = G__9333;
i__9306_9313 = G__9334;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.plugins-inc","plugins-inc.hello","lt.plugins.plugins-inc/plugins-inc.hello",2515996937),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugins-inc.hello","plugins-inc.hello",3553166407)], null),new cljs.core.Keyword(null,"name","name",1017277949),"plugins-inc",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.plugins_inc.hello_panel.call(null,this$);
}));
lt.plugins.plugins_inc.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9335 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9335))
{var ts_9336 = temp__4092__auto___9335;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9336))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9336);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.plugins-inc","on-close-destroy","lt.plugins.plugins-inc/on-close-destroy",4300010539),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.plugins_inc.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.plugins_inc.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.plugins-inc","plugins-inc.hello","lt.plugins.plugins-inc/plugins-inc.hello",2515996937));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.plugins-inc","say-hello","lt.plugins.plugins-inc/say-hello",3333425774),new cljs.core.Keyword(null,"desc","desc",1016984067),"plugins-inc: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.plugins_inc.hello);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.plugins-inc","save-plugins","lt.plugins.plugins-inc/save-plugins",4742107022),new cljs.core.Keyword(null,"desc","desc",1016984067),"plugins-inc: Save Plugins",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.files.save.call(null,lt.objs.files.join.call(null,lt.objs.plugins.user_plugins_dir,"plugins.edn"),cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__9309_SHARP_){return cljs.core.select_keys.call(null,p1__9309_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"source","source",4412365709)], null));
}),cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app)))))));
return lt.objs.notifos.working.call(null,"Plugins saved to plugins.edn.");
})], null));
}

//# sourceMappingURL=plugins_inc_compiled.js.map