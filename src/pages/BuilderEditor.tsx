import { Builder, BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';
import '../builder-registry';

// Set your Builder.io public API key here
// Get this from: https://builder.io/account/organization
const BUILDER_PUBLIC_API_KEY = 'YOUR_BUILDER_PUBLIC_API_KEY'; // Replace with your actual API key

builder.init(BUILDER_PUBLIC_API_KEY);

export default function BuilderEditor() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch content from Builder.io
    builder
      .get('page', {
        url: window.location.pathname,
      })
      .promise()
      .then((content) => {
        setContent(content);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Builder.io content:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading Builder.io content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Visual Carousel Editor</h1>
          <p className="text-muted-foreground mb-4">
            Use Builder.io's visual editor to customize your carousel content
          </p>
          {BUILDER_PUBLIC_API_KEY === 'YOUR_BUILDER_PUBLIC_API_KEY' && (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
              <strong>Setup Required:</strong> Please add your Builder.io API key in{' '}
              <code>src/pages/BuilderEditor.tsx</code>
              <br />
              <small>
                Get your API key from:{' '}
                <a
                  href="https://builder.io/account/organization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  https://builder.io/account/organization
                </a>
              </small>
            </div>
          )}
        </div>

        {/* Builder.io Content Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg min-h-[400px]">
          <BuilderComponent
            model="page"
            content={content}
            apiKey={BUILDER_PUBLIC_API_KEY}
          />
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-muted p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">How to Use the Visual Editor:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Get your Builder.io API key from your Builder.io account</li>
            <li>Replace the API key in the code above</li>
            <li>
              Go to{' '}
              <a
                href="https://builder.io/content"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Builder.io Content
              </a>{' '}
              to create and edit pages
            </li>
            <li>Use the "VisualCarousel" component in the Builder.io editor</li>
            <li>Customize images, text, and layouts visually</li>
            <li>Publish your changes to see them live</li>
          </ol>
        </div>

        {/* Available Components */}
        <div className="mt-6 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Available Components in Builder.io:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-blue-600">VisualCarousel</h4>
              <p className="text-sm text-gray-600 mt-1">
                Fully customizable carousel with visual editing for images, titles, and content
              </p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Drag & drop image uploads</li>
                <li>• Rich text editor for content</li>
                <li>• Layout options (1:1, 1:2, 2:1)</li>
                <li>• Add/remove slides visually</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-green-600">AccordionContained</h4>
              <p className="text-sm text-gray-600 mt-1">
                Interactive accordion with customizable items and rich content
              </p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Add/remove accordion items</li>
                <li>• Rich text content editing</li>
                <li>• Custom titles and content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
