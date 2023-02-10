self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={jd:function jd(d,e){this.b=d
this.a=e},
alQ(d){switch(d.a){case 0:return D.by
case 1:return D.au}},
p5:function p5(d,e){this.a=d
this.b=e},
u5:function u5(d,e){this.a=d
this.b=e},
iK:function iK(){},
LR:function LR(){},
aaR(d,e,f){switch(d.a){case 0:switch(e){case C.p:return!0
case C.L:return!1
case null:return null}break
case 1:switch(f){case D.jT:return!0
case D.JS:return!1
case null:return null}break}},
dt:function dt(d,e,f){var _=this
_.f=_.e=null
_.dW$=d
_.a6$=e
_.a=f},
qQ:function qQ(d,e){this.a=d
this.b=e},
B9:function B9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.L=d
_.u=e
_.N=f
_.an=g
_.al=h
_.aM=i
_.c_=j
_.cs=0
_.c0=k
_.bM=l
_.U4$=m
_.Yu$=n
_.b1$=o
_.ae$=p
_.ba$=q
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
_.ch=r
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
a0l:function a0l(d,e,f){this.a=d
this.b=e
this.c=f},
GW:function GW(){},
GX:function GX(){},
v9:function v9(){},
TA:function TA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bz(d,e,f,g){return new A.Bw(D.au,f,g,e,null,D.jT,null,d,null)},
q6:function q6(){},
Bw:function Bw(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.c=k
_.a=l},
a4b(d,e){var x,w=d.gn(d),v=e.gn(e)
if(w!==v)return!1
if(d===e)return!0
for(w=d.gb2(d),w=w.gT(w);w.t();){x=w.gC(w)
if(!e.a1(0,x)||!J.f(e.k(0,x),d.k(0,x)))return!1}return!0}},J,B,C,D
A=a.updateHolder(c[22],A)
J=c[1]
B=c[0]
C=c[2]
D=c[27]
A.jd.prototype={}
A.p5.prototype={
D(){return"Axis."+this.b}}
A.u5.prototype={
D(){return"VerticalDirection."+this.b}}
A.iK.prototype={
k(d,e){return this.b.k(0,e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.L(e)!==B.y(x))return!1
return x.Hr(0,e)&&B.v(x).h("iK<iK.T>").b(e)&&A.a4b(e.b,x.b)},
gq(d){return B.N(B.y(this),this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){return"ColorSwatch(primary value: "+this.Hs(0)+")"}}
A.LR.prototype={}
A.dt.prototype={
i(d){return this.n8(0)+"; flex="+B.h(this.e)+"; fit="+B.h(this.f)}}
A.qQ.prototype={
D(){return"MainAxisSize."+this.b}}
A.B9.prototype={
fN(d){if(!(d.e instanceof A.dt))d.e=new A.dt(null,null,C.h)},
dT(d){if(this.L===D.au)return this.De(d)
return this.Tu(d)},
nq(d){switch(this.L.a){case 0:return d.b
case 1:return d.a}},
ns(d){switch(this.L.a){case 0:return d.a
case 1:return d.b}},
bY(d){var x
if(this.an===C.lg)return C.G
x=this.zc(d,B.K9())
switch(this.L.a){case 0:return d.bu(new B.U(x.a,x.b))
case 1:return d.bu(new B.U(x.b,x.a))}},
zc(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.L===D.au?a0.b:a0.d,e=f<1/0,d=h.ae$
for(x=y.e,w=a0.b,v=a0.d,u=g,t=0,s=0,r=0;d!=null;){q=d.e
q.toString
x.a(q)
p=q.e
if(p==null)p=0
if(p>0){t+=p
u=d}else{if(h.an===C.lf)switch(h.L.a){case 0:o=B.pe(v,g)
break
case 1:o=B.pe(g,w)
break
default:o=g}else switch(h.L.a){case 0:o=new B.aT(0,1/0,0,v)
break
case 1:o=new B.aT(0,w,0,1/0)
break
default:o=g}n=a1.$2(d,o)
r+=h.ns(n)
s=Math.max(s,B.jZ(h.nq(n)))}d=q.a6$}m=Math.max(0,(e?f:0)-r)
if(t>0){l=e?m/t:0/0
d=h.ae$
for(k=0;d!=null;){q=d.e
q.toString
p=x.a(q).e
if(p==null)p=0
if(p>0){if(e)j=d===u?m-k:l*p
else j=1/0
i=B.bf("minChildExtent")
q=d.e
q.toString
q=x.a(q).f
switch((q==null?C.lt:q).a){case 0:if(i.b!==i)B.Y(B.QT(i.a))
i.b=j
break
case 1:if(i.b!==i)B.Y(B.QT(i.a))
i.b=0
break}if(h.an===C.lf)switch(h.L.a){case 0:q=i.b
if(q===i)B.Y(B.fc(i.a))
o=new B.aT(q,j,v,v)
break
case 1:q=i.b
if(q===i)B.Y(B.fc(i.a))
o=new B.aT(w,w,q,j)
break
default:o=g}else switch(h.L.a){case 0:q=i.b
if(q===i)B.Y(B.fc(i.a))
o=new B.aT(q,j,0,v)
break
case 1:q=i.b
if(q===i)B.Y(B.fc(i.a))
o=new B.aT(0,w,q,j)
break
default:o=g}n=a1.$2(d,o)
r+=h.ns(n)
k+=j
s=Math.max(s,B.jZ(h.nq(n)))}q=d.e
q.toString
d=x.a(q).a6$}}return new A.a0l(e&&h.N===D.o?f:r,s,r)},
bS(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.O.prototype.gbo.call(f),d=f.zc(e,B.Ka()),a0=d.a,a1=d.b
if(f.an===C.lg){x=f.ae$
for(w=y.e,v=0,u=0,t=0;x!=null;){s=f.c_
s.toString
r=x.qh(s,!0)
if(r!=null){v=Math.max(v,r)
u=Math.max(r,u)
t=Math.max(x.k3.b-r,t)
a1=Math.max(u+t,a1)}s=x.e
s.toString
x=w.a(s).a6$}}else v=0
switch(f.L.a){case 0:w=f.k3=e.bu(new B.U(a0,a1))
a0=w.a
a1=w.b
break
case 1:w=f.k3=e.bu(new B.U(a1,a0))
a0=w.b
a1=w.a
break}q=a0-d.c
f.cs=Math.max(0,-q)
p=Math.max(0,q)
o=B.bf("leadingSpace")
n=B.bf("betweenSpace")
w=A.aaR(f.L,f.al,f.aM)
m=w===!1
switch(f.u.a){case 0:o.sbB(0)
n.sbB(0)
break
case 1:o.sbB(p)
n.sbB(0)
break
case 2:o.sbB(p/2)
n.sbB(0)
break
case 3:o.sbB(0)
w=f.b1$
n.sbB(w>1?p/(w-1):0)
break
case 4:w=f.b1$
n.sbB(w>0?p/w:0)
o.sbB(n.aB()/2)
break
case 5:w=f.b1$
n.sbB(w>0?p/(w+1):0)
o.sbB(n.aB())
break}l=m?a0-o.aB():o.aB()
x=f.ae$
for(w=y.e,s=a1/2,k=n.a;x!=null;){j=x.e
j.toString
w.a(j)
i=f.an
switch(i.a){case 0:case 1:if(A.aaR(A.alQ(f.L),f.al,f.aM)===(i===C.M))h=0
else{i=x.k3
i.toString
h=a1-f.nq(i)}break
case 2:i=x.k3
i.toString
h=s-f.nq(i)/2
break
case 3:h=0
break
case 4:if(f.L===D.au){i=f.c_
i.toString
r=x.qh(i,!0)
h=r!=null?v-r:0}else h=0
break
default:h=null}if(m){i=x.k3
i.toString
l-=f.ns(i)}switch(f.L.a){case 0:j.a=new B.w(l,h)
break
case 1:j.a=new B.w(h,l)
break}if(m){i=n.b
if(i===n)B.Y(B.fc(k))
l-=i}else{i=x.k3
i.toString
i=f.ns(i)
g=n.b
if(g===n)B.Y(B.fc(k))
l+=i+g}x=j.a6$}},
cH(d,e){return this.uL(d,e)},
aw(d,e){var x,w,v,u=this
if(!(u.cs>1e-10)){u.lK(d,e)
return}x=u.k3
if(x.gM(x))return
x=u.bM
w=u.cx
w===$&&B.c()
v=u.k3
x.saK(0,d.mC(w,e,new B.z(0,0,0+v.a,0+v.b),u.gTv(),u.c0,x.a))},
l(){this.bM.saK(0,null)
this.Jn()},
iH(d){var x
switch(this.c0.a){case 0:return null
case 1:case 2:case 3:if(this.cs>1e-10){x=this.k3
x=new B.z(0,0,0+x.a,0+x.b)}else x=null
return x}},
bD(){var x=this.IA()
return x}}
A.a0l.prototype={}
A.GW.prototype={
ar(d){var x,w,v
this.f7(d)
x=this.ae$
for(w=y.e;x!=null;){x.ar(d)
v=x.e
v.toString
x=w.a(v).a6$}},
ak(d){var x,w,v
this.e6(0)
x=this.ae$
for(w=y.e;x!=null;){x.ak(0)
v=x.e
v.toString
x=w.a(v).a6$}}}
A.GX.prototype={}
A.v9.prototype={
l(){var x,w,v
for(x=this.U4$,w=x.length,v=0;v<w;++v)x[v].l()
this.hs()}}
A.TA.prototype={
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.TA&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gq(d){var x=this
return B.N(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){var x=this
return"RelativeRect.fromLTRB("+C.d.K(x.a,1)+", "+C.d.K(x.b,1)+", "+C.d.K(x.c,1)+", "+C.d.K(x.d,1)+")"}}
A.q6.prototype={
gPa(){switch(this.e.a){case 0:return!0
case 1:var x=this.w
return x===C.M||x===C.bd}},
x6(d){var x=this.x
x=this.gPa()?B.e3(d):null
return x},
aC(d){var x=this,w=null,v=new A.B9(x.e,x.f,x.r,x.w,x.x6(d),x.y,x.z,C.P,B.ay(),B.aQ(4,B.a5N(w,w,w,w,w,C.ab,C.p,w,1,C.bY),!1,y.h),!0,0,w,w,B.ay())
v.aF()
v.J(0,w)
return v},
aH(d,e){var x=this,w=x.e
if(e.L!==w){e.L=w
e.a5()}w=x.f
if(e.u!==w){e.u=w
e.a5()}w=x.r
if(e.N!==w){e.N=w
e.a5()}w=x.w
if(e.an!==w){e.an=w
e.a5()}w=x.x6(d)
if(e.al!=w){e.al=w
e.a5()}w=x.y
if(e.aM!==w){e.aM=w
e.a5()}if(C.P!==e.c0){e.c0=C.P
e.af()
e.aU()}}}
A.Bw.prototype={}
var z=a.updateTypes([]);(function aliases(){var x=A.v9.prototype
x.Jn=x.l})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.iK,B.x)
v(A.jd,A.iK)
u(B.hp,[A.p5,A.u5,A.qQ])
u(B.D,[A.LR,A.a0l,A.TA])
v(A.dt,B.iM)
v(A.GW,B.G)
v(A.GX,A.GW)
v(A.v9,A.GX)
v(A.B9,A.v9)
v(A.q6,B.dH)
v(A.Bw,A.q6)
x(A.GW,B.bx)
w(A.GX,B.cU)
x(A.v9,A.LR)})()
B.cC(b.typeUniverse,JSON.parse('{"jd":{"iK":["n"],"x":[],"iK.T":"n"},"p5":{"F":[]},"u5":{"F":[]},"iK":{"x":[]},"dt":{"dr":[],"er":["G"],"cv":[]},"qQ":{"F":[]},"B9":{"cU":["G","dt"],"G":[],"bx":["G","dt"],"O":[],"K":[],"an":[],"bx.1":"dt","cU.1":"dt"},"q6":{"dH":[],"aE":[],"k":[]},"Bw":{"dH":[],"aE":[],"k":[]}}'))
var y={e:B.V("dt"),h:B.V("Cw")};(function constants(){D.au=new A.p5(0,"horizontal")
D.by=new A.p5(1,"vertical")
D.o=new A.qQ(1,"max")
D.JS=new A.u5(0,"up")
D.jT=new A.u5(1,"down")})()}
$__dart_deferred_initializers__["hBvlpKHDmFngl/YySS1U4SQ6w1Y="] = $__dart_deferred_initializers__.current

//# sourceMappingURL=main.dart.js_4.part.js.map
