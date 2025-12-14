# Booking Widget For Daisy

BookingWidget is a customizable booking widget which displays workshop information and allows users to select dates and confirm bookings.
It was made in a day using Next.JS, TailwindCSS, and framer-motion, and set as a shadcn/ui custom component.

## Usage

### Installation

1. Import the BookingWidget component

```tsx
import BookingWidget from '@/components/BookingWidget';
```

2. (optional) Import or create a theme

```tsx
import { darkTechTheme } from '@/app/themes/theme';
```

3. Use the component

```tsx
export default function Page() {
  return (
    <BookingWidget
		workshop={mockWorkshopWithoutAvatar}
		onBook={(instance) => console.log("Booked:", instance)}
		theme= {activeTheme} // optional
	/>
  );
}
```

## Props

### A `workshop` Object (required)

Workshop data to display in the widget.

**Properties:**
- `id`: string - Unique identifier
- `title`: string - Workshop name
- `image`: string - Cover image URL
- `avatar`: string | null - Instructor avatar URL (optional)
- `location`: string - Workshop location
- `instances`: WorkshopEventInstance[] - Available booking dates

**Example:**
```tsx
const workshop = {
  id: 'wk-1',
  title: 'Atelier Peinture',
  image: 'https://example.com/image.jpg',
  avatar: 'https://example.com/avatar.png',
  location: 'Paris, France',
  instances: [
    {
      id: 'inst-1',
      workshopId: 'wk-1',
      price: 45,
      date: new Date('2025-12-18T18:30:00'),
      spotsRemaining: 5,
    },
  ],
};
```

### A `theme` Object (optional)

Customize the widget's appearance with your own theme.

```tsx
const customTheme = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#95E1D3',
  },
  background: {
    basic: '#FFFFFF',
    heavy: '#F5F5F5',
  },
  fontFamily: 'Poppins, sans-serif',
  fontColor: '#2C2C2C',
  fontColorLight: '#999999',
  borderRadius: '1rem',
};

<BookingWidget
  workshop={workshop}
  onBook={handleBook}
  theme={customTheme}
/>
```


# Research

## Definitions

**Widget**: small GUI appliction that provides some visual information and or easy access to frequently used functions

## Technologies

- **Tailwind CSS**
- **Next.JS**: fullstack React-based framework
- **framer-motion**: graphical animation framework, good for smooth transitions
- **shadcn/ui**: ui component library with integrated accessibility

## Objective

- Display workshop information :
	- titre,
	- image,
	- lieu,
	- prix,
	- date,
	- places restantes.
- Allow booking on a specific date.
- Simulate a "Book" button (no need for Stripe).
- **Autonomous**
- **Reusable**: customizable
- **Responsive**: mobile first
- **Loyal to Daisy's product logic**

## Benchmark

Booking Widgets in general:
- https://elfsight.com/appointment-booking-widget/
- https://www.ticketinghub.com/blog/what-is-a-booking-widget

**Vagaro**: Fitness & Beauty - https://www.vagaro.com/en-gb/pro/online-booking

**Altegio**: Generic - https://alteg.io/en/online-booking/

**SimplyBook**: Generic- https://simplybook.me/en/booking-page-themes

**Setmore**: Generic - https://www.setmore.com/features/booking-page & https://www.youtube.com/watch?v=yTaeoHt3FJ8

**Art et Bulle**: Art - https://www.artetbulle.com/ateliers-paris (Pretty ugly)


## Daisy Identity

- https://pro.daisyapp.fr/ - Pro interface
- https://www.daisyapp.fr/ - Final User interface

- Accent for Pro:
	- purple #7e0181
	- orange #ff5c28
- Accent for Final Users:
	- orange #f85441
	- orange #fa5441
	- purple #7c0080 for links
- Background:
	- pale yellow #faf8e6
	- strong pale yellow #f0eeda
	- pink #ffded4
- font: Montserrat
- corner: rounded, or even cropped into mellow ellipses
- vibe: hippy logo + plants


## AI Policy

I used LLM's input in the making of this demo, specifically to fix NextJS syntax errors, generate mock data, kickstart the component building process with good practices, and to probe on the possible uses of the tech stack items I wasn't familiar with.

## Time

I spent a total of 8 hours to complete this demo.
As I started, my total experience with React was about 2 hours. Needless to say I learned a ton !

# Conclusion

With more experience, I would have incorporated the themes earlier in the data and code.
Currently, the visual hierarchy is not as clear as I would like, and I haven't implemented fonts in a satisfactory manner.
However, I consider this a good start of my front end dev experience, and an excellent opportunity to discover React and Next.JS.
