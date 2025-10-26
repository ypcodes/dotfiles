(self.webpackChunk=self.webpackChunk||[]).push([[1045],{804520:function(e,t){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.DocType=void 0,(i={})[i.Doc=0]="Doc",i[i.Sheet=1]="Sheet",i[i.Form=2]="Form",i[i.Folder=3]="Folder",i[i.Slide=4]="Slide",i[i.Note=5]="Note",i[i.Pdf=6]="Pdf",i[i.MiniProgram=7]="MiniProgram",i[i.Aio=7]="Aio",i[i.SmartCanvas=8]="SmartCanvas",i[i.SmartSheet=9]="SmartSheet",i[i.Unknown=10]="Unknown",i[i.Resume=11]="Resume",i[i.Board=12]="Board",i[i.Ofd=13]="Ofd",i[i.Markdown=14]="Markdown",i[i.Drawing=89]="Drawing",i[i.Mind=90]="Mind",i[i.FlowChart=91]="FlowChart",i[i.Flowchart=91]="Flowchart",i[i.File=100]="File",i[i.Drive=101]="Drive",i[i.Rec=102]="Rec",i[i.Addon=110]="Addon",i[i.LocalFile=-201]="LocalFile",t.DocType=i},799087:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mindMimeTypes=t.flowChatMimeTypes=t.archiveMimeTypes=t.WordMimeTypes=t.VideoMimeTypes=t.TextMimeTypes=t.PowerPointMimeTypes=t.OfdMimeTypes=t.MarkdownMimeTypes=t.ImageMimeTypes=t.ExcelMimeTypes=t.CodeMimeTypes=t.AudioMimeTypes=void 0,t.WordMimeTypes=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/kswps","application/kswpt","application/vnd.openxmlformats-officedocument.wordprocessingml.template","application/vnd.ms-word.document.macroEnabled.12","application/vnd.ms-word.template.macroEnabled.12"],t.ExcelMimeTypes=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.spreadsheetml.template","text/csv","text/csv; charset=utf-8","application/vnd.ms-excel.sheet.binary.macroEnabled.12","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel.template.macroEnabled.12","application/kset","application/ksett"],t.PowerPointMimeTypes=["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.template","application/vnd.openxmlformats-officedocument.presentationml.slideshow","application/ksdps","application/ksdpt","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.template.macroEnabled.12","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],t.TextMimeTypes=["text/lrc","text/asp; charset=utf-8","application/x-msdownload","text/richtext; charset=utf-8","text/plain","text/plain; charset=utf-8","text/xml","text/html","text/html; charset=utf-8","text/markdown"],t.CodeMimeTypes=["text/x-c; charset=utf-8","text/x-c; charset=utf-8","text/x-chdr","text/x-asm; charset=utf-8","text/x-java-source; charset=utf-8","text/javascript","text/x-go"],t.ImageMimeTypes=["image/x-sony-arw","image/bmp","image/vnd.zbrush.pcx","image/x-pcx","image/tiff","image/gif","image/x-exif","image/exif","image/jpeg","image/vnd.fpx","image/svg+xml","image/vnd.adobe.photoshop","image/x-cdr","image/x-photo-cd","image/vnd.dxf","image/x-ufo","application/postscript","image/png","image/wmf","image/webp","image/x-tga"],t.AudioMimeTypes=["audio/mpeg","audio/aac","audio/x-flac","audio/amr","audio/AMR","audio/mp4","audio/x-ms-wma","audio/x-wav","audio/x-cd","audio/x-wave","audio/x-aiff","audio/midi","audio/x-realaudio","audio/realaudio","audio/x-twinvq","audio/oggvorbis","audio/ogg","audio/x-ape","audio/webm","audio/mpeg-4"],t.VideoMimeTypes=["video/mp4","video/3gpp","video/x-ms-asf","video/x-msvideo","video/dv","video/x-flv","video/x-f4v","application/vnd.apple.mpegurl","video/x-matroska","video/quicktime","video/mpeg","video/mp2t","application/vnd.rn-realmedia","audio/x-pn-realaudio","video/x-ms-wmv","video/dat","video/webm","video/x-ms-vob"],t.archiveMimeTypes=["application/zip","application/vnd.rar","application/x-rar-compressed","application/x-compress","application/x-7z-compressed"],t.flowChatMimeTypes=["application/vnd.ms-visio.drawing","application/x-visio","application/vnd.ms-visio.drawing.main+xml"],t.mindMimeTypes=["application/vnd.pos"],t.MarkdownMimeTypes=["application/vnd.tdocs-apps.markdown","text/markdown","text/markdown; charset=utf-8"],t.OfdMimeTypes=["application/vnd.tdocs-apps.ofd","application/ofd"]},720593:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocTypeFromExt=void 0;var n=i(804520),a={".docx":n.DocType.Doc,".doc":n.DocType.Doc,".wps":n.DocType.Doc,".wpt":n.DocType.Doc,".dot":n.DocType.Doc,".dotx":n.DocType.Doc,".docm":n.DocType.Doc,".dotm":n.DocType.Doc,".xls":n.DocType.Sheet,".xlm":n.DocType.Sheet,".xla":n.DocType.Sheet,".xlc":n.DocType.Sheet,".xlt":n.DocType.Sheet,".xlw":n.DocType.Sheet,".xlsx":n.DocType.Sheet,".xltx":n.DocType.Sheet,".csv":n.DocType.Sheet,".xlsb":n.DocType.Sheet,".xlsm":n.DocType.Sheet,".xltm":n.DocType.Sheet,".et":n.DocType.Sheet,".ett":n.DocType.Sheet,".pptx":n.DocType.Slide,".ppt":n.DocType.Slide,".pps":n.DocType.Slide,".pot":n.DocType.Slide,".potx":n.DocType.Slide,".ppsx":n.DocType.Slide,".dps":n.DocType.Slide,".dpt":n.DocType.Slide,".pptm":n.DocType.Slide,".potm":n.DocType.Slide,".ppsm":n.DocType.Slide,".vsdx":n.DocType.FlowChart,".vsd":n.DocType.FlowChart,".pos":n.DocType.Mind,".xmind":n.DocType.Mind,".pdf":n.DocType.Pdf,".md":n.DocType.Markdown,".markdown":n.DocType.Markdown};t.getDocTypeFromExt=function(e){return a[e.toLowerCase()]}},933887:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mimeTypeToExtMap=t.extToMimeTypeMap=void 0;var i,n={doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",wps:"application/kswps",wpt:"application/kswpt",dot:"application/msword",dotx:"application/vnd.openxmlformats-officedocument.wordprocessingml.template",docm:"application/vnd.ms-word.document.macroEnabled.12",dotm:"application/vnd.ms-word.template.macroEnabled.12",xls:"application/vnd.ms-excel",xlm:"application/vnd.ms-excel",xla:"application/vnd.ms-excel",xlc:"application/vnd.ms-excel",xlt:"application/vnd.ms-excel",xlw:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template",csv:"text/csv",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.12",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.12",xltm:"application/vnd.ms-excel.template.macroEnabled.12",et:"application/kset",ett:"application/ksett",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",ppt:"application/vnd.ms-powerpoint",pps:"application/vnd.ms-powerpoint",pot:"application/vnd.ms-powerpoint",potx:"application/vnd.openxmlformats-officedocument.presentationml.template",ppsx:"application/vnd.openxmlformats-officedocument.presentationml.slideshow",dps:"application/ksdps",dpt:"application/ksdpt",pptm:"application/vnd.ms-powerpoint.presentation.macroEnabled.12",potm:"application/vnd.ms-powerpoint.template.macroEnabled.12",ppsm:"application/vnd.ms-powerpoint.slideshow.macroEnabled.12",lrc:"text/lrc",asp:"text/asp; charset=utf-8",txt:"text/plain",html:"text/html",md:"text/markdown",c:"text/x-c; charset=utf-8",cpp:"text/x-c; charset=utf-8",h:"text/x-chdr",asm:"text/x-asm; charset=utf-8",s:"text/x-asm; charset=utf-8",java:"text/x-java-source; charset=utf-8",js:"text/javascript",go:"text/x-go",raw:"image/x-sony-arw",bmp:"image/bmp",pcx:"image/x-pcx",tiff:"image/tiff",gif:"image/gif",exif:"image/x-exif",jpg:"image/jpeg",jpeg:"image/jpeg",fpx:"image/vnd.fpx",svg:"image/svg+xml",psd:"image/vnd.adobe.photoshop",cdr:"image/x-cdr",pcd:"image/x-photo-cd",dxf:"image/vnd.dxf",ufo:"image/x-ufo",eps:"application/postscript",png:"image/png",wmf:"image/wmf",webp:"image/webp",tga:"image/x-tga",mp3:"audio/mpeg",acc:"audio/aac",aac:"audio/aac",flac:"audio/x-flac",amr:"audio/AMR",m4b:"audio/mp4",m4a:"audio/mp4",wma:"audio/x-ms-wma",wav:"audio/x-wav",cd:"audio/x-cd",wave:"audio/x-wave",aiff:"audio/x-aiff",midi:"audio/midi",ra:"audio/x-realaudio",vqf:"audio/x-twinvq",ogg:"audio/ogg",ape:"audio/x-ape",weba:"audio/webm","mpeg-4":"audio/mpeg-4",mp4:"video/mp4","3gp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",dv:"video/dv",flv:"video/x-flv",f4v:"video/x-f4v",m3u8:"application/vnd.apple.mpegurl",mkv:"video/x-matroska",qt:"video/quicktime",mov:"video/quicktime",mpg:"video/mpeg",mpeg:"video/mpeg",mts:"video/mp2t",m4v:"video/mp4",rmvb:"application/vnd.rn-realmedia",rm:"audio/x-pn-realaudio",webm:"video/webm",wmv:"video/x-ms-wmv",dat:"video/dat",vob:"video/x-ms-vob",zip:"application/zip",rar:"application/vnd.rar",z:"application/x-compress","7z":"application/x-7z-compressed",pdf:"application/pdf",vsdx:"application/vnd.ms-visio.drawing",vsd:"application/vnd.ms-visio.drawing",pos:"application/vnd.pos",xmind:"application/vnd.pos",ofd:"application/ofd"};t.extToMimeTypeMap=n,i={},Object.keys(n).forEach(function(e){var t=n[e];i[t]||(i[t]=[]),i[t].push(e),i[t].push(e)}),t.mimeTypeToExtMap=i},697450:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.zip=t.xls=t.video=t.text=t.ppt=t.pdf=t.novel=t.mind=t.markdown=t.image=t.doc=t.code=t.audio=void 0,t.video=["wmv","asf","asx","rm","rmvb","mp4","3gp","mov","m4v","avi","dat","mkv","flv","vob","mpeg","mpg","dv","f4v","m3u8","qt","mts","webm"],t.audio=["cd","wave","aiff","mp3","m4a","midi","wma","realaudio","vqf","ogg","amr","ape","flac","aac","oggvorbis","mpeg","m4b","wav","ra","weba","mpeg-4"],t.image=["raw","bmp","pcx","tiff","jpeg","tga","exif","fpx","svg","psd","cdr","pcd","dxf","ufo","eps","png","jpg","wmf","pcx","gif","webp"],t.zip=["zip","rar","7z"],t.doc=["doc","docx","dot","wps","wpt","dotx","docm","dotm"],t.ppt=["ppt","pptx","pot","potx","pps","ppsx","dps","dpt","pptm","potm","ppsm"],t.xls=["xls","xlm","xla","xlc","xlw","xlsx","xlt","xltx","csv","xlsb","xlsm","xltm","et","ett","ets"],t.text=["lrc","asp","bat","cmd","btm","rtf","bas","txt","log","xml","htm","html","md"],t.code=["c","cpp","h","asm","s","java","js","jsx","ts","tsx","go"],t.pdf=["pdf"],t.mind=["mind"],t.novel=["novel"],t.markdown=["md","markdown"]},178030:function(e,t){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.MimeType=void 0,(i={}).Doc="application/vnd.tdocs-apps.doc",i.Sheet="application/vnd.tdocs-apps.sheet",i.Form="application/vnd.tdocs-apps.form",i.Folder="application/vnd.tdocs-apps.folder",i.CollaborationSpace="application/vnd.tdocs-apps.collaboration-space",i.CollaborationSpaceRoot="application/vnd.tdocs-apps.collaboration-space-root",i.SharedFolder="application/vnd.tdocs-apps.shared-folder",i.Share="application/vnd.tdocs-apps.share-folder",i.Slide="application/vnd.tdocs-apps.slide",i.Pdf="application/pdf",i.Aio="application/vnd.tdocs-apps.aio",i.SmartCanvas="application/vnd.tdocs-apps.smartcanvas",i.SmartSheet="application/vnd.tdocs-apps.smartsheet",i.Mind="application/vnd.tdocs-apps.mind",i.FlowChart="application/vnd.tdocs-apps.flowchart",i.Board="application/vnd.tdocs-apps.board",i.Rec="application/vnd.tdocs-apps.rec",i.Word="application/vnd.ms-word",i.Excel="application/vnd.ms-excel",i.Powerpoint="application/vnd.ms-powerpoint",i.Txt="text/plain",i.Pixso="application/vnd.tdocs-addon-image.236b7f64e91e40b584f2aae0517ee1ed",i.Boardmix="application/vnd.tdocs-addon-image.e3e96c1968114db986a9229003965853",i.Zhiying="application/vnd.tdocs-addon-image.9e2c26161b684629a9bf29e52efa6c60",i.Code="code",i.Default="application/vnd.tdocs-apps.default",i.Image="image",i.Audio="audio",i.Video="video",i.Zip="application/zip",i.Ofd="application/vnd.tdocs-apps.ofd",i.DriveOfd="application/ofd",i.Markdown="application/vnd.tdocs-apps.markdown",i.Markdown_ASCII="text/markdown",i.Markdown_UTF8="text/markdown; charset=utf-8",i.XMind="xmind",i.Visio="visio",i.Safe="application/vnd.tdocs-apps.safe-folder",i.WikiSpace="application/vnd.tdocs-apps.wiki-space",t.MimeType=i},230797:function(e,t){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.PadType=void 0,(i={}).Doc="doc",i.Sheet="sheet",i.Form="form",i.Folder="folder",i.Slide="slide",i.Note="note",i.Pdf="pdf",i.MiniProgram="aio",i.Aio="aio",i.Unknown="unknown",i.Resume="resume",i.Ofd="ofd",i.RelationGraph="relationGraph",i.Mind="mind",i.FlowChart="flowchart",i.Board="board",i.Markdown="markdown",i.File="file",i.Drive="drive",i.SogouSpeech="rec",i.Addon="addon",i.SmartCanvas="smartcanvas",i.SmartSheet="smartsheet",i.LocalFile="local_file",t.PadType=i},731392:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.padTypeToMimeTypeMap=t.padTypeToDocTypeMap=t.mimeTypeToPadType=t.mimeTypeToDocTypeMap=t.drivePadTypeToMimeTypeMap=t.docTypeToPadTypeMap=t.docTypeToMimeTypeMap=t.Classify=void 0;var n,a,o,s,l,c,u=i(804520),h=i(799087),d=i(178030),f=i(230797);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,i){var n;return(n=function(e,t){if("object"!==p(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==p(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===p(n)?n:String(n))in e)?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}(n={}).Video="video",n.Audio="audio",n.Image="image",n.Doc="doc",n.Zip="zip",n.Unknown="unknown",t.Classify=n,m(a={},u.DocType.Doc,d.MimeType.Doc),m(a,u.DocType.Sheet,d.MimeType.Sheet),m(a,u.DocType.Slide,d.MimeType.Slide),m(a,u.DocType.Form,d.MimeType.Form),m(a,u.DocType.SmartCanvas,d.MimeType.SmartCanvas),m(a,u.DocType.SmartSheet,d.MimeType.SmartSheet),m(a,u.DocType.Mind,d.MimeType.Mind),m(a,u.DocType.FlowChart,d.MimeType.FlowChart),m(a,u.DocType.Rec,d.MimeType.Rec),m(a,u.DocType.Pdf,d.MimeType.Pdf),m(a,u.DocType.Aio,d.MimeType.Aio),m(a,u.DocType.Board,d.MimeType.Board),m(a,u.DocType.Ofd,d.MimeType.Ofd),m(a,u.DocType.Markdown,d.MimeType.Markdown),t.docTypeToMimeTypeMap=a,t.mimeTypeToDocTypeMap=[[h.WordMimeTypes,u.DocType.Doc],[[d.MimeType.Ofd,d.MimeType.DriveOfd],u.DocType.Ofd],[h.ExcelMimeTypes,u.DocType.Sheet],[h.PowerPointMimeTypes,u.DocType.Slide],[[d.MimeType.Form],u.DocType.Form],[[d.MimeType.SmartCanvas],u.DocType.SmartCanvas],[[d.MimeType.SmartSheet],u.DocType.SmartSheet],[[d.MimeType.Doc],u.DocType.Doc],[[d.MimeType.Sheet],u.DocType.Sheet],[[d.MimeType.Slide],u.DocType.Slide],[[d.MimeType.Mind],u.DocType.Mind],[[d.MimeType.FlowChart],u.DocType.FlowChart],[[d.MimeType.Board],u.DocType.Board],[h.MarkdownMimeTypes,u.DocType.Markdown],[h.CodeMimeTypes,u.DocType.Doc],[h.TextMimeTypes,u.DocType.Doc],[[d.MimeType.Pdf],u.DocType.Pdf],[h.flowChatMimeTypes,u.DocType.FlowChart],[h.mindMimeTypes,u.DocType.Mind],[[d.MimeType.Folder],u.DocType.Folder]],m(o={},f.PadType.Doc,d.MimeType.Word),m(o,f.PadType.Sheet,d.MimeType.Excel),m(o,f.PadType.Slide,d.MimeType.Powerpoint),m(o,f.PadType.Mind,d.MimeType.XMind),m(o,f.PadType.FlowChart,d.MimeType.Visio),t.drivePadTypeToMimeTypeMap=o,m(s={},u.DocType.Doc,f.PadType.Doc),m(s,u.DocType.Sheet,f.PadType.Sheet),m(s,u.DocType.Form,f.PadType.Form),m(s,u.DocType.Folder,f.PadType.Folder),m(s,u.DocType.Slide,f.PadType.Slide),m(s,u.DocType.Note,f.PadType.Note),m(s,u.DocType.Pdf,f.PadType.Pdf),m(s,u.DocType.MiniProgram,f.PadType.MiniProgram),m(s,u.DocType.SmartCanvas,f.PadType.SmartCanvas),m(s,u.DocType.SmartSheet,f.PadType.SmartSheet),m(s,u.DocType.Unknown,f.PadType.Unknown),m(s,u.DocType.Resume,f.PadType.Resume),m(s,u.DocType.Board,f.PadType.Board),m(s,u.DocType.Ofd,f.PadType.Ofd),m(s,u.DocType.Markdown,f.PadType.Markdown),m(s,u.DocType.Drawing,f.PadType.RelationGraph),m(s,u.DocType.Mind,f.PadType.Mind),m(s,u.DocType.FlowChart,f.PadType.FlowChart),m(s,u.DocType.File,f.PadType.File),m(s,u.DocType.Drive,f.PadType.Drive),m(s,u.DocType.Rec,f.PadType.SogouSpeech),m(s,u.DocType.Addon,f.PadType.Addon),m(s,u.DocType.LocalFile,f.PadType.LocalFile),t.docTypeToPadTypeMap=s,m(l={},f.PadType.Doc,d.MimeType.Doc),m(l,f.PadType.Sheet,d.MimeType.Sheet),m(l,f.PadType.Slide,d.MimeType.Slide),m(l,f.PadType.Form,d.MimeType.Form),m(l,f.PadType.SmartCanvas,d.MimeType.SmartCanvas),m(l,f.PadType.SmartSheet,d.MimeType.SmartSheet),m(l,f.PadType.Mind,d.MimeType.Mind),m(l,f.PadType.FlowChart,d.MimeType.FlowChart),m(l,f.PadType.Pdf,d.MimeType.Pdf),m(l,f.PadType.Aio,d.MimeType.Aio),m(l,f.PadType.Board,d.MimeType.Board),m(l,f.PadType.Ofd,d.MimeType.Ofd),m(l,f.PadType.Markdown,d.MimeType.Markdown),m(l,f.PadType.SogouSpeech,d.MimeType.Rec),t.padTypeToMimeTypeMap=l,t.mimeTypeToPadType=[[h.WordMimeTypes,f.PadType.Drive],[h.ExcelMimeTypes,f.PadType.Drive],[h.PowerPointMimeTypes,f.PadType.Drive],[[d.MimeType.Form],f.PadType.Form],[[d.MimeType.SmartCanvas],f.PadType.SmartCanvas],[[d.MimeType.SmartSheet],f.PadType.SmartSheet],[[d.MimeType.Doc],f.PadType.Doc],[[d.MimeType.Sheet],f.PadType.Sheet],[[d.MimeType.Slide],f.PadType.Slide],[[d.MimeType.Mind],f.PadType.Mind],[[d.MimeType.FlowChart],f.PadType.FlowChart],[[d.MimeType.Board],f.PadType.Board],[h.CodeMimeTypes,f.PadType.Drive],[h.TextMimeTypes,f.PadType.Drive],[[d.MimeType.Pdf],f.PadType.Pdf],[h.flowChatMimeTypes,f.PadType.FlowChart],[h.mindMimeTypes,f.PadType.Mind],[h.ImageMimeTypes,f.PadType.Drive],[h.VideoMimeTypes,f.PadType.Drive],[h.AudioMimeTypes,f.PadType.Drive],[[d.MimeType.Ofd],f.PadType.Ofd],[[d.MimeType.Markdown],f.PadType.Markdown],[[d.MimeType.Rec],f.PadType.SogouSpeech]],m(c={},f.PadType.Doc,u.DocType.Doc),m(c,f.PadType.Sheet,u.DocType.Sheet),m(c,f.PadType.Form,u.DocType.Form),m(c,f.PadType.Folder,u.DocType.Folder),m(c,f.PadType.Slide,u.DocType.Slide),m(c,f.PadType.Note,u.DocType.Note),m(c,f.PadType.Pdf,u.DocType.Pdf),m(c,f.PadType.MiniProgram,u.DocType.MiniProgram),m(c,f.PadType.SmartCanvas,u.DocType.SmartCanvas),m(c,f.PadType.SmartSheet,u.DocType.SmartSheet),m(c,f.PadType.Unknown,u.DocType.Unknown),m(c,f.PadType.Resume,u.DocType.Resume),m(c,f.PadType.Board,u.DocType.Board),m(c,f.PadType.Ofd,u.DocType.Ofd),m(c,f.PadType.Markdown,u.DocType.Markdown),m(c,f.PadType.RelationGraph,u.DocType.Drawing),m(c,f.PadType.Mind,u.DocType.Mind),m(c,f.PadType.FlowChart,u.DocType.FlowChart),m(c,f.PadType.File,u.DocType.File),m(c,f.PadType.Drive,u.DocType.Drive),m(c,f.PadType.SogouSpeech,u.DocType.Rec),m(c,f.PadType.Addon,u.DocType.Addon),m(c,f.PadType.LocalFile,u.DocType.LocalFile),t.padTypeToDocTypeMap=c},988102:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isZipLike=t.isXLSX=t.isXLS=t.isWordLike=t.isVideoLike=t.isTextLike=t.isSmartSheet=t.isSmartCanvas=t.isSlide=t.isSheet=t.isPowerPointLike=t.isPPTX=t.isPPT=t.isPDF=t.isOnlineDoc=t.isNovelLike=t.isMind=t.isMicrosoftFileOrPDF=t.isMicrosoftFile=t.isMarkdown=t.isImgAudioOrVideo=t.isImageLike=t.isForm=t.isFlowChart=t.isExcelLike=t.isDoc=t.isDOCX=t.isDOC=t.isCodeLike=t.isBoard=t.isAudioLike=t.isAddon=t.getPadTypeFromMimeType=t.getMimeTypeFromPadType=t.getMimeTypeFromExt=t.getMimeTypeFromDocType=t.getDocTypeFromPadType=t.getDocTypeFromMimeType=t.getClassifyFromExt=t.getCategoryForReport=void 0;var n=i(804520),a=i(799087),o=i(697450),s=i(933887),l=i(178030),c=i(230797),u=i(731392),h=i(676334);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,a,o,s,l=[],c=!0,u=!1;try{if(o=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;c=!1}else for(;!(c=(n=o.call(i)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(u)throw a}}return l}}(e,t)||p(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=p(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==i.return||i.return()}finally{if(l)throw o}}}}function p(e,t){if(e){if("string"==typeof e)return m(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return m(e,t)}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}t.isNovelLike=function(e){return(0,h.isSpecifyLike)(o.novel)(e)};var g=function(e){return a.WordMimeTypes.includes(e)||(0,h.isSpecifyLike)(o.doc)(e)};t.isWordLike=g;var v=function(e){return a.ExcelMimeTypes.includes(e)||(0,h.isSpecifyLike)(o.xls)(e)};t.isExcelLike=v;var y=function(e){return a.PowerPointMimeTypes.includes(e)||(0,h.isSpecifyLike)(o.ppt)(e)};t.isPowerPointLike=y,t.isTextLike=function(e){return a.TextMimeTypes.includes(e)||(0,h.isSpecifyLike)(o.text)(e)},t.isCodeLike=function(e){return a.CodeMimeTypes.includes(e)||(0,h.isSpecifyLike)(o.code)(e)};var x=function(e){return a.ImageMimeTypes.includes(e)||(0,h.isSpecifyLike)(o.image)(e)};t.isImageLike=x;var _=function(e){return a.AudioMimeTypes.includes(e)||(0,h.isSpecifyLike)(o.audio)(e)};t.isAudioLike=_;var M=function(e){return a.VideoMimeTypes.includes(e)||(0,h.isSpecifyLike)(o.video)(e)};t.isVideoLike=M,t.isZipLike=function(e){return a.archiveMimeTypes.includes(e)||(0,h.isSpecifyLike)(o.zip)(e)},t.isDOC=function(e){return"application/msword"===e||(0,h.isSpecifyLike)(["doc","dot"])(e)},t.isDOCX=function(e){return"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===e||(0,h.isSpecifyLike)(["docx"])(e)},t.isXLS=function(e){return"application/vnd.ms-excel"===e||(0,h.isSpecifyLike)(["xls","xlm","xla","xlc","xlw"])(e)},t.isXLSX=function(e){return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===e||(0,h.isSpecifyLike)(["xlsx"])(e)},t.isPPT=function(e){return"application/vnd.ms-powerpoint"===e||(0,h.isSpecifyLike)(["ppt","pps","pot"])(e)},t.isPPTX=function(e){return"application/vnd.openxmlformats-officedocument.presentationml.presentation"===e||(0,h.isSpecifyLike)(["pptx"])(e)},t.isOnlineDoc=function(e){return/^application\/vnd\.tdocs-apps/i.test(e)},t.isAddon=function(e){return/^application\/vnd\.tdocs-addon/i.test(e)},t.isMarkdown=function(e){return e===l.MimeType.Markdown||e===c.PadType.Markdown||e===n.DocType.Markdown},t.getMimeTypeFromExt=function(e){return s.extToMimeTypeMap[e]?s.extToMimeTypeMap[e]:(console.warn("unknown extension"),"unknown")},t.getMimeTypeFromDocType=function(e){return u.docTypeToMimeTypeMap[e]?u.docTypeToMimeTypeMap[e]:(console.warn("unknown docType"),"unknown")},t.getClassifyFromExt=function(e){return o.video.includes(e)?u.Classify.Video:o.audio.includes(e)?u.Classify.Audio:o.image.includes(e)?u.Classify.Image:o.doc.includes(e)?u.Classify.Doc:o.zip.includes(e)?u.Classify.Zip:u.Classify.Unknown},t.getDocTypeFromMimeType=function(e){var t,i=f(u.mimeTypeToDocTypeMap);try{for(i.s();!(t=i.n()).done;){var n=d(t.value,2),a=n[0],o=n[1];if(a.includes(e))return o}}catch(e){i.e(e)}finally{i.f()}},t.getMimeTypeFromPadType=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?u.drivePadTypeToMimeTypeMap[e]||"unknown":u.padTypeToMimeTypeMap[e]||"unknown"},t.getPadTypeFromMimeType=function(e){var t,i=f(u.mimeTypeToPadType);try{for(i.s();!(t=i.n()).done;){var n=d(t.value,2),a=n[0],o=n[1];if(a.includes(e))return o}}catch(e){i.e(e)}finally{i.f()}return c.PadType.Drive},t.getDocTypeFromPadType=function(e){var t=u.padTypeToDocTypeMap[e];return t||(console.warn("unknown padType"),n.DocType.Unknown)};var b=function(e){return e===l.MimeType.Doc||e===c.PadType.Doc||e===n.DocType.Doc};t.isDoc=b;var S=function(e){return e===l.MimeType.Sheet||e===c.PadType.Sheet||e===n.DocType.Sheet};t.isSheet=S;var w=function(e){return e===l.MimeType.Slide||e===c.PadType.Slide||e===n.DocType.Slide};t.isSlide=w;var T=function(e){return e===l.MimeType.Form||e===c.PadType.Form||e===n.DocType.Form};t.isForm=T;var E=function(e){return e===l.MimeType.SmartSheet||e===c.PadType.SmartSheet||e===n.DocType.SmartSheet};t.isSmartSheet=E;var A=function(e){return e===l.MimeType.SmartCanvas||e===c.PadType.SmartCanvas||e===n.DocType.SmartCanvas};t.isSmartCanvas=A;var C=function(e){return e===l.MimeType.Mind||e===c.PadType.Mind||e===n.DocType.Mind};t.isMind=C;var P=function(e){return e===l.MimeType.FlowChart||e===c.PadType.FlowChart||e===n.DocType.FlowChart};t.isFlowChart=P;var L=function(e){return e===l.MimeType.Pdf||e===c.PadType.Pdf||e===n.DocType.Pdf};t.isPDF=L;var R=function(e){return e===l.MimeType.Board||e===c.PadType.Board||e===n.DocType.Board};t.isBoard=R;var D=function(e){return g(e)||v(e)||y(e)};t.isMicrosoftFile=D,t.isMicrosoftFileOrPDF=function(e){return D(e)||L(e)},t.isImgAudioOrVideo=function(e){return x(e)||_(e)||M(e)||o.audio.includes(e)||o.image.includes(e)||o.video.includes(e)},t.getCategoryForReport=function(e){return g(e)?"word":v(e)?"excel":y(e)?"ppt":b(e)?"doc":S(e)?"sheet":w(e)?"slide":L(e)?"pdf":C(e)?"mind":T(e)?"form":P(e)?"flowchart":E(e)?"smartsheet":A(e)?"smartcanvas":R(e)?"board":x(e)?"pic":M(e)?"video":_(e)?"audio":e}},37868:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(804520);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))});var a=i(799087);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))});var o=i(697450);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))});var s=i(720593);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))});var l=i(933887);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))});var c=i(178030);Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))});var u=i(230797);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))});var h=i(731392);Object.keys(h).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===h[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return h[e]}}))});var d=i(988102);Object.keys(d).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))});var f=i(676334);Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===f[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}}))})},676334:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSpecifyLike=t.getAcceptFromPadType=t.getAcceptFromMimeTypeOrExt=void 0;var n=i(230797);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,i){var n;return(n=function(e,t){if("object"!==a(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==a(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===a(n)?n:String(n))in e)?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t.isSpecifyLike=function(e){return function(t){var i=t.replace(/^\./,"");return e.includes(i)}},t.getAcceptFromPadType=function(e){var t,i;return null!=(i=(o(t={},n.PadType.Sheet,[".xlsx",".xls",".csv"]),o(t,n.PadType.Doc,[".docx",".doc"]),o(t,n.PadType.Slide,[".pptx",".ppt"]),t)[e])?i:[]},t.getAcceptFromMimeTypeOrExt=function(e){var t=e.includes(".")?e.toLowerCase():".".concat(e.toLowerCase()),i=[".docx",".doc"],n=[".xlsx",".xls",".csv"],a=[".ppt",".pptx"];return i.includes(t)?i:n.includes(t)?n:a.includes(t)?a:[t]}},670251:function(e,t,i){window,e.exports=function(e){var t=[function(e,t){var i=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(e,t,i){var n=i(15)("wks"),a=i(16),o=i(0).Symbol,s="function"==typeof o;(e.exports=function(e){return n[e]||(n[e]=s&&o[e]||(s?o:a)("Symbol."+e))}).store=n},function(e,t,i){var n=i(4);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t){var i=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=i)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,i){var n=i(6);e.exports=function(e,t,i){if(n(e),void 0===t)return e;switch(i){case 1:return function(i){return e.call(t,i)};case 2:return function(i,n){return e.call(t,i,n)};case 3:return function(i,n,a){return e.call(t,i,n,a)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,i){var n=i(10),a=i(1)("toStringTag"),o="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,i,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?i:o?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},function(e,t,i){e.exports=!i(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,i){var n=i(0),a=i(11),o=i(19),s=i(16)("src"),l=i(29),c=(""+l).split("toString");i(3).inspectSource=function(e){return l.call(e)},(e.exports=function(e,t,i,l){var u="function"==typeof i;u&&(o(i,"name")||a(i,"name",t)),e[t]!==i&&(u&&(o(i,s)||a(i,s,e[t]?""+e[t]:c.join(String(t)))),e===n?e[t]=i:l?e[t]?e[t]=i:a(e,t,i):(delete e[t],a(e,t,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||l.call(this)})},function(e,t){var i={}.toString;e.exports=function(e){return i.call(e).slice(8,-1)}},function(e,t,i){var n=i(12),a=i(28);e.exports=i(8)?function(e,t,i){return n.f(e,t,a(1,i))}:function(e,t,i){return e[t]=i,e}},function(e,t,i){var n=i(2),a=i(26),o=i(27),s=Object.defineProperty;t.f=i(8)?Object.defineProperty:function(e,t,i){if(n(e),t=o(t,!0),n(i),a)try{return s(e,t,i)}catch(e){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(e[t]=i.value),e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=!1},function(e,t,i){var n=i(3),a=i(0),o=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:i(14)?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){var i=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++i+n).toString(36))}},function(e,t,i){var n=i(0),a=i(3),o=i(11),s=i(9),l=i(5),c=function(e,t,i){var u,h,d,f,p=e&c.F,m=e&c.G,g=e&c.S,v=e&c.P,y=e&c.B,x=m?n:g?n[t]||(n[t]={}):(n[t]||{}).prototype,_=m?a:a[t]||(a[t]={}),M=_.prototype||(_.prototype={});for(u in m&&(i=t),i)d=((h=!p&&x&&void 0!==x[u])?x:i)[u],f=y&&h?l(d,n):v&&"function"==typeof d?l(Function.call,d):d,x&&s(x,u,d,e&c.U),_[u]!=d&&o(_,u,f),v&&M[u]!=d&&(M[u]=d)};n.core=a,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,i){var n=i(4),a=i(0).document,o=n(a)&&n(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},function(e,t){var i={}.hasOwnProperty;e.exports=function(e,t){return i.call(e,t)}},function(e,t){e.exports={}},function(e,t,i){var n,a,o,s=i(5),l=i(38),c=i(39),u=i(18),h=i(0),d=h.process,f=h.setImmediate,p=h.clearImmediate,m=h.MessageChannel,g=h.Dispatch,v=0,y={},x=function(){var e=+this;if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},_=function(e){x.call(e.data)};f&&p||(f=function(e){for(var t=[],i=1;arguments.length>i;)t.push(arguments[i++]);return y[++v]=function(){l("function"==typeof e?e:Function(e),t)},n(v),v},p=function(e){delete y[e]},"process"==i(10)(d)?n=function(e){d.nextTick(s(x,e,1))}:g&&g.now?n=function(e){g.now(s(x,e,1))}:m?(o=(a=new m).port2,a.port1.onmessage=_,n=s(o.postMessage,o,1)):h.addEventListener&&"function"==typeof postMessage&&!h.importScripts?(n=function(e){h.postMessage(e+"","*")},h.addEventListener("message",_,!1)):n="onreadystatechange"in u("script")?function(e){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),x.call(e)}}:function(e){setTimeout(s(x,e,1),0)}),e.exports={set:f,clear:p}},function(e,t,i){"use strict";var n=i(6);function a(e){var t,i;this.promise=new e(function(e,n){if(void 0!==t||void 0!==i)throw TypeError("Bad Promise constructor");t=e,i=n}),this.resolve=n(t),this.reject=n(i)}e.exports.f=function(e){return new a(e)}},function(e,t,i){"use strict";var n,a,o=i(54),s=RegExp.prototype.exec,l=String.prototype.replace,c=s,u=(n=/a/,a=/b*/g,s.call(n,"a"),s.call(a,"a"),0!==n.lastIndex||0!==a.lastIndex),h=void 0!==/()??/.exec("")[1];(u||h)&&(c=function(e){var t,i,n,a;return h&&(i=RegExp("^"+this.source+"$(?!\\s)",o.call(this))),u&&(t=this.lastIndex),n=s.call(this,e),u&&n&&(this.lastIndex=this.global?n.index+n[0].length:t),h&&n&&n.length>1&&l.call(n[0],i,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(n[a]=void 0)}),n}),e.exports=c},function(t,i){t.exports=e},function(e,t,i){"use strict";var n,a,o,s,l=i(14),c=i(0),u=i(5),h=i(7),d=i(17),f=i(4),p=i(6),m=i(30),g=i(31),v=i(37),y=i(21).set,x=i(40)(),_=i(22),M=i(41),b=i(42),S=i(43),w=c.TypeError,T=c.process,E=T&&T.versions,A=E&&E.v8||"",C=c.Promise,P="process"==h(T),L=function(){},R=a=_.f,D=!!function(){try{var e=C.resolve(1),t=(e.constructor={})[i(1)("species")]=function(e){e(L,L)};return(P||"function"==typeof PromiseRejectionEvent)&&e.then(L)instanceof t&&0!==A.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(e){}}(),I=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},U=function(e,t){if(!e._n){e._n=!0;var i=e._c;x(function(){for(var n=e._v,a=1==e._s,o=0;i.length>o;)!function(t){var i,o,s,l=a?t.ok:t.fail,c=t.resolve,u=t.reject,h=t.domain;try{l?(a||(2==e._h&&k(e),e._h=1),!0===l?i=n:(h&&h.enter(),i=l(n),h&&(h.exit(),s=!0)),i===t.promise?u(w("Promise-chain cycle")):(o=I(i))?o.call(i,c,u):c(i)):u(n)}catch(e){h&&!s&&h.exit(),u(e)}}(i[o++]);e._c=[],e._n=!1,t&&!e._h&&O(e)})}},O=function(e){y.call(c,function(){var t,i,n,a=e._v,o=N(e);if(o&&(t=M(function(){P?T.emit("unhandledRejection",a,e):(i=c.onunhandledrejection)?i({promise:e,reason:a}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",a)}),e._h=P||N(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},N=function(e){return 1!==e._h&&0===(e._a||e._c).length},k=function(e){y.call(c,function(){var t;P?T.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},z=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),U(t,!0))},F=function(e){var t,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===e)throw w("Promise can't be resolved itself");(t=I(e))?x(function(){var n={_w:i,_d:!1};try{t.call(e,u(F,n,1),u(z,n,1))}catch(e){z.call(n,e)}}):(i._v=e,i._s=1,U(i,!1))}catch(e){z.call({_w:i,_d:!1},e)}}};D||(C=function(e){m(this,C,"Promise","_h"),p(e),n.call(this);try{e(u(F,this,1),u(z,this,1))}catch(e){z.call(this,e)}},(n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=i(44)(C.prototype,{then:function(e,t){var i=R(v(this,C));return i.ok="function"!=typeof e||e,i.fail="function"==typeof t&&t,i.domain=P?T.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&U(this,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new n;this.promise=e,this.resolve=u(F,e,1),this.reject=u(z,e,1)},_.f=R=function(e){return e===C||e===s?new o(e):a(e)}),d(d.G+d.W+!D*d.F,{Promise:C}),i(45)(C,"Promise"),i(46)("Promise"),s=i(3).Promise,d(d.S+!D*d.F,"Promise",{reject:function(e){var t=R(this);return(0,t.reject)(e),t.promise}}),d(d.S+d.F*(l||!D),"Promise",{resolve:function(e){return S(l&&this===s?C:this,e)}}),d(d.S+!(D&&i(47)(function(e){C.all(e).catch(L)}))*d.F,"Promise",{all:function(e){var t=this,i=R(t),n=i.resolve,a=i.reject,o=M(function(){var i=[],o=0,s=1;g(e,!1,function(e){var l=o++,c=!1;i.push(void 0),s++,t.resolve(e).then(function(e){c||(c=!0,i[l]=e,--s||n(i))},a)}),--s||n(i)});return o.e&&a(o.v),i.promise},race:function(e){var t=this,i=R(t),n=i.reject,a=M(function(){g(e,!1,function(e){t.resolve(e).then(i.resolve,n)})});return a.e&&n(a.v),i.promise}})},function(e,t,i){e.exports=!i(8)&&!i(13)(function(){return 7!=Object.defineProperty(i(18)("div"),"a",{get:function(){return 7}}).a})},function(e,t,i){var n=i(4);e.exports=function(e,t){var i,a;if(!n(e))return e;if(t&&"function"==typeof(i=e.toString)&&!n(a=i.call(e))||"function"==typeof(i=e.valueOf)&&!n(a=i.call(e))||!t&&"function"==typeof(i=e.toString)&&!n(a=i.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,i){e.exports=i(15)("native-function-to-string",Function.toString)},function(e,t){e.exports=function(e,t,i,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(i+": incorrect invocation!");return e}},function(e,t,i){var n=i(5),a=i(32),o=i(33),s=i(2),l=i(34),c=i(36),u={},h={};(t=e.exports=function(e,t,i,d,f){var p,m,g,v,y=f?function(){return e}:c(e),x=n(i,d,t?2:1),_=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(o(y)){for(p=l(e.length);p>_;_++)if((v=t?x(s(m=e[_])[0],m[1]):x(e[_]))===u||v===h)return v}else for(g=y.call(e);!(m=g.next()).done;)if((v=a(g,x,m.value,t))===u||v===h)return v}).BREAK=u,t.RETURN=h},function(e,t,i){var n=i(2);e.exports=function(e,t,i,a){try{return a?t(n(i)[0],i[1]):t(i)}catch(t){var o=e.return;throw void 0!==o&&n(o.call(e)),t}}},function(e,t,i){var n=i(20),a=i(1)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||o[a]===e)}},function(e,t,i){var n=i(35),a=Math.min;e.exports=function(e){return e>0?a(n(e),0x1fffffffffffff):0}},function(e,t){var i=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e*=1)?0:(e>0?n:i)(e)}},function(e,t,i){var n=i(7),a=i(1)("iterator"),o=i(20);e.exports=i(3).getIteratorMethod=function(e){if(null!=e)return e[a]||e["@@iterator"]||o[n(e)]}},function(e,t,i){var n=i(2),a=i(6),o=i(1)("species");e.exports=function(e,t){var i,s=n(e).constructor;return void 0===s||null==(i=n(s)[o])?t:a(i)}},function(e,t){e.exports=function(e,t,i){var n=void 0===i;switch(t.length){case 0:return n?e():e.call(i);case 1:return n?e(t[0]):e.call(i,t[0]);case 2:return n?e(t[0],t[1]):e.call(i,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(i,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(i,t[0],t[1],t[2],t[3])}return e.apply(i,t)}},function(e,t,i){var n=i(0).document;e.exports=n&&n.documentElement},function(e,t,i){var n=i(0),a=i(21).set,o=n.MutationObserver||n.WebKitMutationObserver,s=n.process,l=n.Promise,c="process"==i(10)(s);e.exports=function(){var e,t,i,u=function(){var n,a;for(c&&(n=s.domain)&&n.exit();e;){a=e.fn,e=e.next;try{a()}catch(n){throw e?i():t=void 0,n}}t=void 0,n&&n.enter()};if(c)i=function(){s.nextTick(u)};else if(!o||n.navigator&&n.navigator.standalone)if(l&&l.resolve){var h=l.resolve(void 0);i=function(){h.then(u)}}else i=function(){a.call(n,u)};else{var d=!0,f=document.createTextNode("");new o(u).observe(f,{characterData:!0}),i=function(){f.data=d=!d}}return function(n){var a={fn:n,next:void 0};t&&(t.next=a),e||(e=a,i()),t=a}}},function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},function(e,t,i){var n=i(0).navigator;e.exports=n&&n.userAgent||""},function(e,t,i){var n=i(2),a=i(4),o=i(22);e.exports=function(e,t){if(n(e),a(t)&&t.constructor===e)return t;var i=o.f(e);return(0,i.resolve)(t),i.promise}},function(e,t,i){var n=i(9);e.exports=function(e,t,i){for(var a in t)n(e,a,t[a],i);return e}},function(e,t,i){var n=i(12).f,a=i(19),o=i(1)("toStringTag");e.exports=function(e,t,i){e&&!a(e=i?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},function(e,t,i){"use strict";var n=i(0),a=i(12),o=i(8),s=i(1)("species");e.exports=function(e){var t=n[e];o&&t&&!t[s]&&a.f(t,s,{configurable:!0,get:function(){return this}})}},function(e,t,i){var n=i(1)("iterator"),a=!1;try{var o=[7][n]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!a)return!1;var i=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:i=!0}},o[n]=function(){return s},e(o)}catch(e){}return i}},function(e,t,i){"use strict";var n=i(7),a={};a[i(1)("toStringTag")]="z",a+""!="[object z]"&&i(9)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},function(e,t,i){"use strict";var n=i(2),a=i(50),o=i(51);i(52)("search",1,function(e,t,i,s){return[function(i){var n=e(this),a=null==i?void 0:i[t];return void 0!==a?a.call(i,n):new RegExp(i)[t](String(n))},function(e){var t=s(i,e,this);if(t.done)return t.value;var l=n(e),c=String(this),u=l.lastIndex;a(u,0)||(l.lastIndex=0);var h=o(l,c);return a(l.lastIndex,u)||(l.lastIndex=u),null===h?-1:h.index}]})},function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},function(e,t,i){"use strict";var n=i(7),a=RegExp.prototype.exec;e.exports=function(e,t){var i=e.exec;if("function"==typeof i){var o=i.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},function(e,t,i){"use strict";i(53);var n,a,o,s=i(9),l=i(11),c=i(13),u=i(55),h=i(1),d=i(23),f=h("species"),p=!c(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),m=(a=(n=/(?:)/).exec,n.exec=function(){return a.apply(this,arguments)},2===(o="ab".split(n)).length&&"a"===o[0]&&"b"===o[1]);e.exports=function(e,t,i){var n=h(e),a=!c(function(){var t={};return t[n]=function(){return 7},7!=""[e](t)}),o=a?!c(function(){var t=!1,i=/a/;return i.exec=function(){return t=!0,null},"split"===e&&(i.constructor={},i.constructor[f]=function(){return i}),i[n](""),!t}):void 0;if(!a||!o||"replace"===e&&!p||"split"===e&&!m){var g=/./[n],v=i(u,n,""[e],function(e,t,i,n,o){return t.exec===d?a&&!o?{done:!0,value:g.call(t,i,n)}:{done:!0,value:e.call(i,t,n)}:{done:!1}}),y=v[0],x=v[1];s(String.prototype,e,y),l(RegExp.prototype,n,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},function(e,t,i){"use strict";var n=i(23);i(17)({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},function(e,t,i){"use strict";var n=i(2);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,i){"use strict";i.r(t),i(25),i(48),i(49);var n=i(24),a=i.n(n).a.getInstance().getConfig('npm["@tencent/docs-miniapp-sdk"]'),o=(null==a?void 0:a.TOC_ORIGIN)||"https://docs.qq.com",s={invokeJSBridge:function(e,t){var i,n=null!=(i=window.top)?i:window;if(/miniprogram|miniapp(?!enable)/i.test(n.navigator.userAgent)||"undefined"!=typeof __wxjs_environment&&"miniprogram"===__wxjs_environment){var a=function(){try{n.WeixinJSBridge.invoke("invokeMiniProgramAPI",{name:e,arg:t})}catch(e){console.warn("miniApp sdk WeixinJSBridge invocation failed",e)}};if(n.WeixinJSBridge)return a();console.warn("miniApp sdk WeixinJSBridge is not ready, waiting");var o=function e(){a(),n.document.removeEventListener("WeixinJSBridgeReady",e,!1),n.document.removeEventListener("QQJSBridgeReady",e,!1)};n.document.addEventListener("WeixinJSBridgeReady",o,!1),n.document.addEventListener("QQJSBridgeReady",o,!1)}else console.warn("miniApp sdk not in MiniProgram environment, ignoring")},navigateTo:function(e){s.invokeJSBridge("navigateTo",e)},navigateBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s.invokeJSBridge("navigateBack",e)},switchTab:function(e){s.invokeJSBridge("switchTab",e)},reLaunch:function(e){s.invokeJSBridge("reLaunch",e)},redirectTo:function(e){s.invokeJSBridge("redirectTo",e)},postMessage:function(e){s.invokeJSBridge("postMessage",e)},reLaunchToListPage:function(){s.reLaunch({url:"/pages/list/list"})},navigateToEditPage:function(e){s.navigateTo({url:"/pages/detail/detail?url=".concat(encodeURIComponent(e))})},navigateToWebView:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.navigateTo({url:"/pages/webview/webview?url=".concat(encodeURIComponent(e),"&shareable=").concat(t||"")})},reLogin:function(e){e?s.reLaunch({url:"/pages/detail/detail?reason=pskey_error&url=".concat(encodeURIComponent(e))}):s.reLaunch({url:"/pages/list/list?reason=pskey_error"})},invoke:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(null!=(t=/[?&]applet_id=([^&#]+)/.exec(location.search))?t:[])[1];if(!n)throw Error("miniApp sdk invoke miniApi fail: no applet_id in url param");return new Promise(function(t){var a=new XMLHttpRequest;a.open("POST","".concat(o,"/sdc/getappletdata"),!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.responseType="json",a.onload=function(){return t(a.response)},a.send("cmd=".concat(encodeURIComponent(e),"&param=").concat(encodeURIComponent(JSON.stringify(i)||"{}"),"&appletid=").concat(n))}).then(function(e){var t=JSON.parse(e.result.data);if(!t.success)throw Error("miniApp sdk invoke miniApi fail: Error: ".concat(t.errMsg||"unknown error"));return t.data},function(e){throw Error("miniApp sdk invoke miniApi fail: Error: ".concat(e.message||"unknown error"))})}};t.default=s}],i={};function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=i,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,(function(t){return e[t]}).bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=56)}(i(760444))},289655:function(e,t,i){window,e.exports=function(){var e=[function(e,t){e.exports=i(235652)},function(e,t,i){"use strict";var n,a,o,s,l,c;i.d(t,"c",function(){return n}),i.d(t,"b",function(){return a}),i.d(t,"a",function(){return o}),(s=n||(n={})).DOC_SID="DOC_SID",s.SID="SID",s.UID="uid",s.UID_KEY="uid_key",s.USER_TYPE="utype",(l=a||(a={})).P_LONG_UIN="p_luin",l.P_LONG_SKEY="p_lskey",l.P_UIN="p_uin",l.P_SKEY="p_skey",(c=o||(o={})).UID="tdoc_uid",c.SKEY="wedoc_skey"},function(e,t){e.exports=i(810423)},function(e,t){e.exports=i(516351)},function(e,t,i){"use strict";i.r(t),i.d(t,"getUid",function(){return l}),i.d(t,"getNowUserId",function(){return c}),i.d(t,"isLogin",function(){return u}),i.d(t,"getSid",function(){return h}),i.d(t,"loginType",function(){return d}),i.d(t,"checkWeWork",function(){return f});var n=i(2),a=i(0),o=i(1);function s(){return location.hostname===(null===n.npmConfig||void 0===n.npmConfig?void 0:n.npmConfig.WECOM_DOMAIN)||"doc.weixin.qq.com"}function l(){var e,t,i;return(null==(e=window.global_multi_user)?void 0:e.uid)||(null==(i=null==(t=window.clientVars)?void 0:t.userInfo)?void 0:i.uid)||Object(a.getCookie)("uid")||(s()?Object(a.getCookie)(o.a.UID):"")}function c(){return window.nowUserIndex||l()}function u(){return!!(Object(a.getCookie)(o.c.UID)&&Object(a.getCookie)(o.c.UID_KEY)||Object(a.getCookie)(o.c.DOC_SID)||Object(a.getCookie)(o.c.SID)||Object(a.getCookie)(o.b.P_UIN)&&Object(a.getCookie)(o.b.P_SKEY)||Object(a.getCookie)(o.b.P_LONG_UIN)&&Object(a.getCookie)(o.b.P_LONG_SKEY))||!(!s()||!Object(a.getCookie)(o.a.SKEY))}function h(){var e,t;return null!=(t=null!=(e=Object(a.getCookie)(o.c.DOC_SID))?e:Object(a.getCookie)(o.c.SID))?t:""}function d(){var e,t=Object(a.getCookie)(o.c.USER_TYPE);return(null==(e=window.global_multi_user)?void 0:e.utype)||t}function f(){return"ww"===d()}},function(e,t){e.exports=i(540848)},function(e,t){e.exports=i(69224)},function(e,t){e.exports=i(402418)},function(e,t){e.exports=i(351684)},function(e,t){e.exports=i(310419)},function(e,t){e.exports=i(936437)},function(e,t){e.exports=i(424300)},function(e,t){e.exports=i(456592)},function(e,t){e.exports=i(555833)},function(e,t,i){"use strict";i.r(t),i.d(t,"isMultiLoginGray",function(){return W}),i.d(t,"checkMultiLoginGrayAsync",function(){return j}),i.d(t,"mobileIsMultiLoginGray",function(){return q}),i.d(t,"mobileCheckMultiLoginGrayAsync",function(){return Y}),i.d(t,"quickQQLoginAsync",function(){return X}),i.d(t,"quickQQLogin",function(){return J}),i.d(t,"getUid",function(){return K}),i.d(t,"getNowUserId",function(){return Z}),i.d(t,"isLogin",function(){return Q}),i.d(t,"loginType",function(){return $}),i.d(t,"getLoginType",function(){return ee}),i.d(t,"getUtype",function(){return et}),i.d(t,"inWeWork",function(){return ei});var n,a=i(4),o=i(3),s=i.n(o),l=i(6),c=i.n(l),u=i(0),h=i(11),d=i.n(h),f=i(7),p=i.n(f),m=i(8),g=i.n(m),v=i(2),y=i.n(v),x=i(12),_=i.n(x),M=i(13),b=i.n(M),S=i(1),w=function(e,t,i,n){return new(i||(i=Promise))(function(a,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function l(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(s,l)}c((n=n.apply(e,t||[])).next())})},T=function(e){return e},E=function(){var e,t,i;return Object(u.getCookie)(S.c.UID)||(null==(e=window.global_multi_user)?void 0:e.uid)||(null==(i=null==(t=window.clientVars)?void 0:t.userInfo)?void 0:i.uid)},A=function(){function e(){p()(this,e),this.url=(null===v.npmConfig||void 0===v.npmConfig?void 0:v.npmConfig.TOGGLE_PROXY_URL)||"https://service-4y7r0fta-1251316161.gz.apigw.tencentcs.com/release/toggleProxy-1613409159",this.productEn="tdocs_manager",this.productKey="ab1ef06b-d248-4d99-b937-e18af1b82d14",this.productId="698ba977-c8d4-47cb-bf51-b79b305e38d4",this.version="1.0.1",this.moduleId="219"}return g()(e,[{key:"isEnabled",value:function(e,t){return w(this,void 0,void 0,s.a.mark(function i(){var n,a,o,l,c,u;return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=this.productId,a=this.productEn,o=this.moduleId,l=this.version,c={productEn:a,productKey:this.productKey,toggleKey:e,productId:n,version:l,moduleId:o,data:JSON.stringify(t)},i.next=4,_.a.post(this.url,b.a.stringify(c));case 4:if(!(u=i.sent).data||0!==u.data.retCode){i.next=7;break}return i.abrupt("return",u.data.isEnabled);case 7:return i.abrupt("return",!1);case 8:case"end":return i.stop()}},i,this)}))}}]),e}(),C=function(){function e(t){var i=this,n=t.toggleAPI,a=t.toggleKey,o=t.handlerMap,l=t.localStorageKey;p()(this,e),this.checkMultiLoginGrayAsync=function(e){return w(i,void 0,void 0,s.a.mark(function t(){var i,n,a,o,l,c,u,h,d;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return null==(n=null==(i=this.handlerMap)?void 0:i.checkMultiLoginGrayAsync)||n.call(i),void 0===e&&(e=E()||"0"),u=this._getDevContext(),h=Object.assign({userId:e},u),t.next=6,this.toggleAPI.isEnabled(this.toggleKey,h);case 6:if(!0!==(d=t.sent)){t.next=10;break}return null==(o=null==(a=this.handlerMap)?void 0:a.isEnabledTrue)||o.call(a),t.abrupt("return",this._enterGray(e));case 10:if(!1!==d){t.next=14;break}return null==(c=null==(l=this.handlerMap)?void 0:l.isEnabledFalse)||c.call(l),t.next=14,this._checkAllUserGrayState(e);case 14:case"end":return t.stop()}},t,this)}))},this.isMultiLoginGray=function(){var e,t,n,a,o,s=i._getLocalHashMap(),l=[];for(var c in s)l.push(s[c]);var h=0!==l.length&&l.every(T),d=null!=(e=Object(u.getCookie)(S.c.DOC_SID))?e:Object(u.getCookie)(S.c.SID);return h?null==(n=null==(t=i.handlerMap)?void 0:t.isGrayTrue)||n.call(t):null==(o=null==(a=i.handlerMap)?void 0:a.isGrayFalse)||o.call(a),h||!!d},this.toggleAPI=n,this.toggleKey=a,this.handlerMap=o,this.localStorageKey=l}return g()(e,[{key:"_getLocalHashMap",value:function(){var e=localStorage.getItem(this.localStorageKey);return e&&(e=JSON.parse(e)),e||{}}},{key:"_setLocalHashMap",value:function(e){e&&localStorage.setItem(this.localStorageKey,JSON.stringify(e))}},{key:"_enterGray",value:function(e){void 0===e&&(e="0");var t=d()({},"".concat(e),!0),i=this._getLocalHashMap();this._setLocalHashMap(Object.assign(Object.assign({},i),t))}},{key:"_checkAllUserGrayState",value:function(e){return w(this,void 0,void 0,s.a.mark(function e(){var t,i,n,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.keys(this._getLocalHashMap()),i=[],n=0;case 4:if(!(n<t.length)){e.next=13;break}return a={userId:t[n]},e.next=8,this.toggleAPI.isEnabled(this.toggleKey,a);case 8:o=e.sent,i.push(o);case 10:n++,e.next=4;break;case 13:if(!(0!==i.length&&i.every(T))){e.next=16;break}return e.abrupt("return");case 16:case"end":return e.stop()}},e,this)}))}},{key:"_getDevContext",value:function(){var e=Object(u.getCookie)("dev_route_id"),t={};return e&&(t.properties={dev_route_id:e,fd:Object(u.getCookie)("fd")||"webserver"}),t}}]),e}(),P=function(e){var t;try{null==(t=null==window?void 0:window.AlloyReport)||t.zzsValue({attrid:e,value:1})}catch(e){console.warn(e)}},L=new A,R=i(9),D=i(10),I=function(e,t,i,n){return new(i||(i=Promise))(function(a,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function l(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(s,l)}c((n=n.apply(e,t||[])).next())})},U=y.a.getConfig("runtime.domainName")||"docs.qq.com",O="https://".concat(U,"/cgi-bin/online_docs/user_info"),N="https://".concat(U,"/cgi-bin/api/account-list"),k=i(5);function z(e,t){var i=e.split("?");if(t=Array.isArray(t)?t:[t],i.length>=2){for(var n=i[1].split(/[&;]/g),a=0,o=t.length;a<o;a++)for(var s="".concat(encodeURIComponent(t[a]),"="),l=n.length-1;l>=0;l--)-1!==n[l].lastIndexOf(s,0)&&n.splice(l,1);return i[0]+(n.length>0?"?".concat(n.join("&")):"")}return e}var F=(n||(n=new C({toggleAPI:L,toggleKey:"PC_multi_login",handlerMap:{isGrayTrue:function(){P("pc_multi_gray_true")},isGrayFalse:function(){P("pc_multi_gray_false")},isEnabledTrue:function(){P("pc_multi_endabled_true")},isEnabledFalse:function(){P("pc_multi_endabled_false")},checkMultiLoginGrayAsync:function(){P("pc_multi_check_multi_login")}},localStorageKey:"multi-login-gray"})),n),B=function(){return F.isMultiLoginGray()};function H(){var e=Object(k.getQuery)("jumpuin");return new Promise(function(t,i){var n;(n=parseInt(e),I(void 0,void 0,void 0,s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){var i={xsrf:Object(D.getXsrf)()};Object(R.ajaxGet)({url:N,param:i,success:function(i){if(0===i.retcode){var a=i.data,o=!1;null==a||a.forEach(function(t){if(t.uin===n&&"qq"===t.uType)return e(!0),void(o=!0)}),o||t(!1)}t(!1)},error:function(){t(!1)}})}));case 1:case"end":return e.stop()}},e)}))).then(function(e){t(e)}).catch(function(){i(!1)})})}function G(){var e=Object(k.getQuery)("jumpuin"),t=Object(u.getCookie)("utype"),i=Object(u.getCookie)("p_luin")||Object(u.getCookie)("p_uin"),n=i?i.replace(/^[o0]+/i,""):null;return new Promise(function(i,a){"qq"===t&&e==n?I(void 0,void 0,void 0,s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){var i={xsrf:Object(D.getXsrf)()};Object(R.ajaxGet)({url:O,param:i,success:function(i){console.log(i),0===i.retcode?e(!0):t(!1)},error:function(){t(!1)}})}));case 1:case"end":return e.stop()}},e)})).then(function(e){if(console.log("checkUserLogin:",e),e){console.error("jump uin already login");var t=z(window.location.href,"jumpuin");window.history.replaceState(window.history.state,null,t)}i(e)}).catch(function(){a(!1)}):a(!1)})}function V(){return!(c.a.isMobilePhone||c.a.isAndroidPad||!Object(k.getQuery)("jumpuin"))}var W=function(){return!0},j=function(){return new Promise(function(e){return e(!0)})},q=function(){return!0},Y=function(){return new Promise(function(e){return e(!0)})},X=function(){var e,t,i,n;return e=this,t=void 0,i=void 0,n=s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=B(),!V()){e.next=11;break}if(!t){e.next=8;break}return e.next=5,H();case 5:case 10:return e.abrupt("return",e.sent);case 8:return e.next=10,G();case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}},e)}),new(i||(i=Promise))(function(a,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function l(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(s,l)}c((n=n.apply(e,t||[])).next())})},J=function(e){var t=B();V()&&(t?H().then(function(t){if(console.log("multiQuickLogin:",t),t){console.error("jump uin already login");var i=z(window.location.href,"jumpuin");window.history.replaceState(null,"",i)}e&&e(t)}).catch(function(t){console.log(t),e&&e(!1)}):G().then(function(t){e&&e(t)}).catch(function(){e&&e(!1)}))},K=a.getUid,Z=a.getNowUserId,Q=a.isLogin,$=a.loginType,ee=$,et=$,ei=a.checkWeWork}],t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,(function(t){return e[t]}).bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}()},496372:function(e){window,e.exports=function(){var e=[function(e,t){var i=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(e,t,i){var n=i(22)("wks"),a=i(23),o=i(0).Symbol,s="function"==typeof o;(e.exports=function(e){return n[e]||(n[e]=s&&o[e]||(s?o:a)("Symbol."+e))}).store=n},function(e,t){var i,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){for(var t=0;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');i=e},t.isKanjiModeEnabled=function(){return void 0!==i},t.toSJIS=function(e){return i(e)}},function(e,t,i){var n=i(35),a=i(36);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!n.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return a.testNumeric(e)?t.NUMERIC:a.testAlphanumeric(e)?t.ALPHANUMERIC:a.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,i){if(t.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}catch(e){return i}}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,i){"use strict";var n=i(16);o.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()}catch(e){return!1}}();var a=o.TYPED_ARRAY_SUPPORT?0x7fffffff:0x3fffffff;function o(e,t,i){return o.TYPED_ARRAY_SUPPORT||this instanceof o?"number"==typeof e?c(this,e):function(e,t,i,n){if("number"==typeof t)throw TypeError('"value" argument must not be a number');if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer){var a;if(i<0||t.byteLength<i)throw RangeError("'offset' is out of bounds");if(t.byteLength<i+(n||0))throw RangeError("'length' is out of bounds");return a=void 0===i&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,i):new Uint8Array(t,i,n),o.TYPED_ARRAY_SUPPORT?a.__proto__=o.prototype:a=u(e,a),a}if("string"==typeof t)return(f=(h=l(e,c=0|d(t))).write(t))!==c&&(h=h.slice(0,f)),h;if(o.isBuffer(t)){var c,h,f,p,m=0|s(t.length),g=l(e,m);return 0===g.length||t.copy(g,0,0,m),g}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(p=t.length)!=p?l(e,0):u(e,t);if("Buffer"===t.type&&Array.isArray(t.data))return u(e,t.data)}throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(this,e,t,i):new o(e,t,i)}function s(e){if(e>=a)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|e}function l(e,t){var i;return o.TYPED_ARRAY_SUPPORT?(i=new Uint8Array(t)).__proto__=o.prototype:(null===(i=e)&&(i=new o(t)),i.length=t),i}function c(e,t){var i=l(e,t<0?0:0|s(t));if(!o.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)i[n]=0;return i}function u(e,t){for(var i=t.length<0?0:0|s(t.length),n=l(e,i),a=0;a<i;a+=1)n[a]=255&t[a];return n}function h(e,t){var i;t=t||1/0;for(var n=e.length,a=null,o=[],s=0;s<n;++s){if((i=e.charCodeAt(s))>55295&&i<57344){if(!a){if(i>56319||s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}a=i;continue}if(i<56320){(t-=3)>-1&&o.push(239,191,189),a=i;continue}i=65536+(a-55296<<10|i-56320)}else a&&(t-=3)>-1&&o.push(239,191,189);if(a=null,i<128){if((t-=1)<0)break;o.push(i)}else if(i<2048){if((t-=2)<0)break;o.push(i>>6|192,63&i|128)}else if(i<65536){if((t-=3)<0)break;o.push(i>>12|224,i>>6&63|128,63&i|128)}else{if(!(i<1114112))throw Error("Invalid code point");if((t-=4)<0)break;o.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}}return o}function d(e){return o.isBuffer(e)?e.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer)?e.byteLength:("string"!=typeof e&&(e=""+e),0===e.length?0:h(e).length)}o.TYPED_ARRAY_SUPPORT&&(o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),o.prototype.write=function(e,t,i){void 0===t||void 0===i&&"string"==typeof t?(i=this.length,t=0):isFinite(t)&&(t|=0,isFinite(i)?i|=0:i=void 0);var n=this.length-t;if((void 0===i||i>n)&&(i=n),e.length>0&&(i<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");for(var a=this,o=e,s=t,l=i,c=h(o,a.length-s),u=0;u<l&&!(u+s>=a.length||u>=c.length);++u)a[u+s]=c[u];return u},o.prototype.slice=function(e,t){var i,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),o.TYPED_ARRAY_SUPPORT)(i=this.subarray(e,t)).__proto__=o.prototype;else{var a=t-e;i=new o(a,void 0);for(var s=0;s<a;++s)i[s]=this[s+e]}return i},o.prototype.copy=function(e,t,i,n){if(i||(i=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("sourceStart out of bounds");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);var a,s=n-i;if(this===e&&i<t&&t<n)for(a=s-1;a>=0;--a)e[a+t]=this[a+i];else if(s<1e3||!o.TYPED_ARRAY_SUPPORT)for(a=0;a<s;++a)e[a+t]=this[a+i];else Uint8Array.prototype.set.call(e,this.subarray(i,i+s),t);return s},o.prototype.fill=function(e,t,i){if("string"==typeof e){if("string"==typeof t?(t=0,i=this.length):"string"==typeof i&&(i=this.length),1===e.length){var n,a=e.charCodeAt(0);a<256&&(e=a)}}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<i)throw RangeError("Out of range index");if(i<=t)return this;if(t>>>=0,i=void 0===i?this.length:i>>>0,e||(e=0),"number"==typeof e)for(n=t;n<i;++n)this[n]=e;else{var s=o.isBuffer(e)?e:new o(e),l=s.length;for(n=0;n<i-t;++n)this[n+t]=s[n%l]}return this},o.concat=function(e,t){if(!n(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l(null,0);if(void 0===t)for(t=0,i=0;i<e.length;++i)t+=e[i].length;var i,a=c(null,t),s=0;for(i=0;i<e.length;++i){var u=e[i];if(!o.isBuffer(u))throw TypeError('"list" argument must be an Array of Buffers');u.copy(a,s),s+=u.length}return a},o.byteLength=d,o.prototype._isBuffer=!0,o.isBuffer=function(e){return!(null==e||!e._isBuffer)},e.exports.alloc=function(e){var t=new o(e);return t.fill(0),t},e.exports.from=function(e){return new o(e)}},function(e,t,i){var n=i(10);e.exports=function(e,t,i){if(n(e),void 0===t)return e;switch(i){case 1:return function(i){return e.call(t,i)};case 2:return function(i,n){return e.call(t,i,n)};case 3:return function(i,n,a){return e.call(t,i,n,a)}}return function(){return e.apply(t,arguments)}}},function(e,t){var i={}.toString;e.exports=function(e){return i.call(e).slice(8,-1)}},function(e,t){var i=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=i)},function(e,t,i){var n=i(4);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,i){e.exports=!i(25)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,i){var n=i(7),a=i(1)("toStringTag"),o="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,i,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?i:o?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},function(e,t,i){var n=i(14),a=i(45);e.exports=i(11)?function(e,t,i){return n.f(e,t,a(1,i))}:function(e,t,i){return e[t]=i,e}},function(e,t,i){var n=i(9),a=i(43),o=i(44),s=Object.defineProperty;t.f=i(11)?Object.defineProperty:function(e,t,i){if(n(e),t=o(t,!0),n(i),a)try{return s(e,t,i)}catch(e){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(e[t]=i.value),e}},function(e,t,i){var n=i(0),a=i(13),o=i(27),s=i(23)("src"),l=i(46),c=(""+l).split("toString");i(8).inspectSource=function(e){return l.call(e)},(e.exports=function(e,t,i,l){var u="function"==typeof i;u&&(o(i,"name")||a(i,"name",t)),e[t]!==i&&(u&&(o(i,s)||a(i,s,e[t]?""+e[t]:c.join(String(t)))),e===n?e[t]=i:l?e[t]?e[t]=i:a(e,t,i):(delete e[t],a(e,t,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||l.call(this)})},function(e,t){var i={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==i.call(e)}},function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,i){if(t.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}catch(e){return i}}},function(e,t){function i(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");var t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");var i=parseInt(t.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});var t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,a=e.scale||4;return{width:n,scale:n?4:a,margin:t,color:{dark:i(e.color.dark||"#000000ff"),light:i(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,i){var n=t.getScale(e,i);return Math.floor((e+2*i.margin)*n)},t.qrToImageData=function(e,i,n){for(var a=i.modules.size,o=i.modules.data,s=t.getScale(a,n),l=Math.floor((a+2*n.margin)*s),c=n.margin*s,u=[n.color.light,n.color.dark],h=0;h<l;h++)for(var d=0;d<l;d++){var f=4*(h*l+d),p=n.color.light;h>=c&&d>=c&&h<l-c&&d<l-c&&(p=u[+!!o[Math.floor((h-c)/s)*a+Math.floor((d-c)/s)]]),e[f++]=p.r,e[f++]=p.g,e[f++]=p.b,e[f]=p.a}}},function(e,t,i){e.exports=i(20)},function(e,t,i){var n=function(e){"use strict";var t=Object.prototype,i=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(e,t,i,n){var a,o=Object.create((t&&t.prototype instanceof h?t:h).prototype),s=new b(n||[]);return a="suspendedStart",o._invoke=function(t,n){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===t)throw n;return w()}for(s.method=t,s.arg=n;;){var o=s.delegate;if(o){var l=function e(t,i){var n=t.iterator[i.method];if(void 0===n){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=void 0,e(t,i),"throw"===i.method))return u;i.method="throw",i.arg=TypeError("The iterator does not provide a 'throw' method")}return u}var a=c(n,t.iterator,i.arg);if("throw"===a.type)return i.method="throw",i.arg=a.arg,i.delegate=null,u;var o=a.arg;return o?o.done?(i[t.resultName]=o.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=void 0),i.delegate=null,u):o:(i.method="throw",i.arg=TypeError("iterator result is not an object"),i.delegate=null,u)}(o,s);if(l){if(l===u)continue;return l}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===a)throw a="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);a="executing";var h=c(e,i,s);if("normal"===h.type){if(a=s.done?"completed":"suspendedYield",h.arg===u)continue;return{value:h.arg,done:s.done}}"throw"===h.type&&(a="completed",s.method="throw",s.arg=h.arg)}},o}function c(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u={};function h(){}function d(){}function f(){}var p={};p[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==t&&i.call(g,a)&&(p=g);var v=f.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function x(e,t){var n;this._invoke=function(a,o){function s(){return new t(function(n,s){!function n(a,o,s,l){var u=c(e[a],e,o);if("throw"!==u.type){var h=u.arg,d=h.value;return d&&"object"==typeof d&&i.call(d,"__await")?t.resolve(d.__await).then(function(e){n("next",e,s,l)},function(e){n("throw",e,s,l)}):t.resolve(d).then(function(e){h.value=e,s(h)},function(e){return n("throw",e,s,l)})}l(u.arg)}(a,o,n,s)})}return n=n?n.then(s,s):s()}}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:w}}function w(){return{value:void 0,done:!0}}return d.prototype=v.constructor=f,f.constructor=d,f[s]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(x.prototype),x.prototype[o]=function(){return this},e.AsyncIterator=x,e.async=function(t,i,n,a,o){void 0===o&&(o=Promise);var s=new x(l(t,i,n,a),o);return e.isGeneratorFunction(i)?s:s.next().then(function(e){return e.done?e.value:s.next()})},y(v),v[s]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var i in e)t.push(i);return t.reverse(),function i(){for(;t.length;){var n=t.pop();if(n in e)return i.value=n,i.done=!1,i}return i.done=!0,i}},e.values=S,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(i,n){return s.type="throw",s.arg=e,t.next=i,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),M(i),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var n=i.completion;if("throw"===n.type){var a=n.arg;M(i)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:S(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){e.exports=!1},function(e,t,i){var n=i(8),a=i(0),o=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:i(21)?"pure":"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){var i=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++i+n).toString(36))}},function(e,t,i){var n=i(0),a=i(8),o=i(13),s=i(15),l=i(6),c=function(e,t,i){var u,h,d,f,p=e&c.F,m=e&c.G,g=e&c.S,v=e&c.P,y=e&c.B,x=m?n:g?n[t]||(n[t]={}):(n[t]||{}).prototype,_=m?a:a[t]||(a[t]={}),M=_.prototype||(_.prototype={});for(u in m&&(i=t),i)d=((h=!p&&x&&void 0!==x[u])?x:i)[u],f=y&&h?l(d,n):v&&"function"==typeof d?l(Function.call,d):d,x&&s(x,u,d,e&c.U),_[u]!=d&&o(_,u,f),v&&M[u]!=d&&(M[u]=d)};n.core=a,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,i){var n=i(4),a=i(0).document,o=n(a)&&n(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},function(e,t){var i={}.hasOwnProperty;e.exports=function(e,t){return i.call(e,t)}},function(e,t){e.exports={}},function(e,t,i){var n=i(51),a=Math.min;e.exports=function(e){return e>0?a(n(e),0x1fffffffffffff):0}},function(e,t,i){var n,a,o,s=i(6),l=i(54),c=i(55),u=i(26),h=i(0),d=h.process,f=h.setImmediate,p=h.clearImmediate,m=h.MessageChannel,g=h.Dispatch,v=0,y={},x=function(){var e=+this;if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},_=function(e){x.call(e.data)};f&&p||(f=function(e){for(var t=[],i=1;arguments.length>i;)t.push(arguments[i++]);return y[++v]=function(){l("function"==typeof e?e:Function(e),t)},n(v),v},p=function(e){delete y[e]},"process"==i(7)(d)?n=function(e){d.nextTick(s(x,e,1))}:g&&g.now?n=function(e){g.now(s(x,e,1))}:m?(o=(a=new m).port2,a.port1.onmessage=_,n=s(o.postMessage,o,1)):h.addEventListener&&"function"==typeof postMessage&&!h.importScripts?(n=function(e){h.postMessage(e+"","*")},h.addEventListener("message",_,!1)):n="onreadystatechange"in u("script")?function(e){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),x.call(e)}}:function(e){setTimeout(s(x,e,1),0)}),e.exports={set:f,clear:p}},function(e,t,i){"use strict";var n=i(10);function a(e){var t,i;this.promise=new e(function(e,n){if(void 0!==t||void 0!==i)throw TypeError("Bad Promise constructor");t=e,i=n}),this.resolve=n(t),this.reject=n(i)}e.exports.f=function(e){return new a(e)}},function(e,t,i){var n=i(2).getSymbolSize;t.getPositions=function(e){var t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},function(e,t,i){var n=i(17),a=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return a[4*(e-1)+0];case n.M:return a[4*(e-1)+1];case n.Q:return a[4*(e-1)+2];case n.H:return a[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return o[4*(e-1)+0];case n.M:return o[4*(e-1)+1];case n.Q:return o[4*(e-1)+2];case n.H:return o[4*(e-1)+3];default:return}}},function(e,t,i){var n=i(2),a=i(33),o=i(17),s=i(3),l=i(35),c=i(16),u=n.getBCHDigit(7973);function h(e,t){return s.getCharCountIndicator(e,t)+4}t.from=function(e,t){return l.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,i){if(!l.isValid(e))throw Error("Invalid QR Code version");void 0===i&&(i=s.BYTE);var o=8*(n.getSymbolTotalCodewords(e)-a.getTotalCodewordsCount(e,t));if(i===s.MIXED)return o;var c=o-h(i,e);switch(i){case s.NUMERIC:return Math.floor(c/10*3);case s.ALPHANUMERIC:return Math.floor(c/11*2);case s.KANJI:return Math.floor(c/13);case s.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,i){var n,a=o.from(i,o.M);if(c(e)){if(e.length>1){for(var l=1;l<=40;l++)if(function(e,t){var i=0;return e.forEach(function(e){var n=h(e.mode,t);i+=n+e.getBitsLength()}),i}(e,l)<=t.getCapacity(l,a,s.MIXED))return l;return}if(0===e.length)return 1;n=e[0]}else n=e;return function(e,i,n){for(var a=1;a<=40;a++)if(i<=t.getCapacity(a,n,e))return a}(n.mode,n.getLength(),a)},t.getEncodedBits=function(e){if(!l.isValid(e)||e<7)throw Error("Invalid QR Code version");for(var t=e<<12;n.getBCHDigit(t)-u>=0;)t^=7973<<n.getBCHDigit(t)-u;return e<<12|t}},function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},function(e,t){var i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(i=i.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=/[0-9]+/g,t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");var a=RegExp("^"+i+"$"),o=RegExp("^[0-9]+$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return a.test(e)},t.testNumeric=function(e){return o.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},function(e,t,i){var n=i(3),a=i(94),o=i(95),s=i(96),l=i(97),c=i(36),u=i(2),h=i(98);function d(e){return unescape(encodeURIComponent(e)).length}function f(e,t,i){for(var n,a=[];null!==(n=e.exec(i));)a.push({data:n[0],index:n.index,mode:t,length:n[0].length});return a}function p(e){var t,i,a=f(c.NUMERIC,n.NUMERIC,e),o=f(c.ALPHANUMERIC,n.ALPHANUMERIC,e);return u.isKanjiModeEnabled()?(t=f(c.BYTE,n.BYTE,e),i=f(c.KANJI,n.KANJI,e)):(t=f(c.BYTE_KANJI,n.BYTE,e),i=[]),a.concat(o,t,i).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function m(e,t){switch(t){case n.NUMERIC:return a.getBitsLength(e);case n.ALPHANUMERIC:return o.getBitsLength(e);case n.KANJI:return l.getBitsLength(e);case n.BYTE:return s.getBitsLength(e)}}function g(e,t){var i,c=n.getBestModeForData(e);if((i=n.from(t,c))!==n.BYTE&&i.bit<c.bit)throw Error('"'+e+'" cannot be encoded with mode '+n.toString(i)+".\n Suggested mode is: "+n.toString(c));switch(i!==n.KANJI||u.isKanjiModeEnabled()||(i=n.BYTE),i){case n.NUMERIC:return new a(e);case n.ALPHANUMERIC:return new o(e);case n.KANJI:return new l(e);case n.BYTE:return new s(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,i){for(var a=function(e,t){for(var i={},a={start:{}},o=["start"],s=0;s<e.length;s++){for(var l=e[s],c=[],u=0;u<l.length;u++){var h=l[u],d=""+s+u;c.push(d),i[d]={node:h,lastCount:0},a[d]={};for(var f=0;f<o.length;f++){var p=o[f];i[p]&&i[p].node.mode===h.mode?(a[p][d]=m(i[p].lastCount+h.length,h.mode)-m(i[p].lastCount,h.mode),i[p].lastCount+=h.length):(i[p]&&(i[p].lastCount=h.length),a[p][d]=m(h.length,h.mode)+4+n.getCharCountIndicator(h.mode,t))}}o=c}for(f=0;f<o.length;f++)a[o[f]].end=0;return{map:a,table:i}}(function(e){for(var t=[],i=0;i<e.length;i++){var a=e[i];switch(a.mode){case n.NUMERIC:t.push([a,{data:a.data,mode:n.ALPHANUMERIC,length:a.length},{data:a.data,mode:n.BYTE,length:a.length}]);break;case n.ALPHANUMERIC:t.push([a,{data:a.data,mode:n.BYTE,length:a.length}]);break;case n.KANJI:t.push([a,{data:a.data,mode:n.BYTE,length:d(a.data)}]);break;case n.BYTE:t.push([{data:a.data,mode:n.BYTE,length:d(a.data)}])}}return t}(p(e,u.isKanjiModeEnabled())),i),o=h.find_path(a.map,"start","end"),s=[],l=1;l<o.length-1;l++)s.push(a.table[o[l]].node);return t.fromArray(s.reduce(function(e,t){var i=e.length-1>=0?e[e.length-1]:null;return i&&i.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(p(e,u.isKanjiModeEnabled()))}},function(e,t){function i(e,t,i,n,a,o,s){try{var l=e[o](s),c=l.value}catch(e){return void i(e)}l.done?t(c):Promise.resolve(c).then(n,a)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise(function(a,o){var s=e.apply(t,n);function l(e){i(s,a,o,l,c,"next",e)}function c(e){i(s,a,o,l,c,"throw",e)}l(void 0)})}}},function(e,t,i){var n=i(65),a=i(66),o=i(67),s=i(69);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||s()}},function(e,t,i){var n=i(79),a=i(80),o=i(99),s=i(100);function l(e,t,i,o,s){var l=[].slice.call(arguments,1),c=l.length,u="function"==typeof l[c-1];if(!u&&!n())throw Error("Callback required as last argument");if(!u){if(c<1)throw Error("Too few arguments provided");return 1===c?(i=t,t=o=void 0):2!==c||t.getContext||(o=i,i=t,t=void 0),new Promise(function(n,s){try{var l=a.create(i,o);n(e(l,t,o))}catch(e){s(e)}})}if(c<2)throw Error("Too few arguments provided");2===c?(s=i,i=t,t=o=void 0):3===c&&(t.getContext&&void 0===s?(s=o,o=void 0):(s=o,o=i,i=t,t=void 0));try{var h=a.create(i,o);s(null,e(h,t,o))}catch(e){s(e)}}t.create=a.create,t.toCanvas=l.bind(null,o.render),t.toDataURL=l.bind(null,o.renderToDataURL),t.toString=l.bind(null,function(e,t,i){return s.render(e,i)})},function(e,t,i){"use strict";i.r(t);var n,a=i(19),o=i.n(a),s=(i(42),i(64),i(20),i(38)),l=i.n(s),c=i(39),u=i.n(c),h=(i(70),i(40)),d=i.n(h),f=i(18),p=i(34),m=i(37),g=i(32),v=function(e,t,i,n){return!!e.find(function(e){var a=u()(e,2),o=a[0],s=a[1];return i>=o&&i<o+t&&n>=s&&n<s+t})};f.qrToImageData=function(e,t,i){for(var n=t.modules.size,a=t.modules.data,o=f.getScale(n,i),s=Math.floor((n+2*i.margin)*o),l=i.margin*o,c=[i.color.light,i.color.dark],u=g.getPositions(t.version),h=n>21?[[n-9,n-9]]:[],d=0;d<s;d++)for(var p=0;p<s;p++){var m=4*(d*s+p),y=i.color.light;if(d>=l&&p>=l&&d<s-l&&p<s-l){var x=Math.floor((d-l)/o),_=Math.floor((p-l)/o);(v(u,7,x,_)||v(h,5,x,_)||d%o>o/4&&d%o<=o/4*3&&p%o>o/4&&p%o<=o/4*3)&&(y=c[+!!a[x*n+_]])}e[m++]=y.r,e[m++]=y.g,e[m++]=y.b,e[m]=y.a}},t.default={make:(n=l()(o.a.mark(function e(t){var i,n,a,s,l,c,u,h,f,g,v,y,x,_,M,b,S,w,T,E,A,C,P,L,R,D,I=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=void 0===(n=(i=I.length>1&&void 0!==I[1]?I[1]:{}).size)?640:n,l=void 0===(s=i.paddingSize)?a/20:s,u=void 0===(c=i.iconURL)?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAABNVBMVEUqZPQqZfQAAACxxvspZPUpZfYqZPUqZPUqZPUqZfUqZPUqZPYqZPkoZfcqY/8qZPQqZfUrZPUqZPUqZPUqZfUqZPcoZv9+ovgbjvk+dPYqZfUqZPUrZfYpY/UmZv8rZfX///8C3P+VsvoLvv37/P/E1Pz9/v8D1f+6zfyZtfoza/X3+f+wxvsifPc+c/Y4bvUvaPXx9f/m7f6/0fyduPoakvlJe/YobPUJxf21yfyrwvuNrPp/ovlvlvhOf/bt8v/e5/7W4f3K2f3H1/2kvfuhuvt5nflbiPdSgvdDdvbT3/2mv/uEpvl0mvhmj/hgi/dXhffa5P6txPsTqPuSsPoWoPqJqfljjvcggvfp8P7h6f6yx/xqk/ji6v7O3P3O2/0Rr/sldPYGzf4Ot/yhvPsYmfkdivissIOZAAAAH3RSTlPBwADkZTT246PZznEoHQbtqpl+eUk/DNXSxLGSiUsUjRqlfAAABE5JREFUeNq124dSU1EUheFrpNl7L3tdTCIkMY0Yld57V7FhL+//CJIgoxu4iyOX9T3BP8mcPXf2mRNl2h5cvdttMi+f2T5nes51ZtraARcik3r8fLfAu3dxL6Cjy7Ti+NCCM527AR0m9jZOKOg63wq40GViv+KkgrOtgMjUXseJBVczUafJvYwTCy5lonMm9yje9fiJHXA+umxy3+Lkgo6o2+TiOLmgJzK5JzEpiNIFFMLGAClIGdAYDjqFpCBlQA79IaeQFKQMqAOlgFNICtIFFLBjoGrc83h/wduTCphDy+eKUfFBT08oYBht42UjvsakIGXAEnbVm/QUkoKUAZP4Y2zeEv2MSUHKgCL2FN+QMUAK0gWU8Vd2hZxCUpAqYBX/yC+TgISCtAFbcBokIKEgZUAJTsJQ/BIne5kuYBHwctXD5sBjUvAlVUAW+y1W7KBnr78/SnQ7RUATDhmKRJpfYAQOG4qagFc4TG3dDtIE9MFhQ1ETMI7DZWdtP0lANY8E+SHzNAHzSDZtjiZgFsQLcyQBDTC5gjmCgByoCTcUFQF1cO8XjEgfUMBR3jWNSB0whyPV5szhAeu9/TsajcbMzMz09PTS0tLg4ODmZqlU+vBiR1/LwI7cjqmpyckNHK24HRjQNoWTl5/9j4DCBARehQdY5SMEpsMDbGEMAn3V4AAbrUFgshAcYOtFCExUaICzmoXA+wUW4K1AYWyUBXhDUKjNsQBvBgrZERbgfYBCfpgFeDlI9AYHVBchMUgCvMo4JPqqJMAp1yHxuUACnOYYJDbKJMCZL0KivkACnLUsJMbmSYAzkodEcY0EOMvQyI6QAKcfGvlhF0AMQqTfBRBDvYfKgfnQe7RREhBgBsyoBUgXMAUia44koAZiwhxFQBlMyRxFwBswQ+YoArbArJqjCNgEUzZHEbAIomaOJCALYtIcRUATzJI5ioARMMPmKAJegZkzRxHQB6ZgjiJgHETdHEVANQ9iwBxFwDyYfnMUAbNgVsxRBDTCv0Y0ATkQeXMkAe9AbJijCKgg+KZEE7AW/jWiCVgGs22OImAQzII5ioBPIIrmSAKKID6ZowhYCF9DaQK2wSybowgYArNmjiLgBZiKOYqADRDvzJEE5EHkzFEEjIJpmKMIWAEza44ioB/MvDmKgAEQ+ao5ioA6iHFzFAEFMH3mKALmwu+JNQHDYEbMUQRMg2maowiYDF8QagJqIBbNUQSUwWyaowhYBbNljiJgC8wbcxQBpfAFoSZgInxBqAnIgpgyRxHQBPPDiNAA6YIwfUAvmHUjQgOkC8L0Ae9BfLRjORWdsVBVMAN2LFeiyxZqPXxBGK4jumaOYEFIdUbXzRFcV1IXo4tnzRFcVxL3W89+L1mYMX5deRxR++HzDQtSAVOyY+h+2A7InHf/gnJB6PXczLQCWq512ZGWU19Xet3X917ft9y8ca7nFHfrNHPn1H+50tGZ2fUblSLbLbJxjtoAAAAASUVORK5CYII=":c,f=void 0===(h=i.iconSize)?a/5:h,v=void 0===(g=i.iconMargin)?0:g,x=void 0===(y=i.errorCorrectionLevel)?"Q":y,(_=document.createElement("canvas")).width=a,_.height=a,M=_.getContext("2d")){e.next=8;break}throw Error("Cannot create canvas context");case 8:return M.fillStyle="#ffffff",M.fillRect(0,0,a,a),b=4*Math.ceil(a/320),S=m.rawSplit(t),w=Math.max(4,p.getBestVersionForData(S,x)),e.next=15,d.a.toDataURL(t,{margin:0,scale:b,version:w,errorCorrectionLevel:x});case 15:return T=e.sent,(E=new Image).src=T,e.next=20,new Promise(function(e,t){var i=[e,t];E.onload=i[0],E.onerror=i[1]});case 20:if(A=a-2*l,null==M||M.drawImage(E,l,l,A,A),!u){e.next=35;break}return C=f+2*v,P=A/Math.round(E.naturalWidth/b),C=Math.ceil((2*Math.ceil((C-P)/(2*P))+1)*P),L=(a-C)/2,M.fillRect(L,L,C,C),R=(a-f)/2,(D=new Image).src=u,e.next=34,new Promise(function(e,t){var i=[e,t];D.onload=i[0],D.onerror=i[1]});case 34:M.drawImage(D,R,R,f,f);case 35:return e.abrupt("return",_.toDataURL("png"));case 36:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)})}},function(e,t,i){"use strict";var n,a,o,s,l=i(21),c=i(0),u=i(6),h=i(12),d=i(24),f=i(4),p=i(10),m=i(47),g=i(48),v=i(53),y=i(30).set,x=i(56)(),_=i(31),M=i(57),b=i(58),S=i(59),w=c.TypeError,T=c.process,E=T&&T.versions,A=E&&E.v8||"",C=c.Promise,P="process"==h(T),L=function(){},R=a=_.f,D=!!function(){try{var e=C.resolve(1),t=(e.constructor={})[i(1)("species")]=function(e){e(L,L)};return(P||"function"==typeof PromiseRejectionEvent)&&e.then(L)instanceof t&&0!==A.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(e){}}(),I=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},U=function(e,t){if(!e._n){e._n=!0;var i=e._c;x(function(){for(var n=e._v,a=1==e._s,o=0;i.length>o;)!function(t){var i,o,s,l=a?t.ok:t.fail,c=t.resolve,u=t.reject,h=t.domain;try{l?(a||(2==e._h&&k(e),e._h=1),!0===l?i=n:(h&&h.enter(),i=l(n),h&&(h.exit(),s=!0)),i===t.promise?u(w("Promise-chain cycle")):(o=I(i))?o.call(i,c,u):c(i)):u(n)}catch(e){h&&!s&&h.exit(),u(e)}}(i[o++]);e._c=[],e._n=!1,t&&!e._h&&O(e)})}},O=function(e){y.call(c,function(){var t,i,n,a=e._v,o=N(e);if(o&&(t=M(function(){P?T.emit("unhandledRejection",a,e):(i=c.onunhandledrejection)?i({promise:e,reason:a}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",a)}),e._h=P||N(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},N=function(e){return 1!==e._h&&0===(e._a||e._c).length},k=function(e){y.call(c,function(){var t;P?T.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},z=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),U(t,!0))},F=function(e){var t,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===e)throw w("Promise can't be resolved itself");(t=I(e))?x(function(){var n={_w:i,_d:!1};try{t.call(e,u(F,n,1),u(z,n,1))}catch(e){z.call(n,e)}}):(i._v=e,i._s=1,U(i,!1))}catch(e){z.call({_w:i,_d:!1},e)}}};D||(C=function(e){m(this,C,"Promise","_h"),p(e),n.call(this);try{e(u(F,this,1),u(z,this,1))}catch(e){z.call(this,e)}},(n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=i(60)(C.prototype,{then:function(e,t){var i=R(v(this,C));return i.ok="function"!=typeof e||e,i.fail="function"==typeof t&&t,i.domain=P?T.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&U(this,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new n;this.promise=e,this.resolve=u(F,e,1),this.reject=u(z,e,1)},_.f=R=function(e){return e===C||e===s?new o(e):a(e)}),d(d.G+d.W+!D*d.F,{Promise:C}),i(61)(C,"Promise"),i(62)("Promise"),s=i(8).Promise,d(d.S+!D*d.F,"Promise",{reject:function(e){var t=R(this);return(0,t.reject)(e),t.promise}}),d(d.S+d.F*(l||!D),"Promise",{resolve:function(e){return S(l&&this===s?C:this,e)}}),d(d.S+!(D&&i(63)(function(e){C.all(e).catch(L)}))*d.F,"Promise",{all:function(e){var t=this,i=R(t),n=i.resolve,a=i.reject,o=M(function(){var i=[],o=0,s=1;g(e,!1,function(e){var l=o++,c=!1;i.push(void 0),s++,t.resolve(e).then(function(e){c||(c=!0,i[l]=e,--s||n(i))},a)}),--s||n(i)});return o.e&&a(o.v),i.promise},race:function(e){var t=this,i=R(t),n=i.reject,a=M(function(){g(e,!1,function(e){t.resolve(e).then(i.resolve,n)})});return a.e&&n(a.v),i.promise}})},function(e,t,i){e.exports=!i(11)&&!i(25)(function(){return 7!=Object.defineProperty(i(26)("div"),"a",{get:function(){return 7}}).a})},function(e,t,i){var n=i(4);e.exports=function(e,t){var i,a;if(!n(e))return e;if(t&&"function"==typeof(i=e.toString)&&!n(a=i.call(e))||"function"==typeof(i=e.valueOf)&&!n(a=i.call(e))||!t&&"function"==typeof(i=e.toString)&&!n(a=i.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,i){e.exports=i(22)("native-function-to-string",Function.toString)},function(e,t){e.exports=function(e,t,i,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(i+": incorrect invocation!");return e}},function(e,t,i){var n=i(6),a=i(49),o=i(50),s=i(9),l=i(29),c=i(52),u={},h={};(t=e.exports=function(e,t,i,d,f){var p,m,g,v,y=f?function(){return e}:c(e),x=n(i,d,t?2:1),_=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(o(y)){for(p=l(e.length);p>_;_++)if((v=t?x(s(m=e[_])[0],m[1]):x(e[_]))===u||v===h)return v}else for(g=y.call(e);!(m=g.next()).done;)if((v=a(g,x,m.value,t))===u||v===h)return v}).BREAK=u,t.RETURN=h},function(e,t,i){var n=i(9);e.exports=function(e,t,i,a){try{return a?t(n(i)[0],i[1]):t(i)}catch(t){var o=e.return;throw void 0!==o&&n(o.call(e)),t}}},function(e,t,i){var n=i(28),a=i(1)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||o[a]===e)}},function(e,t){var i=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e*=1)?0:(e>0?n:i)(e)}},function(e,t,i){var n=i(12),a=i(1)("iterator"),o=i(28);e.exports=i(8).getIteratorMethod=function(e){if(null!=e)return e[a]||e["@@iterator"]||o[n(e)]}},function(e,t,i){var n=i(9),a=i(10),o=i(1)("species");e.exports=function(e,t){var i,s=n(e).constructor;return void 0===s||null==(i=n(s)[o])?t:a(i)}},function(e,t){e.exports=function(e,t,i){var n=void 0===i;switch(t.length){case 0:return n?e():e.call(i);case 1:return n?e(t[0]):e.call(i,t[0]);case 2:return n?e(t[0],t[1]):e.call(i,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(i,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(i,t[0],t[1],t[2],t[3])}return e.apply(i,t)}},function(e,t,i){var n=i(0).document;e.exports=n&&n.documentElement},function(e,t,i){var n=i(0),a=i(30).set,o=n.MutationObserver||n.WebKitMutationObserver,s=n.process,l=n.Promise,c="process"==i(7)(s);e.exports=function(){var e,t,i,u=function(){var n,a;for(c&&(n=s.domain)&&n.exit();e;){a=e.fn,e=e.next;try{a()}catch(n){throw e?i():t=void 0,n}}t=void 0,n&&n.enter()};if(c)i=function(){s.nextTick(u)};else if(!o||n.navigator&&n.navigator.standalone)if(l&&l.resolve){var h=l.resolve(void 0);i=function(){h.then(u)}}else i=function(){a.call(n,u)};else{var d=!0,f=document.createTextNode("");new o(u).observe(f,{characterData:!0}),i=function(){f.data=d=!d}}return function(n){var a={fn:n,next:void 0};t&&(t.next=a),e||(e=a,i()),t=a}}},function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},function(e,t,i){var n=i(0).navigator;e.exports=n&&n.userAgent||""},function(e,t,i){var n=i(9),a=i(4),o=i(31);e.exports=function(e,t){if(n(e),a(t)&&t.constructor===e)return t;var i=o.f(e);return(0,i.resolve)(t),i.promise}},function(e,t,i){var n=i(15);e.exports=function(e,t,i){for(var a in t)n(e,a,t[a],i);return e}},function(e,t,i){var n=i(14).f,a=i(27),o=i(1)("toStringTag");e.exports=function(e,t,i){e&&!a(e=i?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},function(e,t,i){"use strict";var n=i(0),a=i(14),o=i(11),s=i(1)("species");e.exports=function(e){var t=n[e];o&&t&&!t[s]&&a.f(t,s,{configurable:!0,get:function(){return this}})}},function(e,t,i){var n=i(1)("iterator"),a=!1;try{var o=[7][n]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!a)return!1;var i=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:i=!0}},o[n]=function(){return s},e(o)}catch(e){}return i}},function(e,t,i){"use strict";var n=i(12),a={};a[i(1)("toStringTag")]="z",a+""!="[object z]"&&i(15)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var i=[],n=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return i}}},function(e,t,i){var n=i(68);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}},function(e,t){e.exports=function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,i){"use strict";var n=i(24),a=i(71)(5),o=!0;"find"in[]&&[,].find(function(){o=!1}),n(n.P+n.F*o,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i(78)("find")},function(e,t,i){var n=i(6),a=i(72),o=i(73),s=i(29),l=i(75);e.exports=function(e,t){var i=1==e,c=2==e,u=3==e,h=4==e,d=6==e,f=5==e||d,p=t||l;return function(t,l,m){for(var g,v,y=o(t),x=a(y),_=n(l,m,3),M=s(x.length),b=0,S=i?p(t,M):c?p(t,0):void 0;M>b;b++)if((f||b in x)&&(v=_(g=x[b],b,y),e)){if(i)S[b]=v;else if(v)switch(e){case 3:return!0;case 5:return g;case 6:return b;case 2:S.push(g)}else if(h)return!1}return d?-1:u||h?h:S}}},function(e,t,i){var n=i(7);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,i){var n=i(74);e.exports=function(e){return Object(n(e))}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,i){var n=i(76);e.exports=function(e,t){return new(n(e))(t)}},function(e,t,i){var n=i(4),a=i(77),o=i(1)("species");e.exports=function(e){var t;return a(e)&&("function"==typeof(t=e.constructor)&&(t===Array||a(t.prototype))&&(t=void 0),n(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},function(e,t,i){var n=i(7);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,i){var n=i(1)("unscopables"),a=Array.prototype;null==a[n]&&i(13)(a,n,{}),e.exports=function(e){a[n][e]=!0}},function(e,t){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},function(e,t,i){var n=i(5),a=i(2),o=i(17),s=i(81),l=i(82),c=i(83),u=i(32),h=i(84),d=i(33),f=i(85),p=i(34),m=i(93),g=i(3),v=i(37),y=i(16);function x(e,t,i){var n,a,o=e.size,s=m.getEncodedBits(t,i);for(n=0;n<15;n++)a=1==(s>>n&1),n<6?e.set(n,8,a,!0):n<8?e.set(n+1,8,a,!0):e.set(o-15+n,8,a,!0),n<8?e.set(8,o-n-1,a,!0):n<9?e.set(8,15-n-1+1,a,!0):e.set(8,15-n-1,a,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){if(void 0===e||""===e)throw Error("No input text");var i,m,_=o.M;return void 0!==t&&(_=o.from(t.errorCorrectionLevel,o.M),i=p.from(t.version),m=h.from(t.maskPattern),t.toSJISFunc&&a.setToSJISFunction(t.toSJISFunc)),function(e,t,i,o){if(y(e))m=v.fromArray(e);else{if("string"!=typeof e)throw Error("Invalid data");var m,_=t;if(!_){var M=v.rawSplit(e);_=p.getBestVersionForData(M,i)}m=v.fromString(e,_||40)}var b=p.getBestVersionForData(m,i);if(!b)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<b)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+b+".\n")}else t=b;var S=function(e,t,i){var o=new s;i.forEach(function(t){o.put(t.mode.bit,4),o.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(o)});var l=8*(a.getSymbolTotalCodewords(e)-d.getTotalCodewordsCount(e,t));for(o.getLengthInBits()+4<=l&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);for(var c=(l-o.getLengthInBits())/8,u=0;u<c;u++)o.put(u%2?17:236,8);return function(e,t,i){for(var o=a.getSymbolTotalCodewords(t),s=d.getTotalCodewordsCount(t,i),l=o-s,c=d.getBlocksCount(t,i),u=c-o%c,h=Math.floor(o/c),p=Math.floor(l/c),m=p+1,g=h-p,v=new f(g),y=0,x=Array(c),_=Array(c),M=0,b=n.from(e.buffer),S=0;S<c;S++){var w=S<u?p:m;x[S]=b.slice(y,y+w),_[S]=v.encode(x[S]),y+=w,M=Math.max(M,w)}var T,E,A=n.alloc(o),C=0;for(T=0;T<M;T++)for(E=0;E<c;E++)T<x[E].length&&(A[C++]=x[E][T]);for(T=0;T<g;T++)for(E=0;E<c;E++)A[C++]=_[E][T];return A}(o,e,t)}(t,i,m),w=new l(a.getSymbolSize(t));return function(e,t){for(var i=e.size,n=u.getPositions(t),a=0;a<n.length;a++)for(var o=n[a][0],s=n[a][1],l=-1;l<=7;l++)if(!(o+l<=-1||i<=o+l))for(var c=-1;c<=7;c++)s+c<=-1||i<=s+c||(l>=0&&l<=6&&(0===c||6===c)||c>=0&&c<=6&&(0===l||6===l)||l>=2&&l<=4&&c>=2&&c<=4?e.set(o+l,s+c,!0,!0):e.set(o+l,s+c,!1,!0))}(w,t),function(e){for(var t=e.size,i=8;i<t-8;i++){var n=i%2==0;e.set(i,6,n,!0),e.set(6,i,n,!0)}}(w),function(e,t){for(var i=c.getPositions(t),n=0;n<i.length;n++)for(var a=i[n][0],o=i[n][1],s=-2;s<=2;s++)for(var l=-2;l<=2;l++)-2===s||2===s||-2===l||2===l||0===s&&0===l?e.set(a+s,o+l,!0,!0):e.set(a+s,o+l,!1,!0)}(w,t),x(w,i,0),t>=7&&function(e,t){for(var i,n,a,o=e.size,s=p.getEncodedBits(t),l=0;l<18;l++)i=Math.floor(l/3),n=l%3+o-8-3,a=1==(s>>l&1),e.set(i,n,a,!0),e.set(n,i,a,!0)}(w,t),function(e,t){for(var i=e.size,n=-1,a=i-1,o=7,s=0,l=i-1;l>0;l-=2)for(6===l&&l--;;){for(var c=0;c<2;c++)if(!e.isReserved(a,l-c)){var u=!1;s<t.length&&(u=1==(t[s]>>>o&1)),e.set(a,l-c,u),-1==--o&&(s++,o=7)}if((a+=n)<0||i<=a){a-=n,n=-n;break}}}(w,S),isNaN(o)&&(o=h.getBestMask(w,x.bind(null,w,i))),h.applyMask(o,w),x(w,i,o),{modules:w,version:t,errorCorrectionLevel:i,maskPattern:o,segments:m}}(e,i,_,m)}},function(e,t){function i(){this.buffer=[],this.length=0}i.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var i=0;i<t;i++)this.putBit(1==(e>>>t-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=i},function(e,t,i){var n=i(5);function a(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=n.alloc(e*e),this.reservedBit=n.alloc(e*e)}a.prototype.set=function(e,t,i,n){var a=e*this.size+t;this.data[a]=i,n&&(this.reservedBit[a]=!0)},a.prototype.get=function(e,t){return this.data[e*this.size+t]},a.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},a.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=a},function(e,t,i){var n=i(2).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];for(var t=Math.floor(e/7)+2,i=n(e),a=145===i?26:2*Math.ceil((i-13)/(2*t-2)),o=[i-7],s=1;s<t-1;s++)o[s]=o[s-1]-a;return o.push(6),o.reverse()},t.getPositions=function(e){for(var i=[],n=t.getRowColCoords(e),a=n.length,o=0;o<a;o++)for(var s=0;s<a;s++)0===o&&0===s||0===o&&s===a-1||o===a-1&&0===s||i.push([n[o],n[s]]);return i}},function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){for(var t=e.size,i=0,n=0,a=0,o=null,s=null,l=0;l<t;l++){n=a=0,o=s=null;for(var c=0;c<t;c++){var u=e.get(l,c);u===o?n++:(n>=5&&(i+=3+(n-5)),o=u,n=1),(u=e.get(c,l))===s?a++:(a>=5&&(i+=3+(a-5)),s=u,a=1)}n>=5&&(i+=3+(n-5)),a>=5&&(i+=3+(a-5))}return i},t.getPenaltyN2=function(e){for(var t=e.size,i=0,n=0;n<t-1;n++)for(var a=0;a<t-1;a++){var o=e.get(n,a)+e.get(n,a+1)+e.get(n+1,a)+e.get(n+1,a+1);4!==o&&0!==o||i++}return 3*i},t.getPenaltyN3=function(e){for(var t=e.size,i=0,n=0,a=0,o=0;o<t;o++){n=a=0;for(var s=0;s<t;s++)n=n<<1&2047|e.get(o,s),s>=10&&(1488===n||93===n)&&i++,a=a<<1&2047|e.get(s,o),s>=10&&(1488===a||93===a)&&i++}return 40*i},t.getPenaltyN4=function(e){for(var t=0,i=e.data.length,n=0;n<i;n++)t+=e.data[n];return 10*Math.abs(Math.ceil(100*t/i/5)-10)},t.applyMask=function(e,i){for(var n=i.size,a=0;a<n;a++)for(var o=0;o<n;o++)i.isReserved(o,a)||i.xor(o,a,function(e,i,n){switch(e){case t.Patterns.PATTERN000:return(i+n)%2==0;case t.Patterns.PATTERN001:return i%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(i+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return i*n%2+i*n%3==0;case t.Patterns.PATTERN110:return(i*n%2+i*n%3)%2==0;case t.Patterns.PATTERN111:return(i*n%3+(i+n)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,a))},t.getBestMask=function(e,i){for(var n=Object.keys(t.Patterns).length,a=0,o=1/0,s=0;s<n;s++){i(s),t.applyMask(s,e);var l=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),l<o&&(o=l,a=s)}return a}},function(e,t,i){var n=i(5),a=i(86),o=i(88).Buffer;function s(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}s.prototype.initialize=function(e){this.degree=e,this.genPoly=a.generateECPolynomial(this.degree)},s.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");var t=n.alloc(this.degree),i=o.concat([e,t],e.length+this.degree),s=a.mod(i,this.genPoly),l=this.degree-s.length;if(l>0){var c=n.alloc(this.degree);return s.copy(c,l),c}return s},e.exports=s},function(e,t,i){var n=i(5),a=i(87);t.mul=function(e,t){for(var i=n.alloc(e.length+t.length-1),o=0;o<e.length;o++)for(var s=0;s<t.length;s++)i[o+s]^=a.mul(e[o],t[s]);return i},t.mod=function(e,t){for(var i=n.from(e);i.length-t.length>=0;){for(var o=i[0],s=0;s<t.length;s++)i[s]^=a.mul(t[s],o);for(var l=0;l<i.length&&0===i[l];)l++;i=i.slice(l)}return i},t.generateECPolynomial=function(e){for(var i=n.from([1]),o=0;o<e;o++)i=t.mul(i,[1,a.exp(o)]);return i}},function(e,t,i){var n=i(5),a=n.alloc(512),o=n.alloc(256);!function(){for(var e=1,t=0;t<255;t++)a[t]=e,o[e]=t,256&(e<<=1)&&(e^=285);for(t=255;t<512;t++)a[t]=a[t-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return o[e]},t.exp=function(e){return a[e]},t.mul=function(e,t){return 0===e||0===t?0:a[o[e]+o[t]]}},function(e,t,i){"use strict";(function(e){var n=i(90),a=i(91),o=i(92);function s(){return c.TYPED_ARRAY_SUPPORT?0x7fffffff:0x3fffffff}function l(e,t){if(s()<t)throw RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=c.prototype:(null===e&&(e=new c(t)),e.length=t),e}function c(e,t,i){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(e,t,i);if("number"==typeof e){if("string"==typeof t)throw Error("If encoding is specified then the first argument must be a string");return d(this,e)}return u(this,e,t,i)}function u(e,t,i,n){if("number"==typeof t)throw TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,i,n){if(t.byteLength,i<0||t.byteLength<i)throw RangeError("'offset' is out of bounds");if(t.byteLength<i+(n||0))throw RangeError("'length' is out of bounds");return t=void 0===i&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,i):new Uint8Array(t,i,n),c.TYPED_ARRAY_SUPPORT?(e=t).__proto__=c.prototype:e=f(e,t),e}(e,t,i,n):"string"==typeof t?function(e,t,i){if("string"==typeof i&&""!==i||(i="utf8"),!c.isEncoding(i))throw TypeError('"encoding" must be a valid string encoding');var n=0|m(t,i),a=(e=l(e,n)).write(t,i);return a!==n&&(e=e.slice(0,a)),e}(e,t,i):function(e,t){if(c.isBuffer(t)){var i,n=0|p(t.length);return 0===(e=l(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(i=t.length)!=i?l(e,0):f(e,t);if("Buffer"===t.type&&o(t.data))return f(e,t.data)}throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function h(e){if("number"!=typeof e)throw TypeError('"size" argument must be a number');if(e<0)throw RangeError('"size" argument must not be negative')}function d(e,t){if(h(t),e=l(e,t<0?0:0|p(t)),!c.TYPED_ARRAY_SUPPORT)for(var i=0;i<t;++i)e[i]=0;return e}function f(e,t){var i=t.length<0?0:0|p(t.length);e=l(e,i);for(var n=0;n<i;n+=1)e[n]=255&t[n];return e}function p(e){if(e>=s())throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|e}function m(e,t){if(c.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var i=e.length;if(0===i)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":case void 0:return L(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return R(e).length;default:if(n)return L(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,i){var a,o,s,l=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===i||i>this.length)&&(i=this.length),i<=0)||(i>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,i){var n,a=e.length;(!t||t<0)&&(t=0),(!i||i<0||i>a)&&(i=a);for(var o="",s=t;s<i;++s){o+=(n=e[s])<16?"0"+n.toString(16):n.toString(16)}return o}(this,t,i);case"utf8":case"utf-8":return M(this,t,i);case"ascii":return function(e,t,i){var n="";i=Math.min(e.length,i);for(var a=t;a<i;++a)n+=String.fromCharCode(127&e[a]);return n}(this,t,i);case"latin1":case"binary":return function(e,t,i){var n="";i=Math.min(e.length,i);for(var a=t;a<i;++a)n+=String.fromCharCode(e[a]);return n}(this,t,i);case"base64":return a=this,o=t,s=i,0===o&&s===a.length?n.fromByteArray(a):n.fromByteArray(a.slice(o,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,i){for(var n=e.slice(t,i),a="",o=0;o<n.length;o+=2)a+=String.fromCharCode(n[o]+256*n[o+1]);return a}(this,t,i);default:if(l)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),l=!0}}function v(e,t,i){var n=e[t];e[t]=e[i],e[i]=n}function y(e,t,i,n,a){if(0===e.length)return -1;if("string"==typeof i?(n=i,i=0):i>0x7fffffff?i=0x7fffffff:i<-0x80000000&&(i=-0x80000000),isNaN(i*=1)&&(i=a?0:e.length-1),i<0&&(i=e.length+i),i>=e.length){if(a)return -1;i=e.length-1}else if(i<0){if(!a)return -1;i=0}if("string"==typeof t&&(t=c.from(t,n)),c.isBuffer(t))return 0===t.length?-1:x(e,t,i,n,a);if("number"==typeof t)return t&=255,c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(e,t,i):Uint8Array.prototype.lastIndexOf.call(e,t,i):x(e,[t],i,n,a);throw TypeError("val must be string, number or Buffer")}function x(e,t,i,n,a){var o,s=1,l=e.length,c=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,l/=2,c/=2,i/=2}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(a){var h=-1;for(o=i;o<l;o++)if(u(e,o)===u(t,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===c)return h*s}else -1!==h&&(o-=o-h),h=-1}else for(i+c>l&&(i=l-c),o=i;o>=0;o--){for(var d=!0,f=0;f<c;f++)if(u(e,o+f)!==u(t,f)){d=!1;break}if(d)return o}return -1}function _(e,t,i,n){return D(function(e){for(var t=[],i=0;i<e.length;++i)t.push(255&e.charCodeAt(i));return t}(t),e,i,n)}function M(e,t,i){i=Math.min(e.length,i);for(var n=[],a=t;a<i;){var o,s,l,c,u=e[a],h=null,d=u>239?4:u>223?3:u>191?2:1;if(a+d<=i)switch(d){case 1:u<128&&(h=u);break;case 2:128==(192&(o=e[a+1]))&&(c=(31&u)<<6|63&o)>127&&(h=c);break;case 3:o=e[a+1],s=e[a+2],128==(192&o)&&128==(192&s)&&(c=(15&u)<<12|(63&o)<<6|63&s)>2047&&(c<55296||c>57343)&&(h=c);break;case 4:o=e[a+1],s=e[a+2],l=e[a+3],128==(192&o)&&128==(192&s)&&128==(192&l)&&(c=(15&u)<<18|(63&o)<<12|(63&s)<<6|63&l)>65535&&c<1114112&&(h=c)}null===h?(h=65533,d=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),a+=d}var f=n.length;if(f<=4096)return String.fromCharCode.apply(String,n);for(var p="",m=0;m<f;)p+=String.fromCharCode.apply(String,n.slice(m,m+=4096));return p}function b(e,t,i){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>i)throw RangeError("Trying to access beyond buffer length")}function S(e,t,i,n,a,o){if(!c.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<o)throw RangeError('"value" argument is out of bounds');if(i+n>e.length)throw RangeError("Index out of range")}function w(e,t,i,n){t<0&&(t=65535+t+1);for(var a=0,o=Math.min(e.length-i,2);a<o;++a)e[i+a]=(t&255<<8*(n?a:1-a))>>>8*(n?a:1-a)}function T(e,t,i,n){t<0&&(t=0xffffffff+t+1);for(var a=0,o=Math.min(e.length-i,4);a<o;++a)e[i+a]=t>>>8*(n?a:3-a)&255}function E(e,t,i,n,a,o){if(i+n>e.length||i<0)throw RangeError("Index out of range")}function A(e,t,i,n,o){return o||E(e,0,i,4),a.write(e,t,i,n,23,4),i+4}function C(e,t,i,n,o){return o||E(e,0,i,8),a.write(e,t,i,n,52,8),i+8}t.Buffer=c,t.SlowBuffer=function(e){return+e!=e&&(e=0),c.alloc(+e)},t.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=s(),c.poolSize=8192,c._augment=function(e){return e.__proto__=c.prototype,e},c.from=function(e,t,i){return u(null,e,t,i)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(e,t,i){return h(e),e<=0?l(null,e):void 0!==t?"string"==typeof i?l(null,e).fill(t,i):l(null,e).fill(t):l(null,e)},c.allocUnsafe=function(e){return d(null,e)},c.allocUnsafeSlow=function(e){return d(null,e)},c.isBuffer=function(e){return!(null==e||!e._isBuffer)},c.compare=function(e,t){if(!c.isBuffer(e)||!c.isBuffer(t))throw TypeError("Arguments must be Buffers");if(e===t)return 0;for(var i=e.length,n=t.length,a=0,o=Math.min(i,n);a<o;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:+(n<i)},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!o(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);if(void 0===t)for(t=0,i=0;i<e.length;++i)t+=e[i].length;var i,n=c.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){var s=e[i];if(!c.isBuffer(s))throw TypeError('"list" argument must be an Array of Buffers');s.copy(n,a),a+=s.length}return n},c.byteLength=m,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)v(this,t,t+1);return this},c.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},c.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},c.prototype.toString=function(){var e=0|this.length;return 0===e?"":0==arguments.length?M(this,0,e):g.apply(this,arguments)},c.prototype.equals=function(e){if(!c.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){var e="",i=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,i).match(/.{2}/g).join(" "),this.length>i&&(e+=" ... ")),"<Buffer "+e+">"},c.prototype.compare=function(e,t,i,n,a){if(!c.isBuffer(e))throw TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===i&&(i=e?e.length:0),void 0===n&&(n=0),void 0===a&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return -1;if(t>=i)return 1;if(this===e)return 0;for(var o=(a>>>=0)-(n>>>=0),s=(i>>>=0)-(t>>>=0),l=Math.min(o,s),u=this.slice(n,a),h=e.slice(t,i),d=0;d<l;++d)if(u[d]!==h[d]){o=u[d],s=h[d];break}return o<s?-1:+(s<o)},c.prototype.includes=function(e,t,i){return -1!==this.indexOf(e,t,i)},c.prototype.indexOf=function(e,t,i){return y(this,e,t,i,!0)},c.prototype.lastIndexOf=function(e,t,i){return y(this,e,t,i,!1)},c.prototype.write=function(e,t,i,n){if(void 0===t)n="utf8",i=this.length,t=0;else if(void 0===i&&"string"==typeof t)n=t,i=this.length,t=0;else{if(!isFinite(t))throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(i)?(i|=0,void 0===n&&(n="utf8")):(n=i,i=void 0)}var a,o,s,l,c,u,h=this.length-t;if((void 0===i||i>h)&&(i=h),e.length>0&&(i<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var d=!1;;)switch(n){case"hex":return function(e,t,i,n){i=Number(i)||0;var a=e.length-i;n?(n=Number(n))>a&&(n=a):n=a;var o=t.length;if(o%2!=0)throw TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var l=parseInt(t.substr(2*s,2),16);if(isNaN(l))break;e[i+s]=l}return s}(this,e,t,i);case"utf8":case"utf-8":return a=t,o=i,D(L(e,this.length-a),this,a,o);case"ascii":case"latin1":case"binary":return _(this,e,t,i);case"base64":return s=t,l=i,D(R(e),this,s,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,u=i,D(function(e,t){for(var i,n,a=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(i=e.charCodeAt(o))>>8,a.push(i%256),a.push(n);return a}(e,this.length-c),this,c,u);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},c.prototype.slice=function(e,t){var i,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),c.TYPED_ARRAY_SUPPORT)(i=this.subarray(e,t)).__proto__=c.prototype;else{var a=t-e;i=new c(a,void 0);for(var o=0;o<a;++o)i[o]=this[o+e]}return i},c.prototype.readUIntLE=function(e,t,i){e|=0,t|=0,i||b(e,t,this.length);for(var n=this[e],a=1,o=0;++o<t&&(a*=256);)n+=this[e+o]*a;return n},c.prototype.readUIntBE=function(e,t,i){e|=0,t|=0,i||b(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n},c.prototype.readUInt8=function(e,t){return t||b(e,1,this.length),this[e]},c.prototype.readUInt16LE=function(e,t){return t||b(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUInt16BE=function(e,t){return t||b(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUInt32LE=function(e,t){return t||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},c.prototype.readUInt32BE=function(e,t){return t||b(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,t,i){e|=0,t|=0,i||b(e,t,this.length);for(var n=this[e],a=1,o=0;++o<t&&(a*=256);)n+=this[e+o]*a;return n>=(a*=128)&&(n-=Math.pow(2,8*t)),n},c.prototype.readIntBE=function(e,t,i){e|=0,t|=0,i||b(e,t,this.length);for(var n=t,a=1,o=this[e+--n];n>0&&(a*=256);)o+=this[e+--n]*a;return o>=(a*=128)&&(o-=Math.pow(2,8*t)),o},c.prototype.readInt8=function(e,t){return t||b(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){t||b(e,2,this.length);var i=this[e]|this[e+1]<<8;return 32768&i?0xffff0000|i:i},c.prototype.readInt16BE=function(e,t){t||b(e,2,this.length);var i=this[e+1]|this[e]<<8;return 32768&i?0xffff0000|i:i},c.prototype.readInt32LE=function(e,t){return t||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return t||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,t){return t||b(e,4,this.length),a.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return t||b(e,4,this.length),a.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return t||b(e,8,this.length),a.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return t||b(e,8,this.length),a.read(this,e,!1,52,8)},c.prototype.writeUIntLE=function(e,t,i,n){e*=1,t|=0,i|=0,n||S(this,e,t,i,Math.pow(2,8*i)-1,0);var a=1,o=0;for(this[t]=255&e;++o<i&&(a*=256);)this[t+o]=e/a&255;return t+i},c.prototype.writeUIntBE=function(e,t,i,n){e*=1,t|=0,i|=0,n||S(this,e,t,i,Math.pow(2,8*i)-1,0);var a=i-1,o=1;for(this[t+a]=255&e;--a>=0&&(o*=256);)this[t+a]=e/o&255;return t+i},c.prototype.writeUInt8=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,1,255,0),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},c.prototype.writeUInt16LE=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):w(this,e,t,!0),t+2},c.prototype.writeUInt16BE=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):w(this,e,t,!1),t+2},c.prototype.writeUInt32LE=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,4,0xffffffff,0),c.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):T(this,e,t,!0),t+4},c.prototype.writeUInt32BE=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,4,0xffffffff,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):T(this,e,t,!1),t+4},c.prototype.writeIntLE=function(e,t,i,n){if(e*=1,t|=0,!n){var a=Math.pow(2,8*i-1);S(this,e,t,i,a-1,-a)}var o=0,s=1,l=0;for(this[t]=255&e;++o<i&&(s*=256);)e<0&&0===l&&0!==this[t+o-1]&&(l=1),this[t+o]=(e/s|0)-l&255;return t+i},c.prototype.writeIntBE=function(e,t,i,n){if(e*=1,t|=0,!n){var a=Math.pow(2,8*i-1);S(this,e,t,i,a-1,-a)}var o=i-1,s=1,l=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===l&&0!==this[t+o+1]&&(l=1),this[t+o]=(e/s|0)-l&255;return t+i},c.prototype.writeInt8=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,1,127,-128),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):w(this,e,t,!0),t+2},c.prototype.writeInt16BE=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):w(this,e,t,!1),t+2},c.prototype.writeInt32LE=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,4,0x7fffffff,-0x80000000),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):T(this,e,t,!0),t+4},c.prototype.writeInt32BE=function(e,t,i){return e*=1,t|=0,i||S(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):T(this,e,t,!1),t+4},c.prototype.writeFloatLE=function(e,t,i){return A(this,e,t,!0,i)},c.prototype.writeFloatBE=function(e,t,i){return A(this,e,t,!1,i)},c.prototype.writeDoubleLE=function(e,t,i){return C(this,e,t,!0,i)},c.prototype.writeDoubleBE=function(e,t,i){return C(this,e,t,!1,i)},c.prototype.copy=function(e,t,i,n){if(i||(i=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("sourceStart out of bounds");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);var a,o=n-i;if(this===e&&i<t&&t<n)for(a=o-1;a>=0;--a)e[a+t]=this[a+i];else if(o<1e3||!c.TYPED_ARRAY_SUPPORT)for(a=0;a<o;++a)e[a+t]=this[a+i];else Uint8Array.prototype.set.call(e,this.subarray(i,i+o),t);return o},c.prototype.fill=function(e,t,i,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,i=this.length):"string"==typeof i&&(n=i,i=this.length),1===e.length){var a,o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<i)throw RangeError("Out of range index");if(i<=t)return this;if(t>>>=0,i=void 0===i?this.length:i>>>0,e||(e=0),"number"==typeof e)for(a=t;a<i;++a)this[a]=e;else{var s=c.isBuffer(e)?e:L(new c(e,n).toString()),l=s.length;for(a=0;a<i-t;++a)this[a+t]=s[a%l]}return this};var P=/[^+\/0-9A-Za-z-_]/g;function L(e,t){var i;t=t||1/0;for(var n=e.length,a=null,o=[],s=0;s<n;++s){if((i=e.charCodeAt(s))>55295&&i<57344){if(!a){if(i>56319||s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}a=i;continue}if(i<56320){(t-=3)>-1&&o.push(239,191,189),a=i;continue}i=65536+(a-55296<<10|i-56320)}else a&&(t-=3)>-1&&o.push(239,191,189);if(a=null,i<128){if((t-=1)<0)break;o.push(i)}else if(i<2048){if((t-=2)<0)break;o.push(i>>6|192,63&i|128)}else if(i<65536){if((t-=3)<0)break;o.push(i>>12|224,i>>6&63|128,63&i|128)}else{if(!(i<1114112))throw Error("Invalid code point");if((t-=4)<0)break;o.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}}return o}function R(e){return n.toByteArray(function(e){var t;if((e=((t=e).trim?t.trim():t.replace(/^\s+|\s+$/g,"")).replace(P,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function D(e,t,i,n){for(var a=0;a<n&&!(a+i>=t.length||a>=e.length);++a)t[a+i]=e[a];return a}}).call(this,i(89))},function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";t.byteLength=function(e){var t=u(e),i=t[0],n=t[1];return 3*(i+n)/4-n},t.toByteArray=function(e){var t,i,n=u(e),s=n[0],l=n[1],c=new o(3*(s+l)/4-l),h=0,d=l>0?s-4:s;for(i=0;i<d;i+=4)t=a[e.charCodeAt(i)]<<18|a[e.charCodeAt(i+1)]<<12|a[e.charCodeAt(i+2)]<<6|a[e.charCodeAt(i+3)],c[h++]=t>>16&255,c[h++]=t>>8&255,c[h++]=255&t;return 2===l&&(t=a[e.charCodeAt(i)]<<2|a[e.charCodeAt(i+1)]>>4,c[h++]=255&t),1===l&&(t=a[e.charCodeAt(i)]<<10|a[e.charCodeAt(i+1)]<<4|a[e.charCodeAt(i+2)]>>2,c[h++]=t>>8&255,c[h++]=255&t),c},t.fromByteArray=function(e){for(var t,i=e.length,a=i%3,o=[],s=0,l=i-a;s<l;s+=16383)o.push(function(e,t,i){for(var a,o=[],s=t;s<i;s+=3)o.push(n[(a=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+n[a>>12&63]+n[a>>6&63]+n[63&a]);return o.join("")}(e,s,s+16383>l?l:s+16383));return 1===a?o.push(n[(t=e[i-1])>>2]+n[t<<4&63]+"=="):2===a&&o.push(n[(t=(e[i-2]<<8)+e[i-1])>>10]+n[t>>4&63]+n[t<<2&63]+"="),o.join("")};for(var n=[],a=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,c=s.length;l<c;++l)n[l]=s[l],a[s.charCodeAt(l)]=l;function u(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var i=e.indexOf("=");return -1===i&&(i=t),[i,i===t?0:4-i%4]}a[45]=62,a[95]=63},function(e,t){t.read=function(e,t,i,n,a){var o,s,l=8*a-n-1,c=(1<<l)-1,u=c>>1,h=-7,d=i?a-1:0,f=i?-1:1,p=e[t+d];for(d+=f,o=p&(1<<-h)-1,p>>=-h,h+=l;h>0;o=256*o+e[t+d],d+=f,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+e[t+d],d+=f,h-=8);if(0===o)o=1-u;else{if(o===c)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=u}return(p?-1:1)*s*Math.pow(2,o-n)},t.write=function(e,t,i,n,a,o){var s,l,c,u=8*o-a-1,h=(1<<u)-1,d=h>>1,f=5960464477539062e-23*(23===a),p=n?0:o-1,m=n?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(l=+!!isNaN(t),s=h):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+d>=1?f/c:f*Math.pow(2,1-d))*c>=2&&(s++,c/=2),s+d>=h?(l=0,s=h):s+d>=1?(l=(t*c-1)*Math.pow(2,a),s+=d):(l=t*Math.pow(2,d-1)*Math.pow(2,a),s=0));a>=8;e[i+p]=255&l,p+=m,l/=256,a-=8);for(s=s<<a|l,u+=a;u>0;e[i+p]=255&s,p+=m,s/=256,u-=8);e[i+p-m]|=128*g}},function(e,t){var i={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==i.call(e)}},function(e,t,i){var n=i(2),a=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){for(var i=e.bit<<3|t,o=i<<10;n.getBCHDigit(o)-a>=0;)o^=1335<<n.getBCHDigit(o)-a;return 21522^(i<<10|o)}},function(e,t,i){var n=i(3);function a(e){this.mode=n.NUMERIC,this.data=e.toString()}a.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){for(t=0;t+3<=this.data.length;t+=3)i=parseInt(this.data.substr(t,3),10),e.put(i,10);var t,i,n=this.data.length-t;n>0&&(i=parseInt(this.data.substr(t),10),e.put(i,3*n+1))},e.exports=a},function(e,t,i){var n=i(3),a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=n.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){var t;for(t=0;t+2<=this.data.length;t+=2){var i=45*a.indexOf(this.data[t]);i+=a.indexOf(this.data[t+1]),e.put(i,11)}this.data.length%2&&e.put(a.indexOf(this.data[t]),6)},e.exports=o},function(e,t,i){var n=i(5),a=i(3);function o(e){this.mode=a.BYTE,this.data=n.from(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(var t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)},e.exports=o},function(e,t,i){var n=i(3),a=i(2);function o(e){this.mode=n.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var i=a.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else{if(!(i>=57408&&i<=60351))throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");i-=49472}i=192*(i>>>8&255)+(255&i),e.put(i,13)}},e.exports=o},function(e,t,i){"use strict";var n={single_source_shortest_paths:function(e,t,i){var a={},o={};o[t]=0;var s,l,c,u,h,d,f,p=n.PriorityQueue.make();for(p.push(t,0);!p.empty();)for(c in l=(s=p.pop()).value,u=s.cost,h=e[l]||{})h.hasOwnProperty(c)&&(d=u+h[c],f=o[c],(void 0===o[c]||f>d)&&(o[c]=d,p.push(c,d),a[c]=l));if(void 0!==i&&void 0===o[i])throw Error("Could not find a path from "+t+" to "+i+".");return a},extract_shortest_path_from_predecessor_list:function(e,t){for(var i=[],n=t;n;)i.push(n),e[n],n=e[n];return i.reverse(),i},find_path:function(e,t,i){var a=n.single_source_shortest_paths(e,t,i);return n.extract_shortest_path_from_predecessor_list(a,i)},PriorityQueue:{make:function(e){var t,i=n.PriorityQueue,a={};for(t in e=e||{},i)i.hasOwnProperty(t)&&(a[t]=i[t]);return a.queue=[],a.sorter=e.sorter||i.default_sorter,a},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=n},function(e,t,i){var n=i(18);t.render=function(e,t,i){var a,o=i,s=t;void 0!==o||t&&t.getContext||(o=t,t=void 0),t||(s=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),o=n.getOptions(o);var l=n.getImageWidth(e.modules.size,o),c=s.getContext("2d"),u=c.createImageData(l,l);return n.qrToImageData(u.data,e,o),a=s,c.clearRect(0,0,a.width,a.height),a.style||(a.style={}),a.height=l,a.width=l,a.style.height=l+"px",a.style.width=l+"px",c.putImageData(u,0,0),s},t.renderToDataURL=function(e,i,n){var a=n;void 0!==a||i&&i.getContext||(a=i,i=void 0),a||(a={});var o=t.render(e,i,a),s=a.type||"image/png",l=a.rendererOpts||{};return o.toDataURL(s,l.quality)}},function(e,t,i){var n=i(18);function a(e,t){var i=e.a/255,n=t+'="'+e.hex+'"';return i<1?n+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':n}function o(e,t,i){var n=e+t;return void 0!==i&&(n+=" "+i),n}t.render=function(e,t,i){var s=n.getOptions(t),l=e.modules.size,c=e.modules.data,u=l+2*s.margin,h=s.color.light.a?"<path "+a(s.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",d="<path "+a(s.color.dark,"stroke")+' d="'+function(e,t,i){for(var n="",a=0,s=!1,l=0,c=0;c<e.length;c++){var u=Math.floor(c%t),h=Math.floor(c/t);u||s||(s=!0),e[c]?(l++,c>0&&u>0&&e[c-1]||(n+=s?o("M",u+i,.5+h+i):o("m",a,0),a=0,s=!1),u+1<t&&e[c+1]||(n+=o("h",l),l=0)):a++}return n}(c,l,s.margin)+'"/>',f='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+('viewBox="0 0 '+u+" ")+u+'" shape-rendering="crispEdges">'+h+d+"</svg>\n";return"function"==typeof i&&i(null,f),f}}],t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,(function(t){return e[t]}).bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=41)}()},312529:function(e,t,i){"use strict";var n=i(840063),a=i.n(n),o=i(824320),s=i.n(o)()(a());s.push([e.id,'.App {\n    text-align: center;\n}\n\n.App-logo {\n    height: 40vmin;\n    pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n    .App-logo {\n        animation: App-logo-spin infinite 20s linear;\n    }\n}\n\n.App-header {\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n}\n\n.App-link {\n    color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n.transientZoomLevel {\n    background: #424242;\n    border: none;\n    border-radius: 4px;\n    box-shadow: 0 0 2px #0000001a, 0 4px 8px #00000021;\n    color: #fff;\n    font-size: 14px;\n    height: 28px;\n    line-height: 28px;\n    justify-content: center;\n    left: calc(50% - 23px);\n    padding: 4px;\n    position: fixed;\n    text-align: center;\n    top: calc(50% - 14px);\n    width: 46px;\n    z-index: 100;\n    opacity: 1;\n\n    box-sizing: content-box;\n\n    pointer-events: none;\n}\n\n.showDisplayFalse {\n    opacity: 0;\n    transition: opacity 1s linear;\n}\n._toolbarWrapper_kgaa3_1 {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n._presentController_kgaa3_8 {\n  color: #ebebeb;\n  font-family: "DIN Alternate";\n  font-feature-settings: "tnum";\n  font-variant-numeric: tabular-nums;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 1000;\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.16);\n  background: #272a30;\n  cursor: auto;\n  display: inline-flex;\n  font-size: 12px;\n  font-weight: 500;\n  pointer-events: auto;\n  border-radius: 4px;\n  height: 40px;\n  padding: 0 10px;\n}\n@media only screen and (max-width: 480px) {\n  ._presentController_kgaa3_8 {\n    border-radius: 2px;\n    height: 30px;\n    padding: 0 8px;\n  }\n}\n._presentController_kgaa3_8 svg {\n  color: #FFFFFF;\n  pointer-events: none;\n}\n._autoTranslucent_kgaa3_36 {\n  transition: opacity 0.2s;\n  opacity: 0.5;\n}\n._autoTranslucent_kgaa3_36:hover {\n  opacity: 1;\n}\n._pageInfo_kgaa3_43 {\n  min-width: 36px;\n  text-align: center;\n  padding: 0 2px;\n  line-height: 1.4;\n}\n._group_kgaa3_49 {\n  display: flex;\n  align-items: center;\n}\n._group_kgaa3_49 + ._group_kgaa3_49:before {\n  content: \'\';\n  border-left: 1px solid #ffffff;\n  height: 20px;\n  margin: 0 10px;\n  opacity: 0.16;\n}\n._menu_kgaa3_60 {\n  background: #242529;\n}\n._menu_kgaa3_60 .dui-divider {\n  background: #FFFFFF;\n  opacity: 0.16;\n}\n._menu_kgaa3_60 .dui-menu-item {\n  color: #FFFFFF;\n  padding: 9px 28px;\n}\n._menu_kgaa3_60 .dui-menu-item:hover,\n._menu_kgaa3_60 .dui-menu-item.actived {\n  background: rgba(255, 255, 255, 0.12);\n}\n._menu_kgaa3_60 .dui-menu-item-description {\n  color: #FFFFFF;\n  opacity: 0.88;\n}\n._menu_kgaa3_60 .dui-menu-item-icon-container > svg {\n  color: #FFFFFF;\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n._btnWrap_kgaa3_85 {\n  display: flex;\n  justify-content: center;\n  color: #ebebeb;\n  width: 32px;\n  height: 32px;\n}\n._btnWrap_kgaa3_85 img,\n._btnWrap_kgaa3_85 svg,\n._btnWrap_kgaa3_85 span {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  margin: 6px;\n}\n@media only screen and (max-width: 480px) {\n  ._btnWrap_kgaa3_85 {\n    width: 20px;\n    height: 20px;\n  }\n  ._btnWrap_kgaa3_85 img,\n  ._btnWrap_kgaa3_85 svg,\n  ._btnWrap_kgaa3_85 span {\n    width: 18px;\n    height: 18px;\n    line-height: 18px;\n    margin: 1px;\n  }\n}\n._btnWrap_kgaa3_85 span {\n  text-align: center;\n}\n._btnWrap_kgaa3_85:hover,\n._btnWrap_kgaa3_85:active,\n._btnWrap_kgaa3_85._actived_kgaa3_72 {\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n}\n@media only screen and (max-width: 480px) {\n  ._btnWrap_kgaa3_85:hover,\n  ._btnWrap_kgaa3_85:active,\n  ._btnWrap_kgaa3_85._actived_kgaa3_72 {\n    border-radius: 2px;\n  }\n}\n._btnWrap_kgaa3_85 + ._btnWrap_kgaa3_85 {\n  margin-left: 4px;\n}\n._btnWrap_kgaa3_85._disabled_kgaa3_134 img {\n  opacity: 0.2;\n}\n._btnWrap_kgaa3_85._disabled_kgaa3_134 svg {\n  color: #818181;\n}\n._container_ydjzd_1 {\n  position: absolute;\n  bottom: 50px;\n  /* left: 200px; */\n  left: calc(50% - 45px);\n  height: auto;\n  width: 143px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 12px;\n  background: rgba(0, 0, 0, 0.64);\n  border-radius: 4px;\n  box-sizing: content-box;\n}\n._row_ydjzd_17 {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n._colorPicker_ydjzd_22 {\n  background: none!important;\n  box-shadow: none!important;\n  border: none!important;\n  padding-bottom: 4px!important;\n}\n._colorPicker_ydjzd_22 .dui-colorpicker-item:hover:after {\n  border: 1px solid rgba(255, 255, 255, 0.6);\n}\n._colorPicker_ydjzd_22 .dui-colorpicker-item.dui-colorpicker-item-selected:after {\n  border: 1px solid #ffffff;\n}\n._toolbarContainer_1uw1d_1 {\n  text-align: center;\n  width: 100%;\n}\n._atBottom_1uw1d_5 {\n  position: fixed;\n  left: 20px;\n  bottom: 20px;\n  width: calc(100% - 300px);\n}\n@media only screen and (min-width: 1400px) {\n  ._atBottom_1uw1d_5 {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 720px) {\n  ._atBottom_1uw1d_5 {\n    bottom: 64px;\n  }\n}\n',""]),t.A=/^(2515|7685|8302)$/.test(i.j)?null:s},972983:function(e,t,i){"use strict";var n=i(738679),a=i.n(n),o=i(756756),s=i.n(o),l=i(411884),c=i.n(l),u=i(551219),h=i.n(u),d=i(312529),f={attributes:{class:"dep-class"}};f.styleTagTransform=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},f.setAttributes=function(e,t){var n=i.nc;n&&(t.nonce=n),Object.keys(t).forEach(i=>{e.setAttribute(i,t[i])})},f.insert=function(e){var t=c()("head");if(!t)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)},f.domAPI=s(),f.insertStyleElement=h(),a()(d.A,f),d.A&&d.A.locals&&d.A.locals},275220:function(e,t,i){"use strict";if(i.d(t,{DD:function(){return u},Tn:function(){return b}}),/^(367|804)7$/.test(i.j))var n,a,o,s,l,c,u,h,d,f,p,m,g=i(675005);if(/^(367|804)7$/.test(i.j))var v=i(353773);if(/^(367|804)7$/.test(i.j))var y=i(157660);if(/^(367|804)7$/.test(i.j))var x=i(344098);i(88702),i(324670),i(133795),i(378401),i(429805),i(692569),i(473419),i(274935),i(254031),i(702123),i(554654),i(801518),i(510603),i(394002),i(585597),i(499291),i(842494),i(548911),i(749403),i(105786),i(893136),i(755209);var _=/^(367|804)7$/.test(i.j)?(0,x.A)(function e(){(0,y.A)(this,e)},null,[{key:"isMobile",value:function(){return/(mobile)/i.test(navigator.userAgent)}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isIOS",value:function(){return/(iphone|ipad|ipod)/i.test(navigator.userAgent)}},{key:"isIPad",value:function(){return/(ipad)/i.test(navigator.userAgent)}},{key:"isMac",value:function(){return!this.isMobile()&&/Mac OS X/i.test(navigator.userAgent)}},{key:"isFireFox",value:function(){return/firefox/i.test(navigator.userAgent)}},{key:"isChrome",value:function(){return/chrome/i.test(navigator.userAgent)}}]):null;(n=u||(u={}))[n.EMPTY=-1]="EMPTY",n[n.BREAK=3]="BREAK",n[n.BACKSPACE=8]="BACKSPACE",n[n.TAB=9]="TAB",n[n.CLEAR=12]="CLEAR",n[n.ENTER=13]="ENTER",n[n.SHIFT=16]="SHIFT",n[n.CTRL=17]="CTRL",n[n.ALT=18]="ALT",n[n.PAUSE=19]="PAUSE",n[n.CAPS_LOCK=20]="CAPS_LOCK",n[n.ESCAPE=27]="ESCAPE",n[n.SPACE=32]="SPACE",n[n.PAGE_UP=33]="PAGE_UP",n[n.PAGE_DOWN=34]="PAGE_DOWN",n[n.END=35]="END",n[n.HOME=36]="HOME",n[n.ARROW_LEFT=37]="ARROW_LEFT",n[n.ARROW_UP=38]="ARROW_UP",n[n.ARROW_RIGHT=39]="ARROW_RIGHT",n[n.ARROW_DOWN=40]="ARROW_DOWN",n[n.SELECT=41]="SELECT",n[n.PRINT=42]="PRINT",n[n.EXECUTE=43]="EXECUTE",n[n.PRINT_SCREEN=44]="PRINT_SCREEN",n[n.INSERT=45]="INSERT",n[n.DELETE=46]="DELETE",n[n.HELP=47]="HELP",n[n.NUM_0=48]="NUM_0",n[n.NUM_1=49]="NUM_1",n[n.NUM_2=50]="NUM_2",n[n.NUM_3=51]="NUM_3",n[n.NUM_4=52]="NUM_4",n[n.NUM_5=53]="NUM_5",n[n.NUM_6=54]="NUM_6",n[n.NUM_7=55]="NUM_7",n[n.NUM_8=56]="NUM_8",n[n.NUM_9=57]="NUM_9",n[n.A=65]="A",n[n.B=66]="B",n[n.C=67]="C",n[n.D=68]="D",n[n.E=69]="E",n[n.F=70]="F",n[n.G=71]="G",n[n.H=72]="H",n[n.I=73]="I",n[n.J=74]="J",n[n.K=75]="K",n[n.L=76]="L",n[n.M=77]="M",n[n.N=78]="N",n[n.O=79]="O",n[n.P=80]="P",n[n.Q=81]="Q",n[n.R=82]="R",n[n.S=83]="S",n[n.T=84]="T",n[n.U=85]="U",n[n.V=86]="V",n[n.W=87]="W",n[n.X=88]="X",n[n.Y=89]="Y",n[n.Z=90]="Z",n[n.META_LEFT=91]="META_LEFT",n[n.META_RIGHT=93]="META_RIGHT",n[n.NUM_TIMES=106]="NUM_TIMES",n[n.NUM_PLUS=107]="NUM_PLUS",n[n.NUM_MINUS=109]="NUM_MINUS",n[n.NUM_POINT=110]="NUM_POINT",n[n.NUM_DIVIDE=111]="NUM_DIVIDE",n[n.F1=112]="F1",n[n.F2=113]="F2",n[n.F3=114]="F3",n[n.F4=115]="F4",n[n.F5=116]="F5",n[n.F6=117]="F6",n[n.F7=118]="F7",n[n.F8=119]="F8",n[n.F9=120]="F9",n[n.F10=121]="F10",n[n.F11=122]="F11",n[n.F12=123]="F12",n[n.SEMI=186]="SEMI",n[n.EQUAL=187]="EQUAL",n[n.COMMA=188]="COMMA",n[n.MINUS=189]="MINUS",n[n.PERIOD=190]="PERIOD",n[n.SLASH=191]="SLASH",n[n.BACKQUOTE=192]="BACKQUOTE",n[n.BRACKET_LEFT=219]="BRACKET_LEFT",n[n.BACK_SLASH=220]="BACK_SLASH",n[n.BRACKET_RIGHT=221]="BRACKET_RIGHT",n[n.QUOTATION_MARK=222]="QUOTATION_MARK",(a=h||(h={}))[a.EQUAL=61]="EQUAL",a[a.MINUS=173]="MINUS",a[a.META_FIREFOX=224]="META_FIREFOX",(o=d||(d={}))[o.SHIFT=1e3]="SHIFT",o[o.ALT=1e4]="ALT",o[o.CTRL_WIN=1e5]="CTRL_WIN",o[o.CTRL_MAC=2e5]="CTRL_MAC",o[o.WIN=1e6]="WIN",o[o.COMMAND=2e6]="COMMAND",(s=f||(f={}))[s.PRIMARY_BUTTON=1e7]="PRIMARY_BUTTON",s[s.SECONDARY_BUTTON=2e7]="SECONDARY_BUTTON",s[s.MIDDLE_BUTTON=4e7]="MIDDLE_BUTTON",(l=p||(p={}))[l.WHEEL_ANTICLOCKWISE=1e8]="WHEEL_ANTICLOCKWISE",l[l.WHEEL_CLOCKWISE=2e8]="WHEEL_CLOCKWISE",(c=m||(m={})).KEY_UP="keyup",c.KEY_PRESS="keypress",c.KEY_DOWN="keydown";var M=/^(367|804)7$/.test(i.j)?(0,x.A)(function e(){(0,y.A)(this,e)},null,[{key:"getKeyCode",value:function(e){var t=e.keyCode;return _.isFireFox()&&(t===h.EQUAL?t=u.EQUAL:t===h.MINUS&&(t=u.MINUS)),t}},{key:"getMouseCode",value:function(e){return 1e7*e.buttons}},{key:"getWheelCode",value:function(e){var t=0;return e.deltaY>0?t=p.WHEEL_CLOCKWISE:e.deltaY<0&&(t=p.WHEEL_ANTICLOCKWISE),t}},{key:"getAssistKey",value:function(e){var t=0;return _.isMac()||_.isIPad()?(t+=e.altKey?d.ALT:0,t+=e.shiftKey?d.SHIFT:0,t+=e.ctrlKey?d.CTRL_MAC:0,t+=e.metaKey?d.COMMAND:0):(t+=e.altKey?d.ALT:0,t+=e.shiftKey?d.SHIFT:0,t+=e.ctrlKey?d.CTRL_WIN:0,t+=e.metaKey?d.WIN:0),t}}]):null,b=/^(367|804)7$/.test(i.j)?(0,x.A)(function e(t){var i=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,y.A)(this,e),this.keymap=new Map,this.onKeyEvent=function(e){var t=M.getKeyCode(e),n=M.getAssistKey(e);i.run(n+t,e)},this.onMouseEvent=function(e){var t=M.getMouseCode(e),n=M.getAssistKey(e);i.run(n+t,e)},this.onWheelEvent=function(e){var t=M.getWheelCode(e),n=M.getAssistKey(e);i.run(n+t,e)},this.sorter=function(e,t){var i,n;return(null!=(i=t.weight)?i:0)-(null!=(n=e.weight)?n:0)},this.useCapture=n,this.targetNode=null!=t?t:document,this.targetNode.addEventListener("keydown",this.onKeyEvent,{capture:n}),this.targetNode.addEventListener("mousedown",this.onMouseEvent,{capture:n}),this.targetNode.addEventListener("wheel",this.onWheelEvent,{passive:!1})},[{key:"register",value:function(e){var t=this;if(this.isValidContributedKeyBinding(e)){var i=_.isMac()||_.isIOS()?"mac":"win";[].concat(e.keyBindings[i]).forEach(function(i){if(i!==u.EMPTY){var n=[e];if(t.keymap.has(i)){var a=t.keymap.get(i);a&&(n=n.concat(a))}t.keymap.set(i,n)}})}}},{key:"removeByFeature",value:function(e){var t=this,i=[],n=[];this.keymap.forEach(function(t,a){t.forEach(function(o){o.handler===e&&(1===t.length?i.push(a):n.push([a,o]))})}),i.forEach(function(e){t.keymap.delete(e)}),n.forEach(function(e){var i=(0,v.A)(e,2),n=i[0],a=i[1],o=t.keymap.get(n);t.keymap.set(n,o.filter(function(e){return e.handler!==a.handler}))})}},{key:"destroy",value:function(){this.targetNode.removeEventListener("keydown",this.onKeyEvent,{capture:this.useCapture}),this.targetNode.removeEventListener("mousedown",this.onMouseEvent,{capture:this.useCapture}),this.targetNode.removeEventListener("wheel",this.onWheelEvent)}},{key:"remove",value:function(e){var t=this;if(this.isValidContributedKeyBinding(e)){var i=_.isMac()||_.isIOS()?"mac":"win";[].concat(e.keyBindings[i]).forEach(function(i){if(i!==u.EMPTY&&t.keymap.has(i)){var n=t.keymap.get(i),a=n.findIndex(function(t){return t.keyBindings.win.join("")===e.keyBindings.win.join("")&&t.keyBindings.mac.join("")===e.keyBindings.mac.join("")&&t.handler===e.handler&&t.when===e.when&&t.shouldPreventDefault===e.shouldPreventDefault&&t.weight===e.weight});if(-1!==a){var o=n.concat();o.splice(a,1),t.keymap.set(i,o)}}})}}},{key:"get",value:function(e){var t=this;return("number"==typeof e?[e]:e[_.isMac()||_.isIOS()?"mac":"win"]).reduce(function(e,i){var n;return e.concat.apply(e,(0,g.A)(null!=(n=t.keymap.get(i))?n:[]))},[])}},{key:"isValidContributedKeyBinding",value:function(e){return!!e&&"function"==typeof e.handler&&(!e.when||"function"==typeof e.when)&&(!e.keyBindings.mac||!!Array.isArray(e.keyBindings.mac))&&(!e.keyBindings.win||!!Array.isArray(e.keyBindings.win))&&(!e.description||!!Array.isArray(e.description))}},{key:"run",value:function(e,t){var i=this.keymap.get(e);null==i||i.sort(this.sorter),null==i||i.forEach(function(e){var i=e.handler,n=e.when,a=e.strict,o=e.shouldPreventDefault,s=void 0===o||o;if((void 0===a||a)&&t instanceof KeyboardEvent&&(1===t.location||2===t.location||t.repeat)){s&&t.preventDefault();return}((null==n?void 0:n(t))||!n)&&(s&&t.preventDefault(),i(t))})}}]):null},328857:function(e,t,i){"use strict";let n;i.r(t),i.d(t,{BaseGraphics3D:function(){return as},CameraPreset:function(){return aw},CameraPresetNames:function(){return aT},CameraPresetRotation:function(){return aE},CubeGraphics3D:function(){return al},ExtrudeSvgGraphics3D:function(){return ax},LightNames:function(){return a_},LightTypeNames:function(){return aM},MaterialNames:function(){return ab},MaterialTypeNames:function(){return aS}});var a=i(525123),o=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=Math.pow,h=(e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))l.call(t,i)&&h(e,i,t[i]);if(s)for(var i of s(t))c.call(t,i)&&h(e,i,t[i]);return e},f=(e,t,i)=>(h(e,"symbol"!=typeof t?t+"":t,i),i);let p="srgb",m="srgb-linear",g="display-p3",v="300 es";class y{addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let i=this._listeners;void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(t)&&i[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let i=this._listeners;return void 0!==i[e]&&-1!==i[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let i=this._listeners[e];if(void 0!==i){let e=i.indexOf(t);-1!==e&&i.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let i=t.slice(0);for(let t=0,n=i.length;t<n;t++)i[t].call(this,e);e.target=null}}}let x=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_=Math.PI/180,M=180/Math.PI;function b(){let e=0xffffffff*Math.random()|0,t=0xffffffff*Math.random()|0,i=0xffffffff*Math.random()|0,n=0xffffffff*Math.random()|0;return(x[255&e]+x[e>>8&255]+x[e>>16&255]+x[e>>24&255]+"-"+x[255&t]+x[t>>8&255]+"-"+x[t>>16&15|64]+x[t>>24&255]+"-"+x[63&i|128]+x[i>>8&255]+"-"+x[i>>16&255]+x[i>>24&255]+x[255&n]+x[n>>8&255]+x[n>>16&255]+x[n>>24&255]).toLowerCase()}function S(e,t,i){return Math.max(t,Math.min(i,e))}function w(e){return(e&e-1)==0&&0!==e}function T(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function E(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function A(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw Error("Invalid component type.")}}class C{constructor(e=0,t=0){C.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:Math.acos(S(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class P{constructor(){P.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,a,o,s,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],m=n[0],g=n[3],v=n[6],y=n[1],x=n[4],_=n[7],M=n[2],b=n[5],S=n[8];return a[0]=o*m+s*y+l*M,a[3]=o*g+s*x+l*b,a[6]=o*v+s*_+l*S,a[1]=c*m+u*y+h*M,a[4]=c*g+u*x+h*b,a[7]=c*v+u*_+h*S,a[2]=d*m+f*y+p*M,a[5]=d*g+f*x+p*b,a[8]=d*v+f*_+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+n*a*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,d=s*l-u*a,f=c*a-o*l,p=t*h+i*d+n*f;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=h*m,e[1]=(n*c-u*i)*m,e[2]=(s*i-n*o)*m,e[3]=d*m,e[4]=(u*t-n*l)*m,e[5]=(n*a-s*t)*m,e[6]=f*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*a)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,o,s){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(L.makeScale(e,t)),this}rotate(e){return this.premultiply(L.makeRotation(-e)),this}translate(e,t){return this.premultiply(L.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let e=0;e<9;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}let L=new P;function R(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function D(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function I(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function U(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}let O=new P().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),N=new P().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),k={[m]:e=>e,[p]:e=>e.convertSRGBToLinear(),[g]:function(e){return e.convertSRGBToLinear().applyMatrix3(N)}},z={[m]:e=>e,[p]:e=>e.convertLinearToSRGB(),[g]:function(e){return e.applyMatrix3(O).convertLinearToSRGB()}},F={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return m},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(e,t,i){if(!1===this.enabled||t===i||!t||!i)return e;let n=k[t],a=z[i];if(void 0===n||void 0===a)throw Error(`Unsupported color space conversion, "${t}" to "${i}".`);return a(n(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)}};class B{static getDataURL(e){let t;if(/^data:/i.test(e.src)||"undefined"==typeof HTMLCanvasElement)return e.src;if(e instanceof HTMLCanvasElement)t=e;else{void 0===n&&(n=D("canvas")),n.width=e.width,n.height=e.height;let i=n.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=n}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){let t=D("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let e=0;e<a.length;e++)a[e]=255*I(a[e]/255);return i.putImageData(n,0,0),t}if(!e.data)return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e;{let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*I(t[e]/255)):t[e]=I(t[e]);return{data:t,width:e.width,height:e.height}}}}class H{constructor(e=null){this.isSource=!0,this.uuid=b(),this.data=e,this.version=0}set needsUpdate(e){!0===e&&this.version++}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.images[this.uuid])return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(null!==n){let e;if(Array.isArray(n)){e=[];for(let t=0,i=n.length;t<i;t++)n[t].isDataTexture?e.push(G(n[t].image)):e.push(G(n[t]))}else e=G(n);i.url=e}return t||(e.images[this.uuid]=i),i}}function G(e){return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?B.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V=0;class W extends y{constructor(e=W.DEFAULT_IMAGE,t=W.DEFAULT_MAPPING,i=1001,n=1001,a=1006,o=1008,s=1023,l=1009,c=W.DEFAULT_ANISOTROPY,u=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V++}),this.uuid=b(),this.name="",this.source=new H(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new C(0,0),this.repeat=new C(1,1),this.center=new C(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new P,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(300!==this.mapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}}W.DEFAULT_IMAGE=null,W.DEFAULT_MAPPING=300,W.DEFAULT_ANISOTROPY=1;class j{constructor(e=0,t=0,i=0,n=1){j.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a,o=e.elements,s=o[0],l=o[4],c=o[8],u=o[1],h=o[5],d=o[9],f=o[2],p=o[6],m=o[10];if(.01>Math.abs(l-u)&&.01>Math.abs(c-f)&&.01>Math.abs(d-p)){if(.1>Math.abs(l+u)&&.1>Math.abs(c+f)&&.1>Math.abs(d+p)&&.1>Math.abs(s+h+m-3))return this.set(1,0,0,0),this;t=Math.PI;let e=(s+1)/2,o=(h+1)/2,g=(m+1)/2,v=(l+u)/4,y=(c+f)/4,x=(d+p)/4;return e>o&&e>g?e<.01?(i=0,n=.707106781,a=.707106781):(n=v/(i=Math.sqrt(e)),a=y/i):o>g?o<.01?(i=.707106781,n=0,a=.707106781):(i=v/(n=Math.sqrt(o)),a=x/n):g<.01?(i=.707106781,n=.707106781,a=0):(i=y/(a=Math.sqrt(g)),n=x/a),this.set(i,n,a,t),this}let g=Math.sqrt((p-d)*(p-d)+(c-f)*(c-f)+(u-l)*(u-l));return .001>Math.abs(g)&&(g=1),this.x=(p-d)/g,this.y=(c-f)/g,this.z=(u-l)/g,this.w=Math.acos((s+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q extends y{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new j(0,0,e,t),this.scissorTest=!1,this.viewport=new j(0,0,e,t),this.texture=new W({width:e,height:t,depth:1},i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==i.generateMipmaps&&i.generateMipmaps,this.texture.internalFormat=void 0!==i.internalFormat?i.internalFormat:null,this.texture.minFilter=void 0!==i.minFilter?i.minFilter:1006,this.depthBuffer=void 0===i.depthBuffer||i.depthBuffer,this.stencilBuffer=void 0!==i.stencilBuffer&&i.stencilBuffer,this.depthTexture=void 0!==i.depthTexture?i.depthTexture:null,this.samples=void 0!==i.samples?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new H(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Y extends W{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class X{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,o,s){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3],d=a[o+0],f=a[o+1],p=a[o+2],m=a[o+3];if(0===s){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(1===s){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(h!==m||l!==d||c!==f||u!==p){let e=1-s,t=l*d+c*f+u*p+h*m,i=t>=0?1:-1,n=1-t*t;if(n>Number.EPSILON){let a=Math.sqrt(n),o=Math.atan2(a,t*i);e=Math.sin(e*o)/a,s=Math.sin(s*o)/a}let a=s*i;if(l=l*e+d*a,c=c*e+f*a,u=u*e+p*a,h=h*e+m*a,e===1-s){let e=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=e,c*=e,u*=e,h*=e}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,a,o){let s=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=a[o],d=a[o+1],f=a[o+2],p=a[o+3];return e[t]=s*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-s*f,e[t+2]=c*p+u*f+s*d-l*h,e[t+3]=u*p-s*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(n/2),h=s(a/2),d=l(i/2),f=l(n/2),p=l(a/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return!1!==t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+s+h;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(u-l)*e,this._y=(a-c)*e,this._z=(o-n)*e}else if(i>s&&i>h){let e=2*Math.sqrt(1+i-s-h);this._w=(u-l)/e,this._x=.25*e,this._y=(n+o)/e,this._z=(a+c)/e}else if(s>h){let e=2*Math.sqrt(1+s-i-h);this._w=(a-c)/e,this._x=(n+o)/e,this._y=.25*e,this._z=(l+u)/e}else{let e=2*Math.sqrt(1+h-i-s);this._w=(o-n)/e,this._x=(a+c)/e,this._y=(l+u)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0):(this._x=0,this._y=-e.z,this._z=e.y)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x),this._w=i,this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(S(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(0===i)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+n*c-a*l,this._y=n*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-n*s,this._w=o*u-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(0===t)return this;if(1===t)return this.copy(e);let i=this._x,n=this._y,a=this._z,o=this._w,s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;let l=1-s*s;if(l<=Number.EPSILON){let e=1-t;return this._w=e*o+t*this._w,this._x=e*i+t*this._x,this._y=e*n+t*this._y,this._z=e*a+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=n*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(a),i*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return void 0===i&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Z.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Z.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*n-s*i,u=l*i+s*t-a*n,h=l*n+a*i-o*t,d=-a*t-o*i-s*n;return this.x=c*l+-(d*a)+-(u*s)- -(h*o),this.y=u*l+-(d*o)+-(h*a)- -(c*s),this.z=h*l+-(d*s)+-(c*o)- -(u*a),this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){let t=e.lengthSq();if(0===t)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return K.copy(this).projectOnVector(e),this.sub(K)}reflect(e){return this.sub(K.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:Math.acos(S(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-u(e,2));return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}let K=new J,Z=new X;class Q{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ee.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ee.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ee.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),void 0!==e.boundingBox)null===e.boundingBox&&e.computeBoundingBox(),et.copy(e.boundingBox),et.applyMatrix4(e.matrixWorld),this.union(et);else{let i=e.geometry;if(void 0!==i)if(t&&void 0!==i.attributes&&void 0!==i.attributes.position){let t=i.attributes.position;for(let i=0,n=t.count;i<n;i++)ee.fromBufferAttribute(t,i).applyMatrix4(e.matrixWorld),this.expandByPoint(ee)}else null===i.boundingBox&&i.computeBoundingBox(),et.copy(i.boundingBox),et.applyMatrix4(e.matrixWorld),this.union(et)}let i=e.children;for(let e=0,n=i.length;e<n;e++)this.expandByObject(i[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ee),ee.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),ec.subVectors(this.max,el),ei.subVectors(e.a,el),er.subVectors(e.b,el),en.subVectors(e.c,el),ea.subVectors(er,ei),eo.subVectors(en,er),es.subVectors(ei,en);let t=[0,-ea.z,ea.y,0,-eo.z,eo.y,0,-es.z,es.y,ea.z,0,-ea.x,eo.z,0,-eo.x,es.z,0,-es.x,-ea.y,ea.x,0,-eo.y,eo.x,0,-es.y,es.x,0];return!!ed(t,ei,er,en,ec)&&!!ed(t=[1,0,0,0,1,0,0,0,1],ei,er,en,ec)&&(eu.crossVectors(ea,eo),ed(t=[eu.x,eu.y,eu.z],ei,er,en,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ee).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ee).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||($[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}let $=[new J,new J,new J,new J,new J,new J,new J,new J],ee=new J,et=new Q,ei=new J,er=new J,en=new J,ea=new J,eo=new J,es=new J,el=new J,ec=new J,eu=new J,eh=new J;function ed(e,t,i,n,a){for(let o=0,s=e.length-3;o<=s;o+=3){eh.fromArray(e,o);let s=a.x*Math.abs(eh.x)+a.y*Math.abs(eh.y)+a.z*Math.abs(eh.z),l=t.dot(eh),c=i.dot(eh),u=n.dot(eh);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}let ef=new Q,ep=new J,em=new J;class eg{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;void 0!==t?i.copy(t):ef.setFromPoints(e).getCenter(i);let n=0;for(let t=0,a=e.length;t<a;t++)n=Math.max(n,i.distanceToSquared(e[t]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius)),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ep.subVectors(e,this.center);let t=ep.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),i=(e-this.radius)*.5;this.center.addScaledVector(ep,i/e),this.radius+=i}return this}union(e){return e.isEmpty()||(this.isEmpty()?this.copy(e):!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(em.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ep.copy(e.center).add(em)),this.expandByPoint(ep.copy(e.center).sub(em)))),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}let ev=new J,ey=new J,ex=new J,e_=new J,eM=new J,eb=new J,eS=new J;class ew{constructor(){ew.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,a,o,s,l,c,u,h,d,f,p,m,g){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=n,v[1]=a,v[5]=o,v[9]=s,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=d,v[3]=f,v[7]=p,v[11]=m,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ew().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/eT.setFromMatrixColumn(e,0).length(),a=1/eT.setFromMatrixColumn(e,1).length(),o=1/eT.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(a),h=Math.sin(a);if("XYZ"===e.order){let e=o*u,i=o*h,n=s*u,a=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=i+n*c,t[5]=e-a*c,t[9]=-s*l,t[2]=a-e*c,t[6]=n+i*c,t[10]=o*l}else if("YXZ"===e.order){let e=l*u,i=l*h,n=c*u,a=c*h;t[0]=e+a*s,t[4]=n*s-i,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=i*s-n,t[6]=a+e*s,t[10]=o*l}else if("ZXY"===e.order){let e=l*u,i=l*h,n=c*u,a=c*h;t[0]=e-a*s,t[4]=-o*h,t[8]=n+i*s,t[1]=i+n*s,t[5]=o*u,t[9]=a-e*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if("ZYX"===e.order){let e=o*u,i=o*h,n=s*u,a=s*h;t[0]=l*u,t[4]=n*c-i,t[8]=e*c+a,t[1]=l*h,t[5]=a*c+e,t[9]=i*c-n,t[2]=-c,t[6]=s*l,t[10]=o*l}else if("YZX"===e.order){let e=o*l,i=o*c,n=s*l,a=s*c;t[0]=l*u,t[4]=a-e*h,t[8]=n*h+i,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=i*h+n,t[10]=e-a*h}else if("XZY"===e.order){let e=o*l,i=o*c,n=s*l,a=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=e*h+a,t[5]=o*u,t[9]=i*h-n,t[2]=n*h-i,t[6]=s*u,t[10]=a*h+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eA,e,eC)}lookAt(e,t,i){let n=this.elements;return eR.subVectors(e,t),0===eR.lengthSq()&&(eR.z=1),eR.normalize(),eP.crossVectors(i,eR),0===eP.lengthSq()&&(1===Math.abs(i.z)?eR.x+=1e-4:eR.z+=1e-4,eR.normalize(),eP.crossVectors(i,eR)),eP.normalize(),eL.crossVectors(eR,eP),n[0]=eP.x,n[4]=eL.x,n[8]=eR.x,n[1]=eP.y,n[5]=eL.y,n[9]=eR.y,n[2]=eP.z,n[6]=eL.z,n[10]=eR.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],m=i[6],g=i[10],v=i[14],y=i[3],x=i[7],_=i[11],M=i[15],b=n[0],S=n[4],w=n[8],T=n[12],E=n[1],A=n[5],C=n[9],P=n[13],L=n[2],R=n[6],D=n[10],I=n[14],U=n[3],O=n[7],N=n[11],k=n[15];return a[0]=o*b+s*E+l*L+c*U,a[4]=o*S+s*A+l*R+c*O,a[8]=o*w+s*C+l*D+c*N,a[12]=o*T+s*P+l*I+c*k,a[1]=u*b+h*E+d*L+f*U,a[5]=u*S+h*A+d*R+f*O,a[9]=u*w+h*C+d*D+f*N,a[13]=u*T+h*P+d*I+f*k,a[2]=p*b+m*E+g*L+v*U,a[6]=p*S+m*A+g*R+v*O,a[10]=p*w+m*C+g*D+v*N,a[14]=p*T+m*P+g*I+v*k,a[3]=y*b+x*E+_*L+M*U,a[7]=y*S+x*A+_*R+M*O,a[11]=y*w+x*C+_*D+M*N,a[15]=y*T+x*P+_*I+M*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],m=e[7];return p*(a*l*h-n*c*h-a*s*d+i*c*d+n*s*f-i*l*f)+m*(t*l*f-t*c*d+a*o*d-n*o*f+n*c*u-a*l*u)+e[11]*(t*c*h-t*s*f-a*o*h+i*o*f+a*s*u-i*c*u)+e[15]*(-n*s*u-t*l*h+t*s*d+n*o*h-i*o*d+i*l*u)}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],m=e[13],g=e[14],v=e[15],y=h*g*c-m*d*c+m*l*f-s*g*f-h*l*v+s*d*v,x=p*d*c-u*g*c-p*l*f+o*g*f+u*l*v-o*d*v,_=u*m*c-p*h*c+p*s*f-o*m*f-u*s*v+o*h*v,M=p*h*l-u*m*l-p*s*d+o*m*d+u*s*g-o*h*g,b=t*y+i*x+n*_+a*M;if(0===b)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/b;return e[0]=y*S,e[1]=(m*d*a-h*g*a-m*n*f+i*g*f+h*n*v-i*d*v)*S,e[2]=(s*g*a-m*l*a+m*n*c-i*g*c-s*n*v+i*l*v)*S,e[3]=(h*l*a-s*d*a-h*n*c+i*d*c+s*n*f-i*l*f)*S,e[4]=x*S,e[5]=(u*g*a-p*d*a+p*n*f-t*g*f-u*n*v+t*d*v)*S,e[6]=(p*l*a-o*g*a-p*n*c+t*g*c+o*n*v-t*l*v)*S,e[7]=(o*d*a-u*l*a+u*n*c-t*d*c-o*n*f+t*l*f)*S,e[8]=_*S,e[9]=(p*h*a-u*m*a-p*i*f+t*m*f+u*i*v-t*h*v)*S,e[10]=(o*m*a-p*s*a+p*i*c-t*m*c-o*i*v+t*s*v)*S,e[11]=(u*s*a-o*h*a-u*i*c+t*h*c+o*i*f-t*s*f)*S,e[12]=M*S,e[13]=(u*m*n-p*h*n+p*i*d-t*m*d-u*i*g+t*h*g)*S,e[14]=(p*s*n-o*m*n-p*i*l+t*m*l+o*i*g-t*s*g)*S,e[15]=(o*h*n-u*s*n+u*i*l-t*h*l-o*i*d+t*s*d)*S,this}scale(e){let t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];return Math.sqrt(Math.max(t,e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e[8]*e[8]+e[9]*e[9]+e[10]*e[10]))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,u*s+i,u*l-n*o,0,c*l-n*s,u*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,h=s+s,d=a*c,f=a*u,p=a*h,m=o*u,g=o*h,v=s*h,y=l*c,x=l*u,_=l*h,M=i.x,b=i.y,S=i.z;return n[0]=(1-(m+v))*M,n[1]=(f+_)*M,n[2]=(p-x)*M,n[3]=0,n[4]=(f-_)*b,n[5]=(1-(d+v))*b,n[6]=(g+y)*b,n[7]=0,n[8]=(p+x)*S,n[9]=(g-y)*S,n[10]=(1-(d+m))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,a=eT.set(n[0],n[1],n[2]).length(),o=eT.set(n[4],n[5],n[6]).length(),s=eT.set(n[8],n[9],n[10]).length();0>this.determinant()&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],eE.copy(this);let l=1/a,c=1/o,u=1/s;return eE.elements[0]*=l,eE.elements[1]*=l,eE.elements[2]*=l,eE.elements[4]*=c,eE.elements[5]*=c,eE.elements[6]*=c,eE.elements[8]*=u,eE.elements[9]*=u,eE.elements[10]*=u,t.setFromRotationMatrix(eE),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,n,a,o){let s=this.elements;return s[0]=2*a/(t-e),s[4]=0,s[8]=(t+e)/(t-e),s[12]=0,s[1]=0,s[5]=2*a/(i-n),s[9]=(i+n)/(i-n),s[13]=0,s[2]=0,s[6]=0,s[10]=-(o+a)/(o-a),s[14]=-2*o*a/(o-a),s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,n,a,o){let s=this.elements,l=1/(t-e),c=1/(i-n),u=1/(o-a);return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-((t+e)*l),s[1]=0,s[5]=2*c,s[9]=0,s[13]=-((i+n)*c),s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-((o+a)*u),s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let e=0;e<16;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}let eT=new J,eE=new ew,eA=new J(0,0,0),eC=new J(1,1,1),eP=new J,eL=new J,eR=new J,eD=new ew,eI=new X;class eU{constructor(e=0,t=0,i=0,n=eU.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(S(s,-1,1)),.9999999>Math.abs(s)?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-S(u,-1,1)),.9999999>Math.abs(u)?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(S(d,-1,1)),.9999999>Math.abs(d)?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-S(h,-1,1)),.9999999>Math.abs(h)?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(S(l,-1,1)),.9999999>Math.abs(l)?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-S(o,-1,1)),.9999999>Math.abs(o)?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===i&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eD.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eD,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eI.setFromEuler(this),this.setFromQuaternion(eI,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eU.DEFAULT_ORDER="XYZ";class eO{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&1<<e)!=0}}let eN=0,ek=new J,ez=new X,eF=new ew,eB=new J,eH=new J,eG=new J,eV=new X,eW=new J(1,0,0),ej=new J(0,1,0),eq=new J(0,0,1),eY={type:"added"},eX={type:"removed"};class eJ extends y{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eN++}),this.uuid=b(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=eJ.DEFAULT_UP.clone();let e=new J,t=new eU,i=new X,n=new J(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ew},normalMatrix:{value:new P}}),this.matrix=new ew,this.matrixWorld=new ew,this.matrixAutoUpdate=eJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=eJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new eO,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ez.setFromAxisAngle(e,t),this.quaternion.multiply(ez),this}rotateOnWorldAxis(e,t){return ez.setFromAxisAngle(e,t),this.quaternion.premultiply(ez),this}rotateX(e){return this.rotateOnAxis(eW,e)}rotateY(e){return this.rotateOnAxis(ej,e)}rotateZ(e){return this.rotateOnAxis(eq,e)}translateOnAxis(e,t){return ek.copy(e).applyQuaternion(this.quaternion),this.position.add(ek.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eW,e)}translateY(e){return this.translateOnAxis(ej,e)}translateZ(e){return this.translateOnAxis(eq,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(eF.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eB.copy(e):eB.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),eH.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?eF.lookAt(eH,eB,this.up):eF.lookAt(eB,eH,this.up),this.quaternion.setFromRotationMatrix(eF),n&&(eF.extractRotation(n.matrixWorld),ez.setFromRotationMatrix(eF),this.quaternion.premultiply(ez.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?console.error("THREE.Object3D.add: object can't be added as a child of itself.",e):e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eY)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return -1!==t&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eX)),this}removeFromParent(){let e=this.parent;return null!==e&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(eX)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),eF.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),eF.multiply(e.parent.matrixWorld)),e.applyMatrix4(eF),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let n=this.children[i].getObjectByProperty(e,t);if(void 0!==n)return n}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,a=this.children.length;n<a;n++){let a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eH,e,eG),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eH,eV,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let n=t[i];(!0===n.matrixWorldAutoUpdate||!0===e)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(!0===e&&null!==i&&!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t){let e=this.children;for(let t=0,i=e.length;t<i;t++){let i=e[t];!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=void 0===e||"string"==typeof e,i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let n={};function a(t,i){return void 0===t[i.uuid]&&(t[i.uuid]=i.toJSON(e)),i.uuid}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),!0===this.castShadow&&(n.castShadow=!0),!0===this.receiveShadow&&(n.receiveShadow=!0),!1===this.visible&&(n.visible=!1),!1===this.frustumCulled&&(n.frustumCulled=!1),0!==this.renderOrder&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(n.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);let t=this.geometry.parameters;if(void 0!==t&&void 0!==t.shapes){let i=t.shapes;if(Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let n=i[t];a(e.shapes,n)}else a(e.shapes,i)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){let t=[];for(let i=0,n=this.material.length;i<n;i++)t.push(a(e.materials,this.material[i]));n.material=t}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let t=0;t<this.children.length;t++)n.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let t=0;t<this.animations.length;t++){let i=this.animations[t];n.animations.push(a(e.animations,i))}}if(t){let t=o(e.geometries),n=o(e.materials),a=o(e.textures),s=o(e.images),l=o(e.shapes),c=o(e.skeletons),u=o(e.animations),h=o(e.nodes);t.length>0&&(i.geometries=t),n.length>0&&(i.materials=n),a.length>0&&(i.textures=a),s.length>0&&(i.images=s),l.length>0&&(i.shapes=l),c.length>0&&(i.skeletons=c),u.length>0&&(i.animations=u),h.length>0&&(i.nodes=h)}return i.object=n,i;function o(e){let t=[];for(let i in e){let n=e[i];delete n.metadata,t.push(n)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){let i=e.children[t];this.add(i.clone())}return this}}eJ.DEFAULT_UP=new J(0,1,0),eJ.DEFAULT_MATRIX_AUTO_UPDATE=!0,eJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let eK=new J,eZ=new J,eQ=new J,e$=new J,e0=new J,e1=new J,e2=new J,e3=new J,e5=new J,e4=new J,e6=!1;class e8{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),eK.subVectors(e,t),n.cross(eK);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){eK.subVectors(n,t),eZ.subVectors(i,t),eQ.subVectors(e,t);let o=eK.dot(eK),s=eK.dot(eZ),l=eK.dot(eQ),c=eZ.dot(eZ),u=eZ.dot(eQ),h=o*c-s*s;if(0===h)return a.set(-2,-1,-1);let d=1/h,f=(c*l-s*u)*d,p=(o*u-s*l)*d;return a.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,e$),e$.x>=0&&e$.y>=0&&e$.x+e$.y<=1}static getUV(e,t,i,n,a,o,s,l){return!1===e6&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),e6=!0),this.getInterpolation(e,t,i,n,a,o,s,l)}static getInterpolation(e,t,i,n,a,o,s,l){return this.getBarycoord(e,t,i,n,e$),l.setScalar(0),l.addScaledVector(a,e$.x),l.addScaledVector(o,e$.y),l.addScaledVector(s,e$.z),l}static isFrontFacing(e,t,i,n){return eK.subVectors(i,t),eZ.subVectors(e,t),0>eK.cross(eZ).dot(n)}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return eK.subVectors(this.c,this.b),eZ.subVectors(this.a,this.b),.5*eK.cross(eZ).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return e8.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return e8.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,a){return!1===e6&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),e6=!0),e8.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}getInterpolation(e,t,i,n,a){return e8.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return e8.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return e8.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i,n,a=this.a,o=this.b,s=this.c;e0.subVectors(o,a),e1.subVectors(s,a),e3.subVectors(e,a);let l=e0.dot(e3),c=e1.dot(e3);if(l<=0&&c<=0)return t.copy(a);e5.subVectors(e,o);let u=e0.dot(e5),h=e1.dot(e5);if(u>=0&&h<=u)return t.copy(o);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return i=l/(l-u),t.copy(a).addScaledVector(e0,i);e4.subVectors(e,s);let f=e0.dot(e4),p=e1.dot(e4);if(p>=0&&f<=p)return t.copy(s);let m=f*c-l*p;if(m<=0&&c>=0&&p<=0)return n=c/(c-p),t.copy(a).addScaledVector(e1,n);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return e2.subVectors(s,o),n=(h-u)/(h-u+(f-p)),t.copy(o).addScaledVector(e2,n);let v=1/(g+m+d);return i=m*v,n=d*v,t.copy(a).addScaledVector(e0,i).addScaledVector(e1,n)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let e7=0,e9=class extends y{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e7++}),this.uuid=b(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(void 0!==e)for(let t in e){let i=e[t];if(void 0===i){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(void 0===n){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=void 0===e||"string"==typeof e;t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function n(e){let t=[];for(let i in e){let n=e[i];delete n.metadata,t.push(n)}return t}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),void 0!==this.sheen&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(i.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,void 0!==this.combine&&(i.combine=this.combine)),void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.transmission&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),void 0!==this.thickness&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(i.size=this.size),null!==this.shadowSide&&(i.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(i.blending=this.blending),0!==this.side&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),!0===this.polygonOffset&&(i.polygonOffset=!0),0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),void 0!==this.dashSize&&(i.dashSize=this.dashSize),void 0!==this.gapSize&&(i.gapSize=this.gapSize),void 0!==this.scale&&(i.scale=this.scale),!0===this.dithering&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(i.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=this.premultipliedAlpha),!0===this.forceSinglePass&&(i.forceSinglePass=this.forceSinglePass),!0===this.wireframe&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(i.flatShading=this.flatShading),!1===this.visible&&(i.visible=!1),!1===this.toneMapped&&(i.toneMapped=!1),!1===this.fog&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let t=n(e.textures),a=n(e.images);t.length>0&&(i.textures=t),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(null!==t){let e=t.length;i=Array(e);for(let n=0;n!==e;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}},te={aliceblue:0xf0f8ff,antiquewhite:0xfaebd7,aqua:65535,aquamarine:8388564,azure:0xf0ffff,beige:0xf5f5dc,bisque:0xffe4c4,black:0,blanchedalmond:0xffebcd,blue:255,blueviolet:9055202,brown:0xa52a2a,burlywood:0xdeb887,cadetblue:6266528,chartreuse:8388352,chocolate:0xd2691e,coral:0xff7f50,cornflowerblue:6591981,cornsilk:0xfff8dc,crimson:0xdc143c,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:0xb8860b,darkgray:0xa9a9a9,darkgreen:25600,darkgrey:0xa9a9a9,darkkhaki:0xbdb76b,darkmagenta:9109643,darkolivegreen:5597999,darkorange:0xff8c00,darkorchid:0x9932cc,darkred:9109504,darksalmon:0xe9967a,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:0xff1493,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:0xb22222,floralwhite:0xfffaf0,forestgreen:2263842,fuchsia:0xff00ff,gainsboro:0xdcdcdc,ghostwhite:0xf8f8ff,gold:0xffd700,goldenrod:0xdaa520,gray:8421504,green:32768,greenyellow:0xadff2f,grey:8421504,honeydew:0xf0fff0,hotpink:0xff69b4,indianred:0xcd5c5c,indigo:4915330,ivory:0xfffff0,khaki:0xf0e68c,lavender:0xe6e6fa,lavenderblush:0xfff0f5,lawngreen:8190976,lemonchiffon:0xfffacd,lightblue:0xadd8e6,lightcoral:0xf08080,lightcyan:0xe0ffff,lightgoldenrodyellow:0xfafad2,lightgray:0xd3d3d3,lightgreen:9498256,lightgrey:0xd3d3d3,lightpink:0xffb6c1,lightsalmon:0xffa07a,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:0xb0c4de,lightyellow:0xffffe0,lime:65280,limegreen:3329330,linen:0xfaf0e6,magenta:0xff00ff,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:0xba55d3,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:0xc71585,midnightblue:1644912,mintcream:0xf5fffa,mistyrose:0xffe4e1,moccasin:0xffe4b5,navajowhite:0xffdead,navy:128,oldlace:0xfdf5e6,olive:8421376,olivedrab:7048739,orange:0xffa500,orangered:0xff4500,orchid:0xda70d6,palegoldenrod:0xeee8aa,palegreen:0x98fb98,paleturquoise:0xafeeee,palevioletred:0xdb7093,papayawhip:0xffefd5,peachpuff:0xffdab9,peru:0xcd853f,pink:0xffc0cb,plum:0xdda0dd,powderblue:0xb0e0e6,purple:8388736,rebeccapurple:6697881,red:0xff0000,rosybrown:0xbc8f8f,royalblue:4286945,saddlebrown:9127187,salmon:0xfa8072,sandybrown:0xf4a460,seagreen:3050327,seashell:0xfff5ee,sienna:0xa0522d,silver:0xc0c0c0,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:0xfffafa,springgreen:65407,steelblue:4620980,tan:0xd2b48c,teal:32896,thistle:0xd8bfd8,tomato:0xff6347,turquoise:4251856,violet:0xee82ee,wheat:0xf5deb3,white:0xffffff,whitesmoke:0xf5f5f5,yellow:0xffff00,yellowgreen:0x9acd32},tt={h:0,s:0,l:0},ti={h:0,s:0,l:0};function tr(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*6*(2/3-i):e}class tn{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,void 0===t&&void 0===i?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=p){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,F.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=F.workingColorSpace){return this.r=e,this.g=t,this.b=i,F.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=F.workingColorSpace){if(e=(e%1+1)%1,t=S(t,0,1),i=S(i,0,1),0===t)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+t):i+t-i*t,a=2*i-n;this.r=tr(a,n,e+1/3),this.g=tr(a,n,e),this.b=tr(a,n,e-1/3)}return F.toWorkingColorSpace(this,n),this}setStyle(e,t=p){let i;function n(t){void 0!==t&&1>parseFloat(t)&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,F.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,F.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){let e=parseFloat(a[1])/360,i=parseFloat(a[2])/100,o=parseFloat(a[3])/100;return n(a[4]),this.setHSL(e,i,o,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=i[1],a=n.length;if(3===a)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(6===a)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=p){let i=te[e.toLowerCase()];return void 0!==i?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=I(e.r),this.g=I(e.g),this.b=I(e.b),this}copyLinearToSRGB(e){return this.r=U(e.r),this.g=U(e.g),this.b=U(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=p){return F.fromWorkingColorSpace(ta.copy(this),e),S(255*ta.r,0,255)<<16^S(255*ta.g,0,255)<<8^(0|S(255*ta.b,0,255))}getHexString(e=p){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=F.workingColorSpace){let i,n;F.fromWorkingColorSpace(ta.copy(this),t);let a=ta.r,o=ta.g,s=ta.b,l=Math.max(a,o,s),c=Math.min(a,o,s),u=(c+l)/2;if(c===l)i=0,n=0;else{let e=l-c;switch(n=u<=.5?e/(l+c):e/(2-l-c),l){case a:i=(o-s)/e+6*(o<s);break;case o:i=(s-a)/e+2;break;case s:i=(a-o)/e+4}i/=6}return e.h=i,e.s=n,e.l=u,e}getRGB(e,t=F.workingColorSpace){return F.fromWorkingColorSpace(ta.copy(this),t),e.r=ta.r,e.g=ta.g,e.b=ta.b,e}getStyle(e=p){F.fromWorkingColorSpace(ta.copy(this),e);let t=ta.r,i=ta.g,n=ta.b;return e!==p?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${255*t|0},${255*i|0},${255*n|0})`}offsetHSL(e,t,i){return this.getHSL(tt),tt.h+=e,tt.s+=t,tt.l+=i,this.setHSL(tt.h,tt.s,tt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){var i,n,a;this.getHSL(tt),e.getHSL(ti);let o=(i=tt.h,(1-t)*i+t*ti.h),s=(n=tt.s,(1-t)*n+t*ti.s),l=(a=tt.l,(1-t)*a+t*ti.l);return this.setHSL(o,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}let ta=new tn;tn.NAMES=te;class to extends e9{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tn(0xffffff),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}let ts=new J,tl=new C;class tc{constructor(e,t,i=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(2===this.itemSize)for(let t=0,i=this.count;t<i;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(3===this.itemSize)for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXYZ(t,ts.x,ts.y,ts.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix4(e),this.setXYZ(t,ts.x,ts.y,ts.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyNormalMatrix(e),this.setXYZ(t,ts.x,ts.y,ts.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.transformDirection(e),this.setXYZ(t,ts.x,ts.y,ts.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=E(t,this.array)),t}setX(e,t){return this.normalized&&(t=A(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=E(t,this.array)),t}setY(e,t){return this.normalized&&(t=A(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=E(t,this.array)),t}setZ(e,t){return this.normalized&&(t=A(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=E(t,this.array)),t}setW(e,t){return this.normalized&&(t=A(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=A(t,this.array),i=A(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=A(t,this.array),i=A(i,this.array),n=A(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=A(t,this.array),i=A(i,this.array),n=A(n,this.array),a=A(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),35044!==this.usage&&(e.usage=this.usage),(0!==this.updateRange.offset||-1!==this.updateRange.count)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class tu extends tc{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class th extends tc{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class td extends tc{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tf=0,tp=new ew,tm=new eJ,tg=new J,tv=new Q,ty=new Q,tx=new J;class t_ extends y{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=b(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R(e)?th:tu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return void 0!==this.attributes[e]}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;void 0!==t&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(void 0!==i){let t=new P().getNormalMatrix(e);i.applyNormalMatrix(t),i.needsUpdate=!0}let n=this.attributes.tangent;return void 0!==n&&(n.transformDirection(e),n.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return tp.makeRotationFromQuaternion(e),this.applyMatrix4(tp),this}rotateX(e){return tp.makeRotationX(e),this.applyMatrix4(tp),this}rotateY(e){return tp.makeRotationY(e),this.applyMatrix4(tp),this}rotateZ(e){return tp.makeRotationZ(e),this.applyMatrix4(tp),this}translate(e,t,i){return tp.makeTranslation(e,t,i),this.applyMatrix4(tp),this}scale(e,t,i){return tp.makeScale(e,t,i),this.applyMatrix4(tp),this}lookAt(e){return tm.lookAt(e),tm.updateMatrix(),this.applyMatrix4(tm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tg).negate(),this.translate(tg.x,tg.y,tg.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new td(t,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Q);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(void 0!==e){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];tv.setFromBufferAttribute(i),this.morphTargetsRelative?(tx.addVectors(this.boundingBox.min,tv.min),this.boundingBox.expandByPoint(tx),tx.addVectors(this.boundingBox.max,tv.max),this.boundingBox.expandByPoint(tx)):(this.boundingBox.expandByPoint(tv.min),this.boundingBox.expandByPoint(tv.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new eg);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){let i=this.boundingSphere.center;if(tv.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];ty.setFromBufferAttribute(i),this.morphTargetsRelative?(tx.addVectors(tv.min,ty.min),tv.expandByPoint(tx),tx.addVectors(tv.max,ty.max),tv.expandByPoint(tx)):(tv.expandByPoint(ty.min),tv.expandByPoint(ty.max))}tv.getCenter(i);let n=0;for(let t=0,a=e.count;t<a;t++)tx.fromBufferAttribute(e,t),n=Math.max(n,i.distanceToSquared(tx));if(t)for(let a=0,o=t.length;a<o;a++){let o=t[a],s=this.morphTargetsRelative;for(let t=0,a=o.count;t<a;t++)tx.fromBufferAttribute(o,t),s&&(tg.fromBufferAttribute(e,t),tx.add(tg)),n=Math.max(n,i.distanceToSquared(tx))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(null===e||void 0===t.position||void 0===t.normal||void 0===t.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new tc(new Float32Array(4*s),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let e=0;e<s;e++)c[e]=new J,u[e]=new J;let h=new J,d=new J,f=new J,p=new C,m=new C,g=new C,v=new J,y=new J,x=this.groups;0===x.length&&(x=[{start:0,count:i.length}]);for(let e=0,t=x.length;e<t;++e){let t=x[e],a=t.start,s=t.count;for(let e=a,t=a+s;e<t;e+=3)!function(e,t,i){h.fromArray(n,3*e),d.fromArray(n,3*t),f.fromArray(n,3*i),p.fromArray(o,2*e),m.fromArray(o,2*t),g.fromArray(o,2*i),d.sub(h),f.sub(h),m.sub(p),g.sub(p);let a=1/(m.x*g.y-g.x*m.y);isFinite(a)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(a),y.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(a),c[e].add(v),c[t].add(v),c[i].add(v),u[e].add(y),u[t].add(y),u[i].add(y))}(i[e+0],i[e+1],i[e+2])}let _=new J,M=new J,b=new J,S=new J;function w(e){b.fromArray(a,3*e),S.copy(b);let t=c[e];_.copy(t),_.sub(b.multiplyScalar(b.dot(t))).normalize(),M.crossVectors(S,t);let i=0>M.dot(u[e])?-1:1;l[4*e]=_.x,l[4*e+1]=_.y,l[4*e+2]=_.z,l[4*e+3]=i}for(let e=0,t=x.length;e<t;++e){let t=x[e],n=t.start,a=t.count;for(let e=n,t=n+a;e<t;e+=3)w(i[e+0]),w(i[e+1]),w(i[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(void 0!==t){let i=this.getAttribute("normal");if(void 0===i)i=new tc(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let e=0,t=i.count;e<t;e++)i.setXYZ(e,0,0,0);let n=new J,a=new J,o=new J,s=new J,l=new J,c=new J,u=new J,h=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,f),a.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,a),h.subVectors(n,a),u.cross(h),s.fromBufferAttribute(i,f),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(f,s.x,s.y,s.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,s=t.count;e<s;e+=3)n.fromBufferAttribute(t,e+0),a.fromBufferAttribute(t,e+1),o.fromBufferAttribute(t,e+2),u.subVectors(o,a),h.subVectors(n,a),u.cross(h),i.setXYZ(e+0,u.x,u.y,u.z),i.setXYZ(e+1,u.x,u.y,u.z),i.setXYZ(e+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tx.fromBufferAttribute(e,t),tx.normalize(),e.setXYZ(t,tx.x,tx.y,tx.z)}toNonIndexed(){function e(e,t){let i=e.array,n=e.itemSize,a=e.normalized,o=new i.constructor(t.length*n),s=0,l=0;for(let a=0,c=t.length;a<c;a++){s=e.isInterleavedBufferAttribute?t[a]*e.data.stride+e.offset:t[a]*n;for(let e=0;e<n;e++)o[l++]=i[s++]}return new tc(o,n,a)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new t_,i=this.index.array,n=this.attributes;for(let a in n){let o=e(n[a],i);t.setAttribute(a,o)}let a=this.morphAttributes;for(let n in a){let o=[],s=a[n];for(let t=0,n=s.length;t<n;t++){let n=e(s[t],i);o.push(n)}t.morphAttributes[n]=o}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,i=o.length;e<i;e++){let i=o[e];t.addGroup(i.start,i.count,i.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),void 0!==this.parameters){let t=this.parameters;for(let i in t)void 0!==t[i]&&(e[i]=t[i]);return e}e.data={attributes:{}};let t=this.index;null!==t&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let t in i){let n=i[t];e.data.attributes[t]=n.toJSON(e.data)}let n={},a=!1;for(let t in this.morphAttributes){let i=this.morphAttributes[t],o=[];for(let t=0,n=i.length;t<n;t++){let n=i[t];o.push(n.toJSON(e.data))}o.length>0&&(n[t]=o,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return null!==s&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;null!==i&&this.setIndex(i.clone(t));let n=e.attributes;for(let e in n){let i=n[e];this.setAttribute(e,i.clone(t))}let a=e.morphAttributes;for(let e in a){let i=[],n=a[e];for(let e=0,a=n.length;e<a;e++)i.push(n[e].clone(t));this.morphAttributes[e]=i}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];this.addGroup(t.start,t.count,t.materialIndex)}let s=e.boundingBox;null!==s&&(this.boundingBox=s.clone());let l=e.boundingSphere;return null!==l&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tM=new ew,tb=new class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ev)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ev.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ev.copy(this.origin).addScaledVector(this.direction,t),ev.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){let a,o,s,l;ey.copy(e).add(t).multiplyScalar(.5),ex.copy(t).sub(e).normalize(),e_.copy(this.origin).sub(ey);let c=.5*e.distanceTo(t),u=-this.direction.dot(ex),h=e_.dot(this.direction),d=-e_.dot(ex),f=e_.lengthSq(),p=Math.abs(1-u*u);if(p>0)if(a=u*d-h,o=u*h-d,l=c*p,a>=0)if(o>=-l)if(o<=l){let e=1/p;a*=e,o*=e,s=a*(a+u*o+2*h)+o*(u*a+o+2*d)+f}else s=-(a=Math.max(0,-(u*(o=c)+h)))*a+o*(o+2*d)+f;else s=-(a=Math.max(0,-(u*(o=-c)+h)))*a+o*(o+2*d)+f;else o<=-l?(o=(a=Math.max(0,-(-u*c+h)))>0?-c:Math.min(Math.max(-c,-d),c),s=-a*a+o*(o+2*d)+f):o<=l?(a=0,s=(o=Math.min(Math.max(-c,-d),c))*(o+2*d)+f):(o=(a=Math.max(0,-(u*c+h)))>0?c:Math.min(Math.max(-c,-d),c),s=-a*a+o*(o+2*d)+f);else o=u>0?-c:c,s=-(a=Math.max(0,-(u*o+h)))*a+o*(o+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,a),n&&n.copy(ey).addScaledVector(ex,o),s}intersectSphere(e,t){ev.subVectors(e.center,this.origin);let i=ev.dot(this.direction),n=ev.dot(ev)-i*i,a=e.radius*e.radius;if(n>a)return null;let o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(0===t)return 0===e.distanceToPoint(this.origin)?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return null===i?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return 0===t||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,o,s,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),h>=0?(s=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||s>n)||((s>i||i!=i)&&(i=s),(l<n||n!=n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return null!==this.intersectBox(e,ev)}intersectTriangle(e,t,i,n,a){eM.subVectors(t,e),eb.subVectors(i,e),eS.crossVectors(eM,eb);let o=this.direction.dot(eS),s;if(o>0){if(n)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}e_.subVectors(this.origin,e);let l=s*this.direction.dot(eb.crossVectors(e_,eb));if(l<0)return null;let c=s*this.direction.dot(eM.cross(e_));if(c<0||l+c>o)return null;let u=-s*e_.dot(eS);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tS=new eg,tw=new J,tT=new J,tE=new J,tA=new J,tC=new J,tP=new J,tL=new C,tR=new C,tD=new C,tI=new J,tU=new J,tO=new J,tN=new J,tk=new J;class tz extends eJ{constructor(e=new t_,t=new to){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){let t=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let s=this.morphTargetInfluences;if(a&&s){tP.set(0,0,0);for(let i=0,n=a.length;i<n;i++){let n=s[i],l=a[i];0!==n&&(tC.fromBufferAttribute(l,e),o?tP.addScaledVector(tC,n):tP.addScaledVector(tC.sub(t),n))}t.add(tP)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){let i,n=this.geometry,a=this.material,o=this.matrixWorld;if(void 0===a||(null===n.boundingSphere&&n.computeBoundingSphere(),tS.copy(n.boundingSphere),tS.applyMatrix4(o),tb.copy(e.ray).recast(e.near),!1===tS.containsPoint(tb.origin)&&(null===tb.intersectSphere(tS,tw)||tb.origin.distanceToSquared(tw)>u(e.far-e.near,2)))||(tM.copy(o).invert(),tb.copy(e.ray).applyMatrix4(tM),null!==n.boundingBox&&!1===tb.intersectsBox(n.boundingBox)))return;let s=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.attributes.normal,f=n.groups,p=n.drawRange;if(null!==s)if(Array.isArray(a))for(let n=0,o=f.length;n<o;n++){let o=f[n],l=a[o.materialIndex],u=Math.max(o.start,p.start),m=Math.min(s.count,Math.min(o.start+o.count,p.start+p.count));for(let n=u;n<m;n+=3){let a=s.getX(n);(i=tF(this,l,e,tb,c,h,d,a,s.getX(n+1),s.getX(n+2)))&&(i.faceIndex=Math.floor(n/3),i.face.materialIndex=o.materialIndex,t.push(i))}}else{let n=Math.max(0,p.start),o=Math.min(s.count,p.start+p.count);for(let l=n;l<o;l+=3){let n=s.getX(l);(i=tF(this,a,e,tb,c,h,d,n,s.getX(l+1),s.getX(l+2)))&&(i.faceIndex=Math.floor(l/3),t.push(i))}}else if(void 0!==l)if(Array.isArray(a))for(let n=0,o=f.length;n<o;n++){let o=f[n],s=a[o.materialIndex],u=Math.max(o.start,p.start),m=Math.min(l.count,Math.min(o.start+o.count,p.start+p.count));for(let n=u;n<m;n+=3)(i=tF(this,s,e,tb,c,h,d,n,n+1,n+2))&&(i.faceIndex=Math.floor(n/3),i.face.materialIndex=o.materialIndex,t.push(i))}else{let n=Math.max(0,p.start),o=Math.min(l.count,p.start+p.count);for(let s=n;s<o;s+=3)(i=tF(this,a,e,tb,c,h,d,s,s+1,s+2))&&(i.faceIndex=Math.floor(s/3),t.push(i))}}}function tF(e,t,i,n,a,o,s,l,c,u){e.getVertexPosition(l,tT),e.getVertexPosition(c,tE),e.getVertexPosition(u,tA);let h=function(e,t,i,n,a,o,s,l){if(null===(1===t.side?n.intersectTriangle(s,o,a,!0,l):n.intersectTriangle(a,o,s,0===t.side,l)))return null;tk.copy(l),tk.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(tk);return c<i.near||c>i.far?null:{distance:c,point:tk.clone(),object:e}}(e,t,i,n,tT,tE,tA,tN);if(h){a&&(tL.fromBufferAttribute(a,l),tR.fromBufferAttribute(a,c),tD.fromBufferAttribute(a,u),h.uv=e8.getInterpolation(tN,tT,tE,tA,tL,tR,tD,new C)),o&&(tL.fromBufferAttribute(o,l),tR.fromBufferAttribute(o,c),tD.fromBufferAttribute(o,u),h.uv2=e8.getInterpolation(tN,tT,tE,tA,tL,tR,tD,new C)),s&&(tI.fromBufferAttribute(s,l),tU.fromBufferAttribute(s,c),tO.fromBufferAttribute(s,u),h.normal=e8.getInterpolation(tN,tT,tE,tA,tI,tU,tO,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let e={a:l,b:c,c:u,normal:new J,materialIndex:0};e8.getNormal(tT,tE,tA,e.normal),h.face=e}return h}class tB extends t_{constructor(e=1,t=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};let s=this;n=Math.floor(n),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;function p(e,t,i,n,a,o,p,m,g,v,y){let x=o/g,_=p/v,M=o/2,b=p/2,S=m/2,w=g+1,T=v+1,E=0,A=0,C=new J;for(let o=0;o<T;o++){let s=o*_-b;for(let l=0;l<w;l++){let d=l*x-M;C[e]=d*n,C[t]=s*a,C[i]=S,c.push(C.x,C.y,C.z),C[e]=0,C[t]=0,C[i]=m>0?1:-1,u.push(C.x,C.y,C.z),h.push(l/g),h.push(1-o/v),E+=1}}for(let e=0;e<v;e++)for(let t=0;t<g;t++){let i=d+t+w*e,n=d+t+w*(e+1),a=d+(t+1)+w*(e+1),o=d+(t+1)+w*e;l.push(i,n,o),l.push(n,a,o),A+=6}s.addGroup(f,A,y),f+=A,d+=E}p("z","y","x",-1,-1,i,t,e,o=Math.floor(o),a,0),p("z","y","x",1,-1,i,t,-e,o,a,1),p("x","z","y",1,1,e,i,t,n,o,2),p("x","z","y",1,-1,e,i,-t,n,o,3),p("x","y","z",1,-1,e,t,i,n,a,4),p("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new td(c,3)),this.setAttribute("normal",new td(u,3)),this.setAttribute("uv",new td(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tB(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tH(e){let t={};for(let i in e)for(let n in t[i]={},e[i]){let a=e[i][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=a.clone():Array.isArray(a)?t[i][n]=a.slice():t[i][n]=a}return t}function tG(e){let t={};for(let i=0;i<e.length;i++){let n=tH(e[i]);for(let e in n)t[e]=n[e]}return t}function tV(e){return null===e.getRenderTarget()&&3001===e.outputEncoding?p:m}var tW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tj=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tq extends e9{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tW,this.fragmentShader=tj,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==e&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tH(e.uniforms),this.uniformsGroups=function(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);for(let i in t.glslVersion=this.glslVersion,t.uniforms={},this.uniforms){let n=this.uniforms[i].value;n&&n.isTexture?t.uniforms[i]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[i]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[i]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[i]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[i]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[i]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[i]={type:"m4",value:n.toArray()}:t.uniforms[i]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let e in this.extensions)!0===this.extensions[e]&&(i[e]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tY extends eJ{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ew,this.projectionMatrix=new ew,this.projectionMatrixInverse=new ew}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tX extends tY{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*M*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*_*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*M*Math.atan(Math.tan(.5*_*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,a,o){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*_*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n,o=this.view;if(null!==this.view&&this.view.enabled){let e=o.fullWidth,s=o.fullHeight;a+=o.offsetX*n/e,t-=o.offsetY*i/s,n*=o.width/e,i*=o.height/s}let s=this.filmOffset;0!==s&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tJ extends eJ{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let n=new tX(-90,1,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);let a=new tX(-90,1,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);let o=new tX(-90,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);let s=new tX(-90,1,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);let l=new tX(-90,1,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new tX(-90,1,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){null===this.parent&&this.updateMatrixWorld();let i=this.renderTarget,[n,a,o,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class tK extends W{constructor(e,t,i,n,a,o,s,l,c,u){super(e=void 0!==e?e:[],t=void 0!==t?t:301,i,n,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tZ extends q{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1};this.texture=new tK([i,i,i,i,i,i],t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,this.texture.minFilter=void 0!==t.minFilter?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new tB(5,5,5),a=new tq({name:"CubemapFromEquirect",uniforms:tH(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let o=new tz(n,a),s=t.minFilter;return 1008===t.minFilter&&(t.minFilter=1006),new tJ(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){let a=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(a)}}let tQ=new J,t$=new J,t0=new P;class t1{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=tQ.subVectors(i,t).cross(t$.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tQ),n=this.normal.dot(i);if(0===n)return 0===this.distanceToPoint(e.start)?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||t0.getNormalMatrix(e),n=this.coplanarPoint(tQ).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}let t2=new eg,t3=new J;class t5{constructor(e=new t1,t=new t1,i=new t1,n=new t1,a=new t1,o=new t1){this.planes=[e,t,i,n,a,o]}set(e,t,i,n,a,o){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,n=i[0],a=i[1],o=i[2],s=i[3],l=i[4],c=i[5],u=i[6],h=i[7],d=i[8],f=i[9],p=i[10],m=i[11],g=i[12],v=i[13],y=i[14],x=i[15];return t[0].setComponents(s-n,h-l,m-d,x-g).normalize(),t[1].setComponents(s+n,h+l,m+d,x+g).normalize(),t[2].setComponents(s+a,h+c,m+f,x+v).normalize(),t[3].setComponents(s-a,h-c,m-f,x-v).normalize(),t[4].setComponents(s-o,h-u,m-p,x-y).normalize(),t[5].setComponents(s+o,h+u,m+p,x+y).normalize(),this}intersectsObject(e){if(void 0!==e.boundingSphere)null===e.boundingSphere&&e.computeBoundingSphere(),t2.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;null===t.boundingSphere&&t.computeBoundingSphere(),t2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(t2)}intersectsSprite(e){return t2.center.set(0,0,0),t2.radius=.7071067811865476,t2.applyMatrix4(e.matrixWorld),this.intersectsSphere(t2)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(t3.x=n.normal.x>0?e.max.x:e.min.x,t3.y=n.normal.y>0?e.max.y:e.min.y,t3.z=n.normal.z>0?e.max.z:e.min.z,0>n.distanceToPoint(t3))return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(0>t[i].distanceToPoint(e))return!1;return!0}clone(){return new this.constructor().copy(this)}}function t4(){let e=null,t=!1,i=null,n=null;function a(t,o){i(t,o),n=e.requestAnimationFrame(a)}return{start:function(){!0!==t&&null!==i&&(n=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(e){i=e},setContext:function(t){e=t}}}function t6(e,t){let i=t.isWebGL2,n=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),n.get(e)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=n.get(t);i&&(e.deleteBuffer(i.buffer),n.delete(t))},update:function(t,a){if(t.isGLBufferAttribute){let e=n.get(t);(!e||e.version<t.version)&&n.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);let o=n.get(t);void 0===o?n.set(t,function(t,n){let a,o=t.array,s=t.usage,l=e.createBuffer();if(e.bindBuffer(n,l),e.bufferData(n,o,s),t.onUploadCallback(),o instanceof Float32Array)a=5126;else if(o instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(i)a=5131;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else a=5123;else if(o instanceof Int16Array)a=5122;else if(o instanceof Uint32Array)a=5125;else if(o instanceof Int32Array)a=5124;else if(o instanceof Int8Array)a=5120;else if(o instanceof Uint8Array)a=5121;else if(o instanceof Uint8ClampedArray)a=5121;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:l,type:a,bytesPerElement:o.BYTES_PER_ELEMENT,version:t.version}}(t,a)):o.version<t.version&&(function(t,n,a){let o=n.array,s=n.updateRange;e.bindBuffer(a,t),-1===s.count?e.bufferSubData(a,0,o):(i?e.bufferSubData(a,s.offset*o.BYTES_PER_ELEMENT,o,s.offset,s.count):e.bufferSubData(a,s.offset*o.BYTES_PER_ELEMENT,o.subarray(s.offset,s.offset+s.count)),s.count=-1),n.onUploadCallback()}(o.buffer,t,a),o.version=t.version)}}}class t8 extends t_{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(n),c=s+1,u=l+1,h=e/s,d=t/l,f=[],p=[],m=[],g=[];for(let e=0;e<u;e++){let t=e*d-o;for(let i=0;i<c;i++){let n=i*h-a;p.push(n,-t,0),m.push(0,0,1),g.push(i/s),g.push(1-e/l)}}for(let e=0;e<l;e++)for(let t=0;t<s;t++){let i=t+c*e,n=t+c*(e+1),a=t+1+c*(e+1),o=t+1+c*e;f.push(i,n,o),f.push(n,a,o)}this.setIndex(f),this.setAttribute("position",new td(p,3)),this.setAttribute("normal",new td(m,3)),this.setAttribute("uv",new td(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t8(e.width,e.height,e.widthSegments,e.heightSegments)}}let t7={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},t9={common:{diffuse:{value:new tn(0xffffff)},opacity:{value:1},map:{value:null},mapTransform:{value:new P},alphaMap:{value:null},alphaMapTransform:{value:new P},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new P}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new P}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new P}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new P},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new P},normalScale:{value:new C(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new P},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new P}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new P}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new P}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tn(0xffffff)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tn(0xffffff)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new P}},sprite:{diffuse:{value:new tn(0xffffff)},opacity:{value:1},center:{value:new C(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new P},alphaMap:{value:null},alphaTest:{value:0}}},ie={basic:{uniforms:tG([t9.common,t9.specularmap,t9.envmap,t9.aomap,t9.lightmap,t9.fog]),vertexShader:t7.meshbasic_vert,fragmentShader:t7.meshbasic_frag},lambert:{uniforms:tG([t9.common,t9.specularmap,t9.envmap,t9.aomap,t9.lightmap,t9.emissivemap,t9.bumpmap,t9.normalmap,t9.displacementmap,t9.fog,t9.lights,{emissive:{value:new tn(0)}}]),vertexShader:t7.meshlambert_vert,fragmentShader:t7.meshlambert_frag},phong:{uniforms:tG([t9.common,t9.specularmap,t9.envmap,t9.aomap,t9.lightmap,t9.emissivemap,t9.bumpmap,t9.normalmap,t9.displacementmap,t9.fog,t9.lights,{emissive:{value:new tn(0)},specular:{value:new tn(1118481)},shininess:{value:30}}]),vertexShader:t7.meshphong_vert,fragmentShader:t7.meshphong_frag},standard:{uniforms:tG([t9.common,t9.envmap,t9.aomap,t9.lightmap,t9.emissivemap,t9.bumpmap,t9.normalmap,t9.displacementmap,t9.roughnessmap,t9.metalnessmap,t9.fog,t9.lights,{emissive:{value:new tn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:t7.meshphysical_vert,fragmentShader:t7.meshphysical_frag},toon:{uniforms:tG([t9.common,t9.aomap,t9.lightmap,t9.emissivemap,t9.bumpmap,t9.normalmap,t9.displacementmap,t9.gradientmap,t9.fog,t9.lights,{emissive:{value:new tn(0)}}]),vertexShader:t7.meshtoon_vert,fragmentShader:t7.meshtoon_frag},matcap:{uniforms:tG([t9.common,t9.bumpmap,t9.normalmap,t9.displacementmap,t9.fog,{matcap:{value:null}}]),vertexShader:t7.meshmatcap_vert,fragmentShader:t7.meshmatcap_frag},points:{uniforms:tG([t9.points,t9.fog]),vertexShader:t7.points_vert,fragmentShader:t7.points_frag},dashed:{uniforms:tG([t9.common,t9.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:t7.linedashed_vert,fragmentShader:t7.linedashed_frag},depth:{uniforms:tG([t9.common,t9.displacementmap]),vertexShader:t7.depth_vert,fragmentShader:t7.depth_frag},normal:{uniforms:tG([t9.common,t9.bumpmap,t9.normalmap,t9.displacementmap,{opacity:{value:1}}]),vertexShader:t7.meshnormal_vert,fragmentShader:t7.meshnormal_frag},sprite:{uniforms:tG([t9.sprite,t9.fog]),vertexShader:t7.sprite_vert,fragmentShader:t7.sprite_frag},background:{uniforms:{uvTransform:{value:new P},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:t7.background_vert,fragmentShader:t7.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:t7.backgroundCube_vert,fragmentShader:t7.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:t7.cube_vert,fragmentShader:t7.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:t7.equirect_vert,fragmentShader:t7.equirect_frag},distanceRGBA:{uniforms:tG([t9.common,t9.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:t7.distanceRGBA_vert,fragmentShader:t7.distanceRGBA_frag},shadow:{uniforms:tG([t9.lights,t9.fog,{color:{value:new tn(0)},opacity:{value:1}}]),vertexShader:t7.shadow_vert,fragmentShader:t7.shadow_frag}};ie.physical={uniforms:tG([ie.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new P},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new P},clearcoatNormalScale:{value:new C(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new P},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new P},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new P},sheen:{value:0},sheenColor:{value:new tn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new P},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new P},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new P},transmissionSamplerSize:{value:new C},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new P},attenuationDistance:{value:0},attenuationColor:{value:new tn(0)},specularColor:{value:new tn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new P},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new P}}]),vertexShader:t7.meshphysical_vert,fragmentShader:t7.meshphysical_frag};let it={r:0,b:0,g:0};function ii(e,t,i,n,a,o,s){let l=new tn(0),c=+(!0!==o),u,h,d=null,f=0,p=null;function m(t,i){t.getRGB(it,tV(e)),n.buffers.color.setClear(it.r,it.g,it.b,i,s)}return{getClearColor:function(){return l},setClearColor:function(e,t=1){l.set(e),m(l,c=t)},getClearAlpha:function(){return c},setClearAlpha:function(e){m(l,c=e)},render:function(n,o){let s=!1,g=!0===o.isScene?o.background:null;g&&g.isTexture&&(g=(o.backgroundBlurriness>0?i:t).get(g));let v=e.xr,y=v.getSession&&v.getSession();y&&"additive"===y.environmentBlendMode&&(g=null),null===g?m(l,c):g&&g.isColor&&(m(g,1),s=!0),(e.autoClear||s)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),g&&(g.isCubeTexture||306===g.mapping)?(void 0===h&&((h=new tz(new tB(1,1,1),new tq({name:"BackgroundCubeMaterial",uniforms:tH(ie.backgroundCube.uniforms),vertexShader:ie.backgroundCube.vertexShader,fragmentShader:ie.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(e,t,i){this.matrixWorld.copyPosition(i.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&!1===g.isRenderTargetTexture?-1:1,h.material.uniforms.backgroundBlurriness.value=o.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=o.backgroundIntensity,h.material.toneMapped=3001!==g.encoding,(d!==g||f!==g.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=g,f=g.version,p=e.toneMapping),h.layers.enableAll(),n.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(void 0===u&&((u=new tz(new t8(2,2),new tq({name:"BackgroundMaterial",uniforms:tH(ie.background.uniforms),vertexShader:ie.background.vertexShader,fragmentShader:ie.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=o.backgroundIntensity,u.material.toneMapped=3001!==g.encoding,!0===g.matrixAutoUpdate&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,p=e.toneMapping),u.layers.enableAll(),n.unshift(u,u.geometry,u.material,0,0,null))}}}function ir(e,t,i,n){let a=e.getParameter(34921),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||null!==o,l={},c=p(null),u=c,h=!1;function d(t){return n.isWebGL2?e.bindVertexArray(t):o.bindVertexArrayOES(t)}function f(t){return n.isWebGL2?e.deleteVertexArray(t):o.deleteVertexArrayOES(t)}function p(e){let t=[],i=[],n=[];for(let e=0;e<a;e++)t[e]=0,i[e]=0,n[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:i,attributeDivisors:n,object:e,attributes:{},index:null}}function m(){let e=u.newAttributes;for(let t=0,i=e.length;t<i;t++)e[t]=0}function g(e){v(e,0)}function v(i,a){let o=u.newAttributes,s=u.enabledAttributes,l=u.attributeDivisors;o[i]=1,0===s[i]&&(e.enableVertexAttribArray(i),s[i]=1),l[i]!==a&&((n.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](i,a),l[i]=a)}function y(){let t=u.newAttributes,i=u.enabledAttributes;for(let n=0,a=i.length;n<a;n++)i[n]!==t[n]&&(e.disableVertexAttribArray(n),i[n]=0)}function x(t,i,a,o,s,l){!0===n.isWebGL2&&(5124===a||5125===a)?e.vertexAttribIPointer(t,i,a,s,l):e.vertexAttribPointer(t,i,a,o,s,l)}function _(){M(),h=!0,u!==c&&d((u=c).object)}function M(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(a,c,f,_,M){let b=!1;if(s){let t=function(t,i,a){let s=!0===a.wireframe,c=l[t.id];void 0===c&&(c={},l[t.id]=c);let u=c[i.id];void 0===u&&(u={},c[i.id]=u);let h=u[s];return void 0===h&&(h=p(n.isWebGL2?e.createVertexArray():o.createVertexArrayOES()),u[s]=h),h}(_,f,c);u!==t&&d((u=t).object),(b=function(e,t,i,n){let a=u.attributes,o=t.attributes,s=0,l=i.getAttributes();for(let t in l)if(l[t].location>=0){let i=a[t],n=o[t];if(void 0===n&&("instanceMatrix"===t&&e.instanceMatrix&&(n=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(n=e.instanceColor)),void 0===i||i.attribute!==n||n&&i.data!==n.data)return!0;s++}return u.attributesNum!==s||u.index!==n}(a,_,f,M))&&function(e,t,i,n){let a={},o=t.attributes,s=0,l=i.getAttributes();for(let t in l)if(l[t].location>=0){let i=o[t];void 0===i&&("instanceMatrix"===t&&e.instanceMatrix&&(i=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(i=e.instanceColor));let n={};n.attribute=i,i&&i.data&&(n.data=i.data),a[t]=n,s++}u.attributes=a,u.attributesNum=s,u.index=n}(a,_,f,M)}else{let e=!0===c.wireframe;(u.geometry!==_.id||u.program!==f.id||u.wireframe!==e)&&(u.geometry=_.id,u.program=f.id,u.wireframe=e,b=!0)}null!==M&&i.update(M,34963),(b||h)&&(h=!1,function(a,o,s,l){if(!1===n.isWebGL2&&(a.isInstancedMesh||l.isInstancedBufferGeometry)&&null===t.get("ANGLE_instanced_arrays"))return;m();let c=l.attributes,u=s.getAttributes(),h=o.defaultAttributeValues;for(let t in u){let n=u[t];if(n.location>=0){let o=c[t];if(void 0===o&&("instanceMatrix"===t&&a.instanceMatrix&&(o=a.instanceMatrix),"instanceColor"===t&&a.instanceColor&&(o=a.instanceColor)),void 0!==o){let t=o.normalized,s=o.itemSize,c=i.get(o);if(void 0===c)continue;let u=c.buffer,h=c.type,d=c.bytesPerElement;if(o.isInterleavedBufferAttribute){let i=o.data,c=i.stride,f=o.offset;if(i.isInstancedInterleavedBuffer){for(let e=0;e<n.locationSize;e++)v(n.location+e,i.meshPerAttribute);!0!==a.isInstancedMesh&&void 0===l._maxInstanceCount&&(l._maxInstanceCount=i.meshPerAttribute*i.count)}else for(let e=0;e<n.locationSize;e++)g(n.location+e);e.bindBuffer(34962,u);for(let e=0;e<n.locationSize;e++)x(n.location+e,s/n.locationSize,h,t,c*d,(f+s/n.locationSize*e)*d)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<n.locationSize;e++)v(n.location+e,o.meshPerAttribute);!0!==a.isInstancedMesh&&void 0===l._maxInstanceCount&&(l._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<n.locationSize;e++)g(n.location+e);e.bindBuffer(34962,u);for(let e=0;e<n.locationSize;e++)x(n.location+e,s/n.locationSize,h,t,s*d,s/n.locationSize*e*d)}}else if(void 0!==h){let i=h[t];if(void 0!==i)switch(i.length){case 2:e.vertexAttrib2fv(n.location,i);break;case 3:e.vertexAttrib3fv(n.location,i);break;case 4:e.vertexAttrib4fv(n.location,i);break;default:e.vertexAttrib1fv(n.location,i)}}}}y()}(a,c,f,_),null!==M&&e.bindBuffer(34963,i.get(M).buffer))},reset:_,resetDefaultState:M,dispose:function(){for(let e in _(),l){let t=l[e];for(let e in t){let i=t[e];for(let e in i)f(i[e].object),delete i[e];delete t[e]}delete l[e]}},releaseStatesOfGeometry:function(e){if(void 0===l[e.id])return;let t=l[e.id];for(let e in t){let i=t[e];for(let e in i)f(i[e].object),delete i[e];delete t[e]}delete l[e.id]},releaseStatesOfProgram:function(e){for(let t in l){let i=l[t];if(void 0===i[e.id])continue;let n=i[e.id];for(let e in n)f(n[e].object),delete n[e];delete i[e.id]}},initAttributes:m,enableAttribute:g,disableUnusedAttributes:y}}function ia(e,t,i,n){let a,o=n.isWebGL2;this.setMode=function(e){a=e},this.render=function(t,n){e.drawArrays(a,t,n),i.update(n,a,1)},this.renderInstances=function(n,s,l){let c,u;if(0!==l){if(o)c=e,u="drawArraysInstanced";else if(c=t.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",null===c)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[u](a,n,s,l),i.update(s,a,l)}}}function io(e,t,i){let n;function a(t){if("highp"===t){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o="undefined"!=typeof WebGL2RenderingContext&&"WebGL2RenderingContext"===e.constructor.name,s=void 0!==i.precision?i.precision:"highp",l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);let c=o||t.has("WEBGL_draw_buffers"),u=!0===i.logarithmicDepthBuffer,h=e.getParameter(34930),d=e.getParameter(35660),f=e.getParameter(3379),p=e.getParameter(34076),m=e.getParameter(34921),g=e.getParameter(36347),v=e.getParameter(36348),y=e.getParameter(36349),x=d>0,_=o||t.has("OES_texture_float"),M=o?e.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:function(){if(void 0!==n)return n;if(!0===t.has("EXT_texture_filter_anisotropic")){let i=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:x&&_,maxSamples:M}}function is(e){let t=this,i=null,n=0,a=!1,o=!1,s=new t1,l=new P,c={value:null,needsUpdate:!1};function u(e,i,n,a){let o=null!==e?e.length:0,u=null;if(0!==o){if(u=c.value,!0!==a||null===u){let t=n+4*o,a=i.matrixWorldInverse;l.getNormalMatrix(a),(null===u||u.length<t)&&(u=new Float32Array(t));for(let t=0,i=n;t!==o;++t,i+=4)s.copy(e[t]).applyMatrix4(a,l),s.normal.toArray(u,i),u[i+3]=s.constant}c.value=u,c.needsUpdate=!0}return t.numPlanes=o,t.numIntersection=0,u}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let i=0!==e.length||t||0!==n||a;return a=t,n=e.length,i},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(e,t){i=u(e,t,0)},this.setState=function(s,l,h){let d=s.clippingPlanes,f=s.clipIntersection,p=s.clipShadows,m=e.get(s);if(a&&null!==d&&0!==d.length&&(!o||p)){let e=o?0:n,t=4*e,a=m.clippingState||null;c.value=a,a=u(d,l,t,h);for(let e=0;e!==t;++e)a[e]=i[e];m.clippingState=a,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}else o?u(null):(c.value!==i&&(c.value=i,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0)}}function il(e){let t=new WeakMap;function i(e,t){return 303===t?e.mapping=301:304===t&&(e.mapping=302),e}function n(e){let i=e.target;i.removeEventListener("dispose",n);let a=t.get(i);void 0!==a&&(t.delete(i),a.dispose())}return{get:function(a){if(a&&a.isTexture&&!1===a.isRenderTargetTexture){let o=a.mapping;if(303===o||304===o)if(t.has(a))return i(t.get(a).texture,a.mapping);else{let o=a.image;if(!o||!(o.height>0))return null;{let s=new tZ(o.height/2);return s.fromEquirectangularTexture(e,a),t.set(a,s),a.addEventListener("dispose",n),i(s.texture,a.mapping)}}}return a},dispose:function(){t=new WeakMap}}}class ic extends tY{constructor(e=-1,t=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,o){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,a=i-e,o=i+e,s=n+t,l=n-t;if(null!==this.view&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=e*this.view.offsetX,o=a+e*this.view.width,s-=t*this.view.offsetY,l=s-t*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}}let iu=[.125,.215,.35,.446,.526,.582],ih=new ic,id=new tn,ip=null,im=(1+Math.sqrt(5))/2,ig=1/im,iv=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,im,ig),new J(0,im,-ig),new J(ig,0,im),new J(-ig,0,im),new J(im,ig,0),new J(-im,ig,0)];class iy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ip=this._renderer.getRenderTarget(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=ib(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=iM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ip),e.scissorTest=!1,i_(e,0,0,e.width,e.height)}_fromTexture(e,t){301===e.mapping||302===e.mapping?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ip=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},n=ix(e,t,i);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){var a;null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=ix(e,t,i);let{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(e){let t=[],i=[],n=[],a=e,o=e-4+1+iu.length;for(let s=0;s<o;s++){let o=Math.pow(2,a);i.push(o);let l=1/o;s>e-4?l=iu[s-e+4-1]:0===s&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,i=e>2?0:-1,n=[t,i,0,t+2/3,i,0,t+2/3,i+1,0,t,i,0,t+2/3,i+1,0,t,i+1,0];f.set(n,18*e),p.set(d,12*e);let a=[e,e,e,e,e,e];m.set(a,6*e)}let g=new t_;g.setAttribute("position",new tc(f,3)),g.setAttribute("uv",new tc(p,2)),g.setAttribute("faceIndex",new tc(m,1)),t.push(g),a>4&&a--}return{lodPlanes:t,sizeLods:i,sigmas:n}}(n)),this._blurMaterial=(a=n,new tq({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:new Float32Array(20)},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:new J(0,1,0)}},vertexShader:iS(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1}))}return n}_compileMaterial(e){let t=new tz(this._lodPlanes[0],e);this._renderer.compile(t,ih)}_sceneToCubeUV(e,t,i,n){let a=new tX(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(id),l.toneMapping=0,l.autoClear=!1;let h=new to({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new tz(new tB,h),f=!1,p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,f=!0):(h.color.copy(id),f=!0);for(let t=0;t<6;t++){let i=t%3;0===i?(a.up.set(0,o[t],0),a.lookAt(s[t],0,0)):1===i?(a.up.set(0,0,o[t]),a.lookAt(0,s[t],0)):(a.up.set(0,o[t],0),a.lookAt(0,0,s[t]));let c=this._cubeSize;i_(n,i*c,t>2?c:0,c,c),l.setRenderTarget(n),f&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,n=301===e.mapping||302===e.mapping;n?(null===this._cubemapMaterial&&(this._cubemapMaterial=ib()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=iM());let a=n?this._cubemapMaterial:this._equirectMaterial,o=new tz(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let s=this._cubeSize;i_(t,0,0,3*s,2*s),i.setRenderTarget(t),i.render(o,ih)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let i=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),n=iv[(t-1)%iv.length];this._blur(e,t-1,t,i,n)}t.autoClear=i}_blur(e,t,i,n,a){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,o,s){let l=this._renderer,c=this._blurMaterial;"latitudinal"!==o&&"longitudinal"!==o&&console.error("blur direction must be either latitudinal or longitudinal!");let u=new tz(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[i]-1,f=isFinite(a)?Math.PI/(2*d):2*Math.PI/39,p=a/f,m=isFinite(a)?1+Math.floor(3*p):20;m>20&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let g=[],v=0;for(let e=0;e<20;++e){let t=e/p,i=Math.exp(-t*t/2);g.push(i),0===e?v+=i:e<m&&(v+=2*i)}for(let e=0;e<g.length;e++)g[e]=g[e]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value="latitudinal"===o,s&&(h.poleAxis.value=s);let{_lodMax:y}=this;h.dTheta.value=f,h.mipInt.value=y-i;let x=this._sizeLods[n],_=4*(this._cubeSize-x);i_(t,3*x*(n>y-4?n-y+4:0),_,3*x,2*x),l.setRenderTarget(t),l.render(u,ih)}}function ix(e,t,i){let n=new q(e,t,i);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function i_(e,t,i,n,a){e.viewport.set(t,i,n,a),e.scissor.set(t,i,n,a)}function iM(){return new tq({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iS(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ib(){return new tq({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iS(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function iS(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iw(e){let t=new WeakMap,i=null;function n(e){let i=e.target;i.removeEventListener("dispose",n);let a=t.get(i);void 0!==a&&(t.delete(i),a.dispose())}return{get:function(a){if(a&&a.isTexture){let o=a.mapping,s=303===o||304===o,l=301===o||302===o;if(s||l)if(a.isRenderTargetTexture&&!0===a.needsPMREMUpdate){a.needsPMREMUpdate=!1;let n=t.get(a);return null===i&&(i=new iy(e)),n=s?i.fromEquirectangular(a,n):i.fromCubemap(a,n),t.set(a,n),n.texture}else{if(t.has(a))return t.get(a).texture;{let o=a.image;if(!(s&&o&&o.height>0||l&&o&&function(e){let t=0;for(let i=0;i<6;i++)void 0!==e[i]&&t++;return 6===t}(o)))return null;{null===i&&(i=new iy(e));let o=s?i.fromEquirectangular(a):i.fromCubemap(a);return t.set(a,o),a.addEventListener("dispose",n),o.texture}}}}return a},dispose:function(){t=new WeakMap,null!==i&&(i.dispose(),i=null)}}}function iT(e){let t={};function i(i){let n;if(void 0!==t[i])return t[i];switch(i){case"WEBGL_depth_texture":n=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=e.getExtension(i)}return t[i]=n,n}return{has:function(e){return null!==i(e)},init:function(e){e.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(e){let t=i(e);return null===t&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),t}}}function iE(e,t,i,n){let a={},o=new WeakMap;function s(e){let l=e.target;for(let e in null!==l.index&&t.remove(l.index),l.attributes)t.remove(l.attributes[e]);l.removeEventListener("dispose",s),delete a[l.id];let c=o.get(l);c&&(t.remove(c),o.delete(l)),n.releaseStatesOfGeometry(l),!0===l.isInstancedBufferGeometry&&delete l._maxInstanceCount,i.memory.geometries--}function l(e){let i=[],n=e.index,a=e.attributes.position,s=0;if(null!==n){let e=n.array;s=n.version;for(let t=0,n=e.length;t<n;t+=3){let n=e[t+0],a=e[t+1],o=e[t+2];i.push(n,a,a,o,o,n)}}else{let e=a.array;s=a.version;for(let t=0,n=e.length/3-1;t<n;t+=3){let e=t+0,n=t+1,a=t+2;i.push(e,n,n,a,a,e)}}let l=new(R(i)?th:tu)(i,1);l.version=s;let c=o.get(e);c&&t.remove(c),o.set(e,l)}return{get:function(e,t){return!0===a[t.id]||(t.addEventListener("dispose",s),a[t.id]=!0,i.memory.geometries++),t},update:function(e){let i=e.attributes;for(let e in i)t.update(i[e],34962);let n=e.morphAttributes;for(let e in n){let i=n[e];for(let e=0,n=i.length;e<n;e++)t.update(i[e],34962)}},getWireframeAttribute:function(e){let t=o.get(e);if(t){let i=e.index;null!==i&&t.version<i.version&&l(e)}else l(e);return o.get(e)}}}function iA(e,t,i,n){let a,o,s,l=n.isWebGL2;this.setMode=function(e){a=e},this.setIndex=function(e){o=e.type,s=e.bytesPerElement},this.render=function(t,n){e.drawElements(a,n,o,t*s),i.update(n,a,1)},this.renderInstances=function(n,c,u){let h,d;if(0!==u){if(l)h=e,d="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",null===h)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[d](a,c,o,n*s,u),i.update(c,a,u)}}}function iC(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(e,i,n){switch(t.calls++,i){case 4:t.triangles+=e/3*n;break;case 1:t.lines+=e/2*n;break;case 3:t.lines+=n*(e-1);break;case 2:t.lines+=n*e;break;case 0:t.points+=n*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function iP(e,t){return e[0]-t[0]}function iL(e,t){return Math.abs(t[1])-Math.abs(e[1])}function iR(e,t,i){let n={},a=new Float32Array(8),o=new WeakMap,s=new j,l=[];for(let e=0;e<8;e++)l[e]=[e,0];return{update:function(c,u,h){let d=c.morphTargetInfluences;if(!0===t.isWebGL2){let n=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,a=void 0!==n?n.length:0,l=o.get(u);if(void 0===l||l.count!==a){let e=function(){y.dispose(),o.delete(u),u.removeEventListener("dispose",e)};void 0!==l&&l.texture.dispose();let i=void 0!==u.morphAttributes.position,n=void 0!==u.morphAttributes.normal,c=void 0!==u.morphAttributes.color,h=u.morphAttributes.position||[],d=u.morphAttributes.normal||[],f=u.morphAttributes.color||[],p=0;!0===i&&(p=1),!0===n&&(p=2),!0===c&&(p=3);let m=u.attributes.position.count*p,g=1;m>t.maxTextureSize&&(g=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let v=new Float32Array(m*g*4*a),y=new Y(v,m,g,a);y.type=1015,y.needsUpdate=!0;let x=4*p;for(let e=0;e<a;e++){let t=h[e],a=d[e],o=f[e],l=m*g*4*e;for(let e=0;e<t.count;e++){let u=e*x;!0===i&&(s.fromBufferAttribute(t,e),v[l+u+0]=s.x,v[l+u+1]=s.y,v[l+u+2]=s.z,v[l+u+3]=0),!0===n&&(s.fromBufferAttribute(a,e),v[l+u+4]=s.x,v[l+u+5]=s.y,v[l+u+6]=s.z,v[l+u+7]=0),!0===c&&(s.fromBufferAttribute(o,e),v[l+u+8]=s.x,v[l+u+9]=s.y,v[l+u+10]=s.z,v[l+u+11]=4===o.itemSize?s.w:1)}}l={count:a,texture:y,size:new C(m,g)},o.set(u,l),u.addEventListener("dispose",e)}let c=0;for(let e=0;e<d.length;e++)c+=d[e];let f=u.morphTargetsRelative?1:1-c;h.getUniforms().setValue(e,"morphTargetBaseInfluence",f),h.getUniforms().setValue(e,"morphTargetInfluences",d),h.getUniforms().setValue(e,"morphTargetsTexture",l.texture,i),h.getUniforms().setValue(e,"morphTargetsTextureSize",l.size)}else{let t=void 0===d?0:d.length,i=n[u.id];if(void 0===i||i.length!==t){i=[];for(let e=0;e<t;e++)i[e]=[e,0];n[u.id]=i}for(let e=0;e<t;e++){let t=i[e];t[0]=e,t[1]=d[e]}i.sort(iL);for(let e=0;e<8;e++)e<t&&i[e][1]?(l[e][0]=i[e][0],l[e][1]=i[e][1]):(l[e][0]=Number.MAX_SAFE_INTEGER,l[e][1]=0);l.sort(iP);let o=u.morphAttributes.position,s=u.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=l[e],i=t[0],n=t[1];i!==Number.MAX_SAFE_INTEGER&&n?(o&&u.getAttribute("morphTarget"+e)!==o[i]&&u.setAttribute("morphTarget"+e,o[i]),s&&u.getAttribute("morphNormal"+e)!==s[i]&&u.setAttribute("morphNormal"+e,s[i]),a[e]=n,c+=n):(o&&!0===u.hasAttribute("morphTarget"+e)&&u.deleteAttribute("morphTarget"+e),s&&!0===u.hasAttribute("morphNormal"+e)&&u.deleteAttribute("morphNormal"+e),a[e]=0)}let f=u.morphTargetsRelative?1:1-c;h.getUniforms().setValue(e,"morphTargetBaseInfluence",f),h.getUniforms().setValue(e,"morphTargetInfluences",a)}}}}function iD(e,t,i,n){let a=new WeakMap;function o(e){let t=e.target;t.removeEventListener("dispose",o),i.remove(t.instanceMatrix),null!==t.instanceColor&&i.remove(t.instanceColor)}return{update:function(e){let s=n.render.frame,l=e.geometry,c=t.get(e,l);return a.get(c)!==s&&(t.update(c),a.set(c,s)),e.isInstancedMesh&&(!1===e.hasEventListener("dispose",o)&&e.addEventListener("dispose",o),i.update(e.instanceMatrix,34962),null!==e.instanceColor&&i.update(e.instanceColor,34962)),c},dispose:function(){a=new WeakMap}}}let iI=new W,iU=new Y,iO=new class extends W{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},iN=new tK,ik=[],iz=[],iF=new Float32Array(16),iB=new Float32Array(9),iH=new Float32Array(4);function iG(e,t,i){let n=e[0];if(n<=0||n>0)return e;let a=t*i,o=ik[a];if(void 0===o&&(o=new Float32Array(a),ik[a]=o),0!==t){n.toArray(o,0);for(let n=1,a=0;n!==t;++n)a+=i,e[n].toArray(o,a)}return o}function iV(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function iW(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function ij(e,t){let i=iz[t];void 0===i&&(i=new Int32Array(t),iz[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function iq(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function iY(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(iV(i,t))return;e.uniform2fv(this.addr,t),iW(i,t)}}function iX(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(void 0!==t.r)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(iV(i,t))return;e.uniform3fv(this.addr,t),iW(i,t)}}function iJ(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(iV(i,t))return;e.uniform4fv(this.addr,t),iW(i,t)}}function iK(e,t){let i=this.cache,n=t.elements;if(void 0===n){if(iV(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),iW(i,t)}else{if(iV(i,n))return;iH.set(n),e.uniformMatrix2fv(this.addr,!1,iH),iW(i,n)}}function iZ(e,t){let i=this.cache,n=t.elements;if(void 0===n){if(iV(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),iW(i,t)}else{if(iV(i,n))return;iB.set(n),e.uniformMatrix3fv(this.addr,!1,iB),iW(i,n)}}function iQ(e,t){let i=this.cache,n=t.elements;if(void 0===n){if(iV(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),iW(i,t)}else{if(iV(i,n))return;iF.set(n),e.uniformMatrix4fv(this.addr,!1,iF),iW(i,n)}}function i$(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function i0(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(iV(i,t))return;e.uniform2iv(this.addr,t),iW(i,t)}}function i1(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(iV(i,t))return;e.uniform3iv(this.addr,t),iW(i,t)}}function i2(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(iV(i,t))return;e.uniform4iv(this.addr,t),iW(i,t)}}function i3(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function i5(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(iV(i,t))return;e.uniform2uiv(this.addr,t),iW(i,t)}}function i4(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(iV(i,t))return;e.uniform3uiv(this.addr,t),iW(i,t)}}function i6(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(iV(i,t))return;e.uniform4uiv(this.addr,t),iW(i,t)}}function i8(e,t,i){let n=this.cache,a=i.allocateTextureUnit();n[0]!==a&&(e.uniform1i(this.addr,a),n[0]=a),i.setTexture2D(t||iI,a)}function i7(e,t,i){let n=this.cache,a=i.allocateTextureUnit();n[0]!==a&&(e.uniform1i(this.addr,a),n[0]=a),i.setTexture3D(t||iO,a)}function i9(e,t,i){let n=this.cache,a=i.allocateTextureUnit();n[0]!==a&&(e.uniform1i(this.addr,a),n[0]=a),i.setTextureCube(t||iN,a)}function re(e,t,i){let n=this.cache,a=i.allocateTextureUnit();n[0]!==a&&(e.uniform1i(this.addr,a),n[0]=a),i.setTexture2DArray(t||iU,a)}function rt(e,t){e.uniform1fv(this.addr,t)}function ri(e,t){let i=iG(t,this.size,2);e.uniform2fv(this.addr,i)}function rr(e,t){let i=iG(t,this.size,3);e.uniform3fv(this.addr,i)}function rn(e,t){let i=iG(t,this.size,4);e.uniform4fv(this.addr,i)}function ra(e,t){let i=iG(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function ro(e,t){let i=iG(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function rs(e,t){let i=iG(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function rl(e,t){e.uniform1iv(this.addr,t)}function rc(e,t){e.uniform2iv(this.addr,t)}function ru(e,t){e.uniform3iv(this.addr,t)}function rh(e,t){e.uniform4iv(this.addr,t)}function rd(e,t){e.uniform1uiv(this.addr,t)}function rf(e,t){e.uniform2uiv(this.addr,t)}function rp(e,t){e.uniform3uiv(this.addr,t)}function rm(e,t){e.uniform4uiv(this.addr,t)}function rg(e,t,i){let n=this.cache,a=t.length,o=ij(i,a);iV(n,o)||(e.uniform1iv(this.addr,o),iW(n,o));for(let e=0;e!==a;++e)i.setTexture2D(t[e]||iI,o[e])}function rv(e,t,i){let n=this.cache,a=t.length,o=ij(i,a);iV(n,o)||(e.uniform1iv(this.addr,o),iW(n,o));for(let e=0;e!==a;++e)i.setTexture3D(t[e]||iO,o[e])}function ry(e,t,i){let n=this.cache,a=t.length,o=ij(i,a);iV(n,o)||(e.uniform1iv(this.addr,o),iW(n,o));for(let e=0;e!==a;++e)i.setTextureCube(t[e]||iN,o[e])}function rx(e,t,i){let n=this.cache,a=t.length,o=ij(i,a);iV(n,o)||(e.uniform1iv(this.addr,o),iW(n,o));for(let e=0;e!==a;++e)i.setTexture2DArray(t[e]||iU,o[e])}class r_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=function(e){switch(e){case 5126:return iq;case 35664:return iY;case 35665:return iX;case 35666:return iJ;case 35674:return iK;case 35675:return iZ;case 35676:return iQ;case 5124:case 35670:return i$;case 35667:case 35671:return i0;case 35668:case 35672:return i1;case 35669:case 35673:return i2;case 5125:return i3;case 36294:return i5;case 36295:return i4;case 36296:return i6;case 35678:case 36198:case 36298:case 36306:case 35682:return i8;case 35679:case 36299:case 36307:return i7;case 35680:case 36300:case 36308:case 36293:return i9;case 36289:case 36303:case 36311:case 36292:return re}}(t.type)}}class rM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=function(e){switch(e){case 5126:return rt;case 35664:return ri;case 35665:return rr;case 35666:return rn;case 35674:return ra;case 35675:return ro;case 35676:return rs;case 5124:case 35670:return rl;case 35667:case 35671:return rc;case 35668:case 35672:return ru;case 35669:case 35673:return rh;case 5125:return rd;case 36294:return rf;case 36295:return rp;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return rx}}(t.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let a=0,o=n.length;a!==o;++a){let o=n[a];o.setValue(e,t[o.id],i)}}}let rS=/(\w+)(\])?(\[|\.)?/g;function rw(e,t){e.seq.push(t),e.map[t.id]=t}class rT{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){let i=e.getActiveUniform(t,n),a=e.getUniformLocation(t,i.name);!function(e,t,i){let n=e.name,a=n.length;for(rS.lastIndex=0;;){let o=rS.exec(n),s=rS.lastIndex,l=o[1],c="]"===o[2],u=o[3];if(c&&(l|=0),void 0===u||"["===u&&s+2===a){rw(i,void 0===u?new r_(l,e,t):new rM(l,e,t));break}{let e=i.map[l];void 0===e&&rw(i,e=new rb(l)),i=e}}}(i,a,this)}}setValue(e,t,i,n){let a=this.map[t];void 0!==a&&a.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];void 0!==n&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,o=t.length;a!==o;++a){let o=t[a],s=i[o.id];!1!==s.needsUpdate&&o.setValue(e,s.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,a=e.length;n!==a;++n){let a=e[n];a.id in t&&i.push(a)}return i}}function rE(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}let rA=0;function rC(e,t,i){let n=e.getShaderParameter(t,35713),a=e.getShaderInfoLog(t).trim();if(n&&""===a)return"";let o=/ERROR: 0:(\d+)/.exec(a);if(!o)return a;{let n=parseInt(o[1]);return i.toUpperCase()+`

`+a+`

`+function(e,t){let i=e.split(`
`),n=[],a=Math.max(t-6,0),o=Math.min(t+6,i.length);for(let e=a;e<o;e++){let a=e+1;n.push(`${a===t?">":" "} ${a}: ${i[e]}`)}return n.join(`
`)}(e.getShaderSource(t),n)}}function rP(e){return""!==e}function rL(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rR(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}let rD=/^[ \t]*#include +<([\w\d./]+)>/gm;function rI(e){return e.replace(rD,rU)}function rU(e,t){let i=t7[t];if(void 0===i)throw Error("Can not resolve #include <"+t+">");return rI(i)}let rO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rN(e){return e.replace(rO,rk)}function rk(e,t,i,n){let a="";for(let e=parseInt(t);e<parseInt(i);e++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return a}function rz(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return"highp"===e.precision?t+=`
#define HIGH_PRECISION`:"mediump"===e.precision?t+=`
#define MEDIUM_PRECISION`:"lowp"===e.precision&&(t+=`
#define LOW_PRECISION`),t}function rF(e,t,i,n){let a,o,s,l,c=e.getContext(),u=i.defines,h=i.vertexShader,d=i.fragmentShader,f=(s="SHADOWMAP_TYPE_BASIC",1===i.shadowMapType?s="SHADOWMAP_TYPE_PCF":2===i.shadowMapType?s="SHADOWMAP_TYPE_PCF_SOFT":3===i.shadowMapType&&(s="SHADOWMAP_TYPE_VSM"),s),p=function(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV"}return t}(i),m=(l="ENVMAP_MODE_REFLECTION",i.envMap&&302===i.envMapMode&&(l="ENVMAP_MODE_REFRACTION"),l),g=function(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD"}return t}(i),y=function(e){let t=e.envMapCubeUVHeight;if(null===t)return null;let i=Math.log2(t)-2;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:1/t,maxMip:i}}(i),x=i.isWebGL2?"":[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||"physical"===i.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rP).join(`
`),_=function(e){let t=[];for(let i in e){let n=e[i];!1!==n&&t.push("#define "+i+" "+n)}return t.join(`
`)}(u),M=c.createProgram(),b,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?((b=[_].filter(rP).join(`
`)).length>0&&(b+=`
`),(S=[x,_].filter(rP).join(`
`)).length>0&&(S+=`
`)):(b=[rz(i),"#define SHADER_NAME "+i.shaderName,_,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs2?"#define USE_UV2":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+f:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rP).join(`
`),S=[x,rz(i),"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs2?"#define USE_UV2":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+f:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==i.toneMapping?"#define TONE_MAPPING":"",0!==i.toneMapping?t7.tonemapping_pars_fragment:"",0!==i.toneMapping?function(e,t){let i;switch(t){case 1:i="Linear";break;case 2:i="Reinhard";break;case 3:i="OptimizedCineon";break;case 4:i="ACESFilmic";break;case 5:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",t7.encodings_pars_fragment,function(e,t){let i=function(e){switch(e){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}("linearToOutputTexel",i.outputEncoding),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(rP).join(`
`)),h=rR(h=rL(h=rI(h),i),i),d=rR(d=rL(d=rI(d),i),i),h=rN(h),d=rN(d),i.isWebGL2&&!0!==i.isRawShaderMaterial&&(w=`#version 300 es
`,b=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,S=["#define varying in",i.glslVersion===v?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let T=w+b+h,E=w+S+d,A=rE(c,35633,T),C=rE(c,35632,E);if(c.attachShader(M,A),c.attachShader(M,C),void 0!==i.index0AttributeName?c.bindAttribLocation(M,0,i.index0AttributeName):!0===i.morphTargets&&c.bindAttribLocation(M,0,"position"),c.linkProgram(M),e.debug.checkShaderErrors){let t=c.getProgramInfoLog(M).trim(),i=c.getShaderInfoLog(A).trim(),n=c.getShaderInfoLog(C).trim(),a=!0,o=!0;if(!1===c.getProgramParameter(M,35714))if(a=!1,"function"==typeof e.debug.onShaderError)e.debug.onShaderError(c,M,A,C);else{let e=rC(c,A,"vertex"),i=rC(c,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(M,35715)+`

Program Info Log: `+t+`
`+e+`
`+i)}else""!==t?console.warn("THREE.WebGLProgram: Program Info Log:",t):(""===i||""===n)&&(o=!1);o&&(this.diagnostics={runnable:a,programLog:t,vertexShader:{log:i,prefix:b},fragmentShader:{log:n,prefix:S}})}return c.deleteShader(A),c.deleteShader(C),this.getUniforms=function(){return void 0===a&&(a=new rT(c,M)),a},this.getAttributes=function(){return void 0===o&&(o=function(e,t){let i={},n=e.getProgramParameter(t,35721);for(let a=0;a<n;a++){let n=e.getActiveAttrib(t,a),o=n.name,s=1;35674===n.type&&(s=2),35675===n.type&&(s=3),35676===n.type&&(s=4),i[o]={type:n.type,location:e.getAttribLocation(t,o),locationSize:s}}return i}(c,M)),o},this.destroy=function(){n.releaseStatesOfProgram(this),c.deleteProgram(M),this.program=void 0},this.name=i.shaderName,this.id=rA++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=C,this}let rB=0;class rH{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return!1===o.has(n)&&(o.add(n),n.usedTimes++),!1===o.has(a)&&(o.add(a),a.usedTimes++),this}remove(e){for(let t of this.materialCache.get(e))t.usedTimes--,0===t.usedTimes&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return void 0===i&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return void 0===i&&(i=new rG(e),t.set(e,i)),i}}class rG{constructor(e){this.id=rB++,this.code=e,this.usedTimes=0}}function rV(e,t,i,n,a,o,s){let l=new eO,c=new rH,u=[],h=a.isWebGL2,d=a.logarithmicDepthBuffer,f=a.vertexTextures,p=a.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(e){return 1===e?"uv2":"uv"}return{getParameters:function(o,l,u,v,y){let x,_,M,b,S=v.fog,w=y.geometry,T=o.isMeshStandardMaterial?v.environment:null,E=(o.isMeshStandardMaterial?i:t).get(o.envMap||T),A=E&&306===E.mapping?E.image.height:null,C=m[o.type];null!==o.precision&&(p=a.getMaxPrecision(o.precision))!==o.precision&&console.warn("THREE.WebGLProgram.getParameters:",o.precision,"not supported, using",p,"instead.");let P=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,L=void 0!==P?P.length:0,R=0;if(void 0!==w.morphAttributes.position&&(R=1),void 0!==w.morphAttributes.normal&&(R=2),void 0!==w.morphAttributes.color&&(R=3),C){let e=ie[C];x=e.vertexShader,_=e.fragmentShader}else x=o.vertexShader,_=o.fragmentShader,c.update(o),M=c.getVertexShaderID(o),b=c.getFragmentShaderID(o);let D=e.getRenderTarget(),I=!0===y.isInstancedMesh,U=!!o.map,O=!!o.matcap,N=!!E,k=!!o.aoMap,z=!!o.lightMap,F=!!o.bumpMap,B=!!o.normalMap,H=!!o.displacementMap,G=!!o.emissiveMap,V=!!o.metalnessMap,W=!!o.roughnessMap,j=o.clearcoat>0,q=o.iridescence>0,Y=o.sheen>0,X=o.transmission>0,J=j&&!!o.clearcoatMap,K=j&&!!o.clearcoatNormalMap,Z=j&&!!o.clearcoatRoughnessMap,Q=q&&!!o.iridescenceMap,$=q&&!!o.iridescenceThicknessMap,ee=Y&&!!o.sheenColorMap,et=Y&&!!o.sheenRoughnessMap,ei=!!o.specularMap,er=!!o.specularColorMap,en=!!o.specularIntensityMap,ea=X&&!!o.transmissionMap,eo=X&&!!o.thicknessMap,es=!!o.gradientMap,el=!!o.alphaMap,ec=o.alphaTest>0,eu=!!o.extensions,eh=!!w.attributes.uv2;return{isWebGL2:h,shaderID:C,shaderName:o.type,vertexShader:x,fragmentShader:_,defines:o.defines,customVertexShaderID:M,customFragmentShaderID:b,isRawShaderMaterial:!0===o.isRawShaderMaterial,glslVersion:o.glslVersion,precision:p,instancing:I,instancingColor:I&&null!==y.instanceColor,supportsVertexTextures:f,outputEncoding:null===D?e.outputEncoding:!0===D.isXRRenderTarget?D.texture.encoding:3e3,map:U,matcap:O,envMap:N,envMapMode:N&&E.mapping,envMapCubeUVHeight:A,aoMap:k,lightMap:z,bumpMap:F,normalMap:B,displacementMap:f&&H,emissiveMap:G,normalMapObjectSpace:B&&1===o.normalMapType,normalMapTangentSpace:B&&0===o.normalMapType,decodeVideoTexture:U&&!0===o.map.isVideoTexture&&3001===o.map.encoding,metalnessMap:V,roughnessMap:W,clearcoat:j,clearcoatMap:J,clearcoatNormalMap:K,clearcoatRoughnessMap:Z,iridescence:q,iridescenceMap:Q,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:et,specularMap:ei,specularColorMap:er,specularIntensityMap:en,transmission:X,transmissionMap:ea,thicknessMap:eo,gradientMap:es,opaque:!1===o.transparent&&1===o.blending,alphaMap:el,alphaTest:ec,combine:o.combine,mapUv:U&&g(o.map.channel),aoMapUv:k&&g(o.aoMap.channel),lightMapUv:z&&g(o.lightMap.channel),bumpMapUv:F&&g(o.bumpMap.channel),normalMapUv:B&&g(o.normalMap.channel),displacementMapUv:H&&g(o.displacementMap.channel),emissiveMapUv:G&&g(o.emissiveMap.channel),metalnessMapUv:V&&g(o.metalnessMap.channel),roughnessMapUv:W&&g(o.roughnessMap.channel),clearcoatMapUv:J&&g(o.clearcoatMap.channel),clearcoatNormalMapUv:K&&g(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(o.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(o.iridescenceMap.channel),iridescenceThicknessMapUv:$&&g(o.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(o.sheenColorMap.channel),sheenRoughnessMapUv:et&&g(o.sheenRoughnessMap.channel),specularMapUv:ei&&g(o.specularMap.channel),specularColorMapUv:er&&g(o.specularColorMap.channel),specularIntensityMapUv:en&&g(o.specularIntensityMap.channel),transmissionMapUv:ea&&g(o.transmissionMap.channel),thicknessMapUv:eo&&g(o.thicknessMap.channel),alphaMapUv:el&&g(o.alphaMap.channel),vertexTangents:B&&!!w.attributes.tangent,vertexColors:o.vertexColors,vertexAlphas:!0===o.vertexColors&&!!w.attributes.color&&4===w.attributes.color.itemSize,vertexUvs2:eh,pointsUvs:!0===y.isPoints&&!!w.attributes.uv&&(U||el),fog:!!S,useFog:!0===o.fog,fogExp2:S&&S.isFogExp2,flatShading:!0===o.flatShading,sizeAttenuation:!0===o.sizeAttenuation,logarithmicDepthBuffer:d,skinning:!0===y.isSkinnedMesh,morphTargets:void 0!==w.morphAttributes.position,morphNormals:void 0!==w.morphAttributes.normal,morphColors:void 0!==w.morphAttributes.color,morphTargetsCount:L,morphTextureStride:R,numDirLights:l.directional.length,numPointLights:l.point.length,numSpotLights:l.spot.length,numSpotLightMaps:l.spotLightMap.length,numRectAreaLights:l.rectArea.length,numHemiLights:l.hemi.length,numDirLightShadows:l.directionalShadowMap.length,numPointLightShadows:l.pointShadowMap.length,numSpotLightShadows:l.spotShadowMap.length,numSpotLightShadowsWithMaps:l.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:o.toneMapped?e.toneMapping:0,useLegacyLights:e.useLegacyLights,premultipliedAlpha:o.premultipliedAlpha,doubleSided:2===o.side,flipSided:1===o.side,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionDerivatives:eu&&!0===o.extensions.derivatives,extensionFragDepth:eu&&!0===o.extensions.fragDepth,extensionDrawBuffers:eu&&!0===o.extensions.drawBuffers,extensionShaderTextureLOD:eu&&!0===o.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:o.customProgramCacheKey()}},getProgramCacheKey:function(t){var i,n,a,o;let s=[];if(t.shaderID?s.push(t.shaderID):(s.push(t.customVertexShaderID),s.push(t.customFragmentShaderID)),void 0!==t.defines)for(let e in t.defines)s.push(e),s.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(i=s,n=t,i.push(n.precision),i.push(n.outputEncoding),i.push(n.envMapMode),i.push(n.envMapCubeUVHeight),i.push(n.mapUv),i.push(n.alphaMapUv),i.push(n.lightMapUv),i.push(n.aoMapUv),i.push(n.bumpMapUv),i.push(n.normalMapUv),i.push(n.displacementMapUv),i.push(n.emissiveMapUv),i.push(n.metalnessMapUv),i.push(n.roughnessMapUv),i.push(n.clearcoatMapUv),i.push(n.clearcoatNormalMapUv),i.push(n.clearcoatRoughnessMapUv),i.push(n.iridescenceMapUv),i.push(n.iridescenceThicknessMapUv),i.push(n.sheenColorMapUv),i.push(n.sheenRoughnessMapUv),i.push(n.specularMapUv),i.push(n.specularColorMapUv),i.push(n.specularIntensityMapUv),i.push(n.transmissionMapUv),i.push(n.thicknessMapUv),i.push(n.combine),i.push(n.fogExp2),i.push(n.sizeAttenuation),i.push(n.morphTargetsCount),i.push(n.morphAttributeCount),i.push(n.numDirLights),i.push(n.numPointLights),i.push(n.numSpotLights),i.push(n.numSpotLightMaps),i.push(n.numHemiLights),i.push(n.numRectAreaLights),i.push(n.numDirLightShadows),i.push(n.numPointLightShadows),i.push(n.numSpotLightShadows),i.push(n.numSpotLightShadowsWithMaps),i.push(n.shadowMapType),i.push(n.toneMapping),i.push(n.numClippingPlanes),i.push(n.numClipIntersection),i.push(n.depthPacking),a=s,o=t,l.disableAll(),o.isWebGL2&&l.enable(0),o.supportsVertexTextures&&l.enable(1),o.instancing&&l.enable(2),o.instancingColor&&l.enable(3),o.matcap&&l.enable(4),o.envMap&&l.enable(5),o.normalMapObjectSpace&&l.enable(6),o.normalMapTangentSpace&&l.enable(7),o.clearcoat&&l.enable(8),o.iridescence&&l.enable(9),o.alphaTest&&l.enable(10),o.vertexColors&&l.enable(11),o.vertexAlphas&&l.enable(12),o.vertexUvs2&&l.enable(13),o.vertexTangents&&l.enable(14),a.push(l.mask),l.disableAll(),o.fog&&l.enable(0),o.useFog&&l.enable(1),o.flatShading&&l.enable(2),o.logarithmicDepthBuffer&&l.enable(3),o.skinning&&l.enable(4),o.morphTargets&&l.enable(5),o.morphNormals&&l.enable(6),o.morphColors&&l.enable(7),o.premultipliedAlpha&&l.enable(8),o.shadowMapEnabled&&l.enable(9),o.useLegacyLights&&l.enable(10),o.doubleSided&&l.enable(11),o.flipSided&&l.enable(12),o.useDepthPacking&&l.enable(13),o.dithering&&l.enable(14),o.transmission&&l.enable(15),o.sheen&&l.enable(16),o.decodeVideoTexture&&l.enable(17),o.opaque&&l.enable(18),o.pointsUvs&&l.enable(19),a.push(l.mask),s.push(e.outputEncoding)),s.push(t.customProgramCacheKey),s.join()},getUniforms:function(e){let t,i=m[e.type];return t=i?tH(ie[i].uniforms):e.uniforms},acquireProgram:function(t,i){let n;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===i){n=t,++n.usedTimes;break}}return void 0===n&&(n=new rF(e,i,t,o),u.push(n)),n},releaseProgram:function(e){if(0==--e.usedTimes){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}},releaseShaderCache:function(e){c.remove(e)},programs:u,dispose:function(){c.dispose()}}}function rW(){let e=new WeakMap;return{get:function(t){let i=e.get(t);return void 0===i&&(i={},e.set(t,i)),i},remove:function(t){e.delete(t)},update:function(t,i,n){e.get(t)[i]=n},dispose:function(){e=new WeakMap}}}function rj(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function rq(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function rY(){let e=[],t=0,i=[],n=[],a=[];function o(i,n,a,o,s,l){let c=e[t];return void 0===c?(c={id:i.id,object:i,geometry:n,material:a,groupOrder:o,renderOrder:i.renderOrder,z:s,group:l},e[t]=c):(c.id=i.id,c.object=i,c.geometry=n,c.material=a,c.groupOrder=o,c.renderOrder=i.renderOrder,c.z=s,c.group=l),t++,c}return{opaque:i,transmissive:n,transparent:a,init:function(){t=0,i.length=0,n.length=0,a.length=0},push:function(e,t,s,l,c,u){let h=o(e,t,s,l,c,u);s.transmission>0?n.push(h):!0===s.transparent?a.push(h):i.push(h)},unshift:function(e,t,s,l,c,u){let h=o(e,t,s,l,c,u);s.transmission>0?n.unshift(h):!0===s.transparent?a.unshift(h):i.unshift(h)},finish:function(){for(let i=t,n=e.length;i<n;i++){let t=e[i];if(null===t.id)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}},sort:function(e,t){i.length>1&&i.sort(e||rj),n.length>1&&n.sort(t||rq),a.length>1&&a.sort(t||rq)}}}function rX(){let e=new WeakMap;return{get:function(t,i){let n,a=e.get(t);return void 0===a?(n=new rY,e.set(t,[n])):i>=a.length?(n=new rY,a.push(n)):n=a[i],n},dispose:function(){e=new WeakMap}}}function rJ(){let e={};return{get:function(t){let i;if(void 0!==e[t.id])return e[t.id];switch(t.type){case"DirectionalLight":i={direction:new J,color:new tn};break;case"SpotLight":i={position:new J,direction:new J,color:new tn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new tn,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new tn,groundColor:new tn};break;case"RectAreaLight":i={color:new tn,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=i,i}}}let rK=0;function rZ(e,t){return 2*!!t.castShadow-2*!!e.castShadow+ +!!t.map-!!e.map}function rQ(e,t){let i=new rJ,n=function(){let e={};return{get:function(t){let i;if(void 0!==e[t.id])return e[t.id];switch(t.type){case"DirectionalLight":case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new C};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new C,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let e=0;e<9;e++)a.probe.push(new J);let o=new J,s=new ew,l=new ew;return{setup:function(o,s){let l=0,c=0,u=0;for(let e=0;e<9;e++)a.probe[e].set(0,0,0);let h=0,d=0,f=0,p=0,m=0,g=0,v=0,y=0,x=0,_=0;o.sort(rZ);let M=!0===s?Math.PI:1;for(let e=0,t=o.length;e<t;e++){let t=o[e],s=t.color,b=t.intensity,S=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)l+=s.r*b*M,c+=s.g*b*M,u+=s.b*b*M;else if(t.isLightProbe)for(let e=0;e<9;e++)a.probe[e].addScaledVector(t.sh.coefficients[e],b);else if(t.isDirectionalLight){let e=i.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*M),t.castShadow){let e=t.shadow,i=n.get(t);i.shadowBias=e.bias,i.shadowNormalBias=e.normalBias,i.shadowRadius=e.radius,i.shadowMapSize=e.mapSize,a.directionalShadow[h]=i,a.directionalShadowMap[h]=w,a.directionalShadowMatrix[h]=t.shadow.matrix,g++}a.directional[h]=e,h++}else if(t.isSpotLight){let e=i.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(s).multiplyScalar(b*M),e.distance=S,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,a.spot[f]=e;let o=t.shadow;if(t.map&&(a.spotLightMap[x]=t.map,x++,o.updateMatrices(t),t.castShadow&&_++),a.spotLightMatrix[f]=o.matrix,t.castShadow){let e=n.get(t);e.shadowBias=o.bias,e.shadowNormalBias=o.normalBias,e.shadowRadius=o.radius,e.shadowMapSize=o.mapSize,a.spotShadow[f]=e,a.spotShadowMap[f]=w,y++}f++}else if(t.isRectAreaLight){let e=i.get(t);e.color.copy(s).multiplyScalar(b),e.halfWidth.set(.5*t.width,0,0),e.halfHeight.set(0,.5*t.height,0),a.rectArea[p]=e,p++}else if(t.isPointLight){let e=i.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*M),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,i=n.get(t);i.shadowBias=e.bias,i.shadowNormalBias=e.normalBias,i.shadowRadius=e.radius,i.shadowMapSize=e.mapSize,i.shadowCameraNear=e.camera.near,i.shadowCameraFar=e.camera.far,a.pointShadow[d]=i,a.pointShadowMap[d]=w,a.pointShadowMatrix[d]=t.shadow.matrix,v++}a.point[d]=e,d++}else if(t.isHemisphereLight){let e=i.get(t);e.skyColor.copy(t.color).multiplyScalar(b*M),e.groundColor.copy(t.groundColor).multiplyScalar(b*M),a.hemi[m]=e,m++}}p>0&&(t.isWebGL2||!0===e.has("OES_texture_float_linear")?(a.rectAreaLTC1=t9.LTC_FLOAT_1,a.rectAreaLTC2=t9.LTC_FLOAT_2):!0===e.has("OES_texture_half_float_linear")?(a.rectAreaLTC1=t9.LTC_HALF_1,a.rectAreaLTC2=t9.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=l,a.ambient[1]=c,a.ambient[2]=u;let b=a.hash;(b.directionalLength!==h||b.pointLength!==d||b.spotLength!==f||b.rectAreaLength!==p||b.hemiLength!==m||b.numDirectionalShadows!==g||b.numPointShadows!==v||b.numSpotShadows!==y||b.numSpotMaps!==x)&&(a.directional.length=h,a.spot.length=f,a.rectArea.length=p,a.point.length=d,a.hemi.length=m,a.directionalShadow.length=g,a.directionalShadowMap.length=g,a.pointShadow.length=v,a.pointShadowMap.length=v,a.spotShadow.length=y,a.spotShadowMap.length=y,a.directionalShadowMatrix.length=g,a.pointShadowMatrix.length=v,a.spotLightMatrix.length=y+x-_,a.spotLightMap.length=x,a.numSpotLightShadowsWithMaps=_,b.directionalLength=h,b.pointLength=d,b.spotLength=f,b.rectAreaLength=p,b.hemiLength=m,b.numDirectionalShadows=g,b.numPointShadows=v,b.numSpotShadows=y,b.numSpotMaps=x,a.version=rK++)},setupView:function(e,t){let i=0,n=0,c=0,u=0,h=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=a.directional[i];e.direction.setFromMatrixPosition(f.matrixWorld),o.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(o),e.direction.transformDirection(d),i++}else if(f.isSpotLight){let e=a.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),o.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(o),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=a.rectArea[u];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),l.identity(),s.copy(f.matrixWorld),s.premultiply(d),l.extractRotation(s),e.halfWidth.set(.5*f.width,0,0),e.halfHeight.set(0,.5*f.height,0),e.halfWidth.applyMatrix4(l),e.halfHeight.applyMatrix4(l),u++}else if(f.isPointLight){let e=a.point[n];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),n++}else if(f.isHemisphereLight){let e=a.hemi[h];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),h++}}},state:a}}function r$(e,t){let i=new rQ(e,t),n=[],a=[];return{init:function(){n.length=0,a.length=0},state:{lightsArray:n,shadowsArray:a,lights:i},setupLights:function(e){i.setup(n,e)},setupLightsView:function(e){i.setupView(n,e)},pushLight:function(e){n.push(e)},pushShadow:function(e){a.push(e)}}}function r0(e,t){let i=new WeakMap;return{get:function(n,a=0){let o,s=i.get(n);return void 0===s?(o=new r$(e,t),i.set(n,[o])):a>=s.length?(o=new r$(e,t),s.push(o)):o=s[a],o},dispose:function(){i=new WeakMap}}}class r1 extends e9{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r2 extends e9{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}let r3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r4(e,t,i){let n=new t5,a=new C,o=new C,s=new j,l=new r1({depthPacking:3201}),c=new r2,u={},h=i.maxTextureSize,d={0:1,1:0,2:2},f=new tq({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new C},radius:{value:4}},vertexShader:r3,fragmentShader:r5}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new t_;m.setAttribute("position",new tc(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new tz(m,f),v=this;function y(t,i,n,a){let o=null,s=!0===n.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(void 0!==s)o=s;else if(o=!0===n.isPointLight?c:l,e.localClippingEnabled&&!0===i.clipShadows&&Array.isArray(i.clippingPlanes)&&0!==i.clippingPlanes.length||i.displacementMap&&0!==i.displacementScale||i.alphaMap&&i.alphaTest>0||i.map&&i.alphaTest>0){let e=o.uuid,t=i.uuid,n=u[e];void 0===n&&(n={},u[e]=n);let a=n[t];void 0===a&&(a=o.clone(),n[t]=a),o=a}return o.visible=i.visible,o.wireframe=i.wireframe,3===a?o.side=null!==i.shadowSide?i.shadowSide:i.side:o.side=null!==i.shadowSide?i.shadowSide:d[i.side],o.alphaMap=i.alphaMap,o.alphaTest=i.alphaTest,o.map=i.map,o.clipShadows=i.clipShadows,o.clippingPlanes=i.clippingPlanes,o.clipIntersection=i.clipIntersection,o.displacementMap=i.displacementMap,o.displacementScale=i.displacementScale,o.displacementBias=i.displacementBias,o.wireframeLinewidth=i.wireframeLinewidth,o.linewidth=i.linewidth,!0===n.isPointLight&&!0===o.isMeshDistanceMaterial&&(e.properties.get(o).light=n),o}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(i,l,c){if(!1===v.enabled||!1===v.autoUpdate&&!1===v.needsUpdate||0===i.length)return;let u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.state;x.setBlending(0),x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);for(let u=0,d=i.length;u<d;u++){let d=i[u],m=d.shadow;if(void 0===m){console.warn("THREE.WebGLShadowMap:",d,"has no shadow.");continue}if(!1===m.autoUpdate&&!1===m.needsUpdate)continue;a.copy(m.mapSize);let v=m.getFrameExtents();if(a.multiply(v),o.copy(m.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(o.x=Math.floor(h/v.x),a.x=o.x*v.x,m.mapSize.x=o.x),a.y>h&&(o.y=Math.floor(h/v.y),a.y=o.y*v.y,m.mapSize.y=o.y)),null===m.map){let e=3!==this.type?{minFilter:1003,magFilter:1003}:{};m.map=new q(a.x,a.y,e),m.map.texture.name=d.name+".shadowMap",m.camera.updateProjectionMatrix()}e.setRenderTarget(m.map),e.clear();let _=m.getViewportCount();for(let i=0;i<_;i++){let a=m.getViewport(i);s.set(o.x*a.x,o.y*a.y,o.x*a.z,o.y*a.w),x.viewport(s),m.updateMatrices(d,i),n=m.getFrustum(),function i(a,o,s,l,c){if(!1===a.visible)return;if(a.layers.test(o.layers)&&(a.isMesh||a.isLine||a.isPoints)&&(a.castShadow||a.receiveShadow&&3===c)&&(!a.frustumCulled||n.intersectsObject(a))){a.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,a.matrixWorld);let i=t.update(a),n=a.material;if(Array.isArray(n)){let t=i.groups;for(let o=0,u=t.length;o<u;o++){let u=t[o],h=n[u.materialIndex];if(h&&h.visible){let t=y(a,h,l,c);e.renderBufferDirect(s,null,i,t,a,u)}}}else if(n.visible){let t=y(a,n,l,c);e.renderBufferDirect(s,null,i,t,a,null)}}let u=a.children;for(let e=0,t=u.length;e<t;e++)i(u[e],o,s,l,c)}(l,c,m.camera,d,this.type)}!0!==m.isPointLightShadow&&3===this.type&&function(i,n){let o=t.update(g);f.defines.VSM_SAMPLES!==i.blurSamples&&(f.defines.VSM_SAMPLES=i.blurSamples,p.defines.VSM_SAMPLES=i.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),null===i.mapPass&&(i.mapPass=new q(a.x,a.y)),f.uniforms.shadow_pass.value=i.map.texture,f.uniforms.resolution.value=i.mapSize,f.uniforms.radius.value=i.radius,e.setRenderTarget(i.mapPass),e.clear(),e.renderBufferDirect(n,null,o,f,g,null),p.uniforms.shadow_pass.value=i.mapPass.texture,p.uniforms.resolution.value=i.mapSize,p.uniforms.radius.value=i.radius,e.setRenderTarget(i.map),e.clear(),e.renderBufferDirect(n,null,o,p,g,null)}(m,c),m.needsUpdate=!1}v.needsUpdate=!1,e.setRenderTarget(u,d,m)}}function r6(e,t,i){let n=i.isWebGL2,a=new function(){let t=!1,i=new j,n=null,a=new j(0,0,0,0);return{setMask:function(i){n===i||t||(e.colorMask(i,i,i,i),n=i)},setLocked:function(e){t=e},setClear:function(t,n,o,s,l){!0===l&&(t*=s,n*=s,o*=s),i.set(t,n,o,s),!1===a.equals(i)&&(e.clearColor(t,n,o,s),a.copy(i))},reset:function(){t=!1,n=null,a.set(-1,0,0,0)}}},o=new function(){let t=!1,i=null,n=null,a=null;return{setTest:function(e){e?B(2929):H(2929)},setMask:function(n){i===n||t||(e.depthMask(n),i=n)},setFunc:function(t){if(n!==t){switch(t){case 0:e.depthFunc(512);break;case 1:e.depthFunc(519);break;case 2:e.depthFunc(513);break;case 3:default:e.depthFunc(515);break;case 4:e.depthFunc(514);break;case 5:e.depthFunc(518);break;case 6:e.depthFunc(516);break;case 7:e.depthFunc(517)}n=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,i=null,n=null,a=null}}},s=new function(){let t=!1,i=null,n=null,a=null,o=null,s=null,l=null,c=null,u=null;return{setTest:function(e){t||(e?B(2960):H(2960))},setMask:function(n){i===n||t||(e.stencilMask(n),i=n)},setFunc:function(t,i,s){(n!==t||a!==i||o!==s)&&(e.stencilFunc(t,i,s),n=t,a=i,o=s)},setOp:function(t,i,n){(s!==t||l!==i||c!==n)&&(e.stencilOp(t,i,n),s=t,l=i,c=n)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,i=null,n=null,a=null,o=null,s=null,l=null,c=null,u=null}}},l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,m=!1,g=null,v=null,y=null,x=null,_=null,M=null,b=null,S=!1,w=null,T=null,E=null,A=null,C=null,P=e.getParameter(35661),L=!1,R=e.getParameter(7938);-1!==R.indexOf("WebGL")?L=parseFloat(/^WebGL (\d)/.exec(R)[1])>=1:-1!==R.indexOf("OpenGL ES")&&(L=parseFloat(/^OpenGL ES (\d)/.exec(R)[1])>=2);let D=null,I={},U=e.getParameter(3088),O=e.getParameter(2978),N=new j().fromArray(U),k=new j().fromArray(O);function z(t,i,n){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,10241,9728),e.texParameteri(t,10240,9728);for(let t=0;t<n;t++)e.texImage2D(i+t,0,6408,1,1,0,6408,5121,a);return o}let F={};function B(t){!0!==u[t]&&(e.enable(t),u[t]=!0)}function H(t){!1!==u[t]&&(e.disable(t),u[t]=!1)}F[3553]=z(3553,3553,1),F[34067]=z(34067,34069,6),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),B(2929),o.setFunc(3),q(!1),Y(1),B(2884),W(0);let G={100:32774,101:32778,102:32779};if(n)G[103]=32775,G[104]=32776;else{let e=t.get("EXT_blend_minmax");null!==e&&(G[103]=e.MIN_EXT,G[104]=e.MAX_EXT)}let V={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function W(t,i,n,a,o,s,l,c){if(0===t){!0===m&&(H(3042),m=!1);return}if(!1===m&&(B(3042),m=!0),5!==t){if(t!==g||c!==S){if((100!==v||100!==_)&&(e.blendEquation(32774),v=100,_=100),c)switch(t){case 1:e.blendFuncSeparate(1,771,1,771);break;case 2:e.blendFunc(1,1);break;case 3:e.blendFuncSeparate(0,769,0,1);break;case 4:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}else switch(t){case 1:e.blendFuncSeparate(770,771,1,771);break;case 2:e.blendFunc(770,1);break;case 3:e.blendFuncSeparate(0,769,0,1);break;case 4:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}y=null,x=null,M=null,b=null,g=t,S=c}return}o=o||i,s=s||n,l=l||a,(i!==v||o!==_)&&(e.blendEquationSeparate(G[i],G[o]),v=i,_=o),(n!==y||a!==x||s!==M||l!==b)&&(e.blendFuncSeparate(V[n],V[a],V[s],V[l]),y=n,x=a,M=s,b=l),g=t,S=!1}function q(t){w!==t&&(t?e.frontFace(2304):e.frontFace(2305),w=t)}function Y(t){0!==t?(B(2884),t!==T&&(1===t?e.cullFace(1029):2===t?e.cullFace(1028):e.cullFace(1032))):H(2884),T=t}function X(t,i,n){t?(B(32823),(A!==i||C!==n)&&(e.polygonOffset(i,n),A=i,C=n)):H(32823)}return{buffers:{color:a,depth:o,stencil:s},enable:B,disable:H,bindFramebuffer:function(t,i){return h[t]!==i&&(e.bindFramebuffer(t,i),h[t]=i,n&&(36009===t&&(h[36160]=i),36160===t&&(h[36009]=i)),!0)},drawBuffers:function(n,a){let o=f,s=!1;if(n)if(void 0===(o=d.get(a))&&(o=[],d.set(a,o)),n.isWebGLMultipleRenderTargets){let e=n.texture;if(o.length!==e.length||36064!==o[0]){for(let t=0,i=e.length;t<i;t++)o[t]=36064+t;o.length=e.length,s=!0}}else 36064!==o[0]&&(o[0]=36064,s=!0);else 1029!==o[0]&&(o[0]=1029,s=!0);s&&(i.isWebGL2?e.drawBuffers(o):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(o))},useProgram:function(t){return p!==t&&(e.useProgram(t),p=t,!0)},setBlending:W,setMaterial:function(e,t){2===e.side?H(2884):B(2884);let i=1===e.side;t&&(i=!i),q(i),1===e.blending&&!1===e.transparent?W(0):W(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),o.setFunc(e.depthFunc),o.setTest(e.depthTest),o.setMask(e.depthWrite),a.setMask(e.colorWrite);let n=e.stencilWrite;s.setTest(n),n&&(s.setMask(e.stencilWriteMask),s.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),s.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),X(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),!0===e.alphaToCoverage?B(32926):H(32926)},setFlipSided:q,setCullFace:Y,setLineWidth:function(t){t!==E&&(L&&e.lineWidth(t),E=t)},setPolygonOffset:X,setScissorTest:function(e){e?B(3089):H(3089)},activeTexture:function(t){void 0===t&&(t=33984+P-1),D!==t&&(e.activeTexture(t),D=t)},bindTexture:function(t,i,n){void 0===n&&(n=null===D?33984+P-1:D);let a=I[n];void 0===a&&(a={type:void 0,texture:void 0},I[n]=a),(a.type!==t||a.texture!==i)&&(D!==n&&(e.activeTexture(n),D=n),e.bindTexture(t,i||F[t]),a.type=t,a.texture=i)},unbindTexture:function(){let t=I[D];void 0!==t&&void 0!==t.type&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexImage3D:function(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage2D:function(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage3D:function(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},updateUBOMapping:function(t,i){let n=c.get(i);void 0===n&&(n=new WeakMap,c.set(i,n));let a=n.get(t);void 0===a&&(a=e.getUniformBlockIndex(i,t.name),n.set(t,a))},uniformBlockBinding:function(t,i){let n=c.get(i).get(t);l.get(i)!==n&&(e.uniformBlockBinding(i,n,t.__bindingPointIndex),l.set(i,n))},texStorage2D:function(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texStorage3D:function(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage2D:function(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage3D:function(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},scissor:function(t){!1===N.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),N.copy(t))},viewport:function(t){!1===k.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),k.copy(t))},reset:function(){e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(0xffffffff),e.stencilFunc(519,0,0xffffffff),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),!0===n&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},D=null,I={},h={},d=new WeakMap,f=[],p=null,m=!1,g=null,v=null,y=null,x=null,_=null,M=null,b=null,S=!1,w=null,T=null,E=null,A=null,C=null,N.set(0,0,e.canvas.width,e.canvas.height),k.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}}}function r8(e,t,i,n,a,o,s){let l,c=a.isWebGL2,u=a.maxTextures,h=a.maxCubemapSize,d=a.maxTextureSize,f=a.maxSamples,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,v=new WeakMap,y=!1;try{y="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(e){}function x(e,t){return y?new OffscreenCanvas(e,t):D("canvas")}function _(e,t,i,n){let a=1;if((e.width>n||e.height>n)&&(a=n/Math.max(e.width,e.height)),a<1||!0===t)if(!("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap))return"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+")."),e;else{let n=t?T:Math.floor,o=n(a*e.width),s=n(a*e.height);void 0===l&&(l=x(o,s));let c=i?x(o,s):l;return c.width=o,c.height=s,c.getContext("2d").drawImage(e,0,0,o,s),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+o+"x"+s+")."),c}return e}function M(e){return w(e.width)&&w(e.height)}function b(e,t){return e.generateMipmaps&&t&&1003!==e.minFilter&&1006!==e.minFilter}function S(t){e.generateMipmap(t)}function E(i,n,a,o,s=!1){if(!1===c)return n;if(null!==i){if(void 0!==e[i])return e[i];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+i+"'")}let l=n;return 6403===n&&(5126===a&&(l=33326),5131===a&&(l=33325),5121===a&&(l=33321)),33319===n&&(5126===a&&(l=33328),5131===a&&(l=33327),5121===a&&(l=33323)),6408===n&&(5126===a&&(l=34836),5131===a&&(l=34842),5121===a&&(l=3001===o&&!1===s?35907:32856),32819===a&&(l=32854),32820===a&&(l=32855)),(33325===l||33326===l||33327===l||33328===l||34842===l||34836===l)&&t.get("EXT_color_buffer_float"),l}function A(e,t,i){return!0===b(e,i)||e.isFramebufferTexture&&1003!==e.minFilter&&1006!==e.minFilter?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){return 1003===e||1004===e||1005===e?9728:9729}function P(e){let t=e.target;t.removeEventListener("dispose",P),function(e){let t=n.get(e);if(void 0===t.__webglInit)return;let i=e.source,a=v.get(i);if(a){let n=a[t.__cacheKey];n.usedTimes--,0===n.usedTimes&&R(e),0===Object.keys(a).length&&v.delete(i)}n.remove(e)}(t),t.isVideoTexture&&g.delete(t)}function L(t){let i=t.target;i.removeEventListener("dispose",L),function(t){let i=t.texture,a=n.get(t),o=n.get(i);if(void 0!==o.__webglTexture&&(e.deleteTexture(o.__webglTexture),s.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++)e.deleteFramebuffer(a.__webglFramebuffer[t]),a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[t]);else{if(e.deleteFramebuffer(a.__webglFramebuffer),a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let t=0;t<a.__webglColorRenderbuffer.length;t++)a.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[t]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,a=i.length;t<a;t++){let a=n.get(i[t]);a.__webglTexture&&(e.deleteTexture(a.__webglTexture),s.memory.textures--),n.remove(i[t])}n.remove(i),n.remove(t)}(i)}function R(t){let i=n.get(t);e.deleteTexture(i.__webglTexture);let a=t.source,o=v.get(a);delete o[i.__cacheKey],s.memory.textures--}let I=0;function U(e,t){let a=n.get(e);if(e.isVideoTexture&&function(e){let t=s.render.frame;g.get(e)!==t&&(g.set(e,t),e.update())}(e),!1===e.isRenderTargetTexture&&e.version>0&&a.__version!==e.version){let i=e.image;if(null===i)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==i.complete)return void F(a,e,t);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}i.bindTexture(3553,a.__webglTexture,33984+t)}let O={1e3:10497,1001:33071,1002:33648},N={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function k(i,o,s){if(s?(e.texParameteri(i,10242,O[o.wrapS]),e.texParameteri(i,10243,O[o.wrapT]),(32879===i||35866===i)&&e.texParameteri(i,32882,O[o.wrapR]),e.texParameteri(i,10240,N[o.magFilter]),e.texParameteri(i,10241,N[o.minFilter])):(e.texParameteri(i,10242,33071),e.texParameteri(i,10243,33071),(32879===i||35866===i)&&e.texParameteri(i,32882,33071),(1001!==o.wrapS||1001!==o.wrapT)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(i,10240,C(o.magFilter)),e.texParameteri(i,10241,C(o.minFilter)),1003!==o.minFilter&&1006!==o.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===t.has("EXT_texture_filter_anisotropic")){let s=t.get("EXT_texture_filter_anisotropic");1003!==o.magFilter&&(1005===o.minFilter||1008===o.minFilter)&&(1015!==o.type||!1!==t.has("OES_texture_float_linear"))&&(!1!==c||1016!==o.type||!1!==t.has("OES_texture_half_float_linear"))&&(o.anisotropy>1||n.get(o).__currentAnisotropy)&&(e.texParameterf(i,s.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(o.anisotropy,a.getMaxAnisotropy())),n.get(o).__currentAnisotropy=o.anisotropy)}}function z(t,i){let n=!1;void 0===t.__webglInit&&(t.__webglInit=!0,i.addEventListener("dispose",P));let a=i.source,o=v.get(a);void 0===o&&(o={},v.set(a,o));let l=function(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.encoding),t.join()}(i);if(l!==t.__cacheKey){void 0===o[l]&&(o[l]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,n=!0),o[l].usedTimes++;let a=o[t.__cacheKey];void 0!==a&&(o[t.__cacheKey].usedTimes--,0===a.usedTimes&&R(i)),t.__cacheKey=l,t.__webglTexture=o[l].texture}return n}function F(t,a,s){let l=3553;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(l=35866),a.isData3DTexture&&(l=32879);let u=z(t,a),h=a.source;i.bindTexture(l,t.__webglTexture,33984+s);let f=n.get(h);if(h.version!==f.__version||!0===u){let t;i.activeTexture(33984+s),e.pixelStorei(37440,a.flipY),e.pixelStorei(37441,a.premultiplyAlpha),e.pixelStorei(3317,a.unpackAlignment),e.pixelStorei(37443,0);let n=!c&&(1001!==a.wrapS||1001!==a.wrapT||1003!==a.minFilter&&1006!==a.minFilter)&&!1===M(a.image),p=_(a.image,n,!1,d),m=M(p=q(a,p))||c,g=o.convert(a.format,a.encoding),v=o.convert(a.type),y=E(a.internalFormat,g,v,a.encoding,a.isVideoTexture);k(l,a,m);let x=a.mipmaps,w=c&&!0!==a.isVideoTexture,T=void 0===f.__version||!0===u,C=A(a,p,m);if(a.isDepthTexture)y=6402,c?y=1015===a.type?36012:1014===a.type?33190:1020===a.type?35056:33189:1015===a.type&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),1026===a.format&&6402===y&&1012!==a.type&&1014!==a.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),a.type=1014,v=o.convert(a.type)),1027===a.format&&6402===y&&(y=34041,1020!==a.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),a.type=1020,v=o.convert(a.type))),T&&(w?i.texStorage2D(3553,1,y,p.width,p.height):i.texImage2D(3553,0,y,p.width,p.height,0,g,v,null));else if(a.isDataTexture)if(x.length>0&&m){w&&T&&i.texStorage2D(3553,C,y,x[0].width,x[0].height);for(let e=0,n=x.length;e<n;e++)t=x[e],w?i.texSubImage2D(3553,e,0,0,t.width,t.height,g,v,t.data):i.texImage2D(3553,e,y,t.width,t.height,0,g,v,t.data);a.generateMipmaps=!1}else w?(T&&i.texStorage2D(3553,C,y,p.width,p.height),i.texSubImage2D(3553,0,0,0,p.width,p.height,g,v,p.data)):i.texImage2D(3553,0,y,p.width,p.height,0,g,v,p.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){w&&T&&i.texStorage3D(35866,C,y,x[0].width,x[0].height,p.depth);for(let e=0,n=x.length;e<n;e++)t=x[e],1023!==a.format?null!==g?w?i.compressedTexSubImage3D(35866,e,0,0,0,t.width,t.height,p.depth,g,t.data,0,0):i.compressedTexImage3D(35866,e,y,t.width,t.height,p.depth,0,t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?i.texSubImage3D(35866,e,0,0,0,t.width,t.height,p.depth,g,v,t.data):i.texImage3D(35866,e,y,t.width,t.height,p.depth,0,g,v,t.data)}else{w&&T&&i.texStorage2D(3553,C,y,x[0].width,x[0].height);for(let e=0,n=x.length;e<n;e++)t=x[e],1023!==a.format?null!==g?w?i.compressedTexSubImage2D(3553,e,0,0,t.width,t.height,g,t.data):i.compressedTexImage2D(3553,e,y,t.width,t.height,0,t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?i.texSubImage2D(3553,e,0,0,t.width,t.height,g,v,t.data):i.texImage2D(3553,e,y,t.width,t.height,0,g,v,t.data)}else if(a.isDataArrayTexture)w?(T&&i.texStorage3D(35866,C,y,p.width,p.height,p.depth),i.texSubImage3D(35866,0,0,0,0,p.width,p.height,p.depth,g,v,p.data)):i.texImage3D(35866,0,y,p.width,p.height,p.depth,0,g,v,p.data);else if(a.isData3DTexture)w?(T&&i.texStorage3D(32879,C,y,p.width,p.height,p.depth),i.texSubImage3D(32879,0,0,0,0,p.width,p.height,p.depth,g,v,p.data)):i.texImage3D(32879,0,y,p.width,p.height,p.depth,0,g,v,p.data);else if(a.isFramebufferTexture){if(T)if(w)i.texStorage2D(3553,C,y,p.width,p.height);else{let e=p.width,t=p.height;for(let n=0;n<C;n++)i.texImage2D(3553,n,y,e,t,0,g,v,null),e>>=1,t>>=1}}else if(x.length>0&&m){w&&T&&i.texStorage2D(3553,C,y,x[0].width,x[0].height);for(let e=0,n=x.length;e<n;e++)t=x[e],w?i.texSubImage2D(3553,e,0,0,g,v,t):i.texImage2D(3553,e,y,g,v,t);a.generateMipmaps=!1}else w?(T&&i.texStorage2D(3553,C,y,p.width,p.height),i.texSubImage2D(3553,0,0,0,g,v,p)):i.texImage2D(3553,0,y,g,v,p);b(a,m)&&S(l),f.__version=h.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function H(t,a,s,l,c){let u=o.convert(s.format,s.encoding),h=o.convert(s.type),d=E(s.internalFormat,u,h,s.encoding);n.get(a).__hasExternalTextures||(32879===c||35866===c?i.texImage3D(c,0,d,a.width,a.height,a.depth,0,u,h,null):i.texImage2D(c,0,d,a.width,a.height,0,u,h,null)),i.bindFramebuffer(36160,t),j(a)?p.framebufferTexture2DMultisampleEXT(36160,l,c,n.get(s).__webglTexture,0,W(a)):(3553===c||c>=34069&&c<=34074)&&e.framebufferTexture2D(36160,l,c,n.get(s).__webglTexture,0),i.bindFramebuffer(36160,null)}function G(t,i,n){if(e.bindRenderbuffer(36161,t),i.depthBuffer&&!i.stencilBuffer){let a=33189;if(n||j(i)){let t=i.depthTexture;t&&t.isDepthTexture&&(1015===t.type?a=36012:1014===t.type&&(a=33190));let n=W(i);j(i)?p.renderbufferStorageMultisampleEXT(36161,n,a,i.width,i.height):e.renderbufferStorageMultisample(36161,n,a,i.width,i.height)}else e.renderbufferStorage(36161,a,i.width,i.height);e.framebufferRenderbuffer(36160,36096,36161,t)}else if(i.depthBuffer&&i.stencilBuffer){let a=W(i);n&&!1===j(i)?e.renderbufferStorageMultisample(36161,a,35056,i.width,i.height):j(i)?p.renderbufferStorageMultisampleEXT(36161,a,35056,i.width,i.height):e.renderbufferStorage(36161,34041,i.width,i.height),e.framebufferRenderbuffer(36160,33306,36161,t)}else{let t=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture];for(let a=0;a<t.length;a++){let s=t[a],l=o.convert(s.format,s.encoding),c=o.convert(s.type),u=E(s.internalFormat,l,c,s.encoding),h=W(i);n&&!1===j(i)?e.renderbufferStorageMultisample(36161,h,u,i.width,i.height):j(i)?p.renderbufferStorageMultisampleEXT(36161,h,u,i.width,i.height):e.renderbufferStorage(36161,u,i.width,i.height)}}e.bindRenderbuffer(36161,null)}function V(t){let a=n.get(t),o=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!a.__autoAllocateDepthBuffer){if(o)throw Error("target.depthTexture not supported in Cube render targets");var s=a.__webglFramebuffer;if(t&&t.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(36160,s),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(t.depthTexture).__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),U(t.depthTexture,0);let l=n.get(t.depthTexture).__webglTexture,c=W(t);if(1026===t.depthTexture.format)j(t)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,l,0,c):e.framebufferTexture2D(36160,36096,3553,l,0);else if(1027===t.depthTexture.format)j(t)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,l,0,c):e.framebufferTexture2D(36160,33306,3553,l,0);else throw Error("Unknown depthTexture format")}else if(o){a.__webglDepthbuffer=[];for(let n=0;n<6;n++)i.bindFramebuffer(36160,a.__webglFramebuffer[n]),a.__webglDepthbuffer[n]=e.createRenderbuffer(),G(a.__webglDepthbuffer[n],t,!1)}else i.bindFramebuffer(36160,a.__webglFramebuffer),a.__webglDepthbuffer=e.createRenderbuffer(),G(a.__webglDepthbuffer,t,!1);i.bindFramebuffer(36160,null)}function W(e){return Math.min(f,e.samples)}function j(e){let i=n.get(e);return c&&e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==i.__useRenderToTexture}function q(e,i){let n=e.encoding,a=e.format,o=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||1035===e.format||3e3!==n&&(3001===n?!1===c?!0===t.has("EXT_sRGB")&&1023===a?(e.format=1035,e.minFilter=1006,e.generateMipmaps=!1):i=B.sRGBToLinear(i):(1023!==a||1009!==o)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",n)),i}this.allocateTextureUnit=function(){let e=I;return e>=u&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+u),I+=1,e},this.resetTextureUnits=function(){I=0},this.setTexture2D=U,this.setTexture2DArray=function(e,t){let a=n.get(e);if(e.version>0&&a.__version!==e.version)return void F(a,e,t);i.bindTexture(35866,a.__webglTexture,33984+t)},this.setTexture3D=function(e,t){let a=n.get(e);if(e.version>0&&a.__version!==e.version)return void F(a,e,t);i.bindTexture(32879,a.__webglTexture,33984+t)},this.setTextureCube=function(t,a){let s=n.get(t);if(t.version>0&&s.__version!==t.version)return void function(t,a,s){if(6!==a.image.length)return;let l=z(t,a),u=a.source;i.bindTexture(34067,t.__webglTexture,33984+s);let d=n.get(u);if(u.version!==d.__version||!0===l){let t;i.activeTexture(33984+s),e.pixelStorei(37440,a.flipY),e.pixelStorei(37441,a.premultiplyAlpha),e.pixelStorei(3317,a.unpackAlignment),e.pixelStorei(37443,0);let n=a.isCompressedTexture||a.image[0].isCompressedTexture,f=a.image[0]&&a.image[0].isDataTexture,p=[];for(let e=0;e<6;e++)n||f?p[e]=f?a.image[e].image:a.image[e]:p[e]=_(a.image[e],!1,!0,h),p[e]=q(a,p[e]);let m=p[0],g=M(m)||c,v=o.convert(a.format,a.encoding),y=o.convert(a.type),x=E(a.internalFormat,v,y,a.encoding),w=c&&!0!==a.isVideoTexture,T=void 0===d.__version||!0===l,C=A(a,m,g);if(k(34067,a,g),n){w&&T&&i.texStorage2D(34067,C,x,m.width,m.height);for(let e=0;e<6;e++){t=p[e].mipmaps;for(let n=0;n<t.length;n++){let o=t[n];1023!==a.format?null!==v?w?i.compressedTexSubImage2D(34069+e,n,0,0,o.width,o.height,v,o.data):i.compressedTexImage2D(34069+e,n,x,o.width,o.height,0,o.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?i.texSubImage2D(34069+e,n,0,0,o.width,o.height,v,y,o.data):i.texImage2D(34069+e,n,x,o.width,o.height,0,v,y,o.data)}}}else{t=a.mipmaps,w&&T&&(t.length>0&&C++,i.texStorage2D(34067,C,x,p[0].width,p[0].height));for(let e=0;e<6;e++)if(f){w?i.texSubImage2D(34069+e,0,0,0,p[e].width,p[e].height,v,y,p[e].data):i.texImage2D(34069+e,0,x,p[e].width,p[e].height,0,v,y,p[e].data);for(let n=0;n<t.length;n++){let a=t[n].image[e].image;w?i.texSubImage2D(34069+e,n+1,0,0,a.width,a.height,v,y,a.data):i.texImage2D(34069+e,n+1,x,a.width,a.height,0,v,y,a.data)}}else{w?i.texSubImage2D(34069+e,0,0,0,v,y,p[e]):i.texImage2D(34069+e,0,x,v,y,p[e]);for(let n=0;n<t.length;n++){let a=t[n];w?i.texSubImage2D(34069+e,n+1,0,0,v,y,a.image[e]):i.texImage2D(34069+e,n+1,x,v,y,a.image[e])}}}b(a,g)&&S(34067),d.__version=u.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}(s,t,a);i.bindTexture(34067,s.__webglTexture,33984+a)},this.rebindTextures=function(e,t,i){let a=n.get(e);void 0!==t&&H(a.__webglFramebuffer,e,e.texture,36064,3553),void 0!==i&&V(e)},this.setupRenderTarget=function(t){let l=t.texture,u=n.get(t),h=n.get(l);t.addEventListener("dispose",L),!0!==t.isWebGLMultipleRenderTargets&&(void 0===h.__webglTexture&&(h.__webglTexture=e.createTexture()),h.__version=l.version,s.memory.textures++);let d=!0===t.isWebGLCubeRenderTarget,f=!0===t.isWebGLMultipleRenderTargets,p=M(t)||c;if(d){u.__webglFramebuffer=[];for(let t=0;t<6;t++)u.__webglFramebuffer[t]=e.createFramebuffer()}else{if(u.__webglFramebuffer=e.createFramebuffer(),f)if(a.drawBuffers){let i=t.texture;for(let t=0,a=i.length;t<a;t++){let a=n.get(i[t]);void 0===a.__webglTexture&&(a.__webglTexture=e.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&t.samples>0&&!1===j(t)){let n=f?l:[l];u.__webglMultisampledFramebuffer=e.createFramebuffer(),u.__webglColorRenderbuffer=[],i.bindFramebuffer(36160,u.__webglMultisampledFramebuffer);for(let i=0;i<n.length;i++){let a=n[i];u.__webglColorRenderbuffer[i]=e.createRenderbuffer(),e.bindRenderbuffer(36161,u.__webglColorRenderbuffer[i]);let s=o.convert(a.format,a.encoding),l=o.convert(a.type),c=E(a.internalFormat,s,l,a.encoding,!0===t.isXRRenderTarget),h=W(t);e.renderbufferStorageMultisample(36161,h,c,t.width,t.height),e.framebufferRenderbuffer(36160,36064+i,36161,u.__webglColorRenderbuffer[i])}e.bindRenderbuffer(36161,null),t.depthBuffer&&(u.__webglDepthRenderbuffer=e.createRenderbuffer(),G(u.__webglDepthRenderbuffer,t,!0)),i.bindFramebuffer(36160,null)}}if(d){i.bindTexture(34067,h.__webglTexture),k(34067,l,p);for(let e=0;e<6;e++)H(u.__webglFramebuffer[e],t,l,36064,34069+e);b(l,p)&&S(34067),i.unbindTexture()}else if(f){let e=t.texture;for(let a=0,o=e.length;a<o;a++){let o=e[a],s=n.get(o);i.bindTexture(3553,s.__webglTexture),k(3553,o,p),H(u.__webglFramebuffer,t,o,36064+a,3553),b(o,p)&&S(3553)}i.unbindTexture()}else{let e=3553;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c?e=t.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(e,h.__webglTexture),k(e,l,p),H(u.__webglFramebuffer,t,l,36064,e),b(l,p)&&S(e),i.unbindTexture()}t.depthBuffer&&V(t)},this.updateRenderTargetMipmap=function(e){let t=M(e)||c,a=!0===e.isWebGLMultipleRenderTargets?e.texture:[e.texture];for(let o=0,s=a.length;o<s;o++){let s=a[o];if(b(s,t)){let t=e.isWebGLCubeRenderTarget?34067:3553,a=n.get(s).__webglTexture;i.bindTexture(t,a),S(t),i.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(c&&t.samples>0&&!1===j(t)){let a=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],o=t.width,s=t.height,l=16384,c=[],u=t.stencilBuffer?33306:36096,h=n.get(t),d=!0===t.isWebGLMultipleRenderTargets;if(d)for(let t=0;t<a.length;t++)i.bindFramebuffer(36160,h.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+t,36161,null),i.bindFramebuffer(36160,h.__webglFramebuffer),e.framebufferTexture2D(36009,36064+t,3553,null,0);i.bindFramebuffer(36008,h.__webglMultisampledFramebuffer),i.bindFramebuffer(36009,h.__webglFramebuffer);for(let i=0;i<a.length;i++){c.push(36064+i),t.depthBuffer&&c.push(u);let f=void 0!==h.__ignoreDepthValues&&h.__ignoreDepthValues;if(!1===f&&(t.depthBuffer&&(l|=256),t.stencilBuffer&&(l|=1024)),d&&e.framebufferRenderbuffer(36008,36064,36161,h.__webglColorRenderbuffer[i]),!0===f&&(e.invalidateFramebuffer(36008,[u]),e.invalidateFramebuffer(36009,[u])),d){let t=n.get(a[i]).__webglTexture;e.framebufferTexture2D(36009,36064,3553,t,0)}e.blitFramebuffer(0,0,o,s,0,0,o,s,l,9728),m&&e.invalidateFramebuffer(36008,c)}if(i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),d)for(let t=0;t<a.length;t++){i.bindFramebuffer(36160,h.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+t,36161,h.__webglColorRenderbuffer[t]);let o=n.get(a[t]).__webglTexture;i.bindFramebuffer(36160,h.__webglFramebuffer),e.framebufferTexture2D(36009,36064+t,3553,o,0)}i.bindFramebuffer(36009,h.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=H,this.useMultisampledRTT=j}function r7(e,t,i){let n=i.isWebGL2;return{convert:function(i,a=null){let o;if(1009===i)return 5121;if(1017===i)return 32819;if(1018===i)return 32820;if(1010===i)return 5120;if(1011===i)return 5122;if(1012===i)return 5123;if(1013===i)return 5124;if(1014===i)return 5125;if(1015===i)return 5126;if(1016===i)return n?5131:null!==(o=t.get("OES_texture_half_float"))?o.HALF_FLOAT_OES:null;if(1021===i)return 6406;if(1023===i)return 6408;if(1024===i)return 6409;if(1025===i)return 6410;if(1026===i)return 6402;if(1027===i)return 34041;if(1035===i)return null!==(o=t.get("EXT_sRGB"))?o.SRGB_ALPHA_EXT:null;if(1028===i)return 6403;if(1029===i)return 36244;if(1030===i)return 33319;if(1031===i)return 33320;if(1033===i)return 36249;if(33776===i||33777===i||33778===i||33779===i)if(3001===a)if(null===(o=t.get("WEBGL_compressed_texture_s3tc_srgb")))return null;else{if(33776===i)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(33777===i)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(33778===i)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(33779===i)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(null===(o=t.get("WEBGL_compressed_texture_s3tc")))return null;if(33776===i)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===i)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===i)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===i)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(35840===i||35841===i||35842===i||35843===i)if(null===(o=t.get("WEBGL_compressed_texture_pvrtc")))return null;else{if(35840===i)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===i)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===i)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===i)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===i)return null!==(o=t.get("WEBGL_compressed_texture_etc1"))?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(37492===i||37496===i)if(null===(o=t.get("WEBGL_compressed_texture_etc")))return null;else{if(37492===i)return 3001===a?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(37496===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}if(37808===i||37809===i||37810===i||37811===i||37812===i||37813===i||37814===i||37815===i||37816===i||37817===i||37818===i||37819===i||37820===i||37821===i)if(null===(o=t.get("WEBGL_compressed_texture_astc")))return null;else{if(37808===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(37809===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(37810===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(37811===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(37812===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(37813===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(37814===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(37815===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(37816===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(37817===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(37818===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(37819===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(37820===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(37821===i)return 3001===a?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}if(36492===i){if(null===(o=t.get("EXT_texture_compression_bptc")))return null;else if(36492===i)return 3001===a?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}if(36283===i||36284===i||36285===i||36286===i)if(null===(o=t.get("EXT_texture_compression_rgtc")))return null;else{if(36492===i)return o.COMPRESSED_RED_RGTC1_EXT;if(36284===i)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(36285===i)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(36286===i)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return 1020===i?n?34042:null!==(o=t.get("WEBGL_depth_texture"))?o.UNSIGNED_INT_24_8_WEBGL:null:void 0!==e[i]?e[i]:null}}}class r9 extends tX{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ne extends eJ{constructor(){super(),this.isGroup=!0,this.type="Group"}}let nt={type:"move"};class ni{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,o=null,s=this._targetRay,l=this._grip,c=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState){if(c&&e.hand){for(let n of(o=!0,e.hand.values())){let e=t.getJointPose(n,i),a=this._getHandJoint(c,n);null!==e&&(a.matrix.fromArray(e.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.jointRadius=e.radius),a.visible=null!==e}let n=c.joints["index-finger-tip"],a=c.joints["thumb-tip"],s=n.position.distanceTo(a.position);c.inputState.pinching&&s>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&s<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==l&&e.gripSpace&&null!==(a=t.getPose(e.gripSpace,i))&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1);null!==s&&(null===(n=t.getPose(e.targetRaySpace,i))&&null!==a&&(n=a),null!==n&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(nt)))}return null!==s&&(s.visible=null!==n),null!==l&&(l.visible=null!==a),null!==c&&(c.visible=null!==o),this}_getHandJoint(e,t){if(void 0===e.joints[t.jointName]){let i=new ne;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class nr extends W{constructor(e,t,i,n,a,o,s,l,c,u){if(1026!==(u=void 0!==u?u:1026)&&1027!==u)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===i&&1026===u&&(i=1014),void 0===i&&1027===u&&(i=1020),super(null,n,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=void 0!==s?s:1003,this.minFilter=void 0!==l?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class nn extends y{constructor(e,t){super();let i=this,n=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,m=t.getContextAttributes(),g=null,v=null,y=[],x=[],_=new Set,b=new Map,S=new tX;S.layers.enable(1),S.viewport=new j;let w=new tX;w.layers.enable(2),w.viewport=new j;let T=[S,w],E=new r9;E.layers.enable(1),E.layers.enable(2);let A=null,C=null;function P(e){let t=x.indexOf(e.inputSource);if(-1===t)return;let i=y[t];void 0!==i&&i.dispatchEvent({type:e.type,data:e.inputSource})}function L(){n.removeEventListener("select",P),n.removeEventListener("selectstart",P),n.removeEventListener("selectend",P),n.removeEventListener("squeeze",P),n.removeEventListener("squeezestart",P),n.removeEventListener("squeezeend",P),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",R);for(let e=0;e<y.length;e++){let t=x[e];null!==t&&(x[e]=null,y[e].disconnect(t))}A=null,C=null,e.setRenderTarget(g),f=null,d=null,h=null,n=null,v=null,N.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function R(e){for(let t=0;t<e.removed.length;t++){let i=e.removed[t],n=x.indexOf(i);n>=0&&(x[n]=null,y[n].disconnect(i))}for(let t=0;t<e.added.length;t++){let i=e.added[t],n=x.indexOf(i);if(-1===n){for(let e=0;e<y.length;e++)if(e>=x.length){x.push(i),n=e;break}else if(null===x[e]){x[e]=i,n=e;break}if(-1===n)break}let a=y[n];a&&a.connect(i)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=y[e];return void 0===t&&(t=new ni,y[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=y[e];return void 0===t&&(t=new ni,y[e]=t),t.getGripSpace()},this.getHand=function(e){let t=y[e];return void 0===t&&(t=new ni,y[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){a=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){s=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return null!==d?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=function(u){let p,y;return p=this,y=function*(){if(null!==(n=u)){if(g=e.getRenderTarget(),n.addEventListener("select",P),n.addEventListener("selectstart",P),n.addEventListener("selectend",P),n.addEventListener("squeeze",P),n.addEventListener("squeezestart",P),n.addEventListener("squeezeend",P),n.addEventListener("end",L),n.addEventListener("inputsourceschange",R),!0!==m.xrCompatible&&(yield t.makeXRCompatible()),void 0===n.renderState.layers||!1===e.capabilities.isWebGL2){let i={antialias:void 0!==n.renderState.layers||m.antialias,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(n,t,i),n.updateRenderState({baseLayer:f}),v=new q(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let i=null,o=null,s=null;m.depth&&(s=m.stencil?35056:33190,i=m.stencil?1027:1026,o=m.stencil?1020:1014);let l={colorFormat:32856,depthFormat:s,scaleFactor:a};d=(h=new XRWebGLBinding(n,t)).createProjectionLayer(l),n.updateRenderState({layers:[d]}),v=new q(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new nr(d.textureWidth,d.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,i),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:4*!!m.antialias}),e.properties.get(v).__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield n.requestReferenceSpace(s),N.setContext(n),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},new Promise((e,t)=>{var i=e=>{try{a(y.next(e))}catch(e){t(e)}},n=e=>{try{a(y.throw(e))}catch(e){t(e)}},a=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,n);a((y=y.apply(p,null)).next())})};let D=new J,I=new J;function U(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(null===n)return;E.near=w.near=S.near=e.near,E.far=w.far=S.far=e.far,(A!==E.near||C!==E.far)&&(n.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,C=E.far);let t=e.parent,i=E.cameras;U(E,t);for(let e=0;e<i.length;e++)U(i[e],t);2===i.length?function(e,t,i){D.setFromMatrixPosition(t.matrixWorld),I.setFromMatrixPosition(i.matrixWorld);let n=D.distanceTo(I),a=t.projectionMatrix.elements,o=i.projectionMatrix.elements,s=a[14]/(a[10]-1),l=a[14]/(a[10]+1),c=(a[9]+1)/a[5],u=(a[9]-1)/a[5],h=(a[8]-1)/a[0],d=(o[8]+1)/o[0],f=n/(-h+d),p=-(f*h);t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(p),e.translateZ(f),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let m=s+f,g=l+f;e.projectionMatrix.makePerspective(s*h-p,s*d+(n-p),c*l/g*m,u*l/g*m,m,g),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}(E,S,w):E.projectionMatrix.copy(S.projectionMatrix),function(e,t,i){null===i?e.matrix.copy(t.matrixWorld):(e.matrix.copy(i.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0);let n=e.children;for(let e=0,t=n.length;e<t;e++)n[e].updateMatrixWorld(!0);e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=2*M*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}(e,E,t)},this.getCamera=function(){return E},this.getFoveation=function(){if(null!==d||null!==f)return l},this.setFoveation=function(e){l=e,null!==d&&(d.fixedFoveation=e),null!==f&&void 0!==f.fixedFoveation&&(f.fixedFoveation=e)},this.getPlanes=function(){return _};let O=null,N=new t4;N.setAnimationLoop(function(t,n){if(u=n.getViewerPose(c||o),p=n,null!==u){let t=u.views;null!==f&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let i=!1;t.length!==E.cameras.length&&(E.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let a=t[n],o=null;if(null!==f)o=f.getViewport(a);else{let t=h.getViewSubImage(d,a);o=t.viewport,0===n&&(e.setRenderTargetTextures(v,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(v))}let s=T[n];void 0===s&&((s=new tX).layers.enable(n),s.viewport=new j,T[n]=s),s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(a.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),0===n&&(E.matrix.copy(s.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),!0===i&&E.cameras.push(s)}}for(let e=0;e<y.length;e++){let t=x[e],i=y[e];null!==t&&void 0!==i&&i.update(t,n,c||o)}if(O&&O(t,n),n.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:n.detectedPlanes});let e=null;for(let t of _)n.detectedPlanes.has(t)||(null===e&&(e=[]),e.push(t));if(null!==e)for(let t of e)_.delete(t),b.delete(t),i.dispatchEvent({type:"planeremoved",data:t});for(let e of n.detectedPlanes)if(_.has(e)){let t=b.get(e);e.lastChangedTime>t&&(b.set(e,e.lastChangedTime),i.dispatchEvent({type:"planechanged",data:e}))}else _.add(e),b.set(e,n.lastChangedTime),i.dispatchEvent({type:"planeadded",data:e})}p=null}),this.setAnimationLoop=function(e){O=e},this.dispose=function(){}}}function na(e,t){function i(e,t){!0===e.matrixAutoUpdate&&e.updateMatrix(),t.value.copy(e.matrix)}function n(n,a){n.opacity.value=a.opacity,a.color&&n.diffuse.value.copy(a.color),a.emissive&&n.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(n.map.value=a.map,i(a.map,n.mapTransform)),a.alphaMap&&(n.alphaMap.value=a.alphaMap,i(a.alphaMap,n.alphaMapTransform)),a.bumpMap&&(n.bumpMap.value=a.bumpMap,i(a.bumpMap,n.bumpMapTransform),n.bumpScale.value=a.bumpScale,1===a.side&&(n.bumpScale.value*=-1)),a.normalMap&&(n.normalMap.value=a.normalMap,i(a.normalMap,n.normalMapTransform),n.normalScale.value.copy(a.normalScale),1===a.side&&n.normalScale.value.negate()),a.displacementMap&&(n.displacementMap.value=a.displacementMap,i(a.displacementMap,n.displacementMapTransform),n.displacementScale.value=a.displacementScale,n.displacementBias.value=a.displacementBias),a.emissiveMap&&(n.emissiveMap.value=a.emissiveMap,i(a.emissiveMap,n.emissiveMapTransform)),a.specularMap&&(n.specularMap.value=a.specularMap,i(a.specularMap,n.specularMapTransform)),a.alphaTest>0&&(n.alphaTest.value=a.alphaTest);let o=t.get(a).envMap;if(o&&(n.envMap.value=o,n.flipEnvMap.value=o.isCubeTexture&&!1===o.isRenderTargetTexture?-1:1,n.reflectivity.value=a.reflectivity,n.ior.value=a.ior,n.refractionRatio.value=a.refractionRatio),a.lightMap){n.lightMap.value=a.lightMap;let t=!0===e.useLegacyLights?Math.PI:1;n.lightMapIntensity.value=a.lightMapIntensity*t,i(a.lightMap,n.lightMapTransform)}a.aoMap&&(n.aoMap.value=a.aoMap,n.aoMapIntensity.value=a.aoMapIntensity,i(a.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(t,i){i.color.getRGB(t.fogColor.value,tV(e)),i.isFog?(t.fogNear.value=i.near,t.fogFar.value=i.far):i.isFogExp2&&(t.fogDensity.value=i.density)},refreshMaterialUniforms:function(e,a,o,s,l){var c,u,h,d,f,p,m,g,v,y,x,_,M,b,S,w,T,E,A,C,P;a.isMeshBasicMaterial||a.isMeshLambertMaterial?n(e,a):a.isMeshToonMaterial?(n(e,a),c=e,(u=a).gradientMap&&(c.gradientMap.value=u.gradientMap)):a.isMeshPhongMaterial?(n(e,a),h=e,d=a,h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)):a.isMeshStandardMaterial?(n(e,a),f=e,p=a,f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity),a.isMeshPhysicalMaterial&&(m=e,g=a,v=l,m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),1===g.side&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,m.specularIntensityMapTransform)))):a.isMeshMatcapMaterial?(n(e,a),y=e,(x=a).matcap&&(y.matcap.value=x.matcap)):a.isMeshDepthMaterial?n(e,a):a.isMeshDistanceMaterial?(n(e,a),function(e,i){let n=t.get(i).light;e.referencePosition.value.setFromMatrixPosition(n.matrixWorld),e.nearDistance.value=n.shadow.camera.near,e.farDistance.value=n.shadow.camera.far}(e,a)):a.isMeshNormalMaterial?n(e,a):a.isLineBasicMaterial?(_=e,M=a,_.diffuse.value.copy(M.color),_.opacity.value=M.opacity,M.map&&(_.map.value=M.map,i(M.map,_.mapTransform)),a.isLineDashedMaterial&&(b=e,S=a,b.dashSize.value=S.dashSize,b.totalSize.value=S.dashSize+S.gapSize,b.scale.value=S.scale)):a.isPointsMaterial?(w=e,T=a,E=o,A=s,w.diffuse.value.copy(T.color),w.opacity.value=T.opacity,w.size.value=T.size*E,w.scale.value=.5*A,T.map&&(w.map.value=T.map,i(T.map,w.uvTransform)),T.alphaMap&&(w.alphaMap.value=T.alphaMap),T.alphaTest>0&&(w.alphaTest.value=T.alphaTest)):a.isSpriteMaterial?(C=e,P=a,C.diffuse.value.copy(P.color),C.opacity.value=P.opacity,C.rotation.value=P.rotation,P.map&&(C.map.value=P.map,i(P.map,C.mapTransform)),P.alphaMap&&(C.alphaMap.value=P.alphaMap),P.alphaTest>0&&(C.alphaTest.value=P.alphaTest)):a.isShadowMaterial?(e.color.value.copy(a.color),e.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function no(e,t,i,n){let a={},o={},s=[],l=i.isWebGL2?e.getParameter(35375):0;function c(e){let t={boundary:0,storage:0};return"number"==typeof e?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",e),t}function u(t){let i=t.target;i.removeEventListener("dispose",u);let n=s.indexOf(i.__bindingPointIndex);s.splice(n,1),e.deleteBuffer(a[i.id]),delete a[i.id],delete o[i.id]}return{bind:function(e,t){let i=t.program;n.uniformBlockBinding(e,i)},update:function(i,h){let d=a[i.id];void 0===d&&(function(e){let t=e.uniforms,i=0,n=0;for(let e=0,a=t.length;e<a;e++){let a=t[e],o={boundary:0,storage:0},s=Array.isArray(a.value)?a.value:[a.value];for(let e=0,t=s.length;e<t;e++){let t=c(s[e]);o.boundary+=t.boundary,o.storage+=t.storage}if(a.__data=new Float32Array(o.storage/Float32Array.BYTES_PER_ELEMENT),a.__offset=i,e>0){let e=16-(n=i%16);0!==n&&e-o.boundary<0&&(a.__offset=i+=16-n)}i+=o.storage}(n=i%16)>0&&(i+=16-n),e.__size=i,e.__cache={}}(i),d=function(t){let i=function(){for(let e=0;e<l;e++)if(-1===s.indexOf(e))return s.push(e),e;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();t.__bindingPointIndex=i;let n=e.createBuffer(),a=t.__size,o=t.usage;return e.bindBuffer(35345,n),e.bufferData(35345,a,o),e.bindBuffer(35345,null),e.bindBufferBase(35345,i,n),n}(i),a[i.id]=d,i.addEventListener("dispose",u));let f=h.program;n.updateUBOMapping(i,f);let p=t.render.frame;o[i.id]!==p&&(function(t){let i=a[t.id],n=t.uniforms,o=t.__cache;e.bindBuffer(35345,i);for(let t=0,i=n.length;t<i;t++){let i=n[t];if(!0===function(e,t,i){let n=e.value;if(void 0===i[t]){if("number"==typeof n)i[t]=n;else{let e=Array.isArray(n)?n:[n],a=[];for(let t=0;t<e.length;t++)a.push(e[t].clone());i[t]=a}return!0}if("number"==typeof n){if(i[t]!==n)return i[t]=n,!0}else{let e=Array.isArray(i[t])?i[t]:[i[t]],a=Array.isArray(n)?n:[n];for(let t=0;t<e.length;t++){let i=e[t];if(!1===i.equals(a[t]))return i.copy(a[t]),!0}}return!1}(i,t,o)){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],a=0;for(let o=0;o<n.length;o++){let s=n[o],l=c(s);"number"==typeof s?(i.__data[0]=s,e.bufferSubData(35345,t+a,i.__data)):s.isMatrix3?(i.__data[0]=s.elements[0],i.__data[1]=s.elements[1],i.__data[2]=s.elements[2],i.__data[3]=s.elements[0],i.__data[4]=s.elements[3],i.__data[5]=s.elements[4],i.__data[6]=s.elements[5],i.__data[7]=s.elements[0],i.__data[8]=s.elements[6],i.__data[9]=s.elements[7],i.__data[10]=s.elements[8],i.__data[11]=s.elements[0]):(s.toArray(i.__data,a),a+=l.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(35345,t,i.__data)}}e.bindBuffer(35345,null)}(i),o[i.id]=p)},dispose:function(){for(let t in a)e.deleteBuffer(a[t]);s=[],a={},o={}}}}class ns{constructor(e={}){let t,i,n,a,o,s,l,c,u,h,d,f,p,m,g,v,y,x,_,M,b,S,w,T,E,{canvas:A=function(){let e=D("canvas");return e.style.display="block",e}(),context:C=null,depth:P=!0,stencil:L=!0,alpha:R=!1,antialias:I=!1,premultipliedAlpha:U=!0,preserveDrawingBuffer:O=!1,powerPreference:N="default",failIfMajorPerformanceCaveat:k=!1}=e;this.isWebGLRenderer=!0,t=null!==C?C.getContextAttributes().alpha:R;let z=null,F=null,B=[],H=[];this.domElement=A,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.useLegacyLights=!0,this.toneMapping=0,this.toneMappingExposure=1;let G=this,V=!1,W=0,Y=0,X=null,K=-1,Z=null,Q=new j,$=new j,ee=null,et=A.width,ei=A.height,er=1,en=null,ea=null,eo=new j(0,0,et,ei),es=new j(0,0,et,ei),el=!1,ec=new t5,eu=!1,eh=!1,ed=null,ef=new ew,ep=new J,em={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function eg(){return null===X?er:1}let ev=C;function ey(e,t){for(let i=0;i<e.length;i++){let n=e[i],a=A.getContext(n,t);if(null!==a)return a}return null}try{if("setAttribute"in A&&A.setAttribute("data-engine","three.js r151"),A.addEventListener("webglcontextlost",eM,!1),A.addEventListener("webglcontextrestored",eb,!1),A.addEventListener("webglcontextcreationerror",eS,!1),null===ev){let e=["webgl2","webgl","experimental-webgl"];if(!0===G.isWebGL1Renderer&&e.shift(),ev=ey(e,{alpha:!0,depth:P,stencil:L,antialias:I,premultipliedAlpha:U,preserveDrawingBuffer:O,powerPreference:N,failIfMajorPerformanceCaveat:k}),null===ev)throw ey(e)?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}void 0===ev.getShaderPrecisionFormat&&(ev.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error("THREE.WebGLRenderer: "+e.message),e}function ex(){i=new iT(ev),n=new io(ev,i,e),i.init(n),w=new r7(ev,i,n),a=new r6(ev,i,n),o=new iC,s=new rW,l=new r8(ev,i,a,s,n,w,o),c=new il(G),u=new iw(G),h=new t6(ev,n),T=new ir(ev,i,h,n),d=new iE(ev,h,o,T),f=new iD(ev,d,h,o),M=new iR(ev,n,l),y=new is(s),p=new rV(G,c,u,i,n,T,y),m=new na(G,s),g=new rX,v=new r0(i,n),_=new ii(G,c,u,a,f,t,U),x=new r4(G,f,n),E=new no(ev,o,n,a),b=new ia(ev,i,o,n),S=new iA(ev,i,o,n),o.programs=p.programs,G.capabilities=n,G.extensions=i,G.properties=s,G.renderLists=g,G.shadowMap=x,G.state=a,G.info=o}ex();let e_=new nn(G,ev);function eM(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function eb(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let e=o.autoReset,t=x.enabled,i=x.autoUpdate,n=x.needsUpdate,a=x.type;ex(),o.autoReset=e,x.enabled=t,x.autoUpdate=i,x.needsUpdate=n,x.type=a}function eS(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function eT(e){var t;let i=e.target;i.removeEventListener("dispose",eT),function(e){let t=s.get(e).programs;void 0!==t&&(t.forEach(function(e){p.releaseProgram(e)}),e.isShaderMaterial&&p.releaseShaderCache(e))}(t=i),s.remove(t)}this.xr=e_,this.getContext=function(){return ev},this.getContextAttributes=function(){return ev.getContextAttributes()},this.forceContextLoss=function(){let e=i.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){let e=i.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return er},this.setPixelRatio=function(e){void 0!==e&&(er=e,this.setSize(et,ei,!1))},this.getSize=function(e){return e.set(et,ei)},this.setSize=function(e,t,i=!0){if(e_.isPresenting)return void console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");et=e,ei=t,A.width=Math.floor(e*er),A.height=Math.floor(t*er),!0===i&&(A.style.width=e+"px",A.style.height=t+"px"),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e.set(et*er,ei*er).floor()},this.setDrawingBufferSize=function(e,t,i){et=e,ei=t,er=i,A.width=Math.floor(e*i),A.height=Math.floor(t*i),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return e.copy(Q)},this.getViewport=function(e){return e.copy(eo)},this.setViewport=function(e,t,i,n){e.isVector4?eo.set(e.x,e.y,e.z,e.w):eo.set(e,t,i,n),a.viewport(Q.copy(eo).multiplyScalar(er).floor())},this.getScissor=function(e){return e.copy(es)},this.setScissor=function(e,t,i,n){e.isVector4?es.set(e.x,e.y,e.z,e.w):es.set(e,t,i,n),a.scissor($.copy(es).multiplyScalar(er).floor())},this.getScissorTest=function(){return el},this.setScissorTest=function(e){a.setScissorTest(el=e)},this.setOpaqueSort=function(e){en=e},this.setTransparentSort=function(e){ea=e},this.getClearColor=function(e){return e.copy(_.getClearColor())},this.setClearColor=function(){_.setClearColor.apply(_,arguments)},this.getClearAlpha=function(){return _.getClearAlpha()},this.setClearAlpha=function(){_.setClearAlpha.apply(_,arguments)},this.clear=function(e=!0,t=!0,i=!0){let n=0;e&&(n|=16384),t&&(n|=256),i&&(n|=1024),ev.clear(n)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",eM,!1),A.removeEventListener("webglcontextrestored",eb,!1),A.removeEventListener("webglcontextcreationerror",eS,!1),g.dispose(),v.dispose(),s.dispose(),c.dispose(),u.dispose(),f.dispose(),T.dispose(),E.dispose(),p.dispose(),e_.dispose(),e_.removeEventListener("sessionstart",eA),e_.removeEventListener("sessionend",eC),ed&&(ed.dispose(),ed=null),eP.stop()},this.renderBufferDirect=function(e,t,i,o,f,p){null===t&&(t=em);let g=f.isMesh&&0>f.matrixWorld.determinant(),v=function(e,t,i,o,h){var d,f;!0!==t.isScene&&(t=em),l.resetTextureUnits();let p=t.fog,g=o.isMeshStandardMaterial?t.environment:null,v=null===X?G.outputEncoding:!0===X.isXRRenderTarget?X.texture.encoding:3e3,x=(o.isMeshStandardMaterial?u:c).get(o.envMap||g),_=!0===o.vertexColors&&!!i.attributes.color&&4===i.attributes.color.itemSize,b=!!o.normalMap&&!!i.attributes.tangent,S=!!i.morphAttributes.position,w=!!i.morphAttributes.normal,T=!!i.morphAttributes.color,A=o.toneMapped?G.toneMapping:0,C=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,P=void 0!==C?C.length:0,L=s.get(o),R=F.state.lights;if(!0===eu&&(!0===eh||e!==Z)){let t=e===Z&&o.id===K;y.setState(o,e,t)}let D=!1;o.version===L.__version?(L.needsLights&&L.lightsStateVersion!==R.state.version||L.outputEncoding!==v||h.isInstancedMesh&&!1===L.instancing||!h.isInstancedMesh&&!0===L.instancing||h.isSkinnedMesh&&!1===L.skinning||!h.isSkinnedMesh&&!0===L.skinning||L.envMap!==x||!0===o.fog&&L.fog!==p||void 0!==L.numClippingPlanes&&(L.numClippingPlanes!==y.numPlanes||L.numIntersection!==y.numIntersection)||L.vertexAlphas!==_||L.vertexTangents!==b||L.morphTargets!==S||L.morphNormals!==w||L.morphColors!==T||L.toneMapping!==A||!0===n.isWebGL2&&L.morphTargetsCount!==P)&&(D=!0):(D=!0,L.__version=o.version);let I=L.currentProgram;!0===D&&(I=eI(o,t,h));let U=!1,O=!1,N=!1,k=I.getUniforms(),z=L.uniforms;if(a.useProgram(I.program)&&(U=!0,O=!0,N=!0),o.id!==K&&(K=o.id,O=!0),U||Z!==e){if(k.setValue(ev,"projectionMatrix",e.projectionMatrix),n.logarithmicDepthBuffer&&k.setValue(ev,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),Z!==e&&(Z=e,O=!0,N=!0),o.isShaderMaterial||o.isMeshPhongMaterial||o.isMeshToonMaterial||o.isMeshStandardMaterial||o.envMap){let t=k.map.cameraPosition;void 0!==t&&t.setValue(ev,ep.setFromMatrixPosition(e.matrixWorld))}(o.isMeshPhongMaterial||o.isMeshToonMaterial||o.isMeshLambertMaterial||o.isMeshBasicMaterial||o.isMeshStandardMaterial||o.isShaderMaterial)&&k.setValue(ev,"isOrthographic",!0===e.isOrthographicCamera),(o.isMeshPhongMaterial||o.isMeshToonMaterial||o.isMeshLambertMaterial||o.isMeshBasicMaterial||o.isMeshStandardMaterial||o.isShaderMaterial||o.isShadowMaterial||h.isSkinnedMesh)&&k.setValue(ev,"viewMatrix",e.matrixWorldInverse)}if(h.isSkinnedMesh){k.setOptional(ev,h,"bindMatrix"),k.setOptional(ev,h,"bindMatrixInverse");let e=h.skeleton;e&&(n.floatVertexTextures?(null===e.boneTexture&&e.computeBoneTexture(),k.setValue(ev,"boneTexture",e.boneTexture,l),k.setValue(ev,"boneTextureSize",e.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let B=i.morphAttributes;if((void 0!==B.position||void 0!==B.normal||void 0!==B.color&&!0===n.isWebGL2)&&M.update(h,i,I),(O||L.receiveShadow!==h.receiveShadow)&&(L.receiveShadow=h.receiveShadow,k.setValue(ev,"receiveShadow",h.receiveShadow)),o.isMeshGouraudMaterial&&null!==o.envMap&&(z.envMap.value=x,z.flipEnvMap.value=x.isCubeTexture&&!1===x.isRenderTargetTexture?-1:1),O&&(k.setValue(ev,"toneMappingExposure",G.toneMappingExposure),L.needsLights&&(d=z,f=N,d.ambientLightColor.needsUpdate=f,d.lightProbe.needsUpdate=f,d.directionalLights.needsUpdate=f,d.directionalLightShadows.needsUpdate=f,d.pointLights.needsUpdate=f,d.pointLightShadows.needsUpdate=f,d.spotLights.needsUpdate=f,d.spotLightShadows.needsUpdate=f,d.rectAreaLights.needsUpdate=f,d.hemisphereLights.needsUpdate=f),p&&!0===o.fog&&m.refreshFogUniforms(z,p),m.refreshMaterialUniforms(z,o,er,ei,ed),rT.upload(ev,L.uniformsList,z,l)),o.isShaderMaterial&&!0===o.uniformsNeedUpdate&&(rT.upload(ev,L.uniformsList,z,l),o.uniformsNeedUpdate=!1),o.isSpriteMaterial&&k.setValue(ev,"center",h.center),k.setValue(ev,"modelViewMatrix",h.modelViewMatrix),k.setValue(ev,"normalMatrix",h.normalMatrix),k.setValue(ev,"modelMatrix",h.matrixWorld),o.isShaderMaterial||o.isRawShaderMaterial){let e=o.uniformsGroups;for(let t=0,i=e.length;t<i;t++)if(n.isWebGL2){let i=e[t];E.update(i,I),E.bind(i,I)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return I}(e,t,i,o,f);a.setMaterial(o,g);let x=i.index,_=1;!0===o.wireframe&&(x=d.getWireframeAttribute(i),_=2);let w=i.drawRange,A=i.attributes.position,C=w.start*_,P=(w.start+w.count)*_;null!==p&&(C=Math.max(C,p.start*_),P=Math.min(P,(p.start+p.count)*_)),null!==x?(C=Math.max(C,0),P=Math.min(P,x.count)):null!=A&&(C=Math.max(C,0),P=Math.min(P,A.count));let L=P-C;if(L<0||L===1/0)return;T.setup(f,o,v,i,x);let R,D=b;if(null!==x&&(R=h.get(x),(D=S).setIndex(R)),f.isMesh)!0===o.wireframe?(a.setLineWidth(o.wireframeLinewidth*eg()),D.setMode(1)):D.setMode(4);else if(f.isLine){let e=o.linewidth;void 0===e&&(e=1),a.setLineWidth(e*eg()),f.isLineSegments?D.setMode(1):f.isLineLoop?D.setMode(2):D.setMode(3)}else f.isPoints?D.setMode(0):f.isSprite&&D.setMode(4);if(f.isInstancedMesh)D.renderInstances(C,L,f.count);else if(i.isInstancedBufferGeometry){let e=void 0!==i._maxInstanceCount?i._maxInstanceCount:1/0,t=Math.min(i.instanceCount,e);D.renderInstances(C,L,t)}else D.render(C,L)},this.compile=function(e,t){function i(e,t,i){!0===e.transparent&&2===e.side&&!1===e.forceSinglePass?(e.side=1,e.needsUpdate=!0,eI(e,t,i),e.side=0,e.needsUpdate=!0,eI(e,t,i),e.side=2):eI(e,t,i)}(F=v.get(e)).init(),H.push(F),e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(F.pushLight(e),e.castShadow&&F.pushShadow(e))}),F.setupLights(G.useLegacyLights),e.traverse(function(t){let n=t.material;if(n)if(Array.isArray(n))for(let a=0;a<n.length;a++)i(n[a],e,t);else i(n,e,t)}),H.pop(),F=null};let eE=null;function eA(){eP.stop()}function eC(){eP.start()}let eP=new t4;function eL(e,t,o,s){let c=e.opaque,u=e.transmissive,h=e.transparent;F.setupLightsView(o),!0===eu&&y.setGlobalState(G.clippingPlanes,o),u.length>0&&function(e,t,a,o){if(null===ed){let e=n.isWebGL2;ed=new q(1024,1024,{generateMipmaps:!0,type:i.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:e&&!0===I?4:0})}let s=G.getRenderTarget();G.setRenderTarget(ed),G.clear();let c=G.toneMapping;G.toneMapping=0,eR(e,a,o),l.updateMultisampleRenderTarget(ed),l.updateRenderTargetMipmap(ed);let u=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],n=i.object,s=i.geometry,l=i.material,c=i.group;if(2===l.side&&n.layers.test(o.layers)){let e=l.side;l.side=1,l.needsUpdate=!0,eD(n,a,o,s,l,c),l.side=e,l.needsUpdate=!0,u=!0}}!0===u&&(l.updateMultisampleRenderTarget(ed),l.updateRenderTargetMipmap(ed)),G.setRenderTarget(s),G.toneMapping=c}(c,u,t,o),s&&a.viewport(Q.copy(s)),c.length>0&&eR(c,t,o),u.length>0&&eR(u,t,o),h.length>0&&eR(h,t,o),a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),a.setPolygonOffset(!1)}function eR(e,t,i){let n=!0===t.isScene?t.overrideMaterial:null;for(let a=0,o=e.length;a<o;a++){let o=e[a],s=o.object,l=o.geometry,c=null===n?o.material:n,u=o.group;s.layers.test(i.layers)&&eD(s,t,i,l,c,u)}}function eD(e,t,i,n,a,o){e.onBeforeRender(G,t,i,n,a,o),e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),a.onBeforeRender(G,t,i,n,e,o),!0===a.transparent&&2===a.side&&!1===a.forceSinglePass?(a.side=1,a.needsUpdate=!0,G.renderBufferDirect(i,t,n,a,e,o),a.side=0,a.needsUpdate=!0,G.renderBufferDirect(i,t,n,a,e,o),a.side=2):G.renderBufferDirect(i,t,n,a,e,o),e.onAfterRender(G,t,i,n,a,o)}function eI(e,t,i){var n;!0!==t.isScene&&(t=em);let a=s.get(e),o=F.state.lights,l=F.state.shadowsArray,h=o.state.version,d=p.getParameters(e,o.state,l,t,i),f=p.getProgramCacheKey(d),m=a.programs;a.environment=e.isMeshStandardMaterial?t.environment:null,a.fog=t.fog,a.envMap=(e.isMeshStandardMaterial?u:c).get(e.envMap||a.environment),void 0===m&&(e.addEventListener("dispose",eT),a.programs=m=new Map);let g=m.get(f);if(void 0!==g){if(a.currentProgram===g&&a.lightsStateVersion===h)return eU(e,d),g}else d.uniforms=p.getUniforms(e),e.onBuild(i,d,G),e.onBeforeCompile(d,G),g=p.acquireProgram(d,f),m.set(f,g),a.uniforms=d.uniforms;let v=a.uniforms;(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(v.clippingPlanes=y.uniform),eU(e,d),a.needsLights=(n=e).isMeshLambertMaterial||n.isMeshToonMaterial||n.isMeshPhongMaterial||n.isMeshStandardMaterial||n.isShadowMaterial||n.isShaderMaterial&&!0===n.lights,a.lightsStateVersion=h,a.needsLights&&(v.ambientLightColor.value=o.state.ambient,v.lightProbe.value=o.state.probe,v.directionalLights.value=o.state.directional,v.directionalLightShadows.value=o.state.directionalShadow,v.spotLights.value=o.state.spot,v.spotLightShadows.value=o.state.spotShadow,v.rectAreaLights.value=o.state.rectArea,v.ltc_1.value=o.state.rectAreaLTC1,v.ltc_2.value=o.state.rectAreaLTC2,v.pointLights.value=o.state.point,v.pointLightShadows.value=o.state.pointShadow,v.hemisphereLights.value=o.state.hemi,v.directionalShadowMap.value=o.state.directionalShadowMap,v.directionalShadowMatrix.value=o.state.directionalShadowMatrix,v.spotShadowMap.value=o.state.spotShadowMap,v.spotLightMatrix.value=o.state.spotLightMatrix,v.spotLightMap.value=o.state.spotLightMap,v.pointShadowMap.value=o.state.pointShadowMap,v.pointShadowMatrix.value=o.state.pointShadowMatrix);let x=g.getUniforms(),_=rT.seqWithValue(x.seq,v);return a.currentProgram=g,a.uniformsList=_,g}function eU(e,t){let i=s.get(e);i.outputEncoding=t.outputEncoding,i.instancing=t.instancing,i.skinning=t.skinning,i.morphTargets=t.morphTargets,i.morphNormals=t.morphNormals,i.morphColors=t.morphColors,i.morphTargetsCount=t.morphTargetsCount,i.numClippingPlanes=t.numClippingPlanes,i.numIntersection=t.numClipIntersection,i.vertexAlphas=t.vertexAlphas,i.vertexTangents=t.vertexTangents,i.toneMapping=t.toneMapping}eP.setAnimationLoop(function(e){eE&&eE(e)}),"undefined"!=typeof self&&eP.setContext(self),this.setAnimationLoop=function(e){eE=e,e_.setAnimationLoop(e),null===e?eP.stop():eP.start()},e_.addEventListener("sessionstart",eA),e_.addEventListener("sessionend",eC),this.render=function(e,t){if(void 0!==t&&!0!==t.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===V)return;!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===e_.enabled&&!0===e_.isPresenting&&(!0===e_.cameraAutoUpdate&&e_.updateCamera(t),t=e_.getCamera()),!0===e.isScene&&e.onBeforeRender(G,e,t,X),(F=v.get(e,H.length)).init(),H.push(F),ef.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ec.setFromProjectionMatrix(ef),eh=this.localClippingEnabled,eu=y.init(this.clippingPlanes,eh),(z=g.get(e,B.length)).init(),B.push(z),function e(t,i,n,a){if(!1===t.visible)return;if(t.layers.test(i.layers)){if(t.isGroup)n=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(i);else if(t.isLight)F.pushLight(t),t.castShadow&&F.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||ec.intersectsSprite(t)){a&&ep.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ef);let e=f.update(t),i=t.material;i.visible&&z.push(t,e,i,n,ep.z,null)}}else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.frame!==o.render.frame&&(t.skeleton.update(),t.skeleton.frame=o.render.frame),!t.frustumCulled||ec.intersectsObject(t))){a&&ep.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ef);let e=f.update(t),i=t.material;if(Array.isArray(i)){let a=e.groups;for(let o=0,s=a.length;o<s;o++){let s=a[o],l=i[s.materialIndex];l&&l.visible&&z.push(t,e,l,n,ep.z,s)}}else i.visible&&z.push(t,e,i,n,ep.z,null)}}let s=t.children;for(let t=0,o=s.length;t<o;t++)e(s[t],i,n,a)}(e,t,0,G.sortObjects),z.finish(),!0===G.sortObjects&&z.sort(en,ea),!0===eu&&y.beginShadows();let i=F.state.shadowsArray;if(x.render(i,e,t),!0===eu&&y.endShadows(),!0===this.info.autoReset&&this.info.reset(),_.render(z,e),F.setupLights(G.useLegacyLights),t.isArrayCamera){let i=t.cameras;for(let t=0,n=i.length;t<n;t++){let n=i[t];eL(z,e,n,n.viewport)}}else eL(z,e,t);null!==X&&(l.updateMultisampleRenderTarget(X),l.updateRenderTargetMipmap(X)),!0===e.isScene&&e.onAfterRender(G,e,t),T.resetDefaultState(),K=-1,Z=null,H.pop(),F=H.length>0?H[H.length-1]:null,B.pop(),z=B.length>0?B[B.length-1]:null},this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(e,t,n){s.get(e.texture).__webglTexture=t,s.get(e.depthTexture).__webglTexture=n;let a=s.get(e);a.__hasExternalTextures=!0,a.__hasExternalTextures&&(a.__autoAllocateDepthBuffer=void 0===n,a.__autoAllocateDepthBuffer||!0===i.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),a.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let i=s.get(e);i.__webglFramebuffer=t,i.__useDefaultFramebuffer=void 0===t},this.setRenderTarget=function(e,t=0,i=0){X=e,W=t,Y=i;let o=!0,c=null,u=!1,h=!1;if(e){let i=s.get(e);void 0!==i.__useDefaultFramebuffer?(a.bindFramebuffer(36160,null),o=!1):void 0===i.__webglFramebuffer?l.setupRenderTarget(e):i.__hasExternalTextures&&l.rebindTextures(e,s.get(e.texture).__webglTexture,s.get(e.depthTexture).__webglTexture);let d=e.texture;(d.isData3DTexture||d.isDataArrayTexture||d.isCompressedArrayTexture)&&(h=!0);let f=s.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(c=f[t],u=!0):c=n.isWebGL2&&e.samples>0&&!1===l.useMultisampledRTT(e)?s.get(e).__webglMultisampledFramebuffer:f,Q.copy(e.viewport),$.copy(e.scissor),ee=e.scissorTest}else Q.copy(eo).multiplyScalar(er).floor(),$.copy(es).multiplyScalar(er).floor(),ee=el;if(a.bindFramebuffer(36160,c)&&n.drawBuffers&&o&&a.drawBuffers(e,c),a.viewport(Q),a.scissor($),a.setScissorTest(ee),u){let n=s.get(e.texture);ev.framebufferTexture2D(36160,36064,34069+t,n.__webglTexture,i)}else if(h){let n=s.get(e.texture);ev.framebufferTextureLayer(36160,36064,n.__webglTexture,i||0,t||0)}K=-1},this.readRenderTargetPixels=function(e,t,o,l,c,u,h){if(!(e&&e.isWebGLRenderTarget))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let d=s.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&void 0!==h&&(d=d[h]),d){a.bindFramebuffer(36160,d);try{let a=e.texture,s=a.format,h=a.type;if(1023!==s&&w.convert(s)!==ev.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let d=1016===h&&(i.has("EXT_color_buffer_half_float")||n.isWebGL2&&i.has("EXT_color_buffer_float"));if(1009!==h&&w.convert(h)!==ev.getParameter(35738)&&!(1015===h&&(n.isWebGL2||i.has("OES_texture_float")||i.has("WEBGL_color_buffer_float")))&&!d)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");t>=0&&t<=e.width-l&&o>=0&&o<=e.height-c&&ev.readPixels(t,o,l,c,w.convert(s),w.convert(h),u)}finally{let e=null!==X?s.get(X).__webglFramebuffer:null;a.bindFramebuffer(36160,e)}}},this.copyFramebufferToTexture=function(e,t,i=0){let n=Math.pow(2,-i),o=Math.floor(t.image.width*n),s=Math.floor(t.image.height*n);l.setTexture2D(t,0),ev.copyTexSubImage2D(3553,i,0,0,e.x,e.y,o,s),a.unbindTexture()},this.copyTextureToTexture=function(e,t,i,n=0){let o=t.image.width,s=t.image.height,c=w.convert(i.format),u=w.convert(i.type);l.setTexture2D(i,0),ev.pixelStorei(37440,i.flipY),ev.pixelStorei(37441,i.premultiplyAlpha),ev.pixelStorei(3317,i.unpackAlignment),t.isDataTexture?ev.texSubImage2D(3553,n,e.x,e.y,o,s,c,u,t.image.data):t.isCompressedTexture?ev.compressedTexSubImage2D(3553,n,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,c,t.mipmaps[0].data):ev.texSubImage2D(3553,n,e.x,e.y,c,u,t.image),0===n&&i.generateMipmaps&&ev.generateMipmap(3553),a.unbindTexture()},this.copyTextureToTexture3D=function(e,t,i,n,o=0){let s;if(G.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let c=e.max.x-e.min.x+1,u=e.max.y-e.min.y+1,h=e.max.z-e.min.z+1,d=w.convert(n.format),f=w.convert(n.type);if(n.isData3DTexture)l.setTexture3D(n,0),s=32879;else{if(!n.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");l.setTexture2DArray(n,0),s=35866}ev.pixelStorei(37440,n.flipY),ev.pixelStorei(37441,n.premultiplyAlpha),ev.pixelStorei(3317,n.unpackAlignment);let p=ev.getParameter(3314),m=ev.getParameter(32878),g=ev.getParameter(3316),v=ev.getParameter(3315),y=ev.getParameter(32877),x=i.isCompressedTexture?i.mipmaps[0]:i.image;ev.pixelStorei(3314,x.width),ev.pixelStorei(32878,x.height),ev.pixelStorei(3316,e.min.x),ev.pixelStorei(3315,e.min.y),ev.pixelStorei(32877,e.min.z),i.isDataTexture||i.isData3DTexture?ev.texSubImage3D(s,o,t.x,t.y,t.z,c,u,h,d,f,x.data):i.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ev.compressedTexSubImage3D(s,o,t.x,t.y,t.z,c,u,h,d,x.data)):ev.texSubImage3D(s,o,t.x,t.y,t.z,c,u,h,d,f,x),ev.pixelStorei(3314,p),ev.pixelStorei(32878,m),ev.pixelStorei(3316,g),ev.pixelStorei(3315,v),ev.pixelStorei(32877,y),0===o&&n.generateMipmaps&&ev.generateMipmap(s),a.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?l.setTextureCube(e,0):e.isData3DTexture?l.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?l.setTexture2DArray(e,0):l.setTexture2D(e,0),a.unbindTexture()},this.resetState=function(){W=0,Y=0,X=null,a.reset(),T.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}(class extends ns{}).prototype.isWebGL1Renderer=!0;class nl extends eJ{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.environment&&(this.environment=e.environment.clone()),null!==e.fog&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return null!==this.fog&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class nc extends W{constructor(e,t,i,n,a,o,s,l,c){super(e,t,i,n,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nu{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)t.push(a+=(i=this.getPoint(o/e)).distanceTo(n)),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i,n=this.getLengths(),a=0,o=n.length;i=t||e*n[o-1];let s=0,l=o-1,c;for(;s<=l;)if((c=n[a=Math.floor(s+(l-s)/2)]-i)<0)s=a+1;else if(c>0)l=a-1;else{l=a;break}if(n[a=l]===i)return a/(o-1);let u=n[a],h=n[a+1]-u;return(a+(i-u)/h)/(o-1)}getTangent(e,t){let i=e-1e-4,n=e+1e-4;i<0&&(i=0),n>1&&(n=1);let a=this.getPoint(i),o=this.getPoint(n),s=t||(a.isVector2?new C:new J);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new J,n=[],a=[],o=[],s=new J,l=new ew;for(let t=0;t<=e;t++){let i=t/e;n[t]=this.getTangentAt(i,new J)}a[0]=new J,o[0]=new J;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),h=Math.abs(n[0].y),d=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),s.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],s),o[0].crossVectors(n[0],a[0]);for(let t=1;t<=e;t++){if(a[t]=a[t-1].clone(),o[t]=o[t-1].clone(),s.crossVectors(n[t-1],n[t]),s.length()>Number.EPSILON){s.normalize();let e=Math.acos(S(n[t-1].dot(n[t]),-1,1));a[t].applyMatrix4(l.makeRotationAxis(s,e))}o[t].crossVectors(n[t],a[t])}if(!0===t){let t=Math.acos(S(a[0].dot(a[e]),-1,1));t/=e,n[0].dot(s.crossVectors(a[0],a[e]))>0&&(t=-t);for(let i=1;i<=e;i++)a[i].applyMatrix4(l.makeRotationAxis(n[i],t*i)),o[i].crossVectors(n[i],a[i])}return{tangents:n,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nh extends nu{constructor(e=0,t=0,i=1,n=1,a=0,o=2*Math.PI,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=l}getPoint(e,t){let i=t||new C,n=2*Math.PI,a=this.aEndAngle-this.aStartAngle,o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(a=o?0:n),!0!==this.aClockwise||o||(a===n?a=-n:a-=n);let s=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(0!==this.aRotation){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),i=l-this.aX,n=c-this.aY;l=i*e-n*t+this.aX,c=i*t+n*e+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}function nd(){let e=0,t=0,i=0,n=0;function a(a,o,s,l){e=a,t=s,i=-3*a+3*o-2*s-l,n=2*a-2*o+s+l}return{initCatmullRom:function(e,t,i,n,o){a(t,i,o*(i-e),o*(n-t))},initNonuniformCatmullRom:function(e,t,i,n,o,s,l){let c=(t-e)/o-(i-e)/(o+s)+(i-t)/s,u=(i-t)/s-(n-t)/(s+l)+(n-i)/l;a(t,i,c*=s,u*=s)},calc:function(a){let o=a*a;return e+t*a+i*o+o*a*n}}}let nf=new J,np=new nd,nm=new nd,ng=new nd;function nv(e,t,i,n,a){let o=(n-t)*.5,s=(a-i)*.5,l=e*e;return e*l*(2*i-2*n+o+s)+(-3*i+3*n-2*o-s)*l+o*e+i}function ny(e,t,i,n){return function(e,t){let i=1-e;return i*i*t}(e,t)+2*(1-e)*e*i+e*e*n}function nx(e,t,i,n,a){return function(e,t){let i=1-e;return i*i*i*t}(e,t)+function(e,t){let i=1-e;return 3*i*i*e*t}(e,i)+3*(1-e)*e*e*n+e*e*e*a}class n_ extends nu{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){let i=this.v0,n=this.v1,a=this.v2,o=this.v3;return t.set(nx(e,i.x,n.x,a.x,o.x),nx(e,i.y,n.y,a.y,o.y)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nM extends nu{constructor(e=new C,t=new C){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new C){return 1===e?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nb extends nu{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=this.v0,n=this.v1,a=this.v2;return t.set(ny(e,i.x,n.x,a.x),ny(e,i.y,n.y,a.y)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nS extends nu{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new C){let i=this.points,n=(i.length-1)*e,a=Math.floor(n),o=n-a,s=i[0===a?a:a-1],l=i[a],c=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return t.set(nv(o,s.x,l.x,c.x,u.x),nv(o,s.y,l.y,c.y,u.y)),t}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(new C().fromArray(i))}return this}}var nw=Object.freeze({__proto__:null,ArcCurve:class extends nh{constructor(e,t,i,n,a,o){super(e,t,i,i,n,a,o),this.isArcCurve=!0,this.type="ArcCurve"}},CatmullRomCurve3:class extends nu{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new J){let i,n,a=this.points,o=a.length,s=(o-!this.closed)*e,l=Math.floor(s),c=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:0===c&&l===o-1&&(l=o-2,c=1),this.closed||l>0?i=a[(l-1)%o]:(nf.subVectors(a[0],a[1]).add(a[0]),i=nf);let u=a[l%o],h=a[(l+1)%o];if(this.closed||l+2<o?n=a[(l+2)%o]:(nf.subVectors(a[o-1],a[o-2]).add(a[o-1]),n=nf),"centripetal"===this.curveType||"chordal"===this.curveType){let e="chordal"===this.curveType?.5:.25,t=Math.pow(i.distanceToSquared(u),e),a=Math.pow(u.distanceToSquared(h),e),o=Math.pow(h.distanceToSquared(n),e);a<1e-4&&(a=1),t<1e-4&&(t=a),o<1e-4&&(o=a),np.initNonuniformCatmullRom(i.x,u.x,h.x,n.x,t,a,o),nm.initNonuniformCatmullRom(i.y,u.y,h.y,n.y,t,a,o),ng.initNonuniformCatmullRom(i.z,u.z,h.z,n.z,t,a,o)}else"catmullrom"===this.curveType&&(np.initCatmullRom(i.x,u.x,h.x,n.x,this.tension),nm.initCatmullRom(i.y,u.y,h.y,n.y,this.tension),ng.initCatmullRom(i.z,u.z,h.z,n.z,this.tension));return t.set(np.calc(c),nm.calc(c),ng.calc(c)),t}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(new J().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},CubicBezierCurve:n_,CubicBezierCurve3:class extends nu{constructor(e=new J,t=new J,i=new J,n=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new J){let i=this.v0,n=this.v1,a=this.v2,o=this.v3;return t.set(nx(e,i.x,n.x,a.x,o.x),nx(e,i.y,n.y,a.y,o.y),nx(e,i.z,n.z,a.z,o.z)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},EllipseCurve:nh,LineCurve:nM,LineCurve3:class extends nu{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new J){return 1===e?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},QuadraticBezierCurve:nb,QuadraticBezierCurve3:class extends nu{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=this.v0,n=this.v1,a=this.v2;return t.set(ny(e,i.x,n.x,a.x),ny(e,i.y,n.y,a.y),ny(e,i.z,n.z,a.z)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},SplineCurve:nS});class nT extends nu{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new nM(t,e))}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),a=0;for(;a<n.length;){if(n[a]>=i){let e=n[a]-i,o=this.curves[a],s=o.getLength(),l=0===s?0:1-e/s;return o.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)e.push(t+=this.curves[i].getLength());return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t,i=[];for(let n=0,a=this.curves;n<a.length;n++){let o=a[n],s=o.isEllipseCurve?2*e:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(s);for(let e=0;e<l.length;e++){let n=l[e];t&&t.equals(n)||(i.push(n),t=n)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let i=e.curves[t];this.curves.push(new nw[i.type]().fromJSON(i))}return this}}class nE extends nT{constructor(e){super(),this.type="Path",this.currentPoint=new C,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new nM(this.currentPoint.clone(),new C(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let a=new nb(this.currentPoint.clone(),new C(e,t),new C(i,n));return this.curves.push(a),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,a,o){let s=new n_(this.currentPoint.clone(),new C(e,t),new C(i,n),new C(a,o));return this.curves.push(s),this.currentPoint.set(a,o),this}splineThru(e){let t=new nS([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,a,o){let s=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+s,t+l,i,n,a,o),this}absarc(e,t,i,n,a,o){return this.absellipse(e,t,i,i,n,a,o),this}ellipse(e,t,i,n,a,o,s,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,n,a,o,s,l),this}absellipse(e,t,i,n,a,o,s,l){let c=new nh(e,t,i,n,a,o,s,l);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class nA extends nE{constructor(e){super(e),this.uuid=b(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let i=e.holes[t];this.holes.push(new nE().fromJSON(i))}return this}}let nC=function(e,t,i=2){let n,a,o,s,l,c,u,h=t&&t.length,d=h?t[0]*i:e.length,f=nP(e,0,d,i,!0),p=[];if(!f||f.next===f.prev)return p;if(h&&(f=function(e,t,i,n){let a,o,s,l,c,u=[];for(a=0,o=t.length;a<o;a++)s=t[a]*n,l=a<o-1?t[a+1]*n:e.length,(c=nP(e,s,l,n,!1))===c.next&&(c.steiner=!0),u.push(function(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}(c));for(u.sort(nR),a=0;a<u.length;a++)i=function(e,t){let i=function(e,t){let i=t,n=-1/0,a,o=e.x,s=e.y;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){let e=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(e<=o&&e>n&&(n=e,a=i.x<i.next.x?i:i.next,e===o))return a}i=i.next}while(i!==t);if(!a)return null;let l=a,c=a.x,u=a.y,h=1/0,d;i=a;do{var f,p;o>=i.x&&i.x>=c&&o!==i.x&&nI(s<u?o:n,s,c,u,s<u?n:o,s,i.x,i.y)&&(d=Math.abs(s-i.y)/(o-i.x),nF(i,e)&&(d<h||d===h&&(i.x>a.x||i.x===a.x&&(f=a,p=i,0>nU(f.prev,f,p.prev)&&0>nU(p.next,f,f.next))))&&(a=i,h=d)),i=i.next}while(i!==l);return a}(e,t);if(!i)return t;let n=nB(i,e);return nL(n,n.next),nL(i,i.next)}(u[a],i);return i}(e,t,f,i)),e.length>80*i){n=o=e[0],a=s=e[1];for(let t=i;t<d;t+=i)l=e[t],c=e[t+1],l<n&&(n=l),c<a&&(a=c),l>o&&(o=l),c>s&&(s=c);u=0!==(u=Math.max(o-n,s-a))?32767/u:0}return function e(t,i,n,a,o,s,l){if(!t)return;!l&&s&&function(e,t,i,n){let a=e;do 0===a.z&&(a.z=nD(a.x,a.y,t,i,n)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,function(e){let t,i,n,a,o,s,l,c,u=1;do{for(i=e,e=null,o=null,s=0;i;){for(s++,n=i,l=0,t=0;t<u&&(l++,n=n.nextZ);t++);for(c=u;l>0||c>0&&n;)0!==l&&(0===c||!n||i.z<=n.z)?(a=i,i=i.nextZ,l--):(a=n,n=n.nextZ,c--),o?o.nextZ=a:e=a,a.prevZ=o,o=a;i=n}o.nextZ=null,u*=2}while(s>1)}(a)}(t,a,o,s);let c=t,u,h;for(;t.prev!==t.next;){if(u=t.prev,h=t.next,s?function(e,t,i,n){let a=e.prev,o=e.next;if(nU(a,e,o)>=0)return!1;let s=a.x,l=e.x,c=o.x,u=a.y,h=e.y,d=o.y,f=s<l?s<c?s:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,m=s>l?s>c?s:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,v=nD(f,p,t,i,n),y=nD(m,g,t,i,n),x=e.prevZ,_=e.nextZ;for(;x&&x.z>=v&&_&&_.z<=y;){if(x.x>=f&&x.x<=m&&x.y>=p&&x.y<=g&&x!==a&&x!==o&&nI(s,u,l,h,c,d,x.x,x.y)&&nU(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=m&&_.y>=p&&_.y<=g&&_!==a&&_!==o&&nI(s,u,l,h,c,d,_.x,_.y)&&nU(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=v;){if(x.x>=f&&x.x<=m&&x.y>=p&&x.y<=g&&x!==a&&x!==o&&nI(s,u,l,h,c,d,x.x,x.y)&&nU(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=m&&_.y>=p&&_.y<=g&&_!==a&&_!==o&&nI(s,u,l,h,c,d,_.x,_.y)&&nU(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}(t,a,o,s):function(e){let t=e.prev,i=e.next;if(nU(t,e,i)>=0)return!1;let n=t.x,a=e.x,o=i.x,s=t.y,l=e.y,c=i.y,u=n<a?n<o?n:o:a<o?a:o,h=s<l?s<c?s:c:l<c?l:c,d=n>a?n>o?n:o:a>o?a:o,f=s>l?s>c?s:c:l>c?l:c,p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&nI(n,s,a,l,o,c,p.x,p.y)&&nU(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}(t)){i.push(u.i/n|0),i.push(t.i/n|0),i.push(h.i/n|0),nG(t),t=h.next,c=h.next;continue}if((t=h)===c){l?1===l?e(t=function(e,t,i){let n=e;do{let a=n.prev,o=n.next.next;!nO(a,o)&&nN(a,n,n.next,o)&&nF(a,o)&&nF(o,a)&&(t.push(a.i/i|0),t.push(n.i/i|0),t.push(o.i/i|0),nG(n),nG(n.next),n=e=o),n=n.next}while(n!==e);return nL(n)}(nL(t),i,n),i,n,a,o,s,2):2===l&&function(t,i,n,a,o,s){let l=t;do{let t=l.next.next;for(;t!==l.prev;){var c,u;if(l.i!==t.i&&(c=l,u=t,c.next.i!==u.i&&c.prev.i!==u.i&&!function(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&nN(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}(c,u)&&(nF(c,u)&&nF(u,c)&&function(e,t){let i=e,n=!1,a=(e.x+t.x)/2,o=(e.y+t.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e);return n}(c,u)&&(nU(c.prev,c,u.prev)||nU(c,u.prev,u))||nO(c,u)&&nU(c.prev,c,c.next)>0&&nU(u.prev,u,u.next)>0))){let c=nB(l,t);l=nL(l,l.next),c=nL(c,c.next),e(l,i,n,a,o,s,0),e(c,i,n,a,o,s,0);return}t=t.next}l=l.next}while(l!==t)}(t,i,n,a,o,s):e(nL(t),i,n,a,o,s,1);break}}}(f,p,i,n,a,u,0),p};function nP(e,t,i,n,a){let o,s;if(a===function(e,t,i,n){let a=0;for(let o=t,s=i-n;o<i;o+=n)a+=(e[s]-e[o])*(e[o+1]+e[s+1]),s=o;return a}(e,t,i,n)>0)for(o=t;o<i;o+=n)s=nH(o,e[o],e[o+1],s);else for(o=i-n;o>=t;o-=n)s=nH(o,e[o],e[o+1],s);return s&&nO(s,s.next)&&(nG(s),s=s.next),s}function nL(e,t){if(!e)return e;t||(t=e);let i=e,n;do if(n=!1,!i.steiner&&(nO(i,i.next)||0===nU(i.prev,i,i.next))){if(nG(i),(i=t=i.prev)===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function nR(e,t){return e.x-t.x}function nD(e,t,i,n,a){return(e=((e=((e=((e=((e=(e-i)*a|0)|e<<8)&0xff00ff)|e<<4)&0xf0f0f0f)|e<<2)&0x33333333)|e<<1)&0x55555555)|(t=((t=((t=((t=((t=(t-n)*a|0)|t<<8)&0xff00ff)|t<<4)&0xf0f0f0f)|t<<2)&0x33333333)|t<<1)&0x55555555)<<1}function nI(e,t,i,n,a,o,s,l){return(a-s)*(t-l)>=(e-s)*(o-l)&&(e-s)*(n-l)>=(i-s)*(t-l)&&(i-s)*(o-l)>=(a-s)*(n-l)}function nU(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function nO(e,t){return e.x===t.x&&e.y===t.y}function nN(e,t,i,n){let a=nz(nU(e,t,i)),o=nz(nU(e,t,n)),s=nz(nU(i,n,e)),l=nz(nU(i,n,t));return!!(a!==o&&s!==l||0===a&&nk(e,i,t)||0===o&&nk(e,n,t)||0===s&&nk(i,e,n)||0===l&&nk(i,t,n))}function nk(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function nz(e){return e>0?1:e<0?-1:0}function nF(e,t){return 0>nU(e.prev,e,e.next)?nU(e,t,e.next)>=0&&nU(e,e.prev,t)>=0:0>nU(e,t,e.prev)||0>nU(e,e.next,t)}function nB(e,t){let i=new nV(e.i,e.x,e.y),n=new nV(t.i,t.x,t.y),a=e.next,o=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,n.next=i,i.prev=n,o.next=n,n.prev=o,n}function nH(e,t,i,n){let a=new nV(e,t,i);return n?(a.next=n.next,a.prev=n,n.next.prev=a,n.next=a):(a.prev=a,a.next=a),a}function nG(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function nV(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}class nW{static area(e){let t=e.length,i=0;for(let n=t-1,a=0;a<t;n=a++)i+=e[n].x*e[a].y-e[a].x*e[n].y;return .5*i}static isClockWise(e){return 0>nW.area(e)}static triangulateShape(e,t){let i=[],n=[],a=[];nj(e),nq(i,e);let o=e.length;t.forEach(nj);for(let e=0;e<t.length;e++)n.push(o),o+=t[e].length,nq(i,t[e]);let s=nC(i,n);for(let e=0;e<s.length;e+=3)a.push(s.slice(e,e+3));return a}}function nj(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function nq(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class nY extends t_{constructor(e=new nA([new C(.5,.5),new C(-.5,.5),new C(-.5,-.5),new C(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],a=[];for(let o=0,s=e.length;o<s;o++)!function(e){let o=[],s=void 0!==t.curveSegments?t.curveSegments:12,l=void 0!==t.steps?t.steps:1,c=void 0!==t.depth?t.depth:1,u=void 0===t.bevelEnabled||t.bevelEnabled,h=void 0!==t.bevelThickness?t.bevelThickness:.2,d=void 0!==t.bevelSize?t.bevelSize:h-.1,f=void 0!==t.bevelOffset?t.bevelOffset:0,p=void 0!==t.bevelSegments?t.bevelSegments:3,m=t.extrudePath,g=void 0!==t.UVGenerator?t.UVGenerator:nX,v,y=!1,x,_,M,b;m&&(v=m.getSpacedPoints(l),y=!0,u=!1,x=m.computeFrenetFrames(l,!1),_=new J,M=new J,b=new J),u||(p=0,h=0,d=0,f=0);let S=e.extractPoints(s),w=S.shape,T=S.holes;if(!nW.isClockWise(w)){w=w.reverse();for(let e=0,t=T.length;e<t;e++){let t=T[e];nW.isClockWise(t)&&(T[e]=t.reverse())}}let E=nW.triangulateShape(w,T),A=w;for(let e=0,t=T.length;e<t;e++){let t=T[e];w=w.concat(t)}function P(e,t,i){return t||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.clone().addScaledVector(t,i)}let L=w.length,R=E.length;function D(e,t,i){let n,a,o,s=e.x-t.x,l=e.y-t.y,c=i.x-e.x,u=i.y-e.y,h=s*s+l*l;if(Math.abs(s*u-l*c)>Number.EPSILON){let d=Math.sqrt(h),f=Math.sqrt(c*c+u*u),p=t.x-l/d,m=t.y+s/d,g=((i.x-u/f-p)*u-(i.y+c/f-m)*c)/(s*u-l*c),v=(n=p+s*g-e.x)*n+(a=m+l*g-e.y)*a;if(v<=2)return new C(n,a);o=Math.sqrt(v/2)}else{let e=!1;s>Number.EPSILON?c>Number.EPSILON&&(e=!0):s<-Number.EPSILON?c<-Number.EPSILON&&(e=!0):Math.sign(l)===Math.sign(u)&&(e=!0),e?(n=-l,a=s,o=Math.sqrt(h)):(n=s,a=l,o=Math.sqrt(h/2))}return new C(n/o,a/o)}let I=[];for(let e=0,t=A.length,i=t-1,n=e+1;e<t;e++,i++,n++)i===t&&(i=0),n===t&&(n=0),I[e]=D(A[e],A[i],A[n]);let U=[],O,N=I.concat();for(let e=0,t=T.length;e<t;e++){let t=T[e];O=[];for(let e=0,i=t.length,n=i-1,a=e+1;e<i;e++,n++,a++)n===i&&(n=0),a===i&&(a=0),O[e]=D(t[e],t[n],t[a]);U.push(O),N=N.concat(O)}for(let e=0;e<p;e++){let t=e/p,i=h*Math.cos(t*Math.PI/2),n=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=A.length;e<t;e++){let t=P(A[e],I[e],n);F(t.x,t.y,-i)}for(let e=0,t=T.length;e<t;e++){let t=T[e];O=U[e];for(let e=0,a=t.length;e<a;e++){let a=P(t[e],O[e],n);F(a.x,a.y,-i)}}}let k=d+f;for(let e=0;e<L;e++){let t=u?P(w[e],N[e],k):w[e];y?(M.copy(x.normals[0]).multiplyScalar(t.x),_.copy(x.binormals[0]).multiplyScalar(t.y),b.copy(v[0]).add(M).add(_),F(b.x,b.y,b.z)):F(t.x,t.y,0)}for(let e=1;e<=l;e++)for(let t=0;t<L;t++){let i=u?P(w[t],N[t],k):w[t];y?(M.copy(x.normals[e]).multiplyScalar(i.x),_.copy(x.binormals[e]).multiplyScalar(i.y),b.copy(v[e]).add(M).add(_),F(b.x,b.y,b.z)):F(i.x,i.y,c/l*e)}for(let e=p-1;e>=0;e--){let t=e/p,i=h*Math.cos(t*Math.PI/2),n=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=A.length;e<t;e++){let t=P(A[e],I[e],n);F(t.x,t.y,c+i)}for(let e=0,t=T.length;e<t;e++){let t=T[e];O=U[e];for(let e=0,a=t.length;e<a;e++){let a=P(t[e],O[e],n);y?F(a.x,a.y+v[l-1].y,v[l-1].x+i):F(a.x,a.y,c+i)}}}function z(e,t){let a=e.length;for(;--a>=0;){let o=a,s=a-1;s<0&&(s=e.length-1);for(let e=0,a=l+2*p;e<a;e++){let a=L*e,l=L*(e+1);!function(e,t,a,o){H(e),H(t),H(o),H(t),H(a),H(o);let s=n.length/3,l=g.generateSideWallUV(i,n,s-6,s-3,s-2,s-1);G(l[0]),G(l[1]),G(l[3]),G(l[1]),G(l[2]),G(l[3])}(t+o+a,t+s+a,t+s+l,t+o+l)}}}function F(e,t,i){o.push(e),o.push(t),o.push(i)}function B(e,t,a){H(e),H(t),H(a);let o=n.length/3,s=g.generateTopUV(i,n,o-3,o-2,o-1);G(s[0]),G(s[1]),G(s[2])}function H(e){n.push(o[3*e+0]),n.push(o[3*e+1]),n.push(o[3*e+2])}function G(e){a.push(e.x),a.push(e.y)}(function(){let e=n.length/3;if(u){let e=0*L;for(let t=0;t<R;t++){let i=E[t];B(i[2]+e,i[1]+e,i[0]+e)}e=L*(l+2*p);for(let t=0;t<R;t++){let i=E[t];B(i[0]+e,i[1]+e,i[2]+e)}}else{for(let e=0;e<R;e++){let t=E[e];B(t[2],t[1],t[0])}for(let e=0;e<R;e++){let t=E[e];B(t[0]+L*l,t[1]+L*l,t[2]+L*l)}}i.addGroup(e,n.length/3-e,0)})(),function(){let e=n.length/3,t=0;z(A,0),t+=A.length;for(let e=0,i=T.length;e<i;e++){let i=T[e];z(i,t),t+=i.length}i.addGroup(e,n.length/3-e,1)}()}(e[o]);this.setAttribute("position",new td(n,3)),this.setAttribute("uv",new td(a,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(e,t,i){if(i.shapes=[],Array.isArray(e))for(let t=0,n=e.length;t<n;t++){let n=e[t];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),void 0!==t.extrudePath&&(i.options.extrudePath=t.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let n=0,a=e.shapes.length;n<a;n++){let a=t[e.shapes[n]];i.push(a)}let n=e.options.extrudePath;return void 0!==n&&(e.options.extrudePath=new nw[n.type]().fromJSON(n)),new nY(i,e.options)}}let nX={generateTopUV:function(e,t,i,n,a){let o=t[3*i],s=t[3*i+1],l=t[3*n],c=t[3*n+1],u=t[3*a],h=t[3*a+1];return[new C(o,s),new C(l,c),new C(u,h)]},generateSideWallUV:function(e,t,i,n,a,o){let s=t[3*i],l=t[3*i+1],c=t[3*i+2],u=t[3*n],h=t[3*n+1],d=t[3*n+2],f=t[3*a],p=t[3*a+1],m=t[3*a+2],g=t[3*o],v=t[3*o+1],y=t[3*o+2];return Math.abs(l-h)<Math.abs(s-u)?[new C(s,1-c),new C(u,1-d),new C(f,1-m),new C(g,1-y)]:[new C(l,1-c),new C(h,1-d),new C(p,1-m),new C(v,1-y)]}};class nJ extends e9{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tn(0xffffff),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new C(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nK extends nJ{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new C(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return S(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tn(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tn(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tn(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}let nZ={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},nQ=new class{constructor(e,t,i){let n=this,a=!1,o=0,s=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(e){s++,!1===a&&void 0!==n.onStart&&n.onStart(e,o,s),a=!0},this.itemEnd=function(e){o++,void 0!==n.onProgress&&n.onProgress(e,o,s),o===s&&(a=!1,void 0!==n.onLoad&&n.onLoad())},this.itemError=function(e){void 0!==n.onError&&n.onError(e)},this.resolveURL=function(e){return l?l(e):e},this.setURLModifier=function(e){return l=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return -1!==t&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,i=c.length;t<i;t+=2){let i=c[t],n=c[t+1];if(i.global&&(i.lastIndex=0),i.test(e))return n}return null}}};class n${constructor(e){this.manager=void 0!==e?e:nQ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}let n0={};class n1 extends Error{constructor(e,t){super(e),this.response=t}}class n2 extends n${constructor(e){super(e)}load(e,t,i,n){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let a=nZ.get(e);if(void 0!==a)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(void 0!==n0[e])return void n0[e].push({onLoad:t,onProgress:i,onError:n});n0[e]=[],n0[e].push({onLoad:t,onProgress:i,onError:n});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(o).then(t=>{if(200===t.status||0===t.status){if(0===t.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===t.body||void 0===t.body.getReader)return t;let i=n0[e],n=t.body.getReader(),a=t.headers.get("Content-Length")||t.headers.get("X-File-Size"),o=a?parseInt(a):0,s=0!==o,l=0;return new Response(new ReadableStream({start(e){!function t(){n.read().then(({done:n,value:a})=>{if(n)e.close();else{let n=new ProgressEvent("progress",{lengthComputable:s,loaded:l+=a.byteLength,total:o});for(let e=0,t=i.length;e<t;e++){let t=i[e];t.onProgress&&t.onProgress(n)}e.enqueue(a),t()}})}()}}))}throw new n1(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(l){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>new DOMParser().parseFromString(e,s));case"json":return e.json();default:if(void 0===s)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(s),i=new TextDecoder(t&&t[1]?t[1].toLowerCase():void 0);return e.arrayBuffer().then(e=>i.decode(e))}}}).then(t=>{nZ.add(e,t);let i=n0[e];delete n0[e];for(let e=0,n=i.length;e<n;e++){let n=i[e];n.onLoad&&n.onLoad(t)}}).catch(t=>{let i=n0[e];if(void 0===i)throw this.manager.itemError(e),t;delete n0[e];for(let e=0,n=i.length;e<n;e++){let n=i[e];n.onError&&n.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class n3 extends eJ{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tn(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,void 0!==this.groundColor&&(t.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(t.object.distance=this.distance),void 0!==this.angle&&(t.object.angle=this.angle),void 0!==this.decay&&(t.object.decay=this.decay),void 0!==this.penumbra&&(t.object.penumbra=this.penumbra),void 0!==this.shadow&&(t.object.shadow=this.shadow.toJSON()),t}}let n5=new ew,n4=new J,n6=new J;class n8{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new C(512,512),this.map=null,this.mapPass=null,this.matrix=new ew,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new t5,this._frameExtents=new C(1,1),this._viewportCount=1,this._viewports=[new j(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;n4.setFromMatrixPosition(e.matrixWorld),t.position.copy(n4),n6.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(n6),t.updateMatrixWorld(),n5.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(n5),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n5)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return 0!==this.bias&&(e.bias=this.bias),0!==this.normalBias&&(e.normalBias=this.normalBias),1!==this.radius&&(e.radius=this.radius),(512!==this.mapSize.x||512!==this.mapSize.y)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}let n7=new ew,n9=new J,ae=new J;class at extends n8{constructor(){super(new tX(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new C(4,2),this._viewportCount=6,this._viewports=[new j(2,1,1,1),new j(0,1,1,1),new j(3,1,1,1),new j(1,1,1,1),new j(3,0,1,1),new j(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),n9.setFromMatrixPosition(e.matrixWorld),i.position.copy(n9),ae.copy(i.position),ae.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ae),i.updateMatrixWorld(),n.makeTranslation(-n9.x,-n9.y,-n9.z),n7.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(n7)}}class ai extends n3{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new at}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ar extends n3{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let an=new C;class aa{constructor(e=new C(1/0,1/0),t=new C(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class ao{constructor(){this.type="ShapePath",this.color=new tn,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new nE,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,a,o){return this.currentPath.bezierCurveTo(e,t,i,n,a,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){let t,i,n,a,o=nW.isClockWise,s=this.subPaths;if(0===s.length)return[];let l=[];if(1===s.length)return i=s[0],(n=new nA).curves=i.curves,l.push(n),l;let c=!o(s[0].getPoints());c=e?!c:c;let u=[],h=[],d=[],f=0,p;h[0]=void 0,d[f]=[];for(let n=0,a=s.length;n<a;n++)t=o(p=(i=s[n]).getPoints()),(t=e?!t:t)?(!c&&h[f]&&f++,h[f]={s:new nA,p:p},h[f].s.curves=i.curves,c&&f++,d[f]=[]):d[f].push({h:i,p:p[0]});if(!h[0])return function(e){let t=[];for(let i=0,n=e.length;i<n;i++){let n=e[i],a=new nA;a.curves=n.curves,t.push(a)}return t}(s);if(h.length>1){let e=!1,t=0;for(let e=0,t=h.length;e<t;e++)u[e]=[];for(let i=0,n=h.length;i<n;i++){let n=d[i];for(let a=0;a<n.length;a++){let o=n[a],s=!0;for(let n=0;n<h.length;n++)(function(e,t){let i=t.length,n=!1;for(let a=i-1,o=0;o<i;a=o++){let i=t[a],s=t[o],l=s.x-i.x,c=s.y-i.y;if(Math.abs(c)>Number.EPSILON){if(c<0&&(i=t[o],l=-l,s=t[a],c=-c),e.y<i.y||e.y>s.y)continue;if(e.y===i.y){if(e.x===i.x)return!0}else{let t=c*(e.x-i.x)-l*(e.y-i.y);if(0===t)return!0;if(t<0)continue;n=!n}}else{if(e.y!==i.y)continue;if(s.x<=e.x&&e.x<=i.x||i.x<=e.x&&e.x<=s.x)return!0}}return n})(o.p,h[n].p)&&(i!==n&&t++,s?(s=!1,u[n].push(o)):e=!0);s&&u[i].push(o)}}t>0&&!1===e&&(d=u)}for(let e=0,t=h.length;e<t;e++){n=h[e].s,l.push(n),a=d[e];for(let e=0,t=a.length;e<t;e++)n.holes.push(a[e].h)}return l}}"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"151"}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="151");class as extends a.q9{constructor(e){super(),f(this,"rotation3D",{x:0,y:0,z:0}),f(this,"renderer"),f(this,"scene"),f(this,"camera"),f(this,"renderObject"),f(this,"width3D"),f(this,"height3D"),f(this,"globalWidth",window.innerWidth),f(this,"globalHeight",window.innerHeight),f(this,"offset",{x:0,y:0,z:0}),f(this,"center"),f(this,"copiedBounds"),this.width3D=e.width,this.height3D=e.width;let t=new nl;this.scene=t;let i=new ic(-this.globalWidth/2,this.globalWidth/2,this.globalHeight/2,-this.globalHeight/2);this.camera=i,this.camera.position.set(0,0,1200),t.add(new ar("white",.5));let n=new ai("white",1,2e3,0);n.position.z=100,t.add(n);let a=new ns({alpha:!0});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(window.devicePixelRatio),a.outputEncoding=3001,this.renderer=a}setRotation(e){this.renderObject&&this.center&&(e.x&&(this.camera.position.x=-1e4*Math.tan(e.x),this.camera.updateProjectionMatrix()),e.y&&(this.camera.position.y=1e4*Math.tan(e.y),this.camera.updateProjectionMatrix()),e.z&&(this.camera.up.set(Math.sin(e.z),Math.cos(e.z),0),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()),this._updated(!1))}copyBounds(e){this.copiedBounds=e,this._boundsUpdated(),this._updateInitialBounds()}updateWidth3D(e){this.width3D=e,this._updated(!1)}updateHeight3D(e){this.height3D=e,this._updated(!1)}draw(e){if(!this.renderObject)return;let t=new Q().setFromObject(this.renderObject,!0),i=new J;t.getCenter(i),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera);let{ctx:n}=e;n.translate(-this.globalWidth/2+this.width3D/2,-this.globalHeight/2+this.height3D/2),n.drawImage(this.renderer.domElement,0,0,this.globalWidth*devicePixelRatio,this.globalHeight*devicePixelRatio,0,0,this.globalWidth,this.globalHeight)}updateInitialBounds(e){super.updateInitialBounds(e),this.copiedBounds&&e.clear().addBounds(this.copiedBounds)}}class al extends as{constructor(e){var t;super({width:e.width,height:e.height}),f(this,"isRightAngleMode",!1),f(this,"columnWidth"),f(this,"columnHeight"),f(this,"rightAngleXRotate",20),f(this,"rightAngleYRotate",15),e.isRightAngleMode&&(this.isRightAngleMode=!0,this.camera=new ic(-200,200,-200,200)),this.columnWidth=e.width,this.columnHeight=e.height;let i=new ne;this.generateColumns(i,null!=(t=e.degree)?t:0),this.renderObject=i,this.scene.add(i)}setRightAngleRotateXDegree(e){this.isRightAngleMode&&(this.rightAngleXRotate=e,this.renderObject.clear(),this.generateColumns(this.renderObject,e))}setRightAngleRotateYDegree(e){this.isRightAngleMode&&(this.rightAngleYRotate=e,this.renderObject.clear(),this.generateColumns(this.renderObject,this.rightAngleXRotate),this.renderObject.rotation.x=(90+e)*Math.PI/180)}generateColumns(e,t){for(let i=0;i<5;i+=1){let n=new tz(new nY(this.getParallelogramShape(t,this.columnWidth),{depth:this.calcColumnHeightByRightAngleRotateDegrees()}),new nK({color:3468196}));n.position.x=40*i-100,e.add(n)}}getParallelogramShape(e,t){if(e<0||e>180)return this.getSquare(t);let i=e;e>90&&(i-=90);let n=i*Math.PI/180,a=Math.sin(n),o=Math.cos(n),s=new nA;return s.lineTo(t,0),s.lineTo(t+t*a,t*o),s.lineTo(t*a,t*o),s.lineTo(0,0),s}getSquare(e){let t=new nA;return t.lineTo(e,0),t.lineTo(e,e),t.lineTo(0,e),t.lineTo(0,0),t}calcColumnHeightByRightAngleRotateDegrees(){return this.columnHeight*(1+Math.sin(this.rightAngleYRotate/2*Math.PI/180))}}class ac extends n${constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,n){let a=this,o=new n2(a.manager);o.setPath(a.path),o.setRequestHeader(a.requestHeader),o.setWithCredentials(a.withCredentials),o.load(e,function(i){try{t(a.parse(i))}catch(t){n?n(t):console.error(t),a.manager.itemError(e)}},i,n)}parse(e){let t=this;function i(e,t,i,a,o,s,l,c){if(0==t||0==i)return void e.lineTo(c.x,c.y);a=a*Math.PI/180,t=Math.abs(t),i=Math.abs(i);let u=(l.x-c.x)/2,h=(l.y-c.y)/2,d=Math.cos(a)*u+Math.sin(a)*h,f=-Math.sin(a)*u+Math.cos(a)*h,p=t*t,m=i*i,g=d*d,v=f*f,y=g/p+v/m;if(y>1){let e=Math.sqrt(y);t*=e,i*=e,p=t*t,m=i*i}let x=p*v+m*g,_=Math.sqrt(Math.max(0,(p*m-x)/x));o===s&&(_=-_);let M=_*t*f/i,b=-_*i*d/t,S=Math.cos(a)*M-Math.sin(a)*b+(l.x+c.x)/2,w=Math.sin(a)*M+Math.cos(a)*b+(l.y+c.y)/2,T=n(1,0,(d-M)/t,(f-b)/i),E=n((d-M)/t,(f-b)/i,(-d-M)/t,(-f-b)/i)%(2*Math.PI);e.currentPath.absellipse(S,w,t,i,T,T+E,0===s,a)}function n(e,t,i,n){let a=Math.sqrt(e*e+t*t)*Math.sqrt(i*i+n*n),o=Math.acos(Math.max(-1,Math.min(1,(e*i+t*n)/a)));return e*n-t*i<0&&(o=-o),o}function a(e,t){t=Object.assign({},t);let i={};if(e.hasAttribute("class")){let t=e.getAttribute("class").split(/\s/).filter(Boolean).map(e=>e.trim());for(let e=0;e<t.length;e++)i=Object.assign(i,p["."+t[e]])}function n(n,a,o){void 0===o&&(o=function(e){return e.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),e}),e.hasAttribute(n)&&(t[a]=o(e.getAttribute(n))),i[n]&&(t[a]=o(i[n])),e.style&&""!==e.style[n]&&(t[a]=o(e.style[n]))}function a(e){return Math.max(0,Math.min(1,c(e)))}function o(e){return Math.max(0,c(e))}return e.hasAttribute("id")&&(i=Object.assign(i,p["#"+e.getAttribute("id")])),n("fill","fill"),n("fill-opacity","fillOpacity",a),n("fill-rule","fillRule"),n("opacity","opacity",a),n("stroke","stroke"),n("stroke-opacity","strokeOpacity",a),n("stroke-width","strokeWidth",o),n("stroke-linejoin","strokeLineJoin"),n("stroke-linecap","strokeLineCap"),n("stroke-miterlimit","strokeMiterLimit",o),n("visibility","visibility"),t}function o(e,t,i){let n;if("string"!=typeof e)throw TypeError("Invalid input: "+typeof e);let a=/[ \t\r\n]/,o=/[\d]/,s=/[-+]/,l=/\./,c=/,/,u=/e/i,h=/[01]/,d=0,f=!0,p="",m="",g=[];function v(e,t,i){let n=SyntaxError('Unexpected character "'+e+'" at index '+t+".");throw n.partial=i,n}function y(){""!==p&&(""===m?g.push(Number(p)):g.push(Number(p)*Math.pow(10,Number(m)))),p="",m=""}let x=e.length;for(let _=0;_<x;_++){if(n=e[_],Array.isArray(t)&&t.includes(g.length%i)&&h.test(n)){d=1,p=n,y();continue}if(0===d){if(a.test(n))continue;if(o.test(n)||s.test(n)){d=1,p=n;continue}if(l.test(n)){d=2,p=n;continue}c.test(n)&&(f&&v(n,_,g),f=!0)}if(1===d){if(o.test(n)){p+=n;continue}if(l.test(n)){p+=n,d=2;continue}if(u.test(n)){d=3;continue}s.test(n)&&1===p.length&&s.test(p[0])&&v(n,_,g)}if(2===d){if(o.test(n)){p+=n;continue}if(u.test(n)){d=3;continue}l.test(n)&&"."===p[p.length-1]&&v(n,_,g)}if(3===d){if(o.test(n)){m+=n;continue}if(s.test(n)){if(""===m){m+=n;continue}1===m.length&&s.test(m)&&v(n,_,g)}}a.test(n)?(y(),d=0,f=!1):c.test(n)?(y(),d=0,f=!0):s.test(n)?(y(),d=1,p=n):l.test(n)?(y(),d=2,p=n):v(n,_,g)}return y(),g}let s=["mm","cm","in","pt","pc","px"],l={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:12,pc:1,px:-1},px:{px:1}};function c(e){let i,n="px";if("string"==typeof e||e instanceof String)for(let t=0,i=s.length;t<i;t++){let i=s[t];if(e.endsWith(i)){n=i,e=e.substring(0,e.length-i.length);break}}return"px"===n&&"px"!==t.defaultUnit?i=l.in[t.defaultUnit]/t.defaultDPI:(i=l[n][t.defaultUnit])<0&&(i=l[n].in*t.defaultDPI),i*parseFloat(e)}function u(e){let t=e.elements;return t[0]*t[4]-t[1]*t[3]<0}function h(e){let t=e.elements;return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function d(e){let t=e.elements;return Math.sqrt(t[3]*t[3]+t[4]*t[4])}let f=[],p={},m=[],g=new P,v=new P,y=new P,x=new P,_=new C,M=new J,b=new P,S=new DOMParser().parseFromString(e,"image/svg+xml");return function e(t,n){if(1!==t.nodeType)return;let s=function(e){if(!(e.hasAttribute("transform")||"use"===e.nodeName&&(e.hasAttribute("x")||e.hasAttribute("y"))))return null;let t=function(e){let t=new P;if("use"===e.nodeName&&(e.hasAttribute("x")||e.hasAttribute("y"))){let i=c(e.getAttribute("x")),n=c(e.getAttribute("y"));t.translate(i,n)}if(e.hasAttribute("transform")){let i=e.getAttribute("transform").split(")");for(let e=i.length-1;e>=0;e--){let n=i[e].trim();if(""===n)continue;let a=n.indexOf("("),s=n.length;if(a>0&&a<s){let e=n.slice(0,a),t=o(n.slice(a+1));switch(g.identity(),e){case"translate":if(t.length>=1){let e=t[0],i=0;t.length>=2&&(i=t[1]),g.translate(e,i)}break;case"rotate":if(t.length>=1){let e=0,i=0,n=0;e=t[0]*Math.PI/180,t.length>=3&&(i=t[1],n=t[2]),v.makeTranslation(-i,-n),y.makeRotation(e),x.multiplyMatrices(y,v),v.makeTranslation(i,n),g.multiplyMatrices(v,x)}break;case"scale":if(t.length>=1){let e=t[0],i=e;t.length>=2&&(i=t[1]),g.scale(e,i)}break;case"skewX":1===t.length&&g.set(1,Math.tan(t[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":1===t.length&&g.set(1,0,0,Math.tan(t[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":6===t.length&&g.set(t[0],t[2],t[4],t[1],t[3],t[5],0,0,1)}}t.premultiply(g)}}return t}(e);return m.length>0&&t.premultiply(m[m.length-1]),b.copy(t),m.push(t),t}(t),l=!1,S=null;switch(t.nodeName){case"svg":case"g":n=a(t,n);break;case"style":!function(e){if(!(!e.sheet||!e.sheet.cssRules||!e.sheet.cssRules.length))for(let t=0;t<e.sheet.cssRules.length;t++){let i=e.sheet.cssRules[t];if(1!==i.type)continue;let n=i.selectorText.split(/,/gm).filter(Boolean).map(e=>e.trim());for(let e=0;e<n.length;e++){let t=Object.fromEntries(Object.entries(i.style).filter(([,e])=>""!==e));p[n[e]]=Object.assign(p[n[e]]||{},t)}}}(t);break;case"path":n=a(t,n),t.hasAttribute("d")&&(S=function(e){let t=new ao,n=new C,a=new C,s=new C,l=!0,c=!1,u=e.getAttribute("d");if(""===u||"none"===u)return null;let h=u.match(/[a-df-z][^a-df-z]*/ig);for(let e=0,u=h.length;e<u;e++){var d,f,p,m,g,v,y,x;let u,_=h[e],M=_.charAt(0),b=_.slice(1).trim();switch(!0===l&&(c=!0,l=!1),M){case"M":u=o(b);for(let e=0,i=u.length;e<i;e+=2)n.x=u[e+0],n.y=u[e+1],a.x=n.x,a.y=n.y,0===e?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),0===e&&s.copy(n);break;case"H":u=o(b);for(let e=0,i=u.length;e<i;e++)n.x=u[e],a.x=n.x,a.y=n.y,t.lineTo(n.x,n.y),0===e&&!0===c&&s.copy(n);break;case"V":u=o(b);for(let e=0,i=u.length;e<i;e++)n.y=u[e],a.x=n.x,a.y=n.y,t.lineTo(n.x,n.y),0===e&&!0===c&&s.copy(n);break;case"L":u=o(b);for(let e=0,i=u.length;e<i;e+=2)n.x=u[e+0],n.y=u[e+1],a.x=n.x,a.y=n.y,t.lineTo(n.x,n.y),0===e&&!0===c&&s.copy(n);break;case"C":u=o(b);for(let e=0,i=u.length;e<i;e+=6)t.bezierCurveTo(u[e+0],u[e+1],u[e+2],u[e+3],u[e+4],u[e+5]),a.x=u[e+2],a.y=u[e+3],n.x=u[e+4],n.y=u[e+5],0===e&&!0===c&&s.copy(n);break;case"S":u=o(b);for(let e=0,i=u.length;e<i;e+=4){t.bezierCurveTo((d=n.x,d-(a.x-d)),(f=n.y,f-(a.y-f)),u[e+0],u[e+1],u[e+2],u[e+3]),a.x=u[e+0],a.y=u[e+1],n.x=u[e+2],n.y=u[e+3],0===e&&!0===c&&s.copy(n)}break;case"Q":u=o(b);for(let e=0,i=u.length;e<i;e+=4)t.quadraticCurveTo(u[e+0],u[e+1],u[e+2],u[e+3]),a.x=u[e+0],a.y=u[e+1],n.x=u[e+2],n.y=u[e+3],0===e&&!0===c&&s.copy(n);break;case"T":u=o(b);for(let e=0,i=u.length;e<i;e+=2){let i=(p=n.x,p-(a.x-p)),o=(m=n.y,m-(a.y-m));t.quadraticCurveTo(i,o,u[e+0],u[e+1]),a.x=i,a.y=o,n.x=u[e+0],n.y=u[e+1],0===e&&!0===c&&s.copy(n)}break;case"A":u=o(b,[3,4],7);for(let e=0,o=u.length;e<o;e+=7){if(u[e+5]==n.x&&u[e+6]==n.y)continue;let o=n.clone();n.x=u[e+5],n.y=u[e+6],a.x=n.x,a.y=n.y,i(t,u[e],u[e+1],u[e+2],u[e+3],u[e+4],o,n),0===e&&!0===c&&s.copy(n)}break;case"m":u=o(b);for(let e=0,i=u.length;e<i;e+=2)n.x+=u[e+0],n.y+=u[e+1],a.x=n.x,a.y=n.y,0===e?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),0===e&&s.copy(n);break;case"h":u=o(b);for(let e=0,i=u.length;e<i;e++)n.x+=u[e],a.x=n.x,a.y=n.y,t.lineTo(n.x,n.y),0===e&&!0===c&&s.copy(n);break;case"v":u=o(b);for(let e=0,i=u.length;e<i;e++)n.y+=u[e],a.x=n.x,a.y=n.y,t.lineTo(n.x,n.y),0===e&&!0===c&&s.copy(n);break;case"l":u=o(b);for(let e=0,i=u.length;e<i;e+=2)n.x+=u[e+0],n.y+=u[e+1],a.x=n.x,a.y=n.y,t.lineTo(n.x,n.y),0===e&&!0===c&&s.copy(n);break;case"c":u=o(b);for(let e=0,i=u.length;e<i;e+=6)t.bezierCurveTo(n.x+u[e+0],n.y+u[e+1],n.x+u[e+2],n.y+u[e+3],n.x+u[e+4],n.y+u[e+5]),a.x=n.x+u[e+2],a.y=n.y+u[e+3],n.x+=u[e+4],n.y+=u[e+5],0===e&&!0===c&&s.copy(n);break;case"s":u=o(b);for(let e=0,i=u.length;e<i;e+=4){t.bezierCurveTo((g=n.x,g-(a.x-g)),(v=n.y,v-(a.y-v)),n.x+u[e+0],n.y+u[e+1],n.x+u[e+2],n.y+u[e+3]),a.x=n.x+u[e+0],a.y=n.y+u[e+1],n.x+=u[e+2],n.y+=u[e+3],0===e&&!0===c&&s.copy(n)}break;case"q":u=o(b);for(let e=0,i=u.length;e<i;e+=4)t.quadraticCurveTo(n.x+u[e+0],n.y+u[e+1],n.x+u[e+2],n.y+u[e+3]),a.x=n.x+u[e+0],a.y=n.y+u[e+1],n.x+=u[e+2],n.y+=u[e+3],0===e&&!0===c&&s.copy(n);break;case"t":u=o(b);for(let e=0,i=u.length;e<i;e+=2){let i=(y=n.x,y-(a.x-y)),o=(x=n.y,x-(a.y-x));t.quadraticCurveTo(i,o,n.x+u[e+0],n.y+u[e+1]),a.x=i,a.y=o,n.x=n.x+u[e+0],n.y=n.y+u[e+1],0===e&&!0===c&&s.copy(n)}break;case"a":u=o(b,[3,4],7);for(let e=0,o=u.length;e<o;e+=7){if(0==u[e+5]&&0==u[e+6])continue;let o=n.clone();n.x+=u[e+5],n.y+=u[e+6],a.x=n.x,a.y=n.y,i(t,u[e],u[e+1],u[e+2],u[e+3],u[e+4],o,n),0===e&&!0===c&&s.copy(n)}break;case"Z":case"z":t.currentPath.autoClose=!0,t.currentPath.curves.length>0&&(n.copy(s),t.currentPath.currentPoint.copy(n),l=!0);break;default:console.warn(_)}c=!1}return t}(t));break;case"rect":n=a(t,n),S=function(e){let t=c(e.getAttribute("x")||0),i=c(e.getAttribute("y")||0),n=c(e.getAttribute("rx")||e.getAttribute("ry")||0),a=c(e.getAttribute("ry")||e.getAttribute("rx")||0),o=c(e.getAttribute("width")),s=c(e.getAttribute("height")),l=new ao;return l.moveTo(t+n,i),l.lineTo(t+o-n,i),(0!==n||0!==a)&&l.bezierCurveTo(t+o-.448084975506*n,i,t+o,i+.448084975506*a,t+o,i+a),l.lineTo(t+o,i+s-a),(0!==n||0!==a)&&l.bezierCurveTo(t+o,i+s-.448084975506*a,t+o-.448084975506*n,i+s,t+o-n,i+s),l.lineTo(t+n,i+s),(0!==n||0!==a)&&l.bezierCurveTo(t+.448084975506*n,i+s,t,i+s-.448084975506*a,t,i+s-a),l.lineTo(t,i+a),(0!==n||0!==a)&&l.bezierCurveTo(t,i+.448084975506*a,t+.448084975506*n,i,t+n,i),l}(t);break;case"polygon":n=a(t,n),S=function(e){let t=new ao,i=0;return e.getAttribute("points").replace(/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,function(e,n,a){let o=c(n),s=c(a);0===i?t.moveTo(o,s):t.lineTo(o,s),i++}),t.currentPath.autoClose=!0,t}(t);break;case"polyline":n=a(t,n),S=function(e){let t=new ao,i=0;return e.getAttribute("points").replace(/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,function(e,n,a){let o=c(n),s=c(a);0===i?t.moveTo(o,s):t.lineTo(o,s),i++}),t.currentPath.autoClose=!1,t}(t);break;case"circle":n=a(t,n),S=function(e){let t=c(e.getAttribute("cx")||0),i=c(e.getAttribute("cy")||0),n=c(e.getAttribute("r")||0),a=new nE;a.absarc(t,i,n,0,2*Math.PI);let o=new ao;return o.subPaths.push(a),o}(t);break;case"ellipse":n=a(t,n),S=function(e){let t=c(e.getAttribute("cx")||0),i=c(e.getAttribute("cy")||0),n=c(e.getAttribute("rx")||0),a=c(e.getAttribute("ry")||0),o=new nE;o.absellipse(t,i,n,a,0,2*Math.PI);let s=new ao;return s.subPaths.push(o),s}(t);break;case"line":n=a(t,n),S=function(e){let t=c(e.getAttribute("x1")||0),i=c(e.getAttribute("y1")||0),n=c(e.getAttribute("x2")||0),a=c(e.getAttribute("y2")||0),o=new ao;return o.moveTo(t,i),o.lineTo(n,a),o.currentPath.autoClose=!1,o}(t);break;case"defs":l=!0;break;case"use":n=a(t,n);let w=(t.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),T=t.viewportElement.getElementById(w);T?e(T,n):console.warn("SVGLoader: 'use node' references non-existent node id: "+w)}S&&(void 0!==n.fill&&"none"!==n.fill&&S.color.setStyle(n.fill),function(e,t){function i(e){M.set(e.x,e.y,1).applyMatrix3(t),e.set(M.x,M.y)}let n=e.subPaths;for(let e=0,a=n.length;e<a;e++){let a=n[e].curves;for(let e=0;e<a.length;e++){let n=a[e];n.isLineCurve?(i(n.v1),i(n.v2)):n.isCubicBezierCurve?(i(n.v0),i(n.v1),i(n.v2),i(n.v3)):n.isQuadraticBezierCurve?(i(n.v0),i(n.v1),i(n.v2)):n.isEllipseCurve&&(_.set(n.aX,n.aY),i(_),n.aX=_.x,n.aY=_.y,function(e){let t=e.elements,i=t[0]*t[3]+t[1]*t[4];return 0!==i&&Math.abs(i/(h(e)*d(e)))>Number.EPSILON}(t)?function(e){let i=e.xRadius,n=e.yRadius,a=Math.cos(e.aRotation),o=Math.sin(e.aRotation),s=new J(i*a,i*o,0),l=new J(-n*o,n*a,0),c=s.applyMatrix3(t),h=l.applyMatrix3(t),d=g.set(c.x,h.x,0,c.y,h.y,0,0,0,1),f=v.copy(d).invert(),p=y.copy(f).transpose().multiply(f).elements,m=function(e,t,i){let n,a,o,s,l,c=e+i,u=e-i,h=Math.sqrt(u*u+4*t*t);return c>0?a=e*(l=1/(n=.5*(c+h)))*i-t*l*t:c<0?a=.5*(c-h):(n=.5*h,a=-.5*h),Math.abs(o=u>0?u+h:u-h)>2*Math.abs(t)?(s=1/Math.sqrt(1+(l=-2*t/o)*l),o=l*s):0===Math.abs(t)?(o=1,s=0):(o=1/Math.sqrt(1+(l=-.5*o/t)*l),s=l*o),u>0&&(l=o,o=-s,s=l),{rt1:n,rt2:a,cs:o,sn:s}}(p[0],p[1],p[4]),x=Math.sqrt(m.rt1),_=Math.sqrt(m.rt2);if(e.xRadius=1/x,e.yRadius=1/_,e.aRotation=Math.atan2(m.sn,m.cs),!((e.aEndAngle-e.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let i=v.set(x,0,0,0,_,0,0,0,1),n=y.set(m.cs,m.sn,0,-m.sn,m.cs,0,0,0,1),a=i.multiply(n).multiply(d),o=e=>{let{x:t,y:i}=new J(Math.cos(e),Math.sin(e),0).applyMatrix3(a);return Math.atan2(i,t)};e.aStartAngle=o(e.aStartAngle),e.aEndAngle=o(e.aEndAngle),u(t)&&(e.aClockwise=!e.aClockwise)}}(n):function(e){let i=h(t),n=d(t);e.xRadius*=i,e.yRadius*=n;let a=i>Number.EPSILON?Math.atan2(t.elements[1],t.elements[0]):Math.atan2(-t.elements[3],t.elements[4]);e.aRotation+=a,u(t)&&(e.aStartAngle*=-1,e.aEndAngle*=-1,e.aClockwise=!e.aClockwise)}(n))}}}(S,b),f.push(S),S.userData={node:t,style:n});let E=t.childNodes;for(let t=0;t<E.length;t++){let i=E[t];l&&"style"!==i.nodeName&&"defs"!==i.nodeName||e(i,n)}s&&(m.pop(),m.length>0?b.copy(m[m.length-1]):b.identity())}(S.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:f,xml:S.documentElement}}static createShapes(e){let t={loc:0,t:0};function i(e,i,n){let a=n.x-i.x,o=n.y-i.y,s=e.x-i.x,l=e.y-i.y,c=a*l-s*o;if(e.x===i.x&&e.y===i.y){t.loc=0,t.t=0;return}if(e.x===n.x&&e.y===n.y){t.loc=1,t.t=1;return}if(c<-Number.EPSILON){t.loc=3;return}if(c>Number.EPSILON){t.loc=4;return}if(a*s<0||o*l<0){t.loc=5;return}if(Math.sqrt(a*a+o*o)<Math.sqrt(s*s+l*l)){t.loc=6;return}t.loc=2,t.t=0!==a?s/a:l/o}let n=0x3b9ac9ff,a=-0x3b9ac9ff,o=e.subPaths.map(e=>{let t=e.getPoints(),i=-0x3b9ac9ff,o=0x3b9ac9ff,s=-0x3b9ac9ff,l=0x3b9ac9ff;for(let e=0;e<t.length;e++){let n=t[e];n.y>i&&(i=n.y),n.y<o&&(o=n.y),n.x>s&&(s=n.x),n.x<l&&(l=n.x)}return a<=s&&(a=s+1),n>=l&&(n=l-1),{curves:e.curves,points:t,isCW:nW.isClockWise(t),identifier:-1,boundingBox:new aa(new C(l,o),new C(s,i))}});o=o.filter(e=>e.points.length>1);for(let e=0;e<o.length;e++)o[e].identifier=e;let s=o.map(s=>(function(e,n,a,o,s){(null==s||""===s)&&(s="nonzero");let l=new C;e.boundingBox.getCenter(l);let c=function(e,n,a){let o=new C;n.getCenter(o);let s=[];return a.forEach(n=>{n.boundingBox.containsPoint(o)&&(function(e,n){let a=[],o=[];for(let s=1;s<e.length;s++){let l=e[s-1],c=e[s];for(let e=1;e<n.length;e++){let s=function(e,n,a,o){let s=e.x,l=n.x,c=a.x,u=o.x,h=e.y,d=n.y,f=a.y,p=o.y,m=(u-c)*(h-f)-(p-f)*(s-c),g=(p-f)*(l-s)-(u-c)*(d-h),v=m/g,y=((l-s)*(h-f)-(d-h)*(s-c))/g;if(0===g&&0!==m||v<=0||v>=1||y<0||y>1)return null;if(0===m&&0===g){for(let c=0;c<2;c++)if(i(0===c?a:o,e,n),0==t.loc){let e=0===c?a:o;return{x:e.x,y:e.y,t:t.t}}else if(2==t.loc)return{x:+(s+t.t*(l-s)).toPrecision(10),y:+(h+t.t*(d-h)).toPrecision(10),t:t.t};return null}for(let s=0;s<2;s++)if(i(0===s?a:o,e,n),0==t.loc){let e=0===s?a:o;return{x:e.x,y:e.y,t:t.t}}return{x:+(s+v*(l-s)).toPrecision(10),y:+(h+v*(d-h)).toPrecision(10),t:v}}(l,c,n[e-1],n[e]);null!==s&&void 0===a.find(e=>e.t<=s.t+Number.EPSILON&&e.t>=s.t-Number.EPSILON)&&(a.push(s),o.push(new C(s.x,s.y)))}}return o})(e,n.points).forEach(e=>{s.push({identifier:n.identifier,isCW:n.isCW,point:e})})}),s.sort((e,t)=>e.point.x-t.point.x),s}([new C(a,l.y),new C(o,l.y)],e.boundingBox,n);c.sort((e,t)=>e.point.x-t.point.x);let u=[],h=[];c.forEach(t=>{t.identifier===e.identifier?u.push(t):h.push(t)});let d=u[0].point.x,f=[],p=0;for(;p<h.length&&h[p].point.x<d;)f.length>0&&f[f.length-1]===h[p].identifier?f.pop():f.push(h[p].identifier),p++;if(f.push(e.identifier),"evenodd"===s){let t=f.length%2==0,i=f[f.length-2];return{identifier:e.identifier,isHole:t,for:i}}if("nonzero"===s){let t=!0,i=null,a=null;for(let e=0;e<f.length;e++){let o=f[e];t?(a=n[o].isCW,t=!1,i=o):a!==n[o].isCW&&(a=n[o].isCW,t=!0)}return{identifier:e.identifier,isHole:t,for:i}}console.warn('fill-rule: "'+s+'" is currently not implemented.')})(s,o,n,a,e.userData?e.userData.style.fillRule:void 0)),l=[];return o.forEach(e=>{if(!s[e.identifier].isHole){let t=new nA;t.curves=e.curves,s.filter(t=>t.isHole&&t.for===e.identifier).forEach(e=>{let i=o[e.identifier],n=new nE;n.curves=i.curves,t.holes.push(n)}),l.push(t)}}),l}static getStrokeStyle(e,t,i,n,a){return{strokeColor:t=void 0!==t?t:"#000",strokeWidth:e=void 0!==e?e:1,strokeLineJoin:i=void 0!==i?i:"miter",strokeLineCap:n=void 0!==n?n:"butt",strokeMiterLimit:a=void 0!==a?a:4}}static pointsToStroke(e,t,i,n){let a=[],o=[],s=[];if(0===ac.pointsToStrokeWithBuffers(e,t,i,n,a,o,s))return null;let l=new t_;return l.setAttribute("position",new td(a,3)),l.setAttribute("normal",new td(o,3)),l.setAttribute("uv",new td(s,2)),l}static pointsToStrokeWithBuffers(e,t,i,n,a,o,s,l){let c=new C,u=new C,h=new C,d=new C,f=new C,p=new C,m=new C,g=new C,v=new C,y=new C,x=new C,_=new C,M=new C,b=new C,S=new C,w=new C,T=new C;i=void 0!==i?i:12,n=void 0!==n?n:.001,l=void 0!==l?l:0;let E=(e=function(e){let t=!1;for(let i=1,a=e.length-1;i<a;i++)if(e[i].distanceTo(e[i+1])<n){t=!0;break}if(!t)return e;let i=[];i.push(e[0]);for(let t=1,a=e.length-1;t<a;t++)e[t].distanceTo(e[t+1])>=n&&i.push(e[t]);return i.push(e[e.length-1]),i}(e)).length;if(E<2)return 0;let A=e[0].equals(e[E-1]),P,L=e[0],R,D=t.strokeWidth/2,I=1/(E-1),U=0,O,N,k,z,F=!1,B=0,H=3*l,G=2*l;V(e[0],e[1],c).multiplyScalar(D),g.copy(e[0]).sub(c),v.copy(e[0]).add(c),y.copy(g),x.copy(v);for(let i=1;i<E;i++){if(P=e[i],R=i===E-1?A?e[1]:void 0:e[i+1],V(L,P,c),h.copy(c).multiplyScalar(D),_.copy(P).sub(h),M.copy(P).add(h),O=U+I,N=!1,void 0!==R){V(P,R,u),h.copy(u).multiplyScalar(D),b.copy(P).sub(h),S.copy(P).add(h),k=!0,h.subVectors(R,L),0>c.dot(h)&&(k=!1),1===i&&(F=k),h.subVectors(R,P),h.normalize();let e=Math.abs(c.dot(h));if(e>Number.EPSILON){let i=D/e;h.multiplyScalar(-i),d.subVectors(P,L),f.copy(d).setLength(i).add(h),w.copy(f).negate();let n=f.length(),a=d.length();d.divideScalar(a),p.subVectors(R,P);let o=p.length();switch(p.divideScalar(o),d.dot(w)<a&&p.dot(w)<o&&(N=!0),T.copy(f).add(P),w.add(P),z=!1,N?k?(S.copy(w),M.copy(w)):(b.copy(w),_.copy(w)):q(),t.strokeLineJoin){case"bevel":Y(k,N,O);break;case"round":X(k,N),k?j(P,_,b,O,0):j(P,S,M,O,1);break;default:let s=D*t.strokeMiterLimit/n;s<1?"miter-clip"!==t.strokeLineJoin?Y(k,N,O):(X(k,N),k?(p.subVectors(T,_).multiplyScalar(s).add(_),m.subVectors(T,b).multiplyScalar(s).add(b),W(_,O,0),W(p,O,0),W(P,O,.5),W(P,O,.5),W(p,O,0),W(m,O,0),W(P,O,.5),W(m,O,0),W(b,O,0)):(p.subVectors(T,M).multiplyScalar(s).add(M),m.subVectors(T,S).multiplyScalar(s).add(S),W(M,O,1),W(p,O,1),W(P,O,.5),W(P,O,.5),W(p,O,1),W(m,O,1),W(P,O,.5),W(m,O,1),W(S,O,1))):(N?(k?(W(v,U,1),W(g,U,0),W(T,O,0),W(v,U,1),W(T,O,0),W(w,O,1)):(W(v,U,1),W(g,U,0),W(T,O,1),W(g,U,0),W(w,O,0),W(T,O,1)),k?b.copy(T):S.copy(T)):k?(W(_,O,0),W(T,O,0),W(P,O,.5),W(P,O,.5),W(T,O,0),W(b,O,0)):(W(M,O,1),W(T,O,1),W(P,O,.5),W(P,O,.5),W(T,O,1),W(S,O,1)),z=!0)}}else q()}else q();A||i!==E-1||J(e[0],y,x,k,!0,U),U=O,L=P,g.copy(b),v.copy(S)}if(A){if(N&&a){let e=T,t=w;F!==k&&(e=w,t=T),k?(z||F)&&(t.toArray(a,0),t.toArray(a,9),z&&e.toArray(a,3)):(z||!F)&&(t.toArray(a,3),t.toArray(a,9),z&&e.toArray(a,0))}}else J(P,_,M,k,!1,O);return B;function V(e,t,i){return i.subVectors(t,e),i.set(-i.y,i.x).normalize()}function W(e,t,i){a&&(a[H]=e.x,a[H+1]=e.y,a[H+2]=0,o&&(o[H]=0,o[H+1]=0,o[H+2]=1),H+=3,s&&(s[G]=t,s[G+1]=i,G+=2)),B+=3}function j(e,t,n,a,o){c.copy(t).sub(e).normalize(),u.copy(n).sub(e).normalize();let s=Math.PI,l=c.dot(u);1>Math.abs(l)&&(s=Math.abs(Math.acos(l))),s/=i,h.copy(t);for(let t=0,n=i-1;t<n;t++)d.copy(h).rotateAround(e,s),W(h,a,o),W(d,a,o),W(e,a,.5),h.copy(d);W(d,a,o),W(n,a,o),W(e,a,.5)}function q(){W(v,U,1),W(g,U,0),W(_,O,0),W(v,U,1),W(_,O,1),W(M,O,0)}function Y(e,t,i){t?(e?(W(v,U,1),W(g,U,0),W(_,O,0),W(v,U,1),W(_,O,0),W(w,O,1),W(_,i,0),W(b,i,0)):(W(v,U,1),W(g,U,0),W(M,O,1),W(g,U,0),W(w,O,0),W(M,O,1),W(M,i,1),W(S,i,0)),W(w,i,.5)):(e?(W(_,i,0),W(b,i,0)):(W(M,i,1),W(S,i,0)),W(P,i,.5))}function X(e,t){t&&(e?(W(v,U,1),W(g,U,0),W(_,O,0),W(v,U,1),W(_,O,0),W(w,O,1),W(_,U,0),W(P,O,.5),W(w,O,1),W(P,O,.5),W(b,U,0),W(w,O,1)):(W(v,U,1),W(g,U,0),W(M,O,1),W(g,U,0),W(w,O,0),W(M,O,1),W(M,U,1),W(w,O,0),W(P,O,.5),W(P,O,.5),W(w,O,0),W(S,U,1)))}function J(e,i,n,o,s,l){switch(t.strokeLineCap){case"round":s?j(e,n,i,l,.5):j(e,i,n,l,.5);break;case"square":if(s)c.subVectors(i,e),u.set(c.y,-c.x),h.addVectors(c,u).add(e),d.subVectors(u,c).add(e),o?(h.toArray(a,3),d.toArray(a,0),d.toArray(a,9)):(h.toArray(a,3),h.toArray(a,9),d.toArray(a,0));else{c.subVectors(n,e),u.set(c.y,-c.x),h.addVectors(c,u).add(e),d.subVectors(u,c).add(e);let t=a.length;o?(h.toArray(a,t-3),d.toArray(a,t-6)):(h.toArray(a,t-6),d.toArray(a,t-3)),d.toArray(a,t-12)}}}}}let au={balanced:{key:{x:-6020,y:7770,z:9902,intensity:{x:1.7791748046875,y:1.7791748046875,z:1.7791748046875}},fill:{x:9921,y:1350,z:-9780,intensity:{x:.64697265625,y:.64697265625,z:.64697265625}},back:{x:6128,y:-16971,z:392,intensity:{x:1.7791748046875,y:1.7791748046875,z:1.7791748046875}},ambientIntensity:{x:0,y:0,z:0}},brightRoom:{key:{x:-2950,y:11900,z:8039,intensity:{x:1.4556884765625,y:1.4556884765625,z:1.4556884765625}},fill:{x:-1e3,y:0,z:-200,intensity:{x:1.7791748046875,y:1.7791748046875,z:1.7791748046875}},back:{x:1e3,y:0,z:-250,intensity:{x:1.7791748046875,y:1.7791748046875,z:1.7791748046875}},ambientIntensity:{x:0,y:0,z:0}},threePt:{key:{x:-1e4,y:-24500,z:27e3,intensity:{x:1.69830322265625,y:1.69830322265625,z:1.69830322265625}},fill:{x:1e4,y:35e3,z:2e4,intensity:{x:.62255859375,y:.62255859375,z:.62255859375}},back:{x:-1e4,y:2e4,z:-26500,intensity:{x:1.46484375,y:1.46484375,z:1.46484375}},ambientIntensity:{x:0,y:0,z:0}},twoPt:{key:{x:-6200,y:7700,z:9864,intensity:{x:1.2939453125,y:1.2939453125,z:1.2939453125}},fill:{x:3768,y:-13773,z:5998,intensity:{x:.40435791015625,y:.40435791015625,z:.40435791015625}},back:{x:0,y:0,z:0,intensity:{x:0,y:0,z:0}},ambientIntensity:{x:.24261474609375,y:.24261474609375,z:.24261474609375}},contrasting:{key:{x:-1,y:0,z:0,intensity:{x:1.4556884765625,y:1.4556884765625,z:1.4556884765625}},fill:{x:0,y:0,z:0,intensity:{x:0,y:0,z:0}},back:{x:1,y:0,z:0,intensity:{x:1.4556884765625,y:1.4556884765625,z:1.4556884765625}},ambientIntensity:{x:.970458984375,y:.970458984375,z:.970458984375}},flood:{key:{x:-16300,y:-4300,z:2490,intensity:{x:1.7791748046875,y:1.7791748046875,z:1.7791748046875}},fill:{x:2215,y:-4300,z:2490,intensity:{x:.8087158203125,y:.8087158203125,z:.8087158203125}},back:{x:-11566,y:8466,z:5936,intensity:{x:1.6265869140625,y:1.6265869140625,z:1.6265869140625}},ambientIntensity:{x:0,y:0,z:0}},harsh:{key:{x:-10325,y:9900,z:5970,intensity:{x:1.068115234375,y:1.068115234375,z:1.068115234375}},fill:{x:0,y:0,z:0,intensity:{x:0,y:0,z:0}},back:{x:-11066,y:9900,z:5970,intensity:{x:1.373291015625,y:1.373291015625,z:1.373291015625}},ambientIntensity:{x:0,y:0,z:0}},soft:{key:{x:3344,y:-9344,z:9839,intensity:{x:.72784423828125,y:.72784423828125,z:.72784423828125}},fill:{x:0,y:0,z:0,intensity:{x:0,y:0,z:0}},back:{x:0,y:0,z:0,intensity:{x:0,y:0,z:0}},ambientIntensity:{x:.6146240234375,y:.6146240234375,z:.6146240234375}}};function ah(e){return e/65536}class ad{constructor(e,t,i){var n,a;f(this,"lightConfigWithoutRotation"),f(this,"lightConfig"),this.lightType=e,this.material=t,this.camera=i,this.lightType=null!=(n=this.lightType)?n:"threePt",this.lightConfigWithoutRotation=JSON.parse(JSON.stringify(null!=(a=au[this.lightType])?a:au.threePt)),this.lightConfig=JSON.parse(JSON.stringify(this.lightConfigWithoutRotation))}transformColor(e,t){this.rotateLights(t);let i=new j(0,0,0,255),n=new j(0,0,0,255);return"hit"===this.material.type?[new j(this.material.diffuse.x,this.material.diffuse.y,this.material.diffuse.z,255),i,n]:[this.getColor0(e,i,n),i,n]}getColor0(e,t,i,n){let a,o,s,l=new j(0,0,0,255),c=this.getUseSpecularInfo(),u=this.getUseDiffInfo();if("sunset"===this.lightType&&"metal"===this.material.type&&(this.material.blendSpecular*=.1),"powder"===this.material.type)switch(this.lightType){case"threePt":this.material.shininess=10,this.material.blendDiffuse=.6,this.lightConfig.fill.intensity={x:ah(27200),y:ah(27200),z:ah(27200)},this.lightConfig.key.x=-1e4,this.lightConfig.key.y=-24500,this.lightConfig.key.z=-38e3;break;case"balanced":this.material.blendDiffuse=.5,this.material.emissiveIntensity.set(.27,.27,.27),this.lightConfig.key.intensity={x:ah(109180),y:ah(109180),z:ah(109180)},this.lightConfig.key.x=-6020,this.lightConfig.key.y=7770,this.lightConfig.key.z=11902,this.lightConfig.back.x=6128,this.lightConfig.back.y=-16971,this.lightConfig.back.z=1400,this.lightConfig.back.intensity={x:ah(93280),y:ah(93280),z:ah(93280)}}if("harsh"!==this.lightType||"matte"!==this.material.type&&"warmMatte"!==this.material.type&&"plastic"!==this.material.type||(this.lightConfig.key.intensity={x:87500/65526,y:87500/65536,z:87500/65536}),"harsh"===this.lightType&&"metal"===this.material.type&&(this.material.blendSpecular=.25,this.material.blendDiffuse=.85),a=this.lightConfig.ambientIntensity,o=this.material.ambient,(s=new J).x=a.x*o.x,s.y=a.y*o.y,s.z=a.z*o.z,l.add(new j(s.x,s.y,s.z,0)),l.add(function(e,t){let i=new j(0,0,0,0);return i.x=t.x*e.x,i.y=t.y*e.y,i.z=t.z*e.z,i}(this.material.emissiveIntensity,this.material.emissive)),l.add(this.calcDiffuse(this.lightConfig.fill.intensity,new J(this.lightConfig.fill.x,this.lightConfig.fill.y,this.lightConfig.fill.z),this.material.diffuse,e).multiplyScalar(this.material.blendDiffuse*u.fillUseDiff)),t.add(this.calcSpecular(this.lightConfig.fill.intensity,new J(this.lightConfig.fill.x,this.lightConfig.fill.y,this.lightConfig.fill.z),this.camera.position,this.material.specular,this.material.shininess,e).multiplyScalar(this.material.blendSpecular*c.fillUseSpecular)),l.add(this.calcDiffuse(this.lightConfig.key.intensity,new J(this.lightConfig.key.x,this.lightConfig.key.y,this.lightConfig.key.z),this.material.diffuse,e).multiplyScalar(this.material.blendDiffuse*u.keyUseDiff)),t.add(this.calcSpecular(this.lightConfig.key.intensity,new J(this.lightConfig.key.x,this.lightConfig.key.y,this.lightConfig.key.z),this.camera.position,this.material.specular,this.material.shininess,e).multiplyScalar(this.material.blendSpecular*c.keyUseSpecular)),l.add(this.calcDiffuse(this.lightConfig.back.intensity,new J(this.lightConfig.back.x,this.lightConfig.back.y,this.lightConfig.back.z),this.material.diffuse,e).multiplyScalar(this.material.blendDiffuse*u.backUseDiff)),t.add(this.calcSpecular(this.lightConfig.back.intensity,new J(this.lightConfig.back.x,this.lightConfig.back.y,this.lightConfig.back.z),this.camera.position,this.material.specular,this.material.shininess,e).multiplyScalar(this.material.blendSpecular*c.backUseSpecular)),i.copy(l),l.add(t),l.w=this.material.diffuse.w,t.w=this.material.diffuse.w,i.w=this.material.diffuse.w,this.material.alpha&&("clear"===this.material.type?t.w=i.w=l.w=255*this.W(this.camera.position,e,0)||20:"translucentPowder"===this.material.type?t.w=i.w=l.w=Math.min(.8*(255-255*this.W(this.camera.position,e,0)),135):t.w=i.w=l.w=255*(1-this.W(this.camera.position,e,1))-50),this.material.useDiffuseFresnel&&this.material.diffuseFresnel<0&&n){var h=this.V(this.material.diffFresnelExponent,this.camera.position,e),d=1-h,f=this.material.diffFresnelRatio*h*this.material.diffuseFresnel;l.x=l.x*d+f,l.y=l.y*d+f,l.z=l.z*d+f,t.x=t.x*d+f,t.y=t.y*d+f,t.z=t.z*d+f,i.x=i.x*d+f,i.y=i.y*d+f,i.z=i.z*d+f}if(this.material.useAlphaFresnel){var p=this.V(this.material.alphaFresnelExponent,this.camera.position,e),m=1-p,g=this.material.alphaFresnelRatio*p*this.material.alphaFresnel;l.w=l.w*m+g,t.w=t.w*m+g,i.w=i.w*m+g}return l}calcDiffuse(e,t,i,n,a){let o=new J(n.x,n.y,n.z).clone().normalize(),s=t.clone().normalize().dot(o);return s=a?.5*(s+1):s>0?s:0,0===n.x&&0===n.y&&(-1===n.z||1===n.z)&&(i={x:255,y:255,z:255}),new j(s*i.x*e.x,s*i.y*e.y,s*i.z*e.z,0)}calcSpecular(e,t,i,n,a,o){let s=new J(o.x,o.y,o.z).clone().normalize(),l=t.clone().normalize(),c=i.clone().setY(-i.y).normalize(),u=2*l.dot(s),h=new J;h.copy(s.multiplyScalar(u).sub(l));let d=h.clone().normalize().dot(c);return d=d>0?this.q(d,a):0,new j(e.x*n.x*d,e.y*n.y*d,e.z*n.z*d,0)}q(e,t){let i=e;for(;t>2;)if(t/=2,(i*=i)<1e-4)return 0;return Math.pow(i,t)}getUseDiffInfo(){let e={fillUseDiff:1,keyUseDiff:1,backUseDiff:1};return"flat"===this.lightType&&(e.fillUseDiff=0),("contrasting"===this.lightType||"brightRoom"===this.lightType||"flat"===this.lightType)&&(e.keyUseDiff=0),("flat"===this.lightType||"contrasting"===this.lightType)&&(e.backUseDiff=0),e}W(e,t,i){let n=e.clone().normalize(),a=new J(t.x,t.y,t.z).clone().normalize(),o=n.dot(a)/(n.length()*a.length());return o<0&&i?i:Math.acos(Math.abs(o))/1.5707963267948966}V(e,t,i){let n=t.clone().normalize(),a=new J(i.x,i.y,i.z).clone().normalize(),o=n.dot(a),s=Math.sqrt(1-o*o);return o<0?0:((s=this.q(s,e))>1&&(s=1),s)}getUseSpecularInfo(){let e={fillUseSpecular:1,keyUseSpecular:1,backUseSpecular:1};return("morning"===this.lightType||"sunrise"===this.lightType||"sunset"===this.lightType||"chilly"===this.lightType||"freezing"===this.lightType||"brightRoom"===this.lightType)&&(e.fillUseSpecular=0),("sunrise"===this.lightType||"sunset"===this.lightType||"brightRoom"===this.lightType)&&(e.backUseSpecular=0),e}rotateLights(e){let t=e*Math.PI/180;["fill","back","key"].forEach(e=>{let i=new J(this.lightConfigWithoutRotation[e].x,this.lightConfigWithoutRotation[e].y,this.lightConfigWithoutRotation[e].z),n=new J(0,0,1);i.applyAxisAngle(n,t),this.lightConfig[e].x=i.x,this.lightConfig[e].y=i.y,this.lightConfig[e].z=i.z})}}class af{constructor(e,t,i){var n,a;switch(f(this,"type"),f(this,"alpha",!1),f(this,"alphaFresnel",0),f(this,"alphaFresnelExponent",1),f(this,"alphaFresnelRatio",1),f(this,"useAlphaFresnel",!1),f(this,"ambient",new j),f(this,"blendDiffuse",1),f(this,"blendSpecular",1),f(this,"diffFresnelExponent",1),f(this,"diffFresnelRatio",1),f(this,"diffuse",new j),f(this,"diffuseFresnel",0),f(this,"useDiffuseFresnel",!1),f(this,"emissive",new j),f(this,"emissiveIntensity",new J),f(this,"shininess",0),f(this,"specular",new j),this.type=e,null!=i&&i.isExtrusion||"hit"===e?(this.ambient.set(255*t.r,255*t.g,255*t.b,null!=(n=null==i?void 0:i.extrusionColorAlpha)?n:255),this.diffuse.set(255*t.r,255*t.g,255*t.b,null!=(a=null==i?void 0:i.extrusionColorAlpha)?a:255)):(this.ambient.set(255,255,255,255),this.diffuse.set(255,255,255,255)),this.type){case"clear":this.specular=new j(211,211,211,255),this.shininess=10,this.alpha=!0,this.blendDiffuse=.6,this.blendSpecular=.6,this.diffuseFresnel=-8,this.diffFresnelExponent=100,this.diffFresnelRatio=-5,this.alphaFresnel=1,this.alphaFresnelExponent=7,this.alphaFresnelRatio=60,this.useDiffuseFresnel=!0;break;case"darkEdge":this.specular=new j(255,255,255,255),this.shininess=45,this.diffuseFresnel=-2,this.blendDiffuse=.67,this.useDiffuseFresnel=!0,this.diffFresnelExponent=15,this.diffFresnelRatio=-20;break;case"flat":this.specular=new j(243,243,243,255),this.shininess=90,this.diffuse=new j(0,0,0,255),this.ambient=new j(0,0,0,255),this.emissive=new j(255*t.r,255*t.g,255*t.b,255),this.emissiveIntensity=new J(1,1,1),this.diffuseFresnel=-4,this.useDiffuseFresnel=!0,this.diffFresnelExponent=17,this.diffFresnelRatio=-22;break;case"matte":this.specular=new j(0,0,0,0),this.shininess=1,this.blendDiffuse=.6875,this.blendSpecular=.3125;break;case"metal":this.specular=function(e){return new j(255*e.r+382.5,255*e.g+382.5,255*e.b+382.5,255)}(t),this.shininess=12,this.diffuseFresnel=4,this.useDiffuseFresnel=!0,this.diffFresnelExponent=30,this.diffFresnelRatio=65,this.blendDiffuse=.71,this.blendSpecular=.17;break;case"plastic":this.specular=new j(211,211,211,255),this.shininess=12,this.blendDiffuse=.67,this.blendSpecular=.52;break;case"powder":this.specular=new j(169,169,169,255),this.shininess=5;let o=null!=i&&i.isExtrusion?.4:1,s=null!=i&&i.isExtrusion?250:190,l=null!=i&&i.isExtrusion?.6*s:0;this.ambient=new j(255*t.r*o,255*t.g*o,255*t.b*o,255),this.ambient.add(new j(l,l,l,255)),this.diffuse=new j(255*t.r*o,255*t.g*o,255*t.b*o,255),this.diffuse.add(new j(l,l,l,255)),this.emissive=new j(s,s,s,255),this.emissiveIntensity=new J(.2,.2,.2),this.blendDiffuse=.45,this.blendSpecular=.35,this.diffuseFresnel=2,this.diffFresnelExponent=35,this.diffFresnelRatio=140;break;case"softEdge":this.specular=new j(255,255,255,255),this.shininess=35,this.blendDiffuse=.67,this.diffuseFresnel=4,this.alphaFresnel=-10,this.useDiffuseFresnel=!0,this.diffFresnelExponent=17,this.diffFresnelRatio=65,this.useAlphaFresnel=!0,this.alphaFresnelExponent=62,this.alphaFresnelRatio=-10;break;case"softMetal":this.specular=function(e,t){return new j(255*e.r+127.5,255*e.g+127.5,255*e.b+255*t,255)}(t,.5),this.shininess=8;break;case"translucentPowder":this.specular=new j(169,169,169,255),this.shininess=10,this.alpha=!0,this.blendDiffuse=.85,this.diffuseFresnel=2,this.diffFresnelExponent=35,this.diffFresnelRatio=100,this.alphaFresnel=-1,this.alphaFresnelExponent=7,this.alphaFresnelRatio=60,this.useDiffuseFresnel=!0;break;default:this.specular=new j(169,169,169,255),this.shininess=8,this.blendDiffuse=.6875,this.blendSpecular=.3125}}}class ap extends t_{constructor(e=new nA([new C(.5,.5),new C(-.5,.5),new C(-.5,-.5),new C(.5,-.5)]),t){var i,n,a,o,s,l;super(),f(this,"parameters",{}),f(this,"verticesArray",[]),f(this,"lightaArray",[]),f(this,"light1Array",[]),f(this,"light2Array",[]),f(this,"isExtrusionArray",[]),f(this,"lightAngle",0),f(this,"mainColorTransformer"),f(this,"sideColorTransformer"),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let c=this,u=[];for(let i=0,n=e.length;i<n;i++)!function(e){var i,n;let a=[],o=void 0!==t.curveSegments?t.curveSegments:50,s=void 0!==t.steps?t.steps:1,l=void 0!==t.depth?t.depth:1,h=void 0===t.bevelEnabled||t.bevelEnabled,d=e.extractPoints(o),f=d.shape,p=d.holes;if(!nW.isClockWise(f)){f=f.reverse();for(let e=0,t=p.length;e<t;e++){let t=p[e];nW.isClockWise(t)&&(p[e]=t.reverse())}}let m=nW.triangulateShape(f,p),g=f;for(let e=0,t=p.length;e<t;e++){let t=p[e];f=f.concat(t)}function v(e,t,i){return t||console.error("ExtrudeGeometry: vec does not exist"),e.clone().addScaledVector(t,i)}let y=f.length,x=m.length;function _(e,t,i){let n,a,o,s=e.x-t.x,l=e.y-t.y,c=i.x-e.x,u=i.y-e.y,h=s*s+l*l;if(Math.abs(s*u-l*c)>Number.EPSILON){let d=Math.sqrt(h),f=Math.sqrt(c*c+u*u),p=t.x-l/d,m=t.y+s/d,g=((i.x-u/f-p)*u-(i.y+c/f-m)*c)/(s*u-l*c),v=(n=p+s*g-e.x)*n+(a=m+l*g-e.y)*a;if(v<=2)return new C(n,a);o=Math.sqrt(v/2)}else{let e=!1;s>Number.EPSILON?c>Number.EPSILON&&(e=!0):s<-Number.EPSILON?c<-Number.EPSILON&&(e=!0):Math.sign(l)===Math.sign(u)&&(e=!0),e?(n=-l,a=s,o=Math.sqrt(h)):(n=s,a=l,o=Math.sqrt(h/2))}return new C(n/o,a/o)}let M=[];for(let e=0,t=g.length,i=t-1,n=e+1;e<t;e++,i++,n++)i===t&&(i=0),n===t&&(n=0),M[e]=_(g[e],g[i],g[n]);let b=[],S,w=M.concat();for(let e=0,t=p.length;e<t;e++){let t=p[e];S=[];for(let e=0,i=t.length,n=i-1,a=e+1;e<i;e++,n++,a++)n===i&&(n=0),a===i&&(a=0),S[e]=_(t[e],t[n],t[a]);b.push(S),w=w.concat(S)}let{frontFrustum:T}=t;if(T){let{thickness:e,width:t}=T,n=(null!=(i=T.bevelFunction)?i:Math.sin)(Math.PI/2)-t;for(let t=0,i=g.length;t<i;t++){let i=v(g[t],M[t],n);P(i.x,i.y,-e)}for(let t=0,i=p.length;t<i;t++){let i=p[t];S=b[t];for(let t=0,a=i.length;t<a;t++){let a=v(i[t],S[t],n);P(a.x,a.y,-e)}}}for(let e=0;e<y;e++){let t=h?v(f[e],w[e],0):f[e];P(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<y;t++){let i=h?v(f[t],w[t],0):f[t];P(i.x,i.y,l/s*e)}let{backFrustum:E}=t;if(E){let{thickness:e,width:t}=E,i=(null!=(n=E.bevelFunction)?n:Math.sin)(Math.PI/2)-t;for(let t=0,n=g.length;t<n;t++){let n=v(g[t],M[t],i);P(n.x,n.y,l+e)}for(let t=0,n=p.length;t<n;t++){let n=p[t];S=b[t];for(let t=0,a=n.length;t<a;t++){let a=v(n[t],S[t],i);P(a.x,a.y,l+e)}}}function A(e,i){var n,a,o,l;let u=e.length;for(;--u>=0;){let h=u,d=u-1;d<0&&(d=e.length-1);for(let e=0,u=s+(null!=(a=null==(n=t.frontFrustum)?void 0:n.thickness)?a:0)+(null!=(l=null==(o=t.backFrustum)?void 0:o.thickness)?l:0);e<u;e++){let t=y*e,n=y*(e+1);(function(e,t,i,n){D(e),D(t),D(n),D(t),D(i),D(n);let a=c.verticesArray.length/3,o=am.generateSideWallUV(c.verticesArray,a-6,a-3,a-2,a-1);I(o[0]),I(o[1]),I(o[3]),I(o[1]),I(o[2]),I(o[3])})(i+h+t,i+d+t,i+d+n,i+h+n),R(!0,6)}}}function P(e,t,i){a.push(e),a.push(t),a.push(i)}function L(e,t,i){D(e),D(t),D(i);let n=c.verticesArray.length/3,a=am.generateTopUV(c.verticesArray,n-3,n-2,n-1);I(a[0]),I(a[1]),I(a[2])}function R(e,t){Array.from({length:t}).forEach(()=>c.isExtrusionArray.push(+!!e))}function D(e){c.verticesArray.push(a[3*e+0]),c.verticesArray.push(a[3*e+1]),c.verticesArray.push(a[3*e+2])}function I(e){u.push(e.x),u.push(e.y)}(function(){var e,i;let n=c.verticesArray.length/3;if(h){let n=0*y;for(let e=0;e<x;e++){let i=m[e];L(i[2]+n,i[1]+n,i[0]+n),R(t.isHit,3)}n=y*(s+(null!=(e=t.frontFrustum)&&e.thickness?1:0)+(null!=(i=t.backFrustum)&&i.thickness?1:0));for(let e=0;e<x;e++){let i=m[e];L(i[0]+n,i[1]+n,i[2]+n),R(t.isHit,3)}}else{for(let e=0;e<x;e++){let i=m[e];L(i[2],i[1],i[0]),R(t.isHit,3)}for(let e=0;e<x;e++){let i=m[e];L(i[0]+y*s,i[1]+y*s,i[2]+y*s),R(t.isHit,3)}}c.addGroup(n,c.verticesArray.length/3-n,0)})(),function(){let e=c.verticesArray.length/3,t=0;A(g,0),t+=g.length;for(let e=0,i=p.length;e<i;e++){let i=p[e];A(i,t),t+=i.length}c.addGroup(e,c.verticesArray.length/3-e,1)}()}(e[i]);let h=null!=(i=t.mainColor)?i:"black",d=null!=(n=t.sideColor)?n:h,p=null!=(a=t.lightType)?a:"threePt",m=null!=(o=t.materialType)?o:"warmMatte",g=t.camera,v=new af(m,new tn(h)),y=new af(m,new tn(d),{isExtrusion:!0,extrusionColorAlpha:255*!!t.sideColor});if(null!=(s=t.isHit)&&s){let e=new af("hit",new tn(null!=(l=t.hitColor)?l:"black"));this.mainColorTransformer=new ad(p,e,g),this.sideColorTransformer=this.mainColorTransformer}else this.mainColorTransformer=new ad(p,v,g),this.sideColorTransformer=new ad(p,y,g);this.lightAngle=t.lightRotation,this.setAttribute("position",new td(this.verticesArray,3)),this.setAttribute("u_position",new td(this.verticesArray,3)),this.setAttribute("a_isExtrusion",new td(this.isExtrusionArray,1)),this.update()}update(){this.lightaArray=[],this.light1Array=[],this.light2Array=[];let e=new e8,t=new J;for(let i=0;i<this.verticesArray.length;i+=9)e.set(new J(this.verticesArray[i],this.verticesArray[i+1],this.verticesArray[i+2]),new J(this.verticesArray[i+3],this.verticesArray[i+4],this.verticesArray[i+5]),new J(this.verticesArray[i+6],this.verticesArray[i+7],this.verticesArray[i+8])),e.getNormal(t),this.addColor([t.x,t.y,t.z],3);this.setAttribute("a_lighta",new td(this.lightaArray,4)),this.setAttribute("a_light1",new td(this.light1Array,4)),this.setAttribute("a_light2",new td(this.light2Array,4))}addColor(e,t){e[2]<0&&e[2]+1<=Number.EPSILON?e[2]=-1:e[2]>0&&1-e[2]<=Number.EPSILON&&(e[2]=1);let i=(0===e[0]&&0===e[1]&&(-1===e[2]||1===e[2])?this.mainColorTransformer:this.sideColorTransformer).transformColor({x:e[0],y:-e[1],z:e[2]},this.lightAngle);for(let e=0;e<t;e+=1)this.lightaArray.push(i[0].x/255,i[0].y/255,i[0].z/255,i[0].w/255),this.light1Array.push(i[1].x/255,i[1].y/255,i[1].z/255,i[1].w/255),this.light2Array.push(i[2].x/255,i[2].y/255,i[2].z/255,i[2].w/255)}}let am={generateTopUV:function(e,t,i,n){let a=e[3*t],o=e[3*t+1],s=e[3*i],l=e[3*i+1],c=e[3*n],u=e[3*n+1];return[new C(a,o),new C(s,l),new C(c,u)]},generateSideWallUV:function(e,t,i,n,a){let o=e[3*t],s=e[3*t+1],l=e[3*t+2],c=e[3*i],u=e[3*i+1],h=e[3*i+2],d=e[3*n],f=e[3*n+1],p=e[3*n+2],m=e[3*a],g=e[3*a+1],v=e[3*a+2];return Math.abs(s-u)<Math.abs(o-c)?[new C(o,1-l),new C(c,1-h),new C(d,1-p),new C(m,1-v)]:[new C(s,1-l),new C(u,1-h),new C(f,1-p),new C(g,1-v)]}},ag=function(){try{let e=document.createElement("canvas");if(!(e.getContext("webgl")||e.getContext("webgl2")))throw"gl created error";return new ns({alpha:!0,antialias:!0,preserveDrawingBuffer:!1})}catch(e){return null}}(),av=`uniform float u_width;
uniform float u_height;
attribute vec4 a_lighta;
attribute vec4 a_light1;
attribute vec4 a_light2;
attribute float a_isExtrusion;
varying vec4 v_Lighta;
varying vec4 v_Light1;
varying vec4 v_Light2;
varying float v_isExtrusion;
varying vec2 v_position;

void main() {
    vec4 v = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vec4 textureV = projectionMatrix * vec4(position, 1.0);
    v_position = vec2((textureV.x) / u_width, (textureV.y) / u_height + 1.0);
    gl_Position = v;
    v_Lighta = a_lighta;
    v_Light1 = a_light1;
    v_Light2 = a_light2;
    v_isExtrusion = a_isExtrusion;
    // gl_PointSize = 2.0;
}
`,ay=`#ifdef GL_ES
precision highp float;
#endif

uniform bool u_useLight;
uniform sampler2D u_texture;
varying vec4 v_Lighta;
varying vec4 v_Light1;
varying vec4 v_Light2;
varying float v_isExtrusion;
varying vec2 v_position;

float valid8BitColor(float c) {
    return (c < 0.0 ? 0.0 : (c > 255.0 ? 255.0 : c));
}

vec4 transColor(vec4 org, vec4 light[3]) {
    float a = org.a, r = org.r, g = org.g, b = org.b;
    float e = light[0].w;

    if (e > 1.0) {
        a = a * e;
    } else {
        a = a * light[2].w;
    }

    r = r * light[2].x + light[1].x;
    g = g * light[2].y + light[1].y;
    b = b * light[2].z + light[1].z;

    return vec4(valid8BitColor(r), valid8BitColor(g), valid8BitColor(b), valid8BitColor(a));
}

void main() {
    vec4 light[3];
    light[0] = v_Lighta;
    light[1] = v_Light1;
    light[2] = v_Light2;
    if (v_isExtrusion != 1.0) {
        vec4 color = texture2D(u_texture, v_position);
        if (u_useLight) {
            gl_FragColor = transColor(color, light);
        } else {
            gl_FragColor = color;
        }
    } else {
        // gl_FragColor = vec4(valid8BitColor(v_Lighta[0]), valid8BitColor(v_Lighta[1]), valid8BitColor(v_Lighta[2]), valid8BitColor(v_Lighta[3]));
        gl_FragColor = v_Lighta;
    }
}`;class ax extends a.q9{constructor(e){var t,i,n,o,s,l;super(),f(this,"scene"),f(this,"hitScene"),f(this,"camera"),f(this,"lights",[]),f(this,"loader"),f(this,"renderObject"),f(this,"hitRenderObject"),f(this,"globalWidth",window.innerWidth),f(this,"globalHeight",window.innerHeight),f(this,"path"),f(this,"depth"),f(this,"width3D"),f(this,"height3D"),f(this,"rotation3D",{x:0,y:0,z:0}),f(this,"copiedBounds"),f(this,"solidFill"),f(this,"depthFill"),f(this,"frontFrustum"),f(this,"backFrustum"),f(this,"lightType"),f(this,"lightRotationAngle"),f(this,"materialType"),f(this,"cacheImage",null),f(this,"hitCacheImage",null),f(this,"isMainDirty",!1),f(this,"isHitDirty",!1),f(this,"texture"),f(this,"useLight",!0),this.cache.rendering=a.TY.Never,this.path=e.path,this.depth=e.depth,this.width3D=e.baseWidth,this.height3D=e.baseHeight,this.solidFill=null!=(t=e.solidFill)?t:"black",this.depthFill=null!=(i=e.depthFill)?i:this.solidFill,e.rotation3D&&(this.rotation3D=d(d({},this.rotation3D),e.rotation3D)),this.frontFrustum=d({thickness:0,width:0},e.frontFrustum),this.backFrustum=d({thickness:0,width:0},e.backFrustum),this.lightType=null!=(n=e.lightType)?n:"threePt",this.lightRotationAngle=null!=(o=e.lightRotationAngle)?o:0,this.materialType=null!=(s=e.materialType)?s:"warmMatte",this.texture=e.texture,this.useLight=null==(l=e.useLight)||l,this.scene=new nl,this.hitScene=new nl,this.camera=new ic(-this.globalWidth/2,this.globalWidth/2,this.globalHeight/2,-this.globalHeight/2,.01,141732.28346456695),this.camera.position.set(0,0,14173.228346456695),this.camera.up.set(0,1,0),this.camera.lookAt(0,0,0),ag&&(ag.setPixelRatio(window.devicePixelRatio),ag.setSize(this.globalWidth,this.globalHeight),ag.outputEncoding=3001),this.loader=new ac,this.calcRotation(),this.isMainDirty=!0,this.isHitDirty=!0,this._updated()}update(e){this.shouldRerenderOnUpdate(e)&&(this.isMainDirty=!0,this.isHitDirty=!0,(e.rotation3D||e.path||"number"==typeof e.depth||e.solidFill||e.depthFill||e.frontFrustum||e.backFrustum||e.lightType||e.lightRotationAngle||e.materialType||e.texture)&&(e.path&&(this.path=e.path),"number"==typeof e.depth&&(this.depth=e.depth),e.solidFill&&(this.solidFill=e.solidFill,this.lights.forEach(t=>{t.color=new tn(e.solidFill)})),e.solidFill&&(this.solidFill=e.solidFill),e.depthFill&&(this.depthFill=e.depthFill),e.frontFrustum&&(this.frontFrustum=d(d({thickness:0,width:0},this.frontFrustum),e.frontFrustum)),e.backFrustum&&(this.backFrustum=d(d({thickness:0,width:0},this.backFrustum),e.backFrustum)),e.lightType&&(this.lightType=e.lightType),e.lightRotationAngle&&(this.lightRotationAngle=e.lightRotationAngle),void 0!==e.materialType&&(this.materialType=e.materialType),void 0!==e.texture&&(this.texture=e.texture)),(e.lightType||e.solidFill||e.lightRotationAngle)&&this.updateLightConfig(),e.baseWidth&&(this.width3D=e.baseWidth),e.baseHeight&&(this.height3D=e.baseHeight),e.rotation3D&&(this.rotation3D=d(d({},this.rotation3D),e.rotation3D),this.calcRotation()),Object.keys(e).length&&(this.cacheImage=null,this.hitCacheImage=null,this._boundsUpdated(),this._updated()))}copyBounds(e){this.copiedBounds=e,this._boundsUpdated(),this._updateInitialBounds()}draw(e){super.draw(e),this.isMainDirty&&(this.reloadSVG(),this.calcRotation(),this.isMainDirty=!1),this.drawObject(e,this.renderObject,this.scene,this.cacheImage,e=>this.cacheImage=e)}drawHit(e){super.drawHit(e),this.isHitDirty&&(this.reloadSVG(!0),this.isHitDirty=!1),this.drawObject(e,this.hitRenderObject,this.hitScene,this.hitCacheImage,e=>this.hitCacheImage=e)}updateInitialBounds(e){super.updateInitialBounds(e),this.copiedBounds&&e.clear().addBounds(this.copiedBounds)}drawObject(e,t,i,n,a){var o;if(!t)return;this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix();let s=null!=(o=null!=n?n:null==ag?void 0:ag.domElement)?o:null;n||(null==ag||ag.render(i,this.camera),null!=ag&&ag.domElement&&createImageBitmap(ag.domElement).then(e=>{a(e),s=e}));let{ctx:l}=e;e.commit(),l.translate(this.width3D/2,this.height3D/2),e.commit(),l.rotate(-this.rotation3D.z),e.commit(),l.translate(-this.globalWidth/2*2,-this.globalHeight/2*2),e.commit(),l.translate(this.x,this.y),s&&l.drawImage(s,0,0,this.globalWidth*devicePixelRatio,this.globalHeight*devicePixelRatio,0,0,2*this.globalWidth,2*this.globalHeight)}reloadSVG(e){var t,i;let n=this.addSvgTags(this.path),a=this.loader.parse(n).paths,o=new ne;for(let n=0;n<a.length;n++){let s=a[n],l=new tn(this.solidFill),c=new J(l.r,l.g,l.b),u=ac.createShapes(s);for(let n=0;n<u.length;n++){let a,s,l=u[n];this.isFrustumValid(this.backFrustum)&&(a=this.backFrustum),this.isFrustumValid(this.frontFrustum)&&(s=this.frontFrustum);let h=new ap(l,{depth:this.depth/2,frontFrustum:a,backFrustum:s,lightType:this.lightType,camera:this.camera,mainColor:this.solidFill,sideColor:this.depthFill,lightRotation:this.lightRotationAngle,materialType:this.materialType,isHit:e,hitColor:null!=(t=this.colorKey)?t:void 0}),d=new J;h.computeBoundingBox(),null==(i=h.boundingBox)||i.getCenter(d);let f=new tz(h,new tq({vertexShader:av,fragmentShader:ay,uniforms:{u_color:{value:c},u_texture:{value:new nc(this.texture)},u_width:{value:this.width3D/this.globalWidth*2/2},u_height:{value:this.height3D/this.globalHeight*2/2},u_useLight:{value:this.useLight}}}));o.add(f)}}o.position.set(-this.width3D/2/2,this.height3D/2/2,0),e?(this.hitRenderObject&&(this.hitRenderObject.removeFromParent(),this.hitRenderObject=void 0),this.hitScene.add(o),this.hitRenderObject=o):(this.renderObject&&(this.renderObject.removeFromParent(),this.renderObject=void 0),this.scene.add(o),this.renderObject=o)}calcRotation(){this.renderObject&&(this.camera.position.x=14173.228346456695*Math.sin(this.rotation3D.x),this.camera.position.z=14173.228346456695*Math.cos(this.rotation3D.x),this.rotation3D.y>90*Math.PI/180&&this.rotation3D.y<270*Math.PI/180?this.camera.up.y=-1:this.camera.up.y=1,this.camera.position.y=14173.228346456695*Math.sin(this.rotation3D.y),this.camera.position.x*=Math.cos(this.rotation3D.y),this.camera.position.z*=Math.cos(this.rotation3D.y),this.camera.updateProjectionMatrix())}addSvgTags(e){let t="";return e.forEach(e=>{var i,n;let a=.5*(null!=(i=e.scale[0])?i:1),o=.5*(null!=(n=e.scale[1])?n:1);t+=`<path ${e.isStroke?'fill="none"':""} transform="scale(${a}, -${o})" d="${e.path}" />`}),`<svg>${t}</svg>`}shouldRerenderOnUpdate(e){var t,i,n;let a=!this.arePathsEqual(this.path,e.path),o=void 0!==e.depth&&this.depth!==e.depth,s=void 0!==e.baseWidth&&this.width3D!==e.baseWidth,l=void 0!==e.baseHeight&&this.height3D!==e.baseHeight,c=!1;c=(c=(c=(null==(t=e.rotation3D)?void 0:t.x)!==void 0&&this.rotation3D.x!==e.rotation3D.x)||(null==(i=e.rotation3D)?void 0:i.y)!==void 0&&this.rotation3D.y!==e.rotation3D.y)||(null==(n=e.rotation3D)?void 0:n.z)!==void 0&&this.rotation3D.z!==e.rotation3D.z,this.isHitDirty=a||o||s||l||c;let u=void 0!==e.solidFill&&this.solidFill!==e.solidFill,h=void 0!==e.depthFill&&this.depthFill!==e.depthFill,d=void 0!==e.lightType&&this.lightType!==e.lightType,f=void 0!==e.lightRotationAngle&&this.lightRotationAngle!==e.lightRotationAngle,p=void 0!==e.materialType&&this.materialType!==e.materialType,m=void 0!==e.frontFrustum,g=void 0!==e.frontFrustum,v=!!e.texture;return a||o||s||l||c||u||h||d||f||p||m||g||v}arePathsEqual(e,t){if(typeof e!=typeof t)return!1;if(void 0===e)return!0;let i=!1,n=[...t].sort();return i=!0,[...e].sort().forEach((e,t)=>{i=i&&e===n[t]}),i}isFrustumValid(e){return 0!==this.depth&&!!(null!=e&&e.thickness)}updateLightConfig(){this.lights.forEach(e=>{this.solidFill&&e.color.set(this.solidFill)})}}let a_=["balanced","contrasting","soft","threePt","twoPt","sunset","sunrise","harsh","flat","brightRoom","chilly","freezing","morning","flood"],aM={balanced:"平衡",contrasting:"对比",soft:"柔和",threePt:"三点",twoPt:"两点"},ab=["matte","warmMatte","plastic","metal","powder","clear","darkEdge","flat","softEdge","softMetal","translucentPowder"],aS={matte:"亚光效果",warmMatte:"暖色粗糙",metal:"金属",plastic:"塑胶"},aw=["orthographicFront","isometricTopUp","isometricTopDown","isometricBottomUp","isometricBottomDown","isometricLeftUp","isometricLeftDown","isometricRightUp","isometricRightDown","isometricOffAxis1Left","isometricOffAxis1Right","isometricOffAxis1Top","isometricOffAxis2Left","isometricOffAxis2Right","isometricOffAxis2Top","isometricOffAxis3Left","isometricOffAxis3Right","isometricOffAxis3Bottom","isometricOffAxis4Left","isometricOffAxis4Right","isometricOffAxis4Bottom"],aT={orthographicFront:"无",isometricTopUp:"等轴顶部朝上",isometricTopDown:"等轴顶部朝下",isometricBottomDown:"等轴底部朝下",isometricBottomUp:"等轴底部朝上",isometricLeftDown:"等轴左下",isometricLeftUp:"等轴左上",isometricRightDown:"等轴右下",isometricRightUp:"等轴右上",isometricOffAxis1Left:"离轴1左",isometricOffAxis1Right:"离轴1右",isometricOffAxis1Top:"离轴1上",isometricOffAxis2Left:"离轴2左",isometricOffAxis2Right:"离轴2右",isometricOffAxis2Top:"离轴2上",isometricOffAxis3Bottom:"离轴3下",isometricOffAxis3Left:"离轴3左",isometricOffAxis3Right:"离轴3右",isometricOffAxis4Bottom:"离轴4下",isometricOffAxis4Left:"离轴4左",isometricOffAxis4Right:"离轴4右"},aE={orthographicFront:{x:0,y:0,z:0},isometricBottomDown:{x:314.7,y:35.4,z:299.8},isometricBottomUp:{x:45.3,y:35.4,z:60.2},isometricLeftDown:{x:45,y:35,z:0},isometricLeftUp:{x:45,y:325,z:0},isometricOffAxis1Left:{x:64,y:18,z:0},isometricOffAxis1Right:{x:334,y:18,z:0},isometricOffAxis1Top:{x:306.5,y:301.3,z:57.6},isometricOffAxis2Left:{x:26,y:18,z:0},isometricOffAxis2Right:{x:296,y:18,z:0},isometricOffAxis2Top:{x:53.5,y:301.3,z:302.4},isometricOffAxis3Bottom:{x:306.5,y:58.7,z:302.4},isometricOffAxis3Left:{x:64,y:342,z:0},isometricOffAxis3Right:{x:334,y:342,z:0},isometricOffAxis4Bottom:{x:53.5,y:58.7,z:57.6},isometricOffAxis4Left:{x:26,y:342,z:0},isometricOffAxis4Right:{x:296,y:342,z:0},isometricRightDown:{x:315,y:325,z:0},isometricRightUp:{x:315,y:35,z:0},isometricTopDown:{x:45.3,y:324.6,z:299.8},isometricTopUp:{x:314.7,y:324.6,z:60.2}}}}]);
//# sourceMappingURL=slide-commonAsync-18a6dc92-32f58d.js.map