import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const HomeContent = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            A complete, cross-platform solution to record, convert and stream
            audio and video.
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            A complete, cross-platform solution to record, convert and stream
            audio and video.
          </Item>
        </Grid>
      </Grid>
    );
}

export default HomeContent;