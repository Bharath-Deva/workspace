import stud_data,re

def execute(reg_no):
    course = stud_data.couse_name(reg_no[6:9])
    rl_no = reg_no[9:]
    colg = stud_data.colg_name(reg_no[0:4])

    if(colg and course):
        print(f'belongs to the year: 20{reg_no[4:6]}')
        print(f"colg name: {colg}")
        print(f"course name: {course}")
        print(f"roll n0: {rl_no}")
    else:
        print("your colg or couse is not in our data")


reg_no = input("enter ur register number: ")
pattern = re.compile(r"[\d]{12,}")
check = pattern.fullmatch(reg_no)
if(check):
    execute(reg_no)
else:
    print("enter proper register number")

