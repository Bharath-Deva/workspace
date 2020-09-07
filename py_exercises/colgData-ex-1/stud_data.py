def colg_name(colg_code):
    with open("colg_list.txt",mode = "r") as m:
        a = m.read().split("\n")
        for temp  in a:
            if(colg_code in temp):
                return(temp.split(",")[-1])
        else:
            return None

def couse_name(course_code):
    with open("course_list.txt",mode="r") as m:
        a = m.read().split("\n")
        for i in a:
            if(course_code in i):
                return(i.split(",")[-1])
        else:
            return None

        