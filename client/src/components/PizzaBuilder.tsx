import { motion, AnimatePresence } from 'framer-motion';

interface PizzaBuilderProps {
  size: string;
  crust: string;
  sauce: string;
  cheese: string;
  toppings: string[];
}

export default function PizzaBuilder({ size, crust, sauce, cheese, toppings }: PizzaBuilderProps) {
  const sizeMap = {
    'small': { width: 160, height: 160 },
    'medium': { width: 200, height: 200 },
    'large': { width: 240, height: 240 },
    'xlarge': { width: 280, height: 280 },
  };

  const pizzaSize = sizeMap[size as keyof typeof sizeMap] || sizeMap.medium;

  const crustColors = {
    'regular': '#D4A574',
    'thin': '#C9984A',
    'thick': '#E6B88A',
    'stuffed': '#F5D7A0',
  };

  const sauceColors = {
    'marinara': '#D32F2F',
    'white': '#F5F5DC',
    'bbq': '#8B4513',
    'pesto': '#6B8E23',
    'none': 'transparent',
  };

  const toppingPositions = [
    { top: '20%', left: '30%' },
    { top: '25%', left: '60%' },
    { top: '45%', left: '25%' },
    { top: '45%', left: '70%' },
    { top: '65%', left: '40%' },
    { top: '65%', left: '55%' },
    { top: '35%', left: '45%' },
    { top: '55%', left: '50%' },
    { top: '30%', left: '75%' },
    { top: '70%', left: '30%' },
    { top: '50%', left: '35%' },
    { top: '40%', left: '65%' },
  ];

  const toppingColors: { [key: string]: string } = {
    'pepperoni': '#C41E3A',
    'beef': '#8B4513',
    'chicken': '#F5DEB3',
    'sausage': '#A0522D',
    'bacon': '#D2691E',
    'mushrooms': '#F5F5DC',
    'onions': '#FFF8DC',
    'peppers': '#90EE90',
    'olives': '#2F4F4F',
    'tomatoes': '#FF6347',
    'jalapenos': '#228B22',
    'pineapple': '#FFD700',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-inner min-h-[450px]">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          width: pizzaSize.width, 
          height: pizzaSize.height,
          scale: 1,
          rotate: 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          duration: 0.6
        }}
      >
        {/* Pizza Base / Crust */}
        <motion.div
          className="absolute rounded-full shadow-2xl"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: crustColors[crust as keyof typeof crustColors] || crustColors.regular,
            boxShadow: crust === 'thick' 
              ? '0 10px 40px rgba(0,0,0,0.3), inset 0 -5px 20px rgba(0,0,0,0.2)' 
              : '0 8px 30px rgba(0,0,0,0.2), inset 0 -3px 15px rgba(0,0,0,0.15)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Stuffed Crust Effect */}
        {crust === 'stuffed' && (
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '105%',
              height: '105%',
              border: '8px solid #F5D7A0',
              boxShadow: 'inset 0 0 10px rgba(255,215,0,0.4)',
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
        )}

        {/* Sauce Layer */}
        <AnimatePresence>
          {sauce !== 'none' && (
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '85%',
                height: '85%',
                backgroundColor: sauceColors[sauce as keyof typeof sauceColors] || sauceColors.marinara,
                opacity: 0.9,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            />
          )}
        </AnimatePresence>

        {/* Cheese Layer */}
        <AnimatePresence>
          {cheese !== 'none' && (
            <motion.div
              className="absolute rounded-full"
              style={{
                width: cheese === 'extra' ? '88%' : cheese === 'light' ? '78%' : '82%',
                height: cheese === 'extra' ? '88%' : cheese === 'light' ? '78%' : '82%',
                backgroundColor: '#FFF8DC',
                opacity: cheese === 'light' ? 0.6 : 0.85,
                boxShadow: 'inset 0 2px 10px rgba(255,215,0,0.3)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: cheese === 'light' ? 0.6 : 0.85 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
            />
          )}
        </AnimatePresence>

        {/* Toppings */}
        <AnimatePresence>
          {toppings.map((topping, index) => (
            <motion.div
              key={topping}
              className="absolute rounded-full"
              style={{
                width: '18%',
                height: '18%',
                backgroundColor: toppingColors[topping] || '#8B4513',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.3)',
                ...toppingPositions[index % toppingPositions.length],
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0, rotate: -180, y: -50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              exit={{ scale: 0, rotate: 180, y: 50 }}
              transition={{ 
                delay: 1.2 + (index * 0.1),
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }}
            />
          ))}
        </AnimatePresence>

        {/* Glossy Overlay */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        />
      </motion.div>

      {/* Steam Animation */}
      <div className="mt-6 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1 bg-gray-400/40 rounded-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: [0, 20, 0],
              opacity: [0, 0.6, 0],
              y: [-10, -30, -50]
            }}
            transition={{
              delay: 2 + (i * 0.2),
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        ))}
      </div>

      <motion.p
        className="mt-4 text-sm font-medium text-muted-foreground text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        {toppings.length === 0 
          ? "Add your favorite toppings!" 
          : `${toppings.length} topping${toppings.length > 1 ? 's' : ''} added`}
      </motion.p>
    </div>
  );
}
