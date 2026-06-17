/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_printf_utils.c                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kentarou1412 <kentarou1412@student.42.f    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/04 07:12:03 by kentarou141       #+#    #+#             */
/*   Updated: 2026/01/04 07:52:15 by kentarou141      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "ft_printf.h"

void	ft_put_base(unsigned long n, int base, char *digits, int *len)
{
	char	buffer[64];
	int		i;

	if (n == 0)
	{
		ft_safe_write(digits[0], len);
		return ;
	}
	i = 0;
	while (n > 0)
	{
		buffer[i] = digits[n % base];
		n = n / base;
		i++;
	}
	while (i > 0)
	{
		i--;
		ft_safe_write(buffer[i], len);
	}
}

void	ft_print_int(int n, int *len)
{
	long	nb;

	nb = n;
	if (nb < 0)
	{
		ft_safe_write('-', len);
		nb = -nb;
	}
	ft_put_base(nb, 10, "0123456789", len);
}

void	ft_print_unsigned(unsigned int n, int *len)
{
	ft_put_base(n, 10, "0123456789", len);
}

void	ft_print_hex(unsigned int n, int is_upper, int *len)
{
	if (is_upper)
		ft_put_base(n, 16, "0123456789ABCDEF", len);
	else
		ft_put_base(n, 16, "0123456789abcdef", len);
}

void	ft_print_ptr(void *p, int *len)
{
	ft_print_str("0x", len);
	ft_put_base((unsigned long)p, 16, "0123456789abcdef", len);
}
