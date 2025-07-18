import React from "react";
import { Button } from "@/shared/components/ui/button";
import { ChevronUpIcon, HomeIcon } from "@heroicons/react/16/solid";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="pt-6 pb-10">
      <div className="container">
        <div className="h-[1px] bg-gray-700 mb-6"></div>
        <div className="flex   justify-between items-center">
          <div>
            <p className="text-gray-400 text-base">
              © {date} SESI. Todos os direitos reservados.
            </p>
          </div>
          <Button shape="circle" onClick={() => window.scrollTo(0, 0)}>
            <ChevronUpIcon />
          </Button>
        </div>
      </div>
    </footer>
  );
}
