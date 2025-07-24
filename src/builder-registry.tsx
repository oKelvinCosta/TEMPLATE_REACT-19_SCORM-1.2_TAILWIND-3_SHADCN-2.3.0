import { Builder } from '@builder.io/react';
import CarouselCard from './components/CarouselCard';
import AccordionContained from './components/AccordionContained';

// Register CarouselCard component with Builder.io
Builder.registerComponent(CarouselCard, {
  name: 'CustomCarousel',
  inputs: [
    {
      name: 'items',
      type: 'list',
      subFields: [
        {
          name: 'imgSrc',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
          defaultValue: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Slide Title',
        },
        {
          name: 'contentTitle',
          type: 'string',
          defaultValue: 'Content Title',
        },
        {
          name: 'contentText',
          type: 'richText',
          defaultValue: '<p>Add your slide content here. You can format this text with rich formatting.</p>',
        },
      ],
      defaultValue: [
        {
          imgSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
          title: 'Technology Innovation',
          contentTitle: 'Advanced Solutions',
          contentText: '<p>Discover cutting-edge technology that transforms the way we work and live.</p>',
        },
        {
          imgSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop',
          title: 'Team Collaboration',
          contentTitle: 'Working Together',
          contentText: '<p>Effective teamwork drives success. Learn how collaboration can boost productivity.</p>',
        },
        {
          imgSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
          title: 'Data Analytics',
          contentTitle: 'Smart Insights',
          contentText: '<p>Transform raw data into actionable insights with powerful analytics tools.</p>',
        },
      ],
    },
    {
      name: 'layout',
      type: 'string',
      enum: ['1:1', '1:2', '2:1'],
      defaultValue: '1:2',
      helperText: 'Choose the layout ratio between image and content',
    },
  ],
});

// Create a Builder.io compatible wrapper for CarouselCard
export const BuilderCarousel = ({ items, layout = '1:2' }) => {
  // Transform the Builder.io data to match CarouselCard expected format
  const transformedItems = items?.map(item => ({
    imgSrc: item.imgSrc,
    title: item.title,
    content: () => (
      <div>
        <h5 className="text-xl font-semibold mb-2">{item.contentTitle}</h5>
        <div dangerouslySetInnerHTML={{ __html: item.contentText }} />
      </div>
    ),
  })) || [];

  return <CarouselCard items={transformedItems} layout={layout} />;
};

// Register the wrapper component
Builder.registerComponent(BuilderCarousel, {
  name: 'VisualCarousel',
  inputs: [
    {
      name: 'items',
      type: 'list',
      subFields: [
        {
          name: 'imgSrc',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
          defaultValue: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Slide Title',
        },
        {
          name: 'contentTitle',
          type: 'string',
          defaultValue: 'Content Title',
        },
        {
          name: 'contentText',
          type: 'richText',
          defaultValue: '<p>Add your slide content here. You can format this text with rich formatting.</p>',
        },
      ],
      defaultValue: [
        {
          imgSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
          title: 'Technology Innovation',
          contentTitle: 'Advanced Solutions',
          contentText: '<p>Discover cutting-edge technology that transforms the way we work and live.</p>',
        },
        {
          imgSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop',
          title: 'Team Collaboration',
          contentTitle: 'Working Together',
          contentText: '<p>Effective teamwork drives success. Learn how collaboration can boost productivity.</p>',
        },
        {
          imgSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
          title: 'Data Analytics',
          contentTitle: 'Smart Insights',
          contentText: '<p>Transform raw data into actionable insights with powerful analytics tools.</p>',
        },
      ],
    },
    {
      name: 'layout',
      type: 'string',
      enum: ['1:1', '1:2', '2:1'],
      defaultValue: '1:2',
      helperText: 'Choose the layout ratio between image and content',
    },
  ],
});
