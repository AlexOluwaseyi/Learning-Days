#include "main.h"

/**
 * _strncpy - copies a string to a destination
 * @dest: desination string
 * @src: source string
 * @n: maximum number of bytes to by copies from source to destination
 * Return: destination string
 */

char *_strncpy(char *dest, char *src, int n)
{
	int srclen = 0;
	int destlen = 0;
	int i = 0;

	while (src[srclen] != '\0')
	{
		srclen++;
	}
	while (dest[destlen] != '\0')
	{
		destlen++;
	}
	for (i = 0; i < n; i++)
	{
		dest[i] = src[i];
	}
	dest[destlen] = '\0';
	return (dest);
}
