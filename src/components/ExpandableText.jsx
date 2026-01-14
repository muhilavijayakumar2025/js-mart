import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExpandableText = ({ 
    text, 
    maxLength = 150, 
    className = '', 
    showButton = true,
    buttonText = { more: 'Read More', less: 'Read Less' }
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    if (!text) return null;
    
    const shouldTruncate = text.length > maxLength;
    const displayText = isExpanded || !shouldTruncate 
        ? text 
        : `${text.substring(0, maxLength)}...`;
    
    return (
        <div className={className}>
            <p className="leading-relaxed">
                {displayText}
            </p>
            {shouldTruncate && showButton && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`mt-2 inline-flex items-center gap-1 font-semibold text-sm transition-colors duration-200 ${
                        className.includes('text-white') || className.includes('text-primary-200') 
                            ? 'text-white hover:text-primary-200' 
                            : 'text-primary-600 hover:text-primary-700'
                    }`}
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? (
                        <>
                            {buttonText.less}
                            <ChevronUp className="h-4 w-4" />
                        </>
                    ) : (
                        <>
                            {buttonText.more}
                            <ChevronDown className="h-4 w-4" />
                        </>
                    )}
                </button>
            )}
        </div>
    );
};

export default ExpandableText;

