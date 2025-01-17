import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './pages/cover/Cover'
import coverPNG from '../assets/cover.png'
import FirsPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';
import SeventhPage from './pages/SeventhPage';
import EightPage from './pages/EightPage';
import LetterPage from './pages/LetterPage';
import NinthPage from './pages/NinthPage';
import EleventhPage from './pages/EleventhPage';
import TwelvePage from './pages/TwelvePage';
import FifteenthPage from './pages/FifteenthPage';
import Lettter_Page from './pages/Letter_Page';
import { useModal } from './ModalContent';


function MyBook(props) {
    const { isModalOpen } = useModal();
    return (
        <HTMLFlipBook className='flip-book' width={600} height={700} showCover={true} 
        useMouseEvents={!isModalOpen}
        style={{
            minWidth: '300px',
            maxWidth: '600px',
            minHeight: '400px',
            maxHeight: '700px'
        }}
        > 
            <Page number={1}>
                <Cover coverPNG={coverPNG} title="A book" />
            </Page>
            <Page number={2}>
                <FirsPage />
            </Page>
            <Page number={3}>
                <SecondPage />
            </Page>
            <Page number={4}>
                <ThirdPage />
            </Page>
            <Page number={5}>
                <FourthPage />
            </Page>
            <Page number={6}>
                <FifthPage />
            </Page>
            <Page number={7}>
                <SeventhPage />
            </Page>
            <Page number={8}>
                <EightPage />
            </Page>
            <Page number={9}>
                <SixthPage />
            </Page>
            <Page number={10}>
                <EleventhPage />
            </Page>
            <Page number={10}>
                <TwelvePage />
            </Page>
            <Page number={10}>
                <FifteenthPage />
            </Page>
            <Page number={10}>
                <Lettter_Page />
            </Page>
            <Page number={10}>
                <NinthPage />
            </Page>
        </HTMLFlipBook>
    );
}

export default MyBook;