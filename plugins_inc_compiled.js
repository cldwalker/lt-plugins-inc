if(!lt.util.load.provided_QMARK_('lt.plugins.plugins-inc')) {
goog.provide('lt.plugins.plugins_inc');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.settings');
goog.require('lt.objs.app');
goog.require('clojure.string');
goog.require('lt.objs.deploy');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.command');
goog.require('lt.objs.deploy');
lt.plugins.plugins_inc.plugins_file = lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null,"settings"),"plugins.edn");
lt.plugins.plugins_inc.validate_plugins = (function validate_plugins(plugins){if(cljs.core.every_QMARK_.call(null,(function (p1__8189_SHARP_){return cljs.core.every_QMARK_.call(null,p1__8189_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"version","version",1365512266),null,new cljs.core.Keyword(null,"source","source",4412365709),null], null), null));
}),plugins))
{return plugins;
} else
{return lt.objs.console.error.call(null,"plugins.edn is invalid. All plugins must have :name, :version and :source");
}
});
lt.plugins.plugins_inc.read_plugins = (function read_plugins(file){return lt.plugins.plugins_inc.validate_plugins.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)),file));
});
lt.plugins.plugins_inc.update_plugins = (function update_plugins(){var existing_plugins = new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app));var outdated_plugins = cljs.core.filter.call(null,((function (existing_plugins){
return (function (p1__8190_SHARP_){var temp__4090__auto__ = cljs.core.get_in.call(null,existing_plugins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8190_SHARP_),new cljs.core.Keyword(null,"version","version",1365512266)], null));if(cljs.core.truth_(temp__4090__auto__))
{var old_version = temp__4090__auto__;return lt.objs.deploy.is_newer_QMARK_.call(null,old_version,new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(p1__8190_SHARP_));
} else
{return true;
}
});})(existing_plugins))
,lt.plugins.plugins_inc.read_plugins.call(null,lt.plugins.plugins_inc.plugins_file));if(cljs.core.empty_QMARK_.call(null,outdated_plugins))
{return lt.objs.notifos.set_msg_BANG_.call(null,"No plugins to update.");
} else
{var seq__8195_8210 = cljs.core.seq.call(null,outdated_plugins);var chunk__8196_8211 = null;var count__8197_8212 = 0;var i__8198_8213 = 0;while(true){
if((i__8198_8213 < count__8197_8212))
{var p_8214 = cljs.core._nth.call(null,chunk__8196_8211,i__8198_8213);lt.objs.plugins.discover_deps.call(null,p_8214);
{
var G__8215 = seq__8195_8210;
var G__8216 = chunk__8196_8211;
var G__8217 = count__8197_8212;
var G__8218 = (i__8198_8213 + 1);
seq__8195_8210 = G__8215;
chunk__8196_8211 = G__8216;
count__8197_8212 = G__8217;
i__8198_8213 = G__8218;
continue;
}
} else
{var temp__4092__auto___8219 = cljs.core.seq.call(null,seq__8195_8210);if(temp__4092__auto___8219)
{var seq__8195_8220__$1 = temp__4092__auto___8219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8195_8220__$1))
{var c__7485__auto___8221 = cljs.core.chunk_first.call(null,seq__8195_8220__$1);{
var G__8222 = cljs.core.chunk_rest.call(null,seq__8195_8220__$1);
var G__8223 = c__7485__auto___8221;
var G__8224 = cljs.core.count.call(null,c__7485__auto___8221);
var G__8225 = 0;
seq__8195_8210 = G__8222;
chunk__8196_8211 = G__8223;
count__8197_8212 = G__8224;
i__8198_8213 = G__8225;
continue;
}
} else
{var p_8226 = cljs.core.first.call(null,seq__8195_8220__$1);lt.objs.plugins.discover_deps.call(null,p_8226);
{
var G__8227 = cljs.core.next.call(null,seq__8195_8220__$1);
var G__8228 = null;
var G__8229 = 0;
var G__8230 = 0;
seq__8195_8210 = G__8227;
chunk__8196_8211 = G__8228;
count__8197_8212 = G__8229;
i__8198_8213 = G__8230;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.notifos.set_msg_BANG_.call(null,"Plugins have been updated.");
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.plugins-inc","update-plugins","lt.plugins.plugins-inc/update-plugins",3537532994),new cljs.core.Keyword(null,"desc","desc",1016984067),"plugins-inc: Update plugins from plugins.edn",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.plugins_inc.update_plugins], null));
lt.plugins.plugins_inc.save_plugins = (function save_plugins(){var plugins_str_8231 = cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__8199_SHARP_){return cljs.core.select_keys.call(null,p1__8199_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"version","version",1365512266),new cljs.core.Keyword(null,"source","source",4412365709)], null));
}),cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app))))));lt.objs.files.save.call(null,lt.plugins.plugins_inc.plugins_file,clojure.string.replace.call(null,plugins_str_8231,/\}\s*\{/,"}\n {"));
return lt.objs.notifos.set_msg_BANG_.call(null,"Plugins saved to plugins.edn.");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.plugins-inc","save-plugins","lt.plugins.plugins-inc/save-plugins",4742107022),new cljs.core.Keyword(null,"desc","desc",1016984067),"plugins-inc: Save plugins to plugins.edn",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.plugins_inc.save_plugins], null));
}

//# sourceMappingURL=plugins_inc_compiled.js.map