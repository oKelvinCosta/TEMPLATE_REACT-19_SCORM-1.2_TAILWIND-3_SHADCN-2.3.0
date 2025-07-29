import { Button } from '@/shared/components/ui/button';
import { ChevronUpIcon } from '@heroicons/react/16/solid';
import React from 'react';

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-6">
      <div className="container">
        <div className="mb-6 h-[1px] bg-gray-700"></div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base text-gray-400">© {date} SESI. Todos os direitos reservados.</p>
          </div>
          <Button shape="circle" onClick={() => window.scrollTo(0, 0)}>
            <ChevronUpIcon />
          </Button>
        </div>
      </div>
    </footer>
  );
}
