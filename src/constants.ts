import { 
  Bot, 
  LayoutDashboard, 
  Home,
  TrendingUp,
  CheckCircle,
  Activity
} from 'lucide-react';

export interface AppConfig {
  id: string;
  name: string;
  description: string;
  icon: typeof Bot;
  url: string;
  color: string;
}

export const APPS: AppConfig[] = [
  {
    id: 'estate-analyzer',
    name: 'EstateWealth Analyzer',
    description: 'Expert real estate investment tool for analyzing property wealth and market growth.',
    icon: Home,
    url: 'https://estatewealthanalyser.netlify.app/',
    color: 'rose',
  },
  {
    id: 'retire-wise',
    name: 'RetireWise Pro',
    description: 'Sophisticated retirement planning and social security optimization engine.',
    icon: TrendingUp,
    url: 'https://retirewisetool.netlify.app/',
    color: 'cyan',
  },
  {
    id: 'habitrac',
    name: 'HabiTrac',
    description: 'Advanced behavioral analysis and habit-forming productivity workbench.',
    icon: CheckCircle,
    url: 'https://habitrac.netlify.app/',
    color: 'emerald',
  },
  {
    id: 'foliopulse',
    name: 'FolioPulse',
    description: 'Real-time portfolio performance tracking and dynamic volatility monitoring.',
    icon: Activity,
    url: 'https://foliopulse.netlify.app/',
    color: 'violet',
  },
];
