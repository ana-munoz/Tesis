import { default as MxGraph } from "mxgraph";
import { addToolbarItem, getStyleStringByObj } from "./";

const {
  mxEvent,
  mxRubberband,
  mxUtils,
  mxToolbar,
  mxClient,
  mxDivResizer,
  mxKeyHandler,
  mxGeometry,
  mxCell,
  mxEllipse,
  mxConstants,
  mxPerimeter,
  mxCellRenderer,
  mxText
} = MxGraph();

export default function initToolbar(graph, tbContainer) {
  // Creates new toolbar without event processing
  var toolbar = new mxToolbar(tbContainer);
  toolbar.enabled = false;

  // Workaround for Internet Explorer ignoring certain styles
  if (mxClient.IS_QUIRKS) {
    document.body.style.overflow = "hidden";
    new mxDivResizer(tbContainer);
  }

  // Enables new connections in the graph
  graph.setConnectable(true);

  // Allow multiple edges between two vertices
  graph.setMultigraph(false);

  // Stops editing on enter or escape keypress
  var keyHandler = new mxKeyHandler(graph);
  var rubberband = new mxRubberband(graph);

/*   var addVertex = function(icon, w, h, style, value = null) {
    var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
    if (value) {
      vertex.value = value;
    }
    vertex.setVertex(true);

    var img = addToolbarItem(graph, toolbar, vertex, icon);
    img.enabled = true;

    graph.getSelectionModel().addListener(mxEvent.CHANGE, function() {
      var tmp = graph.isSelectionEmpty();
      mxUtils.setOpacity(img, tmp ? 100 : 20);
      img.enabled = tmp;
    });
  }; */

  var addVertex = function(icon, w, h, style)
				{
					var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
					vertex.setVertex(true);
				
					addToolbarItem(graph, toolbar, vertex, icon);
				};
				
				addVertex('images/actor.gif', 80, 80, 'shape=ellipse;startSize=20;');
				addVertex('images/organizacion.gif', 100, 40, '');
				addVertex('images/rol.gif', 100, 40, 'shape=rounded');
				addVertex('images/estrategia.gif', 150, 40, 'shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fixedSize=1;');
				addVertex('images/objetivo.gif', 150, 40, 'shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;rounded=1;arcSize=45;');
				addVertex('images/meta.gif', 150, 40, 'shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;rounded=1;arcSize=45;');
				addVertex('images/tactica.gif', 150, 40, 'shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fixedSize=1;');
				
				toolbar.addLine();


}
