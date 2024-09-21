import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`max-w-full w-full mx-0 py-4 px-0 md:px-0`}>
      {children}
    </main>
  );
};
