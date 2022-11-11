import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Document, Page } from 'react-pdf';
import file from '../pdf/LuisRamirez_resume.pdf'


function Resume() {
  return (
    <>
     <div className='resume-accordion'>
      <Accordion>
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

      </div>
   
    </>
  );
}

export default Resume;