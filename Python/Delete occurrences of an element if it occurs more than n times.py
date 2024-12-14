def delete_nth(order, max_e):
    
    new_list = []
    count = {}

    for element in order:
        
        if count.get(element, 0) < max_e:
            new_list.append(element) 
            count[element] = count.get(element, 0) + 1
            
    return new_list


#iterate throught the list
#create a empty list and a count variable
#i need to count the amount of times an element appears in the list
#and if its greater then max_e dont append it to the new list
#return new list
