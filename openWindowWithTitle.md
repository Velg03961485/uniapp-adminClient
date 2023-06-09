mui.openWindowWithTitle({  
    url: 'xxx.html', //String类型,要打开的界面的地址  
    id: 'id', //String类型,要打开的界面的id  
    styles: { //Webview窗口对象的样式  
        width: '100%', //String类型,窗口的宽度.支持百分比、像素值，默认为100%.未设置width属性值时,可同时设置left和right属性值改变窗口的默认宽度.  
        height: '100%', //String类型,窗口的高度.支持百分比、像素值，默认为100%.当未设置height属性值时,优先通过top和bottom属性值来计算窗口的高度.  
        left: '0px', //String类型,窗口水平向右的偏移量.支持百分比,像素值,默认值为0px.未设置left属性值,优先通过right和width属性值来计算窗口的left位置.  
        right: '0px', //String类型,窗口水平向左的偏移量.支持百分比、像素值,默认无值(根据left和width属性值来自动计算).当设置了left和width值时,忽略此属性值;当未设置width值时,可通过left和bottom属性值来确定窗口的宽度.  
        top: '0px', //String类型,窗口垂直向下的偏移量.支持百分比、像素值，默认值为0px.未设置top属性值时,优先通过bottom和height属性值来计算窗口的top位置.  
        bottom: '0px', //String类型,窗口垂直向上的偏移量.支持百分比,像素值,默认值无值(根据top和height属性值来自动计算).当同时设置了top和height值时,忽略此属性值;当未设置height值时,可通过top和bottom属性值来确定窗口的高度.  
        zindex: 0 //Number类型,窗口的堆叠顺序值.拥有更高堆叠顺序的窗口总是会处于堆叠顺序较低的窗口的前面,拥有相同堆叠顺序的窗口后调用show方法则在前面.  
        margin: 'auto', //String类型,窗口的边距.用于定位窗口的位置.auto:居中.若设置了left、right、top、bottom则对应的边距值失效.  
        background: '', //String类型,窗口的背景颜色.设置background为颜色值,窗口为独占模式显示(占整个屏幕区域).设置background为"transparent",则表示窗口背景透明,为非独占模式.  
        opacity: 1, //Number类型,窗口的不透明度.0为全透明,1为不透明,默认值为1,即不透明.安卓4.0以下不支持.  
        mask: 'none', //String类型,窗口的遮罩.用于设置Webview窗口的遮罩层样式,遮罩层会覆盖Webview中所有内容,包括子webview,并且截获webview的所有触屏事件,此时Webview窗口的点击操作会触发maskClick事件.字符串类型,可取值:rgba格式字符串,定义纯色遮罩层样式,如"rgba(0,0,0,0.5)",表示黑色半透明; "none",表示不使用遮罩层; 默认值为"none",即无遮罩层.  
        bounce: 'vertical', //String类型,窗口遇到边框是否有反弹效果.none:没有反弹效果.vertical:垂直方向有反弹效果.horizontal:水平方向有反弹效果.all:垂直和水平方向都有反弹效果.默认:none.  
        bounceBackground: '', //String类型,窗口回弹效果区域的背景.窗口回弹效果区域背景可支持颜色值或图片.颜色值格式:"#RRGGBB".背景格式:"url(%image path%)",例如:"url(./icon.png)",图片采用平铺模式绘制.安卓不支持.  
        popGesture: 'close', //String类型,窗口的侧滑返回功能.none:无侧滑返回功能.close:侧滑返回关闭Webview窗口.hide:侧滑返回隐藏webview窗口.安卓5+环境不支持.  
        scrollIndicator: 'none', //String类型,窗口是否显示滚动条.all:垂直和水平滚动条都显示.vertical:仅显示垂直滚动条.horizontal:仅显示水平滚动条.none:垂直和水平滚动条都不显示.默认:all.注意:显示滚动条的前提条件是窗口中的内容超过窗口显示的宽或高.  
        scrollsToTop: true, //Boolean类型,点击设备的状态栏时是否滚动返回至顶部.true:点击设备的状态栏可以滚动返回至顶部.false:点击设备的状态栏不可以.默认:true.在iPhone上有且只有一个Webview窗口的scrollsToTop属性值为true时才生效,所以在显示和关闭Webview窗口时需动态更新所有Webview的scrollsToTop值,已确保此功能生效.安卓不支持.  
        scalable: false, //Boolean类型,窗口是否可缩放.true:用户可通过双指操作放大或缩小页面,此时html页面可通过meta节点设置"name="viewport" content="user-scalable=no""来限制页面不可缩放.false:用户不可通过双指操作放大或缩小页面,即使页面中的meta节点也无法开启可缩放功能.默认:false.  
        softinputMode: '', //String类型,弹出系统软键盘模式.adjustPan:弹出软键盘时Webview窗口自动上移,以保证当前输入框可见.adjustResize:自动调整Webview窗口大小(屏幕区域减去软键盘区域),同时自动滚动Webview保证输入框可见.默认:adjustPan.安卓不支持.  
        statusbar: {//WebviewStatusbarStyles类型,窗口状态栏样式.仅在应用设置为沉浸式状态栏样式下有效,设置此属性后将自动保留系统状态栏区域不被Webview窗口占用(即Webview窗口非沉浸式样式显示).  
            background: '#fff'  
        },   
        subNViews: [ //Array[ WebviewSubNViewStyles ]类型,定义窗口的原生子View控件.数组类型,可通过配置项设置原生子View控件,每个配置项对应添加一个原生子View控件.通过Webview窗口的getSubNViews()方法可获取原生子View控件对象数组.http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewSubNViewStyles  
            {  
                id: '', //String类型,原生子View控件的标识.可通过plus.nativeObj.View.getViewById(id)方法传入此标识来获取子View控件对象.  
                type: '', //String类型,原生子View控件类型.NView:原生子View控件(plus.nativeObj.NView).ImageSlider:原生图片轮播控件(plus.nativeObj.ImageSlider).默认:NView.  
                styles: { //ViewStyles类型,原生子View控件的样式.可设置原生控件的位置、大小等信息.  
                    backgroundColor: '', //String类型,区域背景颜色.颜色值格式为"#RRGGBB".默认值为透明区域.  
                    bottom: '', //String类型,View控件垂直向上的偏移量.现对于父容器底部的距离,可取值:像素值,如"100px";百分比,如"10%",相对于父容器的高度,如果没有父容器则相对于屏幕高度.当设置了top和height值时,忽略此属性值;未设置height值时,可通过top和bottom属性值来确定View控件的高度.  
                    dock: '', //String类型,View控件的停靠方式.当Webview窗口添加到另外一个窗口中时,停靠方式才会生效,采用停靠方式添加会导致原Webview窗口自动调整其大小避免其内容被子窗口盖住.top:控件停靠则页面顶部;bottom:底部;right:右侧;left:控件停靠在页面左侧.默认:top.  
                    height: '', //String类型,区域的高度.可取值:像素值,如"100px";百分比,如"10%",相对于父容器的高度,如果没有父容器则相对于屏幕高度;内容自适应,如"wrap_content",根据内容计算控件的高度.默认值为"100%".  
                    width: '', //String类型,区域的宽度.可取值:像素值,如"100px";百分比,如"10%",相对于父控件的宽度.  
                    top: '', //String类型,View控件左上角的垂直偏移量.可取值:像素值,如"100px";百分比,如"10%",相对于父控件的高度;自动计算,如"auto",根据height值自动计算,相对于父控件垂直居中.  
                    left: '', //String类型,区域左上角的水平偏移量.可取值:像素值,如"100px";百分比,如"10%",相对于父控件的宽度;自动计算,如"auto",根据width值自动计算,相对于父控件水平居中.默认:"0px".  
                    opacity: '', //Number类型,View控件的不透明度.取值范围为0-1,0为全透明,1为不透明,默认值为1,即不透明.  
                    position: '', //String类型,View控件的排版方式.当Webview窗口添加到另外一个窗口中时,排版位置才会生效,排版位置决定子窗口在父窗口中的定位方式.static:控件在页面中正常定位，如果页面存在滚动条则随窗口内容滚动.absolute:控件在页面中绝对定位,如果页面存在滚动条不随窗口内容滚动.dock:控件在页面中停靠,停靠的位置由dock属性值决定.默认:absolute.  
                    statusbar: { //ViewStatusbarStyles类型,View控件的状态栏样式.仅在应用设置为沉浸式状态栏样式下有效,设置此属性后将自动保留系统状态栏区域不被View控件占用(即View控件非沉浸式样式显示).  
                        background: '', //String类型,系统状态栏区域背景颜色.颜色值格式为"#RRGGBB",如"#FF0000"表示为红色背景,默认值为应用manifest.json中plus->statusbar->background属性配置的值.  
                    }  
                }  
            }  
        ],  
        titleNView: { //WebviewTitleNViewStyles类型,定义窗口的标题栏控件样式.设置此属性值则表明创建Webview窗口的标题栏控件,并可通过其属性值设置背景颜色、文本内容、文本颜色等.通过Webview窗口的getTitleNView()方法可获取标题栏控件对象.http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles  
            autoBackButton: '', //Boolean类型,标题栏控件是否显示左侧返回按钮.true:显示返回按钮.false:不显示返回按钮.默认:false.返回按钮的颜色为窗口标题文字颜色,按下时颜色自动调整透明度为0.3.点击返回按钮的逻辑与按下系统返回键逻辑一致.  
            backgroundColor: '', //String类型,标题栏控件的背景颜色.颜色值格式为"#RRGGBB",如"#FF0000"表示为红色背景,默认值为"#F7F7F7".  
            buttons: [ //Array[ WebviewCustomButtonStyles ]类型,标题栏上的自定义按钮.建的自定义按钮数目不限制,实际应用中建议最多设置4个按钮(包括左侧返回按钮).  
                {  
                    color: '', //String类型,按钮上文字颜色.可取值:"#RRGGBB"格式字符串,"rgba(R,G,B,A)".默认值为窗口标题栏控件的标题文字颜色.  
                    colorPressed: '', //String类型,按下状态按钮文字颜色.String类型,按钮上文字颜色.可取值:"#RRGGBB"格式字符串,"rgba(R,G,B,A)".默认值为color属性值自动调整透明度为0.3.  
                    float: '', //String类型,按钮在标题栏上的显示位置.right:在标题栏中靠右排列显示.left:在标题栏中靠左侧排列显示(在返回键后). 默认:right.  
                    fontWeight: '', //String类型,按钮上文字的粗细.normal:标准字体.bold:加粗字体.默认:normal.  
                    fontSize: '', //String类型,按钮上文字大小.可取值:字体高度像素值,数字加"px"格式字符串.  
                    fontSrc: '', //String类型,按钮上文字使用的字体文件路径.相对路径:相对于当前页面的host位置,如"a.jpg",注意当前页面为网络地址则不支持.绝对路径:如Android平台"/sdcard/logo.png",此类路径通常通过其它5+ API获取的.扩展相对路径URL(RelativeURL):以"_"开头的相对路径,如"_www/a.jpg".本地路径URL:以"file://"开头,后面跟随系统绝对路径.  
                    onclick: '', //WebviewCustomButtonCallback类型,按钮点击后触发的回调函数.回调函数中将返回此JSON对象  
                    text: '' //String类型,按钮上显示的文字.推荐使用一个字符,超过一个字符可能无法正常显示,使用字体图标时unicode字符表示必须'\u'开头,如"\ue123"(注意不能写成"\e123").  
                }  
            ],  
            coverage: '', //String类型,标题栏控件变化作用范围.仅在type值为transparent时有效,页面滚动时标题栏背景透明度将发生变化.当页面滚动到指定偏移量时标题栏背景变为完全不透明.支持百分比、像素值,默认为'132px'.  
            progress: { //WebviewProgressStyles类型,标题栏控件的进度条样式.设置此属性则在标题栏控件的底部显示进度条,可配置进度条颜色值即高度.设置此属性值为undefined或null则隐藏进度条.默认不显示底部进度条.  
                color: '', //String类型,进度条颜色.可取值:"#RRGGBB"格式字符串,如"#FF0000"表示绘制红色分割线;"rgba(R,G,B,A)",其中R/G/B分别代表红色值/绿色值/蓝色值,正整数类型,取值范围为0-255,A为透明度,浮点数类型,取值范围为0-1(0为全透明,1为不透明),如"rgba(255,0,0,0.5)",表示红色半透明.默认值为"#00FF00".  
                height: '', //String类型,进度条高度.可取值:像素值(逻辑像素),支持小数点,如"1px"表示1像素高;百分比,如"1%",相对于标题栏控件的高度.默认值为"2px".  
            },  
            splitLine: { //WebviewSplitLineStyles类型,标题栏控件的底部分割线.设置此属性则在标题栏控件的底部显示分割线,可配置颜色值及高度.设置此属性值为undefined或null则隐藏分割线.默认不显示底部分割线.  
                color: '', //String类型,进度条颜色.可取值:"#RRGGBB"格式字符串,如"#FF0000"表示绘制红色分割线;"rgba(R,G,B,A)",其中R/G/B分别代表红色值/绿色值/蓝色值,正整数类型,取值范围为0-255,A为透明度,浮点数类型,取值范围为0-1(0为全透明,1为不透明),如"rgba(255,0,0,0.5)",表示红色半透明.默认值为"#cccccc".  
                height: '', //String类型,底部分割线高度.可取值:像素值(逻辑像素),支持小数点,如"1px"表示1像素高;百分比,如"1%",相对于标题栏控件的高度.默认值为"1px".  
            },  
            titleColor: '', //String类型,标题栏控件的标题文字颜色.颜色值格式为"#RRGGBB",如"#FF0000"表示标题文字颜色为红色,默认值为"#000000".  
            titleOverflow: '', //String类型,标题栏控件的标题文字超出显示区域时处理方式.clip:超出显示区域时内容裁剪;ellipsis:超出显示区域时尾部显示省略标记(...).默认:ellipsis.  
            titleText: '', //String类型,标题栏控件的标题文字内容.在标题栏控件居中(水平和垂直)显示,左右边距为88px,如果文本过长则尾部裁剪(加三个点"...")显示.当不设置titleText属性或属性值为undefined/null时,使用当前Webview窗口加载页面的标题,并自动同步更新页面的标题.  
            titleSize: '', //String类型,标题栏控件的标题文字字体大小.字体大小单位为像素,如"20px"表示字体大小为20像素,默认值为17像素.  
            type: '' //String类型,标题栏控件样式.default:默认样式,顶部停靠显示,挤压Webview页面内容显示区域;transparent:透明样式,顶部沉浸式显示覆盖Webview页面内容,标题栏上内容(除按钮外)全部透明,当页面滚动时透明度逐渐变化,直到不透明显示.默认:default.  
        },  
        transition: { //WebviewTransition类型,窗口定义窗口变换的动画效果.http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTransition  
            property: 'all', //String类型,产生变换效果的属性.默认值为"all",暂不支持其它值.  
            duration: '0', //String类型,变换持续的时间.默认值为0,即无动画效果.  
            timingfunction: 'ease-in-out', //String类型,窗口变换效果.linear:匀速变化.ease-in:匀加速变化,逐渐变快的动画效果.ease-out:匀减速变化,逐渐变慢的动画效果.ease-in-out:先加速后减速变化,先变快后变慢的动画效果.默认:ease-in-out.  
        },  
        transform: { //WebviewTransform类型,窗口定义窗口变形效果.http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTransform  
            property: 'all', //String类型,产生变换效果的属性.默认值为"all",暂不支持其它值.  
            duration: '0', //String类型,变换持续的时间.默认值为0,即无动画效果.  
            timingfunction: 'ease-in-out', //String类型,窗口变换效果.linear:匀速变化.ease-in:匀加速变化,逐渐变快的动画效果.ease-out:匀减速变化,逐渐变慢的动画效果.ease-in-out:先加速后减速变化,先变快后变慢的动画效果.默认:ease-in-out.  
        },  
        position: '', //WebviewPosition类型,Webview窗口的排版位置.当Webview窗口添加到另外一个窗口中时,排版位置才会生效,排版位置决定子窗口在父窗口中的定位方式.static:控件在页面中正常定位，如果页面存在滚动条则随窗口内容滚动.absolute:控件在页面中绝对定位,如果页面存在滚动条不随窗口内容滚动.dock:控件在页面中停靠,停靠的位置由dock属性值决定.默认:absolute.  
        errorPage: 'none', //String类型,窗口加载错误时跳转的页面地址.当Webview窗口无法加载指定的url地址时(如本地页面不存,或者无法访问的网络地址),此时会自动跳转到指定的错误页面地址(仅支持本地页面地址).设置为"none"则关闭跳转到错误页面功能,此时页面显示Webview默认的错误页面内容.默认使用5+ Runtime内置的错误页面.  
        additionalHttpHeaders: {}, //JSON类型,窗口加载页面时额外添加的HTTP请求头数据,内容按照http协议写.  
        animationOptimization: 'auto', //String类型,窗口动画优化方式.auto:如果窗口中存在titleNView或subNViews，窗口动画时真实Webview控件从动画窗口中移除加速.none:窗口动画不使用优化.默认:auto.  
        cachemode: 'default', //String类型,窗口的缓存模式.default:根据cache-control决定是否使用缓存数据,如果存在缓存并且没有过期则使用本地缓存资源,否则从网络获取.cacheElseNetwork:只要存在缓存(即使过期)数据则使用,否则从网络获取.noCache:不使用缓存数据,全部从网络获取.cacheOnly:仅使用缓存数据，不从网络获取(注:如果没有缓存数据则会导致加载失败).默认:default.  
        backButtonAutoControl: 'close', //String类型,Webview窗口自动处理返回键逻辑.hide:隐藏Webview窗口,隐藏动画与上一次调用显示时设置的动画类型相对应(如"slide-in-right"对应的关闭动画为"slid-out-right").close:关闭Webview窗口,关闭动画与上一次调用显示时设置的动画类型相对应.none:不做操作,将返回键传递给下一Webview窗口处理.quit:退出应用.  
        blockNetworkImage: false, //Boolean类型,是否阻塞网络图片的加载.true:阻塞.false:不阻塞.默认:false.阻塞后Webview窗口将不加载页面中使用的所有网络图片,可通过Webview窗口对象的setBlockNetWorkImage()方法动态修改此状态.iOS不支持.  
        decelerationRate: 0.989, //Number类型,窗口内容停止滑动的减速度.当Webview加载的内容超过其高度时,可以拖拽滑动内容,decelerationRate属性控制手指松开后页面滑动的速度.设置值越大手指松开后的滑动速度越快(滑动距离越长,其值域范围为0.0-1.0,默认值为0.989.安卓不支持.  
        dock: 'top', //WebviewDock类型,窗口的停靠方式.当Webview窗口添加到另外一个窗口中时,停靠方式才会生效,采用停靠方式添加会导致原Webview窗口自动调整其大小避免其内容被子窗口盖住.top:控件停靠则页面顶部;bottom:底部;right:右侧;left:控件停靠在页面左侧.http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewDock  
        replacewebapi: { //WebviewReplaceWebApiOptions类型,替换H5标准API.http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewReplaceWebApiOptions  
            geolocation: "auto" //String类型,替换H5标准定位接口(navigator.geolocation.*).由于网络原因,在部分手机上可能无法调用标准H5定位接口(navigator.geolocation.*)获取定位数据,此时可以通过此属性配置使用原生定位模块替换标准H5定位接口.alldevice:在所有设备上替换标准H5定位接口(navigator.geolocation.*).auto:自动替换H5标准定位接口,仅在调用标准H5定位接口无法获取数据的设备上替换.none:不替换H5标准定位接口(navigator.geolocation.*).默认:auto.注意:替换H5标准定位接口,会导致页面加载速度延迟100ms左右,推荐使用"auto"模式.  
        },  
        hardwareAccelerated: '', //Boolean类型,窗口是否开启硬件加速.true:开启.false:不开启.默认:5+ Runtime会根据设备实际支持情况自动选择是否开启硬件加速，可以通过plus.webview.defaultHardwareAccelerated()方法获取默认Webview是否开启硬件加速.由于不同设备对硬件加速的支持情况存在差异,开启硬件加速能加速HTML页面的渲染,但也会消耗更多的系统资源,从而导致在部分设备上可能出现闪屏、发虚、分块渲染等问题，因此在特定设备的特定页面如果出现以上问题需要手动设置关闭硬件加速来避免.iOS不支持.  
        kernel: 'UIWebview', //String类型,窗口使用的内核.WKWebview:在iOS8.0及以上系统使用WKWebview内核,低版本下仍然使用UIWebview内核.UIWebview:在所有版本上都使用UIWebview内核.默认:UIWebview.WKWebview内核的优势是： 1.滚动时懒加载的图片也可以实时渲染,UIWebview在滚动停止后才能渲染;2.WKWebview的video支持AirPlay.但WKWebview也有些限制和不足,目前已知的问题有:1.不支持跨域设置cookie,即plus.navigator.setCookie()API无法使用;2.本地的HTML页面中的XHR不支持跨域访问,需使用plus.net.XMLHttpRequest来替换;3.不支持使用WebSQL,需使用indexDB来替换;4.不支持js原生混淆功能,需使用前端js混淆来替换;5.内存不足时会白屏.首页的Webview的kernel在manifest中配置(plus->kernel->ios).安卓不支持.  
        plusrequire: 'normal', //String类型,控制Webview注入5+ API时机.ahead:尽量提前，拦截页面中网络js请求实现提前注入,如果没有拦截到js请求则在页面loaded时注入.normal:页面loaded时注入.later:较晚在注入,在loaded事件发生后2s再注入,plusready事件同样延迟.none:不注入,页面无法调用5+ API,不触发plusready事件.默认:normal.  
        render: 'onscreen', //String类型,窗口渲染模式.onscreen:Webview窗口在屏幕区可见时渲染,不可见时不进行渲染,此时能减少内存使用量.always:Webview在任何时候都渲染,在内存较大的设备上使用,被遮挡的窗口在此中模式下显示的时候会有更流畅的效果.默认:onscreen.iOS不支持.  
        videoFullscreen: 'auto', //String类型,视频全屏播放时的显示方向.auto:自动适配,如果当前页面竖屏,则竖屏显示.如果当前页面横盘显示,则横屏.如果当前页面自动感应,则自动感应横竖屏切换.portrait-primary:竖屏正方向.portrait-secondary:竖屏反方向,屏幕正方向按顺时针旋转180°.landscape-primary:横屏正方向,屏幕正方向按顺时针旋转90°.landscape-secondary:横屏方向，屏幕正方向按顺时针旋转270°.landscape:横屏正方向或反方向,根据设备重力感应器自动调整.默认:auto.iOS不支持.  
    },  
    extras: { //新窗口的额外扩展参数,可用来处理页面间传值  
        //自定义  
    },  
    createNew: false, //Boolean类型,是否重复创建相同id的webview.true:不判断重复,每次都新建webview.fasle:先查找当前App中是否已存在同样id的webview，若存在则直接显示；否则新创建并根据show参数执行显示逻辑.默认:false.注意:plusReady事件仅在webview首次创建时触发,使用mui.openWindow方法多次打开已存在的同样id的webview时,是不会重复触发plusReady事件的;因此若业务写在plusReady事件中,可能会出现执行结果和预期不一致的情况;此时可通过自定义事件触发.  
    show: { //窗口显示控制参数  
        autoShow: false, //Boolean类型,目标窗口loaded事件发生后,是否自动显示.true:loaded事件发生后自动显示.false:仅创建但不显示webview.若目标页面为预加载页面,则该参数无效.  
        aniShow: 'auto', //AnimationTypeShow类型.auto:自动选择动画效果,使用上次显示窗口设置的动画效果,如果是第一次显示则默认动画效果"none".none:立即显示页面,无任何动画效果,页面显示默认的动画效果.此效果忽略动画时间参数,立即显示.对应关闭动画"none".slide-in-right:页面从屏幕右侧外向内横向滑动显示.对应关闭动画"slide-out-right".slide-in-left:页面从屏幕左侧向右横向滑动显示.对应关闭动画"slide-out-left".slide-in-top:页面从屏幕上侧向下竖向滑动显示.对应关闭动画"slide-out-top".slide-in-bottom:页面从屏幕下侧向上竖向滑动显示.对应关闭动画"slide-out-bottom".fade-in:页面从完全透明到不透明逐渐显示.对应关闭动画"fade-out".zoom-out:页面在屏幕中间从小到大逐渐放大显示.对应关闭动画"zoom-in".zoom-fade-out:页面在屏幕中间从小到大逐渐放大并且从透明到不透明逐渐显示.对应关闭动画"zoom-fade-in".pop-in:页面从屏幕右侧滑入显示,同时上一个页面带阴影效果从屏幕左侧滑出隐藏.对应关闭动画"pop-out".http://www.dcloud.io/docs/api/zh_cn/webview.html#plus.webview.AnimationTypeShow.  
        duration: 1000, //显示Webview窗口动画的持续时间,单位为ms  
        event: 'titleUpdate', //页面显示时机.loaded:当页面加载完成时触发此事件.titleUpdate:此事件会先于loaded事件触发,通常在加载页面时通过此事件可更快获取到页面的标题<title></title>.loaded常用于判断页面是否载入完毕,载入完毕才显示新页面.但有时页面内容很长时,全部载入完毕比较慢,导致显示新窗体比较慢.为了让新窗体打开快点,我们可以在titleUpdate时就显示新窗体.  
        extras: { //窗口动画是否使用图片加速.http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewExtraOptions  
            acceleration: 'auto', //String类型,窗口动画加速.开启窗口动画加速功能可优化窗口动画效果,提升动画流程度,可避免部分设备上打开(关闭)窗口闪屏的问题.auto:自动优化窗口动画.none:关闭窗口动画加速功能.capture:使用截屏方式加速窗口动画.默认:auto.iOS不支持.  
            capture: '', //Bitmap类型,窗口动画加速时使用的图片.当使用截屏方式加速窗口动画时,可设置已经创建好的截屏图片,此时不会进行实时截屏操作,加速窗口动画响应时间,提升用户体验.如果未指定截屏图片,则实时截取当前Webview窗口对象的图片进行动画操作.如果窗口未使用截屏方式加速动画,则忽略此参数.iOS不支持.  
            otherCapture: '' //Bitmap类型,关联窗口动画使用的图片.当使用截屏方式加速窗口动画时,可设置已经创建好的截屏图片,此时不会进行实时截屏操作,加速关联窗口动画响应时间,提升用户体验。 如果未指定截屏图片,则实时截取关联Webview窗口对象的图片进行动画操作.如果窗口未使用截屏方式加速动画,则忽略此参数.iOS不支持  
        }  
    }  
    waiting: { //系统等待框参数  
        autoShow: true, //是否自动显示等待框.true:显示等待框.false:不显示等待框.注意:若waiting框的autoShow为true,但目标页面不自动显示,则需在目标页面中通过如下代码关闭等待框:plus.nativeUI.closeWaiting();  
        title: '', //等待框上的提示文字  
        options: { //原生等待对话框的参数  
            width: '', //String类型,等待框背景区域的宽度.值支持像素值("500px")或百分比("50%"),百分比相对于屏幕的宽计算,如果不设置则根据内容自动计算合适的宽度.  
            height: '', //String类型,等待框背景区域的高度.值支持像素绝对值("500px")或百分比("50%")，如果不设置则根据内容自动计算合适的高度.  
            color: '', //String类型,等待框中文字的颜色.颜色值支持(参考CSS颜色规范):颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值,默认值为白色.  
            size: '', //String类型,等待框中文字的字体大小.如"14px"表示使用14像素高的文字,未设置则使用系统默认字体大小.  
            textalign: '', //String类型,等待对话框中标题文字的水平对齐方式.left:水平居左对齐显示.center:水平居中对齐显示.right:水平居右对齐显示.默认:center.  
            padding: '', //String类型,等待对话框的内边距.值支持像素值("10px")和百分比("5%"),百分比相对于屏幕的宽计算,默认值为"3%".  
            background: '', //String类型,等待对话框显示区域的背景色.背景色的值支持(参考CSS颜色规范):颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值,默认值为rgba(0,0,0,0.8).  
            style: '', //String类型,等待对话框样式.black:黑色雪花样式,通常在背景主色为浅色时使用.white表示等待框为白色雪花样式,通常在背景主色为深色时使用.默认:white.安卓不支持.  
            modal: true, //Boolen类型,等待框是否模态显示.模态显示时用户不可操作直到等待对话框关闭，否则用户在等待对话框显示时也可操作下面的内容.默认true.  
            round: '10px', //Number类型,等待框显示区域的圆角.值支持像素值"10px",未设置时使用默认值"10px".  
            padlock: false, //Boolen类型,点击等待显示区域是否自动关闭.true:点击等待对话框显示区域时自动关闭.false:不关闭.默认:false.  
            back: '', //String类型,返回键处理方式.none:截获处理返回键,但不做任何响应.close:截获处理返回键并关闭等待框.transmit:不截获返回键,向后传递给Webview窗口继续处理(与未显示等待框的情况一致).iOS不支持.  
            loading: { //WaitingLoadingOptions类型,自定义等待框上loading图标样式.  
                display: '', //String类型,loading图标显示样式.block:图标与文字分开两行显示,上面显示loading图标,下面显示文字.inline:loading图标与文字在同一行显示,左边显示loading图标,右边显示文字.none:不显示loading图标.  
                height: '', //String类型,loading图标高度.设置loading图标的高度(宽度等比率缩放),取值类型:像素值,如"14px"表示14像素高.  
                icon: '', //String类型,loading图标路径.自定义loading图标的路径,png格式,并且必须是本地资源地址;loading图要求宽是高的整数倍,显示等待框时按照图片的高横向截取每帧刷新.  
                interval: 100 //Number类型,loading图每帧刷新间隔.单位为ms(毫秒),默认值为100ms.  
            }  
        }  
    }  
}, {  
    id: "title", //导航栏ID,默认为title,若不指定将会使用WebviewOptions中指定的 [webviewID+ "_title"] 作为id  
    height: "44px", //导航栏高度值  
    backgroundColor: "#f7f7f7", //导航栏背景色  
    bottomBorderColor: "#cccccc", //底部边线颜色  
    title: { //标题配置  
        text: "", //标题文字  
        position: { //绘制文本的目标区域，参考：http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.Rect  
            top: '0px', //String类型,区域左上角的垂直偏移量.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的高度;自动计算,如"auto",根据height值自动计算,相对于作用对象垂直居中.  
            left: '0px', //String类型,区域左上角的水平偏移量.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的宽度;自动计算,如"auto",根据width值自动计算,相对于作用对象水平居中.  
            width: "100%", //String类型,区域的宽度.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的宽度.  
            height: "100%" //String 类型,区域的高度.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的高度.内容自适应,如"wrap_content",根据内容计算高度(如调用drawText绘制文本时支持).  
        },  
        styles: { //绘制文本样式，参考：http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.TextStyles  
            color: "#000000", //String类型,字体颜色."#RRGGBB"格式字符串."rgba(R,G,B,A)",默认:"#000000".  
            align: "center", //String类型,水平对齐方式.left:字体在指定的区域中水平居左对齐.center:字体在指定的区域中水平居中对齐.right:字体在指定的区域中水平居右对齐.默认:center.  
            verticalAlign: '', //String类型,垂直对齐方式.文本内容在指定绘制区域中的垂直对齐方式.top:垂直居顶对齐.middle:垂直居中对齐.bottom:垂直居底对齐.默认:middle.  
            family: "'Helvetica Neue',Helvetica,sans-serif", //String类型,字体名称.如果指定名称的字体不存在,则使用默认字体.  
            size: "17px", //String类型,字体大小.可取值:字体高度像素值,数字加"px"格式字符串,如"12px".默认值为"16px".  
            style: "normal", //String类型,字体样式.normal:正常字体样式.italic:斜体样式.默认:normal.  
            weight: "normal", //String类型,字体粗细.normal:普通字体.bold:粗字体.默认:normal.  
            fontSrc: "", //String类型,字体文件路径.加载字体文件路径.  
            decoration: '', //String类型,文本装饰.none:无装饰效果.underline:文本带下划线效果.line-through:文本带贯穿线(删除线)效果.默认:none.  
            lineSpacing: '', //String类型,文本的行间距.可取值:像素值,如"100px";百分比,如"10%",相对于字体的高度(size属性);默认:"20%".  
            margin: '', //String类型,字体的边距.用于设置字体在绘制目标区域四个方向(top/right/bottom/left)的边距,可取值:像素值,如"10px";百分比,相对于绘制目标区域,如"5%";默认值为"0px".  
            overflow: '', //String类型,文本内容超出显示区域时处理方式.clip:超出显示区域时内容裁剪.ellipsis:超出显示区域时尾部显示省略标记(...).默认:clip.  
            whiteSpace: '' //String类型,文本换行模式.nowrap:不换行,将所有文本在一行中绘制,忽略换行符("\n").normal:自动换行,当指定的宽度无法绘制所有文本时自动换行绘制,碰到'\n'字符时强制换行.默认:nowrap.  
        }  
    },  
    back: { //左上角返回箭头  
        image: { //图片格式  
            base64Data: '', //加载图片的Base64编码格式数据 base64Data 和 imgSRC 必须指定一个.否则不显示返回箭头  
            imgSrc: '', //要加载的图片路径  
            sprite: { //图片源的绘制区域，参考：http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.Rect  
                top: '0px', //String类型,区域左上角的垂直偏移量.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的高度;自动计算,如"auto",根据height值自动计算,相对于作用对象垂直居中.  
                left: '0px', //String类型,区域左上角的水平偏移量.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的宽度;自动计算,如"auto",根据width值自动计算,相对于作用对象水平居中.  
                width: "100%", //String类型,区域的宽度.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的宽度.  
                height: "100%" //String 类型,区域的高度.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的高度.内容自适应,如"wrap_content",根据内容计算高度(如调用drawText绘制文本时支持).  
            },  
            position: { //绘制图片的目标区域，参考：http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.Rect  
                top: '10px', //String类型,区域左上角的垂直偏移量.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的高度;自动计算,如"auto",根据height值自动计算,相对于作用对象垂直居中.  
                left: '10px', //String类型,区域左上角的水平偏移量.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的宽度;自动计算,如"auto",根据width值自动计算,相对于作用对象水平居中.  
                width: "24px", //String类型,区域的宽度.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的宽度.  
                height: "24px" //String 类型,区域的高度.可取值:像素值,如"100px";百分比,如"10%",相对于作用对象的高度.内容自适应,如"wrap_content",根据内容计算高度(如调用drawText绘制文本时支持).  
            }  
        },  
        click: function() {  
            //重写 点击返回图标时执行的回调函数，默认执行mui.back();  
        }  
    }  
});