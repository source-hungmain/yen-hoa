import HomeMain from '@/components/home/HomeMain';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Yên Hòa Fun',
  description: 'Yên Hòa Fun',
};
export default function Home() {
  return (
    <>
      <div className='container-main'>
        <HomeMain />
      </div>
    </>
  );
}
