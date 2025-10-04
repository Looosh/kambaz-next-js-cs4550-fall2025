"use client";
import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";
import ReactIconsSampler from "./ReactIcons";
import { Container } from "react-bootstrap";


export default function Lab2() {
  return (
    <Container>
    <div id="wd-lab2">
      {/* Lab 2 Headers */}
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      
      {/* Styling with IDs */}
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the 
          elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>

      {/* Styling together with Classes */}
      <div id="wd-css-class-selectors">
      <h3>Class selectors</h3>

      <p className="wd-class-selector">
        Instead of using IDs to refer to elements, you can use an element's CLASS attribute
      </p>
      <h4 className="wd-class-selector">
      This heading has same style as paragraph above
      </h4>
      </div>

      {/* Styling with Ancestor Class Selectors */}
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3<br />
              meaning the descendant of some ancestor.<br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span><br />
                You can combine these relationships to create specific 
                styles depending on the document structure
            </p>
          </div>
        </div>
      </div>

      {/* Imported from ForegroundColors.tsx, Styling font color with foreground */}
      <ForegroundColors />

      {/* Imported from BackgroundColors.tsx, Styling background block color with background */}
      <BackgroundColors />
     
     {/* Imported from Borders.tsx, Styling Border Types and Colors with border */}
     <Borders />

     {/* Imported from Padding.tsx, Applying Padding to Blocks of Text */}
     <Padding />

     {/* Imported from Margins.tsx, Applying Margins to Blocks of Text*/}
     <Margins />

     {/* Imported from Corners.tsx, styling corners of blocks*/}
     <Corners />
     
     {/* Imported from Dimensions.tsx, styling the dimesnions of blocks */}
     <Dimensions />

     {/* Imported from Positions.tsx, styling the dimesnions of blocks */}
     <Positions />

     {/* Imported from Float.tsx, using Float to move pictures and wrap text, and to arrange blocks horizontally */}
     <Float />

     {/* Imported from GridLayout.tsx, using Float to arrange blocks into a grid*/}
     <GridLayout />

     {/* Imported from Flex.tsx, manipulate columns with flexible widths and sizes */}
     <Flex />

     {/* Imported from ReactIcons.tsx, display some icons available */}
     <ReactIconsSampler />

     {/* Imported from BootstrapGrid.tsx, create grids with varied size columns, and responsive scaling */}
     <BootstrapGrids />

     {/* Imported from ScreenSizeLabel.tsx, display the screen size threshold in the bottom right corner indefinetely*/}
     <ScreenSizeLabel />

     {/* Imported from BootstrapTables.tsx, create neat tables and long tables with scroll bar*/}
     <BootstrapTables />

     {/* Imported from BootstrapLists.tsx, create a neat list showing selected active values in blue, and deactivated in faint grey
         Also implements client component so client can select values on a list.*/}
     <BootstrapLists />

     {/* Imported from BootstrapForms.tsx, tons of usefule forms lie input fields, buttons, etc.*/}
     <BootstrapForms />

     {/* Imported from BootstrapNavigation.tsx, tons of usefule forms lie input fields, buttons, etc.*/}
     <BootstrapNavigation />



     </div>
    </Container>
);}

