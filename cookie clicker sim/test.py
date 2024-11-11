
def no_lola(names):
    if len(names) == 0:
        return []
    if names[0] == "Lola":
        return no_lola(names[1:])
    else:
        return [names[0]] + no_lola(names[1:])
         

def has_balanced_parens(the_string, open_parens=0):

    if len(the_string) == 0:
        return open_parens == 0

    if the_string[0] == "(":
        open_parens += 1
        return has_balanced_parens(the_string[1:], open_parens)
    elif the_string[0] == ")":
        open_parens -= 1
        return has_balanced_parens(the_string[1:], open_parens)
    else:
        return has_balanced_parens(the_string[1:], open_parens)