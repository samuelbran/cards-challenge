'use client';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function CountSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const count = searchParams.get('count') ?? '5';

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (value: string) => {
    router.push(pathname + '?' + createQueryString('count', value));
  };

  return (
    <FormControl
      style={{
        width: 200,
      }}
    >
      <InputLabel>Card count</InputLabel>
      <Select
        value={count}
        label="Cards count"
        onChange={(e) => handleChange(e.target.value as string)}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
      </Select>
    </FormControl>
  );
}
