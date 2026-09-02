import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FFF6E0] text-[#21173A] flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="bg-white p-8 rounded-3xl border-3 border-[#21173A] shadow-xl max-w-lg">
            <h2 className="text-2xl font-black mb-3 text-[#FF3D85]">Oups, une erreur est survenue</h2>
            <p className="text-sm font-semibold text-gray-700 mb-4">
              {this.state.error?.message || 'Un problème temporaire d’affichage est survenu.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-[#FFC93C] text-[#21173A] font-extrabold rounded-full border-2 border-[#21173A] shadow-md hover:bg-amber-400"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
