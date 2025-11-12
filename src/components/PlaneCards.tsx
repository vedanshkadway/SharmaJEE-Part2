import { useState } from "react";
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from "next/image";
interface CardProps {
  Content: React.ReactNode;
  studentName: string;
  collegeName: string;
  studentPhoto: string;
  className?: string;
}

export default function PlaneCard({
  Content,
  studentName,
  collegeName,
  studentPhoto,
  className = "transform transition duration-300 hover:scale-105 "

}: CardProps) {

  

  return (
    <div className={`relative w-80 h-96 bg-white rounded-3xl hover:bg-blue [perspective:1000px] ${className}`}>
      <div
        className={`relative w-full h-full transition-transform duration-700`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-gradient-card rounded-3xl shadow-card hover:shadow-hover transition-shadow duration-300 p-6 flex flex-col">
          <div className="relative mb-6">


            <img
              src={studentPhoto}
              alt="Student"
              width={100}
              height={100}
              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/20"
            />
            
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-foreground mb-1">{studentName}</h2>
            <p className="text-muted-foreground font-medium">{collegeName}</p>
          </div>
          <div className="flex-1">
            <p className="text-muted-foreground leading-relaxed text-sm">{Content}</p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
