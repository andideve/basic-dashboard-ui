import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { Button, Input, Typography } from '@andideve/design-system';
import { useForm } from 'react-hook-form';

import Page, { Section } from '@/containers/templates/pages/login';
import { SITE_PATHS } from '@/config/constants';
import { siteMetadata } from '../_data/app';

interface FieldValues {
  username: string;
  password: string;
}

export default function Home() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const form = useForm<FieldValues>();

  const handleLogin = useCallback(async (values: FieldValues) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(SITE_PATHS.userDashboard);
    }, 1000);
  }, []);

  const inputs: Record<keyof FieldValues, React.ReactElement> = {
    username: (
      <div>
        <label htmlFor="username" className="inline-block mb-[0.375rem]">
          <Typography size="sm" color="foreground.secondary" as="span">
            Username
          </Typography>
        </label>
        <Input
          type="text"
          id="username"
          placeholder="Enter your username"
          {...form.register('username', { required: true })}
        />
      </div>
    ),
    password: (
      <div>
        <label htmlFor="password" className="inline-block mb-[0.375rem]">
          <Typography size="sm" color="foreground.secondary" as="span">
            Password
          </Typography>
        </label>
        <Input
          type="password"
          id="password"
          placeholder="••••••••"
          {...form.register('password', { required: true })}
        />
      </div>
    ),
  };

  return (
    <Page className="flex flex-col justify-center lg:pb-12">
      <Section>
        <div className="max-w-md mx-auto">
          <header className="mb-8 text-center">
            <Typography as="h2" size="3xl" className="font-bold">
              Sign in to {siteMetadata.title}
            </Typography>
          </header>
          <form onSubmit={form.handleSubmit(handleLogin)}>
            <div className="space-y-6">
              {inputs.username}
              {inputs.password}
            </div>
            <div className="mt-8">
              <Button type="submit" className="w-full" disabled={loading}>
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </Page>
  );
}
