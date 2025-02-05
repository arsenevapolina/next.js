"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface GitHubContextType {
  githubLink: string;
}

const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

interface GitHubProviderProps {
  value: GitHubContextType;
  children: ReactNode;
}

export const GitHubProvider: React.FC<GitHubProviderProps> = ({
  value,
  children,
}) => {
  return (
    <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>
  );
};

export const useGitHub = (): GitHubContextType => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error("useGitHub must be used within a GitHubProvider");
  }
  return context;
};
