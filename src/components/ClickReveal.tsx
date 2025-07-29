import { Button, type ButtonProps } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Children, cloneElement, isValidElement, type ReactNode, useState } from 'react';

interface ClickRevealProps {
  children: ReactNode;
}

interface ClickRevealTriggerProps extends ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  isRevealed?: boolean;
}

interface ClickRevealContentProps {
  children: ReactNode;
}

interface ClickRevealHiddenProps {
  children: ReactNode;
  isRevealed?: boolean;
}

type ClickRevealTriggerElement = React.ReactElement<ClickRevealTriggerProps>;

const ClickReveal = ({ children, ...props }: ClickRevealProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  // Process the children to inject props
  const renderChildren = () => {
    return Children.map(children, (child) => {
      // If it's not a valid React element, return it as is
      if (!isValidElement(child)) return child;

      // If it's the button, inject the toggle function and state
      if (child.type === ClickRevealTrigger) {
        return cloneElement<ClickRevealTriggerProps>(child as ClickRevealTriggerElement, {
          onClick: toggleReveal,
          isRevealed,
        });
      }

      // If it's the hidden content, inject the state
      if (child.type === ClickRevealHidden) {
        return cloneElement(child as React.ReactElement<ClickRevealHiddenProps>, {
          isRevealed,
        });
      }

      // For other components, just render them
      return child;
    });
  };

  return <div {...props}>{renderChildren()}</div>;
};

const ClickRevealTrigger = ({
  children,
  onClick,
  isRevealed = false,
  ...props
}: ClickRevealTriggerProps) => {
  return (
    <Button onClick={onClick} variant="outline" className={`my-4 gap-2`} type="button" {...props}>
      {isRevealed ? (
        <>
          <EyeOffIcon className="h-4 w-4" />
          {children || 'Esconder'}
        </>
      ) : (
        <>
          <EyeIcon className="h-4 w-4" />
          {children || 'Revelar'}
        </>
      )}
    </Button>
  );
};

const ClickRevealContent = ({ children, ...props }: ClickRevealContentProps) => {
  return <div {...props}>{children}</div>;
};

const ClickRevealHidden = ({ children, isRevealed = false, ...props }: ClickRevealHiddenProps) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${isRevealed ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      {...props}
      aria-hidden={!isRevealed}
    >
      <div className="py-2">{children}</div>
    </div>
  );
};

export { ClickReveal, ClickRevealContent, ClickRevealHidden, ClickRevealTrigger };
