function buymenu() {
    tk = tkinter.Tk();
    ctext=tkinter.StringVar();
    bg = tkinter.PhotoImage(file = 'bg.gif');
    frame = tkinter.Frame(tk, relief=RIDGE, borderwidth=2, image=bg);
    frame.pack(fill=BOTH,expand=1);
    label = tkinter.Label(frame, text='CLICK ME 2 BUY STUFF');
    label.pack(fill=X, expand=1);
    button = tkinter.Button(frame,text='''click me''',image=cookie,command=add1cookie);
    button.pack(side=BOTTOM);
    buyb = tkinter.Button(frame,text='''BUY STUFF''',command=buymenu);
    buyb.pack(side=BOTTOM);
    tk.mainloop();
}
function add1cookie() {
    global lc;
    global label;
    global c;
    if (c==0) {

    } else {
        tu=time.time()-lc;
        if (tu<0.04) {
            cheatedected();
        if (c%10==0) {
            #playsound.playsound('oven_door.mp3',false);

    c=c+1;
    ctext.set('Cookie(s):'+str(c));
    lc=time.time();
        }

function cheatedected() {
    global c;
    if (c==0) {

    } else {
        c=0;
        ctext.set('CHEAT DETECTED! PLEASE QUIT YOUR AUTOCLICKER');
        time.sleep('30');
        quit();
    }
var tkinter = require('tkinter');
var playsound = require('playsound');
var time = require('time');
from tkinter.constants var * = require('*');
lc=time.time();
c=0;
tk = tkinter.Tk();
ctext=tkinter.StringVar();
}

cookie = tkinter.PhotoImage(file = 'cookie_ss.gif');
frame = tkinter.Frame(tk, relief=RIDGE, borderwidth=2);
frame.pack(fill=BOTH,expand=1);
label = tkinter.Label(frame, textvariable=ctext);
label.pack(fill=X, expand=1);
button = tkinter.Button(frame,text='''click me''',image=cookie,command=add1cookie);
button.pack(side=BOTTOM);
buyb = tkinter.Button(frame,text='''BUY STUFF''',command=buymenu);
buyb.pack(side=BOTTOM);
tk.mainloop();

        }
    }

}
