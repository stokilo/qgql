'use client';

import { useState } from 'react';
import { rem, Title, Tooltip, UnstyledButton } from '@mantine/core';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useQuery } from 'urql';
import classes from './DoubleNavbar.module.css';
import { GetLeadsQuery, GqlHouseQuery } from '@/gql/api';
import { getLeads, GQL_HOUSE } from '@/gql/queries';

const mainLinksMockdata = [
  {
    icon: IconHome2,
    label: 'Home',
  },
  {
    icon: IconGauge,
    label: 'Dashboard',
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: 'Analytics',
  },
  {
    icon: IconCalendarStats,
    label: 'Releases',
  },
  {
    icon: IconUser,
    label: 'Account',
  },
  {
    icon: IconFingerprint,
    label: 'Security',
  },
  {
    icon: IconSettings,
    label: 'Settings',
  },
];

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
];

type Order = 'asc' | 'desc';

export function DoubleNavbar() {
  const [active, setActive] = useState('Releases');
  const [activeLink, setActiveLink] = useState('Settings');

  const [order] = useState<Order>('desc');
  const [status] = useState<string>('');
  const [term] = useState<string>('');

  useQuery<GetLeadsQuery>({
    query: getLeads,
    variables: {
      order,
      status,
      term,
    },
  });

  useQuery<GqlHouseQuery>({
    query: GQL_HOUSE,
    variables: {
      order,
      status,
      term,
    },
  });

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon
          style={{
            width: rem(22),
            height: rem(22),
          }}
          stroke={1.5}
        />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <a
      className={classes.link}
      data-active={activeLink === link || undefined}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <nav className={`${classes.navbar} mantine-visible-from-md`}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </div>
    </nav>
  );
}
