self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
Ab(d,e,f){if(e==null)if(d==null)return null
else return d.W(0,1-f)
else if(d==null)return e.W(0,f)
else return new C.w(A.hz(d.a,e.a,f),A.hz(d.b,e.b,f))},
J(d,e,f){var x
if(d!=e){x=d==null?null:isNaN(d)
if(x===!0){x=e==null?null:isNaN(e)
x=x===!0}else x=!1}else x=!0
if(x)return d==null?null:d
if(d==null)d=0
if(e==null)e=0
return d*(1-f)+e*f},
hz(d,e,f){return d*(1-f)+e*f},
a3b(d,e,f){return d*(1-f)+e*f},
aaO(d,e){return C.aM(C.k_(B.d.bt((d.gp(d)>>>24&255)*e),0,255),d.gp(d)>>>16&255,d.gp(d)>>>8&255,d.gp(d)&255)},
aew(d,e,f,g){return new C.x(((B.d.bW(g*255,1)&255)<<24|(d&255)<<16|(e&255)<<8|f&255)>>>0)},
u(d,e,f){if(e==null)if(d==null)return null
else return A.aaO(d,1-f)
else if(d==null)return A.aaO(e,f)
else return C.aM(C.k_(B.d.X(A.a3b(d.gp(d)>>>24&255,e.gp(e)>>>24&255,f)),0,255),C.k_(B.d.X(A.a3b(d.gp(d)>>>16&255,e.gp(e)>>>16&255,f)),0,255),C.k_(B.d.X(A.a3b(d.gp(d)>>>8&255,e.gp(e)>>>8&255,f)),0,255),C.k_(B.d.X(A.a3b(d.gp(d)&255,e.gp(e)&255,f)),0,255))},
jC:function jC(d,e,f){this.a=d
this.b=e
this.c=f},
cP:function cP(d,e){this.a=d
this.b=e},
fE(d,e,f){var x=d==null
if(x&&e==null)return null
if(x)d=D.ad
return d.E(0,(e==null?D.ad:e).qF(d).W(0,f))},
p9:function p9(){},
ct:function ct(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uQ:function uQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eY(d,e){var x=d.c,w=x===D.bz&&d.b===0,v=e.c===D.bz&&e.b===0
if(w&&v)return D.t
if(w)return e
if(v)return d
return new A.c0(d.a,d.b+e.b,x,Math.max(d.d,e.d))},
hF(d,e){var x,w=d.c
if(!(w===D.bz&&d.b===0))x=e.c===D.bz&&e.b===0
else x=!0
if(x)return!0
return w===e.c&&d.a.j(0,e.a)},
am(d,e,f){var x,w,v,u,t,s
if(f===0)return d
if(f===1)return e
x=A.J(d.b,e.b,f)
x.toString
if(x<0)return D.t
w=d.c
v=e.c
if(w===v&&d.d===e.d){v=A.u(d.a,e.a,f)
v.toString
return new A.c0(v,x,w,d.d)}switch(w.a){case 1:u=d.a
break
case 0:w=d.a.a
u=C.aM(0,w>>>16&255,w>>>8&255,w&255)
break
default:u=null}switch(v.a){case 1:t=e.a
break
case 0:w=e.a.a
t=C.aM(0,w>>>16&255,w>>>8&255,w&255)
break
default:t=null}w=d.d
v=e.d
if(w!==v){s=A.u(u,t,f)
s.toString
v=A.J(w,v,f)
v.toString
return new A.c0(s,x,D.ae,v)}v=A.u(u,t,f)
v.toString
return new A.c0(v,x,D.ae,w)},
a9M(d,e,f){var x,w,v,u,t,s,r=d instanceof A.eR?d.a:C.a([d],y.k),q=e instanceof A.eR?e.a:C.a([e],y.k),p=C.a([],y.C),o=Math.max(r.length,q.length)
for(x=1-f,w=0;w<o;++w){v=w<r.length?r[w]:null
u=w<q.length?q[w]:null
t=v!=null
if(t&&u!=null){s=v.bR(u,f)
if(s==null)s=u.bQ(v,f)
if(s!=null){p.push(s)
continue}}if(u!=null)p.push(u.aE(0,f))
if(t)p.push(v.aE(0,x))}return new A.eR(p)},
aby(d,e,f,g,h,i){var x,w,v,u,t=$.ai(),s=t.aX()
s.sfS(0)
x=t.cD()
switch(i.c.a){case 1:s.sa4(0,i.a)
x.ew(0)
t=e.a
w=e.b
x.e1(0,t,w)
v=e.c
x.ce(0,v,w)
u=i.b
if(u===0)s.sc4(0,B.I)
else{s.sc4(0,B.ay)
w+=u
x.ce(0,v-h.b,w)
x.ce(0,t+g.b,w)}d.cS(x,s)
break
case 0:break}switch(h.c.a){case 1:s.sa4(0,h.a)
x.ew(0)
t=e.c
w=e.b
x.e1(0,t,w)
v=e.d
x.ce(0,t,v)
u=h.b
if(u===0)s.sc4(0,B.I)
else{s.sc4(0,B.ay)
t-=u
x.ce(0,t,v-f.b)
x.ce(0,t,w+i.b)}d.cS(x,s)
break
case 0:break}switch(f.c.a){case 1:s.sa4(0,f.a)
x.ew(0)
t=e.c
w=e.d
x.e1(0,t,w)
v=e.a
x.ce(0,v,w)
u=f.b
if(u===0)s.sc4(0,B.I)
else{s.sc4(0,B.ay)
w-=u
x.ce(0,v+g.b,w)
x.ce(0,t-h.b,w)}d.cS(x,s)
break
case 0:break}switch(g.c.a){case 1:s.sa4(0,g.a)
x.ew(0)
t=e.a
w=e.d
x.e1(0,t,w)
v=e.b
x.ce(0,t,v)
u=g.b
if(u===0)s.sc4(0,B.I)
else{s.sc4(0,B.ay)
t+=u
x.ce(0,t,v+i.b)
x.ce(0,t,w-f.b)}d.cS(x,s)
break
case 0:break}},
pa:function pa(d,e){this.a=d
this.b=e},
c0:function c0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bk:function bk(){},
eR:function eR(d){this.a=d},
ZT:function ZT(){},
ZU:function ZU(d){this.a=d},
ZV:function ZV(){},
Dn:function Dn(){},
a7x(d,e,f){var x,w,v=y.A
if(v.b(d)&&v.b(e))return A.a4K(d,e,f)
v=y.E
if(v.b(d)&&v.b(e))return A.a4J(d,e,f)
if(e instanceof A.d9&&d instanceof A.dq){f=1-f
x=e
e=d
d=x}if(d instanceof A.d9&&e instanceof A.dq){v=e.b
if(v.j(0,D.t)&&e.c.j(0,D.t))return new A.d9(A.am(d.a,e.a,f),A.am(d.b,D.t,f),A.am(d.c,e.d,f),A.am(d.d,D.t,f))
w=d.d
if(w.j(0,D.t)&&d.b.j(0,D.t))return new A.dq(A.am(d.a,e.a,f),A.am(D.t,v,f),A.am(D.t,e.c,f),A.am(d.c,e.d,f))
if(f<0.5){v=f*2
return new A.d9(A.am(d.a,e.a,f),A.am(d.b,D.t,v),A.am(d.c,e.d,f),A.am(w,D.t,v))}w=(f-0.5)*2
return new A.dq(A.am(d.a,e.a,f),A.am(D.t,v,w),A.am(D.t,e.c,w),A.am(d.c,e.d,f))}throw C.e(C.a5_(C.a([C.yC("BoxBorder.lerp can only interpolate Border and BorderDirectional classes."),C.bi("BoxBorder.lerp() was called with two objects of type "+J.L(d).i(0)+" and "+J.L(e).i(0)+":\n  "+C.h(d)+"\n  "+C.h(e)+"\nHowever, only Border and BorderDirectional classes are supported by this method."),C.Ow("For a more general interpolation method, consider using ShapeBorder.lerp instead.")],y.p)))},
a7v(d,e,f,g){var x,w,v=$.ai().aX()
v.sa4(0,f.a)
if(f.b===0){v.sc4(0,B.I)
v.sfS(0)
d.cE(g.dd(e),v)}else{x=g.dd(e)
w=x.cW(-f.gdI())
d.oP(x.cW(f.gxJ()),w,v)}},
a7u(d,e,f){var x=e.gf5()
d.h3(e.gau(),(x+f.b*f.d)/2,f.hj())},
a7w(d,e,f){d.bL(e.cW(f.b*f.d/2),f.hj())},
a4K(d,e,f){var x=d==null
if(x&&e==null)return null
if(x)return e.aE(0,f)
if(e==null)return d.aE(0,1-f)
return new A.d9(A.am(d.a,e.a,f),A.am(d.b,e.b,f),A.am(d.c,e.c,f),A.am(d.d,e.d,f))},
a4J(d,e,f){var x,w,v=d==null
if(v&&e==null)return null
if(v)return e.aE(0,f)
if(e==null)return d.aE(0,1-f)
v=A.am(d.a,e.a,f)
x=A.am(d.c,e.c,f)
w=A.am(d.d,e.d,f)
return new A.dq(v,A.am(d.b,e.b,f),x,w)},
x4:function x4(d,e){this.a=d
this.b=e},
x2:function x2(){},
d9:function d9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dq:function dq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7y(d,e,f){var x,w,v,u,t,s,r
if(f===0)return d
if(f===1)return e
x=A.u(d.a,e.a,f)
w=f<0.5
v=w?d.b:e.b
u=A.a7x(d.c,e.c,f)
t=A.fE(d.d,e.d,f)
s=A.a7z(d.e,e.e,f)
r=A.afM(d.f,e.f,f)
return new A.cF(x,v,u,t,s,r,w?d.w:e.w)},
cF:function cF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=j},
Ze:function Ze(d,e){var _=this
_.b=d
_.e=_.d=_.c=null
_.a=e},
aef(d,e,f){var x,w,v,u,t=A.u(d.a,e.a,f)
t.toString
x=A.Ab(d.b,e.b,f)
x.toString
w=A.J(d.c,e.c,f)
w.toString
v=A.J(d.d,e.d,f)
v.toString
u=d.e
return new A.hG(v,u===B.kh?e.e:u,t,x,w)},
a7z(d,e,f){var x,w,v,u,t,s,r,q=d==null
if(q&&e==null)return null
if(q)d=C.a([],y.V)
if(e==null)e=C.a([],y.V)
x=Math.min(d.length,e.length)
q=C.a([],y.V)
for(w=0;w<x;++w){v=A.aef(d[w],e[w],f)
v.toString
q.push(v)}for(v=1-f,w=x;w<d.length;++w){u=d[w]
t=u.a
s=u.b
r=u.c
q.push(new A.hG(u.d*v,u.e,t,new C.w(s.a*v,s.b*v),r*v))}for(w=x;w<e.length;++w){v=e[w]
u=v.a
t=v.b
s=v.c
q.push(new A.hG(v.d*f,v.e,u,new C.w(t.a*f,t.b*f),s*f))}return q},
hG:function hG(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
f0:function f0(){},
ph:function ph(){},
E6:function E6(){},
a90(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i={}
i.a=e
if(d==null)d=B.f8
x=J.aJ(d)
w=x.gn(d)-1
v=C.aQ(0,j,!1,y.Z)
u=0<=w
while(!0){if(!!1)break
x.k(d,0)
t=e[0]
t.gd8(t)
break}while(!0){if(!!1)break
x.k(d,w)
s=e[-1]
s.gd8(s)
break}r=C.bf("oldKeyedChildren")
if(u){r.sbB(C.B(y.K,y.O))
for(q=r.a,p=0;p<=w;){o=x.k(d,p)
n=o.d
if(n!=null){m=r.b
if(m===r)C.Y(C.fc(q))
J.k6(m,n,o)}++p}u=!0}else p=0
for(q=r.a,l=0;!1;){t=i.a[l]
if(u){k=t.gd8(t)
n=r.b
if(n===r)C.Y(C.fc(q))
o=J.ba(n,k)
if(o!=null){t.gd8(t)
o=j}}else o=j
v[l]=A.a9_(o,t);++l}x.gn(d)
while(!0){if(!!1)break
v[l]=A.a9_(x.k(d,p),i.a[l]);++l;++p}return new C.bg(v,C.ah(v).h("bg<1,bn>"))},
a9_(d,e){var x,w=d==null?C.Vr(e.gd8(e),null):d,v=e.gFb(),u=C.nv()
v.gH7()
u.id=v.gH7()
u.d=!0
v.gSp(v)
x=v.gSp(v)
u.aW(B.tH,!0)
u.aW(B.DN,x)
v.gWg()
x=v.gWg()
u.aW(B.tH,!0)
u.aW(B.DR,x)
v.gGE(v)
u.aW(B.DS,v.gGE(v))
v.gSk(v)
u.aW(B.tO,v.gSk(v))
v.gVZ()
u.aW(B.DU,v.gVZ())
v.gXz()
u.aW(B.DL,v.gXz())
v.gH4()
u.aW(B.DY,v.gH4())
v.gVQ()
u.aW(B.DM,v.gVQ())
v.gWX(v)
u.aW(B.DJ,v.gWX(v))
v.gUj()
u.aW(B.tL,v.gUj())
v.gUk(v)
u.aW(B.tM,v.gUk(v))
v.gjU(v)
x=v.gjU(v)
u.aW(B.tN,!0)
u.aW(B.tI,x)
v.gVp()
u.aW(B.DO,v.gVp())
v.gmx()
u.aW(B.DI,v.gmx())
v.gWk(v)
u.aW(B.DW,v.gWk(v))
v.gVd(v)
u.aW(B.jy,v.gVd(v))
v.gVb()
u.aW(B.DV,v.gVb())
v.gGA()
u.aW(B.tK,v.gGA())
v.gWl()
u.aW(B.DT,v.gWl())
v.gW0()
u.aW(B.DQ,v.gW0())
v.gvJ()
u.svJ(v.gvJ())
v.guJ()
u.suJ(v.guJ())
v.gXH()
x=v.gXH()
u.aW(B.DX,!0)
u.aW(B.DK,x)
v.gfs(v)
u.aW(B.tJ,v.gfs(v))
v.gVR(v)
u.p4=new C.cc(v.gVR(v),B.T)
u.d=!0
v.gp(v)
u.R8=new C.cc(v.gp(v),B.T)
u.d=!0
v.gVq()
u.RG=new C.cc(v.gVq(),B.T)
u.d=!0
v.gTt()
u.rx=new C.cc(v.gTt(),B.T)
u.d=!0
v.gVh(v)
u.ry=new C.cc(v.gVh(v),B.T)
u.d=!0
v.gbH()
u.y1=v.gbH()
u.d=!0
v.gi4()
u.si4(v.gi4())
v.gj5()
u.sj5(v.gj5())
v.gpE()
u.spE(v.gpE())
v.gpF()
u.spF(v.gpF())
v.gpG()
u.spG(v.gpG())
v.gpD()
u.spD(v.gpD())
v.gw_()
u.sw_(v.gw_())
v.gvV()
u.svV(v.gvV())
v.gvT(v)
u.svT(0,v.gvT(v))
v.gvU(v)
u.svU(0,v.gvU(v))
v.gw5(v)
u.sw5(0,v.gw5(v))
v.gw3()
u.sw3(v.gw3())
v.gw1()
u.sw1(v.gw1())
v.gw4()
u.sw4(v.gw4())
v.gw2()
u.sw2(v.gw2())
v.gw8()
u.sw8(v.gw8())
v.gw9()
u.sw9(v.gw9())
v.gvW()
u.svW(v.gvW())
v.gvX()
u.svX(v.gvX())
v.gpC()
u.spC(v.gpC())
w.ia(0,B.f8,u)
w.sao(0,e.gao(e))
w.sb4(0,e.gb4(e))
w.dx=e.gYL()
return w},
pz:function pz(){},
B5:function B5(d,e,f,g,h,i,j){var _=this
_.B=d
_.S=e
_.ag=f
_.bk=g
_.d5=h
_.h8=_.eW=_.fo=_.ct=null
_.u$=i
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
a91(d,e,f,g){var x,w,v,u,t,s=e.w
if(s!=null&&e.f!=null){x=e.f
x.toString
s.toString
w=D.c2.wE(f.a-x-s)}else{s=e.x
w=s!=null?D.c2.wE(s):D.c2}s=e.e
if(s!=null&&e.r!=null){x=e.r
x.toString
s.toString
w=w.FF(f.b-x-s)}d.dC(w,!0)
v=e.w
if(!(v!=null)){s=e.f
x=d.k3
if(s!=null)v=f.a-s-x.a
else{x.toString
v=g.iw(y.H.a(f.a_(0,x))).a}}u=(v<0||v+d.k3.a>f.a)&&!0
t=e.e
if(!(t!=null)){s=e.r
x=d.k3
if(s!=null)t=f.b-s-x.b
else{x.toString
t=g.iw(y.H.a(f.a_(0,x))).b}}if(t<0||t+d.k3.b>f.b)u=!0
e.a=new C.w(v,t)
return u},
dm:function dm(d,e,f){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=null
_.dW$=d
_.a6$=e
_.a=f},
tB:function tB(d,e){this.a=d
this.b=e},
rW:function rW(d,e,f,g,h,i,j,k,l){var _=this
_.L=!1
_.u=null
_.N=d
_.an=e
_.al=f
_.aM=g
_.c_=h
_.b1$=i
_.ae$=j
_.ba$=k
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=l
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
H4:function H4(){},
H5:function H5(){},
LP(d,e,f,g,h){return new A.py(g,e,h,d,f)},
jD(d,e,f){return new A.Cf(d,f,e,null)},
fI(d,e,f,g){return new A.xh(F.by,f,g,e,null,F.jT,null,d,null)},
py:function py(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Cf:function Cf(d,e,f,g){var _=this
_.e=d
_.r=e
_.c=f
_.a=g},
n6:function n6(d,e,f,g,h,i,j,k){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.b=j
_.a=k},
xh:function xh(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.c=k
_.a=l},
hn:function hn(){},
di:function di(){},
n3:function n3(d,e,f){var _=this
_.d=_.c=_.b=_.a=_.ay=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1
_.$ti=f},
So:function So(d){this.a=d},
a9x(d){var x=d.a0(y.h),w=x==null?null:x.f
return w!==!1},
afM(d,e,f){return null}},C,B,J,D,E,G,F
A=a.updateHolder(c[21],A)
C=c[0]
B=c[2]
J=c[1]
D=c[24]
E=c[23]
G=c[22]
F=c[27]
A.jC.prototype={
aE(d,e){return new A.jC(this.a,this.b.W(0,e),this.c*e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.jC&&e.a.j(0,x.a)&&e.b.j(0,x.b)&&e.c===x.c},
gq(d){return C.N(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(d){return"TextShadow("+this.a.i(0)+", "+this.b.i(0)+", "+C.h(this.c)+")"}}
A.cP.prototype={
gfa(){return 0},
gf9(d){return this.a},
gfb(){return this.b},
a_(d,e){return new A.cP(this.a-e.a,this.b-e.b)},
U(d,e){return new A.cP(this.a+e.a,this.b+e.b)},
W(d,e){return new A.cP(this.a*e,this.b*e)},
R(d){var x=this
switch(d.a){case 0:return new C.dp(-x.a,x.b)
case 1:return new C.dp(x.a,x.b)}},
i(d){return C.a4F(this.a,this.b)}}
A.p9.prototype={
qF(d){var x=this
return new A.uQ(x.gcN().a_(0,d.gcN()),x.gec().a_(0,d.gec()),x.ge8().a_(0,d.ge8()),x.geF().a_(0,d.geF()),x.gcO().a_(0,d.gcO()),x.geb().a_(0,d.geb()),x.geG().a_(0,d.geG()),x.ge7().a_(0,d.ge7()))},
E(d,e){var x=this
return new A.uQ(x.gcN().U(0,e.gcN()),x.gec().U(0,e.gec()),x.ge8().U(0,e.ge8()),x.geF().U(0,e.geF()),x.gcO().U(0,e.gcO()),x.geb().U(0,e.geb()),x.geG().U(0,e.geG()),x.ge7().U(0,e.ge7()))},
i(d){var x,w,v,u,t=this
if(t.gcN().j(0,t.gec())&&t.gec().j(0,t.ge8())&&t.ge8().j(0,t.geF()))if(!t.gcN().j(0,B.J))x=t.gcN().a===t.gcN().b?"BorderRadius.circular("+B.d.K(t.gcN().a,1)+")":"BorderRadius.all("+t.gcN().i(0)+")"
else x=null
else{w=""+"BorderRadius.only("
if(!t.gcN().j(0,B.J)){w+="topLeft: "+t.gcN().i(0)
v=!0}else v=!1
if(!t.gec().j(0,B.J)){if(v)w+=", "
w+="topRight: "+t.gec().i(0)
v=!0}if(!t.ge8().j(0,B.J)){if(v)w+=", "
w+="bottomLeft: "+t.ge8().i(0)
v=!0}if(!t.geF().j(0,B.J)){if(v)w+=", "
w+="bottomRight: "+t.geF().i(0)}w+=")"
x=w.charCodeAt(0)==0?w:w}if(t.gcO().j(0,t.geb())&&t.geb().j(0,t.ge7())&&t.ge7().j(0,t.geG()))if(!t.gcO().j(0,B.J))u=t.gcO().a===t.gcO().b?"BorderRadiusDirectional.circular("+B.d.K(t.gcO().a,1)+")":"BorderRadiusDirectional.all("+t.gcO().i(0)+")"
else u=null
else{w=""+"BorderRadiusDirectional.only("
if(!t.gcO().j(0,B.J)){w+="topStart: "+t.gcO().i(0)
v=!0}else v=!1
if(!t.geb().j(0,B.J)){if(v)w+=", "
w+="topEnd: "+t.geb().i(0)
v=!0}if(!t.geG().j(0,B.J)){if(v)w+=", "
w+="bottomStart: "+t.geG().i(0)
v=!0}if(!t.ge7().j(0,B.J)){if(v)w+=", "
w+="bottomEnd: "+t.ge7().i(0)}w+=")"
u=w.charCodeAt(0)==0?w:w}w=x!=null
if(w&&u!=null)return C.h(x)+" + "+u
if(w)return x
if(u!=null)return u
return"BorderRadius.zero"},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.L(e)!==C.y(x))return!1
return e instanceof A.p9&&e.gcN().j(0,x.gcN())&&e.gec().j(0,x.gec())&&e.ge8().j(0,x.ge8())&&e.geF().j(0,x.geF())&&e.gcO().j(0,x.gcO())&&e.geb().j(0,x.geb())&&e.geG().j(0,x.geG())&&e.ge7().j(0,x.ge7())},
gq(d){var x=this
return C.N(x.gcN(),x.gec(),x.ge8(),x.geF(),x.gcO(),x.geb(),x.geG(),x.ge7(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.ct.prototype={
gcN(){return this.a},
gec(){return this.b},
ge8(){return this.c},
geF(){return this.d},
gcO(){return B.J},
geb(){return B.J},
geG(){return B.J},
ge7(){return B.J},
dd(d){var x=this,w=x.a.os(0,B.J),v=x.b.os(0,B.J)
return C.T6(d,x.c.os(0,B.J),x.d.os(0,B.J),w,v)},
qF(d){if(d instanceof A.ct)return this.a_(0,d)
return this.Ho(d)},
E(d,e){if(e instanceof A.ct)return this.U(0,e)
return this.Hn(0,e)},
a_(d,e){var x=this
return new A.ct(x.a.a_(0,e.a),x.b.a_(0,e.b),x.c.a_(0,e.c),x.d.a_(0,e.d))},
U(d,e){var x=this
return new A.ct(x.a.U(0,e.a),x.b.U(0,e.b),x.c.U(0,e.c),x.d.U(0,e.d))},
W(d,e){var x=this
return new A.ct(x.a.W(0,e),x.b.W(0,e),x.c.W(0,e),x.d.W(0,e))},
R(d){return this}}
A.uQ.prototype={
W(d,e){var x=this
return new A.uQ(x.a.W(0,e),x.b.W(0,e),x.c.W(0,e),x.d.W(0,e),x.e.W(0,e),x.f.W(0,e),x.r.W(0,e),x.w.W(0,e))},
R(d){var x=this
switch(d.a){case 0:return new A.ct(x.a.U(0,x.f),x.b.U(0,x.e),x.c.U(0,x.w),x.d.U(0,x.r))
case 1:return new A.ct(x.a.U(0,x.e),x.b.U(0,x.f),x.c.U(0,x.r),x.d.U(0,x.w))}},
gcN(){return this.a},
gec(){return this.b},
ge8(){return this.c},
geF(){return this.d},
gcO(){return this.e},
geb(){return this.f},
geG(){return this.r},
ge7(){return this.w}}
A.pa.prototype={
D(){return"BorderStyle."+this.b}}
A.c0.prototype={
aE(d,e){var x=Math.max(0,this.b*e),w=e<=0?D.bz:this.c
return new A.c0(this.a,x,w,-1)},
hj(){switch(this.c.a){case 1:var x=$.ai().aX()
x.sa4(0,this.a)
x.sfS(this.b)
x.sc4(0,B.I)
return x
case 0:x=$.ai().aX()
x.sa4(0,B.Y)
x.sfS(0)
x.sc4(0,B.I)
return x}},
gdI(){return this.b*(1-(1+this.d)/2)},
gxJ(){return this.b*(1+this.d)/2},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.L(e)!==C.y(x))return!1
return e instanceof A.c0&&e.a.j(0,x.a)&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gq(d){var x=this
return C.N(x.a,x.b,x.c,x.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bD(){return"BorderSide"}}
A.bk.prototype={
ee(d,e,f){return null},
E(d,e){return this.ee(d,e,!1)},
U(d,e){var x=this.E(0,e)
if(x==null)x=e.ee(0,this,!0)
return x==null?new A.eR(C.a([e,this],y.C)):x},
bQ(d,e){if(d==null)return this.aE(0,e)
return null},
bR(d,e){if(d==null)return this.aE(0,1-e)
return null},
i(d){return"ShapeBorder()"}}
A.eR.prototype={
gjS(){return B.b.Um(this.a,D.bF,new A.ZT())},
ee(d,e,f){var x,w,v,u=e instanceof A.eR
if(!u){x=this.a
w=f?B.b.gO(x):B.b.gH(x)
v=w.ee(0,e,f)
if(v==null)v=e.ee(0,w,!f)
if(v!=null){u=C.aB(x,!0,y.n)
u[f?u.length-1:0]=v
return new A.eR(u)}}x=C.a([],y.C)
if(f)B.b.J(x,this.a)
if(u)B.b.J(x,e.a)
else x.push(e)
if(!f)B.b.J(x,this.a)
return new A.eR(x)},
E(d,e){return this.ee(d,e,!1)},
aE(d,e){var x=this.a,w=C.ah(x).h("aR<1,bk>")
return new A.eR(C.aB(new C.aR(x,new A.ZU(e),w),!0,w.h("bl.E")))},
bQ(d,e){return A.a9M(d,this,e)},
bR(d,e){return A.a9M(this,d,e)},
ey(d,e){return B.b.gH(this.a).ey(d,e)},
fC(d,e,f){var x,w,v,u,t
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,C.P)(x),++v){u=x[v]
u.fC(d,e,f)
t=u.gjS().R(f)
e=new C.z(e.a+t.a,e.b+t.b,e.c-t.c,e.d-t.d)}},
j(d,e){if(e==null)return!1
if(this===e)return!0
if(J.L(e)!==C.y(this))return!1
return e instanceof A.eR&&C.d5(e.a,this.a)},
gq(d){return C.dh(this.a)},
i(d){var x=this.a,w=C.ah(x).h("cw<1>")
return new C.aR(new C.cw(x,w),new A.ZV(),w.h("aR<bl.E,t>")).bb(0," + ")}}
A.Dn.prototype={}
A.x4.prototype={
D(){return"BoxShape."+this.b}}
A.x2.prototype={
ee(d,e,f){return null},
E(d,e){return this.ee(d,e,!1)},
ey(d,e){var x=$.ai().cD()
x.ui(d)
return x}}
A.d9.prototype={
gjS(){var x,w=this
if(w.gCp()){x=w.a.gdI()
return new C.bq(x,x,x,x)}return new C.bq(w.d.gdI(),w.a.gdI(),w.b.gdI(),w.c.gdI())},
gmk(){var x,w,v=this,u=v.a,t=u.a,s=v.b
if(s.a.j(0,t)&&v.c.a.j(0,t)&&v.d.a.j(0,t))if(v.gCp()){x=u.c
if(s.c===x&&v.c.c===x&&v.d.c===x){w=u.d
u=s.d===w&&v.c.d===w&&v.d.d===w}else u=!1}else u=!1
else u=!1
return u},
gCp(){var x=this,w=x.a.b
return x.b.b===w&&x.c.b===w&&x.d.b===w},
ee(d,e,f){var x=this
if(e instanceof A.d9&&A.hF(x.a,e.a)&&A.hF(x.b,e.b)&&A.hF(x.c,e.c)&&A.hF(x.d,e.d))return new A.d9(A.eY(x.a,e.a),A.eY(x.b,e.b),A.eY(x.c,e.c),A.eY(x.d,e.d))
return null},
E(d,e){return this.ee(d,e,!1)},
aE(d,e){var x=this
return new A.d9(x.a.aE(0,e),x.b.aE(0,e),x.c.aE(0,e),x.d.aE(0,e))},
bQ(d,e){if(d instanceof A.d9)return A.a4K(d,this,e)
return this.yd(d,e)},
bR(d,e){if(d instanceof A.d9)return A.a4K(this,d,e)
return this.ye(d,e)},
pN(d,e,f,g,h){var x,w=this
if(w.gmk()){x=w.a
switch(x.c.a){case 0:return
case 1:switch(g.a){case 1:A.a7u(d,e,x)
break
case 0:if(f!=null&&!f.j(0,D.ad)){A.a7v(d,e,x,f)
return}A.a7w(d,e,x)
break}return}}A.aby(d,e,w.c,w.d,w.b,w.a)},
fC(d,e,f){return this.pN(d,e,null,D.W,f)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.L(e)!==C.y(x))return!1
return e instanceof A.d9&&e.a.j(0,x.a)&&e.b.j(0,x.b)&&e.c.j(0,x.c)&&e.d.j(0,x.d)},
gq(d){var x=this
return C.N(x.a,x.b,x.c,x.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(d){var x,w,v=this
if(v.gmk())return"Border.all("+v.a.i(0)+")"
x=C.a([],y.s)
w=v.a
if(!w.j(0,D.t))x.push("top: "+w.i(0))
w=v.b
if(!w.j(0,D.t))x.push("right: "+w.i(0))
w=v.c
if(!w.j(0,D.t))x.push("bottom: "+w.i(0))
w=v.d
if(!w.j(0,D.t))x.push("left: "+w.i(0))
return"Border("+B.b.bb(x,", ")+")"}}
A.dq.prototype={
gjS(){var x,w=this
if(w.gmk()){x=w.a.gdI()
return new E.X(x,x,x,x)}return new E.X(w.b.gdI(),w.a.gdI(),w.c.gdI(),w.d.gdI())},
gmk(){var x,w,v,u=this,t=u.a,s=t.a,r=u.b
if(!r.a.j(0,s)||!u.c.a.j(0,s)||!u.d.a.j(0,s))return!1
x=t.b
if(r.b!==x||u.c.b!==x||u.d.b!==x)return!1
w=t.c
if(r.c!==w||u.c.c!==w||u.d.c!==w)return!1
v=t.d
if(!(r.d===v&&u.d.d===v&&u.c.d===v))return!1
return!0},
ee(d,e,f){var x,w,v,u=this,t=null
if(e instanceof A.dq){x=u.a
w=e.a
if(A.hF(x,w)&&A.hF(u.b,e.b)&&A.hF(u.c,e.c)&&A.hF(u.d,e.d))return new A.dq(A.eY(x,w),A.eY(u.b,e.b),A.eY(u.c,e.c),A.eY(u.d,e.d))
return t}if(e instanceof A.d9){x=e.a
w=u.a
if(!A.hF(x,w)||!A.hF(e.c,u.d))return t
v=u.b
if(!v.j(0,D.t)||!u.c.j(0,D.t)){if(!e.d.j(0,D.t)||!e.b.j(0,D.t))return t
return new A.dq(A.eY(x,w),v,u.c,A.eY(e.c,u.d))}return new A.d9(A.eY(x,w),e.b,A.eY(e.c,u.d),e.d)}return t},
E(d,e){return this.ee(d,e,!1)},
aE(d,e){var x=this
return new A.dq(x.a.aE(0,e),x.b.aE(0,e),x.c.aE(0,e),x.d.aE(0,e))},
bQ(d,e){if(d instanceof A.dq)return A.a4J(d,this,e)
return this.yd(d,e)},
bR(d,e){if(d instanceof A.dq)return A.a4J(this,d,e)
return this.ye(d,e)},
pN(d,e,f,g,h){var x,w,v,u=this
if(u.gmk()){x=u.a
switch(x.c.a){case 0:return
case 1:switch(g.a){case 1:A.a7u(d,e,x)
break
case 0:if(f!=null&&!f.j(0,D.ad)){A.a7v(d,e,x,f)
return}A.a7w(d,e,x)
break}return}}switch(h.a){case 0:w=u.c
v=u.b
break
case 1:w=u.b
v=u.c
break
default:w=null
v=null}A.aby(d,e,u.d,w,v,u.a)},
fC(d,e,f){return this.pN(d,e,null,D.W,f)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.L(e)!==C.y(x))return!1
return e instanceof A.dq&&e.a.j(0,x.a)&&e.b.j(0,x.b)&&e.c.j(0,x.c)&&e.d.j(0,x.d)},
gq(d){var x=this
return C.N(x.a,x.b,x.c,x.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(d){var x=this,w=C.a([],y.s),v=x.a
if(!v.j(0,D.t))w.push("top: "+v.i(0))
v=x.b
if(!v.j(0,D.t))w.push("start: "+v.i(0))
v=x.c
if(!v.j(0,D.t))w.push("end: "+v.i(0))
v=x.d
if(!v.j(0,D.t))w.push("bottom: "+v.i(0))
return"BorderDirectional("+B.b.bb(w,", ")+")"}}
A.cF.prototype={
gcw(d){var x=this.c
return x==null?null:x.gjS()},
aE(d,e){var x=this,w=null,v=A.u(w,x.a,e),u=A.a7x(w,x.c,e),t=A.fE(w,x.d,e),s=A.a7z(w,x.e,e)
return new A.cF(v,x.b,u,t,s,w,x.w)},
gvu(){return this.e!=null},
bQ(d,e){if(d==null)return this.aE(0,e)
if(d instanceof A.cF)return A.a7y(d,this,e)
return this.Hv(d,e)},
bR(d,e){if(d==null)return this.aE(0,1-e)
if(d instanceof A.cF)return A.a7y(this,d,e)
return this.Hw(d,e)},
j(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.L(e)!==C.y(w))return!1
if(e instanceof A.cF)if(J.f(e.a,w.a))if(J.f(e.b,w.b))if(J.f(e.c,w.c))if(J.f(e.d,w.d))if(C.d5(e.e,w.e))x=e.w===w.w
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
return x},
gq(d){var x=this,w=x.e
w=w==null?null:C.dh(w)
return C.N(x.a,x.b,x.c,x.d,w,x.f,null,x.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
Ef(d,e,f){var x
switch(this.w.a){case 0:x=this.d
if(x!=null)return x.R(f).dd(new C.z(0,0,0+d.a,0+d.b)).v(0,e)
return!0
case 1:return e.a_(0,d.fZ(B.h)).gc6()<=Math.min(d.a,d.b)/2}},
D8(d){return new A.Ze(this,d)}}
A.Ze.prototype={
AC(d,e,f,g){var x=this.b
switch(x.w.a){case 1:d.h3(e.gau(),e.gf5()/2,f)
break
case 0:x=x.d
if(x==null||x.j(0,D.ad))d.bL(e,f)
else d.cE(x.R(g).dd(e),f)
break}},
Py(d,e,f){var x,w,v,u,t,s,r=this.b.e
if(r==null)return
for(x=r.length,w=0;w<r.length;r.length===x||(0,C.P)(r),++w){v=r[w]
u=$.ai().aX()
u.sa4(0,v.a)
t=v.e
s=v.c
u.sW8(new C.qT(t,s>0?s*0.57735+0.5:0))
t=e.cz(v.b)
s=v.d
this.AC(d,new C.z(t.a-s,t.b-s,t.c+s,t.d+s),u,f)}},
Pw(d,e,f){var x,w,v=this,u=v.b,t=u.b
if(t==null)return
if(v.e==null)v.e=t.Tg(v.a)
switch(u.w.a){case 1:x=C.rO(e.gau(),e.gf5()/2)
w=$.ai().cD()
w.Cv(x)
break
case 0:u=u.d
if(u!=null){w=$.ai().cD()
w.eM(u.R(f.d).dd(e))}else w=null
break
default:w=null}v.e.pM(d,e,w,f)},
l(){var x=this.e
if(x!=null)x.l()
this.Hq()},
wd(d,e,f){var x,w,v,u=this,t=f.e,s=e.a,r=e.b,q=new C.z(s,r,s+t.a,r+t.b),p=f.d
u.Py(d,q,p)
t=u.b
s=t.a
r=s==null
if(!r||!1){x=u.c
if(x!=null)w=!1
else w=!0
if(w){v=$.ai().aX()
if(!r)v.sa4(0,s)
u.c=v
s=v}else s=x
s.toString
u.AC(d,q,s,p)}u.Pw(d,q,f)
s=t.c
if(s!=null){r=t.d
r=r==null?null:r.R(p)
s.pN(d,q,r,t.w,p)}},
i(d){return"BoxPainter for "+this.b.i(0)}}
A.hG.prototype={
aE(d,e){var x=this
return new A.hG(x.d*e,x.e,x.a,x.b.W(0,e),x.c*e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.L(e)!==C.y(x))return!1
return e instanceof A.hG&&e.a.j(0,x.a)&&e.b.j(0,x.b)&&e.c===x.c&&e.d===x.d&&e.e===x.e},
gq(d){var x=this
return C.N(x.a,x.b,x.c,x.d,x.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(d){var x=this
return"BoxShadow("+x.a.i(0)+", "+x.b.i(0)+", "+C.fy(x.c)+", "+C.fy(x.d)+", "+x.e.i(0)+")"}}
A.f0.prototype={
bD(){return"Decoration"},
gcw(d){return D.bF},
gvu(){return!1},
bQ(d,e){return null},
bR(d,e){return null},
Ef(d,e,f){return!0}}
A.ph.prototype={
l(){}}
A.E6.prototype={}
A.pz.prototype={
V(d,e){var x=this.a
return x==null?null:x.V(0,e)},
G(d,e){var x=this.a
return x==null?null:x.G(0,e)},
gxo(){return null},
xA(d){return this.hq(d)},
pf(d){return null},
i(d){var x=C.bB(this),w=this.a
w=w==null?null:w.i(0)
if(w==null)w=""
return"<optimized out>#"+x+"("+w+")"}}
A.B5.prototype={
spP(d){var x=this.B
if(x==d)return
this.B=d
this.zn(d,x)},
sDT(d){var x=this.S
if(x==d)return
this.S=d
this.zn(d,x)},
zn(d,e){var x=this,w=d==null
if(w)x.af()
else if(e==null||C.y(d)!==C.y(e)||d.hq(e))x.af()
if(x.b!=null){if(e!=null)e.G(0,x.gdD())
if(!w)d.V(0,x.gdD())}if(w){if(x.b!=null)x.aU()}else if(e==null||C.y(d)!==C.y(e)||d.xA(e))x.aU()},
sWF(d){if(this.ag.j(0,d))return
this.ag=d
this.a5()},
ar(d){var x,w=this
w.kW(d)
x=w.B
if(x!=null)x.V(0,w.gdD())
x=w.S
if(x!=null)x.V(0,w.gdD())},
ak(d){var x=this,w=x.B
if(w!=null)w.G(0,x.gdD())
w=x.S
if(w!=null)w.G(0,x.gdD())
x.jo(0)},
cH(d,e){var x=this.S
if(x!=null){x=x.pf(e)
x=x===!0}else x=!1
if(x)return!0
return this.qT(d,e)},
i_(d){var x=this.B
if(x!=null){x=x.pf(d)
x=x!==!1}else x=!1
return x},
bS(){this.qU()
this.aU()},
lE(d){return d.bu(this.ag)},
AH(d,e,f){var x
C.bf("debugPreviousCanvasSaveCount")
d.c3(0)
if(!e.j(0,B.h))d.az(0,e.a,e.b)
x=this.k3
x.toString
f.aw(d,x)
d.c1(0)},
aw(d,e){var x,w,v=this
if(v.B!=null){x=d.gbg(d)
w=v.B
w.toString
v.AH(x,e,w)
v.Bq(d)}v.fU(d,e)
if(v.S!=null){x=d.gbg(d)
w=v.S
w.toString
v.AH(x,e,w)
v.Bq(d)}},
Bq(d){},
eQ(d){var x,w=this
w.hr(d)
w.ct=null
x=w.S
w.fo=x==null?null:x.gxo()
d.a=!1},
lw(d,e,f){var x,w,v,u,t=this
t.eW=A.a90(t.eW,D.lP)
t.h8=A.a90(t.h8,D.lP)
x=t.eW
w=x!=null&&!x.gM(x)
x=t.h8
v=x!=null&&!x.gM(x)
x=C.a([],y.L)
if(w){u=t.eW
u.toString
B.b.J(x,u)}B.b.J(x,f)
if(v){u=t.h8
u.toString
B.b.J(x,u)}t.yb(d,e,x)},
jN(){this.qQ()
this.h8=this.eW=null}}
A.dm.prototype={
gvw(){var x=this
return x.e!=null||x.f!=null||x.r!=null||x.w!=null||x.x!=null||!1},
i(d){var x=this,w=C.a([],y.s),v=x.e
if(v!=null)w.push("top="+C.fy(v))
v=x.f
if(v!=null)w.push("right="+C.fy(v))
v=x.r
if(v!=null)w.push("bottom="+C.fy(v))
v=x.w
if(v!=null)w.push("left="+C.fy(v))
v=x.x
if(v!=null)w.push("width="+C.fy(v))
if(w.length===0)w.push("not positioned")
w.push(x.n8(0))
return B.b.bb(w,"; ")}}
A.tB.prototype={
D(){return"StackFit."+this.b}}
A.rW.prototype={
fN(d){if(!(d.e instanceof A.dm))d.e=new A.dm(null,null,B.h)},
QW(){var x=this
if(x.u!=null)return
x.u=x.N.R(x.an)},
sef(d){var x=this
if(x.N.j(0,d))return
x.N=d
x.u=null
x.a5()},
sbH(d){var x=this
if(x.an==d)return
x.an=d
x.u=null
x.a5()},
dT(d){return this.De(d)},
bY(d){return this.BA(d,C.K9())},
BA(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.QW()
if(j.b1$===0){x=d.a
w=d.b
v=C.T(1/0,x,w)
u=d.c
t=d.d
s=C.T(1/0,u,t)
return isFinite(v)&&isFinite(s)?new C.U(C.T(1/0,x,w),C.T(1/0,u,t)):new C.U(C.T(0,x,w),C.T(0,u,t))}r=d.a
q=d.c
switch(j.al.a){case 0:p=new C.aT(0,d.b,0,d.d)
break
case 1:p=C.x3(new C.U(C.T(1/0,r,d.b),C.T(1/0,q,d.d)))
break
case 2:p=d
break
default:p=null}o=j.ae$
for(x=y.B,n=q,m=r,l=!1;o!=null;){w=o.e
w.toString
x.a(w)
if(!w.gvw()){k=e.$2(o,p)
m=Math.max(m,k.a)
n=Math.max(n,k.b)
l=!0}o=w.a6$}return l?new C.U(m,n):new C.U(C.T(1/0,r,d.b),C.T(1/0,q,d.d))},
bS(){var x,w,v,u,t,s,r,q=this,p=C.O.prototype.gbo.call(q)
q.L=!1
q.k3=q.BA(p,C.Ka())
x=q.ae$
for(w=y.B,v=y.H;x!=null;){u=x.e
u.toString
w.a(u)
if(!u.gvw()){t=q.u
t.toString
s=q.k3
s.toString
r=x.k3
r.toString
u.a=t.iw(v.a(s.a_(0,r)))}else{t=q.k3
t.toString
s=q.u
s.toString
q.L=A.a91(x,u,t,s)||q.L}x=u.a6$}},
cH(d,e){return this.uL(d,e)},
pO(d,e){this.lK(d,e)},
aw(d,e){var x,w=this,v=w.aM,u=v!==B.P&&w.L,t=w.c_
if(u){u=w.cx
u===$&&C.c()
x=w.k3
t.saK(0,d.mC(u,e,new C.z(0,0,0+x.a,0+x.b),w.gwf(),v,t.a))}else{t.saK(0,null)
w.lK(d,e)}},
l(){this.c_.saK(0,null)
this.hs()},
iH(d){var x
switch(this.aM.a){case 0:return null
case 1:case 2:case 3:if(this.L){x=this.k3
x=new C.z(0,0,0+x.a,0+x.b)}else x=null
return x}}}
A.H4.prototype={
ar(d){var x,w,v
this.f7(d)
x=this.ae$
for(w=y.B;x!=null;){x.ar(d)
v=x.e
v.toString
x=w.a(v).a6$}},
ak(d){var x,w,v
this.e6(0)
x=this.ae$
for(w=y.B;x!=null;){x.ak(0)
v=x.e
v.toString
x=w.a(v).a6$}}}
A.H5.prototype={}
A.py.prototype={
aC(d){var x=new A.B5(this.e,this.f,this.r,!1,!1,null,C.ay())
x.aF()
x.saR(null)
return x},
aH(d,e){e.spP(this.e)
e.sDT(this.f)
e.sWF(this.r)
e.d5=e.bk=!1},
lT(d){d.spP(null)
d.sDT(null)}}
A.Cf.prototype={
aC(d){var x=C.e3(d)
x=new A.rW(this.e,x,this.r,B.aZ,C.ay(),0,null,null,C.ay())
x.aF()
x.J(0,null)
return x},
aH(d,e){var x
e.sef(this.e)
x=C.e3(d)
e.sbH(x)
x=this.r
if(e.al!==x){e.al=x
e.a5()}if(B.aZ!==e.aM){e.aM=B.aZ
e.af()
e.aU()}}}
A.n6.prototype={
om(d){var x,w,v,u=this,t=d.e
t.toString
y.B.a(t)
x=u.f
if(t.w!=x){t.w=x
w=!0}else w=!1
x=u.r
if(t.e!=x){t.e=x
w=!0}x=u.w
if(t.f!=x){t.f=x
w=!0}x=u.x
if(t.r!=x){t.r=x
w=!0}x=u.y
if(t.x!=x){t.x=x
w=!0}if(w){v=d.c
if(v instanceof C.O)v.a5()}}}
A.xh.prototype={}
A.hn.prototype={
oF(){return C.cR(!1,y.y)},
lS(d){return C.cR(!1,y.y)},
TE(d){var x=d.a
x.toString
return this.lS(x)},
Di(){},
Dk(){},
Dj(){},
Dh(d){},
TA(d){}}
A.di.prototype={
bw(d){return new A.n3(this,B.V,C.v(this).h("n3<di.T>"))}}
A.n3.prototype={
KP(d){this.aV(new A.So(d))},
kq(d){var x=this.f
x.toString
this.KP(this.$ti.h("di<1>").a(x))}}
var z=a.updateTypes(["c2(c2,bk)","bk(bk)","t(bk)","~(h0,w)","I?(bo?,bo?,I)","x?(x?,x?,I)"])
A.ZT.prototype={
$2(d,e){return d.E(0,e.gjS())},
$S:z+0}
A.ZU.prototype={
$1(d){return d.aE(0,this.a)},
$S:z+1}
A.ZV.prototype={
$1(d){return d.i(0)},
$S:z+2}
A.So.prototype={
$1(d){if(d instanceof C.c9)this.a.om(d.gad())
else d.aV(this)},
$S:7};(function aliases(){var x=A.p9.prototype
x.Ho=x.qF
x.Hn=x.E
x=A.bk.prototype
x.yd=x.bQ
x.ye=x.bR
x=A.f0.prototype
x.Hv=x.bQ
x.Hw=x.bR
x=A.ph.prototype
x.Hq=x.l})();(function installTearOffs(){var x=a.installStaticTearOff,w=a._instance_2u
x(A,"a4k",3,null,["$3"],["J"],4,0)
x(A,"cs",3,null,["$3"],["u"],5,0)
w(A.rW.prototype,"gwf","pO",3)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.D,[A.jC,A.p9,A.Dn,A.bk,A.E6,A.ph,A.hn])
u(A.cP,C.iC)
v(A.p9,[A.ct,A.uQ])
v(C.hp,[A.pa,A.x4,A.tB])
u(A.c0,A.Dn)
v(A.bk,[A.eR,A.x2])
u(A.ZT,C.hI)
v(C.bm,[A.ZU,A.ZV,A.So])
v(A.x2,[A.d9,A.dq])
u(A.f0,A.E6)
u(A.cF,A.f0)
u(A.Ze,A.ph)
u(A.hG,A.jC)
u(A.pz,C.a_)
u(A.B5,C.l6)
u(A.dm,C.iM)
u(A.H4,C.G)
u(A.H5,A.H4)
u(A.rW,A.H5)
u(A.py,C.aX)
u(A.Cf,C.dH)
u(A.di,C.ao)
u(A.n6,A.di)
u(A.xh,G.q6)
u(A.n3,C.l4)
x(A.Dn,C.W)
x(A.E6,C.W)
w(A.H4,C.bx)
x(A.H5,C.cU)})()
C.cC(b.typeUniverse,JSON.parse('{"pa":{"F":[]},"eR":{"bk":[]},"x4":{"F":[]},"x2":{"bk":[]},"d9":{"bk":[]},"dq":{"bk":[]},"cF":{"f0":[]},"hG":{"jC":[]},"pz":{"a_":[]},"B5":{"G":[],"aH":["G"],"O":[],"K":[],"an":[]},"dm":{"dr":[],"er":["G"],"cv":[]},"tB":{"F":[]},"rW":{"cU":["G","dm"],"G":[],"bx":["G","dm"],"O":[],"K":[],"an":[],"bx.1":"dm","cU.1":"dm"},"n6":{"di":["dm"],"ao":[],"k":[],"di.T":"dm"},"py":{"aX":[],"aE":[],"k":[]},"Cf":{"dH":[],"aE":[],"k":[]},"xh":{"dH":[],"aE":[],"k":[]},"di":{"ao":[],"k":[]},"n3":{"aV":[],"ae":[]},"bC":{"a_":[]},"ik":{"ax":[],"ao":[],"k":[]},"jM":{"ax":[],"ao":[],"k":[]}}'))
var y=(function rtii(){var x=C.V
return{V:x("r<hG>"),p:x("r<d_>"),L:x("r<bn>"),C:x("r<bk>"),s:x("r<t>"),k:x("r<bk?>"),K:x("eB"),H:x("w"),O:x("bn"),n:x("bk"),B:x("dm"),h:x("jM"),y:x("C"),A:x("d9?"),E:x("dq?"),Z:x("bn?")}})();(function constants(){var x=a.makeConstList
D.aW=new A.cP(-1,-1)
D.ad=new A.ct(B.J,B.J,B.J,B.J)
D.n=new C.x(4278190080)
D.bz=new A.pa(0,"none")
D.t=new A.c0(D.n,0,D.bz,-1)
D.ae=new A.pa(1,"solid")
D.c2=new C.aT(0,1/0,0,1/0)
D.W=new A.x4(0,"rectangle")
D.bF=new C.bq(0,0,0,0)
D.lP=C.a(x([]),C.V("r<an5>"))
D.Eu=new C.U(1/0,1/0)
D.b7=new A.tB(0,"loose")
D.EB=new A.tB(2,"passthrough")})()}
$__dart_deferred_initializers__["eQ+9A/YGEPNTNSPrvUFX/woHVec="] = $__dart_deferred_initializers__.current

//# sourceMappingURL=main.dart.js_2.part.js.map
