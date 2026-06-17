/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_printf.h                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kentarou1412 <kentarou1412@student.42.f    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/04 07:09:48 by kentarou141       #+#    #+#             */
/*   Updated: 2026/01/04 07:11:44 by kentarou141      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef FT_PRINTF_H
# define FT_PRINTF_H

# include <limits.h>
# include <stdarg.h>
# include <stdio.h>
# include <unistd.h>

void	ft_safe_write(char c, int *len);
void	ft_print_str(char *s, int *len);
void	ft_print_int(int n, int *len);
void	ft_print_unsigned(unsigned int n, int *len);
void	ft_print_hex(unsigned int n, int is_upper, int *len);
void	ft_print_ptr(void *p, int *len);
int		ft_printf(const char *fmt, ...);

#endif
