#include "main.h"

struct Phonebook {
    char id;
    char name[64];
    char number[11];
    };

int show_contacts();
int add_contacts();
int del_contacts();

int i;
struct Phonebook contacts[100];

int main()
{
    int resp1;

    printf("Welcome to the Phonebook App! (v 1.0.0.1)\n");
    printf("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
    printf("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n");
    printf("What would you like to do?\n");
    printf("Enter corresponding number!\n");
    printf("1.\tAdd contact to Phonebook\n");
    printf("2.\tSearch Phonebook\n");
    printf("3.\tDelete contact from Phonebook\n");
    printf("Enter your input here: ");
    scanf("%d", &resp1);

    switch(resp1){
        case 1:
            add_contacts();
            //break;
        case 2:
            show_contacts();
            break;
        case 3:
            del_contacts();
            break;
    }
    return (0);

}

int add_contacts()
{

    char nameHolder[64];
    char numberHolder[11];

    printf("Contact ID: %03d.\n", i+1);
    printf("Enter contact name: ");
    fgets(nameHolder, 8, stdin);
    scanf("%s\n", nameHolder);
    printf("Enter contact number: ");
    scanf("%s\n", numberHolder);
    fgets(numberHolder, 11, stdin);

    contacts[i].id = i+1;
    strcpy(contacts[i].name, nameHolder);
    strcpy(contacts[i].number, numberHolder);

    printf("\nPhonebook\n");
    printf("ID\t\tName\t\t\tNumber\n");
    printf("%d\t\t%s\t%s\n", contacts[i].id, contacts[i].name, contacts[i].number);

    return (0);

}

int show_contacts()
{

    while (i < 100)
    {
        printf("ID: %s\n", contacts[i].id);
        printf("ID: %s\n", contacts[i].name);
        printf("ID: %s\n", contacts[i].number);
//        printf("ID: %s\n", contact.id);
//        printf("ID: %s\n", contact2.name);
//        printf("ID: %s\n", contact2.number);
//        printf("ID: %s\n", contact3.id);
//        printf("ID: %s\n", contact3.name);
//        printf("ID: %s\n", contact3.number);
        i++;
    }
    return (0);
}



int del_contacts()
{
    return (0);
}
