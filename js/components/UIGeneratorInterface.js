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
	showAvatar() {
		fetch('save/save.json')
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {});
	}
	constructor(appVue) {
		(async (appVue) => {
			//setp 1 load json 
			var save = await (() => {
				return new Promise(resolve => {
					fetch('save/save.json')
						.then(function(response) {
							resolve(response.json());
						})
						.then(function(json) {});
				});
			})();

			// console.log(save);

			this.appVue = appVue;

			//CREATE previsualizationLayer
			this.previsualizationLayer();

			//CREATE UI LAYER SECONDARY
			this.uiLayerSecondary();

			//CREATE UI LAYER PRIMARY
			this.uiLayerPrimary();

			//REGISTER EVENTS 
			this.registerEvents();
		})(appVue);
	}
	uiLayerPrimary() {
		//parameters config
		this.ulpProperty = new Object();
		this.ulpProperty.ButtonComponentList = false;
		this.ulpProperty.ButtonPantallaCompleta = false;
		this.ulpProperty.ButtonRegilla = false;
		this.ulpProperty.ButtonEscala = false;

		this.ulpObject = new Object();
		this.ulpObject.uiLayerPrimary = this.appVue.newComponent("c-div");
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

		this.ulpObject.ButtonLstComponent = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonAtras = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonAdelante = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonGuardar = this.appVue.newComponent("c-button");
		this.ulpObject.ButtonPropiedades = this.appVue.newComponent("c-button").setShow(0);
		this.ulpObject.ButtonPantallaCompleta = this.appVue.newComponent("c-button");

		this.ulpObject.panelLeft.create(this.ulpObject.ButtonRegilla);
		this.ulpObject.panelLeft.create(this.ulpObject.ButtonEscala);

		this.ulpObject.panelRight.create(this.ulpObject.ButtonPropiedades);
		this.ulpObject.panelRight.create(this.ulpObject.ButtonLstComponent);
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

		$(this.ulpObject.ButtonLstComponent.$el)
			.css("position", "relative")
			.css("margin", "2.5px");

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
			.setIcon("grid_off");
		this.ulpObject.IconEscala = this.appVue.newComponent("c-icon")
			.setIcon("check_box_outline_blank");
		this.ulpObject.IconListComponent = this.appVue.newComponent("c-icon")
			.setIcon("list");
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
		this.ulpObject.ButtonLstComponent.create(this.ulpObject.IconListComponent);
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
		this.ulsProperty.panelPropertyRightMove = false;
		this.ulsProperty.panelPropertyClick = false;

		//uiLayerSecondary
		this.ulsObject.uiLayerSecondary = this.appVue.newComponent("c-div");
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
			.css("overflow-y", "auto")
			// .css("overflow-x", "hidden")
			.css("width", "0px")
			.css("-webkit-transition", "all 0.30s ease")
			.css("-moz-transition", "all 0.30s ease")
			.css("-o-transition", "all 0.30s ease")
			.css("-ms-transition", "all 0.30s ease")
			.css("transition", "all 0.30s ease")
			.css("z-index", 1);

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
				this.ulsObject.component[currentComponent].setColor(this.appVue.color.cyan[7]);
				$(this.ulsObject.component[currentComponent].$el)
					.css("border-left-color", this.appVue.colorHexa.cyan[11]);
			} else {
				this.ulsObject.component[currentComponent].setColor(this.appVue.color.teal[7]);
				$(this.ulsObject.component[currentComponent].$el)
					.css("border-left-color", this.appVue.colorHexa.cyan[11]);
			}
			this.ulsObject.component[currentComponent].setText(currentComponent);
		}

	}
	previsualizationLayer() {
		this.history = new Object();
		this.save = new Object();
		this.save.componentList = new Object();
		this.plObject = new Object();
		this.plObject.previsualizationLayer = this.appVue.newComponent("c-div")
			.setColor("green");
		this.appVue.create(this.plObject.previsualizationLayer);
		$(this.plObject.previsualizationLayer.$el).css("z-index", 1);
	}
	registerEvents() {
		this.uiLayerPrimaryEvents();
		this.uiLayerSecondaryEvents();
		this.previsualizationLayerEvents();
	}
	resolvePanelComponent(e) {
		if (UIGeneratorInterface.UI.ulpProperty.ButtonComponentList) {
			//onButtonComponentList	
			UIGeneratorInterface.UI.componentEvent = e;
			if (UIGeneratorInterface.UI.panelComponent) {
				UIGeneratorInterface.UI.panelComponent.$el.remove();
				delete UIGeneratorInterface.UI.panelComponent;
			}
			UIGeneratorInterface.UI.panelComponent = UIGeneratorInterface.UI.appVue.newComponent("c-div").setColor(UIGeneratorInterface.UI.appVue.color.bwt[2])
				// .setCardpanel(1)
				.setShow(0);
			UIGeneratorInterface.UI.panelcontainerComponent = UIGeneratorInterface.UI.appVue.newComponent("c-div").setColor(UIGeneratorInterface.UI.appVue.color.bwt[1])
				// .setCardpanel(1)
				.setShow(0);
			UIGeneratorInterface.UI.panelComponentTitle = UIGeneratorInterface.UI.appVue.newComponent("c-p").setColor(UIGeneratorInterface.UI.appVue.color.blue[7])
				.setShow(0)
				.setText("Panel de componentes")
				.setTextAling(UIGeneratorInterface.UI.appVue.textAling.c)
				.setCardpanel(1)
				.setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);

			UIGeneratorInterface.UI.appVue.create(UIGeneratorInterface.UI.panelComponent);
			UIGeneratorInterface.UI.panelComponent.create(UIGeneratorInterface.UI.panelComponentTitle);
			UIGeneratorInterface.UI.panelComponent.create(UIGeneratorInterface.UI.panelcontainerComponent);
			// UIGeneratorInterface.UI.panelComponent.$el.id = UIGeneratorInterface.UI.panelComponent.$el.id + '-panel-color';
			// $(UIGeneratorInterface.UI.panelComponent.$el).attr("id", UIGeneratorInterface.UI.panelComponent.$el.id + '-panel-color');
			$(UIGeneratorInterface.UI.panelComponent.$el)
				.css("z-index", "1")
				.css("width", "768px")
				.css("position", "absolute")
				.css("top", "50%")
				.css("left", "50%")
				.css("transform", "translate(-50%, -50%)");
			$(UIGeneratorInterface.UI.panelComponentTitle.$el)
				.css("margin-top", "0px")
				.css("margin-bottom", "0px")
				.css("padding", "12px");
			$(UIGeneratorInterface.UI.panelcontainerComponent.$el)
				.css("overflow-y", "auto")
				.css("height", "485.8px");
			UIGeneratorInterface.UI.panelComponent.setShow(1);
			UIGeneratorInterface.UI.panelComponentTitle.setShow(1);
			UIGeneratorInterface.UI.panelcontainerComponent.setShow(0);

			for (var x in UIGeneratorInterface.UI.save.componentList) {
				console.log(currentComponent);
				var currentComponent = UIGeneratorInterface.UI.save.componentList[x];
				var infoComponent = new Object();

				infoComponent.name = currentComponent.$options.name;
				infoComponent.id = currentComponent.$el.id;
				infoComponent.uid = currentComponent._uid;
				infoComponent.data = new Object();
				for (var l in currentComponent._data) {
					var currentKey = l;
					var currentValue = currentComponent._data[l];

					infoComponent.data[currentKey] = currentValue;
				}
				var tempHtml = new Array();
				tempHtml.push("<p class = 'left-align' style = 'margin: 0px;'>");
				tempHtml.push("name : " + infoComponent.name);
				tempHtml.push("<br>");
				tempHtml.push("id : " + infoComponent.id);
				tempHtml.push("<br>");
				tempHtml.push("uid : " + infoComponent.uid);
				tempHtml.push("<br>");
				tempHtml.push("data : ");
				tempHtml.push("<p class = 'left-align'>");
				for (var g in infoComponent.data) {
					tempHtml.push(g + " : " + infoComponent.data[g]);
					tempHtml.push("<br>");

				}
				tempHtml.push("</p>");
				tempHtml.push("</p>");
				var tempJoin = tempHtml.join("");

				var tempOptionDelete = UIGeneratorInterface.UI.appVue.newComponent("c-button").setShow(0);
				var tempOptionShow = UIGeneratorInterface.UI.appVue.newComponent("c-button").setShow(0)
				var tempOptionMove = UIGeneratorInterface.UI.appVue.newComponent("c-button").setShow(0)
				var tempOptionProperty = UIGeneratorInterface.UI.appVue.newComponent("c-button").setShow(0)
				var tempOptionIconDelete = UIGeneratorInterface.UI.appVue.newComponent("c-icon").setIcon("delete").setShow(0);
				var tempOptionIconShow = UIGeneratorInterface.UI.appVue.newComponent("c-icon").setIcon("visibility").setShow(0);
				var tempOptionIconMove = UIGeneratorInterface.UI.appVue.newComponent("c-icon").setIcon("open_with").setShow(0);
				var tempOptionIconProperty = UIGeneratorInterface.UI.appVue.newComponent("c-icon").setIcon("assignment").setShow(0);

				var tempComponent = UIGeneratorInterface.UI.appVue.newComponent("c-button").setText(infoComponent.name + ':' + infoComponent.id).setShow(0).setTooltips(true).setTooltipsText(tempJoin);
				var tempIcon = UIGeneratorInterface.UI.appVue.newComponent("c-icon").setIcon("extension").setFloat("left").setShow(0);
				var tempContainerComponent = UIGeneratorInterface.UI.appVue.newComponent("c-div");
				UIGeneratorInterface.UI.panelcontainerComponent.create(tempContainerComponent);

				tempContainerComponent.create(tempOptionDelete);
				tempContainerComponent.create(tempOptionShow);
				tempContainerComponent.create(tempOptionMove);
				tempContainerComponent.create(tempOptionProperty);
				tempOptionDelete.create(tempOptionIconDelete);
				tempOptionShow.create(tempOptionIconShow);
				tempOptionMove.create(tempOptionIconMove);
				tempOptionProperty.create(tempOptionIconProperty);
				$(tempOptionDelete.$el).attr('style', "margin-right: 10px;");
				$(tempOptionShow.$el).attr('style', "margin-right: 10px;");
				$(tempOptionMove.$el).attr('style', "margin-right: 10px;");
				$(tempOptionProperty.$el).attr('style', "margin-right: 10px;");


				tempContainerComponent.create(tempComponent);
				tempComponent.create(tempIcon);

				tempComponent.setShow(1);
				tempIcon.setShow(1);
				tempOptionDelete.setShow(1);
				tempOptionShow.setShow(1);
				tempOptionMove.setShow(1);
				tempOptionProperty.setShow(1);
				tempOptionIconProperty.setShow(1);
				tempOptionIconDelete.setShow(1);
				tempOptionIconShow.setShow(1);
				tempOptionIconMove.setShow(1);
			}
			UIGeneratorInterface.UI.panelcontainerComponent.setShow(1);
			setTimeout(function() {
				$(UIGeneratorInterface.UI.panelcontainerComponent.$el).children()
					.attr('style', 'display: block !important; margin : 10px 10px 0px 10px');
			}, 150);
		} else {
			//offButtonComponentList
			UIGeneratorInterface.UI.panelComponent.setShow(0);
		}
	}
	uiLayerPrimaryEvents() {
		$(this.ulpObject.ButtonLstComponent.$el).click(function(e) {
			UIGeneratorInterface.UI.ulpProperty.ButtonComponentList = !UIGeneratorInterface.UI.ulpProperty.ButtonComponentList;
			UIGeneratorInterface.UI.resolvePanelComponent(e);
		});

		//events, se trabaja con la variable de instancia para acceder a los componentes 
		$(this.ulpObject.ButtonPantallaCompleta.$el)
			.click(function(e) {

				if (UIGeneratorInterface.UI.ulpProperty.ButtonPantallaCompleta) {

					//volver al modo edicion
					$(UIGeneratorInterface.UI.ulsObject.panelComponentLeft.$el)
						.css("width", "80px");
					UIGeneratorInterface.UI.ulpObject.panelLeft.setShow(1);
					UIGeneratorInterface.UI.ulpObject.panelLeft.setShow(1);
					UIGeneratorInterface.UI.ulpObject.ButtonLstComponent.setShow(1);
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
					UIGeneratorInterface.UI.ulpObject.ButtonLstComponent.setShow(0);
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
					UIGeneratorInterface.UI.save.tempComponentName = "c-" + e.currentTarget.__vue__.$parent.text;
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
		$(this.ulpObject.ButtonRegilla.$el).click(function(e) {
			if (UIGeneratorInterface.UI.ulpProperty.ButtonRegilla) {
				UIGeneratorInterface.UI.ulpProperty.ButtonRegilla = false;
				UIGeneratorInterface.UI.ulpObject.IconRegilla.setIcon("grid_off");
			} else {
				UIGeneratorInterface.UI.ulpProperty.ButtonRegilla = true;
				UIGeneratorInterface.UI.ulpObject.IconRegilla.setIcon("grid_on");
			}
		});
		$(this.ulpObject.ButtonEscala.$el).click(function(e) {
			if (UIGeneratorInterface.UI.ulpProperty.ButtonEscala) {
				UIGeneratorInterface.UI.ulpProperty.ButtonEscala = false;
				UIGeneratorInterface.UI.ulpObject.IconEscala.setIcon("check_box_outline_blank");
			} else {
				UIGeneratorInterface.UI.ulpProperty.ButtonEscala = true;
				UIGeneratorInterface.UI.ulpObject.IconEscala.setIcon("open_in_new");
			}
		});
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
		$(this.ulsObject.panelPropertyRight.$el).mousemove(function(e) {
			if (!UIGeneratorInterface.UI.ulsProperty.panelPropertyRightMove) {
				UIGeneratorInterface.UI.ulsProperty.panelPropertyRightMove = true;
			}
		}).mouseout(function(e) {
			if (UIGeneratorInterface.UI.ulsProperty.panelPropertyRightMove) {
				UIGeneratorInterface.UI.ulsProperty.panelPropertyRightMove = false;
			}
			if (UIGeneratorInterface.UI.ulsProperty.panelPropertyClick) {
				UIGeneratorInterface.UI.ulsProperty.panelPropertyClick = false;
			}
		}).click(function(e) {
			if (!UIGeneratorInterface.UI.ulsProperty.panelPropertyRightMove) {
				UIGeneratorInterface.UI.ulsProperty.panelPropertyClick = true;
			}
		});
	}
	previsualizationLayerEvents() {
		// events, se trabaja con la variable de instancia para acceder a los componentes 
		$(this.ulsObject.uiLayerSecondary.$el).click(function(e) {
			if (e.currentTarget === e.target) {
				UIGeneratorInterface.UI.panelPropertyRightOut(e);
			}
			if (typeof UIGeneratorInterface.UI.save.tempInstance !== "undefined" && UIGeneratorInterface.UI.ulsProperty.panelPropertyRightMove === false) {
				var id = UIGeneratorInterface.UI.appVue.generateAphaId(5);
				UIGeneratorInterface.UI.save.componentList[id] = UIGeneratorInterface.UI.save.tempInstance;
				delete UIGeneratorInterface.UI.save.tempInstance;
			}


		});
		$(this.ulsObject.uiLayerSecondary.$el).mousemove(function(e) {
			if (UIGeneratorInterface.UI.save.tempComponentName) {
				UIGeneratorInterface.UI.save.tempInstance = UIGeneratorInterface.UI.appVue.newComponent(UIGeneratorInterface.UI.save.tempComponentName);
				UIGeneratorInterface.UI.plObject.previsualizationLayer.create(UIGeneratorInterface.UI.save.tempInstance);
				$(UIGeneratorInterface.UI.save.tempInstance.$el).css("overflow-wrap", "break-word");
				$(UIGeneratorInterface.UI.save.tempInstance.$el).css("display", "block");
				$(UIGeneratorInterface.UI.save.tempInstance.$el).css("position", "absolute");
				// $(UIGeneratorInterface.UI.save.tempInstance.$el).css("z-index", "9999");
				delete UIGeneratorInterface.UI.save.tempComponentName;
			}
			if (typeof UIGeneratorInterface.UI.save.tempInstance !== "undefined" &&
				UIGeneratorInterface.UI.ulsProperty.panelPropertyRightMove === false &&
				UIGeneratorInterface.UI.ulsProperty.panelPropertyClick === false) {
				if (UIGeneratorInterface.UI.save.tempInstance.$el) {
					$(UIGeneratorInterface.UI.save.tempInstance.$el).css("top", e.originalEvent.y);
					$(UIGeneratorInterface.UI.save.tempInstance.$el).css("left", e.originalEvent.x);
				}
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
			if (UIGeneratorInterface.UI.panelIcon) {
				UIGeneratorInterface.UI.panelIcon.setShow(0);
			}
		}
	}
	panelIconInitialize(property, componentValue, componentName, defaultValue) {
		UIGeneratorInterface.UI.componentValue = componentValue;


		var componentIcon = UIGeneratorInterface.UI.appVue.newComponent("c-icon")
			.setIcon(defaultValue);
		UIGeneratorInterface.UI.componentValue.create(componentIcon);
		UIGeneratorInterface.UI.componentValue.componentIcon = componentIcon;

		if (UIGeneratorInterface.UI.icon) {
			delete UIGeneratorInterface.UI.icon;
		}
		UIGeneratorInterface.UI.iconProperty = UIGeneratorInterface.UI.appVue.iconProperty;

		UIGeneratorInterface.UI.componentValue.$el.addEventListener('click', UIGeneratorInterface.UI.resolvePanelIcon, false);
	}
	panelColorInitialize(property, componentValue, componentName, defaultValue) {
		property = property.split("-")[0];
		UIGeneratorInterface.UI.componentValue = componentValue;
		UIGeneratorInterface.UI.componentValue.setColor(defaultValue);
		if (/color/i.exec(property) !== null) {
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
				UIGeneratorInterface.UI.colorType = property;
			}
			UIGeneratorInterface.UI.componentValue.$el.addEventListener('click', UIGeneratorInterface.UI.resolvePanelColor, false);
			return true;
		} else {
			return false;
		}
	}
	resolvePanelIcon(e) {

		UIGeneratorInterface.UI.iconEvent = e;
		if (UIGeneratorInterface.UI.panelIcon) {
			UIGeneratorInterface.UI.panelIcon.$el.remove();
			delete UIGeneratorInterface.UI.panelIcon;
		}
		UIGeneratorInterface.UI.panelIcon = UIGeneratorInterface.UI.appVue.newComponent("c-div").setColor(UIGeneratorInterface.UI.appVue.color.bwt[2])
			// .setCardpanel(1)
			.setShow(0);
		UIGeneratorInterface.UI.panelcontainerIcon = UIGeneratorInterface.UI.appVue.newComponent("c-div").setColor(UIGeneratorInterface.UI.appVue.color.bwt[2])
			// .setCardpanel(1)
			.setShow(0);
		UIGeneratorInterface.UI.panelIconTitle = UIGeneratorInterface.UI.appVue.newComponent("c-p").setColor(UIGeneratorInterface.UI.appVue.color.blue[7])
			.setShow(0)
			.setText("Panel de iconos")
			.setTextAling(UIGeneratorInterface.UI.appVue.textAling.c)
			.setCardpanel(1)
			.setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);

		UIGeneratorInterface.UI.appVue.create(UIGeneratorInterface.UI.panelIcon);
		UIGeneratorInterface.UI.panelIcon.create(UIGeneratorInterface.UI.panelIconTitle);
		UIGeneratorInterface.UI.panelIcon.create(UIGeneratorInterface.UI.panelcontainerIcon);
		// UIGeneratorInterface.UI.panelIcon.$el.id = UIGeneratorInterface.UI.panelIcon.$el.id + '-panel-color';
		// $(UIGeneratorInterface.UI.panelIcon.$el).attr("id", UIGeneratorInterface.UI.panelIcon.$el.id + '-panel-color');
		$(UIGeneratorInterface.UI.panelIcon.$el)
			.css("z-index", "1")
			.css("width", "768px")
			.css("position", "absolute")
			.css("top", "50%")
			.css("left", "50%")
			.css("transform", "translate(-50%, -50%)");
		$(UIGeneratorInterface.UI.panelIconTitle.$el)
			.css("margin-top", "0px")
			.css("margin-bottom", "0px")
			.css("padding", "12px");
		$(UIGeneratorInterface.UI.panelcontainerIcon.$el)
			.css("overflow-y", "auto")
			.css("height", "485.8px");
		UIGeneratorInterface.UI.panelIcon.setShow(1);
		UIGeneratorInterface.UI.panelIconTitle.setShow(1);
		UIGeneratorInterface.UI.panelcontainerIcon.setShow(1);
		if (!UIGeneratorInterface.UI.ulsObject.componentIcon) {
			UIGeneratorInterface.UI.ulsObject.componentIcon = new Array();
			UIGeneratorInterface.UI.ulsObject.componentButtonIcon = new Array();
		}
		UIGeneratorInterface.UI.iconProperty.icon = UIGeneratorInterface.UI.iconProperty;
		for (var i in UIGeneratorInterface.UI.iconProperty.icon) {
			var currentIcon = UIGeneratorInterface.UI.iconProperty.icon[i];

			if (currentIcon.constructor.name !== "Array") {
				((i, currentIcon) => {
					setTimeout(function() {
						if (UIGeneratorInterface.UI.ulsObject.componentButtonIcon[i] && UIGeneratorInterface.UI.ulsObject.componentIcon[i]) {
							UIGeneratorInterface.UI.ulsObject.componentIcon[i].$el.remove();
							delete UIGeneratorInterface.UI.ulsObject.componentIcon[i];
							UIGeneratorInterface.UI.ulsObject.componentButtonIcon[i].$el.remove();
							delete UIGeneratorInterface.UI.ulsObject.componentButtonIcon[i];
						}
						UIGeneratorInterface.UI.ulsObject.componentIcon[i] = UIGeneratorInterface.UI.appVue.newComponent("c-icon").setIcon(currentIcon);
						UIGeneratorInterface.UI.ulsObject.componentButtonIcon[i] = UIGeneratorInterface.UI.appVue.newComponent("c-button");


						UIGeneratorInterface.UI.panelcontainerIcon.create(UIGeneratorInterface.UI.ulsObject.componentButtonIcon[i]);
						UIGeneratorInterface.UI.ulsObject.componentButtonIcon[i].create(UIGeneratorInterface.UI.ulsObject.componentIcon[i]);
						UIGeneratorInterface.UI.ulsObject.componentButtonIcon[i].defineIcon = currentIcon;
						UIGeneratorInterface.UI.ulsObject.componentButtonIcon[i].$el.addEventListener('click', UIGeneratorInterface.UI.resolveIcon, false);
					}, 150);
				})(i, currentIcon);
			}
		}
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
		UIGeneratorInterface.UI.panelColor.setShow(1);
		UIGeneratorInterface.UI.panelColorTitle.setShow(1);
		if (!UIGeneratorInterface.UI.ulsObject.componentColor) {
			UIGeneratorInterface.UI.ulsObject.componentColor = new Object();
		}
		for (var x in UIGeneratorInterface.UI.color) {
			var currentColor = UIGeneratorInterface.UI.color[x];
			for (var j in currentColor) {
				((x, j, currentColor) => {
					setTimeout(function() {
						var currentRangeColor = currentColor[j];
						if (UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor]) {
							UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor].$el.remove();
							delete UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor];
						}
						UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor] = UIGeneratorInterface.UI.appVue.newComponent("c-button").setColor(currentRangeColor);

						var defineColor = {
							color: x,
							index: j
						};

						UIGeneratorInterface.UI.panelColor.create(UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor]);
						UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor].defineColor = defineColor;
						UIGeneratorInterface.UI.ulsObject.componentColor[currentRangeColor].$el.addEventListener('click', UIGeneratorInterface.UI.resolveColor, false);
					}, 150);
				})(x, j, currentColor)
			}
		}
	}
	resolveIcon(e) {
		var setIcon;
		if (e.explicitOriginalTarget.tagName === "BUTTON") {
			setIcon = e.explicitOriginalTarget.__vue__.defineIcon;
		} else {
			setIcon = e.explicitOriginalTarget.__vue__.icon;
		}
		UIGeneratorInterface.UI.componentValue.componentIcon.setIcon(setIcon);
		//set temporalComponentSave
		UIGeneratorInterface.UI.save.tempInstance.setIcon(setIcon);
		UIGeneratorInterface.UI.panelIcon.setShow(0);
	}
	resolveColor(e) {

		UIGeneratorInterface.UI.colorSet = e.explicitOriginalTarget.__vue__.color;
		var defineColor = e.explicitOriginalTarget.__vue__.defineColor;
		// console.log(defineColor);
		if (e.explicitOriginalTarget.__vue__ && typeof UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.$parent === "undefined") {
			UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.setColor(UIGeneratorInterface.UI.colorSet);
			for (var i in UIGeneratorInterface.UI.save.componentProperty) {
				if (UIGeneratorInterface.UI.save.componentProperty[i].name === UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.property) {
					UIGeneratorInterface.UI.save.componentProperty[i].value = UIGeneratorInterface.UI.colorSet;
					//update property
					for (var n in UIGeneratorInterface.UI.save.tempInstance) {
						if (UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.property.indexOf("-") !== -1) {
							//colorArray
							var currentProperty = UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.property.split("-")[0];
							var colorIndex = parseInt(UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.property.split("-")[1]);
							if (n === currentProperty) {
								var colorType = n;
								UIGeneratorInterface.UI.colorSet = UIGeneratorInterface.UI.appVue[colorType][defineColor.color][defineColor.index];
								UIGeneratorInterface.UI.save.tempInstance[n][colorIndex] = UIGeneratorInterface.UI.colorSet;
								UIGeneratorInterface.UI.save.tempInstance.$mount();
							}
						} else {
							if (n === UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.property) {
								var colorType = n;
								UIGeneratorInterface.UI.colorSet = UIGeneratorInterface.UI.appVue[colorType][defineColor.color][defineColor.index];
								UIGeneratorInterface.UI.save.tempInstance[n] = UIGeneratorInterface.UI.colorSet;
							}
						}
					}
				}
			}
		} else if (e.explicitOriginalTarget.__vue__ && typeof UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.$parent !== "undefined") {
			UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.$parent.setColor(UIGeneratorInterface.UI.colorSet);
			for (var i in UIGeneratorInterface.UI.save.componentProperty) {
				if (UIGeneratorInterface.UI.save.componentProperty[i].name === UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.$parent.property) {
					UIGeneratorInterface.UI.save.componentProperty[i].value = UIGeneratorInterface.UI.colorSet;
					//update property
					for (var n in UIGeneratorInterface.UI.save.tempInstance) {
						if (UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.$parent.property.indexOf("-") !== -1) {
							//colorArray
							var currentProperty = UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.$parent.property.split("-")[0];
							var colorIndex = parseInt(UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.$parent.property.split("-")[1]);
							if (n === currentProperty) {
								var colorType = n;
								UIGeneratorInterface.UI.colorSet = UIGeneratorInterface.UI.appVue[colorType][defineColor.color][defineColor.index];
								UIGeneratorInterface.UI.save.tempInstance[n][colorIndex] = UIGeneratorInterface.UI.colorSet;
								UIGeneratorInterface.UI.save.tempInstance.$mount();
							}
						} else {
							if (n === UIGeneratorInterface.UI.colorEvent.explicitOriginalTarget.__vue__.$parent.property) {
								var colorType = n;
								UIGeneratorInterface.UI.colorSet = UIGeneratorInterface.UI.appVue[colorType][defineColor.color][defineColor.index];
								UIGeneratorInterface.UI.save.tempInstance[n] = UIGeneratorInterface.UI.colorSet;
							}
						}
					}
				}
			}
		}
		UIGeneratorInterface.UI.panelColor.setShow(0);
	}
	resolveComponentValueEvent(componentValue) {
		$(componentValue.$el).keyup(function(e) {
			var tag = e.target.tagName;
			if (/select/i.exec(tag) !== null) {
				var val = $(e.target).val();
			} else if (/input/i.exec(tag) !== null) {
				var type = $(e.target).attr('type');
				if (/checkbox/i.exec(type) !== null) {
					var val = e.target.checked;
				} else {
					var val = $(e.target).val();
				}

			}
			for (var i in UIGeneratorInterface.UI.save.componentProperty) {
				if (UIGeneratorInterface.UI.save.componentProperty[i].name === componentValue.property) {
					UIGeneratorInterface.UI.save.componentProperty[i].value = val;
					//update property
					for (var n in UIGeneratorInterface.UI.save.tempInstance) {
						if (n === componentValue.property) {
							UIGeneratorInterface.UI.save.tempInstance[n] = val;
						}
					}
				}
			}
		});
		$(componentValue.$el).change(function(e) {
			var tag = e.target.tagName;
			if (/select/i.exec(tag) !== null) {
				var val = $(e.target).val();
			} else if (/input/i.exec(tag) !== null) {
				var type = $(e.target).attr('type');
				if (/checkbox/i.exec(type) !== null) {
					var val = e.target.checked;
				} else {
					var val = $(e.target).val();
				}

			}
			for (var i in UIGeneratorInterface.UI.save.componentProperty) {
				if (UIGeneratorInterface.UI.save.componentProperty[i].name === componentValue.property) {
					UIGeneratorInterface.UI.save.componentProperty[i].value = val;
					//update property
					for (var n in UIGeneratorInterface.UI.save.tempInstance) {
						if (n === componentValue.property) {
							UIGeneratorInterface.UI.save.tempInstance[n] = val;
						}
					}
				}
			}
		});
	}
	setProperty(property, type, defaultValue, currentNameComponent, changeColor) {

		// console.log(property, type);
		UIGeneratorInterface.UI.save.tempProperty = new Object();
		UIGeneratorInterface.UI.save.tempProperty.name = property;
		UIGeneratorInterface.UI.save.tempProperty.value = defaultValue;
		UIGeneratorInterface.UI.save.componentProperty.push(UIGeneratorInterface.UI.save.tempProperty);

		var componentContainer = UIGeneratorInterface.UI.appVue.newComponent("c-div");
		var componentProperty = UIGeneratorInterface.UI.appVue.newComponent("c-p")
			.setText(property)
			.setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);


		//define component container, in type and property
		if ((type === 'Array' || type === 'String') && (/color|icon/i.exec(property) !== null)) {
			var color;
			color = UIGeneratorInterface.UI.appVue.colorText.bwt[1];

			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-button")
				.setColorText(color);
		} else if (type === 'String' && /textAling|float/.exec(property) !== null) {
			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-select").setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);
		} else if (type === 'String' && property === "shadow") {
			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-select");
		} else if (type === 'Number' && property === "method") {
			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-select");
		} else if (type === 'Number' && property === "type") {
			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-select");
		} else if ((type === 'String' || type === 'Number') && property === "size") {
			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-select");
		} else if (type === 'String' && property === "wave") {
			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-select");
		} else if (type === 'Boolean') {
			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-switch").setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);
		} else if ((type === 'String' || type === 'Number') && property === "mode") {
			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-select").setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);
		} else if (type === 'Object') {

		} else if (type === 'Date') {

		} else if (type === 'Function') {

		} else if (type === 'Symbol') {

		} else {
			var componentValue = UIGeneratorInterface.UI.appVue.newComponent("c-input-fields")
				.setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1]);
		}
		componentValue.property = property;
		var currentIcon = UIGeneratorInterface.UI.appVue.newComponent("c-icon")
			.setIcon("extension")
			.setColorText(UIGeneratorInterface.UI.appVue.colorText.bwt[1])
			.setFloat(UIGeneratorInterface.UI.appVue.float.l);
		//define title panel
		UIGeneratorInterface.UI.ulsObject.p.setText("Component : " + currentNameComponent.charAt(2)
				.toUpperCase() + currentNameComponent.slice(3))
			.setColor(UIGeneratorInterface.UI.appVue.color.indigo[5])
			.setCardpanel(1);
		$(UIGeneratorInterface.UI.ulsObject.p.$el)
			.css("margin-top", "0px")
			.css("padding", "12px");
		//mounted property
		UIGeneratorInterface.UI.ulsObject.div.create(componentContainer);
		componentContainer.create(currentIcon);
		componentContainer.create(componentProperty);
		componentContainer.create(componentValue);

		//set Option c-input-select before mounted
		if (type === 'String' && /textAling|float/.exec(property) !== null) {
			componentValue.addOption(["", ""]);
			var count = 0;
			for (var xf in UIGeneratorInterface.UI.appVue.textAling) {
				var current = UIGeneratorInterface.UI.appVue.textAling[xf];
				// console.log(property, type, defaultValue, current, xf);
				if (/left/.exec(current) !== null) var text = "left";
				if (/center/.exec(current) !== null) var text = "center";
				if (/right/.exec(current) !== null) var text = "right";
				var regExp = new RegExp(defaultValue, "i");
				var regExp2 = new RegExp(current, "i");
				if (regExp.exec(current) !== null || regExp2.exec(defaultValue) !== null || String(xf) === String(defaultValue) && isNaN(parseInt(xf)) || String(count) === String(defaultValue) && isNaN(parseInt(defaultValue))) {
					componentValue.addOption([text, current, true]);
				} else {
					componentValue.addOption([text, current]);
				}
				count++;
			}
			currentIcon.setIcon("text_fields");
		} else if (type === 'String' && property === "shadow") {
			componentValue.addOption(["", ""]);
			var count = 0;
			for (var xf in UIGeneratorInterface.UI.appVue.shadow) {
				var text = UIGeneratorInterface.UI.appVue.shadow[xf];
				var regExp = new RegExp(defaultValue, "i");
				var regExp2 = new RegExp(text, "i");
				if (regExp.exec(text) !== null || regExp2.exec(defaultValue) !== null || String(xf) === String(defaultValue) && isNaN(parseInt(xf)) || String(count) === String(defaultValue) && isNaN(parseInt(defaultValue))) {
					componentValue.addOption([text, text, true]);
				} else {
					componentValue.addOption([text, text]);
				}
				count++;
			}
		} else if (type === 'Number' && property === "method") {
			var options = ['GET', 'POST'];
			var count = 0;
			for (var ge in options) {
				var text = options[ge];
				var regExp = new RegExp(defaultValue, "i");
				var regExp2 = new RegExp(text, "i");
				if (regExp.exec(current) !== null || regExp2.exec(defaultValue) !== null || String(ge) === String(defaultValue) && isNaN(parseInt(ge)) || String(count) === String(defaultValue) && isNaN(parseInt(defaultValue))) {
					componentValue.addOption([text, text, true]);
				} else {
					componentValue.addOption([text, text]);
				}
				count++;
			}
		} else if (type === 'Number' && property === "type") {
			var options;
			if (/input/i.exec(currentNameComponent) !== null) {
				options = ['text', 'email', 'password'];
			} else if (/button/i.exec(currentNameComponent) !== null) {
				options = ['button', 'submit', 'reset'];
			}
			var count = 0;
			for (var ge in options) {
				var text = options[ge];
				var regExp = new RegExp(defaultValue, "i");
				var regExp2 = new RegExp(text, "i");
				if (regExp.exec(current) !== null || regExp2.exec(defaultValue) !== null || String(ge) === String(defaultValue) && isNaN(parseInt(ge)) || String(count) === String(defaultValue) && isNaN(parseInt(defaultValue))) {
					componentValue.addOption([text, text, true]);
				} else {
					componentValue.addOption([text, text]);
				}
				count++;
			}
		} else if (type === 'String' && property === "wave") {
			componentValue.addOption(["", ""]);
			for (var xf in UIGeneratorInterface.UI.appVue.waves) {
				var mode = UIGeneratorInterface.UI.appVue.waves[xf];
				for (var ge in mode) {
					var text = mode[ge];
					componentValue.addOption([xf + '(' + ge + '): ' + text, text]);
				}
			}
		} else if ((type === 'String' || type === 'Number') && property === "size") {
			var nameComponent = currentNameComponent.charAt(2).toUpperCase() + currentNameComponent.slice(3);
			if (/Icon/i.exec(nameComponent) !== null) {
				var vectorOptions = UIGeneratorInterface.UI.appVue.sizeIcon;
			} else if (/Card/i.exec(nameComponent) !== null) {
				var vectorOptions = UIGeneratorInterface.UI.appVue.sizeCard;
			} else if (/Preloader/i.exec(nameComponent) !== null) {
				var vectorOptions = UIGeneratorInterface.UI.appVue.sizePreloader;
			} else if (/Button/i.exec(nameComponent) !== null || /dropdown/i.exec(nameComponent) !== null) {
				var vectorOptions = UIGeneratorInterface.UI.appVue.sizeButton;
			} else if ("H" === nameComponent) {
				var vectorOptions = [1, 2, 3, 4, 5, 6];
			}
			componentValue.addOption(["", ""]);
			var count = 0;
			for (var xf in vectorOptions) {
				var current = vectorOptions[xf];
				var regExp = new RegExp(defaultValue, "i");
				var regExp2 = new RegExp(current, "i");
				if (regExp.exec(current) !== null || regExp2.exec(defaultValue) !== null || String(xf) === String(defaultValue) && isNaN(parseInt(xf)) || String(count) === String(defaultValue) && isNaN(parseInt(defaultValue))) {
					componentValue.addOption([current, current, defaultValue]);
				} else {
					componentValue.addOption([current, current]);
				}
				count++;
			}
		} else if (type === 'Boolean') {
			componentValue.setValue(defaultValue);
		} else if ((type === 'String' || type === 'Number') && property === "mode") {
			var nameComponent = currentNameComponent.charAt(2).toUpperCase() + currentNameComponent.slice(3);
			//set default values modes
			if (/Preloader/i.exec(nameComponent) !== null) {
				var vectorOptions = new Array();
				vectorOptions.push("indeterminate");
				vectorOptions.push("determinate");
			} else if (/collection/i.exec(nameComponent) !== null) {
				var vectorOptions = new Array();
				vectorOptions.push("basic");
				vectorOptions.push("link");
				vectorOptions.push("headers");
			}
			// console.log(property, type, defaultValue);
			componentValue.addOption(["", ""]);
			for (var xf in vectorOptions) {
				var current = vectorOptions[xf];
				var regExp = new RegExp(defaultValue, "i");
				var regExp2 = new RegExp(current, "i");
				if (regExp.exec(current) !== null || regExp2.exec(defaultValue) !== null || String(xf) === String(defaultValue) && isNaN(parseInt(xf)) || String(count) === String(defaultValue) && isNaN(parseInt(defaultValue))) {
					if (xf === String(defaultValue)) {
						componentValue.addOption([current, current, true]);
					} else {
						componentValue.addOption([current, current, defaultValue]);
					}
				} else {
					componentValue.addOption([current, current]);
				}
			}
		} else if ((property === "s" || property === "m" || property === "l" || property === "xl" || property === "progress") && type === "Number") {
			// console.log(property, type, defaultValue, componentValue);
			componentValue.setValue(defaultValue);
		}

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
		if ("show" === property) currentIcon.setIcon("visibility");
		if ("shadow" === property) currentIcon.setIcon("filter_none");
		if (/color/i.exec(property) !== null) {
			if (/text/i.exec(property) !== null) {
				currentIcon.setIcon("format_color_text");
			} else {
				currentIcon.setIcon("format_color_fill");
			}
			UIGeneratorInterface.UI.panelColorInitialize(property, componentValue, currentNameComponent.charAt(2).toUpperCase() + currentNameComponent.slice(3), defaultValue);
		} else {
			//define event
			if (/icon/i.exec(property) !== null) {
				UIGeneratorInterface.UI.panelIconInitialize(property, componentValue, currentNameComponent.charAt(2).toUpperCase() + currentNameComponent.slice(3), defaultValue);
			}
			UIGeneratorInterface.UI.resolveComponentValueEvent(componentValue);
		}

		if ("mode" === property) currentIcon.setIcon("swap_horiz");
		if ("progress" === property) currentIcon.setIcon("trending_flat");
		if (/size/.exec(property) !== null) currentIcon.setIcon("photo_size_select_small");
		if (/style/.exec(property) !== null) currentIcon.setIcon("style");
		if (/text/.exec(property) !== null) {
			if ("text" === property) {
				currentIcon.setIcon("edit");
			} else {
				currentIcon.setIcon("format_align_left");
			}

		}
		if (/file|action/.exec(property) !== null) currentIcon.setIcon("insert_drive_file");
		if ("valign" === property) currentIcon.setIcon("vertical_align_center");
		if ("flowText" === property) currentIcon.setIcon("format_size");
		if ("hoverable" === property) currentIcon.setIcon("compare");
		if ("new" === property) currentIcon.setIcon("fiber_new");
		if (/src|href/.exec(property) !== null) currentIcon.setIcon("insert_link");
		if ("circle" === property) currentIcon.setIcon("account_circle");
		if ("name" === property) currentIcon.setIcon("font_download");
		if ("materialbox" === property) currentIcon.setIcon("crop_free");
		if ("responsive" === property) currentIcon.setIcon("view_quilt");
		if (/float/i.exec(property) !== null) {
			currentIcon.setIcon("dashboard");
			$(currentIcon.$el).css("transform", "rotate(90deg)");
		}
		if ("disable" === property) currentIcon.setIcon("lock_outline");
		if ("container" === property) currentIcon.setIcon("view_array");
		if ("cardpanel" === property) currentIcon.setIcon("aspect_ratio");
		if ("wave" === property) currentIcon.setIcon("fingerprint");
		if ("type" === property) currentIcon.setIcon("title");
		if ("truncate" === property) {
			currentIcon.setIcon("keyboard_tab");
			$(currentIcon.$el).css("transform", "rotate(180deg)");
		}

		setTimeout(function() {
			UIGeneratorInterface.UI.ulsObject.div.setShow(1);
			$(UIGeneratorInterface.UI.ulsObject.panelPropertyRight.$el)
				.css("width", "270px");
			$(UIGeneratorInterface.UI.ulpObject.panelRight.$el)
				.css("right", "278px");
		}, 500);
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
				UIGeneratorInterface.UI.save.componentProperty = new Array();
				for (var x in allProperty) {
					var p = x.substr(1);
					var t = allProperty[x].type.name;
					if (t === "Array") {
						var d = allProperty[x].default();
					} else {
						var d = allProperty[x].default;
					}

					var property = p;
					var type = t;
					var tempDefaultValue = d;
					if (disableProperty.indexOf(property) === -1) {
						if (type === "Array") {
							for (var x in tempDefaultValue) {
								var changeColor = (ff % 2 === 0);
								var defaultValue = tempDefaultValue[x];
								var postfix = "-" + x;
								var propertyArray = property + postfix;
								UIGeneratorInterface.UI.setProperty(propertyArray, type, defaultValue, currentNameComponent, changeColor);
								ff++;
							}
						} else {
							var changeColor = (ff % 2 === 0);
							var defaultValue = tempDefaultValue;
							UIGeneratorInterface.UI.setProperty(property, type, defaultValue, currentNameComponent, changeColor);
							ff++;
						}
					}

				}
			}, 500);

		}

	}
}