import { 
  Bot, 
  Sparkles, 
  Zap, 
  Brain, 
  LayoutDashboard, 
  Globe, 
  ExternalLink, 
  Home,
  TrendingUp,
  Coins,
  CheckCircle
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
    id: 'yield-bridge',
    name: 'YieldBridge',
    description: 'Intelligent asset allocation and decentralized yield monitoring platform.',
    icon: Coins,
    url: 'https://yeildbridge.netlify.app/',
    color: 'amber',
  },
  {
    id: 'habitrac',
    name: 'HabiTrac',
    description: 'Advanced behavioral analysis and habit-forming productivity workbench.',
    icon: CheckCircle,
    url: 'https://habitrac.netlify.app/',
    color: 'emerald',
  },
];
