/**
 * Maps icon name strings (stored in Blob JSON) back to React icon components.
 * Used by page components that render icons from CMS content.
 */
import {
  HeartIcon,
  ShieldIcon,
  CrossIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  GiftIcon,
  BookOpenIcon,
  DocumentIcon,
  SunIcon,
} from '../components';

export const ICON_MAP: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  HeartIcon,
  ShieldIcon,
  CrossIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  GiftIcon,
  BookOpenIcon,
  DocumentIcon,
  SunIcon,
};

export function resolveIcon(name: string) {
  return ICON_MAP[name] ?? CheckCircleIcon;
}
