import Link from 'next/link';
import MatrixRain from './ui/components/MatrixRain';

export default function NotFound() {
  return (
    <div>
        <MatrixRain />
        <div className="absolute flex flex-col text-center top-1/4 left-0 w-full h-full z-10">
            <div className="col-start-2	">
                <h1 className="text-9xl text-red-500 font-bold">404</h1>
                <p className="text-white text-4xl py-24">The page you&apos;re looking for was not found.</p>
                <span className="text-3xl mt-24">Go back to the</span><Link className="text-3xl text-red-200 mt-24" href="/"> homepage
                </Link>
            </div> 
        </div>
    </div>
  );
}