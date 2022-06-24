import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const ToggleThemeButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Flex
            flexDirection={'row-reverse'}
            p='4'
            w={'full'}
            zIndex={1}>
            <Box p={2}>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <motion.div
                        style={{ display: 'inline-block' }}
                        key={useColorModeValue('light', 'dark')}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <IconButton
                            onClick={toggleColorMode}
                            variant='ghost'
                            aria-label='change theme'
                            fontSize='30px'
                            isRound={true}
                            icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
                        />
                    </motion.div>
                </AnimatePresence>
            </Box>
        </Flex>
    )
}

export default ToggleThemeButton