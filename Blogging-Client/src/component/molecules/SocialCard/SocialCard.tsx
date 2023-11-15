import { Box, Typography } from "@mui/material";
import { FC } from "react";
import SkillButton from "../../atoms/SkillButton";
import { socialMediaName } from "../../../Constants/ConstantName";

 
const SocialCard: FC = () => {
    return (  <Box
      sx={{
        marginTop: '0.5em',
        // minHeight: '15em',
        width: '99%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width:'100%',
          display: 'flex',
          borderRadius: '10px',
          borderTopWidth: '2px', // Different border widths for each side
          borderRightWidth: '4px',
          borderBottomWidth: '4px',
          borderLeftWidth: '2px',
          borderColor: 'black', // Border color
          borderStyle: 'solid',
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '95%' }}>
          <Typography variant="subtitle1">
            Connet with me on
          </Typography>
        </Box>
        <Box
          sx={{
            minHeight: '15em',
            minWidth: '95%',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'space-evenly',
            alignItems:'center'
          }}
        >
          {socialMediaName.map((socialMediaName) => (
            <SkillButton name={socialMediaName} />
          ))}
        </Box>
      </Box>
    </Box> );
}
 
export default SocialCard;