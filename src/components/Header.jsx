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
                gap={1.5}
            >
                <a
                    href='https://www.linkedin.com/in/luis-carrasco-320586270/'
                    target='_blank'
                >
                    <LinkedInIcon
                        aria-label='link to linkedin'
                        fontSize='large'
                        sx={{
                            color: '#505050',
                        }}
                    />
                </a>
                <a
                    href='https://github.com/ilmovilDev'
                    target='_blank'
                >
                    <GitHubIcon
                        aria-label='link to github'
                        fontSize='large'
                        sx={{
                            color: '#505050',
                        }}
                    />
                </a>
            </Stack>
        </Grid>
    )
}
