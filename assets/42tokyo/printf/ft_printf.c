/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_printf.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kentarou1412 <kentarou1412@student.42.f    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/04 07:08:58 by kentarou141       #+#    #+#             */
/*   Updated: 2026/01/04 07:22:22 by kentarou141      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "ft_printf.h"

void	ft_check_format(char c, va_list ap, int *len)
{
	if (c == 's')
		ft_print_str(va_arg(ap, char *), len);
	else if (c == 'd' || c == 'i')
		ft_print_int(va_arg(ap, int), len);
	else if (c == 'u')
		ft_print_unsigned(va_arg(ap, unsigned int), len);
	else if (c == 'x')
		ft_print_hex(va_arg(ap, unsigned int), 0, len);
	else if (c == 'X')
		ft_print_hex(va_arg(ap, unsigned int), 1, len);
	else if (c == 'p')
		ft_print_ptr(va_arg(ap, void *), len);
	else if (c == 'c')
		ft_safe_write(va_arg(ap, int), len);
	else
		ft_safe_write(c, len);
}

int	ft_printf(const char *fmt, ...)
{
	va_list	ap;
	int		len;

	if (!fmt)
		return (-1);
	len = 0;
	va_start(ap, fmt);
	while (*fmt)
	{
		if (len == -1)
			break ;
		if (*fmt == '%')
		{
			fmt++;
			if (*fmt)
				ft_check_format(*fmt, ap, &len);
		}
		else
			ft_safe_write(*fmt, &len);
		if (*fmt)
			fmt++;
	}
	va_end(ap);
	return (len);
}
