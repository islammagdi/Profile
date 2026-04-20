import { useState } from "react";
import { Download, Camera, FileImage } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "motion/react";

interface ExportSection {
  id: string;
  name: string;
  selector: string;
}

const exportSections: ExportSection[] = [
  { id: "hero", name: "Hero Section", selector: "[data-section='hero']" },
  { id: "about", name: "About Section", selector: "[data-section='about']" },
  { id: "portfolio", name: "Portfolio Section", selector: "[data-section='portfolio']" },
  { id: "skills", name: "Skills Section", selector: "[data-section='skills']" },
  { id: "contact", name: "Contact Section", selector: "[data-section='contact']" },
  { id: "full", name: "Full Page", selector: "body" }
];

export function PNGExporter() {
  const [isExporting, setIsExporting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const captureElement = async (selector: string, filename: string) => {
    try {
      // Dynamic import of html2canvas
      const html2canvas = await import('html2canvas');
      
      const element = document.querySelector(selector) as HTMLElement;
      if (!element) {
        throw new Error(`Element with selector "${selector}" not found`);
      }

      // For full page capture, scroll to top and wait
      if (selector === 'body') {
        window.scrollTo(0, 0);
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Configure capture options for high quality
      const canvas = await html2canvas.default(element, {
        allowTaint: true,
        useCORS: true,
        scale: 2, // Higher resolution
        backgroundColor: null, // Preserve transparency
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        foreignObjectRendering: true, // Better text rendering
        imageTimeout: 15000, // Longer timeout for images
        removeContainer: true // Clean up after capture
      });

      // Convert to blob and download with timestamp
      const timestamp = new Date().toISOString().slice(0, 10);
      const finalFilename = `${filename}-${timestamp}`;
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${finalFilename}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      }, 'image/png', 1.0);

    } catch (error) {
      console.error('Error capturing screenshot:', error);
      alert('Failed to capture screenshot. Please ensure the page is fully loaded and try again.');
    }
  };

  const handleExport = async (section: ExportSection) => {
    setIsExporting(true);
    
    try {
      const filename = `islam-magdi-portfolio-${section.id}`;
      await captureElement(section.selector, filename);
      
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setIsExporting(false);
    }
  };

  const exportAll = async () => {
    setIsExporting(true);
    
    try {
      for (const section of exportSections) {
        const filename = `islam-magdi-portfolio-${section.id}`;
        await captureElement(section.selector, filename);
        // Delay between captures to prevent overwhelming the browser
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } finally {
      setIsExporting(false);
    }
  };

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsVisible(true)}
          className="bg-purple-600/90 hover:bg-purple-700/90 backdrop-blur-md border border-purple-400/30 shadow-lg shadow-purple-500/25"
          size="lg"
        >
          <Camera className="w-5 h-5 mr-2" />
          Export PNG
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Card className="bg-black/80 backdrop-blur-md border border-purple-400/30 p-6 w-80 shadow-2xl shadow-purple-500/25">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileImage className="w-5 h-5 text-purple-400" />
            <h3 className="font-medium text-white">Export Portfolio</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white h-8 w-8 p-0"
          >
            ×
          </Button>
        </div>

        <div className="space-y-3 mb-4">
          {exportSections.map((section) => (
            <Button
              key={section.id}
              onClick={() => handleExport(section)}
              disabled={isExporting}
              variant="outline"
              className="w-full justify-start bg-transparent border-purple-400/30 hover:bg-purple-600/20 hover:border-purple-400/50 text-white disabled:opacity-50"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              {section.name}
            </Button>
          ))}
        </div>

        <Button
          onClick={exportAll}
          disabled={isExporting}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
        >
          {isExporting ? (
            <>
              <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Export All Sections
            </>
          )}
        </Button>

        <p className="text-xs text-gray-400 mt-3 text-center">
          High-quality PNG images will be downloaded to your device
        </p>
      </Card>
    </motion.div>
  );
}