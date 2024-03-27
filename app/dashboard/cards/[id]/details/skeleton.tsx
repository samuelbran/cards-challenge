import { CardStatusViewSkeleton } from '@/app/dashboard/components/CardStatus/skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function DetailsPageSkeleton() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={4} xl={3}>
        <Skeleton
          sx={{ bgcolor: 'grey.300', borderRadius: '16px' }}
          animation="wave"
          variant="rectangular"
          width={290}
          height={182}
          style={{
            margin: '0 auto',
          }}
        />
        <Card style={{ marginTop: 20 }}>
          <CardContent>
            <CardStatusViewSkeleton />
            <br />
            <Stack direction="row" spacing={2}>
              <Skeleton
                sx={{ bgcolor: 'grey.300' }}
                animation="wave"
                variant="rectangular"
                width={124}
                height={30}
              />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={8} xl={9}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Skeleton
                  sx={{ bgcolor: 'grey.300' }}
                  animation="wave"
                  variant="rectangular"
                  height={56}
                />
              </Grid>
              <Grid item xs={12} md={8} xl={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Skeleton
                      sx={{ bgcolor: 'grey.300' }}
                      animation="wave"
                      variant="rectangular"
                      height={48}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Skeleton
                      sx={{ bgcolor: 'grey.300' }}
                      animation="wave"
                      variant="rectangular"
                      height={48}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Skeleton
                      sx={{ bgcolor: 'grey.300' }}
                      animation="wave"
                      variant="rectangular"
                      height={48}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
