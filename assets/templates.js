const { App } = owl;

App.registerTemplate("devtools.ComponentsTree", function devtools_ComponentsTree(app, bdom, helpers
) {
  let { text, createBlock, list, multi, html, toggler, comment } = bdom;
  let { bind } = helpers;
  const comp1 = app.createComponent(`SearchBar`, true, false, true, false);
  const comp2 = app.createComponent(`TreeElement`, true, false, true, false);
  const comp3 = app.createComponent(`DetailsWindow`, true, false, false, false);
  
  let block1 = createBlock(`<div id="container" block-handler-0="mouseover.stop" block-handler-1="mouseout.stop"><div class="split-screen-container"><div class="split-screen-left" block-attribute-2="style"><div class="panel-top"><block-child-0/></div><div class="horizontal-border"/><div id="tree-container"><block-child-1/></div></div><div class="split-screen-border" block-attribute-3="style" block-handler-4="mousedown" block-handler-5="mouseup"/><div class="split-screen-right" block-attribute-6="style"><block-child-2/></div></div></div>`);
  
  return function template(ctx, node, key = "") {
    let hdlr1 = ["stop", ctx['removeHighlight'], ctx];
    let hdlr2 = ["stop", ctx['removeHighlight'], ctx];
    let attr1 = `width:${ctx['state'].leftWidth}px;`;
    const b2 = comp1(Object.assign({}, ctx['state'].search, {toggleSelector: bind(this, ctx['toggleSelector']),updateSearch: bind(this, ctx['updateSearch']),setSearchIndex: bind(this, ctx['setSearchIndex'])}), key + `__1`, node, this, null);
    const b3 = comp2(Object.assign({}, ctx['state'].root, {search: ctx['state'].search.search,searchResults: ctx['state'].search.searchResults,renderPaths: ctx['state'].renderPaths,toggleComponentTreeElementDisplay: bind(this, ctx['toggleComponentTreeElementDisplay']),toggleComponentAndChildren: bind(this, ctx['toggleComponentAndChildren']),selectComponent: bind(this, ctx['selectComponent'])}), key + `__2`, node, this, null);
    let attr2 = `left:${ctx['state'].leftWidth}px;`;
    let hdlr3 = [ctx['handleMouseDown'], ctx];
    let hdlr4 = [ctx['handleMouseUp'], ctx];
    let attr3 = `width:${ctx['state'].rightWidth}px;`;
    const b4 = comp3({activeComponent: ctx['state'].activeComponent,width: ctx['state'].rightWidth,toggleObjectTreeElementsDisplay: bind(this, ctx['toggleObjectTreeElementsDisplay']),loadGetterContent: bind(this, ctx['loadGetterContent']),expandSubscriptionsKeys: bind(this, ctx['expandSubscriptionsKeys']),editObjectTreeElement: bind(this, ctx['editObjectTreeElement']),refreshComponent: bind(this, ctx['refreshComponent'])}, key + `__3`, node, this, null);
    return block1([hdlr1, hdlr2, attr1, attr2, hdlr3, hdlr4, attr3], [b2, b3, b4]);
  }
});

App.registerTemplate("devtools.DetailsWindow", function devtools_DetailsWindow(app, bdom, helpers
) {
  let { text, createBlock, list, multi, html, toggler, comment } = bdom;
  let { prepareList, withKey } = helpers;
  const comp1 = app.createComponent(`ObjectTreeElement`, true, false, true, false);
  const comp2 = app.createComponent(`Subscriptions`, true, false, false, false);
  const comp3 = app.createComponent(`ObjectTreeElement`, true, false, true, false);
  const comp4 = app.createComponent(`ObjectTreeElement`, true, false, true, false);
  
  let block1 = createBlock(`<div class="details-window"><div id="detailsWindowHead" class="panel-top"><div class="name-wrapper"><b><block-text-0/></b></div><i class="fa fa-eye utility-icon me-2" aria-hidden="true" block-handler-1="click.stop"/><i class="fa fa-bug utility-icon me-2" aria-hidden="true" block-handler-2="click.stop"/><i class="fa fa-file-code-o utility-icon me-2" aria-hidden="true" block-handler-3="click.stop"/><i class="fa fa-refresh utility-icon me-2" aria-hidden="true" block-handler-4="click.stop"/></div><div class="horizontal-border"/><div class="details-container"><div id="props" style="border: none;" class="details-panel py-1"><div class="details-panel-head"><b>props</b><i class="fa fa-bug utility-icon pt-1 me-2" aria-hidden="true" block-handler-5="click.stop"/></div><block-child-0/></div><div id="subscriptions" class="details-panel py-1"><div class="details-panel-head"><b>subscriptions</b><i class="fa fa-bug utility-icon pt-1 me-2" aria-hidden="true" block-handler-6="click.stop"/></div><block-child-1/></div><div id="env" class="details-panel py-1"><div class="details-panel-head"><b>env</b><i class="fa fa-bug utility-icon pt-1 me-2" aria-hidden="true" block-handler-7="click.stop"/></div><block-child-2/></div><div id="instance" class="details-panel py-1"><div class="details-panel-head"><b>instance</b><i class="fa fa-bug utility-icon pt-1 me-2" aria-hidden="true" block-handler-8="click.stop"/></div><block-child-3/></div></div></div>`);
  
  return function template(ctx, node, key = "") {
    let txt1 = ctx['props'].activeComponent.name;
    let hdlr1 = ["stop", ctx['inspectComponentInDOM'], ctx];
    let hdlr2 = ["stop", ()=>this.logComponentInConsole("component"), ctx];
    let hdlr3 = ["stop", ctx['inspectComponentSource'], ctx];
    let hdlr4 = ["stop", ctx['refreshComponent'], ctx];
    let hdlr5 = ["stop", ()=>this.logComponentInConsole("props"), ctx];
    ctx = Object.create(ctx);
    const [k_block2, v_block2, l_block2, c_block2] = prepareList(ctx['props'].activeComponent.props);;
    for (let i1 = 0; i1 < l_block2; i1++) {
      ctx[`key`] = v_block2[i1];
      const key1 = ctx['key'];
      c_block2[i1] = withKey(comp1(Object.assign({}, ctx['props'].activeComponent.props[ctx['key']], {componentPath: ctx['props'].activeComponent.path,toggleObjectTreeElementsDisplay: ctx['props'].toggleObjectTreeElementsDisplay,loadGetterContent: ctx['props'].loadGetterContent,editObjectTreeElement: ctx['props'].editObjectTreeElement}), key + `__1__${key1}`, node, this, null), key1);
    }
    ctx = ctx.__proto__;
    const b2 = list(c_block2);
    let hdlr6 = ["stop", ()=>this.logComponentInConsole("subscription"), ctx];
    const b4 = comp2({subscriptions: ctx['props'].activeComponent.subscriptions,componentPath: ctx['props'].activeComponent.path,toggleObjectTreeElementsDisplay: ctx['props'].toggleObjectTreeElementsDisplay,loadGetterContent: ctx['props'].loadGetterContent,expandSubscriptionsKeys: ctx['props'].expandSubscriptionsKeys,editObjectTreeElement: ctx['props'].editObjectTreeElement}, key + `__2`, node, this, null);
    let hdlr7 = ["stop", ()=>this.logComponentInConsole("env"), ctx];
    ctx = Object.create(ctx);
    const [k_block5, v_block5, l_block5, c_block5] = prepareList(ctx['props'].activeComponent.env);;
    for (let i1 = 0; i1 < l_block5; i1++) {
      ctx[`key`] = v_block5[i1];
      const key1 = ctx['key'];
      c_block5[i1] = withKey(comp3(Object.assign({}, ctx['props'].activeComponent.env[ctx['key']], {componentPath: ctx['props'].activeComponent.path,toggleObjectTreeElementsDisplay: ctx['props'].toggleObjectTreeElementsDisplay,loadGetterContent: ctx['props'].loadGetterContent,editObjectTreeElement: ctx['props'].editObjectTreeElement}), key + `__3__${key1}`, node, this, null), key1);
    }
    ctx = ctx.__proto__;
    const b5 = list(c_block5);
    let hdlr8 = ["stop", ()=>this.logComponentInConsole("instance"), ctx];
    ctx = Object.create(ctx);
    const [k_block7, v_block7, l_block7, c_block7] = prepareList(ctx['props'].activeComponent.instance);;
    for (let i1 = 0; i1 < l_block7; i1++) {
      ctx[`key`] = v_block7[i1];
      const key1 = ctx['key'];
      c_block7[i1] = withKey(comp4(Object.assign({}, ctx['props'].activeComponent.instance[ctx['key']], {componentPath: ctx['props'].activeComponent.path,toggleObjectTreeElementsDisplay: ctx['props'].toggleObjectTreeElementsDisplay,loadGetterContent: ctx['props'].loadGetterContent,editObjectTreeElement: ctx['props'].editObjectTreeElement}), key + `__4__${key1}`, node, this, null), key1);
    }
    const b7 = list(c_block7);
    return block1([txt1, hdlr1, hdlr2, hdlr3, hdlr4, hdlr5, hdlr6, hdlr7, hdlr8], [b2, b4, b5, b7]);
  }
});

App.registerTemplate("devtools.ObjectTreeElement", function devtools_ObjectTreeElement(app, bdom, helpers
) {
  let { text, createBlock, list, multi, html, toggler, comment } = bdom;
  let { safeOutput, prepareList, withKey } = helpers;
  const comp1 = app.createComponent(`ObjectTreeElement`, true, false, true, false);
  
  let block2 = createBlock(`<div class="my-0 p-0 object-line" block-handler-0="click.stop" block-handler-1="contextmenu.prevent"><div block-attribute-2="style"><block-child-0/><block-child-1/><block-child-2/>: <block-child-3/><block-child-4/></div></div>`);
  let block3 = createBlock(`<i class="fa fa-caret-right mx-1" block-attribute-0="style"/>`);
  let block4 = createBlock(`<i class="fa fa-caret-right mx-1" block-attribute-0="style"/>`);
  let block6 = createBlock(`<div class="getter-content" block-handler-0="click.stop"><block-child-0/></div>`);
  let block8 = createBlock(`<div class="object-content" block-handler-0="dblclick.stop"><block-child-0/><block-child-1/><block-child-1/></div>`);
  let block9 = createBlock(`<input block-attribute-0="id" type="text" placeholder="" block-attribute-1="value" block-handler-2="keyup"/>`);
  let block11 = createBlock(`<div class="custom-menu hidden" block-attribute-0="id"><ul class="my-1"><li class="custom-menu-item" block-handler-1="click">Store as global variable</li><block-child-0/></ul></div>`);
  let block12 = createBlock(`<li class="custom-menu-item" block-handler-0="click">Inspect function source code</li>`);
  
  return function template(ctx, node, key = "") {
    let b2,b11,b13;
    let b3,b4,b5,b6,b8;
    let hdlr1 = ["stop", ctx['toggleDisplay'], ctx];
    let hdlr2 = ["prevent", ctx['openMenu'], ctx];
    let attr1 = `transform: translateX(calc(${ctx['props'].depth} * 0.8rem + 0.3rem))`;
    if (ctx['props'].hasChildren) {
      let attr2 = `cursor: pointer;${ctx['props'].toggled?'transform: rotate(90deg);':''}`;
      b3 = block3([attr2]);
    } else {
      let attr3 = `cursor: pointer; visibility: hidden;`;
      b4 = block4([attr3]);
    }
    b5 = safeOutput(ctx['objectName']);
    if (ctx['props'].contentType=='getter') {
      let hdlr3 = ["stop", ctx['loadGetterContent'], ctx];
      const b7 = safeOutput(ctx['props'].content);
      b6 = block6([hdlr3], [b7]);
    } else {
      let b9,b10;
      let hdlr4 = ["stop", ctx['setupEditMode'], ctx];
      if (ctx['state'].editMode) {
        let attr4 = `objectEditionInput/${ctx['props'].path}`;
        let attr5 = new String((ctx['props'].content) || "");
        let hdlr5 = [ctx['editObject'], ctx];
        b9 = block9([attr4, attr5, hdlr5]);
      } else {
        b10 = safeOutput(ctx['props'].content);
      }
      b8 = block8([hdlr4], [b9, b10]);
    }
    b2 = block2([hdlr1, hdlr2, attr1], [b3, b4, b5, b6, b8]);
    let b12;
    let attr6 = `customMenu/${ctx['props'].path}`;
    let hdlr6 = [ctx['storeObjectAsGlobal'], ctx];
    if (ctx['props'].contentType=="function") {
      let hdlr7 = [ctx['inspectFunctionSource'], ctx];
      b12 = block12([hdlr7]);
    }
    b11 = block11([attr6, hdlr6], [b12]);
    if (ctx['props'].toggled) {
      ctx = Object.create(ctx);
      const [k_block13, v_block13, l_block13, c_block13] = prepareList(ctx['props'].children);;
      for (let i1 = 0; i1 < l_block13; i1++) {
        ctx[`child`] = v_block13[i1];
        const key1 = ctx['child'].name;
        c_block13[i1] = withKey(comp1(Object.assign({}, ctx['child'], {componentPath: ctx['props'].componentPath,toggleObjectTreeElementsDisplay: ctx['props'].toggleObjectTreeElementsDisplay,loadGetterContent: ctx['props'].loadGetterContent,editObjectTreeElement: ctx['props'].editObjectTreeElement}), key + `__1__${key1}`, node, this, null), key1);
      }
      ctx = ctx.__proto__;
      b13 = list(c_block13);
    }
    return multi([b2, b11, b13]);
  }
});

App.registerTemplate("devtools.SearchBar", function devtools_SearchBar(app, bdom, helpers
) {
  let { text, createBlock, list, multi, html, toggler, comment } = bdom;
  let { safeOutput } = helpers;
  
  let block2 = createBlock(`<div class="search-selector"><i class="fa fa-mouse-pointer" block-attribute-0="style" aria-hidden="true" block-handler-1="click.stop"/></div>`);
  let block3 = createBlock(`<div class="search-border mx-2"/>`);
  let block4 = createBlock(`<div class="search-bar-wrapper"><i class="fa fa-search search-icon" aria-hidden="true"/><input type="text" class="search-input" placeholder="Search" block-attribute-0="value" block-handler-1="keyup" block-handler-2="keydown"/><block-child-0/></div>`);
  let block6 = createBlock(`<div class="search-indicator"><block-child-0/>|<block-child-1/></div>`);
  let block9 = createBlock(`<div class="search-border mx-2"/>`);
  let block10 = createBlock(`<i class="fa fa-angle-up fa-lg utility-icon me-2" aria-hidden="true" block-handler-0="click.stop"/>`);
  let block11 = createBlock(`<i class="fa fa-angle-down fa-lg utility-icon me-2" aria-hidden="true" block-handler-0="click.stop"/>`);
  let block12 = createBlock(`<i class="fa fa-times fa-lg utility-icon" aria-hidden="true" block-handler-0="click.stop"/>`);
  
  return function template(ctx, node, key = "") {
    let attr1 = `color: ${ctx['props'].activeSelector?'rgb(41, 134, 255)':'rgb(0, 0, 0)'};`;
    let hdlr1 = ["stop", ctx['toggleSelector'], ctx];
    const b2 = block2([attr1, hdlr1]);
    const b3 = block3();
    let b5;
    let attr2 = new String((ctx['props'].search) || "");
    let hdlr2 = [ctx['updateSearch'], ctx];
    let hdlr3 = [ctx['fastNextSearch'], ctx];
    if (ctx['props'].search.length>0) {
      const b7 = safeOutput(ctx['props'].searchResults.length?ctx['props'].searchIndex+1:0);
      const b8 = safeOutput(ctx['props'].searchResults.length);
      const b6 = block6([], [b7, b8]);
      const b9 = block9();
      let hdlr4 = ["stop", ctx['getPrevSearch'], ctx];
      const b10 = block10([hdlr4]);
      let hdlr5 = ["stop", ctx['getNextSearch'], ctx];
      const b11 = block11([hdlr5]);
      let hdlr6 = ["stop", ctx['clearSearch'], ctx];
      const b12 = block12([hdlr6]);
      b5 = multi([b6, b9, b10, b11, b12]);
    }
    const b4 = block4([attr2, hdlr2, hdlr3], [b5]);
    return multi([b2, b3, b4]);
  }
});

App.registerTemplate("devtools.Subscriptions", function devtools_Subscriptions(app, bdom, helpers
) {
  let { text, createBlock, list, multi, html, toggler, comment } = bdom;
  let { prepareList, safeOutput, withKey } = helpers;
  const comp1 = app.createComponent(`ObjectTreeElement`, true, false, true, false);
  
  let block1 = createBlock(`<div id="subscriptionsPanel"><block-child-0/></div>`);
  let block3 = createBlock(`<div class="my-2"><div class="my-0 p-0 object-line" block-handler-0="click.stop"><div style="transform: translateX(calc(0.3rem))"><i class="fa fa-caret-right ms-1" block-attribute-1="style"/> keys: <block-child-0/></div></div><block-child-1/><block-child-2/></div>`);
  let block6 = createBlock(`<div class="my-0 p-0 object-line" block-attribute-0="style"><div style="transform: translateX(calc(1.1rem))" class="key-content"><i class="fa fa-caret-right mx-1" block-attribute-1="style"/><block-child-0/></div></div>`);
  
  return function template(ctx, node, key = "") {
    ctx = Object.create(ctx);
    const [k_block2, v_block2, l_block2, c_block2] = prepareList(ctx['subscriptions']);;
    for (let i1 = 0; i1 < l_block2; i1++) {
      ctx[`subscription`] = v_block2[i1];
      ctx[`subscription_index`] = i1;
      const key1 = ctx['subscription_index'];
      const v1 = ctx['subscription_index'];
      let hdlr1 = ["stop", (_ev)=>this.expandKeys(_ev,v1), ctx];
      let attr1 = `cursor: pointer;${ctx['subscription'].keysExpanded?'transform: rotate(90deg);':''}`;
      const b4 = safeOutput(this.keysContent(ctx['subscription_index']));
      ctx = Object.create(ctx);
      const [k_block5, v_block5, l_block5, c_block5] = prepareList(ctx['subscription'].keys);;
      for (let i2 = 0; i2 < l_block5; i2++) {
        ctx[`key`] = v_block5[i2];
        const key2 = ctx['keyIndex'];
        let attr2 = `display: ${ctx['subscription'].keysExpanded?'flex':'none'}`;
        let attr3 = `cursor: pointer; visibility: hidden;`;
        const b7 = safeOutput(ctx['key']);
        c_block5[i2] = withKey(block6([attr2, attr3], [b7]), key2);
      }
      ctx = ctx.__proto__;
      const b5 = list(c_block5);
      const b8 = comp1(Object.assign({}, ctx['subscription'].target, {componentPath: ctx['props'].componentPath,toggleObjectTreeElementsDisplay: ctx['props'].toggleObjectTreeElementsDisplay,loadGetterContent: ctx['props'].loadGetterContent,editObjectTreeElement: ctx['props'].editObjectTreeElement}), key + `__1__${key1}`, node, this, null);
      c_block2[i1] = withKey(block3([hdlr1, attr1], [b4, b5, b8]), key1);
    }
    const b2 = list(c_block2);
    return block1([], [b2]);
  }
});

App.registerTemplate("devtools.TreeElement", function devtools_TreeElement(app, bdom, helpers
) {
  let { text, createBlock, list, multi, html, toggler, comment } = bdom;
  let { safeOutput, prepareList, withKey } = helpers;
  const comp1 = app.createComponent(`TreeElement`, true, false, true, false);
  
  let block2 = createBlock(`<div block-attribute-0="id" block-attribute-1="class" class="tree-component my-0 p-0" block-handler-2="contextmenu.prevent" block-handler-3="mouseover.stop" block-handler-4="click.stop"><div class="component-wrapper" block-attribute-5="style"><block-child-0/><block-child-1/><div class="name-wrapper"><block-child-2/> <block-child-3/></div></div></div>`);
  let block3 = createBlock(`<i class="fa fa-caret-right mx-1" block-attribute-0="style" block-handler-1="click.stop"/>`);
  let block4 = createBlock(`<i class="fa fa-caret-right mx-1" block-attribute-0="style"/>`);
  let block7 = createBlock(`<div class="custom-menu hidden" block-attribute-0="id"><ul class="my-1"><li class="custom-menu-item" block-handler-1="click">Expand component and its children</li><li class="custom-menu-item" block-handler-2="click">Fold component and its children</li></ul></div>`);
  
  return function template(ctx, node, key = "") {
    let b2,b7,b8;
    let b3,b4,b5,b6;
    let attr1 = `treeElement/${ctx['props'].path}`;
    let attr2 = {'component-selected':ctx['props'].selected,'component-highlighted':ctx['props'].highlighted};
    let hdlr1 = ["prevent", ctx['openMenu'], ctx];
    let hdlr2 = ["stop", ctx['hoverComponent'], ctx];
    let hdlr3 = ["stop", ctx['toggleComponent'], ctx];
    let attr3 = `transform: translateX(calc(${ctx['props'].depth} * 0.8rem))`;
    if (ctx['props'].children.length>0) {
      let attr4 = `cursor: pointer;${ctx['props'].toggled?'transform: rotate(90deg);':''}`;
      let hdlr4 = ["stop", ctx['toggleDisplay'], ctx];
      b3 = block3([attr4, hdlr4]);
    } else {
      let attr5 = `cursor: pointer; visibility: hidden;`;
      b4 = block4([attr5]);
    }
    b5 = safeOutput(ctx['content']);
    b6 = safeOutput(this.getMinimizedKey());
    b2 = block2([attr1, attr2, hdlr1, hdlr2, hdlr3, attr3], [b3, b4, b5, b6]);
    let attr6 = `customMenu/${ctx['props'].path}`;
    let hdlr5 = [ctx['expandAllChildren'], ctx];
    let hdlr6 = [ctx['foldAllChildren'], ctx];
    b7 = block7([attr6, hdlr5, hdlr6]);
    if (ctx['props'].toggled) {
      ctx = Object.create(ctx);
      const [k_block8, v_block8, l_block8, c_block8] = prepareList(ctx['props'].children);;
      for (let i1 = 0; i1 < l_block8; i1++) {
        ctx[`child`] = v_block8[i1];
        const key1 = ctx['child'].key;
        c_block8[i1] = withKey(comp1(Object.assign({}, ctx['child'], {search: ctx['props'].search,searchResults: ctx['props'].searchResults,renderPaths: ctx['props'].renderPaths,toggleComponentAndChildren: ctx['props'].toggleComponentAndChildren,toggleComponentTreeElementDisplay: ctx['props'].toggleComponentTreeElementDisplay,selectComponent: ctx['props'].selectComponent}), key + `__1__${key1}`, node, this, null), key1);
      }
      ctx = ctx.__proto__;
      b8 = list(c_block8);
    }
    return multi([b2, b7, b8]);
  }
});

App.registerTemplate("devtools.events", function devtools_events(app, bdom, helpers
) {
  let { text, createBlock, list, multi, html, toggler, comment } = bdom;
  
  let block1 = createBlock(`<div id="container"> Events page </div>`);
  
  return function template(ctx, node, key = "") {
    return block1();
  }
});

App.registerTemplate("popup.popup_app", function popup_popup_app(app, bdom, helpers
) {
  let { text, createBlock, list, multi, html, toggler, comment } = bdom;
  
  let block1 = createBlock(`<div class="container m-0 p-4 text-white bg-dark" style="width: 370px"><block-child-0/><block-child-1/></div>`);
  let block2 = createBlock(`<p> Owl is not detected on this page. </p>`);
  let block3 = createBlock(`<p> Owl is detected on this page. Open DevTools and look for the Owl panel. </p>`);
  
  return function template(ctx, node, key = "") {
    let b2,b3;
    if (ctx['status'].value=='not_found') {
      b2 = block2();
    }
    if (ctx['status'].value=='enabled') {
      b3 = block3();
    }
    return block1([], [b2, b3]);
  }
});
