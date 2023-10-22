# Lema o napihovanju

$$L regular \Rightarrow (\exists n)(\forall z) [z \in L  \land |z| \geq n \Rightarrow (\exists u,v,w)[z=uvw \land |uv| \leq n \land (\forall i \geq 0)u v^i w \in L]]$$

### Z BESEDAMI

Če je $L$ regularni jezik, potem obstaja neko število $n$ za vsak regularni izraz $z$, da velja: z je v L in je dolžine vsaj n. Potem obstajajo u,v,w, da velja $z=uvw$ , dolžina izraza $uv$ je velika največ n in za vsak pozitiven i velja, da je izraz $uv^iw$ tudi v L.

### PO KOSIH

$$(\exists n)(\forall z) [A]$$
$$(\exists n)(\forall z) [A \Rightarrow B]$$
$$A = z \in L  \land |z| \geq n$$
$$B = (\exists u,v,w)[z=uvw \land |uv| \leq n \land (\forall i \leq 0)u v^i w \in L]$$
$$(\exists n)(\forall z) [A \Rightarrow (\exists u,v,w)[z=uvw \land |uv| \leq n \land (\forall i \geq 0)u v^i w \in L]]$$

### PREPROSTO POVEDANO

> <big>Za vsak niz dolg jezik, ki spada v določeno jezikovno razreda (na primer, kontekstno neodvisni jezik), obstaja vsaj en niz, ki je daljši od "p" znakov in ga je mogoče "napihniti" (razdeliti na tri dele) na način, ki ohranja jezik v tem razredu.</big>
