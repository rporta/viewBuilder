let UIGeneratorInterface = class {
	constructor(appVue) {
		this.appVue = appVue;

		//CREATE previsualizationLayer
		this.previsualizationLayer();

		//CREATE UI LAYER SECONDARY
		this.uiLayerSecondary();

		//CREATE UI LAYER PRIMARY
		this.uiLayerPrimary();

		//REGISTER EVENTS 
		this.registerEvents();

	}
	uiLayerPrimary() {
		//parameters config
		this.ulpProperty = new Object();
		this.ulpProperty.ButtonPantallaCompleta = false;

		this.ulpObject = new Object();
		this.ulpObject.uiLayerPrimary = this.appVue.newComponent("c-div").setColor("red");
		this.ulpObject.panelLeft = this.appVue.newComponent("c-div");
		this.ulpObject.panelRight = this.appVue.newComponent("c-div");


		this.appVue.create(this.ulpObject.uiLayerPrimary);

		$(this.ulpObject.uiLayerPrimary.$el).css("display", "flex");
		$(this.ulpObject.uiLayerPrimary.$el).css("position", "absolute");
		$(this.ulpObject.uiLayerPrimary.$el).css("width", "100%");
		// $(this.ulpObject.uiLayerPrimary.$el).css("height", "100%");
		// $(this.ulpObject.uiLayerPrimary.$el).css("opacity", " 0.5");

		this.ulpObject.uiLayerPrimary.create(this.ulpObject.panelLeft);
		this.ulpObject.uiLayerPrimary.create(this.ulpObject.panelRight);

		$(this.ulpObject.panelLeft.$el).css("position", "absolute");
		$(this.ulpObject.panelLeft.$el).css("top", "10px");
		$(this.ulpObject.panelLeft.$el).css("left", "50px");

		$(this.ulpObject.panelLeft.$el).css("-webkit-transition", "all 0.25s ease");
		$(this.ulpObject.panelLeft.$el).css("-moz-transition", "all 0.25s ease");
		$(this.ulpObject.panelLeft.$el).css("-o-transition", "all 0.25s ease");
		$(this.ulpObject.panelLeft.$el).css("-ms-transition", "all 0.25s ease");
		$(this.ulpObject.panelLeft.$el).css("transition", "all 0.25s ease");


		$(this.ulpObject.panelRight.$el).css("position", "absolute");
		$(this.ulpObject.panelRight.$el).css("top", "10px");
		$(this.ulpObject.panelRight.$el).css("right", "10px");

		this.ulpObject.ButtonRegilla = this.appVue.newComponent("c-button").setColor("purple");
		this.ulpObject.ButtonEscala = this.appVue.newComponent("c-button").setColor("purple");

		this.ulpObject.ButtonAtras = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonAdelante = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonGuardar = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonPantallaCompleta = this.appVue.newComponent("c-button");

		this.ulpObject.panelLeft.create(this.ulpObject.ButtonRegilla);
		this.ulpObject.panelLeft.create(this.ulpObject.ButtonEscala);

		this.ulpObject.panelRight.create(this.ulpObject.ButtonAtras);
		this.ulpObject.panelRight.create(this.ulpObject.ButtonAdelante);
		this.ulpObject.panelRight.create(this.ulpObject.ButtonGuardar);
		this.ulpObject.panelRight.create(this.ulpObject.ButtonPantallaCompleta);

		$(this.ulpObject.ButtonRegilla.$el).css("position", "relative");
		$(this.ulpObject.ButtonRegilla.$el).css("margin", "2.5px");
		// $(this.ulpObject.ButtonRegilla.$el).css("top", "25px");
		// $(this.ulpObject.ButtonRegilla.$el).css("left", "25px");

		$(this.ulpObject.ButtonEscala.$el).css("position", "relative");
		$(this.ulpObject.ButtonEscala.$el).css("margin", "2px");
		// $(this.ulpObject.ButtonEscala.$el).css("top", "25px");
		// $(this.ulpObject.ButtonEscala.$el).css("left", "25px");

		$(this.ulpObject.ButtonAtras.$el).css("position", "relative");
		$(this.ulpObject.ButtonAtras.$el).css("margin", "2.5px");
		// $(this.ulpObject.ButtonAtras.$el).css("top", "25px");
		// $(this.ulpObject.ButtonAtras.$el).css("left", "25px");

		$(this.ulpObject.ButtonAdelante.$el).css("position", "relative");
		$(this.ulpObject.ButtonAdelante.$el).css("margin", "2.5px");
		// $(this.ulpObject.ButtonAdelante.$el).css("top", "25px");
		// $(this.ulpObject.ButtonAdelante.$el).css("left", "25px");

		$(this.ulpObject.ButtonGuardar.$el).css("position", "relative");
		$(this.ulpObject.ButtonGuardar.$el).css("margin", "2.5px");
		// $(this.ulpObject.ButtonGuardar.$el).css("top", "25px");
		// $(this.ulpObject.ButtonGuardar.$el).css("left", "25px");

		$(this.ulpObject.ButtonPantallaCompleta.$el).css("position", "relative");
		$(this.ulpObject.ButtonPantallaCompleta.$el).css("margin", "2.5px");
		// $(this.ulpObject.ButtonPantallaCompleta.$el).css("top", "25px");
		// $(this.ulpObject.ButtonPantallaCompleta.$el).css("left", "25px");

		this.ulpObject.IconRegilla = this.appVue.newComponent("c-icon").setIcon("cloud");
		this.ulpObject.IconEscala = this.appVue.newComponent("c-icon").setIcon("cloud");
		this.ulpObject.IconAtras = this.appVue.newComponent("c-icon").setIcon("cloud");
		this.ulpObject.IconAdelante = this.appVue.newComponent("c-icon").setIcon("cloud");
		this.ulpObject.IconGuardar = this.appVue.newComponent("c-icon").setIcon("cloud");
		this.ulpObject.IconPantallaCompleta = this.appVue.newComponent("c-icon").setIcon("cloud");

		this.ulpObject.ButtonRegilla.create(this.ulpObject.IconRegilla);
		this.ulpObject.ButtonEscala.create(this.ulpObject.IconEscala);
		this.ulpObject.ButtonAtras.create(this.ulpObject.IconAtras);
		this.ulpObject.ButtonAdelante.create(this.ulpObject.IconAdelante);
		this.ulpObject.ButtonGuardar.create(this.ulpObject.IconGuardar);
		this.ulpObject.ButtonPantallaCompleta.create(this.ulpObject.IconPantallaCompleta);

		//esconder capa
		this.ulpObject.uiLayerPrimary.setShow(1);

	}
	uiLayerSecondary() {
		this.ulsObject = new Object();
		this.ulsProperty = new Object();
		this.ulsProperty.panelComponentLeftShort = true;
		//uiLayerSecondary
		this.ulsObject.uiLayerSecondary = this.appVue.newComponent("c-div").setColor("blue");
		this.appVue.create(this.ulsObject.uiLayerSecondary);
		$(this.ulsObject.uiLayerSecondary.$el).css("display", "flex");
		$(this.ulsObject.uiLayerSecondary.$el).css("position", "absolute");
		$(this.ulsObject.uiLayerSecondary.$el).css("width", "100%");
		$(this.ulsObject.uiLayerSecondary.$el).css("height", "100%");


		this.ulsObject.panelComponentLeft = this.appVue.newComponent("c-div").setColor("amber");
		this.ulsObject.panelPropertyRight = this.appVue.newComponent("c-div").setColor("red");
		this.ulsObject.uiLayerSecondary.create(this.ulsObject.panelComponentLeft);
		this.ulsObject.uiLayerSecondary.create(this.ulsObject.panelPropertyRight);


		//panelComponentLeft
		this.ulsObject.panelComponentLeft.setShadow(app.shadow[1]);
		$(this.ulsObject.panelComponentLeft.$el).css("position", "absolute");
		$(this.ulsObject.panelComponentLeft.$el).css("top", "0px");
		$(this.ulsObject.panelComponentLeft.$el).css("left", "0px");
		$(this.ulsObject.panelComponentLeft.$el).css("height", "100%");
		$(this.ulsObject.panelComponentLeft.$el).css("overflow-y", "hidden");
		$(this.ulsObject.panelComponentLeft.$el).css("overflow-x", "hidden");
		$(this.ulsObject.panelComponentLeft.$el).css("width", "40px");
		$(this.ulsObject.panelComponentLeft.$el).css("-webkit-transition", "all 0.25s ease");
		$(this.ulsObject.panelComponentLeft.$el).css("-moz-transition", "all 0.25s ease");
		$(this.ulsObject.panelComponentLeft.$el).css("-o-transition", "all 0.25s ease");
		$(this.ulsObject.panelComponentLeft.$el).css("-ms-transition", "all 0.25s ease");
		$(this.ulsObject.panelComponentLeft.$el).css("transition", "all 0.25s ease");

		//panelPropertyRight
		$(this.ulsObject.panelPropertyRight.$el).css("position", "absolute");
		$(this.ulsObject.panelPropertyRight.$el).css("top", "0px");
		$(this.ulsObject.panelPropertyRight.$el).css("right", "0px");
		$(this.ulsObject.panelPropertyRight.$el).css("height", "100%");
		$(this.ulsObject.panelPropertyRight.$el).css("width", "50px");
		$(this.ulsObject.panelPropertyRight.$el).css("-webkit-transition", "all 1s ease");
		$(this.ulsObject.panelPropertyRight.$el).css("-moz-transition", "all 1s ease");
		$(this.ulsObject.panelPropertyRight.$el).css("-o-transition", "all 1s ease");
		$(this.ulsObject.panelPropertyRight.$el).css("-ms-transition", "all 1s ease");
		$(this.ulsObject.panelPropertyRight.$el).css("transition", "all 1s ease");

		this.ulsObject.panelPropertyRight.setShow(0);

		//components
		var nameComponents = new Array();

		nameComponents.push("preloader");
		nameComponents.push("preloaderCircle");
		nameComponents.push("navbar");
		nameComponents.push("modal");
		nameComponents.push("section");
		nameComponents.push("container");
		nameComponents.push("div");
		nameComponents.push("row");
		nameComponents.push("col");
		nameComponents.push("header");
		nameComponents.push("main");
		nameComponents.push("footer");
		nameComponents.push("form");
		nameComponents.push("h");
		nameComponents.push("p");
		nameComponents.push("span");
		nameComponents.push("pre");
		nameComponents.push("icon");
		nameComponents.push("blockquotes");
		nameComponents.push("badge");
		nameComponents.push("br");
		nameComponents.push("divider");
		nameComponents.push("img");
		nameComponents.push("parallax");
		nameComponents.push("table");
		nameComponents.push("collection");
		nameComponents.push("collapsible");
		nameComponents.push("button");
		nameComponents.push("a");
		nameComponents.push("dropdown");
		nameComponents.push("inputFields");
		nameComponents.push("inputTextarea");
		nameComponents.push("inputSwitch");
		nameComponents.push("inputCheckbox");
		nameComponents.push("inputRadio");
		nameComponents.push("preloaderFull");
		nameComponents.push("preloaderCircleFull");


		this.ulsObject.component = new Object();

		for (var x in nameComponents) {
			var changeColor = (x % 2 === 0);
			var currentComponent = nameComponents[x];
			this.ulsObject.component[currentComponent] = this.appVue.newComponent("c-span").setColorText(this.appVue.colorText.bwt[1]);
			this.ulsObject.panelComponentLeft.create(this.ulsObject.component[currentComponent]);
			$(this.ulsObject.component[currentComponent].$el).css("display", "flex");
			$(this.ulsObject.component[currentComponent].$el).css("border-left-width", "5px");
			$(this.ulsObject.component[currentComponent].$el).css("border-left-style", "solid");
			// this.ulsObject.component[currentComponent].create(this.appVue.newComponent("c-icon").setIcon("cloud").setFloat(this.appVue.float.l));
			var currentIcon = this.appVue.newComponent("c-icon").setIcon("cloud").setColorText(this.appVue.colorText.bwt[1]);
			this.ulsObject.component[currentComponent].create(currentIcon);
			// $(currentIcon.$el).css("display", "inline");
			$(currentIcon.$el).css("position", "relative");
			$(currentIcon.$el).css("margin", "6px");

			if (changeColor) {
				this.ulsObject.component[currentComponent].setColor(" " + this.appVue.color.teal[5]);
				$(this.ulsObject.component[currentComponent].$el).css("border-left-color", this.appVue.colorHexa.teal[3]);

			} else {
				this.ulsObject.component[currentComponent].setColor(this.appVue.color.teal[8]);
				$(this.ulsObject.component[currentComponent].$el).css("border-left-color", this.appVue.colorHexa.teal[4]);
			}
			this.ulsObject.component[currentComponent].setText(currentComponent);
		}

	}
	previsualizationLayer() {
		this.plObject = new Object();
		this.plObject.previsualizationLayer = this.appVue.newComponent("c-div").setColor("green");
		this.appVue.create(this.plObject.previsualizationLayer);
	}
	registerEvents() {
		this.uiLayerPrimaryEvents();
		this.uiLayerSecondaryEvents();
		this.previsualizationLayerEvents();
	}
	uiLayerPrimaryEvents() {
		//events, se trabaja con la variable de instancia para acceder a los componentes 
		$(this.ulpObject.ButtonPantallaCompleta.$el).click(function(e) {

			if (UI.ulpProperty.ButtonPantallaCompleta) {
				//volver al modo edicion
				$(UI.ulsObject.panelComponentLeft.$el).css("width", "40px");
				UI.ulpObject.panelLeft.setShow(1);
				UI.ulpObject.panelLeft.setShow(1);
				UI.ulpObject.ButtonAtras.setShow(1);
				UI.ulpObject.ButtonAdelante.setShow(1);
				UI.ulpObject.ButtonGuardar.setShow(1);
			} else {
				//poner en pantalla completa
				$(UI.ulsObject.panelComponentLeft.$el).css("width", "0px");
				UI.ulpObject.panelLeft.setShow(0);
				UI.ulpObject.ButtonAtras.setShow(0);
				UI.ulpObject.ButtonAdelante.setShow(0);
				UI.ulpObject.ButtonGuardar.setShow(0);
			}

			UI.ulpProperty.ButtonPantallaCompleta = !UI.ulpProperty.ButtonPantallaCompleta;
		});
	}
	uiLayerSecondaryEvents() {
		//events, se trabaja con la variable de instancia para acceder a los componentes 
		$(this.ulsObject.panelComponentLeft.$el).mouseover(function(e) {
			if (UI.ulsProperty.panelComponentLeftShort) {
				UI.ulsProperty.panelComponentLeftShort = !UI.ulsProperty.panelComponentLeftShort;
				$(UI.ulsObject.panelComponentLeft.$el).css("width", "185px");
				$(UI.ulpObject.panelLeft.$el).css("left", "195px");
				$(UI.ulsObject.panelComponentLeft.$el).css("overflow-y", "scroll");
				UI.ulsObject.panelComponentLeft.setShadow(app.shadow[3]);
			}
		});
		$(this.ulsObject.panelComponentLeft.$el).mouseout(function(e) {
			if (!UI.ulsProperty.panelComponentLeftShort) {
				UI.ulsProperty.panelComponentLeftShort = !UI.ulsProperty.panelComponentLeftShort;
				$(UI.ulsObject.panelComponentLeft.$el).css("width", "40px");
				$(UI.ulsObject.panelComponentLeft.$el).css("overflow-y", "hidden");
				$(UI.ulpObject.panelLeft.$el).css("left", "50px");
				UI.ulsObject.panelComponentLeft.setShadow(app.shadow[0]);
			}
		});
	}
	previsualizationLayerEvents() {
		// events, se trabaja con la variable de instancia para acceder a los componentes 
		// $(this.ulsObject.uiLayerSecondary.$el).mouseover(function(e) {
		// 	if (UI.ulsProperty.panelComponentLeftShort) {
		// 		UI.ulsProperty.panelComponentLeftShort = !UI.ulsProperty.panelComponentLeftShort;
		// 		$(UI.ulsObject.panelComponentLeft.$el).css("width", "40px");
		// 		$(UI.ulsObject.panelComponentLeft.$el).css("overflow-y", "hidden");
		// 		$(UI.ulpObject.panelLeft.$el).css("left", "50px");
		// 		UI.ulsObject.panelComponentLeft.setShadow(app.shadow[0]);
		// 	}
		// });
	}
}