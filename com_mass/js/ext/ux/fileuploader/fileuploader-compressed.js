var qq=qq||{};
qq.extend=function(_1,_2){
for(var _3 in _2){
_1[_3]=_2[_3];
}
};
qq.indexOf=function(_4,_5,_6){
if(_4.indexOf){
return _4.indexOf(_5,_6);
}
_6=_6||0;
var _7=_4.length;
if(_6<0){
_6+=_7;
}
for(;_6<_7;_6++){
if(_6 in _4&&_4[_6]===_5){
return _6;
}
}
return -1;
};
qq.getUniqueId=(function(){
var id=0;
return function(){
return id++;
};
})();
qq.attach=function(_8,_9,fn){
if(_8.addEventListener){
_8.addEventListener(_9,fn,false);
}else{
if(_8.attachEvent){
_8.attachEvent("on"+_9,fn);
}
}
};
qq.detach=function(_a,_b,fn){
if(_a.removeEventListener){
_a.removeEventListener(_b,fn,false);
}else{
if(_a.attachEvent){
_a.detachEvent("on"+_b,fn);
}
}
};
qq.preventDefault=function(e){
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
};
qq.insertBefore=function(a,b){
b.parentNode.insertBefore(a,b);
};
qq.remove=function(_c){
_c.parentNode.removeChild(_c);
};
qq.contains=function(_d,_e){
if(_d==_e){
return true;
}
if(_d.contains){
return _d.contains(_e);
}else{
return !!(_e.compareDocumentPosition(_d)&8);
}
};
qq.toElement=(function(){
var _f=document.createElement("div");
return function(_10){
_f.innerHTML=_10;
var _11=_f.firstChild;
_f.removeChild(_11);
return _11;
};
})();
qq.css=function(_12,_13){
if(_13.opacity!=null){
if(typeof _12.style.opacity!="string"&&typeof (_12.filters)!="undefined"){
_13.filter="alpha(opacity="+Math.round(100*_13.opacity)+")";
}
}
qq.extend(_12.style,_13);
};
qq.hasClass=function(_14,_15){
var re=new RegExp("(^| )"+_15+"( |$)");
return re.test(_14.className);
};
qq.addClass=function(_16,_17){
if(!qq.hasClass(_16,_17)){
_16.className+=" "+_17;
}
};
qq.removeClass=function(_18,_19){
var re=new RegExp("(^| )"+_19+"( |$)");
_18.className=_18.className.replace(re," ").replace(/^\s+|\s+$/g,"");
};
qq.setText=function(_1a,_1b){
_1a.innerText=_1b;
_1a.textContent=_1b;
};
qq.children=function(_1c){
var _1d=[],_1e=_1c.firstChild;
while(_1e){
if(_1e.nodeType==1){
_1d.push(_1e);
}
_1e=_1e.nextSibling;
}
return _1d;
};
qq.getByClass=function(_1f,_20){
if(_1f.querySelectorAll){
return _1f.querySelectorAll("."+_20);
}
var _21=[];
var _22=_1f.getElementsByTagName("*");
var len=_22.length;
for(var i=0;i<len;i++){
if(qq.hasClass(_22[i],_20)){
_21.push(_22[i]);
}
}
return _21;
};
qq.obj2url=function(obj,_23,_24){
var _25=[],_26="&",add=function(_27,i){
var _28=_23?(/\[\]$/.test(_23))?_23:_23+"["+i+"]":i;
if((_28!="undefined")&&(i!="undefined")){
_25.push((typeof _27==="object")?qq.obj2url(_27,_28,true):(Object.prototype.toString.call(_27)==="[object Function]")?encodeURIComponent(_28)+"="+encodeURIComponent(_27()):encodeURIComponent(_28)+"="+encodeURIComponent(_27));
}
};
if(!_24&&_23){
_26=(/\?/.test(_23))?(/\?$/.test(_23))?"":"&":"?";
_25.push(_23);
_25.push(qq.obj2url(obj));
}else{
if((Object.prototype.toString.call(obj)==="[object Array]")&&(typeof obj!="undefined")){
for(var i=0,len=obj.length;i<len;++i){
add(obj[i],i);
}
}else{
if((typeof obj!="undefined")&&(obj!==null)&&(typeof obj==="object")){
for(var i in obj){
add(obj[i],i);
}
}else{
_25.push(encodeURIComponent(_23)+"="+encodeURIComponent(obj));
}
}
}
return _25.join(_26).replace(/^&/,"").replace(/%20/g,"+");
};
var qq=qq||{};
qq.FileUploaderToolbar=function(o){
this._options={debug:false,action:"/server/upload",params:{},button:null,multiple:true,maxConnections:3,allowedExtensions:[],sizeLimit:0,minSizeLimit:0,onSubmit:function(id,_29){
},onProgress:function(id,_2a,_2b,_2c){
},onComplete:function(id,_2d,_2e){
},onCancel:function(id,_2f){
},onDelete:function(id,_30){
},messages:{typeError:"{file} has invalid extension. Only {extensions} are allowed.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",onLeave:"The files are being uploaded, if you leave now the upload will be cancelled."},showMessage:function(_31){
alert(_31);
}};
qq.extend(this._options,o);
this._filesInProgress=0;
this._handler=this._createUploadHandler();
if(this._options.button){
this._button=this._createUploadButton(this._options.button);
}
this._preventLeaveInProgress();
};
qq.FileUploaderBasic=function(o){
this._options={debug:false,action:"/server/upload",params:{},button:null,multiple:true,maxConnections:3,allowedExtensions:[],sizeLimit:0,minSizeLimit:0,onSubmit:function(id,_32){
},onProgress:function(id,_33,_34,_35){
},onComplete:function(id,_36,_37){
},onCancel:function(id,_38){
},onDelete:function(id,_39){
},messages:{typeError:"{file} has invalid extension. Only {extensions} are allowed.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",onLeave:"The files are being uploaded, if you leave now the upload will be cancelled."},showMessage:function(_3a){
alert(_3a);
}};
qq.extend(this._options,o);
this._filesInProgress=0;
this._handler=this._createUploadHandler();
if(this._options.button){
this._button=this._createUploadButton(this._options.button);
}
this._preventLeaveInProgress();
};
qq.FileUploaderBasic.prototype={setREQAID:function(_3b){
this._options.reqa_id=_3b;
},setParams:function(_3c){
this._options.params=_3c;
},getInProgress:function(){
return this._filesInProgress;
},_createUploadButton:function(_3d){
var _3e=this;
return new qq.UploadButton({element:_3d,multiple:this._options.multiple&&qq.UploadHandlerXhr.isSupported(),onChange:function(_3f){
_3e._onInputChange(_3f);
}});
},_createUploadHandler:function(){
var _40=this,_41;
if(qq.UploadHandlerXhr.isSupported()){
_41="UploadHandlerXhr";
}else{
_41="UploadHandlerForm";
}
var _42=new qq[_41]({debug:this._options.debug,action:this._options.action,maxConnections:this._options.maxConnections,onProgress:function(id,_43,_44,_45){
_40._onProgress(id,_43,_44,_45);
_40._options.onProgress(id,_43,_44,_45);
},onComplete:function(id,_46,_47){
_40._onComplete(id,_46,_47);
_40._options.onComplete(id,_46,_47);
},onCancel:function(id,_48){
_40._onCancel(id,_48);
_40._options.onCancel(id,_48);
},onDelete:function(id,_49){
_40._onDelete(id,_49);
_40._options.onDelete(id,_49);
}});
return _42;
},_preventLeaveInProgress:function(){
var _4a=this;
qq.attach(window,"beforeunload",function(e){
if(!_4a._filesInProgress){
return;
}
var e=e||window.event;
e.returnValue=_4a._options.messages.onLeave;
return _4a._options.messages.onLeave;
});
},_onSubmit:function(id,_4b){
this._filesInProgress++;
},_onProgress:function(id,_4c,_4d,_4e){
},_onComplete:function(id,_4f,_50){
this._filesInProgress--;
if(_50.error){
this._options.showMessage(_50.error);
}
},_onCancel:function(id,_51){
this._filesInProgress--;
},_onDelete:function(id,_52){
},_onInputChange:function(_53){
if(this._handler instanceof qq.UploadHandlerXhr){
this._uploadFileList(_53.files);
}else{
if(this._validateFile(_53)){
this._uploadFile(_53);
}
}
this._button.reset();
},_uploadFileList:function(_54){
for(var i=0;i<_54.length;i++){
if(!this._validateFile(_54[i])){
return;
}
}
for(var i=0;i<_54.length;i++){
this._uploadFile(_54[i]);
}
},_uploadFile:function(_55){
var id=this._handler.add(_55);
var _56=this._handler.getName(id);
if(this._options.onSubmit(id,_56)!==false){
this._onSubmit(id,_56);
this._handler.upload(id,this._options.params);
}
},_validateFile:function(_57){
var _58,_59;
if(_57.value){
_58=_57.value.replace(/.*(\/|\\)/,"");
}else{
_58=_57.fileName!=null?_57.fileName:_57.name;
_59=_57.fileSize!=null?_57.fileSize:_57.size;
}
if(!this._isAllowedExtension(_58)){
this._error("typeError",_58);
return false;
}else{
if(_59===0){
this._error("emptyError",_58);
return false;
}else{
if(_59&&this._options.sizeLimit&&_59>this._options.sizeLimit){
this._error("sizeError",_58);
return false;
}else{
if(_59&&_59<this._options.minSizeLimit){
this._error("minSizeError",_58);
return false;
}
}
}
}
return true;
},_error:function(_5a,_5b){
var _5c=this._options.messages[_5a];
function r(_5d,_5e){
_5c=_5c.replace(_5d,_5e);
};
r("{file}",this._formatFileName(_5b));
r("{extensions}",this._options.allowedExtensions.join(", "));
r("{sizeLimit}",this._formatSize(this._options.sizeLimit));
r("{minSizeLimit}",this._formatSize(this._options.minSizeLimit));
this._options.showMessage(_5c);
},_formatFileName:function(_5f){
if(_5f.length>33){
_5f=_5f.slice(0,19)+"..."+_5f.slice(-13);
}
return _5f;
},_isAllowedExtension:function(_60){
var ext=(-1!==_60.indexOf("."))?_60.replace(/.*[.]/,"").toLowerCase():"";
var _61=this._options.allowedExtensions;
if(!_61.length){
return true;
}
for(var i=0;i<_61.length;i++){
if(_61[i].toLowerCase()==ext){
return true;
}
}
return false;
},_formatSize:function(_62){
var i=-1;
do{
_62=_62/1024;
i++;
}while(_62>99);
return Math.max(_62,0.1).toFixed(1)+["kB","MB","GB","TB","PB","EB"][i];
},setAction:function(_63){
this._options.action=_63;
}};
qq.FileUploader=function(o){
qq.FileUploaderBasic.apply(this,arguments);
qq.extend(this._options,{element:null,listElement:null,template:"<div class=\"qq-uploader\">"+"<div class=\"qq-upload-drop-area\"><span>Drop files here to upload</span></div>"+"<div class=\"qq-upload-button\"><div class=\"x-btn-t1\">Browse</div></div>"+"<div class=\"qq-upload-list\"></div>"+"</div>",fileTemplate:"<div>"+"<span class=\"qq-upload-file\"></span>"+"<span class=\"qq-upload-spinner\"></span>"+"<span class=\"qq-upload-size\"></span>"+"<a class=\"qq-upload-cancel\" href=\"#\">Cancel</a>"+"<a class=\"qq-upload-delete\" href=\"#\">Delete</a>"+"<span class=\"qq-upload-failed-text\">Failed</span>"+"</div>",classes:{button:"qq-upload-button",drop:"qq-upload-drop-area",dropActive:"qq-upload-drop-area-active",list:"qq-upload-list",file:"qq-upload-file",spinner:"qq-upload-spinner",size:"qq-upload-size",cancel:"qq-upload-cancel",deleteFile:"qq-upload-delete",success:"qq-upload-success",fail:"qq-upload-fail"}});
qq.extend(this._options,o);
this._element=this._options.element;
this._element.innerHTML=this._options.template;
this._listElement=this._options.listElement||this._find(this._element,"list");
this._classes=this._options.classes;
this._button=this._createUploadButton(this._find(this._element,"button"));
this._bindCancelEvent();
this._bindDeleteEvent();
};
qq.extend(qq.FileUploader.prototype,qq.FileUploaderBasic.prototype);
qq.extend(qq.FileUploader.prototype,{_find:function(_64,_65){
var _66=qq.getByClass(_64,this._options.classes[_65])[0];
if(!_66){
throw new Error("element not found "+_65);
}
return _66;
},_setupDragDrop:function(){
var _67=this,_68=this._find(this._element,"drop");
var dz=new qq.UploadDropZone({element:_68,onEnter:function(e){
qq.addClass(_68,_67._classes.dropActive);
e.stopPropagation();
},onLeave:function(e){
e.stopPropagation();
},onLeaveNotDescendants:function(e){
qq.removeClass(_68,_67._classes.dropActive);
},onDrop:function(e){
_68.style.display="none";
qq.removeClass(_68,_67._classes.dropActive);
_67._uploadFileList(e.dataTransfer.files);
}});
_68.style.display="none";
qq.attach(document,"dragenter",function(e){
if(!dz._isValidFileDrag(e)){
return;
}
_68.style.display="block";
});
qq.attach(document,"dragleave",function(e){
if(!dz._isValidFileDrag(e)){
return;
}
var _69=document.elementFromPoint(e.clientX,e.clientY);
if(!_69||_69.nodeName=="HTML"){
_68.style.display="none";
}
});
},_onDelete:function(id,_6a){
qq.FileUploaderBasic.prototype._onDelete.apply(this,arguments);
},_onSubmit:function(id,_6b){
qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments);
this._addToList(id,_6b);
},_onProgress:function(id,_6c,_6d,_6e){
qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);
var _6f=this._getItemByFileId(id);
var _70=this._find(_6f,"size");
_70.style.display="inline";
var _71=this._find(_6f,"deleteFile");
_71.style.display="none";
var _72;
if(_6d!=_6e){
_72=Math.round(_6d/_6e*100)+"% from "+this._formatSize(_6e);
}else{
_72=this._formatSize(_6e);
}
qq.setText(_70,_72);
},_onComplete:function(id,_73,_74){
var _75=this._getItemByFileId(id);
var _76=this._find(_75,"deleteFile");
_76.style.display="inline";
qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);
var _75=this._getItemByFileId(id);
qq.remove(this._find(_75,"cancel"));
qq.remove(this._find(_75,"spinner"));
if(_74.success){
qq.addClass(_75,this._classes.success);
}else{
qq.addClass(_75,this._classes.fail);
}
},_addToList:function(id,_77){
var _78=qq.toElement(this._options.fileTemplate);
_78.qqFileId=id;
var _79=this._find(_78,"file");
qq.setText(_79,this._formatFileName(_77));
this._find(_78,"size").style.display="none";
while(this._listElement.hasChildNodes()){
this._listElement.removeChild(this._listElement.lastChild);
}
this._listElement.appendChild(_78);
},_getItemByFileId:function(id){
var _7a=this._listElement.firstChild;
while(_7a){
if(_7a.qqFileId==id){
return _7a;
}
_7a=_7a.nextSibling;
}
},_bindCancelEvent:function(){
var _7b=this,_7c=this._listElement;
qq.attach(_7c,"click",function(e){
e=e||window.event;
var _7d=e.target||e.srcElement;
if(qq.hasClass(_7d,_7b._classes.cancel)){
qq.preventDefault(e);
var _7e=_7d.parentNode;
_7b._handler.cancel(_7e.qqFileId);
qq.remove(_7e);
}
});
},_bindDeleteEvent:function(){
var _7f=this,_80=this._listElement;
qq.attach(_80,"click",function(e){
e=e||window.event;
var _81=e.target||e.srcElement;
if(qq.hasClass(_81,_7f._classes.deleteFile)){
qq.preventDefault(e);
var _82=_81.parentNode;
_7f._handler.deleteFile(_82.qqFileId);
qq.remove(_82);
}
});
}});
qq.ToolbarFileUploader=function(o){
qq.FileUploader.apply(this,arguments);
qq.extend(this._options,{element:null,listElement:null,template:"<div class=\"qq-uploader\">"+"<div class=\"qq-upload-drop-area\"></div>"+"<div class=\"qq-upload-toolbarbutton\">Upload</div>"+"<div class=\"qq-upload-list\"></div>"+"</div>",fileTemplate:"<div>"+"<span class=\"qq-upload-file\"></span>"+"<span class=\"qq-upload-spinner\"></span>"+"<span class=\"qq-upload-size\"></span>"+"<a class=\"qq-upload-cancel\" href=\"#\">Cancel</a>"+"<a class=\"qq-upload-delete\" href=\"#\">Delete</a>"+"<span class=\"qq-upload-failed-text\">Failed</span>"+"</div>",classes:{button:"qq-upload-toolbarbutton",drop:"qq-upload-drop-area",dropActive:"qq-upload-drop-area-active",list:"qq-upload-list",file:"qq-upload-file",spinner:"qq-upload-spinner",size:"qq-upload-size",cancel:"qq-upload-cancel",deleteFile:"qq-upload-delete",success:"qq-upload-success",fail:"qq-upload-fail"}});
qq.extend(this._options,o);
this._element=this._options.element;
this._element.innerHTML=this._options.template;
this._listElement=this._options.listElement||this._find(this._element,"list");
this._classes=this._options.classes;
this._button=this._createUploadButton(this._find(this._element,"button"));
this._bindCancelEvent();
this._bindDeleteEvent();
};
qq.extend(qq.ToolbarFileUploader.prototype,qq.FileUploader.prototype);
qq.UploadDropZone=function(o){
this._options={element:null,onEnter:function(e){
},onLeave:function(e){
},onLeaveNotDescendants:function(e){
},onDrop:function(e){
}};
qq.extend(this._options,o);
this._element=this._options.element;
this._disableDropOutside();
this._attachEvents();
};
qq.UploadDropZone.prototype={_disableDropOutside:function(e){
if(!qq.UploadDropZone.dropOutsideDisabled){
qq.attach(document,"dragover",function(e){
if(e.dataTransfer){
e.dataTransfer.dropEffect="none";
e.preventDefault();
}
});
qq.UploadDropZone.dropOutsideDisabled=true;
}
},_attachEvents:function(){
var _83=this;
qq.attach(_83._element,"dragover",function(e){
if(!_83._isValidFileDrag(e)){
return;
}
var _84=e.dataTransfer.effectAllowed;
if(_84=="move"||_84=="linkMove"){
e.dataTransfer.dropEffect="move";
}else{
e.dataTransfer.dropEffect="copy";
}
e.stopPropagation();
e.preventDefault();
});
qq.attach(_83._element,"dragenter",function(e){
if(!_83._isValidFileDrag(e)){
return;
}
_83._options.onEnter(e);
});
qq.attach(_83._element,"dragleave",function(e){
if(!_83._isValidFileDrag(e)){
return;
}
_83._options.onLeave(e);
var _85=document.elementFromPoint(e.clientX,e.clientY);
if(qq.contains(this,_85)){
return;
}
_83._options.onLeaveNotDescendants(e);
});
qq.attach(_83._element,"drop",function(e){
if(!_83._isValidFileDrag(e)){
return;
}
e.preventDefault();
_83._options.onDrop(e);
});
},_isValidFileDrag:function(e){
var dt=e.dataTransfer,_86=navigator.userAgent.indexOf("AppleWebKit")>-1;
return dt&&dt.effectAllowed!="none"&&(dt.files||(!_86&&dt.types.contains&&dt.types.contains("Files")));
}};
qq.UploadButton=function(o){
this._options={element:null,multiple:false,name:"file",onChange:function(_87){
},hoverClass:"qq-upload-button-hover",focusClass:"qq-upload-button-focus"};
qq.extend(this._options,o);
this._element=this._options.element;
qq.css(this._element,{position:"relative",overflow:"hidden",direction:"ltr"});
this._input=this._createInput();
};
qq.UploadButton.prototype={getInput:function(){
return this._input;
},reset:function(){
if(this._input.parentNode){
qq.remove(this._input);
}
qq.removeClass(this._element,this._options.focusClass);
this._input=this._createInput();
},_createInput:function(){
var _88=document.createElement("input");
if(this._options.multiple){
_88.setAttribute("multiple","multiple");
}
_88.setAttribute("type","file");
_88.setAttribute("name",this._options.name);
qq.css(_88,{position:"absolute",right:0,top:0,fontFamily:"Arial",fontSize:"118px",margin:0,padding:0,cursor:"pointer",opacity:0});
this._element.appendChild(_88);
var _89=this;
qq.attach(_88,"change",function(){
_89._options.onChange(_88);
});
qq.attach(_88,"mouseover",function(){
qq.addClass(_89._element,_89._options.hoverClass);
});
qq.attach(_88,"mouseout",function(){
qq.removeClass(_89._element,_89._options.hoverClass);
});
qq.attach(_88,"focus",function(){
qq.addClass(_89._element,_89._options.focusClass);
});
qq.attach(_88,"blur",function(){
qq.removeClass(_89._element,_89._options.focusClass);
});
if(window.attachEvent){
_88.setAttribute("tabIndex","-1");
}
return _88;
}};
qq.UploadHandlerAbstract=function(o){
this._options={debug:false,action:"/upload.php",maxConnections:999,onProgress:function(id,_8a,_8b,_8c){
},onComplete:function(id,_8d,_8e){
},onCancel:function(id,_8f){
},onDelete:function(id,_90){
}};
qq.extend(this._options,o);
this._queue=[];
this._params=[];
};
qq.UploadHandlerAbstract.prototype={log:function(str){
if(this._options.debug&&window.console){
console.log("[uploader] "+str);
}
},add:function(_91){
},upload:function(id,_92,_93){
var len=this._queue.push(id);
var _94={};
qq.extend(_94,_92);
this._params[id]=_94;
if(len<=this._options.maxConnections){
this._upload(id,this._params[id]);
}
},deleteFile:function(id){
this._deleteFile(id);
},cancel:function(id){
this._cancel(id);
this._dequeue(id);
},cancelAll:function(){
for(var i=0;i<this._queue.length;i++){
this._cancel(this._queue[i]);
}
this._queue=[];
},getName:function(id){
},getSize:function(id){
},getQueue:function(){
return this._queue;
},_upload:function(id){
},_cancel:function(id){
},_deleteFile:function(id){
},_dequeue:function(id){
var i=qq.indexOf(this._queue,id);
this._queue.splice(i,1);
var max=this._options.maxConnections;
if(this._queue.length>=max){
var _95=this._queue[max-1];
this._upload(_95,this._params[_95]);
}
}};
qq.UploadHandlerForm=function(o){
qq.UploadHandlerAbstract.apply(this,arguments);
this._inputs={};
};
qq.extend(qq.UploadHandlerForm.prototype,qq.UploadHandlerAbstract.prototype);
qq.extend(qq.UploadHandlerForm.prototype,{add:function(_96){
_96.setAttribute("name","qqfile");
var id="qq-upload-handler-iframe"+qq.getUniqueId();
this._inputs[id]=_96;
if(_96.parentNode){
qq.remove(_96);
}
return id;
},getName:function(id){
return this._inputs[id].value.replace(/.*(\/|\\)/,"");
},_deleteFile:function(id){
alert("here");
this._options.onDelete(id,this.getName(id));
delete this._inputs[id];
var _97=document.getElementById(id);
if(_97){
_97.setAttribute("src","javascript:false;");
qq.remove(_97);
}
alert("Deleted");
},_cancel:function(id){
this._options.onCancel(id,this.getName(id));
delete this._inputs[id];
var _98=document.getElementById(id);
if(_98){
_98.setAttribute("src","javascript:false;");
qq.remove(_98);
}
},_upload:function(id,_99){
var _9a=this._inputs[id];
if(!_9a){
throw new Error("file with passed id was not added, or already uploaded or cancelled");
}
var _9b=this.getName(id);
var _9c=this._createIframe(id);
var _9d=this._createForm(_9c,_99);
_9d.appendChild(_9a);
var _9e=this;
this._attachLoadEvent(_9c,function(){
_9e.log("iframe loaded");
var _9f=_9e._getIframeContentJSON(_9c);
_9e._options.onComplete(id,_9b,_9f);
_9e._dequeue(id);
delete _9e._inputs[id];
setTimeout(function(){
qq.remove(_9c);
},1);
});
_9d.submit();
qq.remove(_9d);
return id;
},_attachLoadEvent:function(_a0,_a1){
qq.attach(_a0,"load",function(){
if(!_a0.parentNode){
return;
}
if(_a0.contentDocument&&_a0.contentDocument.body&&_a0.contentDocument.body.innerHTML=="false"){
return;
}
_a1();
});
},_getIframeContentJSON:function(_a2){
var doc=_a2.contentDocument?_a2.contentDocument:_a2.contentWindow.document,_a3;
this.log("converting iframe's innerHTML to JSON");
this.log("innerHTML = "+doc.body.innerHTML);
try{
_a3=eval("("+doc.body.innerHTML+")");
}
catch(err){
_a3={};
}
return _a3;
},_createIframe:function(id){
var _a4=qq.toElement("<iframe src=\"javascript:false;\" name=\""+id+"\" />");
_a4.setAttribute("id",id);
_a4.style.display="none";
document.body.appendChild(_a4);
return _a4;
},_createForm:function(_a5,_a6){
var _a7=qq.toElement("<form method=\"post\" enctype=\"multipart/form-data\"></form>");
var _a8=qq.obj2url(_a6,this._options.action);
_a7.setAttribute("action",_a8);
_a7.setAttribute("target",_a5.name);
_a7.style.display="none";
document.body.appendChild(_a7);
return _a7;
}});
qq.UploadHandlerXhr=function(o){
qq.UploadHandlerAbstract.apply(this,arguments);
this._files=[];
this._xhrs=[];
this._loaded=[];
};
qq.UploadHandlerXhr.isSupported=function(){
var _a9=document.createElement("input");
_a9.type="file";
return ("multiple" in _a9&&typeof File!="undefined"&&typeof (new XMLHttpRequest()).upload!="undefined");
};
qq.extend(qq.UploadHandlerXhr.prototype,qq.UploadHandlerAbstract.prototype);
qq.extend(qq.UploadHandlerXhr.prototype,{add:function(_aa){
if(!(_aa instanceof File)){
throw new Error("Passed obj in not a File (in qq.UploadHandlerXhr)");
}
return this._files.push(_aa)-1;
},getName:function(id){
var _ab=this._files[id];
return _ab.fileName!=null?_ab.fileName:_ab.name;
},getSize:function(id){
var _ac=this._files[id];
return _ac.fileSize!=null?_ac.fileSize:_ac.size;
},getLoaded:function(id){
return this._loaded[id]||0;
},_upload:function(id,_ad){
var _ae=this._files[id],_af=this.getName(id),_b0=this.getSize(id);
this._loaded[id]=0;
var xhr=this._xhrs[id]=new XMLHttpRequest();
var _b1=this;
xhr.upload.onprogress=function(e){
if(e.lengthComputable){
_b1._loaded[id]=e.loaded;
_b1._options.onProgress(id,_af,e.loaded,e.total);
}
};
xhr.onreadystatechange=function(){
if(xhr.readyState==4){
_b1._onComplete(id,xhr);
}
};
_ad=_ad||{};
_ad["qqfile"]=_af;
var _b2=qq.obj2url(_ad,this._options.action);
xhr.open("POST",_b2,true);
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
xhr.setRequestHeader("X-File-Name",encodeURIComponent(_af));
xhr.setRequestHeader("Content-Type","application/octet-stream");
xhr.send(_ae);
},_onComplete:function(id,xhr){
if(!this._files[id]){
return;
}
var _b3=this.getName(id);
var _b4=this.getSize(id);
this._options.onProgress(id,_b3,_b4,_b4);
if(xhr.status==200){
this.log("xhr - server response received");
this.log("responseText = "+xhr.responseText);
var _b5;
try{
_b5=eval("("+xhr.responseText+")");
}
catch(err){
_b5={};
}
this._options.onComplete(id,_b3,_b5);
}else{
this._options.onComplete(id,_b3,{});
}
this._files[id]=null;
this._xhrs[id]=null;
this._dequeue(id);
},_deleteFile:function(id){
this._options.onDelete(id,"");
this._files[id]=null;
},_cancel:function(id){
this._options.onCancel(id,this.getName(id));
this._files[id]=null;
if(this._xhrs[id]){
this._xhrs[id].abort();
this._xhrs[id]=null;
}
}});

