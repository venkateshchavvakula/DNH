(self.webpackChunkcliniva=self.webpackChunkcliniva||[]).push([[70],{97070:function(e,t,i){"use strict";i.d(t,{VK:function(){return F},OP:function(){return D},Tx:function(){return G},p6:function(){return V}});var n=i(97388),s=i(19861),o=i(99235),a=i(35366),r=i(89666),u=i(76042),l=i(15446),h=i(32041),c=i(17911),m=i(81258),d=i(14324),p=i(69056),_=i(58868),g=i(69568),f=i(15065),b=i(99713),v=i(82151),y=i(61116),M=i(87064),k=i(95644),C=i(93169),w=i(52335),x=i(94720);const I=["mat-menu-item",""];function S(e,t){1&e&&(a.O4$(),a.TgZ(0,"svg",2),a._UZ(1,"polygon",3),a.qZA())}const O=["*"];function P(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div",0),a.NdJ("keydown",function(t){return a.CHM(e),a.oxw()._handleKeydown(t)})("click",function(){return a.CHM(e),a.oxw().closed.emit("click")})("@transformMenu.start",function(t){return a.CHM(e),a.oxw()._onAnimationStart(t)})("@transformMenu.done",function(t){return a.CHM(e),a.oxw()._onAnimationDone(t)}),a.TgZ(1,"div",1),a.Hsn(2),a.qZA(),a.qZA()}if(2&e){const e=a.oxw();a.Q6J("id",e.panelId)("ngClass",e._classList)("@transformMenu",e._panelAnimationState),a.uIk("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}const E={transformMenu:(0,b.X$)("transformMenu",[(0,b.SB)("void",(0,b.oB)({opacity:0,transform:"scale(0.8)"})),(0,b.eR)("void => enter",(0,b.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,b.oB)({opacity:1,transform:"scale(1)"}))),(0,b.eR)("* => void",(0,b.jt)("100ms 25ms linear",(0,b.oB)({opacity:0})))]),fadeInItems:(0,b.X$)("fadeInItems",[(0,b.SB)("showing",(0,b.oB)({opacity:1})),(0,b.eR)("void => *",[(0,b.oB)({opacity:0}),(0,b.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},R=new a.OlP("MatMenuContent"),T=new a.OlP("MAT_MENU_PANEL"),A=(0,M.Kr)((0,M.Id)(class{}));let D=(()=>{class e extends A{constructor(e,t,i,n,s){super(),this._elementRef=e,this._focusMonitor=i,this._parentMenu=n,this._changeDetectorRef=s,this.role="menuitem",this._hovered=new r.x,this._focused=new r.x,this._highlighted=!1,this._triggersSubmenu=!1,n&&n.addItem&&n.addItem(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){var e,t;const i=this._elementRef.nativeElement.cloneNode(!0),n=i.querySelectorAll("mat-icon, .material-icons");for(let s=0;s<n.length;s++){const t=n[s];null===(e=t.parentNode)||void 0===e||e.removeChild(t)}return(null===(t=i.textContent)||void 0===t?void 0:t.trim())||""}_setHighlighted(e){var t;this._highlighted=e,null===(t=this._changeDetectorRef)||void 0===t||t.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq),a.Y36(y.K0),a.Y36(n.tE),a.Y36(T,8),a.Y36(a.sBO))},e.\u0275cmp=a.Xpm({type:e,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:10,hostBindings:function(e,t){1&e&&a.NdJ("click",function(e){return t._checkDisabled(e)})("mouseenter",function(){return t._handleMouseEnter()}),2&e&&(a.uIk("role",t.role)("tabindex",t._getTabIndex())("aria-disabled",t.disabled.toString())("disabled",t.disabled||null),a.ekj("mat-menu-item",!0)("mat-menu-item-highlighted",t._highlighted)("mat-menu-item-submenu-trigger",t._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[a.qOj],attrs:I,ngContentSelectors:O,decls:3,vars:3,consts:[["matRipple","",1,"mat-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-menu-submenu-icon","viewBox","0 0 5 10","focusable","false",4,"ngIf"],["viewBox","0 0 5 10","focusable","false",1,"mat-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,t){1&e&&(a.F$t(),a.Hsn(0),a._UZ(1,"div",0),a.YNc(2,S,2,0,"svg",1)),2&e&&(a.xp6(1),a.Q6J("matRippleDisabled",t.disableRipple||t.disabled)("matRippleTrigger",t._getHostElement()),a.xp6(1),a.Q6J("ngIf",t._triggersSubmenu))},directives:[M.wG,y.O5],encapsulation:2,changeDetection:0}),e})();const B=new a.OlP("mat-menu-default-options",{providedIn:"root",factory:function(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let Y=0,L=(()=>{class e{constructor(e,t,i){this._elementRef=e,this._ngZone=t,this._defaultOptions=i,this._xPosition=this._defaultOptions.xPosition,this._yPosition=this._defaultOptions.yPosition,this._directDescendantItems=new a.n_E,this._tabSubscription=u.w0.EMPTY,this._classList={},this._panelAnimationState="void",this._animationDone=new r.x,this.overlayPanelClass=this._defaultOptions.overlayPanelClass||"",this.backdropClass=this._defaultOptions.backdropClass,this._overlapTrigger=this._defaultOptions.overlapTrigger,this._hasBackdrop=this._defaultOptions.hasBackdrop,this.closed=new a.vpe,this.close=this.closed,this.panelId="mat-menu-panel-"+Y++}get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(e){this._overlapTrigger=(0,s.Ig)(e)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(e){this._hasBackdrop=(0,s.Ig)(e)}set panelClass(e){const t=this._previousPanelClass;t&&t.length&&t.split(" ").forEach(e=>{this._classList[e]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(e=>{this._classList[e]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(e){this.panelClass=e}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new n.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._tabSubscription=this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,m.O)(this._directDescendantItems),(0,d.w)(e=>(0,l.T)(...e.map(e=>e._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e))}ngOnDestroy(){this._directDescendantItems.destroy(),this._tabSubscription.unsubscribe(),this.closed.complete()}_hovered(){return this._directDescendantItems.changes.pipe((0,m.O)(this._directDescendantItems),(0,d.w)(e=>(0,l.T)(...e.map(e=>e._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){const t=e.keyCode,i=this._keyManager;switch(t){case o.hY:(0,o.Vb)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case o.oh:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case o.SV:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:t!==o.LH&&t!==o.JH||i.setFocusOrigin("keyboard"),i.onKeydown(e)}}focusFirstItem(e="program"){this.lazyContent?this._ngZone.onStable.pipe((0,p.q)(1)).subscribe(()=>this._focusFirstItem(e)):this._focusFirstItem(e)}_focusFirstItem(e){const t=this._keyManager;if(t.setFocusOrigin(e).setFirstItemActive(),!t.activeItem&&this._directDescendantItems.length){let e=this._directDescendantItems.first._getHostElement().parentElement;for(;e;){if("menu"===e.getAttribute("role")){e.focus();break}e=e.parentElement}}}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){const t=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${t}`,n=Object.keys(this._classList).find(e=>e.startsWith(this._elevationPrefix));n&&n!==this._previousElevation||(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i)}setPositionClasses(e=this.xPosition,t=this.yPosition){const i=this._classList;i["mat-menu-before"]="before"===e,i["mat-menu-after"]="after"===e,i["mat-menu-above"]="above"===t,i["mat-menu-below"]="below"===t}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,m.O)(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(B))},e.\u0275dir=a.lG2({type:e,contentQueries:function(e,t,i){if(1&e&&(a.Suo(i,R,5),a.Suo(i,D,5),a.Suo(i,D,4)),2&e){let e;a.iGM(e=a.CRH())&&(t.lazyContent=e.first),a.iGM(e=a.CRH())&&(t._allItems=e),a.iGM(e=a.CRH())&&(t.items=e)}},viewQuery:function(e,t){if(1&e&&a.Gf(a.Rgc,5),2&e){let e;a.iGM(e=a.CRH())&&(t.templateRef=e.first)}},inputs:{backdropClass:"backdropClass",xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{closed:"closed",close:"close"}}),e})(),F=(()=>{class e extends L{constructor(e,t,i){super(e,t,i),this._elevationPrefix="mat-elevation-z",this._baseElevation=4}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(B))},e.\u0275cmp=a.Xpm({type:e,selectors:[["mat-menu"]],hostVars:3,hostBindings:function(e,t){2&e&&a.uIk("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[a._Bn([{provide:T,useExisting:e}]),a.qOj],ngContentSelectors:O,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-menu-panel",3,"id","ngClass","keydown","click"],[1,"mat-menu-content"]],template:function(e,t){1&e&&(a.F$t(),a.YNc(0,P,3,6,"ng-template"))},directives:[y.mk],styles:["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],encapsulation:2,data:{animation:[E.transformMenu,E.fadeInItems]},changeDetection:0}),e})();const H=new a.OlP("mat-menu-scroll-strategy"),z={provide:H,deps:[k.aV],useFactory:function(e){return()=>e.scrollStrategies.reposition()}},X=(0,C.i$)({passive:!0});let q=(()=>{class e{constructor(e,t,i,s,o,r,l,h){this._overlay=e,this._element=t,this._viewContainerRef=i,this._menuItemInstance=r,this._dir=l,this._focusMonitor=h,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=u.w0.EMPTY,this._hoverSubscription=u.w0.EMPTY,this._menuCloseSubscription=u.w0.EMPTY,this._handleTouchStart=e=>{(0,n.yG)(e)||(this._openedBy="touch")},this._openedBy=void 0,this._ariaHaspopup=!0,this.restoreFocus=!0,this.menuOpened=new a.vpe,this.onMenuOpen=this.menuOpened,this.menuClosed=new a.vpe,this.onMenuClose=this.menuClosed,this._scrollStrategy=s,this._parentMaterialMenu=o instanceof L?o:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,X),r&&(r._triggersSubmenu=this.triggersSubmenu())}get _ariaExpanded(){return this.menuOpen||null}get _ariaControl(){return this.menuOpen?this.menu.panelId:null}get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe(e=>{this._destroyMenu(e),"click"!==e&&"tab"!==e||!this._parentMaterialMenu||this._parentMaterialMenu.closed.emit(e)})))}ngAfterContentInit(){this._checkMenu(),this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,X),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!(!this._menuItemInstance||!this._parentMaterialMenu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){if(this._menuOpen)return;this._checkMenu();const e=this._createOverlay(),t=e.getConfig();this._setPosition(t.positionStrategy),t.hasBackdrop=null==this.menu.hasBackdrop?!this.triggersSubmenu():this.menu.hasBackdrop,e.attach(this._getPortal()),this.menu.lazyContent&&this.menu.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(),this.menu instanceof L&&this.menu._startAnimation()}closeMenu(){this.menu.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){var e;null===(e=this._overlayRef)||void 0===e||e.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;const t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),!this.restoreFocus||"keydown"!==e&&this._openedBy&&this.triggersSubmenu()||this.focus(this._openedBy),this._openedBy=void 0,t instanceof L?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe((0,_.h)(e=>"void"===e.toState),(0,p.q)(1),(0,g.R)(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t.lazyContent&&t.lazyContent.detach())}_initMenu(){this.menu.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,this.menu.direction=this.dir,this._setMenuElevation(),this.menu.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(){if(this.menu.setElevation){let e=0,t=this.menu.parentMenu;for(;t;)e++,t=t.parentMenu;this.menu.setElevation(e)}}_setIsMenuOpen(e){this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e)}_checkMenu(){}_createOverlay(){if(!this._overlayRef){const e=this._getOverlayConfig();this._subscribeToPositions(e.positionStrategy),this._overlayRef=this._overlay.create(e),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(){return new k.X_({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:this.menu.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this.menu.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e){this.menu.setPositionClasses&&e.positionChanges.subscribe(e=>{this.menu.setPositionClasses("start"===e.connectionPair.overlayX?"after":"before","top"===e.connectionPair.overlayY?"below":"above")})}_setPosition(e){let[t,i]="before"===this.menu.xPosition?["end","start"]:["start","end"],[n,s]="above"===this.menu.yPosition?["bottom","top"]:["top","bottom"],[o,a]=[n,s],[r,u]=[t,i],l=0;this.triggersSubmenu()?(u=t="before"===this.menu.xPosition?"start":"end",i=r="end"===t?"start":"end",l="bottom"===n?8:-8):this.menu.overlapTrigger||(o="top"===n?"bottom":"top",a="top"===s?"bottom":"top"),e.withPositions([{originX:t,originY:o,overlayX:r,overlayY:n,offsetY:l},{originX:i,originY:o,overlayX:u,overlayY:n,offsetY:l},{originX:t,originY:a,overlayX:r,overlayY:s,offsetY:-l},{originX:i,originY:a,overlayX:u,overlayY:s,offsetY:-l}])}_menuClosingActions(){const e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,h.of)(),n=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,_.h)(e=>e!==this._menuItemInstance),(0,_.h)(()=>this._menuOpen)):(0,h.of)();return(0,l.T)(e,i,n,t)}_handleMousedown(e){(0,n.X6)(e)||(this._openedBy=0===e.button?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){const t=e.keyCode;t!==o.K5&&t!==o.L_||(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===o.SV&&"ltr"===this.dir||t===o.oh&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,_.h)(e=>e===this._menuItemInstance&&!e.disabled),(0,f.g)(0,c.E)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof L&&this.menu._isAnimating?this.menu._animationDone.pipe((0,p.q)(1),(0,f.g)(0,c.E),(0,g.R)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(){return this._portal&&this._portal.templateRef===this.menu.templateRef||(this._portal=new v.UE(this.menu.templateRef,this._viewContainerRef)),this._portal}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(k.aV),a.Y36(a.SBq),a.Y36(a.s_b),a.Y36(H),a.Y36(T,8),a.Y36(D,10),a.Y36(x.Is,8),a.Y36(n.tE))},e.\u0275dir=a.lG2({type:e,hostVars:3,hostBindings:function(e,t){1&e&&a.NdJ("mousedown",function(e){return t._handleMousedown(e)})("keydown",function(e){return t._handleKeydown(e)})("click",function(e){return t._handleClick(e)}),2&e&&a.uIk("aria-haspopup",t._ariaHaspopup)("aria-expanded",t._ariaExpanded)("aria-controls",t._ariaControl)},inputs:{restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"],_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"}}),e})(),V=(()=>{class e extends q{}return e.\u0275fac=function(){let t;return function(i){return(t||(t=a.n5z(e)))(i||e)}}(),e.\u0275dir=a.lG2({type:e,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-menu-trigger"],exportAs:["matMenuTrigger"],features:[a.qOj]}),e})(),G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({providers:[z],imports:[[y.ez,M.BQ,M.si,k.U8],w.ZD,M.BQ]}),e})()}}]);