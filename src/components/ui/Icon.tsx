import {
  Heart, Droplet, Brain, Pill, Bone, Flower2, Apple, Leaf, ShieldCheck, Sparkles,
  Lightbulb, HeartHandshake, Handshake, Target, GraduationCap, Award, Stethoscope,
  Recycle, Users, Activity, FlaskConical, Globe2, Factory, Microscope,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  heart: Heart,
  droplet: Droplet,
  brain: Brain,
  pill: Pill,
  bone: Bone,
  flower: Flower2,
  apple: Apple,
  leaf: Leaf,
  shield: ShieldCheck,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  lightbulb: Lightbulb,
  "heart-handshake": HeartHandshake,
  handshake: Handshake,
  target: Target,
  "graduation-cap": GraduationCap,
  award: Award,
  stethoscope: Stethoscope,
  recycle: Recycle,
  users: Users,
  activity: Activity,
  flask: FlaskConical,
  globe: Globe2,
  factory: Factory,
  microscope: Microscope,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? Pill;
  return <Cmp className={className} />;
}
