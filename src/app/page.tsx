import Marketing from '@/components/ui/Marketing';
import SliderCars from './../components/sliderCars';
import Archive from '@/components/ui/Archive';

export default function Home() {
  return (
    <>
     <SliderCars />
     <Marketing />
     <div className="h-[88vh] mx-auto p-4">
     <Archive />
     </div>
    </>
  );
}
