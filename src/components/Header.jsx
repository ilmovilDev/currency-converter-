import { Grid, IconButton, Stack } from '@mui/material'
import { Title } from '../style-components'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = () => {
    return (
        <Grid
            component='header'
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                alignItems: 'center',
                maxWidth: 1080,
                width: '100%'
            }}
        >
            <Title>
                Currency Converter by Luis C.
            </Title>
            <Stack
                direction='row'
                alignItems='center'
            >
                <a
                    href='https://www.linkedin.com/in/luis-carrasco-320586270/'
                    target='_blank'
                >
                    <IconButton>
                        <LinkedInIcon
                            fontSize='large'
                            sx={{
                                color: '#505050',
                            }}
                        />
                    </IconButton>
                </a>
                <a
                    href='https://github.com/ilmovilDev'
                    target='_blank'
                >
                    <IconButton>
                        <GitHubIcon
                            fontSize='large'
                            sx={{
                                color: '#505050',
                            }}
                        />
                    </IconButton>
                </a>
            </Stack>
        </Grid>
    )
}
