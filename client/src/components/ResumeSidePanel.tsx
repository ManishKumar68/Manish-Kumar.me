import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';

interface ResumeSidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeSidePanel({ isOpen, onClose }: ResumeSidePanelProps) {
  const resumeUrl = new URL('../assets/MANISHRESUME2.pdf', import.meta.url).href;
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-[70%] max-w-none sm:max-w-none md:max-w-none lg:max-w-none p-0 h-screen max-h-screen flex flex-col overflow-hidden"
        style={{ width: '70%', maxWidth: 'none', height: '100vh', maxHeight: '100vh' }}
      >
        <SheetHeader className="p-4 border-b shrink-0">
          <SheetTitle>Resume - Manish Kumar</SheetTitle>
          <SheetDescription>
            Full-stack developer resume with comprehensive experience
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 bg-white overflow-auto min-h-0">
          <iframe
            src={resumeUrl}
            className="w-full h-full"
            title="Manish Kumar Resume"
            style={{ border: 'none' }}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
