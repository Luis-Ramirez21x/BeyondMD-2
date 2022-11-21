import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Document, Page } from 'react-pdf';
import file from '../pdf/LuisRamirez_resume.pdf'


function Resume() {
  return (
    <>
     
      <Accordion sx={{ maxWidth:'500px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Creator Resume</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <object width="100%" height="400" data={file} type="application/pdf">   </object>
          </Typography>
        </AccordionDetails>
      </Accordion>

      
   
    </>
  );
}

export default Resume;