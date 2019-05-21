app.setColor(app.generateColor());

var preloaderFull = app.newComponent('c-preloader-circle-full').setSectionColor(app.generateColor()).setColorHexa(app.generateColorHexa());
setTimeout(() => {
	preloaderFull.setShow(false);
}, 1000);
app.create(preloaderFull);

UIGeneratorInterface.getInstance(app);


// var footer = app.newComponent('c-footer').setText("").setColor(app.generateColor()).setColorText(app.generateColorText()).setTextAling(app.textAling.c);
// var main = app.newComponent('c-main').setText("").setColor(app.generateColor()).setColorText(app.generateColorText()).setTextAling(app.textAling.c);
// var header = app.newComponent('c-header').setText("").setColor(app.generateColor()).setColorText(app.generateColorText()).setTextAling(app.textAling.c);
// app.create(header);
// app.create(main);
// app.create(footer);
// var button = app.newComponent('c-button').setText("fafa");
// UI.ulsObject.uiLayerSecondary.create(button);