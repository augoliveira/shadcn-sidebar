'use client';
import { useRouter } from 'next/navigation';
import { BsTypeBold } from 'react-icons/bs';

import { Boundary } from '@/components/ui/boundary';

export default function NotFound() {
  const router = useRouter();
  return (
    <Boundary labels={['not-found.tsx']} color='pink'>
      <div className='space-y-4 text-vercel-pink'>
        <h2 className='text-lg font-bold'>404</h2>

        <div>
          <p className='text-sm'>
            Oops, não conseguimos encontrar essa página!
          </p>
          <span>
            Clique no botão abaixo para ser redirecionado à Página Inicial
          </span>
        </div>
      </div>
      <div className='mx-auto max-w-3xl p-10'>
          <button
            className='rounded bg-gray-900 p-3 text-white'
            type='button'
            onClick={() => router.push('/')}
          >
            Ir para a Página Inicial
          </button>

        <div className='py-10'>
            <button className='rounded bg-gray-900 p-3 text-white'>
              <BsTypeBold />
            </button>
        </div>
      </div>
    </Boundary>
  );
}