let UIGeneratorInterface = class {

	static get UI() {
		return this._UI;
	}
	static set UI(arg) {
		this._UI = arg;
		return arg;
	}
	static getInstance(appVue) {
		if (typeof UIGeneratorInterface.UI === "undefined") {
			UIGeneratorInterface.UI = new UIGeneratorInterface(appVue);
		}
		return UIGeneratorInterface.UI;
	}
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
		this.ulpObject.uiLayerPrimary = this.appVue.newComponent("c-div")
			.setColor("red");
		this.ulpObject.panelLeft = this.appVue.newComponent("c-div");
		this.ulpObject.panelRight = this.appVue.newComponent("c-div");

		this.appVue.create(this.ulpObject.uiLayerPrimary);

		$(this.ulpObject.uiLayerPrimary.$el)
			.css("display", "flex")
			.css("position", "absolute")
			.css("width", "100%");

		this.ulpObject.uiLayerPrimary.create(this.ulpObject.panelLeft);
		this.ulpObject.uiLayerPrimary.create(this.ulpObject.panelRight);

		$(this.ulpObject.panelLeft.$el)
			.css("position", "absolute")
			.css("top", "10px")
			.css("left", "88px")
			.css("-webkit-transition", "all 0.25s ease")
			.css("-moz-transition", "all 0.25s ease")
			.css("-o-transition", "all 0.25s ease")
			.css("-ms-transition", "all 0.25s ease")
			.css("transition", "all 0.25s ease");

		$(this.ulpObject.panelRight.$el)
			.css("position", "absolute")
			.css("top", "10px")
			.css("right", "10px")

			.css("-webkit-transition", "all 0.25s ease")
			.css("-moz-transition", "all 0.25s ease")
			.css("-o-transition", "all 0.25s ease")
			.css("-ms-transition", "all 0.25s ease")
			.css("transition", "all 0.25s ease");

		this.ulpObject.ButtonRegilla = this.appVue.newComponent("c-button").setColor("purple");
		this.ulpObject.ButtonEscala = this.appVue.newComponent("c-button").setColor("purple");
		this.ulpObject.ButtonAtras = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonAdelante = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonGuardar = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonPropiedades = this.appVue.newComponent("c-button").setShow(0);
		this.ulpObject.ButtonPantallaCompleta = this.appVue.newComponent("c-button");

		this.ulpObject.panelLeft.create(this.ulpObject.ButtonRegilla);
		this.ulpObject.panelLeft.create(this.ulpObject.ButtonEscala);

		this.ulpObject.panelRight.create(this.ulpObject.ButtonPropiedades);
		this.ulpObject.panelRight.create(this.ulpObject.ButtonAtras);
		this.ulpObject.panelRight.create(this.ulpObject.ButtonAdelante);
		this.ulpObject.panelRight.create(this.ulpObject.ButtonGuardar);
		this.ulpObject.panelRight.create(this.ulpObject.ButtonPantallaCompleta);

		$(this.ulpObject.ButtonRegilla.$el)
			.css("position", "relative")
			.css("margin", "2.5px");

		$(this.ulpObject.ButtonEscala.$el)
			.css("position", "relative")
			.css("margin", "2px");

		$(this.ulpObject.ButtonAtras.$el)
			.css("position", "relative")
			.css("margin", "2.5px");

		$(this.ulpObject.ButtonAdelante.$el)
			.css("position", "relative")
			.css("margin", "2.5px");

		$(this.ulpObject.ButtonGuardar.$el)
			.css("position", "relative")
			.css("margin", "2.5px");

		$(this.ulpObject.ButtonPropiedades.$el)
			.css("position", "relative")
			.css("margin", "2.5px");

		$(this.ulpObject.ButtonPantallaCompleta.$el)
			.css("position", "relative")
			.css("margin", "2.5px");


		this.ulpObject.IconRegilla = this.appVue.newComponent("c-icon")
			.setIcon("grid_on");
		this.ulpObject.IconEscala = this.appVue.newComponent("c-icon")
			.setIcon("open_in_new");
		this.ulpObject.IconAtras = this.appVue.newComponent("c-icon")
			.setIcon("undo");
		this.ulpObject.IconAdelante = this.appVue.newComponent("c-icon")
			.setIcon("redo");
		this.ulpObject.IconGuardar = this.appVue.newComponent("c-icon")
			.setIcon("save");
		this.ulpObject.IconButtonPropiedades = this.appVue.newComponent("c-icon")
			.setIcon("arrow_forward");
		this.ulpObject.IconPantallaCompleta = this.appVue.newComponent("c-icon")
			.setIcon("fullscreen");

		this.ulpObject.ButtonRegilla.create(this.ulpObject.IconRegilla);
		this.ulpObject.ButtonEscala.create(this.ulpObject.IconEscala);
		this.ulpObject.ButtonAtras.create(this.ulpObject.IconAtras);
		this.ulpObject.ButtonAdelante.create(this.ulpObject.IconAdelante);
		this.ulpObject.ButtonGuardar.create(this.ulpObject.IconGuardar);
		this.ulpObject.ButtonPropiedades.create(this.ulpObject.IconButtonPropiedades);
		this.ulpObject.ButtonPantallaCompleta.create(this.ulpObject.IconPantallaCompleta);

		//esconder capa
		this.ulpObject.uiLayerPrimary.setShow(1);

	}
	uiLayerSecondary() {
		this.ulsObject = new Object();
		this.ulsProperty = new Object();
		this.ulsProperty.panelComponentLeftShort = true;
		this.ulsProperty.panelPropertyRightShow = false;

		//uiLayerSecondary
		this.ulsObject.uiLayerSecondary = this.appVue.newComponent("c-div")
			.setColor("blue");
		this.appVue.create(this.ulsObject.uiLayerSecondary);

		$(this.ulsObject.uiLayerSecondary.$el)
			.css("display", "flex")
			.css("position", "absolute")
			.css("width", "100%")
			.css("height", "100%")
			.css("-webkit-touch-callout", "none")
			.css("-webkit-user-select", "none")
			.css("-khtml-user-select", "none")
			.css("-moz-user-select", "none")
			.css("-ms-user-select", "none")
			.css("user-select", "none");

		this.ulsObject.panelComponentLeft = this.appVue.newComponent("c-div");
		this.ulsObject.panelPropertyRight = this.appVue.newComponent("c-div")
			.setColor(this.appVue.color.indigo[7])
			.setShadow(this.appVue.shadow[0]);
		this.ulsObject.uiLayerSecondary.create(this.ulsObject.panelComponentLeft);
		this.ulsObject.uiLayerSecondary.create(this.ulsObject.panelPropertyRight);

		//panelComponentLeft
		$(this.ulsObject.panelComponentLeft.$el)
			.css("position", "absolute")
			.css("white-space", "nowrap")
			.css("top", "0px")
			.css("left", "0px")
			.css("height", "100%")
			.css("overflow-y", "hidden")
			.css("overflow-x", "hidden")
			.css("width", "80px")
			.css("-webkit-transition", "all 0.30s ease")
			.css("-moz-transition", "all 0.30s ease")
			.css("-o-transition", "all 0.30s ease")
			.css("-ms-transition", "all 0.30s ease")
			.css("transition", "all 0.30s ease");

		//panelPropertyRight
		$(this.ulsObject.panelPropertyRight.$el)
			.css("position", "absolute")
			// $(this.ulsObject.panelPropertyRight.$el).css("white-space", "nowrap")
			.css("top", "0px")
			.css("right", "0px")
			.css("height", "100%")
			.css("overflow-y", "scroll")
			// .css("overflow-x", "hidden")
			.css("width", "0px")
			.css("-webkit-transition", "all 0.30s ease")
			.css("-moz-transition", "all 0.30s ease")
			.css("-o-transition", "all 0.30s ease")
			.css("-ms-transition", "all 0.30s ease")
			.css("transition", "all 0.30s ease");

		//object : panelPropertyRight
		this.ulsObject.p = this.appVue.newComponent("c-p")
			.setColorText(this.appVue.colorText.bwt[1])
			.setTextAling(this.appVue.textAling.c)
			.setShow(0);

		this.ulsObject.div = this.appVue.newComponent("c-div")
			.setShow(0);
		this.ulsObject.panelPropertyRight.create(this.ulsObject.p);
		this.ulsObject.panelPropertyRight.create(this.ulsObject.div);

		//components
		var nameComponents = new Array();

		for (var x in this.appVue.$options.components) {
			if (x.indexOf("c-") !== -1 && x.indexOf("test") === -1) {
				var name = x.replace("c-", "");
				nameComponents.push(name);
			}
		}

		this.ulsObject.component = new Object();

		for (var x in nameComponents) {
			var changeColor = (x % 2 === 0);
			var currentComponent = nameComponents[x];
			this.ulsObject.component[currentComponent] = this.appVue.newComponent("c-button")
				.setColorText(this.appVue.colorText.bwt[1]);
			this.ulsObject.panelComponentLeft.create(this.ulsObject.component[currentComponent]);
			this.ulsObject.component[currentComponent].setShadow(this.appVue.shadow[0]);
			$(this.ulsObject.component[currentComponent].$el)
				.css("display", "block")
				.css("border-left-width", "5px")
				.css("border-left-style", "solid")
				.css("margin-top", "13px")
				.css("margin-bottom", "13px")
				.css("margin-left", "13px")
				.css("width", "52px") //boton corto
				.css("text-align", "left");

			var currentIcon = this.appVue.newComponent("c-icon")
				.setIcon("extension")
				.setColorText(this.appVue.colorText.bwt[1])
				.setFloat(this.appVue.float.l);
			this.ulsObject.component[currentComponent].create(currentIcon);

			if (changeColor) {
				this.ulsObject.component[currentComponent].setColor(" " + this.appVue.color.teal[5]);
				$(this.ulsObject.component[currentComponent].$el)
					.css("border-left-color", this.appVue.colorHexa.teal[3]);
			} else {
				this.ulsObject.component[currentComponent].setColor(this.appVue.color.teal[8]);
				$(this.ulsObject.component[currentComponent].$el)
					.css("border-left-color", this.appVue.colorHexa.teal[4]);
			}
			this.ulsObject.component[currentComponent].setText(currentComponent);
		}

	}
	previsualizationLayer() {
		this.history = new Object();
		this.save = new Object();
		this.plObject = new Object();
		this.plObject.previsualizationLayer = this.appVue.newComponent("c-div")
			.setColor("green");
		this.appVue.create(this.plObject.previsualizationLayer);
	}
	registerEvents() {
		this.uiLayerPrimaryEvents();
		this.uiLayerSecondaryEvents();
		this.previsualizationLayerEvents();
	}
	uiLayerPrimaryEvents() {
		//events, se trabaja con la variable de instancia para acceder a los componentes 
		$(this.ulpObject.ButtonPantallaCompleta.$el)
			.click(function(e) {

				if (UIGeneratorInterface.UI.ulpProperty.ButtonPantallaCompleta) {

					//volver al modo edicion
					$(UIGeneratorInterface.UI.ulsObject.panelComponentLeft.$el)
						.css("width", "80px");
					UIGeneratorInterface.UI.ulpObject.panelLeft.setShow(1);
					UIGeneratorInterface.UI.ulpObject.panelLeft.setShow(1);
					UIGeneratorInterface.UI.ulpObject.ButtonAtras.setShow(1);
					UIGeneratorInterface.UI.ulpObject.ButtonAdelante.setShow(1);
					UIGeneratorInterface.UI.ulpObject.ButtonGuardar.setShow(1);
					UIGeneratorInterface.UI.ulpObject.IconPantallaCompleta.setIcon("fullscreen");
					if (UIGeneratorInterface.UI.ulsProperty.panelPropertyRightShow) {
						$(UIGeneratorInterface.UI.ulsObject.panelPropertyRight.$el)
							.css("width", "270px");
						$(UIGeneratorInterface.UI.ulpObject.panelRight.$el)
							.css("right", "278px");
						UIGeneratorInterface.UI.ulsObject.p.setShow(1);
						UIGeneratorInterface.UI.ulsObject.div.setShow(1);
						UIGeneratorInterface.UI.ulpObject.ButtonPropiedades.setShow(1);
					}
				} else {
					UIGeneratorInterface.UI.ulpObject.IconPantallaCompleta.setIcon("fullscreen_exit");

					//poner en pantalla completa
					$(UIGeneratorInterface.UI.ulsObject.panelComponentLeft.$el)
						.css("width", "0px");
					UIGeneratorInterface.UI.ulpObject.panelLeft.setShow(0);
					UIGeneratorInterface.UI.ulpObject.ButtonAtras.setShow(0);
					UIGeneratorInterface.UI.ulpObject.ButtonAdelante.setShow(0);
					UIGeneratorInterface.UI.ulpObject.ButtonGuardar.setShow(0);
					if (UIGeneratorInterface.UI.ulsProperty.panelPropertyRightShow) {
						$(UIGeneratorInterface.UI.ulsObject.panelPropertyRight.$el)
							.css("width", "0px");
						$(UIGeneratorInterface.UI.ulpObject.panelRight.$el)
							.css("right", "10px");
						UIGeneratorInterface.UI.ulsObject.p.setShow(0);
						UIGeneratorInterface.UI.ulsObject.div.setShow(0);
						UIGeneratorInterface.UI.ulpObject.ButtonPropiedades.setShow(0);
					}
				}

				UIGeneratorInterface.UI.ulpProperty.ButtonPantallaCompleta = !UIGeneratorInterface.UI.ulpProperty.ButtonPantallaCompleta;
			});
		$(this.ulpObject.ButtonPropiedades.$el).click(function(e) {
			if (!UIGeneratorInterface.UI.ulsProperty.panelPropertyRightShow) {
				//show property
				UIGeneratorInterface.UI.ulsProperty.panelPropertyRightShow = true;
				$(UIGeneratorInterface.UI.ulsObject.panelPropertyRight.$el)
					.css("width", "270px");
				$(UIGeneratorInterface.UI.ulpObject.panelRight.$el)
					.css("right", "278px");
				UIGeneratorInterface.UI.ulpObject.IconButtonPropiedades.setIcon("arrow_forward");
			} else {
				//!show property
				UIGeneratorInterface.UI.ulsProperty.panelPropertyRightShow = false;
				$(UIGeneratorInterface.UI.ulsObject.panelPropertyRight.$el)
					.css("width", "0px");
				$(UIGeneratorInterface.UI.ulpObject.panelRight.$el)
					.css("right", "10px");
				UIGeneratorInterface.UI.ulpObject.IconButtonPropiedades.setIcon("assignment");
			}
		});
		for (var x in this.ulsObject.component) {
			var currentComponent = x;
			$(this.ulsObject.component[currentComponent].$el)
				.click(function(e) {
					UIGeneratorInterface.UI.ulpObject.ButtonPropiedades.setShow(1);
					UIGeneratorInterface.UI.panelPropertyRightUpdate(e);
					if (!UIGeneratorInterface.UI.ulsProperty.panelPropertyRightShow) {
						UIGeneratorInterface.UI.ulsProperty.panelPropertyRightShow = true;
						$(UIGeneratorInterface.UI.ulpObject.panelRight.$el)
							.css("right", "278px");
						$(UIGeneratorInterface.UI.ulsObject.panelPropertyRight.$el)
							.css("width", "270px");
						UIGeneratorInterface.UI.ulsObject.p.setShow(1);
						UIGeneratorInterface.UI.ulsObject.div.setShow(1);
					}
				});
		}
	}
	uiLayerSecondaryEvents() {

		//events, se trabaja con la variable de instancia para acceder a los componentes 
		$(this.ulsObject.panelComponentLeft.$el)
			.mouseover(function(e) {
				if (UIGeneratorInterface.UI.ulsProperty.panelComponentLeftShort) {
					UIGeneratorInterface.UI.ulsProperty.panelComponentLeftShort = false;
					$(UIGeneratorInterface.UI.ulsObject.panelComponentLeft.$el)
						.css("width", "270px")
						.css("overflow-y", "scroll");
					$(UIGeneratorInterface.UI.ulpObject.panelLeft.$el)
						.css("left", "278px");
					for (var x in UIGeneratorInterface.UI.ulsObject.component) {
						var currentComponent = x;
						$(UIGeneratorInterface.UI.ulsObject.component[currentComponent].$el)
							.css("width", "233px"); //boton completo
					}
				}
			});
		$(this.ulsObject.panelComponentLeft.$el)
			.mouseout(function(e) {
				if (!UIGeneratorInterface.UI.ulsProperty.panelComponentLeftShort) {
					UIGeneratorInterface.UI.ulsProperty.panelComponentLeftShort = true;
					$(UIGeneratorInterface.UI.ulsObject.panelComponentLeft.$el)
						.css("width", "80px");
					$(UIGeneratorInterface.UI.ulsObject.panelComponentLeft.$el)
						.css("overflow-y", "hidden");
					$(UIGeneratorInterface.UI.ulpObject.panelLeft.$el)
						.css("left", "88px");
					for (var x in UIGeneratorInterface.UI.ulsObject.component) {
						var currentComponent = x;
						$(UIGeneratorInterface.UI.ulsObject.component[currentComponent].$el)
							.css("width", "52px"); //boton corto
					}

				}
			});
	}
	previsualizationLayerEvents() {
		// events, se trabaja con la variable de instancia para acceder a los componentes 
		$(this.ulsObject.uiLayerSecondary.$el)
			.click(function(e) {
				if (e.currentTarget === e.target) {
					UIGeneratorInterface.UI.panelPropertyRightOut(e);
				}
			});
	}

	panelPropertyRightOut() {
		if (UIGeneratorInterface.UI.ulsProperty.panelPropertyRightShow && !UIGeneratorInterface.UI.ulpProperty.ButtonPantallaCompleta) {
			UIGeneratorInterface.UI.ulsProperty.panelPropertyRightShow = false;
			$(UIGeneratorInterface.UI.ulpObject.panelRight.$el)
				.css("right", "10px");
			$(UIGeneratorInterface.UI.ulsObject.panelPropertyRight.$el)
				.css("width", "0px");
			UIGeneratorInterface.UI.ulsObject.p.setShow(0);
			UIGeneratorInterface.UI.ulsObject.div.setShow(0);
			UIGeneratorInterface.UI.ulpObject.ButtonPropiedades.setShow(0);
			if (UIGeneratorInterface.UI.panelColor) {
				UIGeneratorInterface.UI.panelColor.setShow(0);
			}
		}
	}
	panelColorInitialize(property, componentValue) {
		UIGeneratorInterface.UI.componentValue = componentValue;

		if (property === "color") {
			if (UIGeneratorInterface.UI.color) {
				delete UIGeneratorInterface.UI.color;
			}
			UIGeneratorInterface.UI.color = UIGeneratorInterface.UI.appVue.color;
		}
		if (property === "colorHexa") {
			if (UIGeneratorInterface.UI.color) {
				delete UIGeneratorInterface.UI.color;
			}
			UIGeneratorInterface.UI.color = UIGeneratorInterface.UI.appVue.color;
		}
		if (property === "colorText") {
			if (UIGeneratorInterface.UI.color) {
				delete UIGeneratorInterface.UI.color;
			}
			UIGeneratorInterface.UI.color = UIGeneratorInterface.UI.appVue.color;
		}
		UIGeneratorInterface.UI.componentValue.$el.addEventListener('click', UIGeneratorInterface.UI.resolvePanelColor, false);
		return true;
	}
	resolvePanelColor(e) {
		UIGeneratorInterface.UI.colorEvent = e;
		if (UIGeneratorInterface.UI.panelColor) {
			UIGeneratorInterface.UI.panelColor.$el.remove();
			delete UIGeneratorInterface.UI.panelColor;
		}

		UIGeneratorInterface.UI.panelColor = UIGeneratorInterface.UI.appVue.newComponent("c-div").setColor(UIGeneratorInterface.UI.appVue.color.bwt[2])
			// .setCardpanel(1)
			.setShow(0);
		UIGeneratorInterface.UI.panelColorTitle = UIGeneratorInterface.UI.appVue.newComponent("c-p").setColor(UIGeneratorInterface.UI.appVue.color.blue[7])
			.setShow(0)
			.setText("Paleta de colores")
			.setTextAling(UIGeneratorInterface.UI.appVue.textAling.c)
			.setCardpanel(1)
			.setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);

		UIGeneratorInterface.UI.appVue.create(UIGeneratorInterface.UI.panelColor);
		UIGeneratorInterface.UI.panelColor.create(UIGeneratorInterface.UI.panelColorTitle);
		// UIGeneratorInterface.UI.panelColor.$el.id = UIGeneratorInterface.UI.panelColor.$el.id + '-panel-color';
		// $(UIGeneratorInterface.UI.panelColor.$el).attr("id", UIGeneratorInterface.UI.panelColor.$el.id + '-panel-color');
		$(UIGeneratorInterface.UI.panelColor.$el)
			.css("z-index", "1")
			.css("width", "768px")
			.css("position", "absolute")
			.css("top", "50%")
			.css("left", "50%")
			.css("transform", "translate(-50%, -50%)");
		$(UIGeneratorInterface.UI.panelColorTitle.$el)
			.css("margin-top", "0px")
			.css("margin-bottom", "0px")
			.css("padding", "12px");
		UIGeneratorInterface.UI.ulsObject.colors = new Object();
		UIGeneratorInterface.UI.panelColor.setShow(1);
		UIGeneratorInterface.UI.panelColorTitle.setShow(1);

		UIGeneratorInterface.UI.ulsObject.componentColor = new Object();
		for (var x in UIGeneratorInterface.UI.color) {
			var currentColor = UIGeneratorInterface.UI.color[x];
			for (var j in currentColor) {
				var currentRangeColor = currentColor[j];
				UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor] = UIGeneratorInterface.UI.appVue.newComponent("c-button").setColor(currentRangeColor);
				UIGeneratorInterface.UI.panelColor.create(UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor]);
				UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor].$el.addEventListener('click', UIGeneratorInterface.UI.resolveColor, false);
			}
		}
	}
	resolveColor(e) {
		UIGeneratorInterface.UI.colorSet = e.target.__vue__.color;
		if (e.target.__vue__ && typeof UIGeneratorInterface.UI.colorEvent.target.__vue__.$parent === "undefined") {
			UIGeneratorInterface.UI.colorEvent.target.__vue__.setColor(UIGeneratorInterface.UI.colorSet);
		} else if (e.target.__vue__ && typeof UIGeneratorInterface.UI.colorEvent.target.__vue__.$parent !== "undefined") {
			UIGeneratorInterface.UI.colorEvent.target.__vue__.$parent.setColor(UIGeneratorInterface.UI.colorSet);
		}
		UIGeneratorInterface.UI.panelColor.setShow(0);
	}
	panelPropertyRightUpdate(e) {
		UIGeneratorInterface.UI.ulsObject.div.setShow(0);

		$(UIGeneratorInterface.UI.ulsObject.panelPropertyRight.$el)
			.css("width", "0px");
		$(UIGeneratorInterface.UI.ulpObject.panelRight.$el)
			.css("right", "10px");
		if (e.currentTarget.__vue__._isMounted && e.currentTarget.__vue__._isVue) {
			setTimeout(function() {
				UIGeneratorInterface.UI.ulsObject.div.clearVue();
				var currentNameComponent = 'c-' + e.currentTarget.__vue__.$parent.text;
				var currentComponent = UIGeneratorInterface.UI.appVue.$options.components[currentNameComponent];
				var allProperty = currentComponent.options.props;
				var disableProperty = new Array();
				disableProperty.push('space');
				disableProperty.push('percentage');
				disableProperty.push('menuD');
				disableProperty.push('menuM');
				disableProperty.push('inputLabelId');
				disableProperty.push('id');
				disableProperty.push('row');
				disableProperty.push('idA');
				disableProperty.push('dropdown');
				var ff = 0;
				for (var x in allProperty) {
					var changeColor = (ff % 2 === 0);
					var p = x.substr(1);
					var t = allProperty[x].type.name;
					if (t === "Array") {
						var d = allProperty[x].default();
					} else {

						var d = allProperty[x].default;
					}

					var property = p;
					var type = t;
					var defaultValue = d;

					if (disableProperty.indexOf(property) === -1) {
						var componentContainer = UIGeneratorInterface.UI.appVue.newComponent("c-div");
						var componentProperty = UIGeneratorInterface.UI.appVue.newComponent("c-p")
							.setText(property)
							.setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);
						if ((type === 'Array' || type === 'String') && /color/.exec(property) !== null) {
							var color;
							if (UIGeneratorInterface.UI.colorSet) {
								color = UIGeneratorInterface.UI.colorSet;
							} else {
								color = UIGeneratorInterface.UI.appVue.colorText.bwt[1];
							}
							var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-button")
								.setColorText(color);
							// $(componentValue.$el) brush
							// .css("margin-top", "0px");
							// $(componentValue.$el)
							// .css("margin-bottom", "0px");
						} else {
							var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-switch");
						}
						if (type === 'Number') {
							var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-switch");
						}
						if (type === 'Boolean') {
							var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-switch");
						}
						// if (type === 'String') {
						// 	var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-fields")
						// 		.setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);
						// }

						if (type === 'Object') {

						}
						if (type === 'Date') {

						}
						if (type === 'Function') {

						}
						if (type === 'Symbol') {

						}

						var currentIcon = UIGeneratorInterface.UI.appVue.newComponent("c-icon")
							.setIcon("extension")
							.setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1])
							.setFloat(UIGeneratorInterface.UI.appVue.float.l);

						UIGeneratorInterface.UI.ulsObject.p.setText("Component : " + currentNameComponent.charAt(2)
								.toUpperCase() + currentNameComponent.slice(3))
							.setColor(UIGeneratorInterface.UI.appVue.color.indigo[5])
							.setCardpanel(1);
						$(UIGeneratorInterface.UI.ulsObject.p.$el)
							.css("margin-top", "0px")
							.css("padding", "12px");
						UIGeneratorInterface.UI.ulsObject.div.create(componentContainer);
						componentContainer.create(currentIcon);
						componentContainer.create(componentProperty);
						componentContainer.create(componentValue);
						$(currentIcon.$el)
							.css("margin-left", "10px");
						$(currentIcon.$el)
							.css("margin-right", "10px");
						$(currentIcon.$el)
							.css("flex", "0 0 0%");

						$(componentContainer.$el)
							.css("align-items", "center");
						$(componentContainer.$el)
							.css("display", "flex");
						$(componentProperty.$el)
							.css("margin-right", "10px");
						$(componentProperty.$el)
							.css("flex", "0 0 0%");
						$(componentValue.$el)
							.css("margin-right", "15px")
							.css("flex", "2");

						$(componentValue.$el)
							.removeClass("input-field");

						if (changeColor) {
							componentContainer.setColor(UIGeneratorInterface.UI.appVue.color.indigo[7]);
						} else {
							componentContainer.setColor(UIGeneratorInterface.UI.appVue.color.indigo[9]);
						}

						//set Icons
						if ("show" === property) currentIcon.setIcon("filter_none");
						if (/color/.exec(property) !== null) {
							currentIcon.setIcon("format_paint");
							UIGeneratorInterface.UI.panelColorInitialize(property, componentValue);
						}
						if ("mode" === property) currentIcon.setIcon("swap_horiz");
						if ("progress" === property) currentIcon.setIcon("trending_flat");
						if (/size/.exec(property) !== null) currentIcon.setIcon("photo_size_select_small");



						setTimeout(function() {
							UIGeneratorInterface.UI.ulsObject.div.setShow(1);
							$(UIGeneratorInterface.UI.ulsObject.panelPropertyRight.$el)
								.css("width", "270px");
							$(UIGeneratorInterface.UI.ulpObject.panelRight.$el)
								.css("right", "278px");
						}, 500);
					}
					ff++;
				}
			}, 500);

		}

	}
}