def add1cookie():
    global lc
    global label
    global c
    if c==0:
        pass
    else:
        tu=time.time()-lc
        if tu<0.04:
            cheatedected()
        if c%10==0:
            cheatdectetion()
    c=c+1
    ctext.set("Cookie(s):"+str(c))


def cheatdectetion():
    print("decting cheats")
    apps=(p.name() for p in psutil.process_iter())
    for cexe in cl:
        if cexe in apps:
            cheatedected()
def cheatedected():

    if c==0:
        pass
    else:
        c=0
        ctext.set("CHEAT DETECTED! PLEASE QUIT YOUR AUTOCLICKER")
        time.sleep("30")
        quit()

import tkinter
import time
from tkinter.constants import *
import psutil
lc=time.time()
c=0
cl=["MurGaa Auto Clicker","Auto Mouse Click","Mac Auto Clicker","AutoClicker.exe","AutoClickers.exe","FreeAutoClicker.exe","GSAutoClicker.exe"]
tk = tkinter.Tk()
ctext=tkinter.StringVar()


cookie = tkinter.PhotoImage(file = "cookie_ss.gif")
frame = tkinter.Frame(tk, relief=RIDGE, borderwidth=2)
frame.pack(fill=BOTH,expand=1)
label = tkinter.Label(frame, textvariable=ctext)
label.pack(fill=X, expand=1)
button = tkinter.Button(frame,text='''click me''',image=cookie,command=add1cookie)
button.pack(side=BOTTOM)
tk.mainloop()
