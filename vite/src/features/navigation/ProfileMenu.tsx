import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  BookOpen,
  ExternalLink,
  FlaskConical,
  Home,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Mailbox,
  PocketKnife,
  Settings,
  User,
} from 'lucide-react';

import type { UserContextProps } from '@/lib/hooks/useLoggedInUser';
import { useWindowResize, VIEWPORTS } from '@/lib/hooks/useWindowResize';
import { cn } from '@/lib/utils';

import Link from '@/components/ui/Link';
import { Badge } from '@/components/ui/Badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { Separator } from '@/components/ui/Separator';

import { DrawerMenu } from './DrawerMenu';

const MenuItem = ({
  Icon,
  appending,
  children,
  href,
  onClick,
  className,
  external,
  ...props
}: {
  Icon: LucideIcon;
  appending?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}) => {
  const classes = cn(
    'group mx-2 flex h-9 items-center justify-between gap-2 rounded-md px-2 text-left text-sm hover:bg-primary-foreground',
    className,
  );
  const content = (
    <React.Fragment>
      <div className="flex items-center gap-2">
        <Icon className="text-muted-foreground transition-colors group-hover:text-foreground" size={16} />
        <span className="truncate">{children}</span>
      </div>
      {appending}
    </React.Fragment>
  );
  if (onClick) {
    return (
      <button onClick={onClick} className={classes} {...props}>
        {content}
      </button>
    );
  }
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>
        {content}
        <ExternalLink size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
};

const ProfileMenu = ({ logoutParameters }: { logoutParameters?: Parameters<UserContextProps['logout']>[0] }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(true);
  const hasAvailablePreviewFeatures = false;
  const { viewport } = useWindowResize();
  const isMobile = viewport === VIEWPORTS.XSMALL;


  const pendingInvitations = [];

  const content = (
    <React.Fragment>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:w-[228px]">
          <div className="flex flex-col gap-1 py-2">
            <div className="flex items-center gap-2 px-2 py-1">
              <div className="truncate">
                <div className="truncate text-sm font-medium">Slawomir STec</div>
                <div className="truncate text-xs text-muted-foreground">slawomir.stec@gazeta.pl</div>
              </div>
            </div>

            <Separator className="my-1" />

            <MenuItem Icon={User} href={`/1`}>
              <span>Profile</span>
            </MenuItem>
            <MenuItem Icon={LayoutDashboard} href={`/dashboard/1`}>
              <span>Dashboard</span>
            </MenuItem>
            {pendingInvitations && (
              <MenuItem
                Icon={Mailbox}
                href="/member-invitations"
                appending={
                  <Badge type="info" round size="sm">
                    {pendingInvitations}
                  </Badge>
                }
              >
                <span>Member Invitations</span>
              </MenuItem>
            )}

            {hasAvailablePreviewFeatures && (
              <MenuItem
                Icon={FlaskConical}
                appending={
                  <Badge type="info" round size="sm">
                    <span>New !</span>
                  </Badge>
                }
              >
                <span>Preview Features</span>
              </MenuItem>
            )}
            {(
              <MenuItem Icon={PocketKnife} href="/opencollective/root-actions">
                <span>Root Actions</span>
              </MenuItem>
            )}
            <MenuItem Icon={Settings} href={`/dashboard/1/info`}>
              <span>Settings</span>
            </MenuItem>

            <Separator className="my-1" />

            <MenuItem Icon={Home} href="/home">
              <span>Open Collective Home</span>
            </MenuItem>

            <MenuItem Icon={LifeBuoy} href="/help">
              <span>Help</span>
            </MenuItem>

            <MenuItem Icon={BookOpen} href="https://docs.opencollective.com" external={true}>
              <span>Docs</span>
            </MenuItem>

            <Separator className="my-1" />

            <MenuItem Icon={LogOut} data-cy="logout">
              <span>Logout</span>
            </MenuItem>
          </div>
        </div>
        <Separator className="sm:hidden" />
      </div>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Popover open={isMenuOpen} onOpenChange={open => setMenuOpen(open)}>
        <PopoverTrigger asChild>
          <button
            className="rounded-full ring-black ring-offset-1 focus:outline-none focus:ring-2"
            data-cy="user-menu-trigger"
          >
          </button>
        </PopoverTrigger>
        {!isMobile && (
          <PopoverContent data-cy="user-menu" align="end" className="w-full max-w-lg overflow-hidden rounded-xl p-0">
            {content}
          </PopoverContent>
        )}
      </Popover>
      {isMobile && (
        <DrawerMenu onClose={() => setMenuOpen(false)} open={isMenuOpen}>
          {content}
        </DrawerMenu>
      )}
    </React.Fragment>
  );
};
export default ProfileMenu;
