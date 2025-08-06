import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingBag,
  BarChart4,
  Bell,
  MessageSquare,
  Settings,
  DollarSign,
  BoxIcon,
  CreditCard,
  Coins,
  Building2,
  Boxes,
  ShoppingCart,
  Truck,
  UsersRound,
  Wallet,
  History,
  AlertCircle,
  TrendingUp,
  LineChart,
  BarChart,
  PieChart,
  UserPlus,
  MessageCircle,
  Building,
  Mail,
  Moon,
  BellOff,
  LogOut
} from 'lucide-react';

const navItems = [
  {
    icon: LayoutDashboard,
    text: 'Dashboard',
    path: '/dashboard',
    subitems: [
      { icon: DollarSign, text: 'Sales', path: '/dashboard/sales' },
      { icon: BoxIcon, text: 'Stocks', path: '/dashboard/stocks' },
      { icon: CreditCard, text: 'Installments', path: '/dashboard/installments' },
      { icon: Coins, text: 'Cash', path: '/dashboard/cash' }
    ]
  },
  {
    icon: Package,
    text: 'Products',
    path: '/products',
    subitems: [
      { icon: Building2, text: 'Companies', path: '/products/companies' },
      { icon: Boxes, text: 'Stock Status', path: '/products/stock' },
      { icon: ShoppingCart, text: 'Categories', path: '/products/categories' },
      { icon: Truck, text: 'Suppliers', path: '/products/suppliers' }
    ]
  },
  {
    icon: Users,
    text: 'Customers',
    path: '/customers',
    subitems: [
      { icon: UsersRound, text: 'All Customers', path: '/customers/all' },
      { icon: CreditCard, text: 'Installment Customers', path: '/customers/installment' },
      { icon: Wallet, text: 'Cash Customers', path: '/customers/cash' },
      { icon: History, text: 'Purchase History', path: '/customers/history' }
    ]
  },
  // Add more sections as needed...
];

export default navItems;
