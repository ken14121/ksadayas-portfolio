/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_printf_hex.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kentarou1412 <kentarou1412@student.42.f    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/04 07:12:33 by kentarou141       #+#    #+#             */
/*   Updated: 2026/01/04 07:52:25 by kentarou141      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "ft_printf.h"

void	ft_safe_write(char c, int *len)
{
	if (*len == -1)
		return ;
	if (write(1, &c, 1) == -1)
		*len = -1;
	else
		*len += 1;
}

void	ft_print_str(char *s, int *len)
{
	if (!s)
		s = "(null)";
	while (*s && *len != -1)
	{
		ft_safe_write(*s, len);
		s++;
	}
}
