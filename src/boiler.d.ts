// Extend react-dom types to include createRoot
import 'react-dom';

declare module 'react-dom' {
  interface Root {
    render: (element: React.ReactNode) => void;
  }

  export function createRoot(
    container: Element,
    options?: {
      hydrate?: boolean;
    }
  ): Root;
}
